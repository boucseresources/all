## Full-Wave Rectifier Problem (Centre-Tapped)



??? "Problem - Full Wave Rectifier"

    12) A full wave rectifier uses two diodes. The internal resistance of each diode may be 
    assumed constant at 30ohm. The transformer r.m.s secondary voltage from centre tap 
    to each end of secondary is 50V and load resistance is 1000 ohm. Find: 
    ○  i) the mean load current 
    ○  ii) the r.m.s. value of load current. 

    Answer: 
    Given Data

    - R.M.S. secondary voltage (centre tap to each end):
    
    $$
    V_{\text{rms}} = 50 \text{ V}
    $$

    - Internal resistance of each diode:

    $$
    r_f = 30 \ \Omega
    $$

    - Load resistance:

    $$
    R_L = 1000 \ \Omega
    $$

    > In a centre-tapped full-wave rectifier, **only one diode conducts in each half-cycle**, so only **one diode resistance** is included in the circuit at a time.

    ---

    ## Step 1: Calculate Peak Voltage \( V_m \)

    The peak value of the secondary voltage is obtained from the RMS value as:

    $$
    V_m = \sqrt{2}\,V_{\text{rms}}
    $$

    Substituting the given value:

    $$
    V_m = \sqrt{2} \times 50
    $$

    $$
    V_m = 70.71 \text{ V}
    $$

    ---

    ## Step 2: Calculate Peak Current \( I_m \)

    During conduction, the total resistance in the circuit is:

    $$
    R_{\text{total}} = R_L + r_f
    $$

    $$
    R_{\text{total}} = 1000 + 30 = 1030 \ \Omega
    $$

    The peak current is therefore:

    $$
    I_m = \frac{V_m}{R_{\text{total}}}
    $$

    $$
    I_m = \frac{70.71}{1030}
    $$

    $$
    I_m = 0.06865 \text{ A}
    $$

    ---

    ## Solution (i): Mean Load Current \( I_{\text{dc}} \)

    For a full-wave rectifier, the mean (DC) value of load current is given by:

    $$
    I_{\text{dc}} = \frac{2 I_m}{\pi}
    $$

    Substituting the value of \( I_m \):

    $$
    I_{\text{dc}} = \frac{2 \times 0.06865}{\pi}
    $$

    $$
    I_{\text{dc}} = 0.0437 \text{ A}
    $$

    ### Answer (i)

    \[
    \boxed{I_{\text{dc}} = 0.0437 \text{ A } \approx 43.7 \text{ mA}}
    \]

    ---

    ## Solution (ii): R.M.S. Value of Load Current \( I_{\text{rms}} \)

    For a full-wave rectifier, the RMS value of load current is:

    $$
    I_{\text{rms}} = \frac{I_m}{\sqrt{2}}
    $$

    Substituting the value of \( I_m \):

    $$
    I_{\text{rms}} = \frac{0.06865}{\sqrt{2}}
    $$

    $$
    I_{\text{rms}} = 0.0485 \text{ A}
    $$

    ### Answer (ii)

    \[
    \boxed{I_{\text{rms}} = 0.0485 \text{ A } \approx 48.5 \text{ mA}}
    \]

    ---

    ## Final Results Summary

    | Quantity | Value |
    |--------|-------|
    | Peak voltage \( V_m \) | 70.71 V |
    | Peak current \( I_m \) | 68.65 mA |
    | Mean load current \( I_{\text{dc}} \) | 43.7 mA |
    | RMS load current \( I_{\text{rms}} \) | 48.5 mA |

    ---

!!! warning "Comparison of AC, Half-Wave Rectifier, and Full-Wave Rectifier"


    ### Side-by-Side Formula Table: AC, Half-Wave, and Full-Wave Rectifier

    | Quantity                 | AC Supply                             | Half-Wave Rectifier (HW)        | Full-Wave Rectifier (FW)              |
    | ------------------------ | ------------------------------------- | ------------------------------- | ------------------------------------- |
    | Peak voltage             | ( $V_m$ )                             | ( $V_m$ )                       | ( $V_m$ )                             |
    | RMS voltage              | ( $V_{rms} = \dfrac{V_m}{\sqrt{2}}$ ) | ( $V_{rms} = \dfrac{V_m}{2}$ )  | ( $V_{rms} = \dfrac{V_m}{\sqrt{2}}$ ) |
    | Average (DC) voltage     | ( $0$ )                               | ( $V_{dc} = \dfrac{V_m}{\pi}$ ) | ( $V_{dc} = \dfrac{2V_m}{\pi}$ )      |
    | Peak current             | ( $I_m$ )                             | ( $I_m = \dfrac{V_m}{R}$ )      | ( $I_m = \dfrac{V_m}{R}$ )            |
    | RMS current              | ( $I_{rms} = \dfrac{I_m}{\sqrt{2}}$ ) | ( $I_{rms} = \dfrac{I_m}{2}$ )  | ( $I_{rms} = \dfrac{I_m}{\sqrt{2}}$ ) |
    | Average (DC) current     | ( $0$ )                               | ( $I_{dc} = \dfrac{I_m}{\pi}$ ) | ( $I_{dc} = \dfrac{2I_m}{\pi}$ )      |
    | Ripple factor            | Not defined                           | ( $r = 1.21$ )                  | ( $r = 0.482$ )                       |
    | Rectification efficiency | Not applicable                        | ( $\eta = 40.6%$ )              | ( $\eta = 81.2%$ )                    |
    | Form factor              | ( $1.11$ )                            | ( $1.57$ )                      | ( $1.11$ )                            |
    | Output frequency         | ( $f$ )                               | ( $f$ )                         | ( $2f$ )                              |



    ### Exam Notes (Optional)

    * AC has zero average value, so it is not suitable for DC operation.
    * Half-wave rectifier conducts during only one half cycle.
    * Full-wave rectifier uses both half cycles, giving higher efficiency and lower ripple.
    * RMS values are used for power calculations.

    ---

    If you want, I can also:

    * compress this into a **5-mark answer**
    * add **one-line memory formulas**
    * align it exactly with **BOU / National University question style**
    * add a **numerical-ready version with symbols only**
