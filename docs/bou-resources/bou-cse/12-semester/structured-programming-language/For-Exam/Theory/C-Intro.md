# Introduction to C

## Comparison: Structured vs Unstructured Programming 

??? "**Comparison: Structured vs Unstructured Programming** " 

    

    To understand why C is called a structured language, let us look at two examples performing the same task: **Printing numbers from 1 to 5.**

    ### **1. Unstructured Approach (Using `goto`)**

    In the early days (BASIC, Assembly), programmers used `goto` statements to jump (লাফানো) from one line to another. This creates "Spaghetti Code" which is very confusing.

    ```c
    // Unstructured Code Example
    #include <stdio.h>

    int main() {
        int i = 1;

        start:              // Label
        printf("%d ", i);
        i++;

        if(i <= 5)
            goto start;     // Jumps back to 'start' label

        return 0;
    }

    ```

    * **Problem:** If the program is big, jumping back and forth makes it hard to understand the flow (প্রবাহ).

    ### **2. Structured Approach (Using Loops/Functions)**

    In C, we use specific structures like `for`, `while`, or separate functions. This makes the code organized.

    ```c
    // Structured Code Example
    #include <stdio.h>

    // Function definition
    void printNumbers(int n) {
        int i;
        for(i = 1; i <= n; i++) {
            printf("%d ", i);
        }
    }

    int main() {
        printNumbers(5);  // Calling the function
        return 0;
    }

    ```

    * **Benefit:** We can clearly see that `printNumbers` is a separate block (ব্লক). If there is an error, we only check that block.

    ### **Key Differences**

    | Feature | Unstructured Programming | Structured Programming (C) |
    | --- | --- | --- |
    | **Logic Flow** | Uses `goto` to jump randomly. | Uses loops and functions. |
    | **Debug** | Difficult to find errors (ত্রুটি). | Easy to find and fix errors. |
    | **Readability** | Confusing and messy. | Clean and easy to read. |
    | **Modification** | Hard to modify (পরিবর্তন করা). | Easy to modify or expand. |


## **Difference between Variable and Constant**

??? "**Difference between Variable and Constant**"

    **Ans to the Question** 

    In C programming, both variables and constants are used to store data, but they behave differently during the execution (সম্পাদন) of the program.

    | Basis of Difference | Variable (চলক) | Constant (ধ্রুবক) |
    | --- | --- | --- |
    | **Definition** | A variable is a named memory location where data is stored, and its value (মান) can be changed during program execution. | A constant is a fixed value that does not change during the execution of the program. |
    | **Changeability** | The value of a variable can be modified (পরিবর্তন করা) multiple times. | Once defined, the value of a constant cannot be modified. |
    | **Declaration** | We declare it using data types like `#!c int a;` | We declare it using the `const` keyword or `#define` preprocessor. |
    | **Example** | `#!c int mark = 50; mark = 60;` (Valid) | `#!c const float PI = 3.14;` <br> `#!c PI = 3.15;` (Invalid/Error) <br> `#!c #define PI 3.14159 // Defining a symbolic constant PI` <br> `#!c #define MESSAGE "Hello, World!" // Defining a string constant` |

    ### **Rules for Variable Name**

    In C, variables are also known as Identifiers (শনাক্তকারী). We must follow specific rules while naming a variable. If we violate these rules, the compiler (কম্পাইলার) will show an error.

    **The rules are as follows:**

    1. **First Character:**
    A variable name must begin with an alphabet (letter) (uppercase A-Z or lowercase a-z) or an underscore `_`. It cannot start with a digit (অংক).
    * *Valid:* `age`, `_total`, `mark1`
    * *Invalid:* `1stRank` (Starts with a number)


    2. **Allowed Characters:**
    A variable name can consist of letters, digits, and underscores only. No other special characters (বিশেষ অক্ষর) like `@`, `$`, `%`, etc., are allowed.
    * *Invalid:* `user@name`, `price$`


    3. **No Keywords:**
    We cannot use C Keywords (reserved words) as variable names because they have special meaning to the compiler.
    * *Invalid:* `int`, `float`, `for`, `if`, `while`


    4. **No White Space:**
    Blank spaces (ফাঁকা স্থান) are not allowed within a variable name.
    * *Valid:* `student_name`
    * *Invalid:* `student name`


    5. **Case Sensitivity:**
    C is a case-sensitive language. This means uppercase and lowercase letters are treated as different.
    * *Example:* `SUM`, `sum`, and `Sum` are three different variables.


    6. **Length:**
    Although there is no strict limit, ANSI C recognizes the first 31 characters of a variable name. It is good practice to keep the name meaningful and short.


### **Identification of Syntax Errors**
??? "Fixing a buggy program"

    **Ans to the Q1(d)**



    Upon analyzing the given program code, the following Syntax Errors (সিনট্যাক্স ত্রুটি) or grammatical mistakes are identified:

    1. **Missing Header File:** The program uses the `printf` function to display output, but the standard input-output library `#include <stdio.h>` is missing at the top.
    2. **Missing Semicolons:** In C language, every executable statement must end with a semicolon `;`. It is missing in three places:
    * After the declaration `float perimeter, area`
    * After the assignment `radious = 5`
    * After the `printf` statement.



    ### **Corrected Program**

    Here is the code after fixing all the errors.

    ```c
    #include <stdio.h>   // Included header file
    #define PI 3.14  

    int main()  
    {  
    int radious;  
    float perimeter, area;  // Added semicolon
    
    radious = 5;            // Added semicolon
    
    perimeter = 2.0 * PI * radious;  
    area = PI * radious * radious;  
    
    printf("%f, %f", perimeter, area);  // Added semicolon
    
    return 0;  
    }

    ```

    ### **Output**

    When we execute (চালনা করা) the corrected program, the computer performs the following calculations:

    * **Perimeter:** 
    * **Area:** 

    Since the variables are of `float` data type, the `printf` function with `%f` specifier usually prints up to 6 decimal places by default.

    **The final output will be:**

    ```
    31.400000, 78.500000

    ```
## Tokens, Keywords, Identifiers, and Variables in C

??? "Tokens, Keywords, Identifiers, and Variables in C"

   Q: **Elaborate in detail on Tokens, Keywords, Identifiers, and Variables in C. Differentiate between them with a comprehensive comparison table.**

    ---

    ### **Introduction**

    To understand the C programming language, we must first understand its smallest building blocks. Just as a paragraph is made of sentences, and sentences are made of words, a C program is constructed using various elements like Tokens, Keywords, Identifiers, and Variables.

    ### **1. Tokens**

    **Definition:**
    A Token (টোকেন) is the smallest individual unit in a C program that the Compiler (কম্পাইলার) can understand. When we compile a program, the compiler breaks the entire code into these small units for processing. It is the basic vocabulary of the language.

    **Classification of Tokens:**
    C supports six types of tokens:

    1. **Keywords:** (`int`, `while`, `continue`)
    2. **Identifiers:** (`main`, `amount`, `total`)
    3. **Constants:** Fixed values like `100`, `3.14`, `'A'`.
    4. **Strings:** Sequence of characters like `"Hello World"`.
    5. **Special Symbols:** Punctuation like `;`, `{}`, `()`, `#`.
    6. **Operators:** Symbols that perform operations like `+`, `-`, `*`, `++`.
    ![Classification of Tokens](image-1.png)
    **Example:**

    ```c
    int x = 10;

    ```

    This single line consists of 5 tokens:

    1. `int` (Keyword)
    2. `x` (Identifier)
    3. `=` (Operator)
    4. `10` (Constant)
    5. `;` (Special Symbol)

    ### **2. Keywords**

    **Definition:**
    Keywords (সংরক্ষিত শব্দ) are reserved words that have a fixed, pre-defined meaning in the C language. We cannot change their meaning, nor can we use them as names for variables or functions.

    **Key Characteristics:**

    * **Case Sensitivity:** All keywords must be written in Lowercase (ছোট হাতের অক্ষর).
    * **Total Count:** There are 32 standard keywords in ANSI C.
    * **Functionality:** They define the flow and structure of the program.

    **Examples:**

    * **Data Types:** `int`, `char`, `float`, `double`, `void`.
    * **Control Flow:** `if`, `else`, `switch`, `case`, `default`.
    * **Loops:** `for`, `while`, `do`.
    * **Storage Classes:** `auto`, `static`, `register`, `extern`.

    ### **3. Identifiers**

    **Definition:**
    Identifiers (শনাক্তকারী/নামকরণ) are the names given by the programmer to various program elements such as Variables (চলক), Functions (ফাংশন), Arrays, and Structures. They help in identifying a specific entity uniquely during the Execution (নির্বাহ) of the program.

    **Rules for Naming Identifiers:**

    1. **Start:** Must start with a letter (A-Z or a-z) or an underscore `_`.
    2. **Digits:** Can contain digits (0-9) but cannot start with one.
    3. **Special Characters:** No special characters allowed except underscore.
    4. **Keywords:** Keywords cannot be used as identifiers.
    5. **Length:** ANSI C recognizes the first 31 characters.

    **Valid vs Invalid Examples:**

    * `myVariable` (Valid)
    * `_score` (Valid)
    * `9thClass` (Invalid - starts with digit)
    * `roll number` (Invalid - contains space)

    ### **4. Variables**

    **Definition:**
    A Variable is a specific type of identifier. It is a named memory location used to store data. The value stored in a variable can be changed or modified (পরিবর্তন করা) during the program execution.

    **Declaration and Initialization:**

    * **Declaration:** Tells the compiler the variable's name and data type.
    * *Syntax:* `data_type variable_name;`


    * **Initialization:** Assigning a value to the variable.
    * *Syntax:* `variable_name = value;`



    **Scope of Variables:**

    * **Local Variables:** Declared inside a function block.
    * **Global Variables:** Declared outside all functions.

    ### **Detailed Comparison Table**

    Here is the comparison distinguishing all four concepts.

    | Basis of Difference | Token | Keyword | Identifier | Variable |
    | --- | --- | --- | --- | --- |
    | **Definition** | The smallest individual unit of a program. | Reserved words with fixed meanings. | User-defined names given to program elements. | A named memory location to store data. |
    | **Category/Relation** | It is the Super Set (everyone belongs here). | It is a type of Token. | It is a type of Token. | It is a type of Identifier (and thus a Token). |
    | **Creation** | Created by the compiler parsing the text. | Pre-defined by the language developers. | Defined by the Programmer (User). | Defined by the Programmer (User). |
    | **Meaning** | Depends on the type of token. | Has a fixed, special meaning. | Has no specific meaning until defined. | Holds a value that signifies data. |
    | **Changeability** | N/A | Cannot be changed. | Name is fixed once defined. | Value can be changed frequently. |
    | **Allowed Characters** | Varies (e.g., Operators use symbols). | Only English letters (lowercase). | Letters, digits, and underscore `_`. | Letters, digits, and underscore `_`. |
    | **Usage** | Building block of code. | Defines structure (syntax). | Identifies entities (Labeling). | Stores actual data values. |
    | **Examples** | `int`, `main`, `{`, `+`, `100` | `if`, `while`, `return`, `const` | `total`, `avg`, `calculate_sum` | `salary`, `age`, `marks` |

    ### **Sample Program Analysis**

    To summarize, let us look at a small code snippet to identify these parts.

    ```c
    int total = 100;

    ```

    * **Tokens:** There are 5 tokens (`int`, `total`, `=`, `100`, `;`).
    * **Keyword:** `int` is the keyword indicating integer type.
    * **Identifier:** `total` is the identifier (name).
    * **Variable:** `total` is also the variable because it occupies memory to store the value.
    * **Constant:** `100` is a constant value.

    In conclusion, while all Keywords, Identifiers, and Variables are Tokens, they serve very different purposes in constructing a structured C program.

## `#!c #include` directive

??? "`#!c #include` directive"

    **Question:**
    **Explain the `#!c #include` Directive in detail. Discuss its syntax, types, and how it works in the C compilation process.**

    ---

    ### **Introduction to `#!c #include` Directive**

    The `#!c #include` directive is one of the most important and commonly used Preprocessor Directives (প্রিপ্রসেসর নির্দেশাবলী) in C programming. It is not a C statement but a command given to the Preprocessor (প্রিপ্রসেসর).

    Before the actual Compilation (কম্পাইলেশন) starts, the preprocessor processes this directive. Its main job is to insert or copy the entire content of a specific file (usually a Header File) into the source program at the point where the `#!c #include` line is written.

    ### **Purpose of `#!c #include`**

    The primary purpose of the `#!c #include` directive is to allow a program to access functions and variables defined in external files or Standard Libraries (স্ট্যান্ডার্ড লাইব্রেরি).
    For example, to use the `printf()` function, we must include the `stdio.h` file because the definition of `printf` is written inside it.

    ### **Syntax**

    The `#!c #include` directive can be written in two different ways depending on where the file is located.

    **Syntax 1:**

    ```c
    #include <filename>

    ```

    **Syntax 2:**

    ```c
    #include "filename"

    ```

    ### **Types of `#!c #include` Formats**

    Although both formats perform the same task of including a file, the difference lies in **where** the preprocessor looks for the file.

    **1. Angle Brackets `< >` Format:**

    * **Usage:** `#!c #include <stdio.h>`
    * **Search Path:** When we use angle brackets, the preprocessor searches for the file only in the **Standard System Directories** (সিস্টেম ডিরেক্টরি). These are the folders where the compiler's built-in library files are installed.
    * **Use Case:** This is used for standard header files like `stdio.h`, `math.h`, `string.h`, etc.

    **2. Double Quotes `" "` Format:**

    * **Usage:** `#!c #include "myheader.h"`
    * **Search Path:** When we use double quotes, the preprocessor first searches for the file in the **Current Directory** (বর্তমান ডিরেক্টরি) where the source code is saved. If it does not find the file there, it then searches in the standard system directories.
    * **Use Case:** This is mainly used for **User-Defined** header files (files created by the programmer).

    ### **How `#!c #include` Works (The Process)**

    When we write a program, the compilation process happens in steps. The `#!c #include` directive is handled during the "Preprocessing" stage.

    1. The preprocessor scans the source code (উৎস কোড).
    2. When it finds an `#!c #include` line, it locates the specified file.
    3. It removes the `#!c #include` line and replaces it with the actual text/code contained inside that header file.
    4. The final code (which is now larger) is then sent to the Compiler.

    ### **Example Program**

    Here is a sample program demonstrating both types of includes.

    **File 1: `myfuncs.h` (User Defined File)**

    ```c
    // This is a custom header file
    int add(int a, int b) {
        return a + b;
    }

    ```

    **File 2: `main.c` (Main Program)**

    ```c
    #include <stdio.h>      // Standard Library include
    #include "myfuncs.h"    // User-defined include

    int main() {
        int sum = add(10, 20); // Calling function from myfuncs.h
        printf("The sum is: %d", sum); // Using function from stdio.h
        return 0;
    }

    ```

    ### **Why is it important?**

    * **Reusability (পুনর্ব্যবহারযোগ্যতা):** We can write a useful function once in a header file and use it in many programs using `#include`.
    * **Organization:** It helps in keeping the code clean by separating complex logic into different files.
    * **Standardization:** It provides access to the powerful set of C standard libraries.

    In conclusion, the `#include` directive is the bridge between our program and the vast resources available in C libraries.

