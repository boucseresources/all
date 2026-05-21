??? "Solve this: <br> (a) Define data structure. Shortly explain data structure operations. 5<br>(b) Define algorithms time-space tradeoff. Explain first pattern matching algorithm with example. 7<br>(c) Define floor and ceiling function with example. 2"

    
    ### (a) Define Data Structure & Operations (Marks: 5)

    #### **Definition:**

    A **Data Structure** is a specialized format for organizing, processing, retrieving, and storing data in a computer's memory so that operations can be performed efficiently. It establishes a logical relationship between data elements.

    > **সহজ কথায়:** মেমরিতে ডেটা এলোমেলো না রেখে যেভাবে সাজিয়ে রাখলে সহজে এবং দ্রুত কাজ করা যায়, তাকেই ডেটা স্ট্রাকচার বলে (যেমন: Array, Linked List)।

    #### **Data Structure Operations:**

    There are 6 fundamental operations that can be performed on any data structure:

    * **Traversing:** Visiting each data element exactly once so that it can be processed (e.g., printing all elements of an array).
    * **Searching:** Finding the location of a specific element (target) within the data structure.
    * **Inserting:** Adding a new element to the data structure at a specific position.
    * **Deleting:** Removing an existing element from the data structure.
    * **Sorting:** Arranging the elements in a specific logical order (e.g., ascending or descending for numbers, alphabetical for strings).
    * **Merging:** Combining the elements of two different sorted data structures into a single sorted data structure.

    ---

    ### (b) Algorithm's Time-Space Trade-off & First Pattern Matching Algorithm (Marks: 7)

    #### **Time-Space Trade-off:**

    The **Time-Space Trade-off** refers to a situation in computer science where you can reduce the execution time of an algorithm by consuming more memory (space), or conversely, you can reduce memory usage at the cost of making the algorithm run slower.

    * **More Space, Less Time:** Using a Lookup Table or Hashing. You store precomputed values in memory, so the program runs instantly.
    * **Less Space, More Time:** Using a slow sorting algorithm that sorts "in-place" without taking any extra memory, but takes a long time to finish.

    #### **First Pattern Matching Algorithm (Brute-Force / Naive Algorithm):**

    The "First Pattern Matching Algorithm" usually refers to the **Naive or Brute-Force String Search Algorithm**.

    * **Concept:** It checks for the presence of a "Pattern" ($P$) inside a "Main Text" ($T$) by shifting the pattern one character at a time from left to right and comparing it with the text.

    #### **Example:**

    * **Main Text ($T$):** `"ABBCD"` (Length $N = 5$)
    * **Pattern ($P$):** `"BCD"` (Length $M = 3$)

    **Step-by-step Execution:**

    1. **Shift 0:** Compare $T[0..2]$ (`"ABB"`) with $P$ (`"BCD"`).
    * `'A'` does not match `'B'`. **Mismatch!** Shift pattern by 1.


    2. **Shift 1:** Compare $T[1..3]$ (`"BBC"`) with $P$ (`"BCD"`).
    * `'B'` matches `'B'`, `'B'` matches `'C'`. **Mismatch!** Shift pattern by 1.


    3. **Shift 2:** Compare $T[2..4]$ (`"BCD"`) with $P$ (`"BCD"`).
    * `'B'=='B'`, `'C'=='C'`, `'D'=='D'`. **Match Found!**



    **Output:** Pattern found at Index 2.

    ---

    ### (c) Floor and Ceiling Function with Example (Marks: 2)

    These are mathematical functions used to round real numbers to the nearest integers.

    #### **1. Floor Function ($\lfloor x \rfloor$):**

    The floor function takes a real number $x$ and rounds it **down** to the largest integer that is less than or equal to $x$.

    * **Formula:** $\lfloor x \rfloor = \text{greatest integer } \le x$
    * **Examples:**
    * $\lfloor 4.7 \rfloor = 4$
    * $\lfloor -2.3 \rfloor = -3$ (Because $-3$ is less than $-2.3$)



    #### **2. Ceiling Function ($\lceil x \rceil$):**

    The ceiling function takes a real number $x$ and rounds it **up** to the smallest integer that is greater than or equal to $x$.

    * **Formula:** $\lceil x \rceil = \text{smallest integer } \ge x$
    * **Examples:**
    * $\lceil 4.1 \rceil = 5$
    * $\lceil -2.3 \rceil = -2$ (Because $-2$ is greater than $-2.3$)
