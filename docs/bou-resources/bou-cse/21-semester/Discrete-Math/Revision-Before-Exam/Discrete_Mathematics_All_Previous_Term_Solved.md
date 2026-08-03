# CSE2133 — Discrete Mathematics

## All Available Previous-Term Questions with Solved Answers

Included terms: **151, 161, 171, 181, 191, 201 and 211**.

This file preserves the wording of the questions from the supplied BOU question-paper scans as closely as the scans allow. Every numbered question is written as a collapsible MkDocs Material FAQ block. Each answer ends with a **30-second revision note**.

!!! warning "Source limitation for Term 151"
    The supplied Term 151 scan contains only one page and ends at Question 4(a). Questions after that point are not present in the supplied source, so they cannot be reproduced or solved without inventing content. All visible Term 151 questions are included below.

## Reference Base

The definitions, theorems and standard algorithms were checked against these high-ranking learning sources. The actual calculations below were worked out specifically for the BOU questions.

- [GeeksforGeeks — Propositional Logic](https://www.geeksforgeeks.org/engineering-mathematics/proposition-logic/)
- [GeeksforGeeks — Set Theory](https://www.geeksforgeeks.org/maths/set-theory/)
- [GeeksforGeeks — Pigeonhole Principle](https://www.geeksforgeeks.org/engineering-mathematics/discrete-mathematics-the-pigeonhole-principle/)
- [GeeksforGeeks — Graph Theory Tutorial](https://www.geeksforgeeks.org/dsa/graph-theory-tutorial/)
- [TutorialsPoint — Discrete Mathematics](https://www.tutorialspoint.com/discrete_mathematics/index.htm)
- [TutorialsPoint — Predicates and Quantifiers](https://www.tutorialspoint.com/discrete_mathematics/discrete_mathematics_predicates_and_quantifiers.htm)
- [TutorialsPoint — Number Theory](https://www.tutorialspoint.com/discrete_mathematics/discrete_mathematics_number_theory.htm)
- [TutorialsPoint — Caesar Cipher](https://www.tutorialspoint.com/cryptography/cryptography_caesar_cipher.htm)
- [TutorialsPoint — Euler Paths and Circuits](https://www.tutorialspoint.com/discrete_mathematics/discrete_mathematics_euler_paths_and_circuits.htm)
- [TutorialsPoint — Prim's MST Algorithm](https://www.tutorialspoint.com/data_structures_algorithms/prims_spanning_tree_algorithm.htm)
- [TutorialsPoint — Planar Graphs](https://www.tutorialspoint.com/graph_theory/graph_theory_planar_graphs.htm)
- [TutorialsPoint — Graph Isomorphism](https://www.tutorialspoint.com/graph_theory/graph_theory_isomorphism.htm)
- [TutorialsPoint — Trees](https://www.tutorialspoint.com/graph_theory/graph_theory_trees.htm)
- [Gate Smashers — Discrete Mathematics Playlist](https://www.youtube.com/playlist?list=PLxCzCOWd7aiH2wwES9vPWsEL6ipTaUSl3)
- [Gate Smashers — Graph Theory Playlist](https://www.youtube.com/playlist?list=PLxCzCOWd7aiG0M5FqjyoqB20Edk0tyzVt)

---

# Term 151 (Jan–Jun 2015)

??? question "Term 151 — Question 1: Propositions, logical connectives, tautology and contradiction"
    
    **Exact question**

    **(a)** Let \(p,q\), and \(r\) be the propositions:

    - \(p\): You get an A on the final exam.
    - \(q\): You do every exercise in this book.
    - \(r\): You get an A in this class.

    Write these propositions using \(p,q,r\) and logical connectives:

    1. To get an A in this class, it is necessary for you to get an A on the final.
    2. You get an A on the final, but you do not do every exercise in this book; nevertheless, you get an A in this class.
    3. Getting an A on the final and doing every exercise in this book is sufficient for getting an A in this class.

    **Answer:**

    1. \(r\to p\). The phrase “\(p\) is necessary for \(r\)” means \(r\to p\).
    2. \(p\land\neg q\land r\).
    3. \((p\land q)\to r\).

    **(b)** Let \(p\) and \(q\) be the propositions: \(p\): The election is decided; \(q\): The votes have been counted. Express each compound proposition as an English sentence: (i) \(p\to q\), (ii) \(p\leftrightarrow q\), (iii) \(p\oplus q\).

    **Answer:**

    1. If the election is decided, then the votes have been counted.
    2. The election is decided if and only if the votes have been counted.
    3. Either the election is decided or the votes have been counted, but not both.

    **(c)** Show that each conditional statement is a tautology using truth tables: (i) \(p\to(p\lor q)\), (ii) \(\neg p\to(p\to q)\), (iii) \((p\land q)\to(p\to q)\).

    **Answer:**

    | \(p\) | \(q\) | \(p\to(p\lor q)\) | \(\neg p\to(p\to q)\) | \((p\land q)\to(p\to q)\) |
    |---|---|---|---|---|
    | T | T | T | T | T |
    | T | F | T | T | T |
    | F | T | T | T | T |
    | F | F | T | T | T |

    Every final column contains only T, so all three statements are tautologies.

    **(d)** Define the terms with appropriate examples — “Tautology” and “Contradiction”.

    **Answer:** A **tautology** is true for every assignment of truth values, for example \(p\lor\neg p\). A **contradiction** is false for every assignment, for example \(p\land\neg p\).

    **(e)** Show that \(\neg(p\leftrightarrow q)\) and \(p\leftrightarrow\neg q\) are logically equivalent.

    **Answer:** Both are true exactly when \(p\) and \(q\) have different truth values.

    | \(p\) | \(q\) | \(\neg(p\leftrightarrow q)\) | \(p\leftrightarrow\neg q\) |
    |---|---|---|---|
    | T | T | F | F |
    | T | F | T | T |
    | F | T | T | T |
    | F | F | F | F |

    **30-second revision:** “Necessary” reverses the arrow; “sufficient” gives the arrow. A tautology is always true, a contradiction always false, and \(\neg(p\leftrightarrow q)\equiv p\leftrightarrow\neg q\).

??? question "Term 151 — Question 2: Sets, divisibility, quotient–remainder, functions and Hilbert's Hotel"
    **Exact question**

    **(a)** Show that if \(A,B,C\) are sets, then \(\overline{A\cap B\cap C}=\bar A\cup\bar B\cup\bar C\): (i) by showing each side is a subset of the other; (ii) using a membership table.

    **Answer:** For any \(x\),

    \[
    x\in\overline{A\cap B\cap C}
    \iff x\notin A\cap B\cap C
    \iff (x\notin A)\lor(x\notin B)\lor(x\notin C)
    \iff x\in\bar A\cup\bar B\cup\bar C.
    \]

    This proves both inclusions. In a membership table, the two final columns agree:

    | \(A\) | \(B\) | \(C\) | \(\neg(A\land B\land C)\) | \(\neg A\lor\neg B\lor\neg C\) |
    |---|---|---|---|---|
    | 1 | 1 | 1 | 0 | 0 |
    | 1 | 1 | 0 | 1 | 1 |
    | 1 | 0 | 1 | 1 | 1 |
    | 1 | 0 | 0 | 1 | 1 |
    | 0 | 1 | 1 | 1 | 1 |
    | 0 | 1 | 0 | 1 | 1 |
    | 0 | 0 | 1 | 1 | 1 |
    | 0 | 0 | 0 | 1 | 1 |

    **(b)** Let \(a,b,c\) be integers. Show that: (i) if \(a\mid b\), then \(a\mid bc\) for all integers \(c\); (ii) if \(a\mid b\) and \(b\mid c\), then \(a\mid c\).

    **Answer:**

    1. \(a\mid b\Rightarrow b=ak\). Hence \(bc=a(kc)\), so \(a\mid bc\).
    2. \(b=ak\) and \(c=b\ell\). Thus \(c=a(k\ell)\), so \(a\mid c\).

    **(c)** What are the quotient and remainder when: (i) \(-111\) is divided by \(11\); (ii) \(3\) is divided by \(5\)?

    **Answer:** Use \(a=dq+r\), where \(0\le r<d\).

    1. \(-111=11(-11)+10\): quotient \(-11\), remainder \(10\).
    2. \(3=5(0)+3\): quotient \(0\), remainder \(3\).

    **(d)** Find the domain and range of: (i) number of ones minus number of zeros in a bit string; (ii) twice the number of zeros; (iii) bits left over after splitting a bit string into 8-bit bytes; (iv) largest perfect square not exceeding a positive integer.

    **Answer:**

    | Function | Domain | Range |
    |---|---|---|
    | ones minus zeros | all finite bit strings | \(\mathbb Z\) |
    | twice the zeros | all finite bit strings | \(\{0,2,4,\ldots\}\) |
    | leftover bits modulo 8 | all finite bit strings | \(\{0,1,2,3,4,5,6,7\}\) |
    | largest square \(\le n\) | \(\mathbb Z^+\) | \(\{1,4,9,16,\ldots\}\) |

    **(e)** Suppose Hilbert's Grand Hotel and a new second building each contain countably infinitely many rooms. Show that the current guests can be spread out to fill every room of both buildings.

    **Answer:** Number current guests \(1,2,3,\ldots\). Send guest \(2n\) to room \(n\) of Building 1 and guest \(2n-1\) to room \(n\) of Building 2. Every guest gets exactly one room and every room in both buildings is filled.

    **30-second revision:** De Morgan changes intersection to union and complements every set. Divisibility uses \(b=ak\). Division requires \(0\le r<d\). Split guests into even and odd numbers to fill two countable buildings.

??? question "Term 151 — Question 3: Quantifiers, predicates and logical translation"
    **Exact question**

    **(a)** Define and distinguish between universal quantifier and existential quantifier. Briefly discuss the negation of quantifiers using example. **(b)** Explain predicates and quantifiers with necessary examples. **(c)** Convert into logical expressions: (i) Everyone has exactly one best friend. (ii) Every student of your university has a computer or has a friend who has a computer. (iii) If somebody is female and is a parent, then this person is someone's mother.

    **Answer:** A predicate \(P(x)\) becomes a proposition after \(x\) is specified or quantified. \(\forall xP(x)\) means every domain element satisfies \(P\); \(\exists xP(x)\) means at least one does.

    \[
    \neg\forall xP(x)\equiv\exists x\neg P(x),\qquad
    \neg\exists xP(x)\equiv\forall x\neg P(x).
    \]

    Let \(B(x,y)\): “\(y\) is \(x\)'s best friend”, \(S(x)\): “\(x\) is a student of the university”, \(C(x)\): “\(x\) has a computer”, \(F(x,y)\): “\(y\) is a friend of \(x\)”, \(W(x)\): “\(x\) is female”, \(P(x)\): “\(x\) is a parent”, and \(M(x,y)\): “\(x\) is the mother of \(y\)”. Then:

    1. \(\forall x\exists y\,[B(x,y)\land\forall z(B(x,z)\to z=y)]\).
    2. \(\forall x\,[S(x)\to(C(x)\lor\exists y(F(x,y)\land C(y)))]\).
    3. \(\forall x\,[(W(x)\land P(x))\to\exists y\,M(x,y)]\).

    **30-second revision:** \(\forall\)=every, \(\exists\)=at least one. When negating, swap the quantifier and negate the predicate. “Exactly one” means existence plus uniqueness.

??? question "Term 151 — Question 4(a): Generalized Pigeonhole Principle"
    **Exact question:** Prove the generalized Pigeonhole principle.

    **Answer:** If \(N\) objects are placed into \(k\) boxes, some box contains at least

    \[
    \left\lceil\frac Nk\right\rceil
    \]

    objects. Suppose every box contained at most \(\lceil N/k\rceil-1\) objects. Then the total would be at most

    \[
    k\left(\left\lceil\frac Nk\right\rceil-1\right)<N,
    \]

    contradicting that there are \(N\) objects. Therefore at least one box has \(\lceil N/k\rceil\) or more objects.

    **30-second revision:** \(N\) objects, \(k\) boxes \(\Rightarrow\) one box has at least \(\lceil N/k\rceil\). To guarantee \(r\) in one box, use \(k(r-1)+1\).

---

# Term 161 (Jan–Jun 2016)

??? question "Term 161 — Question 1: Logical translation, equivalence and quantifiers"
    **Exact question**

    **(a)** Let \(p\): You can send an email; \(q\): your inbox is full; \(r\): new emails are stored in your inbox. Translate: (i) You cannot send an email iff your inbox is full. (ii) New emails are stored in your inbox unless your inbox is full.

    **Answer:** (i) \(\neg p\leftrightarrow q\). (ii) \(\neg q\to r\), equivalently \(q\lor r\).

    **(b)** Let \(p\): It is raining; \(q\): It is windy; \(r\): The courts are open for play; \(s\): We study today. Translate: (i) \(\neg p\land\neg q\to r\); (ii) \(\neg s\leftrightarrow r\).

    **Answer:** (i) If it is neither raining nor windy, then the courts are open for play. (ii) We do not study today if and only if the courts are open for play.

    **(c)** Show that \(p\to(q\to r)\equiv(p\land q)\to r\) using a truth table and logical equivalences.

    **Answer:**

    \[
    p\to(q\to r)\equiv\neg p\lor(\neg q\lor r)
    \equiv\neg(p\land q)\lor r
    \equiv(p\land q)\to r.
    \]

    Hence their truth-table columns are identical.

    **(d)** Translate using predicates, quantifiers and connectives: (i) No one is perfect. (ii) Everyone is your friend and is perfect. (iii) One of your friends is perfect. (iv) All of your friends are perfect.

    **Answer:** Let \(F(x)\): “\(x\) is your friend”, \(P(x)\): “\(x\) is perfect”, with all people as domain.

    1. \(\forall x\neg P(x)\) (equivalently \(\neg\exists xP(x)\)).
    2. \(\forall x(F(x)\land P(x))\).
    3. \(\exists x(F(x)\land P(x))\).
    4. \(\forall x(F(x)\to P(x))\).

    **30-second revision:** “Unless” gives \(\neg q\to r\). Nested implication becomes \(\neg p\lor\neg q\lor r\), so \(p\to(q\to r)\equiv(p\land q)\to r\).

??? question "Term 161 — Question 2: Sets, divisibility, division, functions and countability"
    **Exact question**

    **(a)** Show that if \(A,B,C\) are sets, then \(\overline{A\cap B\cap C}=\bar A\cup\bar B\cup\bar C\): (i) by showing each side is a subset of the other side; (ii) using a membership table. **(b)** Let \(a,b,c\) be integers. Show: (i) if \(a\mid b\), then \(a\mid bc\) for every integer \(c\); (ii) if \(a\mid b\) and \(b\mid c\), then \(a\mid c\). **(c)** Find quotient and remainder when (i) \(-111\) is divided by 11; (ii) 3 is divided by 5. **(d)** Find the domain and range of the four printed bit-string/perfect-square functions. **(e)** Show how the guests of a fully occupied countably infinite Hilbert's Hotel can be spread across two countably infinite buildings so every room is filled.

    **Answer:**

    1. \(\overline{A\cap B\cap C}=\bar A\cup\bar B\cup\bar C\) by De Morgan's law.
    2. If \(a\mid b\), write \(b=ak\); then \(bc=a(kc)\). If \(a\mid b\) and \(b\mid c\), write \(b=ak,c=b\ell\), giving \(c=a(k\ell)\).
    3. \(-111=11(-11)+10\), so \(q=-11,r=10\). Also \(3=5(0)+3\), so \(q=0,r=3\).
    4. The four ranges are respectively \(\mathbb Z\), nonnegative even integers, \(\{0,\ldots,7\}\), and positive perfect squares.
    5. Move guest \(2n\) to Building 1 room \(n\), and guest \(2n-1\) to Building 2 room \(n\).

    **30-second revision:** De Morgan, \(b=ak\), \(a=dq+r\), mod-8 leftovers, and even/odd splitting solve the five parts.

??? question "Term 161 — Question 3: Proof methods, divisibility, Euclidean algorithm and congruence"
    **Exact question**

    **(a)** Name the basic methods to prove theorem. Define vacuous proof and trivial proof with example. **(b)** Prove: (i) If \(n\) is an integer and \(3n+2\) is odd, then \(n\) is odd. (ii) If \(n\) is odd, then \(n^2\) is odd. **(c)** Find GCD of 414 and 662 using the Euclidean algorithm. **(d)** Let \(m\) be positive. Show that \(a\equiv b\pmod m\) iff \(a\bmod m=b\bmod m\).

    **Answer:** Basic methods include direct proof, contraposition, contradiction, cases, equivalence, existence/uniqueness, induction, vacuous proof and trivial proof. A **vacuous proof** proves \(P\to Q\) by showing \(P\) is false; a **trivial proof** proves it by showing \(Q\) is true.

    1. Contrapositive: if \(n=2k\), then \(3n+2=6k+2=2(3k+1)\), which is even. Therefore, if \(3n+2\) is odd, \(n\) must be odd.
    2. If \(n=2k+1\), then \(n^2=4k^2+4k+1=2(2k^2+2k)+1\), so it is odd.

    Euclidean algorithm:

    \[
    \begin{aligned}
    662&=1(414)+248\\
    414&=1(248)+166\\
    248&=1(166)+82\\
    166&=2(82)+2\\
    82&=41(2)+0.
    \end{aligned}
    \]

    Therefore \(\gcd(414,662)=2\).

    Finally, write \(a=mq_a+r_a\) and \(b=mq_b+r_b\), with \(0\le r_a,r_b<m\). Then \(m\mid(a-b)\) iff \(m\mid(r_a-r_b)\). Since \(|r_a-r_b|<m\), this happens iff \(r_a=r_b\). Thus \(a\equiv b\pmod m\iff a\bmod m=b\bmod m\).

    **30-second revision:** Contrapositive handles Q3(b)(i); odd means \(2k+1\); Euclid's last nonzero remainder is 2; congruent numbers have the same remainder modulo \(m\).

??? question "Term 161 — Question 4: Simple graph, degrees, handshaking theorem and standard graphs"
    **Exact question**

    **(a)** Define a simple graph. What are the degrees of the vertices in Fig. 5(a)? **(b)** State the handshaking theorem for directed and undirected graph. **(c)** Draw: (i) \(K_3\), (ii) \(K_{4,4}\), (iii) \(C_7\), (iv) \(W_7\), (v) \(Q_4\).

    **Answer:** A simple graph is an undirected graph with no loops and no parallel edges. The printed Fig. 5(a) itself is a multigraph. Reading each loop as contributing 2 to degree and counting parallel edges separately gives:

    \[
    \deg(a)=4,\quad\deg(b)=6,\quad\deg(c)=6,\quad\deg(d)=5,\quad\deg(e)=1.
    \]

    The sum is \(22=2\times11\), agreeing with the 11 edges in the figure.

    - Undirected: \(\sum_{v\in V}\deg(v)=2|E|\).
    - Directed: \(\sum\deg^-(v)=\sum\deg^+(v)=|E|\).

    Standard descriptions for drawing:

    - \(K_3\): three vertices, every pair adjacent (a triangle).
    - \(K_{4,4}\): two sets of four vertices; every cross-set pair adjacent; no same-set edges.
    - \(C_7\): a cycle of seven vertices.
    - \(W_7\): a cycle \(C_6\) plus one hub joined to all six rim vertices (under the common 7-vertex convention).
    - \(Q_4\): 16 vertices labelled by four-bit strings; join strings differing in exactly one bit.

    **30-second revision:** A loop counts twice in degree. Undirected degree sum is \(2|E|\); directed in-degree sum and out-degree sum both equal \(|E|\).

??? question "Term 161 — Question 5: Bipartite, connectivity, chromatic number and Euler conditions"
    **Exact question**

    **(a)** Are the graphs shown in Fig. 6(a) bipartite? Justify. **(b)** Distinguish strongly and weakly connected directed graphs. **(c)** Define chromatic number; find it for \(C_5\) and \(C_6\). **(d)** State the properties used to determine whether a graph has an Euler circuit or path.

    **Answer:**

    - Fig. 6(a)(i) is bipartite. One valid partition is \(\{a,c\}\) and \(\{b,d,e\}\); every edge crosses the partition.
    - Fig. 6(a)(ii) is not bipartite because it contains an odd cycle (a triangle). A graph is bipartite iff it contains no odd cycle.
    - A digraph is **strongly connected** if a directed path exists from every vertex to every other vertex. It is **weakly connected** if replacing directed edges by undirected edges makes it connected.
    - Chromatic number \(\chi(G)\) is the minimum number of colors needed so adjacent vertices get different colors. \(\chi(C_5)=3\), while \(\chi(C_6)=2\).
    - A connected undirected graph has an Euler circuit iff every vertex has even degree. It has an Euler path but no circuit iff exactly two vertices have odd degree.

    **30-second revision:** Bipartite \(\Leftrightarrow\) no odd cycle. Odd cycle needs 3 colors; even cycle needs 2. Euler circuit: 0 odd-degree vertices; Euler path: exactly 2.

??? question "Term 161 — Question 6: Tree properties, expression tree and traversals"
    **Exact question**

    **(a)** Write the different properties of tree. **(b)** Represent \(((x+y)z)\uparrow((x-4)/3)\) using a binary tree. **(c)** Write preorder, inorder and postorder traversals for the printed tree. **(d)** Compare Euler circuit and Hamilton circuit.

    **Answer:** A tree is connected and acyclic. For a tree with \(n\) vertices: it has \(n-1\) edges; exactly one simple path exists between each pair; deleting any edge disconnects it; adding any new edge creates exactly one cycle.

    The expression tree has \(\uparrow\) as root. Its left child is multiplication with children \((x+y)\) and \(z\); its right child is division with children \((x-4)\) and 3.

    For the printed ordered rooted tree:

    - Preorder: `a b d e i j m n o c f g h k l p`
    - Inorder (ordered-tree convention): `d b i e m j n o a f c g k h p l`
    - Postorder: `d i m n o j e b f g k p l h c a`

    Euler versus Hamilton:

    | Euler circuit | Hamilton circuit |
    |---|---|
    | Uses every edge exactly once | Visits every vertex exactly once |
    | Vertices may repeat | Start vertex repeats only to close circuit |
    | Characterized by even degrees | No simple complete degree characterization |

    **30-second revision:** Tree: connected, no cycle, \(n-1\) edges. Preorder=root first, postorder=root last. Euler concerns edges; Hamilton concerns vertices.

??? question "Term 161 — Question 7: Pigeonhole, counting, telephone numbers and pseudorandom sequence"
    **Exact question**

    **(a)** Prove the generalized Pigeonhole principle. **(b)** Minimum students to ensure six receive the same grade among A, B, C, D, F. **(c)** Choose either one of 37 mathematics faculty or one of 83 mathematics majors, with no overlap. **(d)** With \(N\in\{2,\ldots,7\}\), \(Y\in\{0,1,2\}\), and \(X\in\{0,\ldots,9\}\), how many telephone numbers of form NYX-NNX-XXXX? **(e)** Find the sequence from LCG \(m=9,a=7,c=4,x_0=3\).

    **Answer:**

    1. Generalized PHP: one of \(k\) boxes gets at least \(\lceil N/k\rceil\) of \(N\) objects.
    2. \(5(6-1)+1=26\) students.
    3. By the sum rule, \(37+83=120\) choices.
    4. \((6\cdot3\cdot10)(6\cdot6\cdot10)(10^4)=648,000,000\).
    5. \(x_{n+1}=(7x_n+4)\bmod9\), so

       \[
       x_1,\ldots,x_{10}=7,8,6,1,2,0,4,5,3,7.
       \]

    **30-second revision:** Guarantee formula \(k(r-1)+1\). Faculty-or-student uses addition. Phone fields use multiplication. The LCG repeats after returning to the seed cycle.

---

# Term 171

??? question "Term 171 — Question 1: Proposition, equivalence, tautology, quantifiers and De Morgan's law"
    **Exact question**

    **(a)** Define proposition. Show that \(p\lor(q\land r)\) and \((p\lor q)\land(p\lor r)\) are logically equivalent. **(b)** Show that \((p\land q)\to(p\lor q)\) is a tautology. **(c)** Let \(A=\{1,2,3,4,5\}\). Determine the truth values of: (i) \((\exists x\in A)(x+3=10)\); (ii) \((\forall x\in A)(x+3<10)\); (iii) \((\exists x\in A)(x+3<5)\); (iv) \((\forall x\in A)(x+3\le7)\). **(d)** Prove \(\neg(p\land q)\equiv\neg p\lor\neg q\).

    **Answer:** A proposition is a declarative sentence with exactly one truth value, true or false.

    By distributive law,

    \[
    p\lor(q\land r)\equiv(p\lor q)\land(p\lor r).
    \]

    The implication \((p\land q)\to(p\lor q)\) cannot be false: whenever its antecedent is true, both \(p,q\) are true, so the consequent is true. Hence it is a tautology.

    Truth values: (i) **False** (would need \(x=7\)); (ii) **True** (largest sum is 8); (iii) **True** (choose \(x=1\)); (iv) **False** (\(x=5\) gives 8).

    For De Morgan's law:

    | \(p\) | \(q\) | \(\neg(p\land q)\) | \(\neg p\lor\neg q\) |
    |---|---|---|---|
    | T | T | F | F |
    | T | F | T | T |
    | F | T | T | T |
    | F | F | T | T |

    **30-second revision:** Proposition = definite T/F statement. Distribute \(\lor\) over \(\land\). For quantifiers, one counterexample makes a universal statement false.

??? question "Term 171 — Question 2: Functions, set identities and prime factorization"
    **Exact question**

    **(a)** Let \(A=\{a,b,c\}\), \(B=\{1,2,3\}\), \(C=\{w,x,y,z\}\), \(D=\{4,5,6\}\), with \(f=\{(a,2),(b,1),(c,2)\}\), \(g=\{(1,y),(2,x),(3,w)\}\), \(h=\{(x,4),(y,6),(z,4),(w,5)\}\). Determine whether each function is onto or one-to-one, and find \(h\circ g\circ f\). **(b)** Prove: (i) \((A\cup B)\cap(A\cup B^c)=A\); (ii) \((A\cup B)\setminus(A\cap B)=(A\setminus B)\cup(B\setminus A)\). **(c)** Prime-factorize 100, 641, 999 and 1024.

    **Answer:**

    - \(f\): neither one-to-one (\(a,c\mapsto2\)) nor onto (3 is missing).
    - \(g\): one-to-one, but not onto (\(z\) is missing).
    - \(h\): onto, but not one-to-one (\(x,z\mapsto4\)).
    - \(h\circ g\circ f=\{(a,4),(b,6),(c,4)\}\).

    Set identities:

    \[
    (A\cup B)\cap(A\cup B^c)=A\cup(B\cap B^c)=A,
    \]

    and the second expression contains exactly those elements in one of \(A,B\), but not both; hence it equals the symmetric difference \((A\setminus B)\cup(B\setminus A)\).

    \[
    100=2^2\cdot5^2,\qquad641\text{ is prime},\qquad999=3^3\cdot37,\qquad1024=2^{10}.
    \]

    **30-second revision:** Check injective by repeated outputs and onto by missing codomain values. Composite result is \(a\mapsto4,b\mapsto6,c\mapsto4\). Symmetric difference means “in exactly one set.”

??? question "Term 171 — Question 3: Pascal's Triangle, combinations and Pigeonhole Principle"
    **Exact question**

    **(a)** Using Pascal's Triangle find \((a-b)^6\). **(b)** A bag has six white and five red marbles. How many ways can four be drawn if exactly two are white and two red? **(c)** Minimum students needed to guarantee five are in the same class among Freshman, Sophomore, Junior and Senior.

    **Answer:** Pascal row 6 is \(1,6,15,20,15,6,1\). Alternating signs give

    \[
    (a-b)^6=a^6-6a^5b+15a^4b^2-20a^3b^3+15a^2b^4-6ab^5+b^6.
    \]

    Marble selections:

    \[
    \binom62\binom52=15\cdot10=150.
    \]

    With four classes, at most 4 can be placed in each without reaching 5. Therefore \(4\cdot4+1=17\) students are required.

    **30-second revision:** Pascal coefficients: 1-6-15-20-15-6-1. Marbles: multiply combinations. Same class: \(4(5-1)+1=17\).

??? question "Term 171 — Question 4: LCM, Caesar cipher, passwords and probability"
    **Exact question**

    **(a)** Find the LCM of \(2^3 3^5 7^2\) and \(2^4 3^3\). **(b)** Find the secret message produced from “MEET YOU IN THE PARK” using the Caesar cipher. **(c)** Passwords are 6–8 characters, using uppercase letters or digits, and must contain at least one digit. How many passwords? **(d)** Ten random bits are generated. What is the probability that at least one is 0?

    **Answer:**

    \[
    \operatorname{lcm}=2^4 3^5 7^2=190,512.
    \]

    Using the standard Caesar shift \(+3\): `PHHW BRX LQ WKH SDUN`.

    For length \(n\), all strings number \(36^n\); all-letter strings number \(26^n\). Thus

    \[
    \sum_{n=6}^{8}(36^n-26^n)=2,684,483,063,360.
    \]

    \[
    P(\text{at least one 0})=1-P(\text{all 1s})=1-\left(\frac12\right)^{10}=\frac{1023}{1024}.
    \]

    **30-second revision:** LCM takes maximum prime exponents. At-least-one digit = all passwords minus all-letter passwords. At-least-one zero = 1 minus all ones.

??? question "Term 171 — Question 5: Graph vertices, degrees, traversability, Euler/Hamilton, complete and regular graphs"
    **Exact question**

    **(a)** For Fig. 1 find \(V(G)\), \(E(G)\), every vertex degree, and verify the handshaking theorem. **(b)** Explain traversable, Eulerian and Hamiltonian graphs. **(c)** Define complete and regular graphs with examples.

    **Answer:** From the printed figure:

    \[
    V=\{A,B,C,D,E\},
    \]

    \[
    E=\{AB,AC,AD,BC,BE,CD,CE\}.
    \]

    Therefore

    \[
    \deg A=3,\ \deg B=3,\ \deg C=4,\ \deg D=2,\ \deg E=2.
    \]

    The sum is \(14=2\times7=2|E|\).

    A **traversable** graph has an Euler trail using every edge once. An **Eulerian** graph has a closed Euler trail (Euler circuit). A **Hamiltonian** graph contains a cycle visiting every vertex exactly once. A complete graph \(K_n\) joins every pair of distinct vertices; a regular graph gives every vertex the same degree (for example, \(C_5\) is 2-regular).

    **30-second revision:** For Fig. 1 the degrees are 3,3,4,2,2 and sum to 14. Euler uses all edges; Hamilton uses all vertices. \(K_n\) has every possible edge.

??? question "Term 171 — Question 6: Weighted-graph representation and minimum spanning tree"
    **Exact question**

    **(a)** Represent the weighted graph in Fig. 2 using sequential and linked-list representation. **(b)** Find its minimum spanning tree.

    **Answer:** The scan prints the label `E` at both the lower-left and far-right vertices. To avoid silently changing the paper, call them \(E_L\) and \(E_R\). The weighted edge list is:

    \[
    \begin{aligned}
    &DA(1),\ DE_L(6),\ AE_L(2),\ AB(5),\ AF(8),\ E_LB(1),\ E_LF(7),\\
    &BC(7),\ BG(1),\ FC(7),\ FG(10),\ CG(1),\ CE_R(2),\ GE_R(1).
    \end{aligned}
    \]

    This edge table is a sequential representation. The linked-list (weighted adjacency-list) representation is obtained by listing each neighbour and weight under its vertex; because the graph is undirected, each edge appears twice.

    One MST is

    \[
    \{DA(1),E_LB(1),BG(1),CG(1),GE_R(1),AE_L(2),E_LF(7)\},
    \]

    with total weight \(1+1+1+1+1+2+7=14\). The final weight-7 edge may be replaced by \(FC(7)\) because of the tie.

    **30-second revision:** Keep the paper's duplicate E labels distinct. Take five weight-1 edges, connect the left group with weight 2, then attach \(F\) using weight 7: MST weight 14.

??? question "Term 171 — Question 7: Binary search tree, traversals and postfix evaluation"
    **Exact question**

    **(a)** Form a BST for mathematics, physics, geography, zoology, meteorology, geology, psychology and chemistry in that insertion order. **(b)** Perform inorder, preorder and postorder traversal of the printed ordered rooted tree. **(c)** Evaluate postfix `7 2 3 * - 4 ↑ 9 3 / +`.

    **Answer:** BST placement:

    - root `mathematics`;
    - left: `geography`, whose left is `chemistry` and right is `geology`;
    - right: `physics`, whose left is `meteorology` and right is `zoology`; `zoology` has left child `psychology`.

    Printed-tree traversals:

    - Preorder: `a b e j k n o p f c d g l m h i`
    - Inorder (ordered-tree convention): `j e n k o p b f a c l g m d h i`
    - Postorder: `j n o p k e f b c l m g h i d a`

    Postfix stack:

    \[
    2\cdot3=6,\quad7-6=1,\quad1^4=1,\quad9/3=3,\quad1+3=4.
    \]

    Final value: **4**.

    **30-second revision:** BST uses alphabetical comparison. Preorder=root first; postorder=root last. For postfix, push numbers and apply each operator to the top two values: answer 4.

---

# Term 181

??? question "Term 181 — Question 1: Universal/existential quantifiers, predicates and translation"
    **Exact question:** Define and distinguish universal and existential quantifiers; discuss their negation; explain predicates and quantifiers; translate: (i) Everyone has exactly one best friend. (ii) Every university student has a computer or a friend with a computer. (iii) If somebody is female and a parent, that person is someone's mother.

    **Answer:**

    \(\forall xP(x)\) asserts \(P\) for every domain element; \(\exists xP(x)\) asserts it for at least one. Their negations are

    \[
    \neg\forall xP(x)\equiv\exists x\neg P(x),\qquad
    \neg\exists xP(x)\equiv\forall x\neg P(x).
    \]

    Using predicates \(B,S,C,F,W,P,M\) as defined in Term 151 Question 3:

    1. \(\forall x\exists y[B(x,y)\land\forall z(B(x,z)\to z=y)]\).
    2. \(\forall x[S(x)\to(C(x)\lor\exists y(F(x,y)\land C(y)))]\).
    3. \(\forall x[(W(x)\land P(x))\to\exists yM(x,y)]\).

    **30-second revision:** Swap \(\forall\) and \(\exists\) when negating. “Exactly one” = exists plus uniqueness.

??? question "Term 181 — Question 2: Sets, subsets and equality of sets"
    **Exact question**

    **(a)** Define set, power set and proper set. Using a membership table show \(\overline{A\cup(B\cap C)}=(\bar C\cup\bar B)\cap\bar A\). **(b)** For \(A=\{2,4,6\}\), \(B=\{2,6\}\), \(C=\{4,6\}\), \(D=\{4,6,8\}\), determine subset relations. **(c)** Determine equality: (i) \(\{1,3,3,3,5,5,5,5,5\}\) and \(\{5,3,1\}\); (ii) \(\{\{1\}\}\) and \(\{1,\{1\}\}\).

    **Answer:** A set is a collection of distinct objects. \(\mathcal P(A)\) is the set of all subsets of \(A\). \(X\) is a proper subset of \(Y\) if \(X\subseteq Y\) and \(X\ne Y\).

    By De Morgan:

    \[
    \overline{A\cup(B\cap C)}=\bar A\cap\overline{B\cap C}=\bar A\cap(\bar B\cup\bar C),
    \]

    identical to the stated right side by commutativity.

    Subsets: \(B\subset A\), \(C\subset A\), and \(C\subset D\). No other inclusion among the four distinct sets holds.

    1. Equal: repeated elements do not change a set; both are \(\{1,3,5\}\).
    2. Not equal: the first has one element, namely the set \(\{1\}\); the second has two elements, \(1\) and \(\{1\}\).

    **30-second revision:** Sets ignore duplicates and order. Power set contains subsets. Here \(B,C\subset A\), and \(C\subset D\).

??? question "Term 181 — Question 3: Ackermann recursion and function composition"
    **Exact question**

    **(a)** For the recursively defined Ackermann function, find \(A(2,3)\). **(b)** If \(f(x)=2x+3\), \(g(x)=3x+2\), find the compositions of \(f,g\) and \(g,f\).

    **Answer:** The standard recursion gives \(A(0,n)=n+1\), \(A(1,n)=n+2\), and \(A(2,n)=2n+3\). Therefore

    \[
    A(2,3)=2(3)+3=9.
    \]

    \[
    (f\circ g)(x)=2(3x+2)+3=6x+7,
    \]

    \[
    (g\circ f)(x)=3(2x+3)+2=6x+11.
    \]

    **30-second revision:** \(A(2,n)=2n+3\), so \(A(2,3)=9\). Composition order matters: \(f\circ g=6x+7\), \(g\circ f=6x+11\).

??? question "Term 181 — Question 4: Committees, officers, converse, contrapositive and inverse"
    **Exact question**

    **(a)** A class has 10 students: 6 men and 4 women. Find ways to (i) select a 4-member committee; (ii) select 2 men and 2 women; (iii) elect president, vice-president and treasurer. **(b)** State converse, contrapositive and inverse of: (i) If it snows tonight, I will stay home. (ii) I go out today if it is a sunny summer day.

    **Answer:**

    \[
    \binom{10}{4}=210,\qquad
    \binom62\binom42=15\cdot6=90,\qquad
    {}^{10}P_3=10\cdot9\cdot8=720.
    \]

    For \(p\to q\): converse \(q\to p\), inverse \(\neg p\to\neg q\), contrapositive \(\neg q\to\neg p\).

    1. Converse: If I stay home, it snows tonight. Inverse: If it does not snow, I will not stay home. Contrapositive: If I do not stay home, it did not snow tonight.
    2. Original means “If it is a sunny summer day, then I go out.” Converse: If I go out, it is a sunny summer day. Inverse: If it is not a sunny summer day, I do not go out. Contrapositive: If I do not go out, it is not a sunny summer day.

    **30-second revision:** Committees use combinations; distinct offices use permutations. Converse swaps; inverse negates; contrapositive swaps and negates.

??? question "Term 181 — Question 5: Vertices, edges, degrees and handshaking theorem"
    **Exact question:** For the printed graph, find \(V(G)\), \(E(G)\), each degree, and verify that the degree sum is twice the number of edges.

    **Answer:** The same complete figure reappears clearly in Term 201. Ignoring weights for degree calculations:

    \[
    V=\{0,1,2,3,4,5,6\},
    \]

    \[
    E=\{02,03,23,21,24,34,35,41,46,45,16,56\}.
    \]

    \[
    \deg(0)=2,\ \deg(1)=3,\ \deg(2)=4,\ \deg(3)=4,\ \deg(4)=5,\ \deg(5)=3,\ \deg(6)=3.
    \]

    Their sum is \(24=2\cdot12=2|E|\).

    **30-second revision:** Degrees in vertex order 0–6 are **2,3,4,4,5,3,3**; total 24 for 12 edges.

??? question "Term 181 — Question 6: Hamilton circuit, Euler versus Hamilton and odd-degree theorem"
    **Exact question**

    **(a)** Determine whether each printed graph has a Hamiltonian circuit; give one if it does. **(b)** Differentiate Eulerian and Hamiltonian graphs. **(c)** Prove that an undirected graph has an even number of odd-degree vertices.

    **Answer:** Both printed graphs are Hamiltonian. For the first, one circuit is

    \[
    v_7-v_1-v_3-v_4-v_5-v_2-v_6-v_7.
    \]

    For the second, one circuit is \(a-b-c-d-e-a\).

    Eulerian concerns using every **edge** exactly once in a closed trail; Hamiltonian concerns visiting every **vertex** exactly once in a cycle.

    By the handshaking theorem, \(\sum_v\deg(v)=2|E|\), which is even. The sum of all even degrees is even. Therefore the sum of the odd degrees must also be even. A sum of odd integers is even only when there are an even number of them. Hence the graph has an even number of odd-degree vertices.

    **30-second revision:** Both figures have Hamilton cycles. Euler=edge; Hamilton=vertex. Odd-degree count is even because the total degree sum is even.

??? question "Term 181 — Question 7: Isomorphism, tree traversals and postfix evaluation"
    **Exact question**

    **(a)** Show the pentagon and pentagram graphs are isomorphic. **(b)** Give postorder, inorder and preorder of the printed rooted tree. **(c)** Evaluate postfix `3 2 * 2 ↑ 5 3 − 8 4 / * −`.

    **Answer:** Both graphs are \(C_5\). One adjacency-preserving mapping is

    \[
    a\mapsto a',\ b\mapsto c',\ c\mapsto e',\ d\mapsto b',\ e\mapsto d'.
    \]

    Traversals:

    - Preorder: `a b c d e f g h i j`
    - Inorder: `c b d e a f i h j g`
    - Postorder: `c e d b i j h g f a`

    Postfix calculation:

    \[
    (3\cdot2)^2-(5-3)(8/4)=6^2-2\cdot2=36-4=32.
    \]

    **30-second revision:** Pentagon and pentagram are both 5-cycles. Traversals give root first/in middle/last. Postfix answer: **32**.

---

# Term 191

??? question "Term 191 — Question 1: Discrete mathematics, proposition, truth tables and equivalence"
    **Exact question**

    **(a)** Define Discrete mathematics. List the problems that can be solved using it. **(b)** What is proposition? Let \(p\): “Maria learns discrete mathematics” and \(q\): “Maria will find a good job.” Express \(p\to q\) and \(p\leftrightarrow q\) in English and show their truth tables. **(c)** Define tautology, contradiction and contingency. Show \(\neg p\lor q\equiv p\to q\).

    **Answer:** Discrete mathematics studies finite or countable structures rather than continuously varying quantities. It supports logic and proof, algorithms, data structures, counting, scheduling, networks/graphs, trees, databases, coding, digital circuits and cryptography.

    A proposition is a declarative statement that is either true or false.

    - \(p\to q\): If Maria learns discrete mathematics, then Maria will find a good job.
    - \(p\leftrightarrow q\): Maria learns discrete mathematics if and only if Maria will find a good job.

    | \(p\) | \(q\) | \(p\to q\) | \(p\leftrightarrow q\) |
    |---|---|---|---|
    | T | T | T | T |
    | T | F | F | F |
    | F | T | T | F |
    | F | F | T | T |

    A tautology is always true; a contradiction is always false; a contingency is true for some valuations and false for others. Since implication is false only for \(p=T,q=F\), it has exactly the same column as \(\neg p\lor q\).

    **30-second revision:** Discrete math handles countable structures. \(p\to q\equiv\neg p\lor q\). Biconditional is true when truth values match.

??? question "Term 191 — Question 2: Function composition, basic logic operations and quantified translation"
    **Exact question**

    **(a)** For the printed functions \(f,g,h\), find \(h\circ g\circ f\). **(b)** Define basic logic operations with examples. **(c)** Translate: (i) Some students in the class have visited Cairo. (ii) Every student has visited either Aswan or Cairo.

    **Answer:**

    \[
    h\circ g\circ f=\{(a,4),(b,6),(c,4)\}.
    \]

    Basic operations are negation \(\neg p\), conjunction \(p\land q\), disjunction \(p\lor q\), exclusive-or \(p\oplus q\), implication \(p\to q\), and biconditional \(p\leftrightarrow q\).

    Let \(S(x)\): “\(x\) is a student in the class”, \(C(x)\): “\(x\) visited Cairo”, \(A(x)\): “\(x\) visited Aswan”. Then:

    1. \(\exists x(S(x)\land C(x))\).
    2. \(\forall x[S(x)\to(A(x)\lor C(x))]\).

    Here “either ... or” is taken inclusively unless “but not both” is stated.

    **30-second revision:** Composite mapping is \(a\to4,b\to6,c\to4\). “Some” uses \(\exists\); “every student” uses \(\forall x(S(x)\to\cdots)\).

??? question "Term 191 — Question 3: Valid argument and quantified truth values"
    **Exact question**

    **(a)** Prove that \(p\to q,q\to r\vdash p\to r\) is valid. **(b)** For \(A=\{1,2,3,4,5\}\), determine: (i) \(\exists x(x+3=10)\); (ii) \(\forall x(x+3<10)\); (iii) \(\exists x(x+3<5)\); (iv) \(\forall x(x+3\le7)\).

    **Answer:** If \(p\) is true, \(p\to q\) forces \(q\) true, and \(q\to r\) then forces \(r\) true. Therefore \(p\to r\). Equivalently,

    \[
    [(p\to q)\land(q\to r)]\to(p\to r)
    \]

    is a tautology (hypothetical syllogism).

    Truth values: (i) False; (ii) True; (iii) True, witness \(x=1\); (iv) False, counterexample \(x=5\).

    **30-second revision:** Chain implications: \(p\to q,q\to r\Rightarrow p\to r\). Answers: **F, T, T, F**.

??? question "Term 191 — Question 4: Linear congruential generator and shift-cipher decryption"
    **Exact question**

    **(a)** Generate ten pseudorandom numbers with \(m=9,a=7,c=4,x_0=3\). **(b)** Decrypt with \(f(p)=(p+10)\bmod26\): (i) `CEBBOXNOB XYG`; (ii) `LO WI PBSOXN`.

    **Answer:**

    \[
    x_{n+1}=(7x_n+4)\bmod9
    \]

    gives

    \[
    7,8,6,1,2,0,4,5,3,7.
    \]

    Decryption subtracts 10 modulo 26:

    1. `SURRENDER NOW`
    2. `BE MY FRIEND`

    **30-second revision:** LCG sequence: **7-8-6-1-2-0-4-5-3-7**. Shift +10 decrypts by −10: **SURRENDER NOW; BE MY FRIEND**.

??? question "Term 191 — Question 5: Directed graph, standard graphs, degree feasibility and bipartite cycle"
    **Exact question**

    **(a)** For Fig. 5(a), find vertices, edges, each in/out degree and verify \(|E|=\sum\deg^-=\sum\deg^+\). **(b)** Draw \(K_3,K_{4,4},C_7,W_7,Q_4\). **(c)** (i) Can all five vertices have degree 3? (ii) Is \(C_8\) bipartite?

    **Answer:** \(V=\{v_1,v_2,v_3,v_4,v_5,v_6\}\). The nine arcs are

    \[
    v_2v_1,v_1v_2,v_1v_3,v_3v_4,v_3v_6,v_4v_5,v_5v_6,v_5v_3,v_5v_4.
    \]

    | Vertex | In-degree | Out-degree |
    |---|---:|---:|
    | \(v_1\) | 1 | 2 |
    | \(v_2\) | 1 | 1 |
    | \(v_3\) | 2 | 2 |
    | \(v_4\) | 2 | 1 |
    | \(v_5\) | 1 | 3 |
    | \(v_6\) | 2 | 0 |

    Both sums equal 9, which is \(|E|\).

    The requested standard graphs have the descriptions given in Term 161 Q4. Five vertices cannot all have degree 3 because the degree sum would be \(5\cdot3=15\), odd, contradicting the handshaking theorem. \(C_8\) is bipartite because every even cycle is bipartite; alternate vertices form the two partitions.

    **30-second revision:** Directed degree pairs: \((1,2),(1,1),(2,2),(2,1),(1,3),(2,0)\). Five degree-3 vertices are impossible. \(C_8\) is bipartite.

??? question "Term 191 — Question 6: Recursion, quantified English and binary-tree memory representation"
    **Exact question**

    **(a)** \(P(x,y)=0\) if \(x<y\); \(P(x,y)=P(x-y,y)+1\) if \(y\le x\). Find \(P(26,5)\). **(b)** Translate: (i) \(\forall x(C(x)\land F(x))\); (ii) \(\exists x(C(x)\land F(x))\), where \(C\)=comedian, \(F\)=funny. **(c)** Draw the tree from the printed memory table and find traversals.

    **Answer:** Repeated subtraction gives

    \[
    26\to21\to16\to11\to6\to1,
    \]

    so \(P(26,5)=5\).

    1. Every person is a comedian and is funny.
    2. At least one person is both a comedian and funny.

    Following pointers from root index 2 gives root `a`; left subtree rooted at `b` and right subtree at `c`. The traversals are:

    - Preorder: `a b d h m e i c f j n g k l`
    - Inorder: `d m h b i e a f n j c k g l`
    - Postorder: `m h d i e b n j f k l g c a`

    **30-second revision:** The recursion counts how many full 5s fit in 26: **5**. Quantifiers mean “everyone” and “someone.” Follow only pointers reachable from Root=2.

??? question "Term 191 — Question 7: Planarity, chromatic number, isomorphism and Hamilton conditions"
    **Exact question**

    **(a)** Define planar graph and chromatic number. Explain why \(K_5\) and \(K_{3,3}\) are non-planar. **(b)** Check whether printed graphs G and H are isomorphic. **(c)** State necessary conditions for Hamilton circuits.

    **Answer:** A planar graph can be drawn without edge crossings except at endpoints. The chromatic number is the minimum number of vertex colors such that adjacent vertices differ.

    For a simple connected planar graph with \(v\ge3\), \(e\le3v-6\). But \(K_5\) has \(v=5,e=10>9\), so it is non-planar. A simple bipartite planar graph satisfies \(e\le2v-4\); \(K_{3,3}\) has \(v=6,e=9>8\), so it is non-planar.

    The two printed graphs are isomorphic. One mapping is

    \[
    u_2\mapsto v_5,\ u_6\mapsto v_1,\ u_5\mapsto v_2,\ u_4\mapsto v_3,\ u_1\mapsto v_4,\ u_3\mapsto v_6.
    \]

    Necessary Hamilton conditions include: the graph is connected; every vertex has degree at least 2; it has no bridge or cut vertex; more generally, for every nonempty proper \(S\subset V\), the number of components of \(G-S\) cannot exceed \(|S|\). These are necessary, not sufficient.

    **30-second revision:** \(K_5\): 10>9; \(K_{3,3}\): 9>8. The printed graphs are isomorphic. Hamilton graph must be connected, degree \(\ge2\), and have no bridge/cut vertex.

---

# Term 201

??? question "Term 201 — Question 1: De Morgan truth table, weighted graph degrees and implication forms"
    **Exact question**

    **(a)** Define proposition and propositional logic. Show by truth table that \(\neg(p\land q)\) and \(\neg p\lor\neg q\) are equivalent. **(b)** For Fig. 1b, find vertices, edges, degrees and verify the handshaking theorem. **(c)** Find converse, contrapositive and inverse of “If it is holiday, then there are crowds in the shopping mall.”

    **Answer:** A proposition is a definite true/false statement; propositional logic studies propositions combined by logical connectives. The De Morgan truth table appears in Term 171 Q1 and gives identical final columns.

    For the graph:

    \[
    V=\{0,1,2,3,4,5,6\},
    \]

    \[
    E=\{02,03,23,21,24,34,35,41,46,45,16,56\}.
    \]

    Degrees in order 0–6 are \(2,3,4,4,5,3,3\); sum \(=24=2(12)\).

    Let \(p\)=holiday, \(q\)=crowds in mall.

    - Converse: If there are crowds in the mall, then it is a holiday.
    - Inverse: If it is not a holiday, then there are no crowds in the mall.
    - Contrapositive: If there are no crowds in the mall, then it is not a holiday.

    **30-second revision:** De Morgan: negate AND to OR of negations. Graph has 12 edges and degree sequence **2,3,4,4,5,3,3**.

??? question "Term 201 — Question 2: Sequential/list graph representation and MST"
    **Exact question:** **(a)** Suppose a weighted graph \(G\) in Fig. 2b. Represent the graph in memory using sequential and linked-list representation. **(b)** Find the minimum spanning tree from the graph \(G\) in Fig. 2b.

    **Answer:** This is the same graph as Term 171 Q6, including the duplicated printed label `E`. Using \(E_L,E_R\), the sequential edge list and MST are given there. One MST is

    \[
    \{DA(1),E_LB(1),BG(1),CG(1),GE_R(1),AE_L(2),E_LF(7)\},
    \]

    of total weight **14**. For a linked representation, create a node for every vertex and link `(neighbor, weight)` records for all incident edges.

    **30-second revision:** Sequential = edge/adjacency table; linked = weighted adjacency lists. MST weight: **14**.

??? question "Term 201 — Question 3: Sets, quantified truth values and tennis-tournament tree"
    **Exact question**

    **(a)** Define Set, Power Set and Proper Set. Using membership table show that \(\overline{A\cup(B\cap C)}=(\bar C\cup\bar B)\cap\bar A\), where \(A,B,C\) are sets. **(b)** Let \(A=\{1,2,3,4,5\}\). Determine the truth value of: (i) \((\exists x\in A)(x+3=10)\); (ii) \((\forall x\in A)(x+3<10)\); (iii) \((\exists x\in A)(x+3<5)\); (iv) \((\forall x\in A)(x+3\le7)\). **(c)** Suppose A and B are playing a tennis tournament such that the first person to win two games consecutively or to win a total of three games wins the tournament. Find the number of ways the tournament can proceed (use a rooted tree).

    **Answer:** Definitions and the set identity are solved in Term 181 Q2. The truth values are **False, True, True, False**.

    The ten possible terminal win sequences are:

    ```text
    AA, ABAA, ABABA, ABABB, ABB,
    BAA, BABAA, BABAB, BABB, BB
    ```

    Therefore the tournament can proceed in **10 ways**.

    **30-second revision:** Quantifier answers: **F-T-T-F**. Stop the game tree immediately after `AA`/`BB` or after either player gets a third total win: **10 leaves**.

??? question "Term 201 — Question 4: Expression tree and binary-tree memory representation"
    **Exact question**

    **(a)** Represent `((a+b)(c+d))-(e+f)/h+g` using a binary tree. **(b)** Draw the tree from the printed memory representation and find preorder, inorder and postorder.

    **Answer:** With normal precedence, the fully parenthesized expression is

    \[
    (((a+b)(c+d))-((e+f)/h))+g.
    \]

    The expression-tree root is `+`; its right child is `g`. Its left child is `-`; that node's left child is multiplication of `(a+b)` and `(c+d)`, and its right child is division of `(e+f)` by `h`.

    The memory table is the same as Term 191 Q6(c):

    - Preorder: `a b d h m e i c f j n g k l`
    - Inorder: `d m h b i e a f n j c k g l`
    - Postorder: `m h d i e b n j f k l g c a`

    **30-second revision:** Expression root is final `+g`. Memory-tree traversals begin preorder `a b...`, inorder `d m...`, postorder `m h...a`.

??? question "Term 201 — Question 5: Binomial expansion, marble combinations, inverse and composite functions"
    **Exact question**

    **(a)** Expand \((a+b)^6\) using Pascal's Triangle. **(b)** Choose two white from six and two red from five. **(c)** Define inverse function; for \(f(x)=2x+3,g(x)=3x+2\), find both composites.

    **Answer:**

    \[
    (a+b)^6=a^6+6a^5b+15a^4b^2+20a^3b^3+15a^2b^4+6ab^5+b^6.
    \]

    Marble ways: \(\binom62\binom52=150\).

    An inverse function \(f^{-1}\) reverses a bijection: \(f^{-1}(f(x))=x\). Here

    \[
    (f\circ g)(x)=6x+7,\qquad(g\circ f)(x)=6x+11.
    \]

    **30-second revision:** Plus expansion has all positive coefficients. Marbles = 150. Composites = **6x+7** and **6x+11**.

??? question "Term 201 — Question 6: Functions, relation composition/matrices and induction"
    **Exact question**

    **(a)** Determine whether printed \(f,g,h\) are onto/one-to-one and find \(h\circ g\circ f\). **(b)** With \(R=\{(1,b),(2,a),(2,c),(3,b)\}\) and \(S=\{(a,y),(c,z),(c,y),(b,x)\}\), find the composition and matrices. **(c)** Prove by induction that \(n^3-n\) is divisible by 3.

    **Answer:** \(f\) is neither injective nor onto; \(g\) is injective but not onto; \(h\) is onto but not injective. The composite is \(\{(a,4),(b,6),(c,4)\}\).

    Interpreting the paper's \(R\circ S\) as “apply \(R\), then \(S\)”:

    \[
    R\circ S=\{(1,x),(2,y),(2,z),(3,x)\}.
    \]

    With row/column orders \(A=(1,2,3)\), \(B=(a,b,c)\), \(C=(x,y,z)\):

    \[
    M_R=\begin{bmatrix}0&1&0\\1&0&1\\0&1&0\end{bmatrix},\quad
    M_S=\begin{bmatrix}0&1&0\\1&0&0\\0&1&1\end{bmatrix},\quad
    M_{R\circ S}=\begin{bmatrix}1&0&0\\0&1&1\\1&0&0\end{bmatrix}.
    \]

    Induction: for \(n=1\), \(1^3-1=0\). Assume \(3\mid(k^3-k)\). Then

    \[
    (k+1)^3-(k+1)=(k^3-k)+3k(k+1),
    \]

    a sum of multiples of 3. Hence \(3\mid(n^3-n)\) for all positive \(n\).

    **30-second revision:** Relation pairs: **(1,x),(2,y),(2,z),(3,x)**. Induction step adds \(3k(k+1)\).

??? question "Term 201 — Question 7: Isomorphism, Pigeonhole and prefix/postfix evaluation"
    **Exact question**

    **(a)** Show the pentagon and pentagram are isomorphic. **(b)** Minimum students to guarantee five in one of four classes. **(c)** Evaluate: (i) prefix `+ - * 2 3 5 / ↑ 2 3 4`; (ii) postfix `7 2 3 * - 4 ↑ 9 3 / +`.

    **Answer:** An isomorphism is \(a\mapsto a',b\mapsto c',c\mapsto e',d\mapsto b',e\mapsto d'\). The minimum student count is \(4(5-1)+1=17\).

    Prefix:

    \[
    [(2\cdot3)-5]+[(2^3)/4]=1+2=3.
    \]

    Postfix:

    \[
    (7-2\cdot3)^4+(9/3)=1^4+3=4.
    \]

    **30-second revision:** Isomorphic mapping preserves the 5-cycle. Pigeonhole answer 17. Prefix answer **3**; postfix answer **4**.

---

# Term 211

??? question "Term 211 — Question 1: Discrete mathematics and symbolic/verbal propositions"
    **Exact question**

    **(a)** Define discrete mathematics. List out the problems that can be solved using discrete mathematics. **(b)** Let \(p\) be “it is cold” and \(q\) be “It is raining”. Give a simple verbal sentence describing: (i) \(\neg p\); (ii) \(p\land q\); (iii) \(p\lor q\); (iv) \(p\to q\); (v) \(p\leftrightarrow q\). **(c)** Let \(p\) be “Ram reads the Newsweek”, \(q\) be “Ram reads the Times”, and \(r\) be “Ram reads the Sun”. Write in symbolic form: (i) Ram reads Newsweek or the Sun, but not Times. (ii) Ram reads Newsweek and the Times, or he does not read Newsweek and the Sun. (iii) It is not true that Ram reads Newsweek but not Times.

    **Answer:** Definition/applications are in Term 191 Q1.

    1. It is not cold.
    2. It is cold and raining.
    3. It is cold or raining (possibly both).
    4. If it is cold, then it is raining.
    5. It is cold iff it is raining.

    Symbolic forms:

    1. “Ram reads Newsweek or Sun, but not Times”: \((p\lor r)\land\neg q\).
    2. “Ram reads Newsweek and Times, or he does not read Newsweek and Sun”: \((p\land q)\lor(\neg p\land r)\).
    3. “It is not true that Ram reads Newsweek but not Times”: \(\neg(p\land\neg q)\), equivalent to \(p\to q\).

    **30-second revision:** `but` means AND. The three symbolic answers are \((p\lor r)\land\neg q\), \((p\land q)\lor(\neg p\land r)\), and \(\neg(p\land\neg q)\).

??? question "Term 211 — Question 2: Tautology, implication variants and negation"
    **Exact question**

    **(a)** Define tautology and verify \(p\lor\neg(p\land q)\) is a tautology. **(b)** Find converse, inverse and contrapositive of “If Ram is a poet, then he is poor.” **(c)** Negate: “If she works, she will earn money.”

    **Answer:**

    \[
    p\lor\neg(p\land q)\equiv p\lor\neg p\lor\neg q\equiv T.
    \]

    Hence it is a tautology.

    - Converse: If Ram is poor, then he is a poet.
    - Inverse: If Ram is not a poet, then he is not poor.
    - Contrapositive: If Ram is not poor, then he is not a poet.
    - Negation of the last implication: **She works and she will not earn money**, because \(\neg(p\to q)\equiv p\land\neg q\).

    **30-second revision:** \(p\lor\neg(p\land q)=T\). Negation of “if \(p\), then \(q\)” is \(p\land\neg q\).

??? question "Term 211 — Question 3: Set operations, Cartesian product and compositions"
    **Exact question**

    **(a)** Define set, power set and proper set. Given \(U=\{0,1,\ldots,10\}\), \(A=\{1,2,3,4,5\}\), \(B=\{4,5,6,7,8\}\), find \(A\cup B,A\cap B,B^c,A-B\). **(b)** Find \(A\times B\times C\) for \(A=\{2,4\}\), \(B=\{3,5\}\), \(C=\{x,y,z\}\). **(c)** For \(f(x)=2x+3,g(x)=3x+2\), find both compositions.

    **Answer:**

    \[
    A\cup B=\{1,2,3,4,5,6,7,8\},\quad A\cap B=\{4,5\},
    \]

    \[
    B^c=\{0,1,2,3,9,10\},\quad A-B=\{1,2,3\}.
    \]

    \[
    \begin{aligned}
    A\times B\times C=\{&(2,3,x),(2,3,y),(2,3,z),(2,5,x),(2,5,y),(2,5,z),\\
    &(4,3,x),(4,3,y),(4,3,z),(4,5,x),(4,5,y),(4,5,z)\}.
    \end{aligned}
    \]

    \[
    f\circ g=6x+7,\qquad g\circ f=6x+11.
    \]

    **30-second revision:** Union 1–8; intersection 4,5; \(B^c=0,1,2,3,9,10\); \(A-B=1,2,3\). Cartesian product has 12 triples.

??? question "Term 211 — Question 4: Quantifiers, Pigeonhole, combinations and shift encryption"
    **Exact question**

    **(a)** Determine the three printed quantified truth values for \(A=\{1,2,3,4,5\}\). **(b)** Find minimum students to guarantee: (i) three born in the same month; (ii) five in the same class among four class years. **(c)** Choose two white from six and two red from five. **(d)** Encrypt `STOP GLOBAL WARMING` using shift \(k=11\).

    **Answer:** Truth values: (i) False; (ii) True; (iii) True.

    1. \(12(3-1)+1=25\) students.
    2. \(4(5-1)+1=17\) students.
    3. \(\binom62\binom52=150\) selections.
    4. With \(E(p)=(p+11)\bmod26\): `DEZA RWZMLW HLCXTYR`.

    **30-second revision:** Truths **F-T-T**; month answer **25**; class answer **17**; marbles **150**; cipher **DEZA RWZMLW HLCXTYR**.

??? question "Term 211 — Question 5: Eight spanning trees and four-bit strings without consecutive zeros"
    **Exact question**

    **(a)** Find all eight spanning trees of Fig. 5(a). **(b)** Using a tree diagram find four-bit binary numbers without consecutive 0s.

    **Answer:** The graph has edges \(AD,DB,AC,BC,DC\). Its eight spanning trees (listed by edge set) are:

    1. \(\{AD,DB,AC\}\)
    2. \(\{AD,DB,BC\}\)
    3. \(\{AD,DB,DC\}\)
    4. \(\{AD,AC,BC\}\)
    5. \(\{AD,BC,DC\}\)
    6. \(\{DB,AC,BC\}\)
    7. \(\{DB,AC,DC\}\)
    8. \(\{AC,BC,DC\}\)

    The valid four-bit strings are

    ```text
    0101, 0110, 0111, 1010, 1011, 1101, 1110, 1111
    ```

    so there are **8**.

    **30-second revision:** A spanning tree on four vertices uses three edges, stays connected and has no cycle. Four-bit no-00 strings: **8**.

??? question "Term 211 — Question 6: Adjacency/incidence matrices, Prim's MST, planarity and coloring"
    **Exact question**

    **(a)** Represent Fig. 6(a) using adjacency and incidence matrices. **(b)** Define MST and find it using Prim's algorithm. **(c)** Define planar graph and chromatic number; explain why \(K_5,K_{3,3}\) are non-planar.

    **Answer:** Let the weighted edges, in column order, be

    \[
    e_1=ab(5),e_2=ac(3),e_3=bc(4),e_4=be(2),e_5=bd(6),e_6=cd(5),
    e_7=cf(6),e_8=de(6),e_9=df(6),e_{10}=ef(3),e_{11}=eg(5),e_{12}=fg(4).
    \]

    Weighted adjacency matrix in order \(a,b,c,d,e,f,g\):

    \[
    \begin{bmatrix}
    0&5&3&0&0&0&0\\
    5&0&4&6&2&0&0\\
    3&4&0&5&0&6&0\\
    0&6&5&0&6&6&0\\
    0&2&0&6&0&3&5\\
    0&0&6&6&3&0&4\\
    0&0&0&0&5&4&0
    \end{bmatrix}.
    \]

    Incidence matrix (rows \(a\) through \(g\), columns \(e_1\) through \(e_{12}\)):

    \[
    \begin{array}{c|cccccccccccc}
     &1&2&3&4&5&6&7&8&9&10&11&12\\\hline
    a&1&1&0&0&0&0&0&0&0&0&0&0\\
    b&1&0&1&1&1&0&0&0&0&0&0&0\\
    c&0&1&1&0&0&1&1&0&0&0&0&0\\
    d&0&0&0&0&1&1&0&1&1&0&0&0\\
    e&0&0&0&1&0&0&0&1&0&1&1&0\\
    f&0&0&0&0&0&0&1&0&1&1&0&1\\
    g&0&0&0&0&0&0&0&0&0&0&1&1
    \end{array}
    \]

    An MST is

    \[
    \{be(2),ac(3),ef(3),bc(4),fg(4),cd(5)\}
    \]

    with total weight \(2+3+3+4+4+5=21\).

    Definitions and non-planarity proofs are the same as Term 191 Q7: \(K_5\) violates \(e\le3v-6\), and bipartite \(K_{3,3}\) violates \(e\le2v-4\).

    **30-second revision:** Edge weights selected by Prim/Kruskal: **2,3,3,4,4,5**; MST total **21**. \(K_5:10>9\), \(K_{3,3}:9>8\).

??? question "Term 211 — Question 7: Expression tree and memory-represented tree traversals"
    **Exact question**

    **(a)** Represent `((a+b)(c+d))-(e+f)/h+g` using a binary tree. **(b)** From the printed memory representation, draw the tree and find preorder, inorder and postorder.

    **Answer:** The expression tree and memory table are identical to Term 201 Q4.

    - Expression root: `+`; right child `g`; left child `-`; its left subtree is `(a+b)*(c+d)` and right subtree is `(e+f)/h`.
    - Preorder: `a b d h m e i c f j n g k l`
    - Inorder: `d m h b i e a f n j c k g l`
    - Postorder: `m h d i e b n j f k l g c a`

    **30-second revision:** Final operator is the expression-tree root. For the memory tree: preorder starts `a b`, inorder starts `d m`, postorder ends `...c a`.

---

# Ultra-Quick Final Revision Sheet

| Topic | Must-remember result |
|---|---|
| Implication | \(p\to q\equiv\neg p\lor q\) |
| Quantifier negation | \(\neg\forall=\exists\neg\), \(\neg\exists=\forall\neg\) |
| Pigeonhole guarantee | \(k(r-1)+1\) |
| Handshaking | \(\sum\deg=2|E|\) |
| Euler | circuit: 0 odd vertices; path: 2 odd vertices |
| Bipartite | iff no odd cycle |
| Tree | connected, acyclic, \(|E|=|V|-1\) |
| Function composites | \(f\circ g=6x+7\), \(g\circ f=6x+11\) |
| Marble problem | \(\binom62\binom52=150\) |
| Same class problem | 17 students |
| LCG | 7, 8, 6, 1, 2, 0, 4, 5, 3, 7 |
| Term 211 MST | weight 21 |
| Common postfix | answer 4 |
