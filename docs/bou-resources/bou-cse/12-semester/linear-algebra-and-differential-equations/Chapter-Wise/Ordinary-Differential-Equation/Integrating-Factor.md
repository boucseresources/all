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

$$
\frac{\partial M}{\partial y} \stackrel{!}{=} \frac{\partial N}{\partial x}
$$

3. **Non-Exact হলে I.F. বের করুন:**

- $f(x) = \dfrac{\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}}{N}$ (শুধু $x$-এর ফাংশন হলে)
- অথবা $g(y) = \dfrac{\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}}{M}$ (শুধু $y$-এর ফাংশন হলে)

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

- **N দিয়ে ভাগ:**

$$
\frac{1}{N}\left(\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}\right)
$$

শুধু $x$-এর ফাংশন হলে ব্যবহার করুন।

- **M দিয়ে ভাগ:**

$$
\frac{1}{M}\left(\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}\right)
$$

শুধু $y$-এর ফাংশন হলে ব্যবহার করুন।

#### **উদাহরণ:**

$$
y \log y \,dx + (x - \log y) \,dy = 0
$$

- $M = y \log y$, $N = x - \log y$
- $\frac{\partial M}{\partial y} = \log y + 1$, $\frac{\partial N}{\partial x} = 1$

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

- $M(x,y) = y^3 - 2x^2y$
- $N(x,y) = 2xy^2 - x^3$

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

- নতুন $M_{new} = xy^4 - 2x^3y^2$
- নতুন $N_{new} = 2x^2y^3 - x^4y$

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

---

!!! example "$(12y + 4y^3 + 6x^2)dx + 3(x + xy^2)dy = 0$"

    ### **ধাপ ১: স্ট্যান্ডার্ড ফর্ম**

    প্রদত্ত সমীকরণ:

    $$
    (12y + 4y^3 + 6x^2)dx + 3(x + xy^2)dy = 0
    $$

    যেখানে

    $$
    M(x,y) = 12y + 4y^3 + 6x^2, \quad N(x,y) = 3x + 3xy^2
    $$

    ---

    ### **ধাপ ২: Exactness পরীক্ষা**

    $$
    \frac{\partial M}{\partial y} = 12 + 12y^2, \quad
    \frac{\partial N}{\partial x} = 3 + 3y^2
    $$

    যেহেতু $\frac{\partial M}{\partial y} \neq \frac{\partial N}{\partial x}$, সমীকরণটি **exact নয়**।

    ---

    ### **ধাপ ৩: Integrating Factor (I.F.) নির্ণয়**

    ফর্মুলা:

    $$
    f(x) = \frac{1}{N} \Big(\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}\Big)
    $$

    প্রদত্ত সমীকরণের জন্য:

    $$
    f(x) = \frac{(12 + 12y^2) - (3 + 3y^2)}{3x + 3xy^2} = \frac{9 + 9y^2}{3x(1 + y^2)} = \frac{3}{x}
    $$

    যেহেতু $f(x)$ কেবল $x$-এর উপর নির্ভর করে, I.F. হবে:

    $$
    I.F. = e^{\int f(x) dx} = e^{\int \frac{3}{x} dx} = e^{3 \ln x} = x^3
    $$

    * **I.F. = $x^3$**

    ---

    ### **ধাপ ৪: সমীকরণকে Exact বানানো**

    মূল সমীকরণে I.F. দ্বারা গুণ করলে:

    $$
    x^3(12y + 4y^3 + 6x^2)dx + x^3(3x + 3xy^2)dy = 0
    $$

    $$
    (12x^3y + 4x^3y^3 + 6x^5)dx + (3x^4 + 3x^4y^2)dy = 0
    $$

    ---

    ### **ধাপ ৫: Exact সমীকরণের সমাধান**

    নতুন exact সমীকরণে:

    $$
    M_{new} = 12x^3y + 4x^3y^3 + 6x^5, \quad N_{new} = 3x^4 + 3x^4y^2
    $$

    সমাধান সূত্র:

    $$
    \int M_{new}\,dx + \int (\text{N-এর x মুক্ত পদ})\,dy = C
    $$

    $N_{new}$-এর প্রতিটি পদে $x$ থাকায় দ্বিতীয় অংশটি ০ হবে।

    $$
    \int (12x^3y + 4x^3y^3 + 6x^5)dx = C
    $$

    $$
    12y\frac{x^4}{4} + 4y^3\frac{x^4}{4} + 6\frac{x^6}{6} = C
    $$

    $$
    3x^4y + x^4y^3 + x^6 = C
    $$

    সাজিয়ে লিখলে:

    $$
    x^6 + x^4y^3 + 3x^4y = C
    $$

    এটিই হলো নির্ণেয় সমাধান।

---

!!! example "Example: Solve the differential equation"

    ### Step 1: Standard Form

    Write the equation in standard form $M(x,y)dx + N(x,y)dy = 0$:

    $$
    (12y + 4y^3 + 6x^2)dx + 3(x + xy^2)dy = 0
    $$

    Here,

    $$
    M(x,y) = 12y + 4y^3 + 6x^2, \quad N(x,y) = 3x + 3xy^2
    $$

    ---

    ### Step 2: Test for Exactness

    Compute the partial derivatives:

    $$
    \frac{\partial M}{\partial y} = 12 + 12y^2, \quad
    \frac{\partial N}{\partial x} = 3 + 3y^2
    $$

    Since $\frac{\partial M}{\partial y} \neq \frac{\partial N}{\partial x}$, the equation is **not exact**.

    ---

    ### Step 3: Find the Integrating Factor (I.F.)

    Use the formula:

    $$
    f(x) = \frac{1}{N}\left(\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}\right)
    $$

    Substitute the values:

    $$
    f(x) = \frac{(12 + 12y^2) - (3 + 3y^2)}{3x + 3xy^2} = \frac{3}{x}
    $$

    Since $f(x)$ depends only on $x$, the Integrating Factor is:

    $$
    I.F. = e^{\int f(x) dx} = e^{3 \ln x} = x^3
    $$

    ---

    ### Step 4: Make the Equation Exact

    Multiply the original equation by $x^3$:

    $$
    x^3(12y + 4y^3 + 6x^2)dx + x^3(3x + 3xy^2)dy = 0
    $$

    Simplify:

    $$
    (12x^3y + 4x^3y^3 + 6x^5)dx + (3x^4 + 3x^4y^2)dy = 0
    $$

    ---

    ### Step 5: Solve the Exact Equation

    Here,

    $$
    M_{new} = 12x^3y + 4x^3y^3 + 6x^5, \quad N_{new} = 3x^4 + 3x^4y^2
    $$

    Since all terms in $N_{new}$ contain $x$, the second integral is $0$. Integrate $M_{new}$ with respect to $x$, treating $y$ as constant:

    $$
    \int (12x^3y + 4x^3y^3 + 6x^5) dx = 3x^4y + x^4y^3 + x^6 = C
    $$

    Final solution:

    $$
    x^6 + x^4y^3 + 3x^4y = C
    $$

---

!!! info " $y \log y \,dx + (x - \log y) \,dy = 0$ "

    ### **Step 1: Standard Form**

    The equation is already in the standard form $M(x,y)dx + N(x,y)dy = 0$.

    $$y \log y \,dx + (x - \log y) \,dy = 0$$

    Here, we can identify:
    * $M(x,y) = y \log y$
    * $N(x,y) = x - \log y$

    ---

    ### **Step 2: Test for Exactness**

    Next, we check if the equation is **exact** by calculating the partial derivatives.

    * To find $\frac{\partial M}{\partial y}$, we use the product rule:

        $$\frac{\partial M}{\partial y} = \frac{\partial}{\partial y}(y \log y) = (1)(\log y) + y\left(\frac{1}{y}\right) = \log y + 1$$

    * Now we find $\frac{\partial N}{\partial x}$:

        $$\frac{\partial N}{\partial x} = \frac{\partial}{\partial x}(x - \log y) = 1$$

    Since $\frac{\partial M}{\partial y} \neq \frac{\partial N}{\partial x}$, the equation is **not exact**.

    ---

    ### **Step 3: Find the Integrating Factor (I.F.)**

    Since the equation is not exact, we need an **Integrating Factor (I.F.)**.

    First, we test the rule for a function of $x$:

    $$\frac{1}{N}\left(\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}\right) = \frac{(\log y + 1) - 1}{x - \log y} = \frac{\log y}{x - \log y}$$

    This expression contains both $x$ and $y$, so it won't work.

    Next, we test the rule for a function of $y$:

    $$g(y) = \frac{1}{M}\left(\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}\right)$$

    $$g(y) = \frac{1 - (\log y + 1)}{y \log y} = \frac{1 - \log y - 1}{y \log y} = \frac{-\log y}{y \log y} = -\frac{1}{y}$$

    This result is a function of $y$ only, so we can use it to find the I.F.

    $$I.F. = e^{\int g(y)dy} = e^{\int -\frac{1}{y}dy} = e^{-\ln y} = e^{\ln(y^{-1})} = y^{-1} = \frac{1}{y}$$

    The Integrating Factor is **$\frac{1}{y}$**.

    ---

    ### **Step 4: Make the Equation Exact**

    Now, we multiply the original equation by the I.F. ($\frac{1}{y}$) to make it exact.

    $$\frac{1}{y} \big(y \log y \,dx\big) + \frac{1}{y} \big((x - \log y) \,dy\big) = 0$$

    $$\log y \,dx + \left(\frac{x}{y} - \frac{\log y}{y}\right)dy = 0$$

    ---

    ### **Step 5: Solve the Exact Equation**

    This new equation is exact. The solution is found using the formula:

    $$
    \int\limits_{\substack{y=\text{const.}}} M_{new}\,dx
    \;+\; \int (\text{terms in } N_{new} \text{ free from } x)\,dy = C
    $$

    Here,

    * $M_{new} = \log y$
    * $N_{new} = \frac{x}{y} - \frac{\log y}{y}$

    The term in $N_{new}$ that is free from $x$ is $-\frac{\log y}{y}$.

    Now we integrate:

    $$\int \log y \,dx + \int \left(-\frac{\log y}{y}\right)dy = C$$

    * **First integral** (treating $y$ as a constant):

        $$\int \log y \,dx = x \log y$$

    * **Second integral** (using substitution, let $u = \log y$):

        $$
        \int \left(-\frac{\log y}{y}\right)dy = -\int u \,du = -\frac{u^2}{2} = -\frac{(\log y)^2}{2}
        $$

    Combining the parts gives the final solution:

    $$x \log y - \frac{(\log y)^2}{2} = C$$

---

!!! info "Solution Method:01: $y^2(ydx + 2xdy) - x^2(2ydx + xdy) = 0$ "

    ### **Step 1: Standard Form**

    First, we need to expand the equation and arrange it into the standard form $M(x,y)dx + N(x,y)dy = 0$.

    $$y^2(ydx + 2xdy) - x^2(2ydx + xdy) = 0$$
    $$y^3dx + 2xy^2dy - 2x^2ydx - x^3dy = 0$$

    Now, we group the $dx$ and $dy$ terms:

    $$(y^3 - 2x^2y)dx + (2xy^2 - x^3)dy = 0$$

    From this, we can identify:
    * $M(x,y) = y^3 - 2x^2y$
    * $N(x,y) = 2xy^2 - x^3$

    ---

    ### **Step 2: Test for Exactness**

    Next, we check if the equation is **exact** by calculating the partial derivatives.

    $$\frac{\partial M}{\partial y} = \frac{\partial}{\partial y}(y^3 - 2x^2y) = 3y^2 - 2x^2$$

    $$\frac{\partial N}{\partial x} = \frac{\partial}{\partial x}(2xy^2 - x^3) = 2y^2 - 3x^2$$

    Since $\frac{\partial M}{\partial y} \neq \frac{\partial N}{\partial x}$, the equation is **not exact**.

    ---

    ### **Step 3: Find the Integrating Factor (I.F.)**

    We need to find an **Integrating Factor (I.F.)**. The two standard rules for finding an I.F. do not yield a function of a single variable in this case.

    However, since the equation is a **homogeneous** differential equation, we can look for an integrating factor of the form $x^a y^b$. By solving for the exponents, we find that $a=1$ and $b=1$.

    Therefore, the Integrating Factor is **$xy$**.

    ---

    ### **Step 4: Make the Equation Exact**

    Now, we multiply the standard form of the equation by the I.F. ($xy$) to make it exact.

    $$xy \big((y^3 - 2x^2y)dx\big) + xy \big((2xy^2 - x^3)dy\big) = 0$$

    $$(xy^4 - 2x^3y^2)dx + (2x^2y^3 - x^4y)dy = 0$$

    ---

    ### **Step 5: Solve the Exact Equation**

    This new equation is exact. The solution is found using the formula:

    $$\int M_{new}\,dx + \int (\text{terms in } N_{new} \text{ free from } x)\,dy = C$$

    Here,
    * $M_{new} = xy^4 - 2x^3y^2$
    * $N_{new} = 2x^2y^3 - x^4y$

    Since all terms in $N_{new}$ contain $x$, the second integral is $0$. We only need to integrate $M_{new}$ with respect to $x$, treating $y$ as a constant.

    $$\int (xy^4 - 2x^3y^2)dx = C$$

    $$y^4\left(\frac{x^2}{2}\right) - 2y^2\left(\frac{x^4}{4}\right) = C$$

    $$\frac{x^2y^4}{2} - \frac{x^4y^2}{2} = C$$

    To simplify, we can multiply the entire equation by 2 (and absorb it into the constant $C$):

    $$x^2y^4 - x^4y^2 = C_1$$

    Factoring out the common terms gives the final solution:

    $$x^2y^2(y^2 - x^2) = C_1$$

!!! info "Solution Method:02 $y^2(ydx + 2xdy) - x^2(2ydx + xdy) = 0$ "

    ### **Step 1: Rearrange into $\frac{dy}{dx}$ form**

    First, we expand and group the terms to isolate $\frac{dy}{dx}$.

    $$y^3dx + 2xy^2dy - 2x^2ydx - x^3dy = 0$$

    $$(2xy^2 - x^3)dy = (2x^2y - y^3)dx$$

    $$\frac{dy}{dx} = \frac{2x^2y - y^3}{2xy^2 - x^3}$$

    This is a **homogeneous equation** because all terms in the numerator and denominator are of the same degree (degree 3).

    ---

    ### **Step 2: Apply the Substitution**

    We use the substitution **$y=vx$**, which implies **$\frac{dy}{dx} = v + x\frac{dv}{dx}$**.

    Substitute these into the equation:

    $$v + x\frac{dv}{dx} = \frac{2x^2(vx) - (vx)^3}{2x(vx)^2 - x^3}$$

    Now, we simplify the right side by factoring out $x^3$:

    $$v + x\frac{dv}{dx} = \frac{x^3(2v - v^3)}{x^3(2v^2 - 1)} = \frac{2v - v^3}{2v^2 - 1}$$

    ---

    ### **Step 3: Separate the Variables**

    Next, we isolate the $v$ and $x$ variables.

    $$x\frac{dv}{dx} = \frac{2v - v^3}{2v^2 - 1} - v$$

    $$x\frac{dv}{dx} = \frac{2v - v^3 - v(2v^2 - 1)}{2v^2 - 1}$$

    $$x\frac{dv}{dx} = \frac{2v - v^3 - 2v^3 + v}{2v^2 - 1} = \frac{3v - 3v^3}{2v^2 - 1}$$

    $$x\frac{dv}{dx} = \frac{3v(1 - v^2)}{2v^2 - 1}$$

    Now, we rearrange to separate the variables for integration:

    $$\frac{2v^2 - 1}{3v(1 - v^2)}dv = \frac{1}{x}dx$$

    ---

    ### **Step 4: Integrate Both Sides**

    The left side requires integration by **partial fractions**, which breaks it down into:

    $$\frac{1}{3} \int \left( -\frac{1}{v} + \frac{1/2}{1-v} - \frac{1/2}{1+v} \right)dv = \int \frac{1}{x}dx$$

    Integrating both sides gives us:

    $$\frac{1}{3} \left[ -\ln|v| - \frac{1}{2}\ln|1-v| - \frac{1}{2}\ln|1+v| \right] = \ln|x| + C$$

    Let's simplify the logarithmic terms:

    $$-\ln|v| - \frac{1}{2}\ln|1-v^2| = 3\ln|x| + C_1$$

    $$\ln|x^3| + \ln|v| + \ln|\sqrt{1-v^2}| = C_2$$

    $$\ln|x^3 v \sqrt{1-v^2}| = C_2$$

    $$x^3 v \sqrt{1-v^2} = C_3$$

    ---

    ### **Step 5: Substitute Back**

    Finally, substitute **$v = \frac{y}{x}$** back into the equation.

    $$x^3 \left(\frac{y}{x}\right) \sqrt{1 - \left(\frac{y}{x}\right)^2} = C_3$$

    $$x^2 y \sqrt{\frac{x^2 - y^2}{x^2}} = C_3$$

    $$x^2 y \frac{\sqrt{x^2 - y^2}}{x} = C_3$$

    $$xy \sqrt{x^2 - y^2} = C_3$$

    Squaring both sides gives the final, simplified solution:

    $$x^2y^2(x^2 - y^2) = C$$

---

!!! example " $$(1 + xy)y \,dx + (1 - xy)x \,dy = 0$$ "

    $$(1 + xy)y \,dx + (1 - xy)x \,dy = 0$$

    $$y \,dx + xy^2 \,dx + x \,dy - x^2y \,dy = 0$$

    $$(y \,dx + x \,dy) = x^2y \,dy - xy^2 \,dx$$

    $$d(xy) = xy(x \,dy - y \,dx)$$

    *Substitute $x \,dy - y \,dx = x^2 d\left(\frac{y}{x}\right)$*

    $$d(xy) = xy \left[x^2 d\left(\frac{y}{x}\right)\right]$$

    $$d(xy) = x^3y \,d\left(\frac{y}{x}\right)$$

    *Rewrite the coefficient $x^3y = \frac{(xy)^2}{y/x}$*

    $$d(xy) = \frac{(xy)^2}{y/x} \,d\left(\frac{y}{x}\right)$$

    $$\frac{d(xy)}{(xy)^2} = \frac{d(y/x)}{y/x}$$

    $$\int \frac{d(xy)}{(xy)^2} = \int \frac{d(y/x)}{y/x}$$

    $$-\frac{1}{xy} = \ln\left|\frac{y}{x}\right| + C$$

---

!!! info "s" 

    **Given Differential Equation:**

    $$(6x - 5y + 4)dy + (y - 2x - 1)dx = 0$$

    ### Step 1: Rearrange and Prepare for Substitution

    First, we write the equation in the form $\frac{dy}{dx}$:

    $$\frac{dy}{dx} = - \frac{y - 2x - 1}{6x - 5y + 4} = \frac{2x - y + 1}{6x - 5y + 4} \quad \cdots (1)$$

    Since $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$ (i.e., $\frac{2}{6} \neq \frac{-1}{-5}$), we use the substitution:

    Let $x = x' + h \implies dx = dx'$
    Let $y = y' + k \implies dy = dy'$

    Equation (1) becomes:

    $$\frac{dy'}{dx'} = \frac{2(x' + h) - (y' + k) + 1}{6(x' + h) - 5(y' + k) + 4} = \frac{2x' - y' + (2h - k + 1)}{6x' - 5y' + (6h - 5k + 4)}$$

    To make this homogeneous, we solve:

    1.  $2h - k + 1 = 0$
    2.  $6h - 5k + 4 = 0$

    **Correction 1:** The values for $h$ and $k$ must be calculated correctly.
    From (1), $k = 2h + 1$. Substituting into (2):
    $6h - 5(2h+1) + 4 = 0 \implies 6h - 10h - 5 + 4 = 0 \implies -4h - 1 = 0 \implies h = -\frac{1}{4}$.
    Then, $k = 2(-\frac{1}{4}) + 1 = \frac{1}{2}$.
    (Your work had an error in the sign of $h$).

    ### Step 2: Solve the Homogeneous Equation

    The equation reduces to the homogeneous form:

    $$\frac{dy'}{dx'} = \frac{2x' - y'}{6x' - 5y'} \quad \cdots (2)$$

    Again, let $y' = vx'$. Differentiating with respect to $x'$ gives $\frac{dy'}{dx'} = v + x' \frac{dv}{dx'} \quad \cdots (3)$.

    From (2) and (3):

    $$v + x' \frac{dv}{dx'} = \frac{2x' - vx'}{6x' - 5vx'} = \frac{2 - v}{6 - 5v}$$

    $$x' \frac{dv}{dx'} = \frac{2 - v}{6 - 5v} - v$$

    **Correction 2:** The next algebraic step in your work contained a sign error.

    $$x' \frac{dv}{dx'} = \frac{2 - v - v(6 - 5v)}{6 - 5v} = \frac{2 - v - 6v + 5v^2}{6 - 5v}$$

    $$x' \frac{dv}{dx'} = \frac{5v^2 - 7v + 2}{6 - 5v}$$

    ### Step 3: Separate Variables and Integrate

    Now, we separate the variables. This will look different from your version due to the corrected algebra above.

    $$\frac{dx'}{x'} = \frac{6 - 5v}{5v^2 - 7v + 2} dv$$The denominator factors to $(v-1)(5v-2)$. Using partial fractions:$$\frac{6 - 5v}{(v-1)(5v-2)} = \frac{A}{v-1} + \frac{B}{5v-2}$$
    
    Solving this gives $A = \frac{1}{3}$ and $B = -\frac{20}{3}$.

    Now, we arrange for integration:

    $$\frac{dx'}{x'} = \left[ \frac{1}{3(v-1)} - \frac{20}{3(5v-2)} \right] dv$$

    $$\int \frac{dx'}{x'} - \int \frac{1}{3(v-1)} dv + \int \frac{20}{3(5v-2)} dv = 0$$

    Now integrating all terms:
    $$\ln|x'| - \frac{1}{3}\ln|v-1| + \frac{20}{3} \cdot \frac{1}{5}\ln|5v-2| = C_1$$

    $$\ln|x'| - \frac{1}{3}\ln|v-1| + \frac{4}{3}\ln|5v-2| = C_1$$
    
    Multiply by 3 to clear the fractions and set $3C_1 = \ln C$:
    
    $$3\ln|x'| - \ln|v-1| + 4\ln|5v-2| = \ln C$$Using logarithm properties:$$\ln|(x')^3| - \ln|v-1| + \ln|(5v-2)^4| = \ln C$$
    
    $$\ln \left| \frac{(x')^3 (5v-2)^4}{v-1} \right| = \ln C$$$$\frac{(x')^3 (5v-2)^4}{v-1} = C$$

    $$(x')^3 (5v-2)^4 = C(v-1)$$

    ### Step 4: Back-Substitute

    Substitute $x' = x + \frac{1}{4}$, $y' = y - \frac{1}{2}$, and $v = \frac{y'}{x'} = \frac{y-1/2}{x+1/4} = \frac{4y-2}{4x+1}$.

    After substitution and simplification (as shown in the previous detailed answer), we arrive at the final solution:

    $$(4y - 4x - 3) = K(5y - 2x - 3)^4$$

    where $K$ is the final constant.


---



Of course. Here is the solution, following the exact step-by-step format from the image, but with all the necessary corrections.

***

**Given Equation:**
$$\frac{dy}{dx} = \frac{4x+6y+5}{3y+2x+4} = \frac{2(2x+3y)+5}{(2x+3y)+4}$$

**Let** $2x + 3y = t$
Differentiating with respect to $x$:


$$2 + 3\frac{dy}{dx} = \frac{dt}{dx}$$

$$\frac{dy}{dx} = \frac{1}{3}\left(\frac{dt}{dx} - 2\right)$$

Substituting this into the original equation:$$\frac{1}{3}\left(\frac{dt}{dx} - 2\right) = \frac{2t+5}{t+4}$$

Now, we solve for $\frac{dt}{dx}$:

$$\frac{1}{3}\frac{dt}{dx} = \frac{2t+5}{t+4} + \frac{2}{3}$$

$$\frac{1}{3}\frac{dt}{dx} = \frac{3(2t+5) + 2(t+4)}{3(t+4)} = \frac{6t+15+2t+8}{3(t+4)}$$

$$\frac{1}{3}\frac{dt}{dx} = \frac{8t+23}{3(t+4)}$$

Canceling the $\frac{1}{3}$ on both sides gives:

$$\frac{dt}{dx} = \frac{8t+23}{t+4}$$

Now, we separate the variables and integrate:

$$\int \frac{t+4}{8t+23} dt = \int dx$$

To perform the integration on the left, we manipulate the fraction:

$$\frac{1}{8} \int \frac{8(t+4)}{8t+23} dt = x + C$$

$$\frac{1}{8} \int \frac{8t+32}{8t+23} dt = x + C$$

$$\frac{1}{8} \int \frac{(8t+23) + 9}{8t+23} dt = x + C$$

$$\frac{1}{8} \int \left(1 + \frac{9}{8t+23}\right) dt = x + C$$

$$\frac{1}{8} \left[ \int 1 \ dt + \int \frac{9}{8t+23} dt \right] = x + C$$

$$\frac{1}{8} \left[ t + \frac{9}{8}\ln|8t+23| \right] = x + C$$

$$ Multiplying by 8:$$

$$t + \frac{9}{8}\ln|8t+23| = 8x + 8C$$ 

Now, substitute back $t = 2x + 3y$:

$$(2x+3y) + \frac{9}{8}\ln|8(2x+3y)+23| = 8x + 8C$$


$$(2x+3y) + \frac{9}{8}\ln|16x+24y+23| = 8x + K \quad (\text{where } K = 8C)$$

Multiplying by 8 again to clear the fraction:

$$8(2x+3y) + 9\ln|16x+24y+23| = 64x + 8K$$

$$16x + 24y + 9\ln|16x+24y+23| = 64x + K' \quad (\text{where } K' = 8K)$$

$$24y - 48x + 9\ln|16x+24y+23| = K'$$

Finally, dividing by 3 for the simplest form:

$$\mathbf{8y - 16x + 3\ln|16x+24y+23| = K''}$$
