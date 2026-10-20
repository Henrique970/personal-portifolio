import { useState, useEffect } from "react";
import type { TerminalCardProps } from "../../types/types";

export const TerminalCard = ({
    codeString,
    typingSpeed = 35,
    filename = "dev-profile.ts"
}: TerminalCardProps) => {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(
        () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );

    useEffect(() => {
        const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
        const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches);
        };

        motionPreference.addEventListener("change", handleMotionPreferenceChange);
        return () => motionPreference.removeEventListener("change", handleMotionPreferenceChange);
    }, []);

    useEffect(() => {
        if (prefersReducedMotion) return;

        let index = 0;
        const timer = setInterval(() => {
            index++;
            setDisplayedText(codeString.slice(0, index));
            if (index >= codeString.length) {
                clearInterval(timer);
            }
        }, typingSpeed);

        return () => clearInterval(timer);
    }, [codeString, prefersReducedMotion, typingSpeed]);

    return (
        <div role="region" aria-label="Código de perfil do desenvolvedor" className="bg-card border border-border rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden w-full">
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-accent to-primary" />

            <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
                <div className="flex items-center gap-2">
                    <div aria-hidden="true" className="w-3 h-3 rounded-full bg-error/80" />
                    <div aria-hidden="true" className="w-3 h-3 rounded-full bg-warning/80" />
                    <div aria-hidden="true" className="w-3 h-3 rounded-full bg-success/80" />
                </div>

                <span className="text-xs text-muted-foreground font-mono">
                    {filename}
                </span>
            </div>

            <pre className="text-xs md:text-sm font-mono text-muted-foreground whitespace-pre-wrap break-words min-h-55">
                <code>
                    {prefersReducedMotion ? codeString : displayedText}
                    <span aria-hidden="true" className="animate-pulse motion-reduce:animate-none text-primary font-bold">|</span>
                </code>
            </pre>
        </div>
    );
};