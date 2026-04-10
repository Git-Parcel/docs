---
title: Mod Contribution Guide
---

# Mod Contribution Guide

## Project Structure

### Getting Started

```sh
git clone https://github.com/<your-username>/Mod.git
cd Mod
./gradlew build
```

## Common Gradle Tasks

- Lifecycle
  - `test` - Run tests
  - `build` - Build the project
  - `jmh` - Run benchmarks
- Running
  - `fabric:runClient`
  - `fabric:runServer`
  - `forge:Client`
  - `forge:Server`
  - `neoforge:runClient`
  - `neoforge:runServer`

## Repository Management

### Branches

- `main` Main branch
- `refactor/*` Refactoring branches
- `feat/*` New feature branches
- `fix/*` Bug fix branches

- `<minecraft_version>` Specific Minecraft version branch, e.g., `1.21.11`

Converted to table:

|| Branch Name Format | Purpose | Example |
| ------------------- | ------- | ------- |
| main | Main branch, contains the latest version of the code | |
| <minecraft_version> | Specific Minecraft version branch; if multiple versions are supported, use the smallest official version number | `1.21.11`, `26.1` |
| refactor/* | Refactoring branches | |
| feat/* | New feature branches | |
| fix/* | Bug fix branches | |

### Tags

Format:

```
v<mod_version>+<mc_version>+<platform>
v<mod_version>+<mc_version_min>-<mc_version_max>+<platform>
```

Examples:

- `v0.1.0+1.21-1.21.1+fabric`
- `v0.1.0+1.21.11+fabric`
- `v0.1.0+26.1+neoforge`