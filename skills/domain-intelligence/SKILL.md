# Skill: Domain Intelligence

**Area:** AREA 1 — Main Software Application
**Capability:** Passive domain and organizational investigation

## Purpose

Investigate a sender domain using passive DNS and explicitly configured public
sources.

## Inputs

- Domain extracted from a sender address
- Optional expected organization domains

## Outputs

- Registrable-domain comparison
- DNS and MX observations
- Typosquatting and suspicious-subdomain findings
- Source, timestamp, reliability, and limitation for each external result

## Rules

Provider responses are factual evidence, not ownership verification. Missing
or unavailable data must remain visible as uncertainty.

## Restrictions

Use authorized public sources only. Respect provider terms and rate limits.
Do not perform active scanning or collect personal contact lists.

## Failure scenarios

Expose DNS/provider timeouts and unavailable records as unavailable evidence.
Do not silently substitute stale, guessed, or search-derived ownership data.
