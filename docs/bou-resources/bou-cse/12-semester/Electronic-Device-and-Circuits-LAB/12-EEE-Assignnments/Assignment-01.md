**Assignment - 1**

For the given circuit, if the forward voltage drop for diode **D₁** and **D₂** are 0.7V and 0.3V, respectively, then which statement is true?
![[circuit orientation.png|306x161]]{ width=60% }
a) Both diodes **D₁** and **D₂** are ON.
b) Diode **D₁** is ON and **D₂** is OFF.
c) Diode **D₁** is OFF and **D₂** is ON.
d) Both diodes **D₁** and **D₂** are OFF.

**Note:** The last date of submission is **12-09-25**.

---
### Solution:

Given,
* The forward voltage drop for diode **D₁** is **0.7V**.
* The forward voltage drop for diode **D₂** is **0.3V**.
* The input voltage is **10V**.
* The resistances in the circuit are **1kΩ** and **20Ω**.
* We are asked to determine which statement is true about the state of the diodes based on this information.

### Circuit Analysis:

We have two diodes, D₁ and D₂, connected in parallel. The voltage across both diodes will be the same, and each diode will either be ON or OFF depending on the voltage across it.

**Forward Voltage for Diodes:**

1. **Diode D₁** has a forward voltage of 0.7V, meaning it will turn ON if the voltage across it exceeds 0.7V.
2. **Diode D₂** has a forward voltage of 0.3V, meaning it will turn ON if the voltage across it exceeds 0.3V.

### Approach:

We can calculate the voltage across each diode using the following:

* **For Diode D₁:**
  Since the voltage drop is 0.7V, we compare the input voltage (10V) with the voltage drop across D₁.

  * If the voltage across D₁ is greater than 0.7V, **D₁ will be ON**.
* **For Diode D₂:**
  Similarly, D₂ has a lower voltage drop (0.3V).

  * If the voltage across D₂ is greater than 0.3V, **D₂ will be ON**.

### Analyzing the Voltage Division:

* The total voltage (10V) will be divided between the resistors and the diodes.
* Given that the resistors are in series with the diodes, we use Kirchhoff’s Voltage Law (KVL) to analyze the voltage drop across each component.

#### 1. Diode D₁ will be ON because its threshold (0.7V) is much lower than the input voltage of 10V.

#### 2. Diode D₂ will also be ON because its threshold (0.3V) is also much lower than 10V.

### Conclusion:

* Both diodes **D₁** and **D₂** will be ON because both of their forward voltage thresholds are met (0.7V for D₁ and 0.3V for D₂) under the applied voltage of 10V.

Therefore, the correct answer is:
**a) Both diodes D₁ and D₂ are ON.**
