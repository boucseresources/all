# Revision Before Exam

??? "WHAT IS JRE"

    ## Java Runtime Environment (JRE)
    Definition:
    Java Runtime Environment (JRE) is a software layer or package that provides the minimum requirements for executing or running a Java application on a computer. It combines the Java Virtual Machine (JVM) with core class libraries and other supporting components.
    Key Functions:

    * Code Execution: It loads, verifies, and executes Java bytecode on the host machine.
    * Environment Provisioning: It acts as an interface between the Java application and the underlying operating system.
    * Resource Management: It allocates the necessary memory and system resources required for the program to run smoothly.

    Core Components:
    JRE is primarily composed of two elements:

    1. Java Virtual Machine (JVM): The heart of JRE. It interprets the Java bytecode and converts it into machine-specific code that the computer's CPU can understand.
    2. Core Class Libraries: A collection of pre-written, built-in Java classes and libraries (e.g., java.lang, java.util) that programs need to run.

    The JRE Equation:

    JRE = JVM + Core Class Libraries (excluding development tools)

    Difference between JRE and JDK:

    * JRE (Java Runtime Environment): Used only to run Java applications. It is meant for end-users.
    * JDK (Java Development Kit): Used to develop (write and compile) Java applications. It includes JRE along with development tools like a compiler (javac) and debugger.

??? "What do you understand by JVM? Briefly explain the function of JVM"

    ## Java Virtual Machine (JVM)
    Definition:
    Java Virtual Machine (JVM) is an abstract (কাল্পনিক/বিমূর্ত), software-based engine (যন্ত্রকৌশল) that acts as a runtime environment for executing (সম্পাদন করা) Java bytecode. It is the heart (মূল কেন্দ্র) of the Java platform and is responsible (দায়ী/মূল ভূমিকা রাখে) for making Java a "Write Once, Run Anywhere" (WORA) language, as it converts (রূপান্তর করে) platform-independent (অপারেটিং সিস্টেমের ওপর নির্ভরশীল নয় এমন) bytecode into machine-specific (নির্দিষ্ট কম্পিউটারের উপযোগী) code.
    ------------------------------
    ## Key Functions of JVM
    The JVM performs four primary (প্রধান/মৌলিক) tasks during the lifecycle (জীবনচক্র) of a Java program:

    * Class Loading: The Class Loader subsystem (উপ-ব্যবস্থা) loads the compiled (অনূদিত/সংকলিত) .class files (bytecode) into the computer's memory (স্মৃতিশক্তি/র‍্যাম).
    * Bytecode Verification: The Bytecode Verifier checks the code for security violations (নিরাপত্তা লঙ্ঘন) and ensures (নিশ্চিত করে) it does not corrupt (নষ্ট/ক্ষতিগ্রস্ত করা) the system memory.
    * Code Execution: The Execution Engine converts the bytecode into native (স্বদেশী/কম্পিউটারের নিজস্ব) machine code using an Interpreter (দোভাষী) and a JIT (Just-In-Time) Compiler, then runs it.
    * Memory Management: JVM automatically (স্বয়ংক্রিয়ভাবে) manages memory allocation (বরাদ্দকরণ) and reclaims (পুনরুদ্ধার/মুক্ত করা) unused memory through a process (প্রক্রিয়া) called Garbage Collection (GC) (আবর্জনা নিষ্কাশন).

???  "Java Types - Trick to remember" 

    বাংলায় এই ৮টি ডেটা টাইপ সহজে মনে রাখার জন্য নিচের যেকোনো একটি ট্রিক্স ব্যবহার করতে পারেন:
    ## ট্রিক ১: একটি সহজ বাংলা বাক্য (প্রথম অক্ষর দিয়ে)
    নিচের বাক্যটি মনে রাখুন:

    বউ শাশুড়ি ইশারা লুকিয়ে ফ্ল্যাট ডেকোরেশন করে বারবার

    এবার প্রথম অক্ষরগুলো মিলিয়ে নিন:

    * বউ $\rightarrow$ byte
    * শাশুড়ি $\rightarrow$ short
    * ইশারা $\rightarrow$ int
    * লুকিয়ে $\rightarrow$ long
    * ফ্ল্যাট $\rightarrow$ float
    * ডেকোরেশন $\rightarrow$ double
    * করে $\rightarrow$ char
    * বারবার $\rightarrow$ boolean

    ------------------------------
    ## ট্রিক ২: ছকের মাধ্যমে গ্রুপ করে মনে রাখা (সবচেয়ে বৈজ্ঞানিক উপায়)
    মুখস্থ না করে মাথায় একটা ম্যাপ তৈরি করে নিন। এই ৮টি টাইপকে মাত্র ৩টি ভাগে ভাগ করা যায়:

    1. সংখ্যার দল (পূর্ণসংখ্যা): সাইজ ছোট থেকে বড় ক্রমানুসারে সাজানো:
    * byte $\rightarrow$ short $\rightarrow$ int $\rightarrow$ long
    2. দশমিকের দল (ভগ্নাংশ): ছোট এবং বড়:
    * float $\rightarrow$ double
    3. অন্যান্য (অক্ষর ও লজিক):
    * char (অক্ষরের জন্য)
        * boolean (হাঁ/না বা true/false এর জন্য)

    জাভার এই ৮টি প্রিমিটিভ ডেটা টাইপের সাইজ মনে রাখার একটি দারুণ এবং সহজ নিয়ম আছে।
    প্রথমে মেমোরির হিসাবটা বুঝুন: ১ Byte = ৮ bits। জাভায় সাইজগুলো সবসময় দ্বিগুণ বা জোড়ায় জোড়ায় বাড়ে।
    নিচে এদের সাইজ এবং সহজে মনে রাখার ট্রিক দেওয়া হলো:
    ## ১. পূর্ণসংখ্যার দল (Integers)
    এদের সাইজ ক্রমানুসারে ১, ২, ৪, ৮ বাইট (প্রতিবারে দ্বিগুণ হচ্ছে):

    * byte → ১ Byte (৮ bits) — সবচেয়ে ছোট।
    * short → ২ Bytes (১৬ bits) — বাইটের দ্বিগুণ।
    * int → ৪ Bytes (৩২ bits) — শর্টের দ্বিগুণ (এটি জাভায় সবচেয়ে বেশি ব্যবহৃত হয়)।
    * long → ৮ Bytes (৬৪ bits) — ইন্টের দ্বিগুণ (অনেক বড় সংখ্যার জন্য)।

    ## ২. দশমিকের দল (Floating-points)
    এদের সাইজ পূর্ণসংখ্যার বড় দুটি টাইপের সমান (৪ এবং ৮ বাইট):

    * float → ৪ Bytes (৩২ bits) — int এর সমান সাইজ।
    * double → ৮ Bytes (৬৪ bits) — long এর সমান সাইজ (দশমিকে এটি সবচেয়ে বেশি ব্যবহৃত হয়)।

    ## ৩. বাকি দুটি স্পেশাল টাইপ

    * char → ২ Bytes (১৬ bits) — জাভা ইউনিকোড (Unicode) সাপোর্ট করে, তাই একটি অক্ষরের জন্য ২ বাইট নেয়। (মনে রাখার ট্রিক: short এর সমান)।
    * boolean → ১ bit (১ বাইট নয়, মাত্র ১টি বিট) — কারণ এর কাজ শুধু হ্যাঁ (true) অথবা না (false) সংরক্ষণ করা। এর জন্য ১ বিট-ই যথেষ্ট (০ বা ১)।

    ------------------------------
    ## সাইজ মনে রাখার শর্টকাট চার্ট

    | ডাটা টাইপ | সাইজ (Byte-এ) | মনে রাখার সহজ সূত্র |
    |---|---|---|
    | byte | ১ Byte | শুরুর টাইপ, তাই ১ |
    | short | ২ Bytes | ১ এর দ্বিগুণ = ২ |
    | int | ৪ Bytes | ২ এর দ্বিগুণ = ৪ |
    | long | ৮ Bytes | ৪ এর দ্বিগুণ = ৮ |
    | float | ৪ Bytes | int এর সমান |
    | double | ৮ Bytes | long এর সমান |
    | char | ২ Bytes | short এর সমান |
    | boolean | ১ bit | সবচেয়ে ছোট (শুধু True/False) |

    ![java types mnemonic cheat sheet](<java types mnemonic cheat sheet.png>)


## What is multithreading in Java? Discuss the advantages of multithreading over process based multitasking

??? "What is multithreading in Java? Discuss the advantages of multithreading over process based multitasking"

    **Definition:**
    Multithreading is a feature (বৈশিষ্ট্য) in Java that allows concurrent (একই সময়ে/যুগপৎ) execution of two or more parts of a program for maximum utilization (ব্যবহার/ব্যবহারিক সুবিধা) of the CPU. Each part of such a program is called a thread (সূতা/ক্ষুদ্রতম অংশ), and threads are light-weight sub-processes within a single program.
    ------------------------------
    ### Advantages of Multithreading over Process-Based Multitasking
    Multitasking can be achieved in two ways: Process-based (প্রসেস-ভিত্তিক) and Thread-based (থ্রেড-ভিত্তিক/মাল্টিথ্রেডিং). Multithreading is highly preferred due to the following advantages:

    * Resource Sharing (রিসোর্স শেয়ারিং): Threads share the same address space (ঠিকানা মেমোরি) and memory of the process. In contrast, separate processes require isolated (পৃথক/আলাদা) memory allocations, which wastes system memory.
    * Low Context-Switching Overhead (কম কনটেক্সট-সুইচিং খরচ): Switching from one thread to another within the same process takes very little time. Switching between two independent processes is highly expensive (ব্যয়বহুল/ধীরগতির) and consumes more CPU cycles.
    * Efficient Communication (দক্ষ যোগাযোগ): Communication between threads is very fast and easy because they share memory. Processes require Inter-Process Communication (IPC) (আন্তঃপ্রসেস যোগাযোগ) mechanisms, which are complex and slow.
    * Non-Blocking Operation (বাধাহীন কার্যক্রম): If one thread undergoes an exception (ব্যতিক্রম/ত্রুটি) or enters a waiting state (like downloading a file), other threads continue to run smoothly without blocking (আটকে দেওয়া) the entire user interface.
    * Improved Performance (উন্নত কার্যক্ষমতা): Multithreading utilizes multi-core CPUs effectively (কার্যকরভাবে). Multiple threads can run on different processor cores at the exact same time, speeding up execution.


## What do you understand by Collection Framework in Java? Write some differences between List, Set, and Map in the collection hierarchy.

??? "What do you understand by Collection Framework in Java? Write some differences between List, Set, and Map in the collection hierarchy."

    Definition:
    The Java Collection Framework (JCF) is a unified (একীভূত/সমন্বিত) architecture that provides a set of interfaces and classes to store and manipulate (নিয়ন্ত্রণ/পরিবর্তন করা) a group of objects. It standardizes (মানসম্মত করা) data handling across Java applications by replacing older, legacy (উত্তরাধিকার সূত্রে প্রাপ্ত/পুরোনো) utility classes like Vector, Stack, and Hashtable. According to standard authoritative sources like GeeksforGeeks and TutorialsPoint, this framework optimizes performance by offering ready-made, highly efficient data structures.
    
    Core Components:
    * Interfaces (ইন্টারফেস): Abstract data types representing collections (e.g., Collection, List, Set, Map).
    * Implementations (বাস্তবায়ন): Concrete classes providing internal mechanics for interfaces (e.g., ArrayList, HashSet, HashMap).
    * Algorithms (অ্যালগরিদম): High-performance static methods for searching, sorting, and shuffling (ওলটপালট করা) elements.
    ---
    ### Differences Between List, Set, and Map
    While List and Set inherit from the core Collection interface, Map stands independently because it manages structured pairs rather than standalone items.

    | Feature (বৈশিষ্ট্য) | List (লিস্ট) | Set (সেট) | Map (ম্যাপ) |
    |---|---|---|---|
    | Data Layout (ডাটা বিন্যাস) | Stores elements in an ordered sequence (ক্রমানুসারে সাজানো) by index. | Stores elements in an unordered (এলোমেলো) mathematical collection. | Stores data using a Key-Value pair (চাবি এবং মানের জোড়া) structure. |
    | Duplicates (অনুরূপ উপাদান) | Allows duplicate items freely. | Strictly prohibits (কঠোরভাবে নিষিদ্ধ করা) duplicates. | Keys must be unique; values can be duplicated. |
    | Null Handling (খালি মান ব্যবস্থাপনা) | Accepts multiple null elements. | Allows at most one null element. | Allows one null key and multiple null values. |
    | Access Vector (অ্যাক্সেস মাধ্যম) | Uses an integer index (e.g., list.get(0)). | Requires an iterator (পুনরাবৃত্তিকারক) or enhanced loop. | Uses the key object to fetch values (e.g., map.get(key)). |
    | Hierarchy Position (শ্রেণীবিন্যাসে অবস্থান) | Directly extends the Collection interface. | Directly extends the Collection interface. | Does not extend Collection; acts as a separate root interface. |
    | Top Classes (শীর্ষস্থানীয় ক্লাসসমূহ) | ArrayList, LinkedList, Vector | HashSet, LinkedHashSet, TreeSet | HashMap, LinkedHashMap, TreeMap |

    ---
    ⏱️ 30-Second Exam Revision Note:
    * Framework Core: Unified architecture consisting of Interfaces, Classes, and Algorithms.
    * List: Ordered sequence, allows duplicate values, index-driven.
    * Set: Unordered collection, enforces strict uniqueness, no index access.
    * Map: Dynamic key-value pairs, keys are strictly unique, completely separate interface root.
    * Key Equation: List & Set ∈ Collection Interface ≠ Map Interface.
    Please provide the next question from your previous terms to proceed with the generation of this study guide.

??? "Does Java support multiple inheritances where each class is able to extend multiple classes?"

    জাভা প্রধানত The Diamond Problem (ডায়মন্ড প্রবলেম) বা মেথড নিয়ে তৈরি হওয়া এক ধরণের জটিল দ্ব্যর্থতা (ambiguity) এড়ানোর জন্য সরাসরি ক্লাসের মাধ্যমে multiple inheritance সাপোর্ট করে না।
    সহজ ভাষায় বিষয়টি নিচে ব্যাখ্যা করা হলো:
    ## ১. দ্য ডায়মন্ড প্রবলেম (The Diamond Problem)
    ধরুন, জাভায় একাধিক ক্লাস এক্সটেন্ড করা সম্ভব (ধরে নিচ্ছি)। এখন একটি দৃশ্যপট চিন্তা করুন:

    * একটি সুপারক্লাস আছে Class A, যার মধ্যে print() নামে একটি মেথড আছে।
    * দুটি চাইল্ড ক্লাস Class B এবং Class C উভয়ই Class A-কে এক্সটেন্ড করেছে এবং নিজেদের মতো করে print() মেথডটিকে ওভাররাইড (override) করেছে।
    * এখন যদি একটি নতুন ক্লাস Class D একই সাথে Class B এবং Class C দুইটাকেই এক্সটেন্ড করে (class D extends B, C):

        [ Class A (print) ]
            /         \
            /           \
    [ Class B (print) ]  [ Class C (print) ]
            \           /
            \         /
        [ Class D (print?) ]

    এখন যদি আপনি Class D-এর একটি অবজেক্ট তৈরি করে print() মেথডটি কল করেন, তখন জাভা কম্পাইলার মারাত্মক কনফিউশনে পড়ে যাবে—সে কি Class B-এর মেথডটি রান করবে, নাকি Class C-এর মেথডটি রান করবে?
    এই যে হীরক আকৃতির (diamond shape) কনফিউশন তৈরি হয়, একেই ডায়মন্ড প্রবলেম বলে। সি++ (C++) এর মতো ভাষায় এটি হ্যান্ডেল করা গেলেও কোড অনেক জটিল হয়ে যায়। জাভা তৈরির মূল উদ্দেশ্য ছিল এটিকে সহজ ও সুরক্ষিত রাখা, তাই ক্লাসের ক্ষেত্রে এটি নিষিদ্ধ করা হয়েছে।
    ## ২. মেমোরি এবং কনস্ট্রাক্টর কলিং জটিলতা
    যখন আপনি কোনো চাইল্ড ক্লাসের অবজেক্ট তৈরি করেন, তখন ব্যাকগ্রাউন্ডে তার প্যারেন্ট ক্লাসের কনস্ট্রাক্টর (super()) কল হয়। যদি একটি ক্লাস দুটি আলাদা ক্লাসকে এক্সটেন্ড করে, তবে কোন প্যারেন্ট ক্লাসের কনস্ট্রাক্টর আগে কল হবে এবং মেমোরিতে ভ্যারিয়েবলগুলো কীভাবে অ্যালোকেট হবে, তা নিয়ে জটিলতা তৈরি হতো।
    ## ৩. কোড সহজ ও পরিষ্কার রাখা
    জাভার ডিজাইনাররা (যেমন জেমস গসলিং) চেয়েছিলেন জাভা যেন একটি সাধারণ এবং জটিলতামুক্ত ভাষা হয়। একাধিক ক্লাস ইনহেরিট করলে কোড মেইনটেইন করা এবং ডিবাগ করা কঠিন হয়ে পড়ে।
    ------------------------------
    ## জাভার অল্টারনেটিভ সমাধান
    জাভা ক্লাসের ক্ষেত্রে এটি ব্লক করলেও Interface (ইন্টারফেস) এর মাধ্যমে কিন্তু multiple inheritance করার সুযোগ দেয়।

    * একটি ক্লাস একসাথে একাধিক ইন্টারফেস implements করতে পারে।
    * জাভা ৮ থেকে ইন্টারফেসে default method আসার পর যদি দুটি ইন্টারফেসে একই নামের মেথড থাকে, তবে জাভা কম্পাইলার আপনাকে বাধ্য করবে চাইল্ড ক্লাসে মেথডটি ওভাররাইড করে কনফিউশন দূর করতে। ফলে ডায়মন্ড প্রবলেম ছাড়াই একাধিক আচরণ বা ফিচার এক ক্লাসে আনা যায়।

