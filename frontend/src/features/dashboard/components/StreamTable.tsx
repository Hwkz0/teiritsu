import { Panel } from "../../../components/ui/Panel";
import type { StreamEvent } from "../types";
import { StreamEventRow } from "./StreamEventRow";
import { StreamFooter } from "./StreamFooter";
import { StreamHeader } from "./StreamHeader";
import { StreamTableHeader } from "./StreamTableHeader";

interface StreamTableProps {
  events: readonly StreamEvent[];
  onAction: (message: string) => void;
}

export function StreamTable({ events, onAction }: StreamTableProps) {
  return (
    <Panel className="p-4">
      <StreamHeader onFilter={() => onAction("Filter controls opened")} />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[980px] border-collapse text-left font-mono text-xs">
          <caption className="sr-only">Realtime inbound email evidence stream</caption>
          <StreamTableHeader />
          <tbody className="divide-y divide-panel">
            {events.map((event) => (
              <StreamEventRow event={event} key={event.timestamp} onAction={onAction} />
            ))}
          </tbody>
        </table>
      </div>
      <StreamFooter count={events.length} onAction={onAction} />
    </Panel>
  );
}
