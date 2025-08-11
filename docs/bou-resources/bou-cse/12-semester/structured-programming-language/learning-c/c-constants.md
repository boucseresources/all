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
আমি তোমার জন্য **C Constants** টপিকের ওপর ৩০টা MCQ বানিয়ে দিচ্ছি — একদম beginner-friendly থেকে একটু tricky পর্যন্ত, যাতে তুমি ধাপে ধাপে বুঝে শিখতে পারো।
সবগুলো **MkDocs-MCQ** plugin compatible format এ থাকবে, তাই তুমি সরাসরি `.md` ফাইলে paste করে ব্যবহার করতে পারবে।

---
চমৎকার! নিচে তোমার **C Constants** MCQ‑গুলোকে **section‑wise** ভাগ করে **collapsible accordion** (MkDocs Material / Pymdown Admonitions) আকারে দিলাম।
Syntax: `??? <type> "Title"` — তারপর ভেতরের কন্টেন্ট ৪‑space indent. সব MCQ **official mcq format** এ।

> নোট: `section` টাইপ নেই। Common টাইপ: `note`, `info`, `tip`, `example`, `question` ইত্যাদি। আমি `example` ব্যবহার করেছি যাতে neutral লাগে।

---


??? example "Easy — C Constants (10 MCQs)"
    ```mcq
    ---
    type: single
    question: C তে "constant" বলতে কী বোঝায়?
    ---
    
    - [x] এমন fixed value যা program চলাকালে change হয় না
      > ✅ Constant মানে স্থির মান — runtime এ পরিবর্তন হয় না।
    - [ ] এমন value যা প্রতিবারই change হয়
      > ❌ ওটা variable।
    - [ ] শুধুই function এর নাম
      > ❌ Function constant না।
    ```

    ```mcq
    ---
    type: single
    question: নিচের কোনটা **decimal** integer literal?
    ---
    
    - [x] 123
      > ✅ Normal decimal।
    - [ ] 0123
      > ❌ Leading 0 দিলে সেটা octal ধরা হয়।
    - [ ] 0x123
      > ❌ এটা hexadecimal।
    ```

    ```mcq
    ---
    type: single
    question: Leading `0` থাকা integer literal (যেমন `010`) কোন base বোঝায়?
    ---
    
    - [ ] Decimal (base 10)
      > ❌ Decimal হলে leading 0 দিয়ে শুরু হয় না।
    - [x] Octal (base 8)
      > ✅ Leading 0 → octal।
    - [ ] Hexadecimal (base 16)
      > ❌ Hex এর জন্য 0x/0X লাগে।
    ```

    ```mcq
    ---
    type: single
    question: 0xFF কোন base এ লেখা?
    ---
    
    - [ ] Decimal
      > ❌ Decimal নয়।
    - [ ] Octal
      > ❌ Octal নয়।
    - [x] Hexadecimal
      > ✅ Hexadecimal literal।
    ```

    ```mcq
    ---
    type: single
    question: কোন suffix দিলে unsigned int literal বোঝায়?
    ---
    
    - [x] U
      > ✅ `U` → unsigned int।
    - [ ] L
      > ❌ `L` → long।
    - [ ] LL
      > ❌ `LL` → long long।
    ```

    ```mcq
    ---
    type: single
    question: Floating-point literal এর **default type** কী?
    ---
    
    - [ ] float
      > ❌ Default float নয়।
    - [x] double
      > ✅ Default হল double।
    - [ ] long double
      > ❌ long double পেতে L suffix লাগে।
    ```

    ```mcq
    ---
    type: single
    question: কোন suffix দিলে **float** literal হয়?
    ---
    
    - [x] f
      > ✅ `f` → float।
    - [ ] L
      > ❌ `L` → long double।
    - [ ] d
      > ❌ `d` suffix নেই।
    ```

    ```mcq
    ---
    type: single
    question: কোন suffix দিলে **long double** literal হয়?
    ---
    
    - [ ] f
      > ❌ `f` → float।
    - [x] L
      > ✅ `L` → long double।
    - [ ] ld
      > ❌ `ld` suffix নেই (specifier `%Lf`, suffix শুধু `L`)।
    ```

    ```mcq
    ---
    type: single
    question: `'A'` এবং `"A"` এর মধ্যে পার্থক্য কী?
    ---
    
    - [x] `'A'` char constant, `"A"` string literal
      > ✅ `'A'` single character; `"A"` char array + `'\0'`।
    - [ ] দুটোই char
      > ❌ `"A"` string।
    - [ ] দুটোই string
      > ❌ `'A'` string নয়।
    ```

    ```mcq
    ---
    type: single
    question: কোন escape sequence **newline** বোঝায়?
    ---
    
    - [x] `\n`
      > ✅ Newline।
    - [ ] `\t`
      > ❌ এটা tab।
    - [ ] `\0`
      > ❌ এটা null character।


??? example "Medium — Pitfalls & Details (10 MCQs)"
    ```mcq
    ---
    type: multiple
    question: নিচের কোন suffix কম্বিনেশনগুলো valid integer suffix? (Select all that apply)
    ---
    
    - [x] UL
      > ✅ unsigned long।
    - [x] LLU
      > ✅ long long unsigned (order ভ্যারিয়েশন acceptable)।
    - [x] ULL
      > ✅ unsigned long long।
    - [ ] LUu
      > ❌ Case-sensitive; random mix invalid।
    ```

    ```mcq
    ---
    type: single
    question: `'\x41'` কোন character?
    ---
    
    - [x] 'A'
      > ✅ Hex 41 = decimal 65 = 'A'।
    - [ ] 'B'
      > ❌ 'B' decimal 66।
    - [ ] '@'
      > ❌ '@' decimal 64।
    ```

    ```mcq
    ---
    type: single
    question: নিচের কোনটা **invalid** integer literal?
    ---
    
    - [ ] 077
      > ✅ Valid octal (decimal 63)।
    - [x] 08
      > ❌ Octal এ 8/9 নেই — invalid।
    - [ ] 0xABC
      > ✅ Valid hex।
    ```

    ```mcq
    ---
    type: single
    question: `printf("%d", 010);` আউটপুট কী হবে?
    ---
    
    - [ ] 10
      > ❌ 010 decimal নয়।
    - [x] 8
      > ✅ 010 (octal) = decimal 8।
    - [ ] Error
      > ❌ Valid literal।
    ```

    ```mcq
    ---
    type: single
    question: `1.23e3` এর মান কত?
    ---
    
    - [x] 1230
      > ✅ e3 মানে ×10³।
    - [ ] 0.00123
      > ❌ সেটা e-3 হলে হত।
    - [ ] 12.3
      > ❌ e3 হলে 1000 দিয়ে multiply হয়।
    ```

    ```mcq
    ---
    type: single
    question: C তে **character constant** (যেমন `'A'`) এর **type** কী?
    ---
    
    - [x] int
      > ✅ C ভাষায় character constant-এর type হলো int।
    - [ ] char
      > ❌ Variable char হতে পারে, constant নয়।
    - [ ] string
      > ❌ string নয়।
    ```

    ```mcq
    ---
    type: multiple
    question: নিচের কোনগুলো **compile-time** constant হিসেবে array size/switch label-এ নিরাপদে use করা যায়? (Select all that apply)
    ---
    
    - [x] `#define N 100`
      > ✅ Preprocessor replace — compile-time।
    - [x] `enum { N = 100 }`
      > ✅ Enumerator constants are integer constant expressions।
    - [ ] `const int N = 100;`
      > ⚠️ সব প্রসঙ্গে compile-time constant হিসেবে ধরা না-ও হতে পারে; safest না।
    ```

    ```mcq
    ---
    type: single
    question: `"Hello"` string literal কি **modifiable**?
    ---
    
    - [x] No, modify করলে undefined behavior
      > ✅ String literal পরিবর্তন করা যায় না।
    - [ ] Yes, সবসময় করা যায়
      > ❌ UB হবে।
    - [ ] Depends on compiler, but safe
      > ❌ Safe না।
    ```

    ```mcq
    ---
    type: single
    question: Local scope এ `const int x;` (uninitialized) থাকলে x এর মান?
    ---
    
    - [x] Garbage/indeterminate
      > ✅ Local uninitialized variable garbage থাকে — always initialize।
    - [ ] 0
      > ❌ Global/static হলে default 0।
    - [ ] Compile error
      > ❌ Declaration valid; use করলে সমস্যা।
    ```

    ```mcq
    ---
    type: single
    question: নিচের কোনটি **valid** floating literal?
    ---
    
    - [x] `.5`
      > ✅ `.5` valid → 0.5 (double)।
    - [ ] `5e`
      > ❌ exponent incomplete।
    - [ ] `.e5`
      > ❌ invalid format।
    ```

    ```mcq
    ---
    type: multiple
    question: কোনগুলো **escape sequence**? (Select all that apply)
    ---
    
    - [x] `\\`
      > ✅ Backslash।
    - [x] `\"`
      > ✅ Double quote।
    - [x] `\t`
      > ✅ Tab।
    - [ ] `\y`
      > ❌ এমন escape নেই।
    ```


??? example "Hard — Tricky & Output‑based (10 MCQs)"
    ```mcq
    ---
    type: single
    question: `printf` এ **double** print করতে কোন specifier?
    ---
    
    - [ ] `%lf`
      > ❌ `printf` এ double → `%f`।
    - [x] `%f`
      > ✅ `%f`।
    - [ ] `%Lf`
      > ❌ `%Lf` long double।
    ```

    ```mcq
    ---
    type: single
    question: `scanf` এ **double** read করতে কোন specifier?
    ---
    
    - [ ] `%f`
      > ❌ `%f` float (`float*`)।
    - [x] `%lf`
      > ✅ `double*` এর জন্য `%lf`।
    - [ ] `%Lf`
      > ❌ `%Lf` long double।
    ```

    ```mcq
    ---
    type: single
    question: `printf("%u", -1);` (32-bit unsigned) আউটপুট nature কী?
    ---
    
    - [x] বড় positive সংখ্যা (e.g., 4294967295)
      > ✅ Two's complement wrap হয়ে unsigned এ বড় সংখ্যা।
    - [ ] -1
      > ❌ unsigned negative দেখায় না।
    - [ ] Error
      > ❌ Format mismatch না হলে error না।
    ```

    ```mcq
    ---
    type: single
    question: `052` (octal) এর decimal মান কত?
    ---
    
    - [ ] 52
      > ❌ এটা decimal ভাবলে।
    - [x] 42
      > ✅ 0*8² + 5*8 + 2 = 42।
    - [ ] 38
      > ❌ wrong calc।
    ```

    ```mcq
    ---
    type: single
    question: নিচের কোনটি valid string literal concatenation?
    ---
    
    - [x] `"Hi" " There"`
      > ✅ Adjacent string literals auto-concatenate → `"Hi There"`।
    - [ ] `'H' 'i'`
      > ❌ দুটো char constant — concatenation rules আলাদা; string বানায় না।
    - [ ] `"Hi" + "There"`
      > ❌ C তে `+` দিয়ে string যোগ হয় না।
    ```

    ```mcq
    ---
    type: multiple
    question: Constant define করার ভাল/নিরাপদ উপায়গুলো কোনগুলো? (Select all that apply)
    ---
    
    - [x] `#define MAX 100`
      > ✅ Widely used compile-time constant।
    - [x] `enum { MAX = 100 }`
      > ✅ Integer constant expression; type-safe in many cases।
    - [x] `const int MAX = 100;`
      > ✅ Typed read-only; যদিও সব প্রসঙ্গে compile-time নয় — তবু ভাল practice।
    ```

    ```mcq
    ---
    type: single
    question: নিচের কোন statement টি সঠিক?
    ---
    
    - [x] `"A"` modifiable নয় (modify করলে UB)
      > ✅ string literal পরিবর্তন করলে UB।
    - [ ] `'A'` modifiable নয়
      > ❌ char variable হলে modify করা যায়।
    - [ ] const variable সবসময় modify করা যায়
      > ❌ const modify করলে error।
    ```

    ```mcq
    ---
    type: single
    question: char vs string বিষয়ে কোনটি ঠিক?
    ---
    
    - [x] `'A'` একটি single character; `"A"` একটি null-terminated string
      > ✅ `"A"` → 'A' + `'\0'`।
    - [ ] `"A"` ও `'A'` একই জিনিস
      > ❌ Type ও storage আলাদা।
    - [ ] `"A"` কে char এ assign করা যায় warning ছাড়া
      > ❌ mismatch।
    ```

    ```mcq
    ---
    type: single
    question: Integer literal এ base শনাক্ত করার ঠিক pair কোনটি?
    ---
    
    - [x] `077` → octal, `0xFF` → hexadecimal
      > ✅ Leading 0 → octal; 0x → hex।
    - [ ] `077` → decimal, `0xFF` → octal
      > ❌ ভুল mapping।
    - [ ] `077` → hex, `0xFF` → decimal
      > ❌ ভুল mapping।
    ```

    ```mcq
    ---
    type: multiple
    question: Format specifier match—সঠিক জোড়া বেছে নাও (Select all that apply)
    ---
    
    - [x] `double` ↔ `%f` (printf)
      > ✅ printf এ double `%f`।
    - [x] `double*` ↔ `%lf` (scanf)
      > ✅ scanf এ double pointer `%lf`।
    - [x] `long double` ↔ `%Lf` (printf/scanf)
      > ✅ long double দুটোতেই `%Lf`।
    - [ ] `float` ↔ `%f` (scanf)
      > ❌ scanf এ `%f` আসলে `float*` ঠিক — কিন্তু many confuse with printf; এখানে tricky point: printf এ float promotion হয়ে double হয় ও `%f` লাগে; scanf এ `%f` মানে `float*`।
    ```
