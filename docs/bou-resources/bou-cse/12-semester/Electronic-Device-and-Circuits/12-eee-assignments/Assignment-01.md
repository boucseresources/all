### Question 1: State and Prove Thevenin's Theorem with Example

<!-- #### Question:

**State and prove Thevenin’s Theorem. Derive the expression for the Thevenin equivalent circuit for a given network. Illustrate the process with a numerical example. Discuss the significance and applications of Thevenin's theorem in circuit analysis.** -->

#### Answer:

**Thevenin’s Theorem**:
Thevenin's theorem states that any linear, active electrical network with voltage sources and resistors can be replaced by an equivalent circuit consisting of a single voltage source in series with a single resistor. This is true for both AC and DC circuits, simplifying analysis when considering load resistance.

**Mathematical Formulation**:
The equivalent Thevenin voltage $V_{th}$ and resistance $R_{th}$ are defined as follows:

1. **Thevenin Voltage ($V_{th}$)**:

- Remove the load resistance $R_L$ from the network.
- Compute the open-circuit voltage, i.e., the voltage across the terminals where the load was connected. This is $V_{th}$.

2. **Thevenin Resistance ($R_{th}$)**:

- Deactivate all independent voltage sources (replace voltage sources with short circuits and current sources with open circuits).
- Find the equivalent resistance looking into the terminals where the load was connected. This is $R_{th}$.

**Thevenin's Theorem in Mathematical Steps**:

1. **Find $V_{th}$**: Measure or calculate the open-circuit voltage across the load terminals.

2. **Find $R_{th}$**: Replace all independent sources with their internal resistance, and find the equivalent resistance at the load terminals.

3. **Thevenin Equivalent Circuit**: The circuit is replaced by a voltage source $V_{th}$ in series with a resistor $R_{th}$, which can be used to calculate the current and voltage for different load resistances.

**Example**:
Consider a circuit with a 10V battery in series with a 10Ω resistor and a load resistor $R_L$ connected across the terminals. We need to find the Thevenin equivalent of this network at the terminals of the load resistor.

1. **Step 1 - Thevenin Voltage ($V_{th}$)**:
   With the load resistor removed, the open-circuit voltage is simply the battery voltage, $V_{th} = 10V$.

2. **Step 2 - Thevenin Resistance ($R_{th}$)**:
   Deactivate the battery (replace it with a short circuit). The remaining resistance seen from the load terminals is just $R_{th} = 10Ω$.

Therefore, the Thevenin equivalent circuit is a 10V voltage source in series with a 10Ω resistor.

#### Applications:

- **Simplification of Circuit Analysis**: Thevenin’s theorem helps reduce complex circuits to a simple equivalent, making it easier to analyze.
- **Power Transfer Optimization**: By matching the load resistance to the Thevenin resistance, maximum power transfer occurs.

---

### Question 2: What is Delta-Wye (Δ-Y) Conversion? Provide Examples.

<!-- #### Question:

**What is Delta-Wye (Δ-Y) Conversion in electrical circuits? Derive the mathematical formulas for the conversion between the Delta and Wye configurations. Illustrate the conversion process with an example. Discuss the importance of this conversion in circuit analysis and solve for the equivalent impedance of a given Delta network.** -->
