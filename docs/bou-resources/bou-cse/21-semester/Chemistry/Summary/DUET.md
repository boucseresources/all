**Course Code:** CHE 2122 Chemistry

**Topic:** Class Test 02 Solutions

**Answer to Question Number 1**

**Law of Mass Action**

The Law of Mass Action (ভর ক্রিয়া সূত্র) states that at a constant temperature, the rate at which a chemical reaction proceeds is directly proportional (সরাসরি সমানুপাতিক) to the product of the active masses (সক্রিয় ভর) or molar concentrations of the reacting substances.

For a general reversible reaction (উভমুখী বিক্রিয়া):

$$aA + bB \rightleftharpoons cC + dD$$

According to the law:

* Rate of forward reaction ($R_f$) $\propto [A]^a [B]^b \implies R_f = k_f [A]^a [B]^b$
* Rate of backward reaction ($R_b$) $\propto [C]^c [D]^d \implies R_b = k_b [C]^c [D]^d$

Here, $k_f$ and $k_b$ are the rate constants (গতি ধ্রুবক) for forward and backward reactions.

**Derivation of Relationship Between $K_p$ and $K_c$**

At chemical equilibrium (রাসায়নিক সাম্যাবস্থা), the rate of forward reaction becomes equal to the rate of backward reaction ($R_f = R_b$):

$$k_f [A]^a [B]^b = k_b [C]^c [D]^d$$

$$\frac{k_f}{k_b} = \frac{[C]^c [D]^d}{[A]^a [B]^b}$$

$$K_c = \frac{[C]^c [D]^d}{[A]^a [B]^b}$$

Where $K_c$ is the equilibrium constant in terms of concentration (ঘনমাত্রা).

If the reactants and products are in gaseous state, we express equilibrium constant in terms of partial pressure (আংশিক চাপ), denoted as $K_p$:

$$K_p = \frac{P_C^c \cdot P_D^d}{P_A^a \cdot P_B^b}$$

From the ideal gas equation (আদর্শ গ্যাস সমীকরণ), $PV = nRT$:

$$P = \left(\frac{n}{V}\right) RT = C R T = [\text{Concentration}] RT$$

So, we write the partial pressures of each component as:

* $P_A = [A]RT$
* $P_B = [B]RT$
* $P_C = [C]RT$
* $P_D = [D]RT$

Now substituting these partial pressure values in the $K_p$ expression:

$$K_p = \frac{([C]RT)^c \cdot ([D]RT)^d}{([A]RT)^a \cdot ([B]RT)^b}$$

$$K_p = \frac{[C]^c [D]^d}{[A]^a [B]^b} \cdot \frac{(RT)^{c+d}}{(RT)^{a+b}}$$

$$K_p = K_c (RT)^{(c+d)-(a+b)}$$

$$K_p = K_c (RT)^{\Delta n}$$

Where $\Delta n = (c+d) - (a+b)$ represents the difference between total number of moles of gaseous products and gaseous reactants.

**Answer to Question Number 2**

**Degree of Ionization**

Degree of ionization or dissociation (বিয়োজন মাত্রা) is defined as the fraction of the total number of moles of a reactant that undergoes dissociation or splitting into simpler ions or molecules at equilibrium. It is denoted by the Greek letter $\alpha$ (alpha).

$$\alpha = \frac{\text{Number of moles dissociated}}{\text{Total number of initial moles}}$$

**Mathematical Derivation of $K_p$ Equation for Dissociation of $\text{PCl}_5$**

Let us consider the dissociation of Phosphorus Pentachloride ($\text{PCl}_5$) gas in a closed container:

$$\text{PCl}_5(g) \rightleftharpoons \text{PCl}_3(g) + \text{Cl}_2(g)$$

* Initial moles at time $t = 0$:
* Moles of $\text{PCl}_5 = 1$
* Moles of $\text{PCl}_3 = 0$
* Moles of $\text{Cl}_2 = 0$


* Moles at equilibrium:
* Moles of $\text{PCl}_5 = 1 - \alpha$
* Moles of $\text{PCl}_3 = \alpha$
* Moles of $\text{Cl}_2 = \alpha$



Total number of moles at equilibrium ($N_{total}$):

$$N_{total} = (1 - \alpha) + \alpha + \alpha = 1 + \alpha$$

Let total pressure of the system at equilibrium be $P$. Now we calculate the partial pressure of each gas using mole fraction (মোল ভগ্নাংশ):

* $P_{\text{PCl}_5} = \left(\frac{1 - \alpha}{1 + \alpha}\right) P$
* $P_{\text{PCl}_3} = \left(\frac{\alpha}{1 + \alpha}\right) P$
* $P_{\text{Cl}_2} = \left(\frac{\alpha}{1 + \alpha}\right) P$

The equilibrium constant $K_p$ expression for the reaction is:

$$K_p = \frac{P_{\text{PCl}_3} \cdot P_{\text{Cl}_2}}{P_{\text{PCl}_5}}$$

Substituting the partial pressure values:

$$K_p = \frac{\left(\frac{\alpha}{1 + \alpha} P\right) \cdot \left(\frac{\alpha}{1 + \alpha} P\right)}{\left(\frac{1 - \alpha}{1 + \alpha} P\right)}$$

$$K_p = \frac{\alpha^2 P^2}{(1 + \alpha)^2} \cdot \frac{1 + \alpha}{(1 - \alpha) P}$$

$$K_p = \frac{\alpha^2 P}{(1 + \alpha)(1 - \alpha)}$$

$$K_p = \frac{\alpha^2 P}{1 - \alpha^2}$$

This is the required mathematical expression for $K_p$ for the dissociation of $\text{PCl}_5$.

**Answer to Question Number 3**

**Le Chatelier's Principle**

Le Chatelier's principle (লা শাতেলিয়ের নীতি) states that if a system at equilibrium is subjected to any change in stress parameters like temperature, pressure, or concentration, the equilibrium position will shift in such a direction so as to counteract or nullify (প্রশমিত করা) the effect of that change.

**Temperature Effect on the Synthesis of Ammonia**

Ammonia ($\text{NH}_3$) is synthesized by Haber process according to the following reversible reaction:

$$\text{N}_2(g) + 3\text{H}_2(g) \rightleftharpoons 2\text{NH}_3(g) \quad \Delta H = -92.4 \text{ kJ/mol}$$

Key analysis of temperature effect:

* The forward reaction is exothermic (তাপউৎপাদী), meaning heat is released during the formation of ammonia.
* According to Le Chatelier's principle, if we increase the temperature, the system will try to reduce the heat by shifting in the backward direction (পশ্চাৎমুখী). This decreases the yield (উৎপাদন) of ammonia.
* Conversely, if we decrease the temperature, the system shifts in the forward direction (সম্মুখমুখী) to produce more heat, which increases the yield of ammonia.
* However, at very low temperatures, the rate of reaction (বিক্রিয়ার গতি) becomes extremely slow and impractical for commercial synthesis.

To solve this problem, an optimum temperature (অনুকূল তাপমাত্রা) of around $450^\circ\text{C}$ to $500^\circ\text{C}$ is maintained along with an iron catalyst (অনুঘটক) to get maximum yield at a good speed.


**Assignment Answers: Atomic Structure and Quantum Mechanics**

**Answer to Question 1**

**Isotopes**

Isotopes (আইসোটোপ / সমস্থানিক) are defined as atoms of the same chemical element having the same atomic number ($Z$, number of protons) but different mass numbers ($A$, total protons and neutrons). Because they have the same atomic number, they possess identical chemical properties but slightly different physical properties.

* **Example:** Hydrogen has three well-known isotopes:
* Protium ($^1_1\text{H}$): $1$ proton, $0$ neutrons
* Deuterium ($^2_1\text{H}$): $1$ proton, $1$ neutron
* Tritium ($^3_1\text{H}$): $1$ proton, $2$ neutrons



**Isotones**

Isotones (আইসোটোন / সমনিউট্রনক) are defined as atoms of different chemical elements having the same number of neutrons ($A - Z$) in their nucleus, but different atomic numbers ($Z$) and different mass numbers ($A$). Because they belong to different elements, their chemical and physical properties are completely different.

* **Example:** Carbon-14 ($^{14}_6\text{C}$) and Oxygen-16 ($^{16}_8\text{O}$):
* For Carbon-14: Neutrons = $14 - 6 = 8$
* For Oxygen-16: Neutrons = $16 - 8 = 8$



**Isobars**

Isobars (আইসোবার / সমভরযুক্ত) are defined as atoms of different chemical elements having the same mass number ($A$), but different atomic numbers ($Z$). Since they possess different atomic numbers, they belong to different elements and exhibit completely different chemical properties.

* **Example:** Argon-40 ($^{40}_{18}\text{Ar}$) and Calcium-40 ($^{40}_{20}\text{Ca}$):
* Argon-40: Mass number $A = 40$, Atomic number $Z = 18$
* Calcium-40: Mass number $A = 40$, Atomic number $Z = 20$



**Answer to Question 2**

**Statement of Hund's Rule**

Hund's Rule of Maximum Multiplicity (সর্বোচ্চ গুণন নীতি) states that:

During the filling of electrons into degenerate orbitals (সমশক্তি সম্পন্ন অরবিটাল) belonging to the same subshell, pairing of electrons will not take place until each available orbital is singly occupied by an electron with parallel spin (সমমুখী স্পিন).

**Explanation of Hund's Rule**

Electrons are negatively charged particles, so two electrons placed in the same orbital experience electrostatic repulsion (স্থিরবৈদ্যুতিক বিকর্ষণ). To minimize this inter-electronic repulsion and achieve maximum stability, electrons prefer to occupy separate degenerate orbitals (such as $2p_x, 2p_y, 2p_z$) individually first. Furthermore, these single electrons keep their spin directions parallel to gain exchange energy (বিনিময় শক্তি), which makes the atom more stable. Only after every orbital of a subshell gets one electron each, does the pairing up of electrons begin with opposite spins.

**Example**

Consider the electronic configuration of Nitrogen ($Z = 7$):

Total electrons = $7$.

* $1s^2 2s^2 2p^3$

Here, the $2p$ subshell has three degenerate orbitals ($2p_x, 2p_y, 2p_z$).

* **Incorrect filling:** $2p_x^2 2p_y^1 2p_z^0$ (violates Hund's rule because pairing happens before all $p$-orbitals get one electron).
* **Correct filling according to Hund's rule:** $2p_x^1 2p_y^1 2p_z^1$ (all three $2p$ orbitals get one electron each with parallel spins).

**Answer to Question 3**

**Definition of Quantum Numbers**

Quantum numbers (কোয়ান্টাম সংখ্যা) are a set of four mathematical values used to completely define the quantum state, exact address, energy level, orbital shape, orientation, and spin direction of an electron residing inside an atom.

**The Four Quantum Numbers and Their Significance**

**1. Principal Quantum Number ($n$)**

* **Definition:** Represents the main energy shell (প্রধান শক্তিস্তর) or orbit level in which the electron is revolving around the nucleus.
* **Allowed Values:** Positive integers $n = 1, 2, 3, 4, \dots$ (corresponding to $K, L, M, N$ shells).
* **Significance:** It determines the size of the electron cloud and the average distance of the electron from the nucleus. It also dictates the overall energy of the shell. The maximum electron capacity of any shell is calculated using $2n^2$.

**2. Azimuthal Quantum Number ($l$)**

* **Definition:** Also called the orbital angular momentum quantum number, it defines the subshell (উপশক্তিস্তর) to which the electron belongs.
* **Allowed Values:** $l = 0 \text{ to } (n-1)$ for a given value of $n$.
* If $l = 0$, it is $s$-subshell (Spherical shape)
* If $l = 1$, it is $p$-subshell (Dumbbell shape)
* If $l = 2$, it is $d$-subshell (Double dumbbell shape)
* If $l = 3$, it is $f$-subshell (Complex shape)


* **Significance:** It determines the three-dimensional geometric shape of the orbital and the orbital angular momentum of the electron.

**3. Magnetic Quantum Number ($m_l$)**

* **Definition:** Represents the spatial orientation (ত্রিমাত্রিক দিকবিন্যাস) of an orbital in three-dimensional space when placed under an external magnetic field.
* **Allowed Values:** $m_l = -l \text{ through } 0 \text{ to } +l$. Total values $= (2l + 1)$.
* For $p$-subshell ($l=1$), $m_l = -1, 0, +1$ (gives 3 degenerate $p$-orbitals: $p_x, p_y, p_z$).


* **Significance:** It determines the number of preferred spatial orientations or distinct degenerate orbitals present within a given subshell.

**4. Spin Quantum Number ($m_s$)**

* **Definition:** Describes the intrinsic spin direction (নিজস্ব ঘূর্ণন দিক) of an electron rotating around its own axis while orbiting the nucleus.
* **Allowed Values:** $m_s = +\frac{1}{2}$ (representing spin-up or clockwise rotation) and $m_s = -\frac{1}{2}$ (representing spin-down or anti-clockwise rotation).
* **Significance:** It distinguishes between two electrons occupying the exact same orbital, ensuring compliance with Pauli's Exclusion Principle (পাউলির বর্জন নীতি) which states that no two electrons in an atom can have all four quantum numbers identical.