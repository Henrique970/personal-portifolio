import type { DiplomaItem } from "../types/types";

import certificadoFrontend from "../assets/images/certificadofrontend.jpg"

export const diplomasData: DiplomaItem[] = [
    {
        id: "1",
        title: "Desenvolvimento Frontend React & TypeScript",
        institution: "Dev Quest",
        issueDate: "2026",
        image: certificadoFrontend, // Substitua pelo print do seu diploma
        category: "Certificação",
    },
    {
        id: "2",
        title: "Técnico de Informática",
        institution: "Instituto Federal do Piauí",
        issueDate: "2020",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop", // Substitua pelo print do seu diploma
        category: "Certificação",
    },
];