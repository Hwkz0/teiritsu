interface ClusterNodeRowProps {
  name: string;
  detail: string;
}

export function ClusterNodeRow({ name, detail }: ClusterNodeRowProps) {
  return (
    <div className="flex justify-between gap-2 bg-panel px-2 py-1">
      <span className="flex items-center gap-1.5 font-bold">
        <span className="h-2 w-2 bg-ink" />
        {name}
      </span>
      <strong>{detail}</strong>
    </div>
  );
}
