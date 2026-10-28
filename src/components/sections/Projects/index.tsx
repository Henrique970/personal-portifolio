
import { projectsData } from "../../../data/projectsData";
import { ProjectCard } from "./ProjectCard";

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
            className="relative isolate overflow-hidden bg-background py-20 sm:py-24"
        >
            {/* Efeitos de fundo: degradê e brilhos sutis */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                {/* Brilho roxo central superior */}
                <div
                    className="absolute -top-40 left-1/2 h-96 w-96
                    -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
                />

                {/* Brilho secundário lateral */}
                <div
                    className="absolute right-0 top-1/3 h-72 w-72
                    translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
                />

                {/* Transição suave para o fundo */}
                <div
                    className="absolute inset-0
                    bg-[linear-gradient(to_right,transparent_0%,var(--background)_90%)]
                    opacity-40"
                />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-4">
                {/* Cabeçalho da seção */}
                <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                        <span
                            aria-hidden="true"
                            className="h-2 w-2 rounded-full bg-success animate-pulse motion-reduce:animate-none"
                        />
                        Portfólio
                    </span>

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
