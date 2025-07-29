আমরা এখন শিখবো —
# `005. Variables in C Programming`

> একদম 👶 Noob লেভেল থেকে ধরছি — যেন তুমি zero থেকে hero হয়ে যাও! 🦸

---

## 🔍 Variable মানে আসলে কী?

Variable মানে হলো **একটা বাক্স** 📦 যেখানে তুমি কোন **value** (মানে data) রাখবা।
এই বাক্সটার একটা **নাম** থাকবে, যাতে পরে দরকার হলে ওই value আমরা code-এ ব্যবহার করতে পারি।

📦 `age = 21`
মানে তুমি একটা `age` নামে box বানাইছো, যেটার ভিতরে 21 রাখা আছে।

---

## 🛠️ C Programming-এ Variable কিভাবে declare/initialize করতে হয়?

```
<data_type> <variable_name> = <value>;
```

🧊 Example:

```c
int age = 21;
```

👉 এখানে `int` হচ্ছে data type, `age` হচ্ছে variable name, আর `21` হচ্ছে value।

---

## 🗂️ Variable এর ধরন (Data Types) — Easy Table 📋

| Type           | Keyword | Example             | Use Case               |
| -------------- | ------- | ------------------- | ---------------------- |
| সংখ্যা (পূর্ণ) | `int`   | `int score = 90;`   | Number without decimal |
| দশমিক সংখ্যা   | `float` | `float pi = 3.14;`  | Number with decimal    |
| অক্ষর          | `char`  | `char grade = 'A';` | Single letter          |

🧠 মনে রাখো —

* `int` = পূর্ণ সংখ্যা
* `float` = ভাসমান দশমিক সংখ্যা
* `char` = character/letter

---

## ⚠️ Variable Naming Rules (With Emoji)

| ✅/❌ | Rule                                    | Example             |
| --- | --------------------------------------- | ------------------- |
| ✅   | শুরু করতে হবে letter বা underscore দিয়ে | `int _score = 100;` |
| ❌   | শুরুতে সংখ্যা দেয়া যাবে না              | `int 1num;` ❌ ভুল   |
| ❌   | স্পেশাল ক্যারেক্টার (like \$, %, @) নয়  | `int money$;` ❌     |
| ✅   | ছোট হাতের letter use করো                | `int age = 20;`     |

---

## 🔧 Real Life Analogy

| Variable Name | Value | বাস্তব উদাহরণ      |
| ------------- | ----- | ------------------ |
| `int age`     | 20    | তোমার বয়স          |
| `float gpa`   | 3.75  | তোমার GPA          |
| `char grade`  | 'A'   | তোমার result grade |

---

## 🧪 Example Code:

```c
#include <stdio.h>

int main() {
    int age = 22;
    float cgpa = 3.65;
    char grade = 'A';

    printf("Age: %d\n", age);
    printf("CGPA: %.2f\n", cgpa);
    printf("Grade: %c\n", grade);

    return 0;
}
```

🖨️ Output:

```
Age: 22
CGPA: 3.65
Grade: A
```


## 🧯 Common Mistakes 🔥

| ❌ Mistake              | ✅ Fix                       | Why?                     |
| ---------------------- | --------------------------- | ------------------------ |
| `int num = "Hello";`   | Use `char[]` or `string`    | string can't go in `int` |
| `float price = 10.5.3` | Use only one `.`            | Multiple dots invalid    |
| `char grade = A;`      | Use `'A'`                   | Char needs single quotes |
| Used without declare   | Declare first like `int x;` | C needs pre-declaration  |

---

## 📥 User Input Preview (Future Lesson)

```c
int age;
printf("Enter your age: ");
scanf("%d", &age);
printf("Your age is %d", age);
```

📌 Don’t worry, `scanf()` শেখাবো পরের লেসনে ইনপুট টপিকে।

---

## 🔁 Recap (সারসংক্ষেপ)

| Topic             | Example              | Explanation                |
| ----------------- | -------------------- | -------------------------- |
| Declaration       | `int age;`           | Just declare, no value yet |
| Initialization    | `int age = 20;`      | Declare + value set        |
| Assignment later  | `age = 25;`          | Value change later         |
| Use in `printf()` | `printf("%d", age);` | Show in output             |
