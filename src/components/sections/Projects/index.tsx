import type { ProjectProps } from "../../../types/types"

export const Projects = ({ project }: ProjectProps) => {
    return (
        <div className="group bg-card border border-border/80 rounded-xl overflow-hidden shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between">
            <a href={project.liveUrl}
            target="_blank"
            rel="nooper noroferrer"
            className="block relative bg-muted/50 border-b border-border overflow-hidden group-hover:opacity-95 transition-opacity">

            </a>
        </div>
    )
}