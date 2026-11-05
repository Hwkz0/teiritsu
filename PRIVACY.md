# Privacy

Local checks use the sender identity and configured reference data. Email
ingestion reads a local `.eml` file or, only when explicitly requested, a
user-supplied HTTP(S) URL. The parser retains structured headers and source
metadata for analysis, not the message body or attachments.

Remote downloads disclose the requested URL and network metadata to the
target server. Deployments should make this external communication visible to
users, enforce network policy, and avoid sending sensitive messages to
untrusted hosts.

External providers are opt-in. When enabled, deployments must disclose what
domains or queries are sent, which provider receives them, and the provider's
retention terms. Provider credentials remain server-side or in protected
configuration.

Teiritsu has no required telemetry or database. Deployments should minimize
retention, protect reports, redact sensitive values from logs, and provide
users control over provider access. Public role-based contact searches must
not become personal-address enumeration.
