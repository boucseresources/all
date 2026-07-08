# Pointer in C

Ref: [Pointers in C - GeeksForGeeks](https://www.geeksforgeeks.org/c/c-pointers/)

### Creating Pointers

A pointer is a variable that stores the memory address of another variable. Instead of holding a direct value, it holds the address where the value is stored in memory. It is the backbone of low-level memory manipulation in C.

=== "Code"

````c

    #include <stdio.h>

        int main () {
            int a = 10;
            int *pointer = &a;

        printf("%d", pointer);  // prints memory add. in integer
        printf("%d", *pointer); // "value-at" pointer variable
        printf("%p", *pointer); // prints memory add. in Hex.
        return 0;
    }
    ```

=== "Result"


This short code demonstrates how pointers work in C. A pointer is a special variable that stores the memory address of another variable, rather than holding a normal value like an integer.
Here is the line-by-line breakdown of what is happening inside your computer's memory.
------------------------------
## Step-by-Step Code Breakdown## 1. Variable Initialization

int a = 10;


* Your computer allocates a small block of memory for an integer named a.
* It stores the literal integer value 10 inside that block.
* Let's imagine this block of memory sits at address location 0x7ffe.

## 2. Creating the Pointer

int *pointer = &a;


* The * symbol in the declaration indicates that pointer is a pointer variable.
* The & symbol is the "address-of" operator. It extracts the exact physical memory location of a.
* This line tells the computer: "Find the memory address of a (which is 0x7ffe), and save that address inside the variable pointer."

## 3. Printing the Address

printf("%d\n", pointer);


* What it outputs: A large, seemingly random integer (e.g., 14326124).
* Why: You asked to print pointer directly. Because pointer holds a memory location, this prints the address where a is stored in RAM.
* Note: To avoid compiler warnings, memory addresses should ideally be printed using %p instead of %d.

## 4. Printing the Value (Dereferencing)

printf("%d", *pointer);


* What it outputs: 10
* Why: The * symbol used outside of a declaration is the dereferencing operator (or "value-at-address" operator). It tells the computer: "Go to the memory address stored inside pointer, look inside that box, and fetch whatever value is living there." Since pointer points to a, it fetches 10.

------------------------------
## Summary Layout

| Expression | What it Represents | Analogy | Example Value |
|---|---|---|---|
| a | The actual data value | The person living in the house | 10 |
| &a | The location of the data | The GPS coordinates of the house | 0x7ffe |
| pointer | The variable holding the location | A piece of paper with the address written on it | 0x7ffe |
| *pointer | The data found at that location | Driving to the address to see who is inside | 10 |





=== "Code"
```c

    #include <stdio.h>

        int main () {


        return 0;
    }
    ```

=== "Result"
````
