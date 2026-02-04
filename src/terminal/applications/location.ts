import { FileSystemType } from "../fileSystemBash";

export default function location(
    print: (s: string, md?: boolean) => void,
    path: FileSystemType
) {
    const docs = {
        name: "location",
        short: "Where I’m based",
        long: "Displays current location and background context.",
    };

    const app = (args: string[], options: string[]) => {
        print(`
Jhansi, Uttar Pradesh, India.

A place that shaped my discipline, patience, and long-term mindset.`);
    };

    return { docs, app };
}
