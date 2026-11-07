const columns = [
  "Timestamp (UTC)",
  "Inbound envelope / sender",
  "Target / dept",
  "Subject / payload metrics",
  "Classification",
  "Verdict",
  "Risk",
  "Forensic actions",
];

export function StreamTableHeader() {
  return (
    <thead>
      <tr className="bg-panelHigh font-headline text-[11px] font-bold uppercase tracking-wider">
        {columns.map((column) => (
          <th
            className={`p-2.5 ${column === "Risk" ? "text-center" : column === "Forensic actions" ? "text-right" : ""}`}
            key={column}
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
}
