import type { DeveloperProfile } from "../types/types";

export const developerProfileData: DeveloperProfile = {
  name: "Henrique",
  mindset: "Frontend Developer",
  approach: [
    "Understand the problem",
    "Plan the solution",
    "Continuously improve"
  ],
  priorities: [
    "Clean Code",
    "User Experience",
  ],
  status: "Always evolving..."
};


export const formattedCodeString: string = `
const developer: DeveloperProfile = {
  name: "${developerProfileData.name}",
  mindset: "${developerProfileData.mindset}",
  approach: [
${developerProfileData.approach.map(item => `    "${item}"`).join(',\n')}
  ],
  priorities: [
${developerProfileData.priorities.map(item => `    "${item}"`).join(',\n')}
  ],
  status: "${developerProfileData.status}"
};`;
