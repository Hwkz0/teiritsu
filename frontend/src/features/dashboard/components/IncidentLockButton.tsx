import { Icon } from "../../../components/ui/Icon";

export function IncidentLockButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="flex items-center gap-1.5 border-2 border-ink bg-red px-2 py-1.5 font-headline text-[10px] font-bold uppercase text-white shadow-brutal-sm transition active:translate-x-0.5 active:translate-y-0.5 sm:px-3 sm:text-xs"
      onClick={onClick}
      type="button"
    >
      <Icon name="lock" />
      <span className="hidden sm:inline">Incident lock</span>
    </button>
  );
}
