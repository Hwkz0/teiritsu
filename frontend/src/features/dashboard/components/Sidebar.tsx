import { navigationGroups } from "../data";
import { SidebarGroup } from "./SidebarGroup";
import { SidebarBrand } from "./SidebarBrand";
import { SidebarStatus } from "./SidebarStatus";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r-2 border-ink bg-panel transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      <SidebarBrand />
      <nav className="flex-1 space-y-5 overflow-y-auto p-3" aria-label="Security operations">
        {navigationGroups.map((group, groupIndex) => (
          <SidebarGroup group={group} index={groupIndex} key={group.label} onNavigate={onClose} />
        ))}
      </nav>
      <SidebarStatus />
    </aside>
  );
}
