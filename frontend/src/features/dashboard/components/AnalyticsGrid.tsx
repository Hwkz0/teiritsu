import { type ReactNode } from "react";
import { Icon } from "../../../components/ui/Icon";
import { attackBreakdown, clusterNodes, targetedDepartments } from "../analyticsData";

interface AnalyticsPanelProps {
  title: string;
  icon: string;
  children: ReactNode;
}

function AnalyticsPanel({ title, icon, children }: AnalyticsPanelProps) {
  return (
    <article className="flex flex-col justify-between bg-white p-5 shadow-brutal">
      <div>
        <div className="flex items-center justify-between pb-3">
          <h3 className="font-headline text-sm font-bold uppercase tracking-wider">{title}</h3>
          <Icon name={icon} />
        </div>
        {children}
      </div>
    </article>
  );
}

export function AnalyticsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <AnalyticsPanel icon="pie_chart" title="Attack Vector Ingestion Breakdown">
          <p className="font-mono text-xs text-black/60">
            Aggregated taxonomy from quarantine inspection pipelines (24h)
          </p>
          <div className="mt-5 space-y-3.5">
            {attackBreakdown.map((item) => (
              <div key={item.label}>
                <div className="mb-1 flex justify-between font-mono text-xs">
                  <strong>{item.label}</strong>
                  <strong className={item.textColor}>{item.percent}%</strong>
                </div>
                <div className="h-3 bg-panelHigh">
                  <div className={`h-full ${item.barColor}`} style={{ width: `${item.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-panel p-3 font-mono text-xs">
            <strong className="block font-headline text-[10px] uppercase">Detection anomaly:</strong>
            Quishing increased +142% WoW targeting hybrid workers via fake SSO re-auth notices.
          </div>
        </AnalyticsPanel>
      </div>
      <div className="lg:col-span-4">
        <AnalyticsPanel icon="radar" title="Targeted Depts & VIP Surface">
          <p className="font-mono text-xs text-black/60">Blast radius exposure index & target concentration</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {targetedDepartments.map((department) => (
              <div className="bg-panel p-3 text-center" key={department.name}>
                <strong className={`font-headline text-2xl ${department.color}`}>{department.value}</strong>
                <span className="mt-1 block font-headline text-xs font-bold uppercase">{department.name}</span>
                <span className="font-mono text-[10px] text-black/60">{department.detail}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-red/15 p-3">
            <div className="flex items-center gap-2 font-headline text-xs font-bold uppercase text-red">
              <Icon name="warning" />
              VIP Shield Active
            </div>
            <p className="mt-0.5 font-mono text-[11px]">
              Strict DMARC quarantine enforcement applied to 44 designated executive mailboxes.
            </p>
          </div>
        </AnalyticsPanel>
      </div>
      <div className="lg:col-span-4">
        <AnalyticsPanel icon="monitor_heart" title="Cluster Heuristics Latency">
          <span className="bg-yellow px-2 py-0.5 font-mono text-xs font-bold">AVG 18ms</span>
          <p className="font-mono text-xs text-black/60">Distributed envelope inspection per zone</p>
          <svg
            aria-label="Cluster latency trend"
            className="mt-4 h-24 w-full bg-panel p-2"
            fill="none"
            preserveAspectRatio="none"
            role="img"
            viewBox="0 0 300 90"
          >
            <path
              d="M0 65 20 60 40 68 60 42 80 48 100 35 120 40 140 25 160 30 180 50 200 45 220 20 240 30 260 25 280 35 300 22V90H0Z"
              fill="#ffcc00"
              fillOpacity=".35"
            />
            <polyline
              points="0,65 20,60 40,68 60,42 80,48 100,35 120,40 140,25 160,30 180,50 200,45 220,20 240,30 260,25 280,35 300,22"
              stroke="#1a1a1a"
              strokeWidth="3"
            />
          </svg>
          <div className="mt-4 space-y-2 font-mono text-xs">
            {clusterNodes.map(([name, detail]) => (
              <div className="flex justify-between gap-2 bg-panel px-2 py-1" key={name}>
                <span className="flex items-center gap-1.5 font-bold">
                  <span className="h-2 w-2 bg-ink" />
                  {name}
                </span>
                <strong>{detail}</strong>
              </div>
            ))}
          </div>
        </AnalyticsPanel>
      </div>
    </div>
  );
}
