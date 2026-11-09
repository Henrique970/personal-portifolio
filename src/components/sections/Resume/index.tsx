import { Award, Download, Eye, GraduationCap, ExternalLink, MessageCircle, Camera, Mail, GitBranch } from "lucide-react";
import { diplomasData } from "../../../data/diplomasData";
import { PrimaryGradient } from "../../ui/PrimaryGradient";
import { AdCard } from "../../ui/AdCard";

export const Resume = () => {
    return (
        <section id="contato" className="relative isolate overflow-hidden bg-background py-20 sm:py-24 border-t border-border/40">
            
            <PrimaryGradient />

            <div className="mx-auto max-w-6xl px-4">
                
                {/* Cabeçalho */}
                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <AdCard>Credenciais e Contato</AdCard>
                    
                    <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl">
                        Currículo<span className="text-primary">,</span> Diplomas <span className="text-primary">&</span> Contato
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Visualize meus diplomas, baixe meu currículo profissional e entre em contato diretamente pelos meus canais.
                    </p>
                </div>

                {/* Banner de Download do Currículo */}
                <div className="mb-16 rounded-3xl border border-primary/30 bg-linear-to-br from-primary/10 via-card to-card p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/40 bg-primary/20 text-primary">
                            <GraduationCap className="h-7 w-7" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold text-foreground">Currículo Profissional</h3>
                                <span className="animate-blink rounded-full bg-success/20 text-success text-[10px] font-mono px-2 py-0.5 border border-success/30">
                                    Pronto para download
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                                Henrique_dos_Santos_Frontend.pdf • Formato Otimizado para Recrutadores
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                        <a 
                            href="/cv.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card hover:bg-muted px-5 py-3 text-xs font-medium text-card-foreground transition-colors"
                        >
                            <Eye className="h-4 w-4 text-primary" /> Visualizar
                        </a>

                        <a 
                            href="/cv.pdf" 
                            download="Henrique_dos_Santos_Frontend.pdf"
                            className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:opacity-90 px-6 py-3 text-xs font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-opacity"
                        >
                            <Download className="h-4 w-4" /> Baixar CV (PDF)
                        </a>
                    </div>
                </div>

                {/* Grid de Diplomas com Imagem */}
                <div className="space-y-6 mb-16">
                    <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2 sm:text-2xl">
                        <Award className="h-6 w-6 text-primary" /> Diplomas & Certificados em Destaque
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {diplomasData.map((diploma) => (
                            <div 
                                key={diploma.id}
                                className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xl flex flex-col justify-between hover:border-primary/50 transition-all duration-300"
                            >
                                {/* Imagem do Diploma */}
                                <div className="relative aspect-video overflow-hidden bg-muted/50 border-b border-border">
                                    <img 
                                        src={diploma.image} 
                                        alt={diploma.title}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <a 
                                        href={diploma.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs"
                                    >
                                        <span className="px-4 py-2 bg-background/90 text-foreground font-medium text-xs rounded-xl shadow-lg border border-border flex items-center gap-2">
                                            Ver Diploma Ampliado <ExternalLink className="w-3.5 h-3.5 text-primary" />
                                        </span>
                                    </a>
                                </div>

                                {/* Informações do Diploma */}
                                <div className="p-6 flex flex-col justify-between grow">
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-3">
                                            <span className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                                                {diploma.category}
                                            </span>
                                            <span className="font-mono text-xs text-muted-foreground">
                                                {diploma.issueDate}
                                            </span>
                                        </div>

                                        <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                            {diploma.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {diploma.institution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Seção de Contato Direto */}
                <div className="rounded-3xl border border-border/80 bg-card p-8 sm:p-10 shadow-xl text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-3">Vamos trabalhar juntos?</h3>
                    <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-8">
                        Estou disponível para novas oportunidades como Desenvolvedor Frontend. Entre em contato por qualquer um dos canais abaixo:
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {/* WhatsApp */}
                        <a 
                            href="https://wa.me/55SEUNUMERO" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-success/10 border border-success/30 text-success hover:bg-success/20 transition-all font-medium text-xs sm:text-sm"
                        >
                            <MessageCircle className="w-4 h-4" /> WhatsApp
                        </a>

                        {/* LinkedIn */}
                        <a 
                            href="https://linkedin.com/in/SEU_USER" 
                            target="_blank" 
                    rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all font-medium text-xs sm:text-sm"
                        >
                            <ExternalLink className="w-4 h-4" /> LinkedIn
                        </a>

                        {/* GitHub */}
                        <a 
                            href="https://github.com/henriquedossantos" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-muted border border-border text-foreground hover:bg-muted/80 transition-all font-medium text-xs sm:text-sm"
                        >
                            <GitBranch className="w-4 h-4" /> GitHub
                        </a>

                        {/* E-mail */}
                        <a 
                            href="mailto:seu_email@exemplo.com"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all font-medium text-xs sm:text-sm"
                        >
                            <Mail className="w-4 h-4" /> E-mail
                        </a>

                        {/* Instagram */}
                        <a 
                            href="https://instagram.com/SEU_USER" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-pink-500/10 border border-pink-500/30 text-pink-400 hover:bg-pink-500/20 transition-all font-medium text-xs sm:text-sm"
                        >
                            <Camera className="w-4 h-4" /> Instagram
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};