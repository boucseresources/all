---
title: DLDL - Class 05
---

<!-- prettier-ignore-start -->
# Universal Gate implementation

আচ্ছা ✅ এখন আমি সবগুলো Boolean expression একেবারে **স্ট্যান্ডার্ড বইয়ের মতো Bar Notation** (Complement বোঝাতে উপরে বার টানা) করে লিখে দিলাম।

---

# 🔑 Universal Logic Gates

ডিজিটাল সার্কিটে **NAND Gate** আর **NOR Gate** কে বলা হয় **Universal Logic Gate**।
👉 কারণ শুধু এই দুই ধরনের Gate দিয়েই সব Basic Logic Gate (AND, OR, NOT, XOR, XNOR) তৈরি করা সম্ভব।

---

## 🟩 NAND Universal Logic Gate

### ✅ AND Gate Using NAND Gate

* দরকার হবে 2টা NAND gate |
* 1ম NAND Gate → আউটপুট = $\overline{A \cdot B}$ |
* 2য় NAND Gate → আউটপুট = $\overline{\overline{A \cdot B}} = A \cdot B$ |
* চূড়ান্ত আউটপুট = AND Gate |

---
![AND Gate Using NAND Gate](image-16.png)



### ✅ OR Gate Using NAND Gate

* দরকার হবে 3টা NAND gate |
* 1ম NAND Gate → আউটপুট = $\overline{A}$ |
* 2য় NAND Gate → আউটপুট = $\overline{B}$ |
* 3য় NAND Gate → আউটপুট = $\overline{\overline{A} \cdot \overline{B}} = A + B$ |
* চূড়ান্ত আউটপুট = OR Gate |
![OR Gate Using NAND Gate](../../../../Media%20Library/2025-09-04-11-02-54.png)
---

### ✅ NOR Gate Using NAND Gate

* দরকার হবে 3টা NAND gate |
* 1ম NAND Gate → আউটপুট = $\overline{A \cdot B}$ |
* 2য় NAND Gate → আউটপুট = $\overline{\overline{A \cdot B}} = A \cdot B$ |
* 3য় NAND Gate → আউটপুট = $\overline{(A \cdot B) \cdot (A \cdot B)} = \overline{A \cdot B}$ |
* চূড়ান্ত আউটপুট = NOR Gate |

---

### ✅ XNOR Gate Using NAND Gate

* ধাপে ধাপে NAND ব্যবহার করে আউটপুট = $\overline{A \oplus B}$ |
* চূড়ান্ত আউটপুট = XNOR Gate |

---

### ✅ XOR Gate Using NAND Gate

* দরকার হবে 4টা NAND gate |
* ধাপে ধাপে শেষে আউটপুট = $A \oplus B$ |
* চূড়ান্ত আউটপুট = XOR Gate |

---

## 🟥 NOR Universal Logic Gate

### ✅ AND Gate Using NOR Gate

* দরকার হবে 3টা NOR gate |
* 1ম NOR Gate → আউটপুট = $\overline{A + B}$ |
* 2য় NOR Gate → আউটপুট = $\overline{\overline{A + B}} = A + B$ |
* 3য় NOR Gate → আউটপুট = $\overline{(A + B)} = A \cdot B$ (De Morgan’s Law) |
* চূড়ান্ত আউটপুট = AND Gate |

---

### ✅ OR Gate Using NOR Gate

* দরকার হবে 2টা NOR gate |
* 1ম NOR Gate → আউটপুট = $\overline{A}$, $\overline{B}$ |
* 2য় NOR Gate → আউটপুট = $\overline{\overline{A} + \overline{B}} = A + B$ |
* চূড়ান্ত আউটপুট = OR Gate |

---

### ✅ NAND Gate Using NOR Gate

* দরকার হবে 3টা NOR gate |
* 1ম NOR Gate → আউটপুট = $\overline{A}$ |
* 2য় NOR Gate → আউটপুট = $\overline{B}$ |
* 3য় NOR Gate → আউটপুট = $\overline{\overline{A} + \overline{B}} = A \cdot B$ |
* চূড়ান্ত আউটপুট = NAND Gate |

---

### ✅ XNOR Gate Using NOR Gate

* ধাপে ধাপে NOR ব্যবহার করে আউটপুট = $\overline{A \oplus B}$ |
* চূড়ান্ত আউটপুট = XNOR Gate |

---

### ✅ XOR Gate Using NOR Gate

* দরকার হবে 3টা NOR gate |
* ধাপে ধাপে শেষে আউটপুট = $A \oplus B$ |
* চূড়ান্ত আউটপুট = XOR Gate |

---

📌 **Final Note:**
👉 শুধু NAND Gate অথবা শুধু NOR Gate দিয়েই অন্য সব Logic Gate তৈরি করা যায় | এজন্য এগুলোকে বলা হয় **Universal Logic Gate** |



<!-- prettier-ignore-end-->
