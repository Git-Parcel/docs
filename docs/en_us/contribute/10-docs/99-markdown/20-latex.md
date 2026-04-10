---
title: LaTeX
---

# LaTeX

Inline formulas:

> ```md
> $f = ma$
> ```
> 
> $f = ma$

Block-level formulas:

> ```md
> $$
> g = G\frac{M_1M_2}{d^2}
> $$
> ```
> $$
> g = G\frac{M_1M_2}{d^2}
> $$

## Matrices

### Parenthesis‑less Matrix

$$
A = \begin{matrix}
  1 & 2 \\
  3 & 4 \\
\end{matrix}
$$

### Parenthesized Matrix

$$
A = \begin{pmatrix}
  1 & 2 \\
  3 & 4 \\
\end{pmatrix}
$$

### Bracket Matrix

$$
A = \begin{bmatrix}
  1 & 2 \\
  3 & 4 \\
\end{bmatrix}
$$

### Determinant

$$
A = \begin{vmatrix}
  1 & 2 \\
  3 & 4 \\
\end{vmatrix}
$$

## Symbols

### Logical Symbols

|| English Name | LaTeX | Common Usage Example | Remarks |
| ------------ | ------ | -------------------- | ------- |
| **AND** | `\land` | $A \land B$ | Most commonly used, represents logical conjunction. Also can use `&` to connect text. |
| **OR** | `\lor` | $A \lor B$ | Represents logical disjunction. Also can use `+` to connect text (e.g., $A+B$). |
| **NOT** | `\neg` | $\neg A$ | Negation symbol, usually placed before a variable. |
| **IMPLIES** | `\implies` | $A \implies B$ | Represents implication. Also can use `->` or `>`. |
| **EQUIV** | `\iff` | $A \iff B$ | Biconditional, represents necessary and sufficient condition. Also can use `<->`. |
| **EXISTS** | `\exists` | $\exists x, P(x)$ | Quantifier symbol for existential propositions. |
| **ALL** | `\forall` | $\forall x, P(x)$ | Quantifier symbol meaning for all elements. |
| **FIELD** | `F` / `\mathbb{F}` | $F$ or $\mathbb{F}_p$ | Often used to denote a number field (e.g., integers modulo $p$). |
| **BOOLEAN** | `B` / `\mathcal{B}` | $B$ or $\mathcal{B}$ | Sometimes used to denote Boolean ring/algebra structures. |
| **SET THEORY SYMBOLS** | `\in`, `\notin`, `\cup`, `\cap` | $x \in S$, $A \cup B$ | Specifically for set operations and membership relations. |
| **LOGICAL CONNECTIVES (TEXT)** | `and`, `or`, `not` | $A \text{ and } B$ | Commonly used in mathematical proofs to avoid ambiguity (e.g., distinguishing from multiplication). |

### Algebraic and Functional Operation Symbols

|| English Name | LaTeX | Common Usage Example | Remarks |
| :------------ | :------ | :------------------- | :------ |
| **Sum/Plus** | `+` / `\oplus` | $a + b$ or $\bigoplus_{i=1}^n x_i$ | Ordinary addition uses `+`; in ring theory and vector spaces, pointwise operations often use `\oplus`. |
| **Difference/Minus** | `-` / `\ominus` | $a - b$ or $\ominus$ | Ordinary subtraction uses `-`; in group theory, `\ominus` is sometimes used to denote difference sets or specific operations. |
| **Product/Multiplication** | `\cdot` / `\times` / `$\prod$` | $a \cdot b$, $x \times y$, $\prod_{i=1}^n a_i$ | `·` denotes multiplication; `\times` is often used in function graphs or coordinate systems; `\prod` denotes continued product. |
| **Division/Quotient** | `\div` / `$\frac{a}{b}$` | $a \div b$, $\frac{a}{b}$, $a/b$ | In LaTeX, the fraction form `\frac` is usually used explicitly; `\div` is used in text flow. |
| **Power/Exponentiation** | `^`, `$\uparrow$`, `$\circledcirc$` | $a^n$, $x \uparrow y$, $\lambda^n$ | Exponents usually use `^`; the up‑arrow symbol `\uparrow` denotes power operations (e.g., Cantor ordinal). |
| **Root** | `\sqrt` | $\sqrt{x}$ | Square root symbol. |
| **Modulo** | `\mod` / `\equiv` | $a \pmod n$, $a \equiv b \pmod n$ | `\pmod` denotes remainder; `\equiv` usually denotes congruence relations (number theory) or identities. |
| **Function Composition** | `\circ` | $(f \cdot g)(x)$, $f(g(x))$, $f \circ g$ | The dot `·` is often used as product. |
| **Inverse** | `$^{-1}$`, `\inverse` | $A^{-1}$, $f^{-1}(x)$ | Denotes the inverse transformation/mapping of matrices, numbers, or functions. |

### Set and Relation Symbols

|| English Name | LaTeX | Common Usage Example | Remarks |
| :------------ | :------ | :------------------- | :------ |
| **Subset** | `$\subseteq$` / `\sqsubseteq` | $A \subseteq B$ | Denotes subset relation (equality allowed). |
| **Proper Subset** | `$\subsetneq$`, `$\subset` (old)` | $A \subsetneq B$ | Denotes proper subset (not equal). |
| **Equivalence Class** | `[\cdot]`, `\{\cdot\}` | $[x]_\sim$, $\{x, y\}$ | Brackets with subscript denote classes under equivalence relations. |
| **Open/Closed Set** | `$\text{Int}(A)$`, `$\text{Cl}(A)$` | $U \in \mathcal{T}$, $\partial A$ | Commonly used in topology, $\partial$ denotes boundary. |
| **Point in Set** | `$\bullet$`, `$\odot$` | $x \in S$, $\bullet \in D$ | Sometimes used in geometric diagrams to indicate a point inside a region. |

### Inequality and Limit Symbols

|| English Name | LaTeX | Common Usage Example | Remarks |
| :------------ | :------ | :------------------- | :------ |
| **Less/Greater Than** | `<`, `>`, `\gtrless`, `\lesseqgtr` | $x < y$, $a \ge b$, $\alpha > 0.5$ | `\leq` / `\geq` denote inequalities with equality. |
| **Approach/Limit** | `$\to$`, `$\sim$`, `$\asymp$` | $x \to 0$, $a_n \to L$, $f(x) \sim g(x)$ | `\to` denotes tendency; `\sim` denotes asymptotic equivalence (e.g., little‑o, little‑p); `\asymp` denotes asymptotic same order. |
| **Ordering** | `$\preceq$`, `$\succcurlyeq$` | $x \succeq y$, $\alpha \preceq \beta$ | Used for comparing objective functions in partially ordered sets or optimization problems. |

### Variants of Quantifiers and Logical Combinations

|| English Name | LaTeX | Common Usage Example | Remarks |
| :------------ | :------ | :------------------- | :------ |
| **Exists And** | `$\exists x, P(x)$ and $Q(x)$` | $\exists x \text{ s.t. } P(x) \land Q(x)$ | Sometimes written as `\exists x: P(x) \wedge Q(x)`. |
| **All Or** | `$\forall x, P(x)$ or $Q(x)$` | $\forall x \in S: P(x)$ | Using colon `:` instead of comma is more common under domain constraints, e.g., `\forall x \in X, P(x)`. |
| **Implies And** | `$A \implies B \land C$` | $P \to Q$, $(p \wedge q) \to r$ | Pay attention to parentheses to avoid ambiguity. |