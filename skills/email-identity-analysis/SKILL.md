# Skill: Email Identity Analysis

**Area:** AREA 1 — Main Software Application
**Capability:** Passive sender identity analysis

## Purpose

Perform passive, deterministic analysis of a sender identity.

## Inputs

- Sender address or display-name/address pair
- Optional trusted reference address or organization domain

## Outputs

- Original and normalized address
- Local-part and domain hexadecimal representations
- Edit distance and character substitutions
- Unicode, mixed-script, IDN, and Punycode findings
- Explicit uncertainty and limitations

## Rules

Use deterministic string and Unicode algorithms only. Similarity is a review
signal, not proof that two identities belong to the same person or
organization.

## Restrictions

Do not send email, access private systems, enumerate personal addresses, or
upload message contents.

## Failure scenarios

Reject malformed addresses explicitly. Preserve the original value when
normalization changes it. Report insufficient reference data rather than
turning an unmatched comparison into a trust decision.
