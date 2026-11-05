# Security Policy

## Philosophy

Teiritsu follows security through transparency. Detection rules, assumptions,
dependencies, limitations, and risk calculations are documented so they can be
independently reviewed.

## Threat model

The project helps investigate lookalike identities, Unicode impersonation,
typosquatting, suspicious domains, authentication inconsistencies, and public
organizational discrepancies. It does not prove mailbox ownership or guarantee
message safety.

## Safety boundaries

- Analyze sender addresses and domains before considering message content.
- Never execute attachments, downloaded scripts, or URLs.
- Never send email, modify DNS, or access private systems.
- Keep secrets out of source control and logs.
- Use provider timeouts, rate limits, and explicit opt-in configuration.
- Do not enumerate personal addresses.

## Reporting vulnerabilities

Report vulnerabilities privately to the maintainers before public disclosure.
Include a minimal reproduction, affected version, impact, and remediation
context. Do not include credentials or private email content.
