---
title: 文档项目架构
---

# Git Parcel 文档项目架构

本文档使用 [VitePress](https://vitepress.dev/) 构建，通过 [Github Pages](https://docs.github.com/en/pages) 部署在 https://git-parcel.github.io/docs/

## 目录结构

- `docs/`
  - `.vitepress/` VitePress 配置目录，包含配置脚本
  - `public/` 静态资源目录，例如 logo、图片等
  - `<lang>` 各语言目录，例如 `zh-CN/`、`en-US/`
  - `index.md` 首页
- `dist/` 构建输出目录
- `scripts/`
- `deno.json`

## 构建脚本

文档的构建使用 Deno 任务脚本，这些任务定义在 `docs/deno.json` 文件中，使用 `deno task <task>` 命令执行。

以下是常用的脚本：

- `docs:dev`：开发服务器
- `docs:build`：构建文档
- `preview`：预览构建结果

## 侧边栏生成逻辑

侧边栏是基于文件结构自动生成的，相关脚本位于 `docs/.vitepress/utils/sidebar.ts`。

目录结构：

- `docs/`
  - `<lang>/` 语言目录，例如 `zh-CN/`, `en-US/`
    - `<section>/` 板块目录，例如 `contribute/`, `player/`
      - `index.md` 板块首页文档，用于确定该板块在侧边栏中的标题。
      - `**/` 任意子目录
        - `index.md` 子目录首页文档，用于确定该子目录在侧边栏中的标题。如果不存在，则使用目录名作为标题。
      - `*.md` 任意页面

- 根据目录结构递归构建嵌套的侧边栏结构。
- 页面标题：从 Markdown 文件的 frontmatter 中提取 `title` 字段作为侧边栏显示文本；如果未定义，则使用文件名（去除数字前缀和扩展名）。
- 板块或其子目录下的 `index.md` 文档用于确定该目录在侧边栏中的标题。

### 排序

目录和页面文件名可以以数字 + `-` 开头，用于指定在侧边栏中的排序顺序，数字越小，排序越靠前。

例如：

1. `00-arch.md`
2. `10-usage.md`
