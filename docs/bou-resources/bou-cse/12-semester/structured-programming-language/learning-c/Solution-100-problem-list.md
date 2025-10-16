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
