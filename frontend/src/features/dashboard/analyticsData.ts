export interface BreakdownItem {
  label: string;
  percent: number;
  barColor: string;
  textColor: string;
}

export interface TargetedDepartment {
  value: string;
  name: string;
  detail: string;
  color: string;
}

export const attackBreakdown: readonly BreakdownItem[] = [
  { label: "BEC / Impersonation Spoof", percent: 38, barColor: "bg-red", textColor: "text-red" },
  { label: "Malicious QR-Code Quishing", percent: 27, barColor: "bg-ink", textColor: "text-ink" },
  { label: "Zero-Hour Weaponized Attachments", percent: 21, barColor: "bg-yellow", textColor: "text-yellow" },
  { label: "Lookalike Typosquatting", percent: 14, barColor: "bg-blue", textColor: "text-blue" },
];

export const targetedDepartments: readonly TargetedDepartment[] = [
  { value: "34%", name: "FINANCE", detail: "ACH & Wire Fraud Focus", color: "text-red" },
  { value: "28%", name: "EXEC OFFICE", detail: "C-Suite Impersonation", color: "text-ink" },
  { value: "22%", name: "DEVOPS/CLOUD", detail: "IAM & Token Phishing", color: "text-blue" },
  { value: "16%", name: "HR & PEOPLE", detail: "Resume Dropper Payload", color: "text-black/60" },
];

export const clusterNodes = [
  ["NODE-US-EAST-01", "14ms latency // 9.2k msg/s"],
  ["NODE-EU-CENTRAL-02", "19ms latency // 4.1k msg/s"],
  ["NODE-AP-SOUTH-01", "21ms latency // 1.5k msg/s"],
] as const;
