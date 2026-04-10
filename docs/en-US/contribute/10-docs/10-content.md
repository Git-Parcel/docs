---
title: Content Contribution Guide
---

# Content Contribution Guide

## Sidebar Generation Logic

The sidebar is automatically generated based on the directory structure. The relevant scripts are located in `docs/.vitepress/utils/sidebar.ts`.

Directory Structure:

- `docs/`
  - `<lang>`: Language directory, e.g., `zh-CN/`, `en-US/`.
    - `<section>`: Section directory, e.g., `contribute/`, `player/`.
      - `index.md`: Section home page document, used to determine the title of the section in the sidebar.
      - `**/`: Any subdirectory.
        - `index.md`: Subdirectory home page document, used to determine the title of the subdirectory in the sidebar. If it doesn't exist, the directory name is used as the title.
      - `*.md`: Any page.

Rules:

- Recursively build nested sidebar structures based on the directory structure.
- Page Title: The `title` field is extracted from the Markdown file's frontmatter as the sidebar display text; if not defined, the filename (excluding numerical prefixes and extensions) is used. Valid frontmatter is as follows:

```md
---
title: Title
---
```

- The `index.md` document under a section or its subdirectory is used to determine the directory's title in the sidebar.

### Sorting

Directory and page filenames can start with a number + `-` to specify the sorting order in the sidebar. Smaller numbers appear earlier, and those without numbers are placed at the end.

Example:

1. `00-arch.md`
2. `10-usage.md`
3. `final.md`
