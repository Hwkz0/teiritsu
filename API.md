# Teiritsu Email Scanning API Contract

This contract is specific to the Teiritsu email identity scanning framework.
It is not a project-agnostic agent API. Public Python, CLI, dashboard, plugin,
and future HTTP interfaces should expose typed, structured observations rather
than opaque decisions.

## Analysis input

- Sender address or display-name/address pair
- Optional expected organization domains
- Optional explicitly enabled provider configuration
- Optional authentication headers or structured results

## Analysis output

- Original and normalized identity values
- Hexadecimal representations and comparison measurements
- Findings with name, result, severity, explanation, source, reliability, and
  timestamp where applicable
- Risk classification and uncertainty
- Provider failures and missing evidence

## Provider adapters

Each adapter must be independently replaceable and return standardized factual
observations. It must use timeouts, respect rate limits and terms, avoid
unnecessary personal data, and expose errors instead of fabricating results.

## Evaluation and non-AI enforcement

Every implementation must be checked against the non-AI architecture policy
before release. The evaluator verifies that dependencies, network calls,
configuration, and output generation use deterministic algorithms and factual
provider responses only. It also checks that identical inputs and identical
evidence produce identical classifications, and that no feature requires AI
credentials, model downloads, or inference infrastructure.

Provider search output is discovery evidence, never proof of ownership. The
contract must preserve source URL, provider, retrieval time, query scope,
verification state, reliability, and limitations so evaluators can detect
unsupported conclusions.

## Reports and sharing

The report interface must support both machine-readable output (for example
versioned JSON) and a human-readable evaluation report that can be exported as
a document such as Markdown, HTML, or PDF by the host application. Shared
reports must include the assessment, evidence, uncertainty, timestamps,
provider failures, privacy classification, and a clear statement that the
result does not certify sender legitimacy.

## Compatibility and permissions

Local analysis must remain functional without credentials, network access, AI
services, or provider-specific infrastructure. Future REST, MCP, or client
interfaces must preserve the same permission boundaries and evidence model.
Plugins and agent-facing skills must declare their inputs, outputs, external
transfers, permissions, rate limits, and failure scenarios. They may invoke
documented Teiritsu contracts but may not bypass deterministic analysis,
evidence provenance, or user consent.
