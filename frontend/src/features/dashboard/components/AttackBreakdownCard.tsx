import { attackBreakdown } from "../analyticsData";
import { AnalyticsPanel } from "./AnalyticsPanel";

export function AttackBreakdownCard() {
  return (
    <AnalyticsPanel icon="pie_chart" title="Attack Vector Ingestion Breakdown">
      <p className="font-mono text-xs text-black/60">Aggregated taxonomy from quarantine inspection pipelines (24h)</p>
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
  );
}
