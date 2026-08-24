## Question 1: Describe the three types of structures used for storing strings, mentioning one advantage and one disadvantage of each.

??? "Question 1: Describe the three types of structures used for storing strings, mentioning one advantage and one disadvantage of each."

    In string processing, strings are sequences of characters. Based on memory allocation strategies (মেমোরি বণ্টন কৌশল) and structural organization, three primary structures are used to store strings:

    ### 1. Fixed-Length Array Structure (স্থির দৈর্ঘ্যের অ্যারে কাঠামো / Record Structure)

    * **Description:** Memory is allocated as a static, fixed-size contiguous block (পরস্পর সংলগ্ন মেমোরি ব্লক) capable of holding a predetermined maximum number of characters ($N$). If the actual string length is less than $N$, the remaining slots are filled with padding characters (যেমন: ফাঁকা স্থান বা Null Character).
    * **Advantage:** Direct and rapid $O(1)$ random access (যথেচ্ছ মেমোরি অ্যাক্সেস) to any character via array indexing, along with simple memory management (সহজ মেমোরি ব্যবস্থাপনা) as pointer overhead is zero.
    * **Disadvantage:** Inflexible capacity leading to internal fragmentation (অভ্যন্তরীণ মেমোরি অপচয়) when storing short strings, and risk of data truncation (ডেটা ছেঁটে যাওয়া) or buffer overflow if the string exceeds the pre-allocated length $N$.

    ### 2. Variable-Length Structure with Fixed Maximum (পরিবর্তনশীল দৈর্ঘ্য সহ স্থির সর্বোচ্চ সীমা)

    * **Description:** Memory is allocated up to a fixed maximum bound ($N_{\max}$), but the actual current length ($L \le N_{\max}$) is dynamically tracked using either an explicit length header (দৈর্ঘ্য নির্দেশক হেডার) at the start of the memory block or a sentinel marker (যেমন: Null Character `\0`).
    * **Advantage:** Eliminates the need for blank padding, allowing precise processing up to the actual string boundary while preventing character truncation up to $N_{\max}$.
    * **Disadvantage:** Memory allocation remains bounded by $N_{\max}$, leading to wasted reserved memory (অনব্যবহৃত সংরক্ষিত স্থান) if the assigned maximum bound is significantly larger than typical string sizes.

    ### 3. Linked Storage Structure (লিঙ্কড স্টোরেজ কাঠামো / Pointer-based Representation)

    * **Description:** Strings are stored across a collection of dynamically allocated nodes (গতিশীলভাবে বরাদ্দকৃত নোড), where each node contains one or a small block of characters along with a pointer (পয়েন্টার / সংযোগ নির্দেশক) to the next node in sequence.
    * **Advantage:** Completely dynamic memory allocation (সম্পূর্ণ গতিশীল মেমোরি বণ্টন); strings can grow or shrink indefinitely without fixed bounds, and insertion or deletion operations require only pointer manipulation rather than shifting contiguous elements.
    * **Disadvantage:** High memory overhead (অতিরিক্ত মেমোরি খরচ) due to pointer fields stored alongside character data, along with poor spatial locality of reference (স্থানিক মেমোরি স্থানীয়তা) which degrades CPU cache efficiency.


    **1. Fixed-Length Array Structure**

    In this approach, memory is statically allocated for a fixed character count. Unused positions are explicitly padded (often with whitespace or zero bytes), and the string cannot exceed the allocated array boundary.

    ```c
    #define FIXED_SIZE 10

    // Fixed-length record: 10 bytes allocated, padded with blank spaces
    char fixed_str[FIXED_SIZE] = "Data      ";

    // Accessing character at index 2 (O(1) random access)
    char c = fixed_str[2]; // 't'

    ```

    ---

    **2. Variable-Length Structure with Fixed Maximum**

    This structure allocates a fixed maximum buffer, but tracks the actual string length either via a sentinel character (standard C null-terminator `\0`) or an explicit length prefix.

    ```c
    #define MAX_SIZE 100

    // Method A: Standard Null-Terminated String
    char str_sentinel[MAX_SIZE] = "Hello"; // Current length = 5, tracks end via '\0'

    // Method B: Explicit Length-Prefixed Record (Length Header)
    struct VarStringFixedMax {
        int length;               // Stores current logical length (e.g., 5)
        char data[MAX_SIZE];      // Fixed maximum capacity of 100 characters
    };

    struct VarStringFixedMax str_header = {5, "Hello"};

    ```

    ---

    **3. Linked Storage Structure**

    Characters are stored in dynamically allocated nodes on the heap connected via pointers. This allows indefinite growth at runtime at the expense of pointer overhead.

    ```c
    #include <stdlib.h>

    // Singly Linked List: One character per node
    struct CharNode {
        char data;
        struct CharNode *next;
    };

    // Chunked / Blocked Linked List: Reduces pointer overhead by storing small arrays per node
    struct BlockNode {
        char chunk[4];            // 4-character block per node
        struct BlockNode *next;   // Pointer to next block
    };

    // Example node creation
    struct CharNode *create_node(char c) {
        struct CharNode *node = (struct CharNode *)malloc(sizeof(struct CharNode));
        node->data = c;
        node->next = NULL;
        return node;
    }

    ```



## Question 2: Explain the purpose of the following string operations: LENGTH, SUBSTRING, INDEX, INSERT, DELETE and REPLACE.

??? "Question 2: Explain the purpose of the following string operations: LENGTH, SUBSTRING, INDEX, INSERT, DELETE and REPLACE."

    String processing relies on primitive operations (মৌলিক অপারেটর) defined as follows:

    **1. LENGTH(S)**

    * **Purpose:** Determines and returns the cardinality (উপাদান সংখ্যা / মোট অক্ষরের সংখ্যা) or total length of string $S$.
    * **Formal Definition:** Returns $n = \vert{}S\vert{}$, where $n \ge 0$.
    * **C Example:**

    ```c
    #include <stdio.h>
    #include <string.h>

    char S[] = "Algorithm";
    int len = strlen(S); // Returns 9

    ```

    ---

    **2. SUBSTRING(S, initial, length)**

    * **Purpose:** Extracts a continuous sequence of characters (উপ-স্ট্রিং নিষ্কাশন) from string $S$, starting at position `initial` and spanning `length` characters.
    * **Formal Definition:** If $S = s_1 s_2 \dots s_n$, then $\text{SUBSTRING}(S, i, k) = s_i s_{i+1} \dots s_{i+k-1}$.
    * **C Example:**

    ```c
    char S[] = "Structure";
    char sub[5];

    // Extract 4 characters starting from index 3 ('u', 'c', 't', 'u')
    strncpy(sub, S + 3, 4);
    sub[4] = '\0'; // Null-terminate -> "uctu"

    ```

    ---

    **3. INDEX(S, pattern)**

    * **Purpose:** Searches string $S$ for the first occurrence of a target `pattern` and returns its starting index (সূচনা স্থান / অবস্থান নির্দেশক). If `pattern` does not exist in $S$, it returns $0$ (or a sentinel value like $-1$).
    * **Formal Definition:** Returns $i$ such that $\text{SUBSTRING}(S, i, \vert\text{pattern}\vert) = \text{pattern}$, or $-1$ if no match exists.
    * **C Example:**

    ```c
    char S[] = "DataStructure";
    char *ptr = strstr(S, "Struct");

    // Calculate 0-based starting index using pointer arithmetic
    int index = (ptr != NULL) ? (int)(ptr - S) : -1; // Returns 4

    ```

    ---

    **4. INSERT(S, position, sub)**

    * **Purpose:** Splices a new string `sub` into target string $S$ at a specified position, shifting (স্থানান্তরিত করা) existing characters at and after `position` to the right to make room.
    * **Formal Definition:** Transforms $S[1\dots n]$ into $S[1\dots i-1] + \text{sub} + S[i\dots n]$.
    * **C Example:**

    ```c
    char S[20] = "HELO"; // Allocate extra buffer for growth
    int pos = 3;         // Insert at index 3 before 'O'
    char sub[] = "L";

    // Shift trailing characters "O\0" right by strlen(sub)
    memmove(S + pos + strlen(sub), S + pos, strlen(S) - pos + 1);
    // Copy substring into vacated slot
    memcpy(S + pos, sub, strlen(sub)); // S becomes "HELLO"

    ```

    ---

    **5. DELETE(S, position, length)**

    * **Purpose:** Removes a contiguous block of `length` characters from $S$ beginning at `position`, shifting remaining trailing characters (অবশিষ্ট অক্ষরসমূহ) leftward to fill the gap.
    * **Formal Definition:** Transforms $S[1\dots n]$ into $S[1\dots i-1] + S[i+k\dots n]$.
    * **C Example:**

    ```c
    char S[] = "Data_Base";
    int pos = 4, len = 1; // Remove '_' at index 4

    // Shift "Base\0" left over the removed character
    memmove(S + pos, S + pos + len, strlen(S) - (pos + len) + 1); // S becomes "DataBase"

    ```

    ---

    **6. REPLACE(S, pattern, replacement)**

    * **Purpose:** Locates target `pattern` inside string $S$ and substitutes (প্রতিস্থাপন করা) its occurrence with a new substring `replacement`.
    * **Formal Definition:** Equivalent to finding $i = \text{INDEX}(S, \text{pattern})$, followed by $\text{DELETE}(S, i, \vert\text{pattern}\vert)$ and $\text{INSERT}(S, i, \text{replacement})$.
    * **C Example:**

    ```c
    char S[30] = "Hello World";
    char *target = strstr(S, "World");

    if (target != NULL) {
        char buffer[30];
        int prefix_len = target - S;
        
        strncpy(buffer, S, prefix_len);
        buffer[prefix_len] = '\0';
        strcat(buffer, "Gemini");
        strcat(buffer, target + strlen("World"));
        
        strcpy(S, buffer); // S becomes "Hello Gemini"
    }

    ```

    ---

    **Question 3: Difference Between INSERT and REPLACE**

    | Feature / Metric | INSERT Operation | REPLACE Operation |
    | --- | --- | --- |
    | **Core Mechanism (মূল কার্যপ্রণালী)** | Splices new characters into a specific position without destroying existing characters; shifts existing characters right. | Overwrites/destroys existing characters or target patterns with new content. |
    | **Impact on Length (দৈর্ঘ্যের পরিবর্তন)** | Always increases string length: $\text{Len}_{\text{new}} = \text{Len}_{\text{old}} + \vert\text{sub}\vert$. | Length fluctuates depending on size difference: $\text{Len}_{\text{new}} = \text{Len}_{\text{old}} - \vert\text{pattern}\vert + \vert\text{replacement}\vert$. |
    | **Data Preservation (ডেটা সংরক্ষণ)** | Fully preserves all original characters in the target string. | Erases/discards specified characters from the target string. |
    | **Algorithmic Complexity (জটিলতা)** | Requires $O(N)$ memory shift of trailing characters in contiguous arrays. | Involves pattern search ($O(N \cdot M)$) followed by deletion and insertion/memory shift. |
    | **Execution Example** | $\text{INSERT}(\text{"HELO"}, 4, \text{"L"}) \rightarrow \text{"HELLO"}$ | $\text{REPLACE}(\text{"HELLA"}, \text{"A"}, \text{"O"}) \rightarrow \text{"HELLO"}$ |

    **C Implementation Comparison:**

    ```c
    // INSERT: Expands memory and preserves all original data
    char insert_str[20] = "HELO";
    memmove(insert_str + 4, insert_str + 3, 2); // Shift "O\0" right
    insert_str[3] = 'L';                        // Result: "HELLO" (Length increased from 4 to 5)

    // REPLACE: Overwrites data without increasing length (when sizes match)
    char replace_str[20] = "HELLA";
    replace_str[4] = 'O';                       // Overwrite 'A' with 'O' -> "HELLO" (Length remains 5)

    ```
---

## Question 3: Explain the difference between the INSERT operation and the REPLACE operation on a string.

| Feature / Metric | **INSERT Operation** | **REPLACE Operation** |
| --- | --- | --- |
| **Core Mechanism (মূল কার্যপ্রণালী)** | Splices new characters into a specific position without destroying (ধ্বংস না করে) existing characters. Existing characters are shifted right. | Overwrites/destroys (মুছে প্রতিস্থাপন করা) existing characters or target patterns with new content. |
| **Impact on Length (দৈর্ঘ্যের পরিবর্তন)** | Always increases string length by the inserted length: $\text{Len}_{\text{new}} = \text{Len}_{\text{old}} + \vert{}\text{sub}\vert{}$. | Length changes based on the difference: $\text{Len}_{\text{new}} = \text{Len}_{\text{old}} - \vert{}\text{pattern}\vert{} + \vert{}\text{replacement}\vert{}$. |
| **Data Preservation (ডেটা সংরক্ষণ)** | Fully preserves (পূর্ণাঙ্গ সংরক্ষণ) all original characters of the target string. | Erases/discards specified characters from the target string. |
| **Algorithmic Complexity (জটিলতা)** | Requires shifting trailing characters rightward: $O(N)$ memory shift in contiguous arrays. | Involves pattern search followed by deletion and insertion (or in-place memory overwriting). |
| **Example (উদাহরণ)** | `INSERT("HELO", 4, "L")` $\rightarrow$ `"HELLO"` | `REPLACE("HELLA", "A", "O")` $\rightarrow$ `"HELLO"` |

---

## Question 4: What is pattern matching? Explain how the first pattern matching algorithm works.

### What is Pattern Matching?

**Pattern Matching (প্যাটার্ন ম্যাচিং)** is the algorithmic process of determining the presence and starting position of a target string called a **Pattern** $P$ of length $m$, within a larger body of text called **Text** $T$ of length $n$ (where $m \le n$).

### How the First Pattern Matching Algorithm (Brute-Force / Naive Algorithm) Works

??? "How the First Pattern Matching Algorithm (Brute-Force / Naive Algorithm) Works"

    The first algorithm uses a sliding window approach (স্লাইডিং উইন্ডো পদ্ধতি) to scan the text $T$ sequentially from left to right:

    **Initial Setup**

    ```text
    Index:    0   1   2   3   4   5   6   7   8   9   10
    Text:     A   B   B   B   A   B   A   B   A   A   B
    Pattern:  A   B   A   A

    ```

    ---

    **Step 1: Alignment at Index 0**

    ```text
    Text:      A   B   B   B   A   B   A   B   A   A   B
    Pattern:   A   B   A   A
            |   |   |
            (✓) (✓) (✗) -> Mismatch at index 2 ('B' != 'A')

    ```

    * Compare 1st character: `A` == `A` (Match, move to next)
    * Compare 2nd character: `B` == `B` (Match, move to next)
    * Compare 3rd character: `B` != `A` (**Mismatch**)
    * **Action:** Shift pattern 1 position to the right and backtrack pointer.

    ---

    **Step 2: Alignment at Index 1**

    ```text
    Text:      A   B   B   B   A   B   A   B   A   A   B
    Pattern:       A   B   A   A
                |
                (✗) -> Mismatch at index 1 ('B' != 'A')

    ```

    * Compare 1st character: `B` != `A` (**Mismatch**)
    * **Action:** Shift pattern 1 position to the right.

    ---

    **Step 3: Alignment at Index 2**

    ```text
    Text:      A   B   B   B   A   B   A   B   A   A   B
    Pattern:           A   B   A   A
                    |
                    (✗) -> Mismatch at index 2 ('B' != 'A')

    ```

    * Compare 1st character: `B` != `A` (**Mismatch**)
    * **Action:** Shift pattern 1 position to the right.

    ---

    **Step 4: Alignment at Index 3**

    ```text
    Text:      A   B   B   B   A   B   A   B   A   A   B
    Pattern:               A   B   A   A
                        |
                        (✗) -> Mismatch at index 3 ('B' != 'A')

    ```

    * Compare 1st character: `B` != `A` (**Mismatch**)
    * **Action:** Shift pattern 1 position to the right.

    ---

    **Step 5: Alignment at Index 4**

    ```text
    Text:      A   B   B   B   A   B   A   B   A   A   B
    Pattern:                   A   B   A   A
                            |   |   |   |
                            (✓) (✓) (✓) (✗) -> Mismatch at index 7 ('B' != 'A')

    ```

    * Compare 1st character: `A` == `A` (Match)
    * Compare 2nd character: `B` == `B` (Match)
    * Compare 3rd character: `A` == `A` (Match)
    * Compare 4th character: `B` != `A` (**Mismatch**)
    * **Action:** Shift pattern 1 position to the right and backtrack pointer.

    ---

    **Step 6: Alignment at Index 5**

    ```text
    Text:      A   B   B   B   A   B   A   B   A   A   B
    Pattern:                       A   B   A   A
                                |
                                (✗) -> Mismatch at index 5 ('B' != 'A')

    ```

    * Compare 1st character: `B` != `A` (**Mismatch**)
    * **Action:** Shift pattern 1 position to the right.

    ---

    **Step 7: Alignment at Index 6**

    ```text
    Text:      A   B   B   B   A   B   A   B   A   A   B
    Pattern:                           A   B   A   A
                                    |   |   |   |
                                    (✓) (✓) (✓) (✓) -> Complete Match!

    ```

    * Compare 1st character: `A` == `A` (Match)
    * Compare 2nd character: `B` == `B` (Match)
    * Compare 3rd character: `A` == `A` (Match)
    * Compare 4th character: `A` == `A` (Match)

    All characters of the pattern match completely. The search stops, returning starting index **`6`**.
    ---

    ```c
    for (int i = 0; i <= n - m; i++) {
        int j;
        for (j = 0; j < m; j++) {
            if (T[i + j] != P[j]) {
                break; // Mismatch occurred; shift pattern right
            }
        }
        if (j == m) {
            return i; // Complete pattern matched at index i
        }
    }
    return -1; // Pattern not found
    ```

## Question 5: Why is the first pattern matching algorithm called the "slow" algorithm? Compare it briefly with the second pattern matching algorithm.

### Why is the First Algorithm Called "Slow"?

The Brute-Force algorithm is termed "slow" due to its **inefficient computational complexity** caused by **unnecessary backtracking (অপ্রয়োজনীয় পূর্বাবস্থায় ব্যাকট্র্যাকিং)** and redundant character comparisons (পুনরাবৃত্তিমূলক তুলনা).

* **Worst-Case Time Complexity:** $O(n \times m)$, where $n = \vert{}T\vert{}$ and $m = \vert{}P\vert{}$.
* **Reason for Inefficiency:** When a mismatch occurs near the end of pattern $P$, the algorithm discards all matching information already gathered about the text characters. It resets $K$ to $K+1$ and re-examines text characters that were already read in previous passes.
* *Example:* Searching $P = \text{"AAAB"}$ in $T = \text{"AAAAAAAAAAAAAB"}$ causes $(n - m + 1) \times m$ comparisons because every attempt matches $m-1$ characters before failing at the last character.

### Comparison: First Algorithm vs. Second Algorithm (KMP / Automaton Approach)

| Parameter | **First Algorithm (Brute-Force)** | **Second Algorithm (KMP / Automaton)** |
| --- | --- | --- |
| **Time Complexity (সময় জটিলতা)** | Worst Case: $O(n \cdot m)$ (Quadratic / দ্বিঘাত সময়) | Worst Case: $O(n + m)$ (Linear / রৈখিক সময়) |
| **Text Pointer Movement (টেক্সট পয়েন্টার সঞ্চালন)** | Backtracks (পিছনে ফিরে যায়) repeatedly upon mismatch ($K \rightarrow K+1$). | Moves strictly forward (একমুখী সঞ্চালন / Monotonic scan) without backtracking $T$. |
| **Use of Prior Information (পূর্বজ্ঞান ব্যবহার)** | Ignores previously matched characters (কোন তথ্য মনে রাখে না). | Reuses character knowledge using precomputed prefix patterns (উপসর্গ সারণী ব্যবহার করে). |
| **Preprocessing Phase (পূর্ব-প্রসেসিং ধাপ)** | None ($O(1)$ setup time). | Preprocesses pattern $P$ into a state transition table / function in $O(m)$ time. |

---

## Question 6: Explain the role of the table and the graph used in the second pattern matching algorithm.

In the second pattern matching algorithm (such as the Finite State Automaton / Knuth-Morris-Pratt approach), a **Graph** and a **Table** work together to eliminate text pointer backtracking completely.

```
       [ Input Text Character ]
                  │
                  ▼
   ┌─────────────────────────────┐
   │    Pattern Matching Table   │ ◄── [ Look up Current State & Character ]
   └──────────────┬──────────────┘
                  │ Determines Next State
                  ▼
   ┌─────────────────────────────┐
   │   State Transition Graph    │ ◄── [ Shift to Next State without Backtracking ]
   └─────────────────────────────┘

```

### 1. Role of the Pattern Transition Graph (প্যাটার্ন ট্রানজিশন গ্রাফ / State Diagram)

* **Definition:** A Directed Graph (দিকবর্তী গ্রাফ / Deterministic Finite Automaton) where:
* **Nodes (নোড / স্টেইট):** Represent states, corresponding to the number of consecutive characters successfully matched so far ($0, 1, 2, \dots, m$).
* **Directed Edges (দিকবর্তী তিরচিহ্ন):** Represent state transitions triggered by reading specific incoming characters from text $T$.


* **Role:** Visually represents the structural matching logic of the machine. Successful character matches advance the graph to higher states ($S_{k} \rightarrow S_{k+1}$), while mismatches follow failure transitions (ব্যর্থতা ট্রানজিশন) pointing directly to the longest matching prefix state, bypassing redundant character checks.

### 2. Role of the Pattern Transition Table (প্যাটার্ন ট্রানজিশন টেবিল / Next-State Matrix)

* **Definition:** A tabular representation (ম্যাট্রিক্স রূপ) of the state transition graph, formally defined as a function $f(\text{State}, \text{Character}) \rightarrow \text{Next State}$.
* **Role:**
* Serves as an $O(1)$ lookup matrix used during text scanning.
* For every current state $S$ and input character $c$, the table explicitly dictates the precise destination state without evaluating complex conditional statements at runtime.
* **Key Operational Impact:** When a mismatch occurs, the table immediately provides the target state $S_{\text{next}}$ based on the internal prefix structure of pattern $P$. This allows the algorithm to keep the text pointer moving forward continuously, achieving an optimal $O(n)$ time complexity.



--- 

### 1. Define linear array. Which operations are normally performed on a linear structure?

??? "1. Define linear array. Which operations are normally performed on a linear structure?"

    A **linear array** is a finite (সসীম), ordered collection of a fixed number of homogeneous (সমজাতীয়) data elements stored in contiguous (সংলগ্ন / অবিচ্ছিন্ন) memory locations, where each element is indexed by a continuous sequence of integers.

    ```
    Linear Array in Memory:
    Index:     [ 0 ]     [ 1 ]     [ 2 ]     [ 3 ]     [ 4 ]
    Data:    |  10   |   25    |   40    |   55    |   70    |
    Address:  0x1000   0x1004    0x1008    0x100C    0x1010

    ```

    #### Operations Normally Performed on a Linear Structure:

    * **Traversal (প্রদক্ষিণ / পরিক্রমণ):** Processing (printing, reading, or modifying) every element in the array exactly once from the lower bound to the upper bound.
    * **Insertion (সন্নিবেশ):** Adding a new data element at a designated index, which requires shifting existing trailing elements to the right.
    * **Deletion (অপসারণ):** Removing an existing data element from a specified index and shifting all subsequent elements to the left to preserve continuity.
    * **Searching (অনুসন্ধান):** Finding the location or index of a target value (key) using algorithms such as Linear Search or Binary Search.
    * **Sorting (ক্রমানুসারে সাজানো):** Rearranging the elements in a specified logical order, ascending or descending (e.g., Bubble Sort, Insertion Sort, Quick Sort).
    * **Merging (একত্রীকরণ):** Combining two distinct sorted linear arrays into a single, unified sorted array.

    ---

### 2. Explain how a linear array is represented in memory. What is meant by the base address and the word size?

??? "Question 2: Explain how a linear array is represented in memory. What is meant by the base address and the word size?"

    Because physical memory (RAM) is organized as a one-dimensional sequence of byte addresses, a linear array is allocated a continuous block of consecutive memory cells. This enables direct, constant-time $\mathcal{O}(1)$ random access to any element using its index.

    **Array Memory Layout:**

    ```text
    +------------------+------------------+------------------+-----
    |     A[LB]        |     A[LB+1]      |     A[LB+2]      | ...
    +------------------+------------------+------------------+-----
    ^                  ^
    Base(A)            Base(A) + w

    ```

    **Address Calculation Formula:**
    The physical memory address $\text{LOC}(A[K])$ of the $K$-th element is calculated as:


    $$\text{LOC}(A[K]) = \text{Base}(A) + w \cdot (K - \text{LB})$$

    * **Base Address ($\text{Base}(A)$) (ভিত্তি ঠিকানা):** The starting physical memory address of the very first element ($A[\text{LB}]$) of the array. It serves as the primary reference point from which all other element addresses are calculated via offsets.
    * **Word Size ($w$) (উপাদান প্রতি মেমরি বাইট / ডেটা টাইপের আকার):** The number of memory bytes required to store a single data element of that type (e.g., $w = 4\text{ bytes}$ for a standard 32-bit integer, $w = 8\text{ bytes}$ for a 64-bit float).
    * **$\text{LB}$ (Lower Bound / নিম্নসীমা):** The lowest index of the array (typically $0$ in C/C++/Java, or $1$ in mathematical pseudocode).

    ---

    **Example 1: Mathematical Calculation**

    Given an integer array $A$ where:

    * $\text{Base}(A) = 1000$
    * Word size $w = 4\text{ bytes}$ (integer size)
    * $\text{LB} = 0$
    * Find the location of $A[3]$ ($K = 3$):

    $$\text{LOC}(A[3]) = 1000 + 4 \cdot (3 - 0) = 1000 + 12 = \mathbf{1012}$$

    ---

    **Example 2: C Implementation**

    ```c
    #include <stdio.h>

    int main() {
        // Array with Base Index (LB) = 0, Word Size (w) = sizeof(int) = 4 bytes
        int A[5] = {10, 20, 30, 40, 50};

        // Base Address: LOC(A[0])
        printf("Base Address (A[0]): %p\n", (void*)&A[0]);

        // Address of A[3]: Base(A) + 4 * (3 - 0) = Base(A) + 12 bytes offset
        printf("Address of A[3]:      %p\n", (void*)&A[3]);

        return 0;
    }

    ```

### 3. Write down the concept of the binary search technique. What is the limitation of binary search?

#### Concept of Binary Search:

Binary Search is a divide-and-conquer (বিভাজন ও বিজয় পদ্ধতি) search algorithm designed strictly for **sorted datasets**. Rather than examining elements sequentially, it reduces the search space by half in every iteration:

```
Step 1: Compute MID = (BEG + END) / 2
        [ BEG . . . . . . . . MID . . . . . . . . END ]
                               ^
Step 2a: If Target == A[MID] -> Match Found (Terminate)
Step 2b: If Target <  A[MID] -> Narrow to Left Half  (END = MID - 1)
Step 2c: If Target >  A[MID] -> Narrow to Right Half (BEG = MID + 1)

```

1. Initialize boundary pointers: $\text{BEG} = \text{LB}$ and $\text{END} = \text{UB}$.
2. Calculate the middle index: $\text{MID} = \lfloor (\text{BEG} + \text{END}) / 2 \rfloor$.
3. Compare the target key with $A[\text{MID}]$:
* If $A[\text{MID}] == \text{Target}$, return $\text{MID}$ (Search successful).
* If $\text{Target} < A[\text{MID}]$, search the left subarray by setting $\text{END} = \text{MID} - 1$.
* If $\text{Target} > A[\text{MID}]$, search the right subarray by setting $\text{BEG} = \text{MID} + 1$.


4. Repeat steps 2–3 until $\text{BEG} > \text{END}$ (Target absent).

* **Time Complexity:** Worst and average case $\mathcal{O}(\log_2 n)$, best case $\mathcal{O}(1)$.

#### Limitations of Binary Search:

* **Mandatory Sorted Order (বাধ্যতামূলক বাছাইকৃত ক্রম):** The dataset must be sorted beforehand. Sorting an unsorted array takes $\mathcal{O}(n \log n)$, which makes binary search inefficient for a single search operation.
* **Direct Access Dependency:** It requires $\mathcal{O}(1)$ random access to calculate midpoints; it cannot operate efficiently on linked lists ($\mathcal{O}(n)$ midpoint traversal).
* **High Maintenance Cost:** Dynamic collections subject to frequent insertions and deletions incur heavy overhead to maintain sorted order.

---

### 4. Differentiate between linear search and binary search.

| Evaluation Metric | Linear Search (অনুক্রমিক অনুসন্ধান) | Binary Search (দ্বিমুখী অনুসন্ধান) |
| --- | --- | --- |
| **Prerequisite Condition (পূর্বশর্ত)** | Works on both **sorted** and **unsorted** arrays. | Array must be strictly **sorted**. |
| **Search Strategy** | Sequential pass (প্রতিটি উপাদানের সাথে একের পর এক তুলনা). | Divide and conquer (প্রতি ধাপে অনুসন্ধান পরিসর অর্ধেকে রূপান্তর). |
| **Best-Case Complexity** | $\mathcal{O}(1)$ (Target is at the first index). | $\mathcal{O}(1)$ (Target is at the exact middle index). |
| **Worst-Case Complexity** | $\mathcal{O}(n)$ (Target is at the end or absent). | $\mathcal{O}(\log_2 n)$. |
| **Average-Case Complexity** | $\mathcal{O}(n)$. | $\mathcal{O}(\log_2 n)$. |
| **Data Structure Support** | Compatible with Arrays and Linked Lists. | Primarily suitable for contiguous Arrays. |
| **Algorithm Complexity** | Very simple logic; minimal control overhead. | Moderate complexity; requires index bounds tracking. |

---

### 5. Explain how the bubble sort technique works, and state why it is given that name.

#### Mechanism of Bubble Sort:

Bubble Sort is an elementary comparison-based algorithm that sorts an array of $n$ elements over $n-1$ passes:

1. In each pass $i$, adjacent (পার্শ্ববর্তী) elements $A[j]$ and $A[j+1]$ are compared sequentially from index $0$ up to $n - i - 1$.
2. If $A[j] > A[j+1]$, they are swapped (অদলবদল করা হয়).
3. At the end of pass $i$, the $i$-th largest element has moved into its correct final position at the end of the array.
4. An optimization boolean flag (`swapped`) can terminate execution early if a full pass completes without swaps, achieving $\mathcal{O}(n)$ best-case time for already-sorted input.

```
Pass 1 Trace:
[ 5 | 1 | 4 | 2 ] -> Compare (5,1) -> Swap -> [ 1 | 5 | 4 | 2 ]
                  -> Compare (5,4) -> Swap -> [ 1 | 4 | 5 | 2 ]
                  -> Compare (5,2) -> Swap -> [ 1 | 4 | 2 | 5 ]  (5 placed at end)

```

#### Origin of the Name:

The algorithm is named after the physical behavior of air bubbles rising in water. During each pass, smaller (lighter) elements gradually "bubble up" toward the lower indices (the top), while larger (heavier) elements settle ("sink") to the higher indices at the end of the array.

---

### 6. Explain why insertion into and deletion from the middle of a linear array are costly operations.

Linear arrays require contiguous memory allocation (অবিচ্ছিন্ন মেমরি বণ্টন). The physical positions of elements correspond directly to their sequential indices, leaving no empty slots between valid data items.

```
INSERTION AT INDEX 2 (Element: 99):
Original:    [ 10 ][ 20 ][ 30 ][ 40 ][ 50 ]
Shift Right: [ 10 ][ 20 ][ -- ][ 30 ][ 40 ][ 50 ]  <-- (30, 40, 50 shifted right)
Final:       [ 10 ][ 20 ][ 99 ][ 30 ][ 40 ][ 50 ]

DELETION AT INDEX 2:
Original:    [ 10 ][ 20 ][ 99 ][ 30 ][ 40 ][ 50 ]
Shift Left:  [ 10 ][ 20 ][ 30 ][ 40 ][ 50 ]        <-- (30, 40, 50 shifted left)

```

* **Data Shifting Overhead (মেমরি স্থানচ্যুতি):**
* **Insertion at Index $K$:** To insert an element at index $K$, all $(n - K)$ elements from index $K$ through $n-1$ must be shifted one position to the right to open a vacancy.
* **Deletion at Index $K$:** To remove an element from index $K$, all $(n - K - 1)$ elements from index $K+1$ through $n-1$ must be shifted one position to the left to close the gap.


* **Algorithmic Cost:** In the worst case (modifications at index $0$), all $n$ elements must be shifted. On average, $n/2$ shifts are required, resulting in an expensive $\mathcal{O}(n)$ time complexity.

---

### 7. What are the advantages and disadvantages of using arrays?

#### Advantages:

* **Fast $\mathcal{O}(1)$ Random Access:** Any element can be read or modified in constant time using its index: $\text{LOC}(A[K]) = \text{Base} + w \cdot (K - \text{LB})$.
* **Cache Locality Optimization (মেমরি ক্যাশ ব্যবহারের সুবিধা):** Because elements are stored in contiguous memory, arrays benefit from spatial locality (স্থানিক মেমরি নৈকট্য), maximizing CPU cache hits and data pre-fetching.
* **Zero Pointer Overhead:** Arrays do not require auxiliary link pointers (পয়েন্টার মেমরি অপচয় নেই), using memory purely for data.

#### Disadvantages:

* **Static Size Allocation (স্থির ধারণক্ষমতা):** Array capacity must be fixed in advance. Resizing requires allocating a new memory block and copying all elements ($\mathcal{O}(n)$ cost).
* **Costly Insertions and Deletions:** Modifying elements anywhere other than the end requires shifting adjacent elements, incurring $\mathcal{O}(n)$ time complexity.
* **Memory Inefficiency:** Oversized arrays lead to internal fragmentation (অভ্যন্তরীণ মেমরি অপচয়), while undersized arrays risk overflow.

---

### 8. Explain the difference between row-major order and column-major order representation of a two dimensional array.

Computer memory is inherently a one-dimensional array of addresses. A two-dimensional matrix $A[M \times N]$ ($M$ rows, $N$ columns) must be mapped into this linear address space using one of two ordering schemes.

```
2D Matrix:
[ A[0][0]  A[0][1] ]
[ A[1][0]  A[1][1] ]

Row-Major:    | A[0][0] | A[0][1] | A[1][0] | A[1][1] |  (Row-by-Row)
Column-Major: | A[0][0] | A[1][0] | A[0][1] | A[1][1] |  (Column-by-Column)

```

#### Row-Major Order (RMO) (সারি-প্রধান ক্রম):

* **Concept:** Elements are stored row by row. All elements of Row 0 are placed first, followed by Row 1, Row 2, etc. (Used in C, C++, Java, Python).
* **Address Calculation Formula:**

$$\text{LOC}(A[J][K]) = \text{Base}(A) + w \cdot \left[ (J - \text{LB}_r) \cdot N + (K - \text{LB}_c) \right]$$



*(where $N = \text{total columns}$, $\text{LB}_r = \text{row lower bound}$, $\text{LB}_c = \text{column lower bound}$).*

#### Column-Major Order (CMO) (কলাম-প্রধান ক্রম):

* **Concept:** Elements are stored column by column. All elements of Column 0 are placed first, followed by Column 1, Column 2, etc. (Used in Fortran, MATLAB, R).
* **Address Calculation Formula:**

$$\text{LOC}(A[J][K]) = \text{Base}(A) + w \cdot \left[ (K - \text{LB}_c) \cdot M + (J - \text{LB}_r) \right]$$



*(where $M = \text{total rows}$).*

---

### 9. Define sparse matrix.

A **sparse matrix** is a matrix in which the vast majority of elements have a value of **zero**.

```
Sparse Matrix Representation:
[ 0  0  0  5  0 ]
[ 0  0  0  0  0 ]
[ 8  0  0  0  0 ]  --> Stored as 3-Tuple to save memory.
[ 0  0  3  0  0 ]
[ 0  0  0  0  0 ]

```

* **Condition:** A matrix of size $M \times N$ containing $Z$ zero entries and $NZ$ non-zero entries is defined as sparse when $NZ \ll (M \times N)$ (typically non-zero entries account for under 15% to 20% of total elements).
* **Storage Inefficiency:** Storing a sparse matrix as a standard 2D array wastes memory on redundant zeros and leads to inefficient $\mathcal{O}(M \cdot N)$ computations.
* **Triplet (3-Tuple / Coordinate) Representation:**
To optimize space and computation, only non-zero entries are stored as triplets: $\langle \text{Row Index}, \text{Column Index}, \text{Value} \rangle$, preceded by a metadata header indicating total rows, total columns, and total non-zero elements.

| Row Index | Column Index | Value |
| --- | --- | --- |
| **5** *(Total Rows)* | **5** *(Total Cols)* | **3** *(Total Non-Zero)* |
| 0 | 3 | 5 |
| 2 | 0 | 8 |
| 3 | 2 | 3 |


### 1. Define linear linked list. Explain the process of inserting an element into a linked list with a suitable example.

A **linear linked list** is a dynamic, linear data structure in which elements (called **nodes**) are allocated non-contiguously (অসংলগ্ন / বিক্ষিপ্ত মেমরিতে) in memory. Each node consists of two essential parts:

1. **`INFO` (or `DATA`)**: Stores the actual data element.
2. **`NEXT` (or `LINK`)**: A pointer (নির্দেশক) holding the physical memory address of the next consecutive node.

A pointer variable `START` (or `HEAD`) stores the address of the first node, and the `NEXT` field of the terminal node contains a `NULL` (বা শূন্য নির্দেশক) pointer.

```
       +-------------+      +-------------+      +-------------+
START  | INFO | NEXT |      | INFO | NEXT |      | INFO | NEXT |
-----> |  10  |   *--|----> |  20  |   *--|----> |  30  | NULL |
       +-------------+      +-------------+      +-------------+

```

#### Process of Inserting an Element (Insertion After a Given Node `LOC`):

To insert a new node containing value `ITEM` immediately after a given node at address `LOC`:

```
Before Insertion:
... -> [ Node LOC: 20 | * ] -------------> [ Node: 30 | NULL ]

Step 1 & 2: Allocate NEW node [ ITEM: 25 | NULL ]
Step 3: Point NEW->NEXT to LOC->NEXT (Node 30)
Step 4: Point LOC->NEXT to NEW node

After Insertion:
... -> [ Node LOC: 20 | * ]               [ Node: 30 | NULL ]
               \                         ^
                \--> [ NEW: 25 | * ] ---/

```

* **Step 1 (Memory Allocation):** Allocate a new node `NEW` from the free storage pool (`AVAIL` list / heap memory). If no memory is available, signal **Overflow** (ধারণক্ষমতা উপচে পড়া) and terminate.
* **Step 2 (Assign Data):** Set `INFO[NEW] = ITEM`.
* **Step 3 (Re-link Successor):** Point the `NEXT` pointer of the new node to the logical successor (পরবর্তী নোড) of `LOC`:

$$\text{NEXT}[\text{NEW}] = \text{NEXT}[\text{LOC}]$$


* **Step 4 (Re-link Predecessor):** Update the `NEXT` pointer of node `LOC` to reference the newly allocated node:

$$\text{NEXT}[\text{LOC}] = \text{NEW}$$


* **Time Complexity:** $\mathcal{O}(1)$ constant time if the pointer `LOC` is already known; $\mathcal{O}(n)$ if searching for `LOC` is required.

---

### 2. Explain the process of deleting an element from a linked list. Which cases must be considered?

The deletion process removes a target node from the logical sequence by adjusting the pointers of adjacent (পার্শ্ববর্তী) nodes and returning the unlinked node to the dynamic memory pool (`AVAIL` list).

```
Unlinking an Intermediate Node:
              +-------------------------------------+
              |                                     |
              v                                     |
... -> [ Node LOCP: 10 | * ]     [ Node LOC: 20 | * ]     [ Node: 30 | NULL ]
                                 \__________________/
                                   (To be deleted)

```

#### Steps in Deletion:

1. Locate the target node (`LOC`) and track its immediate predecessor (পূর্ববর্তী নোড, `LOCP`).
2. Update the pointer of `LOCP` to bypass (বাইপাস করা / এড়িয়ে যাওয়া) `LOC` and directly point to `LOC`'s successor:

$$\text{NEXT}[\text{LOCP}] = \text{NEXT}[\text{LOC}]$$


3. Deallocate (মেমরি মুক্ত করা) node `LOC` by returning it to the `AVAIL` list.

#### Cases That Must Be Considered:

* **Case 1: Underflow Condition (`START == NULL`):** Attempting to delete from an already empty list. Must terminate with an error.
* **Case 2: Deletion of the First Node (`LOC == START`):** The list anchor `START` must be shifted directly to the second node:

$$\text{START} = \text{NEXT}[\text{START}]$$


* **Case 3: Deletion of an Intermediate Node:** Normal pointer reassignment using predecessor `LOCP`:

$$\text{NEXT}[\text{LOCP}] = \text{NEXT}[\text{LOC}]$$


* **Case 4: Deletion of the Last Node (Tail Node):** The predecessor's link must be set to `NULL`:

$$\text{NEXT}[\text{LOCP}] = \text{NULL}$$


* **Case 5: Target Element Not Found:** Traversal reaches `NULL` without locating the key; issue an appropriate "Item Absent" signal.

---

### 3. Define doubly linked list. What are its advantages and disadvantages compared with a singly linked list?

A **doubly linked list** (or two-way list) is a linear data structure in which each node contains three fields:

1. **`INFO`**: The payload / actual data value.
2. **`FORW` (or `NEXT`)**: Pointer to the successor node.
3. **`BACK` (or `PREV`)**: Pointer to the predecessor node.

```
         +-----------------------+-----------------------+
         |                       |                       |
NULL <-- [ BACK | INFO | FORW ] <-> [ BACK | INFO | FORW ] --> NULL

```

#### Advantages Over Singly Linked List:

* **Bidirectional Traversal (দ্বিমুখী পরিক্রমণ):** The list can be navigated forward (`FORW`) and backward (`BACK`) with equal efficiency.
* **$\mathcal{O}(1)$ Deletion Given Node Pointer:** A node can delete itself without traversing from `START` to locate its predecessor, because `node->BACK` directly gives the previous node:

$$\text{node}\to\text{BACK}\to\text{FORW} = \text{node}\to\text{FORW}$$


* **Efficient Predecessor Insertion:** Inserting a new node immediately *before* a given node takes $\mathcal{O}(1)$ time.

#### Disadvantages Compared to Singly Linked List:

* **Increased Memory Overhead (অতিরিক্ত মেমরি অপচয়):** Every node requires space for two pointer variables instead of one.
* **Complex Pointer Maintenance:** Operations (insertion, deletion) require updating $4$ pointers instead of $2$, increasing code complexity and execution overhead.

---

### 4. Write the definition of a header linked list and a two-way linked list with examples.

#### Header Linked List:

A **header linked list** contains a dedicated, special node at the beginning called the **Header Node** (বা শীর্ষ নোড). The `START` pointer always points to this header node, while the actual data elements begin from the node immediately following it.

* **Grounded Header List (সীমাবদ্ধ হেডার লিস্ট):** The last node's `NEXT` pointer contains `NULL`.
* **Circular Header List (বৃত্তাকার হেডার লিস্ট):** The last node's `NEXT` pointer points back to the Header Node.

```
Circular Header Linked List Example:
             +------------------------------------------------------+
             |                                                      |
             v                                                      |
START -> [ HEADER | * ] -> [ 'A' | * ] -> [ 'B' | * ] -> [ 'C' | * -+ ]
         (Count = 3)

```

#### Two-Way (Doubly) Linked List:

A **two-way linked list** is a linked data structure where each node maintains explicit forward and backward links to facilitate bidirectional traversal.

```
Two-Way Linked List Example:
          +-------------------+     +-------------------+
START     | PREV | INFO | NEXT|     | PREV | INFO | NEXT|
----->    | NULL | 100  |  * -|---->|  *   | 200  | NULL|
          +-------------------+<----+-------------------+

```

---

### 5. Explain the terms garbage collection, overflow and underflow with reference to linked lists.

* **Garbage Collection (অব্যবহৃত মেমরি পুনরুদ্ধার / সংগ্রহ):**
* **Concept:** When nodes are deleted or unlinked from a linked list, their physical memory cells remain allocated unless explicitly freed. Garbage collection is the operating system or runtime mechanism that identifies these orphaned (সংযোগহীন) memory blocks and returns them to the free storage pool (`AVAIL` list).
* **Significance:** Prevents **memory leaks** (মেমরি ক্ষয়) during prolonged execution of programs with high dynamic allocations.


* **Overflow (ধারণক্ষমতা উপচে পড়া):**
* **Concept:** Occurs during an **insertion** operation when the system attempts to allocate memory for a new node, but the free storage list is empty (`AVAIL == NULL`) due to complete physical memory exhaustion.
* **Condition:** $\text{AVAIL} = \text{NULL} \implies \text{Overflow Error}$.


* **Underflow (শূন্যতাবস্থা / উপাদান অপ্রতুলতা):**
* **Concept:** Occurs during a **deletion** operation when an algorithm attempts to remove a node from an already empty linked list (`START == NULL`).
* **Condition:** $\text{START} = \text{NULL} \implies \text{Underflow Error}$.



---

### 6. Differentiate between an array and a linked list.

| Evaluation Metric | Array (অ্যারে) | Linked List (সংযুক্ত তালিকা) |
| --- | --- | --- |
| **Memory Allocation** | **Static / Contiguous:** Fixed size allocated in continuous memory blocks. | **Dynamic / Non-contiguous:** Nodes allocated at runtime across scattered heap memory. |
| **Element Access Time** | Direct $\mathcal{O}(1)$ random access using index. | Sequential $\mathcal{O}(n)$ access via pointer traversal. |
| **Insertion / Deletion Cost** | Expensive $\mathcal{O}(n)$ due to physical shifting of elements. | Efficient $\mathcal{O}(1)$ once the pointer location is identified (no shifting). |
| **Memory Overhead** | **Zero:** Space is used strictly for data values. | **High:** Each node requires auxiliary (সহায়ক) pointer storage (`NEXT`, `PREV`). |
| **Cache Locality (ক্যাশ নৈকট্য)** | Excellent spatial locality; maximizes CPU cache hits. | Poor spatial locality; nodes distributed across heap cause cache misses. |
| **Resizing Flexibility** | Fixed capacity; dynamic expansion requires reallocation and copying. | Fully dynamic; grows and shrinks node-by-node seamlessly. |

---

### 7. Why is a linked list called a dynamic data structure? Explain its advantages over an array.

#### Why It Is Called a Dynamic Data Structure:

A linked list is termed **dynamic** because its memory footprint (মেমরি পরিসর) is not predetermined at compile-time. Instead, memory is allocated and released individually for each node at runtime (প্রোগ্রাম চলাকালীন সময়ে) directly from the system heap using operations like `malloc()` or `new`. It expands when elements are added and contracts when elements are removed without needing bulk block allocations.

#### Advantages Over an Array:

* **No Pre-allocation Waste (মেমরি অপচয় রোধ):** Eliminates internal fragmentation since there is no requirement to declare a fixed maximum capacity in advance.
* **Constant-Time Insertion and Deletion:** Inserting or deleting a node at a known location requires only adjusting link pointers ($\mathcal{O}(1)$), completely avoiding the costly element-shifting operations ($\mathcal{O}(n)$) typical of arrays.
* **Efficient Utilization of Fragmented Memory:** Since contiguous physical blocks are not required, a linked list can utilize non-contiguous memory segments that would otherwise be unusable for large arrays.

---

### 8. Explain the purpose of the header node in a header linked list.

The **header node** is placed at index $0$ of the list to streamline algorithmic design and record global metadata:

* **Elimination of Boundary / Special Cases (প্রান্তিক শর্ত সহজীকরণ):**
* In a standard linked list, inserting or deleting the very first node requires modifying the global `START` pointer itself.
* In a header linked list, `START` permanently points to the invariant (অপরিবর্তনীয়) header node. All insertions and deletions—even at the logical beginning of the data sequence—occur *after* the header node, removing the need for separate edge-case logic for `START`.



```
Standard List Insertion at Beginning:   Requires modifying master START pointer
Header List Insertion at Beginning:     Standard insertion after Header node (No START modification)

```

* **Metadata Repository (মেটাডেটা সংরক্ষণ):**
The `INFO` field of the header node can store global summary information about the list, including:
* Total node count (allowing $\mathcal{O}(1)$ length queries).
* Pointers to the maximum/minimum data values.
* Timestamp or list status flags.


* **Simplification of Circular Traversal:** In circular header lists, the header node provides an unambiguous anchor point to detect when a full loop traversal has completed.