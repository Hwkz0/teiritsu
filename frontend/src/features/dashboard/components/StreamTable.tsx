import { Icon } from "../../../components/ui/Icon";
import type { StreamEvent } from "../types";

interface StreamTableProps {
  events: readonly StreamEvent[];
  onAction: (message: string) => void;
}

function riskClass(risk: number) {
  if (risk >= 90) return "bg-red text-white";
  if (risk >= 80) return "bg-yellow";
  return "bg-panel text-black/60";
}

export function StreamTable({ events, onAction }: StreamTableProps) {
  return (
    <section className="bg-white p-4 shadow-brutal">
      <div className="flex flex-col justify-between gap-3 pb-4 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 bg-red" />
          <h2 className="font-headline text-base font-bold uppercase tracking-wider">
            Realtime inbound ingestion & payload forensic stream
          </h2>
          <span className="hidden bg-panel px-2 py-0.5 font-mono text-xs text-black/60 xl:inline">
            STREAM_ACTIVE // BUFFER: 512 EPS
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-panel px-2.5 py-1 font-headline text-[10px] font-bold uppercase">LOCAL EVIDENCE</span>
          <button
            aria-label="Filter stream"
            className="bg-panel p-1 hover:bg-panelHigh"
            onClick={() => onAction("Filter controls opened")}
            type="button"
          >
            <Icon name="filter_list" />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[980px] border-collapse text-left font-mono text-xs">
          <caption className="sr-only">Realtime inbound email evidence stream</caption>
          <thead>
            <tr className="bg-panelHigh font-headline text-[11px] font-bold uppercase tracking-wider">
              <th className="p-2.5">Timestamp (UTC)</th>
              <th className="p-2.5">Inbound envelope / sender</th>
              <th className="p-2.5">Target / dept</th>
              <th className="p-2.5">Subject / payload metrics</th>
              <th className="p-2.5">Classification</th>
              <th className="p-2.5">Verdict</th>
              <th className="p-2.5 text-center">Risk</th>
              <th className="p-2.5 text-right">Forensic actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-panel">
            {events.map((event) => (
              <tr className="bg-white transition-colors hover:bg-red/10" key={event.timestamp}>
                <td className="p-2.5 align-top text-black/60">{event.timestamp}</td>
                <td className="p-2.5 align-top">
                  <strong className={event.clean ? "" : "text-red"}>{event.sender}</strong>
                  <span className="block text-[10px] text-black/60">{event.source}</span>
                </td>
                <td className="p-2.5 align-top">
                  <strong>{event.target}</strong>
                  <span className="block text-[10px] uppercase text-black/60">{event.department}</span>
                </td>
                <td className="max-w-xs p-2.5 align-top">
                  <div className="truncate font-sans font-semibold">{event.subject}</div>
                  <div className="font-sans text-[10px] text-black/60">{event.detail}</div>
                </td>
                <td className="p-2.5 align-top">
                  <span
                    className={`px-2 py-0.5 font-headline text-[10px] font-bold uppercase ${event.clean ? "bg-panelHigh" : event.classification === "CREDENTIAL HARVEST" ? "bg-blue text-white" : "bg-red text-white"}`}
                  >
                    {event.classification}
                  </span>
                </td>
                <td className="p-2.5 align-top">
                  <span
                    className={`px-2 py-0.5 font-headline text-[10px] font-bold uppercase ${event.clean ? "bg-panel" : "bg-ink text-yellow"}`}
                  >
                    {event.verdict}
                  </span>
                </td>
                <td className="p-2.5 text-center align-top">
                  <span className={`px-2 py-0.5 font-bold ${riskClass(event.risk)}`}>{event.risk}/100</span>
                </td>
                <td className="p-2.5 text-right align-top whitespace-nowrap">
                  <div className="inline-flex gap-1">
                    {(event.clean ? ["visibility", "code"] : ["biotech", "code", "domain_disabled"]).map((action) => (
                      <button
                        aria-label={`${action} ${event.sender}`}
                        className={`p-1 ${action === "domain_disabled" ? "bg-red text-white" : "bg-panel hover:bg-panelHigh"}`}
                        key={action}
                        onClick={() => onAction(`${action.replaceAll("_", " ")} queued for ${event.sender}`)}
                        title={action}
                        type="button"
                      >
                        <Icon name={action} />
                      </button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 flex flex-col items-center justify-between gap-2 bg-panel px-3 py-2 font-mono text-xs text-black/60 sm:flex-row">
        <span>SHOWING {events.length} OF 18,429 RECENT VERDICTS // AUTO-POLL: 1000ms</span>
        <div className="flex gap-2 font-headline font-bold">
          <button
            className="bg-panelHigh px-2 py-1 hover:bg-white"
            onClick={() => onAction("Previous page requested")}
            type="button"
          >
            PREV 100
          </button>
          <button className="bg-ink px-2 py-1 text-white" onClick={() => onAction("Next page requested")} type="button">
            NEXT 100
          </button>
        </div>
      </div>
    </section>
  );
}
