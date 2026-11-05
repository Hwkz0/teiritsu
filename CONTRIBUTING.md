# Contributing

Teiritsu is built in small, reviewable increments. Each pull request should
implement one focused capability, contract, test slice, or documentation
change. Do not bundle unrelated providers, refactors, features, and policy
changes.

## Before coding

1. Read [AGENTS.md](AGENTS.md) and identify the primary `AREA`.
2. Read the relevant architecture and `skills/*/SKILL.md` contract.
3. Define purpose, dependencies, security implications, inputs, outputs,
   failure behavior, and tests.
4. Choose the smallest independently reviewable slice.

## Naming

Every commit must use:

```text
[AREA N] type: Title-Cased Summary
```

Every pull request title must use:

```text
[AREA N] Title-Cased Summary
```

Examples:

```text
[AREA 1] feat: Parse Sender Identities
[AREA 2] Establish Project Foundation And Instructions
```

Use descriptive commit types such as `feat`, `fix`, `docs`, `test`, `chore`,
and `cleanup`. Do not put commit types in pull request titles.

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

Update documentation in the same PR when changing detection rules, risk
calculations, provider behavior, external data transmission, privacy,
security, public interfaces, configuration, or CLI usage. State what a
mechanism can and cannot prove, including false-positive and false-negative
cases.

## Pull requests

PR descriptions must include the area, purpose, scope boundary, tests run,
security/privacy implications, evidence model, limitations, and follow-up work.
Keep PRs small enough to review independently and stack them only when the base
PR is a coherent dependency.

## Security reports

Do not disclose credentials, private message content, or exploitable details in
public issues. Follow the repository security policy when reporting a
vulnerability.
