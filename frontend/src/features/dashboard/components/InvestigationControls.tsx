import type { StreamFilter } from "../types";

interface InvestigationControlsProps {
  filter: StreamFilter;
  onFilterChange: (filter: StreamFilter) => void;
}

export function InvestigationControls({ filter, onFilterChange }: InvestigationControlsProps) {
  return (
    <section className="flex flex-col gap-4 bg-ink p-5 text-white shadow-brutal lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h2 className="font-headline text-sm font-bold uppercase tracking-wider">Live investigation controls</h2>
        <p className="mt-1 font-mono text-xs text-white/70">
          Use deterministic local controls to narrow evidence without sending message content to external services.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          className={`border-2 border-white px-3 py-2 font-headline text-xs font-bold uppercase ${filter === "all" ? "bg-yellow text-ink" : "bg-transparent"}`}
          onClick={() => onFilterChange("all")}
          type="button"
        >
          All classifications
        </button>
        <button
          className={`border-2 border-white px-3 py-2 font-headline text-xs font-bold uppercase ${filter === "critical" ? "bg-red text-white" : "bg-transparent"}`}
          data-testid="critical-filter"
          onClick={() => onFilterChange("critical")}
          type="button"
        >
          Critical only (90+)
        </button>
      </div>
    </section>
  );
}
