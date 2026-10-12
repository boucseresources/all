### Query Processing

**Query Processing** refers to the entire sequence of activities (সামগ্রিক কর্মকাণ্ডের ধারাবাহিকতা) involved in translating a high-level query (like an SQL statement) into low-level instructions that the physical database engine can execute to fetch the required data.

### Key Steps in Query Processing (কুয়েরি প্রক্রিয়াকরণের প্রধান ধাপসমূহ)

When you write and run an SQL query, the database management system (DBMS) processes it through three core phases:

#### 1. Parsing and Translation (সিনট্যাক্স বিশ্লেষণ ও রূপান্তর)

* **Syntax Checking (ব্যাকরণগত ত্রুটি যাচাই):** The query parser (পার্সার/বিশ্লেষক) inspects the SQL query to ensure it follows the correct syntax rules (যেমন: বানান ভুল বা ব্র্যাকেট মিসিং আছে কি না).
* **Semantic Verification (অর্থগত যথার্থতা যাচাই):** The system consults the Data Dictionary to verify whether the specified tables, attributes (columns), and access permissions actually exist.
* **Internal Representation (অভ্যন্তরীণ রূপান্তর):** The parser converts the SQL text into an internal representation, typically a **Relational Algebra Expression** (রিলেশনাল অ্যালজেব্রা সমীকরণ বা ট্রি কাঠামো).

#### 2. Query Optimization (কুয়েরি অপ্টিমাইজেশন / সর্বোত্তম কর্মপদ্ধতি নির্ধারণ)

A single relational algebra expression can be evaluated (সম্পাদন করা) using many mathematically equivalent (সমতুল্য) plans. However, some execution paths take seconds while others take hours.

* **Generating Execution Plans (সম্পাদন পরিকল্পনা তৈরি):** The query optimizer generates multiple alternative strategies, called **Evaluation Plans** or **Query Execution Plans** (কুয়েরি সম্পাদনের বিকল্প নকশা).
* **Cost Estimation (সম্ভাব্য খরচ বা ব্যয়ের অনুমান):** The optimizer estimates the resource cost of each plan based on:
* Number of disk block transfers (ডিস্ক থেকে ডেটা ব্লকের আদান-প্রদান).
* Number of disk seeks (হেড মুভমেন্টের সময়).
* CPU processing time (প্রসেসরের কাজের সময়).


* **Selecting the Best Plan:** It picks the plan with the lowest estimated cost (সর্বনিম্ন খরচের সর্বোত্তম পরিকল্পনা) to execute.

#### 3. Evaluation / Execution Engine (বাস্তবায়ন বা সম্পাদন ইঞ্জিন)

* **Plan Execution (পরিকল্পনা বাস্তবায়ন):** The query execution engine takes the chosen optimal evaluation plan, executes the underlying low-level code, and interacts with the **Storage Manager**.
* **Returning Results (ফলাফল প্রদান):** The required data records are fetched (তুলে আনা) from the physical storage disks into main memory (RAM) and returned to the user or client application.

### Concrete Example (বাস্তব উদাহরণ)

Consider this SQL query:

```sql
SELECT name 
FROM instructor 
WHERE salary > 50000;

```

1. **Parsing & Translation:**
* Checks if `instructor`, `name`, and `salary` are valid.
* Translates the query into the relational algebra expression:
$$\Pi_{\text{name}}(\sigma_{\text{salary} > 50000}(\text{instructor}))$$


2. **Optimization:**
* *Plan A:* Scan the entire table from top to bottom, row by row (Full Table Scan).
* *Plan B:* Use an existing B+ tree index on `salary` to jump straight to records where `salary > 50000` (Index Scan).
* *Decision:* If the table has 1,000,000 records, Plan B requires significantly fewer disk I/O operations (ডিস্ক ইনপুট-আউটপুট কার্যকলাপ). The optimizer selects **Plan B**.


3. **Evaluation:**
* The execution engine uses the index to retrieve matching rows and displays the instructor names.


![example.sql](https://res.cloudinary.com/zopgecx6/image/upload/v1791486677/example.sql-Bou-cse-notes_rnkry3.png)

![B+ Tree](https://res.cloudinary.com/zopgecx6/image/upload/v1791487068/TreeDiagram_yffnba.svg)

### Measures of Query Cost (কুয়েরি ব্যয়ের পরিমাপকসমূহ)

Database performance is primarily constrained by physical secondary storage rather than CPU speed. Therefore, query cost is dominated by:

* **Disk I/O Operations (ডিস্কের ইনপুট-আউটপুট):** Reading and writing blocks on physical storage drives.
* **Disk Seek Time (হেড মুভমেন্টে ব্যয়িত সময়):** The mechanical delay involved in positioning the disk head on traditional HDDs.
* **Memory Constraints (মেমোরির সীমাবদ্ধতা):** How much temporary buffer space (RAM) is available to hold intermediate results (মধ্যবর্তী ফলাফল).