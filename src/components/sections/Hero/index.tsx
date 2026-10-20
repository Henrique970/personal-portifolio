import { ArrowRight, Mail } from "lucide-react";
import { TerminalCard } from "../../TerminalCard";
import { formattedCodeString } from "../../../data/developerProfile";

export const Hero = () => {
    return (
        <section id="sobre" className="min-h-[calc(100svh-8rem)] flex items-center justify-center py-12 sm:py-16">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
                <div className="lg:col-span-7 flex flex-col items-start gap-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/15 text-primary-400 border border-primary/30 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm shadow-primary/10">
                        <span aria-hidden="true" className="w-2 h-2 rounded-full bg-success animate-pulse motion-reduce:animate-none" />
                        Disponível para novos projetos
                    </span>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground text-balance">
                        Meu nome é <span className="text-primary">Henrique</span>
                    </h1>

                    <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Desenvolvedor <span className="text-primary">Front-end</span> focado em transformar ideias em interfaces modernas, acessíveis e responsivas com React e TypeScript.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <a href="https://github.com/Henrique970"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-primary-foreground font-medium rounded-xl hover:bg-primary-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring transition-colors shadow-lg shadow-primary/25">
                            Ver projetos no GitHub <ArrowRight aria-hidden="true" className="w-4 h-4" />
                        </a>

                        <a href="mailto:henriquee1560@gmail.com"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-card hover:bg-muted text-card-foreground border border-border font-medium rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring transition-colors">
                            <Mail aria-hidden="true" className="w-4 h-4" /> Entre em contato
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-5 w-full max-w-xl mx-auto lg:max-w-none">
                    <TerminalCard codeString={formattedCodeString} filename="dev-profile.ts" />
                </div>

            </div>
        </section>
    );
};