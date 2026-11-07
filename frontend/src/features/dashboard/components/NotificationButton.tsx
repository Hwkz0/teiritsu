import { Icon } from "../../../components/ui/Icon";

export function NotificationButton() {
  return (
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
  );
}
