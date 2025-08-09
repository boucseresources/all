!!! example "🧮 Program 1: Addition, Multiplication, Division, Modulus"
    ```c
    #include <stdio.h>

    int main() {
        int num1 = 2;
        int num2 = 3;

        int sum = num1 + num2;        // যোগ
        int mul = num1 * num2;        // গুণ
        int mod = num1 % num2;        // ভাগশেষ (remainder)
        float div = (float) num1 / num2; // ভাগ (floating point)

        printf("Sum: %d\n", sum);
        printf("Multiplication: %d\n", mul);
        printf("Division: %.2f\n", div);
        printf("Modulus: %d\n", mod);

        return 0;
    }
    ```

    **💡 Banglish Explanation:**
    - `sum` → যোগ (2+3 = 5)  
    - `mul` → গুণ (2×3 = 6)  
    - `div` → `(float)` দিলে decimal সহ ভাগফল (2/3 = 0.666...)  
    - `mod` → ভাগশেষ (2 % 3 = 2)  
    ⚠️ `(float)` না দিলে integer division হবে, দশমিক কেটে যাবে।

---
!!! example "⌨ Program 2: `scanf` দিয়ে Input নেওয়া + Float Division"
    ```c
    #include <stdio.h>

    int main() {
        int num1, num2;

        printf("Enter Your First Number: ");
        scanf("%d", &num1);

        printf("Enter Your Second Number: ");
        scanf("%d", &num2);

        float div = (float) num1 / num2; // float cast করে decimal result

        printf("Division Result: %.2f\n", div);

        return 0;
    }
    ```

    **💡 Banglish Explanation:**
    - `scanf` → user input নেয়, `%d` মানে integer।  
    - `&num1` / `&num2` → variable এর memory address এ data store হয়।  
    - `(float)` দিলে decimal সহ ভাগফল বের হয়।  
    - `%.2f` → দশমিকের পরে ২ ঘর পর্যন্ত দেখায়।  

    **Example Run:**
    ```
    Enter Your First Number: 5
    Enter Your Second Number: 2
    Division Result: 2.50
    ```
