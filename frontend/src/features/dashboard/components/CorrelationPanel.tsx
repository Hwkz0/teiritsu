import { Panel } from "../../../components/ui/Panel";
import { SectionHeading } from "../../../components/ui/SectionHeading";
import { correlations } from "../operationsData";
import { CorrelationItem } from "./CorrelationItem";

export function CorrelationPanel() {
  return (
    <Panel className="p-5 lg:col-span-6">
      <SectionHeading
        icon="hub"
        title="Cross-vector pivoting & correlation feed"
        trailing={<span className="bg-panel px-2 py-0.5 font-mono text-[10px] font-bold">3 CONNECTORS ACTIVE</span>}
      />
      <div className="space-y-3">
        {correlations.map((correlation) => (
          <CorrelationItem correlation={correlation} key={correlation.title} />
        ))}
      </div>
    </Panel>
  );
}
