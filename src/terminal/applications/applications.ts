import FileSystemBash, { FileSystemType } from "../fileSystemBash";
import cd from "./cd";
import echo from "./echo";
import hello from "./hello";
import ls from "./ls";
import mkdir from "./mkdir";
import pwd from "./pwd";
import show from "./show";
import touch from "./touch";
import whoami from "./whoami";
import education from "./education";
import skills from "./skills";
import location from "./location";
import projects from "./projects";
import minimind from "./minimind";
import contact from "./contact";
import resume from "./resume";
import { coffee, goal, sudo } from "./misc";

export default function Applications(
  print: (s: string, md?: boolean) => void,
  path: FileSystemType
) {
  const help = (args: string[], options: string[]) => {
    print(`
Available Commands:

whoami    → Learn about Yuvraj
education → Academic background
skills    → Core expertise
projects  → View featured systems
minimind  → Open flagship project
contact   → How to reach me
resume    → View professional profile
location  → Where I’m based
clear     → Reset terminal

Type any command to continue.`);
  };

  const clear = (args: string[], options: string[]) => {
    // Print enough newlines to push content offscreen
    print("\n".repeat(50));
  };

  const apps = {
    ls: ls(print, path),
    cd: cd(print, path),
    show: show(print, path),
    echo: echo(print, path),
    pwd: pwd(print, path),
    mkdir: mkdir(print, path),
    touch: touch(print, path),
    hello: hello(print, path),
    whoami: whoami(print, path),
    education: education(print, path),
    skills: skills(print, path),
    location: location(print, path),
    projects: projects(print, path),
    minimind: minimind(print, path),
    contact: contact(print, path),
    resume: resume(print, path),
    coffee: coffee(print, path),
    goal: goal(print, path),
    sudo: sudo(print, path),
    status: (args: string[], options: string[]) => {
      print("Running optimally.\nThanks for asking.");
    },
    // Aliases for standard commands if needed, but smartRouter handles most.
  };

  const getApp = (
    appName: string
  ): null | ((args: string[], options: string[]) => any) => {
    if (appName === "help") return help;
    if (appName === "clear") return clear;

    const app = (apps as any)[appName];
    if (app) return app.app;

    return null;
  };

  return getApp;
}
