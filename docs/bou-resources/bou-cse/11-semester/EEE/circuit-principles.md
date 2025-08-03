---
dg-home: false
dg-publish: true
aliases: 
tags:
---
## ⚡ 60-Minute Circuit Principles Masterplan

### 🔟 Minute 0–10: **Circuit Basics & Key Terms**

* **What to Learn**:

  * Circuit
  * Open circuit 🔓
  * Short circuit 🔒
  * Series vs. Parallel circuits

* **Quick Definitions**:

  | Term          | Meaning                            |
  | ------------- | ---------------------------------- |
  | Open Circuit  | A break; current **can’t** flow    |
  | Short Circuit | Path with **very low resistance**  |
  | Series        | Current flows **through one path** |
  | Parallel      | Multiple branches; same voltage    |

> ✍️ Tip: Draw a simple light bulb with one wire cut (open), and another with two wires touching directly (short).

---

### 🔟 Minute 10–20: **KVL & KCL Laws**

* **Kirchhoff's Voltage Law (KVL)**:

  > 🔁 In any **closed loop**, the **sum of voltage drops = total voltage supplied**.

  Example:
  $V_1 + V_2 + V_3 = 0$ (signs based on direction)

* **Kirchhoff's Current Law (KCL)**:

  > ➕ At any junction, **sum of currents entering = sum of currents leaving**

  Example:
  $I_1 + I_2 = I_3$

---

### 🔟 Minute 20–30: **Ohm’s Law & Basic Rules**

* Ohm's Law:

  $$
  V = IR
  $$

* **Series Rules**:

  * Voltage adds: $V_{total} = V_1 + V_2$
  * Resistance adds: $R_{total} = R_1 + R_2$
  * Same current through all

* **Parallel Rules**:

  * Voltage same across all
  * Current splits
  * Resistance:

    $$
    \frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2}
    $$

---

### 🔟 Minute 30–40: **Voltage & Current Divider Rules**

* **Voltage Divider (Series)**:

  $$
  V_x = V_{total} \cdot \frac{R_x}{R_{total}}
  $$

* **Current Divider (Parallel)**:

  $$
  I_x = I_{total} \cdot \frac{R_{other}}{R_1 + R_2}
  $$

> 🎯 Use when only part of the circuit value is needed (e.g., voltage across one resistor).

---

### 🔟 Minute 40–50: **Thevenin, Norton, Superposition**

* **Thevenin’s Theorem**: Any linear circuit = 1 voltage source + 1 resistor in series
* **Norton’s Theorem**: Any linear circuit = 1 current source + 1 resistor in parallel
* **Superposition**: For circuits with multiple sources, solve **one source at a time**, then add results.

> ✅ Best used for simplifying complex networks.

---

### 🔟 Minute 50–60: **Maximum Power Transfer Theorem**

* A load receives **maximum power** when:

  $$
  R_{load} = R_{source}
  $$

* Use:

  * Optimizing power delivery
  * Battery/load matching

---

## ✅ Bonus Visuals (You can draw):

* 🔋 Series Circuit: battery → R1 → R2 → back to battery
* 🔀 Parallel Circuit: battery → branches with R1 and R2 → back

---

## 🧠 Final Tip:

If you're a beginner, use color-coded drawings and analogies (like water flowing in pipes) to visualize current and voltage.

---

Would you like a printable PDF cheat sheet or animated video suggestion to lock it in?
 