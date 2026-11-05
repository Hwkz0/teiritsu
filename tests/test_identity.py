import pytest

from teiritsu import analyze_sender


def test_analyzes_sender_and_emits_domain_hex() -> None:
    result = analyze_sender("Finance <Billing@Example.COM>")
    assert result.address == "billing@example.com"
    assert result.address_hex == "62696c6c696e67406578616d706c652e636f6d"
    assert result.local_hex == "62696c6c696e67"
    assert result.domain_hex == "6578616d706c652e636f6d"
    assert result.risk == "insufficient_information"


def test_flags_expected_domain_mismatch() -> None:
    result = analyze_sender("billing@lookalike.example", ("example.com",))
    assert result.risk == "high"
    assert result.findings[0].name == "expected_domain_mismatch"


def test_rejects_malformed_sender() -> None:
    with pytest.raises(ValueError, match="must contain an address"):
        analyze_sender("not-an-email")
