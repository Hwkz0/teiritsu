import { Icon } from "./Icon";

interface IconButtonProps {
  label: string;
  icon: string;
  onClick: () => void;
  className?: string;
  title?: string;
}

export function IconButton({
  label,
  icon,
  onClick,
  className = "bg-panel hover:bg-panelHigh",
  title,
}: IconButtonProps) {
  return (
    <button aria-label={label} className={`p-1 ${className}`} onClick={onClick} title={title ?? label} type="button">
      <Icon name={icon} />
    </button>
  );
}
