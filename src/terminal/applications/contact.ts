import { FileSystemType } from "../fileSystemBash";

export default function contact(
    print: (s: string, md?: boolean) => void,
    path: FileSystemType
) {
    const docs = {
        name: "contact",
        short: "How to reach me",
        long: "Scrolls to the contact section.",
    };

    const app = (args: string[], options: string[]) => {
        print("Let’s build something meaningful.");
        const element = document.getElementById("contact");
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: "smooth" });
            }, 500);
        }
    };

    return { docs, app };
}
