আসো একদম zero থেকে “C Constants” বুঝে নেই — super beginner‑friendly way te, Banglish mix e, many examples সহ ✅

---

# C Constants — কী & কেন?

**Constant = যেটার value program চলার মধ্যে change হবে না।**
যেমন: exam fee fixed 500 টাকা। Code এ `500` হচ্ছে একটা **literal constant**.

**Analogy:** Constant মানে বাসের ticket price এর মতো—printing হয়ে গেছে, চলে যাওয়ার আগে price বদলাবে না ✅

---

# Big Picture (Flowchart 🧭)

```colored
Start
 ├─> Number লাগবে?
 │     ├─> Integer? → base (10/8/16) ঠিক করো → type & suffix (U/L/LL) ঠিক করো
 │     └─> Floating? → decimal/scientific → suffix (f / l) লাগবে?
 ├─> Character লাগবে? → 'A' বা '\n' ব্যবহার
 ├─> String লাগবে? → "Hello" (null-terminated)
 ├─> Symbolic name দরকার? → #define / const / enum
 └─> Compile-time constant দরকার? → #define বা enum (best)
```

---

# 1) Numeric Constants

## 1.1 Integer Constants (decimal, octal, hex)

| লিখন        | Base | Example | Meaning | Notes                       |
| ----------- | ---- | ------- | ------- | --------------------------- |
| **decimal** | 10   | `42`    | 42      | most common ✅              |
| **octal**   | 8    | `052`   | 42      | **leading 0** মানে octal ⚠️ |
| **hex**     | 16   | `0x2A`  | 42      | A–F allowed                 |

**Suffix (type hint):**

- `U` → unsigned
- `L` → long
- `LL` → long long
- combine: `UL`, `LLU`, etc. (order usually doesn’t matter)

**Examples:**

```c
123        // int
123U       // unsigned int
123L       // long
123LL      // long long
0xFFU      // unsigned hex
```

⚠️ **Common mistakes**

- `08` বা `09` লিখলে **error**—কারণ leading `0` দিলে তা octal ধরা হয়, আর octal-এ 8/9 থাকে না ❌
- বড় number লিখলে overflow হতে পারে; টাইপ/suffix বেছে নাও (`LL`, `U`) ✅

---

## 1.2 Floating‑point Constants (float/double/long double)

| লিখন       | Example            | Type (default) | Notes                  |
| ---------- | ------------------ | -------------- | ---------------------- |
| Decimal    | `3.14`, `.5`, `2.` | double         | dot থাকলে float family |
| Scientific | `1.23e3` = `1230`  | double         | `e` বা `E`             |
| Suffix     | `3.14f`            | float          | ছোট মেমরি দ্রুত calc   |
| Suffix     | `3.14L`            | long double    | high precision         |

**Examples:**

```c
3.0      // double
3.0f     // float
6.022e23 // double (Avogadro)
1.0L     // long double
```

⚠️ `printf` format mismatch দিলে garbage/undefined output আসতে পারে:

- `float`/`double` print → **`%f`**
- `long double` → **`%Lf`**

---

# 2) Character & String Constants

## 2.1 Character Constants: single quotes `' '`

| Example  | Meaning                  |
| -------- | ------------------------ |
| `'A'`    | char 'A'                 |
| `'\n'`   | newline                  |
| `'\t'`   | tab                      |
| `'\0'`   | null (string terminator) |
| `'\x41'` | 'A' in hex               |
| `'\101'` | 'A' in octal             |

**Escape quick‑table:**

| Escape | Effect       |
| ------ | ------------ |
| `\\`   | backslash    |
| `\'`   | single quote |
| `\"`   | double quote |
| `\n`   | newline      |
| `\t`   | tab          |
| `\0`   | null         |

⚠️ **'A' vs "A"**

- `'A'` → **char** (১টা character) ✅
- `"A"` → **string** (char array + `'\0'`) ✅
- `"A"` কে `char` এ assign করলে warning/error ❌

## 2.2 String Literals: double quotes `" "`

```c
"Hello"        // 'H' 'e' 'l' 'l' 'o' '\0'
"Hi" " There"  // auto-concatenate → "Hi There"
```

⚠️ String immutable: literal modify করা যায় না।

```c
char *s = "Hi";
s[0] = 'B'; // ❌ undefined behavior
```

ভালো practice:

```c
char s[] = "Hi"; // modifiable copy
s[0] = 'B';      // ✅ "Bi"
```

---

# 3) Symbolic Constants: `#define`, `const`, `enum`

এগুলোর উদ্দেশ্য: magic number/char না লিখে **meaningful name** use করা ✅

## 3.1 `#define` (Preprocessor Macro)

```c
#define PI 3.1415926535
#define MAX_STUDENTS 60
#define NEWLINE '\n'
```

- compile হওয়ার আগেই text replace হয়
- **Compile-time constant** হিসেবে use হয় (array size, case label ইত্যাদি)
- টাইপ নেই (type-less), তাই misuse হলে bug আসতে পারে ⚠️

## 3.2 `const` (Read‑only variable)

```c
const int LIMIT = 100;     // usually initialize করবে
const double RATE = 0.05;
```

- type আছে (int/double…)
- **Block scope** এ uninitialized const technically allowed, but use করা risky ⚠️ Always initialize ✅
- Preprocessor নয়, তাই কিছু জায়গায় compile‑time constant নাও ধরা হতে পারে (বিশেষ করে পুরোনো standard/contexts)

## 3.3 `enum` (Enumerator constants)

```c
enum { BUF_SIZE = 1024, TIMEOUT_MS = 5000 };
```

- values are **integers** (constant expressions)
- **Compile-time constant** → array size, switch case, ইত্যাদিতে safe ✅

### Quick Compare

| Feature           | `#define`                           | `const`                | `enum`                   |
| ----------------- | ----------------------------------- | ---------------------- | ------------------------ |
| Type safety       | ❌                                  | ✅                     | ✅ (int)                 |
| Compile-time expr | ✅                                  | depends                | ✅                       |
| Debug visibility  | ❌ (text replace)                   | ✅                     | ✅                       |
| Best for          | global fixed numbers, feature flags | typed read‑only values | integer ids, array sizes |

---

# 4) Format Specifier Cheat‑Sheet (for `printf`/`scanf`) 🧾

| Type           | Literal Example | `printf`                  | `scanf` |
| -------------- | --------------- | ------------------------- | ------- |
| `int`          | `42`            | `%d`                      | `%d`    |
| `unsigned int` | `42U`           | `%u`                      | `%u`    |
| `long`         | `42L`           | `%ld`                     | `%ld`   |
| `long long`    | `42LL`          | `%lld`                    | `%lld`  |
| `float`        | `3.14f`         | `%f` (promoted to double) | `%f`    |
| `double`       | `3.14`          | `%f`                      | `%lf`   |
| `long double`  | `3.14L`         | `%Lf`                     | `%Lf`   |
| `char`         | `'A'`           | `%c`                      | `%c`    |
| `string`       | `"Hi"`          | `%s`                      | `%s`    |

⚠️ Common trap: `scanf` এ double পড়তে **`%lf`** চাই; `printf` এ double print করতে **`%f`**।

---

# 5) Initial Values (Context অনুযায়ী)

- **Local non‑static variable** (including `const`) — **uninitialized = garbage** ⚠️

  ```c
  void f(void){
      const int x;   // allowed, but value indeterminate ❌
      // printf("%d", x); // UB
  }
  ```

  ✅ Always initialize:

  ```c
  const int x = 10;
  ```

- **Global/static** variable — no initializer দিলে default **0**

  ```c
  static const int k; // becomes 0 by default, but better to set explicitly
  ```

- **Literal constants** (e.g., `42`, `3.14`) — এদের তো init লাগে না; ওরা direct value ✅

---

# 6) Lots of Tiny Examples (with expected outputs)

```c
#include <stdio.h>

int main(void) {
    // Integer bases
    printf("%d\n", 052);     // 42 (octal)
    printf("%d\n", 0x2A);    // 42 (hex)
    // printf("%d\n", 08);   // ❌ invalid (8 not allowed in octal)

    // Suffix
    printf("%u\n", 3000000000U);  // unsigned
    printf("%lld\n", 1234567890123LL);

    // Floating & scientific
    printf("%f\n", 3.0);      // 3.000000
    printf("%f\n", 1.23e3);   // 1230.000000
    printf("%Lf\n", 3.14L);   // needs %Lf

    // Char & escapes
    printf("%c\n", 'A');      // A
    printf("Line1\\nLine2\n"); // prints: Line1\nLine2
    printf("Line1\nLine2\n");  // real newline

    // String & concatenation
    printf("%s\n", "Hi" " There"); // Hi There

    // Symbolic constants
    #define TAX 0.15
    const double rate = 0.15;
    enum { MAXN = 1000 };

    printf("%f %f %d\n", TAX, rate, MAXN);
    return 0;
}
```

---

# 7) Quick Summary Tables

## Numeric literal quick‑ref

| Need        | Write like | Notes             |
| ----------- | ---------- | ----------------- |
| Normal int  | `123`      | `%d`              |
| Unsigned    | `123U`     | `%u`              |
| Long long   | `123LL`    | `%lld`            |
| Hex         | `0xFF`     | base 16           |
| Octal       | `077`      | leading 0 ⚠️      |
| Float       | `3.14f`    | `%f`              |
| Double      | `3.14`     | `%f`              |
| Long double | `3.14L`    | `%Lf`             |
| Scientific  | `6.02e23`  | big/small numbers |

## Escape quick‑ref

| You want     | Use          |
| ------------ | ------------ |
| Newline      | `\n`         |
| Tab          | `\t`         |
| Quote inside | `\"` or `\'` |
| Backslash    | `\\`         |

---

# 8) Choosing the Right Kind (Mini Flowchart)

```
Number?
 ├─ Integer? → big range লাগবে?
 │     ├─ No → int (e.g., 100)
 │     └─ Yes → long long (e.g., 100LL) / unsigned if non-negative
 └─ Floating? → precision দরকার?
       ├─ Normal → double (e.g., 3.14)
       └─ Very high → long double (e.g., 3.14L)
```

---

# 9) Pro Tips & Pitfalls

- ⚠️ **Leading zero = octal** → `010` is 8, not 10!
- ⚠️ **Format mismatch** → `double` print with `%f`, read with `%lf`.
- ⚠️ `'A'` vs `"A"` mix up কোরো না — char vs string.
- ✅ Meaningful names use করো: `#define MAX_USERS 100` or `enum{MAX_USERS=100};`
- ✅ Array size/case label এর জন্য `#define`/`enum` safer than `const` in some compilers.
- ✅ Always initialize `const` (esp. local/block scope).
- ✅ Readability first: big number এ underscore নেই C তে—grouping comments দাও বা hex ব্যবহার করো if helpful.

---

# 10) Mini Exercises (Try yourself)

1. নিচের literals গুলোকে সঠিক format specifier দিয়ে print করো:
   `42U`, `1234567890123LL`, `3.5f`, `3.5`, `3.5L`, `'Z'`, `"Hello"`

2. কোনগুলো valid? কেন?
   `08`, `0x1F`, `'AB'`, `'\x4A'`, `"A\0B"`

3. `#define`, `const`, `enum`— তিন ভাবে `BUFFER_SIZE = 256` সেট করে code লিখে একটি array declare করো।

---

# 11) Final Cheat‑Card (copy‑paste friendly)

- Integer: `10`, `10U`, `10L`, `10LL`, `0xFF`, `077`
- Float family: `3.0f` (float), `3.0` (double), `3.0L` (long double), `1e-3`
- Char: `'A'`, `'\n'`, `'\x41'`
- String: `"Hello"`, `"Hi" " There"`
- Specifiers: `%d %u %ld %lld %f %Lf %c %s`
- Symbolic: `#define N 100`, `const int N=100;`, `enum{N=100};`
- Always init const; beware leading `0`; match format specifiers.

---

ঠিক আছে 🙂
আমি আপনার জন্য **C Constants** টপিকের ওপর ৩০টা MCQ বানিয়ে দিচ্ছি — একদম beginner-friendly থেকে একটু tricky পর্যন্ত, যাতে আপনি ধাপে ধাপে বুঝে শিখতে পারো।
সবগুলো **MkDocs-MCQ** plugin compatible format এ থাকবে, তাই আপনি সরাসরি `.md` ফাইলে paste করে ব্যবহার করতে পারবে।

---

চমৎকার! নিচে আপনার **C Constants** MCQ‑গুলোকে **section‑wise** ভাগ করে **collapsible accordion** (MkDocs Material / Pymdown Admonitions) আকারে দিলাম।
Syntax: `??? <type> "Title"` — তারপর ভেতরের কন্টেন্ট ৪‑space indent. সব MCQ **official mcq format** এ।

> নোট: `section` টাইপ নেই। Common টাইপ: `note`, `info`, `tip`, `example`, `question` ইত্যাদি। আমি `example` ব্যবহার করেছি যাতে neutral লাগে।




