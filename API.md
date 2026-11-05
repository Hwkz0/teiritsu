# API Contract

The public Python and future HTTP interfaces should expose typed, structured
observations rather than opaque decisions.

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

## Compatibility

Local analysis must remain functional without credentials, network access, AI
services, or provider-specific infrastructure. Future REST, MCP, or client
interfaces must preserve the same permission boundaries and evidence model.
