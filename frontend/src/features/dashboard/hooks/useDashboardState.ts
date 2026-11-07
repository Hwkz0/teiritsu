import { useMemo, useState } from "react";
import { streamEvents } from "../data";
import type { StreamFilter } from "../types";

export function useDashboardState() {
  const [filter, setFilter] = useState<StreamFilter>("all");
  const [query, setQuery] = useState("");
  const [locked, setLocked] = useState(false);
  const [status, setStatus] = useState("SOAR WORKER POOL: 32 WORKERS READY");

  const visibleEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return streamEvents.filter((event) => {
      const matchesFilter = filter === "all" || event.risk >= 90;
      const searchableText = [
        event.sender,
        event.source,
        event.target,
        event.department,
        event.subject,
        event.detail,
        event.classification,
      ]
        .join(" ")
        .toLowerCase();
      return matchesFilter && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [filter, query]);

  const toggleLock = () => {
    setLocked((current) => {
      const next = !current;
      setStatus(next ? "INCIDENT LOCK ENGAGED" : "INCIDENT LOCK RELEASED");
      return next;
    });
  };

  return {
    filter,
    setFilter,
    query,
    setQuery,
    locked,
    toggleLock,
    status,
    visibleEvents,
    notify: setStatus,
  };
}
