---
title: 翻译贡献指南
---

# 翻译贡献指南

本文档指导你如何为 Git Parcel 文档添加新的语言翻译支持。

## 目录结构

文档采用多语言目录结构，每个语言对应一个单独的子目录：

```
docs/
├── zh_cn/          # 中文文档
├── en_us/          # 英文文档
└── <新语言>/       # 其他语言
```

所有语言目录应当保持相同的目录结构。

## 添加新语言步骤

### 创建语言目录

> [!NOTE]
>
> 技术上语言代码可以是任意的，只要确保唯一性、一致性即可正常工作，但建议使用 [Minecraft Wiki](https://minecraft.wiki/w/Language#Languages) 中列出的语言代码。

在 `docs/` 目录下创建新的语言目录，使用语言代码命名：

```sh
mkdir docs/<lang>
```

例如添加俄语：

```sh
mkdir docs/ru_ru
```

### 在配置中注册语言

编辑 `docs/.vitepress/locales.ts`，添加新的语言配置：

```ts
import { defineLocale } from './utils/locale.ts'

export default {
  'zh_cn': defineLocale({
    lang: 'zh_cn',
    translation: {
      label: '简体中文',
      // ...
    },
  }),
  'en_us': defineLocale({
    lang: 'en_us',
    translation: {
      label: 'English',
      // ...
    },
  }),
  'ru_ru': defineLocale({
    lang: 'ru_ru',
    translation: {
      label: 'Русский',
      // ...
    },
  }),
}
```

### 创建目录结构

复制现有语言目录的结构到新目录：

```sh
cp -r docs/zh_cn/* docs/<lang>/
```

### 翻译文档

逐一翻译目录中的文档内容。

## 翻译规范

### 术语一致

- 保持术语翻译的一致性
- 使用现有翻译的术语表（如果有）
- 新术语应添加到术语表供参考

### 语言风格

- 使用目标语言的自然表达
- 不必逐字直译，保持可读性

### 运行 `deno task dev` 检查

### 提交 Pull Request

提交代码前不要忘记格式化：

```sh
deno fmt
```
