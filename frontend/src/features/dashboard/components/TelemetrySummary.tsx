export function TelemetrySummary() {
  return (
    <div className="hidden items-center gap-4 font-mono text-xs text-black/60 xl:flex">
      <span>
        THROUGHPUT: <strong className="text-ink">14.8k msg/s</strong>
      </span>
      <span>|</span>
      <span>
        SANDBOX: <strong className="text-ink">ONLINE</strong>{" "}
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue" />
      </span>
    </div>
  );
}
