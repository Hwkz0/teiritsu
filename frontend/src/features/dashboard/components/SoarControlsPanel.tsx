import { Panel } from "../../../components/ui/Panel";
import { SectionHeading } from "../../../components/ui/SectionHeading";
import { quickActions } from "../data";
import { QuickActionButton } from "./QuickActionButton";
import { SoarStatusBar } from "./SoarStatusBar";

interface SoarControlsPanelProps {
  onAction: (message: string) => void;
  status: string;
}

export function SoarControlsPanel({ onAction, status }: SoarControlsPanelProps) {
  return (
    <Panel className="flex flex-col justify-between bg-panelHigh p-5 lg:col-span-6">
      <div>
        <SectionHeading
          icon="flash_on"
          title="Emergency mitigation & quick SOAR controls"
          trailing={
            <span className="bg-red px-2 py-0.5 font-mono text-[10px] font-bold text-white">OPERATOR L4 AUTH</span>
          }
        />
        <p className="mb-4 font-mono text-xs text-black/60">
          Direct execution handles triggering automated responses across configured tenants.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {quickActions.map((action) => (
            <QuickActionButton action={action} key={action.label} onAction={onAction} />
          ))}
        </div>
      </div>
      <SoarStatusBar status={status} />
    </Panel>
  );
}
