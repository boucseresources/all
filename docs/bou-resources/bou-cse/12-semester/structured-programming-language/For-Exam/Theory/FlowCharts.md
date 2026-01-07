**Course:** Computer Science & Engineering
**Subject:** Programming Fundamentals / C Programming
**Topic:** Introduction to Problem Solving

**Question:**
**Elaborate in detail on the Introduction to Problem Solving. Your answer must cover Flow charts, Tracing flow charts, Problem solving methods, Need for computer Languages, and Sample Programs written in C.**

---

### **Introduction to Problem Solving**

Problem solving is the core (মূল) foundation of computer science. Before writing code, we must understand the problem and plan a solution. A computer cannot think on its own; it requires step-by-step instructions (নির্দেশনা) to perform any task. Therefore, problem solving involves defining the problem, identifying the constraints (সীমাবদ্ধতা), and designing a logical path to the solution.

### **Flow charts**

A Flow chart is a graphical representation (চিত্রিত উপস্থাপনা) of an algorithm. It is essentially a diagram that illustrates the sequence of operations to be performed to get the solution of a problem. We use standard symbols to draw flow charts, which helps us visualize the flow of logic (যুক্তি) clearly.

**Key Symbols used in Flow charts:**

1. **Terminal (Oval):** It indicates the Start (শুরু) or Stop (শেষ) of the program.
2. **Input/Output (Parallelogram):** It is used for reading data or displaying results (ফলাফল).
3. **Process (Rectangle):** It represents arithmetic operations or data manipulations (manipulation means processing or handling).
4. **Decision (Diamond):** It is used for decision making, like checking a condition (শর্ত) such as Yes/No or True/False.
5. **Flow Lines (Arrows):** These show the direction of the flow.

**Advantages of Flow charts:**

* **Communication:** It is a better way of communicating the logic of a system.
* **Analysis:** With the help of a flow chart, the problem can be analyzed (বিশ্লেষণ করা) more effectively.
* **Documentation:** It serves as good program documentation.

### **Tracing flow charts**

Tracing a flow chart, also known as a "Dry Run" (শুষ্ক রান), is the process of manually checking the flow chart with sample data to verify its correctness. Before translating the logic into a programming language, we must ensure that the logic produces the correct output.

**How to Trace:**
To trace a flow chart, we create a trace table. We list all the variables (চলক) as columns. Then, we follow the arrows in the flow chart step by step and record the changing values of the variables in the table.

**Example Scenario:**
Suppose we have a flow chart to find the average of two numbers, A and B.

* **Step 1:** Start.
* **Step 2:** Read A = 10, B = 20.
* **Step 3:** Calculate Sum = A + B (Sum becomes 30).
* **Step 4:** Calculate Avg = Sum / 2 (Avg becomes 15).
* **Step 5:** Print Avg.
* **Step 6:** Stop.

By tracing, we can detect logical errors (ভুল) early, which saves time during the coding phase.

### **Problem solving methods**

To solve a problem effectively using a computer, we generally follow a systematic approach. The most common methods include:

**1. Algorithm (অ্যালগরিদম):**
An algorithm is a step-by-step procedure to solve a specific problem. It is written in simple English-like language. It is not code, but the logic behind the code.

* *Properties:* It must be unambiguous (স্পষ্ট), finite, and effective.

**2. Top-Down Design:**
In this method, a complex problem is divided into smaller sub-problems or modules. We solve each module separately and then combine them. This is also called Modular Programming.

**3. Bottom-Up Design:**
Here, we start with the basic components and build upwards to create the complete system.

**Steps in Problem Solving:**

1. **Problem Definition:** Understanding exactly what needs to be done.
2. **Analysis:** Determining the inputs, outputs, and required formulas.
3. **Design:** Creating the Algorithm or Flow chart.
4. **Coding:** Writing the actual program in a language like C.
5. **Testing and Debugging:** Finding and fixing errors.

### Problem solving approaches:

1. **Understanding the problem**
   The problem statement is read carefully to know what is given and what is required.

2. **Algorithm design**
   An algorithm (অ্যালগরিদম) is a step-by-step logical procedure to solve a problem. It is written in simple language and focuses on logic, not syntax.

3. **Flow chart preparation**
   The algorithm is converted into a flow chart to represent the logic visually.

4. **Coding**
   The flow chart or algorithm is converted into a program using a programming language.

5. **Testing and debugging**
   Testing (পরীক্ষা) checks whether the program gives correct output, and debugging (ত্রুটি সংশোধন) removes errors from the program.

These methods ensure that problems are solved in an organized and efficient manner.




### **Need for computer Languages**

A computer is an electronic machine that only understands binary language (বাইনারি ভাষা), which consists of 0s and 1s. This is called Machine Language. However, for humans, writing instructions in long strings of 0s and 1s is extremely difficult and error-prone.

**Why we need High-Level Languages:**

* **Abstraction (বিমূর্ততা):** Computer languages like C, Java, or Python allow us to write code using English words (like `if`, `while`, `print`). This hides the complexity of the hardware.
* **Portability:** Programs written in high-level languages can often run on different types of computers with little modification.
* **Efficiency:** It allows the programmer to focus on the logic rather than the internal architecture (স্থাপত্য) of the CPU.

To bridge the gap, we use a **Compiler** (কম্পাইলার) or Interpreter. These are software that translate our high-level code into machine code that the computer can execute.

## Sample Programs Written in C

C (সি) is a high-level programming language (উচ্চস্তরের প্রোগ্রামিং ভাষা) that is widely used for system programming and application development. It is known for its simplicity, efficiency, and structured programming features.

### Sample Program 1: Print a Message

This program prints a simple message on the screen.

```c
#include <stdio.h>

int main()
{
    printf("Welcome to C Programming");
    return 0;
}
```

### Sample Program 2: Addition of Two Numbers

This program takes two numbers as input and displays their sum.

```c
#include <stdio.h>

int main()
{
    int a, b, sum;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    sum = a + b;
    printf("Sum = %d", sum);
    return 0;
}
```

These sample programs show how logic is converted into actual code using C language syntax. They also demonstrate the use of input, processing, and output statements.

---

## Conclusion

Problem solving is the most important skill in computer science. Flow charts, tracing techniques, structured problem solving methods, and programming languages like C together help in developing correct and efficient programs. A clear understanding of these concepts is essential for students to perform well in programming and software development.






<!-- ============================= -->

## Problem Solving Methods

Problem solving methods (সমস্যা সমাধানের পদ্ধতি) provide a structured way to approach a problem. Some common methods are:

1. **Understanding the problem**
   The problem statement is read carefully to know what is given and what is required.

2. **Algorithm design**
   An algorithm (অ্যালগরিদম) is a step-by-step logical procedure to solve a problem. It is written in simple language and focuses on logic, not syntax.

3. **Flow chart preparation**
   The algorithm is converted into a flow chart to represent the logic visually.

4. **Coding**
   The flow chart or algorithm is converted into a program using a programming language.

5. **Testing and debugging**
   Testing (পরীক্ষা) checks whether the program gives correct output, and debugging (ত্রুটি সংশোধন) removes errors from the program.

These methods ensure that problems are solved in an organized and efficient manner.



