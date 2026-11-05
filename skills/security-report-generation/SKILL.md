# Skill: Security Report Generation

**Area:** AREA 1 — Main Software Application
**Capability:** Explainable deterministic reporting

## Purpose

Produce understandable reports that separate facts, calculations,
assumptions, and missing information.

## Inputs

- Deterministic local findings
- External evidence with provenance
- Authentication observations

## Outputs

- Risk classification from documented rules
- Indicator-by-indicator explanations
- Confidence and evidence references
- False-positive, false-negative, and limitation notes

## Rules

Do not describe the absence of indicators as trust. Do not generate opaque or
AI-derived security decisions.

## Failure scenarios

If evidence is incomplete or contradictory, classify the report as uncertain
and identify the missing or conflicting observations.
