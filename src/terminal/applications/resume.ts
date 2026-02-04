import { FileSystemType } from "../fileSystemBash";

export default function resume(
    print: (s: string, md?: boolean) => void,
    path: FileSystemType
) {
    const docs = {
        name: "resume",
        short: "View professional profile",
        long: "Opens the professional resume/CV.",
    };

    const app = (args: string[], options: string[]) => {
        print("View my professional journey and technical progression.");

        setTimeout(() => {
            window.open("/resume.pdf", "_blank");
        }, 500);
    };

    return { docs, app };
}
