# Project Foundation: Open-Source Email Identity Verification & Threat Intelligence Platform

## Guiding principles

These principles guide every area and remain adaptable as implementation
evolves:

**Transparency over obscurity.** Detection rules, assumptions, and limitations
must be inspectable.
**Evidence over assumptions.** Every conclusion must identify its supporting
facts and unknowns.
**Verification over trust.** No result may imply sender legitimacy without
adequate identity evidence.
**Determinism over opaque automation.** Identical inputs and evidence must
produce the same assessment.
**Modularity over dependency.** Providers, interfaces, skills, and analyzers
must be replaceable.
**Privacy over unnecessary data collection.** Process locally and disclose
every external transfer.
**Community reuse over proprietary restriction.** Compatibility and open
standards are preferred; a service that creates unavoidable proprietary
lock-in is not an acceptable foundation dependency.

## Information handling

Repository and agent work must classify information before it is stored,
shared, logged, or included in a report:

- **Need-to-know:** disclose only the minimum information required for the
  current authorized task.
- **On the record:** information that may be quoted in project artifacts.
- **Off the record:** context that guides work but must not be attributed or
  copied into artifacts without authorization.
- **On background:** context that may inform general understanding but must not
  identify its source.
- **Deep background:** context that must not be disclosed or used as an
  attributable source.
- **Under embargo:** information that may be used only after its release
  condition or date.

The applicable repository confidentiality, disclosure, retention, and access
protocols take precedence over these labels. Sensitive material must remain in
approved protected storage, never in commits, logs, prompts, or external
provider requests. When classification is unclear, stop distribution and
escalate to the repository maintainer.

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

### 1.1 Core application and integration surfaces

Build a modular platform that initially supports manual sender-address
analysis, with future compatibility for mail clients, browser extensions, and
automated processing.

The application is an integration-ready component rather than only a
one-shot pipeline. Its stable contracts must support:

- A command-line interface for local and scripted use.
- A dashboard or other user interface for interactive investigations.
- A plugin/extension boundary for mail clients, browser extensions, and
  future host applications.
- Structured library and HTTP interfaces where they preserve the same
  permissions and evidence model.

The primary workflow is:

1. Accept an email address or sender identity.
2. Extract and normalize relevant identity information.
3. Run local character, hexadecimal, and domain comparisons.
4. Gather optional intelligence from external providers.
5. Correlate verification evidence.
6. Generate an explainable deterministic risk assessment.
7. Return findings, confidence indicators, and supporting evidence.

### 1.2 Identity analysis

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

### 1.3 External intelligence

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

External search results are never proof of ownership or legitimacy. A result
can be independently corroborated, contradicted, stale, manipulated, or
unrelated to the sender. Search ranking, snippets, domain presence, public
profiles, and a matching logo or name are discovery signals only. Adapters
must retain the exact source URL, retrieval time, query scope, provider,
result classification, and whether the observation was directly verified.
The evidence layer must label search-derived facts as unverified until a
separate deterministic check confirms them, and must lower certainty when
sources conflict or cannot be reproduced.

### 1.4 Email authentication

Implement a separate technical verification layer for:

- SPF, DKIM, and DMARC
- DNS and MX records
- Domain alignment
- Email-header analysis
- Authentication results when available

Domain authentication must remain distinct from individual sender
authorization. A passing SPF result does not establish that a person may
represent an organization.

### 1.5 Risk assessment

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

### 1.6 Application architecture

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

### 1.7 Privacy and security

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

#### 2.1 Required documentation

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
- `DOCUMENTATION.md`: evaluator, orchestrator, review cadence, and change
  records.
- `CONTRIBUTING.md`: development, coding, tests, pull requests, documentation,
  and security review.

Document false-positive and false-negative scenarios and what each mechanism
cannot detect. Present the software as an additional investigation layer, not
comprehensive phishing protection or a replacement for mail security.

Use the MIT License. Distinguish original code, dependencies, external APIs,
datasets, and their respective licenses and terms.

#### 2.2 Security through transparency

Documentation must state what each mechanism can detect, what it cannot prove,
and where false positives or false negatives are expected. External provider
terms, dependency licenses, data flows, and reliability assumptions must remain
visible as the implementation evolves.

#### 2.3 Open-source licensing and dependency terms

The MIT license governs original project code. Dependencies, APIs, datasets,
and provider services retain their own licenses and terms. Open standards and
interoperability are preferred, but this principle is not a ban on every
external service. A service that imposes unavoidable proprietary restrictions
or makes the project dependent on closed functionality must not be selected as
a foundation dependency.

## AREA 3 — Agent and Application Skills

The skills ecosystem is maintained in a separate implementation area and pull
request. This foundation records only the boundary: future skills must be
documented, portable, permission-limited, evidence-preserving, and compatible
with the application's mandatory non-AI runtime policy. Skill implementation
must not be introduced as part of this documentation foundation.

### 3.1 Skill lifecycle governance

Skills are modular capabilities that agents use while working on defined
project areas. Each skill must be relevant, justified by a repeatable need,
versioned, and evaluated for inputs, outputs, permissions, provenance,
security, documentation, and failure behavior. Evaluators run both when a
skill is used and during periodic or release-bound reviews. Periodic reviews
check whether a skill remains relevant, compatible with new norms and project
requirements, and safe to retain; obsolete skills are revised, deprecated, or
removed.

Orchestrators may coordinate skills and evaluators, but cannot become a hidden
decision-maker or replace deterministic application logic. They must pass
structured inputs, enforce permissions and timeouts, preserve provenance, and
record failures. Skill contracts and implementations are delivered in the
separate skills pull request.

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

The full engineering workflow, granular commit rules, documentation
evaluation, and pull-request requirements are maintained in
[CONTRIBUTING.md](CONTRIBUTING.md). Before implementation, contributors must
identify purpose, dependencies, security implications, inputs, outputs, tests,
and documentation requirements.
