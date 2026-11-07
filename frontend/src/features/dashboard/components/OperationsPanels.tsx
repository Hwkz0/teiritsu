import { CorrelationPanel } from "./CorrelationPanel";
import { SoarControlsPanel } from "./SoarControlsPanel";

interface OperationsPanelsProps {
  onAction: (message: string) => void;
  status: string;
}

export function OperationsPanels({ onAction, status }: OperationsPanelsProps) {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      <CorrelationPanel />
      <SoarControlsPanel onAction={onAction} status={status} />
    </section>
  );
}
