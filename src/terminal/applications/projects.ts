import { FileSystemType } from "../fileSystemBash";

export default function projects(
    print: (s: string, md?: boolean) => void,
    path: FileSystemType
) {
    const docs = {
        name: "projects",
        short: "View featured systems",
        long: "Scrolls to the projects section.",
    };

    const app = (args: string[], options: string[]) => {
        print("Opening Selected Systems...");
        const element = document.getElementById("projects");
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: "smooth" });
            }, 500);
        }
    };

    return { docs, app };
}
