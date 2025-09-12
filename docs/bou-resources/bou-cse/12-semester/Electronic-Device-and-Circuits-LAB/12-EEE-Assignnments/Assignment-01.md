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
To determine the states of the diodes (D1 and D2), we need to analyze the voltages across them and compare with their forward voltage drops.

### Circuit Analysis:

* **Source voltage (V) = 10 V**
* **R1 = 1 kΩ**, **R2 = 20 Ω**
* **D1 forward voltage = 700 mV**
* **D2 forward voltage = 300 mV**

1. **D1 (700 mV forward voltage):**

* The voltage across D1 will depend on the voltage divider formed by R1 and R2.

* The voltage at the point where D1 is connected (let's call it **V1**) is determined by the voltage divider formula:

$$
V1 = V \times \frac{R2}{R1 + R2}
$$

Substituting the values:

$$
V1 = 10 \times \frac{20}{1000 + 20} = 10 \times \frac{20}{1020} \approx 0.196 \, \text{V} = 196 \, \text{mV}
$$

* Since **V1 = 196 mV** is much less than the forward voltage of D1 (700 mV), **D1 will be OFF**.

2. **D2 (300 mV forward voltage):**

* The voltage across D2 is the difference between the source voltage and the voltage at point V1, which is **10 V - 196 mV = 9.804 V**.
* Since **9.804 V** is much higher than the forward voltage of D2 (300 mV), **D2 will be ON**.

### Final Decision:

* **D1** is **OFF**.
* **D2** is **ON**.



