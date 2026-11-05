ঠিক আছে! আমরা MPMC (Microprocessor and Microcontroller) একদম বেসিক থেকে বাংলায় পড়ব। তুমি বইয়ের যে পৃষ্ঠা দেবে, আমি সেটার প্রতিটি গুরুত্বপূর্ণ বিষয় সহজ বাংলায় বুঝিয়ে দেব। শুধু মুখস্থ নয়, কোন অংশ কেন আছে, কীভাবে কাজ করে, আর পরীক্ষায় কীভাবে লিখতে হবে, সেটাও শিখব।

আজকের পৃষ্ঠায় আছে 8086 Microprocessor-এর Internal Architecture (Figure 2.3)।

## ১. 8086 Microprocessor-এর Internal Architecture

8086 হলো Intel-এর একটি 16-bit Microprocessor। অর্থাৎ এর ALU মূলত 16-bit ডেটা নিয়ে কাজ করতে পারে।

8086-এর ভেতরে দুটি প্রধান অংশ রয়েছে।

8086 Microprocessor

Internal Architecture

## BIU

Bus Interface Unit

Instruction আনা, Memory-এর সঙ্গে যোগাযোগ

## EU

Execution Unit

Instruction বুঝে কাজ সম্পন্ন করা

সহজ উদাহরণ: তুমি একটা রেস্টুরেন্টে গেলে।

- BIU = ওয়েটার: রান্নার জন্য প্রয়োজনীয় অর্ডার নিয়ে আসে।
- EU = শেফ: অর্ডার অনুযায়ী রান্না করে।

অর্থাৎ BIU Instruction এনে দেয়, আর EU সেই Instruction Execute করে।

## ২. BIU (Bus Interface Unit)

তোমার ছবির উপরের অংশটি BIU।

BIU-এর প্রধান কাজ হলো Memory থেকে Instruction Fetch করা, Physical Address তৈরি করা এবং Memory বা I/O-এর সঙ্গে ডেটা আদান-প্রদান করা।

ছবিতে BIU-এর গুরুত্বপূর্ণ অংশগুলো:

| Component                  | কাজ                                                        |
| -------------------------- | ---------------------------------------------------------- |
| CS (Code Segment)          | প্রোগ্রামের Instruction কোথায় আছে তা নির্ধারণে সাহায্য করে |
| DS (Data Segment)          | ডেটা অ্যাক্সেস করার জন্য ব্যবহৃত হয়                        |
| SS (Stack Segment)         | Stack-এর অবস্থান নির্ধারণে ব্যবহৃত হয়                      |
| ES (Extra Segment)         | অতিরিক্ত Data Segment হিসেবে কাজ করে                       |
| IP (Instruction Pointer)   | পরবর্তী Instruction-এর Offset ধরে রাখে                     |
| 6-byte Queue               | আগে থেকে Instruction Bytes এনে জমা রাখে                    |
| Address Generation Circuit | Segment ও Offset দিয়ে Physical Address তৈরি করে            |

### 6-byte Instruction Queue কেন গুরুত্বপূর্ণ?

ধরো, তুমি একটার পর একটা অঙ্ক করছ। তোমার বন্ধু পরের অঙ্কগুলো আগেই বই থেকে বের করে রাখছে।

তুমি একটি অঙ্ক শেষ করলেই পরের অঙ্কটি পেয়ে যাচ্ছ।

8086-এও BIU আগে থেকে Instruction Bytes এনে 6-byte Queue-তে রাখে। EU সেখান থেকে Instruction নিয়ে Execute করে।

এই পদ্ধতিকে বলে Instruction Prefetching।

এতে Instruction Fetch ও Execution কিছুটা Overlap করতে পারে, ফলে Processor-এর কাজ দ্রুত হতে পারে।

## ৩. EU (Execution Unit)

তোমার ছবির নিচের অংশটি EU। বইয়ের 2.3.1 অনুচ্ছেদেও EU নিয়ে আলোচনা করা হয়েছে।

EU-এর প্রধান কাজ হলো BIU থেকে পাওয়া Instruction Decode করা এবং Execute করা।

এখানে কয়েকটি গুরুত্বপূর্ণ অংশ রয়েছে।

### ALU (Arithmetic Logic Unit)

ALU হলো হিসাব করার অংশ।

এটি দুই ধরনের কাজ করে:

- Arithmetic: যোগ, বিয়োগ ইত্যাদি।
- Logical: AND, OR, XOR, NOT ইত্যাদি।

যেমন, `ADD AX, BX` Instruction Execute করলে ALU যোগের কাজ করে।

### General Purpose Registers

8086-এর চারটি প্রধান General Purpose Register আছে।

| Register | পূর্ণ নাম   | সাধারণ ব্যবহার                 |
| -------- | ----------- | ------------------------------ |
| AX       | Accumulator | Arithmetic ও অন্যান্য অপারেশন  |
| BX       | Base        | Addressing ও Data              |
| CX       | Count       | Loop ও Counting                |
| DX       | Data        | Multiplication, Division ও I/O |

এগুলো প্রত্যেকটি 16-bit Register।

আবার প্রতিটি Register-কে দুটি 8-bit অংশে ভাগ করা যায়।

![Microproceorr ](https://res.cloudinary.com/zopgecx6/image/upload/v1793307308/microprocessor_lbd09u.jpg)
### Pointer ও Index Registers

ছবিতে আরও চারটি Register আছে:

- SP (Stack Pointer): Stack-এর Top নির্দেশ করে।
- BP (Base Pointer): Stack-এর Data Access করতে কাজে লাগে।
- SI (Source Index): সাধারণত Source Data-এর Offset নির্দেশ করে।
- DI (Destination Index): সাধারণত Destination Data-এর Offset নির্দেশ করে।

### Flag Register

8086-এর Flag Register হলো 16-bit। এর মধ্যে 9টি ব্যবহৃত Flag আছে।

এগুলো দিয়ে Processor বুঝতে পারে কোনো Operation-এর ফলাফল কী হয়েছে অথবা কিছু Operation কীভাবে নিয়ন্ত্রণ করতে হবে।

যেমন:

`5 - 5 = 0`

এখানে ফলাফল শূন্য হওয়ায় Zero Flag (ZF) = 1 হবে।

## ৪. BIU ও EU একসঙ্গে কীভাবে কাজ করে?

ধরো, Memory-তে একটি Instruction আছে:

```
MOV AX, 0005H
ADD AX, 0003H
```

এখন ধাপে ধাপে কী হবে?

Step 1: BIU

Memory থেকে Instruction Fetch করে

Step 2: Instruction Queue

Instruction Bytes সাময়িকভাবে জমা থাকে

Step 3: EU

Instruction Decode ও Execute করে

Result: AX = 0008H

5 + 3 = 8

এখানে একটি গুরুত্বপূর্ণ বিষয় হলো, EU বর্তমান Instruction Execute করার সময় BIU পরবর্তী Instruction Fetch করতে পারে। এটিই 8086-এর Pipelining-এর প্রাথমিক ধারণা।

## ৫. পরীক্ষার জন্য গুরুত্বপূর্ণ পার্থক্য

| BIU                               | EU                                    |
| --------------------------------- | ------------------------------------- |
| Instruction Fetch করে             | Instruction Execute করে               |
| Physical Address তৈরি করে         | Arithmetic ও Logic Operation করে      |
| 6-byte Queue আছে                  | ALU আছে                               |
| Segment Registers ও IP আছে        | General Purpose Registers ও Flags আছে |
| Memory ও I/O-এর সঙ্গে যোগাযোগ করে | Instruction Decode করে                |

## ৬. মনে রাখার শর্ট ট্রিক

BIU = Fetch + Address + Queue

EU = Decode + Execute + ALU + Flags

আর 8086-এর চারটি General Purpose Register মনে রাখবে:

A-B-C-D → Accumulator, Base, Count, Data
