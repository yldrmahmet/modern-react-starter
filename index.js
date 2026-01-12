#!/usr/bin/env node

import { cpSync, existsSync, readFileSync, writeFileSync, readdirSync } from "fs";
import { resolve, dirname, basename } from "path";
import { fileURLToPath } from "url";
import * as readline from "readline";

const __dirname = dirname(fileURLToPath(import.meta.url));

function detectPackageManager() {
  const userAgent = process.env.npm_config_user_agent || "";

  if (userAgent.startsWith("yarn")) return "yarn";
  if (userAgent.startsWith("pnpm")) return "pnpm";
  if (userAgent.startsWith("bun")) return "bun";
  return "npm";
}

function getCommands(pm) {
  const commands = {
    npm: { install: "npm install", dev: "npm run dev" },
    yarn: { install: "yarn", dev: "yarn dev" },
    pnpm: { install: "pnpm install", dev: "pnpm dev" },
    bun: { install: "bun install", dev: "bun dev" },
  };
  return commands[pm];
}

function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function getProjectName(currentDir) {
  while (true) {
    const projectName = await prompt(`Project name (${currentDir}): `);

    if (!projectName) {
      console.error("Project name is required.\n");
      continue;
    }

    const isCurrentDir = projectName === ".";
    const targetDir = isCurrentDir ? process.cwd() : resolve(process.cwd(), projectName);

    if (!isCurrentDir && existsSync(targetDir)) {
      console.error(`Directory "${projectName}" already exists.\n`);
      continue;
    }

    if (isCurrentDir && readdirSync(targetDir).length > 0) {
      console.error("Current directory is not empty.\n");
      continue;
    }

    return projectName;
  }
}

async function main() {
  const currentDir = basename(process.cwd());
  let projectName = process.argv[2];

  if (!projectName) {
    projectName = await getProjectName(currentDir);
  } else {
    const isCurrentDir = projectName === ".";
    const targetDir = isCurrentDir ? process.cwd() : resolve(process.cwd(), projectName);

    if (!isCurrentDir && existsSync(targetDir)) {
      console.error(`Error: Directory "${projectName}" already exists.`);
      process.exit(1);
    }

    if (isCurrentDir && readdirSync(targetDir).length > 0) {
      console.error("Error: Current directory is not empty.");
      process.exit(1);
    }
  }

  const isCurrentDir = projectName === ".";
  const targetDir = isCurrentDir ? process.cwd() : resolve(process.cwd(), projectName);
  const finalName = isCurrentDir ? currentDir : projectName;

  const templatePath = resolve(__dirname, "template");
  cpSync(templatePath, targetDir, { recursive: true });

  const pkgPath = resolve(targetDir, "package.json");
  const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
  pkg.name = finalName;
  pkg.version = "0.0.1";
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

  const pm = detectPackageManager();
  const cmd = getCommands(pm);

  console.log(`
Done! Created ${finalName}

  ${isCurrentDir ? "" : `cd ${projectName}\n  `}${cmd.install}
  ${cmd.dev}
`);
}

main();
