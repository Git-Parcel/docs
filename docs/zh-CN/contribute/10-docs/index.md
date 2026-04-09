---
title: 文档贡献指南
---

# Git Parcel 文档贡献指南

> [!IMPORTANT] 多语言支持
> 目前作者会优先更新中文版本，因此建议贡献其他语言文档时，应考虑与其保持一致。
>
> 尽管如此，不同语言文档的源码路径格式是一致的：`docs/<lang>/`

## 贡献方式

对文档进行贡献有几种方式：

- [贡献内容](./10-content)：在已有的语言中添加、删除或修改文档
- [贡献翻译](./20-translate)：添加新的语言支持
- [贡献网页框架](./30-framework)：例如修改导航栏结构、搜索逻辑、侧边栏生成逻辑等

## 参考

- [文档项目架构](./00-arch)
- [本项目中可用的 Markdown 语法手册](./99-markdown)

## 开发环境

操作系统：Windows, Linux, macOS 均可

- [Deno](https://deno.land/) 用于构建文档
- [Git](https://git-scm.com/)

任何文本编辑器都可以用于编辑文档，建议使用 [VS Code](https://code.visualstudio.com/)。

## 开始

1. fork 文档仓库到你的 Github 账号
2. 克隆 fork 仓库到本地

```sh
git clone https://github.com/<your-name>/git-parcel-docs.git
```

3. 启动 vitepress 服务器

```sh
deno task dev
```

这个命令会启动一个本地服务器，提供实时更新的文档预览。默认端口号是 5173，你可以访问 http://127.0.0.1:5173/docs 查看。

### 构建并预览

构建文档，生成网站静态文件，位于 `dist/` 目录。

```sh
deno task build
```

启动 vitepress 服务器，预览构建好的文档，默认端口号为 4173。

```sh
deno task preview
```

## 代码风格

本项目使用 Deno 对脚本和文档进行格式化，相关配置位于 `deno.json` 的 `"fmt"` 字段中。

请在提交更改前运行格式化命令：

```sh
deno fmt
```
