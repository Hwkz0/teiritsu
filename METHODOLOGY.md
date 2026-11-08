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
timestamp, query scope, reliability, verification status, and limitations must
be retained.

Search results are discovery leads. Ranking, snippets, names, logos, public
profiles, and matching contact text can be stale, copied, manipulated, or
unrelated. A result becomes corroborating evidence only when an independent
deterministic check establishes the relevant fact; conflicting or unavailable
sources remain uncertainty rather than being resolved by assumption.

## Deterministic assessment

The risk engine applies named rules to normalized observations. Rules must
define their inputs, thresholds, contribution, precedence, and explanation.
They must not infer ownership from popularity, search ranking, or the absence
of a negative result. A provider outage, missing authentication header, stale
record, or unresolved conflict is represented explicitly and can lead to
`insufficient information`.

## Risk classifications

Explicit rules produce `no significant indicators detected`, `insufficient
information`, `suspicious`, or `high risk`. The absence of findings is not a
trust decision. Conflicting, missing, stale, or unavailable evidence lowers
certainty and must be explained.

## Evaluation

Controlled fixtures must cover lookalike addresses, Unicode and IDN cases,
legitimate aliases, provider failures, conflicting sources, and missing
authentication data. Evaluation records the expected indicators, evidence
provenance, false-positive risks, false-negative risks, and whether the
result is reproducible without network access or AI services.
