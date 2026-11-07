import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("SecOps dashboard", () => {
  it("renders the telemetry stream and dashboard status", () => {
    render(<App />);
    expect(screen.getByText("Elevated // Active Mitigation")).toBeInTheDocument();
    expect(screen.getByText("Realtime inbound ingestion & payload forensic stream")).toBeInTheDocument();
    expect(screen.getByText("SOAR WORKER POOL: 32 WORKERS READY")).toBeInTheDocument();
  });

  it("filters the stream to critical records", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByTestId("critical-filter"));
    expect(screen.getByText("SHOWING 3 OF 18,429 RECENT VERDICTS // AUTO-POLL: 1000ms")).toBeInTheDocument();
    expect(screen.getByText("ceo-direct@acme-corp.co")).toBeInTheDocument();
  });
});
