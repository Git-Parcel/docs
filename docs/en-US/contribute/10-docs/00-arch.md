---
title: Documentation Project Architecture
---

# Git Parcel Documentation Project Architecture

This documentation is built using [VitePress](https://vitepress.dev/) and deployed via [GitHub Pages](https://docs.github.com/en/pages) at https://git-parcel.github.io/docs/

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

## Sidebar Generation Logic

The sidebar is automatically generated based on the file structure. The relevant scripts are located in `docs/.vitepress/utils/sidebar.ts`.

Directory Structure:

- `docs/`
  - `<lang>/`: Language directory, e.g., `zh-CN/`, `en-US/`.
    - `<section>/`: Section directory, e.g., `contribute/`, `player/`.
      - `index.md`: Section home page document, used to determine the title of the section in the sidebar.
      - `**/`: Any subdirectory.
        - `index.md`: Subdirectory home page document, used to determine the title of the subdirectory in the sidebar. If it doesn't exist, the directory name is used as the title.
      - `*.md`: Any page.

- Recursively build nested sidebar structures based on the directory structure.
- Page Title: The `title` field is extracted from the Markdown file's frontmatter as the sidebar display text; if not defined, the filename (excluding numerical prefixes and extensions) is used.
- The `index.md` document under a section or its subdirectory is used to determine the directory's title in the sidebar.

### Sorting

Directory and page filenames can start with a number + `-` to specify the sorting order in the sidebar. Smaller numbers appear earlier.

Example:

1. `00-arch.md`
2. `10-usage.md`