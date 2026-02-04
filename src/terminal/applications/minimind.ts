import { FileSystemType } from "../fileSystemBash";

export default function minimind(
    print: (s: string, md?: boolean) => void,
    path: FileSystemType
) {
    const docs = {
        name: "minimind",
        short: "Open flagship project",
        long: "Launches the MiniMind flagship project section.",
    };

    const app = (args: string[], options: string[]) => {
        print("Launching flagship intelligence system...");
        const element = document.getElementById("minimind-section");
        if (element) {
            // Pause 300ms before scroll for dramatic effect
            setTimeout(() => {
                element.scrollIntoView({ behavior: "smooth" });
            }, 300);
        }
    };

    return { docs, app };
}
