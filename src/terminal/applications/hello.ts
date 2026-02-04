import FileSystemBash, { FileSystemType } from "../fileSystemBash";

export default function hello(
  print: (s: string, md?: boolean) => void,
  path: FileSystemType
) {
  const fileSystem = FileSystemBash();
  const docs = {
    name: "hello",
    short: "friendly greeting program",
    long: "",
  };

  const app = (args: string[], options: string[]) => {
    print(`
Hello, visitor.
Welcome to my system.

Type **help** to explore.`);
  };
  return { docs, app };
}
