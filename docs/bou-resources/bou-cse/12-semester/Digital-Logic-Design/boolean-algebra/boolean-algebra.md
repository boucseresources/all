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
            AB + A'C + BC = AB + A'C + BC(A + A')
            = AB + A'C + ABC + A'BC
            = AB(1 + C) + A'C(1 + B)
            = AB + A'C
        ```
    ### B) AND (POS) Example

    **Given:** `(A+B)(A'+C)(B+C)`
    Pattern match: `(X+Y)(X'+Z)(Y+Z)` where `X=A, Y=B, Z=C`
    **Drop:** `(Y+Z)` → **`(B+C)`**
    **Result:** `(A+B)(A'+C)` ✅

    ### C) তোমার দেওয়া: `A B' + B C + C A`

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

    ## 8) Practice (MkDocs collapsible)

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
        Canonical form expresses a Boolean function in a fixed format where all variables appear in each term, either complemented or uncomplemented.  
        Two main types:
        - **SOP (Sum of Products)** → uses minterms  
        - **POS (Product of Sums)** → uses maxterms

    !!! abstract "🧩 Key Terms"
        | Term     | Definition | Example |
        |----------|------------|---------|
        | Variable | Boolean input | A, B |
        | Minterm  | AND of all variables | Ā·B |
        | Maxterm  | OR of all variables | (A + B̄) |
        | SOP      | OR of minterms | m1 + m3 |
        | POS      | AND of maxterms | M0·M2 |

    !!! tip "📜 SOP from Truth Table"
        1. List all input combinations  
        2. For output=1 rows, write minterm (0→complement, 1→normal)  
        3. OR all minterms

    !!! example "✏️ Example"
        | A | B | Symbol | Minterm |
        |---|---|--------|---------|
        | 0 | 0 | m0     | Ā·B̄ |
        | 0 | 1 | m1     | Ā·B |
        | 1 | 0 | m2     | A·B̄ |
        | 1 | 1 | m3     | A·B |

        If output=1 for m1, m3:  
        **SOP:** `ĀB + AB`  
        **POS:** `(A + B)(Ā + B)`

    ??? warning "⚠️ Common Mistakes"
        - Skipping variables → not allowed  
        - Wrong complement mapping → 0 must be complemented  
        - SOP/POS confusion → SOP from 1s, POS from 0s

---

## Practice Questions

??? example "Click to View"
    **Q1:** Write SOP for 3-variable function with output=1 for 000, 010, 111  
    **A1:** `ĀB̄C̄ + ĀBC̄ + ABC`

    **Q2:** From same function, write POS  
    **A2:** Output=0 rows → convert to maxterms

    **Q3:** Why must every variable appear in canonical form?  
    **A3:** To uniquely represent each truth table row

    **Q4:** Convert `A·B̄ + Ā·B` to canonical SOP  
    **A4:** Expand to include all variables


---
<!-- prettier-ignore-start -->
*[SOP]: Sum of Producs অর্থাৎ অনেকগুলো গুণের যোগফল। 
<!-- prettier-ignore-end -->