# Teiritsu

Teiritsu is an open-source, deterministic email identity verification and
threat-intelligence platform for investigating impersonation, spoofing,
phishing, and social engineering.

It answers three investigation questions:

1. Does the sender address match the organization or person it claims to
   represent?
2. Which suspicious similarities, inconsistencies, or technical indicators are
   present?
3. What evidence supports each finding, and what remains unknown?

Teiritsu is intentionally **entirely non-AI**. Runtime behavior uses
deterministic string algorithms, Unicode analysis, DNS and email
authentication, explicit rules, mathematical models, and factual provider
responses.

## Project areas

- **AREA 1 — Core Application:** parsing, normalization, deterministic identity
  comparison, domain analysis, authentication, evidence, risk, and reporting.
- **AREA 2 — Interfaces and Integrations:** CLI, dashboard, library, plugin,
  and future client contracts over the same analysis boundary.
- **AREA 3 — External Intelligence:** replaceable search, reputation, and DNS
  adapters with provenance and failure reporting.
- **AREA 4 — Documentation and Transparency:** architecture, methodology,
  security, privacy, API, limitations, and licensing.
- **AREA 5 — Skills, Evaluators, and Orchestrators:** modular contracts,
  permission boundaries, and continuous documentation/skill evaluation.
- **AREA 6 — Non-AI Architecture:** runtime independence from AI services,
  models, credentials, and inference infrastructure.
- **AREA 7 — Privacy, Security, and Authorization:** local processing,
  minimized data handling, lawful deployment, and passive investigation.
- **AREA 8 — Incremental Engineering:** granular commits, focused PRs,
  tests, provenance, and reproducible development.

## Investigation model

The application accepts a sender identity, preserves the original input,
normalizes values for defined comparisons, collects optional technical and
public evidence, and produces a deterministic report. A risk result is never
an assertion that a sender is safe or malicious.

Hexadecimal representations are inspection and comparison aids, not
cryptographic authentication. Successful SPF, DKIM, or DMARC checks establish
technical domain signals, not individual authorization. External search
presence does not prove ownership.

## Status and roadmap

Development is intentionally incremental:

1. Foundation and documented contracts
2. Identity normalization and comparison
3. Unicode, homoglyph, IDN, and registrable-domain analysis
4. DNS, SPF, DKIM, DMARC, and header evidence
5. Provider-independent public intelligence adapters
6. Evidence aggregation, deterministic risk rules, and shareable reports
7. Skills, evaluators, orchestrators, hardening, and community release

## Development

Read [AGENTS.md](AGENTS.md) before contributing. See
[CONTRIBUTING.md](CONTRIBUTING.md) for the small-commit and pull-request
workflow. Skills are documented under [`skills/`](skills/).

## Documentation

- [Architecture](ARCHITECTURE.md)
- [Methodology](METHODOLOGY.md)
- [Security](SECURITY.md)
- [Privacy](PRIVACY.md)
- [API](API.md)
- [Contributing](CONTRIBUTING.md)

## Limitations

Teiritsu cannot prove mailbox ownership, identify the human behind an address,
or guarantee that a message is safe. It is an investigation layer and does not
replace secure mail infrastructure, user training, or human review.

## License

Teiritsu is distributed under the [MIT License](LICENSE).
