## 1. Basic Structure of C

```c
#include <stdio.h>

int main() {
    printf("This is the basic structure of C.\n");
    return 0;
}
```

---

## 2. printf()

```c
#include <stdio.h>

int main() {
    printf("Hello, this is printf example.\n");
    printf("Number: %d\n", 25);
    return 0;
}
```

---

## 3. scanf()

```c
#include <stdio.h>

int main() {
    int a;
    printf("Enter a number: ");
    scanf("%d", &a);
    printf("You entered: %d\n", a);
    return 0;
}
```

---

## 4. Different Types of Variables

```c
#include <stdio.h>

int main() {
    int age = 20;
    float cgpa = 3.52;
    char grade = 'A';
    double salary = 30000.55;

    printf("%d %.2f %c %.2lf\n", age, cgpa, grade, salary);
    return 0;
}
```

---

## 5. if else

```c
#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);

    if(n % 2 == 0)
        printf("Even\n");
    else
        printf("Odd\n");

    return 0;
}
```

---

## 6. Ternary Operator

```c
#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);

    (n >= 0) ? printf("Positive\n") : printf("Negative\n");

    return 0;
}
```

---

## 7. Loops (for, while, do-while)

### (a) for loop

```c
#include <stdio.h>

int main() {
    for(int i = 1; i <= 5; i++)
        printf("%d ", i);
    return 0;
}
```

### (b) while loop

```c
#include <stdio.h>

int main() {
    int i = 1;
    while(i <= 5) {
        printf("%d ", i);
        i++;
    }
    return 0;
}
```

### (c) do-while loop

```c
#include <stdio.h>

int main() {
    int i = 1;
    do {
        printf("%d ", i);
        i++;
    } while(i <= 5);

    return 0;
}
```

---

## 8. switch (with break and continue idea)

```c
#include <stdio.h>

int main() {
    int choice;
    scanf("%d", &choice);

    switch(choice) {
        case 1: printf("Option 1\n"); break;
        case 2: printf("Option 2\n"); break;
        case 3: printf("Option 3\n"); break;
        default: printf("Invalid\n");
    }

    return 0;
}
```

---

## 9. 1D Array

```c
#include <stdio.h>

int main() {
    int a[5] = {10, 20, 30, 40, 50};

    for(int i = 0; i < 5; i++)
        printf("%d ", a[i]);

    return 0;
}
```

---

## 10. 2D Array

```c
#include <stdio.h>

int main() {
    int m[2][2] = {
        {1, 2},
        {3, 4}
    };

    for(int i = 0; i < 2; i++)
        for(int j = 0; j < 2; j++)
            printf("%d ", m[i][j]);

    return 0;
}
```

---

## 11. Functions (Library Function Example)

```c
#include <stdio.h>
#include <math.h>

int main() {
    double x = sqrt(25);
    printf("Square root: %.2lf\n", x);
    return 0;
}
```

---

## 12. Functions (User Defined - No Return)

```c
#include <stdio.h>

void greet() {
    printf("Hello from function\n");
}

int main() {
    greet();
    return 0;
}
```

---

## 13. Functions (User Defined - With Return)

```c
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int r = add(5, 7);
    printf("Sum: %d\n", r);
    return 0;
}
```

---

## 14. Structure

```c
#include <stdio.h>

struct Student {
    int id;
    float cgpa;
};

int main() {
    struct Student s1 = {101, 3.75};
    printf("%d %.2f\n", s1.id, s1.cgpa);
    return 0;
}
```

---

## 15. String (Basic)

```c
#include <stdio.h>

int main() {
    char name[20] = "Rakib";
    printf("Name: %s\n", name);
    return 0;
}
```

---

## 16. String Input

```c
#include <stdio.h>

int main() {
    char name[30];
    printf("Enter name: ");
    gets(name);
    printf("You entered: %s\n", name);
    return 0;
}
```

---

## 17. String Length

```c
#include <stdio.h>
#include <string.h>

int main() {
    char a[20] = "Hello";
    printf("Length: %d\n", strlen(a));
    return 0;
}
```

---

## 18. Simple Calculator (practice program)

```c
#include <stdio.h>

int main() {
    int a, b;
    char op;
    scanf("%d %c %d", &a, &op, &b);

    if(op == '+') printf("%d\n", a + b);
    else if(op == '-') printf("%d\n", a - b);
    else if(op == '*') printf("%d\n", a * b);
    else if(op == '/') printf("%d\n", a / b);
    else printf("Invalid\n");

    return 0;
}
```

---

## 19. Sum of Array Elements

```c
#include <stdio.h>

int main() {
    int a[5] = {5, 10, 15, 20, 25};
    int sum = 0;

    for(int i = 0; i < 5; i++)
        sum += a[i];

    printf("Sum: %d\n", sum);
    return 0;
}
```

---

## 20. Factorial Using Loop

```c
#include <stdio.h>

int main() {
    int n = 5, fact = 1;

    for(int i = 1; i <= n; i++)
        fact *= i;

    printf("Factorial: %d\n", fact);
    return 0;
}
```