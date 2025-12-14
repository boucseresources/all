---
title: DLD Theroy Assingment 01
---
# DLD Theory Assignment 01:

এটা স্যারের থেকে নিয়ে নিতে হবে। প্রত্যেকের জন্য আলাদাভাবে ১ টি করে Problem দিয়েছেন, স্যার। অর্থাৎ এক্ষেত্রে কোন specific topic বলা হয়নি।

**Deadline**: আগামী শুক্রবার (১৯ সেপ্টেম্বর) পর্যন্ত।

**For Pracitce**
F=Σm(0,1,5,9,13,17,29,31)
F=Σm(0,3,9,11,15,19,23,25,30)
F=Σm(5,7,9,13,23,25,27,30)
F=Σm(0,5,9,18,20,23,27,31)
F=Σm(1,2,3,5,9,23,25,27,31)
F=Σm(0,5,9,13,15,27,30,31)

**Boolean Functions** (For indiviuals)

F=Σm(0,1,5,9,13,17,29,31) — 044
F=Σm(0,3,9,11,15,19,23,25,30) — 001
F=Σm(5,7,9,13,23,25,27,30) — 024
F=Σm(0,5,9,18,20,23,27,31) — 23
F=Σm(1,2,3,5,9,23,25,27,31) — 010
F=Σm(0,5,9,13,15,27,30,31) — 037

48: F=Σm(0,5,9,11,15,23,24,27)
010: F=Σm(4,6,12,16,17,23,29)
003: f=Σm(0,1,5,7,16,19,30,31)
045: F=Σm(0,1,2,3,11,15,16,23,30)
001: F=Σm(4,6,12,15,23,28,29,30)

---

### **অ্যাসাইনমেন্ট নোটিশ**

**কোর্স:** ডিজিটাল লজিক ডিজাইন (Digital Logic Design)
**বিষয়:** বুলিয়ান ফাংশন সরলীকরণ এবং লজিক সার্কিট ডিজাইন (Boolean Function Simplification & Logic Circuit Design)


**(Task Instructions):**

1.  **Truth Table Generation:** প্রদত্ত Boolean Function-টির জন্য একটি সম্পূর্ণ Truth Table তৈরি করুন।

2.  **Derivation of Standard Form:** প্রস্তুতকৃত Truth Table থেকে ফাংশনটির Standard Canonical Form (Sum of Products - SOP বা Product of Sums - POS) নির্ণয় করুন।

3.  **Simplification using Boolean Algebra:** Boolean Algebra-র বিভিন্ন সূত্র (Theorems) ও আইডেনটিটি (Identities) ব্যবহার করে ফাংশনটি Simplify (সরল) করুন।

4.  **Simplification using Karnaugh Map:** Karnaugh Map (K-Map) পদ্ধতি ব্যবহার করে ফাংশনটি পুনরায় Simplify করুন।

5.  **Logic Circuit Implementation:** সরলীকৃত ফাংশনগুলোর জন্য নিম্নলিখিত নির্দেশনা অনুযায়ী Logic Circuit অঙ্কন করুন:

    - **ক) K-Map থেকে প্রাপ্ত Simplified Function-এর জন্য (কার্য ৪):**

      - i. Basic Logic Gates (AND, OR, NOT) ব্যবহার করে সার্কিটটি অঙ্কন করুন।
      - ii. Universal Gates (শুধুমাত্র NAND অথবা শুধুমাত্র NOR) ব্যবহার করে সার্কিটটি অঙ্কন করুন।

    - **খ) Boolean Algebra থেকে প্রাপ্ত Simplified Function-এর জন্য (কার্য ৩):**
      - i. Basic Logic Gates (AND, OR, NOT) ব্যবহার করে সার্কিটটি অঙ্কন করুন।
      - ii. Universal Gates (শুধুমাত্র NAND অথবা শুধুমাত্র NOR) ব্যবহার করে সার্কিটটি অঙ্কন করুন।
---

Soution: 
Boolean Implementation of given Function and Truth table

The given equation is:

[
f(A,B,C,D,E)=\Sigma m(0,1,5,7,16,19,30,31)
]

1. From the given equation, the complete truth table is obtained as follows.

| Dec | A | B | C | D | E | F |
| --- | - | - | - | - | - | - |
| 0   | 0 | 0 | 0 | 0 | 0 | 1 |
| 1   | 0 | 0 | 0 | 0 | 1 | 1 |
| 2   | 0 | 0 | 0 | 1 | 0 | 0 |
| 3   | 0 | 0 | 0 | 1 | 1 | 0 |
| 4   | 0 | 0 | 1 | 0 | 0 | 0 |
| 5   | 0 | 0 | 1 | 0 | 1 | 1 |
| 6   | 0 | 0 | 1 | 1 | 0 | 0 |
| 7   | 0 | 0 | 1 | 1 | 1 | 1 |
| 8   | 0 | 1 | 0 | 0 | 0 | 0 |
| 9   | 0 | 1 | 0 | 0 | 1 | 0 |
| 10  | 0 | 1 | 0 | 1 | 0 | 0 |
| 11  | 0 | 1 | 0 | 1 | 1 | 0 |
| 12  | 0 | 1 | 1 | 0 | 0 | 0 |
| 13  | 0 | 1 | 1 | 0 | 1 | 0 |
| 14  | 0 | 1 | 1 | 1 | 0 | 0 |
| 15  | 0 | 1 | 1 | 1 | 1 | 0 |
| 16  | 1 | 0 | 0 | 0 | 0 | 1 |
| 17  | 1 | 0 | 0 | 0 | 1 | 0 |
| 18  | 1 | 0 | 0 | 1 | 0 | 0 |
| 19  | 1 | 0 | 0 | 1 | 1 | 1 |
| 20  | 1 | 0 | 1 | 0 | 0 | 0 |
| 21  | 1 | 0 | 1 | 0 | 1 | 0 |
| 22  | 1 | 0 | 1 | 1 | 0 | 0 |
| 23  | 1 | 0 | 1 | 1 | 1 | 0 |
| 24  | 1 | 1 | 0 | 0 | 0 | 0 |
| 25  | 1 | 1 | 0 | 0 | 1 | 0 |
| 26  | 1 | 1 | 0 | 1 | 0 | 0 |
| 27  | 1 | 1 | 0 | 1 | 1 | 0 |
| 28  | 1 | 1 | 1 | 0 | 0 | 0 |
| 29  | 1 | 1 | 1 | 0 | 1 | 0 |
| 30  | 1 | 1 | 1 | 1 | 0 | 1 |
| 31  | 1 | 1 | 1 | 1 | 1 | 1 |

Here (F=1) only for the minterm indices (0,1,5,7,16,19,30,31), as required.


## Standard Representation

Here,

$$
F=\Sigma m(0,1,5,7,16,19,30,31)
$$

### Table for Canonical / Standard Form

| Decimal |  A  |  B  |  C  |  D  |  E  | Standard Form                                                        |     |
| :-----: | :-: | :-: | :-: | :-: | :-: | :------------------------------------------------------------------- | --- |
|    0    |  0  |  0  |  0  |  0  |  0  | $$\overline{A} \overline{B} \overline{C} \overline{D} \overline{E}$$ |     |
|    1    |  0  |  0  |  0  |  0  |  1  | $$\overline{A} \overline{B} \overline{C} \overline{D}E$$             |     |
|    5    |  0  |  0  |  1  |  0  |  1  | $$\overline{A} \overline{B}C \overline{D}E$$                         |     |
|    7    |  0  |  0  |  1  |  1  |  1  | $$\overline{A} \overline{B}CDE$$                                     |     |
|   16    |  1  |  0  |  0  |  0  |  0  | $$A \overline{B} \overline{C} \overline{D} \overline{E}$$            |     |
|   19    |  1  |  0  |  0  |  1  |  1  | $$A \overline{B} \overline{C}DE$$                                    |     |
|   30    |  1  |  1  |  1  |  1  |  0  | $$ABCD \overline{E}$$                                                |     |
|   31    |  1  |  1  |  1  |  1  |  1  | $$ABCDE$$                                                            |     |

### Final Standard (Canonical Sum-of-Products) Expression

$$
F=
\overline{A}\overline{B}\overline{C}\overline{D}\overline{E}

+ \overline{A}\overline{B}\overline{C}\overline{D}E
+ \overline{A}\overline{B}C\overline{D}E
+ \overline{A}\overline{B}CDE
+ A\overline{B}\overline{C}\overline{D}\overline{E}
+ A\overline{B}\overline{C}DE
+ ABCD\overline{E}
+ ABCDE
  $$


Minimized function (what this table is based on):

$$
F=\overline{A}.\overline{B}.\overline{C}.\overline{D}
+\overline{B}.\overline{C}.\overline{D}.\overline{E}
+\overline{A}.\overline{B}.C.E
+A.\overline{B}.\overline{C}.D.E
+A.B.C.D
$$

So the product-term columns are:

* $\overline{A}.\overline{B}.\overline{C}.\overline{D}$
* $\overline{B}.\overline{C}.\overline{D}.\overline{E}$
* $\overline{A}.\overline{B}.C.E$
* $A.\overline{B}.\overline{C}.D.E$
* $A.B.C.D$

The final column is their sum (OR):
$$F=\text{(col 1)}+\text{(col 2)}+\text{(col 3)}+\text{(col 4)}+\text{(col 5)}$$
### Truth Table from Minimized Function

| Dec |  A  |  B  |  C  |  D  |  E  | $$\overline{A},\overline{B},\overline{C},\overline{D}$$ | $$\overline{B},\overline{C},\overline{D},\overline{E}$$ | $$\overline{A},\overline{B},C,E$$ | $$A,\overline{B},\overline{C},D,E$$ | $$A,B,C,D$$ | $$F$$ |
| :-: | :-: | :-: | :-: | :-: | :-: | :-----------------------------------------------------: | :-----------------------------------------------------: | :-------------------------------: | :---------------------------------: | :---------: | :---: |
|  0  |  0  |  0  |  0  |  0  |  0  |                            1                            |                            1                            |                 0                 |                  0                  |      0      |   1   |
|  1  |  0  |  0  |  0  |  0  |  1  |                            1                            |                            0                            |                 0                 |                  0                  |      0      |   1   |
|  2  |  0  |  0  |  0  |  1  |  0  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  3  |  0  |  0  |  0  |  1  |  1  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  4  |  0  |  0  |  1  |  0  |  0  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  5  |  0  |  0  |  1  |  0  |  1  |                            0                            |                            0                            |                 1                 |                  0                  |      0      |   1   |
|  6  |  0  |  0  |  1  |  1  |  0  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  7  |  0  |  0  |  1  |  1  |  1  |                            0                            |                            0                            |                 1                 |                  0                  |      0      |   1   |
|  8  |  0  |  1  |  0  |  0  |  0  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  9  |  0  |  1  |  0  |  0  |  1  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  10 |  0  |  1  |  0  |  1  |  0  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  11 |  0  |  1  |  0  |  1  |  1  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  12 |  0  |  1  |  1  |  0  |  0  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  13 |  0  |  1  |  1  |  0  |  1  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  14 |  0  |  1  |  1  |  1  |  0  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  15 |  0  |  1  |  1  |  1  |  1  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  16 |  1  |  0  |  0  |  0  |  0  |                            0                            |                            1                            |                 0                 |                  0                  |      0      |   1   |
|  17 |  1  |  0  |  0  |  0  |  1  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  18 |  1  |  0  |  0  |  1  |  0  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  19 |  1  |  0  |  0  |  1  |  1  |                            0                            |                            0                            |                 0                 |                  1                  |      0      |   1   |
|  20 |  1  |  0  |  1  |  0  |  0  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  21 |  1  |  0  |  1  |  0  |  1  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  22 |  1  |  0  |  1  |  1  |  0  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  23 |  1  |  0  |  1  |  1  |  1  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  24 |  1  |  1  |  0  |  0  |  0  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  25 |  1  |  1  |  0  |  0  |  1  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  26 |  1  |  1  |  0  |  1  |  0  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  27 |  1  |  1  |  0  |  1  |  1  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  28 |  1  |  1  |  1  |  0  |  0  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  29 |  1  |  1  |  1  |  0  |  1  |                            0                            |                            0                            |                 0                 |                  0                  |      0      |   0   |
|  30 |  1  |  1  |  1  |  1  |  0  |                            0                            |                            0                            |                 0                 |                  0                  |      1      |   1   |
|  31 |  1  |  1  |  1  |  1  |  1  |                            0                            |                            0                            |                 0                 |                  0                  |      1      |   1   |
