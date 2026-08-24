# CSE2137 — OOP All Term Question

## All Previous-Term Questions, Chapter-Wise

**Bangladesh Open University — B.Sc. in CSE, 2nd Year 1st Semester**

### Included Theory Terms

| Term | Status |
|---|---|
| 151 | Included |
| 161 | Included |
| 171 | Included |
| 181 | Included |
| 191 | **Theory paper was not present in the supplied 191 Term source** |
| 201 | Included |
| 211 | Included |

> The questions below are transcribed from the previous question papers and arranged according to the handbook topics. Each sub-question is placed under its closest primary chapter so that no question is omitted. Mixed questions retain their complete wording.

---

# Chapter 1: Introduction and Java Fundamentals

## OOP vs. Procedural, Sequential or Structural Programming

1. **[Term 151 — Q1(a)]** Compare Object Oriented Programming (OOP) with sequential programming.
2. **[Term 161 — Q1(a)]** Compare Object oriented programming with sequential programming.
3. **[Term 181 — Q1(a)]** Compare and contrast object oriented programming with procedural programming.
4. **[Term 201 — Q1(a)]** What is the difference between Object-Oriented Programming and Structural Programming?

## Java Features, Platform and Execution

5. **[Term 151 — Q1(b)]** Briefly explain various features of Java.
6. **[Term 151 — Q1(c)]** What is Java Runtime Environment (JRE)?
7. **[Term 151 — Q1(d)]** What do you understand by JVM? Briefly explain the function of JVM.
8. **[Term 151 — Q3(a)]** Java programming is to be compiled first and then to be interpreted for execution. Choose true or false in respect to the said statement and justify your answer.
9. **[Term 161 — Q1(c)]** Discuss the following program line-by-line and understand the unique features that constitute the program:

   ```java
   public class Welcome
   {
       public static void main(String args[])
       {
           System.out.println("Welcome");
       }
   }
   ```

10. **[Term 161 — Q1(d)]** What do you understand by JVM? Explain the function of JVM.
11. **[Term 161 — Q4(a)]** Java program is to be compiled first and then to be interpreted for execution. True or false? Justify your answer.
12. **[Term 161 — Q4(b)]** Write any four names of Java system packages with their classes/contents.
13. **[Term 171 — Q1(a)]** What is Object Oriented Programming (OOP)? Explain the following two features of Java: Platform independent and Multithread.
14. **[Term 181 — Q2(a)]** What makes Java platform independent is its compilation and execution process. Explain how these processes make Java platform independent.
15. **[Term 201 — Q2(c)]** Write a Java Program to take the student name and ID as inputs from the keyboard and display those on the console. You should prompt the user to provide the student-name and ID. Display the name and ID in a single line as follows:

   ```text
   The ID is “123456” for the student “Mustafiz”.
   ```

   Here, Mustafiz and 123456 are the inputs provided by the user. Notice the double-quotes; your output should contain those double-quotes.

16. **[Term 201 — Q4(a)]** “Java programming is to be compiled first and then to be interpreted for execution.” Is this statement true or false? Justify your answer with proper description.
17. **[Term 211 — Q2(a)]** What is the difference between JDK, JRE, and JVM?
18. **[Term 211 — Q4(a)]** “Java programming is to be compiled first and then to be interpreted for execution”. Is this statement true or false? Justify your answer with proper description.

## Data Types, Arrays, Strings and Basic Code Analysis

19. **[Term 151 — Q3(b)]** What are the data types supported by Java? What are Autoboxing and Unboxing?
20. **[Term 161 — Q2(d)]** Explain array implementation in Java with example.
21. **[Term 171 — Q1(c)]** What is Typecasting? What will be the output of the following code segment?

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

22. **[Term 201 — Q3(c)]** To compare two strings, will you use `==` or `equals()` methods? Briefly explain the reason. Explain with example the following String methods used in Java:

   1. `indexOf()`
   2. `charAt()`
   3. `endsWith()`
   4. `contain()`

23. **[Term 201 — Q5(d)]** What will be the output of the below code?

   ```java
   public class A {
       public static void main(String[] args)
       {
           if (true)
               break;
       }
   }
   ```

24. **[Term 211 — Q6(b)]** To compare two strings, will you use `==` or `equals()` methods? Briefly explain the reason. Explain with example the following String methods used in Java:

   1. `indexOf()`
   2. `charAt()`
   3. `endsWith()`
   4. `contain()`

## Multithreading, Collections and Garbage Collection

25. **[Term 151 — Q3(e)]** What do you mean by garbage collection?
26. **[Term 151 — Q6(a)]** What are the advantages of multithreading over process based multitasking?
27. **[Term 171 — Q6(a)]** What are advantages of multithreading over process based multitasking?
28. **[Term 171 — Q6(b)]** Briefly describe the basic interfaces of Java Collection Framework.
29. **[Term 171 — Q6(c)]** What is the purpose of garbage collection in Java and when is it used?
30. **[Term 181 — Q7(c)]** What is multithreading in Java? Discuss the advantages of multithreading over process based multitasking.
31. **[Term 201 — Q5(a)]** What do you understand by Collection Framework in Java? Write some differences between List, Set, and Map in the collection hierarchy.
32. **[Term 201 — Q6(b)]** What are the advantages of multithreading over process based multitasking?

---

# Chapter 2: Classes, Objects, Methods and Constructors

## Classes and Objects

1. **[Term 151 — Q2(a)]** Define class and object with example.
2. **[Term 161 — Q1(b)]** What do you mean by classes and objects?
3. **[Term 171 — Q2(b)]** Classes and objects are fundamental building blocks of OOP. What do you know about these? Use examples to elaborate.
4. **[Term 181 — Q1(b)]** What are classes and objects? Explain it with an example.
5. **[Term 211 — Q1(a)]** Classes and objects are fundamental building blocks of OOP. What do you know about these? Use examples to elaborate.

## Constructors, Static and Final Members

6. **[Term 151 — Q2(b)]** Distinguish between static and non-static nested classes. What are the properties of static method, static block and final variable?
7. **[Term 161 — Q2(a)]** What is constructor? What are its special properties?
8. **[Term 161 — Q2(c)]** Declare a class called `Coordinate` to have 3-dimensional Cartesian coordinates. Define the following methods:

   1. Constructor(s)
   2. `add_coordinates` to add two Coordinate objects and produce a resultant object.

   Generate and handle exception if all three coordinates of the resultant Coordinate object are zero. Define method `main` to show use of the above methods.

9. **[Term 161 — Q4(d)]** What are final class, final function and final variable in Java?
10. **[Term 171 — Q2(a)]** Constructors are special methods used for object creation. What are the characteristics that make them different than other regular methods?
11. **[Term 171 — Q3(b)]** In a program written in an OOP, several objects may communicate/interact with each other using messages and methods. Methods may have arguments. Explain methods and arguments with an example from Java.
12. **[Term 171 — Q4(a)]** You have a Java class named `Student` with four attributes/variables—name, CGPA, department, and number_of_siblings. It also has the default constructor method with no parameter, and methods to set name and get name from the objects of this class. Show the class declaration along with the variables and the methods mentioned above.
13. **[Term 171 — Q4(b)]** You have a class named `StudentHandler` which uses the Student class in question 5.a. This class creates new students if needed and keeps track of them. Show the code that this class will use to create a new student whose name is Nazmul. Please remember that the Student class only has a default constructor that does not take any parameter.
14. **[Term 181 — Q2(b)]** Define accessors (getters), mutators (setters) and constructors in your own words. How is constructor different than other methods?
15. **[Term 181 — Q3(c)]** Class A has the following static char variable called direction:

   ```java
   static char direction = 'E';
   ```

   There are two objects, `a1` and `b1`, created from this class. `b1` issues the following statement:

   ```java
   direction = 'S';
   ```

   Now, if both `a1` and `b1` print the value of `direction`, what will be shown in each print statement and why?

16. **[Term 181 — Q4(b)]** In your class called `BankAccount`, you have the following variables—currentBalance, name, numberOfChildren. You also have a constant to keep fixed interest rate. Show the class declaration along with these variables and the constant.
17. **[Term 201 — Q1(b)]** Define accessors (getters), mutators (setters) and constructors in your own word.
18. **[Term 201 — Q1(c)]** Answer the following questions using the class diagram for an Animal class shown below:

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

19. **[Term 201 — Q1(d)]** Explain why the constructor is considered as a special type of method in OOP.
20. **[Term 201 — Q3(d)]** Create a class named `Employee` that includes three instance variables—a first name (type String), a last name (type String), and a monthly salary (double). Provide a constructor that initializes the three instance variables. Provide a set and get method for each instance variable. If the monthly salary is not positive, do not set its value. Write a test app named `EmployeeTest` that demonstrates class Employee’s capabilities. Create two Employee objects and display each object’s yearly salary. Then give each Employee a 10% raise and display each Employee’s yearly salary again.
21. **[Term 211 — Q1(c)]** What is the purpose of Static Methods and Variables?
22. **[Term 211 — Q2(b)]** Constructors is a special methods used for object creation. What are the characteristics that make them different than other regular methods?
23. **[Term 211 — Q5(a)]** How can Constructor chaining be done by using the `super` keyword?

---

# Chapter 3: Inheritance, Polymorphism, Overloading, Overriding and Casting

1. **[Term 151 — Q2(c)]** Explain function overriding and overloading in Java with examples.
2. **[Term 151 — Q3(c)]** Does Java support multiple inheritances where each class is able to extend multiple classes?
3. **[Term 161 — Q2(b)]** Distinguish between method overloading and method overriding.
4. **[Term 161 — Q4(c)]** Write a Java program for the following hierarchical inheritance block diagram:

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

5. **[Term 171 — Q1(b)]** Inheritance, Encapsulation and Polymorphism are three key attributes of Object Oriented Programming (OOP). Discuss these attributes in your own words. Include benefits of these attributes in your answer.
6. **[Term 171 — Q1(c)]** What is Typecasting? What will be the output of the given `Simple` class code segment? *(The complete code is listed in Chapter 1.)*
7. **[Term 171 — Q2(c)]** Explain function overriding and overloading in Java with example.
8. **[Term 171 — Q3(c)]** What is aggregation in Java? Why and when should we use aggregation?
9. **[Term 181 — Q1(c)]** Explain inheritance, encapsulation and polymorphism with examples.
10. **[Term 181 — Q2(c)]** What are method overloading and method overriding? Explain with example.
11. **[Term 201 — Q3(a)]** What is inheritance in OOP? Does Java support multiple inheritances?
12. **[Term 201 — Q3(b)]** What are the main features of OOPs? Write a Java program for the following hierarchical inheritance block diagram:

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

13. **[Term 201 — Q4(b)]** Why do you use Upcasting and Downcasting in Java? Explain with examples.
14. **[Term 211 — Q1(b)]** Inheritance, encapsulation and polymorphism are three attributes of Object Oriented Programming (OOP). Discuss these attributes in your own words.
15. **[Term 211 — Q2(c)]** Explain methods overriding and overloading in Java with example.
16. **[Term 211 — Q4(c)]** Why do use upcasting and downcasting in Java? Explain with examples.

---

# Chapter 4: Interfaces and Abstract Classes

1. **[Term 151 — Q3(d)]** Distinguish between an interface and an abstract class with necessary example.
2. **[Term 151 — Q5(b)]** Declare an abstract class called `Shape`, which has three subclasses—`Triangle`, `Rectangle` and `Circle`. Define one method `area()` in the abstract class and override this `area()` in these three subclasses to calculate for specific objects; for example, `area()` of Triangle subclass should calculate area of triangle, and similarly for Rectangle and Circle.
3. **[Term 161 — Q3(c)]** What are abstract methods? Describe the circumstances in which an abstract method would be appropriate.
4. **[Term 171 — Q3(a)]** Abstract classes and interfaces are two very important items we use in developing programs in OOP. What are they and what benefits do they provide us?
5. **[Term 181 — Q3(a)]** Explain what is meant by an `abstract` class and what circumstance necessitates a class being abstract.
6. **[Term 181 — Q3(b)]** Write the codes for implementations of the Employee and Person classes.
7. **[Term 181 — Q5(a)]** What are Abstract classes and Interfaces? What benefits do they provide? Show how to declare abstract classes and interfaces in Java.
8. **[Term 201 — Q2(a)]** Abstract classes and interfaces are two very important items we use in developing programs in OOP. What are they and what benefits do they provide?
9. **[Term 201 — Q2(b)]** Can we achieve multiple inheritance by using interface? Explain with example. What is the difference between multiple and multilevel inheritance?
10. **[Term 211 — Q4(b)]** Why is Multiple Inheritance not supported in Java? How Interface is helpful to resolve this matter?

---

# Chapter 5: OOP Design, Encapsulation, Access and Packages

1. **[Term 151 — Q2(d)]** What is encapsulation?
2. **[Term 151 — Q5(c)]** Discuss public, private, protected and default access modifier with example.
3. **[Term 161 — Q6(c)]** Discuss public, private, protected and default access modifier with example.
4. **[Term 171 — Q5(b)]** What are the advantages of Java package? Explain the following four different types of Java access modifier:

   1. private
   2. default
   3. protected
   4. public

5. **[Term 181 — Q6(b)]** You are developing an application for your university for student registration of courses each semester. Identify the objects involved in this application. Identify each object’s properties and some of the possible methods they may have. You do not have to write any Java code; simply show the objects/entities, their attributes/properties and method signatures they may have.
6. **[Term 181 — Q6(c)]** Consider the following code:

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

7. **[Term 211 — Q3(a)]** How to declare a Package in Java? What are the advantages of Packages in Java?

---

# Chapter 6: Exception Handling and Errors

1. **[Term 151 — Q4(a)]** Explain exception handling in Java. Write a program that generates custom exception if any integer value given from its command line arguments is negative.
2. **[Term 151 — Q4(b)]** Explain the importance of exception handling in Java. Which keywords are used to handle exceptions? Write a program to explain the use of these keywords.
3. **[Term 161 — Q3(a)]** Explain exception handling in Java. Write a program that generates custom exception if any integer value given from its command line arguments is negative.
4. **[Term 161 — Q3(b)]** Write a Java program to check the divide-by-zero error of the modulo of two integers using exception handling mechanism.
5. **[Term 161 — Q3(d)]** Which keywords are used to handle exceptions? Write a program to explain the use of these keywords.
6. **[Term 161 — Q7(d)]** What is error? Explain any three types of errors. How can we handle run time errors in Java?
7. **[Term 171 — Q4(c)]** Exceptions are problems that may happen in a code. In Java, exceptions are categorized as Runtime Exceptions and Checked Exceptions. Explain these two types.
8. **[Term 171 — Q5(a)]** What is difference between Exception and Error in Java? Describe the purpose of the following exception handling keywords: `throw`, `throws`, `try-catch` and `finally`.
9. **[Term 171 — Q5(c)]** Find errors in the following Java class:

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

10. **[Term 181 — Q4(a)]** When you write programs in Java, you must be concerned about exceptions. What are exceptions? When answering this question, mention some scenarios where exceptions may happen.
11. **[Term 181 — Q4(c)]** In your Java code, you have the following line to open a file to read the content:

    ```java
    BufferedReader reader = new BufferedReader(new FileReader(filename));
    ```

    You know very well that exceptions may be thrown here. Mention reasons you think exceptions may be thrown when trying to read a file. Show in code how you would handle the exception/s in this case.

12. **[Term 201 — Q4(c)]** What does exception mean in Java? Write a Java program to enter two numbers and calculate the quotient. Use exception handling mechanism to take care of the divide by zero situation.
13. **[Term 201 — Q6(a)]** What is the difference between Exception and Error in Java?
14. **[Term 201 — Q6(d)]** What is the difference between checked and unchecked exceptions in Java? Give ONE (1) example of each of these types of exceptions.
15. **[Term 211 — Q3(b)]** Differentiate between Exception and Error in Java. Write a Java Program to check the divide-by-zero error of the modulo of two integers using exception handling mechanism.
16. **[Term 211 — Q3(c)]** Which keywords are used to handle exceptions? Write a program to explain the use of these keywords.
17. **[Term 211 — Q6(a)]** How many types of Exceptions can occur in a Java program? Describe with examples.

---

# Chapter 7: I/O Programming, Streams and Files

1. **[Term 151 — Q4(c)]** Write a program that counts the number of words in a text file. Consider the file name is passed as a command line argument. The program should check whether the file exists or not. The words in the file are separated by white space character.
2. **[Term 161 — Q5(a)]** What is Stream? Distinguish between InputStream class and Reader Class.
3. **[Term 161 — Q5(b)]** What is random access file? How is it different from a sequential file?
4. **[Term 161 — Q5(c)]** Write a program to read the integer values of file and save them in another file after sorting.
5. **[Term 161 — Q5(d)]** Why do you require files to store data?
6. **[Term 171 — Q7(d)]** Distinguish between Java InputStream and OutputStream classes. Also explain their underlying useful methods.
7. **[Term 201 — Q5(b)]** What is a stream? Briefly explain the three streams automatically created in Java.
8. **[Term 201 — Q5(c)]** Assume that you have a file named `outFile.txt` in your C drive. Write a program using the `java.io.FileOutputStream` class to write the following sentence in that file:

   ```text
   Java programming is awesome
   ```

---

# Chapter 8: Event-Based, Applet and GUI Programming

1. **[Term 151 — Q5(a)]** What is the relationship between an event-listener interface and an event-adapter class? How can a GUI component handle its own events?
2. **[Term 151 — Q6(b)]** Write a program to have a GUI based simple calculator in a frame supporting addition and subtraction. There are buttons for 0 to 9 digits and for arithmetic operations. Select layout of your choice.
3. **[Term 151 — Q6(c)]** Write a code segment of a simple JFrame with a JLabel and JButton.
4. **[Term 161 — Q6(a)]** Draw the block diagram of applet class inherited properties from a long chain of class. Explain briefly the life cycle of an applet.
5. **[Term 161 — Q6(b)]** Write an applet program that draws a rectangle, an oval, a string and a line on the applet.
6. **[Term 161 — Q7(a)]** Describe the purpose of any six Swing components.
7. **[Term 161 — Q7(b)]** What are AWT and GUI?
8. **[Term 161 — Q7(c)]** Write a complete program to have 3 Buttons in a frame having exit capabilities. Buttons are to be added in the frame as per the layout of your choice. Count and display number of times each Button is clicked.
9. **[Term 171 — Q7(a)]** What is SWING library used for in Java? What is the base package that you have to import for SWING classes?
10. **[Term 171 — Q7(b)]** What are layout managers? Name three of the Layout managers SWING has.
11. **[Term 181 — Q5(b)]** What is an event in event-based programming? Discuss the types of events.
12. **[Term 181 — Q5(c)]** Discuss the benefits of delegation event model in programming.
13. **[Term 181 — Q6(a)]** What does GUI stand for? Why is it important?
14. **[Term 181 — Q7(a)]** What are layout managers? Mention the name of three layout manager available in Java Swing package.
15. **[Term 201 — Q6(c)]** Containers and components are two types of Java GUI elements. Using a suitable diagram explain those elements.
16. **[Term 201 — Q7(a)]** What are layout managers? Mention the name of three layout managers available in Java Swing package.
17. **[Term 201 — Q7(b)]** What are the three components in the delegation event model? Explain.
18. **[Term 201 — Q7(c)]** What is the relationship between an event-listener interface and an event-adapter class? How can a GUI component handle its own events?
19. **[Term 211 — Q5(b)]** Containers and components are two types of Java GUI elements. Using a suitable diagram explain those elements.
20. **[Term 211 — Q5(c)]** What are layout managers? Mention the name of three layout managers available in Java with proper diagram.
21. **[Term 211 — Q7(b)]** Write a Java Program that draws a rectangle, an oval, a string and a line.
22. **[Term 211 — Q7(c)]** What is an event in event-based programming? Discuss the types of events.

---

# Chapter 9: Network, Servlet and JSP Programming

1. **[Term 151 — Q7(a)]** Distinguish between TCP and UDP. Explain the two types of TCP sockets.
2. **[Term 151 — Q7(b)]** What is Remote Method Invocation? What is difference between an Applet and a Servlet? Explain the life cycle of an Applet.
3. **[Term 151 — Q7(c)]** What is the difference between session and cookie? How is the JSP request handled?
4. **[Term 171 — Q7(c)]** What are the advantages and disadvantages of using cookies in Servlet? How are the JSP requests handled?
5. **[Term 181 — Q7(b)]** What is the difference between session and cookies in JSP? How is a JSP request handled?
6. **[Term 201 — Q7(d)]** Write short notes on the following terminologies associated with Java networking:

   1. Protocol
   2. Socket
   3. Inet Address
   4. Datagram packet

7. **[Term 211 — Q7(a)]** Write a short note on Java Socket Programming.

---

# Quick Term Coverage Index

| Term | Theory questions covered |
|---|---:|
| 151 | Q1–Q7, all subparts |
| 161 | Q1–Q7, all subparts |
| 171 | Q1–Q7, all subparts |
| 181 | Q1–Q7, all subparts |
| 191 | Theory paper unavailable in supplied source |
| 201 | Q1–Q7, all subparts |
| 211 | Q1–Q7, all subparts |

## Important Note

- Questions are organized by topic, not by their original paper order.
- The **Term + Question reference** beside every item lets you locate it in the original paper.
- A few source questions contain grammatical or numbering inconsistencies; those have been preserved instead of silently replacing them with new questions.
