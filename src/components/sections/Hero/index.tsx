import { ArrowRight, FileText } from "lucide-react";
import { TerminalCard } from "../../TerminalCard";
import { formattedCodeString } from "../../../data/developerProfile";

export const Hero = () => {
    return (
        <section id="sobre" className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-16">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                
                {/* Lado Esquerdo: Textos e Botões */}
                <div className="lg:col-span-7 flex flex-col items-start gap-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-semibold uppercase tracking-wider">
                        Disponível para novos projetos
                    </span>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                        Meu nome é <span className="text-primary">Henrique</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Desenvolvedor <span className="text-primary">Frontend</span> especializado em transformar ideias em experiências!
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <a href="#projetos"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                            Ver Projetos <ArrowRight className="w-4 h-4" />
                        </a>

                        <a href="#contato"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-card hover:bg-muted text-card-foreground border border-border font-medium rounded-xl transition-colors">
                            <FileText className="w-4 h-4" /> Contato Direto
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-5 w-full">
                    <TerminalCard codeString={formattedCodeString} filename={""} />
                </div>

            </div>
        </section>
    );
};