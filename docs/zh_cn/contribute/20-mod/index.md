---
title: 模组贡献指南
---

# 模组贡献指南

## 项目结构

### 开始

```sh
git clone https://github.com/<your-username>/Mod.git
cd Mod
./gradlew build
```

## 常用 Gradle 任务

- 生命周期
  - `test` - Run tests
  - `build` - Build the project
  - `jmh` - Run benchmarks
- 运行
  - `fabric:runClient`
  - `fabric:runServer`
  - `forge:Client`
  - `forge:Server`
  - `neoforge:runClient`
  - `neoforge:runServer`

## 仓库管理

### 分支（Branches）

- `main` 主分支
- `refactor/*` 重构分支
- `feat/*` 新功能分支
- `fix/*` 幺蛾子修复分支

- `<minecraft_version>` 特定 Minecraft 版本分支，例如 `1.21.11`

转换成表格：

| 分支名格式          | 用途                                                                    | 示例              |
| ------------------- | ----------------------------------------------------------------------- | ----------------- |
| main                | 主分支，包含最新版本的代码                                              |                   |
| <minecraft_version> | 特定 Minecraft 版本分支，如果同时支持多个版本，使用最小的那个正式版本号 | `1.21.11`, `26.1` |
| refactor/*          | 重构分支                                                                |                   |
| feat/*              | 新功能分支                                                              |                   |
| fix/*               | 幺蛾子修复分支                                                          |                   |

### 标签（Tags）

格式：

```
v<mod_version>+<mc_version>+<platform>
v<mod_version>+<mc_version_min>-<mc_version_max>+<platform>
```

示例：

- `v0.1.0+1.21-1.21.1+fabric`
- `v0.1.0+1.21.11+fabric`
- `v0.1.0+26.1+neoforge`
