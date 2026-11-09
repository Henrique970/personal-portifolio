
import { projectsData } from "../../../data/projectsData";
import { ProjectCard } from "./ProjectCard";
import { PrimaryGradient } from "../../PrimaryGradient"
import { AdCard } from "../../AdCard";

export const Projects = () => {
    const featuredIndex = projectsData.findIndex((project) => project.featured);
    const mainProjectIndex = featuredIndex === -1 ? 0 : featuredIndex;
    const mainProject = projectsData[mainProjectIndex];

    const secondaryProjects = projectsData.filter(
        (project, index) =>
            index !== mainProjectIndex && project.id !== mainProject?.id,
    );

    return (
        <section
            id="projetos"
            className="scroll-mt-20 relative isolate overflow-hidden bg-background py-20 sm:py-24"
        >
            <PrimaryGradient />

            <div className="relative z-10 mx-auto max-w-6xl px-4">
                {/* Cabeçalho da seção */}
                <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
                    
                    <AdCard>Portifólio</AdCard>

                    <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl">
                        Projetos <span className="text-primary">em</span> Destaque
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Explore aplicações reais desenvolvidas com foco em
                        performance, arquitetura limpa e excelente experiência
                        de usuário.
                    </p>
                </div>

                {/* Projeto principal */}
                {mainProject && (
                    <ProjectCard project={mainProject} featured />
                )}

                {/* Projetos secundários */}
                {secondaryProjects.length > 0 && (
                    <div className="mt-12 sm:mt-14">
                        <h3 className="mb-6 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                            Mais projetos
                        </h3>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {secondaryProjects.map((project, index) => (
                                <ProjectCard
                                    key={`${project.id}-${index}`}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
