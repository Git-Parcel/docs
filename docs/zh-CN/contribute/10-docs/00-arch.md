---
title: 文档项目架构
---

# Git Parcel 文档项目架构

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
