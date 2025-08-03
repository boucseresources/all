**Bangladesh Open University**
**School of Science and Technology**
**B. Sc in Computer Science and Engineering Program**
**212 Term 1st Year 2nd Semester Final Examination**
**Course Code & Title: CSE1237 Structured Programming Language**
**Total Marks (5×14): 70**
**Time: 3 Hours**

***\[N.B.: Answer any 5 (five) questions. The figures in the right margin indicate the full marks. All portions of each question must be answered sequentially.]***

1.

(a) “C is a structured programming language”-Justify the statement.
**3**

(b) Differentiate between variable and constant. What are the rules that we should follow for a variable name?
**2+3**

(c) Define Algorithm and Flowchart? Assume there are 50 students in a class who appeared in their final examination. Their mark sheets have been given to you. The division column of the mark sheet contains the division (FIRST, SECOND, THIRD or FAIL) obtained by the student.
Write an algorithm and also draw the flowchart to calculate and print the total number of students who passed in FIRST division.
**2+2+2**

---

2.

(a) What is the purpose of printf() and scanf() in C Program? Write the appropriate datatype format specifier for both printing and scanning purposes.
**2+4**

(b) Differentiate between conditional operator in C and if-else statement in C. Write a C program to read the age of a person and determine whether he is eligible to cast his/her own vote by using conditional operator.
**2+4**

(c) Which statement is efficient and why? `x=x+1;` or `x++`
**2**

---

3.

(a) Explain if-else structure using proper execution flow diagram.
**4**

(b) What is looping statement? Differentiate between Entry controlled and Exit controlled loop.
**1+3**

(c) Write a C program that prints the number divided by both 3 and 6 within the range 1 to 100.
**3**

(d) Illustrate how break and continue statements affects the normal execution of a loop by suitable programming example.
**3**

---

4.

(a) What are the limitations of array? Explain the declaration and initialization syntax of 1D and 2D array
**2+3**

(b) What is a string? Explain the string handling library functions with an example of each.
**4**

(c) Rewrite the following code segment so that a ‘do-while’ loop is used instead of a ‘while’ loop. The output must remain the same.
**5**

```c
int main()  
{  
  int sum = 0, num ;  
  scanf("%d", &num);  
  while(num >= 0)  
  {  
    sum += num;  
    scanf("%d", &num);  
  }  
  printf("%d", &sum);  
  return 0;  
}
```



---

5.

(a) Define function and function prototype. Explain arguments with return values category of function with a suitable example.
**2+2**

(b) What is Recursion? Write a Program to calculate the factorial value using recursion technique?
**1+3**

(c) Write the following functions that:
(i) Request the user for two integers and outputs them and their sum.
(ii) Request the user for two integers and outputs their remainder after division.
(iii) Request the user for two floats and outputs their product.

Write a C (main) program to provide the above functions as options to the user using switch statement and performs the functions accordingly.
**6**

---

6.

(a) How to declare and accessing structures variables? Explain with a suitable example.
**6**

(b) What are the advantages of structure over array? How to declare the arrays within structures?
**2+2**

(c) What is pointer? write the major benefits of using pointers in C programming.
**1+3**

---

7.

(a) What is file? State the purpose of using file.
**1+2**

(b) Write the operation of the following file handling functions:
(i) fopen(); (ii) getc(); (iii) putc(); (iv) fseek(); (v) rewind.
**5**

(c) Write a C program to read name and marks of n number of students from user and store them in a file named ‘student.txt’.
**6**

---

**Bangladesh Open University**
**School of Science and Technology**
**B. Sc in Computer Science and Engineering Program**
**152 Term (1st Year 2nd Semester)**
**Final Examination**
**Course Code & Title: CSE1237 Structured Programming Language**
**Time: 3 hours**
**Total Marks (5×14): 70**

---

**\[N.B.: Answer any 5 (five) questions. The figures in the right margin indicate the full marks. All portions of each question must be answered sequentially.]**

---

1.

(a) Write briefly about the following terms:
(i) Program (ii) Algorithm (iii) Flowchart (iv) Compiler
**4**

(b) Write an algorithm to find largest number among three numbers. Also draw a flowchart for the written algorithm.
**2+2**

(c) State some applications of C programming language.
**2**

(d) Identify the syntax errors from the following program. After corrections what will be the output would you expect when you execute it?

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

**2+2**

---

2.

(a) What is data type? Explain different data types in C giving an example to each.
**1+5**

(b) Differentiate between else-if ladder and switch statement.
**3**

(c) Briefly explain variable and constants in C.
**3**

(d) Write a C program to check whether a given number is even or odd. -  **2**

---

3.

(a) What is loop? Explain with example where `for` loop is suitable and where `do-while` loop is suitable.
**1+4**

(b) What is the use of break and continue statement in C language?
**3**

(c) Write a program to reverse the digits of a given integer number. For Example reverse of given number 3578 is 8753.
**4**

(d) What is the output for the following C code

```c
value = 1;  
switch (value)  
{  
   Case 1: printf("Good");  
   Case 2: printf("Morning");  
   Case 3: printf("Cprogram");  
}
```

**2**

---

4.

(a) What is an array? How is it declared?
**2+2**

(b) Write a program to read the marks of 5 subjects for each of the 10 students of a class and display the average marks for each of the students.
**5**

(c) Write a program for appending a string with another string. Do not use built in functions.
**5**


---

5.

(a) What do you about pointer? Define the asterisk (\*) and ampersand (&) operator in terms of pointer.
What will be the output of the following program?

```c
int main()  
{  
   int a, b, *ptr;  
   a = 30;  
   ptr = &a;  
   b = *ptr;  
   printf("a : %d\n", a++);  
   printf("b : %d\n", b++);  
   printf("value : %d\n", *ptr);  
   return 0;  
}
```

---

(b) How does a structure differ from an array? Define a structure named BOUCSE02, which contains, std\_name, std\_id, and std\_cgpa. Using this structure, write a program to read information of a student from keyboard and save in a file named student.txt.
**2+2+4**

---

6.

(a) What is function? What are advantages of using function in a program?
**2+2**

(b) Describe the approaches of passing arguments to a function with example.
**5**

(c) What is recursion? Write a recursive function to calculate the factorial of a given integer number.
**2+3**

---
7.

(a) What is file mode? State the purpose of various file modes to open a file.
**1+2**

(b) Write the purpose of the following file handling functions:
(i) fseek() (ii) getw() (iii) feof() (iv) fscanf() (v) rewind()
**5**

(c) A file named ‘data.txt’ contains a series of integer numbers. Write a C program to read these numbers and then write all the positive numbers to a file named ‘positive.txt’.
**6**

---

**Bangladesh Open University**
**School of Science and Technology**
**B. Sc in Computer Science and Engineering Program**
**162 Term (1st Year 2nd Semester)**
**Final Examination**
**Course Code & Title: CSE1237 Structured Programming Language**
**Time: 3 hours**
**Total Marks: 70**

---

**\[N.B.: Answer any 5 (five) questions. The figures in the right margin indicate the full marks. All portions of each question must be answered sequentially.]**

---

1.

(a) What is computer program? Discuss the steps to execute a ‘C’ program.
**1+3**

(b) What is identifier? Write down the rules for constructing ‘C’ identifier.
**1+3**

(c) What is keyword? What is the purpose of the keyword void?
**1+1**

(d) Briefly explain `printf` and `scanf` function. Write the format specifier available in ‘C’.
**4**

---

2.

(a) What is data type? Explain different data types in ‘C’ giving an example to each.
**1+4**

(b) What is operator? Discuss logical operator. What is the difference between `=` operator and the `==` operator?
**1+3+1**

(c) (i) What will be the output of the statement `printf("%c", 65);`
(ii) Does `7%2` produce the same result as `4%3`? Justify your answer.
**2**

(d) Write a C program that prints the numbers divided by both 2 and 5 within the range 1 to 100.
**3**

---

3.

(a) Differentiate between branching and looping with appropriate example.
**6**

(b) What is the use of break and continue statement in C language?
**2**

(c) Classify loop control structure. Write the syntax and draw the block diagram of each of them.
**1+6**

---

4.

(a) What is an array? How does an array differ from an ordinary variable? Briefly explain.
**1+1+4**

(b) What is a string? Discuss the use of any three (03) library functions of string manipulation.
**1+3**

(c) Write a program to calculate summation of 10 integer’s number using array.
**3**

---

5.

(a) What is structure? Explain the syntax of structure declaration with example.
**4**

(b) How does a structure differ from an array? Define a structure named BOUCSE which contains std\_name, std\_id and std\_cgpa. Using this structure write a program to read this information for two students from the keyboard prints the same on the screen.
**1+4**
**2+4**

(c) What is pointer? State the benefits of using pointer in a program.
**1+3**

---

6.

(a) What is function and list out the advantages of function? Differentiate between user defined and built in function.
**1+2**
**3+2**

(b) Distinguish between ‘call by value’ and ‘call by reference’ techniques of arguments passing to functions.
**4**

(c) Write a program to calculate the value of x to the power y (x^y) using
(i) Function, (ii) Recursive Function.
**5**

---

7.

(a) What is file mode? State the purpose of various file modes to open a file.
**1+2**

(b) Illustrate various file handling operations in C.
**5**

(c) A file named ‘data.txt’ contains a series of integer numbers. Write a C program to read these numbers and then write all positive numbers to a file named ‘positive.txt’.
**5**

---

**Bangladesh Open University**
**School of Science and Technology**
**B. Sc in Computer Science and Engineering Program**
**172 Term (1st Year 2nd Semester) Final Examination**
**Course Code & Title: CSE1237 Structured Programming Language**
**Time: 3 hours**
**Total Marks: 70**

---

***\[N.B.: Answer any 5 (five) questions. The figures in the right margin indicate the full marks. All portions of each question must be answered sequentially.]***

---

1.

(a) Define Programming Language. Why C is called structured programming language?
**1+1**

(b) What is token in C programming? Write a simple program and identify what are the tokens are available there.
**1+2+2**

(c)
(i) What is keyword? Give some examples of C keyword.
(ii) What is flow chart? Draw a flow chart to test ODD and EVEN number.
**1+1, 2**

(d) What is an include file? Why do you need to include STDIO.H when use printf(), puts(), or scanf()?
**1+2**

(e) Which of the followings are invalid variable names and why?
Minimum, First\_name, n1n2n, \_2name, num1ones, 3rd\_row, n, float, Sum Total
**2**

---

2.

(a) What is operator? Briefly discuss logical operator with example. What is the difference between the `=` operator and the `==` operator?
**1+1+1**

(b) Write a program to read the price of an item in decimal form (like 15.95) and print the amount.
**2**

(c)
(i) How many times “C” is get printed and mention the reasons?

```c
#include<stdio.h>  
main()  
{  
  int x;  
  for(x=1;x<=10;x++)  
  {  
    if(x<5)  
      printf("C");  
  }  
}
```

**2+2**

(ii) What will be the output of the following program?

```c
main()  
{  
  float a, b, c, x, y, z;  
  a=9; b=12; c=3;  
  x=a-b/3+c*2-1;  
  y=a-b/(3+c)*2;  
  printf("%f %f\n", x, y);  
  printf("y=%f\n", y);  
}
```

**2**

(iii) What is the value of x from the following code and why?

```c
int x, a=10, b=5;  
x=(a>b)? b:a  
```

**2**

---

3.

(a) Classify loop control structure and write the syntax of each of them.
**4**

(b) If two loops are nested together, which one must finish first, the inner loop or the outer loop? Briefly explain.
**4**

(c) Write down the general structure of switch-case statement with example.
**4**

(d) What is the purpose of continue and break statement?
**2**

---

4.

(a) What is an array? How does an array differ from an ordinary variable? Briefly explain.
**2+3**

(b) What is a string? Briefly discuss the use of any three (03) library functions of string manipulation.
**2+3**

(c) Suppose an array contains 10 integers. Write a C program to calculate the sum of these 10 integers.
**5**

---

5.

(a) What is function and list out the advantages of function? C offers two types of functions. What are they, and how are they different?
**2+4**

(b) When passing arguments to a function, what's the difference between passing by value and passing by reference?
**4**

(c) What is Recursion? Write a Program using recursion to determine the factorial of N numbers?
**2+4**

---

6.

(a) What is structure? How does a structure differ from an array? Write the syntax of structure declaration with example.
**1+1+4**

(b) Define a structure type data named student which contains student\_id, student\_name, department and std\_cgpa. Using this structure write a program to read this information for two students from the keyboard prints the same on the screen.
**6**

(c) What is a pointer? State the benefits of pointer. Show the memory representation of the following declarations:

```c
int m=0, n=20;  
int *ptr=&m;  
n=*ptr  
```

**1+3**

---

7.

(a) What is file? Write the purpose of the following file handling functions:
(i) fopen() (ii) getc() (iii) fscanf() (iv) fseek()
**1+4**

(b) What is file mode? State the purpose of various file modes to open a file.
**1+4**

(c) Write a C program to read name and marks of n number of student from user and store them in a file named ‘student.txt’.
**5**


---

**Bangladesh Open University**
**School of Science and Technology**
**B. Sc in Computer Science and Engineering Program**
**182 Term 1st Year 2nd Semester Final Examination**
**Course Code & Title: CSE1237 Structured Programming Language**
**Time: 3 (Three) Hours**
**Total Marks (5×14): 70**

---

**\[N.B.: Answer any 5 (five) questions. The figures in the right margin indicate the full marks. All portions of each question must be answered sequentially.]**

---

### 1.

(a) “C is a structured programming language” - Justify the statement.
**3**

(b) Define keywords for C programming language.
**3**

(c) Briefly describe the types of instruction in C.
**4**

(d) Find the output of following programs.
**4**

**i.**

```c
#include <stdio.h>
main()
{
  float x = 1.1;
  while (x == 1.1)
  {
    printf("\n%f", x);
    x = x - 0.1;
  }
}
```

**ii.**

```c
#include <stdio.h>
main()
{
  int i = 4, j = -1, k = 0, y, z;
  y = i + 5 && j + 1 || k + 2;
  z = i + 5 || j + 1 && k + 2;
  printf("\ny = %d z = %d", y, z);
}
```

**iii.**

```c
#include <stdio.h>
main()
{
  float a = 3.5;
  switch (a)
  {
    case 0.5:
      printf("Art of C");
      break;
    case 1.5:
      printf("Spirit of C");
      break;
    case 2.5:
      printf("See C");
      break;
    case 3.5:
      printf("Simply C");
  }
}
```

**iv.**

```c
#include <stdio.h>
main()
{
  int x = 6, y = 3, z;
  while (x >= 0)
  {
    if (x == y)
      break;
    else
      printf("\n%d %d", x, y);
    x--;
    y++;
  }
}
```

---

### 2.

(a) What is a variable? Write the condition for naming a variable. What is the difference between declaring a variable and defining a variable?
**2+2+2**

(b) What is conditional operator? Write down a C program to determine whether a number is positive or negative by using conditional operator.
**2+2**

(c) Write a program to determine whether an inputted year is Leap Year or not.
**4**

---

### 3.

(a) Why loops are used in structured programming?
**2**

(b) What is the main difference between while and do-while loop? Show the flow chart of while loop and do-while loop.
**4**

(c) Define break statement and continue statement with example.
**4**

(d) Write a C program to print the following letter pattern of ‘n’ heights. For example, if n is inputted as 4, then the output would be as follow:

```
A  
B B  
C C C  
D D D D  
```

**3**

---

### 4.

(a) What happen when we run a program containing switch? Write a C Program to Make a Simple Calculator Using switch..case.
**2+3**

(b) Explain the difference between call by value and call by reference with example.
**5**

(c) What is an array? When should we use array? How it is declared? Explain with proper example.
**4**

---

### 5.

(a) What is pointer? How does it declared? State the benefits of pointer.
**2+2+2**

(b) What will be the output of the following code segment?

```c
int x=30; *y, *z;  
y=&x; /* Assume address of x is 500 and integer is 4 byte size */  
z=y;  
*z++=*z++;  
printf("x=%d, y=%d, z=%d\n", x, y, z);
```

**4**

(c) With a simple C program, show how an array can be accessed using pointer.
**4**

---

### 6.

(a) Why function prototyping is necessary? Distinguish between formal and actual parameter.
**2+2**

(b) Why use return statement in C programming language?
**2**

(c) Describe why the storage classes are used in C programming language.
**3**

(d) What is recursion? Write a program to calculate sum of digits of a given n digit number using recursion.
**2+3**

---

### 7.

(a) Write a C program to sort strings in dictionary order.
**4**

(b) Differentiate between structure and union in C.
**3**

(c) Write a C program to add two distances (feet-inch system) entered by user, using structures.
**4**

(d) What is a file? Explain the following file handling function in C-
`fopen()`, `fread()`, `fwrite()`
**3**

---

