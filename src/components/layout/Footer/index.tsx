import { Code2, Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-border text-muted-foreground py-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Lado Esquerdo: Logo / Assinatura */}
                <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-semibold text-sm">
                        Construído com React, TypeScript e Tailwind CSS
                    </span>
                </div>

                {/* Centro: Links Rápidos */}
                <nav className="flex items-center gap-6 text-sm">
                    <a href="#sobre"
                        className="hover:text-foreground transition-colors">Sobre</a>
                    <a href="#skills"
                        className="hover:text-foreground transition-colors">Skills</a>
                    <a href="#projetos"
                        className="hover:text-foreground transition-colors">Projetos</a>
                    <a href="#contato"
                        className="hover:text-foreground transition-colors">Contato</a>
                </nav>

                {/* Lado Direito: Redes Sociais */}
                <div className="flex items-center gap-4">
                    <a href="https://github.com/Henrique970"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-2 bg-card hover:bg-muted text-card-foreground border border-border rounded-lg transition-colors">
                        <SiGithub className="w-4 h-4" />
                    </a>

                    <a href="https://linkedin.com/in/seu-usuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="p-2 bg-card hover:bg-muted text-card-foreground border border-border rounded-lg transition-colors">
                        <FaLinkedin className="w-4 h-4" />
                    </a>

                    <a href="mailto:henriquee1560@gmail.com"
                        aria-label="E-mail"
                        className="p-2 bg-card hover:bg-muted text-card-foreground border border-border rounded-lg transition-colors">
                        <Mail className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Copyright inferior */}
            <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
                &copy; {currentYear} • Todos os direitos reservados.
            </div>
        </footer>
    )
}