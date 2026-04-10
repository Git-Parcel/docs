---
title: Translation Contribution Guide
---

# Translation Contribution Guide

This document guides you on how to add new language translation support for Git Parcel documentation.

## Directory Structure

The documentation uses a multi-language directory structure, with each language in its own subdirectory:

```
docs/
├── zh-CN/          # Chinese documentation
├── en-US/          # English documentation
└── <new-lang>/     # Other languages
```

All language directories should maintain the same directory structure.

## Steps to Add a New Language

### Create Language Directory

> [!NOTE]
>
> Technically, the language code can be arbitrary; as long as it's unique and consistent, it will work properly. However, it's recommended to use the language codes listed in the [Minecraft Wiki](https://minecraft.wiki/w/Language#Languages).

Create a new language directory under `docs/`, named with the language code:

```sh
mkdir docs/<lang>
```

For example, to add Russian:

```sh
mkdir docs/ru-RU
```

### Register Language in Configuration

Edit `docs/.vitepress/locales.ts` to add the new language configuration:

```ts
import { defineLocale } from './utils/locale.ts'

export default {
  'zh-CN': defineLocale({
    lang: 'zh-CN',
    translation: {
      label: '简体中文',
      // ...
    },
  }),
  'en-US': defineLocale({
    lang: 'en-US',
    translation: {
      label: 'English',
      // ...
    },
  }),
  'ru-RU': defineLocale({
    lang: 'ru-RU',
    translation: {
      label: 'Русский',
      // ...
    },
  }),
}
```

### Create Directory Structure

Copy the structure of an existing language directory to the new one:

```sh
cp -r docs/zh-CN/* docs/<lang>/
```

### Translate Documents

Translate the document content in the directory one by one.

## Translation Standards

### Terminology Consistency

- Maintain consistency in terminology translation
- Use the existing translation glossary (if any)
- New terms should be added to the glossary for reference

### Language Style

- Use natural expressions in the target language
- Avoid word-for-word translation; maintain readability

### Run `deno task dev` to Check

### Submit Pull Request

Don't forget to format before submitting code:

```sh
deno fmt
```
