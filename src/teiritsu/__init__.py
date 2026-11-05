"""Deterministic email identity analysis building blocks."""

from .email_ingestion import (
    EmailFile,
    EmailHeader,
    EmailIngestionError,
    download_email_file,
    parse_email_bytes,
    parse_email_file,
)

__all__ = [
    "EmailFile",
    "EmailHeader",
    "EmailIngestionError",
    "download_email_file",
    "parse_email_bytes",
    "parse_email_file",
]
