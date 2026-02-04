import { FileSystemType } from "../fileSystemBash";

export default function whoami(
    print: (s: string, md?: boolean) => void,
    path: FileSystemType
) {
    const docs = {
        name: "whoami",
        short: "Learn about Yuvraj",
        long: "Displays detailed profile information about Yuvraj Singh Bundela.",
    };

    const app = (args: string[], options: string[]) => {
        print(`
Yuvraj Singh Bundela
AI & Cybersecurity Engineer

Builder focused on intelligent systems, secure technologies, and real-world problem solving.

Currently pursuing a dual academic path in Artificial Intelligence, Data Science, and Cybersecurity.

Driven by curiosity. Grounded in discipline. Focused on long-term impact.`);
    };

    return { docs, app };
}
