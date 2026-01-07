<center> Bangladesh Open University
School of Science and Technology
B. Sc in Computer Science and Engineering Program
192 Term 1st Year 2nd Semester Final Examination
Course Code & Title: CSE 12P8 Structured Programming Language Lab</center>

Time: 3 Hours   |                                        Total Marks: 60

A. Choose and perform one experiment by lottery from out of the following experiments.        1×40=40

Exp 1.    Any character is entered through the keyboard, write a C program to determine whether the
          character entered is a capital letter, a small case letter, a digit or a special symbol. The
          following table shows the range of ASCII values for various characters.

          Characters            ASCII Value
          A-Z                   65-90
          a-z                   97-122
          0-9                   48-57
          Special Symbol        0 - 47, 58 - 64, 91 - 96, 123 - 127

??? solution "Ans 01"

    ```c
    #include <stdio.h>
    int main()
    {
        char ch;
        printf("Enter a character: ");
        scanf("%c", &ch);
        if(ch >= 65 && ch <= 90)
        {
            printf("%c is a capital letter.", ch);
        }
        else if(ch >= 97 && ch <= 122)
        {
            printf("%c is a small letter.", ch);
        }
        else if(ch >= 48 && ch <= 57)
        {
            printf("%c is a digit.", ch);
        }
        else
        {
            printf("%c is a special symbol.", ch);
        }
        return 0;
    }
        
    ```

??? solution "Ans 01"

    ```c
    ```
Exp 2.    Write a C program to sort a list of elements in ascending order.

Exp 3.    Write a C Program to Display its own Source Code as Output.

Exp 4.    Write a C program to find the LCM of five numbers.

Exp 5.    Write a program to implement queues by the simple method of keeping the head of the queue
          always in the first position of a linear array.

Exp 6.    Write a program using the following operation on a given list:
          (a) Function that deletes the last entry of a list.
          (b) Function that deletes the first entry of a list.
          (c) Function that reverse the order entry of a list.

Exp 7.    A class contains 50 students who acquired marks in 10 subjects. Write a program to display
          top 10 students roll numbers and marks in sorted order by using Bubble sorting techniques.

Exp 8.    (a) Write C program to compute and display the sum of all integers that are divisible by
              6 but not divisible by 4 and lie between 0 and 100. The program should also count
              and display the number of such values.
          (b) Write a C program to count vowels, consonants, digit and white space from a string.

Exp 9.    Write a program in C to display the pattern like a diamond.

                    *
                 *  *  *
              *  *  *  *  *
           *  *  *  *  *  *  *
        *  *  *  *  *  *  *  *  *
           *  *  *  *  *  *  *
              *  *  *  *  *
                 *  *  *
                    *

Exp 10.   Write a C program to find the length of a string without using the library function.
