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