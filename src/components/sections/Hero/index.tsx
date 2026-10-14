
export const Hero = () => {
    return (
        <section id="sobre" className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-16">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-co.s-12 gap-12 items center w-full">
                <div className="lg:col-span-7 flex flex-col items-start gap-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-semibold uppercase tracking-wider">
                        Disponível para novos projetos
                    </span>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                        Meu nome é <span className="text-primary">Henrique dos Santos</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed ">
                        Desenvolvedor <span className="text-primary">Frontend</span> especializado em transformar ideias em experiências!
                    </p>
                </div>
            </div>
        </section>
    )
}