// Hero
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

// Skills
interface SkillItem {
    name: string;
    icon: string;
    level: string;
};

export interface SkillCategory {
    categoryName: string;
    skills: SkillItem[];
}

// Projects
export interface ProjectItem {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
    featured?: boolean;
}

export interface ProjectProps {
    project: ProjectItem;
}