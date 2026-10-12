# Data-Isolation-and-Integrity

### 1. Data Isolation (ডেটা বিচ্ছিন্নতা)

**Data Isolation** refers to a situation where related pieces of information are scattered (ছড়িয়ে-ছিটিয়ে থাকা) across multiple files, stored in different formats (বিন্যাস), or partitioned (বিভক্ত) across different departments.

* **The Problem (সমস্যা):**
* In traditional file-processing systems, because data files are created by different programmers at different times using different applications (e.g., `.txt`, `.csv`, `.xlsx`), the data becomes isolated (বিচ্ছিন্ন/আলাদা).
* Writing new code to extract, merge (একত্রিত করা), and cross-reference (পারস্পরিক সমন্বয় করা) this scattered information requires extensive custom programming and is error-prone.


* **Real-World Example (বাস্তব উদাহরণ):**
* The Sales department records monthly sales in an Excel sheet (`sales.xlsx`).
* The Customer Support team logs client complaints in a plain text file (`support.txt`).
* If management asks for a list of *"Customers who filed complaints and bought products this month,"* there is no direct link between the two files. A developer must write a dedicated translation program to parse (বিশ্লেষণ করা) and join both file structures manually.


* **DBMS Solution (সমাধান):**
* A relational database centralizes (একত্রিত করে) all tables in a single structured schema, allowing users to connect related data instantly using SQL `JOIN` operations.



---

### 2. Data Integrity (ডেটার নির্ভুলতা ও নির্ভরযোগ্যতা)

**Data Integrity** refers to the overall accuracy (নির্ভুলতা), completeness (পূর্ণতা), and reliability (নির্ভরযোগ্যতা) of data throughout its lifecycle. It ensures that the data stored in the database adheres strictly to real-world business rules and remains free from corruption (বিকৃতি/ত্রুটি).

* **The Problem in File Systems (ফাইল সিস্টেমের সমস্যা):**
* File systems cannot enforce business rules directly on the stored data.
* Rules have to be hardcoded into the application software's source code. If multiple applications write to the same files, one buggy program can easily insert invalid values.


* **Integrity Constraints in DBMS (ডিবিএমএস-এ শর্তাবলী):**
* **Domain Integrity (ডোমেন শর্ত):** Ensures every entry in a column is valid according to its defined type and range.
* *Example:* An `Age` field accepts only positive integers (`Age > 0`), or a `Phone_Number` column accepts only numbers.


* **Entity Integrity (সত্তা শর্ত):** Guarantees that every record can be uniquely distinguished (স্বতন্ত্রভাবে শনাক্ত করা).
* *Rule:* A `PRIMARY KEY` column must hold unique values and cannot be empty (`NOT NULL`).


* **Referential Integrity (রেফারেন্সিয়াল/সম্পর্কগত শর্ত):** Preserves valid relationships across connected tables using `FOREIGN KEY` constraints.
* *Rule:* If an `Orders` table lists `CustomerID = 205`, that customer must actually exist in the parent `Customers` table.


* **User-Defined Integrity (ব্যবহারকারী-সংজ্ঞায়িত শর্ত):** Specific business logic added to meet organizational policies.
* *Example:* A banking rule enforcing `CHECK (Account_Balance >= 500)`.





---

### Summary Comparison

| Concept (ধারণা) | Core Meaning (মূল অর্থ) | File System Limitation (ফাইল সিস্টেমের সীমাবদ্ধতা) | DBMS Solution (ডিবিএমএস-এর সমাধান) |
| --- | --- | --- | --- |
| **Data Isolation** | Data is fragmented (খণ্ডবিখণ্ড) across different files and formats. | Difficult to merge and query data from separate departmental files. | Stores tables in a unified database accessible via relational queries (`JOIN`). |
| **Data Integrity** | Data must remain accurate, valid, and consistent (সামঞ্জস্যপূর্ণ). | Rules must be hardcoded inside application programs; easily bypassed or broken. | Enforces rules directly on the database engine using declarative constraints (`PRIMARY KEY`, `FOREIGN KEY`, `CHECK`). |