import { Icon } from "../../../components/ui/Icon";

interface MobileNavigationButtonProps {
  onClick: () => void;
}

export function MobileNavigationButton({ onClick }: MobileNavigationButtonProps) {
  return (
    <button
      aria-label="Open navigation"
      className="grid h-8 w-8 place-items-center border border-ink bg-panel lg:hidden"
      onClick={onClick}
      type="button"
    >
      <Icon name="menu" />
    </button>
  );
}
