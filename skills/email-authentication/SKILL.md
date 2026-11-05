# Skill: Email Authentication Verification

**Area:** AREA 1 — Main Software Application
**Capability:** Technical email-authentication interpretation

## Purpose

Interpret available SPF, DKIM, DMARC, DNS, and alignment evidence.

## Inputs

- Authentication-Results headers or structured authentication results
- Sender, return-path, signing, and aligned domains when available

## Outputs

- Individual SPF, DKIM, and DMARC observations
- Domain-alignment findings
- Missing-input warnings
- Explanation of what domain authentication does not prove

## Rules

Authentication of a domain does not establish that a specific individual is
authorized to represent an organization.

## Failure scenarios

Report missing headers, malformed authentication results, and alignment
ambiguity separately. Never infer a passing result from absent evidence.
