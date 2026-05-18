# CSE2137 — Object Oriented Programming

**Bangladesh Open University — School of Science and Technology**
**B. Sc in Computer Science and Engineering Program — 2nd Year 1st Semester**

> **General instruction (all terms):** Answer any 5 (five) questions. The figures in the right margin indicate the full marks. All portions of each question must be answered sequentially.
> **Time:** 3 hours | **Total Marks:** 5×14 = 70

---

## 151 Term (Jan – Jun 2015)

**1.**
(a) Compare Object Oriented Programming (OOP) with sequential programming.   `4`
(b) Briefly explain various features of Java.   `3`
(c) What is Java Runtime Environment (JRE)?   `3`
(d) What do you understand by JVM? Briefly explain the function of JVM.   `4`

**2.**
(a) Define class and object with example.   `4`
(b) Distinguish between static and non-static nested classes. What are the properties of static method, static block and final variable?   `4`
(c) Explain function overriding and overloading in Java with examples.   `4`
(d) What is encapsulation?   `2`

**3.**
(a) Java programming is to be compiled first and then to be interpreted for execution. Choose true or false in respect to the said statement and justify your answer.   `3`
(b) What are the data types supported by Java. What is Autoboxing and Unboxing?   `4`
(c) Does Java support multiple inheritances where each class is able to extend multiple classes?   `3`
(d) Distinguish between an interface and an abstract class with necessary example.   `2`
(e) What do you mean by garbage collection?   `2`

**4.**
(a) Explain exception handling in Java. Write a program that generated custom exception if any integer value given from its command line arguments is negative.   `4`
(b) Explain the importance of execution handling in Java? Which keywords are used to handle exceptions? Write a program to explain the use of these keywords.   `6`
(c) Write a program that counts the number of words in a text file. Consider the file name is passed as a command line argument. The program should check the file exists or not. The words in the file are separated by white space character?   `4`

**5.**
(a) What is the relationship between an event-listener interface and an event-adapter class? How can a GUI component handle its own events?   `4`
(b) Describe abstract class called 'shape' which has three subclasses say 'Triangle', 'Rectangle' and 'Circle'. Define one method 'area ()' in the abstract class and override this 'area ()' in these three subclasses to calculate for specific object i.e. 'area ()' of 'Triangle' subclass should calculate area of triangle etc. Same for Rectangle and Circle.   `6`
(c) Discuss public, private, protected and default access modifier with example.   `4`

**6.**
(a) What are the advantages of multithreading over process based multitasking?   `4`
(b) Write a program to have a GUI based simple calculator in a frame supporting addition and subtraction. There are buttons for 0 to 9 digits and for arithmetic operations. Select layout of your choice.   `5`
(c) Write a code segment of a simple jframe with a jLabel and jButton.   `5`

**7.**
(a) Distinguish between TCP and UDP. Explain the two types of TCP sockets.   `5`
(b) What is Remote Method Invocation (RMI)? What is difference between an Applet and a Servlet? Explain the life cycle of an Applet.   `5`
(c) What is the difference between session and cookie? How are the JSP requests handled?   `4`

---

## 161 Term (Jan – Jun 2016)

> *Note: marks on the original scan are partially obscured by handwritten annotations; mark values are reproduced where clearly visible.*

**1.**
(a) Compare Object oriented programming with sequential programming.
(b) What do you mean by classes and objects?
(c) Discuss the following program line-by-line and understand the unique features that constitute the program
```java
public class Welcome
{
    public static void main(String args[])
    {
        System.out.println("Welcome");
    }
}
```
(d) What do you understand by JVM? Explain the function of JVM.

**2.**
(a) What is constructor? What are its special properties?
(b) Distinguish between method overloading and method overriding.
(c) Declare a class called Coordinate to have 3 dimensional Cartesian coordinates. Define following methods:
  (i) Constructor(s)
  (ii) add_coordinates to add two Coordinate objects and to produce resultant object. Generate and handle exception, if all three coordinates of the resultant Coordinate object are zero.
Define method main to show use of above methods.
(d) Explain array implementation in Java with example.

**3.**
(a) Explain exception handling in JAVA. Write a program that generates custom exception if any integer value given from its command line arguments is negative.
(b) Write a Java program to check the divide-by-zero error of the modulo of two integers using exception handing mechanism.
(c) What are abstract methods? Describe the circumstances in which an abstract method would be appropriate.
(d) Which key words are used to handle exceptions? Write a program to explain the use of these keywords.

**4.**
(a) Java program is to be compiled first and then to be interpreted for execution. True or false? Justify your answer.
(b) Write any four names of Java system packages with their classes/contents.
(c) Write a Java program for the following hierarchical inheritance block diagram.

> *Block diagram:*
> ```
>                    ┌─────────────────┐
>                    │     Human       │
>                    │  Name:          │
>                    │  Age:           │
>                    │  Nationality:   │
>                    │  Think();       │
>                    │  Walk();        │
>                    └────────┬────────┘
>                  ┌──────────┴──────────┐
>     ┌────────────▼──────┐   ┌──────────▼─────────┐
>     │     Student       │   │      Teacher       │
>     │  Institution:     │   │  Institution:      │
>     │  Session:         │   │  Designation:      │
>     │  Dept.& SID:      │   │  Dept. & TID:      │
>     │  Study();         │   │  Research();       │
>     └───────────────────┘   └────────────────────┘
> ```

(d) What are final class, final function and final variable in java?

**5.**
(a) What is Stream? Distinguish between InputStream class and Reader Class.
(b) What is random access file? How is it different from a sequential file?
(c) Write a program to read the integer values of file and save them another file after sorting.
(d) Why do you require files to store data?

**6.**
(a) Draw the block diagram of applet class inherited properties from a long chain of classes. Explain briefly the life cycle of an applet.
(b) Write an applet program that draws a rectangle, an oval, a string and a line on the applet.
(c) Discuss public, private, protected and default access modifier with example.

**7.**
(a) Describe the purpose of any six Swing components.
(b) What are AWT and GUI?
(c) Write a complete program to have 3 Buttons in a frame having exit capabilities. Buttons are to be added in the frame as per the layout of your choice. Count and display number of times each Button being clicked.
(d) What is error? Explain any three types of errors. How can we handle run time errors in java?

---

## 171 Term (2nd Year 1st Semester) Final Examination

**1.**
(a) What is Object Oriented Programming (OOP)? Explain the following two features of Java: Platform independent and Multithread.   `2+3`
(b) Inheritance, Encapsulation and Polymorphism are three key attributes of Object Oriented Programming (OOP). Discuss these attributes in your own words. Include benefits of these attributes in your answer.   `6`
(c) What is Typecasting? What will be the output of the following code segment?
```java
class Simple
{
    public static void main(string args[])
    {
        float f=10.5 f;
        int a = (int) f;
        System.out.println(f);
        System.out.println(a);
    }
}
```
`1+2`

**2.**
(a) Constructors are special methods used for object creation. What are the characteristics that make them different than other regular methods?   `4`
(b) Classes and objects are fundamental building blocks of OOP. What do you know about these? Use examples to elaborate.   `6`
(c) Explain function overriding and overloading in Java with example.   `4`

**3.**
(a) Abstract classes and interfaces are two very important items we use in developing programs in OOP. What are they and what benefits do they provide us?   `5`
(b) In a program written in an OOP, several objects may communicate/interact with each other using messages and methods. Methods may have arguments. Explain methods and arguments with an example from Java.   `2+2+3`
(c) What is aggregation in Java? Why and when should we use aggregation?   `1+3`

**4.**
(a) You have a java class named Student with four attributes/variables - name, CGPA, department, and number_of_siblings. It also has the default constructor method with no parameter, and methods to set name and get name from the objects of this class. Show the class declaration along with the variables and the methods mentioned aboved.   `6`
(b) You have a class named StudentHandler which uses the Student class in question 5.a. This class creates new students if needed and keeps track of them. Show the code that this class will use to create a new student whose name is Nazmul. Please remember that the Student class only has a default constructor that does not take any parameter.   `4`
(c) Exceptions are problems that may happen in a code. In java, exceptions are categorized as Runtime Exceptions and Checked Exceptions. Explain these two types.   `4`

**5.**
(a) What is difference between Exception and Error in Java? Describe the purpose of the following exceptions handling keywords: throw, throws, try-catch and finally.   `2+3`
(b) What are the advantages of Java package? Explain the following four different types of java access modifier.
   (i) private (ii) default (iii) protected (iv) public   `1+3`
(c) Find errors in the following Java class -
```java
class Calculator
{
    public static Main(string args[])
    {
        int a=4,b=6,c=0
        c = add(a, b);
    }
    public int add(a, b)
    {
        int c = a + b;
    }
}
```
`5`

**6.**
(a) What are advantages of multithreading over processed based multitasking?   `4`
(b) Briefly describe the basic interfaces of Java collection Framework.   `5`
(c) What is the purpose of garbage collection in Java and when is it used?   `5`

**7.**
(a) What is SWING library used for in Java? What is the base package that you have to import for SWING classes?   `1+2`
(b) What are layout managers? Name three of the Layout managers SWING has.   `2+1`
(c) What are the advantages and disadvantages using cookies in Servlet? How are the JSP request handled?   `2+2`
(d) Distinguish between Java InputStream and OutputStream classes? Also explain their underlying useful methods.   `2+2`

---

## 181 Term (2nd Year 1st Semester) Final Examination

**1.**
(a) Compare and contrast object oriented programming with procedural programming.   `4`
(b) What are classes and objects? Explain it with an example.   `2+2`
(c) Explain inheritance, encapsulation and polymorphism with examples.   `6`

**2.**
(a) What makes java platform independent is its compilation and execution process. Explain how these processes make java platform independent.   `2+3`
(b) Define accessors (getters), mutators (setters) and constructors in your own words. How is constructor different than other methods?   `3+2`
(c) What are method overloading and method overriding? Explain with example.   `4`

**3.**
(a) Explain what is meant by an 'abstract' class and what circumstance necessitates a class being abstract.   `4`
(b) Write the codes for implementations of the Employee and Person classes.   `6`
(c) ClassA has the following static char variable called direction -
   `static char direction = 'E';`
There are two objects, a1 and b1 created from this class. b1 issues the following statement —
   `direction = 'S';`
Now, if both a1 and b1 print the value of direction, what will be shown in each of the print statements in both objects and why?   `4`

**4.**
(a) When you write programs in java, you must be concerned about exceptions. What are exceptions? When answering this question, mention some scenarios where exceptions may happen.   `4`
(b) In your class called "BankAccount" you have the following variables – currentBalance, name, numberOfChildren. You also have a constant to keep fixed interest rate. Show the class declaration along with these variables and the constant.   `4`
(c) In your java code, you have the following line to open a file to read the content -
   `BufferedReader reader = new BufferedReader(new FileReader(filename));`
You know very well that exceptions may be thrown here. Mention reasons you think exceptions may be thrown when trying to read a file. Show in code how you would handle the exception/s in this case.   `6`

**5.**
(a) What are Abstract classes and Interfaces? What benefits do they provide? Show how to declare abstract classes and interfaces in java.   `3+2+1`
(b) What is an event in event-based programming? Discuss the types of events.   `2+3`
(c) Discuss the benefits of delegation event model in programming.   `4`

**6.**
(a) What does GUI stand for? Why is it important?   `1+2`
(b) You are developing an application for your university for student registration of courses each semester. Identify the objects involved in this application. Identify each object's properties and some of the possible methods they may have. You do not have to write any java code; simply show the objects/entities, their attributes/properties and method signatures they may have.   `8`
(c) Consider the following code –
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
In another class we have the following code -
```java
Employee emp = new Employee();
emp.setDesignation("Accountant");
```
What would be the output of this code and why? Also identify what crucial part of the code may be missing.   `3`

**7.**
(a) What are layout managers? Mention the name of three layout manager available in java swing package.   `1+2`
(b) What is the difference between session and cookies in JSP? How is a JSP request handled?   `3+2`
(c) What is multithreading in Java? Discuss the advantages of multithreading over process based multitasking.   `2+4`

---

## 191 Term (2nd Year 1st Semester) Final Examination

**1.**
(a) Classes and objects are fundamental building blocks of OOP. What do you know about these? Use examples to elaborate.   `3`
(b) What is the difference between a local variable and an instance variable? Explain with example.   `3`
(c) Explain why a class might provide a set method and a get method for an instance variable. Provide necessary example.   `3`
(d) Create a class called Employee that includes three instance variables—a first name (type String), a last name (type String) and a monthly salary (double). Provide a constructor that initializes the three instance variables. Provide a set and a get method for each instance variable. If the monthly salary is not positive, do not set its value. Write a test app named EmployeeTest that demonstrates class Employee's capabilities. Create two Employee objects and display each object's yearly salary. Then give each Employee a 10% raise and display each Employee's yearly salary again.   `4`

**2.**
(a) What is polymorphism? Why it is important in Java.   `2`
(b) Differentiate between method overloading and overriding with relevant example?   `4`
(c) In a program written in an OOP, several objects may communicate/interact with each other using messages and methods. Methods may have arguments. Explain methods and arguments with an example from Java.   `4`
(d) A parking garage charges a $2.00 minimum fee to park for up to three hours. The garage charges an additional $0.50 per hour for each hour or part thereof in excess of three hours. The maximum charge for any given 24-hour period is $10.00. Assume that no car parks for longer than 24 hours at a time. Write an application that calculates and displays the parking charges for each customer who parked in the garage yesterday. You should enter the hours parked for each customer. The program should display the charge for the current customer and should calculate and display the running total of yesterday's receipts. It should use the method calculateCharges to determine the charge for each customer.   `4`

**3.**
(a) What is mean by Exception? What are the types of Exception in Java. Explain with example.   `4`
(b) What are the different ways to handle exceptions?   `3`
(c) Can we write only try block without catch and finally blocks? Explain.   `2`
(d) What are the advantages of Exception handling?   `3`
(e) What is the use of finally block in Java?   `2`

**4.**
(a) To compare two strings, will you use "==" or equals() method? Explain why?   `2`
(b) Explain with example about the following string methods used in Java:
   (i) indexOf;  (ii) charAt;  (iii) endsWith;  (iv) contain.   `4`
(c) Consider a two-by-three integer array t.   `4`
   (i) Write a statement that declares and creates t.
   (ii) How many elements does t have?
   (iii) Write access expressions for all the elements in row 1 of t.
   (iv) Write access expressions for all the elements in column 2 of t.
   (v) Write a single statement that sets the element of t in row 0 and column 1 to zero.
   (vi) Write a nested for statement that initializes each element of t to zero.
   (vii) Write a nested for statement that inputs the values for the elements of t from the user.
   (viii) Write a series of statements that determines and displays the smallest value in t.
(d) Can we achieve multiple inheritance by using interface? Explain with example.   `2`
(e) Differentiate between abstract class and interface?   `2`

**5.**
(a) Discuss public, private, protected and default access modifier with example.   `5`
(b) Explain "data hiding" in object oriented programming.   `3`
(c) The easiest way to get input from the user in Java isby using the Scanner class. What do you need to import in this purpose? Write Java codes to prompt the user to enter name and ID number and display them.   `6`

**6.**
(a) Using Java graphics write a program to display the flag of Bangladesh.   `6`
(b) Briefly explain the types of Java Socket Programming. What are their purpose?   `2+2`
(c) What is multithreading in Java? Discuss the advantages of multithreading over process-based multitasking.   `2+2`

**7.** Consider the following class diagram in which the class Student extends the class Person. Person is an abstract class and Student is a concrete class.

> *Class diagram:*
> ```
>     ┌───────────────────────┐
>     │  (abstract) Person    │
>     │  String name          │
>     │  int age              │
>     │  String address       │
>     └───────────▲───────────┘
>                 │
>     ┌───────────┴───────────┐
>     │       Student         │
>     │  String studID,       │
>     │  Double cgpa          │
>     │  display()            │
>     └───────────────────────┘
> ```

Answer the following questions related to the above class diagram:
(a) Mention the difference between abstract class and concrete class.   `3`
(b) Write Java codes for the implementations of the Person and Student classes.   `6`
(c) Write a Driver class to instantiate a student object with studID = "20200117", and cgpa = 3.85. Display the student information using the display method of Student class.   `5`

---

## 201 Term (2nd Year 1st Semester) Final Examination

**1.**
(a) What is the difference between Object-Oriented Programming and Structural Programming?   `2`
(b) Define accessors (getters), mutators (setters) and constructors in your own word.   `4`
(c) Answer the following questions using the Class diagram for an animal class shown in below.   `2+2+2`

> *Class diagram:*
> ```
> ┌──────────────────────────────────────────────┐
> │                  Animal                      │
> ├──────────────────────────────────────────────┤
> │ -family: String                              │
> │ -food: String                                │
> ├──────────────────────────────────────────────┤
> │ +_construct(family: String, food:String)     │
> │ +get_family()                                │
> │ +set_family(family: String)                  │
> │ +get_food()                                  │
> │ +set_food(food: String)                      │
> └──────────────────────────────────────────────┘
> ```

   (i) How many member variables are there in the animal class? Mention their names and types.
   (ii) Identify the mutators and accessors.
   (iii) Write Java codes to implement the constructor.
(d) Explain why the constructor is considered as a special type of method in OOP.   `2`

**2.**
(a) Abstract classes and interfaces are two very important items we use in developing programs in OOP. What are they and what benefits do they provide?   `4`
(b) Can we achieve multiple inheritance by using interface? Explain with example. What is the difference between multiple and multilevel inheritance?   `2+2`
(c) Write a Java Program to take the student name and ID as inputs from the keyboard and display those on the console. You should prompt the user to provide the student-name and ID. Display the name and ID in a single line as follows:
   `The ID is "123456" for the student "Mustafiz".`
Where Mustafiz and 123456 were the inputs provided by the users. Notice the double-quotes, your output should contain those double-quotes.   `6`

**3.**
(a) What is inheritance in OPP? Does Java support multiple inheritances?   `1+1`
(b) What are the main features of OOPs? Write a Java program for the following hierarchical inheritance block diagram.   `2+2`

> *Block diagram:*
> ```
>              ┌──────────────────────────────┐
>              │          Document            │
>              ├──────────────────────────────┤
>              │ -authors: String[]           │
>              │ -date: Date                  │
>              ├──────────────────────────────┤
>              │ +getAuthors(): String[]      │
>              │ +addAuthor(name): void       │
>              │ +getDate(): date             │
>              └──────────────▲───────────────┘
>                             │
>          ┌─────────────────┴───────────────────┐
> ┌────────┴──────────┐               ┌──────────┴────────────┐
> │       Book        │               │        EMail          │
> ├───────────────────┤               ├───────────────────────┤
> │ -title: String    │               │ -subject: String      │
> ├───────────────────┤               │ -to: String[]         │
> │ +getTitle():String│               ├───────────────────────┤
> └───────────────────┘               │ +getSubject(): String │
>                                     │ +getTo(): String[]    │
>                                     └───────────────────────┘
> ```

(c) To compare two strings, will you use "==" or equals() methods? Briefly explain the reason. Explain with example about the following String methods used in Java: (i) indexOf() (ii) charAt() (iii) endswith() (iv) contain()   `4`
(d) Create a class named Employee that includes three instance variables – a first name (type String), a last name (type String) and a monthly salary (double). Provide a constructor that initializes the three instance variables. Provide a set and get method for each instance variable. If the monthly salary is not positive, do not set its value. Write a test app Names EmployeeTest that demonstrates class Employee's capabilities. Create two Employee objects and display each object's yearly salary. Then give each Employee a 10% raise and display each Employee's yearly salary again.   `4`

**4.**
(a) "Java programming is to be compiled first and then to be interpreted for execution." Is this statement true or false? Justify your answer with proper description.   `4`
(b) Why do you use Upcasting and Downcasting in Java? Explain with examples.   `4`
(c) What does exception mean in Java? Write a java program to enter two numbers and calculate the quotient. Use exception handling mechanism to take care of the divide by zero situation.   `1+5`

**5.**
(a) What do you understand by Collection Framework in Java? Write some differences between List, Set, and Map in the collection hierarchy.   `2+2`
(b) What is a stream? Briefly explain the three streams are automatically created in Java.   `1+3`
(c) Assume that you have a file name as 'outFile.txt' in your C drive. Write a program using the Java.io.FileOutputStream class to write the following sentence in that file.
   `"Java programming is awesome"`   `4`
(d) What will be the Output of the below code?   `2`
```java
public class A {
    public static void main(String[] args)
    {
        if (true)
            break;
    }
}
```

**6.**
(a) What is the difference between Exception and Error in Java?   `2`
(b) What are the advantages of multithreading over processed based multitasking?   `3`
(c) Containers and components are two types of Java GUI elements. Using a suitable diagram explain those elements.   `5`
(d) What is the difference between checked and unchecked exceptions in Java? Give ONE (1) example of each of these types of exceptions.   `4`

**7.**
(a) What are layout managers? Mention the name of three layout managers available in Java swing package.   `1+2`
(b) What are the three components in the delegation event model? Explain.   `3`
(c) What is the relationship between an event-listener interface and an event-adapter class? How can a GUI component handle its own events?   `2+2`
(d) Write short notes on the following terminologies associated with the Java networking:   `4`
   (i) Protocol;  (ii) Socket;  (iii) Inet Address;  (iv) Datagram packet.

---

*End of CSE2137 Object Oriented Programming compilation.*
