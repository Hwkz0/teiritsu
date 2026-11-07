import { Icon } from "../../../components/ui/Icon";
import { quickActions } from "../data";
import { correlations } from "../operationsData";

interface OperationsPanelsProps {
  onAction: (message: string) => void;
}

export function OperationsPanels({ onAction }: OperationsPanelsProps) {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      <article className="bg-white p-5 shadow-brutal lg:col-span-6">
        <div className="flex items-center justify-between pb-3">
          <h3 className="flex items-center gap-2 font-headline text-sm font-bold uppercase tracking-wider">
            <Icon name="hub" />
            Cross-vector pivoting & correlation feed
          </h3>
          <span className="bg-panel px-2 py-0.5 font-mono text-[10px] font-bold">3 CONNECTORS ACTIVE</span>
        </div>
        <div className="space-y-3">
          {correlations.map((correlation) => (
            <div className="flex items-start justify-between gap-3 bg-panel p-3" key={correlation.title}>
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
          ))}
        </div>
      </article>
      <article className="flex flex-col justify-between bg-panelHigh p-5 shadow-brutal lg:col-span-6">
        <div>
          <div className="flex items-center justify-between pb-3">
            <h3 className="flex items-center gap-2 font-headline text-sm font-bold uppercase tracking-wider">
              <Icon name="flash_on" />
              Emergency mitigation & quick SOAR controls
            </h3>
            <span className="bg-red px-2 py-0.5 font-mono text-[10px] font-bold text-white">OPERATOR L4 AUTH</span>
          </div>
          <p className="mb-4 font-mono text-xs text-black/60">
            Direct execution handles triggering automated responses across configured tenants.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {quickActions.map((action) => (
              <button
                className={`flex items-center justify-between p-3 text-left shadow-brutal-sm transition hover:bg-red hover:text-white ${action.className}`}
                key={action.label}
                onClick={() => onAction(`${action.label} queued for operator review`)}
                type="button"
              >
                <span>
                  <strong className="block font-headline text-xs uppercase">{action.label}</strong>
                  <span className="font-mono text-[10px] opacity-70">{action.detail}</span>
                </span>
                <Icon name={action.icon} />
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between bg-panel p-2.5 font-mono text-xs">
          <span className="flex items-center gap-1.5 font-semibold">
            <span className="h-2 w-2 rounded-full bg-blue" />
            SOAR WORKER POOL: 32 WORKERS READY
          </span>
          <span className="hidden text-black/60 sm:inline">AUDIT_LOG_STREAM: ENCRYPTED</span>
        </div>
      </article>
    </section>
  );
}
