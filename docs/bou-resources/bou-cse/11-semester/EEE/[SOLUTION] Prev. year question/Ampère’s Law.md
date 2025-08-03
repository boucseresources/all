---
dg-home: false
dg-publish: true
aliases: 
tags:
---
### 4.3 Ampère’s Law

**What is Ampère’s Law?**
Ampère’s Law helps us calculate the magnetic field ($\vec{B}$) created around a wire when electric current flows through it. It gives a clear relation between the **current flowing through a conductor** and the **magnetic field it creates around it**.

Think of current as water flowing through a pipe, and the magnetic field as invisible ripples forming around the pipe — Ampère’s Law tells us how strong those ripples are and how they behave.

---

### Before we dive in: What is a closed path?

Before understanding Ampère’s Law, you need to understand the idea of a **closed path**.

* A **closed path** means any loop that starts and ends at the same point.
* If we measure something along such a path, it's called a **line integral over a closed loop**.

For example, in a circular path around a wire, we can measure the magnetic field all around that circle. This is exactly what Ampère’s Law does — it looks at the magnetic field along that loop.

The mathematical form is:

$$
\oint \vec{B} \cdot d\vec{l} = B \, dl \cos\theta
$$

Where:

* $\vec{B}$ = magnetic field at a point on the path
* $d\vec{l}$ = small length along the path
* $\theta$ = angle between $\vec{B}$ and $d\vec{l}$

---

### Statement of Ampère’s Law

> "The total magnetic field around a closed loop is directly proportional to the total current enclosed by that loop."

In equation form:

$$
\oint \vec{B} \cdot d\vec{l} = \mu_0 I
\quad \text{(Eq. 4.19)}
$$

Where:

* $\mu_0$ = magnetic permeability of free space
* $I$ = current enclosed by the path

---

### Example to Understand

Suppose you have a **straight long wire** and a constant current $I$ flows through it. This current creates circular magnetic field lines around the wire (like rings around a stick).

If you place a **tiny magnetic needle** near the wire, it will try to rotate — this shows that a magnetic field exists. The magnetic field applies a **torque** (twisting force) on the needle.

The torque on a magnetic dipole is given by:

$$
\tau = \vec{p} \times \vec{B} = pB \sin\theta
\quad \text{(Eq. 4.20, 4.21)}
$$

Where:

* $p$ = magnetic moment of the needle
* $B$ = magnetic field strength
* $\theta$ = angle between $\vec{p}$ and $\vec{B}$

---

### Deriving Magnetic Field Around a Straight Wire

Now let's apply Ampère’s Law to find magnetic field $B$ at a distance $r$ from a long straight wire carrying current $I$.

From observation:

$$
B \propto \frac{I}{r}
\quad \Rightarrow \quad
B = \frac{\mu_0 I}{2\pi r}
\quad \text{(Eq. 4.22)}
$$

This means:

* Magnetic field is **stronger** if current $I$ increases
* Magnetic field is **weaker** if distance $r$ increases

---

### Final Form of Ampère’s Law (Derivation)

We know the circumference of a circle is $2\pi r$, and the magnetic field $\vec{B}$ is **tangent** to every point on this circular path and has same magnitude at every point.

So,

$$
\oint \vec{B} \cdot d\vec{l} = B \cdot 2\pi r
$$

Using Ampère’s Law:

$$
B \cdot 2\pi r = \mu_0 I \quad \Rightarrow \quad \boxed{B = \frac{\mu_0 I}{2\pi r}}
$$

Again confirming:

$$
\boxed{\oint \vec{B} \cdot d\vec{l} = \mu_0 I}
\quad \text{(Eq. 4.25)}
$$

---

### Summary

* **Ampère’s Law** tells us how electric current creates magnetic fields.
* It’s especially useful when the system has symmetry (e.g., long wires, solenoids, loops).
* It’s one of the four fundamental **Maxwell’s equations** that govern electromagnetism.

---

### Simple Analogy

Imagine throwing a stone in a pond. The ripples spread out in circles.
Now imagine current in a wire is like that stone — the current creates circular **magnetic ripples** around the wire.
Ampère’s Law helps you **measure the strength of those ripples**, depending on how strong the "stone" (current) was.

---

Let me know if you’d like this explained further in a diagram, in Bangla, or in PDF format.
