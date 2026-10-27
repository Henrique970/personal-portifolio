import { projectsData } from "../../../data/projectsData";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <section id="projetos" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="px-3 py-1 bg-primary/15 text-primary border border-primary/30 rounded-full text-xs font-semibold uppercase tracking-wider animate-pulse shadow-sm shadow-primary/10">
                        Portfólio
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
                        Projetos em Destaque
                    </h2>
                    <p className="text-muted-foreground mt-4 text-base md:text-lg">
                        Explore aplicações reais desenvolvidas com foco em performance, arquitetura limpa e excelente experiência de usuário.
                    </p>
                </div>

                {/* Grid de Projetos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );
};