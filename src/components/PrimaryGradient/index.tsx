
export const PrimaryGradient = () => {
    return (
        // Efeitos de fundo: degradê e brilhos sutis
        <div  
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
            {/* Brilho roxo central superior */}
            <div
                className="absolute -top-40 left-1/2 h-96 w-96
                    -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
            />

            {/* Brilho secundário lateral */}
            <div
                className="absolute right-0 top-1/3 h-72 w-72
                    translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
            />

            {/* Transição suave para o fundo */}
            <div
                className="absolute inset-0
                    bg-[linear-gradient(to_right,transparent_0%,var(--background)_90%)]
                    opacity-40"
            />
        </div>
    )
}