এগোই। শুধু আগের check-এর উত্তর মনে রাখো: **active-low signal 0 থেকে 1 হলে inactive হয়।**

এবার **Input and Output Devices — §2.2.4, বইয়ের পৃষ্ঠা ১৩।**

CPU বাইরের যন্ত্র থেকে data নেয় **input port** দিয়ে এবং বাইরের যন্ত্রে data পাঠায় **output port** দিয়ে। এখানে **port** বলতে CPU ও peripheral-এর মধ্যে data আদানপ্রদানের interface বোঝাচ্ছে; শুধু বাইরের cable connector নয়।

| Operation | Direction | Example |
|---|---|---|
| **Input** | Peripheral → CPU | Keyboard থেকে key-এর তথ্য নেওয়া |
| **Output** | CPU → Peripheral | Printer-এ ছাপানোর data পাঠানো |

**Exam answer:**

“Input and output ports provide interfaces for transferring data between the microprocessor and external peripherals. Input ports receive data from peripherals, whereas output ports send data to peripherals.”

**I/O read কীভাবে হয়?**

ধরো, CPU একটি input port থেকে data নেবে:

1. CPU **address bus**-এ port-এর address দেয়।
2. **Control bus**-এ I/O Read signal দেয়।
3. নির্বাচিত port **data bus** দিয়ে CPU-তে data পাঠায়।

**I/O write কীভাবে হয়?**

CPU একটি output port-এ data পাঠাতে চাইলে:

1. **Address bus**-এ port-এর address দেয়।
2. **Data bus**-এ পাঠানোর data রাখে।
3. **Control bus**-এ I/O Write signal দেয়।

বইয়ের notation-এ **IOR** ও **IOW**-এর ওপর দাগ থাকলে সেগুলো **active-low** signal।

**Memory operation-এর সঙ্গে পার্থক্য**

পদ্ধতিটি পরিচিত: address দেওয়া, control signal দেওয়া, data transfer করা। পার্থক্য হলো **কাকে access করা হচ্ছে**।

| Operation | What is accessed? | Data direction |
|---|---|---|
| **Memory read** | Memory location | Memory → CPU |
| **Memory write** | Memory location | CPU → Memory |
| **I/O read** | Input port | Port → CPU |
| **I/O write** | Output port | CPU → Port |

**Exam answer: I/O read operation**

“The microprocessor places the port address on the address bus and activates the I/O read signal. The addressed input port then transfers data to the microprocessor through the data bus.”

**Quick check—ছোট উত্তরই যথেষ্ট:**

1. The CPU receives keyboard data through a port. Is this **I/O read** or **memory read**?
2. During an **I/O write**, in which direction does data flow?
3. Which bus carries the **port address**?