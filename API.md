# API Contract

The public Python and future HTTP interfaces should expose typed, structured
observations rather than opaque decisions.

## Analysis input

- Sender address or display-name/address pair
- A local RFC 5322/`.eml` file or an explicitly supplied HTTP(S) URL
- Optional expected organization domains
- Optional explicitly enabled provider configuration
- Optional authentication headers or structured results

## Email file ingestion

The standard-library ingestion module provides deterministic, bounded
acquisition and parsing:

```python
from teiritsu import download_email_file, parse_email_file

local = parse_email_file("message.eml")
remote = download_email_file("https://example.test/message.eml")
print(local.values("Authentication-Results"))
```

`parse_email_file` reads a local file. `download_email_file` accepts only
absolute HTTP(S) URLs, rejects URLs containing credentials, applies a timeout,
rejects redirects, and limits the response to 10 MiB by default. Both
functions return structured metadata and headers without returning or
executing the message body, attachments, HTML, or URLs.

## Analysis output

- Original and normalized identity values
- Email source and byte size
- All parsed headers, including repeated `Received`,
  `Authentication-Results`, `DKIM-Signature`, and `ARC-Authentication-Results`
- Multipart and attachment-presence indicators (metadata only)
- Hexadecimal representations and comparison measurements
- Findings with name, result, severity, explanation, source, reliability, and
  timestamp where applicable
- Risk classification and uncertainty
- Provider failures and missing evidence

## Provider adapters

Each adapter must be independently replaceable and return standardized factual
observations. It must use timeouts, respect rate limits and terms, avoid
unnecessary personal data, and expose errors instead of fabricating results.

## Compatibility

Local analysis must remain functional without credentials, network access, AI
services, or provider-specific infrastructure. Downloading is explicit and
network-bound; it must not become an automatic crawler. Future REST, MCP, or
client interfaces must preserve the same permission boundaries and evidence
model.
