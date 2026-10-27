import { Code2, ExternalLink } from "lucide-react";
import type { ProjectItem } from "../../../types/types";

interface ProjectCardProps {
    project: ProjectItem;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="group bg-card border border-border/80 rounded-3xl overflow-hidden shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between">
            
            <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative bg-muted/50 border-b border-border overflow-hidden group-hover:opacity-95 transition-opacity"
            >
                <div className="flex items-center justify-between px-4 py-3 bg-card/80 border-b border-border/60">
                    <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-error/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-warning/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-success/80" />
                    </div>

                    <span className="text-[10px] font-mono text-muted-foreground bg-muted px-3 py-1 rounded-md border border-border/40">
                        {project.liveUrl.replace("https://", "")}
                    </span>

                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <div className="relative aspect-video overflow-hidden">
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-4 py-2 bg-background/90 text-foreground font-medium text-xs rounded-xl shadow-lg border border-border">
                            Ver Projeto ao Vivo 🚀
                        </span>
                    </div>
                </div>
            </a>

            <div className="p-6 flex flex-col grow justify-between">
                <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {project.description}
                    </p>
                </div>

                <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="text-xs font-mono px-2.5 py-1 bg-muted rounded-lg border border-border text-muted-foreground">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-border">
                        <a 
                            href={project.liveUrl} 
                            target="_blank" 
                    rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground font-medium rounded-xl text-xs hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
                        >
                            Live Demo <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-card hover:bg-muted text-card-foreground border border-border font-medium rounded-xl text-xs transition-colors"
                        >
                            <Code2 className="w-3.5 h-3.5" /> Código
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};