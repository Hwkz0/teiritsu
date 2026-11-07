# Architecture

Teiritsu is a modular, deterministic investigation framework. The analysis
pipeline is one execution path inside a component that can be embedded as a
local library, CLI, dashboard service, or host-application plugin:

```text
sender input
  -> parsing and normalization
  -> local identity and domain analysis
  -> optional provider adapters
  -> evidence aggregation
  -> deterministic risk assessment
  -> structured report
```

## Core responsibilities

- **Interface:** CLI, dashboard, library, and future client/plugin integrations.
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

## Integration boundary

Host applications must communicate through versioned, typed contracts rather
than importing internal implementation details. An integration can submit an
identity, provide explicitly authorized reference or authentication evidence,
select providers, and receive a structured report. It cannot bypass safety
boundaries, silently enable providers, or turn a search result into an
ownership assertion.

The CLI is the reference interface for automation and reproducible examples.
The dashboard is an interactive presentation layer over the same contracts.
Plugins must declare capabilities, permissions, data sent externally, and
failure behavior before they are enabled.

## Deterministic foundation

Local parsing, normalization, comparison, evidence construction, and risk
classification are the core of the application and must work without network
access. Given identical input and evidence, each stage produces identical
output. External providers enrich evidence but never replace the local
deterministic decision path.

## Data flow and boundaries

Local analysis must work without external services. Providers are optional and
must never be treated as authoritative ownership verification. Missing or
unavailable evidence remains visible as uncertainty. The system analyzes the
least data necessary and must not upload complete message contents by default.

The runtime contains no AI or machine-learning functionality. Deterministic
rules are the application decision mechanism; any development-time assistant
or external factual provider remains outside the runtime trust boundary.
