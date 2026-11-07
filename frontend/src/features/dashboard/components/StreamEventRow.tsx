import { Badge } from "../../../components/ui/Badge";
import type { StreamEvent } from "../types";
import { StreamActionButtons } from "./StreamActionButtons";

interface StreamEventRowProps {
  event: StreamEvent;
  onAction: (message: string) => void;
}

function riskClass(risk: number) {
  if (risk >= 90) return "bg-red text-white";
  if (risk >= 80) return "bg-yellow";
  return "bg-panel text-black/60";
}

function classificationClass(event: StreamEvent) {
  if (event.clean) return "bg-panelHigh";
  return event.classification === "CREDENTIAL HARVEST" ? "bg-blue text-white" : "bg-red text-white";
}

export function StreamEventRow({ event, onAction }: StreamEventRowProps) {
  return (
    <tr className="bg-white transition-colors hover:bg-red/10">
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
        <Badge className={classificationClass(event)}>{event.classification}</Badge>
      </td>
      <td className="p-2.5 align-top">
        <Badge className={event.clean ? "bg-panel" : "bg-ink text-yellow"}>{event.verdict}</Badge>
      </td>
      <td className="p-2.5 text-center align-top">
        <Badge className={riskClass(event.risk)}>{event.risk}/100</Badge>
      </td>
      <td className="p-2.5 text-right align-top whitespace-nowrap">
        <StreamActionButtons clean={event.clean} onAction={onAction} sender={event.sender} />
      </td>
    </tr>
  );
}
