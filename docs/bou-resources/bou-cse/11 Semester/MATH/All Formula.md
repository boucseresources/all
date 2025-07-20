---
dg-home: false
dg-publish: true
aliases: 
tags:
---

## 🔹 1. **Exponential & Logarithmic Functions**

| Function     | Maclaurin Series                                             | Valid for    | Trick to Remember                      |      |                                             |
| ------------ | ------------------------------------------------------------ | ------------ | -------------------------------------- | ---- | ------------------------------------------- |
| $e^x$        | $1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$           | All real $x$ | All **+**, like $e$ is always positive |      |                                             |
| $\ln(1 + x)$ | $x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots$ | (            | x                                      | < 1) | Alternating signs: $+$, $–$, $+$, $–$, etc. |
| $(1 + x)^n$  | $1 + nx + \frac{n(n-1)}{2!}x^2 + \cdots$                     | (            | x                                      | < 1) | Use binomial expansion                      |

---

## 🔹 2. **Trigonometric Functions**

| Function | Maclaurin Series                               | Valid for    | Trick to Remember                               |                  |                                            |
| -------- | ---------------------------------------------- | ------------ | ----------------------------------------------- | ---------------- | ------------------------------------------ |
| $\sin x$ | $x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$ | All real $x$ | **Odd powers**, alternating signs               |                  |                                            |
| $\cos x$ | $1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$ | All real $x$ | **Even powers**, alternating signs              |                  |                                            |
| $\tan x$ | $x + \frac{x^3}{3} + \frac{2x^5}{15} + \cdots$ | (            | x                                               | < \frac{\pi}{2}) | No easy pattern — memorize first few terms |
| $\cot x$ | No simple series                               | —            | Use derivative approach or in terms of $\tan x$ |                  |                                            |

---

## 🔹 3. **Inverse Trigonometric Functions**

| Function    | Maclaurin Series                                                  | Valid for | Trick to Remember |        |                                        |
| ----------- | ----------------------------------------------------------------- | --------- | ----------------- | ------ | -------------------------------------- |
| $\arcsin x$ | $x + \frac{x^3}{6} + \frac{3x^5}{40} + \frac{5x^7}{112} + \cdots$ | (         | x                 | \le 1) | All **+**, only **odd powers**         |
| $\arccos x$ | $\frac{\pi}{2} - \arcsin x$                                       | (         | x                 | \le 1) | Derived from arcsin                    |
| $\arctan x$ | $x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots$                      | (         | x                 | \le 1) | Alternating signs, **odd powers** only |

---

## 🔹 4. **Hyperbolic Functions**

| Function  | Maclaurin Series                               | Valid for    | Trick to Remember                           |
| --------- | ---------------------------------------------- | ------------ | ------------------------------------------- |
| $\sinh x$ | $x + \frac{x^3}{3!} + \frac{x^5}{5!} + \cdots$ | All real $x$ | Like $\sin x$, but **no alternating signs** |
| $\cosh x$ | $1 + \frac{x^2}{2!} + \frac{x^4}{4!} + \cdots$ | All real $x$ | Like $\cos x$, but **all +**                |

---

## 🔹 5. **Special Cases / Compositions**

| Function         | Notes                                                |
| ---------------- | ---------------------------------------------------- |
| $\sin(x^x)$      | Plug $x^x$ into $\sin x$ series                      |
| $\sin(x^{1/x})$  | Plug $x^{1/x}$ into $\sin x$, expand if needed       |
| $\tan^{-1}(x^2)$ | Plug into $\tan^{-1} x = x - \frac{x^3}{3} + \cdots$ |

---

## ✅ Memory Tricks (Summary)

| Trick                            | Explanation                                     |   |      |
| -------------------------------- | ----------------------------------------------- | - | ---- |
| **Sine = Odd, Alt Signs**        | Powers: $x^1, x^3, x^5...$, signs: $+\,-\,+\,-$ |   |      |
| **Cosine = Even, Alt Signs**     | Powers: $x^0, x^2, x^4...$, signs: $+\,-\,+\,-$ |   |      |
| **Exponential = All +**          | All powers, all +                               |   |      |
| **ln(1 + x) = Alt, Start at x**  | $x - x^2/2 + x^3/3 - \cdots$, (                 | x | < 1) |
| **Inverse trig = Odd, Alt or +** | Like arcsin: all +; arctan: alternate           |   |      |

---

# **Complete Differentiation Formula Sheet**

---

**I. Basic Derivatives**

1. $\frac{d}{dx}(c) = 0$ (constant rule)
2. $\frac{d}{dx}(x) = 1$
3. $\frac{d}{dx}(x^n) = nx^{n-1}$
4. $\frac{d}{dx}(\sqrt{x}) = \frac{1}{2\sqrt{x}}$
5. $\frac{d}{dx}(\frac{1}{x}) = -\frac{1}{x^2}$
6. $\frac{d}{dx}(ax + b) = a$

---

**II. Trigonometric Functions**

1. $\frac{d}{dx}(\sin x) = \cos x$
2. $\frac{d}{dx}(\cos x) = -\sin x$
3. $\frac{d}{dx}(\tan x) = \sec^2 x$
4. $\frac{d}{dx}(\cot x) = -\csc^2 x$
5. $\frac{d}{dx}(\sec x) = \sec x \tan x$
6. $\frac{d}{dx}(\csc x) = -\csc x \cot x$

---

**III. Inverse Trigonometric Functions**

1. $\frac{d}{dx}(\sin^{-1} x) = \frac{1}{\sqrt{1 - x^2}}$
2. $\frac{d}{dx}(\cos^{-1} x) = -\frac{1}{\sqrt{1 - x^2}}$
3. $\frac{d}{dx}(\tan^{-1} x) = \frac{1}{1 + x^2}$
4. $\frac{d}{dx}(\cot^{-1} x) = -\frac{1}{1 + x^2}$
5. $\frac{d}{dx}(\sec^{-1} x) = \frac{1}{|x|\sqrt{x^2 - 1}}$
6. $\frac{d}{dx}(\csc^{-1} x) = -\frac{1}{|x|\sqrt{x^2 - 1}}$

---

**IV. Exponential and Logarithmic Functions**

1. $\frac{d}{dx}(e^x) = e^x$
2. $\frac{d}{dx}(a^x) = a^x \ln a$
3. $\frac{d}{dx}(\ln x) = \frac{1}{x}$
4. $\frac{d}{dx}(\log_a x) = \frac{1}{x \ln a}$

---

**V. Rules of Differentiation**

1. **Sum Rule:** $\frac{d}{dx}(f + g) = f' + g'$
2. **Difference Rule:** $\frac{d}{dx}(f - g) = f' - g'$
3. **Product Rule:** $\frac{d}{dx}(fg) = f'g + fg'$
4. **Quotient Rule:** $\frac{d}{dx}(\frac{f}{g}) = \frac{f'g - fg'}{g^2}$
5. **Chain Rule:** $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$

---

**VI. Higher Order Derivatives**

1. $f''(x) = \frac{d^2f}{dx^2}$
2. $f^{(n)}(x) = \frac{d^n f}{dx^n}$

---

**VII. Parametric Differentiation**

If $x = f(t), y = g(t)$, then:
$\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$

---

**VIII. Implicit Differentiation**

If $y$ is defined implicitly in terms of $x$:

* Differentiate both sides w\.r.t. $x$ using chain rule for $y$
* Solve for $\frac{dy}{dx}$

---

**IX. Logarithmic Differentiation**

For functions like $y = f(x)^{g(x)}$, take log on both sides:
$\ln y = g(x) \ln f(x)$
Then differentiate using product and chain rules.

---

**X. Differentiation of Special Forms**

1. $y = x^x \Rightarrow \ln y = x \ln x \Rightarrow \frac{dy}{dx} = x^x (\ln x + 1)$
2. $y = a^{\sin x} \Rightarrow \frac{dy}{dx} = a^{\sin x} \ln a \cos x$

---

![[image-27.png]]

