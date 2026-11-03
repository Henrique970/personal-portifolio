/**
 * Utilitário para rolagem suave (smooth scroll) entre as seções da página.
 * Considera a altura do Header fixo/sticky para não sobrepor o conteúdo.
 */
export const scrollToSection = (href: string) => {
    if (!href) return;

    // Se for o topo ou a seção "sobre" (hero inicial), rola até o topo suavemente
    if (href === "#" || href === "#top" || href === "#sobre") {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        if (href === "#" || href === "#top") {
            window.history.pushState(null, "", window.location.pathname);
        } else {
            window.history.pushState(null, "", href);
        }
        return;
    }

    const targetId = href.startsWith("#") ? href.slice(1) : href;
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        // Altura do header sticky (64px) mais um espaçamento confortável
        const headerOffset = 70;
        const elementTop = targetElement.getBoundingClientRect().top;
        const currentScroll = window.scrollY || document.documentElement.scrollTop;
        const targetScrollTop = Math.max(0, elementTop + currentScroll - headerOffset);

        window.scrollTo({
            top: targetScrollTop,
            behavior: "smooth",
        });

        window.history.pushState(null, "", `#${targetId}`);
    }
};
