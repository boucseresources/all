# Types of SQL Commands

Database management system (DBMS)-e SQL-er shob dhoroner kaj ebong instruction-ke tader uddesho onujayi ei category-gulote vag kora hoy:

* **DDL** (Data Definition Language)
* **DML** (Data Manipulation Language)
* **DQL** (Data Query Language)
* **DCL** (Data Control Language)
* **TCL** (Transaction Control Language)

SQL commands are divided into five main categories based on their operational roles:

---

### 1. DDL (Data Definition Language)

* **Purpose:** Used to define (সংজ্ঞায়িত করা), build, modify (পরিবর্তন করা), or destroy (মুছে ফেলা) the database structure (কাঠামো) and schema.
* **Key Commands:**
* `CREATE`: Creates a new database or table from scratch.
* `ALTER`: Modifies an existing (বিদ্যমান) table's structure (e.g., adding a new column or changing data types).
* `DROP`: Deletes an entire (সম্পূর্ণ) table or database along with its schema and records.
* `TRUNCATE`: Rapidly purges (খালি করে ফেলে) all rows from a table while keeping the structure intact (অক্ষত/অপরিবর্তিত).



---

### 2. DML (Data Manipulation Language)

* **Purpose:** Used to manipulate (রদবদল করা) and manage the actual data records (instances) stored inside tables.
* **Key Commands:**
* `INSERT`: Adds new rows or records into an existing table.
* `UPDATE`: Modifies existing data values within specified (নির্দিষ্ট) rows.
* `DELETE`: Removes specific rows based on defined criteria (শর্তাবলী).



---

### 3. DQL (Data Query Language)

* **Purpose:** Used to retrieve (খুঁজে বের করা/আহরণ করা) and fetch relevant data from the database. Although some textbooks group this under DML, it is widely recognized as a distinct (স্বতন্ত্র/আলাদা) category.
* **Key Command:**
* `SELECT`: Extracts (তুলে আনে) and filters data matching specified conditions (e.g., `SELECT * FROM Customers WHERE City = 'Dhaka';`).
* *Note:* Solves the file system problem of "Difficulty in Accessing Data."



---

### 4. DCL (Data Control Language)

* **Purpose:** Controls user privileges (বিশেষ অধিকার) and access permissions (অনুমতিসমূহ) to protect database security.
* **Key Commands:**
* `GRANT`: Gives a user permission to perform specific operations (কার্যক্রম) on tables.
* `REVOKE`: Withdraws (প্রত্যাহার করে নেওয়া) or cancels permissions previously given to a user.
* *Note:* Solves the file system problem of "Security Problems" by enforcing granular (সুক্ষ্ম/নির্দিষ্ট) access limits.



---

### 5. TCL (Transaction Control Language)

* **Purpose:** Manages transactions (লেনদেনসমূহ/কাজের ধাপ) in a database to ensure consistency (সামঞ্জস্যতা) and prevent data corruption.
* **Key Commands:**
* `COMMIT`: Permanently (স্থায়ীভাবে) saves all changes made during the current transaction.
* `ROLLBACK`: Reverts (পূর্বাবস্থায় ফিরিয়ে নেয়/Undo করে) data changes back to the previous state if an error or system crash occurs.
* `SAVEPOINT`: Creates an intermediate (মধ্যবর্তী/সাময়িক) checkpoint inside a transaction to roll back partially.
* *Note:* Solves the file system problem of "Atomicity of Updates" by preventing half-finished actions.



---

### Summary Table

| Category | Full Form | Primary Role | Common Commands |
| --- | --- | --- | --- |
| **DDL** | Data Definition Language | Creates and alters (পরিবর্তন করে) database structures | `CREATE`, `ALTER`, `DROP`, `TRUNCATE` |
| **DML** | Data Manipulation Language | Manages and edits stored records | `INSERT`, `UPDATE`, `DELETE` |
| **DQL** | Data Query Language | Queries and retrieves (আহরণ করে) data | `SELECT` |
| **DCL** | Data Control Language | Manages access permissions (অনুমতি) and security | `GRANT`, `REVOKE` |
| **TCL** | Transaction Control Language | Handles transaction safety and recovery (পুনরুদ্ধার) | `COMMIT`, `ROLLBACK`, `SAVEPOINT` |