---
title: Documentation Contribution Guide
---

# Git Parcel Documentation Contribution Guide

> [!IMPORTANT] Multilingual Support
> Currently, the author prioritizes updating the Chinese version, so when contributing documentation in other languages, it is recommended to keep it consistent with the Chinese version.
>
> Nonetheless, the source path format for different language documents is consistent: `docs/<lang>/`

## Contribution Methods

There are several ways to contribute to the documentation:

- [Contribute Content](./10-content): Add, delete, or modify documentation in existing languages.
- [Contribute Translation](./20-translate): Add support for new languages.
- [Contribute Web Framework](./30-framework): For example, modify navigation bar structure, search logic, sidebar generation logic, etc.

## References

- [Documentation Project Architecture](./00-arch)
- [Markdown Syntax Handbook Available in This Project](./99-markdown)

## Development Environment

Operating System: Windows, Linux, macOS are all acceptable.

- [Deno](https://deno.land/) for building documentation.
- [Git](https://git-scm.com/)

Any text editor can be used to edit documentation; [VS Code](https://code.visualstudio.com/) is recommended.

## Getting Started

1. Fork the documentation repository to your GitHub account.
2. Clone the forked repository locally.

```sh
git clone https://github.com/<your-name>/git-parcel-docs.git
```

3. Start the VitePress server.

```sh
deno task dev
```

This command starts a local server providing real‑time updated documentation preview. The default port is 5173; you can visit http://127.0.0.1:5173/docs to view it.

### Build and Preview

Build the documentation, generating static website files in the `dist/` directory.

```sh
deno task build
```

Start the VitePress server to preview the built documentation; the default port is 4173.

```sh
deno task preview
```

## Code Style

This project uses Deno to format scripts and documentation. The relevant configuration is located in the `"fmt"` field of `deno.json`.

Please run the formatting command before submitting changes:

```sh
deno fmt
```