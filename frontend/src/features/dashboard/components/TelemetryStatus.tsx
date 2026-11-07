export function TelemetryStatus() {
  return (
    <div className="flex items-center gap-2 border border-ink bg-panel px-2.5 py-1">
      <span className="h-2.5 w-2.5 border border-ink bg-yellow" />
      <span className="font-headline text-xs font-bold uppercase tracking-wider">DEFCON 3</span>
      <span className="hidden font-mono text-[10px] text-black/60 sm:inline">/ ELEVATED</span>
    </div>
  );
}
