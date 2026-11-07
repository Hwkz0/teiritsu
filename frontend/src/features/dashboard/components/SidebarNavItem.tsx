import { Icon } from "../../../components/ui/Icon";
import type { NavigationGroup } from "../types";

interface SidebarNavItemProps {
  item: NavigationGroup["items"][number];
  active: boolean;
  onClick: () => void;
}

export function SidebarNavItem({ item, active, onClick }: SidebarNavItemProps) {
  return (
    <a
      className={`flex items-center justify-between gap-2.5 border px-2.5 py-1.5 text-xs transition-colors ${active ? "border-ink bg-yellow font-bold text-ink shadow-brutal-sm" : "border-transparent text-black/60 hover:border-ink hover:bg-panelHigh hover:text-ink"}`}
      href={`#${item.label.toLowerCase().replaceAll(" ", "-")}`}
      onClick={onClick}
    >
      <span className="flex min-w-0 items-center gap-2.5">
        <Icon name={item.icon} />
        <span className="truncate font-medium">{item.label}</span>
      </span>
      {item.badge && (
        <span className="bg-red px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">{item.badge}</span>
      )}
    </a>
  );
}
