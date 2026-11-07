# Privacy

Local checks use the sender identity and configured reference data. Parsing,
normalization, comparison, and deterministic risk calculation occur locally
by default. Complete email contents are not required for the foundation and
must not be transmitted unnecessarily.

External providers are opt-in and disabled unless explicitly configured. Before
an address, domain, query, header, or report leaves the deployment, the user
must be able to see the recipient, purpose, data fields, retention terms, and
jurisdiction. Provider credentials remain server-side or in protected
configuration. Public availability does not make an address suitable for
unlimited collection, profiling, or enumeration.

Teiritsu has no required telemetry or database. Deployments should minimize
retention, protect reports, redact sensitive values from logs, and provide
users controls to disable providers, delete stored reports, and revoke access.
Retention and access policies must be documented before production use.

Deployments must assess applicable privacy and data-protection requirements,
including lawful basis, purpose limitation, data minimization, access and
deletion rights, cross-border transfers, breach handling, and provider terms.
This project does not make a blanket legal-compliance claim; the deployment
owner is responsible for its jurisdiction and use case.
