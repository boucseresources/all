A **Data Model** is a collection of conceptual tools used to describe how data is stored, organized, connected, and protected in a database system.

---

### What a Data Model Describes

* **Data:** The actual facts and values stored in the system.


* *Example:* A student's name (`"Rahim"`), ID (`"101"`), and GPA (`"3.85"`).


* **Data Relationships:** How different pieces of data are linked or connected to each other.


* *Example:* Connecting the `Student` record to a `Course` record to show which student takes which course.


* **Data Semantics:** The real-world meaning and context of the data.


* *Example:* A column named `Salary` means monetary payment per month, not an employee's age or phone number.


* **Data Constraints:** Rules and limitations applied to the data to prevent invalid entries.


* *Example:* `Age >= 18` or `Account_Balance >= 0`.



---

### Categories of Data Models

#### 1. Relational Model

Data is organized into two-dimensional tables consisting of rows (tuples/records) and columns (attributes/fields).

* *Concept:* Tables are linked together using keys (Primary Key and Foreign Key). This is the foundation of standard SQL databases like MySQL, PostgreSQL, and Oracle.
* *Example:* A `Customers` table containing `CustomerID`, `Name`, and `Phone`, linked to an `Orders` table by matching the `CustomerID`.

#### 2. Entity-Relationship (ER) Model

A high-level conceptual blueprint used primarily during the database planning and design phase before creating actual database tables.

* *Concept:* It represents the system visually using **Entities** (real-world objects), **Attributes** (properties of those objects), and **Relationships** (connections between entities).


* *Example:* An entity **Doctor** has a relationship **"Treats"** with another entity **Patient**.

#### 3. Object-Based Data Models

Combines database storage with Object-Oriented Programming (OOP) concepts.

* **Object-Oriented Model:** Stores data as objects (combining data fields and executable methods/functions together inside the object) rather than flat rows.


* *Example:* A `BankAccount` object that contains balance data along with built-in actions like `calculateInterest()` and `withdraw()`.


* **Object-Relational Model:** A hybrid model that extends traditional relational tables to support object-oriented features like custom data types and inheritance.



#### 4. Semistructured Data Model

Used for data that does not conform to a rigid, fixed table structure (schema), but still contains tags or markers to separate data elements.

* *Concept:* The schema is self-describing and stored directly alongside the data. Widely used for web APIs and data exchange.
* *Example (XML/JSON):*

```xml
<student>
    <id>101</id>
    <name>Rahim</name>
    <email>rahim@email.com</email>
</student>

```

If another student has two email addresses or an extra phone number, the format handles it easily without altering the database schema.

#### 5. Older Data Models

Legacy models developed before the relational model became the industry standard:

* **Hierarchical Model:** Organizes data in a strict tree-like hierarchy (parent-child relationship). Each child record can have only **one** parent record.


* *Example:* A company file directory where a department has multiple employees, but an employee can belong to only one department.


* **Network Model:** Organizes data as an open graph/network. Unlike the hierarchical model, a child record can have **multiple** parent records (many-to-many relationship).


* *Example:* A student can be enrolled in multiple courses, and each course has multiple students.