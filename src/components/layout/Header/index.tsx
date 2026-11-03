import { useState, useEffect } from "react";
import { scrollToSection } from "../../../utils/scroll";

const navLinks = [
    { name: "Sobre", href: "#sobre", id: "sobre" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projetos", href: "#projetos", id: "projetos" },
    { name: "Contato", href: "#contato", id: "contato" },
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("sobre");

    // Observa o scroll da página para destacar a seção ativa
    useEffect(() => {
        const handleScroll = () => {
            // Se estiver no final da página, destaca "contato" (footer)
            const isNearBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 80;

            if (isNearBottom) {
                setActiveSection("contato");
                return;
            }

            const sectionIds = ["sobre", "skills", "projetos", "contato"];
            const scrollPosition = window.scrollY + 140;

            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const section = document.getElementById(sectionIds[i]);
                if (section) {
                    if (scrollPosition >= section.offsetTop) {
                        setActiveSection(sectionIds[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Fecha o menu móvel ao redimensionar para telas maiores
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Fecha o menu móvel se a tecla Escape for pressionada
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        const targetId = href.replace("#", "");
        setActiveSection(targetId || "sobre");
        scrollToSection(href);
    };

    return (
        <header className="sticky top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <a
                    href="#sobre"
                    onClick={(e) => handleNavClick(e, "#sobre")}
                    className="text-foreground font-bold text-lg hover:text-primary transition-colors cursor-pointer"
                >
                    Meu Portifólio
                </a>

                {/* Navegação Desktop com rolagem suave */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`transition-colors relative py-1 cursor-pointer ${
                                    isActive
                                        ? "text-primary font-semibold"
                                        : "text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                {link.name}
                                {isActive && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full transition-all" />
                                )}
                            </a>
                        );
                    })}
                </nav>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                    className="md:hidden bg-secondary text-secondary-foreground rounded-2xl focus:outline-none px-4 py-1.5 border border-border cursor-pointer transition-colors hover:bg-secondary/80"
                >
                    {isOpen ? "Fechar" : "Menu"}
                </button>
            </div>

            {/* Menu Mobile Overlay com rolagem suave */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border px-4 py-3 flex flex-col gap-1 shadow-xl">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`transition-colors pl-4 py-3 rounded-lg flex items-center justify-between text-sm font-medium cursor-pointer ${
                                    isActive
                                        ? "text-primary bg-primary/10 font-semibold"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                                }`}
                            >
                                <span>{link.name}</span>
                                {isActive && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                )}
                            </a>
                        );
                    })}
                </div>
            )}
        </header>
    );
};
