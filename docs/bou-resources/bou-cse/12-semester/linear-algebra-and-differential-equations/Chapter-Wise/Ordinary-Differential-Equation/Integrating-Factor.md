# **ডিফারেনশিয়াল ইকুয়েশন সমাধান: সম্পূর্ণ নোট**

এই নোটে একটি প্রথম-অর্ডার ডিফারেনশিয়াল ইকুয়েশন ধাপে ধাপে সমাধানের উদাহরণ এবং সাধারণ পদ্ধতি ও কৌশল আলোচনা করা হয়েছে।

---

## **উদাহরণ: একটি ডিফারেনশিয়াল ইকুয়েশনের সমাধান**

### **ধাপ ১: Exact Equation কি না তা পরীক্ষা করা** 🧐

ধরি একটি সমীকরণ আছে:

$$
M(x,y)\,dx + N(x,y)\,dy = 0
$$

এটি **exact** হবে যদি:

$$
\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}
$$

আমাদের দেওয়া সমীকরণটি:

$$
M(x,y) = 12y + 4y^3 + 6x^2, \quad N(x,y) = 3x + 3xy^2
$$

ডেরিভেটিভগুলো হলো:

$$
\frac{\partial M}{\partial y} = 12 + 12y^2, \quad \frac{\partial N}{\partial x} = 3 + 3y^2
$$

যেহেতু

$$
\frac{\partial M}{\partial y} \neq \frac{\partial N}{\partial x},
$$

সুতরাং সমীকরণটি **Exact নয়**।

---

### **ধাপ ২: Integrating Factor (I.F.) বের করা** ⚙️

যদি সমীকরণ **Exact না হয়**, তবে Integrating Factor (I.F.) খুঁজতে হবে।

**N দিয়ে ভাগ করার সূত্র:**

$$
f(x) = \frac{\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}}{N} 
= \frac{(12+12y^2) - (3+3y^2)}{3x + 3xy^2} 
= \frac{9+9y^2}{3x(1+y^2)} 
= \frac{3}{x}
$$

যেহেতু এটি শুধুমাত্র $x$-এর ফাংশন, তাই I.F. হবে:

$$
I.F. = e^{\int f(x)\,dx} = e^{\int \frac{3}{x}\,dx} = e^{3 \ln x} = x^3
$$

---

### **ধাপ ৩: Exact Equation-এ রূপান্তর** ✅

মূল সমীকরণকে $I.F. = x^3$ দিয়ে গুণ করি:

$$
(12y + 4y^3 + 6x^2)x^3 \, dx + (3x + 3xy^2)x^3 \, dy = 0
$$

নতুন $M_1$ এবং $N_1$ হলো:

$$
M_1(x,y) = 12x^3y + 4x^3y^3 + 6x^5, \quad N_1(x,y) = 3x^4 + 3x^4y^2
$$

এখন:

$$
\frac{\partial M_1}{\partial y} = 12x^3 + 12x^3y^2, \quad \frac{\partial N_1}{\partial x} = 12x^3 + 12x^3y^2
$$

দুটো সমান → সমীকরণটি এখন **Exact**।

---

### **ধাপ ৪: Exact Equation সমাধান**

Potential function $F(x,y)$ বের করি:

$$
\frac{\partial F}{\partial x} = M_1, \quad \frac{\partial F}{\partial y} = N_1
$$

$$
F(x,y) = \int M_1\,dx = \int (12x^3y + 4x^3y^3 + 6x^5)\,dx = 3x^4y + x^4y^3 + x^6 + h(y)
$$

এখন $y$-এর সাথে তুলনা করে:

$$
\frac{\partial F}{\partial y} = 3x^4 + 3x^4y^2 + h'(y) = N_1
$$

সুতরাং $h'(y) = 0 \Rightarrow h(y) = C$

---

### **চূড়ান্ত সমাধান**

$$
\boxed{x^6 + x^4y^3 + 3x^4y = C}
$$

---

## **ডিফারেনশিয়াল ইকুয়েশন সমাধানের সাধারণ ফ্লোচার্ট** 🗺️

1. **স্ট্যান্ডার্ড ফর্মে নিন:**

$$
M(x,y)\,dx + N(x,y)\,dy = 0
$$

2. **Exactness পরীক্ষা করুন:**

\[
\frac{\partial M}{\partial y} \stackrel{?}{=} \frac{\partial N}{\partial x}
\]

3. **Non-Exact হলে I.F. বের করুন:**

* $f(x) = \dfrac{\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}}{N}$ (শুধু $x$-এর ফাংশন হলে)  
* অথবা $g(y) = \dfrac{\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}}{M}$ (শুধু $y$-এর ফাংশন হলে)

4. **I.F. গণনা:**

$$
I.F. = e^{\int f(x)\,dx} \quad \text{অথবা} \quad I.F. = e^{\int g(y)\,dy}
$$

5. **Exact Equation তৈরি ও সমাধান করুন:**

$$
\int M\,dx + \int \big(N - (\text{যেসব পদে } x \text{ আছে})\big)\,dy = C
$$

---

## **I.F. সূত্র নির্বাচনের কৌশল** 💡

* **N দিয়ে ভাগ:**

$$
\frac{1}{N}\left(\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}\right)
$$

শুধু $x$-এর ফাংশন হলে ব্যবহার করুন।

* **M দিয়ে ভাগ:**

$$
\frac{1}{M}\left(\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}\right)
$$

শুধু $y$-এর ফাংশন হলে ব্যবহার করুন।

#### **উদাহরণ:**

$$
y \log y \,dx + (x - \log y) \,dy = 0
$$

* $M = y \log y$, $N = x - \log y$
* $\frac{\partial M}{\partial y} = \log y + 1$, $\frac{\partial N}{\partial x} = 1$

**N দিয়ে ভাগ:**

$$
\frac{1}{N}\left(\frac{\partial M}{\partial y}-\frac{\partial N}{\partial x}\right) = \frac{\log y}{x - \log y} \quad (\text{x ও y দুটো আছে}) \; ❌
$$

**M দিয়ে ভাগ:**

$$
\frac{1}{M}\left(\frac{\partial N}{\partial x}-\frac{\partial M}{\partial y}\right) = -\frac{1}{y} \quad (\text{শুধু y}) \; ✅
$$

সুতরাং, I.F. বের করতে হবে দ্বিতীয় সূত্র ব্যবহার করে।

---

### **ধাপ ১: সমীকরণটিকে স্ট্যান্ডার্ড ফর্মে সাজানো**

প্রথমে, আমরা সমীকরণটিকে $M(x,y)dx + N(x,y)dy = 0$ আকারে সাজাবো।

$$
y^2(ydx + 2xdy) - x^2(2ydx + xdy) = 0
$$

$$
y^3dx + 2xy^2dy - 2x^2ydx - x^3dy = 0
$$

এবার $dx$ এবং $dy$ এর সহগগুলো একত্রিত করি:

$$
(y^3 - 2x^2y)\,dx + (2xy^2 - x^3)\,dy = 0
$$

এখানে,  
* $M(x,y) = y^3 - 2x^2y$  
* $N(x,y) = 2xy^2 - x^3$

---

### **ধাপ ২: Exactness পরীক্ষা করা**

এখন সমীকরণটি exact কি না, তা পরীক্ষা করতে হবে।

$$
\frac{\partial M}{\partial y} = \frac{\partial}{\partial y}(y^3 - 2x^2y) = 3y^2 - 2x^2
$$

$$
\frac{\partial N}{\partial x} = \frac{\partial}{\partial x}(2xy^2 - x^3) = 2y^2 - 3x^2
$$

যেহেতু $\frac{\partial M}{\partial y} \neq \frac{\partial N}{\partial x}$, সমীকরণটি **exact নয়**।

---

### **ধাপ ৩: Integrating Factor (I.F.) নির্ণয়**

যেহেতু সমীকরণটি exact নয়, আমাদের একটি Integrating Factor (I.F.) বের করতে হবে।

আগের গণিতের মতো, আমরা প্রথমে দুটি সাধারণ নিয়ম চেষ্টা করবো:

1.  

$$
\frac{1}{N}\left(\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}\right) 
= \frac{(3y^2 - 2x^2) - (2y^2 - 3x^2)}{2xy^2 - x^3} 
= \frac{x^2+y^2}{x(2y^2-x^2)}
$$  

→ এটি শুধু $x$-এর ফাংশন নয়।  

2.  

$$
\frac{1}{M}\left(\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}\right) 
= \frac{(2y^2 - 3x^2) - (3y^2 - 2x^2)}{y^3 - 2x^2y} 
= \frac{-(x^2+y^2)}{y(y^2-2x^2)}
$$  

→ এটি শুধু $y$-এর ফাংশন নয়।

যেহেতু সাধারণ নিয়মগুলো কাজ করছে না, আমাদের অন্য পদ্ধতি দেখতে হবে।  
এই সমীকরণটি একটি **homogeneous** সমীকরণ, তাই এর I.F. $x^a y^b$ আকারের হবে।  
$a$ এবং $b$ এর মান বের করার পর দেখা যায়:  

$$
I.F. = xy
$$

---

### **ধাপ ৪: সমীকরণকে Exact বানানো**

এখন মূল সমীকরণকে $I.F. = xy$ দিয়ে গুণ করে নতুন একটি exact সমীকরণ তৈরি করি।

$$
xy(y^3 - 2x^2y)\,dx + xy(2xy^2 - x^3)\,dy = 0
$$

$$
(xy^4 - 2x^3y^2)\,dx + (2x^2y^3 - x^4y)\,dy = 0
$$

এই নতুন সমীকরণটি এখন exact।

---

### **ধাপ ৫: Exact সমীকরণের সমাধান**

এখন আমরা exact সমীকরণটি সমাধান করবো।  

* নতুন $M_{new} = xy^4 - 2x^3y^2$  
* নতুন $N_{new} = 2x^2y^3 - x^4y$  

সমাধানের সূত্রটি হলো:

$$
\int M_{new}\,dx + \int (\text{N-এর x মুক্ত পদ})\,dy = C
$$

এখানে $N_{new}$-এর প্রতিটি পদে $x$ আছে, তাই দ্বিতীয় অংশটি ০ হবে।

$$
\int (xy^4 - 2x^3y^2)\,dx = C
$$

$y$-কে ধ্রুবক ধরে ইন্টিগ্রেশন করি:

$$
\frac{x^2}{2}y^4 - \frac{x^4}{2}y^2 = C
$$

অথবা,

$$
x^2y^4 - x^4y^2 = C_1
$$

$$
x^2y^2(y^2 - x^2) = C_1
$$

এটিই হলো নির্ণেয় সমাধান।
