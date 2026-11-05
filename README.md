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

- **AREA 1 — Main Software Application:** parsing, identity comparison,
  domain analysis, authentication, providers, evidence, risk, reporting, and
  interfaces.
- **AREA 2 — Documentation and Transparency:** architecture, methodology,
  security, privacy, API, contribution guidance, limitations, and licensing.
- **AREA 3 — Skills:** portable contracts for identity analysis, domain
  intelligence, authentication, external intelligence, reporting, and research.
- **AREA 4 — Development Strategy:** incremental, testable phases.
- **AREA 5 — Non-AI Policy:** runtime independence from AI services and models.
- **AREA 6 — Privacy and Security:** minimized data handling and authorized
  passive investigation.
- **AREA 7 — Engineering Workflow:** small commits, small PRs, tests, and
  provenance.

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
6. Evidence aggregation, deterministic risk rules, and reports
7. Skills, hardening, security review, and community release

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
