import { Icon } from "../../../components/ui/Icon";
import type { Correlation } from "../operationsData";

export function CorrelationItem({ correlation }: { correlation: Correlation }) {
  return (
    <div className="flex items-start justify-between gap-3 bg-panel p-3">
      <div className="flex items-start gap-3">
        <div className="bg-ink p-2 text-white">
          <Icon name={correlation.icon} />
        </div>
        <div>
          <strong className="block font-headline text-xs uppercase">{correlation.title}</strong>
          <p className="mt-0.5 font-mono text-xs text-black/60">{correlation.detail}</p>
        </div>
      </div>
      <span className="whitespace-nowrap font-mono text-[11px] font-bold text-red">{correlation.result}</span>
    </div>
  );
}
