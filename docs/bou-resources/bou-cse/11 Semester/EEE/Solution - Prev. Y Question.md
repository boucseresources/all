---
dg-home: false
dg-publish: true
aliases: 
tags:
---

### ✅ Enhanced Question for University Level (20 Marks):

**Q:**
*Coulomb’s Law and Biot–Savart Law both describe fundamental interactions in electromagnetism, yet they apply to different physical phenomena. Define each law mathematically and conceptually. Then, compare and contrast them in terms of the physical quantities involved, the nature of forces or fields they describe, their vector characteristics, dependence on medium and distance, and their respective applications in real-world problems.*

---

### ✅ Answer:

#### 🔷 **1. Coulomb’s Law – Electric Field due to Point Charge:**

**Statement:**

Coulomb’s Law describes the **electrostatic force** between two stationary point charges.
It is **inversely proportional to the square of the distance** between the charges and **directly proportional to the product of their magnitudes**.

**Mathematical Form:**

$$
\vec{F} = \frac{1}{4\pi\varepsilon_0} \cdot \frac{q_1 q_2}{r^2} \cdot \hat{r}
$$

Where:

* $\vec{F}$ = Electrostatic force
* $q_1, q_2$ = Point charges
* $r$ = Distance between charges
* $\varepsilon_0$ = Permittivity of free space
* $\hat{r}$ = Unit vector from source to test charge

---

#### 🔷 **2. Biot–Savart Law – Magnetic Field due to Current Element:**

**Statement:**

Biot–Savart Law gives the **magnetic field** produced at a point in space due to a small **current-carrying element**.
It is also **inversely proportional to the square of the distance**, but it involves **current and direction of motion**.

**Mathematical Form:**

$$
\vec{B} = \frac{\mu_0}{4\pi} \int \frac{I \, d\vec{l} \times \hat{r}}{r^2}
$$

Where:

* $\vec{B}$ = Magnetic field
* $I$ = Current
* $d\vec{l}$ = Vector length element of the conductor
* $\hat{r}$ = Unit vector from element to point of observation
* $r$ = Distance from current element to point
* $\mu_0$ = Permeability of free space

---

### 🔁 **3. Comparison: Coulomb’s Law vs Biot–Savart Law**

| Feature                 | **Coulomb’s Law**               | **Biot–Savart Law**                          |
| ----------------------- | ------------------------------- | -------------------------------------------- |
| **Describes**           | Electric force between charges  | Magnetic field due to current                |
| **Source**              | Stationary point charges        | Moving charges (current elements)            |
| **Vector Nature**       | Acts along line joining charges | Perpendicular to current and position vector |
| **Equation Type**       | Scalar magnitude × direction    | Vector cross product                         |
| **Field Produced**      | Electric Field ( $\vec{E}$ )    | Magnetic Field ( $\vec{B}$ )                 |
| **Constant**            | $\frac{1}{4\pi\varepsilon_0}$   | $\frac{\mu_0}{4\pi}$                         |
| **Medium Dependence**   | Depends on $\varepsilon$        | Depends on $\mu$                             |
| **Distance Dependence** | $\propto \frac{1}{r^2}$         | $\propto \frac{1}{r^2}$                      |
| **Applicability**       | Electrostatics                  | Magnetostatics                               |
| **Direction**           | Radial (along line)             | Determined by Right-Hand Rule                |

---

### 🎯 **4. Applications:**

* **Coulomb’s Law:**

  * Design of capacitors
  * Electric force calculations in molecular and atomic physics
  * Field mapping around point charges

* **Biot–Savart Law:**

  * Magnetic field due to a wire, coil, or loop
  * Basis for deriving Ampère’s Law
  * Used in designing electromagnets and inductors

---

### 📝 Conclusion:

While **Coulomb’s Law** governs **electrostatics** and is foundational for understanding electric forces and fields, the **Biot–Savart Law** is central to **magnetostatics**, describing how **moving charges** (currents) generate magnetic fields. Both are essential tools in electromagnetism but apply to **distinct phenomena** governed by different field sources and vector behaviors.

---


Certainly! Here's a **university-level enhanced version of the question** along with a **well-structured, 20-mark answer** that includes clear definitions, derivations, explanations, and diagrams if needed.

---

### ✅ Enhanced University-Level Question (20 Marks):

**Q:**
(a) Define and explain the **Biot–Savart Law**, highlighting its significance in magnetostatics. Derive its vector form and explain the physical meaning of each term.
(b) Using Gauss’s Law, **derive the expression for electric field intensity due to an infinite straight line of uniform linear charge density**. Include a diagram, all assumptions, and clearly state the direction of the field.

---

### ✅ Structured Answer:

---

### 🔹 **(a) Biot–Savart Law – Definition, Explanation, and Vector Form**

#### 🔸 **Definition:**

The **Biot–Savart Law** describes the **magnetic field** $\vec{B}$ generated at a point in space due to a small segment of a current-carrying conductor.

#### 🔸 **Vector Form:**

$$
\vec{B} = \frac{\mu_0}{4\pi} \int \frac{I \, d\vec{l} \times \hat{r}}{r^2}
$$

Where:

* $\vec{B}$ = Magnetic field at observation point (Tesla, T)
* $\mu_0$ = Permeability of free space = $4\pi \times 10^{-7} \, \text{H/m}$
* $I$ = Steady current in the conductor (A)
* $d\vec{l}$ = Infinitesimal current element vector (direction of current)
* $r$ = Distance between current element and point of observation
* $\hat{r}$ = Unit vector from current element to observation point
* $\times$ = Vector cross product (indicates direction using right-hand rule)

---

#### 🔸 **Physical Meaning:**

* The magnetic field is **directly proportional** to the current and the length element.
* It is **inversely proportional** to the **square of the distance** between the current element and the point.
* The direction of the magnetic field is **perpendicular** to both $d\vec{l}$ and $\vec{r}$, as given by the **right-hand rule**.

#### 🔸 **Applications:**

* Deriving magnetic field due to circular loops, straight wires, solenoids.
* Foundation for **Ampere’s Law** and magnetic field analysis in magnetostatics.

### 🔹 **(b) Determine the Electric Field Intensity of an Infinite Line Charge using Gauss’s Law**

We are given:

* A straight, infinitely long line of charge placed along the **z-axis**
* **Linear charge density** = $\lambda$ (C/m)
* We need to find the electric field $\vec{E}$ at a distance $r$ from the line

---

#### ✅ **Step 1: Start with Gauss’s Law (Integral Form)**

$$
\oint_{\text{closed}} \vec{E} \cdot d\vec{S} = \frac{q_{\text{enc}}}{\varepsilon_0}
$$

This equation tells us that the **total electric flux** through a closed surface is equal to the enclosed charge divided by the permittivity of free space.

---

#### ✅ **Step 2: Choose a Gaussian Surface**

By symmetry, choose a **cylindrical surface** of:

* **Radius** = $r$
* **Length** = $L$
* Axis = aligned with the infinite line charge

$$
\text{Total surface area (only curved side counts)} = 2\pi r L
$$

👉 The electric field $\vec{E}$ is **radial**, and so is the **area vector** $d\vec{S}$, so the dot product becomes:

$$
\vec{E} \cdot d\vec{S} = E \, dS
$$

---

#### ✅ **Step 3: Enclosed Charge**

Since linear charge density is $\lambda$, total enclosed charge is:

$$
q_{\text{enc}} = \lambda \cdot L
$$

---

#### ✅ **Step 4: Apply Gauss’s Law**

$$
\oint \vec{E} \cdot d\vec{S} = E \cdot (2\pi r L) = \frac{\lambda L}{\varepsilon_0}
$$

---

#### ✅ **Step 5: Solve for $E$**

Cancel $L$ from both sides:

$$
E \cdot (2\pi r) = \frac{\lambda}{\varepsilon_0}
$$

$$
\Rightarrow \boxed{E = \frac{\lambda}{2\pi \varepsilon_0 r}}
$$

---

### 🔚 **Final Answer:**

The electric field intensity at a radial distance $r$ from an infinite straight line of charge is:

$$
\boxed{E = \frac{\lambda}{2\pi \varepsilon_0 r}} \quad \text{(radially outward)}
$$

---

✅ **Direction:**

* **Outward** from the line if $\lambda > 0$
* **Inward** toward the line if $\lambda < 0$

✅ **Field lines:** Radially symmetric and perpendicular to the line charge

---

Certainly! Here’s how you can **enhance the question** for a **university-level 20-mark exam**, and provide a **detailed, structured answer** that includes definition, physical meaning, unit, mathematical expression, and applications.

---

### ✅ Enhanced University-Level Question (20 Marks):

**Q:**
Define the term **Electric Field Intensity (E)**. Explain its **physical significance**, derive its **mathematical expression due to a point charge**, mention its **SI unit and dimensional formula**, and discuss **at least two applications** in electrical engineering or physics.

---

### ✅ Detailed Answer:

---

### 🔹 **1. Definition of Electric Field Intensity (E):**

Electric field intensity at a point in space is defined as the **force experienced per unit positive test charge** placed at that point without disturbing the existing field.

$$
\boxed{\vec{E} = \frac{\vec{F}}{q}}
$$

Where:

* $\vec{E}$ = Electric field intensity (vector)
* $\vec{F}$ = Electric force acting on a test charge
* $q$ = Magnitude of the test charge

---

### 🔹 **2. Physical Meaning:**

* Electric field intensity represents the **strength and direction** of the electric field at a point.
* It is a **vector quantity**, meaning it has both magnitude and direction.
* Direction of $\vec{E}$ is the **direction of force** on a **positive** test charge.

---

### 🔹 **3. SI Unit and Dimensional Formula:**

| Quantity                | Value                                                              |
| ----------------------- | ------------------------------------------------------------------ |
| **SI Unit**             | $\text{N/C}$ (Newton per Coulomb) or $\text{V/m}$ (Volt per meter) |
| **Dimensional Formula** | $[MLT^{-3}A^{-1}]$                                                 |

---

### 🔹 **4. Expression for Electric Field due to a Point Charge**

Let a point charge $Q$ be placed at the origin. The electric field at a distance $r$ is given by:

$$
\vec{E} = \frac{1}{4\pi\varepsilon_0} \cdot \frac{Q}{r^2} \cdot \hat{r}
$$

Where:

* $\varepsilon_0$ = Permittivity of free space = $8.854 \times 10^{-12} \, \text{F/m}$
* $\hat{r}$ = Unit vector from the source charge to the point of interest
* The field decreases with the **square of distance** ($\propto \frac{1}{r^2}$)

---

### 🔹 **5. Key Characteristics:**

* **Radial Field:** For a point charge, the field radiates outward (if $Q > 0$) or inward (if $Q < 0$).
* **Superposition Principle:** Fields from multiple charges can be added vectorially.
* **Conservative Field:** Work done by the electric field around a closed path is zero.

---

### 🔹 **6. Applications of Electric Field Intensity:**

1. **Capacitor Design:**

   * Helps in calculating field between plates and optimizing energy storage in dielectric materials.

2. **Electrostatic Precipitators:**

   * Use high electric fields to remove dust particles from industrial emissions.

3. **CRT & LCD Screens:**

   * Electric fields are used to deflect or control electron beams and liquid crystals.

4. **Semiconductor Devices:**

   * Field across p-n junctions helps in current control and diode operation.

---

### 🧠 **Conclusion:**

Electric field intensity is a **fundamental concept in electromagnetism**, crucial for understanding **electric forces, field distributions, energy storage**, and the behavior of **charged particles** in various physical and engineering systems.

---



