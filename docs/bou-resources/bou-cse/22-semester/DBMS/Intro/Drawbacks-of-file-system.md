# Drawbacks of Using File Systems

### 1. Data Redundancy and Data Inconsistency

* **Data Redundancy (Duplication of Data):** The same information is stored multiple times in different files across different departments.
* *Example:* In a bank or university, your name, phone number, and address are saved in the "Admission / Loan Department" file and also saved separately in the "Accounts / Savings Department" file. This creates duplicate copies and wastes storage space.


* **Data Inconsistency (Conflicting Data):** When the same data exists in multiple files, updating one file leaves the other files outdated.
* *Example:* If you change your phone number and inform only the Admission branch, they update their file. However, the Accounts branch still keeps your old phone number. Now the system has two different, conflicting records for the exact same person.



---

### 2. Difficulty in Accessing Data

File systems lack ad-hoc query capabilities. Searching for specific data or creating custom reports is difficult because every new request requires writing a brand-new program from scratch.

* *Example:* A bank manager needs an immediate list: *"Which customers live in Dhaka and have an account balance greater than 50,000?"* In a file system, there is no ready-made query tool (like SQL) to run this search. A programmer must write, compile, and execute a custom script in C, Java, or another language just to extract this specific data.

---

### 3. Data Isolation

Data is scattered across different files and stored in multiple file formats (such as `.txt`, `.csv`, and `.xlsx`). Combining and processing related data across these isolated files is extremely difficult.

* *Example:* The Marketing department saves customer information in a `.txt` file, while the Sales department saves sales records in an `.xlsx` file. To generate a single combined report, developers must build a complex program capable of parsing and joining data across two completely different file structures.

---

### 4. Integrity Problems

Integrity constraints—the rules required to keep data correct and valid—cannot be enforced directly at the file system level. Instead, these constraints must be hardcoded into the application code.

* *Example:* A banking rule states that "Account balance cannot be less than zero" (`Balance > 0`). In a file system setup, programmers must write this logic directly inside the application's source code.
* *Maintenance Issue:* If the bank later updates the rule to "Minimum balance must be 500", developers must search through all source files, update the hardcoded logic, and re-test the application. This makes system maintenance slow and prone to errors.

---

### 5. Atomicity of Updates

Failures or system crashes midway through an operation leave the system in an inconsistent state with partial updates carried out. A transaction must either complete fully or not happen at all (all-or-nothing principle).

* *Example:* You transfer 500 taka to your friend. In a file system, the application first deducts 500 taka from your file. Suddenly, a server crash or power outage occurs before adding the money to your friend's file. The 500 taka is removed from your account but never received by your friend, with no automatic rollback mechanism to undo the deduction.

---

### 6. Concurrent Access by Multiple Users

While concurrent access is necessary for system performance, uncontrolled concurrent access leads to data corruption and inconsistencies when multiple users update data simultaneously.

* *Example:* Two people access a shared account with a balance of 100 taka at the exact same moment, and both attempt to withdraw 50 taka. In a file system lacking concurrency control, both programs read the initial balance as 100 taka, authorize both withdrawals, and overwrite the balance incorrectly—resulting in financial loss for the bank.

---

### 7. Security Problems

It is difficult to enforce granular access controls to give users access to only a subset of data. Access permissions in file systems are typically managed at the entire file level ("all-or-nothing").

* *Example:* A junior bank clerk needs to view customer phone numbers to contact them, but should not see sensitive account balances. Because all customer details are saved inside the same file (e.g., `customers.xlsx`), the system must either grant full access (exposing confidential balance data) or block file access entirely (preventing the clerk from retrieving phone numbers).