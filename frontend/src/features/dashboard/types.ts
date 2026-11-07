export type StreamFilter = "all" | "critical";

export type Classification =
  "BEC / IMPERSONATION" | "RANSOMWARE CARRIER" | "CREDENTIAL HARVEST" | "QR QUISHING" | "CLEAN / AUTHENTIC";

export interface StreamEvent {
  timestamp: string;
  sender: string;
  source: string;
  target: string;
  department: string;
  subject: string;
  detail: string;
  classification: Classification;
  verdict: string;
  risk: number;
  clean: boolean;
}

export interface NavigationGroup {
  label: string;
  items: ReadonlyArray<{
    icon: string;
    label: string;
    badge?: string;
  }>;
}

export interface Metric {
  label: string;
  value: string;
  note: string;
  icon: string;
  iconColor: string;
  barColor: string;
  progress: number;
}

export interface DashboardAction {
  label: string;
  detail: string;
  icon: string;
  className: string;
}
