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
}