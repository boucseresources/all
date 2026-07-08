You can Check these References for better understanding:
[Step By Step দেখানো আছে এখানেঃ](https://prepinsta.com/data-structures/binary-tree/)
[▶️ Simplest Binary Tree Traversal trick for preorder inorder postorder](https://youtu.be/WLvU5EQVZqY)

So in summary, always go from the root in counterclockwise direction around the tree. 
 - For Pre-Order, print the nodes as you visit them for the first time. 
 - For In-Order, print the nodes only when you visit them for the second time. 
 - For Post-order, print the nodes when you visit them for the last time.

Shortcut formula:
![The Gravity Drop Method (Inorder)](image-1.png)

Problem Sets:
![alt text](image.png)


## `(a*b)/(c+d)` এর জন্য এক্সপ্রেশন ট্রির ধারণা (Concept of Expression Tree)

একটি এক্সপ্রেশন ট্রি (Expression Tree) হলো এমন একটি বিশেষ বাইনারি ট্রি যা বিভিন্ন বীজগাণিতিক রাশিকে (algebraic expressions) মেমরিতে উপস্থাপন করতে ব্যবহৃত হয়। এই ট্রির গঠনে, অপারেটরগুলো (operators) যেমন যোগ, বিয়োগ, গুণ, ভাগ সবসময় ইন্টারনাল নোড (internal nodes) বা অভ্যন্তরীণ নোড হিসেবে কাজ করে। অন্যদিকে অপারেন্ড (operands) বা চলকগুলো সবসময় লিফ নোড (leaf nodes) বা প্রান্তিক নোড হিসেবে অবস্থান করে।

প্রদত্ত রাশি `(a*b)/(c+d)` এর জন্য ট্রি গঠন করার সময় অপারেটর প্রিসিডেন্স (operator precedence) বা অপারেটরের অগ্রাধিকারের নিয়ম অনুসরণ করা হয়।

---

## ট্রি গঠনের ধাপসমূহ (Construction Steps)

### ধাপ ১: প্রধান রুট নোড নির্ধারণ (Identifying the Root Node)

এখানে ভাগ অপারেটরটি `/` সম্পূর্ণ রাশিটিকে দুটি প্রধান অংশে বিভক্ত করেছে। এই কারণে `/` অপারেটরটি পুরো ট্রির প্রধান রুট নোড (main root node) হিসেবে সবার উপরে বসবে।

### ধাপ ২: বাম সাব-ট্রি গঠন (Designing the Left Subtree)

রাশিটির বাম অংশে বন্ধনীর ভেতর আছে `(a*b)`। এখানে গুণ অপারেটর `*` প্যারেন্ট নোড হবে। এই `*` নোডের বাম চাইল্ড (left child) হিসেবে `a` এবং ডান চাইল্ড (right child) হিসেবে `b` যুক্ত হবে।

### ধাপ ৩: ডান সাব-ট্রি গঠন (Designing the Right Subtree)

রাশিটির ডান অংশে বন্ধনীর ভেতর আছে `(c+d)`। এখানে যোগ অপারেটর `+` প্যারেন্ট নোড হবে। এই `+` নোডের বাম চাইল্ড হিসেবে `c` এবং ডান চাইল্ড হিসেবে `d` যুক্ত হবে।

---

## চিত্রভিত্তিক উপস্থাপন (Diagrammatic Representation)

উপরের ধাপগুলো অনুসরণ করে গঠিত চূড়ান্ত এক্সপ্রেশন ট্রি নিচে দেওয়া হলো:

```text
       /
     /   \
    *     +
   / \   / \
  a   b  c  d

```

---

## ট্রি ট্রাভার্সালের মাধ্যমে সঠিকতা যাচাই (Verification via Tree Traversals)

আমাদের তৈরি করা ট্রিটি সঠিক হয়েছে কিনা তা নিশ্চিত করার জন্য ৩টি স্ট্যান্ডার্ড ট্রি ট্রাভার্সাল (tree traversal) পদ্ধতি ব্যবহার করে যাচাই করা সম্ভব।

### ১. ইনঅর্ডার ট্রাভার্সাল (Inorder Traversal: Left, Root, Right)

* **ক্রম (Sequence):** `a * b / c + d`
* **ফলাফল:** গাণিতিক নিয়ম অনুযায়ী বন্ধনী বা প্যারেন্থেসিস ব্যবহার করলে এটি আবার আমাদের মূল ইনফিক্স এক্সপ্রেশন (infix expression) `(a*b)/(c+d)` ফিরিয়ে দেয়।

### ২. প্রিঅর্ডার ট্রাভার্সাল (Preorder Traversal: Root, Left, Right)

* **ক্রম (Sequence):** `/ * a b + c d`
* **ফলাফল:** এই ট্রাভার্সাল থেকে প্রাপ্ত সিকোয়েন্সটি হলো প্রদত্ত রাশির প্রিফিক্স নোটেশন (prefix notation) বা পোলিশ নোটেশন।

### ৩. পোস্টঅর্ডার ট্রাভার্সাল (Postorder Traversal: Left, Right, Root)

* **ক্রম (Sequence):** `a b * c d + /`
* **ফলাফল:** এটি আমাদের পোস্টফিক্স নোটেশন (postfix notation) বা রিভার্স পোলিশ নোটেশন প্রদান করে। কম্পাইলার ডিজাইনে যেকোনো এক্সপ্রেশন ইভালুয়েশন বা মূল্যায়নের (evaluation) জন্য এই রূপটি সবচেয়ে বেশি ব্যবহৃত হয়।


