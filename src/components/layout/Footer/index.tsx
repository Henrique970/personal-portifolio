import { Mail, Code2 } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 py-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-blue-500" />
                    <span className="text-zinc-200 font-semibold text-sm">
                        Construido com React, TypeScript e Tailwind CSS
                    </span>
                </div>

                <nav className="flex items-center gap-6 text-sm">
                    <a href="#sobre"
                        className="hover:text-zinc-100 transition-colors">Sobre</a>
                    <a href="#skills"
                        className="hover:text-zinc-100 transition-colors">Skills</a>
                    <a href="#projetos"
                        className="hover:text-zinc-100 transition-colors">Projetos</a>
                    <a href="contato"
                        className="hover:text-zinc-100 transition-colors">Contato</a>
                </nav>

                <div className="flex items-center gap-4">
                    
                </div>

            </div>
        </footer>

    )
}