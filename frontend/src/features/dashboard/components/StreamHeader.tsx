import { Badge } from "../../../components/ui/Badge";
import { IconButton } from "../../../components/ui/IconButton";

interface StreamHeaderProps {
  onFilter: () => void;
}

export function StreamHeader({ onFilter }: StreamHeaderProps) {
  return (
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
        <Badge>LOCAL EVIDENCE</Badge>
        <IconButton icon="filter_list" label="Filter stream" onClick={onFilter} />
      </div>
    </div>
  );
}
