import { skillsData } from "../../../data/skillsData";
import {
    SiReact, SiTypescript, SiTailwindcss, SiNextdotjs,
    SiJavascript, SiNodedotjs, SiGit, SiVite, SiFigma, SiHtml5, SiVscodium,
    SiGithubcopilot
} from "react-icons/si";
import { ArrowUpRight, Cpu, Database, Layout, Layers, Sparkles } from "lucide-react";

const getSkillIcon = (iconName: string) => {
    switch (iconName) {
        case "react": return <SiReact className="w-6 h-6 text-cyan-400" />;
        case "typescript": return <SiTypescript className="w-6 h-6 text-blue-500" />;
        case "tailwind": return <SiTailwindcss className="w-5 h-5 text-teal-400" />;
        case "nextjs": return <SiNextdotjs className="w-5 h-5 text-foreground" />;
        case "html": return <SiHtml5 className="w-5 h-5 text-orange-600" />;
        case "javascript": return <SiJavascript className="w-5 h-5 text-yellow-400" />;
        case "tanstack": return <Database className="w-5 h-5 text-red-500" />;
        case "nodejs": return <SiNodedotjs className="w-5 h-5 text-green-500" />;
        case "git": return <SiGit className="w-5 h-5 text-orange-500" />;
        case "ux": return <Layout className="w-5 h-5 text-pink-400" />;
        case "vite": return <SiVite className="w-5 h-5 text-purple-400" />;
        case "figma": return <SiFigma className="w-5 h-5 text-pink-500" />;
        case "frontend-mentor": return <Layers className="w-5 h-5 text-blue-400" />;
        case "vscode": return <SiVscodium className="w-5 h-5 text-blue-400" />;
        case "gemini": return <Sparkles className="w-5 h-5 text-blue-400" />;
        case "claude": return <Sparkles className="w-5 h-5 text-amber-500" />;
        case "lovable": return <Sparkles className="w-5 h-5 text-pink-500" />;
        case "copilot": return <SiGithubcopilot className="w-5 h-5 text-foreground" />;
        default: return <Cpu className="w-5 h-5 text-primary" />;
    }
};

const gridSpans = [
    "lg:col-span-7",
    "lg:col-span-5",
    "lg:col-span-5",
    "lg:col-span-7",
];

export const Skills = () => {
    return (
        <section id="skills" className="relative isolate overflow-hidden bg-background py-20 sm:py-24">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute right-0 top-1/2 h-72 w-72 translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,var(--background)_90%)] opacity-40" />
            </div>

            <div className="mx-auto max-w-6xl px-4">
                <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Tecnologias & habilidades
                    </span>
                    <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl">
                        Meu stack técnico <span className="text-primary">&</span> ecossistema
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Ferramentas, linguagens e tecnologias que impulsionam minha produtividade e transformam ideias em experiências digitais.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12 lg:gap-6">
                    {skillsData.map((group, index) => {
                        const featuredSkills = group.skills.filter(
                            (skill) => skill.icon === "react" || skill.icon === "typescript"
                        );
                        const regularSkills = group.skills.filter(
                            (skill) => skill.icon !== "react" && skill.icon !== "typescript"
                        );

                        return (
                            <article
                                key={group.categoryName}
                                className={`group relative flex min-w-0 flex-col overflow-hidden rounded-3xl border border-border/80 bg-card/80 p-5 shadow-lg shadow-foreground/3 backdrop-blur-sm transition duration-300 motion-reduce:transition-none hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 sm:p-6 ${gridSpans[index] ?? "lg:col-span-6"}`}
                            >
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 motion-reduce:transition-none group-hover:opacity-100"
                                />
                                <div className="relative flex items-start justify-between gap-4">
                                    <div>
                                        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                                            {String(index + 1).padStart(2, "0")} <span className="text-primary">/</span> stack
                                        </p>
                                        <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            {group.categoryName}
                                        </h3>
                                    </div>
                                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/60 text-primary transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
                                        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                                    </span>
                                </div>

                                {featuredSkills.length > 0 && (
                                    <div className="relative mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        {featuredSkills.map((skill) => (
                                            <div
                                                key={skill.icon}
                                                className="rounded-2xl border border-primary/20 bg-linear-to-br from-primary/10 via-primary/4 to-transparent p-4 transition-colors duration-300 motion-reduce:transition-none group-hover:border-primary/30 sm:p-5"
                                            >
                                                <div className="flex items-center justify-between gap-3">
                                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/80 bg-background/80 shadow-sm transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-reduce:transition-none">
                                                        {getSkillIcon(skill.icon)}
                                                    </span>
                                                    <span className="rounded-full border border-primary/20 bg-background/60 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                                                        {skill.level}
                                                    </span>
                                                </div>
                                                <p className="mt-4 text-base font-semibold text-foreground">{skill.name}</p>
                                                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-primary/80">
                                                    Tecnologia em destaque
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <ul className={`relative mt-4 grid gap-2 ${featuredSkills.length > 0 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
                                    {regularSkills.map((skill) => (
                                        <li
                                            key={skill.icon}
                                            className="flex min-w-0 items-center justify-between gap-2 rounded-xl border border-border/60 bg-muted/35 px-3 py-2.5 transition-colors duration-300 motion-reduce:transition-none hover:border-primary/25 hover:bg-muted/70"
                                        >
                                            <span className="flex min-w-0 items-center gap-2.5">
                                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-background/80">
                                                    {getSkillIcon(skill.icon)}
                                                </span>
                                                <span className="truncate text-xs font-medium text-foreground sm:text-sm">
                                                    {skill.name}
                                                </span>
                                            </span>
                                            <span className="shrink-0 rounded-md bg-background/80 px-2 py-1 font-mono text-[9px] text-muted-foreground sm:text-[10px]">
                                                {skill.level}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
