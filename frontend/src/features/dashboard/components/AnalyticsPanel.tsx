import type { ReactNode } from "react";
import { Panel } from "../../../components/ui/Panel";
import { SectionHeading } from "../../../components/ui/SectionHeading";

interface AnalyticsPanelProps {
  title: string;
  icon: string;
  children: ReactNode;
}

export function AnalyticsPanel({ title, icon, children }: AnalyticsPanelProps) {
  return (
    <Panel className="flex h-full flex-col justify-between p-5">
      <div>
        <SectionHeading icon={icon} title={title} />
        {children}
      </div>
    </Panel>
  );
}
