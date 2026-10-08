# Primary-Design-Approaches

When building a database for an organization, there are two primary **Design Approaches** (ডিজাইন পদ্ধতিসমূহ) to make sure the data is structured cleanly without errors:

---

### 1. Normalization Theory (নরমালাইজেশন তত্ত্ব)

* **Core Concept:** Formalizes (নির্দিষ্ট নীতিমালায় রূপ দেয়) what makes a database design "bad" and provides formal mathematical tests to detect and fix those flaws.


* **Goal:** To eliminate data redundancy (ডুপ্লিকেট ডেটা) and prevent update anomalies (তথ্য পরিবর্তনের সময় ভুল হওয়া).
* **Real-life Example:**
* If you put Student Info, Course Info, and Teacher Info all inside **one giant table**, every time 50 students take the same course, the teacher's name and phone number get written 50 times.
* **Normalization** tests this messy table, identifies that it is a bad design, and splits it into three clean, linked tables: `Students`, `Courses`, and `Teachers`.





---

### 2. Entity-Relationship (ER) Model (সত্তা-সম্পর্ক মডেল)

* **Core Concept:** Represents an entire enterprise (প্রতিষ্ঠান বা সংস্থা) as a collection of real-world objects (**Entities**) and the connections (**Relationships**) between them.


* **Key Components:**
* **Entity (সত্তা):** A "thing" or "object" in the organization that is distinguishable (আলাদাভাবে চেনা যায় এমন) from other objects.


* *Example:* A specific `Student`, a `Teacher`, an `Account`, or a `Product`.


* **Attributes (বৈশিষ্ট্যসমূহ):** Properties that describe the entity.


* *Example:* A `Student` entity is described by attributes like `Roll_Number`, `Name`, `Department`, and `Date_of_Birth`.




* **Relationship (পারস্পরিক সম্পর্ক):** An association (যোগসূত্র/সংযোগ) among several entities.


* *Example:* A `Student` entity and a `Course` entity are connected by the relationship **"Enrolls In"**. A `Doctor` and a `Patient` are connected by **"Treats"**.






* **Entity-Relationship Diagram (ER Diagram):** The entire model is represented diagrammatically (চিত্রের মাধ্যমে) using standard shapes:


* **Rectangles:** Entities (e.g., `Student`, `Course`)
* **Ovals / Ellipses:** Attributes (e.g., `Name`, `ID`)
* **Diamonds:** Relationships (e.g., `Enrolls`)



---

### How Both Approaches Work Together

1. **Step 1 (ER Model - Top-Down):** You first draw an **ER Diagram** to visualize the whole system and create your initial tables.


2. **Step 2 (Normalization - Bottom-Up):** You test those tables using **Normalization rules** to find flaws, remove duplicate fields, and confirm the design is clean.