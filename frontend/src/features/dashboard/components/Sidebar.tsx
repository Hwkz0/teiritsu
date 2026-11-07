import { Icon } from "../../../components/ui/Icon";
import { navigationGroups } from "../data";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r-2 border-ink bg-panel transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
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
      <nav className="flex-1 space-y-5 overflow-y-auto p-3" aria-label="Security operations">
        {navigationGroups.map((group, groupIndex) => (
          <div className="space-y-1" key={group.label}>
            <div className="flex justify-between px-2.5 py-1 font-headline text-[11px] font-bold uppercase tracking-wider text-black/60">
              <span>{group.label}</span>
              <span className="font-mono text-[10px] text-blue">0{groupIndex + 1}</span>
            </div>
            {group.items.map((item, itemIndex) => (
              <a
                className={`flex items-center justify-between gap-2.5 border px-2.5 py-1.5 text-xs transition-colors ${
                  groupIndex === 0 && itemIndex === 0
                    ? "border-ink bg-yellow font-bold text-ink shadow-brutal-sm"
                    : "border-transparent text-black/60 hover:border-ink hover:bg-panelHigh hover:text-ink"
                }`}
                href={`#${item.label.toLowerCase().replaceAll(" ", "-")}`}
                key={item.label}
                onClick={onClose}
              >
                <span className="flex min-w-0 items-center gap-2.5">
                  <Icon name={item.icon} />
                  <span className="truncate font-medium">{item.label}</span>
                </span>
                {item.badge && (
                  <span className="bg-red px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">{item.badge}</span>
                )}
              </a>
            ))}
          </div>
        ))}
      </nav>
      <div className="flex items-center justify-between border-t-2 border-ink bg-panelHigh p-3 font-mono text-xs">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 border border-ink bg-yellow" />
          SIEM LINK: LIVE
        </span>
        <span className="text-black/60">LAT: 12ms</span>
      </div>
    </aside>
  );
}
