import { useState } from "react"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <a href="#"
                    className="text-foreground font-bold text-lg hover:text-primary transition-colors">
                    Meu Portifólio
                </a>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
                    <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
                    <a href="#projetos" className="hover:text-foreground transition-colors">Projetos</a>
                    <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
                </nav>

                <button onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden bg-secondary text-secondary-foreground rounded-2xl focus:outline-none px-4 py-1.5 border border-border">
                    {isOpen ? "Fechar" : "Menu"}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-background border-b border-border px-4 py-4 flex flex-col gap-4">
                    <a 
                        href="#sobre"
                        onClick={() => setIsOpen(false)}
                        className="text-muted-foreground hover:text-foreground border-b border-border/50 pl-4 pb-4 transition-colors"
                    >Sobre</a>
                    <a 
                        href="#skills"
                        onClick={() => setIsOpen(false)}
                        className="text-muted-foreground hover:text-foreground border-b border-border/50 pl-4 pb-4 transition-colors"
                    >Skills</a>
                    <a 
                        href="#projetos"
                        onClick={() => setIsOpen(false)}
                        className="text-muted-foreground hover:text-foreground border-b border-border/50 pl-4 pb-4 transition-colors"
                    >Projetos</a>
                    <a 
                        href="#contato"
                        onClick={() => setIsOpen(false)}
                        className="text-muted-foreground hover:text-foreground pl-4 transition-colors"
                    >Contato</a>
                </div>
            )}
        </header>
    )
}