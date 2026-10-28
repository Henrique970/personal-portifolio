import { Code2, ExternalLink } from "lucide-react";
import type { ProjectItem } from "../../../types/types";

interface ProjectCardProps {
    project: ProjectItem;
    featured?: boolean;
}

export const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
    return (
        <article className={`group overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xl transition-colors hover:border-primary/50 ${featured ? "grid lg:grid-cols-[1.15fr_0.85fr]" : "flex flex-col"}`}>
            <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver ${project.title} ao vivo`}
                className={`block overflow-hidden bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-ring ${featured ? "border-b border-border lg:flex lg:flex-col lg:border-b-0 lg:border-r" : "border-b border-border"}`}
            >
                <div className="flex items-center justify-between gap-3 border-b border-border/60 bg-card/80 px-4 py-3">
                    <div className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
                        <span className="size-2.5 rounded-full bg-error/80" />
                        <span className="size-2.5 rounded-full bg-warning/80" />
                        <span className="size-2.5 rounded-full bg-success/80" />
                    </div>
                    <span className="truncate rounded-md border border-border/40 bg-muted px-3 py-1 font-mono text-[10px] text-muted-foreground">
                        {project.liveUrl.replace(/^https?:\/\//, "")}
                    </span>
                    <ExternalLink aria-hidden="true" className="size-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>

                <div className={`overflow-hidden ${featured ? "aspect-[4/3] lg:aspect-auto lg:min-h-0 lg:flex-1" : "aspect-video"}`}>
                    <img
                        src={project.image}
                        alt={`Captura do projeto ${project.title}`}
                        className="size-full object-cover"
                    />
                </div>
            </a>

            <div className={`flex flex-col ${featured ? "justify-center p-6 sm:p-8 lg:p-10" : "grow p-5 sm:p-6"}`}>
                <div>
                    <h3 className={`font-bold text-foreground transition-colors group-hover:text-primary ${featured ? "text-2xl sm:text-3xl" : "text-lg"}`}>
                        {project.title}
                    </h3>
                    <p className={`mt-3 leading-relaxed text-muted-foreground ${featured ? "text-sm sm:text-base" : "text-sm"}`}>
                        {project.description}
                    </p>
                </div>

                <div className={`flex flex-wrap gap-2 ${featured ? "mt-6" : "mt-5"}`}>
                    {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className={`flex flex-wrap gap-3 border-t border-border ${featured ? "mt-7 pt-6" : "mt-6 pt-5"}`}>
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Demonstração ao vivo de ${project.title}`}
                        className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                        Live Demo <ExternalLink aria-hidden="true" className="size-3.5" />
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Código-fonte de ${project.title}`}
                        className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-medium text-card-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                        <Code2 aria-hidden="true" className="size-3.5" /> Código
                    </a>
                </div>
            </div>
        </article>
    );
};
