এবার **Memory — §2.2.3, বইয়ের পৃষ্ঠা ১২–১৩।**  
:chatgpt-content-reference{index="0"}

**Memory-তে কী থাকে?**

CPU যে **instructions** পালন করে এবং যে **data** নিয়ে কাজ করে—দুটিই memory-তে binary আকারে থাকে।

Memory-কে অনেকগুলো নম্বর দেওয়া ঘর ভাবো:

| Address — ঘরের নম্বর | Content — ঘরে রাখা তথ্য |
|---|---|
| 1000H | 25H |
| 1001H | 40H |
| 1002H | 12H |

এখানে **1000H হলো address**, আর **25H হলো ওই address-এর content**। দুটো এক জিনিস নয়।

**RAM ও ROM**

| Feature | RAM | ROM |
|---|---|---|
| Full form | Random Access Memory | Read Only Memory |
| Main use | Stores programs and data currently in use | Usually stores startup programs or firmware |
| Normal operation | Read and write | Primarily read |
| Power removed | Contents are lost in ordinary RAM | Contents are retained |
| Property | Volatile | Non-volatile |

সহজভাবে: কাজ করার সময় বদলাতে থাকা তথ্য **RAM**-এ থাকে। চালু হওয়ার প্রাথমিক নির্দেশ সাধারণত **ROM**-এ থাকে।

Hard disk-এর মতো **secondary storage** অনেক program ও data দীর্ঘসময় সংরক্ষণ করে।

**Exam answer:**

“RAM is volatile read/write memory used to store programs and data currently in use. ROM is non-volatile memory that usually stores startup programs or firmware.”

**CPU memory-এর সঙ্গে তিন ধরনের কাজ করে**

| Operation | কী হচ্ছে? | Transfer direction |
|---|---|---|
| **Opcode fetch** | চালানোর জন্য instruction-এর operation code আনে | Memory → CPU |
| **Memory read** | কাজ করার জন্য data আনে | Memory → CPU |
| **Memory write** | Memory-তে data রাখে | CPU → Memory |

**Opcode** হলো instruction-এর সেই code, যা কোন operation করতে হবে তা নির্দেশ করে। তাই opcode fetch আর data read-এর direction একই হলেও **কেন পড়ছে**, সেটি আলাদা।

ধরো, CPU-কে **memory-তে রাখা ৫ ও ৩ যোগ করে ফলাফল memory-তে রাখতে হবে।** এই কাজেই তিনটি operation দেখা যাবে:

| Operation | উদাহরণ | Direction |
|---|---|---|
| **Opcode fetch** | CPU memory থেকে **ADD operation-এর code** আনে—কী কাজ করতে হবে তা জানার জন্য। | Memory → CPU |
| **Memory read** | যোগ করার জন্য memory থেকে **৫ ও ৩ data** আনে। | Memory → CPU |
| **Memory write** | যোগফল **৮ memory-তে রাখে**। | CPU → Memory |

এখানে **ADD হলো instruction-এর নাম**; memory-তে তার binary code থাকে।

মনে রাখো: **কী করতে হবে তা আনা → Opcode fetch; যে data নিয়ে কাজ করবে তা আনা → Memory read; ফলাফল রাখা → Memory write।**

**Exam examples:**

- **Opcode fetch:** The CPU fetches the operation code of an ADD instruction from memory.
- **Memory read:** The CPU reads an operand from memory for addition.
- **Memory write:** The CPU stores the result of the addition in memory.

আগের bus-এর সঙ্গে মিলিয়ে দেখো:

- **Read:** CPU address দেয়, Read signal দেয়, memory থেকে data নেয়।
- **Write:** CPU address ও data দেয়, Write signal দিয়ে memory-তে রাখে।

**Active-low signal—একটি গুরুত্বপূর্ণ ধারণা**

বইয়ে memory read signal-এর নামের ওপর দাগ আছে। এর মানে signal-টি **active-low**: তার value **0 হলে কাজটি সক্রিয় হয়**।

এটা আগের ভুলটিরও উদাহরণ: **logic 0 মানেই inactive নয়।**

**Exam definition:**

“An active-low signal performs its specified function when its logic level is LOW (0).”

**Quick check — শুধু keywords বা ছোট উত্তর দাও:**

1. A memory location has address **2000H** and contains **35H**. Which value goes on the address bus?
2. Which memory normally loses its contents when power is removed: **RAM or ROM**?
3. The CPU reads an operation code to execute an instruction. What is this operation called?
4. An active-low read signal is **0**. Is it **active or inactive**?