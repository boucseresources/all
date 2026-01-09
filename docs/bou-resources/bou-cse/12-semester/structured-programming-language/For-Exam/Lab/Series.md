# Series Problems and solutions:

**Question:**
Write a program to calculate the summation of following series.

!!! info "$2^2 + 4^2 + 6^2 + \dots + 100^2$"

    $2^2 + 4^2 + 6^2 + \dots + 100^2$
    **Answer:**

    ```c
    #include <stdio.h>

    int main() {
        int sum = 0;

        // Loop starts at 2 and increases by 2 each time (even numbers only)
        for (int i = 2; i <= 100; i += 2) {
            sum += (i * i);
        }

        printf("%d", sum);

        return 0;
    }

    ```

