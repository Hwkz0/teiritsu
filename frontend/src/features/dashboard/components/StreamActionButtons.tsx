import { IconButton } from "../../../components/ui/IconButton";

interface StreamActionButtonsProps {
  sender: string;
  clean: boolean;
  onAction: (message: string) => void;
}

export function StreamActionButtons({ sender, clean, onAction }: StreamActionButtonsProps) {
  const actions = clean ? ["visibility", "code"] : ["biotech", "code", "domain_disabled"];
  return (
    <div className="inline-flex gap-1">
      {actions.map((action) => (
        <IconButton
          className={action === "domain_disabled" ? "bg-red text-white" : undefined}
          icon={action}
          key={action}
          label={`${action} ${sender}`}
          onClick={() => onAction(`${action.replaceAll("_", " ")} queued for ${sender}`)}
        />
      ))}
    </div>
  );
}
