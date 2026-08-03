# Discrete Mathe - Revision

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