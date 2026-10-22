import type { DeveloperProfile } from "../types/types";

export const developerProfileData: DeveloperProfile = {
    name: "Henrique",
    role: "Frontend Developer",
    stack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js"
    ],
    focus: "Clean Code & UX",
    status: "Coding the future..."
};

export const formattedCodeString: string = `const developer: DeveloperProfile = {
  name: "${developerProfileData.name}",
  role: "${developerProfileData.role}",
  stack: [
${developerProfileData.stack.map(item => `    "${item}"`).join(',\n')}
  ],
  focus: "${developerProfileData.focus}",
  status: "${developerProfileData.status}"
};`;