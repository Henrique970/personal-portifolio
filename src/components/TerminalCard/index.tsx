import { useState, useEffect } from "react";
import type { TerminalCardProps } from "../../types/types";

export const TerminalCard = ({
    codeString,
    typingSpeed = 35,
    filename = "dev-profile.ts"
}: TerminalCardProps) => {
    const [displayedText, setDisplayedText] = useState<string>("");

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < codeString.length) {
                setDisplayedText(codeString.slice(0, index + 1));
                index++;
            } else {
                clearInterval(timer);
            }
        }, typingSpeed);

        return () => clearInterval(timer);
    }, [codeString, typingSpeed]);

    return (
        <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl relative overflow-hidden w-full">
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-accent to-primary" />

            <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-error/80" />
                    <div className="w-3 h-3 rounded-full bg-warning/80" />
                    <div className="w-3 h-3 rounded-full bg-success/80" />
                </div>

                <span className="text-xs text-muted-foreground font-mono">
                    {filename}
                </span>
            </div>

            <pre className="text-xs md:text-sm font-mono text-muted-foreground overflow-x-auto min-h-55">
                <code>
                    {displayedText}
                    <span className="animate-pulse text-primary font-bold">|</span>
                </code>
            </pre>
        </div>
    );
};