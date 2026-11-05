এবার **EU-এর Registers — বইয়ের পৃষ্ঠা ১৫।** Flags পরের ধাপে পড়ব।

**Register কী?**

Register হলো **CPU-এর ভেতরের ছোট ও দ্রুত storage**, যেখানে কাজের সময় data বা address সাময়িকভাবে রাখা হয়। যেমন, দুটি সংখ্যা যোগ করার আগে সেগুলো register-এ রাখা যায়।

**Exam definition:**  
“A register is a small, high-speed storage location inside the CPU used to temporarily hold data, addresses, or intermediate results.”

**১. General-purpose registers: AX, BX, CX, DX**

এগুলো প্রতিটি **16-bit**। প্রতিটিকে আবার দুইটি **8-bit অংশ** হিসেবে ব্যবহার করা যায়:

| 16-bit register | Higher 8 bits | Lower 8 bits |
|---|---|---|
| **AX** | AH | AL |
| **BX** | BH | BL |
| **CX** | CH | CL |
| **DX** | DH | DL |

**H = High, L = Low।** এগুলো একই register-এর অংশ; আলাদা অতিরিক্ত storage নয়।

ধরো:

**AX = 1234H → AH = 12H, AL = 34H**

কারণ একটি hexadecimal digit বোঝায় **4 bits**। তাই চার digit-এর `1234H` হলো 16-bit এবং দুই digit-এর `12H` হলো 8-bit।

এবার **AL বদলে 56H** করলে:

**AX = 1256H** — AH আগের মতোই 12H থাকে।

**এই register-গুলোর বিশেষ ব্যবহার**

সবগুলো data রাখলেও কিছু instruction-এ এদের নির্দিষ্ট ভূমিকা আছে:

| Register | Name | Common special use |
|---|---|---|
| **AX** | Accumulator | Arithmetic operations and I/O data transfers |
| **BX** | Base register | Holding a base address for memory access |
| **CX** | Count register | Loop counting and shift/rotate counts |
| **DX** | Data register | Multiplication/division and I/O port addressing |

এখন নাম ও মূল কাজ মনে রাখো; instructions পড়ার সময় ব্যবহার দেখব।

**২. Pointer ও Index Registers**

EU-তে আরও চারটি **16-bit register** আছে:

| Register | Full name | Main role |
|---|---|---|
| **SP** | Stack Pointer | Holds the offset of the top of the stack |
| **BP** | Base Pointer | Helps access data in the stack |
| **SI** | Source Index | Holds the source offset, especially in string operations |
| **DI** | Destination Index | Holds the destination offset, especially in string operations |

**Stack** আপাতত এমন storage ভাবো যেখানে সর্বশেষ রাখা item আগে বের হয়—যেমন প্লেটের স্তূপ। **Offset** মানে একটি segment-এর শুরুর তুলনায় অবস্থান; সামনে বিস্তারিত পড়ব।

খেয়াল রাখবে: **SP, BP, SI, DI-কে AX-এর মতো দুইটি আলাদা 8-bit অংশ হিসেবে access করা যায় না।**

**Exam answer: Registers in the EU**

“The EU contains four 16-bit general-purpose registers: AX, BX, CX, and DX. Each can also be accessed as two 8-bit registers. It also contains two 16-bit pointer registers, SP and BP, and two 16-bit index registers, SI and DI.”

**Quick check — শুধু ছোট উত্তর:**

1. If **AX = 7A25H**, what are **AH** and **AL**?
2. If **AL changes to 40H**, what is the new value of **AX**?
3. Which register is commonly used as a **loop counter**?
4. Can **SI** be accessed as two separate 8-bit registers in the 8086?