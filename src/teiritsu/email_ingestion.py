"""Safe, deterministic acquisition and header extraction for RFC 5322 mail."""

from __future__ import annotations

from dataclasses import dataclass
from email import policy
from email.parser import BytesParser
from pathlib import Path
from typing import BinaryIO
from urllib.error import HTTPError, URLError
from urllib.parse import urlparse
from urllib.request import HTTPRedirectHandler, Request, build_opener

DEFAULT_MAX_BYTES = 10 * 1024 * 1024
DEFAULT_TIMEOUT_SECONDS = 10.0
class EmailIngestionError(ValueError):
    """Raised when an email file cannot be safely acquired or parsed."""


class _RejectRedirectHandler(HTTPRedirectHandler):
    def redirect_request(self, request, *_):
        raise EmailIngestionError("Redirects are not supported for email downloads.")


@dataclass(frozen=True)
class EmailHeader:
    """A header value with its original field name."""

    name: str
    value: str


@dataclass(frozen=True)
class EmailFile:
    """Metadata and selected headers extracted from an email file."""

    source: str
    size_bytes: int
    headers: tuple[EmailHeader, ...]
    has_attachments: bool
    is_multipart: bool

    def values(self, name: str) -> tuple[str, ...]:
        """Return all extracted values for a header name, case-insensitively."""

        wanted = name.casefold()
        return tuple(header.value for header in self.headers if header.name.casefold() == wanted)


def parse_email_bytes(
    content: bytes,
    *,
    source: str = "<memory>",
    max_bytes: int = DEFAULT_MAX_BYTES,
) -> EmailFile:
    """Parse an RFC 5322 message without returning its body or attachments."""

    _validate_limit(max_bytes)
    if not content:
        raise EmailIngestionError("The email file is empty.")
    if len(content) > max_bytes:
        raise EmailIngestionError(f"Email file exceeds the {max_bytes}-byte limit.")

    message = BytesParser(policy=policy.default).parsebytes(content)
    headers = tuple(
        EmailHeader(name=name, value=str(value)) for name, value in message.items()
    )
    return EmailFile(
        source=source,
        size_bytes=len(content),
        headers=headers,
        has_attachments=any(part.get_filename() for part in message.walk()),
        is_multipart=message.is_multipart(),
    )


def parse_email_file(
    path: str | Path,
    *,
    max_bytes: int = DEFAULT_MAX_BYTES,
) -> EmailFile:
    """Read and parse a local email file, bounded by ``max_bytes``."""

    file_path = Path(path)
    if not file_path.is_file():
        raise EmailIngestionError(f"Email file does not exist: {file_path}")

    try:
        with file_path.open("rb") as stream:
            content = _read_limited(stream, max_bytes)
    except OSError as error:
        raise EmailIngestionError(f"Unable to read email file: {file_path}") from error
    return parse_email_bytes(content, source=str(file_path), max_bytes=max_bytes)


def download_email_file(
    url: str,
    *,
    timeout: float = DEFAULT_TIMEOUT_SECONDS,
    max_bytes: int = DEFAULT_MAX_BYTES,
) -> EmailFile:
    """Download one bounded HTTP(S) email file and extract its headers.

    This function does not follow application content, execute attachments, or
    retain the downloaded body after parsing.
    """

    _validate_limit(max_bytes)
    if timeout <= 0:
        raise EmailIngestionError("Timeout must be greater than zero.")
    parsed_url = urlparse(url)
    if parsed_url.scheme not in {"http", "https"} or not parsed_url.netloc:
        raise EmailIngestionError("Only absolute HTTP(S) URLs are supported.")
    if parsed_url.username or parsed_url.password:
        raise EmailIngestionError("URLs containing credentials are not supported.")

    request = Request(url, headers={"Accept": "message/rfc822, message/*;q=0.9"})
    try:
        opener = build_opener(_RejectRedirectHandler)
        with opener.open(request, timeout=timeout) as response:
            content = _read_limited(response, max_bytes)
    except (HTTPError, URLError, TimeoutError, OSError) as error:
        raise EmailIngestionError(f"Unable to download email file: {url}") from error
    return parse_email_bytes(content, source=url, max_bytes=max_bytes)


def _read_limited(stream: BinaryIO, max_bytes: int) -> bytes:
    _validate_limit(max_bytes)
    content = stream.read(max_bytes + 1)
    if len(content) > max_bytes:
        raise EmailIngestionError(f"Email file exceeds the {max_bytes}-byte limit.")
    return content


def _validate_limit(max_bytes: int) -> None:
    if max_bytes <= 0:
        raise EmailIngestionError("Maximum size must be greater than zero.")
