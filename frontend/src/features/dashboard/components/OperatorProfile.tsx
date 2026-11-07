export function OperatorProfile() {
  return (
    <div className="hidden items-center gap-2 border-l border-black/20 pl-2 sm:flex">
      <div className="grid h-8 w-8 place-items-center rounded-full border border-ink bg-blue font-headline font-bold text-white">
        O
      </div>
      <div className="hidden 2xl:block">
        <p className="font-headline text-xs font-bold uppercase leading-none">OPERATOR_01</p>
        <p className="font-mono text-[10px] text-black/60">LEVEL 4 CLEARANCE</p>
      </div>
    </div>
  );
}
