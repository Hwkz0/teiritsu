import { useState } from "react";
import { AnalyticsGrid } from "./AnalyticsGrid";
import { Header } from "./Header";
import { InvestigationControls } from "./InvestigationControls";
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
            <InvestigationControls filter={dashboard.filter} onFilterChange={dashboard.setFilter} />
            <StreamTable events={dashboard.visibleEvents} onAction={dashboard.notify} />
            <AnalyticsGrid />
            <OperationsPanels onAction={dashboard.notify} status={dashboard.status} />
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
