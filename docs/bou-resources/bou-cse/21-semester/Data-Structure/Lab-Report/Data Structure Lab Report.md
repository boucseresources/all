
**Week 01 - Task 1: Write a program in C/C++ to implement a stack using an array with PUSH, POP, and Display operations.**

Solution:

```c
#include <stdio.h>
#include <stdlib.h>

#define MAX 5 

int stack[MAX];
int top = -1; 

void push() {
    int value;
    if (top == MAX - 1) {
        printf("\nStack Overflow! The stack is full.\n");
    } else {
        printf("Enter the value to push: ");
        scanf("%d", &value);
        top++;
        stack[top] = value;
        printf("%d successfully pushed onto the stack.\n", value);
    }
}

void pop() {
    if (top == -1) {
        printf("\nStack Underflow! The stack is empty.\n");
    } else {
        printf("Popped element: %d\n", stack[top]);
        top--; 
    }
}

void display() {
    if (top == -1) {
        printf("\nStack is empty!\n");
    } else {
        printf("\nStack elements (from top to bottom):\n");
        for (int i = top; i >= 0; i--) {
            printf("| %d |\n", stack[i]);
        }
        printf("-----\n");
    }
}

int main() {
    int choice;

    while (1) {
        printf("\n--- STACK OPERATIONS ---\n");
        printf("1. Push\n");
        printf("2. Pop\n");
        printf("3. Display\n");
        printf("4. Exit\n");
        printf("Enter your choice (1-4): ");
        scanf("%d", &choice);

        switch (choice) {
            case 1: push(); break;
            case 2: pop(); break;
            case 3: display(); break;
            case 4: exit(0); 
            default: printf("Invalid choice! Please try again.\n");
        }
    }
    return 0;
}

```

---

**Week 01 - Task 2: Write a program in C/C++ to implement a queue using an array with enqueue, dequeue, and Display operations.**

Solution:

```c
#include <stdio.h>
#include <stdlib.h>

#define MAX 5 

int queue[MAX];
int front = -1;
int rear = -1;

void enqueue() {
    int value;
    if (rear == MAX - 1) {
        printf("\nQueue Overflow! The queue is full.\n");
    } else {
        printf("Enter the value to enqueue: ");
        scanf("%d", &value);
        
        if (front == -1) {
            front = 0;
        }
        
        rear++;
        queue[rear] = value;
        printf("%d successfully added to the queue.\n", value);
    }
}

void dequeue() {
    if (front == -1 || front > rear) {
        printf("\nQueue Underflow! The queue is empty.\n");
        front = -1;
        rear = -1;
    } else {
        printf("Dequeued element: %d\n", queue[front]);
        front++; 
    }
}

void display() {
    if (front == -1 || front > rear) {
        printf("\nQueue is empty!\n");
    } else {
        printf("\nQueue elements: ");
        for (int i = front; i <= rear; i++) {
            printf("%d ", queue[i]);
        }
        printf("\n");
    }
}

int main() {
    int choice;

    while (1) {
        printf("\n--- QUEUE OPERATIONS ---\n");
        printf("1. Enqueue (Insert)\n");
        printf("2. Dequeue (Delete)\n");
        printf("3. Display\n");
        printf("4. Exit\n");
        printf("Enter your choice (1-4): ");
        scanf("%d", &choice);

        switch (choice) {
            case 1: enqueue(); break;
            case 2: dequeue(); break;
            case 3: display(); break;
            case 4: exit(0);
            default: printf("Invalid choice! Please try again.\n");
        }
    }
    return 0;
}

```

---

**Week 02 - Task 1: Write a program in C/C++ to insert a node at the beginning, end, and a given position in a singly linked list.**

Solution:

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* head = NULL; 

void insertAtBeginning() {
    int value;
    printf("Enter the value to insert at beginning: ");
    scanf("%d", &value);

    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = head; 
    head = newNode;       
    printf("%d inserted at the beginning.\n", value);
}

void insertAtEnd() {
    int value;
    printf("Enter the value to insert at end: ");
    scanf("%d", &value);

    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;

    if (head == NULL) {
        head = newNode;
    } else {
        struct Node* temp = head;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = newNode;
    }
    printf("%d inserted at the end.\n", value);
}

void insertAtPosition() {
    int value, position;
    printf("Enter the value to insert: ");
    scanf("%d", &value);
    printf("Enter the position (starting from 1): ");
    scanf("%d", &position);

    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;

    if (position == 1) {
        newNode->next = head;
        head = newNode;
        printf("%d inserted at position %d.\n", value, position);
        return;
    }

    struct Node* temp = head;
    for (int i = 1; i < position - 1 && temp != NULL; i++) {
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Position out of bounds!\n");
        free(newNode);
    } else {
        newNode->next = temp->next;
        temp->next = newNode;
        printf("%d inserted at position %d.\n", value, position);
    }
}

void display() {
    if (head == NULL) {
        printf("\nThe list is empty!\n");
        return;
    }
    struct Node* temp = head;
    printf("\nLinked List elements: ");
    while (temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\n");
}

int main() {
    int choice;

    while (1) {
        printf("\n--- LINKED LIST OPERATIONS ---\n");
        printf("1. Insert at Beginning\n");
        printf("2. Insert at End\n");
        printf("3. Insert at Any Position\n");
        printf("4. Display List\n");
        printf("5. Exit\n");
        printf("Enter your choice (1-5): ");
        scanf("%d", &choice);

        switch (choice) {
            case 1: insertAtBeginning(); break;
            case 2: insertAtEnd(); break;
            case 3: insertAtPosition(); break;
            case 4: display(); break;
            case 5: exit(0);
            default: printf("Invalid choice! Please try again.\n");
        }
    }
    return 0;
}

```


**Week 03 - Task 1: Write a program in C/C++ to implement a stack using a linked list with PUSH, POP, and Display operations.**

Solution:

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* top = NULL;

void push() {
    int value;
    printf("Enter the value to push: ");
    scanf("%d", &value);

    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Stack Overflow! Out of memory.\n");
        return;
    }
    newNode->data = value;
    newNode->next = top;
    top = newNode;
    printf("%d successfully pushed onto the stack.\n", value);
}

void pop() {
    if (top == NULL) {
        printf("\nStack Underflow! The stack is empty.\n");
        return;
    }
    struct Node* temp = top;
    printf("Popped element: %d\n", top->data);
    top = top->next;
    free(temp);
}

void display() {
    if (top == NULL) {
        printf("\nStack is empty!\n");
        return;
    }
    struct Node* temp = top;
    printf("\nStack elements (Top to Bottom):\n");
    while (temp != NULL) {
        printf("| %d |\n", temp->data);
        temp = temp->next;
    }
    printf("-----\n");
}

int main() {
    int choice;
    while (1) {
        printf("\n--- STACK LINKED LIST ---\n");
        printf("1. Push\n");
        printf("2. Pop\n");
        printf("3. Display\n");
        printf("4. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1: push(); break;
            case 2: pop(); break;
            case 3: display(); break;
            case 4: exit(0);
            default: printf("Invalid choice!\n");
        }
    }
    return 0;
}

```

---

**Week 03 - Task 2: Write a program in C/C++ to implement a queue using a linked list with enqueue, dequeue, and Display operations.**

Solution:

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* front = NULL;
struct Node* rear = NULL;

void enqueue() {
    int value;
    printf("Enter the value to enqueue: ");
    scanf("%d", &value);

    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;

    if (front == NULL && rear == NULL) {
        front = rear = newNode;
    } else {
        rear->next = newNode;
        rear = newNode;
    }
    printf("%d added to the queue.\n", value);
}

void dequeue() {
    if (front == NULL) {
        printf("\nQueue Underflow! The queue is empty.\n");
        return;
    }
    struct Node* temp = front;
    printf("Dequeued element: %d\n", front->data);
    front = front->next;

    if (front == NULL) {
        rear = NULL;
    }
    free(temp);
}

void display() {
    if (front == NULL) {
        printf("\nQueue is empty!\n");
        return;
    }
    struct Node* temp = front;
    printf("\nQueue elements: ");
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

int main() {
    int choice;
    while (1) {
        printf("\n--- QUEUE LINKED LIST ---\n");
        printf("1. Enqueue\n");
        printf("2. Dequeue\n");
        printf("3. Display\n");
        printf("4. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1: enqueue(); break;
            case 2: dequeue(); break;
            case 3: display(); break;
            case 4: exit(0);
            default: printf("Invalid choice!\n");
        }
    }
    return 0;
}

```

---

**Week 04 - Task 1: Write a program in C/C++ to convert a given infix expression to its postfix form using a stack.**

Solution:

```c
#include <stdio.h>
#include <ctype.h>

char stack[100];
int top = -1;

void push(char c) {
    stack[++top] = c;
}

char pop() {
    if (top == -1) return -1;
    return stack[top--];
}

int precedence(char c) {
    if (c == '(') return 0;
    if (c == '+' || c == '-') return 1;
    if (c == '*' || c == '/') return 2;
    return 0;
}

int main() {
    char infix[100], x;
    printf("Enter infix expression (e.g., a+b*c): ");
    scanf("%s", infix);

    printf("Postfix expression: ");
    for (int i = 0; infix[i] != '\0'; i++) {
        if (isalnum(infix[i])) {
            printf("%c", infix[i]);
        } else if (infix[i] == '(') {
            push(infix[i]);
        } else if (infix[i] == ')') {
            while ((x = pop()) != '(') {
                printf("%c", x);
            }
        } else {
            while (top != -1 && precedence(stack[top]) >= precedence(infix[i])) {
                printf("%c", pop());
            }
            push(infix[i]);
        }
    }

    while (top != -1) {
        printf("%c", pop());
    }
    printf("\n");
    return 0;
}

```

---

**Week 04 - Task 2: Write a program in C/C++ to evaluate a given postfix expression (e.g., 2 3 4 + * 6 -).**

Solution:

```c
#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>

int stack[100];
int top = -1;

void push(int val) {
    stack[++top] = val;
}

int pop() {
    return stack[top--];
}

int main() {
    char exp[100];
    printf("Enter expression without spaces (e.g., 234+*6-): ");
    scanf("%s", exp);

    for (int i = 0; exp[i] != '\0'; i++) {
        if (isdigit(exp[i])) {
            push(exp[i] - '0');
        } else {
            int val2 = pop();
            int val1 = pop();
            switch (exp[i]) {
                case '+': push(val1 + val2); break;
                case '-': push(val1 - val2); break;
                case '*': push(val1 * val2); break;
                case '/': push(val1 / val2); break;
            }
        }
    }
    printf("Value of evaluation = %d\n", pop());
    return 0;
}

```

---

**Week 05 - Task 1: Write a program in C/C++ to create a binary tree and display its inorder, preorder, and postorder traversals.**

Solution:

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

struct Node* create() {
    int x;
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    printf("Enter data (-1 for no node): ");
    scanf("%d", &x);

    if (x == -1) {
        return NULL;
    }
    newNode->data = x;

    printf("Enter left child of %d:\n", x);
    newNode->left = create();

    printf("Enter right child of %d:\n", x);
    newNode->right = create();

    return newNode;
}

void preorder(struct Node* root) {
    if (root == NULL) return;
    printf("%d ", root->data);
    preorder(root->left);
    preorder(root->right);
}

void inorder(struct Node* root) {
    if (root == NULL) return;
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}

void postorder(struct Node* root) {
    if (root == NULL) return;
    postorder(root->left);
    postorder(root->right);
    printf("%d ", root->data);
}

int main() {
    struct Node* root = NULL;
    printf("Create your Binary Tree:\n");
    root = create();

    printf("\nPreorder traversal: ");
    preorder(root);

    printf("\nInorder traversal: ");
    inorder(root);

    printf("\nPostorder traversal: ");
    postorder(root);
    printf("\n");

    return 0;
}

```

---

**Week 05 - Task 2: Write a program in C/C++ to count the total number of nodes and leaf nodes in a binary tree.**

Solution:

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

struct Node* create() {
    int x;
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    printf("Enter data (-1 for no node): ");
    scanf("%d", &x);
    if (x == -1) return NULL;
    newNode->data = x;
    printf("Enter left child of %d:\n", x);
    newNode->left = create();
    printf("Enter right child of %d:\n", x);
    newNode->right = create();
    return newNode;
}

int countTotalNodes(struct Node* root) {
    if (root == NULL) return 0;
    return 1 + countTotalNodes(root->left) + countTotalNodes(root->right);
}

int countLeafNodes(struct Node* root) {
    if (root == NULL) return 0;
    if (root->left == NULL && root->right == NULL) return 1;
    return countLeafNodes(root->left) + countLeafNodes(root->right);
}

int main() {
    struct Node* root = NULL;
    printf("Create your Binary Tree:\n");
    root = create();

    printf("\nTotal number of nodes: %d", countTotalNodes(root));
    printf("\nTotal number of leaf nodes: %d\n", countLeafNodes(root));

    return 0;
}

```

---

**Week 06 - Task 1: Write a program in C/C++ to implement the Breadth First Search (BFS) traversal of a graph using an adjacency matrix.**

Solution:

```c
#include <stdio.h>

int adj[20][20], visited[20], queue[20];
int front = -1, rear = -1;

void enqueue(int val) {
    if (front == -1) front = 0;
    queue[++rear] = val;
}

int dequeue() {
    int val = queue[front];
    if (front == rear) front = rear = -1;
    else front++;
    return val;
}

int main() {
    int vertices, start;
    printf("Enter the number of vertices: ");
    scanf("%d", &vertices);

    printf("Enter adjacency matrix values:\n");
    for (int i = 0; i < vertices; i++) {
        for (int j = 0; j < vertices; j++) {
            scanf("%d", &adj[i][j]);
        }
        visited[i] = 0;
    }

    printf("Enter starting vertex index (0 to %d): ", vertices - 1);
    scanf("%d", &start);

    printf("BFS Traversal: ");
    visited[start] = 1;
    printf("%d ", start);
    enqueue(start);

    while (front != -1) {
        int current = dequeue();
        for (int i = 0; i < vertices; i++) {
            if (adj[current][i] == 1 && !visited[i]) {
                visited[i] = 1;
                printf("%d ", i);
                enqueue(i);
            }
        }
    }
    printf("\n");
    return 0;
}

```

---

**Week 06 - Task 2: Write a program in C/C++ to implement the Depth First Search (DFS) traversal of a graph using an adjacency matrix.**

Solution:

```c
#include <stdio.h>

int adj[20][20], visited[20], vertices;

void DFS(int vertex) {
    printf("%d ", vertex);
    visited[vertex] = 1;

    for (int i = 0; i < vertices; i++) {
        if (adj[vertex][i] == 1 && !visited[i]) {
            DFS(i);
        }
    }
}

int main() {
    int start;
    printf("Enter the number of vertices: ");
    scanf("%d", &vertices);

    printf("Enter adjacency matrix values:\n");
    for (int i = 0; i < vertices; i++) {
        for (int j = 0; j < vertices; j++) {
            scanf("%d", &adj[i][j]);
        }
        visited[i] = 0;
    }

    printf("Enter starting vertex index (0 to %d): ", vertices - 1);
    scanf("%d", &start);

    printf("DFS Traversal: ");
    DFS(start);
    printf("\n");

    return 0;
}

```

---

**Week 07 - Task 1: Write a program in C/C++ to sort an array of elements in ascending order using the merge sort algorithm.**

Solution:

```c
#include <stdio.h>

void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;

    int L[n1], R[n2];

    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

int main() {
    int n;
    printf("Enter size of array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter array elements: ");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    mergeSort(arr, 0, n - 1);

    printf("Sorted array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
    return 0;
}

```

---

**Week 08 - Task 1: Write a program in C/C++ to sort an array of elements using the quick sort algorithm (elements taken from the keyboard).**

Solution:

```c
#include <stdio.h>

void swap(int* a, int* b) {
    int t = *a;
    *a = *b;
    *b = t;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high]; 
    int i = (low - 1);

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    int n;
    printf("Enter array size: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter array elements: ");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    quickSort(arr, 0, n - 1);

    printf("Sorted array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
    return 0;
}

```

---

**Week 09 - Task 1: Write a program in C/C++ to search for an element in a sorted array using the binary search algorithm (iterative).**

Solution:

```c
#include <stdio.h>

int binarySearchIterative(int arr[], int n, int target) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

int main() {
    int n, target;
    printf("Enter number of elements in sorted array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter elements in sorted order: ");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter element to search for: ");
    scanf("%d", &target);

    int result = binarySearchIterative(arr, n, target);
    if (result != -1) printf("Element found at index %d\n", result);
    else printf("Element not found\n");

    return 0;
}

```

---

**Week 09 - Task 2: Write a program in C/C++ to implement binary search using recursion.**

Solution:

```c
#include <stdio.h>

int binarySearchRecursive(int arr[], int low, int high, int target) {
    if (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) return binarySearchRecursive(arr, mid + 1, high, target);
        return binarySearchRecursive(arr, low, mid - 1, target);
    }
    return -1;
}

int main() {
    int n, target;
    printf("Enter number of elements in sorted array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter elements in sorted order: ");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter element to search for: ");
    scanf("%d", &target);

    int result = binarySearchRecursive(arr, 0, n - 1, target);
    if (result != -1) printf("Element found at index %d\n", result);
    else printf("Element not found\n");

    return 0;
}

```

---

**Week 10 - Task 1: Write a program in C/C++ to build a Max Heap from n elements and display the heap.**

Solution:

```c
#include <stdio.h>

void heapifyMax(int arr[], int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        heapifyMax(arr, n, largest);
    }
}

int main() {
    int n;
    printf("Enter number of elements ($n$): ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    for (int i = n / 2 - 1; i >= 0; i--) {
        heapifyMax(arr, n, i);
    }

    printf("Max Heap array display: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
    return 0;
}

```

---

**Week 10 - Task 2: Write a program in C/C++ to insert an element into a Min Heap and display the heap after insertion.**

Solution:

```c
#include <stdio.h>

int heap[100];
int heapSize = 0;

void insertMinHeap(int value) {
    heapSize++;
    int i = heapSize - 1;
    heap[i] = value;

    while (i != 0 && heap[(i - 1) / 2] > heap[i]) {
        int temp = heap[i];
        heap[i] = heap[(i - 1) / 2];
        heap[(i - 1) / 2] = temp;
        i = (i - 1) / 2;
    }
}

int main() {
    int n, val;
    printf("How many elements do you want to initially insert into Min Heap? ");
    scanf("%d", &n);

    printf("Enter elements one by one:\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &val);
        insertMinHeap(val);
    }

    printf("Current Min Heap array display: ");
    for (int i = 0; i < heapSize; i++) {
        printf("%d ", heap[i]);
    }

    printf("\nEnter another element to insert: ");
    scanf("%d", &val);
    insertMinHeap(val);

    printf("Min Heap array display after final insertion: ");
    for (int i = 0; i < heapSize; i++) {
        printf("%d ", heap[i]);
    }
    printf("\n");
    return 0;
}

```

---

**Week 11 - Task 1: Write a program in C/C++ to insert elements into an AVL tree and display the inorder traversal.**

Solution:

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
    int height;
};

int getHeight(struct Node* n) {
    if (n == NULL) return 0;
    return n->height;
}

int max(int a, int b) {
    return (a > b) ? a : b;
}

struct Node* createNode(int value) {
    struct Node* node = (struct Node*)malloc(sizeof(struct Node));
    node->data = value;
    node->left = NULL;
    node->right = NULL;
    node->height = 1;
    return node;
}

int getBalanceFactor(struct Node* n) {
    if (n == NULL) return 0;
    return getHeight(n->left) - getHeight(n->right);
}

struct Node* rightRotate(struct Node* y) {
    struct Node* x = y->left;
    struct Node* T2 = x->right;

    x->right = y;
    y->left = T2;

    y->height = max(getHeight(y->left), getHeight(y->right)) + 1;
    x->height = max(getHeight(x->left), getHeight(x->right)) + 1;

    return x;
}

struct Node* leftRotate(struct Node* x) {
    struct Node* y = x->right;
    struct Node* T2 = y->left;

    y->left = x;
    x->right = T2;

    x->height = max(getHeight(x->left), getHeight(x->right)) + 1;
    y->height = max(getHeight(y->left), getHeight(y->right)) + 1;

    return y;
}

struct Node* insert(struct Node* node, int data) {
    if (node == NULL) return createNode(data);

    if (data < node->data) node->left = insert(node->left, data);
    else if (data > node->data) node->right = insert(node->right, data);
    else return node;

    node->height = 1 + max(getHeight(node->left), getHeight(node->right));
    int bf = getBalanceFactor(node);

    if (bf > 1 && data < node->left->data) return rightRotate(node);
    if (bf < -1 && data > node->right->data) return leftRotate(node);
    if (bf > 1 && data > node->left->data) {
        node->left = leftRotate(node->left);
        return rightRotate(node);
    }
    if (bf < -1 && data < node->right->data) {
        node->right = rightRotate(node->right);
        return leftRotate(node);
    }
    return node;
}

void inorder(struct Node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

int main() {
    struct Node* root = NULL;
    int n, val;

    printf("Enter number of elements to insert into AVL tree: ");
    scanf("%d", &n);

    printf("Enter the elements: ");
    for (int i = 0; i < n; i++) {
        scanf("%d", &val);
        root = insert(root, val);
    }

    printf("Inorder Traversal of the balanced AVL Tree: ");
    inorder(root);
    printf("\n");

    return 0;
}

```