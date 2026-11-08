# Contributing

Teiritsu is built in small, reviewable increments. Each pull request should
implement one focused capability, contract, test slice, or documentation
change. Do not bundle unrelated providers, refactors, features, and policy
changes.

## Before coding

1. Read [AGENTS.md](AGENTS.md) and identify the primary `AREA`.
2. Read the relevant architecture and documentation contracts.
3. Define purpose, dependencies, security implications, inputs, outputs,
   failure behavior, and tests.
4. Choose the smallest independently reviewable slice.

Skills are modular application capabilities that agents use when working on
defined project areas. A skill must have a justified purpose, explicit inputs
and outputs, permission boundaries, provenance requirements, and failure
behavior. Skill implementation is maintained separately from this foundation
PR, but all future skill work must follow these contribution rules.

## Naming

Every commit must use:

```text
[AREA N] type: Title-Cased Summary
```

Every pull request title must use:

```text
[AREA N] Title-Cased Summary
```

Use descriptive commit types such as `feat`, `fix`, `docs`, `test`, `chore`,
and `cleanup`. Do not put commit types in pull request titles. Every task must
be split into granular commits that leave a reviewable, working increment;
avoid one large commit covering multiple areas.

## Engineering standards

- Keep modules small, typed, deterministic, and independently testable.
- Keep provider integrations behind explicit adapters.
- Preserve original inputs and evidence provenance.
- Never fabricate external intelligence or authentication results.
- Do not add runtime AI, machine-learning, or generative-service dependencies.
- Prefer standard-library solutions when they are sufficient.
- Avoid logging message bodies and unnecessary personal information.

## Testing and validation

Every behavior change needs focused tests for normal, malformed, missing, and
provider-failure inputs where applicable. Run the configured formatter, linter,
tests, and `git diff --check` before opening a PR.

## Documentation

Documentation is a maintained part of the application, not a release-only
activity. Update it in the same PR when changing detection rules, risk
calculations, provider behavior, external data transmission, privacy,
security, public interfaces, configuration, skills, orchestrators, or CLI
usage. State what a mechanism can and cannot prove, including false-positive
and false-negative cases.

The documentation evaluator must check each change for:

- affected documents and links;
- agreement between implementation, tests, configuration, and claims;
- current examples, schemas, provider terms, and security boundaries;
- privacy, retention, authorization, and regulatory implications; and
- stated uncertainty, limitations, and provenance.

The documentation orchestrator coordinates these checks before review and
during release preparation. It may open a follow-up documentation task, but it
must not silently mark undocumented behavior as complete. Scheduled
evaluations must also re-check documentation, skills, and external-provider
guidance against new standards, terms, project decisions, and the current
project architecture.

## Privacy, local processing, and regulatory safeguards

- Perform parsing, normalization, comparison, and risk calculation locally by
  default.
- Require explicit, visible opt-in before sending an address, domain, query,
  header, or report to an external provider.
- Document the purpose, recipient, retention, jurisdiction, and terms for each
  transfer; do not treat public availability as consent for unrelated use.
- Minimize, redact, encrypt, and time-limit retained personal information.
- Provide deletion and provider-disable controls where the deployment stores
  data.
- Review applicable privacy and data-protection obligations for the deployment
  context; the project must not claim legal compliance without a documented
  assessment.
- Never use the platform for unauthorized enumeration, profiling, or
  surveillance. Escalate unclear lawful-basis or cross-border questions to
  the deployment owner.

## Pull requests

PR descriptions must include the area, purpose, scope boundary, tests run,
security/privacy implications, evidence model, limitations, and follow-up work.
Keep PRs small enough to review independently and stack them only when the base
PR is a coherent dependency.

When a future PR changes a skill or orchestrator, include its justification,
permissions, evaluator coverage, and deprecation or rollback plan. Skill
implementation is outside this foundation PR.

## Security reports

Do not disclose credentials, private message content, or exploitable details in
public issues. Follow the repository security policy when reporting a
vulnerability.
