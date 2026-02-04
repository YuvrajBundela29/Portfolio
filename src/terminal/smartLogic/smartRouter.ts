export type CommandMapping = {
    command: string;
    args?: string[];
};

export const naturalLanguageMap: Record<string, string> = {
    "who are you": "whoami",
    "tell me about yourself": "whoami",
    "introduce yourself": "whoami",
    "where are you from": "location",
    "tech stack": "skills",
    "experience": "resume",
    "vision": "goal",
    "ambition": "goal",
    "hiring": "contact",
    "hire you": "contact",
    "academics": "education",
    "how are you": "status",
};

export function normalizeInput(input: string): string {
    return input
        .toLowerCase()
        .trim()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") // Remove punctuation
        .replace(/\s{2,}/g, " "); // Remove extra spaces
}

export function resolveCommand(input: string): { cmd: string; args: string[] } {
    const normalized = normalizeInput(input);

    // 1. Check direct natural language matches
    if (naturalLanguageMap[normalized]) {
        return { cmd: naturalLanguageMap[normalized], args: [] };
    }

    // 2. Standard command parsing
    const parts = normalized.split(" ");
    const cmd = parts[0];
    const args = parts.slice(1);

    return { cmd, args };
}
