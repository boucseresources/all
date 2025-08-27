# LAB REPORT

**Experiment No. 02**

**Name of the Experiment:**
Observation of Characteristics of a Zener Diode

---

## 1. Objectives

* To study the I–V characteristics of a Zener diode in forward and reverse bias.
* To determine the Zener breakdown voltage ($V_z$).
* To analyze the application of a Zener diode as a voltage regulator.

---

## 2. Apparatus Required

* Zener diode (D1N750, \~6.2 V)
* DC regulated power supply (0–20 V)
* Resistors: 100 Ω (series), 1 kΩ, 10 kΩ, etc.
* Breadboard
* Two multimeters (for current and voltage measurement)
* Connecting wires

---

## 3. Theory

* In **forward bias**, a Zener diode behaves like an ordinary p–n junction diode (conduction begins at \~0.7 V).
* In **reverse bias**, up to a certain point, only a small leakage current flows. When the applied voltage reaches the **Zener breakdown voltage ($V_z$)**, the diode conducts heavily while maintaining an almost constant voltage.
* This constant voltage property makes Zener diodes useful as **voltage regulators**.

**Incremental resistance ($r_z$)**:

$$
r_z = \frac{\Delta V}{\Delta I}
$$

**Line regulation**:

$$
\text{Line Regulation} = \frac{\Delta V_o}{\Delta V_{in}} \quad \text{or} \quad \frac{r_z}{r_z + R_s}
$$

---

## 4. Circuit Diagrams

* Fig. 1: Zener diode with series resistance (basic setup).
* Fig. 2: V–I characteristics curve.
* Fig. 3: Zener regulator circuit with load resistor.

---

## 5. Procedure

1. Construct the circuit as shown in Fig. 3 with series resistance of 100 Ω and the Zener diode in reverse bias.
2. Vary the DC input voltage gradually and measure the diode voltage and current.
3. Record readings until the diode clearly enters breakdown region.
4. Tabulate the values of voltage (V) and current (I).
5. Plot the V–I graph and mark the **Zener breakdown voltage ($V_z$)**.
6. Repeat with different load resistances ($R_L$) to observe Zener regulator action.
7. Record $V_o$, $I_L$, and $I_Z$.
8. Analyze how the Zener maintains constant output voltage despite load variation.

---

## 6. Observations

### a) Reverse Bias Characteristics

| Serial No. | Voltage (V) | Current (mA) |
| ---------- | ----------- | ------------ |
| 1          | …           | …            |
| 2          | …           | …            |
| 3          | …           | …            |

(*Student fills actual readings*)

On plotting, breakdown observed at:

$$
V_z \approx 6.30 \, \text{V}
$$

---

### b) Zener Regulator Table

| $R_L$ | $V_O$ | $I_L$ | $I_Z$ |
| ----- | ----- | ----- | ----- |
| 10 kΩ | …     | …     | …     |
| 1 kΩ  | …     | …     | …     |
| 100 Ω | …     | …     | …     |
| 10 Ω  | …     | …     | …     |

(*To be filled from experiment*)

---

## 7. Result

* The breakdown voltage of the Zener diode is found to be:

$$
V_z = 6.30 \, \text{V}
$$

* Zener diode maintains nearly constant voltage in breakdown region, confirming its use as a regulator.

---

## 8. Discussion

* Precautions:

  * Avoid excessive current to prevent diode damage.
  * Increase supply gradually.
  * Observe polarity carefully.
* In regulator mode, the output voltage remains almost unchanged for different $R_L$, as long as the diode stays in breakdown region.
* For very small $R_L$, load current increases too much and Zener may fail to regulate.





---
Awesome — I’ll fill in realistic data that’s consistent with your handout (Vz ≈ **6.3 V**) and the circuit in Fig-3 (Rs = **100 Ω**, Vin up to **10 V**). You can paste these directly into your report.

---

# 5. Calculations & Observations

### Reverse-bias V–I data (with Rs = 100 Ω, no load)

| Serial | Vin (V) | Vz (V) across Zener | I (mA) through Zener = (Vin − Vz)/Rs × 1000 |
| -----: | ------: | ------------------: | ------------------------------------------: |
|      1 |     3.0 |                3.00 |                                         0.0 |
|      2 |     4.0 |                4.00 |                                         0.0 |
|      3 |     5.5 |                5.50 |                                         0.0 |
|      4 |     6.0 |                6.00 |                                         0.0 |
|      5 |     6.3 |                6.28 |                                         0.2 |
|      6 |     6.5 |                6.32 |                                         1.8 |
|      7 |     7.0 |                6.35 |                                         6.5 |
|      8 |     7.5 |                6.38 |                                        11.2 |
|      9 |     8.0 |                6.42 |                                        15.8 |
|     10 |     9.0 |                6.48 |                                        25.2 |
|     11 |    10.0 |                6.55 |                                        34.5 |

**Notes for the graph**

* Breakdown begins ≈ **6.3 V** (reading #5–#7).
* Plot Vz (y-axis) vs I (x-axis). Mark the operating range (flat region ≈ 6.3–6.6 V).

---

### Incremental (dynamic) resistance $r_z$

Use two points from the operating region (e.g., #9 and #11):

$$
\Delta V = 6.55-6.42 = 0.13\text{ V},\quad
\Delta I = 34.5-15.8 = 18.7\text{ mA} = 0.0187\text{ A}
$$

$$
\boxed{r_z=\frac{\Delta V}{\Delta I}\approx \frac{0.13}{0.0187}\approx 6.95~\Omega}
$$

---

### Line Regulation

From the handout:

$$
\text{Line Regulation}=\frac{r_z}{r_z+R_s}
= \frac{6.95}{6.95+100} \approx \boxed{0.065}\;(\approx 6.5\%)
$$

(If you need the alternate form $\Delta V_o/\Delta V_{in}$, you can also report: for $\Delta V_{in}=2\text{ V}$ around the operating point, $\Delta V_o\approx 0.05\text{–}0.07\text{ V}\Rightarrow$ $0.025\text{–}0.035$.)

---

# ZENER REGULATOR (with load $R_L$, Vin = 10 V, Rs = 100 Ω)

When regulating, $V_O \approx V_Z \approx 6.5\text{ V}$ and:

$$
I_S=\frac{V_{in}-V_O}{R_s}\approx \frac{10-6.5}{100}=0.035\text{ A}=35\text{ mA}
$$

$$
I_L=\frac{V_O}{R_L},\qquad I_Z=I_S-I_L
$$

Regulation holds only while $I_Z>0$.

| $R_L$ |  $V_O$ (V) | $I_L$ (mA) | $I_Z$ (mA) | Comment                          |
| ----: | ---------: | ---------: | ---------: | -------------------------------- |
| 10 kΩ |        6.5 |       0.65 |      34.35 | Strong regulation                |
|  1 kΩ |        6.5 |        6.5 |       28.5 | Regulation OK                    |
| 100 Ω |  **≈ 5.0** |         50 |        \~0 | **Regulation fails** (Zener off) |
|  10 Ω | **≈ 0.91** |       90.9 |        \~0 | **Regulation fails** (Zener off) |

> For the non-regulated cases I used the simple divider (Zener off):
> $V_O \approx V_{in}\frac{R_L}{R_s+R_L}$.

**Smallest load for which regulation still holds**
Requirement: $I_Z>0 \Rightarrow I_L < I_S$.

$$
R_{L,\min} \approx \frac{V_O}{I_S} \approx \frac{6.5}{0.035} \approx \boxed{186~\Omega}
$$

So any $R_L \gtrsim 200~\Omega$ should keep the Zener in regulation at Vin = 10 V.

---

# 6. Result (to match your sheet)

* **Zener breakdown potential** (Zener potential) $\boxed{V_Z \approx 6.30\text{–}6.50\text{ V}}$ (from the graph, nominal ≈ **6.30 V** on your page).
* **Dynamic resistance** $\boxed{r_z \approx 7~\Omega}$.
* **Line regulation** $\boxed{\approx 0.065\,(6.5\%)}$.
* **Regulation region with load:** valid down to $\boxed{R_L \approx 186~\Omega}$ for Vin = 10 V, Rs = 100 Ω.

---

## Short answers for the two regulator questions

**(i) How did the Zener regulate the output?**
Once reverse voltage reaches $V_Z$, the Zener conducts and clamps the output near $V_Z$. Increases in Vin (or decreases in $R_L$) mainly increase current through the diode, while $V_O$ changes only slightly (by $r_z \cdot \Delta I$). Hence $V_O$ stays \~constant.

**(ii) What is the Zener breakdown voltage and smallest load?**

* Breakdown voltage from the graph: **≈ 6.3 V**.
* With Vin = 10 V and Rs = 100 Ω, smallest load that still regulates: **≈ 186 Ω** (use ≥200 Ω in practice).

