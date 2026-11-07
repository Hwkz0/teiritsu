# ADR-001: Keep The Frontend As A Presentation Boundary

## Context

Teiritsu's active implementation PRs establish deterministic identity analysis
and bounded email-file ingestion in Python. The supplied dashboard design is a
rich operator surface, but it must not become a second source of security
decisions or introduce runtime AI behavior.

## Decision

Implement the dashboard as a Vite React feature with typed local fixtures and
explicit UI state. Keep acquisition, analysis, evidence provenance, and risk
classification outside the frontend. Replace fixtures with a typed API adapter
only after the backend contract is available.

## Alternatives considered

- Put analysis logic directly in React: rejected because it duplicates the
  deterministic backend and weakens testable responsibility boundaries.
- Add a global state library: rejected because the current state is local to one
  dashboard and a hook is sufficient.
- Use an AI service for summaries or classification: rejected by the mandatory
  non-AI runtime policy.

## Consequences

The current UI is usable with representative data and can be tested offline.
It does not yet display live backend evidence; future integration must preserve
the documented privacy, provenance, uncertainty, and authorization contracts.
