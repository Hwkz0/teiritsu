export function SidebarStatus() {
  return (
    <div className="flex items-center justify-between border-t-2 border-ink bg-panelHigh p-3 font-mono text-xs">
      <span className="flex items-center gap-1.5">
        <span className="h-2 w-2 border border-ink bg-yellow" />
        SIEM LINK: LIVE
      </span>
      <span className="text-black/60">LAT: 12ms</span>
    </div>
  );
}
