import { skillsData } from "../../../data/skillsData";
import { 
    SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, 
    SiJavascript, SiNodedotjs, SiGit, SiVite, SiFigma, SiHtml5, SiVscodium,
    SiGithubcopilot
} from "react-icons/si";
import { Cpu, Sparkles, Database, Layout, Layers } from "lucide-react";

const getSkillIcon = (iconName: string) => {
    switch (iconName) {
        // Frontend
        case "react": return <SiReact className="w-5 h-5 text-cyan-400" />;
        case "typescript": return <SiTypescript className="w-5 h-5 text-blue-500" />;
        case "tailwind": return <SiTailwindcss className="w-5 h-5 text-teal-400" />;
        case "nextjs": return <SiNextdotjs className="w-5 h-5 text-foreground" />;
        case "html": return <SiHtml5 className="w-5 h-5 text-orange-600" />;
        
        // Core & State
        case "javascript": return <SiJavascript className="w-5 h-5 text-yellow-400" />;
        case "tanstack": return <Database className="w-5 h-5 text-red-500" />;
        case "nodejs": return <SiNodedotjs className="w-5 h-5 text-green-500" />;
        case "git": return <SiGit className="w-5 h-5 text-orange-500" />;
        
        // Ferramentas & UI
        case "ux": return <Layout className="w-5 h-5 text-pink-400" />;
        case "vite": return <SiVite className="w-5 h-5 text-purple-400" />;
        case "figma": return <SiFigma className="w-5 h-5 text-pink-500" />;
        case "frontend-mentor": return <Layers className="w-5 h-5 text-blue-400" />;
        case "vscode": return <SiVscodium className="w-5 h-5 text-blue-400" />;
        
        // IAs & Ecossistema
        case "gemini": return <Sparkles className="w-5 h-5 text-blue-400" />;
        case "claude": return <Sparkles className="w-5 h-5 text-amber-500" />;
        case "lovable": return <Sparkles className="w-5 h-5 text-pink-500" />;
        case "copilot": return <SiGithubcopilot className="w-5 h-5 text-foreground" />;
        
        default: return <Cpu className="w-5 h-5 text-primary" />;
    }
};

export const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                
                {/* Cabeçalho da Seção */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="px-3 py-1 bg-primary/15 text-primary border border-primary/30 rounded-full text-xs font-semibold uppercase tracking-wider animate-pulse shadow-sm shadow-primary/10">
                        Tecnologias & Habilidades
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
                        Meu Stack Técnico & Ecossistema
                    </h2>
                    <p className="text-muted-foreground mt-4 text-base md:text-lg">
                        Ferramentas, linguagens e tecnologias de IA que potencializam minha produtividade e desenvolvimento.
                    </p>
                </div>

                {/* Grid de Categorias (Ajustado para 2 colunas em telas médias e 4 em large para acomodar os 4 blocos) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillsData.map((group, index) => (
                        <div 
                            key={index}
                            className="bg-card border border-border rounded-2xl p-5 shadow-lg hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <h3 className="text-base font-bold text-foreground mb-5 pb-3 border-b border-border flex items-center justify-between">
                                    {group.categoryName}
                                    <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></span>
                                </h3>

                                <div className="space-y-3">
                                    {group.skills.map((skill, skillIndex) => (
                                        <div 
                                            key={skillIndex}
                                            className="flex items-center justify-between p-2.5 rounded-xl bg-muted/40 hover:bg-muted transition-colors border border-border/40"
                                        >
                                            <div className="flex items-center gap-2.5 truncate">
                                                <div className="p-1.5 rounded-lg bg-background border border-border shadow-xs shrink-0">
                                                    {getSkillIcon(skill.icon)}
                                                </div>
                                                <span className="font-medium text-foreground text-xs truncate">
                                                    {skill.name}
                                                </span>
                                            </div>

                                            <span className="text-[10px] font-mono text-muted-foreground px-1.5 py-0.5 bg-background rounded border border-border shrink-0">
                                                {skill.level}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};