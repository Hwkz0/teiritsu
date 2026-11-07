interface StreamFooterProps {
  count: number;
  onAction: (message: string) => void;
}

export function StreamFooter({ count, onAction }: StreamFooterProps) {
  return (
    <div className="mt-3 flex flex-col items-center justify-between gap-2 bg-panel px-3 py-2 font-mono text-xs text-black/60 sm:flex-row">
      <span>SHOWING {count} OF 18,429 RECENT VERDICTS // AUTO-POLL: 1000ms</span>
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
  );
}
