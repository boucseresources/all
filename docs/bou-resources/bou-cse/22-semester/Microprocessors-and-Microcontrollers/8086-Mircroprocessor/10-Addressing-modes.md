# Addressing Modes

Addressing mode বলে দেয়, **instruction-এর প্রয়োজনীয় data কোথায় আছে বা কীভাবে পাওয়া যাবে।** আজ প্রথমটি পড়ি: **Immediate Addressing**।

**আগে MOV instruction বোঝো**

```asm
MOV destination, source
```

এটি **source থেকে destination-এ data copy করে**। Source-এর value মুছে যায় না।

```asm
MOV AX, 1234H
```

এখানে **AX = destination**, **1234H = source**। কাজ শেষে AX-এ 1234H থাকবে।

??? "Immediate Addressing Mode"
    
    যখন data সরাসরি instruction-এর মধ্যেই দেওয়া থাকে, সেটি **Immediate Addressing**।

    ```asm
    MOV AL, 25H
    MOV CX, 1234H
    ```

    | Instruction | Meaning |
    |---|---|
    | `MOV AL, 25H` | Copies the 8-bit value 25H into AL |
    | `MOV CX, 1234H` | Copies the 16-bit value 1234H into CX |

    এখানে `25H` ও `1234H` **আসল data**, memory address নয়।

    **Exam definition:**

    “In immediate addressing mode, the operand data is specified directly as part of the instruction.”

    **Exam example:**

    ```asm
    MOV AX, 2000H
    ```

    “This instruction loads the immediate 16-bit value 2000H into AX.”

    **দুইটি গুরুত্বপূর্ণ নিয়ম**

    **১. Data destination-এ ধরতে হবে।**

    ```asm
    MOV AL, 1234H    ; Invalid: value exceeds 8 bits
    MOV AX, 1234H    ; Valid: AX is 16-bit
    ```

    AL মাত্র **8-bit**, তাই এর সর্বোচ্চ unsigned value **FFH**।

    **২. Segment register-এ immediate value সরাসরি MOV করা যায় না।**

    ```asm
    MOV DS, 2000H   ; Invalid
    ```

    একটি general-purpose register ব্যবহার করতে হবে:

    ```asm
    MOV AX, 2000H
    MOV DS, AX
    ```

    প্রথম instruction-টি **Immediate Addressing**। দ্বিতীয়টি **Register Addressing**—সেটি পরের ধাপে বুঝব।

    **মনে রাখো:** সরাসরি **value দেওয়া → Immediate**।

    **Quick check — ছোট উত্তর দাও:**

    1. Identify the addressing mode: `MOV BX, 4567H`
    2. In `MOV AX, 2000H`, is **2000H data or a memory address**?
    3. Is `MOV DS, 3000H` valid? If not, write the two instructions needed to load DS.

??? "Register Addressing Mode"

    এখানে প্রয়োজনীয় **data একটি register-এ থাকে**, আর instruction-এ সেই register-এর নাম দেওয়া হয়।

    ```asm
    MOV CX, AX
    ```

    এর অর্থ: **AX-এর value CX-এ copy করো।**

    ধরো, আগে AX = 1234H এবং CX = 0000H। Instruction চালানোর পরে:

    | Register | Before | After |
    |---|---|---|
    | AX — source | 1234H | **1234H** |
    | CX — destination | 0000H | **1234H** |

    **Source বদলায় না।**

    **Exam definition:**

    “In register addressing mode, the operand is held in a register specified by the instruction.”

    **Example:**

    ```asm
    MOV DL, BH
    ```

    “This instruction copies the 8-bit contents of BH into DL.”

    **Immediate বনাম Register**

    | Instruction | Source | Addressing mode |
    |---|---|---|
    | `MOV AX, 1234H` | Value written in the instruction | **Immediate** |
    | `MOV AX, BX` | Value held in BX | **Register** |

    **পরীক্ষায় error ধরার তিনটি নিয়ম**

    **১. Source ও destination-এর size মিলতে হবে।**

    ```asm
    MOV CH, BX      ; Invalid: CH is 8-bit, BX is 16-bit
    ```

    Valid alternatives:

    ```asm
    MOV CH, BL      ; 8-bit to 8-bit
    MOV CX, BX      ; 16-bit to 16-bit
    ```

    **২. এক segment register থেকে অন্য segment register-এ সরাসরি MOV করা যায় না।**

    ```asm
    MOV ES, DS      ; Invalid
    ```

    সঠিক পদ্ধতি:

    ```asm
    MOV AX, DS
    MOV ES, AX
    ```

    **৩. MOV দিয়ে CS-এ লেখা যায় না।**

    ```asm
    MOV CS, AX      ; Invalid
    ```

    তবে CS থেকে value নেওয়া যায়:

    ```asm
    MOV AX, CS      ; Valid
    ```

    **Exam rules:**

    - “Source and destination operands must have the same size.”
    - “MOV cannot transfer data directly between two segment registers.”
    - “CS cannot be the destination operand of MOV.”

    **Quick check — শুধু ছোট উত্তর:**

    1. `MOV DX, AX` — **Immediate or Register?**
    2. `MOV AL, BX` — **Valid or invalid?**
    3. `MOV DS, AX` — **Valid or invalid?**
    4. If **BX = 5678H**, what are **AX and BX** after `MOV AX, BX`?

---
??? "Direct Addressing Mode"

    আগে এই দুইটির পার্থক্য দেখো:

    ```asm
    MOV AL, 25H
    MOV AL, [25H]
    ```

    | Instruction | Meaning | Mode |
    |---|---|---|
    | `MOV AL, 25H` | AL-এ সরাসরি **25H value** রাখো | Immediate |
    | `MOV AL, [25H]` | **0025H offset-এর memory location থেকে data** এনে AL-এ রাখো | Direct |

    **Square brackets `[ ]` মানে এখানে memory access করতে হবে।**

    **Direct Addressing কী?**

    Memory operand-এর **offset instruction-এর মধ্যেই সরাসরি দেওয়া থাকে**।

    ```asm
    MOV AL, [1234H]
    ```

    এখানে **1234H হলো offset**, AL-এ রাখার data নয়। এই offset-কে **Effective Address (EA)** বলা হয়।

    **Exam definition:**

    “In direct addressing mode, the effective address of the memory operand is specified directly in the instruction.”

    **Physical address কীভাবে পাবে?**

    এই instruction-এ default segment হলো **DS**।

    ধরো:

    - **DS = 2000H**
    - **Memory operand = [1234H]**
    - ওই location-এর data = **5AH**

    তাহলে:

    **Physical address = 2000H × 10H + 1234H = 21234H**

    ```asm
    MOV AL, [1234H]
    ```

    চালানোর পরে **AL = 5AH**। AL-এ **1234H বা 21234H** আসবে না—আসবে ওই location-এর **content**।

    **Memory-তে লেখাও যায়**

    ```asm
    MOV [1234H], AL
    ```

    এবার উল্টো: **AL-এর data memory-তে copy হবে।**

    | Instruction | Transfer direction |
    |---|---|
    | `MOV AL, [1234H]` | Memory → AL |
    | `MOV [1234H], AL` | AL → Memory |

    **Segment override**

    DS-এর বদলে অন্য segment ব্যবহার করতে চাইলে সেটি লিখে দেওয়া যায়:

    ```asm
    MOV AL, ES:[1234H]
    ```

    এখন physical address হবে **ES × 10H + 1234H**। একে **segment override** বলে।

    **পরীক্ষায় মনে রাখবে:**

    “Effective address is the offset of the memory operand. The physical address is obtained by adding this offset to the shifted segment value.”

    **Quick check — ছোট উত্তর:**

    1. `MOV BL, [2500H]` — **Immediate or Direct?**
    2. If **DS = 1000H**, what physical address does `[2500H]` refer to?
    3. If that location contains **7AH**, what enters BL: **2500H or 7AH**?

---

??? "Register Indirect Addressing Mode"

    এবার **Register Indirect Addressing Mode**।

    Direct addressing-এ offset সরাসরি instruction-এ ছিল:

    ```asm
    MOV AL, [2500H]
    ```

    Register indirect-এ **offset একটি register-এ থাকে**:

    ```asm
    MOV AL, [BX]
    ```

    অর্থ: **BX-এর value-কে offset ধরে সেই memory location থেকে data এনে AL-এ রাখো।**

    **উদাহরণ**

    ধরো:

    - **DS = 1000H**
    - **BX = 2500H**
    - **Memory location 12500H contains 7AH**

    তাহলে:

    **EA = BX = 2500H**  
    **Physical address = 10000H + 2500H = 12500H**

    ```asm
    MOV AL, [BX]
    ```

    চালানোর পরে **AL = 7AH**। BX আগের মতো **2500H** থাকবে।

    **Exam definition:**

    “In register indirect addressing mode, the effective address of the memory operand is held in a register specified by the instruction.”

    **Bracket-এর পার্থক্যটা সবচেয়ে গুরুত্বপূর্ণ**

    | Instruction | What is copied? | Mode |
    |---|---|---|
    | `MOV AX, BX` | Contents of BX | Register |
    | `MOV AX, [BX]` | Memory word at the offset held in BX | Register indirect |

    **কোন register দিয়ে memory address করা যায়?**

    8086-এ single-register memory addressing-এর জন্য **BX, BP, SI, DI** ব্যবহার করা যায়।

    ```asm
    MOV AL, [BX]
    MOV AL, [SI]
    MOV AL, [DI]
    MOV AL, [BP]
    ```

    **AX, CX, DX বা SP এভাবে ব্যবহার করা যায় না:**

    ```asm
    MOV AL, [AX]    ; Invalid in 8086
    MOV AL, [SP]    ; Invalid in 8086
    ```

    **Default segment মনে রাখো**

    | Address register | Default segment |
    |---|---|
    | BX, SI, DI | **DS** |
    | BP | **SS** |

    অর্থাৎ `MOV AL, [BP]`-এর physical address হবে **SS × 10H + BP**।

    তোমার বই displacement ছাড়া **BX/BP + SI/DI** combinations-কেও register indirect-এর মধ্যে রেখেছে। যেমন:

    ```asm
    MOV AX, [BX+SI]
    ```

    এখানে **EA = BX + SI**। অন্য বইয়ে এটিকে **based-indexed addressing** বলা হতে পারে; পরীক্ষায় তোমার বইয়ের classification অনুসরণ করব।

    **Quick check — ছোট উত্তর:**

    1. In `MOV AL, [BX]`, does AL receive **BX’s value or memory data**?
    2. Which default segment is used by `[BP]`: **DS or SS**?
    3. Is `MOV AX, [CX]` valid in the 8086?


??? "Register Indirect Addressing Mode"

    এবার **Register Indirect Addressing Mode**।

    Direct addressing-এ offset সরাসরি instruction-এ ছিল:

    ```asm
    MOV AL, [2500H]
    ```

    Register indirect-এ **offset একটি register-এ থাকে**:

    ```asm
    MOV AL, [BX]
    ```

    অর্থ: **BX-এর value-কে offset ধরে সেই memory location থেকে data এনে AL-এ রাখো।**

    **উদাহরণ**

    ধরো:

    - **DS = 1000H**
    - **BX = 2500H**
    - **Memory location 12500H contains 7AH**

    তাহলে:

    **EA = BX = 2500H**  
    **Physical address = 10000H + 2500H = 12500H**

    ```asm
    MOV AL, [BX]
    ```

    চালানোর পরে **AL = 7AH**। BX আগের মতো **2500H** থাকবে।

    **Exam definition:**

    “In register indirect addressing mode, the effective address of the memory operand is held in a register specified by the instruction.”

    **Bracket-এর পার্থক্যটা সবচেয়ে গুরুত্বপূর্ণ**

    | Instruction | What is copied? | Mode |
    |---|---|---|
    | `MOV AX, BX` | Contents of BX | Register |
    | `MOV AX, [BX]` | Memory word at the offset held in BX | Register indirect |

    **কোন register দিয়ে memory address করা যায়?**

    8086-এ single-register memory addressing-এর জন্য **BX, BP, SI, DI** ব্যবহার করা যায়।

    ```asm
    MOV AL, [BX]
    MOV AL, [SI]
    MOV AL, [DI]
    MOV AL, [BP]
    ```

    **AX, CX, DX বা SP এভাবে ব্যবহার করা যায় না:**

    ```asm
    MOV AL, [AX]    ; Invalid in 8086
    MOV AL, [SP]    ; Invalid in 8086
    ```

    **Default segment মনে রাখো**

    | Address register | Default segment |
    |---|---|
    | BX, SI, DI | **DS** |
    | BP | **SS** |

    অর্থাৎ `MOV AL, [BP]`-এর physical address হবে **SS × 10H + BP**।

    তোমার বই displacement ছাড়া **BX/BP + SI/DI** combinations-কেও register indirect-এর মধ্যে রেখেছে। যেমন:

    ```asm
    MOV AX, [BX+SI]
    ```

    এখানে **EA = BX + SI**। অন্য বইয়ে এটিকে **based-indexed addressing** বলা হতে পারে; পরীক্ষায় তোমার বইয়ের classification অনুসরণ করব।

    **Quick check — ছোট উত্তর:**

    1. In `MOV AL, [BX]`, does AL receive **BX’s value or memory data**?
    2. Which default segment is used by `[BP]`: **DS or SS**?
    3. Is `MOV AX, [CX]` valid in the 8086?

??? "Based Addressing Mode"

    ধরো, **Chapter 3 শুরু হয়েছে বইয়ের ১০০ নম্বর পৃষ্ঠায়।**

    Chapter-এর শুরু থেকে **২০ পৃষ্ঠা সামনে** একটা bookmark আছে। তোমাকে বললাম:

    **“Bookmark থেকে আরও ৫ পৃষ্ঠা সামনে যাও, সেখানে যা লেখা আছে নিয়ে আসো।”**

    তাহলে তুমি যাবে **১০০ + ২০ + ৫ = ১২৫ নম্বর পৃষ্ঠায়**। সেখানে লেখা আছে **“Hello”**।

    এখন মিলাও:

    | বইয়ের উদাহরণ | Memory-তে নাম |
    |---|---|
    | Chapter-এর শুরুর পৃষ্ঠা → **১০০** | **Segment-এর starting physical address** |
    | Chapter-এর শুরু থেকে bookmark-এর দূরত্ব → **২০** | **Base register-এর value: BX বা BP** |
    | Bookmark থেকে আরও সামনে → **৫** | **Displacement** |
    | Chapter-এর শুরু থেকে মোট দূরত্ব → **২৫** | **EA / Offset** |
    | যে পৃষ্ঠায় পৌঁছালে → **১২৫** | **Physical Address** |
    | সেই পৃষ্ঠায় লেখা → **Hello** | **Data / Content** |

    **EA = Base register + Displacement**  
    **২০ + ৫ = ২৫**

    **Physical Address = Segment starting address + EA**  
    **১০০ + ২৫ = ১২৫**

    এখন instruction:

    ```asm
    MOV AL, [BX + 5]
    ```

    এখানে **BX = ২০** ধরে ভাবো:

    **“বর্তমান chapter-এর শুরু থেকে BX যত দূরে যেতে বলছে, তার আরও ৫ পৃষ্ঠা সামনে যাও। সেখানে যা লেখা আছে, AL-এ copy করো।”**

    তাই AL-এ **২০, ৫, ২৫ বা ১২৫ ঢুকবে না**—ঢুকবে সেখানে থাকা **data**।

    *“Hello” শুধু বোঝানোর উদাহরণ; বাস্তবে AL-এ এক byte data ধরে। আর 8086-এ segment-এর starting physical address পেতে segment register-এর value-কে 16 দিয়ে গুণ করতে হয়।*

    **Exam definition:**

    “In based addressing mode, the effective address is obtained by adding a displacement to the contents of BX or BP.”