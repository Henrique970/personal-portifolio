import type { SkillCategory } from "../types/types";

export const skillsData: SkillCategory[] = [
    {
        categoryName: "Frontend",
        skills: [
            { name: "React", icon: "react", level: "Avançado" },
            { name: "TypeScript", icon: "typescript", level: "Avançado" },
            { name: "Tailwind CSS", icon: "tailwind", level: "Avançado" },
            { name: "Next.js", icon: "nextjs", level: "Intermediário" },
            { name: "HTML5 / CSS3", icon: "html", level: "Avançado" },
        ]
    },
    {
        categoryName: "Core & State",
        skills: [
            { name: "JavaScript (ES6+)", icon: "javascript", level: "Avançado" },
            { name: "TanStack Query", icon: "tanstack", level: "Avançado" },
            { name: "Node.js", icon: "nodejs", level: "Intermediário" },
            { name: "Git & GitHub", icon: "git", level: "Avançado" },
        ]
    },
    {
        categoryName: "Ferramentas & UI",
        skills: [
            { name: "UX Design & UI", icon: "ux", level: "Avançado" },
            { name: "Vite", icon: "vite", level: "Avançado" },
            { name: "Figma", icon: "figma", level: "Intermediário" },
            { name: "Frontend Mentor", icon: "frontend-mentor", level: "Avançado" },
            { name: "VS Code", icon: "vscode", level: "Avançado" },
        ]
    },
    {
        categoryName: "IAs & Ecossistema",
        skills: [
            { name: "Google Gemini e Antigravity", icon: "gemini", level: "Avançado" },
            { name: "Claude Code", icon: "claude", level: "Avançado" },
            { name: "Lovable.dev", icon: "lovable", level: "Avançado" },
            { name: "GitHub Copilot", icon: "copilot", level: "Avançado" },
        ]
    }
];