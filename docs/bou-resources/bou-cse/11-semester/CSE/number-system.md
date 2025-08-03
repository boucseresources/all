---
dg-home: false
dg-publish: true
aliases: 
tags:
---

### Number System:
A **number system** is a writing system for expressing numbers; it is a mathematical notation for representing numbers in a consistent manner. There are several different types of number systems that are commonly used in mathematics and computer science.

Here are the main types of **Number Systems**:

---

### **1. Decimal Number System (Base-10)**

The **Decimal system** is the most widely used number system in the world. It is **base-10**, which means it uses 10 digits: **0, 1, 2, 3, 4, 5, 6, 7, 8, 9**.
* **Position and Place Value**: Each position in a decimal number represents a power of 10.
  * Example: In the number **345**, the **3** is in the "hundreds" place, **4** is in the "tens" place, and **5** is in the "ones" place.
#### Example of Decimal Conversion:

* Convert \*\*(345)\*\*₁₀ to binary:

  * Start by dividing by 2 and keeping track of remainders:

    * 345 ÷ 2 = 172, remainder 1
    * 172 ÷ 2 = 86, remainder 0
    * 86 ÷ 2 = 43, remainder 0
    * 43 ÷ 2 = 21, remainder 1
    * 21 ÷ 2 = 10, remainder 1
    * 10 ÷ 2 = 5, remainder 0
    * 5 ÷ 2 = 2, remainder 1
    * 2 ÷ 2 = 1, remainder 0
    * 1 ÷ 2 = 0, remainder 1
  * Reversed remainder sequence: \*\*(101011001)\*\*₂

---

### **2. Binary Number System (Base-2)**

The **Binary system** is the number system used by all modern computers and digital systems because it is straightforward to implement with digital electronic circuitry, which has two states: **ON (1)** and **OFF (0)**.

* **Digits**: It uses only **two digits**, 0 and 1.
* **Place Value**: Each digit (bit) represents a power of **2**.

  * Example: The binary number **1011**₂ is calculated as:

    * **(1 × 2³) + (0 × 2²) + (1 × 2¹) + (1 × 2⁰)** = **8 + 0 + 2 + 1 = 11** in decimal.

#### Example of Binary Conversion:

* Convert \*\*(1011)\*\*₂ to decimal:

  * **1 × 2³ + 0 × 2² + 1 × 2¹ + 1 × 2⁰** = **8 + 0 + 2 + 1 = 11**₁₀

---

### **3. Octal Number System (Base-8)**

The **Octal system** is a base-8 system, which means it uses **eight digits**: **0, 1, 2, 3, 4, 5, 6, 7**. It is often used in computer science as a shorthand for binary.

* **Place Value**: Each digit in an octal number represents a power of **8**.

  * Example: The octal number **123**₈ is calculated as:

    * **(1 × 8²) + (2 × 8¹) + (3 × 8⁰)** = **64 + 16 + 3 = 83** in decimal.

#### Example of Octal Conversion:

* Convert \*\*(123)\*\*₈ to decimal:

  * **1 × 8² + 2 × 8¹ + 3 × 8⁰** = **64 + 16 + 3 = 83**₁₀

---

### **4. Hexadecimal Number System (Base-16)**

The **Hexadecimal system** is a base-16 system, which means it uses **sixteen digits**: **0-9** and **A-F**, where **A=10, B=11, C=12, D=13, E=14, F=15**.

* **Place Value**: Each digit in a hexadecimal number represents a power of **16**.

  * Example: The hexadecimal number **1A3**₁₆ is calculated as:

    * **(1 × 16²) + (A × 16¹) + (3 × 16⁰)** = **(1 × 256) + (10 × 16) + (3 × 1)** = **256 + 160 + 3 = 419** in decimal.

#### Example of Hexadecimal Conversion:

* Convert \*\*(1A3)\*\*₁₆ to decimal:

  * **1 × 16² + A × 16¹ + 3 × 16⁰** = **1 × 256 + 10 × 16 + 3 × 1** = **256 + 160 + 3 = 419**₁₀


#  Number System Conversions 

## Common Number Systems

| Number System   | Base | Digits Used     | Example          |
| --------------- | ---- | --------------- | ---------------- |
| **Binary**      | 2    | 0, 1            | `1010`           |
| **Octal**       | 8    | 0–7             | `745`            |
| **Decimal**     | 10   | 0–9             | `255`            |
| **Hexadecimal** | 16   | 0–9, A–F        | `3F`             |
| **BCD**         | n/a  | 4-bit per digit | `25 = 0010 0101` |

---

## 🔁 Most Used Conversion Paths

| From → To        | Short Method                    | Manual / Long Form               |
| ---------------- | ------------------------------- | -------------------------------- |
| Decimal → Binary | Divide by 2, reverse remainders | `25 ÷ 2 → 12 R1 ...`             |
| Binary → Decimal | Multiply by 2ⁿ                  | `1×2⁴ + 0×2³ + ...`              |
| Decimal → Octal  | Divide by 8                     | `83 ÷ 8 → 10 R3 → ...`           |
| Octal → Decimal  | Multiply by 8ⁿ                  | `1×8² + 2×8¹ + 3×8⁰`             |
| Decimal → Hex    | Divide by 16                    | `254 ÷ 16 → 15 R14 → F`          |
| Hex → Decimal    | Multiply by 16ⁿ                 | `F×16¹ + E×16⁰ = 240 + 14 = 254` |
| Binary ↔ Octal   | Group 3 bits                    | `110010 → 110 010 → 6 2`         |
| Binary ↔ Hex     | Group 4 bits                    | `11011110 → 1101 1110 → D E`     |
| Octal ↔ Hex      | Convert via Binary              | `Octal → Binary → Hex`           |

---

## 📌 Fractional Number Conversions

| From → To        | Integer Part Method | Fraction Part Method    | Example             |
| ---------------- | ------------------- | ----------------------- | ------------------- |
| Decimal → Binary | ÷2 and reverse      | ×2, take integer parts  | `10.625 → 1010.101` |
| Binary → Decimal | ∑ digit × 2ⁿ        | ∑ digit × 2⁻ⁿ           | `1010.101 = 10.625` |
| Decimal → Octal  | ÷8                  | ×8, take integer parts  | `25.375 → 31.3`     |
| Octal → Decimal  | ∑ digit × 8ⁿ        | ∑ digit × 8⁻ⁿ           | `31.3₈ = 25.375`    |
| Decimal → Hex    | ÷16                 | ×16, take integer parts | `26.5625 → 1A.9`    |
| Hex → Decimal    | ∑ digit × 16ⁿ       | ∑ digit × 16⁻ⁿ          | `1A.9 = 26.5625`    |

---

## 💡 Tricks & Tips

| Trick                     | Use Case                          |
| ------------------------- | --------------------------------- |
| Group 3 bits (from right) | Binary → Octal                    |
| Group 4 bits (from right) | Binary → Hex                      |
| A–F = 10–15               | Hex → Decimal                     |
| Use left/right 0-padding  | Before/after decimal in groupings |
| Invalid digits in Octal   | Only 0–7 allowed (no 8/9)         |
| Decimal Fraction → Binary | Multiply fraction ×2 repeatedly   |

---

### 🔍 Decimal Fraction to Binary (Step-by-Step)

Convert `0.625` to binary:

```
0.625 × 2 = 1.25 → 1
0.25  × 2 = 0.5  → 0
0.5   × 2 = 1.0  → 1
→ Binary = .101
```

---

### 🔍 Binary Fraction to Decimal

Convert `0.101` to decimal:

```
1×2⁻¹ = 0.5
0×2⁻² = 0
1×2⁻³ = 0.125
→ Decimal = 0.625
```

---

## 🧾 Quick Cheatsheet

| From → To        | Integer Part            | Fractional Part         |
| ---------------- | ----------------------- | ----------------------- |
| Decimal → Binary | ÷2 + reverse remainders | ×2 + take integer parts |
| Binary → Decimal | ∑ digit × 2ⁿ            | ∑ digit × 2⁻ⁿ           |
| Decimal → Octal  | ÷8                      | ×8                      |
| Octal → Decimal  | ∑ digit × 8ⁿ            | ∑ digit × 8⁻ⁿ           |
| Decimal → Hex    | ÷16                     | ×16                     |
| Hex → Decimal    | ∑ digit × 16ⁿ           | ∑ digit × 16⁻ⁿ          |
| Binary ↔ Octal   | Group 3 bits            | Group 3 after decimal   |
| Binary ↔ Hex     | Group 4 bits            | Group 4 after decimal   |

---

## 🔠 BCD (Binary-Coded Decimal)

BCD = Write **each decimal digit** as a **4-bit binary**.

| Digit | BCD  |
| ----- | ---- |
| 0     | 0000 |
| 1     | 0001 |
| 2     | 0010 |
| 3     | 0011 |
| 4     | 0100 |
| 5     | 0101 |
| 6     | 0110 |
| 7     | 0111 |
| 8     | 1000 |
| 9     | 1001 |

🧠 **Example**: `25` in BCD → `0010 0101`

---

## 🗺️ Conversion Map (All Paths)

```
       Decimal (10)
      /    |     \
  Binary  Octal  Hex
    |       |     |
   Octal   Hex   Octal
    \       |    /
         Binary
```

## 🧪 Binary ⇄ Decimal

### Binary to Decimal

1. `1101₂ = 13₁₀`
2. `10101.11₂ = 21.75₁₀`
3. `100000.101₂ = 32.625₁₀`

### Decimal to Binary

4. `23₁₀ = 10111₂`
5. `45.625₁₀ = 101101.101₂`
6. `0.8125₁₀ = 0.1101₂`

---

## 🧪 Decimal ⇄ Octal

### Decimal to Octal

7. `63₁₀ = 77₈`
8. `100.375₁₀ = 144.3₈`
9. `15.5₁₀ = 17.4₈`

### Octal to Decimal

10. `127₈ = 87₁₀`
11. `3.4₈ = 3.5₁₀`
12. `75.23₈ = 61.296875₁₀`

---

## 🧪 Decimal ⇄ Hexadecimal

### Decimal to Hex

13. `254₁₀ = FE₁₆`
14. `26.5625₁₀ = 1A.9₁₆`
15. `1023.875₁₀ = 3FF.E₁₆`

### Hex to Decimal

16. `1A₁₆ = 26₁₀`
17. `3F.8₁₆ = 63.5₁₀`
18. `C9.4F₁₆ = 201.30859375₁₀`

---

## 🧪 Binary ⇄ Octal

### Binary to Octal

19. `110101₂ = 65₈`
20. `100111.011₂ = 47.3₈`

### Octal to Binary

21. `745₈ = 111100101₂`
22. `21.3₈ = 10001.011₂`

---

## 🧪 Binary ⇄ Hex

### Binary to Hex

23. `11011110₂ = DE₁₆`
24. `1010.1111₂ = A.F₁₆`

### Hex to Binary

25. `3F₁₆ = 00111111₂`
26. `A9.B₁₆ = 10101001.1011₂`

---

## 🧪 BCD (8421)

### Decimal to BCD

27. `27₁₀ = 0010 0111`
28. `304₁₀ = 0011 0000 0100`

### BCD to Decimal

29. `0010 1001 = 29₁₀`
30. `0100 0110 0111 = 467₁₀`


