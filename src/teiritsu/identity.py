from __future__ import annotations

import unicodedata
from dataclasses import asdict, dataclass
from email.utils import parseaddr


@dataclass(frozen=True)
class Finding:
    name: str
    severity: str
    explanation: str


@dataclass(frozen=True)
class AnalysisResult:
    original: str
    address: str
    normalized_local: str
    normalized_domain: str
    address_hex: str
    local_hex: str
    domain_hex: str
    risk: str
    findings: tuple[Finding, ...]

    def as_dict(self) -> dict[str, object]:
        result = asdict(self)
        result["findings"] = [asdict(item) for item in self.findings]
        return result


def _normalize(value: str) -> str:
    return unicodedata.normalize("NFKC", value).casefold()


def analyze_sender(sender: str, expected_domains: tuple[str, ...] = ()) -> AnalysisResult:
    _, address = parseaddr(sender)
    local, separator, domain = address.rpartition("@")
    if not separator or not local or not domain or "." not in domain:
        raise ValueError("sender must contain an address such as person@example.org")

    normalized_local = _normalize(local)
    normalized_domain = _normalize(domain).rstrip(".")
    expected = {_normalize(item).rstrip(".") for item in expected_domains}
    findings: list[Finding] = []

    if any(ord(char) > 127 for char in domain):
        findings.append(
            Finding(
                "non_ascii_domain",
                "high",
                "The domain contains non-ASCII characters and may use a lookalike.",
            )
        )
    if normalized_domain.startswith("xn--") or ".xn--" in normalized_domain:
        findings.append(
            Finding(
                "punycode_domain",
                "medium",
                "The domain contains an IDN Punycode label requiring review.",
            )
        )
    if expected and normalized_domain not in expected:
        findings.append(
            Finding(
                "expected_domain_mismatch",
                "high",
                "The sender domain does not match the configured expected domain.",
            )
        )

    risk = "high" if any(item.severity == "high" for item in findings) else (
        "medium" if findings else "insufficient_information"
    )
    return AnalysisResult(
        original=sender,
        address=f"{normalized_local}@{normalized_domain}",
        normalized_local=normalized_local,
        normalized_domain=normalized_domain,
        address_hex=f"{normalized_local}@{normalized_domain}".encode("utf-8").hex(),
        local_hex=normalized_local.encode("utf-8").hex(),
        domain_hex=normalized_domain.encode("utf-8").hex(),
        risk=risk,
        findings=tuple(findings),
    )
