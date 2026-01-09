# Array-Related Problems and Solutions

### Size of an array:

```c
#include <stdio.h>

int main() {
    // Declare and initialize an integer array
    int myArray[] = {10, 25, 50, 75, 100};

    // Calculate the number of elements
    // sizeof(myArray) gives total bytes (e.g., 20 bytes if int is 4 bytes)
    // sizeof(myArray[0]) gives bytes of one element (e.g., 4 bytes)
    // Division results in number of elements (20 / 4 = 5)
    size_t length = sizeof(myArray) / sizeof(myArray[0]);

    // Print the size (using %zu for size_t type, a best practice in C)
    printf("Number of elements in the array: %zu\n", length);

    return 0;
}

```

### Write a program to calculate summation of 10 integer’s numbers.

```c
#include <stdio.h>

int main() {
    int nums[10], sum;
    
    printf("Enter 10 Numbers: ");
    
    for (int i=0; i<=10; i++){
        scanf("%d", &nums[i]);
    }
    
    for(int i=0; i<=10; i++){
        sum = sum + nums[i];
    }
    
    printf("Sum = %d", sum);
    int avg = sum / 
    printf("Avg = %d", );
    

    return 0;
}

```