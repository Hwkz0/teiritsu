# Project Foundation: Open-Source Email Identity Verification & Threat Intelligence Platform

## 1. Project Vision

Teiritsu is an open-source cybersecurity application for identifying potential
email impersonation, spoofing, phishing, and social-engineering attacks.

The application combines deterministic string analysis, sender identity
verification, external intelligence gathering, and explainable risk
assessment. It investigates sender identities using publicly available
information, open-source search infrastructure, and relevant threat-intelligence
sources rather than relying exclusively on static trusted-address lists.

The system should help users answer:

1. Does this sender address belong to the organization or individual it claims
   to represent?
2. Are suspicious similarities, inconsistencies, or technical indicators
   associated with this sender?
3. What evidence supports the assessment?

Transparency, explainability, privacy, and modularity are design requirements.
An unverified sender must never be presented as trustworthy merely because
external search results appear legitimate.

## AREA 1 — Main Software Application

### Core application

Build a modular platform that initially supports manual sender-address
analysis, with future compatibility for mail clients, browser extensions, and
automated processing.

The primary workflow is:

1. Accept an email address or sender identity.
2. Extract and normalize relevant identity information.
3. Run local character, hexadecimal, and domain comparisons.
4. Gather optional intelligence from external providers.
5. Correlate verification evidence.
6. Generate an explainable deterministic risk assessment.
7. Return findings, confidence indicators, and supporting evidence.

### Identity analysis

Implement complementary techniques:

- Convert email addresses into hexadecimal representations for inspection.
- Compare characters and byte sequences.
- Identify substitutions, insertions, removals, and reorderings.
- Calculate edit-distance and other documented similarity measures.
- Detect visually similar Unicode characters and mixed scripts.
- Normalize Unicode while preserving original input.
- Detect IDN and Punycode impersonation.
- Extract registrable domains.
- Compare domains with known legitimate organizations.
- Detect suspicious subdomains and common typosquatting patterns.
- Examine domain registration and DNS information when available.

Hexadecimal representation is an inspection and comparison mechanism, not
cryptographic authentication.

### External intelligence

Use provider-independent adapters with standardized outputs. Potential
providers include SearXNG, VirusTotal, Google Safe Browsing, DNS services,
public organizational websites, published contact information, and other
open-source threat-intelligence feeds.

Adapters must:

- Search publicly available organizational information.
- Compare published contacts with the investigated sender.
- Identify potentially impersonated organizations.
- Collect domain-reputation indicators.
- Preserve source references, timestamps, reliability, and limitations.
- Distinguish verified information from search-result assumptions.
- Expose unavailable providers and incomplete results explicitly.

External search results are never proof of ownership or legitimacy.

### Email authentication

Implement a separate technical verification layer for:

- SPF, DKIM, and DMARC
- DNS and MX records
- Domain alignment
- Email-header analysis
- Authentication results when available

Domain authentication must remain distinct from individual sender
authorization. A passing SPF result does not establish that a person may
represent an organization.

### Risk assessment

Use explicit, documented, deterministic rules for:

- Character similarity to trusted identities
- Unicode impersonation indicators
- Domain reputation
- DNS inconsistencies
- SPF, DKIM, and DMARC results
- External intelligence
- Organizational contact discrepancies
- Known malicious infrastructure

Every indicator must include a result, source, reliability, timestamp where
applicable, and explanation. Risk classifications are:

- No significant indicators detected
- Insufficient information
- Suspicious
- High risk

The absence of indicators is not proof of legitimacy. Runtime risk decisions
must not depend on opaque AI classification.

### Application architecture

Keep these responsibilities separate:

- Application interface
- Input and parsing
- Identity normalization
- String comparison
- Domain analysis
- Email authentication
- External intelligence adapters
- Evidence aggregation
- Risk assessment
- Reporting
- Configuration and provider management

Prioritize maintainability, testability, type safety, separation of concerns,
provider independence, secure configuration, and reproducible development.

### Privacy and security

- Do not transmit complete email contents unnecessarily.
- Prefer sender-address and domain analysis.
- Minimize retained personal information.
- Never expose API keys in client-side code or source control.
- Make provider access configurable and disclose external communication.
- Avoid logging sensitive message content.
- Use timeouts, rate limits, and safe error handling.
- Never execute attachments, URLs, or downloaded content automatically.

## AREA 2 — Documentation, Transparency, and Security Philosophy

Teiritsu rejects security through obscurity. Detection techniques, algorithms,
risk methodology, limitations, dependencies, and provider assumptions must be
understandable, inspectable, and independently verifiable.

Open documentation enables security review, community contribution,
reproducible testing, weakness discovery, trust through transparency, and
education.

Required documentation:

- `README.md`: overview, problem, objectives, features, architecture,
  installation, usage, limitations, contribution, and license.
- `ARCHITECTURE.md`: modules, data flow, providers, pipeline, risk model, and
  extension points.
- `SECURITY.md`: philosophy, threat model, attack scenarios, limitations,
  disclosure, reporting, and data handling.
- `PRIVACY.md`: collection, external communication, retention, sensitive data,
  and user controls.
- `METHODOLOGY.md`: hexadecimal comparison, similarity, Unicode, domain,
  authentication, intelligence correlation, and risk classification.
- `API.md`: interfaces, adapters, data structures, endpoints, errors, and
  extension requirements.
- `CONTRIBUTING.md`: development, coding, tests, pull requests, documentation,
  and security review.

Document false-positive and false-negative scenarios and what each mechanism
cannot detect. Present the software as an additional investigation layer, not
comprehensive phishing protection or a replacement for mail security.

Use the MIT License. Distinguish original code, dependencies, external APIs,
datasets, and their respective licenses and terms.

## AREA 3 — Agent and Application Skills

Skills are documented, portable capabilities for AI agents and other
applications; they are not unrestricted access to internal functionality.
Their use does not change the application's mandatory non-AI runtime policy.

Required skills:

1. Email Identity Analysis
2. Domain Intelligence
3. Email Authentication Verification
4. External Intelligence Search
5. Security Report Generation
6. Security Research Assistant

Each `SKILL.md` must define its name, purpose, intended use, inputs, outputs,
execution instructions, restrictions, examples, and failure scenarios.
Skills should support structured JSON, documented APIs, and MCP-compatible
interfaces where justified.

Agents using skills must:

- Operate passively by default.
- Use authorized public sources and respect provider terms and rate limits.
- Avoid private systems, automatic email, DNS changes, and account changes.
- Never execute suspicious attachments or downloaded scripts.
- Preserve evidence provenance and disclose uncertainty.
- Keep agent-generated conclusions distinct from deterministic results.

## AREA 4 — Development Strategy

Implement incrementally:

1. Foundation: repository, architecture, documentation, parsing, string and
   hexadecimal comparison, and testing.
2. Identity verification: Unicode, homoglyphs, domain similarity, trusted
   references, and findings.
3. External intelligence: provider abstraction, SearXNG, DNS and reputation
   providers, evidence aggregation, and source attribution.
4. Authentication and risk: SPF, DKIM, DMARC, reports, and controlled attack
   scenarios.
5. Skill ecosystem: reusable skills, structured interfaces, and justified MCP.
6. Hardening and community: security reviews, coverage, limitations,
   contribution workflows, release, and deployment.

## AREA 5 — Mandatory Non-AI Architecture Policy

The application MUST be entirely non-AI. All runtime functionality must use
conventional engineering, deterministic algorithms, mathematical models,
explicit rules, and conventional data processing.

The application MUST NOT contain:

- LLMs, generative services, machine-learning models, or neural networks
- AI-powered APIs, search, analysis, or classification
- AI agents operating as application functionality
- External AI inference endpoints
- AI-generated risk assessments
- AI-dependent functionality

Permitted techniques include string comparison, Levenshtein,
Damerau-Levenshtein, Jaro-Winkler, Unicode analysis, regular expressions,
hashing, hexadecimal output, DNS, SPF/DKIM/DMARC, deterministic rules,
statistics, public threat-intelligence databases, conventional search APIs,
and structured data processing.

External providers must supply factual data, not AI-generated conclusions.
Given identical inputs and identical evidence, assessments must be identical
and explainable through named indicators and calculations.

AI coding assistants may be used during development, documentation, and
testing, but generated code must not introduce AI runtime dependencies,
credentials, model downloads, or inference infrastructure.

If a feature cannot be implemented without AI, it must not be implemented.

## AREA 6 — Privacy, Security, and Authorization

Treat privacy as a design requirement. Minimize data, make external requests
explicit, protect secrets, respect authorization boundaries, and fail safely.
Never use this project to access private systems, enumerate personal contacts,
send unsolicited email, execute suspicious content, or modify infrastructure
without authorization.

## AREA 7 — Engineering Workflow

Before implementation, identify purpose, dependencies, security implications,
inputs, outputs, tests, and documentation requirements. Prefer small,
independently testable modules and avoid unnecessary dependencies.

Every change must preserve compatibility, distinguish simulated data from real
provider responses, avoid unsupported security claims, and update related
documentation.

Use small, focused commits and pull requests. Commit subjects must use:

```text
[AREA N] type: Title-Cased Summary
```

Pull request titles must use:

```text
[AREA N] Title-Cased Summary
```

Commit descriptions must explain:

```text
Why This Area
<why the selected area is affected>

Goals
- <goal>
- <goal>
```

Use conventional types such as `feat`, `fix`, `docs`, `test`, `chore`, and
`cleanup`. Do not implement the entire platform in one development step.

## Guiding principles

**Transparency over obscurity.**
**Evidence over assumptions.**
**Verification over trust.**
**Modularity over dependency.**
**Privacy over unnecessary data collection.**
**Explainability over opaque automation.**
**Community-driven development over proprietary restrictions.**
