---
title: CSE2137 OOP All Previous Terms Solved
description: Exam-ready answers to all supplied BOU OOP previous-term questions
---

# CSE2137 — Object Oriented Programming

## All Previous-Term Questions Solved, Chapter-Wise

**Bangladesh Open University — B.Sc. in CSE, 2nd Year 1st Semester**

> Every one of the 142 supplied sub-questions is reproduced exactly and answered separately. Open only the question you want to study. Repeated questions remain repeated because they belong to different terms.

!!! info "MkDocs Material setup"
    Enable **admonition**, **pymdownx.details** and **pymdownx.superfences** in mkdocs.yml for the collapsible questions, nested revision notes and Mermaid blocks to render correctly.

!!! warning "Legacy syllabus note"
    Applet questions are answered for examination purposes. Browser applets are obsolete; do not treat those answers as current application-development guidance.

## How to use this guide

1. Read the **exact question**.
2. Write the answer once without looking.
3. Open the answer and correct your gaps.
4. Before the exam, revise only the **30-second revision** boxes.

---

# Chapter 1: Introduction and Java Fundamentals

## OOP vs. Procedural, Sequential or Structural Programming

??? question "Question 1 — Term 151 — Q1(a)"
    **Exact question**

    Compare Object Oriented Programming (OOP) with sequential programming.

    **Answer**

    Object-oriented programming organizes a program around **objects** that combine state and behaviour. Procedural/sequential/structural programming organizes it around procedures and a sequence of instructions that operate on separate data.

    | Basis | OOP | Procedural/structural programming |
    |---|---|---|
    | Main unit | Class and object | Function/procedure |
    | Design approach | Usually bottom-up | Usually top-down |
    | Data security | Encapsulation and access control | Data is often shared more freely |
    | Reuse | Inheritance, composition and polymorphism | Function reuse |
    | Binding | Supports dynamic binding | Mostly static calls |
    | Suitability | Large, evolving systems | Small or algorithm-centred programs |

    Example: in OOP, a **BankAccount** object owns its balance and provides deposit/withdraw methods. In a procedural design, balance is separate data passed to deposit/withdraw functions.

    !!! tip "30-second revision"
        OOP = objects + encapsulated data + reusable behaviour. Procedural = functions acting on separate data. Remember: bottom-up versus top-down.

    **Sources:** [Oracle: Object-Oriented Programming Concepts](https://docs.oracle.com/javase/tutorial/java/concepts/)

??? question "Question 2 — Term 161 — Q1(a)"
    **Exact question**

    Compare Object oriented programming with sequential programming.

    **Answer**

    Object-oriented programming organizes a program around **objects** that combine state and behaviour. Procedural/sequential/structural programming organizes it around procedures and a sequence of instructions that operate on separate data.

    | Basis | OOP | Procedural/structural programming |
    |---|---|---|
    | Main unit | Class and object | Function/procedure |
    | Design approach | Usually bottom-up | Usually top-down |
    | Data security | Encapsulation and access control | Data is often shared more freely |
    | Reuse | Inheritance, composition and polymorphism | Function reuse |
    | Binding | Supports dynamic binding | Mostly static calls |
    | Suitability | Large, evolving systems | Small or algorithm-centred programs |

    Example: in OOP, a **BankAccount** object owns its balance and provides deposit/withdraw methods. In a procedural design, balance is separate data passed to deposit/withdraw functions.

    !!! tip "30-second revision"
        OOP = objects + encapsulated data + reusable behaviour. Procedural = functions acting on separate data. Remember: bottom-up versus top-down.

    **Sources:** [Oracle: Object-Oriented Programming Concepts](https://docs.oracle.com/javase/tutorial/java/concepts/)

??? question "Question 3 — Term 181 — Q1(a)"
    **Exact question**

    Compare and contrast object oriented programming with procedural programming.

    **Answer**

    Object-oriented programming organizes a program around **objects** that combine state and behaviour. Procedural/sequential/structural programming organizes it around procedures and a sequence of instructions that operate on separate data.

    | Basis | OOP | Procedural/structural programming |
    |---|---|---|
    | Main unit | Class and object | Function/procedure |
    | Design approach | Usually bottom-up | Usually top-down |
    | Data security | Encapsulation and access control | Data is often shared more freely |
    | Reuse | Inheritance, composition and polymorphism | Function reuse |
    | Binding | Supports dynamic binding | Mostly static calls |
    | Suitability | Large, evolving systems | Small or algorithm-centred programs |

    Example: in OOP, a **BankAccount** object owns its balance and provides deposit/withdraw methods. In a procedural design, balance is separate data passed to deposit/withdraw functions.

    !!! tip "30-second revision"
        OOP = objects + encapsulated data + reusable behaviour. Procedural = functions acting on separate data. Remember: bottom-up versus top-down.

    **Sources:** [Oracle: Object-Oriented Programming Concepts](https://docs.oracle.com/javase/tutorial/java/concepts/)

??? question "Question 4 — Term 201 — Q1(a)"
    **Exact question**

    What is the difference between Object-Oriented Programming and Structural Programming?

    **Answer**

    Object-oriented programming organizes a program around **objects** that combine state and behaviour. Procedural/sequential/structural programming organizes it around procedures and a sequence of instructions that operate on separate data.

    | Basis | OOP | Procedural/structural programming |
    |---|---|---|
    | Main unit | Class and object | Function/procedure |
    | Design approach | Usually bottom-up | Usually top-down |
    | Data security | Encapsulation and access control | Data is often shared more freely |
    | Reuse | Inheritance, composition and polymorphism | Function reuse |
    | Binding | Supports dynamic binding | Mostly static calls |
    | Suitability | Large, evolving systems | Small or algorithm-centred programs |

    Example: in OOP, a **BankAccount** object owns its balance and provides deposit/withdraw methods. In a procedural design, balance is separate data passed to deposit/withdraw functions.

    !!! tip "30-second revision"
        OOP = objects + encapsulated data + reusable behaviour. Procedural = functions acting on separate data. Remember: bottom-up versus top-down.

    **Sources:** [Oracle: Object-Oriented Programming Concepts](https://docs.oracle.com/javase/tutorial/java/concepts/)

## Java Features, Platform and Execution

??? question "Question 5 — Term 151 — Q1(b)"
    **Exact question**

    Briefly explain various features of Java.

    **Answer**

    Important Java features are:

    1. **Simple:** removes many complex C/C++ features such as explicit pointer arithmetic.
    2. **Object-oriented:** programs are built with classes and objects.
    3. **Platform-independent:** the compiler produces JVM bytecode, not machine code for one CPU.
    4. **Portable:** fixed primitive sizes and standard class-file format improve portability.
    5. **Secure:** bytecode verification, class loading rules and no raw pointer arithmetic.
    6. **Robust:** strong type checking, exception handling and automatic memory management.
    7. **Multithreaded:** built-in thread and concurrency APIs.
    8. **Distributed/network-friendly:** networking APIs such as sockets and RMI.
    9. **Dynamic:** classes can be loaded and linked at run time.
    10. **High performance:** a JVM may use JIT compilation to translate hot bytecode into native machine code.

    !!! tip "30-second revision"
        Java: simple, OOP, portable, secure, robust, multithreaded, distributed and dynamic. “Write once, run anywhere” comes from bytecode + JVM.

    **Sources:** [Oracle: Learning the Java Language](https://docs.oracle.com/javase/tutorial/java/TOC.html) · [Oracle: Java Virtual Machine Specification](https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-1.html)

??? question "Question 6 — Term 151 — Q1(c)"
    **Exact question**

    What is Java Runtime Environment (JRE)?

    **Answer**

    The **Java Runtime Environment (JRE)** is the environment required to run Java applications. Traditionally it contains:

    - a JVM to load and execute class files;
    - Java class libraries;
    - supporting configuration and runtime files.

    The JRE does not normally include developer tools such as the Java compiler (**javac**) or debugger; those belong to the JDK. In modern modular Java distributions, a separate consumer JRE is not always shipped, but the conceptual distinction remains important for examinations.

    !!! tip "30-second revision"
        JRE = JVM + runtime libraries/support files. It runs Java programs; JDK additionally develops them.

    **Sources:** [Oracle: Java SE Platform Overview](https://docs.oracle.com/javase/8/docs/technotes/guides/index.html)

??? question "Question 7 — Term 151 — Q1(d)"
    **Exact question**

    What do you understand by JVM? Briefly explain the function of JVM.

    **Answer**

    The **Java Virtual Machine (JVM)** is an abstract computing machine that executes Java class-file bytecode. Its principal functions are:

    1. **Class loading:** loads required class files.
    2. **Verification:** checks bytecode structure and safety rules.
    3. **Linking and initialization:** prepares classes and resolves symbolic references.
    4. **Execution:** interprets bytecode or compiles it to native instructions using JIT compilation.
    5. **Memory management:** manages runtime areas such as heap, stacks and method data.
    6. **Garbage collection:** reclaims storage of unreachable objects.
    7. **Platform abstraction and security:** the same class file can run on different systems having compatible JVMs.

    The JVM is platform-dependent in implementation, but the bytecode it accepts is platform-independent.

    !!! tip "30-second revision"
        JVM loads, verifies and executes bytecode, manages memory/GC, and hides OS/CPU differences. JVM implementation differs; bytecode stays portable.

    **Sources:** [Oracle: Java Virtual Machine Specification](https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-1.html)

??? question "Question 8 — Term 151 — Q3(a)"
    **Exact question**

    Java programming is to be compiled first and then to be interpreted for execution. Choose true or false in respect to the said statement and justify your answer.

    **Answer**

    The statement is **substantially true**, but “interpreted” alone is incomplete for modern JVMs.

    ~~~text
    Source.java --javac--> Source.class (bytecode)
                             |
                             v
                     JVM loads and verifies
                             |
                      interpreter / JIT
                             |
                      native CPU execution
    ~~~

    First, **javac** compiles Java source into platform-neutral bytecode. At run time, the JVM loads and verifies the class. It may interpret bytecode instruction-by-instruction and may JIT-compile frequently executed code into native machine instructions. Therefore Java uses compilation followed by JVM-managed execution, commonly described in textbooks as compilation plus interpretation.

    !!! tip "30-second revision"
        True in textbook terms: javac → bytecode → JVM. Modern JVMs use both interpretation and JIT native compilation.

    **Sources:** [Oracle: Java Virtual Machine Specification](https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-1.html) · [Oracle: Java SE Platform Overview](https://docs.oracle.com/javase/8/docs/technotes/guides/index.html)

??? question "Question 9 — Term 161 — Q1(c)"
    **Exact question**

    Discuss the following program line-by-line and understand the unique features that constitute the program:

       ```java
       public class Welcome
       {
           public static void main(String args[])
           {
               System.out.println("Welcome");
           }
       }
       ```

    **Answer**

    ~~~java
    public class Welcome          // declares a public class named Welcome
    {
        public static void main(String args[]) // program entry point
        {
            System.out.println("Welcome");     // prints text and a newline
        }
    }
    ~~~

    - **public class Welcome:** the filename should be **Welcome.java** because the public class name and filename must match.
    - **public:** the JVM launcher can access the method.
    - **static:** main can run without creating a Welcome object.
    - **void:** main returns no value.
    - **String args[]:** receives command-line arguments.
    - **System:** class in java.lang; **out:** standard-output PrintStream; **println:** prints and moves to the next line.
    - Braces define the class and method bodies. Output: **Welcome**.

    !!! tip "30-second revision"
        Class name = filename; main is public static void; args stores command-line values; System.out.println prints with newline.

    **Sources:** [Oracle: Learning the Java Language](https://docs.oracle.com/javase/tutorial/java/TOC.html) · [Oracle: Java SE Platform Overview](https://docs.oracle.com/javase/8/docs/technotes/guides/index.html)

??? question "Question 10 — Term 161 — Q1(d)"
    **Exact question**

    What do you understand by JVM? Explain the function of JVM.

    **Answer**

    The **Java Virtual Machine (JVM)** is an abstract computing machine that executes Java class-file bytecode. Its principal functions are:

    1. **Class loading:** loads required class files.
    2. **Verification:** checks bytecode structure and safety rules.
    3. **Linking and initialization:** prepares classes and resolves symbolic references.
    4. **Execution:** interprets bytecode or compiles it to native instructions using JIT compilation.
    5. **Memory management:** manages runtime areas such as heap, stacks and method data.
    6. **Garbage collection:** reclaims storage of unreachable objects.
    7. **Platform abstraction and security:** the same class file can run on different systems having compatible JVMs.

    The JVM is platform-dependent in implementation, but the bytecode it accepts is platform-independent.

    !!! tip "30-second revision"
        JVM loads, verifies and executes bytecode, manages memory/GC, and hides OS/CPU differences. JVM implementation differs; bytecode stays portable.

    **Sources:** [Oracle: Java Virtual Machine Specification](https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-1.html)

??? question "Question 11 — Term 161 — Q4(a)"
    **Exact question**

    Java program is to be compiled first and then to be interpreted for execution. True or false? Justify your answer.

    **Answer**

    The statement is **substantially true**, but “interpreted” alone is incomplete for modern JVMs.

    ~~~text
    Source.java --javac--> Source.class (bytecode)
                             |
                             v
                     JVM loads and verifies
                             |
                      interpreter / JIT
                             |
                      native CPU execution
    ~~~

    First, **javac** compiles Java source into platform-neutral bytecode. At run time, the JVM loads and verifies the class. It may interpret bytecode instruction-by-instruction and may JIT-compile frequently executed code into native machine instructions. Therefore Java uses compilation followed by JVM-managed execution, commonly described in textbooks as compilation plus interpretation.

    !!! tip "30-second revision"
        True in textbook terms: javac → bytecode → JVM. Modern JVMs use both interpretation and JIT native compilation.

    **Sources:** [Oracle: Java Virtual Machine Specification](https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-1.html) · [Oracle: Java SE Platform Overview](https://docs.oracle.com/javase/8/docs/technotes/guides/index.html)

??? question "Question 12 — Term 161 — Q4(b)"
    **Exact question**

    Write any four names of Java system packages with their classes/contents.

    **Answer**

    Any four valid standard packages with example contents are:

    | Package | Example classes/interfaces | Purpose |
    |---|---|---|
    | **java.lang** | String, Math, Object, Thread | Core language facilities; imported automatically |
    | **java.util** | Scanner, ArrayList, HashMap, Collections | Utilities and collections |
    | **java.io** | File, InputStream, Reader, BufferedReader | Stream and file I/O |
    | **java.net** | URL, Socket, ServerSocket, InetAddress | Networking |

    Other valid examples include **java.awt**, **javax.swing**, **java.time** and **java.sql**.

    !!! tip "30-second revision"
        Memorize four: java.lang—core; java.util—utilities; java.io—I/O; java.net—networking.

    **Sources:** [Oracle: Learning the Java Language](https://docs.oracle.com/javase/tutorial/java/TOC.html)

??? question "Question 13 — Term 171 — Q1(a)"
    **Exact question**

    What is Object Oriented Programming (OOP)? Explain the following two features of Java: Platform independent and Multithread.

    **Answer**

    **OOP** is a programming model in which objects contain data and operations on that data. Java supports classes, objects, encapsulation, inheritance, abstraction and polymorphism.

    **Platform-independent:** javac compiles source to standardized bytecode. A compatible JVM on Windows, Linux or macOS translates that bytecode for the local machine, so the class file need not be recompiled for each OS.

    **Multithreaded:** one Java process can contain multiple threads executing different tasks concurrently while sharing process resources. Java provides Thread, Runnable, synchronization and higher-level java.util.concurrent APIs. This improves responsiveness and resource use when applied correctly.

    !!! tip "30-second revision"
        OOP models objects. Platform independence = bytecode + per-platform JVM. Multithreading = several lightweight execution paths inside one process.

    **Sources:** [Oracle: Object-Oriented Programming Concepts](https://docs.oracle.com/javase/tutorial/java/concepts/) · [Oracle: Java Virtual Machine Specification](https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-1.html) · [Oracle: Processes and Threads](https://docs.oracle.com/javase/tutorial/essential/concurrency/procthread.html)

??? question "Question 14 — Term 181 — Q2(a)"
    **Exact question**

    What makes Java platform independent is its compilation and execution process. Explain how these processes make Java platform independent.

    **Answer**

    Java becomes platform-independent through a two-stage process:

    1. **Compilation:** javac translates **.java** source into a **.class** file containing JVM bytecode. This bytecode is not tied to a particular processor.
    2. **Execution:** a JVM built for the host operating system loads, verifies and executes the same bytecode by interpreting or JIT-compiling it into local native instructions.

    Thus, the **JVM implementation is platform-specific**, while the compiled bytecode is portable. A program can still lose portability if it relies on native libraries, OS-specific paths or unavailable APIs.

    !!! tip "30-second revision"
        Same bytecode, different JVMs. javac makes portable class files; each local JVM turns them into native instructions.

    **Sources:** [Oracle: Java Virtual Machine Specification](https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-1.html) · [Oracle: Java SE Platform Overview](https://docs.oracle.com/javase/8/docs/technotes/guides/index.html)

??? question "Question 15 — Term 201 — Q2(c)"
    **Exact question**

    Write a Java Program to take the student name and ID as inputs from the keyboard and display those on the console. You should prompt the user to provide the student-name and ID. Display the name and ID in a single line as follows:

       ```text
       The ID is “123456” for the student “Mustafiz”.
       ```

       Here, Mustafiz and 123456 are the inputs provided by the user. Notice the double-quotes; your output should contain those double-quotes.

    **Answer**

    ~~~java
    import java.util.Scanner;

    public class StudentInfo {
        public static void main(String[] args) {
            Scanner input = new Scanner(System.in);

            System.out.print("Enter student name: ");
            String name = input.nextLine();

            System.out.print("Enter student ID: ");
            String id = input.nextLine(); // String preserves leading zeroes

            System.out.printf("The ID is \"%s\" for the student \"%s\".%n", id, name);
            input.close();
        }
    }
    ~~~

    If the inputs are Mustafiz and 123456, the required output is:

    ~~~text
    The ID is "123456" for the student "Mustafiz".
    ~~~

    !!! tip "30-second revision"
        Use Scanner.nextLine() for both values and escape literal quotation marks as " inside a Java string.

    **Sources:** [Oracle: Learning the Java Language](https://docs.oracle.com/javase/tutorial/java/TOC.html)

??? question "Question 16 — Term 201 — Q4(a)"
    **Exact question**

    “Java programming is to be compiled first and then to be interpreted for execution.” Is this statement true or false? Justify your answer with proper description.

    **Answer**

    The statement is **substantially true**, but “interpreted” alone is incomplete for modern JVMs.

    ~~~text
    Source.java --javac--> Source.class (bytecode)
                             |
                             v
                     JVM loads and verifies
                             |
                      interpreter / JIT
                             |
                      native CPU execution
    ~~~

    First, **javac** compiles Java source into platform-neutral bytecode. At run time, the JVM loads and verifies the class. It may interpret bytecode instruction-by-instruction and may JIT-compile frequently executed code into native machine instructions. Therefore Java uses compilation followed by JVM-managed execution, commonly described in textbooks as compilation plus interpretation.

    !!! tip "30-second revision"
        True in textbook terms: javac → bytecode → JVM. Modern JVMs use both interpretation and JIT native compilation.

    **Sources:** [Oracle: Java Virtual Machine Specification](https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-1.html) · [Oracle: Java SE Platform Overview](https://docs.oracle.com/javase/8/docs/technotes/guides/index.html)

??? question "Question 17 — Term 211 — Q2(a)"
    **Exact question**

    What is the difference between JDK, JRE, and JVM?

    **Answer**

    | Item | Meaning | Main contents/purpose |
    |---|---|---|
    | **JVM** | Java Virtual Machine | Loads, verifies and executes bytecode; manages runtime memory |
    | **JRE** | Java Runtime Environment | JVM + runtime class libraries/support needed to run programs |
    | **JDK** | Java Development Kit | JRE/runtime + developer tools such as javac, java, javadoc and debugger |

    Conceptually:

    ~~~text
    JDK = development tools + runtime environment
    JRE = JVM + runtime libraries
    JVM = bytecode execution engine
    ~~~

    Modern Java installations may use modular runtime images instead of a separately installed JRE, but the examination relationship above is correct.

    !!! tip "30-second revision"
        JDK develops and runs; JRE runs; JVM executes bytecode. Think: JDK ⊃ JRE ⊃ JVM.

    **Sources:** [Oracle: Java SE Platform Overview](https://docs.oracle.com/javase/8/docs/technotes/guides/index.html) · [Oracle: Java Virtual Machine Specification](https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-1.html)

??? question "Question 18 — Term 211 — Q4(a)"
    **Exact question**

    “Java programming is to be compiled first and then to be interpreted for execution”. Is this statement true or false? Justify your answer with proper description.

    **Answer**

    The statement is **substantially true**, but “interpreted” alone is incomplete for modern JVMs.

    ~~~text
    Source.java --javac--> Source.class (bytecode)
                             |
                             v
                     JVM loads and verifies
                             |
                      interpreter / JIT
                             |
                      native CPU execution
    ~~~

    First, **javac** compiles Java source into platform-neutral bytecode. At run time, the JVM loads and verifies the class. It may interpret bytecode instruction-by-instruction and may JIT-compile frequently executed code into native machine instructions. Therefore Java uses compilation followed by JVM-managed execution, commonly described in textbooks as compilation plus interpretation.

    !!! tip "30-second revision"
        True in textbook terms: javac → bytecode → JVM. Modern JVMs use both interpretation and JIT native compilation.

    **Sources:** [Oracle: Java Virtual Machine Specification](https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-1.html) · [Oracle: Java SE Platform Overview](https://docs.oracle.com/javase/8/docs/technotes/guides/index.html)

## Data Types, Arrays, Strings and Basic Code Analysis

??? question "Question 19 — Term 151 — Q3(b)"
    **Exact question**

    What are the data types supported by Java? What are Autoboxing and Unboxing?

    **Answer**

    Java types are divided into:

    1. **Primitive types:** byte, short, int, long, float, double, char and boolean.
    2. **Reference types:** classes, interfaces, arrays, enum types and String objects.

    **Autoboxing** is the compiler's automatic conversion from a primitive to its wrapper object, for example:

    ~~~java
    Integer n = 10;       // int -> Integer
    ~~~

    **Unboxing** is the reverse conversion:

    ~~~java
    int value = n;        // Integer -> int
    ~~~

    Unboxing a null wrapper throws NullPointerException, and wrapper comparison with **==** may be misleading because it compares references.

    !!! tip "30-second revision"
        Eight primitives: byte short int long float double char boolean. Boxing: int→Integer; unboxing: Integer→int.

    **Sources:** [Oracle: Learning the Java Language](https://docs.oracle.com/javase/tutorial/java/TOC.html)

??? question "Question 20 — Term 161 — Q2(d)"
    **Exact question**

    Explain array implementation in Java with example.

    **Answer**

    An array is a fixed-length object that stores elements of one declared type and uses zero-based indexing.

    ~~~java
    public class ArrayDemo {
        public static void main(String[] args) {
            int[] marks = {70, 80, 90};
            int total = 0;

            for (int mark : marks) {
                total += mark;
            }
            System.out.println("Elements = " + marks.length);
            System.out.println("Total = " + total);
        }
    }
    ~~~

    Arrays may be declared with **type[] name**, created with **new type[size]**, and accessed from index 0 to length−1. Access outside that range throws ArrayIndexOutOfBoundsException. Multidimensional arrays in Java are arrays whose elements are themselves arrays.

    !!! tip "30-second revision"
        Array = fixed-size, same-type, zero-indexed object. Declare int[] a; create new int[5]; length is a.length.

    **Sources:** [Oracle: Learning the Java Language](https://docs.oracle.com/javase/tutorial/java/TOC.html)

??? question "Question 21 — Term 171 — Q1(c)"
    **Exact question**

    What is Typecasting? What will be the output of the following code segment?

       ```java
       class Simple
       {
           public static void main(String args[])
           {
               float f = 10.5f;
               int a = (int) f;
               System.out.println(f);
               System.out.println(a);
           }
       }
       ```

    **Answer**

    Typecasting converts a value or reference from one type to another compatible type.

    - **Widening conversion** is normally automatic, such as int to double.
    - **Narrowing conversion** requires an explicit cast and may lose data, such as float to int.

    In the given code, **(int) f** removes the fractional part; it does not round.

    ~~~text
    10.5
    10
    ~~~

    The first println prints the float value 10.5. The second prints integer 10 after narrowing conversion.

    !!! tip "30-second revision"
        Widening is automatic; narrowing needs a cast and may lose data. (int)10.5f becomes 10, not 11.

    **Sources:** [Oracle: Learning the Java Language](https://docs.oracle.com/javase/tutorial/java/TOC.html)

??? question "Question 22 — Term 201 — Q3(c)"
    **Exact question**

    To compare two strings, will you use `==` or `equals()` methods? Briefly explain the reason. Explain with example the following String methods used in Java:

       1. `indexOf()`
       2. `charAt()`
       3. `endsWith()`
       4. `contain()`

    **Answer**

    Use **equals()** to compare the character content of two String objects. The **==** operator compares reference identity—whether both variables point to the same object.

    ~~~java
    String s = "Object Oriented Java";
    String t = new String("Object Oriented Java");

    System.out.println(s == t);                 // false
    System.out.println(s.equals(t));            // true
    System.out.println(s.indexOf("Java"));      // 16
    System.out.println(s.charAt(0));            // O
    System.out.println(s.endsWith("Java"));     // true
    System.out.println(s.contains("Oriented")); // true
    ~~~

    - **indexOf(x):** first index of x, or −1 if absent.
    - **charAt(i):** character at zero-based index i.
    - **endsWith(suffix):** tests the ending.
    - **contains(sequence):** tests whether a character sequence occurs.

    The paper writes **contain()**; the correct Java method name is **contains()**.

    !!! tip "30-second revision"
        == compares String references; equals() compares contents. indexOf→position/−1, charAt→character, endsWith→suffix test, contains→substring test.

    **Sources:** [Oracle: Comparing Strings](https://docs.oracle.com/javase/tutorial/java/data/comparestrings.html)

??? question "Question 23 — Term 201 — Q5(d)"
    **Exact question**

    What will be the output of the below code?

       ```java
       public class A {
           public static void main(String[] args)
           {
               if (true)
                   break;
           }
       }
       ```

    **Answer**

    The program does not produce normal output because it causes a **compile-time error**. A plain **break** statement is legal only inside a loop or switch statement. The **if** statement alone is not a breakable statement.

    A compiler reports an error similar to “break outside switch or loop.” To leave a method at that point, use **return** instead. A labeled break would also require an enclosing labeled statement.

    !!! tip "30-second revision"
        No output: compile-time error. break must be inside a loop or switch; use return to exit main.

    **Sources:** [Oracle: Learning the Java Language](https://docs.oracle.com/javase/tutorial/java/TOC.html)

??? question "Question 24 — Term 211 — Q6(b)"
    **Exact question**

    To compare two strings, will you use `==` or `equals()` methods? Briefly explain the reason. Explain with example the following String methods used in Java:

       1. `indexOf()`
       2. `charAt()`
       3. `endsWith()`
       4. `contain()`

    **Answer**

    Use **equals()** to compare the character content of two String objects. The **==** operator compares reference identity—whether both variables point to the same object.

    ~~~java
    String s = "Object Oriented Java";
    String t = new String("Object Oriented Java");

    System.out.println(s == t);                 // false
    System.out.println(s.equals(t));            // true
    System.out.println(s.indexOf("Java"));      // 16
    System.out.println(s.charAt(0));            // O
    System.out.println(s.endsWith("Java"));     // true
    System.out.println(s.contains("Oriented")); // true
    ~~~

    - **indexOf(x):** first index of x, or −1 if absent.
    - **charAt(i):** character at zero-based index i.
    - **endsWith(suffix):** tests the ending.
    - **contains(sequence):** tests whether a character sequence occurs.

    The paper writes **contain()**; the correct Java method name is **contains()**.

    !!! tip "30-second revision"
        == compares String references; equals() compares contents. indexOf→position/−1, charAt→character, endsWith→suffix test, contains→substring test.

    **Sources:** [Oracle: Comparing Strings](https://docs.oracle.com/javase/tutorial/java/data/comparestrings.html)

## Multithreading, Collections and Garbage Collection

??? question "Question 25 — Term 151 — Q3(e)"
    **Exact question**

    What do you mean by garbage collection?

    **Answer**

    Garbage collection is automatic memory reclamation performed by the JVM. An object becomes **eligible** for collection when it is no longer reachable through any live reference path. The collector may later reclaim its heap memory.

    Its purposes are to reduce manual deallocation errors, reclaim unused heap space and help prevent dangling-pointer problems. A program can remove references or request collection through **System.gc()**, but this is only a request; Java does not guarantee when or whether a particular eligible object will be collected. Garbage collection handles memory, not every external resource, so files and sockets should still be closed explicitly or with try-with-resources.

    !!! tip "30-second revision"
        Unreachable object ⇒ eligible for GC. JVM decides timing; System.gc() is only a request. Close files/sockets yourself.

    **Sources:** [Oracle: Java Virtual Machine Specification](https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-1.html)

??? question "Question 26 — Term 151 — Q6(a)"
    **Exact question**

    What are the advantages of multithreading over process based multitasking?

    **Answer**

    Multithreading means multiple threads execute within one process. Compared with process-based multitasking, its advantages are:

    1. **Lower creation and switching overhead:** threads are lighter than processes.
    2. **Shared resources:** threads naturally share memory and open files.
    3. **Faster communication:** shared-memory communication is cheaper than many IPC mechanisms.
    4. **Responsiveness:** a UI can remain responsive while another thread performs work.
    5. **Parallelism and throughput:** independent tasks may use multiple CPU cores.
    6. **Economy:** less memory is needed than for several isolated processes.

    The trade-off is that shared data requires synchronization; otherwise races, deadlocks or visibility errors may occur.

    !!! tip "30-second revision"
        Threads are lightweight, share memory, communicate faster and improve responsiveness/parallelism. Cost: synchronization and race risks.

    **Sources:** [Oracle: Processes and Threads](https://docs.oracle.com/javase/tutorial/essential/concurrency/procthread.html)

??? question "Question 27 — Term 171 — Q6(a)"
    **Exact question**

    What are advantages of multithreading over process based multitasking?

    **Answer**

    Multithreading means multiple threads execute within one process. Compared with process-based multitasking, its advantages are:

    1. **Lower creation and switching overhead:** threads are lighter than processes.
    2. **Shared resources:** threads naturally share memory and open files.
    3. **Faster communication:** shared-memory communication is cheaper than many IPC mechanisms.
    4. **Responsiveness:** a UI can remain responsive while another thread performs work.
    5. **Parallelism and throughput:** independent tasks may use multiple CPU cores.
    6. **Economy:** less memory is needed than for several isolated processes.

    The trade-off is that shared data requires synchronization; otherwise races, deadlocks or visibility errors may occur.

    !!! tip "30-second revision"
        Threads are lightweight, share memory, communicate faster and improve responsiveness/parallelism. Cost: synchronization and race risks.

    **Sources:** [Oracle: Processes and Threads](https://docs.oracle.com/javase/tutorial/essential/concurrency/procthread.html)

??? question "Question 28 — Term 171 — Q6(b)"
    **Exact question**

    Briefly describe the basic interfaces of Java Collection Framework.

    **Answer**

    The Java Collections Framework provides standard interfaces, implementations and algorithms for groups of objects.

    - **Collection:** root interface for groups of elements.
    - **List:** ordered sequence; duplicates allowed; positional access.
    - **Set:** no duplicate elements.
    - **Queue:** holds elements for processing, usually FIFO.
    - **Deque:** insertion/removal at both ends; supports FIFO and LIFO.
    - **Map:** key–value mappings; duplicate keys are not allowed. Map is a separate hierarchy, not a subtype of Collection.
    - **SortedSet/NavigableSet** and **SortedMap/NavigableMap:** sorted and navigation-capable variants.

    Common implementations include ArrayList, LinkedList, HashSet, TreeSet, HashMap and TreeMap.

    !!! tip "30-second revision"
        Collection hierarchy: List, Set, Queue, Deque. Map is separate. List ordered/duplicates; Set unique; Map key–value.

    **Sources:** [Oracle: Collections Interfaces](https://docs.oracle.com/javase/tutorial/collections/interfaces/)

??? question "Question 29 — Term 171 — Q6(c)"
    **Exact question**

    What is the purpose of garbage collection in Java and when is it used?

    **Answer**

    Garbage collection is automatic memory reclamation performed by the JVM. An object becomes **eligible** for collection when it is no longer reachable through any live reference path. The collector may later reclaim its heap memory.

    Its purposes are to reduce manual deallocation errors, reclaim unused heap space and help prevent dangling-pointer problems. A program can remove references or request collection through **System.gc()**, but this is only a request; Java does not guarantee when or whether a particular eligible object will be collected. Garbage collection handles memory, not every external resource, so files and sockets should still be closed explicitly or with try-with-resources.

    !!! tip "30-second revision"
        Unreachable object ⇒ eligible for GC. JVM decides timing; System.gc() is only a request. Close files/sockets yourself.

    **Sources:** [Oracle: Java Virtual Machine Specification](https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-1.html)

??? question "Question 30 — Term 181 — Q7(c)"
    **Exact question**

    What is multithreading in Java? Discuss the advantages of multithreading over process based multitasking.

    **Answer**

    Multithreading means multiple threads execute within one process. Compared with process-based multitasking, its advantages are:

    1. **Lower creation and switching overhead:** threads are lighter than processes.
    2. **Shared resources:** threads naturally share memory and open files.
    3. **Faster communication:** shared-memory communication is cheaper than many IPC mechanisms.
    4. **Responsiveness:** a UI can remain responsive while another thread performs work.
    5. **Parallelism and throughput:** independent tasks may use multiple CPU cores.
    6. **Economy:** less memory is needed than for several isolated processes.

    The trade-off is that shared data requires synchronization; otherwise races, deadlocks or visibility errors may occur.

    !!! tip "30-second revision"
        Threads are lightweight, share memory, communicate faster and improve responsiveness/parallelism. Cost: synchronization and race risks.

    **Sources:** [Oracle: Processes and Threads](https://docs.oracle.com/javase/tutorial/essential/concurrency/procthread.html)

??? question "Question 31 — Term 201 — Q5(a)"
    **Exact question**

    What do you understand by Collection Framework in Java? Write some differences between List, Set, and Map in the collection hierarchy.

    **Answer**

    The **Collections Framework** is a unified architecture of interfaces, implementations and algorithms used to store and manipulate groups of objects.

    | Feature | List | Set | Map |
    |---|---|---|---|
    | Structure | Sequence of elements | Collection of unique elements | Key–value pairs |
    | Duplicates | Allowed | Not allowed | Keys unique; values may repeat |
    | Positional index | Yes | No | Access by key |
    | Common classes | ArrayList, LinkedList | HashSet, TreeSet | HashMap, TreeMap |
    | Hierarchy | Extends Collection | Extends Collection | Separate from Collection |

    Choose List for ordered records, Set for membership/uniqueness, and Map for lookup by key.

    !!! tip "30-second revision"
        List = ordered + duplicates; Set = unique elements; Map = unique keys mapped to values and is not a Collection subtype.

    **Sources:** [Oracle: Collections Interfaces](https://docs.oracle.com/javase/tutorial/collections/interfaces/)

??? question "Question 32 — Term 201 — Q6(b)"
    **Exact question**

    What are the advantages of multithreading over process based multitasking?

    **Answer**

    Multithreading means multiple threads execute within one process. Compared with process-based multitasking, its advantages are:

    1. **Lower creation and switching overhead:** threads are lighter than processes.
    2. **Shared resources:** threads naturally share memory and open files.
    3. **Faster communication:** shared-memory communication is cheaper than many IPC mechanisms.
    4. **Responsiveness:** a UI can remain responsive while another thread performs work.
    5. **Parallelism and throughput:** independent tasks may use multiple CPU cores.
    6. **Economy:** less memory is needed than for several isolated processes.

    The trade-off is that shared data requires synchronization; otherwise races, deadlocks or visibility errors may occur.

    !!! tip "30-second revision"
        Threads are lightweight, share memory, communicate faster and improve responsiveness/parallelism. Cost: synchronization and race risks.

    **Sources:** [Oracle: Processes and Threads](https://docs.oracle.com/javase/tutorial/essential/concurrency/procthread.html)

# Chapter 2: Classes, Objects, Methods and Constructors

## Classes and Objects

??? question "Question 1 — Term 151 — Q2(a)"
    **Exact question**

    Define class and object with example.

    **Answer**

    A **class** is a blueprint that declares fields and methods. An **object** is a runtime instance of that class with its own identity and state.

    ~~~java
    class Student {
        String name;                    // state
        void study() {                  // behaviour
            System.out.println(name + " is studying");
        }
    }

    public class TestStudent {
        public static void main(String[] args) {
            Student s1 = new Student(); // object
            s1.name = "Nila";
            s1.study();
        }
    }
    ~~~

    Many objects can be created from one class. They share the declared behaviour but normally hold separate copies of instance fields.

    !!! tip "30-second revision"
        Class = blueprint/type; object = actual instance. Fields store state; methods define behaviour; new creates an object.

    **Sources:** [Oracle: Classes and Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/)

??? question "Question 2 — Term 161 — Q1(b)"
    **Exact question**

    What do you mean by classes and objects?

    **Answer**

    A **class** is a blueprint that declares fields and methods. An **object** is a runtime instance of that class with its own identity and state.

    ~~~java
    class Student {
        String name;                    // state
        void study() {                  // behaviour
            System.out.println(name + " is studying");
        }
    }

    public class TestStudent {
        public static void main(String[] args) {
            Student s1 = new Student(); // object
            s1.name = "Nila";
            s1.study();
        }
    }
    ~~~

    Many objects can be created from one class. They share the declared behaviour but normally hold separate copies of instance fields.

    !!! tip "30-second revision"
        Class = blueprint/type; object = actual instance. Fields store state; methods define behaviour; new creates an object.

    **Sources:** [Oracle: Classes and Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/)

??? question "Question 3 — Term 171 — Q2(b)"
    **Exact question**

    Classes and objects are fundamental building blocks of OOP. What do you know about these? Use examples to elaborate.

    **Answer**

    A **class** is a blueprint that declares fields and methods. An **object** is a runtime instance of that class with its own identity and state.

    ~~~java
    class Student {
        String name;                    // state
        void study() {                  // behaviour
            System.out.println(name + " is studying");
        }
    }

    public class TestStudent {
        public static void main(String[] args) {
            Student s1 = new Student(); // object
            s1.name = "Nila";
            s1.study();
        }
    }
    ~~~

    Many objects can be created from one class. They share the declared behaviour but normally hold separate copies of instance fields.

    !!! tip "30-second revision"
        Class = blueprint/type; object = actual instance. Fields store state; methods define behaviour; new creates an object.

    **Sources:** [Oracle: Classes and Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/)

??? question "Question 4 — Term 181 — Q1(b)"
    **Exact question**

    What are classes and objects? Explain it with an example.

    **Answer**

    A **class** is a blueprint that declares fields and methods. An **object** is a runtime instance of that class with its own identity and state.

    ~~~java
    class Student {
        String name;                    // state
        void study() {                  // behaviour
            System.out.println(name + " is studying");
        }
    }

    public class TestStudent {
        public static void main(String[] args) {
            Student s1 = new Student(); // object
            s1.name = "Nila";
            s1.study();
        }
    }
    ~~~

    Many objects can be created from one class. They share the declared behaviour but normally hold separate copies of instance fields.

    !!! tip "30-second revision"
        Class = blueprint/type; object = actual instance. Fields store state; methods define behaviour; new creates an object.

    **Sources:** [Oracle: Classes and Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/)

??? question "Question 5 — Term 211 — Q1(a)"
    **Exact question**

    Classes and objects are fundamental building blocks of OOP. What do you know about these? Use examples to elaborate.

    **Answer**

    A **class** is a blueprint that declares fields and methods. An **object** is a runtime instance of that class with its own identity and state.

    ~~~java
    class Student {
        String name;                    // state
        void study() {                  // behaviour
            System.out.println(name + " is studying");
        }
    }

    public class TestStudent {
        public static void main(String[] args) {
            Student s1 = new Student(); // object
            s1.name = "Nila";
            s1.study();
        }
    }
    ~~~

    Many objects can be created from one class. They share the declared behaviour but normally hold separate copies of instance fields.

    !!! tip "30-second revision"
        Class = blueprint/type; object = actual instance. Fields store state; methods define behaviour; new creates an object.

    **Sources:** [Oracle: Classes and Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/)

## Constructors, Static and Final Members

??? question "Question 6 — Term 151 — Q2(b)"
    **Exact question**

    Distinguish between static and non-static nested classes. What are the properties of static method, static block and final variable?

    **Answer**

    | Static nested class | Non-static nested class (inner class) |
    |---|---|
    | Declared with static | Declared without static |
    | No automatic outer-object reference | Associated with an outer-class object |
    | Directly accesses only static outer members | Can access all outer members, including private instance members |
    | Created as Outer.Nested n = new Outer.Nested() | Created as Outer.Inner i = outer.new Inner() |

    **Static method:** belongs to the class, is called without an object, directly accesses only static members, and cannot use this or super.

    **Static block:** runs once when the class is initialized, in source order, and initializes complex static state.

    **Final variable:** can be assigned only once. A final reference cannot point to another object, although the referenced object's internal state may still change. A class constant is conventionally **static final**.

    !!! tip "30-second revision"
        Static nested: no outer instance. Inner: tied to outer object. static method/class block belong to class. final variable gets one assignment.

    **Sources:** [Oracle: Classes and Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/)

??? question "Question 7 — Term 161 — Q2(a)"
    **Exact question**

    What is constructor? What are its special properties?

    **Answer**

    A constructor initializes a newly created object. Its special characteristics are:

    - it has exactly the same name as the class;
    - it has no return type, not even void;
    - it is invoked automatically when **new** creates an object;
    - it initializes instance state;
    - constructors may be overloaded;
    - they are not inherited and cannot be overridden;
    - the first statement may call another constructor using **this(...)** or a superclass constructor using **super(...)**;
    - if none is declared, the compiler may supply a default no-argument constructor;
    - constructors may have access modifiers but cannot be abstract, static or final.

    ~~~java
    class Book {
        String title;
        Book(String title) { this.title = title; }
    }
    ~~~

    !!! tip "30-second revision"
        Constructor: class name, no return type, automatic with new, initializes object, overloadable but not inherited/overridden. First call may be this() or super().

    **Sources:** [Oracle: Providing Constructors](https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html)

??? question "Question 8 — Term 161 — Q2(c)"
    **Exact question**

    Declare a class called `Coordinate` to have 3-dimensional Cartesian coordinates. Define the following methods:

       1. Constructor(s)
       2. `add_coordinates` to add two Coordinate objects and produce a resultant object.

       Generate and handle exception if all three coordinates of the resultant Coordinate object are zero. Define method `main` to show use of the above methods.

    **Answer**

    ~~~java
    class ZeroCoordinateException extends Exception {
        ZeroCoordinateException(String message) { super(message); }
    }

    class Coordinate {
        private final int x, y, z;

        Coordinate() { this(0, 0, 0); }
        Coordinate(int x, int y, int z) {
            this.x = x; this.y = y; this.z = z;
        }

        Coordinate add_coordinates(Coordinate other)
                throws ZeroCoordinateException {
            int rx = x + other.x;
            int ry = y + other.y;
            int rz = z + other.z;
            if (rx == 0 && ry == 0 && rz == 0)
                throw new ZeroCoordinateException("Result is the zero coordinate");
            return new Coordinate(rx, ry, rz);
        }

        public String toString() { return "(" + x + ", " + y + ", " + z + ")"; }

        public static void main(String[] args) {
            Coordinate a = new Coordinate(2, -1, 4);
            Coordinate b = new Coordinate(-2, 1, -4);
            try {
                System.out.println(a.add_coordinates(b));
            } catch (ZeroCoordinateException e) {
                System.out.println(e.getMessage());
            }
        }
    }
    ~~~

    The addition method returns a new object rather than changing either operand. The checked custom exception is thrown only when all three resultant components are zero.

    !!! tip "30-second revision"
        Add corresponding x, y, z values; if rx=ry=rz=0, throw a custom exception; otherwise return a new Coordinate.

    **Sources:** [Oracle: Providing Constructors](https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html) · [Oracle: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

??? question "Question 9 — Term 161 — Q4(d)"
    **Exact question**

    What are final class, final function and final variable in Java?

    **Answer**

    - A **final variable** may be assigned only once. **static final** is commonly used for constants.
    - A **final method** cannot be overridden by subclasses, though it is inherited and may be overloaded.
    - A **final class** cannot be extended, for example String.

    ~~~java
    final class Utility { }

    class Account {
        static final double RATE = 0.08;
        public final void showId() { }
    }
    ~~~

    The purpose of final is to prevent reassignment, overriding or inheritance, depending on where it is applied.

    !!! tip "30-second revision"
        final variable: assign once; final method: no override; final class: no subclass.

    **Sources:** [Oracle: Interfaces and Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/)

??? question "Question 10 — Term 171 — Q2(a)"
    **Exact question**

    Constructors are special methods used for object creation. What are the characteristics that make them different than other regular methods?

    **Answer**

    A constructor initializes a newly created object. Its special characteristics are:

    - it has exactly the same name as the class;
    - it has no return type, not even void;
    - it is invoked automatically when **new** creates an object;
    - it initializes instance state;
    - constructors may be overloaded;
    - they are not inherited and cannot be overridden;
    - the first statement may call another constructor using **this(...)** or a superclass constructor using **super(...)**;
    - if none is declared, the compiler may supply a default no-argument constructor;
    - constructors may have access modifiers but cannot be abstract, static or final.

    ~~~java
    class Book {
        String title;
        Book(String title) { this.title = title; }
    }
    ~~~

    !!! tip "30-second revision"
        Constructor: class name, no return type, automatic with new, initializes object, overloadable but not inherited/overridden. First call may be this() or super().

    **Sources:** [Oracle: Providing Constructors](https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html)

??? question "Question 11 — Term 171 — Q3(b)"
    **Exact question**

    In a program written in an OOP, several objects may communicate/interact with each other using messages and methods. Methods may have arguments. Explain methods and arguments with an example from Java.

    **Answer**

    A **method** is a named block of behaviour declared inside a class. A **parameter** is a variable in the method declaration; an **argument** is the actual value supplied in a call. Objects communicate by invoking methods and passing arguments.

    ~~~java
    class Account {
        private double balance;

        void deposit(double amount) { // amount is a parameter
            if (amount > 0) balance += amount;
        }
        double getBalance() { return balance; }
    }

    Account a = new Account();
    a.deposit(500.0);                 // 500.0 is an argument
    ~~~

    Java passes arguments by value. For an object argument, the copied value is the reference, so a method can modify that object's fields but cannot replace the caller's variable itself.

    !!! tip "30-second revision"
        Method = behaviour. Parameter appears in declaration; argument appears in call. Java always passes values—even object-reference values.

    **Sources:** [Oracle: Classes and Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/)

??? question "Question 12 — Term 171 — Q4(a)"
    **Exact question**

    You have a Java class named `Student` with four attributes/variables—name, CGPA, department, and number_of_siblings. It also has the default constructor method with no parameter, and methods to set name and get name from the objects of this class. Show the class declaration along with the variables and the methods mentioned above.

    **Answer**

    ~~~java
    class Student {
        private String name;
        private double cgpa;
        private String department;
        private int numberOfSiblings;

        public Student() { }

        public void setName(String name) {
            this.name = name;
        }

        public String getName() {
            return name;
        }
    }
    ~~~

    The no-argument constructor is explicit. The four variables are attributes, while setName and getName provide controlled write/read access to name.

    !!! tip "30-second revision"
        Declare four fields, Student() with no parameters, setName(String), and getName(). Use this.name to distinguish field from parameter.

    **Sources:** [Oracle: Classes and Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/) · [Oracle: Providing Constructors](https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html)

??? question "Question 13 — Term 171 — Q4(b)"
    **Exact question**

    You have a class named `StudentHandler` which uses the Student class in question 5.a. This class creates new students if needed and keeps track of them. Show the code that this class will use to create a new student whose name is Nazmul. Please remember that the Student class only has a default constructor that does not take any parameter.

    **Answer**

    ~~~java
    class StudentHandler {
        public static void main(String[] args) {
            Student student = new Student(); // default/no-argument constructor
            student.setName("Nazmul");
            System.out.println(student.getName());
        }
    }
    ~~~

    Because Student has no constructor that accepts a name, the handler must first call **new Student()** and then set the name through the mutator.

    !!! tip "30-second revision"
        new Student() creates the object; student.setName("Nazmul") assigns the name because no parameterized constructor exists.

    **Sources:** [Oracle: Classes and Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/) · [Oracle: Providing Constructors](https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html)

??? question "Question 14 — Term 181 — Q2(b)"
    **Exact question**

    Define accessors (getters), mutators (setters) and constructors in your own words. How is constructor different than other methods?

    **Answer**

    - An **accessor/getter** reads and returns an object's field without directly exposing the field.
    - A **mutator/setter** validates or changes a field.
    - A **constructor** establishes the initial state when an object is created.

    ~~~java
    class Person {
        private int age;
        Person(int age) { setAge(age); }
        int getAge() { return age; }
        void setAge(int age) {
            if (age >= 0) this.age = age;
        }
    }
    ~~~

    A constructor has the class name, no return type, runs during object creation, is not inherited and cannot be overridden. Ordinary methods have independent names/return types and are called whenever needed.

    !!! tip "30-second revision"
        Getter reads, setter changes/validates, constructor initializes. Constructor has class name + no return type and runs with new.

    **Sources:** [Oracle: Providing Constructors](https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html) · [Oracle: Controlling Access to Members](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)

??? question "Question 15 — Term 181 — Q3(c)"
    **Exact question**

    Class A has the following static char variable called direction:

       ```java
       static char direction = 'E';
       ```

       There are two objects, `a1` and `b1`, created from this class. `b1` issues the following statement:

       ```java
       direction = 'S';
       ```

       Now, if both `a1` and `b1` print the value of `direction`, what will be shown in each print statement and why?

    **Answer**

    Both objects print:

    ~~~text
    S
    S
    ~~~

    The variable **direction** is static, so the class has one shared copy rather than one copy per object. Assigning **'S'** through b1 changes that class variable, and a1 observes the same value. Prefer class-qualified access such as **A.direction = 'S'** because it makes the shared nature explicit.

    !!! tip "30-second revision"
        Static field = one shared class copy. Changing it through any object changes what every object sees; both print S.

    **Sources:** [Oracle: Classes and Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/)

??? question "Question 16 — Term 181 — Q4(b)"
    **Exact question**

    In your class called `BankAccount`, you have the following variables—currentBalance, name, numberOfChildren. You also have a constant to keep fixed interest rate. Show the class declaration along with these variables and the constant.

    **Answer**

    ~~~java
    class BankAccount {
        private double currentBalance;
        private String name;
        private int numberOfChildren;

        public static final double INTEREST_RATE = 0.08;
    }
    ~~~

    The ordinary fields are private instance variables, so every BankAccount object has its own values. The interest rate is **static final** because it is one class-wide constant. Java constants conventionally use uppercase words separated by underscores.

    !!! tip "30-second revision"
        Instance fields: currentBalance, name, numberOfChildren. Fixed shared rate: public static final double INTEREST_RATE.

    **Sources:** [Oracle: Classes and Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/) · [Oracle: Controlling Access to Members](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)

??? question "Question 17 — Term 201 — Q1(b)"
    **Exact question**

    Define accessors (getters), mutators (setters) and constructors in your own word.

    **Answer**

    - An **accessor/getter** reads and returns an object's field without directly exposing the field.
    - A **mutator/setter** validates or changes a field.
    - A **constructor** establishes the initial state when an object is created.

    ~~~java
    class Person {
        private int age;
        Person(int age) { setAge(age); }
        int getAge() { return age; }
        void setAge(int age) {
            if (age >= 0) this.age = age;
        }
    }
    ~~~

    A constructor has the class name, no return type, runs during object creation, is not inherited and cannot be overridden. Ordinary methods have independent names/return types and are called whenever needed.

    !!! tip "30-second revision"
        Getter reads, setter changes/validates, constructor initializes. Constructor has class name + no return type and runs with new.

    **Sources:** [Oracle: Providing Constructors](https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html) · [Oracle: Controlling Access to Members](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)

??? question "Question 18 — Term 201 — Q1(c)"
    **Exact question**

    Answer the following questions using the class diagram for an Animal class shown below:

       ```mermaid
       classDiagram
       class Animal {
         -String family
         -String food
         +Animal(String family, String food)
         +get_family()
         +set_family(String family)
         +get_food()
         +set_food(String food)
       }
       ```

       1. How many member variables are there in the animal class? Mention their names and types.
       2. Identify the mutators and accessors.
       3. Write Java codes to implement the constructor.

    **Answer**

    1. The class has **two member variables**: **family** of type String and **food** of type String. The minus sign in the diagram means private.
    2. Mutators: **set_family(String family)** and **set_food(String food)**. Accessors: **get_family()** and **get_food()**.
    3. Constructor implementation:

    ~~~java
    class Animal {
        private String family;
        private String food;

        public Animal(String family, String food) {
            this.family = family;
            this.food = food;
        }
    }
    ~~~

    The this qualifier selects the object's field when a parameter has the same name.

    !!! tip "30-second revision"
        Two private String fields: family, food. get_ methods are accessors; set_ methods mutators. Constructor assigns this.family and this.food.

    **Sources:** [Oracle: Classes and Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/) · [Oracle: Providing Constructors](https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html)

??? question "Question 19 — Term 201 — Q1(d)"
    **Exact question**

    Explain why the constructor is considered as a special type of method in OOP.

    **Answer**

    A constructor is special because it is tied to object creation and initialization. It has the same name as the class, declares no return type and is invoked automatically by **new**. It may be overloaded but is not inherited or overridden. Its first action participates in constructor chaining: explicitly through **this(...)** or **super(...)**, or through an automatically inserted superclass call. These rules distinguish it from an ordinary method.

    !!! tip "30-second revision"
        Constructor = special initializer: class name, no return type, called by new, overloadable, not inherited/overridden, chains to another constructor.

    **Sources:** [Oracle: Providing Constructors](https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html)

??? question "Question 20 — Term 201 — Q3(d)"
    **Exact question**

    Create a class named `Employee` that includes three instance variables—a first name (type String), a last name (type String), and a monthly salary (double). Provide a constructor that initializes the three instance variables. Provide a set and get method for each instance variable. If the monthly salary is not positive, do not set its value. Write a test app named `EmployeeTest` that demonstrates class Employee’s capabilities. Create two Employee objects and display each object’s yearly salary. Then give each Employee a 10% raise and display each Employee’s yearly salary again.

    **Answer**

    ~~~java
    class Employee {
        private String firstName;
        private String lastName;
        private double monthlySalary;

        public Employee(String firstName, String lastName, double monthlySalary) {
            this.firstName = firstName;
            this.lastName = lastName;
            setMonthlySalary(monthlySalary);
        }

        public String getFirstName() { return firstName; }
        public void setFirstName(String firstName) { this.firstName = firstName; }
        public String getLastName() { return lastName; }
        public void setLastName(String lastName) { this.lastName = lastName; }
        public double getMonthlySalary() { return monthlySalary; }
        public void setMonthlySalary(double salary) {
            if (salary > 0) monthlySalary = salary;
        }
    }

    public class EmployeeTest {
        private static void showYearly(Employee e) {
            System.out.printf("%s %s: %.2f%n", e.getFirstName(),
                    e.getLastName(), e.getMonthlySalary() * 12);
        }

        public static void main(String[] args) {
            Employee e1 = new Employee("Asha", "Rahman", 30000);
            Employee e2 = new Employee("Karim", "Hasan", 40000);
            showYearly(e1); showYearly(e2);

            e1.setMonthlySalary(e1.getMonthlySalary() * 1.10);
            e2.setMonthlySalary(e2.getMonthlySalary() * 1.10);
            showYearly(e1); showYearly(e2);
        }
    }
    ~~~

    Using the validated setter inside the constructor prevents a non-positive salary from being stored.

    !!! tip "30-second revision"
        Employee has 3 private fields + constructor + getters/setters. Yearly = monthly×12; raise = monthly×1.10; reject salary ≤0.

    **Sources:** [Oracle: Classes and Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/) · [Oracle: Providing Constructors](https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html)

??? question "Question 21 — Term 211 — Q1(c)"
    **Exact question**

    What is the purpose of Static Methods and Variables?

    **Answer**

    Static members belong to the **class**, not to an individual object.

    - A **static variable** stores one shared value for all instances, such as an object counter or constant.
    - A **static method** performs class-level work and can be called with the class name without creating an object. It directly accesses only static members because no current object (**this**) exists.

    ~~~java
    class Student {
        static int count;
        Student() { count++; }
        static int getCount() { return count; }
    }
    ~~~

    Static members save duplicated state and provide utilities or class-wide operations. They should not be used merely as global mutable data.

    !!! tip "30-second revision"
        static = class-level/shared. One field copy; method callable as Class.method() and has no this reference.

    **Sources:** [Oracle: Classes and Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/)

??? question "Question 22 — Term 211 — Q2(b)"
    **Exact question**

    Constructors is a special methods used for object creation. What are the characteristics that make them different than other regular methods?

    **Answer**

    A constructor initializes a newly created object. Its special characteristics are:

    - it has exactly the same name as the class;
    - it has no return type, not even void;
    - it is invoked automatically when **new** creates an object;
    - it initializes instance state;
    - constructors may be overloaded;
    - they are not inherited and cannot be overridden;
    - the first statement may call another constructor using **this(...)** or a superclass constructor using **super(...)**;
    - if none is declared, the compiler may supply a default no-argument constructor;
    - constructors may have access modifiers but cannot be abstract, static or final.

    ~~~java
    class Book {
        String title;
        Book(String title) { this.title = title; }
    }
    ~~~

    !!! tip "30-second revision"
        Constructor: class name, no return type, automatic with new, initializes object, overloadable but not inherited/overridden. First call may be this() or super().

    **Sources:** [Oracle: Providing Constructors](https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html)

??? question "Question 23 — Term 211 — Q5(a)"
    **Exact question**

    How can Constructor chaining be done by using the `super` keyword?

    **Answer**

    Constructor chaining from a subclass to its superclass uses **super(...)**. It must be the first statement in the subclass constructor.

    ~~~java
    class Person {
        String name;
        Person(String name) { this.name = name; }
    }

    class Student extends Person {
        int id;
        Student(String name, int id) {
            super(name);   // first: invokes Person(String)
            this.id = id;
        }
    }
    ~~~

    If no super call is written, the compiler inserts **super()**. Compilation fails if the superclass has no accessible no-argument constructor. A constructor cannot use both this(...) and super(...) directly because either call must occupy the first statement.

    !!! tip "30-second revision"
        super(args) invokes the matching parent constructor and must come first. If omitted, compiler inserts super().

    **Sources:** [Oracle: Providing Constructors](https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html) · [Oracle: Interfaces and Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/)

# Chapter 3: Inheritance, Polymorphism, Overloading, Overriding and Casting

??? question "Question 1 — Term 151 — Q2(c)"
    **Exact question**

    Explain function overriding and overloading in Java with examples.

    **Answer**

    | Method overloading | Method overriding |
    |---|---|
    | Same method name, different parameter list | Subclass provides new implementation of inherited instance method |
    | Usually in one class, though inherited overloads also count | Requires superclass–subclass relationship |
    | Compile-time selection | Runtime polymorphic selection |
    | Return type alone cannot distinguish overloads | Return type must be compatible/covariant |

    ~~~java
    class Printer {
        void print(int n) { }
        void print(String s) { }       // overloaded
    }
    class Animal { void sound() { System.out.println("Animal"); } }
    class Dog extends Animal {
        @Override void sound() { System.out.println("Dog"); } // overridden
    }
    ~~~

    Static methods are hidden, not overridden; final and private methods cannot be overridden.

    !!! tip "30-second revision"
        Overload: same name, different parameters, compile time. Override: same signature in subclass, runtime polymorphism.

    **Sources:** [Oracle: Interfaces and Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/)

??? question "Question 2 — Term 151 — Q3(c)"
    **Exact question**

    Does Java support multiple inheritances where each class is able to extend multiple classes?

    **Answer**

    Java does **not** allow one class to extend multiple classes. Therefore this is illegal:

    ~~~java
    class C extends A, B { } // invalid
    ~~~

    Multiple inheritance of class state/implementation can create ambiguity, especially when two parents define the same member—the classic diamond problem. Java instead permits one superclass plus multiple interfaces:

    ~~~java
    class C extends A implements Printable, Serializable { }
    ~~~

    Thus Java supports multiple inheritance of **type** through interfaces. Interfaces may also have default methods; Java defines conflict-resolution rules and may require the implementing class to override an ambiguous default.

    !!! tip "30-second revision"
        A class extends only one class, but may implement many interfaces. This avoids ambiguous inherited state/implementations.

    **Sources:** [Oracle: Multiple Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/multipleinheritance.html)

??? question "Question 3 — Term 161 — Q2(b)"
    **Exact question**

    Distinguish between method overloading and method overriding.

    **Answer**

    | Method overloading | Method overriding |
    |---|---|
    | Same method name, different parameter list | Subclass provides new implementation of inherited instance method |
    | Usually in one class, though inherited overloads also count | Requires superclass–subclass relationship |
    | Compile-time selection | Runtime polymorphic selection |
    | Return type alone cannot distinguish overloads | Return type must be compatible/covariant |

    ~~~java
    class Printer {
        void print(int n) { }
        void print(String s) { }       // overloaded
    }
    class Animal { void sound() { System.out.println("Animal"); } }
    class Dog extends Animal {
        @Override void sound() { System.out.println("Dog"); } // overridden
    }
    ~~~

    Static methods are hidden, not overridden; final and private methods cannot be overridden.

    !!! tip "30-second revision"
        Overload: same name, different parameters, compile time. Override: same signature in subclass, runtime polymorphism.

    **Sources:** [Oracle: Interfaces and Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/)

??? question "Question 4 — Term 161 — Q4(c)"
    **Exact question**

    Write a Java program for the following hierarchical inheritance block diagram:

       ```mermaid
       classDiagram
       direction TB
       Human <|-- Student
       Human <|-- Teacher
       class Human {
         Name
         Age
         Nationality
         Think()
         Walk()
       }
       class Student {
         Institution
         Session
         Dept_and_SID
         Study()
       }
       class Teacher {
         Institution
         Designation
         Dept_and_TID
         Research()
       }
       ```

    **Answer**

    ~~~java
    class Human {
        protected String name, nationality;
        protected int age;
        Human(String name, int age, String nationality) {
            this.name = name; this.age = age; this.nationality = nationality;
        }
        void think() { System.out.println(name + " thinks"); }
        void walk()  { System.out.println(name + " walks"); }
    }

    class Student extends Human {
        String institution, session, deptAndSID;
        Student(String n, int a, String nat, String inst, String ses, String ds) {
            super(n, a, nat);
            institution = inst; session = ses; deptAndSID = ds;
        }
        void study() { System.out.println(name + " studies"); }
    }

    class Teacher extends Human {
        String institution, designation, deptAndTID;
        Teacher(String n, int a, String nat, String inst, String des, String dt) {
            super(n, a, nat);
            institution = inst; designation = des; deptAndTID = dt;
        }
        void research() { System.out.println(name + " researches"); }
    }

    public class HierarchyTest {
        public static void main(String[] args) {
            Student s = new Student("Rafi", 21, "Bangladeshi", "BOU", "2026", "CSE-01");
            Teacher t = new Teacher("Mina", 35, "Bangladeshi", "BOU", "Lecturer", "CSE-T01");
            s.walk(); s.study(); t.think(); t.research();
        }
    }
    ~~~

    Student and Teacher separately inherit the common Human state and behaviour; this is hierarchical inheritance.

    !!! tip "30-second revision"
        Human is superclass; Student and Teacher are sibling subclasses. Put common fields/methods in Human and call super(...) from each child.

    **Sources:** [Oracle: Interfaces and Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/)

??? question "Question 5 — Term 171 — Q1(b)"
    **Exact question**

    Inheritance, Encapsulation and Polymorphism are three key attributes of Object Oriented Programming (OOP). Discuss these attributes in your own words. Include benefits of these attributes in your answer.

    **Answer**

    **Inheritance** creates a new class from an existing class. It reuses common behaviour and represents an **is-a** relationship; for example, Dog extends Animal.

    **Encapsulation** bundles data with methods and restricts direct access, commonly through private fields and validated public methods. It protects invariants and reduces coupling.

    **Polymorphism** allows one supertype reference to represent objects of different subtypes, with overridden method selection at runtime.

    ~~~java
    class Animal { void sound() { } }
    class Dog extends Animal { @Override void sound() { System.out.println("Bark"); } }

    Animal a = new Dog();
    a.sound(); // Dog.sound()
    ~~~

    Together they improve modularity, reuse, maintainability, extensibility and testability.

    !!! tip "30-second revision"
        Inheritance = reuse/is-a; encapsulation = hide/protect state; polymorphism = one type, many implementations selected at runtime.

    **Sources:** [Oracle: Object-Oriented Programming Concepts](https://docs.oracle.com/javase/tutorial/java/concepts/) · [Oracle: Interfaces and Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/) · [Oracle: Controlling Access to Members](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)

??? question "Question 6 — Term 171 — Q1(c)"
    **Exact question**

    What is Typecasting? What will be the output of the given `Simple` class code segment? *(The complete code is listed in Chapter 1.)*

    **Answer**

    Typecasting converts a value or reference from one type to another compatible type.

    - **Widening conversion** is normally automatic, such as int to double.
    - **Narrowing conversion** requires an explicit cast and may lose data, such as float to int.

    In the given code, **(int) f** removes the fractional part; it does not round.

    ~~~text
    10.5
    10
    ~~~

    The first println prints the float value 10.5. The second prints integer 10 after narrowing conversion.

    !!! tip "30-second revision"
        Widening is automatic; narrowing needs a cast and may lose data. (int)10.5f becomes 10, not 11.

    **Sources:** [Oracle: Learning the Java Language](https://docs.oracle.com/javase/tutorial/java/TOC.html)

??? question "Question 7 — Term 171 — Q2(c)"
    **Exact question**

    Explain function overriding and overloading in Java with example.

    **Answer**

    | Method overloading | Method overriding |
    |---|---|
    | Same method name, different parameter list | Subclass provides new implementation of inherited instance method |
    | Usually in one class, though inherited overloads also count | Requires superclass–subclass relationship |
    | Compile-time selection | Runtime polymorphic selection |
    | Return type alone cannot distinguish overloads | Return type must be compatible/covariant |

    ~~~java
    class Printer {
        void print(int n) { }
        void print(String s) { }       // overloaded
    }
    class Animal { void sound() { System.out.println("Animal"); } }
    class Dog extends Animal {
        @Override void sound() { System.out.println("Dog"); } // overridden
    }
    ~~~

    Static methods are hidden, not overridden; final and private methods cannot be overridden.

    !!! tip "30-second revision"
        Overload: same name, different parameters, compile time. Override: same signature in subclass, runtime polymorphism.

    **Sources:** [Oracle: Interfaces and Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/)

??? question "Question 8 — Term 171 — Q3(c)"
    **Exact question**

    What is aggregation in Java? Why and when should we use aggregation?

    **Answer**

    Aggregation is a weak **has-a** relationship in which one object contains or uses another object that can exist independently.

    ~~~java
    class Address { String city; Address(String city) { this.city = city; } }
    class Employee {
        String name;
        Address address; // Employee has an Address
        Employee(String name, Address address) {
            this.name = name; this.address = address;
        }
    }
    ~~~

    If the Employee is destroyed, the Address object may still be used elsewhere. Use aggregation when classes are not in an is-a relationship, when an existing object is supplied from outside, and when flexible composition is preferable to inheritance. Composition is stronger ownership: the part's lifecycle is normally controlled by the whole.

    !!! tip "30-second revision"
        Aggregation = weak has-a; part can live independently. Prefer it for reuse when no true is-a relation exists.

    **Sources:** [Oracle: Object-Oriented Programming Concepts](https://docs.oracle.com/javase/tutorial/java/concepts/)

??? question "Question 9 — Term 181 — Q1(c)"
    **Exact question**

    Explain inheritance, encapsulation and polymorphism with examples.

    **Answer**

    **Inheritance** creates a new class from an existing class. It reuses common behaviour and represents an **is-a** relationship; for example, Dog extends Animal.

    **Encapsulation** bundles data with methods and restricts direct access, commonly through private fields and validated public methods. It protects invariants and reduces coupling.

    **Polymorphism** allows one supertype reference to represent objects of different subtypes, with overridden method selection at runtime.

    ~~~java
    class Animal { void sound() { } }
    class Dog extends Animal { @Override void sound() { System.out.println("Bark"); } }

    Animal a = new Dog();
    a.sound(); // Dog.sound()
    ~~~

    Together they improve modularity, reuse, maintainability, extensibility and testability.

    !!! tip "30-second revision"
        Inheritance = reuse/is-a; encapsulation = hide/protect state; polymorphism = one type, many implementations selected at runtime.

    **Sources:** [Oracle: Object-Oriented Programming Concepts](https://docs.oracle.com/javase/tutorial/java/concepts/) · [Oracle: Interfaces and Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/) · [Oracle: Controlling Access to Members](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)

??? question "Question 10 — Term 181 — Q2(c)"
    **Exact question**

    What are method overloading and method overriding? Explain with example.

    **Answer**

    | Method overloading | Method overriding |
    |---|---|
    | Same method name, different parameter list | Subclass provides new implementation of inherited instance method |
    | Usually in one class, though inherited overloads also count | Requires superclass–subclass relationship |
    | Compile-time selection | Runtime polymorphic selection |
    | Return type alone cannot distinguish overloads | Return type must be compatible/covariant |

    ~~~java
    class Printer {
        void print(int n) { }
        void print(String s) { }       // overloaded
    }
    class Animal { void sound() { System.out.println("Animal"); } }
    class Dog extends Animal {
        @Override void sound() { System.out.println("Dog"); } // overridden
    }
    ~~~

    Static methods are hidden, not overridden; final and private methods cannot be overridden.

    !!! tip "30-second revision"
        Overload: same name, different parameters, compile time. Override: same signature in subclass, runtime polymorphism.

    **Sources:** [Oracle: Interfaces and Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/)

??? question "Question 11 — Term 201 — Q3(a)"
    **Exact question**

    What is inheritance in OOP? Does Java support multiple inheritances?

    **Answer**

    Java does **not** allow one class to extend multiple classes. Therefore this is illegal:

    ~~~java
    class C extends A, B { } // invalid
    ~~~

    Multiple inheritance of class state/implementation can create ambiguity, especially when two parents define the same member—the classic diamond problem. Java instead permits one superclass plus multiple interfaces:

    ~~~java
    class C extends A implements Printable, Serializable { }
    ~~~

    Thus Java supports multiple inheritance of **type** through interfaces. Interfaces may also have default methods; Java defines conflict-resolution rules and may require the implementing class to override an ambiguous default.

    !!! tip "30-second revision"
        A class extends only one class, but may implement many interfaces. This avoids ambiguous inherited state/implementations.

    **Sources:** [Oracle: Multiple Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/multipleinheritance.html)

??? question "Question 12 — Term 201 — Q3(b)"
    **Exact question**

    What are the main features of OOPs? Write a Java program for the following hierarchical inheritance block diagram:

       ```mermaid
       classDiagram
       direction TB
       Document <|-- Book
       Document <|-- EMail
       class Document {
         -String[] authors
         -Date date
         +String[] getAuthors()
         +void addAuthor(name)
         +Date getDate()
       }
       class Book {
         -String title
         +String getTitle()
       }
       class EMail {
         -String subject
         -String[] to
         +String getSubject()
         +String[] getTo()
       }
       ```

    **Answer**

    ~~~java
    import java.time.LocalDate;
    import java.util.ArrayList;
    import java.util.List;

    class Document {
        private final List<String> authors = new ArrayList<>();
        private final LocalDate date;
        Document(LocalDate date) { this.date = date; }
        String[] getAuthors() { return authors.toArray(new String[0]); }
        void addAuthor(String name) { authors.add(name); }
        LocalDate getDate() { return date; }
    }

    class Book extends Document {
        private final String title;
        Book(String title, LocalDate date) { super(date); this.title = title; }
        String getTitle() { return title; }
    }

    class EMail extends Document {
        private final String subject;
        private final String[] to;
        EMail(String subject, String[] to, LocalDate date) {
            super(date); this.subject = subject; this.to = to.clone();
        }
        String getSubject() { return subject; }
        String[] getTo() { return to.clone(); }
    }
    ~~~

    The principal OOP features are abstraction, encapsulation, inheritance and polymorphism. Here Book and EMail are specialized Documents, while private fields and accessors provide encapsulation.

    !!! tip "30-second revision"
        OOP pillars: abstraction, encapsulation, inheritance, polymorphism. Document parent; Book and EMail children; super(date) initializes common state.

    **Sources:** [Oracle: Object-Oriented Programming Concepts](https://docs.oracle.com/javase/tutorial/java/concepts/) · [Oracle: Interfaces and Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/)

??? question "Question 13 — Term 201 — Q4(b)"
    **Exact question**

    Why do you use Upcasting and Downcasting in Java? Explain with examples.

    **Answer**

    **Upcasting** converts a subclass reference to a superclass/interface reference. It is safe and normally implicit. It enables polymorphism.

    ~~~java
    Animal a = new Dog(); // upcasting
    a.sound();            // dynamic dispatch calls Dog.sound()
    ~~~

    **Downcasting** converts a supertype reference back to a subtype. It is explicit and safe only when the object really has that subtype.

    ~~~java
    if (a instanceof Dog) {
        Dog d = (Dog) a;
        d.fetch();
    }
    ~~~

    An invalid downcast compiles in some cases but throws ClassCastException at runtime. Upcasting exposes only members declared by the reference type, though overridden instance methods still dispatch to the actual object.

    !!! tip "30-second revision"
        Upcast child→parent: implicit, safe, polymorphic. Downcast parent reference→child: explicit; guard with instanceof or risk ClassCastException.

    **Sources:** [Oracle: Interfaces and Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/)

??? question "Question 14 — Term 211 — Q1(b)"
    **Exact question**

    Inheritance, encapsulation and polymorphism are three attributes of Object Oriented Programming (OOP). Discuss these attributes in your own words.

    **Answer**

    **Inheritance** creates a new class from an existing class. It reuses common behaviour and represents an **is-a** relationship; for example, Dog extends Animal.

    **Encapsulation** bundles data with methods and restricts direct access, commonly through private fields and validated public methods. It protects invariants and reduces coupling.

    **Polymorphism** allows one supertype reference to represent objects of different subtypes, with overridden method selection at runtime.

    ~~~java
    class Animal { void sound() { } }
    class Dog extends Animal { @Override void sound() { System.out.println("Bark"); } }

    Animal a = new Dog();
    a.sound(); // Dog.sound()
    ~~~

    Together they improve modularity, reuse, maintainability, extensibility and testability.

    !!! tip "30-second revision"
        Inheritance = reuse/is-a; encapsulation = hide/protect state; polymorphism = one type, many implementations selected at runtime.

    **Sources:** [Oracle: Object-Oriented Programming Concepts](https://docs.oracle.com/javase/tutorial/java/concepts/) · [Oracle: Interfaces and Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/) · [Oracle: Controlling Access to Members](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)

??? question "Question 15 — Term 211 — Q2(c)"
    **Exact question**

    Explain methods overriding and overloading in Java with example.

    **Answer**

    | Method overloading | Method overriding |
    |---|---|
    | Same method name, different parameter list | Subclass provides new implementation of inherited instance method |
    | Usually in one class, though inherited overloads also count | Requires superclass–subclass relationship |
    | Compile-time selection | Runtime polymorphic selection |
    | Return type alone cannot distinguish overloads | Return type must be compatible/covariant |

    ~~~java
    class Printer {
        void print(int n) { }
        void print(String s) { }       // overloaded
    }
    class Animal { void sound() { System.out.println("Animal"); } }
    class Dog extends Animal {
        @Override void sound() { System.out.println("Dog"); } // overridden
    }
    ~~~

    Static methods are hidden, not overridden; final and private methods cannot be overridden.

    !!! tip "30-second revision"
        Overload: same name, different parameters, compile time. Override: same signature in subclass, runtime polymorphism.

    **Sources:** [Oracle: Interfaces and Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/)

??? question "Question 16 — Term 211 — Q4(c)"
    **Exact question**

    Why do use upcasting and downcasting in Java? Explain with examples.

    **Answer**

    **Upcasting** converts a subclass reference to a superclass/interface reference. It is safe and normally implicit. It enables polymorphism.

    ~~~java
    Animal a = new Dog(); // upcasting
    a.sound();            // dynamic dispatch calls Dog.sound()
    ~~~

    **Downcasting** converts a supertype reference back to a subtype. It is explicit and safe only when the object really has that subtype.

    ~~~java
    if (a instanceof Dog) {
        Dog d = (Dog) a;
        d.fetch();
    }
    ~~~

    An invalid downcast compiles in some cases but throws ClassCastException at runtime. Upcasting exposes only members declared by the reference type, though overridden instance methods still dispatch to the actual object.

    !!! tip "30-second revision"
        Upcast child→parent: implicit, safe, polymorphic. Downcast parent reference→child: explicit; guard with instanceof or risk ClassCastException.

    **Sources:** [Oracle: Interfaces and Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/)

# Chapter 4: Interfaces and Abstract Classes

??? question "Question 1 — Term 151 — Q3(d)"
    **Exact question**

    Distinguish between an interface and an abstract class with necessary example.

    **Answer**

    | Abstract class | Interface |
    |---|---|
    | Declared with **abstract class** | Declared with **interface** |
    | Can have instance fields, constructors, concrete and abstract methods | Defines a contract; fields are public static final; methods may be abstract, default, static or private |
    | A class can extend only one class | A class can implement multiple interfaces |
    | Members may use different access levels | Interface methods exposed as a contract are public |
    | Best for closely related classes sharing state/code | Best for a capability implementable by unrelated classes |

    ~~~java
    abstract class Shape {
        abstract double area();
        void describe() { System.out.println("shape"); }
    }
    interface Printable { void print(); }
    class Circle extends Shape implements Printable {
        double r;
        Circle(double r) { this.r = r; }
        double area() { return Math.PI * r * r; }
        public void print() { System.out.println(area()); }
    }
    ~~~

    Neither an abstract class nor an interface is instantiated directly. Both provide abstraction and polymorphism.

    !!! tip "30-second revision"
        Abstract class shares state/code through single inheritance. Interface defines a capability and supports multiple inheritance of type.

    **Sources:** [Oracle: Abstract Methods and Classes](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html) · [Oracle: Multiple Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/multipleinheritance.html)

??? question "Question 2 — Term 151 — Q5(b)"
    **Exact question**

    Declare an abstract class called `Shape`, which has three subclasses—`Triangle`, `Rectangle` and `Circle`. Define one method `area()` in the abstract class and override this `area()` in these three subclasses to calculate for specific objects; for example, `area()` of Triangle subclass should calculate area of triangle, and similarly for Rectangle and Circle.

    **Answer**

    ~~~java
    abstract class Shape {
        public abstract double area();
    }

    class Triangle extends Shape {
        private final double base, height;
        Triangle(double base, double height) { this.base = base; this.height = height; }
        public double area() { return 0.5 * base * height; }
    }

    class Rectangle extends Shape {
        private final double width, height;
        Rectangle(double width, double height) { this.width = width; this.height = height; }
        public double area() { return width * height; }
    }

    class Circle extends Shape {
        private final double radius;
        Circle(double radius) { this.radius = radius; }
        public double area() { return Math.PI * radius * radius; }
    }

    public class ShapeTest {
        public static void main(String[] args) {
            Shape[] shapes = {
                new Triangle(4, 3), new Rectangle(5, 2), new Circle(2)
            };
            for (Shape s : shapes) System.out.printf("%.2f%n", s.area());
        }
    }
    ~~~

    The abstract method establishes a common contract. Runtime polymorphism selects the correct subclass area implementation.

    !!! tip "30-second revision"
        Shape declares abstract area(); Triangle = ½bh, Rectangle = wh, Circle = πr². Override in every concrete child.

    **Sources:** [Oracle: Abstract Methods and Classes](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html) · [Oracle: Interfaces and Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/)

??? question "Question 3 — Term 161 — Q3(c)"
    **Exact question**

    What are abstract methods? Describe the circumstances in which an abstract method would be appropriate.

    **Answer**

    An abstract method is declared without an implementation and ends with a semicolon, for example **abstract double area();**. A class containing such a method must be abstract. A concrete subclass must implement every inherited abstract method unless the subclass is itself abstract.

    An abstract method is appropriate when:

    - all subclasses must provide an operation but the superclass cannot define one meaningful universal algorithm;
    - a common polymorphic contract is required;
    - partial implementation and shared state should remain in an abstract base class.

    Example: every Shape has an area, but the formula depends on the specific shape. Abstract methods cannot be private, static or final because they must be overridden.

    !!! tip "30-second revision"
        Abstract method = declaration without body; concrete subclass must override. Use when operation is common but implementation differs by subtype.

    **Sources:** [Oracle: Abstract Methods and Classes](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html)

??? question "Question 4 — Term 171 — Q3(a)"
    **Exact question**

    Abstract classes and interfaces are two very important items we use in developing programs in OOP. What are they and what benefits do they provide us?

    **Answer**

    | Abstract class | Interface |
    |---|---|
    | Declared with **abstract class** | Declared with **interface** |
    | Can have instance fields, constructors, concrete and abstract methods | Defines a contract; fields are public static final; methods may be abstract, default, static or private |
    | A class can extend only one class | A class can implement multiple interfaces |
    | Members may use different access levels | Interface methods exposed as a contract are public |
    | Best for closely related classes sharing state/code | Best for a capability implementable by unrelated classes |

    ~~~java
    abstract class Shape {
        abstract double area();
        void describe() { System.out.println("shape"); }
    }
    interface Printable { void print(); }
    class Circle extends Shape implements Printable {
        double r;
        Circle(double r) { this.r = r; }
        double area() { return Math.PI * r * r; }
        public void print() { System.out.println(area()); }
    }
    ~~~

    Neither an abstract class nor an interface is instantiated directly. Both provide abstraction and polymorphism.

    !!! tip "30-second revision"
        Abstract class shares state/code through single inheritance. Interface defines a capability and supports multiple inheritance of type.

    **Sources:** [Oracle: Abstract Methods and Classes](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html) · [Oracle: Multiple Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/multipleinheritance.html)

??? question "Question 5 — Term 181 — Q3(a)"
    **Exact question**

    Explain what is meant by an `abstract` class and what circumstance necessitates a class being abstract.

    **Answer**

    An abstract method is declared without an implementation and ends with a semicolon, for example **abstract double area();**. A class containing such a method must be abstract. A concrete subclass must implement every inherited abstract method unless the subclass is itself abstract.

    An abstract method is appropriate when:

    - all subclasses must provide an operation but the superclass cannot define one meaningful universal algorithm;
    - a common polymorphic contract is required;
    - partial implementation and shared state should remain in an abstract base class.

    Example: every Shape has an area, but the formula depends on the specific shape. Abstract methods cannot be private, static or final because they must be overridden.

    !!! tip "30-second revision"
        Abstract method = declaration without body; concrete subclass must override. Use when operation is common but implementation differs by subtype.

    **Sources:** [Oracle: Abstract Methods and Classes](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html)

??? question "Question 6 — Term 181 — Q3(b)"
    **Exact question**

    Write the codes for implementations of the Employee and Person classes.

    **Answer**

    The supplied question does not include the referenced Person/Employee diagram or field list. A standard, defensible implementation is to make Person the abstract/general class and Employee its concrete specialization:

    ~~~java
    abstract class Person {
        private String name;
        private int age;

        protected Person(String name, int age) {
            this.name = name; this.age = age;
        }
        public String getName() { return name; }
        public int getAge() { return age; }
        public abstract String getRole();
    }

    class Employee extends Person {
        private final int employeeId;

        Employee(String name, int age, int employeeId) {
            super(name, age); this.employeeId = employeeId;
        }
        public int getEmployeeId() { return employeeId; }
        @Override public String getRole() { return "Employee"; }
    }
    ~~~

    In an exam, replace these assumed fields and methods with the exact members shown in the missing diagram, while retaining **extends**, **super(...)** and the required overrides.

    !!! tip "30-second revision"
        Missing source diagram: show Person as parent, Employee extends Person, call super(...) and implement inherited abstract method(s).

    **Sources:** [Oracle: Abstract Methods and Classes](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html) · [Oracle: Interfaces and Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/)

??? question "Question 7 — Term 181 — Q5(a)"
    **Exact question**

    What are Abstract classes and Interfaces? What benefits do they provide? Show how to declare abstract classes and interfaces in Java.

    **Answer**

    | Abstract class | Interface |
    |---|---|
    | Declared with **abstract class** | Declared with **interface** |
    | Can have instance fields, constructors, concrete and abstract methods | Defines a contract; fields are public static final; methods may be abstract, default, static or private |
    | A class can extend only one class | A class can implement multiple interfaces |
    | Members may use different access levels | Interface methods exposed as a contract are public |
    | Best for closely related classes sharing state/code | Best for a capability implementable by unrelated classes |

    ~~~java
    abstract class Shape {
        abstract double area();
        void describe() { System.out.println("shape"); }
    }
    interface Printable { void print(); }
    class Circle extends Shape implements Printable {
        double r;
        Circle(double r) { this.r = r; }
        double area() { return Math.PI * r * r; }
        public void print() { System.out.println(area()); }
    }
    ~~~

    Neither an abstract class nor an interface is instantiated directly. Both provide abstraction and polymorphism.

    !!! tip "30-second revision"
        Abstract class shares state/code through single inheritance. Interface defines a capability and supports multiple inheritance of type.

    **Sources:** [Oracle: Abstract Methods and Classes](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html) · [Oracle: Multiple Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/multipleinheritance.html)

??? question "Question 8 — Term 201 — Q2(a)"
    **Exact question**

    Abstract classes and interfaces are two very important items we use in developing programs in OOP. What are they and what benefits do they provide?

    **Answer**

    | Abstract class | Interface |
    |---|---|
    | Declared with **abstract class** | Declared with **interface** |
    | Can have instance fields, constructors, concrete and abstract methods | Defines a contract; fields are public static final; methods may be abstract, default, static or private |
    | A class can extend only one class | A class can implement multiple interfaces |
    | Members may use different access levels | Interface methods exposed as a contract are public |
    | Best for closely related classes sharing state/code | Best for a capability implementable by unrelated classes |

    ~~~java
    abstract class Shape {
        abstract double area();
        void describe() { System.out.println("shape"); }
    }
    interface Printable { void print(); }
    class Circle extends Shape implements Printable {
        double r;
        Circle(double r) { this.r = r; }
        double area() { return Math.PI * r * r; }
        public void print() { System.out.println(area()); }
    }
    ~~~

    Neither an abstract class nor an interface is instantiated directly. Both provide abstraction and polymorphism.

    !!! tip "30-second revision"
        Abstract class shares state/code through single inheritance. Interface defines a capability and supports multiple inheritance of type.

    **Sources:** [Oracle: Abstract Methods and Classes](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html) · [Oracle: Multiple Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/multipleinheritance.html)

??? question "Question 9 — Term 201 — Q2(b)"
    **Exact question**

    Can we achieve multiple inheritance by using interface? Explain with example. What is the difference between multiple and multilevel inheritance?

    **Answer**

    Yes. Java achieves multiple inheritance of **type** by allowing one class to implement multiple interfaces.

    ~~~java
    interface Camera { void takePhoto(); }
    interface Player { void play(); }
    class Phone implements Camera, Player {
        public void takePhoto() { System.out.println("Photo"); }
        public void play() { System.out.println("Music"); }
    }
    ~~~

    **Multiple inheritance** means one child has more than one direct parent/type, as Phone implements Camera and Player. **Multilevel inheritance** is a chain, for example Animal → Mammal → Dog.

    Java disallows extending multiple classes to avoid ambiguous inherited state and implementations. If two interfaces provide conflicting default methods, the implementing class must normally override and resolve the conflict.

    !!! tip "30-second revision"
        Multiple: one child, several interfaces. Multilevel: inheritance chain A→B→C. Java supports the former through interfaces, not multiple parent classes.

    **Sources:** [Oracle: Multiple Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/multipleinheritance.html) · [Oracle: Abstract Methods and Classes](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html)

??? question "Question 10 — Term 211 — Q4(b)"
    **Exact question**

    Why is Multiple Inheritance not supported in Java? How Interface is helpful to resolve this matter?

    **Answer**

    Yes. Java achieves multiple inheritance of **type** by allowing one class to implement multiple interfaces.

    ~~~java
    interface Camera { void takePhoto(); }
    interface Player { void play(); }
    class Phone implements Camera, Player {
        public void takePhoto() { System.out.println("Photo"); }
        public void play() { System.out.println("Music"); }
    }
    ~~~

    **Multiple inheritance** means one child has more than one direct parent/type, as Phone implements Camera and Player. **Multilevel inheritance** is a chain, for example Animal → Mammal → Dog.

    Java disallows extending multiple classes to avoid ambiguous inherited state and implementations. If two interfaces provide conflicting default methods, the implementing class must normally override and resolve the conflict.

    !!! tip "30-second revision"
        Multiple: one child, several interfaces. Multilevel: inheritance chain A→B→C. Java supports the former through interfaces, not multiple parent classes.

    **Sources:** [Oracle: Multiple Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/multipleinheritance.html) · [Oracle: Abstract Methods and Classes](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html)

# Chapter 5: OOP Design, Encapsulation, Access and Packages

??? question "Question 1 — Term 151 — Q2(d)"
    **Exact question**

    What is encapsulation?

    **Answer**

    Encapsulation is the bundling of data and the methods that operate on it inside a class while restricting uncontrolled access to the data. In Java it is commonly implemented with private fields and public/protected methods.

    ~~~java
    class Account {
        private double balance;
        public double getBalance() { return balance; }
        public void deposit(double amount) {
            if (amount > 0) balance += amount;
        }
    }
    ~~~

    Benefits include data hiding, validation of object invariants, lower coupling, easier maintenance and the freedom to change internal representation without breaking users of the class. Encapsulation does not mean every field must have an unrestricted setter.

    !!! tip "30-second revision"
        Encapsulation = data + behaviour in a class + controlled access. Usually private fields and validated methods.

    **Sources:** [Oracle: Object-Oriented Programming Concepts](https://docs.oracle.com/javase/tutorial/java/concepts/) · [Oracle: Controlling Access to Members](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)

??? question "Question 2 — Term 151 — Q5(c)"
    **Exact question**

    Discuss public, private, protected and default access modifier with example.

    **Answer**

    Java member access levels are:

    | Modifier | Same class | Same package | Subclass in another package | Other package |
    |---|:---:|:---:|:---:|:---:|
    | private | Yes | No | No | No |
    | default/package-private | Yes | Yes | No | No |
    | protected | Yes | Yes | Yes, through inheritance rules | No |
    | public | Yes | Yes | Yes | Yes |

    ~~~java
    public class Account {
        private double balance;
        String branch;             // default/package-private
        protected void audit() { }
        public double getBalance() { return balance; }
    }
    ~~~

    For a protected instance member accessed from a subclass in another package, access is through the subclass context, not an arbitrary superclass object. Top-level classes may be only public or package-private.

    !!! tip "30-second revision"
        private: class only; default: package; protected: package + subclasses; public: everywhere.

    **Sources:** [Oracle: Controlling Access to Members](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)

??? question "Question 3 — Term 161 — Q6(c)"
    **Exact question**

    Discuss public, private, protected and default access modifier with example.

    **Answer**

    Java member access levels are:

    | Modifier | Same class | Same package | Subclass in another package | Other package |
    |---|:---:|:---:|:---:|:---:|
    | private | Yes | No | No | No |
    | default/package-private | Yes | Yes | No | No |
    | protected | Yes | Yes | Yes, through inheritance rules | No |
    | public | Yes | Yes | Yes | Yes |

    ~~~java
    public class Account {
        private double balance;
        String branch;             // default/package-private
        protected void audit() { }
        public double getBalance() { return balance; }
    }
    ~~~

    For a protected instance member accessed from a subclass in another package, access is through the subclass context, not an arbitrary superclass object. Top-level classes may be only public or package-private.

    !!! tip "30-second revision"
        private: class only; default: package; protected: package + subclasses; public: everywhere.

    **Sources:** [Oracle: Controlling Access to Members](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)

??? question "Question 4 — Term 171 — Q5(b)"
    **Exact question**

    What are the advantages of Java package? Explain the following four different types of Java access modifier:

       1. private
       2. default
       3. protected
       4. public

    **Answer**

    Packages organize related classes/interfaces, prevent name clashes, provide package-private visibility and improve reuse and maintenance.

    | Access | Visibility |
    |---|---|
    | **private** | Declaring class only |
    | **default** | All types in the same package |
    | **protected** | Same package plus subclasses outside the package |
    | **public** | Everywhere the declaring type is accessible |

    Example:

    ~~~java
    package university;
    public class Student {
        private int id;
        String department;
        protected void validate() { }
        public int getId() { return id; }
    }
    ~~~

    !!! tip "30-second revision"
        Package = namespace + organization + access boundary. Visibility order: private < default < protected < public.

    **Sources:** [Oracle: Controlling Access to Members](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)

??? question "Question 5 — Term 181 — Q6(b)"
    **Exact question**

    You are developing an application for your university for student registration of courses each semester. Identify the objects involved in this application. Identify each object’s properties and some of the possible methods they may have. You do not have to write any Java code; simply show the objects/entities, their attributes/properties and method signatures they may have.

    **Answer**

    A suitable object model is:

    | Object/entity | Important properties | Possible methods |
    |---|---|---|
    | Student | studentId, name, email, program | register(CourseOffering), drop(...), viewSchedule() |
    | Course | code, title, credits, prerequisites | addPrerequisite(), isEligible(Student) |
    | CourseOffering | section, semester, capacity, teacher | enroll(Student), remove(Student), seatsLeft() |
    | Registration | student, offering, date, status, grade | confirm(), cancel(), assignGrade() |
    | Semester | termCode, startDate, endDate | isRegistrationOpen(), listOfferings() |
    | Instructor | employeeId, name, department | teach(CourseOffering), submitGrade() |
    | Department | code, name, courses | addCourse(), listCourses() |

    Relationships: a Student has many Registrations; each Registration connects one Student to one CourseOffering; a CourseOffering represents one Course in one Semester and is taught by an Instructor. A separate Registration object is useful because date, status and grade belong to the relationship.

    !!! tip "30-second revision"
        Core entities: Student, Course, CourseOffering, Registration, Semester, Instructor. Registration links Student and Offering and stores status/date/grade.

    **Sources:** [Oracle: Object-Oriented Programming Concepts](https://docs.oracle.com/javase/tutorial/java/concepts/) · [Oracle: Classes and Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/)

??? question "Question 6 — Term 181 — Q6(c)"
    **Exact question**

    Consider the following code:

       ```java
       import java.io.*;
       public class Employee {
           String name;
           String designation = "MANAGER";

           // This is the constructor of the class Employee
           public void setDesignation(String designation)
           {
               System.out.println("Designation is : " + designation);
           }
       }
       ```

       In another class we have the following code:

       ```java
       Employee emp = new Employee();
       emp.setDesignation("Accountant");
       ```

       What would be the output of this code and why? Also identify what crucial part of the code may be missing.

    **Answer**

    The call passes **"Accountant"** to the parameter named designation, so the method prints:

    ~~~text
    Designation is : Accountant
    ~~~

    However, it does not update the field because the parameter shadows the instance variable. A real setter should include:

    ~~~java
    public void setDesignation(String designation) {
        this.designation = designation;
        System.out.println("Designation is : " + this.designation);
    }
    ~~~

    If the second snippet is intended as a complete executable class, it also needs a valid **main** method or another method/initializer around those statements. Thus the crucial functional omission is **this.designation = designation**, and the crucial program-entry omission may be **main**.

    !!! tip "30-second revision"
        Output: Designation is : Accountant. Missing setter assignment this.designation = designation; standalone execution also needs main.

    **Sources:** [Oracle: Classes and Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/)

??? question "Question 7 — Term 211 — Q3(a)"
    **Exact question**

    How to declare a Package in Java? What are the advantages of Packages in Java?

    **Answer**

    A package groups related types and provides a namespace. Declare it as the first non-comment statement:

    ~~~java
    package edu.bou.oop;

    public class Student { }
    ~~~

    The source is normally stored under **edu/bou/oop/Student.java**. Another type can use it with an import, for example **import edu.bou.oop.Student;**.

    Advantages:

    1. prevents naming conflicts through qualified names;
    2. organizes related code;
    3. provides package-level access control;
    4. makes reuse, maintenance, distribution and discovery easier;
    5. supports modular API design.

    Package names conventionally use lowercase reverse-domain notation.

    !!! tip "30-second revision"
        package statement first; folder follows package path. Benefits: namespace, organization, access control, reuse and maintenance.

    **Sources:** [Oracle: Object-Oriented Programming Concepts](https://docs.oracle.com/javase/tutorial/java/concepts/) · [Oracle: Controlling Access to Members](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)

# Chapter 6: Exception Handling and Errors

??? question "Question 1 — Term 151 — Q4(a)"
    **Exact question**

    Explain exception handling in Java. Write a program that generates custom exception if any integer value given from its command line arguments is negative.

    **Answer**

    Exception handling separates normal logic from abnormal-condition handling. A method throws an exception object; the runtime searches the call stack for a compatible handler.

    ~~~java
    class NegativeNumberException extends Exception {
        NegativeNumberException(String message) { super(message); }
    }

    public class CheckArguments {
        public static void main(String[] args) {
            try {
                for (String arg : args) {
                    int n = Integer.parseInt(arg);
                    if (n < 0)
                        throw new NegativeNumberException("Negative value: " + n);
                    System.out.println("Valid: " + n);
                }
            } catch (NumberFormatException e) {
                System.out.println("Not an integer: " + e.getMessage());
            } catch (NegativeNumberException e) {
                System.out.println(e.getMessage());
            }
        }
    }
    ~~~

    The custom checked exception extends Exception. **throw** creates the exceptional transfer; **catch** handles it.

    !!! tip "30-second revision"
        Parse each argument; if n<0, throw new NegativeNumberException; catch custom and NumberFormatException.

    **Sources:** [Oracle: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

??? question "Question 2 — Term 151 — Q4(b)"
    **Exact question**

    Explain the importance of exception handling in Java. Which keywords are used to handle exceptions? Write a program to explain the use of these keywords.

    **Answer**

    Exception handling prevents abrupt uncontrolled termination, preserves error information, separates error logic and lets a suitable caller recover or report the problem.

    - **try:** encloses risky code.
    - **catch:** handles a matching exception.
    - **finally:** runs after try/catch for cleanup, except under abnormal JVM termination.
    - **throw:** explicitly throws one exception object.
    - **throws:** declares exceptions a method may pass to its caller.

    ~~~java
    static int readPositive(String text) throws Exception {
        try {
            int n = Integer.parseInt(text);
            if (n <= 0) throw new Exception("Value must be positive");
            return n;
        } catch (NumberFormatException e) {
            throw new Exception("Invalid integer", e);
        } finally {
            System.out.println("Validation attempted");
        }
    }
    ~~~

    For closeable resources, try-with-resources is usually safer than manual cleanup.

    !!! tip "30-second revision"
        Five keywords: try, catch, finally, throw, throws. throw sends one object; throws declares possible propagation.

    **Sources:** [Oracle: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

??? question "Question 3 — Term 161 — Q3(a)"
    **Exact question**

    Explain exception handling in Java. Write a program that generates custom exception if any integer value given from its command line arguments is negative.

    **Answer**

    Exception handling separates normal logic from abnormal-condition handling. A method throws an exception object; the runtime searches the call stack for a compatible handler.

    ~~~java
    class NegativeNumberException extends Exception {
        NegativeNumberException(String message) { super(message); }
    }

    public class CheckArguments {
        public static void main(String[] args) {
            try {
                for (String arg : args) {
                    int n = Integer.parseInt(arg);
                    if (n < 0)
                        throw new NegativeNumberException("Negative value: " + n);
                    System.out.println("Valid: " + n);
                }
            } catch (NumberFormatException e) {
                System.out.println("Not an integer: " + e.getMessage());
            } catch (NegativeNumberException e) {
                System.out.println(e.getMessage());
            }
        }
    }
    ~~~

    The custom checked exception extends Exception. **throw** creates the exceptional transfer; **catch** handles it.

    !!! tip "30-second revision"
        Parse each argument; if n<0, throw new NegativeNumberException; catch custom and NumberFormatException.

    **Sources:** [Oracle: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

??? question "Question 4 — Term 161 — Q3(b)"
    **Exact question**

    Write a Java program to check the divide-by-zero error of the modulo of two integers using exception handling mechanism.

    **Answer**

    Integer remainder by zero throws ArithmeticException.

    ~~~java
    import java.util.Scanner;

    public class SafeModulo {
        public static void main(String[] args) {
            try (Scanner input = new Scanner(System.in)) {
                System.out.print("Enter dividend and divisor: ");
                int a = input.nextInt();
                int b = input.nextInt();
                System.out.println("Remainder = " + (a % b));
            } catch (ArithmeticException e) {
                System.out.println("Error: divisor cannot be zero.");
            } catch (java.util.InputMismatchException e) {
                System.out.println("Error: enter integers only.");
            }
        }
    }
    ~~~

    The operation **a % b** is inside try. When b is zero, normal flow stops and the ArithmeticException handler runs.

    !!! tip "30-second revision"
        Put a % b in try; catch ArithmeticException for b=0; optionally catch InputMismatchException for invalid input.

    **Sources:** [Oracle: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

??? question "Question 5 — Term 161 — Q3(d)"
    **Exact question**

    Which keywords are used to handle exceptions? Write a program to explain the use of these keywords.

    **Answer**

    Exception handling prevents abrupt uncontrolled termination, preserves error information, separates error logic and lets a suitable caller recover or report the problem.

    - **try:** encloses risky code.
    - **catch:** handles a matching exception.
    - **finally:** runs after try/catch for cleanup, except under abnormal JVM termination.
    - **throw:** explicitly throws one exception object.
    - **throws:** declares exceptions a method may pass to its caller.

    ~~~java
    static int readPositive(String text) throws Exception {
        try {
            int n = Integer.parseInt(text);
            if (n <= 0) throw new Exception("Value must be positive");
            return n;
        } catch (NumberFormatException e) {
            throw new Exception("Invalid integer", e);
        } finally {
            System.out.println("Validation attempted");
        }
    }
    ~~~

    For closeable resources, try-with-resources is usually safer than manual cleanup.

    !!! tip "30-second revision"
        Five keywords: try, catch, finally, throw, throws. throw sends one object; throws declares possible propagation.

    **Sources:** [Oracle: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

??? question "Question 6 — Term 161 — Q7(d)"
    **Exact question**

    What is error? Explain any three types of errors. How can we handle run time errors in Java?

    **Answer**

    An error is a fault that prevents a program from compiling or behaving correctly. Three broad textbook categories are:

    1. **Compile-time/syntax or type errors:** missing semicolon, wrong type, undefined symbol; found by the compiler.
    2. **Runtime errors/exceptions:** occur while executing, such as division by zero, missing file or invalid array index.
    3. **Logical errors:** program runs but produces a wrong result because the algorithm/formula is wrong.

    Runtime problems represented as Exceptions can be handled with validation, try-catch-finally, throws and try-with-resources. Serious JVM Errors such as OutOfMemoryError are generally not conditions an application should try to recover from. Logical errors require testing and debugging; compile errors require correcting the source.

    !!! tip "30-second revision"
        Three exam types: compile-time, runtime, logical. Compiler finds first; try/catch may handle recoverable runtime exceptions; testing finds logic faults.

    **Sources:** [Oracle: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

??? question "Question 7 — Term 171 — Q4(c)"
    **Exact question**

    Exceptions are problems that may happen in a code. In Java, exceptions are categorized as Runtime Exceptions and Checked Exceptions. Explain these two types.

    **Answer**

    | Checked exception | Runtime/unchecked exception |
    |---|---|
    | Subclass of Exception excluding RuntimeException | RuntimeException or subclass |
    | Compiler enforces catch or declare | Compiler does not enforce catch/declare |
    | Often an external recoverable condition | Often a programming or API-use defect |
    | Example: IOException | Example: NullPointerException, ArithmeticException |

    Errors are also unchecked but are not RuntimeExceptions.

    ~~~java
    void read() throws java.io.IOException { /* checked */ }
    int x = 10 / 0;                    // ArithmeticException at runtime
    ~~~

    Checked does not mean the exception occurs at compile time; it means the compiler checks handling obligations.

    !!! tip "30-second revision"
        Checked: compiler demands catch/throws, e.g. IOException. Unchecked: RuntimeException, e.g. NullPointerException.

    **Sources:** [Oracle: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

??? question "Question 8 — Term 171 — Q5(a)"
    **Exact question**

    What is difference between Exception and Error in Java? Describe the purpose of the following exception handling keywords: `throw`, `throws`, `try-catch` and `finally`.

    **Answer**

    Both Exception and Error extend Throwable, but they represent different conditions.

    | Exception | Error |
    |---|---|
    | Conditions an application may anticipate or recover from | Serious JVM/system failures usually outside normal recovery |
    | Checked or unchecked | Unchecked |
    | Examples: IOException, SQLException, ArithmeticException | OutOfMemoryError, StackOverflowError, LinkageError |
    | Often caught at a meaningful boundary | Usually allowed to propagate after logging/cleanup |

    Keywords: **try-catch** protects and handles; **finally** performs cleanup; **throw** explicitly raises an object; **throws** declares propagation from a method. Catch only conditions the program can handle meaningfully.

    !!! tip "30-second revision"
        Exception: application-level condition, often recoverable. Error: serious JVM/system problem, normally not recovered. Both inherit Throwable.

    **Sources:** [Oracle: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

??? question "Question 9 — Term 171 — Q5(c)"
    **Exact question**

    Find errors in the following Java class:

       ```java
       class Calculator
       {
           public static Main(String args[])
           {
               int a = 4, b = 6, c = 0
               c = add(a, b);
           }

           public int add(a, b)
           {
               int c = a + b;
           }
       }
       ```

    **Answer**

    Errors in the given class are:

    1. **Main** must be lowercase **main**.
    2. main lacks return type **void**.
    3. Missing semicolon after **c = 0**.
    4. add is an instance method but is called from static main; make it static or create an object.
    5. Parameters **a** and **b** have no declared types.
    6. add declares int return type but has no return statement.

    Correct program:

    ~~~java
    class Calculator {
        public static void main(String[] args) {
            int a = 4, b = 6, c = 0;
            c = add(a, b);
            System.out.println(c);
        }

        public static int add(int a, int b) {
            int c = a + b;
            return c;
        }
    }
    ~~~

    Output: **10**.

    !!! tip "30-second revision"
        Fix main spelling + void, missing semicolon, parameter types, static call mismatch, and missing return. Output 10.

    **Sources:** [Oracle: Learning the Java Language](https://docs.oracle.com/javase/tutorial/java/TOC.html) · [Oracle: Classes and Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/)

??? question "Question 10 — Term 181 — Q4(a)"
    **Exact question**

    When you write programs in Java, you must be concerned about exceptions. What are exceptions? When answering this question, mention some scenarios where exceptions may happen.

    **Answer**

    An exception is an object describing an abnormal condition that interrupts the normal flow of a method. The runtime searches the call stack for a matching catch handler.

    Common scenarios include:

    - integer division/remainder by zero → ArithmeticException;
    - invalid array index → ArrayIndexOutOfBoundsException;
    - using a null reference → NullPointerException;
    - invalid numeric text → NumberFormatException;
    - file absent or inaccessible → FileNotFoundException/IOException;
    - invalid keyboard input → InputMismatchException;
    - invalid cast → ClassCastException;
    - network connection failure → IOException.

    Good programs prevent avoidable exceptions through validation and handle only those conditions from which they can recover or report meaningfully.

    !!! tip "30-second revision"
        Exception = abnormal-condition object disrupting normal flow. Remember examples: /0, bad index, null, bad input, missing file, bad cast.

    **Sources:** [Oracle: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

??? question "Question 11 — Term 181 — Q4(c)"
    **Exact question**

    In your Java code, you have the following line to open a file to read the content:

        ```java
        BufferedReader reader = new BufferedReader(new FileReader(filename));
        ```

        You know very well that exceptions may be thrown here. Mention reasons you think exceptions may be thrown when trying to read a file. Show in code how you would handle the exception/s in this case.

    **Answer**

    Opening/reading may fail because the file does not exist, the path names a directory, permission is denied, the path is invalid, storage/hardware fails, or another I/O error occurs. **FileReader** construction specifically may throw FileNotFoundException, while reads/close may throw IOException.

    ~~~java
    import java.io.*;

    public class ReadFile {
        static void printFile(String filename) {
            try (BufferedReader reader =
                     new BufferedReader(new FileReader(filename))) {
                String line;
                while ((line = reader.readLine()) != null)
                    System.out.println(line);
            } catch (FileNotFoundException e) {
                System.out.println("File not found or inaccessible: " + filename);
            } catch (IOException e) {
                System.out.println("I/O failure: " + e.getMessage());
            }
        }
    }
    ~~~

    Try-with-resources closes the reader automatically.

    !!! tip "30-second revision"
        Reasons: missing file, wrong path/directory, permission, I/O failure. Catch FileNotFoundException then IOException; use try-with-resources.

    **Sources:** [Oracle: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/) · [Oracle: Basic I/O](https://docs.oracle.com/javase/tutorial/essential/io/)

??? question "Question 12 — Term 201 — Q4(c)"
    **Exact question**

    What does exception mean in Java? Write a Java program to enter two numbers and calculate the quotient. Use exception handling mechanism to take care of the divide by zero situation.

    **Answer**

    ~~~java
    import java.util.Scanner;

    public class SafeDivision {
        public static void main(String[] args) {
            try (Scanner input = new Scanner(System.in)) {
                System.out.print("Enter two integers: ");
                int a = input.nextInt();
                int b = input.nextInt();
                System.out.println("Quotient = " + (a / b));
            } catch (ArithmeticException e) {
                System.out.println("Cannot divide by zero.");
            } catch (java.util.InputMismatchException e) {
                System.out.println("Please enter integers.");
            }
        }
    }
    ~~~

    With integer operands, **a / 0** throws ArithmeticException. The catch block prevents a raw stack trace and gives a meaningful message.

    !!! tip "30-second revision"
        Read a and b; compute a/b inside try; catch ArithmeticException for zero divisor.

    **Sources:** [Oracle: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

??? question "Question 13 — Term 201 — Q6(a)"
    **Exact question**

    What is the difference between Exception and Error in Java?

    **Answer**

    Both Exception and Error extend Throwable, but they represent different conditions.

    | Exception | Error |
    |---|---|
    | Conditions an application may anticipate or recover from | Serious JVM/system failures usually outside normal recovery |
    | Checked or unchecked | Unchecked |
    | Examples: IOException, SQLException, ArithmeticException | OutOfMemoryError, StackOverflowError, LinkageError |
    | Often caught at a meaningful boundary | Usually allowed to propagate after logging/cleanup |

    Keywords: **try-catch** protects and handles; **finally** performs cleanup; **throw** explicitly raises an object; **throws** declares propagation from a method. Catch only conditions the program can handle meaningfully.

    !!! tip "30-second revision"
        Exception: application-level condition, often recoverable. Error: serious JVM/system problem, normally not recovered. Both inherit Throwable.

    **Sources:** [Oracle: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

??? question "Question 14 — Term 201 — Q6(d)"
    **Exact question**

    What is the difference between checked and unchecked exceptions in Java? Give ONE (1) example of each of these types of exceptions.

    **Answer**

    | Checked exception | Runtime/unchecked exception |
    |---|---|
    | Subclass of Exception excluding RuntimeException | RuntimeException or subclass |
    | Compiler enforces catch or declare | Compiler does not enforce catch/declare |
    | Often an external recoverable condition | Often a programming or API-use defect |
    | Example: IOException | Example: NullPointerException, ArithmeticException |

    Errors are also unchecked but are not RuntimeExceptions.

    ~~~java
    void read() throws java.io.IOException { /* checked */ }
    int x = 10 / 0;                    // ArithmeticException at runtime
    ~~~

    Checked does not mean the exception occurs at compile time; it means the compiler checks handling obligations.

    !!! tip "30-second revision"
        Checked: compiler demands catch/throws, e.g. IOException. Unchecked: RuntimeException, e.g. NullPointerException.

    **Sources:** [Oracle: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

??? question "Question 15 — Term 211 — Q3(b)"
    **Exact question**

    Differentiate between Exception and Error in Java. Write a Java Program to check the divide-by-zero error of the modulo of two integers using exception handling mechanism.

    **Answer**

    Integer remainder by zero throws ArithmeticException.

    ~~~java
    import java.util.Scanner;

    public class SafeModulo {
        public static void main(String[] args) {
            try (Scanner input = new Scanner(System.in)) {
                System.out.print("Enter dividend and divisor: ");
                int a = input.nextInt();
                int b = input.nextInt();
                System.out.println("Remainder = " + (a % b));
            } catch (ArithmeticException e) {
                System.out.println("Error: divisor cannot be zero.");
            } catch (java.util.InputMismatchException e) {
                System.out.println("Error: enter integers only.");
            }
        }
    }
    ~~~

    The operation **a % b** is inside try. When b is zero, normal flow stops and the ArithmeticException handler runs.

    !!! tip "30-second revision"
        Put a % b in try; catch ArithmeticException for b=0; optionally catch InputMismatchException for invalid input.

    **Sources:** [Oracle: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

??? question "Question 16 — Term 211 — Q3(c)"
    **Exact question**

    Which keywords are used to handle exceptions? Write a program to explain the use of these keywords.

    **Answer**

    Exception handling prevents abrupt uncontrolled termination, preserves error information, separates error logic and lets a suitable caller recover or report the problem.

    - **try:** encloses risky code.
    - **catch:** handles a matching exception.
    - **finally:** runs after try/catch for cleanup, except under abnormal JVM termination.
    - **throw:** explicitly throws one exception object.
    - **throws:** declares exceptions a method may pass to its caller.

    ~~~java
    static int readPositive(String text) throws Exception {
        try {
            int n = Integer.parseInt(text);
            if (n <= 0) throw new Exception("Value must be positive");
            return n;
        } catch (NumberFormatException e) {
            throw new Exception("Invalid integer", e);
        } finally {
            System.out.println("Validation attempted");
        }
    }
    ~~~

    For closeable resources, try-with-resources is usually safer than manual cleanup.

    !!! tip "30-second revision"
        Five keywords: try, catch, finally, throw, throws. throw sends one object; throws declares possible propagation.

    **Sources:** [Oracle: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

??? question "Question 17 — Term 211 — Q6(a)"
    **Exact question**

    How many types of Exceptions can occur in a Java program? Describe with examples.

    **Answer**

    For examination purposes, Java exceptions are commonly divided into **two types**:

    1. **Checked exceptions:** compiler enforces catch or throws. Example: IOException when reading a file.
    2. **Unchecked exceptions:** RuntimeException and subclasses; compiler does not enforce handling. Examples: ArithmeticException, NullPointerException and ArrayIndexOutOfBoundsException.

    At the broader Throwable level there is also **Error**, such as OutOfMemoryError, but an Error is not an Exception. Therefore, if asked specifically “types of exceptions,” answer checked and unchecked; if asked for throwable categories, state Error and Exception, with Exception further divided into checked and unchecked.

    !!! tip "30-second revision"
        Exceptions: checked and unchecked. Throwable: Error and Exception. Do not incorrectly call Error a third Exception type.

    **Sources:** [Oracle: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

# Chapter 7: I/O Programming, Streams and Files

??? question "Question 1 — Term 151 — Q4(c)"
    **Exact question**

    Write a program that counts the number of words in a text file. Consider the file name is passed as a command line argument. The program should check whether the file exists or not. The words in the file are separated by white space character.

    **Answer**

    ~~~java
    import java.io.File;
    import java.io.FileNotFoundException;
    import java.util.Scanner;

    public class WordCount {
        public static void main(String[] args) {
            if (args.length != 1) {
                System.out.println("Usage: java WordCount <filename>");
                return;
            }

            File file = new File(args[0]);
            if (!file.exists() || !file.isFile()) {
                System.out.println("File does not exist: " + args[0]);
                return;
            }

            int count = 0;
            try (Scanner in = new Scanner(file)) {
                while (in.hasNext()) {
                    in.next();
                    count++;
                }
                System.out.println("Words = " + count);
            } catch (FileNotFoundException e) {
                System.out.println("Cannot open file: " + e.getMessage());
            }
        }
    }
    ~~~

    Scanner's default delimiter is whitespace, matching the question. The program validates the argument and file before counting tokens.

    !!! tip "30-second revision"
        Check one filename argument and file existence; while Scanner.hasNext(), consume next() and increment count.

    **Sources:** [Oracle: Basic I/O](https://docs.oracle.com/javase/tutorial/essential/io/)

??? question "Question 2 — Term 161 — Q5(a)"
    **Exact question**

    What is Stream? Distinguish between InputStream class and Reader Class.

    **Answer**

    A stream is a flow of data between a source and a program or between a program and a destination.

    | InputStream | Reader |
    |---|---|
    | Abstract base for byte input | Abstract base for character input |
    | Reads 8-bit bytes | Reads Unicode characters |
    | Suitable for images, audio, arbitrary binary data | Suitable for text |
    | Core read returns byte value as int or −1 | Core read returns character value as int or −1 |
    | Example: FileInputStream | Example: FileReader, BufferedReader |

    An InputStreamReader bridges bytes to characters using a character encoding. Use byte streams for binary content and readers/writers for text.

    !!! tip "30-second revision"
        Stream = data flow. InputStream reads bytes/binary; Reader reads decoded characters/text. InputStreamReader bridges them.

    **Sources:** [Oracle: Basic I/O](https://docs.oracle.com/javase/tutorial/essential/io/)

??? question "Question 3 — Term 161 — Q5(b)"
    **Exact question**

    What is random access file? How is it different from a sequential file?

    **Answer**

    A random-access file allows the program to move directly to a chosen byte position and then read or write. Java's RandomAccessFile supports operations such as **seek(position)** and **getFilePointer()**.

    | Random access | Sequential access |
    |---|---|
    | Jump directly to a position | Process data in order from beginning/current position |
    | Efficient for fixed records and updates | Simple for logs, text and full scans |
    | Can read and write in place | Usually stream-oriented |
    | Uses position/offset | Uses next item |

    Random access is useful for databases or large record files when only one record is needed. Sequential access is preferable when most or all data must be processed in order.

    !!! tip "30-second revision"
        Random: seek directly by position. Sequential: read next item in order. Use random for record lookup/update; sequential for full scans.

    **Sources:** [Oracle: Basic I/O](https://docs.oracle.com/javase/tutorial/essential/io/)

??? question "Question 4 — Term 161 — Q5(c)"
    **Exact question**

    Write a program to read the integer values of file and save them in another file after sorting.

    **Answer**

    ~~~java
    import java.io.*;
    import java.util.*;

    public class SortFileIntegers {
        public static void main(String[] args) {
            if (args.length != 2) {
                System.out.println("Usage: java SortFileIntegers input.txt output.txt");
                return;
            }

            List<Integer> numbers = new ArrayList<>();
            try (Scanner in = new Scanner(new File(args[0]))) {
                while (in.hasNext()) {
                    if (in.hasNextInt()) numbers.add(in.nextInt());
                    else in.next();
                }
                Collections.sort(numbers);

                try (PrintWriter out = new PrintWriter(args[1])) {
                    for (int n : numbers) out.println(n);
                }
                System.out.println("Sorted " + numbers.size() + " integers.");
            } catch (IOException e) {
                System.out.println("File error: " + e.getMessage());
            }
        }
    }
    ~~~

    This in-memory solution is suitable when the values fit in memory. Very large files require an external sorting technique.

    !!! tip "30-second revision"
        Read integers into List<Integer>, Collections.sort(list), then write each value to the output file.

    **Sources:** [Oracle: Basic I/O](https://docs.oracle.com/javase/tutorial/essential/io/) · [Oracle: Collections Interfaces](https://docs.oracle.com/javase/tutorial/collections/interfaces/)

??? question "Question 5 — Term 161 — Q5(d)"
    **Exact question**

    Why do you require files to store data?

    **Answer**

    Variables and objects in main memory are normally temporary: their values disappear when the program ends or the process fails. Files are required for **persistent storage**.

    They allow programs to:

    - save data for later executions;
    - handle data larger than available RAM;
    - exchange information with other programs/users;
    - keep configuration, logs, reports, transactions and backups;
    - process information sequentially or randomly;
    - preserve an audit/history independent of one running process.

    Files are slower than RAM, so applications often read required data into memory and write durable results back to storage.

    !!! tip "30-second revision"
        RAM data is temporary; files provide persistence, capacity, sharing, logs/backups and reuse across program runs.

    **Sources:** [Oracle: Basic I/O](https://docs.oracle.com/javase/tutorial/essential/io/)

??? question "Question 6 — Term 171 — Q7(d)"
    **Exact question**

    Distinguish between Java InputStream and OutputStream classes. Also explain their underlying useful methods.

    **Answer**

    InputStream is the abstract base for byte input; OutputStream is the abstract base for byte output.

    | InputStream methods | Purpose |
    |---|---|
    | read() | Read one byte; −1 means end of stream |
    | read(byte[]) | Read bytes into a buffer |
    | skip(n) | Skip bytes |
    | available() | Estimate immediately readable bytes |
    | close() | Release resource |

    | OutputStream methods | Purpose |
    |---|---|
    | write(int) | Write one byte |
    | write(byte[]) | Write a byte array |
    | flush() | Force buffered output onward |
    | close() | Flush/release resource |

    FileInputStream and FileOutputStream are common concrete subclasses. Buffered streams reduce expensive underlying I/O calls.

    !!! tip "30-second revision"
        InputStream reads bytes: read/skip/close. OutputStream writes bytes: write/flush/close. −1 means EOF.

    **Sources:** [Oracle: Basic I/O](https://docs.oracle.com/javase/tutorial/essential/io/)

??? question "Question 7 — Term 201 — Q5(b)"
    **Exact question**

    What is a stream? Briefly explain the three streams automatically created in Java.

    **Answer**

    A stream represents an input source or output destination. Java automatically provides three standard streams through System:

    1. **System.in:** standard input, normally the keyboard; type InputStream.
    2. **System.out:** standard output, normally the console; type PrintStream.
    3. **System.err:** standard error output; type PrintStream and intended for diagnostics/errors.

    ~~~java
    int b = System.in.read();
    System.out.println("Normal message");
    System.err.println("Error message");
    ~~~

    Although out and err print characters conveniently, they are historically byte-stream-based PrintStream objects. Shells may redirect each standard stream.

    !!! tip "30-second revision"
        Three automatic streams: System.in=input, System.out=normal output, System.err=error output.

    **Sources:** [Oracle: Basic I/O](https://docs.oracle.com/javase/tutorial/essential/io/)

??? question "Question 8 — Term 201 — Q5(c)"
    **Exact question**

    Assume that you have a file named `outFile.txt` in your C drive. Write a program using the `java.io.FileOutputStream` class to write the following sentence in that file:

       ```text
       Java programming is awesome
       ```

    **Answer**

    ~~~java
    import java.io.FileOutputStream;
    import java.io.IOException;
    import java.nio.charset.StandardCharsets;

    public class WriteSentence {
        public static void main(String[] args) {
            String text = "Java programming is awesome";
            String path = "C:\\outFile.txt";

            try (FileOutputStream out = new FileOutputStream(path)) {
                out.write(text.getBytes(StandardCharsets.UTF_8));
                System.out.println("Written successfully.");
            } catch (IOException e) {
                System.out.println("Write failed: " + e.getMessage());
            }
        }
    }
    ~~~

    The doubled backslash is Java's escape for a literal Windows path separator. The one-argument FileOutputStream constructor overwrites the file; pass **true** as a second argument to append.

    !!! tip "30-second revision"
        Open FileOutputStream("C:\outFile.txt"), convert text to UTF-8 bytes, write, and close with try-with-resources.

    **Sources:** [Oracle: Basic I/O](https://docs.oracle.com/javase/tutorial/essential/io/)

# Chapter 8: Event-Based, Applet and GUI Programming

??? question "Question 1 — Term 151 — Q5(a)"
    **Exact question**

    What is the relationship between an event-listener interface and an event-adapter class? How can a GUI component handle its own events?

    **Answer**

    An event-listener interface declares callback methods for a family of events. An event-adapter class implements that interface with empty method bodies. A programmer extends the adapter and overrides only the callbacks needed. Example: MouseAdapter implements MouseListener, MouseMotionListener and MouseWheelListener conveniences, so a subclass can override just mouseClicked.

    A GUI component can handle its own events by implementing the listener interface and registering itself:

    ~~~java
    class MyButton extends javax.swing.JButton
            implements java.awt.event.ActionListener {
        MyButton() {
            super("Click");
            addActionListener(this);
        }
        public void actionPerformed(java.awt.event.ActionEvent e) {
            setText("Clicked");
        }
    }
    ~~~

    Self-handling is possible, though a separate listener or lambda can give cleaner separation.

    !!! tip "30-second revision"
        Listener interface declares callbacks; adapter supplies empty versions. Self-handling = implements listener + addXListener(this).

    **Sources:** [Oracle: Writing Event Listeners](https://docs.oracle.com/javase/tutorial/uiswing/events/)

??? question "Question 2 — Term 151 — Q6(b)"
    **Exact question**

    Write a program to have a GUI based simple calculator in a frame supporting addition and subtraction. There are buttons for 0 to 9 digits and for arithmetic operations. Select layout of your choice.

    **Answer**

    ~~~java
    import javax.swing.*;
    import java.awt.*;
    import java.awt.event.*;

    public class SimpleCalculator extends JFrame implements ActionListener {
        private final JTextField display = new JTextField();
        private double first;
        private char operation;
        private boolean startNew = true;

        SimpleCalculator() {
            super("Calculator");
            display.setEditable(false);
            display.setHorizontalAlignment(JTextField.RIGHT);
            add(display, BorderLayout.NORTH);

            JPanel keys = new JPanel(new GridLayout(4, 3, 5, 5));
            for (String key : new String[]{"7","8","9","4","5","6","1","2","3","0","+","-"}) {
                JButton b = new JButton(key);
                b.addActionListener(this);
                keys.add(b);
            }
            JButton equals = new JButton("=");
            equals.addActionListener(this);
            add(keys, BorderLayout.CENTER);
            add(equals, BorderLayout.SOUTH);
            setDefaultCloseOperation(EXIT_ON_CLOSE);
            pack(); setLocationRelativeTo(null); setVisible(true);
        }

        public void actionPerformed(ActionEvent e) {
            String key = e.getActionCommand();
            if (Character.isDigit(key.charAt(0))) {
                display.setText(startNew ? key : display.getText() + key);
                startNew = false;
            } else if (key.equals("+") || key.equals("-")) {
                first = Double.parseDouble(display.getText());
                operation = key.charAt(0); startNew = true;
            } else if (key.equals("=")) {
                double second = Double.parseDouble(display.getText());
                display.setText(String.valueOf(operation == '+' ? first + second : first - second));
                startNew = true;
            }
        }

        public static void main(String[] args) {
            SwingUtilities.invokeLater(SimpleCalculator::new);
        }
    }
    ~~~

    GridLayout arranges digits/operators; BorderLayout places display, keys and equals button.

    !!! tip "30-second revision"
        JFrame + display + digit/operator buttons. GridLayout for keys; ActionListener stores first operand/operator and computes on =.

    **Sources:** [Oracle: Swing Tutorial](https://docs.oracle.com/javase/tutorial/uiswing/) · [Oracle: Visual Guide to Layout Managers](https://docs.oracle.com/javase/tutorial/uiswing/layout/visual.html) · [Oracle: Writing Event Listeners](https://docs.oracle.com/javase/tutorial/uiswing/events/)

??? question "Question 3 — Term 151 — Q6(c)"
    **Exact question**

    Write a code segment of a simple JFrame with a JLabel and JButton.

    **Answer**

    ~~~java
    import javax.swing.*;
    import java.awt.*;

    public class SimpleFrame {
        public static void main(String[] args) {
            SwingUtilities.invokeLater(() -> {
                JFrame frame = new JFrame("Demo");
                frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                frame.setLayout(new FlowLayout());
                frame.add(new JLabel("Welcome"));
                JButton button = new JButton("OK");
                button.addActionListener(e -> System.out.println("Clicked"));
                frame.add(button);
                frame.pack();
                frame.setLocationRelativeTo(null);
                frame.setVisible(true);
            });
        }
    }
    ~~~

    The GUI is created on Swing's event-dispatch thread. pack sizes the frame from component preferred sizes.

    !!! tip "30-second revision"
        Create JFrame, set close operation/layout, add JLabel and JButton, pack, then setVisible(true).

    **Sources:** [Oracle: Swing Tutorial](https://docs.oracle.com/javase/tutorial/uiswing/) · [Oracle: Writing Event Listeners](https://docs.oracle.com/javase/tutorial/uiswing/events/)

??? question "Question 4 — Term 161 — Q6(a)"
    **Exact question**

    Draw the block diagram of applet class inherited properties from a long chain of class. Explain briefly the life cycle of an applet.

    **Answer**

    Legacy AWT applet inheritance chain:

    ~~~mermaid
    classDiagram
        Object <|-- Component
        Component <|-- Container
        Container <|-- Panel
        Panel <|-- Applet
    ~~~

    Applet lifecycle methods:

    1. **init():** called once when loaded; initialize resources/UI.
    2. **start():** called after init and whenever the applet becomes active.
    3. **paint(Graphics):** called whenever output must be drawn; may run many times.
    4. **stop():** called when it becomes inactive/leaves the page.
    5. **destroy():** called once before unloading; release final resources.

    Applets are legacy browser technology and are no longer supported by modern browsers/JDK deployment, but the lifecycle remains valid for this historical syllabus.

    !!! tip "30-second revision"
        Applet chain: Object→Component→Container→Panel→Applet. Lifecycle: init, start, paint, stop, destroy.

    **Sources:** [Oracle: Java Applets (legacy)](https://docs.oracle.com/javase/tutorial/deployment/applet/)

??? question "Question 5 — Term 161 — Q6(b)"
    **Exact question**

    Write an applet program that draws a rectangle, an oval, a string and a line on the applet.

    **Answer**

    ~~~java
    import java.applet.Applet;
    import java.awt.Graphics;

    public class DrawingApplet extends Applet {
        @Override
        public void paint(Graphics g) {
            g.drawRect(20, 20, 100, 60);
            g.drawOval(150, 20, 100, 60);
            g.drawString("Java Applet", 20, 120);
            g.drawLine(20, 140, 250, 140);
        }
    }
    ~~~

    The coordinate origin is the top-left of the drawing area; x increases rightward and y downward. The runtime passes the Graphics context to paint. This is an academic legacy example because browser applet deployment is obsolete.

    !!! tip "30-second revision"
        Override paint(Graphics g); call drawRect, drawOval, drawString and drawLine with x-y coordinates.

    **Sources:** [Oracle: Java Applets (legacy)](https://docs.oracle.com/javase/tutorial/deployment/applet/)

??? question "Question 6 — Term 161 — Q7(a)"
    **Exact question**

    Describe the purpose of any six Swing components.

    **Answer**

    Any six Swing components and purposes:

    1. **JLabel:** displays non-editable text or an icon.
    2. **JButton:** initiates an action when clicked.
    3. **JTextField:** accepts one line of text.
    4. **JTextArea:** displays/edits multiple lines.
    5. **JCheckBox:** independent true/false option.
    6. **JRadioButton:** one choice from a ButtonGroup.
    7. **JComboBox:** drop-down selection.
    8. **JList:** displays a selectable list.
    9. **JTable:** tabular data display/editing.
    10. **JPanel:** lightweight container for grouping components.

    Swing classes mostly reside in **javax.swing** and use a pluggable look and feel.

    !!! tip "30-second revision"
        Six easy ones: JLabel display, JButton action, JTextField one line, JTextArea many lines, JCheckBox boolean, JRadioButton one-of-group.

    **Sources:** [Oracle: Swing Tutorial](https://docs.oracle.com/javase/tutorial/uiswing/)

??? question "Question 7 — Term 161 — Q7(b)"
    **Exact question**

    What are AWT and GUI?

    **Answer**

    **GUI** means Graphical User Interface: users interact through windows, buttons, menus, fields and other visual controls instead of only typed commands.

    **AWT (Abstract Window Toolkit)** is Java's original GUI, graphics and event package, mainly under **java.awt**. Many AWT widgets are heavyweight because they use native peer components. AWT supplies containers, layouts, colors, fonts, Graphics and event classes.

    Swing is built on AWT foundations and provides a richer set of mostly lightweight components under **javax.swing**, such as JFrame, JButton and JTable.

    !!! tip "30-second revision"
        GUI = visual interaction. AWT = java.awt toolkit for components, graphics, layouts and events; Swing builds richer components on it.

    **Sources:** [Oracle: Swing Tutorial](https://docs.oracle.com/javase/tutorial/uiswing/)

??? question "Question 8 — Term 161 — Q7(c)"
    **Exact question**

    Write a complete program to have 3 Buttons in a frame having exit capabilities. Buttons are to be added in the frame as per the layout of your choice. Count and display number of times each Button is clicked.

    **Answer**

    ~~~java
    import javax.swing.*;
    import java.awt.*;

    public class ButtonCounter extends JFrame {
        private final int[] counts = new int[3];
        private final JLabel status = new JLabel("Click a button", SwingConstants.CENTER);

        ButtonCounter() {
            super("Button Counter");
            JPanel panel = new JPanel(new GridLayout(1, 3, 5, 5));
            for (int i = 0; i < 3; i++) {
                final int index = i;
                JButton button = new JButton("Button " + (i + 1));
                button.addActionListener(e -> {
                    counts[index]++;
                    status.setText("Button " + (index + 1) + " clicked " + counts[index] + " times");
                });
                panel.add(button);
            }
            add(panel, BorderLayout.CENTER);
            add(status, BorderLayout.SOUTH);
            setDefaultCloseOperation(EXIT_ON_CLOSE);
            pack(); setLocationRelativeTo(null); setVisible(true);
        }

        public static void main(String[] args) {
            SwingUtilities.invokeLater(ButtonCounter::new);
        }
    }
    ~~~

    EXIT_ON_CLOSE supplies the requested exit capability; each listener updates its own counter.

    !!! tip "30-second revision"
        Three JButtons in GridLayout; one counter per button; ActionListener increments and displays; EXIT_ON_CLOSE exits.

    **Sources:** [Oracle: Swing Tutorial](https://docs.oracle.com/javase/tutorial/uiswing/) · [Oracle: Writing Event Listeners](https://docs.oracle.com/javase/tutorial/uiswing/events/) · [Oracle: Visual Guide to Layout Managers](https://docs.oracle.com/javase/tutorial/uiswing/layout/visual.html)

??? question "Question 9 — Term 171 — Q7(a)"
    **Exact question**

    What is SWING library used for in Java? What is the base package that you have to import for SWING classes?

    **Answer**

    Swing is Java's desktop GUI toolkit for building windows, dialogs, buttons, labels, text fields, tables, trees, menus and other components with pluggable look and feel.

    The base package commonly imported is:

    ~~~java
    import javax.swing.*;
    ~~~

    Layouts and basic graphics/events are still commonly imported from AWT:

    ~~~java
    import java.awt.*;
    import java.awt.event.*;
    ~~~

    Swing components generally begin with J, such as JFrame, JPanel, JButton and JLabel.

    !!! tip "30-second revision"
        Swing builds desktop GUIs. Import javax.swing.*; use java.awt and java.awt.event for layouts, graphics and events.

    **Sources:** [Oracle: Swing Tutorial](https://docs.oracle.com/javase/tutorial/uiswing/)

??? question "Question 10 — Term 171 — Q7(b)"
    **Exact question**

    What are layout managers? Name three of the Layout managers SWING has.

    **Answer**

    A layout manager is an object that automatically determines the size and position of components in a container. It adapts the UI to resizing, fonts, look-and-feel and locale.

    Three common managers:

    ~~~text
    FlowLayout:   [A] [B] [C]  (wraps left-to-right)

    GridLayout:   [A] [B]
                  [C] [D]      (equal cells)

    BorderLayout:    [ NORTH ]
                  [W][CENTER][E]
                     [ SOUTH ]
    ~~~

    - **FlowLayout:** row of preferred-size components; wraps when needed.
    - **GridLayout:** equal-sized rectangular cells.
    - **BorderLayout:** NORTH, SOUTH, EAST, WEST and CENTER regions.

    Other Swing-compatible AWT managers include CardLayout and GridBagLayout; Swing also provides BoxLayout and GroupLayout.

    !!! tip "30-second revision"
        Layout manager auto-sizes/positions controls. Flow=row/wrap; Grid=equal cells; Border=five regions.

    **Sources:** [Oracle: Visual Guide to Layout Managers](https://docs.oracle.com/javase/tutorial/uiswing/layout/visual.html)

??? question "Question 11 — Term 181 — Q5(b)"
    **Exact question**

    What is an event in event-based programming? Discuss the types of events.

    **Answer**

    An event is an object describing a change or user action generated by a source, such as clicking a button or pressing a key. Events are commonly grouped as:

    1. **Semantic/high-level events:** describe meaningful component actions—ActionEvent, ItemEvent, AdjustmentEvent, TextEvent.
    2. **Low-level events:** describe direct input/component/window changes—KeyEvent, MouseEvent, FocusEvent, WindowEvent, ComponentEvent, ContainerEvent.

    Another useful grouping is user events (mouse/key/action), window/component events, focus events and model/state-change events. The source fires the event and registered listener methods receive it.

    !!! tip "30-second revision"
        Event = action/state-change object. High-level: Action/Item; low-level: Mouse/Key/Focus/Window/Component.

    **Sources:** [Oracle: Writing Event Listeners](https://docs.oracle.com/javase/tutorial/uiswing/events/)

??? question "Question 12 — Term 181 — Q5(c)"
    **Exact question**

    Discuss the benefits of delegation event model in programming.

    **Answer**

    In the delegation event model, an event source creates an event object and sends it only to registered listener objects.

    Benefits:

    - separates GUI component code from response logic;
    - listeners receive only event types they registered for;
    - multiple listeners can observe one source, and one listener can handle multiple sources;
    - adapters reduce empty callback implementations;
    - improves modularity, reuse, testing and maintainability;
    - avoids continual polling and supports efficient asynchronous interaction.

    The model's three elements are **source**, **event object** and **listener**. Registration such as **button.addActionListener(listener)** connects them.

    !!! tip "30-second revision"
        Delegation = source sends event object to registered listener. Benefits: separation, efficiency, reuse, multiple listeners and easier maintenance.

    **Sources:** [Oracle: Writing Event Listeners](https://docs.oracle.com/javase/tutorial/uiswing/events/)

??? question "Question 13 — Term 181 — Q6(a)"
    **Exact question**

    What does GUI stand for? Why is it important?

    **Answer**

    GUI stands for **Graphical User Interface**. It lets users interact through visual elements such as windows, icons, menus, buttons, forms and pointer/touch actions.

    It is important because it:

    - makes applications easier for non-technical users;
    - gives immediate visual feedback;
    - supports direct manipulation and discoverable controls;
    - reduces the need to memorize commands;
    - can improve productivity through forms, menus and validation;
    - presents complex information visually.

    A good GUI also requires consistency, accessibility, clear error messages, keyboard navigation and responsive behaviour; graphical appearance alone does not guarantee usability.

    !!! tip "30-second revision"
        GUI = Graphical User Interface. Importance: easier learning, visual feedback, discoverability, productivity and accessible interaction.

    **Sources:** [Oracle: Swing Tutorial](https://docs.oracle.com/javase/tutorial/uiswing/)

??? question "Question 14 — Term 181 — Q7(a)"
    **Exact question**

    What are layout managers? Mention the name of three layout manager available in Java Swing package.

    **Answer**

    A layout manager is an object that automatically determines the size and position of components in a container. It adapts the UI to resizing, fonts, look-and-feel and locale.

    Three common managers:

    ~~~text
    FlowLayout:   [A] [B] [C]  (wraps left-to-right)

    GridLayout:   [A] [B]
                  [C] [D]      (equal cells)

    BorderLayout:    [ NORTH ]
                  [W][CENTER][E]
                     [ SOUTH ]
    ~~~

    - **FlowLayout:** row of preferred-size components; wraps when needed.
    - **GridLayout:** equal-sized rectangular cells.
    - **BorderLayout:** NORTH, SOUTH, EAST, WEST and CENTER regions.

    Other Swing-compatible AWT managers include CardLayout and GridBagLayout; Swing also provides BoxLayout and GroupLayout.

    !!! tip "30-second revision"
        Layout manager auto-sizes/positions controls. Flow=row/wrap; Grid=equal cells; Border=five regions.

    **Sources:** [Oracle: Visual Guide to Layout Managers](https://docs.oracle.com/javase/tutorial/uiswing/layout/visual.html)

??? question "Question 15 — Term 201 — Q6(c)"
    **Exact question**

    Containers and components are two types of Java GUI elements. Using a suitable diagram explain those elements.

    **Answer**

    A **component** is a visible/interactable GUI element such as JButton, JLabel or JTextField. A **container** is a component that can contain other components and arrange them with a layout manager.

    ~~~mermaid
    flowchart TD
        GUI[GUI elements] --> C[Components]
        GUI --> N[Containers]
        C --> E[JButton / JLabel / JTextField]
        N --> T[Top-level: JFrame / JDialog]
        N --> I[Intermediate: JPanel / JScrollPane]
    ~~~

    Example:

    ~~~java
    JFrame frame = new JFrame();       // top-level container
    JPanel panel = new JPanel();       // intermediate container
    panel.add(new JButton("Save"));    // component inside panel
    frame.add(panel);                  // panel inside frame
    ~~~

    Strictly, containers are also components in the AWT class hierarchy, but their special role is holding and laying out children.

    !!! tip "30-second revision"
        Component = control/display object. Container = component that holds and lays out others. JFrame top-level; JPanel intermediate.

    **Sources:** [Oracle: Swing Tutorial](https://docs.oracle.com/javase/tutorial/uiswing/) · [Oracle: Visual Guide to Layout Managers](https://docs.oracle.com/javase/tutorial/uiswing/layout/visual.html)

??? question "Question 16 — Term 201 — Q7(a)"
    **Exact question**

    What are layout managers? Mention the name of three layout managers available in Java Swing package.

    **Answer**

    A layout manager is an object that automatically determines the size and position of components in a container. It adapts the UI to resizing, fonts, look-and-feel and locale.

    Three common managers:

    ~~~text
    FlowLayout:   [A] [B] [C]  (wraps left-to-right)

    GridLayout:   [A] [B]
                  [C] [D]      (equal cells)

    BorderLayout:    [ NORTH ]
                  [W][CENTER][E]
                     [ SOUTH ]
    ~~~

    - **FlowLayout:** row of preferred-size components; wraps when needed.
    - **GridLayout:** equal-sized rectangular cells.
    - **BorderLayout:** NORTH, SOUTH, EAST, WEST and CENTER regions.

    Other Swing-compatible AWT managers include CardLayout and GridBagLayout; Swing also provides BoxLayout and GroupLayout.

    !!! tip "30-second revision"
        Layout manager auto-sizes/positions controls. Flow=row/wrap; Grid=equal cells; Border=five regions.

    **Sources:** [Oracle: Visual Guide to Layout Managers](https://docs.oracle.com/javase/tutorial/uiswing/layout/visual.html)

??? question "Question 17 — Term 201 — Q7(b)"
    **Exact question**

    What are the three components in the delegation event model? Explain.

    **Answer**

    The three components of the delegation event model are:

    1. **Event source:** object whose state/action generates the event, such as a JButton.
    2. **Event object:** carries event details, such as ActionEvent, MouseEvent or KeyEvent.
    3. **Event listener:** object implementing the corresponding listener interface and registered with the source.

    ~~~java
    JButton button = new JButton("Save");          // source
    button.addActionListener(e -> save());          // listener; e is event object
    ~~~

    When clicked, the source constructs/fires an ActionEvent and invokes actionPerformed on registered ActionListeners.

    !!! tip "30-second revision"
        Three parts: source, event object, listener. Register listener with addXListener(); source then calls listener callback.

    **Sources:** [Oracle: Writing Event Listeners](https://docs.oracle.com/javase/tutorial/uiswing/events/)

??? question "Question 18 — Term 201 — Q7(c)"
    **Exact question**

    What is the relationship between an event-listener interface and an event-adapter class? How can a GUI component handle its own events?

    **Answer**

    An event-listener interface declares callback methods for a family of events. An event-adapter class implements that interface with empty method bodies. A programmer extends the adapter and overrides only the callbacks needed. Example: MouseAdapter implements MouseListener, MouseMotionListener and MouseWheelListener conveniences, so a subclass can override just mouseClicked.

    A GUI component can handle its own events by implementing the listener interface and registering itself:

    ~~~java
    class MyButton extends javax.swing.JButton
            implements java.awt.event.ActionListener {
        MyButton() {
            super("Click");
            addActionListener(this);
        }
        public void actionPerformed(java.awt.event.ActionEvent e) {
            setText("Clicked");
        }
    }
    ~~~

    Self-handling is possible, though a separate listener or lambda can give cleaner separation.

    !!! tip "30-second revision"
        Listener interface declares callbacks; adapter supplies empty versions. Self-handling = implements listener + addXListener(this).

    **Sources:** [Oracle: Writing Event Listeners](https://docs.oracle.com/javase/tutorial/uiswing/events/)

??? question "Question 19 — Term 211 — Q5(b)"
    **Exact question**

    Containers and components are two types of Java GUI elements. Using a suitable diagram explain those elements.

    **Answer**

    A **component** is a visible/interactable GUI element such as JButton, JLabel or JTextField. A **container** is a component that can contain other components and arrange them with a layout manager.

    ~~~mermaid
    flowchart TD
        GUI[GUI elements] --> C[Components]
        GUI --> N[Containers]
        C --> E[JButton / JLabel / JTextField]
        N --> T[Top-level: JFrame / JDialog]
        N --> I[Intermediate: JPanel / JScrollPane]
    ~~~

    Example:

    ~~~java
    JFrame frame = new JFrame();       // top-level container
    JPanel panel = new JPanel();       // intermediate container
    panel.add(new JButton("Save"));    // component inside panel
    frame.add(panel);                  // panel inside frame
    ~~~

    Strictly, containers are also components in the AWT class hierarchy, but their special role is holding and laying out children.

    !!! tip "30-second revision"
        Component = control/display object. Container = component that holds and lays out others. JFrame top-level; JPanel intermediate.

    **Sources:** [Oracle: Swing Tutorial](https://docs.oracle.com/javase/tutorial/uiswing/) · [Oracle: Visual Guide to Layout Managers](https://docs.oracle.com/javase/tutorial/uiswing/layout/visual.html)

??? question "Question 20 — Term 211 — Q5(c)"
    **Exact question**

    What are layout managers? Mention the name of three layout managers available in Java with proper diagram.

    **Answer**

    A layout manager is an object that automatically determines the size and position of components in a container. It adapts the UI to resizing, fonts, look-and-feel and locale.

    Three common managers:

    ~~~text
    FlowLayout:   [A] [B] [C]  (wraps left-to-right)

    GridLayout:   [A] [B]
                  [C] [D]      (equal cells)

    BorderLayout:    [ NORTH ]
                  [W][CENTER][E]
                     [ SOUTH ]
    ~~~

    - **FlowLayout:** row of preferred-size components; wraps when needed.
    - **GridLayout:** equal-sized rectangular cells.
    - **BorderLayout:** NORTH, SOUTH, EAST, WEST and CENTER regions.

    Other Swing-compatible AWT managers include CardLayout and GridBagLayout; Swing also provides BoxLayout and GroupLayout.

    !!! tip "30-second revision"
        Layout manager auto-sizes/positions controls. Flow=row/wrap; Grid=equal cells; Border=five regions.

    **Sources:** [Oracle: Visual Guide to Layout Managers](https://docs.oracle.com/javase/tutorial/uiswing/layout/visual.html)

??? question "Question 21 — Term 211 — Q7(b)"
    **Exact question**

    Write a Java Program that draws a rectangle, an oval, a string and a line.

    **Answer**

    ~~~java
    import javax.swing.*;
    import java.awt.*;

    public class DrawingPanel extends JPanel {
        @Override
        protected void paintComponent(Graphics g) {
            super.paintComponent(g);
            g.drawRect(20, 20, 100, 60);
            g.drawOval(150, 20, 100, 60);
            g.drawString("Java Graphics", 20, 120);
            g.drawLine(20, 140, 250, 140);
        }

        public static void main(String[] args) {
            SwingUtilities.invokeLater(() -> {
                JFrame f = new JFrame("Drawing");
                f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                f.add(new DrawingPanel());
                f.setSize(300, 220);
                f.setLocationRelativeTo(null);
                f.setVisible(true);
            });
        }
    }
    ~~~

    For Swing custom painting, override JPanel.paintComponent and call super.paintComponent(g) before drawing.

    !!! tip "30-second revision"
        Swing drawing: subclass JPanel, override paintComponent(Graphics), call super, then drawRect/drawOval/drawString/drawLine.

    **Sources:** [Oracle: Swing Tutorial](https://docs.oracle.com/javase/tutorial/uiswing/)

??? question "Question 22 — Term 211 — Q7(c)"
    **Exact question**

    What is an event in event-based programming? Discuss the types of events.

    **Answer**

    An event is an object describing a change or user action generated by a source, such as clicking a button or pressing a key. Events are commonly grouped as:

    1. **Semantic/high-level events:** describe meaningful component actions—ActionEvent, ItemEvent, AdjustmentEvent, TextEvent.
    2. **Low-level events:** describe direct input/component/window changes—KeyEvent, MouseEvent, FocusEvent, WindowEvent, ComponentEvent, ContainerEvent.

    Another useful grouping is user events (mouse/key/action), window/component events, focus events and model/state-change events. The source fires the event and registered listener methods receive it.

    !!! tip "30-second revision"
        Event = action/state-change object. High-level: Action/Item; low-level: Mouse/Key/Focus/Window/Component.

    **Sources:** [Oracle: Writing Event Listeners](https://docs.oracle.com/javase/tutorial/uiswing/events/)

# Chapter 9: Network, Servlet and JSP Programming

??? question "Question 1 — Term 151 — Q7(a)"
    **Exact question**

    Distinguish between TCP and UDP. Explain the two types of TCP sockets.

    **Answer**

    | TCP | UDP |
    |---|---|
    | Connection-oriented | Connectionless |
    | Reliable, ordered byte stream | Best-effort independent datagrams |
    | Retransmission, flow and congestion control | No built-in delivery/order guarantee |
    | More overhead | Lower overhead/latency |
    | Used for web, file transfer, email | Used for DNS, streaming, games, discovery |

    Two types of TCP socket in Java:

    1. **Client/communication socket (Socket):** initiates a connection to a server and exchanges data through input/output streams.
    2. **Server/listening socket (ServerSocket):** binds to a port and waits with accept(); each accepted connection produces a Socket for communication.

    UDP uses DatagramSocket and DatagramPacket instead of a connected byte stream.

    !!! tip "30-second revision"
        TCP reliable ordered connection; UDP fast best-effort datagrams. TCP Java types: ServerSocket listens/accepts; Socket communicates.

    **Sources:** [Oracle: Custom Networking](https://docs.oracle.com/javase/tutorial/networking/)

??? question "Question 2 — Term 151 — Q7(b)"
    **Exact question**

    What is Remote Method Invocation? What is difference between an Applet and a Servlet? Explain the life cycle of an Applet.

    **Answer**

    **RMI (Remote Method Invocation)** lets an object in one JVM invoke methods on a remote object in another JVM, using a remote interface, stub/proxy, registry and serialized arguments/results.

    | Applet | Servlet |
    |---|---|
    | Legacy client-side browser program | Server-side Java web component |
    | Extends Applet/JApplet | Extends HttpServlet or implements Servlet |
    | GUI and restricted client environment | Processes requests and produces responses |
    | Lifecycle: init, start, paint, stop, destroy | Lifecycle: init, service/doGet/doPost, destroy |

    Applet lifecycle: **init()** once on load; **start()** when active; **paint()** whenever redrawing is needed; **stop()** when inactive; **destroy()** before unloading. Applets are obsolete, but this is the historical exam answer.

    !!! tip "30-second revision"
        RMI invokes remote-object methods across JVMs. Applet runs legacy client GUI; servlet runs on server. Applet: init→start→paint→stop→destroy.

    **Sources:** [Oracle: RMI](https://docs.oracle.com/javase/tutorial/rmi/) · [Oracle: Java Applets (legacy)](https://docs.oracle.com/javase/tutorial/deployment/applet/) · [Jakarta: Servlet, Faces and Server Pages](https://jakarta.ee/learn/specification-guides/servlet-faces-and-server-pages-explained/)

??? question "Question 3 — Term 151 — Q7(c)"
    **Exact question**

    What is the difference between session and cookie? How is the JSP request handled?

    **Answer**

    | Session | Cookie |
    |---|---|
    | State mainly stored on server | Small name/value data stored in browser |
    | Identified by session ID, often in JSESSIONID cookie | Sent with matching HTTP requests |
    | Can store Java objects | Stores text values and has size/security limits |
    | Ends by timeout/invalidation | Expires by Max-Age/Expires or deletion |
    | Better for sensitive state, though session ID must be protected | User may disable/modify it; use Secure, HttpOnly and SameSite appropriately |

    JSP request handling:

    1. Browser requests a **.jsp** resource.
    2. Web/JSP container translates it into a servlet if needed.
    3. Container compiles and loads the generated servlet, then initializes it.
    4. For each request it invokes the generated service method with request/response objects.
    5. JSP expressions/tags produce dynamic output, which the container returns as the HTTP response.

    Later requests normally reuse the compiled servlet until the JSP changes.

    !!! tip "30-second revision"
        Session = server-side state linked by ID; cookie = client-stored text. JSP is translated/compiled into a servlet, then service handles requests.

    **Sources:** [Jakarta: Servlet, Faces and Server Pages](https://jakarta.ee/learn/specification-guides/servlet-faces-and-server-pages-explained/) · [Jakarta Server Pages Specification](https://jakarta.ee/specifications/pages/4.0/jakarta-server-pages-spec-4.0)

??? question "Question 4 — Term 171 — Q7(c)"
    **Exact question**

    What are the advantages and disadvantages of using cookies in Servlet? How are the JSP requests handled?

    **Answer**

    Advantages of cookies in Servlets:

    - maintain identity/preferences across stateless HTTP requests;
    - simple client-side persistence;
    - can reduce server storage for non-sensitive small data;
    - support expiry and path/domain scope.

    Disadvantages:

    - small size and limited number;
    - sent repeatedly, adding request overhead;
    - users may disable/delete/modify them;
    - privacy and tracking concerns;
    - insecure if sensitive data is stored directly; theft of a session cookie can enable hijacking.

    Use Secure, HttpOnly, SameSite, short lifetime and server-side validation for session cookies. A JSP request is mapped to the JSP container, translated and compiled into a servlet if necessary, then the generated service method processes request/response objects and returns dynamic output.

    !!! tip "30-second revision"
        Cookie pros: persistence, simplicity, preferences. Cons: size, overhead, tampering/privacy/security. JSP → generated servlet → service(request,response).

    **Sources:** [Jakarta: Servlet, Faces and Server Pages](https://jakarta.ee/learn/specification-guides/servlet-faces-and-server-pages-explained/) · [Jakarta Server Pages Specification](https://jakarta.ee/specifications/pages/4.0/jakarta-server-pages-spec-4.0)

??? question "Question 5 — Term 181 — Q7(b)"
    **Exact question**

    What is the difference between session and cookies in JSP? How is a JSP request handled?

    **Answer**

    | Session | Cookie |
    |---|---|
    | State mainly stored on server | Small name/value data stored in browser |
    | Identified by session ID, often in JSESSIONID cookie | Sent with matching HTTP requests |
    | Can store Java objects | Stores text values and has size/security limits |
    | Ends by timeout/invalidation | Expires by Max-Age/Expires or deletion |
    | Better for sensitive state, though session ID must be protected | User may disable/modify it; use Secure, HttpOnly and SameSite appropriately |

    JSP request handling:

    1. Browser requests a **.jsp** resource.
    2. Web/JSP container translates it into a servlet if needed.
    3. Container compiles and loads the generated servlet, then initializes it.
    4. For each request it invokes the generated service method with request/response objects.
    5. JSP expressions/tags produce dynamic output, which the container returns as the HTTP response.

    Later requests normally reuse the compiled servlet until the JSP changes.

    !!! tip "30-second revision"
        Session = server-side state linked by ID; cookie = client-stored text. JSP is translated/compiled into a servlet, then service handles requests.

    **Sources:** [Jakarta: Servlet, Faces and Server Pages](https://jakarta.ee/learn/specification-guides/servlet-faces-and-server-pages-explained/) · [Jakarta Server Pages Specification](https://jakarta.ee/specifications/pages/4.0/jakarta-server-pages-spec-4.0)

??? question "Question 6 — Term 201 — Q7(d)"
    **Exact question**

    Write short notes on the following terminologies associated with Java networking:

       1. Protocol
       2. Socket
       3. Inet Address
       4. Datagram packet

    **Answer**

    1. **Protocol:** agreed rules and message formats governing communication, such as TCP, UDP or HTTP.
    2. **Socket:** software endpoint of communication, identified by networking parameters such as address, protocol and port. Java TCP clients use Socket; servers listen with ServerSocket.
    3. **InetAddress:** Java class representing an IP address and optionally its host name; it performs address/host lookup but contains no port.
    4. **DatagramPacket:** container for one UDP datagram's data plus addressing information. DatagramSocket sends and receives it.

    Example flow: create a DatagramPacket with a byte buffer, destination InetAddress and port, then send it through a DatagramSocket. UDP preserves message boundaries but does not guarantee delivery or order.

    !!! tip "30-second revision"
        Protocol=rules; Socket=communication endpoint; InetAddress=IP/host identity; DatagramPacket=one UDP message + address/port.

    **Sources:** [Oracle: Custom Networking](https://docs.oracle.com/javase/tutorial/networking/)

??? question "Question 7 — Term 211 — Q7(a)"
    **Exact question**

    Write a short note on Java Socket Programming.

    **Answer**

    Java socket programming enables network communication between programs.

    **TCP server:**

    ~~~java
    try (java.net.ServerSocket server = new java.net.ServerSocket(5000);
         java.net.Socket client = server.accept();
         java.io.PrintWriter out = new java.io.PrintWriter(client.getOutputStream(), true)) {
        out.println("Hello client");
    }
    ~~~

    **TCP client:**

    ~~~java
    try (java.net.Socket socket = new java.net.Socket("localhost", 5000);
         java.io.BufferedReader in = new java.io.BufferedReader(
             new java.io.InputStreamReader(socket.getInputStream()))) {
        System.out.println(in.readLine());
    }
    ~~~

    ServerSocket listens and accept returns a connected Socket. Socket streams exchange bytes. UDP instead uses DatagramSocket/DatagramPacket. Real programs handle IOException, timeouts, concurrency, protocols, character encoding and security.

    !!! tip "30-second revision"
        TCP: ServerSocket(port)→accept()→Socket streams; client new Socket(host,port). UDP uses DatagramSocket and DatagramPacket.

    **Sources:** [Oracle: Custom Networking](https://docs.oracle.com/javase/tutorial/networking/)

---

# Final Ultra-Quick Checklist

- [ ] OOP vs procedural; Java features; JDK/JRE/JVM and bytecode flow
- [ ] Classes, objects, constructors, static/final, getters/setters
- [ ] Inheritance, encapsulation, polymorphism, overloading/overriding, casting
- [ ] Abstract classes, interfaces and multiple inheritance through interfaces
- [ ] Access modifiers, packages, aggregation and basic object modelling
- [ ] Checked/unchecked exceptions, Error vs Exception, five keywords and programs
- [ ] Byte/character streams, random files and core file programs
- [ ] Swing/AWT, layout managers, events/listeners and GUI programs
- [ ] TCP/UDP, sockets, RMI, servlet/JSP request flow, sessions and cookies

**Coverage:** 142 exact questions from Terms 151, 161, 171, 181, 201 and 211. Term 191 theory was unavailable in the supplied source.
