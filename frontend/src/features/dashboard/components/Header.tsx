import { Icon } from "../../../components/ui/Icon";

interface HeaderProps {
  query: string;
  onQueryChange: (query: string) => void;
  onLock: () => void;
  onMenu: () => void;
}

export function Header({ query, onQueryChange, onLock, onMenu }: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b-2 border-ink bg-paper px-4 lg:left-72 lg:px-6">
      <div className="flex items-center gap-3">
        <button
          aria-label="Open navigation"
          className="grid h-8 w-8 place-items-center border border-ink bg-panel lg:hidden"
          onClick={onMenu}
          type="button"
        >
          <Icon name="menu" />
        </button>
        <div className="flex items-center gap-2 border border-ink bg-panel px-2.5 py-1">
          <span className="h-2.5 w-2.5 border border-ink bg-yellow" />
          <span className="font-headline text-xs font-bold uppercase tracking-wider">DEFCON 3</span>
          <span className="hidden font-mono text-[10px] text-black/60 sm:inline">/ ELEVATED</span>
        </div>
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
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <label className="relative hidden w-64 md:block">
          <span className="sr-only">Search telemetry</span>
          <Icon className="absolute left-2 top-1/2 -translate-y-1/2" name="search" />
          <input
            aria-label="Search telemetry"
            className="w-full border-b-2 border-ink bg-panel py-1.5 pl-9 pr-3 font-mono text-xs outline-none focus:bg-white"
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search IOCs, hashes, IPs..."
            value={query}
          />
        </label>
        <button
          className="flex items-center gap-1.5 border-2 border-ink bg-red px-2 py-1.5 font-headline text-[10px] font-bold uppercase text-white shadow-brutal-sm transition active:translate-x-0.5 active:translate-y-0.5 sm:px-3 sm:text-xs"
          onClick={onLock}
          type="button"
        >
          <Icon name="lock" />
          <span className="hidden sm:inline">Incident lock</span>
        </button>
        <button
          aria-label="Notifications"
          className="relative grid h-8 w-8 place-items-center border border-ink bg-panel hover:bg-panelHigh"
          type="button"
        >
          <Icon name="notifications" />
          <span className="absolute -right-1 -top-1 border border-ink bg-red px-1 font-mono text-[9px] font-bold text-white">
            7
          </span>
        </button>
        <div className="hidden items-center gap-2 border-l border-black/20 pl-2 sm:flex">
          <div className="grid h-8 w-8 place-items-center rounded-full border border-ink bg-blue font-headline font-bold text-white">
            O
          </div>
          <div className="hidden 2xl:block">
            <p className="font-headline text-xs font-bold uppercase leading-none">OPERATOR_01</p>
            <p className="font-mono text-[10px] text-black/60">LEVEL 4 CLEARANCE</p>
          </div>
        </div>
      </div>
    </header>
  );
}
