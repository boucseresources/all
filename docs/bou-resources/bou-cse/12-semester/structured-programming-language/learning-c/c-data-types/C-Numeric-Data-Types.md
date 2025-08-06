## 🧠 C Numeric Data Types — একদম Dummy দের জন্য Full Explained in Banglish!

🪄 ধরেন আপনি একটা store খুলছেন — আর প্রতিটা product রাখার জন্য আপনাকে ঠিকঠাক container লাগবে। বড় কিছু হলে বড় বাক্স, ছোট কিছু হলে ছোট ডিব্বা। ঠিক একই ভাবে C প্রোগ্রামেও **variable** বানাতে হলে আপনাকে জানাতে হয়,
➤ আপনি **কোন ধরনের সংখ্যা** রাখবেন (whole না decimal)?
➤ আর সেই সংখ্যাটা **কত বড় হতে পারে**?

👉 এই info গুলা C কে জানানোর জন্য আমরা use করি — **Numeric Data Types**!

---

## 🔢 C তে Numeric Data Types দুই ভাগে ভাগ:

| টাইপ               | কি রাখে                   | Example          |
| ------------------ | ------------------------- | ---------------- |
| **Integer**        | পূর্ণ সংখ্যা (no point)   | 5, -20, 100      |
| **Floating Point** | দশমিক সংখ্যা (with point) | 3.14, -2.5, 0.99 |

---

## 1️⃣ Integer Types (Whole Numbers)

📦 এগুলা দিয়ে আমরা point ছাড়া সংখ্যা রাখি। যেমন: 25, -100

| Type        | Size (Bytes) | Range (প্রায়) | উদাহরণ                       |
| ----------- | ------------ | ------------- | ---------------------------- |
| `int`       | 4            | -2B to +2B    | `int age = 18;`              |
| `short`     | 2            | -32K to +32K  | `short x = 10;`              |
| `long`      | 4 or 8       | বড় range      | `long views = 100000;`       |
| `long long` | 8            | বিশাল সংখ্যা  | `long long id = 1234567890;` |

✅ যদি আপনি negative number দরকার না পড়ে, তাহলে **unsigned** use করতে পারেন:

```c
unsigned int count = 100; // শুধু positive 😎
```

⚠️ Warning: unsigned এ negative দিলে ফলাফল হবে অদ্ভুত ❌

---

### 🧃 Analogy (Real life example)

`int` = 1 liter এর বোতল
`short` = অর্ধেক বোতল
`long` = ১০ লিটার ড্রাম
`long long` = বিশাল water tanker 🚛

---

## 2️⃣ Floating Point Types (Decimal Numbers)

📦 এগুলা দিয়ে point সহ সংখ্যা রাখা যায়।

| Type          | Size | Precision (Digit Accuracy) | Example                    |
| ------------- | ---- | -------------------------- | -------------------------- |
| `float`       | 4    | ≈ ৬ digits                 | `float temp = 36.5;`       |
| `double`      | 8    | ≈ ১৫ digits                | `double pi = 3.14159265;`  |
| `long double` | 10+  | আরও বেশি precision         | `long double g = 9.80665;` |

---

### 🧪 কখন কোনটা ব্যবহার করবেন?

| প্রয়োজন                                   | Data Type     |
| ----------------------------------------- | ------------- |
| Simple decimal                            | `float`       |
| Accurate decimal                          | `double`      |
| High-precision calculation (physics/math) | `long double` |

---

## 🔰 Default / Initial Values:

C automatically variable এর মান set করে না! আপনি নিজে দিতে হবে।

| Variable   | Default   | সঠিক উপায়          |
| ---------- | --------- | ------------------ |
| `int x;`   | ❌ Garbage | `int x = 0;` ✅     |
| `float y;` | ❌ Garbage | `float y = 1.5;` ✅ |

---

## 📋 Summary Table — এক নজরে

| টাইপ     | Nature            | Example            | Range (প্রায়) |
| -------- | ----------------- | ------------------ | ------------- |
| `int`    | Whole number      | `int x = 5;`       | ± 2B          |
| `short`  | Whole, ছোটো       | `short a = 12;`    | ± 32K         |
| `long`   | Whole, বড়         | `long v = 1M;`     | বেশি          |
| `float`  | Decimal, সাধারণ   | `float pi = 3.14;` | ± 10^38       |
| `double` | Decimal, accurate | `double g = 9.81;` | ± 10^308      |

---

## 🧠 Flowchart — কোন Data Type নেবেন?

```markdown
            +---------------------------+
            | Decimal দরকার আছে?         |
            +---------------------------+
                      |
           +----------+-----------+
          হ্যাঁ                    না
           |                      |
      +----v----+          +------v------+
      |  float  |          |     int     |
      +---------+          +-------------+
           |
   +-------v--------+
   | Precision দরকার বেশি? |
   +------------------+
           |
    হ্যাঁ           না
     |              |
+----v----+       float
| double  |
+---------+
```

---

## ⚠️ ভুল যেগুলা Beginner রা করে:

| ❌ ভুল                                  | কি হবে                 |
| -------------------------------------- | ---------------------- |
| `int x;` declare করে assign না দেয়া    | Garbage value আসবে ⚠️  |
| `float` use করে exact value expect করা | value ভাঙা আসতে পারে ❌ |
| `%d` vs `%f` ভুল printf format         | output ভুল বা crash    |

উদাহরণ:

```c
int x = 10;
printf("%d", x); // ✅ ঠিক আছে
printf("%f", x); // ❌ float format, ভুল!
```

---

## 🎓 একটা মজার analogy মনে রাখার জন্য

Think of variables as different **size containers**:

* `int` = জুসের গ্লাস 🥤
* `float` = মাপার কাপ 🧪
* `double` = ১ লিটার বোতল 🧴
* `long` = বড় ড্রাম
* `short` = চা এর কাপ ☕

যদি আপনি ছোট কাপে ২ লিটার পানি ঢালেন, overflow হবে বা ভুল আসবে 😅
