---
title: Markdown Syntax Handbook
---

# Markdown Syntax Handbook

## Basic Syntax

Reference:

- [Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## Code Blocks

```ts
export class Animal {
  say() {
    console.log('Hello world!')
  }
}
```

### Code Diff

```diff
- expect<Append<'foo', 'bar'>>().to(equal<'foo'>);
+ expect<Append<'foo', 'bar'>>().to(equal<'foobar'>);
```

## GitHub Syntax

### Alerts

> [!NOTE]
> Important information that users should not overlook even when skimming the documentation.

> [!TIP]
> Suggestive information that helps users achieve their goals more smoothly.

> [!IMPORTANT]
> Crucial information for users to achieve their goals.

> [!WARNING]
> Critical content that requires immediate user attention due to potential risks.

> [!CAUTION]
> Negative consequences that may result from an action.

## Other Supported Syntax

- [Mermaid Diagrams](./10-mermaid)
- [LaTeX Formulas](./20-latex)