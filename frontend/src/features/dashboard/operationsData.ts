export interface Correlation {
  icon: string;
  title: string;
  detail: string;
  result: string;
}

export const correlations: readonly Correlation[] = [
  {
    icon: "computer",
    title: "CrowdStrike EDR Fleet Sync",
    detail: "12 host processes matched attachment hash d41d8cd98f00b204. Host isolation playbooks auto-staged.",
    result: "12 HOSTS LINKED",
  },
  {
    icon: "fingerprint",
    title: "Okta / Azure AD IdP Federation",
    detail: "2 user accounts compromised via OAuth device code phish were automatically suspended.",
    result: "2 ACCTS SUSPENDED",
  },
  {
    icon: "receipt_long",
    title: "Splunk / Sentinel Telemetry Bridge",
    detail: "HEC socket healthy. 24,198 IOCs forwarded past 60 min. Zero buffer drop.",
    result: "100% SYNCED",
  },
];
