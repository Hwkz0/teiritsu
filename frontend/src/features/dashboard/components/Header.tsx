import { IncidentLockButton } from "./IncidentLockButton";
import { MobileNavigationButton } from "./MobileNavigationButton";
import { NotificationButton } from "./NotificationButton";
import { OperatorProfile } from "./OperatorProfile";
import { TelemetrySearch } from "./TelemetrySearch";
import { TelemetryStatus } from "./TelemetryStatus";
import { TelemetrySummary } from "./TelemetrySummary";

interface HeaderProps {
  query: string;
  onQueryChange: (query: string) => void;
  onLock: () => void;
  onMenu: () => void;
}

export function Header({ query, onQueryChange, onLock, onMenu }: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b-2 border-ink bg-paper px-4 lg:left-72 lg:px-6">
      <div className="flex items-center gap-3">
        <MobileNavigationButton onClick={onMenu} />
        <TelemetryStatus />
        <TelemetrySummary />
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <TelemetrySearch onChange={onQueryChange} query={query} />
        <IncidentLockButton onClick={onLock} />
        <NotificationButton />
        <OperatorProfile />
      </div>
    </header>
  );
}
