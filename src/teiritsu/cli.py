import argparse
import json

from .identity import analyze_sender


def main() -> None:
    parser = argparse.ArgumentParser(description="Analyze an email sender identity.")
    parser.add_argument("sender")
    parser.add_argument("--expected-domain", action="append", default=[])
    args = parser.parse_args()
    result = analyze_sender(args.sender, tuple(args.expected_domain))
    print(json.dumps(result.as_dict(), indent=2))


if __name__ == "__main__":
    main()
