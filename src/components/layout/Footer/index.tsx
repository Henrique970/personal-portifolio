import { Code2, Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

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
                    <a href="#contato"
                        className="hover:text-zinc-100 transition-colors">Contato</a>
                </nav>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/Henrique970"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-zinc-100 rounded-lg transition-colors">
                        <SiGithub className="w-4 h-4" />
                    </a>

                    <a href="https://linkedin.com/in/seu-usuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-zinc-100 rounded-lg transition-colors">
                        <FaLinkedin className="w-4 h-4" />
                    </a>

                    <a href="mailto:henriquee1560@gmail.com"
                        aria-label='E-mail'
                        className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-zinc-100 rounded-lg transition-colors">
                        <Mail className="w-4 h-4" />
                    </a>
                </div>
            </div>
            <div className='max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-zinc-900 text-center text-xs text-zinc-500'>
               &copy; {currentYear} • Todos os direitos reservados.
            </div>
        </footer >

    )
}