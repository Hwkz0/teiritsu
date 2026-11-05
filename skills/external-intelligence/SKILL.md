# Skill: External Intelligence Search

**Area:** AREA 1 — Main Software Application
**Capability:** Provider-independent public intelligence collection

## Purpose

Collect and normalize relevant public facts from replaceable provider
adapters.

## Inputs

- Domain or organization query
- Explicitly enabled provider configuration

## Outputs

- Deduplicated observations
- Provider and source references
- Collection timestamps
- Reliability and limitations
- Explicit provider failures

## Rules

Search presence is not proof of legitimacy. Never fabricate results, infer
ownership from a single result, or hide provider unavailability.

## Restrictions

Search only public, domain-scoped, role-based contact information. Never
enumerate personal addresses or access private systems.

## Failure scenarios

Represent provider errors, rate limits, empty results, stale results, and
conflicting sources explicitly. Preserve the source and collection timestamp.
