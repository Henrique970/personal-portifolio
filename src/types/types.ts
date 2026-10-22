export interface DeveloperProfile {
    name: string;
    role: string;
    stack: string[];
    focus: string;
    status: string;
};

export interface TerminalCardProps {
    codeString: string;
    typingSpeed?: number;
    filename: string;
};

interface SkillItem {
    name: string;
    icon: string;
    level: string;
};

export interface SkillCategory {
    categoryName: string;
    skills: SkillItem[];
}