import { FileSystemType } from "../fileSystemBash";

export default function skills(
    print: (s: string, md?: boolean) => void,
    path: FileSystemType
) {
    const docs = {
        name: "skills",
        short: "Core expertise",
        long: "Lists technical skills and areas of expertise.",
    };

    const app = (args: string[], options: string[]) => {
        print(`
Core Areas:

• Artificial Intelligence
• Cybersecurity
• System Design
• Intelligent Platforms
• Applied Problem Solving

Always learning. Always building.`);
    };

    return { docs, app };
}
