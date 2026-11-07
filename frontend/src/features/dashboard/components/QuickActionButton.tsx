import { Icon } from "../../../components/ui/Icon";
import type { DashboardAction } from "../types";

interface QuickActionButtonProps {
  action: DashboardAction;
  onAction: (message: string) => void;
}

export function QuickActionButton({ action, onAction }: QuickActionButtonProps) {
  return (
    <button
      className={`flex items-center justify-between p-3 text-left shadow-brutal-sm transition hover:bg-red hover:text-white ${action.className}`}
      onClick={() => onAction(`${action.label} queued for operator review`)}
      type="button"
    >
      <span>
        <strong className="block font-headline text-xs uppercase">{action.label}</strong>
        <span className="font-mono text-[10px] opacity-70">{action.detail}</span>
      </span>
      <Icon name={action.icon} />
    </button>
  );
}
