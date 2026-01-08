??? "Menu Driven Problem"
    > Write a menu driven program which has 
      following options: 
      1. Positive or negative
      2. Factorial of a number
      3. Odd or even
      4. Exit
    
    ```c
    #include <stdio.h>

    int main() {
        int choice, num, i, fact;

        while (1) {
            printf("\n----- MENU -----\n");
            printf("1. Positive or Negative\n");
            printf("2. Factorial of a Number\n");
            printf("3. Odd or Even\n");
            printf("4. Exit\n");
            printf("Enter your choice: ");
            scanf("%d", &choice);

            switch (choice) {

                case 1:
                    printf("Enter a number: ");
                    scanf("%d", &num);

                    if (num > 0)
                        printf("The number is Positive\n");
                    else if (num < 0)
                        printf("The number is Negative\n");
                    else
                        printf("The number is Zero\n");
                    break;

                case 2:
                    printf("Enter a number: ");
                    scanf("%d", &num);

                    fact = 1;
                    for (i = 1; i <= num; i++) {
                        fact = fact * i;
                    }

                    printf("Factorial of %d is %d\n", num, fact);
                    break;

                case 3:
                    printf("Enter a number: ");
                    scanf("%d", &num);

                    if (num % 2 == 0)
                        printf("The number is Even\n");
                    else
                        printf("The number is Odd\n");
                    break;

                case 4:
                    printf("Exiting program...\n");
                    return 0;

                default:
                    printf("Invalid choice. Try again.\n");
            }
        }

        return 0;
    }
    ```