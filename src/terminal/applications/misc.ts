import { FileSystemType } from "../fileSystemBash";

export function coffee(
    print: (s: string, md?: boolean) => void,
    path: FileSystemType
) {
    const docs = {
        name: "coffee",
        short: "Boost productivity",
        long: "Administer caffeine.",
    };

    const app = (args: string[], options: string[]) => {
        print("Accepted ☕\nProductivity levels increased.");
    };

    return { docs, app };
}

export function goal(
    print: (s: string, md?: boolean) => void,
    path: FileSystemType
) {
    const docs = {
        name: "goal",
        short: "Vision",
        long: "Long term ambition.",
    };

    const app = (args: string[], options: string[]) => {
        print(`
To engineer technologies that expand human capability, strengthen digital security, and make intelligence more accessible.

This is just the beginning.`);
    };

    return { docs, app };
}

export function sudo(
    print: (s: string, md?: boolean) => void,
    path: FileSystemType
) {
    const docs = {
        name: "sudo",
        short: "Superuser do",
        long: "Execute a command as another user.",
    };

    const app = (args: string[], options: string[]) => {
        // Check for "hire yuvraj"
        const fullArg = args.join(" ").toLowerCase();
        if (fullArg.includes("hire yuvraj") || fullArg.includes("hire me")) {
            print("Permission granted.");
        } else {
            print("Access denied.");
        }
    };

    return { docs, app };
}
