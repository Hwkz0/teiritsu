import type { ReactNode } from "react";
import { Icon } from "./Icon";

interface SectionHeadingProps {
  title: string;
  icon?: string;
  trailing?: ReactNode;
}

export function SectionHeading({ title, icon, trailing }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-between pb-3">
      <h3 className="flex items-center gap-2 font-headline text-sm font-bold uppercase tracking-wider">
        {icon && <Icon name={icon} />}
        {title}
      </h3>
      {trailing}
    </div>
  );
}
