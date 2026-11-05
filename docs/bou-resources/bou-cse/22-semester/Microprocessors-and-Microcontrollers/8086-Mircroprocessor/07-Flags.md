এবার **8086 Flag Register**—এটি EU-এর অংশ।

**Flag কী?**  
কোনো operation-এর পরে ফলাফল **শূন্য হয়েছে কি না, carry হয়েছে কি না**—এ ধরনের তথ্য একটি bit দিয়ে জানানো হয়। এই bit-কে flag বলে।

8086-এর **FLAGS register 16-bit**, তবে **৯টি flag ব্যবহৃত হয়**:

- **৬টি Status/Conditional flags:** CF, PF, AF, ZF, SF, OF
- **৩টি Control flags:** TF, IF, DF

আগে **Status flags** বুঝি; Control flags পরের ধাপে।

**১. ZF — Zero Flag**

ফলাফল **শূন্য হলে ZF = 1**, অন্যথায় 0।

উদাহরণ: `5 − 5 = 0` → **ZF = 1**

**Exam:** “ZF is set when the result of an operation is zero.”

**২. SF — Sign Flag**

SF ফলাফলের **most significant bit (MSB)** কপি করে।

8-bit ফলাফলে bit 7 হলো MSB। Signed number হিসেবে ব্যাখ্যা করলে MSB = 1 মানে negative।

উদাহরণ: `10000000₂` → **SF = 1**

**Exam:** “SF copies the most significant bit of the result and indicates its sign when interpreted as a signed number.”

**৩. CF — Carry Flag**

যোগে সর্বোচ্চ bit-এর বাইরে **carry** গেলে CF = 1। বিয়োগে **borrow** প্রয়োজন হলেও CF = 1।

8-bit উদাহরণ:

`FFH + 01H = 100H`

কিন্তু 8-bit জায়গায় শুধু **00H** থাকে; বাইরের carry বোঝায় **CF = 1**।

**Exam:** “CF is set when an addition produces a carry out of the most significant bit or a subtraction requires a borrow.”

**৪. OF — Overflow Flag**

**Signed arithmetic**-এর প্রকৃত ফল নির্দিষ্ট bit-এর signed range-এর বাইরে গেলে OF = 1।

8-bit signed range: **−128 to +127**।

উদাহরণ: `127 + 1`-এর প্রকৃত ফল +128, যা এই range-এ ধরে না। Stored result হয় `80H`, signed হিসেবে −128। তাই **OF = 1**।

**CF বনাম OF—গুরুত্বপূর্ণ পার্থক্য:**

| 8-bit addition | Stored result | CF | OF |
|---|---|---|---|
| `FFH + 01H` | `00H` | 1 | 0 |
| `7FH + 01H` | `80H` | 0 | 1 |

প্রথমটিকে signed হিসেবে দেখলে **−1 + 1 = 0**, তাই signed overflow নেই।

**Exam:** “OF is set when the signed result is outside the representable range.”

**৫. PF — Parity Flag**

ফলাফলের **lowest 8 bits-এ** 1-এর সংখ্যা **জোড় হলে PF = 1**, বিজোড় হলে 0।

- `00000011₂` → দুইটি 1 → **PF = 1**
- `00000111₂` → তিনটি 1 → **PF = 0**
- `00000000₂` → শূন্যটি 1; শূন্যও জোড় → **PF = 1**

**Exam:** “PF is set when the least significant byte of the result contains an even number of 1 bits.”

**৬. AF — Auxiliary Carry Flag**

যোগে **bit 3 থেকে bit 4-এ carry** গেলে AF = 1। বিয়োগে এই boundary-তে borrow হলেও set হয়। এটি BCD arithmetic-এ কাজে লাগে।

উদাহরণ: `0FH + 01H = 10H` → **AF = 1**

**Exam:** “AF is set when a carry or borrow occurs between bits 3 and 4.”

**Quick check — শুধু flag value দাও। Assume 8-bit operations:**

1. `5 − 5` → **ZF = ?**
2. `FFH + 01H` → **CF = ?**
3. `7FH + 01H` → **OF = ?**
4. Result = `00000111₂` → **PF = ?**


এবার বাকি **৩টি Control Flags: TF, IF ও DF।** এগুলো processor-এর কিছু আচরণ নিয়ন্ত্রণ করে।

**১. TF — Trap Flag**

Program debug করার সময় **একটি instruction করে execution পর্যবেক্ষণ** করতে ব্যবহৃত হয়।

- **TF = 1:** Single-step mode চালু; প্রতিটি instruction-এর পরে single-step interrupt হয়।
- **TF = 0:** Single-step mode বন্ধ।

**Exam:**  
“The Trap Flag enables single-step execution for debugging. When TF is set, a single-step interrupt is generated after each instruction.”

**২. IF — Interrupt Enable Flag**

Interrupt হলো CPU-কে কোনো ঘটনার জন্য attention দেওয়ার request। IF দিয়ে **INTR pin-এর maskable hardware interrupt** গ্রহণ নিয়ন্ত্রণ করা হয়।

| IF | Meaning |
|---|---|
| **1** | Maskable hardware interrupts enabled |
| **0** | Maskable hardware interrupts disabled |

**গুরুত্বপূর্ণ:** IF = 0 মানে **সব interrupt বন্ধ নয়**। **NMI — Non-Maskable Interrupt** IF দিয়ে বন্ধ করা যায় না।

**Exam:**  
“The Interrupt Enable Flag controls maskable hardware interrupts. IF = 1 enables them, while IF = 0 disables them. It does not affect NMI.”

**৩. DF — Direction Flag**

String instructions অনেকগুলো byte বা word-এর ওপর ধারাবাহিকভাবে কাজ করে। DF নির্ধারণ করে ব্যবহৃত **SI ও/বা DI সামনে যাবে, নাকি পেছনে যাবে**।

| DF | Direction | Index update |
|---|---|---|
| **0** | Toward higher addresses | Increment |
| **1** | Toward lower addresses | Decrement |

**Byte operation:** index বদলায় **১** করে।  
**Word operation:** index বদলায় **২** করে।

উদাহরণ: SI = 1000H হলে একটি byte string operation-এর পরে:

- **DF = 0 → SI = 1001H**
- **DF = 1 → SI = 0FFFH**

DF সব instruction-এ SI/DI বদলায় না—এটি প্রযোজ্য **string operations**-এ।

**Exam:**  
“The Direction Flag controls the direction of string operations. When DF = 0, the applicable index registers are incremented; when DF = 1, they are decremented. The change is 1 for byte operations and 2 for word operations.”

মনে রাখো: **TF → single-step, IF → interrupts, DF → direction।**

**Quick check — ছোট উত্তর দাও:**

1. Which flag enables single-step debugging?
2. Does **IF = 0** disable **NMI**?
3. If **DF = 0** and **DI = 2000H**, what is DI after a **word string operation that updates DI**?




















??? "Hex to Decimal and Binary"

    In the binary system, each digit position represents a power of 2, starting from the right side (position 0) and moving left.
    To convert the binary number 1111 1111 to the decimal value 255, you simply add up the value of each position where there is a 1:

    Binary Digit	Position	Calculation	Value
    1 (Far left)	7	2⁷ (2 × 2 × 2 × 2 × 2 × 2 × 2)	128
    1	6	2⁶	64
    1	5	2⁵	32
    1	4	2⁴	16
    1	3	2³	8
    1	2	2²	4
    1	1	2¹	2
    1 (Far right)	0	2⁰ (Any number to the power of 0 is 1)	1


    The Final Sum:

    \(128+64+32+16+8+4+2+1=\mathbf{255}\)
    An easy shortcut to remember for an 8-bit binary number is that the next position over (the 9th digit) would equal 256. Because all eight bits before it are completely filled with 1s, their total sum will always be exactly one less than the next power of two (256 - 1 = 255).
    Would you like to see how to convert a different decimal number into binary, or explore how negative numbers are handled in binary?
