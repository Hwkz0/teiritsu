import { useState } from "react";
import { AnalyticsGrid } from "./AnalyticsGrid";
import { Header } from "./Header";
import { MetricCard } from "./MetricCard";
import { OperationsPanels } from "./OperationsPanels";
import { Sidebar } from "./Sidebar";
import { StreamTable } from "./StreamTable";
import { TelemetryBanner } from "./TelemetryBanner";
import { metrics } from "../data";
import { useDashboardState } from "../hooks/useDashboardState";

export function DashboardPage() {
  const dashboard = useDashboardState();
  const [navigationOpen, setNavigationOpen] = useState(false);

  return (
    <>
      <Sidebar onClose={() => setNavigationOpen(false)} open={navigationOpen} />
      <div className="lg:pl-72">
        <Header
          onLock={dashboard.toggleLock}
          onMenu={() => setNavigationOpen(true)}
          onQueryChange={dashboard.setQuery}
          query={dashboard.query}
        />
        <main className="min-h-screen bg-paper pt-16">
          <div className="mx-auto flex max-w-[1800px] flex-col gap-6 p-4 sm:p-6">
            <section className="grid grid-cols-1 gap-4 xl:grid-cols-12">
              <div className="xl:col-span-4">
                <TelemetryBanner />
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 xl:col-span-8">
                {metrics.map((metric) => (
                  <MetricCard key={metric.label} metric={metric} />
                ))}
              </div>
            </section>
            <section className="flex flex-col gap-4 bg-ink p-5 text-white shadow-brutal lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-headline text-sm font-bold uppercase tracking-wider">
                  Live investigation controls
                </h2>
                <p className="mt-1 font-mono text-xs text-white/70">
                  Use deterministic local controls to narrow evidence without sending message content to external
                  services.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  className={`border-2 border-white px-3 py-2 font-headline text-xs font-bold uppercase ${dashboard.filter === "all" ? "bg-yellow text-ink" : "bg-transparent"}`}
                  onClick={() => dashboard.setFilter("all")}
                  type="button"
                >
                  All classifications
                </button>
                <button
                  className={`border-2 border-white px-3 py-2 font-headline text-xs font-bold uppercase ${dashboard.filter === "critical" ? "bg-red text-white" : "bg-transparent"}`}
                  data-testid="critical-filter"
                  onClick={() => dashboard.setFilter("critical")}
                  type="button"
                >
                  Critical only (90+)
                </button>
              </div>
            </section>
            <StreamTable events={dashboard.visibleEvents} onAction={dashboard.notify} />
            <AnalyticsGrid />
            <OperationsPanels onAction={dashboard.notify} />
            <p className="font-mono text-[10px] uppercase tracking-wider text-black/50">
              Teiritsu // Deterministic evidence surface // {dashboard.visibleEvents.length} visible stream records{" "}
              {dashboard.locked ? "// INCIDENT LOCK ACTIVE" : ""} {dashboard.status}
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
