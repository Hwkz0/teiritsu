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

### AREA 1 — Main Software Application

1.1 Core application and interfaces
1.2 Identity analysis and normalization
1.3 External intelligence integration
1.4 Email authentication analysis
1.5 Explainable risk assessment
1.6 Modular application architecture
1.7 Privacy and security controls

### AREA 2 — Documentation, Transparency, and Security Philosophy

2.1 Security through transparency
2.2 Required documentation contracts
2.3 Limitations, evidence boundaries, and provider assumptions
2.4 Open-source licensing and dependency terms

### AREA 3 — Agent and Application Skills

3.1 Skill objective and capability boundaries
3.2 Portable contracts and permission restrictions
3.3 Skill implementation is maintained in a separate pull request

### AREA 4 — Development Strategy

Incremental phases from foundation, through identity verification, external
intelligence, authentication and risk, skills, and hardening/community release.

### AREA 5 — Mandatory Non-AI Architecture

Deterministic runtime behavior, prohibited AI technologies, permitted
conventional techniques, enforcement, and dependency review.

### AREA 6 — Privacy, Security, and Authorization

Local processing, data minimization, explicit provider access, authorization
boundaries, retention, and safe handling.

### AREA 7 — Engineering Workflow

Small independently testable changes, granular commits, focused pull requests,
testing, provenance, documentation maintenance, and review requirements.

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
7. Skills, hardening, security review, and community release

## Development

Read [AGENTS.md](AGENTS.md) before contributing. See
[CONTRIBUTING.md](CONTRIBUTING.md) for the granular commit and pull-request
workflow.

## Documentation

- [Architecture](ARCHITECTURE.md)
- [Methodology](METHODOLOGY.md)
- [Security](SECURITY.md)
- [Privacy](PRIVACY.md)
- [API](API.md)
- [Documentation Governance](DOCUMENTATION.md)
- [Contributing](CONTRIBUTING.md)

## Limitations

Teiritsu cannot prove mailbox ownership, identify the human behind an address,
or guarantee that a message is safe. It is an investigation layer and does not
replace secure mail infrastructure, user training, or human review.

## License

Teiritsu is distributed under the [MIT License](LICENSE).
