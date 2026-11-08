# Documentation Governance

Documentation is a maintained part of the Teiritsu application. Public
behavior is not complete until its contract, limitations, privacy impact, and
tests are documented.

## Documentation evaluator

For every change, the evaluator checks:

1. The affected area and documents are identified.
2. Claims match implementation, tests, configuration, and provider behavior.
3. Examples, schemas, links, and versioned interfaces remain usable.
4. Security, privacy, authorization, retention, and applicable regulatory
   considerations are stated.
5. Evidence provenance, uncertainty, false positives, false negatives, and
   unsupported conclusions are explicit.

The evaluator runs during development, pull-request review, and release
preparation. Scheduled reviews re-check external provider terms, standards,
documentation relevance, and security assumptions. Skill-specific evaluation
is deferred to the separate skills area and its pull request.

## Documentation orchestrator

The orchestrator coordinates the evaluator with implementation and test
changes. It receives a change manifest containing the area, files, behavior,
dependencies, data flows, and tests; it returns affected documents, missing
requirements, and blocking discrepancies. It may create a follow-up task or
block release, but it must never silently invent behavior or mark an
undocumented security claim as complete.

## Change record

Documentation changes should identify:

- the user-visible or integration-visible behavior;
- local versus external processing;
- permissions and provider transfers;
- evidence and deterministic decision rules;
- migration, deprecation, or rollback requirements; and
- the tests or fixtures that support the claim.
