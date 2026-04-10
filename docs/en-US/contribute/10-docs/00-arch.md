---
title: Documentation Project Architecture
---

# Git Parcel Documentation Project Architecture

## Directory Structure

- `docs/`
  - `.vitepress/`: VitePress configuration directory, containing configuration scripts.
  - `public/`: Static asset directory, e.g., logos, images, etc.
  - `<lang>`: Language directories, e.g., `zh-CN/`, `en-US/`.
  - `index.md`: Home page.
- `dist/`: Build output directory.
- `scripts/`
- `deno.json`

## Build Scripts

Documentation is built using Deno task scripts, defined in the `docs/deno.json` file and executed with the `deno task <task>` command.

Here are common scripts:

- `docs:dev`: Development server.
- `docs:build`: Build the documentation.
- `preview`: Preview the build results.
