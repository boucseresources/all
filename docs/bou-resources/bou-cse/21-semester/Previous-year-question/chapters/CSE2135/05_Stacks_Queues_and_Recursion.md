# CSE2135 - Data Structure

## Stacks, Queues, and Recursion

### Term 161

- **Q4(a) [4]:** Define stack. Mention the basic operation in stack with example.
- **Q4(b) [8]:** Consider the following arithmetic infix expression Q as `A + (B * C - (D / E ^ F) * G) * H`. Translate this expression into Prefix and Postfix notation.
- **Q4(c) [2]:** What are the basic distinction between stack and queue?
- **Q5(a) [5]:** Define Queue. Explain Enqueue operation with example.
- **Q5(b) [5]:** Define priority queue. Explain Dequeue operation with example.
- **Q5(c) [4]:** Explain the linked list implementation of queue.

### Term 171

- **Q4(a) [1+3]:** Define stack. Write down the algorithm for PUSH.
- **Q4(b) [3]:** Convert the following infix expression Z to its equivalent postfix expression: `P + (Q * R - (S / T ^ U) * V) * W`.
- **Q4(d) [2]:** Show the tree diagram of recursive solution to Tower of Hanoi problem for $n=3$.

### Term 181

- **Q4(a) [3+1]:** Define Stack and Queue. What is the main difference between them?
- **Q4(b) [3]:** Convert the following infix expression to its equivalent postfix expression: `A * (B + D) / E - F * (G + H / K)`.
- **Q4(d) [2]:** Write a recursive algorithm for the Tower of Hanoi problem.

### Term 191

- **Q2(d) [3]:** Write the algorithm for Tower of Hanoi problem.
- **Q4(a) [1+3]:** Define stack. Explain PUSH and POP algorithm with an example.
- **Q4(b) [3]:** Consider the following arithmetic infix expression: `Q: A + (B * C - (D / E ^ F) * G) * H`. Transform Q into its equivalent postfix expression using stack.
- **Q4(c) [3]:** Explain Enqueue and Dequeue operations with example.

### Term 201

- **Q3(c) [2]:** Suppose STACK is allocated N=6 memory cells and initially STACK is empty, or, in other words TOP=0. Find the output of the following module.

  ```text
  1. Set AAA := 2 and BBB := 5
  2. call PUSH(STACK, AAA)
     call PUSH(STACK, 4)
     call PUSH(STACK, BBB + 2)
     call PUSH(STACK, 9)
     call PUSH(STACK, AAA + BBB)
  3. Repeat while TOP != 0
         call POP(STACK, ITEM)
         write : ITEM
     [End of loop]
  4. Return.
  ```
- **Q3(d) [3]:** Let a and b denote positive integers. Suppose Q is defined recursively as follows:

  $$
  Q(a,b)=\begin{cases}
  0,&a<b\\
  Q(a-b,b)+1,&b\le a
  \end{cases}
  $$

  Find the value of (i) $Q(2,3)$ (ii) $Q(14,3)$.
- **Q5(a) [1+3]:** What do you mean by stack and queue? Write down an algorithm which pushes an item on to a stack.

### Term 211

- **Q2(a) [1+4]:** Define Stack? Write down the algorithm for PUSH and POP operation.
- **Q2(b) [2+4]:** Write an algorithm to convert a parenthesized infix expression to postfix. Apply the algorithm and show the contents of stack during conversion for the expression: `((H * ((((A + ((B + C) * D)) * F) * G) * E)) + J)`.
- **Q3(a) [4]:** Write pseudo code to implement queue using stack i.e., implement insert and delete operation of queue using push and pop.
- **Q3(b) [2]:** Suggest an application of queue. Explain how queue is a better choice than array for that application.
- **Q3(c) [1x4]:** Consider the following queue of characters where QUEUE is a circular array which is allocated six memory cells: `FRONT=2 REAR=4, QUEUE: ---, A, C, D, ---, ---` (`---` denotes empty memory cell). Describe the queue as the following operations takes place:
  1. F is added to queue.
  2. Two letters are deleted.
  3. K, L, M are added to queue.
  4. Two letters are deleted.
