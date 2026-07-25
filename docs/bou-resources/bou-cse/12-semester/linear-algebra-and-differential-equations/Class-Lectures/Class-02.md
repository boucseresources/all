**Example ii:**
We are given:

$$
\frac{dy}{dx} = e^x \left( A\sin 2x + B\cos 2x \right) + e^x \left[ A\cos 2x \cdot 2 + B(-\sin 2x) \cdot 2 \right]
$$

This simplifies to:

$$
\frac{dy}{dx} = y + e^x \left( 2A\cos 2x - 2B\sin 2x \right) \tag{1}
$$

Now, differentiating again with respect to $x$:

$$
\frac{d^2y}{dx^2} = y' + e^x \left[ 2(-2A\sin 2x) - 2(2B\cos 2x) \right]
$$

$$
\quad\quad\quad\; + e^x \left( 2A\cos 2x - 2B\sin 2x \right) + \frac{dy}{dx}
$$

From equation (1), substituting $e^x(2A\cos 2x - 2B\sin 2x) = \frac{dy}{dx} - y$, we get:

$$
\frac{d^2y}{dx^2} = -4y + \left( \frac{dy}{dx} - y \right) + \frac{dy}{dx}
$$

Simplifying:

$$
\frac{d^2y}{dx^2} = -4y + 2\frac{dy}{dx} - y
$$

$$
\frac{d^2y}{dx^2} + 5y - 2\frac{dy}{dx} = 0
$$

Hence,

$$
\boxed{\frac{d^2y}{dx^2} - 2\frac{dy}{dx} + 5y = 0}
$$

is the required differential equation.

---

**Example:**
Show that $Ax^2 + By^2 = 1$ is the solution of

$$
x \left\{ y \frac{d^2 y}{dx^2} + \left( \frac{dy}{dx} \right)^2 \right\} = y \frac{dy}{dx}
$$

**Solution:**
Given:

$$
Ax^2 + By^2 = 1
$$

Differentiating with respect to $x$:

$$
A \cdot 2x + B \cdot 2y \frac{dy}{dx} = 0
$$

$$
2Ax + 2By \frac{dy}{dx} = 0
$$

$$
Ax + By \frac{dy}{dx} = 0
$$

$$
Ax = -B y \frac{dy}{dx}
$$

$$
-\frac{A}{B} = \frac{y}{x} \cdot \frac{dy}{dx}
$$

Differentiating again:

$$
0 = \frac{y}{x} \cdot \frac{d^2y}{dx^2} + \frac{dy}{dx} \cdot \frac{x \frac{dy}{dx} - y}{x^2}
$$

Multiplying through by $x^2$:

$$
y \cdot x \frac{d^2y}{dx^2} + x \left( \frac{dy}{dx} \right)^2 - y \frac{dy}{dx} = 0
$$

$$
xy \frac{d^2y}{dx^2} + x \left( \frac{dy}{dx} \right)^2 - y \frac{dy}{dx} = 0
$$

Thus,

$$
x \left\{ y \frac{d^2 y}{dx^2} + \left( \frac{dy}{dx} \right)^2 \right\} = y \frac{dy}{dx}
$$

Hence proved. $\quad \text{(Shown)}$ ✅

---

### Short Question: Concentric Circle Whose Centre is the Origin

![image-40.png](/bou-resources/media-library/image-40.png)
**1.**
A concentric circle with its centre at the origin has the general equation:

$$
x^2 + y^2 = a^2
$$

Differentiating with respect to $x$, we get:

$$
x + y \frac{dy}{dx} = 0
$$

which is the required differential equation.

---

**2.** For a general circle (not necessarily concentric), the equation is:

$$
x^2 + y^2 + 2gx + 2fy + c = 0
$$

Here, the Centre is $(-g, -f)$.

---

আমরা আগে **concept** clear করব, তারপর equation derive করব।

## 1️⃣ Problem-টা আসলে কী বলছে?

আমরা একটা **family of circles** নিয়ে কথা বলছি।
এই circles গুলো special —

- এগুলো **x-axis-কে** (horizontal axis) **origin (0,0)-এ touch করছে**।
- Circle-এর center সবসময় **y-axis-এর উপরে** থাকবে।

📌 মানে, এগুলো এমন হবে ↓
(একটা circle উপরে, যেটা x-axis-এর উপর শুধু এক পয়েন্টে স্পর্শ করছে, নিচে যেতে পারছে না)

---

## 2️⃣ কেন center y-axis-এ?

কারণ:
যদি circle origin-এ x-axis-কে স্পর্শ করে, symmetry-এর কারণে center অবশ্যই x=0 লাইন (y-axis)-এ হবে।
ধরি center = $(0,a)$, radius = $a$ (কারণ center থেকে x-axis পর্যন্ত vertical distance = a, যা radius)।

---

## 3️⃣ Circle-এর Equation লিখি

Center (0,a), radius a ⇒ equation হবে:

$$
(x-0)^2 + (y-a)^2 = a^2
$$

সেটা expand করলে:

$$
x^2 + y^2 - 2ay = 0
$$

এখানে **a** হলো আমাদের parameter (প্রতিটা circle-এর জন্য আলাদা)।

---

## 4️⃣ এখন Derivative নেই

আমরা চাই **differential equation**, মানে parameter a কে বাদ দিয়ে x, y, dy/dx-এর relation।

Equation:

$$
x^2 + y^2 - 2ay = 0
$$

Differentiating wrt x:

$$
2x + 2y \frac{dy}{dx} - 2a \frac{dy}{dx} = 0
$$

2 দিয়ে ভাগ করলে:

$$
x + (y-a) y' = 0
$$

এখানে $y' = \frac{dy}{dx}$।

## 5️⃣ a কে eliminate করি

Original equation থেকে:

$$
2ay = x^2 + y^2
\quad\Rightarrow\quad
a = \frac{x^2 + y^2}{2y}
$$

এখন $y-a$ বের করি:

$$
y-a = y - \frac{x^2 + y^2}{2y}
= \frac{2y^2 - (x^2 + y^2)}{2y}
= \frac{y^2 - x^2}{2y}
= -\frac{x^2 - y^2}{2y}
$$

## 6️⃣ Back to derivative equation

$y-a = -\frac{x^2 - y^2}{2y}$ এটা $x + (y-a)y' = 0$-এ বসাই:

$$
x - \frac{x^2 - y^2}{2y} y' = 0
$$

Multiply by $2y$:

$$
2xy - (x^2 - y^2) y' = 0
$$

Rearrange:

$$
(x^2 - y^2) y' - 2xy = 0
$$

y' এর জায়গায় $\frac{dy}{dx}$ লিখলে:

$$
(x^2 - y^2) \frac{dy}{dx} - 2xy = 0
$$

Cross-multiply করলে:

$$
\boxed{(x^2 - y^2) dy - 2xy dx = 0}
$$

![image-42.png](/bou-resources/media-library/image-42.png)

✅ **এটাই চেয়েছিল।**
**বোঝার লজিক**:

- Geometry থেকে center নির্ধারণ করো
- Equation লেখো
- Differentiate করে parameter বাদ দাও
- Final differential equation পেয়ে যাও

---

## Example:

**Show that the differential equation of a family of circles touching the $x$-axis at the origin is**

$$
(x^2 - y^2) \, dy - 2xy \, dx = 0
$$

---

**Solution:**

The equation of a family of circles touching the $x$-axis at the origin is:

$$
x^2 + y^2 + 2fy + c = 0
$$

Since the circle passes through $(0,0)$,

$$
c = 0
$$

Thus,

$$
x^2 + y^2 + 2fy = 0 \quad \cdots (1)
$$

---

### Step 1: Differentiate w\.r.to $x$

Differentiating (1):

$$
2x + 2y \frac{dy}{dx} + 2f \frac{dy}{dx} = 0
$$

Divide by 2:

$$
x + y \frac{dy}{dx} + f \frac{dy}{dx} = 0 \quad \cdots (2)
$$

---

### Step 2: Eliminate $f$

From (1):

$$
f = -\frac{x^2 + y^2}{2y}
$$

Substitute in (2):

$$
x + y \frac{dy}{dx} - \frac{x^2 + y^2}{2y} \cdot \frac{dy}{dx} = 0
$$

---

### Step 3: Simplify

Multiply through by $2y$:

$$
2xy + 2y^2 \frac{dy}{dx} - (x^2 + y^2) \frac{dy}{dx} = 0
$$

$$
2xy + 2y^2 \frac{dy}{dx} - x^2 \frac{dy}{dx} - y^2 \frac{dy}{dx} = 0
$$

$$
2xy + y^2 \frac{dy}{dx} - x^2 \frac{dy}{dx} = 0
$$

---

### Step 4: Rearrange

$$
2xy \, dx + (y^2 - x^2) dy = 0
$$

Multiply by $-1$:

$$
(x^2 - y^2) dy - 2xy \, dx = 0
$$

---

✅ **Hence proved**:

$$
\boxed{(x^2 - y^2) \, dy - 2xy \, dx = 0}
$$

---

**H.W.:** Find the differential equation of a family of circles touching the **$y$-axis**.

---

**H.W.–2:**
Show that the differential equation of a family of circles

$$
x^2 + y^2 + 2gx + 2fy + c = 0
$$

is

$$
(1 + y'^2) y_3 - 3y' y''^2 = 0
$$

---

**Practice Problem — Find Order & Degree**

**Given equation:**

$$
\sqrt[3]{\left(\frac{d^3y}{dx^3}\right)^4 - 5x\frac{d^2y}{dx^2} + y} = \sqrt[5]{\left(\frac{dy}{dx}\right)^2 + y^2 - x}
$$

---

### **Step 1: Order**

- The highest order derivative present is $\frac{d^3y}{dx^3}$.
- Therefore, **Order = 3**.

---

### **Step 2: Degree**

- The cube root applies to the **entire left-hand side** expression, and the fifth root applies to the **entire right-hand side**.
- Remove both roots by raising both sides to the 15th power (LCM of 3 and 5):

$$
\left[\left(\frac{d^3y}{dx^3}\right)^4 - 5x\frac{d^2y}{dx^2} + y\right]^5 = \left[\left(\frac{dy}{dx}\right)^2 + y^2 - x\right]^3
$$

- Now, the highest derivative term becomes:

$$
\left(\frac{d^3y}{dx^3}\right)^{4 \times 5} = \left(\frac{d^3y}{dx^3}\right)^{20}
$$

- Hence, **Degree = 20**.

**Final Answer:**

$$
\boxed{\text{Order} = 3, \quad \text{Degree} = 20}
$$

---

**Differential Equation of First Order and First Degree**

The most general form of an ordinary differential equation of the 1st order and 1st degree is:

$$
M\,dx + N\,dy = 0
$$

or equivalently,

$$
N \frac{dy}{dx} + M = 0
$$

where both $M$ and $N$ are functions of $x$ and $y$, or constants, and do not involve any derivatives.

---

**Solution Methods:**

1. **Separation of Variables** – Variables are separated so that all $x$ terms are on one side and all $y$ terms on the other.
2. **Homogeneous Equation** – Equation in which $M$ and $N$ are homogeneous functions of the same degree.
3. **Equation Reducible to Homogeneous Form** – Transformed into homogeneous type by substitution.
4. **Exact Equation** – Condition: $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$.
5. **Linear Equation** – Follows the form $\frac{dy}{dx} + P(x)y = Q(x)$.
6. **Equation Reducible to Linear Form** – Can be rearranged into the linear equation format.

**Example 1 — Separation of Variables**

**Solve:**

$$
x^2 (y - 1)\, dx + y^2 (x - 1)\, dy = 0
$$

**Solution:**
Given:

$$
x^2 (y - 1)\, dx + y^2 (x - 1)\, dy = 0
$$

Divide through by $(x - 1)(y - 1)$:

$$
\frac{x^2}{x - 1}\, dx + \frac{y^2}{y - 1}\, dy = 0
$$

Rewrite:

$$
\left(x + 1 + \frac{1}{x - 1}\right) dx + \left(y + 1 + \frac{1}{y - 1}\right) dy = 0
$$

Integrate both sides:

$$
\int x\, dx + \int 1\, dx + \int \frac{1}{x - 1} dx
+ \int y\, dy + \int 1\, dy + \int \frac{1}{y - 1} dy = C
$$

$$
\frac{x^2}{2} + x + \log|x - 1| + \frac{y^2}{2} + y + \log|y - 1| = C
$$

Multiply by 2 (or combine constants):

$$
x^2 + y^2 + 2x + 2y + \log(x - 1) + \log(y - 1) = C
$$

where $C$ is an arbitrary constant.

---

**Example — 2**
Solve:

$$
\frac{dy}{dx} = e^{x+y} + x^2 e^{-y}
$$

**Solution:**

$$
\frac{dy}{dx} = e^x \cdot e^y + x^2 \cdot e^{-y}
$$

Actually, write directly:

$$
e^y \frac{dy}{dx} = e^x + x^2
$$

Now integrate both sides with respect to $x$:

$$
\int e^y \, dy = \int e^x \, dx + \int x^2 \, dx
$$

$$
e^y = e^x + \frac{x^3}{3} + C
$$

---

!!! question "HW-02"

    ❓**H.W.–2:**
    Show that the differential equation of a family of circles

    $$
    x^2 + y^2 + 2gx + 2fy + c = 0
    $$

    _(এটা হল general equation of a circle, যেখানে g, f, c constant — different circles এর জন্য g, f, c এর মান আলাদা হতে পারে)_

    is

    $$
    (1 + y_1^{\,2})\,y_3 - 3y_1\,y_2^{\,2} = 0,
    $$

    _(আমাদের লক্ষ্য এই form-টা প্রমাণ করা, যেখানে $y_1, y_2, y_3$ হলো প্রথম, দ্বিতীয় ও তৃতীয় derivative)_

    where $y_1=\dfrac{dy}{dx},\; y_2=\dfrac{d^2y}{dx^2},\; y_3=\dfrac{d^3y}{dx^3}$.

    ---

    Given family:

    $$
    x^2+y^2+2gx+2fy+c=0 \quad (g,f,c \text{ constants})
    $$

    **1st derivative →** $x+yy_1+g+fy_1=0$ … (A)
    _(এখানে দুই পাশে $d/dx$ করলাম; $y^2$ এর derivative = $2y \cdot y_1$, আবার $2fy$ এর derivative = $2f \cdot y_1$, তারপর 2 দিয়ে divide করায় এই ফর্ম পেলাম)_

    **2nd derivative →** $1+y_1^2+yy_2+fy_2=0$

    _(আবার derivative করলাম; $y y_1$ এর derivative = $y_1^2 + y y_2$)_

    $$
    \Rightarrow\ (y+f)\,y_2=-(1+y_1^2) \quad\text{… (B)}
    $$

    _(এখানে $y_2$ এর term গুলো একসাথে করে, $y+f$ factor হিসেবে বের করে নিলাম)_

    **3rd derivative of (2nd) →** $3y_1y_2+(y+f)\,y_3=0$ … (C)

    _(এবার দ্বিতীয় derivative সমীকরণটার derivative করলাম; $y_1^2$ এর derivative = $2y_1y_2$, সাথে $(y+f) y_2$ এর derivative দিলে $y_1 y_2 + (y+f) y_3$ — সব মিলে $3y_1 y_2 + (y+f) y_3$)_

    **(B) থেকে $(y+f)=-(1+y_1^2)/y_2$ বসিয়ে (C):**
    _(আগের ধাপের (B) থেকে $y+f$ এর মান নিলাম এবং (C)-তে বসালাম)_

    $$
    3y_1y_2-\frac{1+y_1^2}{y_2}\,y_3=0
    $$

    _(এখানে $y+f$ এর জায়গায় fraction বসেছে, আর minus sign কে adjust করে এই ফর্ম এসেছে)_

    $$
    \boxed{(1+y_1^2)\,y_3-3y_1\,y_2^2=0}
    $$

    _(শেষে rearrange করে ঠিক আমাদের প্রমাণ করতে চাওয়া final equation পেলাম ✅)_
