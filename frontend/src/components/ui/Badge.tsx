import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = "bg-panel" }: BadgeProps) {
  return (
    <span className={`inline-block px-2 py-0.5 font-headline text-[10px] font-bold uppercase ${className}`}>
      {children}
    </span>
  );
}
