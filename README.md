# Teiritsu

Teiritsu is an open-source platform for investigating email impersonation,
spoofing, phishing, and social-engineering indicators.

The project is designed to answer three questions:

1. Does a sender identity resemble the organization or person it claims to
   represent?
2. Which identity, domain, authentication, or intelligence indicators require
   attention?
3. What evidence supports each finding, and what remains unknown?

## 100% algorithmic — no AI integration

**Teiritsu has no AI element in its runtime architecture.** It does not use
large language models, machine learning, neural networks, generative services,
AI APIs, model downloads, or AI-generated risk decisions.

The application is fully algorithmic and explainable. Its decisions are
produced by conventional, reproducible techniques such as:

- Unicode normalization, mixed-script, homoglyph, IDN, and Punycode checks
- Character, byte, hexadecimal, edit-distance, and domain comparisons
- DNS, MX, SPF, DKIM, DMARC, alignment, and header analysis
- Explicit deterministic rules and documented mathematical measurements
- Structured evidence from optional factual, non-AI providers

Given the same input and the same evidence, the result must be the same.
Every finding is intended to include its result, explanation, source,
reliability, and applicable limitations. External providers may supply facts;
they never supply an opaque AI conclusion.

AI coding assistants may be used during project development, but no AI
dependency or inference service may be introduced into the application.

## How it works

The planned investigation pipeline is:

```text
sender identity
  -> optional email-file download and header extraction
  -> parsing and preservation of original input
  -> normalization and local identity analysis
  -> domain and authentication checks
  -> optional provider adapters
  -> evidence aggregation
  -> deterministic risk assessment
  -> explainable report
```

Local analysis is intended to work without network access, credentials, or
external providers. Provider integrations are optional and must expose
timeouts, unavailable evidence, errors, source references, and limitations.
Users may explicitly provide a local `.eml` file or HTTP(S) URL for bounded
header extraction. Message bodies, attachments, HTML, scripts, and embedded
URLs are never executed by the ingestion layer.

## Current status

This branch establishes the project foundation and documentation contracts.
The executable analysis modules and user interfaces are planned as incremental,
independently testable additions.

Planned development stages:

1. Email-file acquisition, header extraction, sender parsing, and normalization
2. String comparison and hexadecimal inspection
3. Unicode, homoglyph, IDN, registrable-domain, and typosquatting analysis
4. DNS, MX, SPF, DKIM, DMARC, alignment, and header evidence
5. Provider-independent public intelligence adapters
6. Evidence aggregation, deterministic risk rules, and structured reports
7. Hardening, security review, interfaces, and community release

## Repository documentation

- [Architecture](ARCHITECTURE.md) — modules, data flow, and boundaries
- [Methodology](METHODOLOGY.md) — analysis techniques and risk classifications
- [API contract](API.md) — planned inputs, outputs, and provider interfaces
- [Security policy](SECURITY.md) — threat model and safety boundaries
- [Privacy](PRIVACY.md) — data minimization and external communication
- [Contributing](CONTRIBUTING.md) — development and review workflow
- [Project guidance](AGENTS.md) — project requirements and non-AI policy

## Limitations

Teiritsu is an investigation aid, not a guarantee of safety or identity. It
cannot prove mailbox ownership, identify the human behind an address, establish
that a person is authorized to represent an organization, or detect every
phishing message. Similarity checks can produce false positives, while
carefully crafted or previously unknown attacks can produce false negatives.

Passing SPF, DKIM, or DMARC does not prove individual sender authorization.
Search results and domain reputation do not prove ownership. The absence of
indicators is not proof that a sender or message is trustworthy.

## Development

Before contributing, read [AGENTS.md](AGENTS.md) and
[CONTRIBUTING.md](CONTRIBUTING.md). Changes should remain small,
deterministic, typed, testable, and documented. Runtime AI, machine-learning,
and generative-service dependencies are out of scope.

## License

Teiritsu is distributed under the [MIT License](LICENSE).
