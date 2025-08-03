```mcq
---
type: multiple
question: Which of the following are valid Python code? (Select all that apply)
---

- [ ]
  ```python
  echo("Hello World!")
  ```
  > `echo` is not a valid Python function

- [x] 
  ```python
  print("Hello World!")
  ```
  > `print` is a valid Python function

- [ ] 
  ```python
  printf("Hello World!")
  ```
  > `printf` is not a valid Python function

- [ ] 
  ```python
  println("Hello World!")
  ```
  > `println` is not a valid Python function
```




```mcq
---
type: single
question: In C, what is a "variable"?
----
- [ ] A keyword that cannot be used as an identifier, like `if` or `while`.
- [x] A named storage location in memory used to hold a value that can be modified.
  > Correct! Variables are fundamental for storing data that your program works with.
- [ ] A block of code that performs a specific task, also known as a function.
- [ ] A fixed value that does not change during program execution, like `101`.
````

---

```mcq
---
type: single
question: Which syntax correctly declares an integer variable named `student_count`?
----
- [ ] `integer student_count;`
- [ ] `student_count int;`
- [x] `int student_count;`
  > Correct! The C syntax is `data_type variable_name;`.
- [ ] `declare int student_count;`
```

---

```mcq
---
type: single
question: Which of the following is a **valid** C variable name?
----
- [ ] `2_items`
  > Incorrect. Variable names cannot begin with a number.
- [ ] `total-count`
  > Incorrect. Variable names cannot contain a hyphen (`-`).
- [x] `_user_level`
  > Correct! Variable names can start with an underscore.
- [ ] `float`
  > Incorrect. `float` is a C keyword and cannot be used as a variable name.
```

---

```mcq
---
type: single
question: What is the primary purpose of the `const` keyword when declaring a variable?
----
- [ ] It makes the variable accessible from any file in the project.
- [ ] It tells the compiler to store the variable in a CPU register.
- [x] It makes the variable's value read-only and prevents it from being changed after initialization.
  > Correct! A `const` variable must be initialized when it's declared and cannot be modified later.
- [ ] It increases the memory size allocated for the variable.
```

---

```mcq
---
type: single
question: Which option correctly declares a character variable `grade` and initializes it to 'A'?
----
- [ ] `char grade = "A";`
  > Incorrect. Double quotes (`"`) are used for strings (character arrays), not single characters.
- [x] `char grade = 'A';`
  > Correct! Single quotes (`'`) are used for character literals.
- [ ] `char grade('A');`
  > Incorrect. This is not the correct syntax for initialization in C.
- [ ] `grade = 'A';`
  > Incorrect. This is an assignment, but the variable `grade` has not been declared with a type.
```

---

```mcq
---
type: single
question: A variable declared inside a function, like `main`, is called a...
----
- [x] Local variable.
  > Correct. Its scope is limited to the function or block in which it is declared.
- [ ] Global variable.
- [ ] Static variable.
- [ ] External variable.
```

---

```mcq
---
type: single
question: What does the `sizeof` operator in C return?
----
- [ ] The current value stored in a variable.
- [x] The size of a variable or data type in bytes.
  > Correct! For example, `sizeof(int)` gives the number of bytes an integer occupies in memory.
- [ ] The memory address of a variable.
- [ ] The maximum value a data type can hold.
```

---

```mcq
---
type: single
question: In C, what is the data type of the result of the expression `10 + 5.5`?
----
- [ ] `int`
- [x] `double`
  > Correct! Due to type promotion, the integer `10` is converted to a `double` before the addition occurs, so the result is a `double`.
- [ ] `char`
- [ ] `float`
```

---

```mcq
---
type: single
question: What is the main characteristic of a variable declared with the `unsigned` keyword (e.g., `unsigned int`)?
----
- [ ] It cannot be modified after initialization.
- [ ] Its size in memory is doubled.
- [x] It can only hold non-negative values (zero and positive numbers).
  > Correct! The `unsigned` modifier shifts the data type's range. For an `int`, instead of `~-2 billion` to `~+2 billion`, it becomes `0` to `~+4 billion`.
- [ ] It is automatically initialized to zero by the compiler.
```

---

```mcq
---
type: single
question: What is the initial value of a non-static local variable if you don't explicitly initialize it?
----
- [ ] `0`
- [ ] `NULL`
- [x] An indeterminate or "garbage" value.
  > Correct! Local variables are not automatically initialized and will contain whatever data was last in that memory location.
- [ ] The code will not compile.
```

---

```mcq
---
type: single
question: In C, are the variable names `totalAmount` and `totalamount` considered the same?
----
- [ ] Yes, because C is not case-sensitive.
- [x] No, because C is case-sensitive.
  > Correct! C treats uppercase and lowercase letters as distinct characters, so `totalAmount` and `totalamount` are two different variables.
- [ ] Yes, but only if they have the same data type.
- [ ] It depends on the compiler settings.
```

---

```mcq
---
type: single
question: What is the defining characteristic of a local variable declared with the `static` keyword inside a function?
----
- [ ] It becomes accessible from other source files.
- [x] It is initialized only once and retains its value between function calls.
  > Correct! A static local variable's lifetime is the entire duration of the program, not just the function call.
- [ ] Its memory address cannot be taken.
- [ ] It must be a pointer type.
```

---

```mcq
---
type: single
question: What is the primary use of the `extern` keyword with a variable declaration?
----
- [ ] To create a constant variable.
- [ ] To suggest the variable be stored in a CPU register.
- [x] To declare a variable that is defined in another source file, allowing you to use it in the current file.
  > Correct! `extern` is a declaration that tells the compiler "this variable exists, but its memory is allocated elsewhere."
- [ ] To allocate memory for the variable on the heap.
```

---

```mcq
---
type: single
question: In the C assignment statement `x = 100;`, the variable `x` represents...
----
- [x] An L-value (locator value).
  > Correct! An L-value represents a memory location. Things on the left of an assignment must be L-values.
- [ ] An R-value (read value).
  > Incorrect. The number `100` is the R-value in this statement.
- [ ] A pointer type.
- [ ] A function call.
```

---

```mcq
---
type: single
question: What is the key difference between a variable **declaration** and a variable **definition**?
----
- [ ] There is no difference; the terms are interchangeable.
- [ ] A declaration specifies the type, while a definition specifies the value.
- [x] A definition allocates storage for the variable, while a declaration only specifies its name and type without allocating storage.
  > Correct! `extern int x;` is a declaration. `int x;` is a definition. You can declare a variable many times, but define it only once.
- [ ] A declaration is used for global variables, and a definition is used for local variables.
```

---





```mcq
---
type: single
question: |
  Consider this code:
  ```c
  int count = 10; // Global variable

  void my_func() {
      int count = 5; // Local variable
      printf("%d", count);
  }
  ```
  What will be printed when `my_func()` is called?
---

- [ ] `10`
- [x] `5`
  > Correct! When a local variable has the same name as a global variable, the local one shadows or overrides it within its scope.

- [ ] The code will cause a compilation error.
- [ ] It will print a garbage value.
```
---










```mcq
---
type: single
question: An `unsigned char` can hold values from 0 to 255. What is the value of `x` after this code runs? `unsigned char x = 255; x++;`
---
- [ ] `256`
- [ ] The program will crash with an error.
- [x] `0`
  > Correct! This is an example of integer overflow. For unsigned integers, the value "wraps around" to the minimum value (0) when it exceeds the maximum.
- [ ] `255`
```

---

```mcq
---
type: single
question: What is the primary advantage of using `double` over `float`?
----
- [ ] `double` uses less memory.
- [ ] `double` is used for whole numbers only.
- [x] `double` offers greater precision and a larger range of values.
  > Correct! `double` stands for "double-precision" and uses more bits (typically 64) than `float` (typically 32) to store more accurate numbers.
- [ ] `double` variables are always positive.
```

---

```mcq
---
type: single
question: How do you correctly declare a variable `p_age` that is a pointer to an integer?
----
- [ ] `int &p_age;`
- [ ] `pointer int p_age;`
- [ ] `int p_age;`
- [x] `int *p_age;`
  > Correct! The asterisk (`*`) is used to declare a pointer. This statement is read as "`p_age` is a pointer to an `int`."
```

---

```mcq
---
type: single
question: The `volatile` keyword tells the compiler that a variable's value...
----
- [ ] is constant and cannot be changed.
- [x] might be changed by something outside the normal program execution flow (e.g., hardware).
  > Correct! This prevents the compiler from making optimizations that assume the variable's value won't change unexpectedly.
- [ ] should be stored in a file instead of memory.
- [ ] is a memory address.
```

---

```mcq
---
type: single
question: What is the fundamental difference between `'A'` and `"A"` in C?
----
- [ ] They are identical and can be used interchangeably.
- [x] `'A'` is a single character literal (`char`), while `"A"` is a string literal (an array of characters ending with a null terminator `\0`).
  > Correct! `sizeof('A')` is typically 4 (it's promoted to an `int`), while `sizeof("A")` is 2 (one byte for 'A', one for `\0`).
- [ ] `'A'` is a variable, while `"A"` is a constant.
- [ ] `"A"` uses less memory than `'A'`.
```

---

```mcq
---
type: single
question: Which of the following is an **invalid** C variable name?
----
- [ ] `annual_salary`
- [ ] `__init`
- [x] `final-score`
  > Correct! C identifiers cannot contain a hyphen (`-`).
- [ ] `Level3`
```

---

```mcq
---
type: single
question: What is the result of the statement `int a, b; a = b = 20;`?
----
- [ ] Only `b` is assigned the value 20; `a` contains a garbage value.
- [x] Both `a` and `b` are assigned the value 20.
  > Correct! The assignment operator (`=`) is right-associative. First, `b = 20` is evaluated, which assigns 20 to `b` and the expression itself evaluates to 20. Then, `a` is assigned that result.
- [ ] Only `a` is assigned the value 20.
- [ ] This is a syntax error in C.
```

---

```mcq
---
type: single
question: In C99 and later, what is the standard way to declare a boolean variable `is_complete`?
----
- [ ] `boolean is_complete;`
- [ ] `int is_complete;`
- [x] `#include <stdbool.h>` followed by `bool is_complete;`
  > Correct! The `<stdbool.h>` header provides the modern standard `bool` type and `true`/`false` macros.
- [ ] `bit is_complete;`
```

---

```mcq
---
type: single
question: What is the `register` storage class specifier intended to do?
----
- [ ] Make a variable global across all files.
- [x] Suggest to the compiler that the variable should be stored in a fast CPU register.
  > Correct! This is a hint for optimization. Modern compilers are free to ignore it and often make better decisions on their own.
- [ ] Allocate the variable's memory on the heap.
- [ ] Prevent the variable's value from being modified.
```

---

```mcq
---
type: single
question: What is the primary purpose of the `char` data type in C?
----
- [ ] To store a sequence of characters (a string).
- [ ] To store large integer values.
- [x] To store a single character (like 'c') or a very small integer (typically -128 to 127).
  > Correct! A `char` is C's smallest addressable unit of memory, usually one byte.
- [ ] To store a number with a decimal point.
```

---

```mcq
---
type: single
question: Which statement correctly declares a floating-point variable `price` and initializes it to `19.99`?
----
- [ ] `float price = "19.99";`
- [ ] `integer price = 19.99;`
- [x] `float price = 19.99f;`
  > Correct! The `f` suffix explicitly makes the literal `19.99` a `float` type. Without it, `19.99` is a `double`, which could lead to a minor precision-loss warning.
- [ ] `price float = 19.99;`
```

---

````mcq
---
type: single
question: |
  Given the following code, what is the value of the `dollars` variable?
  ```c
  double price = 15.75;
  int dollars = (int)price;
````

---

- [ ] `16`
- [ ] `15.75`
- [ ] The code will fail to compile.
- [x] `15`
  > Correct\! Explicitly casting a `double` to an `int` truncates the value, discarding the fractional part. It does not round.

<!-- end list -->

````

---

```mcq
---
type: single
question: A variable declared outside of all functions at the top of a source file is known as a...
----
- [x] Global variable.
  > Correct! It has file scope and is accessible to all functions within that file.
- [ ] Local variable.
- [ ] Private variable.
- [ ] Universal variable.
````

---

````mcq
---
type: multiple
question: |
  Consider the following lines, assuming they are in different source files:
  **File_A.c:**
  ```c
  int global_counter = 100;
````

**File_B.c:**

```c
extern int global_counter;
```

## Which statements are true? (Select all that apply)

- [x] `File_A.c` contains a **definition** of `global_counter`.
  > Correct. Memory is allocated and an initial value is provided, so this is a definition.
- [x] `File_B.c` contains a **declaration** of `global_counter`.
  > Correct. The `extern` keyword tells the compiler that `global_counter` exists and is defined elsewhere. No memory is allocated here.
- [ ] `File_B.c` also defines the variable `global_counter`.
  > Incorrect. The `extern` keyword explicitly makes this a declaration, not a definition.
- [ ] This code will cause a linker error because the variable is declared twice.
  > Incorrect. This is the standard, correct way to share a global variable across files. A linker error would occur if both files contained a definition.

<!-- end list -->

```

```
