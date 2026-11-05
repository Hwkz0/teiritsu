# Architecture

Teiritsu is a modular, deterministic investigation pipeline:

```text
sender input
  -> parsing and normalization
  -> local identity and domain analysis
  -> optional provider adapters
  -> evidence aggregation
  -> deterministic risk assessment
  -> structured report
```

## Responsibilities

- **Interface:** CLI and future API or client integrations.
- **Parsing:** extract sender identity and preserve original input.
- **Identity:** Unicode normalization, hexadecimal inspection, similarity, and
  homoglyph detection.
- **Domain:** registrable-domain, DNS, MX, subdomain, and typosquatting checks.
- **Authentication:** SPF, DKIM, DMARC, alignment, and header interpretation.
- **Providers:** replaceable adapters for search, reputation, and DNS sources.
- **Evidence:** normalized observations with source, timestamp, reliability,
  and limitations.
- **Risk:** explicit rules that produce explainable classifications.
- **Reporting:** human-readable and machine-readable findings.
- **Configuration:** opt-in providers, timeouts, rate limits, and secrets.

## Data flow and boundaries

Local analysis must work without external services. Providers are optional and
must never be treated as authoritative ownership verification. Missing or
unavailable evidence remains visible as uncertainty. The system analyzes the
least data necessary and must not upload complete message contents by default.

The runtime contains no AI or machine-learning functionality. Deterministic
rules are the application decision mechanism.
