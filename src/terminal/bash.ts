import FileSystemBash from "./fileSystemBash";
import Applications from "./applications";
import { resolveCommand } from "./smartLogic/smartRouter";

type Cmd = {
  docs: {
    name: string;
    short: string;
    long: string;
  };
  cmd: (self: Cmd, args: string[], options: string[]) => void;
};

export default function Bash(print: (s: string, md?: boolean) => void) {
  const fileSystem = FileSystemBash();
  let path = { p: fileSystem.goHome() };

  const getApp = Applications(print, path);

  function splitArgs(a: string[]) {
    const args: string[] = [];
    const options: string[] = [];

    a.forEach((v) => {
      if (v === "") return;

      if (v.charAt(0) === "-") {
        options.push(v);
        return;
      }

      args.push(v);
    });

    return [args, options];
  }

  function cmdNotFound(cmdName: string) {
    print(`\nCommand not recognized.\nType **help** to view available commands.`);
  }

  function prompt() {
    let out = "";
    for (let i = 0; i < path.p.length; i++) {
      out += path.p[i].name;
      if (i !== 0 && i < path.p.length - 1) out += "/";
    }
    out = out.replace(/^\/home\/user/, "~");
    if (out !== "~") out += " ";
    print(`\nuser:${out}$`);
  }

  function input(rawCmd: string) {
    if (!rawCmd || rawCmd.trim() === "") {
      prompt();
      return;
    }

    // Smart Routing
    const { cmd, args: resolvedArgs } = resolveCommand(rawCmd);

    // Fallback logic if needed, but resolveCommand handles most normalization
    // resolveCommand returns 'cmd' which is the canonical command key.

    // We still need to handle args if the user typed "command arg1 -opt" 
    // BUT resolveCommand logic splits by space.
    // However, for standard commands not in the map, resolveCommand just splits internal implementation.
    // Let's verify resolveCommand logic I wrote:
    // It returns { cmd: parts[0], args: parts.slice(1) } if not found in map.
    // If found in map (e.g. "who are you" -> "whoami"), args is empty.

    // So we can blindly use cmd and args from logic, BUT if there are additional args passed to a mapped command (unlikely for "who are you"), we might lose them.
    // The user requirement said inputs are strict or natural language phrases.
    // "sudo hire yuvraj" -> resolveCommand("sudo hire yuvraj") -> cmd: "sudo", args: ["hire", "yuvraj"] (unless mapped).
    // My smartRouter map: "hire you" -> "contact".
    // So "sudo hire yuvraj" is not in the map?
    // Wait, let's check smartRouter.ts content again.

    /* 
       const parts = normalized.split(" ");
       const cmd = parts[0];
       const args = parts.slice(1);
    */

    // So "sudo hire yuvraj" -> cmd="sudo", args=["hire", "yuvraj"].
    // This works perfectly for sudo command handling I wrote in misc.ts.

    const app = getApp(cmd);
    if (app) {
      // applications.ts expects (args, options).
      // My resolveCommand separates cmd and args, but doesn't distinguish options (starting with -).
      // So I should use splitArgs on the resolvedArgs.
      const [finalArgs, finalOptions] = splitArgs(resolvedArgs);
      app(finalArgs, finalOptions);
    } else {
      cmdNotFound(rawCmd);
    }

    prompt();
  }

  return { input };
}
