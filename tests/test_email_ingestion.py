import http.server
import threading
import unittest
from pathlib import Path
from tempfile import TemporaryDirectory

from teiritsu.email_ingestion import (
    EmailIngestionError,
    download_email_file,
    parse_email_bytes,
    parse_email_file,
)

MESSAGE = (
    b"From: Alice <alice@example.test>\r\n"
    b"To: Bob <bob@example.test>\r\n"
    b"Subject: Review\r\n"
    b"Authentication-Results: mx.example.test; spf=pass\r\n"
    b"Received: by mx.example.test\r\n"
    b"\r\n"
    b"Do not execute this body.\r\n"
)


class EmailIngestionTests(unittest.TestCase):
    def test_extracts_repeated_and_security_relevant_headers(self):
        result = parse_email_bytes(MESSAGE)

        self.assertEqual(result.values("from"), ("Alice <alice@example.test>",))
        self.assertEqual(result.values("authentication-results"), ("mx.example.test; spf=pass",))
        self.assertEqual(result.values("received"), ("by mx.example.test",))
        self.assertFalse(result.has_attachments)

    def test_rejects_oversized_content(self):
        with self.assertRaises(EmailIngestionError):
            parse_email_bytes(MESSAGE, max_bytes=10)

    def test_parses_a_local_file(self):
        with TemporaryDirectory() as directory:
            path = Path(directory) / "message.eml"
            path.write_bytes(MESSAGE)

            result = parse_email_file(path)

        self.assertEqual(result.source, str(path))
        self.assertEqual(result.size_bytes, len(MESSAGE))

    def test_downloads_only_http_s_urls(self):
        with self.assertRaises(EmailIngestionError):
            download_email_file("file:///tmp/message.eml")

    def test_downloads_and_parses_email(self):
        class Handler(http.server.BaseHTTPRequestHandler):
            def do_GET(self):
                self.send_response(200)
                self.send_header("Content-Type", "message/rfc822")
                self.send_header("Content-Length", str(len(MESSAGE)))
                self.end_headers()
                self.wfile.write(MESSAGE)

            def log_message(self, *_):
                pass

        server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), Handler)
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        try:
            result = download_email_file(f"http://127.0.0.1:{server.server_port}/message.eml")
        finally:
            server.shutdown()
            thread.join()
            server.server_close()

        self.assertEqual(result.values("subject"), ("Review",))


if __name__ == "__main__":
    unittest.main()
