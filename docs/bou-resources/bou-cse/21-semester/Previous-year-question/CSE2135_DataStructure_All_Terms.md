# CSE2135 — Data Structure

**Bangladesh Open University — School of Science and Technology**
**B. Sc in Computer Science and Engineering Program — 2nd Year 1st Semester**

> **General instruction (all terms):** Answer any 5 (five) questions. The figures in the right margin indicate the full marks. All portions of each question must be answered sequentially.
> **Time:** 3 hours | **Total Marks:** 5×14 = 70

---

## 161 Term (Jan – Jun 2016)

**1.**
(a) Define data structure. Shortly explain data structure operations.   `5`
(b) Define algorithms time-space tradeoff. Explain first pattern matching algorithm with example.   `7`
(c) Define floor and ceiling function with example.   `2`

**2.**
(a) Find
   (i) DELETE ('AAABBB', 2, 2) and DELETE ('JOHN PAUL JONES', 6, 5)
   (ii) REPLACE ('AAABBB', 'AA', 'BB') and REPLACE ('JOHN PAUL JONES','PAUL','DAVID')
(b) Consider the linear arrays X (-10:10), Y (1935:1985), Z(35)   `5`
   (i) Find the number of elements in each array
   (ii) Suppose Base (Y) = 400 and w = 4 words per memory cell for Y. Find the address of Y[1942], Y[1977] and Y[1988]
(c) Define Sparse matrix. Write down the Matrix Multiplication algorithm.   `6`

**3.**
(a) Define linear list. Explain the process of inserting an element in a linear linked list.   `10`
(b) Define doubly linked list. Mention the application of linked list.   `4`

**4.**
(a) Define stack. Mention the basic operation in stack with example.   `4`
(b) Consider the following arithmetic infix expression Q as
   A + (B * C - (D / E↑F) * G) * H. Translate this expression into Prefix and Postfix notation.   `8`
(c) What are the basic distinction between stack and queue?   `2`

**5.**
(a) Define Queue. Explain Enqueue operation with example.   `5`
(b) Define priority queue. Explain Dequeue operation with example.   `5`
(c) Explain the linked list implementation of queue.   `4`

**6.**
(a) Define the following term with necessary example: (i) Graph, (ii) Multigraph and (iii) Directed Graph.   `6`
(b) Develop a Huffman tree using the following node weights: 20, 2, 8, 7, 4, 10, and 14.   `3`
(c) Define maxheap and minheap? Built a heap from the following list of numbers: 44, 30, 50, 22, 60, 55, 77   `5`

**7.**
(a) How many ways a binary tree can be represented in memory?   `2`
(b) Consider the following binary tree. Find the sequence of nodes when traversing in (i) Pre-order, (ii) In-order, and (iii) Post-order.   `6`

> *Binary tree:*
> ```
>                  ┌───┐
>                  │ A │
>                  └─┬─┘
>            ┌──────┴──────┐
>          ┌─┴─┐         ┌─┴─┐
>          │ B │         │ C │
>          └─┬─┘         └─┬─┘
>        ┌───┴───┐         │
>      ┌─┴─┐   ┌─┴─┐     ┌─┴─┐
>      │ D │   │ E │     │ F │
>      └─┬─┘   └─┬─┘     └─┬─┘
>      ┌─┴─┐  ┌──┴──┐    ┌─┴─┐
>      │ N │┌─┴─┐ ┌─┴─┐  │ M │
>      └───┘│ G │ │ H │  └───┘
>           └─┬─┘ └───┘
>         ┌──┴──┐
>       ┌─┴─┐ ┌─┴─┐
>       │ I │ │ J │
>       └───┘ └───┘
> ```

(c) Draw the binary tree using the following algebra expression:
   [a + (b - c) * [(d - e) / (f + g - h)]]. Then traverse it in (i) pre-order and (ii) Post order.   `6`

---

## 171 Term (2nd Year 1st Semester) Final Examination

**1.**
(a) Define data structure. Explain data structure operations.   `1+3`
(b) Define algorithms complexity and time-space tradeoff.   `4`
(c) Find the following:   `3`
   (i) INSERT ('AAAAA', 3, BBB);
   (ii) DELETE ('AAABBB', 2, 2);
   (iii) REPLACE ('AAABBB', 'AA', BB).
(d) Write linear search algorithm.   `3`

**2.**
(a) Define linear linked list. Write down the steps of inserting an element into a linked list with example.   `1+3`
(b) Define doubly linked list. Write down the steps of deleting an element from a linear linked list with example.   `1+4`
(c) Write the definition of header linked list with example.   `2`
(d) What are garbage collection, overflow and underflow?   `3`

**3.**
(a) What are the correct intermediate steps of the following data set when it is being sorted with the bubble sort? Data set-15,55,35,05,45   `4`
(b) Write an algorithm which replaces every occurrence of pattern P in Text T by a new pattern Q.   `4`
(c) Suppose S="BANGLADESH IS THE MOST BEAUTIFUL COUNTRY" and T="IN THE WORLD"   `3`
   a) Find the length of S and T
   b) Find- SUBSTRING(S, 9, 20)
   c) Find- INDEX (S, 'THE') and INDEX (T, 'THE')
(d) Define static, semistatic and dynamic character variable.   `3`

**4.**
(a) Define stack. Write down the algorithm for PUSH and POP operation.   `1+3`
(b) Convert the following infix expression Z to its equivalent postfix expression.
   Z: P + ( Q * R - ( S / T ↑ U ) * V ) * W   `3`
(c) Write the Quick Sort algorithm.   `5`
(d) Show the tree diagram of recursive solution to Tower of Hanoi problem for n = 3.   `2`

**5.**
(a) Perform the Radix sort on the following array:
   [1256 5897 4523 1536 3246 6742 5566].   `5`
(b) Suppose an array is: [6 8 1 4 5 3 7 2] and your goal is to put it into ascending order using Selection sort.   `3`
(c) Let DATA be the following elements:
   DATA: 30, 33, 11, 22, 60, 55, 40, 44, 99, 88, 80, 77, 66.
   Apply the binary search algorithm to search DATA ITEM = 40 and ITEM = 85.   `6`

**6.**
(a) Write down the Depth-First Search algorithm of graph.   `3`
(b) Find BFS for the following graph using 'A' as the starting node and 'G' is the destination:   `5`

> *Directed graph:*
> ```
>            ┌───┐
>       ┌───►│ B │────┐
>       │    └───┘    ▼
>     ┌─┴─┐         ┌───┐
>     │ A │         │ D │
>     └─┬─┘         └─┬─┘
>       │    ┌───┐    │
>       └───►│ C │◄───┘
>            └─┬─┘
>     ┌───┐    │    ┌───┐
>     │ S │────┴───►│ G │
>     └───┘         └───┘
> ```

(c) Construct an adjacent matrix and adjacent list for the following directed graph.   `4`

> *Directed graph:*
> ```
>         ┌───┐         ┌───┐         ┌───┐
>         │ 0 │────────►│ 1 │────────►│ 2 │
>         └─┬─┘         └─┬─┘         └─┬─┘
>           │             │             │
>           ▼             ▼             ▼
>         ┌───┐         ┌───┐         ┌───┐
>         │ 3 │────────►│ 4 │────────►│ 5 │
>         └───┘         └───┘         └───┘
> ```

(d) Define minimum spanning tree.   `2`

**7.**
(a) What is binary search tree? Construct a binary search tree by inserting the following sequence of numbers: 10, 12, 5, 4, 20, 8, 7, 15, 13.   `2+3`
(b) Build a heap from the following list of numbers:
   54, 40, 60, 32, 70, 55, 47,25   `3`
(c) Consider the following binary tree. Find the sequence of nodes when traversing in
   (i) Pre-order, (ii) In-order, and (iii) Post-order   `3`

> *Binary tree:*
> ```
>                 ┌───┐
>                 │ A │
>                 └─┬─┘
>           ┌──────┴──────┐
>         ┌─┴─┐         ┌─┴─┐
>         │ B │         │ C │
>         └─┬─┘         └─┬─┘
>       ┌───┴───┐     ┌───┴───┐
>     ┌─┴─┐   ┌─┴─┐ ┌─┴─┐   ┌─┴─┐
>     │ D │   │ E │ │ F │   │ G │
>     └───┘   └─┬─┘ └───┘   └───┘
>           ┌───┴───┐
>         ┌─┴─┐   ┌─┴─┐
>         │ H │   │ I │
>         └───┘   └───┘
> ```

(d) Develop a Huffman tree and find Huffman code using the following node weights:   `3`

| A  | B  | C  | D  | E  | F  |
|----|----|----|----|----|----|
| 12 | 24 | 05 | 32 | 43 | 16 |

---

## 181 Term (2nd Year 1st Semester) Final Examination

**1.**
(a) Define data structure? Distinguish between static and dynamic data structure.   `1+2`
(b) What do you understand by time complexity? Define Ω notation, Θ notation and O notation.   `1+3`
(c) What do you understand by time space trade-off?   `3`
(d) Write Linear Search algorithm and find out the complexity of it.   `4`

**2.**
(a) Write an algorithm which replaces every occurrence of pattern P in Text T by a new pattern Q.   `4`
(b) Describe the three types of structures used for storing strings.   `3`
(c) Find the following:   `3`
   (i) INSERT ('PQRSPQRS', 4, AAA);
   (ii) DELETE ('DATA STRUCTURE', 5, 4);
   (iii) REPLACE ('XYZXYZXXZZYY', 'ZXY', 'YXZ').
(d) What are the correct intermediate steps of the following data set when it is being sorted with the bubble sort? Data set-20,60,50,10,40,70,30   `4`

**3.**
(a) Write the Binary Search algorithm. What is the limitation of Binary Search algorithm?   `1+3`
(b) How do you insert and delete an item in a linked list? Explain it with proper example.   `2+2`
(c) Write the definition of header linked list and two-way link list with example.   `2+2`
(d) Define Garbage Collection.   `2`

**4.**
(a) Define Stack and Queue. What is the main difference between them?   `3+1`
(b) Convert the following infix expression to its equivalent postfix expression.
   A*(B+D)/E-F*(G+H/K)   `3`
(c) Write the Quick Sort algorithm.   `5`
(d) Write a recursive algorithm for the Tower of Hanoi problem.   `2`

**5.**
(a) Consider the following binary tree. Find the sequence of nodes when traversing in (i) Pre-order, (ii) In-order, and (iii) Post-order.   `3`

> *Binary tree:*
> ```
>                 ┌───┐
>                 │ A │
>                 └─┬─┘
>           ┌──────┴──────┐
>         ┌─┴─┐         ┌─┴─┐
>         │ B │         │ C │
>         └─┬─┘         └─┬─┘
>       ┌───┴───┐         │
>     ┌─┴─┐   ┌─┴─┐     ┌─┴─┐
>     │ D │   │ E │     │ F │
>     └─┬─┘   └─┬─┘     └─┬─┘
>     ┌─┴─┐  ┌──┴──┐    ┌─┴─┐
>     │ N │┌─┴─┐ ┌─┴─┐  │ M │
>     └───┘│ G │ │ H │  └───┘
>          └─┬─┘ └───┘
>        ┌──┴──┐
>      ┌─┴─┐ ┌─┴─┐
>      │ I │ │ J │
>      └───┘ └───┘
> ```

(b) Write the definition of Complete Binary tree and 2-Tree.   `3`
(c) Built a Max-heap from the following list of numbers:
   22,62,32,52,42,72,92,82,12   `4`
(d) Develop a Huffman tree and find Huffman code using the following node weights:   `4`

**6.**
(a) What is graph? List the real-world applications of graphs.   `1+2`
(b) Demonstrate the adjacency matrix and linked list representation of the following graph:   `4`

> *Undirected graph:*
> ```
>        ┌───┐                    ┌───┐
>        │ 1 │────────────────────│ 2 │
>        └─┬─┘                    └─┬─┘
>          │       ┌───┐            │
>          └───────│ 4 │────────────┤
>          │       └─┬─┘            │
>        ┌─┴─┐       │            ┌─┴─┐
>        │ 5 │───────┤────────────│ 3 │
>        └─┬─┘       │            └───┘
>          │       ┌─┴─┐
>          └───────│ 6 │
>                  └───┘
> ```

(c) What is BFS and DFS? Find all the possible path which is reachable from E for following graph [use DFS algorithm]   `3+4`

> *Directed graph:*
> ```
>          ┌───┐         ┌───┐         ┌───┐
>          │ F │────────►│ B │◄────────│ A │
>          └─▲─┘         └─┬─┘         └─▲─┘
>            │             │             │
>          ┌─┴─┐           │             │
>          │ E │           ▼             │
>          └─┬─┘         ┌───┐         ┌─┴─┐
>            │           │ D │────────►│ C │
>            ▼           └───┘         └───┘
>          ┌───┐           ▲
>          │ G │───────────┘
>          └───┘
> ```

**7.**
(a) What is binary search tree? Draw a binary search tree for the following data: 5, 10, 20, 3, 2, 7, 11, 18, 17.   `1+2`
(b) Perform the Radix sort on the following array:
   [345 456 123 678 657 982 281 342 765 906]   `3`
(c) Draw the sorting procedure of the following data for the insertion sort:
   4, 3, 2, 10, 12, 1, 5, 6.   `4`
(d) What is merge sort? Draw the diagram that shows the complete merge sort process for the following unsorted data: 38, 27, 43, 3, 9, 82, 10.   `1+3`

---

## 191 Term (2nd Year 1st Semester) Final Examination

**1.**
a) Define data structure. Briefly explain data structure operations.   `4`
b) Explain algorithm complexity and Time-space tradeoff.   `4`
c) What is asymptotic notation?   `2`
d) Write the Binary Search algorithm. What is the limitation of Binary Search algorithm?   `3+1`

**2.**
(a) Consider the following array and apply the Bucket sort algorithm to sort the data
   A: 3216, 1953, 7269, 6517, 5432, 2806, 4920
(b) Write an algorithm for Selection sort.   `4`
(c) Suppose an array is: [6 8 1 4 5 3 7 2] – and your goal is to put it into ascending order using Insertion sort algorithm.
(d) Write the algorithm for Tower of Hanoi problem.

**3.**
(a) Define linear linked list. Write down the steps of inserting an element into a linked list with example.   `1+3`
(b) Define doubly linked list. Write down the steps of deleting an element from a linear linked list with example.   `1+3`
(c) Write down the applications of linked list.
(d) What are garbage collection, overflow and underflow?

**4.**
(a) Define stack. Explain PUSH and POP algorithm with an example.   `1+3`
(b) Consider the following arithmetic infix expression:
   Q: A + ( B * C - ( D ↑ E ↑ F ) * G ) * H
   Transform Q into its equivalent postfix expression using stack.   `5`
(c) Explain Enqueue and Dequeue operations with example.
(d) Write the Quick sort algorithm.   `4`

**5.**
(a) Consider the following binary tree. Find the sequence of nodes when traversing in
   (i) Pre-order, (ii) In-order, and (iii) Post-order

> *Binary tree (same form as 161 paper):*
> ```
>                 ┌───┐
>                 │ A │
>                 └─┬─┘
>           ┌──────┴──────┐
>         ┌─┴─┐         ┌─┴─┐
>         │ B │         │ C │
>         └─┬─┘         └─┬─┘
>       ┌───┴───┐     ┌───┴───┐
>     ┌─┴─┐   ┌─┴─┐ ┌─┴─┐   ┌─┴─┐
>     │ D │   │ E │ │ F │   │ G │
>     └───┘   └─┬─┘ └───┘   └───┘
>           ┌───┴───┐
>         ┌─┴─┐   ┌─┴─┐
>         │ H │   │ I │
>         └───┘   └───┘
> ```

(b) Define binary search tree. Draw a binary search tree from the following data
   50,33,44,22,77,35,60,15,85,20,100.   `3`
(c) Build a max heap from the following list of numbers:
   15,35,45,25,75,55,65,05,95,85
(d) Develop a Huffman tree and find Huffman code using the following node weights:

| P  | Q  | R  | S  | T  | U  | V  | W  |
|----|----|----|----|----|----|----|----|
| 23 | 19 | 06 | 12 | 32 | 16 | 42 | 37 |

**6.**
(a) Determine whether the given graph has Hamiltonian circuit. If it does, find such a circuit.   `5`

> *Graphs (two figures):*
> ```
>   Left graph:                  Right graph (house):
>     v1 ─────────── v3              a ────── b
>      \   v7   v2  /                 \      │
>       \  /     \ /                   \     │
>        \/       \                     \    │
>        /\       /\                     c   │
>       /  \     /  \                   /    │
>      /    v4  v2   \                 /     │
>     v6 ─────────── v5              e ────── d
> ```

(b) Differentiate between Eulerian graph and Hamiltonian graph with example.   `5`
(c) Prove that an undirected graph has an even number of vertices of odd degree.   `4`

**7.**
(a) Show that the given graph are isomorphic.   `5`

> *Two graphs to compare:*
> ```
>   Pentagon:                  Star (5-pointed):
>          b                          b1
>        /   \                       /\
>       /     \                     /  \
>      a       c               a1 ╳   ╳ c1
>      │       │                  ╳╳╳
>      │       │                 e1   d1
>      e ───── d
> ```

(b) In which order does a post-order traversal, in order traversal, pre-order traversal list the vertices in the ordered rooted tree shown below:   `5`

> *Ordered rooted tree:*
> ```
>                     ┌───┐
>                     │ a │
>                     └─┬─┘
>             ┌─────────┴─────────┐
>           ┌─┴─┐               ┌─┴─┐
>           │ b │               │ f │
>           └─┬─┘               └─┬─┘
>         ┌───┴───┐               │
>       ┌─┴─┐   ┌─┴─┐           ┌─┴─┐
>       │ c │   │ d │           │ g │
>       └───┘   └─┬─┘           └───┘
>               ┌─┴─┐
>               │ h │
>               └─┬─┘
>             ┌───┴───┐
>           ┌─┴─┐   ┌─┴─┐
>           │ e │   │   │
>           └─┬─┘   └─┬─┘
>           ┌─┴─┐   ┌─┴─┐
>           │ i │   │ j │
>           └───┘   └───┘
> ```

(c) Evaluate the expression: 3 2 * 2 ↑ 5 3 − 8 4 / * −.   `4`

---

## 201 Term (2nd Year 1st Semester) Final Examination

**1.**
(a) Define data structure. Describe in brief the basic operation of data structure.   `1+2`
(b) Suppose DATA is an array of numerical values in memory. Write down the algorithm and the flow chart to find the location LOC and the value MAX of the largest element in DATA.   `4`
(c) For the pattern P = aaa and text T = (aabb)³ find the number of comparisons to find the INDEX of P in T using the 'slow' algorithm.   `2`
(d) What are the linear and nonlinear data structures? Show the transformation of the following infix expression into postfix expression by applying stack:
   "5 * ( 6 + 2 ) − 12 / 4".   `2+3`

**2.**
(a) Find the table and corresponding graph for the second pattern matching algorithm where the pattern is P = a²b²(ab)²   `4`
(b) Suppose T contains the text 'INFORMATION AND COMMUNICATION TECHNOLOGY' Find   `5`
   (i) SUBSTRING ( T, 17, 24)
   (ii) INDEX ( T, 'CATION' )
   (iii) INSERT ( T, 31, 'ENGINEERING ')
   (iv) DELETE ( T, 13, 18)
   (v) REPLACE ( T, 'TECHNOLOGY', 'SCIENCE')
(c) Describe briefly the meaning of static, semi static and dynamic variables.   `3`
(d) Define linear array. Which operations are normally performed on any linear structure?   `1+1`

**3.**
(a) What is the advantage of using the linked list implementation of queues, as opposed to the array implementation? Suppose, you have a doubly linked list with the following elements: 10 ←→ 20 ←→ 30 ←→ 50 ←→ NULL. Now, write a procedure to insert an element after a value x. Also, show the steps of your procedure to insert an element with value 40 after 30. After inserting 40 the list should be changed to: 10 ←→ 20 ←→ 30 ←→ 40 ←→ 50 ←→ NULL   `2+4`
(b) Write down an algorithm if we want to insert ITEM as the first node in a linked list.   `3`
(c) Suppose STACK is allocated N=6 memory cells and initially STACK is empty, or, in other words TOP=0. Find the output of the following module.   `2`

```
1. Set AAA:= 2 and BBB:= 5
2. call PUSH ( STACK, AAA )
   call PUSH ( STACK, 4 )
   call PUSH ( STACK, BBB + 2 )
   call PUSH ( STACK, 9 )
   call PUSH ( STACK, AAA + BBB )
3. Repeat while TOP != 0
       call POP ( STACK, ITEM )
       write : ITEM
   [ End of loop ]
4. Return.
```

(d) Let a and b denote positive integers. Suppose Q is defined recursively as follows:   `3`
```
            ⎧ 0                  if a < b
Q (a, b) = ⎨
            ⎩ Q (a − b, b) + 1   if b ≤ a
```
Find the value of (i) Q (2, 3)   (ii) Q (14, 3)

**4.**
(a) Write down binary search algorithm.   `3`
(b) Using the bubble sort algorithm, find the number C of comparisons and the number D of interchanges which alphabetize the n=6 letters in PEOPLE.   `4`
(c) Why Quick sort is preferred over Merge sort for sorting arrays? Perform a partitioning of the array [ E, V, E, R, Y, E, Q, U, A, L, K, E, Y, S, T, O, P, S, I, T ] with standard quick sort partitioning (taking the E at the left as the partitioning item and listen every swapping performed in this partitioning).   `2+5`

**5.**
(a) What do you mean by stack and queue? Write down an algorithm which pushes an item on to a stack.   `1+3`
(b) Write short notes on i) Extended Binary Trees and ii) Complete Binary Trees   `4`
(c) Construct a binary tree T from the following equation E and the find out the   `6`
   (i) pre order, (ii) in order and (iii) post order traversal of tree T.
   E: [ a * ( b ↑ c ) + d ] − [ ( e − f + g ) / ( h ↑ i − j ) ]

**6.**
(a) Which of the multigraphs in figure are i) connected, ii) loop-free, and iii) graphs.   `2`

> *Multigraphs (figures 1–4):*
> ```
>   (1)       (2)            (3)              (4)
>    ●─●      ●               ●─────●          ●
>    │╳│     /│\              │     │         ╱│╲
>    ●─●    ● │ ●             ●─────●        ●─┼─●
>            \│/              (with loop)     ╲│╱
>             ●                                 ●
> ```

(b) Suppose the graph G represents the daily flights between cities of some airlines, and, suppose we want to fly from city A to city J with the minimum number of stops. Find out the minimum path P from A to J using breadth first search (BFS) algorithm.   `7`

> *Flight graph:*
> ```
>                       ┌───┐
>                       │ A │
>                       └─┬─┘
>                ┌────────┼────────┐
>              ┌─┴─┐    ┌─┴─┐    ┌─┴─┐
>              │ F │────│ C │────│ B │
>              └─┬─┘    └─┬─┘    └─┬─┘
>                │        │        │
>              ┌─┴─┐    ┌─┴─┐    ┌─┴─┐
>              │ D │────│ E │────│ G │
>              └─┬─┘    └─┬─┘    └─┬─┘
>                │        │        │
>              ┌─┴─┐    ┌─┴─┐
>              │ J │────│ K │
>              └───┘    └───┘
> ```

(c) Consider a company each of whose 68 employees is assigned a unique 4 digit employee number as follows:   `5`
   **9614, 5882, 6713, 4409, 1825**
Find a 2 digit hash address of each number using
   (i) The division method.
   (ii) The mid square method.
   (iii) The folding method without reversing and with reversing.

**7.**
(a) What is meant by perfect hash function? Suppose you are given the following set of case to insert into a hash table that holds exactly seven values 113, 117, 97, 100, 114, 99. Systematically show the contents of the hash table after all the keys have been inserted sequentially using "plus 3" probing. Also determine the load factor of the resultant hash table.   `1+6`
(b) What does it mean that a shorting algorithm is stable? "Radix sort can be slower and more memory hungry than some other algorithms" - Do you agree or not justify your answer.   `2+5`

---

*End of CSE2135 Data Structure compilation.*
