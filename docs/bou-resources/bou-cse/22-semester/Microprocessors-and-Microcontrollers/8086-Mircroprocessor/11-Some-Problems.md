চলো, **পৃষ্ঠা ২১–২২-এর Examples 2.6–2.9** করি। **Example 2.7-এর printed solution-এ ভুল আছে**—সেটাও ঠিক করে দেখাচ্ছি।  
:chatgpt-content-reference{index="0"}

**Example 2.6 — Find the error**

```asm
MOV [DI], [BX]
```

দুই পাশে bracket → দুই পাশই **memory**। সাধারণ `MOV` দিয়ে সরাসরি memory থেকে memory-তে copy করা যায় না।

একটি register-কে মাঝখানে ব্যবহার করো:

```asm
MOV AX, [BX]     ; Read the source word into AX
MOV [DI], AX     ; Copy AX into the destination
```

বইয়ের উপমায়: **এক পৃষ্ঠা থেকে লেখা হাতে নাও → অন্য পৃষ্ঠায় লেখো।** AX হলো সাময়িকভাবে রাখার জায়গা।

**Exam answer:**  
“The instruction is invalid because MOV does not support two memory operands. A register must be used as an intermediate.”

---

**Example 2.7 — Copy the fourth and sixth words**

**Question:** BX points to the first element of an array of **words**. Copy the fourth element into CX and the sixth into DX without changing BX.

এখানে **word = ২ byte**—এটাই আসল ব্যাপার।

ধরো, বইয়ের একেকটি item **২ পৃষ্ঠা জায়গা নেয়**। **BX প্রথম item-এর শুরুর জায়গা ধরে রেখেছে।**

তাহলে:

| Element | BX থেকে কত byte দূরে শুরু? |
|---|---|
| ১ম | ০ |
| ২য় | ২ |
| ৩য় | ৪ |
| **৪র্থ** | **৬** |
| ৫ম | ৮ |
| **৬ষ্ঠ** | **১০** |

**৪র্থ element পেতে প্রথমটি থেকে ৩টি word সামনে যেতে হবে:**  
৩ × ২ = **৬ byte**

**৬ষ্ঠ element পেতে ৫টি word সামনে যেতে হবে:**  
৫ × ২ = **১০ byte**

তাই উত্তর:

```asm
MOV CX, [BX+6]     ; ৪র্থ word → CX
MOV DX, [BX+10]    ; ৬ষ্ঠ word → DX
```

**`[BX+6]` মানে:** BX-এ থাকা ঠিকানার সঙ্গে ৬ যোগ করে, **সেই জায়গার word নিয়ে আসো**। এতে **BX-এর নিজের value বদলায় না**।

মনে রাখো: **n-তম word-এর দূরত্ব = (n − 1) × ২ byte।**
বইয়ে 3[BX] ও 5[BX] দেওয়া আছে। Word array-এর জন্য এগুলো সঠিক নয়, কারণ 8086-এর memory address byte অনুযায়ী বাড়ে।
---

**Example 2.8 — Copy elements 5–7 into positions 10–12**

কাজটি হলো:

| Source element | Destination element |
|---|---|
| 5th | 10th |
| 6th | 11th |
| 7th | 12th |

বইয়ের solution **byte elements** ধরে করেছে এবং প্রথম element-এর offset **0002H** ধরেছে।

প্রথম element থেকে:

- 5th element-এর দূরত্ব = **4 bytes**
- 10th element-এর দূরত্ব = **9 bytes**

```asm
MOV BX, 0002H        ; Starting offset of the array
MOV SI, 0004H        ; Relative offset of the fifth element
MOV DI, 0009H        ; Relative offset of the tenth element

MOV AL, [BX + SI]       ; Read element 5
MOV [BX + DI], AL       ; Write element 10

MOV AL, [BX + SI + 1]   ; Read element 6
MOV [BX + DI + 1], AL   ; Write element 11

MOV AL, [BX + SI + 2]   ; Read element 7
MOV [BX + DI + 2], AL   ; Write element 12
```

**বইয়ের উপমায়:** BX হলো array-এর শুরুর bookmark। SI বলে source কত সামনে, DI বলে destination কত সামনে। **AL দিয়ে একবারে একটি byte নিয়ে copy করছি।**

প্রথম জোড়ার calculation:

**Source offset = 2 + 4 = 6**  
**Destination offset = 2 + 9 = 11**

এখানে `[BX+DI]` সাধারণ `MOV`-এর operand, তাই default segment **DS**, ES নয়।

---

**Example 2.9 — Distinguish the IN instructions**

`IN` মানে **I/O port থেকে CPU-তে data নেওয়া**।

দুইটি বিষয় আলাদা করে দেখো:

- **AL না AX?** → কত bit **data** আসবে।
- **04H না DX?** → **port address** কোথা থেকে পাওয়া যাবে।

**Exam answer:**

| Instruction | Data transferred | Port addressing |
|---|---|---|
| `IN AL, 04H` | Reads **8-bit data** into AL | Direct: port address 04H is encoded in the instruction |
| `IN AL, DX` | Reads **8-bit data** into AL | Indirect: the **16-bit port address** is held in DX |
| `IN AX, 04H` | Reads **16-bit data** into AX | Direct: port address 04H is encoded in the instruction |
| `IN AX, DX` | Reads **16-bit data** into AX | Indirect: the **16-bit port address** is held in DX |

**মনে রাখো: DX এখানে address দেয়, data নয়। AL/AX data গ্রহণ করে।**