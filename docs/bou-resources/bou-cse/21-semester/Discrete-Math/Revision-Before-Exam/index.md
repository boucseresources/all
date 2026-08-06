# Discrete Mathe - Revision

## Notations
??? "Notations"

    Based on the image **"image_81a99d.png"**, these are standard notations used in Discrete Mathematics. The image covers several topics including propositional logic, set theory, functions, number theory, matrices, and graph theory.

    *(Note: In the provided image, some characters appear as empty rectangular boxes ($\square$) due to missing fonts. I have corrected these to their proper mathematical symbols, such as ellipses ($\dots$), function composition ($\circ$), and generalized union ($\bigcup$), in the table below.)*

    Here is the breakdown of the notations with their English definitions, Bangla translations for complex terms, and examples.

    ### 1. Logic (যুক্তিবিদ্যা)

    | Notation | Name & Description | Example |
    | --- | --- | --- |
    | $\neg p$ | **Negation** (অস্বীকৃতি / না-বোধক): Logical NOT. | If $p$ is "It is day", $\neg p$ is "It is not day". |
    | $p \land q$ | **Conjunction** (যৌক্তিক সংযোজন): Logical AND. Both must be true. | $x > 0 \land x < 5$ |
    | $p \oplus q$ | **Exclusive OR** (একচেটিয়া বিকল্প): True if exactly one is true (XOR). | You can have tea $\oplus$ coffee (but not both). |
    | $p \rightarrow q$ | **Implication** (শর্তমূলক): If $p$, then $q$. | If it rains $\rightarrow$ the ground gets wet. |
    | $p \leftrightarrow q$ | **Biconditional** (দ্বি-শর্তমূলক): $p$ if and only if $q$. | You pass $\leftrightarrow$ you score above 60. |
    | $\forall x P(x)$ | **Universal Quantification** (সার্বজনীন পরিমাপক): For all $x$. | $\forall x \in \mathbf{R}, x^2 \ge 0$ |
    | $\exists x P(x)$ | **Existential Quantification** (অস্তিত্ববাচক পরিমাপক): There exists an $x$. | $\exists x \in \mathbf{Z}, x - 3 = 0$ |
    | $\therefore$ | **Therefore** (অতএব): Logical conclusion. | $x = 2 \therefore x^2 = 4$ |

    ---

    ### 2. Set Theory (সেট তত্ত্ব)

    | Notation | Name & Description | Example |
    | --- | --- | --- |
    | $\{a_1, \dots, a_n\}$ | **Set Roster Notation** (তালিকা পদ্ধতি): Listing elements. | $\{1, 2, 3, 4\}$ |
    | $\mathbf{Z, N, R}$ | **Standard Number Sets**: Integers (পূর্ণসংখ্যা), Natural numbers (স্বাভাবিক সংখ্যা), Real numbers (বাস্তব সংখ্যা). | $-5 \in \mathbf{Z}$ |
    | $\{x \mid P(x)\}$ | **Set Builder Notation** (গঠন পদ্ধতি): Describes properties of elements. | $\{x \mid x > 0\}$ (All positive numbers) |
    | $x \notin S$ | **Not an Element** (উপাদান নয়): $x$ is not in set $S$. | $4 \notin \{1, 2, 3\}$ |
    | $\emptyset$ | **Empty Set** (ফাঁকা সেট): A set with no elements. | $\{x \mid x \neq x\} = \emptyset$ |
    | $S \subseteq T$ | **Subset** (উপসেট): All elements of $S$ are in $T$. | $\{1, 2\} \subseteq \{1, 2, 3\}$ |
    | $\Vert{}S\Vert{}$ | **Cardinality** (উপাদান সংখ্যা): Number of elements in a set. | $\Vert{}\{a, b, c\}\Vert{} = 3$ |
    | $A \cup B$ | **Union** (সংযোগ): Elements in $A$, $B$, or both. | $\{1\} \cup \{2\} = \{1, 2\}$ |
    | $\overline{A}$ | **Complement** (পূরক): Everything not in $A$. | If universal set is digits, $\overline{\{0, 1\}} = \{2, 3, \dots, 9\}$. |
    | $\bigcup_{i=1}^n A_i$ | **Generalized Union** (সাধারণীকৃত সংযোগ): Union of multiple sets. | $A_1 \cup A_2 \cup \dots \cup A_n$ |

    ---

    ### 3. Functions & Sequences (ফাংশন ও অনুক্রম)

    | Notation | Name & Description | Example |
    | --- | --- | --- |
    | $f : A \rightarrow B$ | **Function Mapping** (ম্যাপিং): Function $f$ maps domain $A$ to codomain $B$. | $f : \mathbf{R} \rightarrow \mathbf{R}$ |
    | $f^{-1}(x)$ | **Inverse Function** (বিপরীত ফাংশন): Reverses the function $f$. | If $f(x) = x + 1$, then $f^{-1}(x) = x - 1$. |
    | $f \circ g$ | **Function Composition** (ফাংশনের সংযোজন): Applying one function to the result of another. | $(f \circ g)(x) = f(g(x))$ |
    | $\lfloor x \rfloor$ | **Floor Function** (সর্বনিম্ন পূর্ণসংখ্যা): Greatest integer less than or equal to $x$. | $\lfloor 3.8 \rfloor = 3$ |
    | $\sum_{\alpha \in S} a_\alpha$ | **Summation** (সমষ্টি): Adding a sequence of numbers. | $\sum_{i=1}^3 i = 1 + 2 + 3 = 6$ |
    | $\prod_{i=1}^n a_i$ | **Product** (গুণফল): Multiplying a sequence of numbers. | $\prod_{i=1}^3 i = 1 \times 2 \times 3 = 6$ |

    ---

    ### 4. Algorithms & Number Theory (অ্যালগরিদম ও সংখ্যা তত্ত্ব)

    | Notation | Name & Description | Example |
    | --- | --- | --- |
    | $O, \Omega, \Theta$ | **Asymptotic Notations** (জটিলতা নির্দেশক): Big-O, Big-Omega, Big-Theta for algorithmic complexity. | Time complexity is $O(n^2)$. |
    | $\min, \max$ | **Minimum, Maximum** (সর্বনিম্ন, সর্বোচ্চ): Smallest or largest value. | $\max(10, 20) = 20$ |
    | $a \mid b$ | **Divides** (বিভাজ্য করে): $a$ divides $b$ without a remainder. | $4 \mid 12$ |
    | $\gcd, \text{lcm}$ | **Greatest Common Divisor, Least Common Multiple** (গসাগু, লসাগু). | $\gcd(8, 12) = 4$ |
    | $\text{mod}$ | **Modulo Operation** (ভাগশেষ): Remainder of division. | $10 \bmod 3 = 1$ |
    | $a \equiv b \pmod m$ | **Congruence** (সমতুল্যতা): $a$ and $b$ have the same remainder when divided by $m$. | $10 \equiv 4 \pmod 3$ |
    | $(a_k \dots a_0)_b$ | **Base Representation** (ভিত্তি): Number represented in base $b$. | $(101)_2$ represents 5 in binary. |

    ---

    ### 5. Matrices, Combinatorics & Graphs (ম্যাট্রিক্স, সমাবেশ ও গ্রাফ)

    | Notation | Name & Description | Example |
    | --- | --- | --- |
    | $[a_{ij}]$ | **Matrix Elements** (ম্যাট্রিক্স উপাদান): A matrix with entries $a_{ij}$. | Matrix $A = [a_{ij}]$ |
    | $A^T$ | **Transpose** (স্থানান্তরিত ম্যাট্রিক্স): Flipping a matrix over its diagonal. | Rows become columns. |
    | $A \odot B$ | **Boolean Product** (বুলিয়ান গুণফল): Product using logical AND/OR instead of multiplication/addition. | Used in adjacency matrices. |
    | $A^{[n]}$ | **Boolean Power**: Multiplying a Boolean matrix by itself $n$ times. | $A^{[2]} = A \odot A$ |
    | $\binom{n}{r}$ | **Combinations** (সমাবেশ): $n$ choose $r$. Ways to choose $r$ items from $n$. | $\binom{5}{2} = 10$ |
    | $C(n; n_1, \dots, n_m)$ | **Multinomial Coefficient** (বহুপদী সহগ): Dividing $n$ items into groups. | $\frac{n!}{n_1! n_2! \dots n_m!}$ |
    | $p(E \mid F)$ | **Conditional Probability** (শর্তাধীন সম্ভাবনা): Probability of $E$ given $F$ happens. | Chance of rain given it is cloudy. |
    | $R^*$ | **Transitive Closure** (ট্রানজিটিভ ক্লোজার): Extension of a relation. | Finding all reachable nodes in a graph. |
    | $\Delta$ | **Symmetric Difference** (প্রতিসম পার্থক্য): Elements in $A$ or $B$, but not both. | $A \Delta B = (A - B) \cup (B - A)$ |
    | $[a]_R$ | **Equivalence Class** (সমতুল্য শ্রেণী): Set of all elements related to $a$ by relation $R$. | Congruence classes in modulo math. |
    | $\text{deg}^+(v)$ | **Out-degree** (বহির্মুখী মাত্রা): Number of edges directed away from vertex $v$. | A node in a web graph linking to 3 pages has $\text{deg}^+ = 3$. |

## Math vs Discrete Math
??? "Math vs Discrete Math"

    ## 1. Discrete Mathematics (বিচ্ছিন্ন গণিত)

    Discrete mathematics is the study of mathematical structures that are fundamentally separate, distinct, and countable. It deals with values that can be counted as individual units.

    **Key Characteristics:**

    * **Countability:** It operates primarily on countable sets, such as the set of Integers (..., -2, -1, 0, 1, 2, ...) or Natural Numbers.
    * **Distinct Values:** The values in discrete math have clear, distinct gaps between them. For example, between the integers 1 and 2, there are no other integers.
    * **Absence of Limits:** Because the data points are separated by empty space, the concepts of infinitesimals, limits, and continuity do not apply. You cannot smoothly transition from one value to the next.
    * **Primary Branches:** Includes Logic, Set Theory, Graph Theory, Combinatorics, and Cryptography.
    * **Real-World Application:** It is the foundational mathematics of Computer Science. Computers operate in discrete states (0s and 1s, true or false) and process data in distinct, quantized chunks.

    ---

    ## 2. Continuous Mathematics (নিরবচ্ছিন্ন গণিত)

    Continuous mathematics is the study of mathematical structures where data can take on any value within a range. It deals with variables that are measured rather than counted, allowing for infinite precision.

    **Key Characteristics:**

    * **Uncountability:** It operates primarily on the set of Real Numbers, which include all rational and irrational numbers.
    * **Density and Smoothness:** Continuous sets are "dense." This means that between any two numbers (no matter how close they are, like 1.1 and 1.11), there are an infinite number of other valid mathematical points.
    * **Limits and Infinitesimals:** Continuous math heavily relies on the concept of the "limit" and infinitesimally small changes. This allows for the study of smooth curves and gradual transitions.
    * **Primary Branches:** Includes Calculus (Differential and Integral), Geometry, Trigonometry, and Real Analysis.
    * **Real-World Application:** It is the mathematical language of the physical sciences (Physics, Chemistry, Engineering) used to describe fluid dynamics, motion, thermodynamics, and electromagnetic fields.

    ---

    ## 3. Academic Comparison Table

    | Feature | Discrete Mathematics | Continuous Mathematics |
    | --- | --- | --- |
    | **Fundamental Operation** | **Counting** elements. | **Measuring** quantities. |
    | **Primary Number Systems** | Integers, Natural numbers, Rational numbers. | Real numbers, Complex numbers. |
    | **Core Concept** | Elements are isolated points. | Elements form a continuous, unbroken spectrum. |
    | **Function Behavior** | Step functions; graphs consist of disconnected dots or nodes. | Continuous functions; graphs form smooth, unbroken lines or curves. |
    | **Method of Change** | Changes occur in sudden, distinct steps or increments. | Changes occur smoothly and gradually over intervals. |
    | **Analytical Tools** | Summations, recurrence relations, matrices, truth tables. | Limits, derivatives, integrals, differential equations. |

??? "Truth Table shortcut"

    Negation / NOT ($\neg$)

    * **শর্টকাট নিয়ম:** **উল্টে যাবে**
    * **ব্যাখ্যা:** True থাকলে False হবে, False থাকলে True হবে।

    ---

    **এক নজরে আপনার চিট শিট (Cheat Sheet):**

    * **AND ($\land$):** শুধু T T = T
    * **OR ($\lor$):** শুধু F F = F
    * **IMPLIES ($\rightarrow$):** শুধু T F = F
    * **BI-COND ($\leftrightarrow$):** জোড়া মিললে T (T T = T, F F = T)
    * **XOR ($\oplus$):** জোড়া মিললে F (T T = F, F F = F)

??? "tautology, contradiction, contingency"

    Acompound proposition that is always true, no matter what the truth values of the proposi
    tional variables that occur in it, is called a **tautology**. A compound proposition that is always false is called a **contradiction**. A compound proposition that is neither a tautology nor a contradiction is called a **contingency**.

??? "Logical Equivalences"
    
    The compound propositions p and q are called logically equivalent if p ↔ q is a tautology. The notation p ≡ q denotes that p and q are logically equivalent

## Assginment Solutions

??? "Assginment Solutions"
  
    17. When three professors are seated in a restaurant, the hostess asks them: “Does everyone want coffee?” The first professor says: “I do not know.” The second professor then says: “I do not know.” Finally, the third professor says: “No,noteveryonewantscoffee.”Thehostesscomes back and gives coffee to the professors who want it. How did she figure out who wanted coffee?

    ### **Solution 17: The Three Professors**

    **Scenario Analysis:**
    The hostess (সেবিকা) asks a single question to the group: “Does *everyone* want coffee?” This implies a logical AND condition: (Professor 1 wants coffee) $\land$ (Professor 2 wants coffee) $\land$ (Professor 3 wants coffee).

    **Logical Deduction:**

    1. **First Professor's Turn:** If the first professor did *not* want coffee, they would instantly know that the answer to "Does *everyone* want coffee?" is "No." Because they answered "I do not know," they must want coffee themselves, but they are unsure about the other two.
    2. **Second Professor's Turn:** By the same logic, if the second professor did *not* want coffee, they would confidently answer "No." Since they also answer "I do not know," they too must want coffee, but remain unsure about the third professor.
    3. **Third Professor's Turn:** The third professor has heard the first two answers and now logically deduces that both Professor 1 and Professor 2 want coffee. Since the third professor answers "No, not everyone wants coffee," it means the chain is broken at them. Therefore, the third professor must *not* want coffee.

    **Conclusion:**
    The hostess figured it out by realizing that **the first and second professors want coffee, but the third professor does not.**

    Exercises 19–23 relate to inhabitants of the island of knights and knaves created by Smullyan, where knights always tell the truth and knaves always lie. You encounter two people, A and B. Determine, if possible, what A and B are if they address you in the ways described. If you cannot determine what these two people are, can you draw any conclusions?

    **23. A says “We are both knaves” and B says nothing.Exercises 24–31 relate to inhabitants of an island on which there are three kinds of people: knights who always tell the    truth, knaves who always lie, and spies (called normals by Smullyan [Sm78]) who can either lie or tell the truth. You encounter three people, A, B, and C.You know one of these people is a knight, one is a knave, and one is a spy. Each of the three people knows the type of person each of other two is.For each of these situations, if possible, determine whether there is a unique solution and determine who the knave, knight, and spy are. When there is no unique solution, list all possible solutions or state that there are no solutions.**


    ### **Solution 23: Knights and Knaves**

    **Definitions:**

    * **Knights** (নাইট / সর্বদা সত্যবাদী): Always tell the truth.
    * **Knaves** (নেভ / সর্বদা মিথ্যাবাদী): Always lie.

    **Scenario:** A says “We are both knaves” and B says nothing.

    **Logical Deduction:**

    1. Assume **A is a knight**. If A is a knight, A must tell the truth. This means both A and B are knaves. However, this contradicts our initial assumption that A is a knight. Therefore, **A cannot be a knight**.
    2. Since A cannot be a knight, **A must be a knave**.
    3. Because A is a knave, A's statement ("We are both knaves") must be a **lie** (মিথ্যা).
    4. For the statement "We are both knaves" to be a lie when we already know A is a knave, it must mean that B is *not* a knave.
    5. Therefore, **B must be a knight**.

    **Conclusion:**
    **A is a knave, and B is a knight.**

    *(Note: The prompt text includes instructions for Exercises 24–31 regarding spies (গুপ্তচর) and finding unique solutions (অনন্য সমাধান), but does not provide the actual sub-questions (the statements made by A, B, and C). Therefore, only Exercise 23 is solved here).*

    43. Construct a combinatorial circuit using inverters, OR gates, and AND gates that produces the output ((¬p ∨¬r)∧¬q)∨(¬p∧(q ∨r))from input bits p, q, and r

    ### **Solution to Exercise 41 (from image_da73e3.png)**

    Based on the provided image **image_da73e3.png**, here are the logical expressions for the combinatorial circuits (সমাবেশগত সার্কিট).

    **Circuit a)**

    1. Input $r$ passes through an inverter (ইনভার্টার), resulting in **$\neg r$**.
    2. Input $q$ and the inverted $r$ ($\neg r$) pass through an OR gate, resulting in **$q \lor \neg r$**.
    3. Input $p$ and the result of the OR gate ($q \lor \neg r$) pass through an AND gate, resulting in **$p \land (q \lor \neg r)$**.
    4. Finally, this entire output passes through an inverter at the very end, negating the whole expression.

    * **Output:** 
    $$\neg(p \land (q \lor \neg r))$$



    **Circuit b)**

    1. **Top Branch:** Input $p$ passes through an inverter to become **$\neg p$**. Input $q$ passes through an inverter to become **$\neg q$**. Both feed into an AND gate, resulting in **$\neg p \land \neg q$**.
    2. **Bottom Branch:** Inputs $p$ and $r$ feed directly into an AND gate, resulting in **$p \land r$**.
    3. **Final Gate:** The outputs from the top branch and the bottom branch feed into an OR gate.

    * **Output:** 
    $$(\neg p \land \neg q) \lor (p \land r)$$



    ### **Solution to Exercise 43: Circuit Construction**

    **Expression:** $((\neg p \lor \neg r) \land \neg q) \lor (\neg p \land (q \lor r))$

    To construct this combinatorial circuit using inputs $p$, $q$, and $r$, follow this step-by-step wiring guide:

    **Step 1: Create the necessary inverted (NOT) inputs**

    * Pass $p$ through an inverter to get $\neg p$.
    * Pass $q$ through an inverter to get $\neg q$.
    * Pass $r$ through an inverter to get $\neg r$.

    **Step 2: Build the Left Sub-expression: $((\neg p \lor \neg r) \land \neg q)$**

    * Feed $\neg p$ and $\neg r$ into an **OR gate**. Output = $(\neg p \lor \neg r)$.
    * Feed the output of that OR gate and $\neg q$ into an **AND gate**. Output = $((\neg p \lor \neg r) \land \neg q)$.

    **Step 3: Build the Right Sub-expression: $(\neg p \land (q \lor r))$**

    * Feed original inputs $q$ and $r$ into an **OR gate**. Output = $(q \lor r)$.
    * Feed $\neg p$ and the output of the OR gate into an **AND gate**. Output = $(\neg p \land (q \lor r))$.

    **Step 4: Final Output**

    * Feed the final outputs from Step 2 and Step 3 into a final **OR gate**.
    * This produces the final required output: **$((\neg p \lor \neg r) \land \neg q) \lor (\neg p \land (q \lor r))$**.

    Here are the step-by-step solutions for both exercises.

    ### **Solution to Exercise 33: Proving Non-Equivalence**

    **Question:** Show that $(p \rightarrow q) \rightarrow (r \rightarrow s)$ and $(p \rightarrow r) \rightarrow (q \rightarrow s)$ are not logically equivalent (যৌক্তিকভাবে সমতুল্য নয়).

    To prove that two compound propositions are not logically equivalent, we only need to find a **counterexample** (পাল্টা উদাহরণ)—a single set of truth values for $p, q, r,$ and $s$ where the two propositions produce different final results.

    Let's test the following assignment of truth values:

    * $p = \text{False (F)}$
    * $q = \text{True (T)}$
    * $r = \text{False (F)}$
    * $s = \text{False (F)}$

    **Evaluating the First Proposition:** $(p \rightarrow q) \rightarrow (r \rightarrow s)$

    1. Evaluate $(p \rightarrow q)$: $(F \rightarrow T)$ is **T**.
    2. Evaluate $(r \rightarrow s)$: $(F \rightarrow F)$ is **T**.
    3. Combine them: $T \rightarrow T$ results in **True**.

    **Evaluating the Second Proposition:** $(p \rightarrow r) \rightarrow (q \rightarrow s)$

    1. Evaluate $(p \rightarrow r)$: $(F \rightarrow F)$ is **T**.
    2. Evaluate $(q \rightarrow s)$: $(T \rightarrow F)$ is **F** *(Remember the rule for implications: $T \rightarrow F$ is the only False scenario)*.
    3. Combine them: $T \rightarrow F$ results in **False**.

    **Conclusion:**
    Because the first proposition evaluates to **True** and the second evaluates to **False** under the exact same conditions ($p=F, q=T, r=F, s=F$), they do not share the same truth table. Therefore, they are **not logically equivalent**.

    ---
    Here are the solutions using Truth Tables (সত্যক সারণি). This is the perfect "exam ready" way to present your answer.

    **Satisfiable or Not:**

    ### a) Determine if Satisfiable: $(p \lor \neg q) \land (\neg p \lor q) \land (\neg p \lor \neg q)$

    **Truth Table:**

    | $p$ | $q$ | $\neg p$ | $\neg q$ | $(p \lor \neg q)$ | $(\neg p \lor q)$ | $(\neg p \lor \neg q)$ | Final Result (All ANDed) |
    | --- | --- | --- | --- | --- | --- | --- | --- |
    | $T$ | $T$ | $F$ | $F$ | $T$ | $T$ | $F$ | **$F$** |
    | $T$ | $F$ | $F$ | $T$ | $T$ | $F$ | $T$ | **$F$** |
    | $F$ | $T$ | $T$ | $F$ | $F$ | $T$ | $T$ | **$F$** |
    | $F$ | $F$ | $T$ | $T$ | $T$ | $T$ | $T$ | **$T$** |

    **Answer for Exam:**
    The proposition is **Satisfiable** (পূরণযোগ্য).
    **Reason:** Looking at the final column, there is at least one $T$ (True) in the last row (when $p=F$ and $q=F$).

    ---

    ### b) Determine if Satisfiable: $(p \rightarrow q) \land (p \rightarrow \neg q) \land (\neg p \rightarrow q) \land (\neg p \rightarrow \neg q)$

    **Truth Table:**

    | $p$ | $q$ | $\neg p$ | $\neg q$ | $(p \rightarrow q)$ | $(p \rightarrow \neg q)$ | $(\neg p \rightarrow q)$ | $(\neg p \rightarrow \neg q)$ | Final Result (All ANDed) |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | $T$ | $T$ | $F$ | $F$ | $T$ | $F$ | $T$ | $T$ | **$F$** |
    | $T$ | $F$ | $F$ | $T$ | $F$ | $T$ | $T$ | $T$ | **$F$** |
    | $F$ | $T$ | $T$ | $F$ | $T$ | $T$ | $T$ | $F$ | **$F$** |
    | $F$ | $F$ | $T$ | $T$ | $T$ | $T$ | $F$ | $T$ | **$F$** |

    **Answer for Exam:**
    The proposition is **Not Satisfiable** (অপূরণযোগ্য).
    **Reason:** Looking at the final column, every single row results in $F$ (False). This is a Contradiction (স্ববিরোধিতা).

    ---

    ### c) Determine if Satisfiable: $(p \leftrightarrow q) \land (\neg p \leftrightarrow q)$

    **Truth Table:**

    | $p$ | $q$ | $\neg p$ | $(p \leftrightarrow q)$ | $(\neg p \leftrightarrow q)$ | Final Result (ANDed) |
    | --- | --- | --- | --- | --- | --- |
    | $T$ | $T$ | $F$ | $T$ | $F$ | **$F$** |
    | $T$ | $F$ | $F$ | $F$ | $T$ | **$F$** |
    | $F$ | $T$ | $T$ | $F$ | $T$ | **$F$** |
    | $F$ | $F$ | $T$ | $T$ | $F$ | **$F$** |

    **Answer for Exam:**
    The proposition is **Not Satisfiable** (অপূরণযোগ্য).
    **Reason:** Looking at the final column, there are no $T$ values. All possible assignments result in $F$.
    

## Rules of Inference
??? "Rules of Interference"

    ![alt text](https://res.cloudinary.com/zopgecx6/image/upload/v1785926929/Rules_of_Interference_kbjhwd.png)

    *Note: In mathematical logic, the correct term is usually **Rules of Inference** (অনুমানের নিয়ম), not "interference". I have prepared the exam notes based on this.*

    **Basic Concept:**
    Rules of Inference are templates to build a valid (বৈধ) argument (যুক্তি). When we have some given true statements, we call them **Premises** (পূর্বশর্ত). By using these rules, we can find a correct **Conclusion** (উপসংহার).

    **Key Terms to Know:**

    * **Proposition (প্রস্তাবনা):** A statement that is either True or False.
    * **Premise (পূর্বশর্ত):** Given fact.
    * **Conclusion (উপসংহার):** Final result.
    * **Valid (বৈধ):** Logically correct.
    * **$\therefore$** = Therefore (অতএব).

    ### Important Rules for Exam

    Here are the main rules you must memorize. The logical (যৌক্তিক) forms are written using standard jargon.

    **1. Modus Ponens (Law of Detachment)**
    If $p$ implies $q$, and $p$ is true, then $q$ is true.

    * **Premise 1:** $p \rightarrow q$
    * **Premise 2:** $p$
    * **Conclusion:** $\therefore q$

    **2. Modus Tollens**
    If $p$ implies $q$, but $q$ is false, then $p$ must be false.

    * **Premise 1:** $p \rightarrow q$
    * **Premise 2:** $\neg q$
    * **Conclusion:** $\therefore \neg p$

    **3. Hypothetical Syllogism (শর্তসাপেক্ষ যুক্তিবিন্যাস)**
    Chain reaction rule. If $p$ leads to $q$, and $q$ leads to $r$, then $p$ directly leads to $r$.

    * **Premise 1:** $p \rightarrow q$
    * **Premise 2:** $q \rightarrow r$
    * **Conclusion:** $\therefore p \rightarrow r$

    **4. Disjunctive Syllogism (বিকল্প যুক্তিবিন্যাস)**
    You have two choices ($p$ OR $q$). If one choice is false, the other must be true.

    * **Premise 1:** $p \lor q$
    * **Premise 2:** $\neg p$
    * **Conclusion:** $\therefore q$

    **5. Addition**
    If $p$ is true, you can add ANY new proposition ($q$) with an "OR" ($\lor$) and the whole statement remains true.

    * **Premise:** $p$
    * **Conclusion:** $\therefore p \lor q$

    **6. Simplification (সরলীকরণ)**
    If $p$ AND $q$ are both true together, you can separate them. It means $p$ alone is true.

    * **Premise:** $p \land q$
    * **Conclusion:** $\therefore p$  (You can also write $\therefore q$)

    **7. Conjunction (সংযোজন)**
    If two separate premises are true, you can join them with an "AND" ($\land$).

    * **Premise 1:** $p$
    * **Premise 2:** $q$
    * **Conclusion:** $\therefore p \land q$

    **8. Resolution (সমাধান)**
    Used a lot in computer science. If $p$ is OR-ed with $q$, and the opposite of $p$ ($\neg p$) is OR-ed with $r$, then $q$ OR $r$ must be true.

    * **Premise 1:** $p \lor q$
    * **Premise 2:** $\neg p \lor r$
    * **Conclusion:** $\therefore q \lor r$


## Counting:

??? "Topic: Counting (গণনা)"

    In Discrete Mathematics, Counting is used to find the total number of ways a task or procedure (প্রক্রিয়া) can be done. For your exam, you need to memorize these main rules and formulas.

    #### 1. The Product Rule (গুণন বিধি)

    * If a procedure can be broken down into a sequence of two tasks.


    * If task 1 can be done in $n_1$ ways, and task 2 can be done in $n_2$ ways.


    * Total ways to do the whole procedure = $n_1 \times n_2$ ways.


    * **Key hint for exam:** Look for the word "AND" (এবং). If you must do Task 1 AND Task 2, you multiply.
    * **Example:** Making a password where you select a letter AND a digit.



    #### 2. The Sum Rule (যোগ বিধি)

    * If a task can be done in either $n_1$ ways OR $n_2$ ways.


    * None of the $n_1$ ways is the same as the $n_2$ ways (they are mutually exclusive - পরস্পর বর্জনশীল).


    * Total ways = $n_1 + n_2$ ways.


    * **Key hint for exam:** Look for the word "OR" (অথবা). If you do Task 1 OR Task 2, you add.

    #### 3. The Subtraction Rule / Principle of Inclusion-Exclusion (অন্তর্ভুক্তি-বর্জন নীতি)

    * Sometimes, two tasks have common ways to do them. If we just add them, we get an overcount (অতিরিক্ত গণনা) because we counted the common things twice.


    * To get the correct number, we must subtract the common ways.


    * **Formula:** $\vert{}A_1 \cup A_2\vert{} = \vert{}A_1\vert{} + \vert{}A_2\vert{} - \vert{}A_1 \cap A_2\vert{}$.


    * **Example:** Selecting a student who is a CS major OR a Business major, minus those who double major in both.



    #### 4. The Pigeonhole Principle (পায়রার খোপ নীতি)

    * If $k$ is a positive integer and $k + 1$ or more objects (বস্তু) are placed into $k$ boxes.


    * Then there is at least one box that contains two or more objects.


    * **Example:** If there are 367 people, at least two people must share the exact same birthday because there are only 366 possible birthdays in a year.



    ---

    ### Permutations and Combinations

    This is the most important part for math problems.

    #### 5. Permutations (বিন্যাস)

    * A permutation is an **ordered arrangement** (সাজানো ক্রম) of a set of distinct objects.


    * **Order matters** (ক্রম গুরুত্বপূর্ণ). Example: $ABC$ is different from $BCA$.
    * The number of $r$-permutations from a set of $n$ elements is denoted by $P(n, r)$.


    * **Formula:**

    $$P(n, r) = n(n - 1)(n - 2) \dots (n - r + 1)$$




    *(Also commonly written in Indian YT tutorials as: $P(n, r) = \frac{n!}{(n-r)!}$)*

    #### 6. Combinations (সমাবেশ)

    * An $r$-combination is an **unordered selection** (ক্রমহীন নির্বাচন) of $r$ elements from a set.


    * **Order does not matter** (ক্রম বিবেচ্য নয়). Example: Selecting team members $\{A, B, C\}$ is the same as $\{C, B, A\}$.
    * The number of $r$-combinations of a set with $n$ elements is denoted by $C(n, r)$ or binomial coefficient (দ্বিপদী সহগ) $\binom{n}{r}$.


    * **Formula:**

    $$C(n, r) = \frac{n!}{r!(n-r)!}$$

##  Example: Password

??? "Example: Password"
    
    **Example Each user on a computer system has a password, which is six to eight characters long, where each character is an uppercase letter or a digit. Each password must contain at least one digit. How many possible passwords are there?**

    This problem combines the **Product Rule (গুণন বিধি)**, the **Sum Rule (যোগ বিধি)**, and a very famous counting trick.

    **The "At Least One" Trick (বিপরীত কৌশল):**
    Finding "at least one digit" (অন্তত একটি অঙ্ক) directly is very hard. Instead, we find the **Total Possible Passwords** and subtract the passwords with **NO Digits** (only letters).

    * **Formula:** Valid Passwords = (Total Passwords) - (Passwords with NO digits).



    ---

    ### Step-by-Step Calculation (গণনা)

    **1. Identify Available Characters (অক্ষরসমূহ):**

    * Uppercase letters = 26
    * Digits = 10
    * Total characters available to choose from = 36.



    **2. Calculate for Length 6 ($P_6$):**

    * Total 6-character passwords = $36^6$ (Using Product Rule: 36 options for 1st spot AND 36 for 2nd spot...).


    * Passwords with NO digits (only 26 letters used) = $26^6$.


    * Valid 6-character passwords ($P_6$) = $36^6 - 26^6 = 1,867,866,560$.



    **3. Calculate for Length 7 ($P_7$):**

    * Total 7-character passwords = $36^7$.


    * Passwords with NO digits = $26^7$.


    * Valid 7-character passwords ($P_7$) = $36^7 - 26^7 = 70,332,353,920$.



    **4. Calculate for Length 8 ($P_8$):**

    * Total 8-character passwords = $36^8$.


    * Passwords with NO digits = $26^8$.


    * Valid 8-character passwords ($P_8$) = $36^8 - 26^8 = 2,612,282,842,880$.



    **5. Apply the Sum Rule (যোগ বিধি):**

    * The password can be exactly 6 characters OR 7 characters OR 8 characters long. Because it is an "OR" situation, we add them together.


    * Total Possible Passwords ($P$) = $P_6 + P_7 + P_8$.



    $$Total = 1,867,866,560 + 70,332,353,920 + 2,612,282,842,880$$

    **Final Answer:**
    There are exactly 2,684,483,063,360 possible passwords.

## A computer company receives 350 applications from computer graduates for a job planning a line of new Web servers. Suppose that 220 of these applicants majored in computer science, 147 majored in business, and 51 majored both in computer science and in business. How many of these applicants majored neither in computer science nor in business?

??? "A computer company receives 350 applications from computer graduates for a job planning a line of new Web servers. Suppose that 220 of these applicants majored in computer science, 147 majored in business, and 51 majored both in computer science and in business. How many of these applicants majored neither in computer science nor in business?"

    ### Concept: The Subtraction Rule (বিয়োগ বিধি / অন্তর্ভুক্তি-বর্জন নীতি)

    Sometimes, when you use the Sum Rule (যোগ বিধি) for an "OR" situation, the two options have some common elements. If you simply add them together, you count those common elements twice. This is called an **overcount (অতিরিক্ত গণনা)**.

    To get the correct number, you must add the two groups and then **subtract the overlap**.

    **The Formula:**


    $$\vert{}A_1 \cup A_2\vert{} = \vert{}A_1\vert{} + \vert{}A_2\vert{} - \vert{}A_1 \cap A_2\vert{}$$

    * $\vert{}A_1 \cup A_2\vert{}$ = Elements in $A_1$ OR $A_2$ (or both)


    * $\vert{}A_1\vert{}$ = Elements in $A_1$

    * $\vert{}A_2\vert{}$ = Elements in $A_2$

    * $\vert{}A_1 \cap A_2\vert{}$ = Elements in BOTH $A_1$ AND $A_2$ (the overlap)



    ---

    ### Step-by-Step Explanation of the Example

    **The Problem:** Out of 350 total applicants, 220 are CS majors, 147 are Business majors, and 51 double-majored in BOTH. How many majored in NEITHER (কোনোটিই নয়)?

    **1. Identify the Data (প্রদত্ত তথ্য):**

    * Total Applicants ($Total$) = 350


    * CS Majors ($\vert{}A_1\vert{}$) = 220


    * Business Majors ($\vert{}A_2\vert{}$) = 147


    * Both CS & Business ($\vert{}A_1 \cap A_2\vert{}$) = 51



    **2. Step 1: Find those who majored in CS *OR* Business (অন্তত একটিতে মেজর):**
    Using the Subtraction Rule, we find the total number of unique students who are in at least one of these two fields.


    $$\vert{}A_1 \cup A_2\vert{} = \vert{}A_1\vert{} + \vert{}A_2\vert{} - \vert{}A_1 \cap A_2\vert{}$$

    $$\vert{}A_1 \cup A_2\vert{} = 220 + 147 - 51$$

    $$\vert{}A_1 \cup A_2\vert{} = 316$$


    *Meaning: There are 316 students who have a major in CS, Business, or both.*

    **3. Step 2: Find the "Neither" (কোনোটিই নয়):**
    The question asks for the students who did *not* major in either of these fields. You simply subtract the result of Step 1 from the total number of applicants.


    $$Neither = Total - \vert{}A_1 \cup A_2\vert{}$$

    $$Neither = 350 - 316$$

    $$Neither = 34$$

    **Final Answer:**
    There are 34 applicants who majored in neither computer science nor business.
    

## Pigeonhole Principle related probs.

??? "Pigeonhole Principle related probs."

   
    ### 1. Prove the Generalized Pigeonhole Principle (সাধারণ পায়রার খোপ নীতি)

    **Statement (বিবৃতি):**
    If $N$ objects (বস্তু) are placed into $k$ boxes (বাক্স), then there is at least one box containing at least $\lceil N/k \rceil$ objects.

    **Proof by Contradiction (স্ববিরোধিতা দ্বারা প্রমাণ):**

    * **Step 1:** Let us assume the opposite. Suppose that *no* box contains at least $\lceil N/k \rceil$ objects.
    * **Step 2:** This means every single box contains a maximum of $\lceil N/k \rceil - 1$ objects.
    * **Step 3:** Since there are $k$ boxes, the total number of objects in all boxes together must be at most:

    $$Total \le k \times \left( \lceil \frac{N}{k} \rceil - 1 \right)$$


    * **Step 4:** We know from the definition of the ceiling function (সিলিং ফাংশন) that $\lceil N/k \rceil < (N/k) + 1$.
    Therefore, $\lceil N/k \rceil - 1 < N/k$.
    * **Step 5:** Substituting this inequality (অসমতা) into our total, we get:

    $$Total < k \times \left( \frac{N}{k} \right)$$


    $$Total < N$$


    * **Conclusion:** This is a clear contradiction (স্ববিরোধিতা) because we already know there are exactly $N$ objects. Our initial assumption was wrong. Therefore, at least one box must contain at least $\lceil N/k \rceil$ objects. (Proved)

    ---

    ### 2. Find minimum students to guarantee three born in the same month.

    **Given Data:**

    * **Pigeonholes ($k$):** The number of months in a year = 12.
    * **Target ($r$):** The guaranteed number of students in the same month = 3.
    * **Pigeons ($N$):** The minimum number of students needed = ?

    **Calculation Strategy (গণনার কৌশল):**
    We use the **worst-case scenario** (সবচেয়ে খারাপ অবস্থা) method.

    1. Imagine we select students in such a way that every month gets the maximum possible students *without* reaching our target of 3. So, we pick exactly 2 students for each of the 12 months.
    2. Total students picked so far = $12 \times 2 = 24$.
    3. If we bring in just **1 more student**, that student must be born in one of the 12 months. This makes that particular month have $2 + 1 = 3$ students.

    **Formula:**


    $$N = k \times (r - 1) + 1$$

    $$N = 12 \times (3 - 1) + 1$$

    $$N = 12 \times 2 + 1$$

    $$N = 25$$

    **Answer:** A minimum of **25** students is needed to guarantee three are born in the same month.

    ---

    ### 3. Minimum students to guarantee five in the same class among four class years.

    *(Note: This same problem appears across three different images for Freshman, Sophomore, Junior, Senior)*

    **Given Data:**

    * **Pigeonholes ($k$):** The number of class years (Freshman, Sophomore, Junior, Senior - শ্রেণি) = 4.
    * **Target ($r$):** The guaranteed number of students in the same class = 5.
    * **Pigeons ($N$):** The minimum number of students needed = ?

    **Calculation Strategy:**
    Again, we apply the worst-case scenario.

    1. Suppose we pick exactly 4 students for each of the 4 classes. We have not reached 5 students in any class yet.
    2. Total students picked so far = $4 \times 4 = 16$.
    3. The very next student (the 17th student) must belong to one of these 4 classes, making the count for that class exactly 5.

    **Formula:**


    $$N = k \times (r - 1) + 1$$

    $$N = 4 \times (5 - 1) + 1$$

    $$N = 4 \times 4 + 1$$

    $$N = 17$$

    **Answer:** A minimum of **17** students is needed to guarantee that five are in the same class.


## Set & Function Revision

??? "Set & Function Revision"
    
    
    ### 1. SETS (সেট) - Complete Topics

    **Basic Definitions & Describing Sets (বর্ণনা করার পদ্ধতি):**

    * **Set (সেট):** An unordered collection (এলোমেলো সংগ্রহ) of objects.


    * *Example:* The set $V$ of vowels is $V=\{a, e, i, o, u\}$.




    * **Set Builder Notation (সেট গঠন পদ্ধতি):** Describing a set by stating the properties its members must have.


    * *Example:* The set $O$ of odd positive integers less than 10 is $O=\{x \vert{} (x \in \mathbb{N}) \land (x < 10) \land (x \text{ is odd})\}$.




    * **Important Sets (গুরুত্বপূর্ণ সেট):**
    * $\mathbb{N} = \{0, 1, 2, ...\}$ (Natural numbers / স্বাভাবিক সংখ্যা).


    * $\mathbb{Z} = \{..., -2, -1, 0, 1, 2, ...\}$ (Integers / পূর্ণসংখ্যা).


    * $\mathbb{Z}^+ = \{1, 2, 3, ...\}$ (Positive integers).


    * $\mathbb{Q}$ = Rational numbers (মূলদ সংখ্যা).


    * $\mathbb{R}$ = Real numbers (বাস্তব সংখ্যা).





    **Set Relationships & Properties:**

    * **Equality (সমতা):** Two sets are equal if they have the exact same elements.


    * *Example:* $\{1, 3, 5\} = \{3, 5, 1\}$.




    * **Empty Set & Singleton (ফাঁকা ও একক সেট):** Empty set $\emptyset$ has zero elements. Singleton has exactly one element.


    * **Subset (উপসেট):** $A \subseteq B$ means every element of $A$ is in $B$.


    * *Key Rules:* The empty set is a subset of all sets ($\emptyset \subseteq S$). Every set is a subset of itself ($S \subseteq S$).




    * **Proper Subset (প্রকৃত উপসেট):** $A \subset B$ means $A$ is a subset of $B$, but $A \neq B$.


    * **Cardinality (উপাদান সংখ্যা):** Number of distinct elements in a finite set, denoted by $\vert{}S\vert{}$.


    * *Example:* If $S = \{a, b, c\}$, then $\vert{}S\vert{} = 3$.


    * **Power Set (শক্তি সেট):** The set of all subsets of $S$, denoted $P(S)$. If $\vert{}S\vert{} = n$, then $\vert{}P(S)\vert{} = 2^n$.


    * *Example:* If $S = \{0, 1, 2\}$, then $P(S) = \{\emptyset, \{0\}, \{1\}, \{2\}, \{0, 1\}, \{0, 2\}, \{1, 2\}, \{0, 1, 2\}\}$.





    **Tuples & Cartesian Product:**

    * **Ordered n-tuple (ক্রমিক এন-টাপল):** An ordered collection of $n$ elements $(a_1, a_2, ..., a_n)$. 2-tuples are called ordered pairs (ক্রমজোড়).


    * **Cartesian Product (কার্তেসীয় গুণজ):** $A \times B$ is the set of all ordered pairs $(a, b)$ where $a \in A$ and $b \in B$.


    * *Example:* If $A = \{1, 2\}$ and $B = \{a, b, c\}$, then $A \times B = \{(1,a), (1,b), (1,c), (2,a), (2,b), (2,c)\}$.





    **Set Operations (সেট অপারেশন):**

    * **Union (সংযোগ):** $A \cup B$ contains elements in $A$ OR $B$ (or both).


    * **Intersection (ছেদ):** $A \cap B$ contains elements in BOTH $A$ AND $B$.


    * **Disjoint Sets (বিচ্ছিন্ন সেট):** Two sets are disjoint if $A \cap B = \emptyset$.


    * **Difference (অন্তর):** $A - B$ contains elements in $A$ but NOT in $B$.


    * **Symmetric Difference (প্রতিসম অন্তর):** $A \oplus B$ contains elements in either $A$ or $B$, but NOT in both.


    * **Complement (পূরক):** $\overline{A}$ contains elements in the universal set $U$ but NOT in $A$.


    * **Generalized Union/Intersection (সাধারণকৃত সংযোগ/ছেদ):** Union or intersection of multiple sets, denoted by $\bigcup_{i=1}^n A_i$ and $\bigcap_{i=1}^n A_i$.



    **Important Set Tools:**

    * **Principle of Inclusion-Exclusion (অন্তর্ভুক্তি-বর্জন নীতি):** $\vert{}A \cup B\vert{} = \vert{}A\vert{} + \vert{}B\vert{} - \vert{}A \cap B\vert{}$.


    * **Set Identities (সেট অভেদ):** Rules used to simplify sets, like De Morgan's laws ($\overline{A \cup B} = \overline{A} \cap \overline{B}$), Distributive laws, and Absorption laws.


    * **Membership Table (সদস্যপদ সারণি):** A table using 1s and 0s (like a truth table) to prove Set Identities.



    ---

    ### 2. FUNCTIONS (ফাংশন) - Complete Topics

    **Basic Definitions:**

    * **Function (ফাংশন):** $f: A \rightarrow B$ assigns exactly one element of $B$ to each element of $A$.


    * **Domain & Codomain (ডোমেইন ও কোডোমেইন):** $A$ is the Domain, $B$ is the Codomain.


    * **Image & Preimage (প্রতিচ্ছবি ও প্রাক-প্রতিচ্ছবি):** If $f(a) = b$, $b$ is the image of $a$, and $a$ is the preimage of $b$.


    * **Range (রেঞ্জ):** The set of all images.


    * **Image of a Subset (উপসেটের প্রতিচ্ছবি):** If $S \subseteq A$, $f(S)$ is the set of images of the elements in $S$.


    * *Example:* If $S = \{c, d\}$ and $f(c)=z, f(d)=z$, then $f(S) = \{z\}$.



    
    **Types of Functions:**

    ![DIFFERENT TYPES OF MATHEMATICAL FUNCTIONS THE ARCHER AND TARGET EXAM TRICK](https://res.cloudinary.com/zopgecx6/image/upload/v1786041662/DIFFERENT_TYPES_OF_MATHEMATICAL_FUNCTIONS_THE_ARCHER_AND_TARGET_EXAM_TRICK_avzwdq.png)


    * **Injective / One-To-One (এক-এক):** $f(a) = f(b)$ implies $a = b$.


    * *Example:* Every student in a class has a unique ID number. No two students share the same ID.


    * **Surjective / Onto (সার্বিক):** Every element $b \in B$ has an element $a \in A$ with $f(a) = b$. Range equals Codomain.


    * *Example:* Every seat in a classroom is taken. There are no empty seats in the Codomain.


    * **Bijective / One-To-One Correspondence (বাইজেক্টিভ):** A function that is BOTH injective and surjective.



    **Function Operations:**

    * **Addition & Product (যোগ ও গুণ):** $(f_1 + f_2)(x) = f_1(x) + f_2(x)$, and $(f_1 f_2)(x) = f_1(x)f_2(x)$.


    * **Composition (সংযোজন):** $(f \circ g)(a) = f(g(a))$.


    * *Example:* Applying function $g$ first, then putting that result inside function $f$.



    **Inverses & Identity:**

    * **Identity Function (অভেদক ফাংশন):** $1_X(x) = x$ for all $x \in X$. It maps an element to itself.


    * **Inverse Function (বিপরীত ফাংশন):** If $f(a) = b$, then $f^{-1}(b) = a$. A function must be a bijection to have an inverse.


    * **Left and Right Inverse (বাম ও ডান বিপরীত):**
    * Function $g$ is a **Left Inverse** of $f$ if $g \circ f = 1_X$.


    * *Theorem:* A function is injective if and only if it has a left inverse.




    * Function $g$ is a **Right Inverse** of $f$ if $f \circ g = 1_Y$.


    * *Theorem:* A function is surjective if and only if it has a right inverse.




    * If a function has both, it is bijective, and the inverse is unique (অনন্য).



## 

??? "Set Related Question and Solutions"
    
    
    ### Group 1: Set Proofs and Membership Tables

    **Questions Included:**

    * Show that if A, B and C are sets, then $\overline{A\cap B\cap C}=\bar A\cup\bar B\cup\bar C$: (i) by showing each side is a subset of the other side; (ii) using a membership table. *(Term 151 Q2a, Term 161 Q2a)*
    * Define Set, Power Set and Proper Set. Using membership table show that $\overline{A\cup(B\cap C)}=(\bar C\cup\bar B)\cap\bar A$. *(Term 181 Q2a, Term 201 Q3a, Term 211 Q3a)*

    **Definitions:**

    * **Set**: An unordered collection of distinct objects.
    * **Power Set**: The set of all subsets of a given set, including the empty set and the set itself.
    * **Proper Set (Subset)**: A set A is a proper subset of a set B if all elements of A are also in B, but A is not exactly equal to B.

    **Solution: Subset Proof for $\overline{A\cap B\cap C}=\bar A\cup\bar B\cup\bar C$**
    To show $X = Y$, we must prove $X \subseteq Y$ and $Y \subseteq X$.

    * **Part 1 ($\overline{A\cap B\cap C} \subseteq \bar A\cup\bar B\cup\bar C$):** Let $x \in \overline{A\cap B\cap C}$. This means $x \notin (A\cap B\cap C)$. Therefore, it is false that $x$ is in all three sets. So, $x \notin A$, or $x \notin B$, or $x \notin C$. This translates to $x \in \bar A$, or $x \in \bar B$, or $x \in \bar C$. Thus, $x \in \bar A\cup\bar B\cup\bar C$.
    * **Part 2 ($\bar A\cup\bar B\cup\bar C \subseteq \overline{A\cap B\cap C}$):** Let $x \in \bar A\cup\bar B\cup\bar C$. This means $x \in \bar A$, or $x \in \bar B$, or $x \in \bar C$. Consequently, $x \notin A$, or $x \notin B$, or $x \notin C$. Therefore, $x$ cannot be in the intersection $A\cap B\cap C$. Thus, $x \in \overline{A\cap B\cap C}$.

    **Solution: Membership Table for $\overline{A\cap B\cap C}=\bar A\cup\bar B\cup\bar C$**

    | A | B | C | $A\cap B\cap C$ | $\overline{A\cap B\cap C}$ | $\bar A$ | $\bar B$ | $\bar C$ | $\bar A\cup\bar B\cup\bar C$ |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | 1 | 1 | 1 | 1 | **0** | 0 | 0 | 0 | **0** |
    | 1 | 1 | 0 | 0 | **1** | 0 | 0 | 1 | **1** |
    | 1 | 0 | 1 | 0 | **1** | 0 | 1 | 0 | **1** |
    | 1 | 0 | 0 | 0 | **1** | 0 | 1 | 1 | **1** |
    | 0 | 1 | 1 | 0 | **1** | 1 | 0 | 0 | **1** |
    | 0 | 1 | 0 | 0 | **1** | 1 | 0 | 1 | **1** |
    | 0 | 0 | 1 | 0 | **1** | 1 | 1 | 0 | **1** |
    | 0 | 0 | 0 | 0 | **1** | 1 | 1 | 1 | **1** |

    **Solution: Membership Table for $\overline{A\cup(B\cap C)}=(\bar C\cup\bar B)\cap\bar A$**

    | A | B | C | $B\cap C$ | $A\cup(B\cap C)$ | $\overline{A\cup(B\cap C)}$ | $\bar C$ | $\bar B$ | $\bar A$ | $\bar C\cup\bar B$ | $(\bar C\cup\bar B)\cap\bar A$ |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | 1 | 1 | 1 | 1 | 1 | **0** | 0 | 0 | 0 | 0 | **0** |
    | 1 | 1 | 0 | 0 | 1 | **0** | 1 | 0 | 0 | 1 | **0** |
    | 1 | 0 | 1 | 0 | 1 | **0** | 0 | 1 | 0 | 1 | **0** |
    | 1 | 0 | 0 | 0 | 1 | **0** | 1 | 1 | 0 | 1 | **0** |
    | 0 | 1 | 1 | 1 | 1 | **0** | 0 | 0 | 1 | 0 | **0** |
    | 0 | 1 | 0 | 0 | 0 | **1** | 1 | 0 | 1 | 1 | **1** |
    | 0 | 0 | 1 | 0 | 0 | **1** | 0 | 1 | 1 | 1 | **1** |
    | 0 | 0 | 0 | 0 | 0 | **1** | 1 | 1 | 1 | 1 | **1** |

    ---

    ### Group 2: Set Operations and Logic Equivalences

    **Questions Included:**

    * Prove that (i) $(A\cup B)\cap(A\cup B')=A$; (ii) $(A\cup B)\setminus(A\cap B)=(A\setminus B)\cup(B\setminus A)$. *(Term 171 Q2b)*
    * Suppose that $U=\{0,1,2,3,4,5,6,7,8,9,10\}$, $A=\{1,2,3,4,5\}$ and $B=\{4,5,6,7,8\}$. Find (i) $A\cup B$; (ii) $A\cap B$; (iii) Complement of B; (iv) $A-B$. *(Term 211 Q3a)*
    * What is the Cartesian product $A\times B\times C$, where $A=\{2,4\}$, $B=\{3,5\}$, and $C=\{x,y,z\}$? *(Term 211 Q3b)*

    **Solution for Set Proofs:**

    * **Part (i):**

    $(A\cup B)\cap(A\cup B') = A \cup (B \cap B')$

    (by Distributive Law)

    $= A \cup \emptyset$

    (by Complement Law)

    $= A$

    (by Identity Law)
    * **Part (ii):**

    $(A\cup B)\setminus(A\cap B) = (A\cup B) \cap (A\cap B)'$

    (Definition of Difference)

    $= (A\cup B) \cap (A' \cup B')$

    (De Morgan's Law)

    $= (A \cap (A'\cup B')) \cup (B \cap (A'\cup B'))$

    (Distributive Law)

    $= (A\cap A') \cup (A\cap B') \cup (B\cap A') \cup (B\cap B')$

    (Distributive Law)

    $= \emptyset \cup (A\cap B') \cup (B\cap A') \cup \emptyset$

    (Complement Law)

    $= (A\setminus B) \cup (B\setminus A)$

    (Identity Law & Definition of Difference)

    **Solution for Basic Set Operations:**

    * (i) $A\cup B = \{1, 2, 3, 4, 5, 6, 7, 8\}$
    * (ii) $A\cap B = \{4, 5\}$
    * (iii) Complement of B ($\bar B$) = $\{0, 1, 2, 3, 9, 10\}$
    * (iv) $A-B = \{1, 2, 3\}$

    **Solution for Cartesian Product:**
    $A\times B\times C$ is the set of all possible ordered triplets taking one element from each set sequentially:
    $\{(2,3,x), (2,3,y), (2,3,z), (2,5,x), (2,5,y), (2,5,z), (4,3,x), (4,3,y), (4,3,z), (4,5,x), (4,5,y), (4,5,z)\}$

    ---

    ### Group 3: Subsets and Equality

    **Questions Included:**

    * Suppose that $A=\{2,4,6\}$, $B=\{2,6\}$, $C=\{4,6\}$ and $D=\{4,6,8\}$. Determine which of these sets are subsets of other three sets. *(Term 181 Q2b)*
    * Determine whether each of the following pairs of sets is equal: (i) $\{1,3,3,3,5,5,5,5,5\}$ and $\{5,3,1\}$; (ii) $\{\{1\}\}$ and $\{1,\{1\}\}$. *(Term 181 Q2c)*

    **Solution for Subsets:**

    * $B \subseteq A$ (because elements 2 and 6 are in A)
    * $C \subseteq A$ (because elements 4 and 6 are in A)
    * $C \subseteq D$ (because elements 4 and 6 are in D)

    **Solution for Set Equality:**

    * (i) **Equal.** Sets only care about distinct membership, not the frequency of duplicates or the order of listing.
    * (ii) **Not Equal.** The first set has exactly one element (the set $\{1\}$). The second set has two distinct elements (the number $1$, and the set $\{1\}$).

    ---

    ### Group 4: Function Properties and Compositions

    **Questions Included:**

    * Let $A=\{a,b,c\}$, $B=\{1,2,3\}$, $C=\{w,x,y,z\}$, $D=\{4,5,6\}$ and the functions $f:A\to B$, $g:B\to C$, and $h:C\to D$ be determined as $f=\{(a,2),(b,1),(c,2)\}$, $g=\{(1,y),(2,x),(3,w)\}$ and $h=\{(x,4),(y,6),(z,4),(w,5)\}$. (i) Determine if each function is onto, one-to-one. Explain. (ii) Find the composition function $h\circ g\circ f$. *(Term 171 Q2a, Term 191 Q2a, Term 201 Q5a)*
    * Let f and g be the functions from the set of integers to the set of integers defined by $f(x)=2x+3$ and $g(x)=3x+2$. What is the composition of f and g? What is the composition of g and f? *(Term 181 Q3b, Term 211 Q3c)*

    **Solution for Properties of $f$, $g$, and $h$:**

    * **Function $f$:** Not one-to-one because elements $a$ and $c$ map to the same value ($f(a) = f(c) = 2$). Not onto because the element $3 \in B$ does not have a preimage in A.
    * **Function $g$:** One-to-one because every element in the domain maps to a unique element in the codomain. Not onto because the element $z \in C$ has no preimage.
    * **Function $h$:** Not one-to-one because $h(x) = h(z) = 4$. Onto because the range is $\{4, 5, 6\}$, which completely covers codomain $D$.

    **Solution for Composition $h\circ g\circ f$:**
    Evaluate sequentially from right to left for each element in A:

    * $a \xrightarrow{f} 2 \xrightarrow{g} x \xrightarrow{h} 4 \implies (a, 4)$
    * $b \xrightarrow{f} 1 \xrightarrow{g} y \xrightarrow{h} 6 \implies (b, 6)$
    * $c \xrightarrow{f} 2 \xrightarrow{g} x \xrightarrow{h} 4 \implies (c, 4)$
    * Result: $h\circ g\circ f = \{(a,4), (b,6), (c,4)\}$

    **Solution for Equation Compositions:**

    * $(f\circ g)(x) = f(g(x)) = 2(3x+2) + 3 = 6x + 4 + 3 = 6x + 7$
    * $(g\circ f)(x) = g(f(x)) = 3(2x+3) + 2 = 6x + 9 + 2 = 6x + 11$

    ---

    ### Group 5: Domain and Range

    **Questions Included:**

    * Find the domain and range of these functions: (i) the function that assigns to each bit string the number of ones in the string minus the number of zeros; (ii) the function that assigns to each bit string twice the number of zeros; (iii) the function that assigns the number of bits left over when a bit string is split into bytes; (iv) the function that assigns to each positive integer the largest perfect square not exceeding this integer. *(Term 151 Q2d, Term 161 Q2d)*

    **Solutions:**

    * (i) **Domain:** The set of all valid bit strings. **Range:** The set of all integers ($\mathbb{Z}$).
    * (ii) **Domain:** The set of all valid bit strings. **Range:** The set of all non-negative even integers ($\{0, 2, 4, 6, 8, \dots\}$).
    * (iii) **Domain:** The set of all valid bit strings. **Range:** The set of integers from 0 to 7 ($\{0, 1, 2, 3, 4, 5, 6, 7\}$).
    * (iv) **Domain:** The set of all positive integers ($\mathbb{Z}^+$). **Range:** The set of all perfect squares ($\{1, 4, 9, 16, 25, 36, \dots\}$).

    ---

    ### Group 6: Relations and Matrices

    **Questions Included:**

    * Let $A=\{1,2,3\}$, $B=\{a,b,c\}$, $C=\{x,y,z\}$. Consider the relation R from A to B and S from B to C: $R=\{(1,b),(2,a),(2,c),(3,b)\}$; $S=\{(a,y),(c,z),(c,y),(b,x)\}$. Find (i) the composition relation $R\circ S$; (ii) the matrices $M_R$, $M_S$, $M_{R\circ S}$. *(Term 201 Q5b)*

    **Solution for Composition Relation $R\circ S$:**
    The composition relation connects elements from set A directly to C by bridging through B.

    * From $1$: $1 R b$ and $b S x \implies (1,x)$
    * From $2$: $2 R a$ and $a S y \implies (2,y)$
    $2 R c$ and $c S z, c S y \implies (2,z)$ and $(2,y)$
    * From $3$: $3 R b$ and $b S x \implies (3,x)$
    * Result: $R\circ S = \{(1,x), (2,y), (2,z), (3,x)\}$

    **Solution for Matrices:**
    Matrix $M_R$ (Rows $1,2,3$; Columns $a,b,c$):


    $$M_R = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}$$

    Matrix $M_S$ (Rows $a,b,c$; Columns $x,y,z$):


    $$M_S = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}$$

    Matrix $M_{R\circ S}$ using Boolean multiplication ($M_R \odot M_S$) (Rows $1,2,3$; Columns $x,y,z$):


    $$M_{R\circ S} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 0 \end{pmatrix}$$

    ---

    ### Group 7: Advanced Set Theory Application

    **Questions Included:**

    * Suppose that Hilbert's Grand Hotel is fully occupied on the day the hotel expands to a second building which also contains a countably infinite number of rooms. Show that the current guests can be spread out to fill every room of the two buildings of the hotel. *(Term 151 Q2e, Term 161 Q2e)*

    **Solution:**
    Because the set of current guests is countably infinite, they can be mapped in a one-to-one correspondence to the countably infinite rooms of both buildings. Let the current guests be numbered $1, 2, 3, \dots$ according to their existing room numbers.

    To fill every room in both building 1 and building 2, relocate the guests utilizing the parity of their current room number $n$:

    * If guest $n$ is an **odd number**, move them to room number $(n+1)/2$ in **Building 1**.
    * If guest $n$ is an **even number**, move them to room number $n/2$ in **Building 2**.

    This process perfectly accommodates every current guest while subsequently occupying room 1, 2, 3... onwards for both infinite buildings seamlessly.


## 

??? ""