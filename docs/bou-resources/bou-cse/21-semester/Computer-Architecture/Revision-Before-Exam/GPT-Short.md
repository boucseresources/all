
# 1. IEEE 754 Representation

> **Show the IEEE 754 binary representation 0️⃣1️⃣ of the number −0.625₁₀ in single 🥇 and double precision. 🥈**

## উত্তর

প্রথমে সংখ্যাটিকে binary-তে রূপান্তর করি:

```text
0.625₁₀ = 0.101₂
```

Normalize করলে:

```text
-0.101₂ = -1.01 × 2⁻¹
```

### Single Precision

Single precision-এ:

* Sign bit = `1`
* Exponent bias = `127`
* Actual exponent = `−1`

```text
Stored exponent = −1 + 127
                = 126
                = 01111110₂
```

Fraction বা mantissa:

```text
01000000000000000000000
```

সুতরাং:

```text
1 | 01111110 | 01000000000000000000000
```

Hexadecimal:

```text
BF200000
```

### Double Precision

Double precision bias:

```text
1023
```

```text
Stored exponent = −1 + 1023
                = 1022
                = 01111111110₂
```

সুতরাং:

```text
1 | 01111111110 | 0100000000000000000000000000000000000000000000000000
```

Hexadecimal:

```text
BFE4000000000000
```

### দ্রুত মনে রাখার সংক্ষিপ্তসার

```text
−0.625 = −0.101₂ = −1.01 × 2⁻¹

Sign = 1
Single bias = 127 → exponent = 126
Double bias = 1023 → exponent = 1022
```

মনে রাখার ট্রিক:

> **Negative হলে sign 1, exponent-এর সঙ্গে bias যোগ, point-এর পরের অংশই mantissa।**

---

# 2. Four-bit Binary Multiplier

> **Design a 4-bit binary multiplier ✖️💻 with detailed implementation. 🛠️📝**

## উত্তর

দুটি 4-bit unsigned সংখ্যা ধরি:

```text
Multiplicand = A₃A₂A₁A₀
Multiplier   = B₃B₂B₁B₀
```

দুটি 4-bit সংখ্যার গুণফল সর্বোচ্চ 8-bit হবে:

```text
Product = P₇P₆P₅P₄P₃P₂P₁P₀
```

প্রতিটি partial product AND gate ব্যবহার করে তৈরি হয়:

```text
PPᵢⱼ = Aᵢ AND Bⱼ
```

মোট AND gate প্রয়োজন:

```text
4 × 4 = 16টি
```

গুণের কাঠামো:

```text
              A₃ A₂ A₁ A₀
×             B₃ B₂ B₁ B₀
--------------------------------
              A × B₀
           A × B₁  0
        A × B₂  0  0
+    A × B₃  0  0  0
--------------------------------
           P₇ ... P₀
```

গাণিতিকভাবে:

```text
Product = (A × B₀)
        + (A × B₁) << 1
        + (A × B₂) << 2
        + (A × B₃) << 3
```

Implementation-এ প্রয়োজন:

* 16টি AND gate
* Half Adder
* Full Adder
* Partial-product adder network
* 8-bit output

### দ্রুত মনে রাখার সংক্ষিপ্তসার

```text
4-bit × 4-bit = 8-bit result
4 × 4 = 16 partial products
প্রতিটি partial product = AND operation
সব partial product shift করে যোগ করা হয়
```

মনে রাখার লাইন:

> **AND দিয়ে partial product, Adder দিয়ে final product।**

---

# 3. Booth Multiplication

> **Briefly analyze the Booth multiplication algorithm 🧐 for the given input: 16 × (−2). ✖️🔢**

## উত্তর

6-bit representation ব্যবহার করি:

```text
M  = +16 = 010000
-M = -16 = 110000

Q  = -2  = 111110
A  = 000000
Q₋₁ = 0
n = 6
```

Booth rule:

```text
Q₀Q₋₁ = 01 → A = A + M
Q₀Q₋₁ = 10 → A = A − M
Q₀Q₋₁ = 00 বা 11 → কোনো operation নয়
```

প্রতিবার operation-এর পরে Arithmetic Right Shift হবে।

|  n | A      | Q      | Q₋₁ | কাজ            |
| -: | ------ | ------ | --: | -------------- |
|  6 | 000000 | 111110 |   0 | `00`, শুধু ASR |
|  5 | 000000 | 011111 |   0 | `10`, `A=A−M`  |
|  4 | 111000 | 001111 |   1 | `11`, শুধু ASR |
|  3 | 111100 | 000111 |   1 | `11`, শুধু ASR |
|  2 | 111110 | 000011 |   1 | `11`, শুধু ASR |
|  1 | 111111 | 000001 |   1 | `11`, শুধু ASR |
|  0 | 111111 | 100000 |   1 | শেষ            |

শেষে `Q₋₁` বাদ দিলে:

```text
AQ = 111111100000₂
   = −32₁₀
```

অতএব:

```text
16 × (−2) = −32
```

### দ্রুত মনে রাখার সংক্ষিপ্তসার

```text
01 → A = A + M
10 → A = A − M
00/11 → কিছু নয়
প্রতিবার → Arithmetic Right Shift
শেষ result → AQ
```

এই অঙ্কের answer:

```text
16 × (−2) = −32
```

মনে রাখার ট্রিক:

> **01 Plus, 10 Minus, Same হলে Shift।**

---

# 4. Computer Performance

> **How is the performance 📈 of a computer measured? 📏 Explain with examples 💡 using clock rate, ⏱️ CPI, ⚙️ and MIPS. 🚀**

## উত্তর

Computer performance সাধারণত execution time দিয়ে পরিমাপ করা হয়।

```text
Performance ∝ 1 / Execution Time
```

অর্থাৎ execution time যত কম, performance তত বেশি।

### প্রধান সূত্র

```text
CPU Time = Instruction Count × CPI / Clock Rate
```

## Clock Rate

Processor প্রতি সেকেন্ডে কতটি clock cycle সম্পন্ন করে।

```text
3 GHz = 3 × 10⁹ cycles/second
```

## CPI

একটি instruction execute করতে গড়ে যতটি clock cycle লাগে।

```text
CPI যত কম, performance সাধারণত তত বেশি।
```

## Instructions Per Second

```text
IPS = Clock Rate / CPI
```

## MIPS

```text
MIPS = Clock Rate / (CPI × 10⁶)
```

উদাহরণ:

```text
Clock rate = 3 GHz
CPI = 1.5
```

```text
IPS = 3×10⁹ / 1.5
    = 2×10⁹ instructions/second
```

```text
MIPS = 2000
```

### দ্রুত মনে রাখার সংক্ষিপ্তসার

```text
কম execution time = বেশি performance

CPU Time = IC × CPI / Clock Rate
IPS = Clock Rate / CPI
MIPS = Clock Rate / (CPI × 10⁶)
```

মনে রাখার ট্রিক:

> **Clock rate বেশি ভালো, CPI কম ভালো, CPU time কম সবচেয়ে ভালো।**

---

# 5. Processor Performance Numerical

> **Consider three processors 🧠 P1, P2, and P3 executing the same instruction set: 📜**
> **P1: Clock rate = 3 GHz, ⏱️ CPI = 1.5 ⚙️ P2: Clock rate = 2.5 GHz, ⏱️ CPI = 1.0 ⚙️**
> **P3: Clock rate = 4.0 GHz, ⏱️ CPI = 2.5 ⚙️**
> **(i) Which processor 🧠 has the highest performance 🏆 in instructions per second? ⚡**
> **(ii) If each processor executes a program in 12 seconds, ⏱️ find the number of cycles 🔄 and number of instructions 📜 for each. 🔢**
> **(iii) We want to reduce the execution time by 25%, 📉 but this causes a 15% increase in CPI. 📈 What clock rate is needed? ⏱️🤔**

## (i) সর্বোচ্চ performance

```text
IPS = Clock Rate / CPI
```

| Processor |     হিসাব |         IPS |
| --------- | --------: | ----------: |
| P1        |   `3/1.5` | `2.0 × 10⁹` |
| P2        | `2.5/1.0` | `2.5 × 10⁹` |
| P3        |   `4/2.5` | `1.6 × 10⁹` |

অতএব:

```text
P2-এর performance সবচেয়ে বেশি।
```

## (ii) Cycles এবং Instructions

সূত্র:

```text
Cycles = Clock Rate × Execution Time
Instructions = Cycles / CPI
```

### P1

```text
Cycles = 3×10⁹ × 12
       = 36×10⁹

Instructions = 36×10⁹ / 1.5
             = 24×10⁹
```

### P2

```text
Cycles = 2.5×10⁹ × 12
       = 30×10⁹

Instructions = 30×10⁹ / 1
             = 30×10⁹
```

### P3

```text
Cycles = 4×10⁹ × 12
       = 48×10⁹

Instructions = 48×10⁹ / 2.5
             = 19.2×10⁹
```

| Processor |     Cycles | Instructions |
| --------- | ---------: | -----------: |
| P1        | 36 billion |   24 billion |
| P2        | 30 billion |   30 billion |
| P3        | 48 billion | 19.2 billion |

## (iii) নতুন clock rate

Execution time 25% কমলে:

```text
New Time = 0.75 × Old Time
```

CPI 15% বাড়লে:

```text
New CPI = 1.15 × Old CPI
```

তাই:

```text
New Clock Rate
= Old Clock Rate × 1.15/0.75
= Old Clock Rate × 1.5333
```

| Processor | নতুন clock rate |
| --------- | --------------: |
| P1        |      `4.60 GHz` |
| P2        |      `3.83 GHz` |
| P3        |      `6.13 GHz` |

### দ্রুত মনে রাখার সংক্ষিপ্তসার

```text
IPS = Clock/CPI → P2 highest

Cycles:
P1 = 36B
P2 = 30B
P3 = 48B

Instructions:
P1 = 24B
P2 = 30B
P3 = 19.2B

New Clock = Old Clock × 1.5333
```

সবচেয়ে গুরুত্বপূর্ণ answer:

> **Highest performance = P2**

---

# 6. Flynn’s Classification

> **Explain Flynn’s classification 🗂️ of parallel hardware 🖥️🖥️ (SISD, SIMD, MISD, MIMD) in detail 📝 with examples. 🌟**

## উত্তর

Flynn’s classification instruction stream এবং data stream-এর সংখ্যার ভিত্তিতে computer architecture-কে চার ভাগে ভাগ করে।

| ধরন  | Instruction | Data     | উদাহরণ                |
| ---- | ----------- | -------- | --------------------- |
| SISD | Single      | Single   | Single-core processor |
| SIMD | Single      | Multiple | GPU                   |
| MISD | Multiple    | Single   | Fault-tolerant system |
| MIMD | Multiple    | Multiple | Multicore processor   |

### SISD

একটি instruction একটি data stream-এর ওপর কাজ করে।

```text
Single Instruction → Single Data
```

উদাহরণ: সাধারণ single-core processor।

### SIMD

একটি instruction একই সঙ্গে অনেক data-এর ওপর কাজ করে।

```text
Single Instruction → Multiple Data
```

উদাহরণ: GPU একসঙ্গে অনেক pixel process করে।

### MISD

একই data-এর ওপর একাধিক instruction কাজ করে।

```text
Multiple Instructions → Single Data
```

উদাহরণ: Aircraft fault-tolerant control system।

### MIMD

একাধিক processor আলাদা instruction ও আলাদা data নিয়ে কাজ করে।

```text
Multiple Instructions → Multiple Data
```

উদাহরণ: Multicore processor, multiprocessor server।

### দ্রুত মনে রাখার সংক্ষিপ্তসার

```text
SISD = 1 instruction, 1 data
SIMD = 1 instruction, many data
MISD = many instructions, 1 data
MIMD = many instructions, many data
```

উদাহরণ:

```text
SISD → Single-core
SIMD → GPU
MISD → Fault-tolerant system
MIMD → Multicore
```

মনে রাখার ট্রিক:

> **প্রথম দুই অক্ষর Instruction, শেষ দুই অক্ষর Data বোঝায়।**

---

# 7. Cache Memory

> **What is cache memory? ⚡🧠 Define cache-hit, 🎯 cache-miss, ❌ and miss-penalty. ⏳ Explain with an example. 💡**

## উত্তর

Cache memory হলো CPU ও main memory-এর মাঝখানে থাকা ছোট কিন্তু দ্রুতগতির memory।

```text
CPU ↔ Cache ↔ Main Memory
```

### Cache Hit

প্রয়োজনীয় data cache-এ পাওয়া গেলে তাকে cache hit বলে।

### Cache Miss

প্রয়োজনীয় data cache-এ না পাওয়া গেলে তাকে cache miss বলে।

### Miss Penalty

Cache miss হওয়ার পর lower-level memory থেকে data আনতে যে অতিরিক্ত সময় লাগে, তাকে miss penalty বলে।

উদাহরণ:

```text
Total access = 100
Cache hit = 90
Cache miss = 10
```

```text
Hit rate = 90/100 = 90%
Miss rate = 10/100 = 10%
```

গুরুত্বপূর্ণ সূত্র:

```text
AMAT = Hit Time + Miss Rate × Miss Penalty
```

### দ্রুত মনে রাখার সংক্ষিপ্তসার

```text
Cache = CPU ও RAM-এর মাঝের fast memory
Hit = Cache-এ পাওয়া গেছে
Miss = Cache-এ পাওয়া যায়নি
Miss penalty = RAM থেকে আনতে extra time
```

Formula:

```text
AMAT = Hit Time + Miss Rate × Miss Penalty
```

মনে রাখার লাইন:

> **পেলে Hit, না পেলে Miss, আনতে যত extra time লাগে তা Penalty।**

---

# 8. Cache Write Policies

> **Explain the write-through ✍️➡️ and write-back ✍️🔙 cache handling policies. What are the advantages ➕ and disadvantages ➖ of each? 🤔**

## উত্তর

## Write-Through

CPU cache-এ data লিখলে একই সঙ্গে main memory-তেও লেখা হয়।

### সুবিধা

* Main memory সবসময় updated থাকে।
* Design সহজ।
* Data consistency ভালো।

### অসুবিধা

* Memory traffic বেশি।
* Write operation ধীর।
* Main memory-তে বারবার access করতে হয়।

## Write-Back

CPU প্রথমে শুধু cache-এ data লেখে। Cache block পরিবর্তিত হলে dirty bit `1` হয়। Block replace করার সময় main memory update হয়।

### সুবিধা

* Write operation দ্রুত।
* Memory traffic কম।
* একই block-এ বারবার write করলে main memory-তে একবারই লেখা হয়।

### অসুবিধা

* Design জটিল।
* Dirty bit প্রয়োজন।
* Cache ও main memory সাময়িকভাবে আলাদা হতে পারে।

| বিষয়          | Write-Through | Write-Back |
| ------------- | ------------- | ---------- |
| Memory update | সঙ্গে সঙ্গে   | পরে        |
| Speed         | তুলনামূলক ধীর | দ্রুত      |
| Traffic       | বেশি          | কম         |
| Complexity    | কম            | বেশি       |
| Dirty bit     | দরকার নেই     | দরকার      |

### দ্রুত মনে রাখার সংক্ষিপ্তসার

```text
Write-through:
Cache + Memory-তে একসঙ্গে write
সহজ, কিন্তু ধীর এবং traffic বেশি

Write-back:
প্রথমে শুধু Cache
পরে Memory update
দ্রুত, traffic কম, কিন্তু dirty bit লাগে
```

মনে রাখার ট্রিক:

> **Through = সঙ্গে সঙ্গে ভেতর দিয়ে যায়। Back = পরে memory-তে ফেরত যায়।**

---

# 9. MIPS Register Transfer Logic

> **Explain the Register Transfer Logic (RTL) 🔄🗄️ for the following MIPS instructions: addu, addi, lw, sw, and beq. 📜💻**

## উত্তর

### `addu rd, rs, rt`

```text
R[rd] ← R[rs] + R[rt]
PC ← PC + 4
```

দুটি register-এর মান যোগ করে destination register-এ রাখে।

### `addi rt, rs, immediate`

```text
R[rt] ← R[rs] + SignExt(immediate)
PC ← PC + 4
```

Register-এর মানের সঙ্গে immediate যোগ করে।

### `lw rt, offset(rs)`

```text
EA ← R[rs] + SignExt(offset)
R[rt] ← Memory[EA]
PC ← PC + 4
```

Memory থেকে data register-এ load করে।

### `sw rt, offset(rs)`

```text
EA ← R[rs] + SignExt(offset)
Memory[EA] ← R[rt]
PC ← PC + 4
```

Register-এর data memory-তে store করে।

### `beq rs, rt, label`

যদি:

```text
R[rs] = R[rt]
```

তাহলে:

```text
PC ← PC + 4 + (SignExt(offset) << 2)
```

নয়তো:

```text
PC ← PC + 4
```

### দ্রুত মনে রাখার সংক্ষিপ্তসার

```text
addu → Register + Register
addi → Register + Immediate
lw → Memory থেকে Register
sw → Register থেকে Memory
beq → Equal হলে branch
```

সব ক্ষেত্রে সাধারণত:

```text
PC = PC + 4
```

তবে `beq` true হলে branch target-এ যায়।

---

# 10. Memory–Processor Connection

> **Briefly describe the basic connection 🔌 of memory 🧠 to the processor. ⚙️**

## উত্তর

Processor এবং memory তিন ধরনের bus দ্বারা যুক্ত থাকে:

1. Address Bus
2. Data Bus
3. Control Bus

```text
             Address Bus
CPU --------------------------> Memory

              Data Bus
CPU <-------------------------> Memory

             Control Bus
CPU --------------------------> Memory
```

### Address Bus

কোন memory location access করা হবে তার address পাঠায়।

### Data Bus

CPU এবং memory-এর মধ্যে data আদান-প্রদান করে।

### Control Bus

Read, Write, Memory Enable ইত্যাদি control signal বহন করে।

### Memory Read

```text
CPU address পাঠায়
→ Read signal দেয়
→ Memory data ফেরত দেয়
```

### Memory Write

```text
CPU address ও data পাঠায়
→ Write signal দেয়
→ Memory data সংরক্ষণ করে
```

### দ্রুত মনে রাখার সংক্ষিপ্তসার

```text
Address Bus → কোথায়?
Data Bus → কী data?
Control Bus → Read না Write?
```

মনে রাখার ট্রিক:

> **Address বলে জায়গা, Data বহন করে তথ্য, Control বলে কাজ।**

---

# 11. Internal Organization of Bit Cells

> **Briefly explain the internal organization 🏢 of bit cells 0️⃣1️⃣ in a memory chip. 💾**

## উত্তর

Memory chip-এর bit cell-গুলো row এবং column আকারে matrix হিসেবে সাজানো থাকে।

```text
                Column Decoder
                      ↓
           ┌─────────────────┐
Row        │ 0  1  0  1  1   │
Decoder →  │ 1  0  1  0  0   │
           │ 0  0  1  1  0   │
           └─────────────────┘
```

প্রধান অংশ:

### Row Decoder

একটি নির্দিষ্ট word line নির্বাচন করে।

### Column Decoder

নির্দিষ্ট column বা bit নির্বাচন করে।

### Bit Line

Bit cell-এর data বহন করে।

### Sense Amplifier

Cell থেকে পাওয়া ক্ষুদ্র signal-কে `0` অথবা `1` হিসেবে নির্ধারণ করে।

### Write Driver

Cell-এ নতুন data লিখে।

SRAM cell সাধারণত 6 transistor দিয়ে তৈরি হয়।
DRAM cell সাধারণত 1 transistor এবং 1 capacitor দিয়ে তৈরি হয়।

### দ্রুত মনে রাখার সংক্ষিপ্তসার

```text
Bit cells → Row ও Column matrix

Row Decoder → Row নির্বাচন
Column Decoder → Column নির্বাচন
Bit Line → Data বহন
Sense Amplifier → 0/1 পড়ে
Write Driver → Data লিখে
```

মনে রাখার ট্রিক:

> **Decoder খুঁজে, Bit line বহন করে, Sense amplifier পড়ে, Write driver লেখে।**

---

# 12. Memory Module Design

> **Design a 2M×32 memory module 💾🧩 using 512K×8 static memory chips. 🖥️🔧**

## উত্তর

প্রয়োজনীয় module:

```text
2M × 32
```

প্রতিটি chip:

```text
512K × 8
```

## Width calculation

```text
Required width = 32 bits
Chip width = 8 bits
```

```text
32/8 = 4 chips
```

অতএব, একটি bank তৈরির জন্য 4টি chip parallel-এ প্রয়োজন।

## Depth calculation

```text
Required depth = 2M
Chip depth = 512K
```

```text
2M / 512K = 4 banks
```

## মোট chip

```text
4 chips per bank × 4 banks
= 16 chips
```

## Address lines

```text
2M = 2²¹
```

তাই module-এর address line:

```text
A₀–A₂₀ = মোট 21টি
```

প্রতিটি chip:

```text
512K = 2¹⁹
```

তাই:

```text
A₀–A₁₈ → সব chip-এর address input
A₁₉–A₂₀ → 2-to-4 decoder
```

Diagram:

```text
A19, A20
    │
2-to-4 Decoder
 │    │    │    │
B0   B1   B2   B3
```

প্রতিটি bank:

```text
4 × 512K×8 = 512K×32
```

চারটি bank:

```text
4 × 512K×32 = 2M×32
```

### Final Answer

```text
Total chips = 16
Number of banks = 4
Chips per bank = 4
Address lines = 21
Decoder = 2-to-4
```

### দ্রুত মনে রাখার সংক্ষিপ্তসার

```text
Width = 32/8 = 4 chips parallel
Depth = 2M/512K = 4 banks
Total = 4 × 4 = 16 chips

Address lines = 21
Decoder = 2-to-4
```

মনে রাখার ট্রিক:

> **Width ভাগ, Depth ভাগ, তারপর দুই ফল গুণ।**

---

# 13. Virtual Memory and Cache Mapping

> **What is virtual memory? ☁️🧠 Why is a mapping function 🗺️ needed in cache memory. ⚡**

## উত্তর

## Virtual Memory

Virtual memory এমন একটি memory-management technique যেখানে secondary storage-এর কিছু অংশ main memory-এর সম্প্রসারণ হিসেবে ব্যবহৃত হয়।

```text
Virtual Address
      ↓
Page Table / TLB
      ↓
Physical Address
```

Program-কে page এবং physical memory-কে frame-এ ভাগ করা হয়।

প্রয়োজনীয় page RAM-এ না থাকলে page fault ঘটে। তখন page-টি disk থেকে RAM-এ আনা হয়।

### সুবিধা

* RAM-এর চেয়ে বড় program চালানো যায়।
* প্রতিটি process আলাদা address space পায়।
* Memory protection পাওয়া যায়।
* RAM দক্ষভাবে ব্যবহার করা যায়।

## Cache Mapping Function

Main memory cache-এর তুলনায় অনেক বড়। তাই main memory-এর একটি block cache-এর কোন location-এ রাখা হবে, তা নির্ধারণ করার জন্য mapping function প্রয়োজন।

Mapping function-এর কাজ:

```text
Main Memory Block → নির্দিষ্ট Cache Line
```

Mapping তিন ধরনের:

1. Direct Mapping
2. Associative Mapping
3. Set-Associative Mapping

এক লাইনে:

> **Mapping function নির্ধারণ করে main memory-এর কোন block cache-এর কোথায় রাখা এবং খুঁজে পাওয়া হবে।**

### দ্রুত মনে রাখার সংক্ষিপ্তসার

```text
Virtual Memory:
Disk-এর অংশ RAM-এর মতো ব্যবহার
Page → Frame mapping
Page না থাকলে → Page fault

Cache Mapping:
Memory block cache-এর কোথায় যাবে তা নির্ধারণ করে
```

তিন ধরনের mapping:

```text
Direct
Associative
Set-Associative
```

মনে রাখার ট্রিক:

> **Virtual memory জায়গা বাড়ায়, cache mapping জায়গা ঠিক করে।**

---

# ৩০ সেকেন্ডের Final Revision

```text
IEEE:
Single bias 127, Double bias 1023

Multiplier:
16 AND gates, 8-bit result

Booth:
01 Add, 10 Subtract, 00/11 Shift

Performance:
CPU Time = IC × CPI / Clock
IPS = Clock/CPI

P1-P3:
P2 fastest

Flynn:
SISD, SIMD, MISD, MIMD

Cache:
Hit পাওয়া, Miss না পাওয়া
AMAT = Hit Time + Miss Rate × Penalty

Write:
Through এখনই, Back পরে

RTL:
lw Memory→Register
sw Register→Memory

Memory Bus:
Address, Data, Control

Memory Design:
4 wide × 4 banks = 16 chips

Virtual Memory:
Disk দিয়ে RAM বাড়ায়
```
