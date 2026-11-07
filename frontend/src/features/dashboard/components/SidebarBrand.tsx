export function SidebarBrand() {
  return (
    <div className="flex h-16 items-center justify-between border-b-2 border-ink bg-panelHigh px-4">
      <div className="flex items-center gap-3">
        <div className="grid h-8 w-8 place-items-center border-2 border-ink bg-yellow font-headline text-sm font-bold">
          T
        </div>
        <div>
          <p className="font-headline text-base font-bold uppercase leading-none">AEGIS SecOps</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-black/60">Defense platform</p>
        </div>
      </div>
      <span className="border border-ink bg-yellow px-1.5 py-0.5 font-headline text-[10px] font-bold">v4.2</span>
    </div>
  );
}
