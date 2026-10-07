import { useState } from "react"

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 z-50">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <a href="#"
                    className="text-zinc-100 font-bold text-lg hover:text-blue-400 transition-colors">
                    Meu Portifólio
                </a>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
                    <a href="#sobre" className="hover:text-zinc-100 transition-colors">Sobre</a>
                    <a href="#skills" className="hover:text-zinc-100 transition-colors">Skills</a>
                    <a href="#projetos" className="hover:text-zinc-100 transition-colors">Projetos</a>
                    <a href="#contato" className="hover:text-zinc-100 transition-colors">Contato</a>
                </nav>

                <button onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden bg-zinc-400 hover:text-zinc-100 focus:outline-none">
                    {isOpen ? "Fechar" : "Menu"}
                </button>
                

            </div>
        </header>
    )
}