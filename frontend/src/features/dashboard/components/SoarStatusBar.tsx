export function SoarStatusBar({ status }: { status: string }) {
  return (
    <div className="mt-4 flex items-center justify-between bg-panel p-2.5 font-mono text-xs">
      <span className="flex items-center gap-1.5 font-semibold">
        <span className="h-2 w-2 rounded-full bg-blue" />
        {status}
      </span>
      <span className="hidden text-black/60 sm:inline">AUDIT_LOG_STREAM: ENCRYPTED</span>
    </div>
  );
}
