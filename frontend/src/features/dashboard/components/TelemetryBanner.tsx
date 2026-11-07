import { Icon } from "../../../components/ui/Icon";

export function TelemetryBanner() {
  return (
    <article className="relative flex min-h-64 flex-col justify-between overflow-hidden bg-ink p-5 text-white shadow-brutal">
      <div className="absolute -bottom-8 -right-6 opacity-10">
        <Icon name="shield_with_heart" />
      </div>
      <div>
        <div className="flex items-center justify-between border-b border-white/20 pb-3">
          <span className="flex items-center gap-1.5 font-headline text-xs font-bold uppercase tracking-widest text-yellow">
            <span className="h-2 w-2 animate-pulse bg-yellow" />
            SYS_TELEMETRY // VECTOR-01
          </span>
          <span className="bg-red px-2 py-0.5 font-headline text-[10px] font-bold uppercase">NODE CLUSTER: SYNC</span>
        </div>
        <h1 className="mt-4 font-headline text-2xl font-bold uppercase leading-none tracking-tight">
          Elevated // Active Mitigation
        </h1>
        <p className="mt-2 max-w-lg font-mono text-xs text-white/70">
          Heuristic detonation engines running at 100% capacity. Zero bypass detected in current patrol cycle.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 bg-white/10 p-2.5">
        <div>
          <span className="block font-headline text-[10px] uppercase text-white/60">MTTR stat</span>
          <strong className="font-headline text-lg text-yellow">1.4m</strong>
        </div>
        <div>
          <span className="block font-headline text-[10px] uppercase text-white/60">Parser latency</span>
          <strong className="font-headline text-lg">18ms</strong>
        </div>
        <div>
          <span className="block font-headline text-[10px] uppercase text-white/60">Precision</span>
          <strong className="font-headline text-lg text-yellow">99.89%</strong>
        </div>
      </div>
    </article>
  );
}
