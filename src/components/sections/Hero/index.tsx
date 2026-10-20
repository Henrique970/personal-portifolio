import { ArrowRight, FileText } from "lucide-react"

export const Hero = () => {
    return (
        <section id="sobre" className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-16">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                <div className="lg:col-span-7 flex flex-col items-start gap-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-semibold uppercase tracking-wider">
                        Disponível para novos projetos
                    </span>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                        Meu nome é <span className="text-primary">Henrique dos Santos</span>
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

                {/* Lado Direito: Card Visual (Agora fora da div dos botões e como irmão, ocupando lg:col-span-5) */}
                <div className="lg:col-span-5 w-full">
                    <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl relative overflow-hidden">

                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

                        <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-error/80"></div>
                                <div className="w-3 h-3 rounded-full bg-warning/80"></div>
                                <div className="w-3 h-3 rounded-full bg-success/80"></div>
                            </div>

                            <span className="text-xs text-muted-foreground font-mono">
                                dev-profile.ts
                            </span>
                        </div>

                        <pre className="text-xs md:text-sm font-mono text-muted-foreground overflow-x-auto">
                            <code>
                                {`const developer = {
  name: "Henrique",
  role: "Frontend Developer",
  stack: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js"
  ],
  focus: "Clean Code & UX",
  status: "Coding the future..."
};`}
                            </code>
                        </pre>
                    </div>
                </div>

            </div>
        </section>
    )
}