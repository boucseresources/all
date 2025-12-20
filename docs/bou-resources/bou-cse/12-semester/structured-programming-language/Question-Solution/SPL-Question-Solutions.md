**Q1(d):**
Identify the syntax errors from the following program. After corrections what will be the output would you expect when you execute it?

```c
#define PI 3.14  
int main()  
{  
   int radious;  
   float perimeter, area  
   radious = 5  
   perimeter = 2.0 * PI * radious;  
   area = PI * radious * radious;  
   printf("%f, %f", perimeter, area)  
   return 0;  
}
```

**Marks: 2+2**

----
### Syntax Errors Identified

Here are the specific errors in the code:

1.  **Missing Header File:** The program uses `printf` but is missing `#include <stdio.h>` at the top.
2.  **Missing Semicolon (Line 5):** The declaration `float perimeter, area` is missing a semicolon `;` at the end.
3.  **Missing Semicolon (Line 6):** The assignment `radious = 5` is missing a semicolon `;` at the end.
4.  **Missing Semicolon (Line 9):** The `printf` statement is missing a semicolon `;` at the end.

-----

### Corrected Code

```c
#include <stdio.h> // Include standard I/O library
#define PI 3.14  

int main()  
{  
   int radious;  
   float perimeter, area; // Added semicolon
   radious = 5;           // Added semicolon
   perimeter = 2.0 * PI * radious;  
   area = PI * radious * radious;  
   printf("%f, %f", perimeter, area); // Added semicolon
   return 0;  
}
```

### Expected Output

When executed, the program calculates the perimeter ($2 \times 3.14 \times 5$) and area ($3.14 \times 5^2$). By default, the `%f` format specifier prints 6 decimal places.

**Output:**

```text
31.400000, 78.500000
```