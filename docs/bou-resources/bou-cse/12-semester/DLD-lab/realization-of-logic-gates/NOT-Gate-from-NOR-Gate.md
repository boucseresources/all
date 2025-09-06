---
title: NOT Gate from NOR Gate
---

একটি NOT Gate হলো একটি basic logic gate যা আউটপুট দেয় তার ইনপুটের complement। একটি NOR gate হলো একটি universal logic gate যা ব্যবহার করে অন্য যেকোনো ধরনের logic gate বাস্তবায়ন করা যায়। একটি NOR gate মূলত একটি OR gate এবং একটি NOT gate এর সমন্বয়।

এই টিউটোরিয়ালটি পড়ো এবং জেনে নাও কীভাবে একটি NOT gate কে একটি NOR gate ব্যবহার করে বাস্তবায়ন করা যায়। আসো, NOT এবং NOR gate নিয়ে একটি সংক্ষিপ্ত আলোচনা দিয়ে শুরু করি।

---

### What is a NOT Gate?

ডিজিটাল ইলেকট্রনিক্সে, একটি NOT gate হলো একটি basic logic gate যার কেবল একটি ইনপুট এবং একটি আউটপুট থাকে। এটি এমন এক ধরনের logic gate যার আউটপুট সবসময় ইনপুটের complement হয়। এজন্য NOT gate কে **inverter** নামেও ডাকা হয়।

![What is a NOT Gate](image-4.png)

যদি NOT gate এর ইনপুট LOW (Logic 0) হয়, তাহলে এটি HIGH (Logic 1) আউটপুট দেয়। যদি ইনপুট HIGH (Logic 1) হয়, তাহলে NOT gate LOW (Logic 0) আউটপুট দেয়। Figure-1 এ NOT gate এর লজিক সিম্বল দেখানো হয়েছে।

### Implementation of NOT Gate From NOR Gate 1

NOT অপারেশনকে **bar** চিহ্ন দিয়ে প্রকাশ করা হয়। সুতরাং, যদি NOT gate এর ইনপুট ভ্যারিয়েবল হয় A, তাহলে এর আউটপুট Y হবে –

$$
Y = \overline{A}
$$


### Truth Table of NOT Gate

NOT gate এর truth table ইনপুট এবং আউটপুট ভ্যারিয়েবলের সম্পর্ক দেখায়। নিচে NOT gate এর truth table দেওয়া হলো −

| Input (A) | Output (Y = $\overline{A}$) |
| --------- | --------------------------- |
| 0         | 1                           |
| 1         | 0                           |



### What is a NOR Gate?

NOR gate হলো একটি universal gate, তাই এটি ব্যবহার করে অন্য যেকোনো ধরনের logic gate বাস্তবায়ন করা যায়। NOR gate মূলত NOT gate এবং OR gate এর সমন্বয়, অর্থাৎ OR gate এর সাথে NOT gate বসালে তা NOR gate হয়। সুতরাং −

$$
\text{NOR Gate} = \text{OR Gate} + \text{NOT Gate}
$$


![nor-gate](image-5.png)

একটি NOR gate যেকোনো সংখ্যক ইনপুট নিতে পারে এবং একটি আউটপুট দেয়। NOR gate এর আউটপুট HIGH (Logic 1) হবে তখনই যখন সব ইনপুট LOW (Logic 0) থাকে। অন্য যেকোনো ইনপুট কম্বিনেশনে এর আউটপুট LOW (Logic 0) হয়। Figure-2 তে একটি two-input NOR gate এর লজিক সিম্বল দেখানো হয়েছে।


### Implementation of NOT Gate From NOR Gate 2

NOR gate এর কার্যপ্রণালী প্রকাশ করা যায় এভাবে −

$$
Y = \overline{(A + B)}
$$

এখানে, A এবং B হলো ইনপুট ভ্যারিয়েবল এবং Y হলো NOR gate এর আউটপুট ভ্যারিয়েবল। এই আউটপুট এক্সপ্রেশনকে পড়া যায় এভাবে –
**"Y is equal to A plus B whole bar"**

### Truth Table of NOR Gate

বিভিন্ন ইনপুট কম্বিনেশনের জন্য NOR gate এর truth table নিচে দেওয়া হলো −

| A | B | Y = $\overline{(A + B)}$ |
| - | - | ------------------------ |
| 0 | 0 | 1                        |
| 0 | 1 | 0                        |
| 1 | 0 | 0                        |
| 1 | 1 | 0                        |

---

### Implementation of NOT Gate from NOR Gate

যেমন উপরে আলোচনা করা হয়েছে, একটি NOR gate হলো universal gate, তাই এটি ব্যবহার করে যেকোনো ধরনের logic gate বাস্তবায়ন করা যায়। Figure-3 এ NOR gate ব্যবহার করে NOT gate বাস্তবায়নের চিত্র দেখানো হয়েছে।

NOT gate কে NOR gate ব্যবহার করে বাস্তবায়ন করতে, আমরা কেবল সব ইনপুট টার্মিনালগুলোকে একসাথে যুক্ত করি এবং যে signal কে invert করতে চাই সেটি এই common ইনপুট টার্মিনালে প্রয়োগ করি।

এছাড়াও, আমরা NOR gate কে NOT gate হিসেবে ব্যবহার করতে পারি যদি সব ইনপুট টার্মিনাল ছাড়া একটি ইনপুট টার্মিনালকে Logic 0 তে যুক্ত করি এবং বাকি ইনপুটে সেই signal দিই যেটিকে invert করতে চাই। এই কনফিগারেশনকে **controlled inverter** বলা হয়।

সুতরাং, এইভাবে কেবল NOR gate ব্যবহার করেই একটি NOT gate বাস্তবায়ন করা সম্ভব।

