## 🧠 What does “Set Decimal Precision” mean?

👉 ধরেন আপনি একটা ভগ্নাংশ রাখছেন:

```c
float pi = 3.1415926535;
```

এখন আপনি চাচ্ছেন শুধু **২ ঘর** (3.14) অথবা **৪ ঘর** (3.1416) পর্যন্ত দেখাতে।

এই দেখানোর নিয়ন্ত্রণটাকেই বলে:

> ✅ “Setting Decimal Precision”
> মানে হচ্ছে দশমিকের পরে কত digit দেখাবো, সেটা ঠিক করা।

## 🛠 C তে Decimal Precision কিভাবে set করা হয়?

### 🎯 উত্তর: `%0.*f`, `%.nf`, অথবা `%.ng` format specifier দিয়ে

(এটা **`printf()`** এর format string এ হয়)


## ✅ Basic Syntax:

```c
printf("%.nf", value);
```

👉 এখানে `n` মানে হচ্ছে: দশমিকের পরে আপনি কয় ঘর দেখাতে চান

---

## 🔢 Example with Code

```c
#include <stdio.h>

int main() {
    float pi = 3.1415926535;

    printf("Original: %f\n", pi);      // Default: 6 digit after point
    printf("2 digits: %.2f\n", pi);    // 3.14
    printf("4 digits: %.4f\n", pi);    // 3.1416
    printf("6 digits: %.6f\n", pi);    // 3.141593 (default float)
    
    return 0;
}
```

### 🧾 Output:

```
Original: 3.141593
2 digits: 3.14
4 digits: 3.1416
6 digits: 3.141593
```

---

## 🎯 Bonus: Scientific Precision with `%e` or `%g`

```c
printf("%.3e", pi); // 3.142e+00 (Scientific notation)
```

`%g` smart format: it removes trailing zeros or chooses scientific form automatically:

```c
printf("%.4g", pi); // Output: 3.142
```

## 🧠 Analogy:

ধরেন আপনি একটা আম কাটলেন 🥭 —

* কেউ বলল: "আমার ২ টুকরা দাও"
* কেউ বলল: "আমার ৪ টুকরা চাই"

👉 এখন আপনি সেই অনুযায়ী কাটলেন — তেমনি করে, **float/double number কেও কাটছাঁট করে** নির্দিষ্ট ঘর পর্যন্ত দেখানো হয়!

---

## ⚠️ Common Mistakes ❌

| ভুল                                      | কেন হয়               | Example                         |
| ---------------------------------------- | -------------------- | ------------------------------- |
| `%f` use করেও দশমিক ঘর কাস্টমাইজ না করা  | default 6 ঘর দেখায়   | `%f` = 3.141593                 |
| `int` variable দিয়ে precision expect করা | দশমিক show করবে না ❌ | `int x = 5; printf("%.2f", x);` |
| `%.nf` এ ভুল syntax                      | syntax error         | `%.f`, `%2f` ❌                  |

---

## 🔍 Pro Tip (Dynamic Precision):

```c
int precision = 3;
float value = 5.6789;
printf("%.*f", precision, value); // Shows 5.679
```

এখানে `*` মানে হচ্ছে — precision dynamically দিবেন।

---

## ✅ Practice Exercise (Challenge):

Try to print these numbers in different precision:

```c
float a = 1.23456789;
double b = 12345.678901;

printf("%.3f", a);  
printf("%.6f", b);  
printf("%.1e", b);  
```

## 🧩 Visual: Format Specifier Flowchart

```markdown
        +-----------------------------+
        | Do you want decimal output?|
        +-------------+---------------+
                      |
              +-------v--------+
              |     YES        |
              +-------+--------+
                      |
             +--------v--------+
             | What format?    |
             +--------+--------+
                      |
      +---------------+--------------------+
      |                                    |
+-----v-----+                     +--------v--------+
| Fixed     |                     | Scientific Form |
| Decimal   |                     | (Exponent form) |
+-----------+                     +-----------------+
      |                                   |
   %.2f, %.4f...                     %.2e, %.3e...
```

---

## 📘 Code Examples Recap:

```c
#include <stdio.h>

int main() {
    float pi = 3.1415926535;

    // Fixed precision
    printf("Default (6 digits): %f\n", pi);
    printf("2 digits: %.2f\n", pi);
    printf("4 digits: %.4f\n", pi);
    printf("6 digits: %.6f\n", pi);

    // Scientific Notation
    printf("Scientific (2 digits): %.2e\n", pi);

    // Smart formatting
    printf("Smart format: %.4g\n", pi);

    // Dynamic precision
    int n = 3;
    printf("Dynamic precision: %.*f\n", n, pi);

    return 0;
}
```

---

## 🧠 Summary Table

| Format | Meaning                        | Example for pi (3.1415926) |
| ------ | ------------------------------ | -------------------------- |
| `%.2f` | 2 decimal points               | 3.14                       |
| `%.4f` | 4 decimal points               | 3.1416                     |
| `%.6f` | 6 decimal points (default)     | 3.141593                   |
| `%.2e` | Scientific notation (2 digits) | 3.14e+00                   |
| `%.4g` | Smart format                   | 3.142                      |
| `%.*f` | Dynamic precision              | Depends on variable        |

---

## ✅ Practice Challenge for You

Try these:

```c
float a = 123.456789;
double b = 98765.43210;

printf("%.3f", a);   // Expected: 123.457
printf("%.6f", b);   // Expected: 98765.432100
printf("%.1e", b);   // Expected: 9.9e+04 approx
printf("%.5g", a);   // Smart format
```






