import { Icon } from "../../../components/ui/Icon";
import type { Metric } from "../types";

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <article className="flex min-h-32 flex-col justify-between bg-white p-3.5 shadow-brutal-sm">
      <div className="flex items-center justify-between">
        <span className="font-headline text-[10px] font-bold uppercase text-black/60">{metric.label}</span>
        <span className={metric.iconColor}>
          <Icon name={metric.icon} />
        </span>
      </div>
      <div className="my-2">
        <strong className={`font-headline text-2xl font-bold ${metric.iconColor}`}>{metric.value}</strong>
        <span className="block font-mono text-[11px] font-semibold text-black/60">{metric.note}</span>
      </div>
      <div className="h-1.5 w-full bg-panelHigh">
        <div className={`h-full ${metric.barColor}`} style={{ width: `${metric.progress}%` }} />
      </div>
    </article>
  );
}
