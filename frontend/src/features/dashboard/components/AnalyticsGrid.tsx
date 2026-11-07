import { AttackBreakdownCard } from "./AttackBreakdownCard";
import { ClusterLatencyCard } from "./ClusterLatencyCard";
import { TargetedDepartmentsCard } from "./TargetedDepartmentsCard";

export function AnalyticsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <AttackBreakdownCard />
      </div>
      <div className="lg:col-span-4">
        <TargetedDepartmentsCard />
      </div>
      <div className="lg:col-span-4">
        <ClusterLatencyCard />
      </div>
    </div>
  );
}
