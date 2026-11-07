import { Badge } from "../../../components/ui/Badge";
import { clusterNodes } from "../analyticsData";
import { AnalyticsPanel } from "./AnalyticsPanel";
import { ClusterNodeRow } from "./ClusterNodeRow";

export function ClusterLatencyCard() {
  return (
    <AnalyticsPanel icon="monitor_heart" title="Cluster Heuristics Latency">
      <Badge className="bg-yellow">AVG 18ms</Badge>
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
          <ClusterNodeRow detail={detail} key={name} name={name} />
        ))}
      </div>
    </AnalyticsPanel>
  );
}
