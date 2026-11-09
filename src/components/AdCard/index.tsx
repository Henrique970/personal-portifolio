import type { ReactNode } from "react";

interface SectionBadgeProps {
    children: ReactNode;
}

export function AdCard({ children }: SectionBadgeProps) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full bg-success animate-pulse motion-reduce:animate-none"
            />
            {children}
        </span>
    );
}