import type { NavigationGroup } from "../types";
import { SidebarNavItem } from "./SidebarNavItem";

interface SidebarGroupProps {
  group: NavigationGroup;
  index: number;
  onNavigate: () => void;
}

export function SidebarGroup({ group, index, onNavigate }: SidebarGroupProps) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between px-2.5 py-1 font-headline text-[11px] font-bold uppercase tracking-wider text-black/60">
        <span>{group.label}</span>
        <span className="font-mono text-[10px] text-blue">0{index + 1}</span>
      </div>
      {group.items.map((item, itemIndex) => (
        <SidebarNavItem active={index === 0 && itemIndex === 0} item={item} key={item.label} onClick={onNavigate} />
      ))}
    </div>
  );
}
