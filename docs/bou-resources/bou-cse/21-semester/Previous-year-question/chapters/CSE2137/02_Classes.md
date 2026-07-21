# CSE2137 - Object Oriented Programming

## Classes

### Term 151

- **Q2(a) [4]:** Define class and object with example.
- **Q2(b) [4]:** Distinguish between static and non-static nested classes. What are the properties of static method, static block and final variable?
- **Q2(c) [4]:** Explain function overriding and overloading in Java with examples.

### Term 161

- **Q1(b) [3]:** What do you mean by classes and objects?
- **Q2(a) [3]:** What is constructor? What are its special properties?
- **Q2(b) [3]:** Distinguish between method overloading and method overriding.
- **Q2(c) [6]:** Declare a class called Coordinate to have 3 dimensional Cartesian coordinates. Define following methods: (i) Constructor(s), (ii) `add_coordinates` to add two Coordinate objects and to produce resultant object. Generate and handle exception, if all three coordinates of the resultant Coordinate object are zero. Define method main to show use of above methods.
- **Q2(d) [2]:** Explain array implementation in Java with example.
- **Q4(d) [2]:** What are final class, final function and final variable in java?

### Term 171

- **Q2(a) [4]:** Constructors are special methods used for object creation. What are the characteristics that make them different than other regular methods?
- **Q2(b) [6]:** Classes and objects are fundamental building blocks of OOP. What do you know about these? Use examples to elaborate.
- **Q2(c) [4]:** Explain function overriding and overloading in Java with example.
- **Q3(b) [2+2+3]:** In a program written in an OOP, several objects may communicate/interact with each other using messages and methods. Methods may have arguments. Explain methods and arguments with an example from Java.
- **Q4(a) [6]:** You have a java class named Student with four attributes/variables - name, CGPA, department, and number_of_siblings. It also has the default constructor or method with no parameter, and methods to set name and get name from the objects of this class. Show the class declaration along with the variables and the methods mentioned above.
- **Q4(b) [4]:** You have a class named StudentHandler which uses the Student class in question 5.a. This class creates new students if needed and keeps track of them. Show the code that this class will use to create a new student whose name is Nazmul. Please remember that the Student class only has a default constructor that does not take any parameter.

### Term 181

- **Q1(b) [2+2]:** What are classes and objects? Explain it with an example.
- **Q2(b) [3+2]:** Define accessors (getters), mutators (setters) and constructors in your own words. How is constructor different than other methods?
- **Q2(c) [4]:** What are method overloading and method overriding? Explain with example.
- **Q3(c) [4]:** ClassA has the following static char variable called direction: `static char direction = 'E';` There are two objects, a1 and b1 created from this class. b1 issues the following statement - `direction = 'S';` Now, if both a1 and b1 print the value of direction, what will be shown in each of the print statements in both objects and why?
- **Q4(b) [4]:** In your class called "BankAccount" you have the following variables - currentBalance, name, numberOfChildren. You also have a constant to keep fixed interest rate. Show the class declaration along with these variables and the constant.
- **Q6(b) [6]:** You are developing an application for your university for student registration of courses each semester. Identify the objects involved in this application. Identify each object's properties and some of the possible methods they may have. You do not have to write any java code; simply show the objects/entities, their attributes/properties and method signatures they may have.
- **Q6(c) [5]:** Consider the following code:

  ```java
  import java.io.*;
  public class Employee {
      String name;
      String designation = "MANAGER";
      // This is the constructor of the class Employee
      public void setDesignation(String designation) {
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

### Term 201

- **Q1(b) [4]:** Define accessors (getters), mutators (setters) and constructors in your own word.
- **Q1(c) [2+2+2]:** Answer the following questions using the Class diagram for an animal class shown below.

  ![Animal class diagram](../../assets/CSE2137_201_Q1c_Animal_Class.png)

  1. How many member variables are there in the animal class? Mention their names and types.
  2. Identify the mutators and accessors.
  3. Write Java codes to implement the constructor.
- **Q1(d) [2]:** Explain why the constructor is considered as a special type of method in OOP.
- **Q3(c) [4]:** To compare two strings, will you use `==` or `equals()` methods? Briefly explain the reason. Explain with example about the following String methods used in Java: (i) `indexOf()`, (ii) `charAt()`, (iii) `endsWith()`, (iv) `contains()`.
- **Q3(d) [4]:** Create a class named Employee that includes three instance variables - a first name (type String), a last name (type String) and a monthly salary (double). Provide a constructor that initializes the three instance variables. Provide a set and get method for each instance variable. If the monthly salary is not positive, do not set its value. Write a test app named EmployeeTest that demonstrates class Employee's capabilities. Create two Employee objects and display each object's yearly salary. Then give each Employee a 10% raise and display each Employee's yearly salary again.

### Term 211

- **Q1(a) [2+2]:** Classes and objects are fundamental building blocks of OOP. What do you know about these? Use examples to elaborate.
- **Q1(c) [2]:** What is the purpose of Static Methods and Variables?
- **Q2(b) [4]:** Constructors is a special methods used for object creation. What are the characteristics that make them different than other regular methods?
- **Q2(c) [6]:** Explain methods overriding and overloading in Java with example.
- **Q5(a) [4]:** How can Constructor chaining be done by using the Super keyword?
- **Q6(b) [2+6]:** To compare two strings, will you use `==` or `equals()` methods? Briefly explain the reason. Explain the example about the following String methods used in Java: (i) `indexOf()`, (ii) `charAt()`, (iii) `endsWith()`, (iv) `contain()`.
