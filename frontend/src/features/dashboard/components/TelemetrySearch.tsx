import { Icon } from "../../../components/ui/Icon";

interface TelemetrySearchProps {
  query: string;
  onChange: (query: string) => void;
}

export function TelemetrySearch({ query, onChange }: TelemetrySearchProps) {
  return (
    <label className="relative hidden w-64 md:block">
      <span className="sr-only">Search telemetry</span>
      <Icon className="absolute left-2 top-1/2 -translate-y-1/2" name="search" />
      <input
        aria-label="Search telemetry"
        className="w-full border-b-2 border-ink bg-panel py-1.5 pl-9 pr-3 font-mono text-xs outline-none focus:bg-white"
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search IOCs, hashes, IPs..."
        value={query}
      />
    </label>
  );
}
