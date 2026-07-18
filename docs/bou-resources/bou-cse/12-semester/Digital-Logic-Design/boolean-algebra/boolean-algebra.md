<!-- prettier-ignore-start -->
# Chapter: Boolean Algebra
---

!!! info "Resources"
    **Concensus Theorem**: [Concensus Theorem :simple-youtube:](https://youtu.be/3pbH9IhxwOg)

=== "Bangla Explanation"

    ### Consensus / Redundancy Theorem — Beginner Friendly Note

    !!! info "Goal"
        Boolean expression কমিয়ে **same output** রাখা। অর্থাৎ অযথা থাকা কোনো term/factor **কেটে দেওয়া** (redundant অংশ remove করা) ✅

    ## 1) Core Idea (এক কথায়)

    * **OR/SOP form:** `XY + X'Z + YZ → XY + X'Z`
    👉 `YZ` redundant (কারণ আগের দুইটা term মিলেই ওটার কাজ হয়ে যায়)
    * **AND/POS form:** `(X+Y)(X'+Z)(Y+Z) → (X+Y)(X'+Z)`
    👉 `(Y+Z)` redundant

    !!! tip "অতি-শর্ট রুল"
        - **OR form (pluses):** যেই term–এ **complemented variable নাই**, সেই term **drop** করো।
        - **AND form (parentheses):** যেই factor অন্য দু’টার **consensus** (মিলিত coverage) সেটাকে **drop** করো।

    ## 2) Pre-Check ✅ (না মিললে theorem লাগাবে না ⚠️)

    | শর্ত                           | কী দেখতে হবে                                                                |
    | ------------------------------ | --------------------------------------------------------------------------- |
    | Three variables                | এক্সপ্রেশনে মোট **৩টা variable** (যেমন A, B, C)                             |
    | Repetition                     | প্রত্যেক variable **দুইবার** এসেছে (complemented/normal যেভাবেই হোক)        |
    | Exactly one complemented focus | OR-case এ কোনো **একটা variable complemented** হয়ে এক term–এ আসে             |
    | Target to drop                 | OR: complemented variable **না থাকা** term drop. AND: consensus factor drop |

    !!! warning "Common Mistakes ⚠️"
        - ৩টা ছাড়াও বড় expression–এ **sub-triple** ধরে apply করা যায়; কিন্তু random ভাবে কাটছাঁট কোরো না ❌
        - **Variable match** না হলে “looks similar” ভেবে drop কোরো না ❌
        - AND vs OR রুল **উল্টে ফেলো না** (খুবই common ভুল) ❌

    ## 3) Initial Values / Context

    * Boolean variable মানে **0/1** (False/True)
    * Complement (`A'` বা `Ā`) মানে **NOT A**
    * **+** মানে **OR**, **·** (বা কিছু না লিখে পাশাপাশি) মানে **AND**

    ## 4) Quick Examples (Step-by-step)

    ### A) OR (SOP) Example

    **Given:** `AB + A'C + BC`
    **Focus:** Complemented variable = **A** (একবার `A`, একবার `A'`)
    **Drop:** যে term–এ A/ A' নাই → **`BC`**
    **Result:** `AB + A'C` ✅

    !!! example "Why works (mini-proof)"
        ```math
            AB + ĀC + BC = AB + ĀC + BC(A + Ā)
            = AB + ĀC + ABC + ĀBC
            = AB(1 + C) + ĀC(1 + B)
            = AB + ĀC
        ```

    ### B) AND (POS) Example

    **Given:** `(A+B)(A'+C)(B+C)`
    Pattern match: `(X+Y)(X'+Z)(Y+Z)` where `X=A, Y=B, Z=C`
    **Drop:** `(Y+Z)` → **`(B+C)`**
    **Result:** `(A+B)(A'+C)` ✅

    ### C) আপনার দেওয়া: `A B' + B C + C A`

    Mapping: `X=B, Y=A, Z=C`
    Form: `Y X' + X Z + Y Z` → **drop `YZ` = `CA`**
    **Result:** `A B' + B C` ✅

    ---

    ## 5) At-a-glance Table

    | Form      | Pattern            | What to drop | Final         |
    | --------- | ------------------ | ------------ | ------------- |
    | OR / SOP  | `XY + X'Z + YZ`    | `YZ`         | `XY + X'Z`    |
    | AND / POS | `(X+Y)(X'+Z)(Y+Z)` | `(Y+Z)`      | `(X+Y)(X'+Z)` |

    ---

    ## 6) Analogy (Beginner vibe)

    ধরো তিনজন বন্ধু মিলে কাজ করবে—**XY** আর **X'Z** দু’জন মিলে **সব কেস** কাভার করে ফেলেছে। তৃতীয়জন **YZ**ও একই কাজই করছে—তাই তাকে বাদ দিলেও কাজ থেমে যায় না ✅

    ---

    ## 7) Mini Flowchart (apply করার আগে চেকলিস্ট)
<!-- This flowchart is good -->
    ```mermaid
    flowchart TD
        A[Start] --> B{Form?}
        B -->|"OR (SOP)"| C["3 vars? each twice?"]
        B -->|"AND (POS)"| G["3 vars? pattern?"]
        C -->|Yes| D["Find complemented variable"]
        D --> E["Drop term without that variable"]
        E --> F[Result]
        G -->|Yes| H["Match (X+Y)(X'+Z)(Y+Z)"]
        H --> I["Drop (Y+Z)"]
        I --> F
        C -->|No| X["Don't apply ❌"]
        G -->|No| X

    ```

    ---

    ## 8) Practice

    ??? question "Practice 1 (OR): `AB + B C' + AC`"
        Complemented focus = **C** (as `C'` আছে) → drop term **যেখানে C/C' নাই** = `AB`
        **Ans:** `B C' + AC`

    ??? question "Practice 2 (AND): `(A+B)(B'+C)(A+C)`"
        Pattern: `(X+Y)(Y'+Z)(X+Z)` → drop `(X+Z)` = `(A+C)`
        **Ans:** `(A+B)(B'+C)`

    ---

=== "Just English"

    ### Consensus / Redundancy Theorem — Formal Notes

    !!! note "Purpose"
        To remove a logically **redundant** term/factor from a Boolean expression **without changing** its truth table.

    ## Statements

    * **SOP (OR) form:**
    `XY + X'Z + YZ = XY + X'Z`  → `YZ` is redundant.

    * **POS (AND) form (dual):**
    `(X + Y)(X' + Z)(Y + Z) = (X + Y)(X' + Z)` → `(Y + Z)` is redundant.

    ## Applicability Conditions

    1. Exactly **three variables** are involved.
    2. Each variable appears **twice** (either complemented or not).
    3. In SOP, exactly one variable appears **complemented** in one term.
    4. **Drop**:

    * SOP → the term **missing** the complemented variable.
    * POS → the factor that is the **consensus** of the other two.

    ## Worked Examples

    **1) SOP:** `AB + A'C + BC`
    Drop `BC` → **`AB + A'C`**.

    **2) POS:** `(A+B)(A'+C)(B+C)`
    Drop `(B+C)` → **`(A+B)(A'+C)`**.

    **3) Given:** `AB' + BC + CA`
    Map `X=B, Y=A, Z=C`; drop `YZ = CA` → **`AB' + BC`**.

    ## Proof Sketch (SOP)

    `XY + X'Z + YZ = XY + X'Z + YZ(X + X') = XY + X'Z + XYZ + X'YZ = XY(1 + Z) + X'Z(1 + Y) = XY + X'Z`.

    ---

    ## Quick Reference

    | Form               | Keep          | Drop    |
    | ------------------ | ------------- | ------- |
    | `XY + X'Z + YZ`    | `XY + X'Z`    | `YZ`    |
    | `(X+Y)(X'+Z)(Y+Z)` | `(X+Y)(X'+Z)` | `(Y+Z)` |

    ---

    ## Common Pitfalls

    * Misapplying SOP rule to a POS expression (and vice versa).
    * For larger expressions, apply the theorem to a **valid 3-variable subset** only.

    ---

    ## Short Exercises

    ??? example "E1: `A'B + BC + AC`"
        Complemented focus: `A`. Drop term without `A/A'` → drop `BC`.
        **Answer:** `A'B + AC`.

    ??? example "E2: `(A+C)(A'+B)(B+C)`"
        POS pattern; drop `(B+C)`.
        **Answer:** `(A+C)(A'+B)`.

---

# Standard Representation (Canonical Form)

=== "Banglish Explanation"
    !!! note "📌 Overview"

        Standard Representation মানে Boolean function কে এমনভাবে লেখা যেখানে **সব variables** প্রতিটা term-এ থাকে — হয় complemented বা uncomplemented form-এ।  
        দুইটা ধরন: 
        - **SOP (Sum of Products)** → minterms দিয়ে বানানো  
        - **POS (Product of Sums)** → maxterms দিয়ে বানানো

        **কেন দরকার?**
        - Boolean simplification সহজ হয়
        - Truth table থেকে equation direct পাওয়া যায়
        - Circuit design consistent হয়

        !!! abstract "🧩 Key Terms & Symbols"
            | Term         | Meaning | Example |
            |--------------|---------|---------|
            | **Variable** | Input symbol (A, B, C) | A, B |
            | **Minterm**  | সব variables AND করা | `Ā·B` |
            | **Maxterm**  | সব variables OR করা | `(A + B̄)` |
            | **SOP**      | OR of minterms | `m1 + m2 + m3` |
            | **POS**      | AND of maxterms | `M1 · M2 · M3` |

            💡 **Default:** Variables binary (0/1), AND = `·`, OR = `+`, NOT = bar

        !!! tip "📜 SOP বানানোর Step-by-Step"
            1. Truth table বানাও → সব possible inputs
            2. Output যেখানে 1 → ওই row-এর জন্য minterm লেখো
            3. Variable 0 → complemented, 1 → normal form
            4. সব minterm OR করো

        !!! example "✏️ Example 1 — SOP"
            | A | B | Symbol | Minterm |
            |---|---|--------|---------|
            | 0 | 0 | m0     | Ā·B̄ |
            | 0 | 1 | m1     | Ā·B |
            | 1 | 0 | m2     | A·B̄ |
            | 1 | 1 | m3     | A·B |

            যদি output=1 হয় শুধু m1, m3 →
            **SOP:**
            ```
            F = ĀB + AB
            ```

        !!! example "✏️ Example 2 — POS"
            Output=0 যেখানে → সেখান থেকে maxterm:
            - m0 (A=0, B=0) → `(A + B)`
            - m2 (A=1, B=0) → `(Ā + B)`

            **POS:**
            ```
            F = (A + B)·(Ā + B)
            ```

        ??? warning "⚠️ Common Mistakes & Fixes"
            | Mistake | Why Wrong | Fix |
            |---------|-----------|-----|
            | Variable skip করা | Canonical form-এ সব variable লাগে | Missing variable যোগ করো |
            | Wrong complement | 0→complement, 1→normal | Row চেক করো |
            | SOP vs POS mix-up | Definition মেনে চলো | Output=1 → SOP, Output=0 → POS |

        !!! tip "💡 Analogy"
            **Attendance sheet**:
            - SOP = present students list (OR করে)
            - POS = absent students বাদ দেওয়ার rule

        !!! info "📊 Quick Summary Table"
            | Form  | Based On | Expression Type | Example |
            |-------|----------|-----------------|---------|
            | SOP   | Output=1 | OR of AND terms | ĀB + AB |
            | POS   | Output=0 | AND of OR terms | (A+B)(Ā+B) |

        ```mermaid
        flowchart TD
            A[Start: Truth Table] --> B{Output=1?}
            B -->|Yes| C[Write minterm: 0→bar, 1→normal]
            B -->|No| D[Skip]
            C --> E[Repeat for all rows]
            E --> F[OR all minterms]
        ```

=== "Just English"
!!! note "📌 Overview"



!!! note "Definition"
    In Boolean algebra, **Standard Representation** (also called **Canonical Form**) means  
    writing a Boolean function so that **every term contains all the variables exactly once**,  
    either in normal form or complemented form.

    There are two main types:
    - **SOP (Sum of Products)** – Logical OR of all **minterms** for which the function output is 1.
    - **POS (Product of Sums)** – Logical AND of all **maxterms** for which the function output is 0.

    This form is directly derived from a **truth table** and is useful for **logic circuit design**.

---

!!! example "Analogy for Better Understanding"
    Think of **Standard Representation** like writing a **full name** with  
    all parts included every single time, so there’s no confusion.

    Imagine your class has 3 students: **A**, **B**, and **C**.  
    Even if you talk about one, you always say **all three names** in a fixed order:

    - “A present, B absent, C present” → **A · B′ · C** (a minterm)
    - “A absent, B present, C absent” → **A′ · B · C′**

    In **SOP form**, you list all the cases when something is **true** and join them with **OR**.  
    In **POS form**, you list all the cases when something is **false** and join them with **AND**.

    Just like full names remove identity confusion, **canonical form removes ambiguity**  
    because **every term has all variables written**.

    ---

    !!! example "Example Truth Table with SOP & POS"
        | A | B | C | F | SOP Term   | POS Term          |
        |---|---|---|---|------------|-------------------|
        | 0 | 0 | 0 | 0 | -          | (A + B + C)       |
        | 0 | 0 | 1 | 1 | A'B'C      | -                 |
        | 0 | 1 | 0 | 1 | A'BC'      | -                 |
        | 0 | 1 | 1 | 0 | -          | (A + B' + C')     |
        | 1 | 0 | 0 | 1 | AB'C'      | -                 |
        | 1 | 0 | 1 | 0 | -          | (A' + B + C')     |
        | 1 | 1 | 0 | 0 | -          | (A' + B' + C)     |
        | 1 | 1 | 1 | 1 | ABC        | -                 |

        **SOP:** F = A'B'C + A'BC' + AB'C' + ABC  
        **POS:** F = (A + B + C) · (A + B' + C') · (A' + B + C') · (A' + B' + C)

    ---

    !!! tip "Key Points to Remember"
        - SOP → works with output **1** rows in truth table.
        - POS → works with output **0** rows in truth table.
        - Every term must contain **all variables exactly once**.
        - Directly convertible between SOP and POS using Boolean algebra.


---

## Practice Questions

??? example "Click to View"
    
    **Q1: Write SOP for 3-variable function with output=1 for 000, 010, 111**
    **A1:** `ĀB̄C̄ + ĀBC̄ + ABC`

    **Q2:** From same function, write POS
    **A2:** Output=0 rows → convert to maxterms

    **Q3:** Why must every variable appear in canonical form?
    **A3:** To uniquely represent each truth table row

    **Q4:** Convert `A·B̄ + Ā·B` to canonical SOP
    **A4:** Expand to include all variables

---






*[SOP]: Sum of Products — OR of multiple AND terms (each term is a minterm in canonical form) । বাংলায়: অনেকগুলো AND term (minterm) একসাথে OR করে লেখা ফর্ম।
*[POS]: Product of Sums — AND of multiple OR terms (each term is a maxterm in canonical form) । বাংলায়: অনেকগুলো OR term (maxterm) একসাথে AND করে লেখা ফর্ম।
*[minterm]: An AND term that includes all variables (each either complemented or uncomplemented); equals 1 for exactly one row of the truth table । বাংলায়: সব variables নিয়ে AND করা টার্ম, যেটা truth table-এর ঠিক একটি row-তে 1 হয়।
*[maxterm]: An OR term that includes all variables (each either complemented or uncomplemented); equals 0 for exactly one row of the truth table । বাংলায়: সব variables নিয়ে OR করা টার্ম, যেটা truth table-এর ঠিক একটি row-তে 0 হয়।
*[MSB]: Most Significant Bit — the leftmost bit in a binary number; often corresponds to the first listed variable in a truth table । বাংলায়: বাইনারি সংখ্যার বামদিকের প্রথম বিট, সাধারণত প্রথম variable।
*[LSB]: Least Significant Bit — the rightmost bit in a binary number । বাংলায়: বাইনারি সংখ্যার ডানদিকের শেষ বিট।
*[canonical form]: A fixed, complete form of a Boolean expression where each term contains all variables exactly once । বাংলায়: Boolean expression-এর নির্দিষ্ট পূর্ণাঙ্গ ফর্ম যেখানে প্রতিটি term-এ সব variables একবার করে থাকে।
*[complement]: The logical NOT of a variable (e.g., A → Ā or A') । বাংলায়: কোনো variable-এর বিপরীত মান, যেমন 0→1, 1→0।
*[truth table]: A tabular representation of all possible input combinations and their corresponding output values । বাংলায়: ইনপুটের সব সম্ভাব্য combination ও তাদের আউটপুট দেখানো টেবিল।
*[consensus theorem]: A Boolean algebra simplification rule to remove a redundant term/factor without changing the output । বাংলায়: Boolean expression থেকে অপ্রয়োজনীয় টার্ম বাদ দেওয়ার নিয়ম, আউটপুট না বদলে।
*[redundant term]: A term in a Boolean expression that does not affect the final output and can be removed । বাংলায়: যেটা বাদ দিলেও output বদলায় না।
*[K-map]: Karnaugh Map — a graphical method for simplifying Boolean expressions । বাংলায়: Boolean simplification-এর জন্য গ্রাফিক্যাল পদ্ধতি।
*[OR]: A logical operation outputting 1 if at least one input is 1 (symbol: +) । বাংলায়: অন্তত এক ইনপুট 1 হলে আউটপুট 1 হয়।
*[AND]: A logical operation outputting 1 only if all inputs are 1 (symbol: · or concatenation) । বাংলায়: সব ইনপুট 1 হলে আউটপুট 1 হয়।
*[NOT]: A logical operation outputting the inverse of the input (symbol: bar or prime) । বাংলায়: ইনপুটের উল্টো মান দেওয়া অপারেশন।
*[Σm]: Summation of minterms notation for SOP form । বাংলায়: SOP ফর্মে minterm গুলোর যোগফল বোঝানোর নোটেশন।
*[ΠM]: Product of maxterms notation for POS form । বাংলায়: POS ফর্মে maxterm গুলোর গুণফল বোঝানোর নোটেশন।
*[variable]: A symbol representing a Boolean input, which can be either 0 (False) or 1 (True) । বাংলায়: Boolean ইনপুট বোঝানো প্রতীক, যা 0 বা 1 হতে পারে।

<!-- prettier-ignore-end -->
