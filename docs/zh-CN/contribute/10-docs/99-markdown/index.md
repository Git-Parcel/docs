---
title: Markdown 语法手册
---

# Markdown 语法手册

## 基础语法

参考：

- [Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## 代码块

```ts
export class Animal {
  say() {
    console.log('Hello world!')
  }
}
```

### 代码差异

```diff
- expect<Append<'foo', 'bar'>>().to(equal<'foo'>);
+ expect<Append<'foo', 'bar'>>().to(equal<'foobar'>);
```

## Github 语法

### 警告

> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP]
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT]
> 对用户达成目标至关重要的信息。

> [!WARNING]
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION]
> 行为可能带来的负面影响。

## 其他支持的语法

- [Mermaid 图](./10-mermaid)
- [Latex 公式](./20-latex)
