# Methodology

Teiritsu reports evidence and limitations; it does not certify senders as
safe.

## Identity and hexadecimal comparison

The original sender is preserved. Comparison values use documented Unicode
normalization and case folding. Address, local-part, and domain values may be
encoded as UTF-8 hexadecimal so analysts can inspect exact byte differences.
Hexadecimal is not encryption or authentication.

## Similarity and substitutions

Edit distance and related deterministic algorithms identify insertions,
removals, reorderings, and substitutions. Similarity is a triage signal:
short names, common words, and legitimate aliases can create false positives.

## Unicode and domains

Mixed scripts, non-ASCII characters, IDN/Punycode labels, suspicious
subdomains, registrable-domain differences, and typosquatting patterns are
reported as indicators. Normalization must not erase the original forensic
value.

## Authentication and intelligence

SPF, DKIM, DMARC, MX, DNS, alignment, headers, search results, and reputation
responses describe technical or public evidence. They do not prove that a
specific person is authorized to represent an organization. Provider source,
timestamp, reliability, and limitations must be retained.

## Risk classifications

Explicit rules produce `no significant indicators detected`, `insufficient
information`, `suspicious`, or `high risk`. The absence of findings is not a
trust decision. Conflicting, missing, stale, or unavailable evidence lowers
certainty and must be explained.
