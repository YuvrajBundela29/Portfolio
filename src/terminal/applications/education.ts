import { FileSystemType } from "../fileSystemBash";

export default function education(
    print: (s: string, md?: boolean) => void,
    path: FileSystemType
) {
    const docs = {
        name: "education",
        short: "Academic background",
        long: "Displays academic qualifications and dual-degree details.",
    };

    const app = (args: string[], options: string[]) => {
        print(`
Dual-Degree Path:

• B.Sc (Hons.) — Artificial Intelligence & Data Science
Indian Institute of Technology Guwahati

• B.Tech — Cybersecurity
Dr. A.P.J. Abdul Kalam Technical University

Focused on building strong theoretical depth alongside practical systems.`);
    };

    return { docs, app };
}
