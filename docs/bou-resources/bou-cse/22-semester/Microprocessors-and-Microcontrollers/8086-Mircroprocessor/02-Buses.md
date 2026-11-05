এবার **Buses — §2.2.2, বইয়ের পৃষ্ঠা ১১।**

CPU, memory ও I/O devices-এর মধ্যে digital information আদানপ্রদানের জন্য একগুচ্ছ সংযোগলাইন থাকে। এই গুচ্ছকে **bus** বলে।

**Exam definition:**  
“A bus is a group of parallel lines used to carry digital information between devices in a computer system.”

তিনটি bus-এর কাজ মনে রাখো: **কোথায় → কী → কী করতে হবে।**

| Bus | কী বহন করে? | সহজ অর্থ | Direction |
|---|---|---|---|
| **Address bus** | Address | **কোথায়** পড়বে বা লিখবে? | CPU → Memory / I/O |
| **Data bus** | Data বা instruction | **কী** আদানপ্রদান হবে? | CPU ↔ Memory / I/O |
| **Control bus** | Control signals | **Read না Write**, কোন কাজ হবে? | Signal অনুযায়ী direction ভিন্ন |

**একটি উদাহরণে তিনটি bus**

CPU memory-এর **1000H address থেকে 25 সংখ্যাটি পড়বে**। এখানে `H` মানে hexadecimal; আপাতত 1000H-কে একটি memory location-এর নাম ভাবো।

1. **Address bus:** CPU জানায়, “1000H location চাই।”
2. **Control bus:** CPU **Read** signal দেয়।
3. **Data bus:** Memory থেকে **25** CPU-তে আসে।

একই location-এ CPU যদি **40 লিখতে চায়**, address bus-এ 1000H থাকবে, data bus-এ CPU থেকে 40 যাবে, আর control bus-এ **Write** signal থাকবে।

তাই **data bus bidirectional**—CPU data নিতে এবং দিতে পারে। এই সাধারণ ব্যবস্থায় **address bus unidirectional**—CPU address পাঠায়।

**Exam answer: Functions of the three buses**

- **Address bus:** Carries the address of the memory location or I/O device to be accessed. It is unidirectional.
- **Data bus:** Carries data and instructions between the CPU, memory, and I/O devices. It is bidirectional.
- **Control bus:** Carries signals that control and coordinate operations, such as read and write.

**একই data bus-এ একাধিক device থাকলে কী হয়?**

ধরো, দুইটি memory chip একই data bus-এ যুক্ত। একসঙ্গে দুটিই আলাদা data পাঠালে সংঘর্ষ হবে। একে **bus contention** বলে।

এটি এড়াতে যে device data পাঠাবে, শুধু সেটির output সক্রিয় থাকে। অন্যগুলোর output **high-impedance (Hi-Z)** অবস্থায় থাকে—যেন bus থেকে বিচ্ছিন্ন।

**Tri-state output-এর তিনটি অবস্থা:** **0, 1, Hi-Z।**  
খেয়াল রাখো: **Hi-Z মানে 0 নয়; কার্যত disconnected।**

**Exam answer:**  
“Bus contention occurs when two or more devices simultaneously drive conflicting data onto a common bus. Tri-state outputs prevent this by allowing inactive devices to remain in the high-impedance state.”

**ছোট check:**

1. Which bus carries the location to be accessed?
2. During a memory read, does data flow **CPU → Memory** or **Memory → CPU**?
3. Is **Hi-Z** the same as logic **0**?