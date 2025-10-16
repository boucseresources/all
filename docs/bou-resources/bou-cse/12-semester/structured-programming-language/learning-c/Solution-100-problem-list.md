```c
// Input a number and print its square.
#include <stdio.h>

int main() {
 int number;
 printf("Type your number");
 scanf("%d", &number);
 int square = number * number;
 
 printf("the square of the number is: %d", square);
 
    return 0;
}
```


```c
// Find area of a rectangle using user input.

#include <stdio.h>

int main() {
 float length, width;
 printf("Type the length of the rectangle: ");
 scanf("%f", &length);
 printf("Type the width of the rectangle: ");
 scanf("%f", &width);
 
 float areaOfRectangle =  length * width;
 
 printf("the square of the number is: %0.3f", areaOfRectangle);
 
    return 0;
}
```



![[image-52.png]]

---
8. Input temperature in Celsius and convert to Fahrenheit. 
```c
// Input temperature in Celsius and convert to Fahrenheit. 

#include <stdio.h>

int main() {
    float cel, far;
    
    printf("Type the celcius value");
    
    scanf("%f", &cel);
    far = (cel * 9/5) + 32;
    printf("The Fahrenheit value is: %f", far);
    
    
    return 0;
}
```
![[image-53.png]]

---
```c
// 2. Sum of First 10 Natural Numbers
// Write a C program to compute the sum of the first 10 natural numbers.
// Expected Output :
// The first 10 natural number is :
// 1 2 3 4 5 6 7 8 9 10
// The Sum is : 55
// ===============================

#include <stdio.h>

int main() {
    int sum = 0;
    for (int i = 1; i <= 10; i++){
        sum += i;
    }
    
    printf("Sum of First 10 Natural Numbers %d", sum);

    return 0;
}
```
![[image-54.png]]

---
```c
// Fibonacci Number Series
// 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34
#include <stdio.h>

int main() {
   int a, b, next;
   a = 0;
   b = 1;
  printf("%d\n%d\n", a, b);
for (int i = 3; i <= 10; i++)
{
next = b + a;
printf("%d  \n",next);
 a = b;
 b = next;
}

    return 0;
}
```

![[Fibonacci Number Series.png]]

---

**Question: Write a C program using a for loop to print this pattern.**
```c
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

Answer: 
```c
#include <stdio.h>

int main() {
   
   for (int row = 1; row <=5; row++){
       for (int col = 1; col <=row; col++ ){
          printf("%d", col);
   }
          printf("\n");
   }

    return 0;
}
```

![[Triangle with numbers.png]]

---
