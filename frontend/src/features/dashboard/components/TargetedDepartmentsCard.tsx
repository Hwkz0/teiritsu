import { Icon } from "../../../components/ui/Icon";
import { targetedDepartments } from "../analyticsData";
import { AnalyticsPanel } from "./AnalyticsPanel";

export function TargetedDepartmentsCard() {
  return (
    <AnalyticsPanel icon="radar" title="Targeted Depts & VIP Surface">
      <p className="font-mono text-xs text-black/60">Blast radius exposure index & target concentration</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {targetedDepartments.map((department) => (
          <div className="bg-panel p-3 text-center" key={department.name}>
            <strong className={`font-headline text-2xl ${department.color}`}>{department.value}</strong>
            <span className="mt-1 block font-headline text-xs font-bold uppercase">{department.name}</span>
            <span className="font-mono text-[10px] text-black/60">{department.detail}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-red/15 p-3">
        <div className="flex items-center gap-2 font-headline text-xs font-bold uppercase text-red">
          <Icon name="warning" />
          VIP Shield Active
        </div>
        <p className="mt-0.5 font-mono text-[11px]">
          Strict DMARC quarantine enforcement applied to 44 designated executive mailboxes.
        </p>
      </div>
    </AnalyticsPanel>
  );
}
