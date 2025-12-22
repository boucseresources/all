![[image-62.png]]


=== "বাংলায় সহজে"

    ![[image-61.png|464x291]]


    এই ছবিটি মূলত **Thevenin's Theorem** অ্যাপ্লাই করার সময় আমরা যে ৩টি ভিন্ন পরিস্থিতির (Case) মুখোমুখি হই, সেগুলোকে ক্লাসিফাই করেছে। সার্কিটে কী ধরণের **Source** (Voltage বা Current) আছে, তার ওপর ভিত্তি করে ** (Thevenin Resistance)** বের করার নিয়ম আলাদা হয়।

    নিচে ৩টি পরিস্থিতি সহজভাবে বুঝিয়ে বলছি:

    ### ১. Independent Sources Only (উপরের বাম পাশের ছবি)

    সার্কিটে যদি শুধুমাত্র **Independent Sources** (গোল বা সার্কেল সিম্বল) থাকে এবং কোনো Dependent Source (ডায়মন্ড শেপ) না থাকে।

    * **কী করতে হয়:** এটি সবচেয়ে সহজ নিয়ম।
    * ** বের করা:** স্বাভাবিক নিয়মে সার্কিট সলভ করে ওপেন টার্মিনালের ভোল্টেজ বের করতে হবে।
    * ** বের করা:** সব Independent Source গুলোকে **"Deactivate"** বা বন্ধ করে দিতে হবে।
    * Voltage Source → **Short Circuit** (wire দিয়ে জুড়ে দেওয়া)।
    * Current Source → **Open Circuit** (কানেকশন খুলে দেওয়া)।
    * এরপর লোড টার্মিনাল থেকে তুল্য রোধ () বের করলেই সেটি হবে ।



    ### ২. Independent and Dependent Sources (উপরের ডান পাশের ছবি)

    সার্কিটে যদি Independent (গোল) এবং Dependent (ডায়মন্ড) **উভয় ধরনের Source** থাকে।

    * **সমস্যা:** Dependent source-কে সরাসরি "Deactivate" বা বন্ধ করা যায় না, কারণ এদের মান সার্কিটের অন্য কোনো ভোল্টেজ বা কারেন্টের ওপর নির্ভর করে।
    * ** বের করার নিয়ম:** এখানে সোর্স অফ করে  বের করা যাবে না। এখানে **** সূত্র ব্যবহার করতে হয়।
    1. প্রথমে টার্মিনাল ওপেন রেখে ** বা ** (Open Circuit Voltage) বের করতে হয়।
    2. এরপর টার্মিনাল দুটি শর্ট (Short) করে দিয়ে **** (Short Circuit Current) বের করতে হয়।
    3. শেষে  কে  দিয়ে ভাগ দিলেই  পাওয়া যায়।



    ### ৩. Dependent Sources Only (নিচের ছবি)

    সার্কিটে যদি **শুধুমাত্র Dependent Sources** থাকে এবং কোনো Independent Source না থাকে।

    * **কনসেপ্ট:** যেহেতু কোনো Independent power source নেই, তাই এই সার্কিটটি মূলত "Dead" বা মৃত। এর নিজস্ব কোনো ভোল্টেজ বা কারেন্ট জেনারেট করার ক্ষমতা নেই। তাই এর ****।
    * ** বের করার নিয়ম:** যেহেতু সার্কিটটি অফ, তাই এর রোধ মাপতে বাইরে থেকে একে "উত্তেজিত" (excite) করতে হয়।
    * আউটপুট টার্মিনালে একটি **Test Source** লাগাতে হয় (হয়  ভোল্টেজ সোর্স অথবা  কারেন্ট সোর্স)।
    * যদি  সোর্স লাগাও, তবে সার্কিটে কত কারেন্ট () ঢুকছে তা বের করো। তাহলে ।
    * যদি  সোর্স লাগাও, তবে টার্মিনালে কত ভোল্টেজ () তৈরি হচ্ছে তা বের করো। তাহলে ।



    **সারসংক্ষেপ (Summary):**

    * **Case 1:** সব সোর্স অফ করে সরাসরি রোধ মাপো।
    * **Case 2:**  এবং  বের করে ভাগ দাও ()।
    * **Case 3:** বাইরে থেকে  বা  সোর্স লাগিয়ে টেস্ট করো।


=== "For exam"

    ## Q: State Thevenin's Theorem with Example  
    **(20 Marks)**

    ---

    ## Answer

    ### Introduction to the Theorem

    In electrical engineering, solving complex circuits with many elements can be very difficult and time taking. To make this simple, we use **Thevenin's Theorem**. It is a very important method for network reduction.

    ---

    ### Statement of Thevenin’s Theorem

    Thevenin’s theorem states that any **linear, bilateral network** having a number of voltage sources and resistances can be replaced by a simple equivalent circuit.  
    This equivalent circuit consists of:

    - A single voltage source \( V_{th} \)  
    - A single resistance \( R_{th} \) connected in series  

    Where:  
    - \( V_{th} \) is the open circuit voltage at the terminals  
    - \( R_{th} \) is the equivalent resistance measured at the terminals when all sources are replaced by their internal resistances  

    ---

    ### Why Do We Use Thevenin’s Theorem?

    It is mainly used to find the current flowing through a specific load resistor \( R_L \) without solving the whole circuit again and again when the load value changes.

    ---

    ### Steps to Solve a Problem Using Thevenin’s Theorem

    To find the current through a load resistor \( R_L \), follow these steps:

    1. **Remove the Load Resistor**  
    First, remove the load resistance \( R_L \) from the circuit. The terminals are now open.

    2. **Find \( V_{th} \)**  
    Calculate the voltage across the open terminals. This voltage is called Thevenin’s voltage \( V_{th} \).

    3. **Find \( R_{th} \)**  
    Replace all voltage sources with a short circuit and all current sources with an open circuit.  
    Then calculate the equivalent resistance seen from the open terminals. This is Thevenin’s resistance \( R_{th} \).

    4. **Draw the Equivalent Circuit**  
    Connect \( V_{th} \) and \( R_{th} \) in series. Then connect the load resistor \( R_L \) back to the circuit.

    5. **Calculate Load Current**  
    Using Ohm’s law:

    \[
    I_L = \frac{V_{th}}{R_{th} + R_L}
    \]

    ---

    ## Solved Example

    Let us consider a circuit to understand Thevenin’s theorem clearly.

    ### Question  
    Find the current flowing through the load resistor using Thevenin’s theorem.

    ### Given Circuit Data

    - Source voltage \( V = 50 \, V \)  
    - \( R_1 = 10 \, \Omega \) (series arm)  
    - \( R_2 = 20 \, \Omega \) (parallel arm)  
    - \( R_3 = 5 \, \Omega \) (series arm connected to load)  
    - Load resistor \( R_L = 15 \, \Omega \)

    ---

    ### Step 1: Remove the Load Resistor \( R_L \)

    Remove the \( 15 \, \Omega \) load resistor. The circuit terminals are now open and named A and B.

    ---

    ### Step 2: Calculate Thevenin’s Voltage \( V_{th} \)

    Since terminals A and B are open, no current flows through resistor \( R_3 \).  
    So, the voltage across terminals A and B is equal to the voltage across \( R_2 \).

    Total resistance in the circuit:

    \[
    R = R_1 + R_2 = 10 + 20 = 30 \, \Omega
    \]

    Total current:

    \[
    I = \frac{50}{30} = 1.67 \, A
    \]

    Voltage across \( R_2 \):

    \[
    V_{R2} = I \times R_2 = 1.67 \times 20 = 33.33 \, V
    \]

    So,

    \[
    V_{th} = 33.33 \, V
    \]

    ---

    ### Step 3: Calculate Thevenin’s Resistance \( R_{th} \)

    Short circuit the 50 V source.

    From terminals A and B:
    - \( R_1 \) and \( R_2 \) are in parallel  
    - \( R_3 \) is in series with that combination  

    Parallel resistance:

    \[
    R_{parallel} = \frac{R_1 \times R_2}{R_1 + R_2}
    = \frac{10 \times 20}{10 + 20}
    = 6.67 \, \Omega
    \]

    Add \( R_3 \):

    \[
    R_{th} = 6.67 + 5 = 11.67 \, \Omega
    \]

    ---

    ### Step 4: Draw Thevenin’s Equivalent Circuit

    The equivalent circuit consists of:
    - Voltage source \( V_{th} = 33.33 \, V \)  
    - Series resistance \( R_{th} = 11.67 \, \Omega \)  
    - Load resistance \( R_L = 15 \, \Omega \)

    ---

    ### Step 5: Find Load Current \( I_L \)

    Apply Ohm’s law:
    
    \[
    I_L = \frac{V_{th}}{R_{th} + R_L}
    \]

    \[
    I_L = \frac{33.33}{11.67 + 15}
    \]

    \[
    I_L = \frac{33.33}{26.67}
    \]

    \[
    I_L = 1.25 \, A
    \]

    ---

    ## Conclusion

    By using Thevenin’s theorem, a complex circuit is converted into a simple equivalent circuit. This makes calculation easy and saves time.  
    The final current flowing through the load resistor is **1.25 amperes**.



=== "Video Explanation"

    ### **Introduction: Mastering Thevenin’s Theorem**

    **[[00:00](http://www.youtube.com/watch?v=-X7otqsma4Q&t=0)]** I want to make you an expert at using Thevenin's theorem to solve circuits. Imagine you have a complex circuit and you need to find the voltage or current through just one specific resistor. We call this resistor our "load." Instead of analyzing the entire complex mess every time, what if there was a way to represent the whole circuit—excluding the load—as something much simpler?
    ![[image-63.png]]
    That is exactly what Thevenin’s theorem does. It allows us to replace all the current sources, voltage sources, and resistors in a circuit with just two simple elements connected in series with our load:

    1. **Thevenin Equivalent Voltage ():** This acts as a single voltage source
    ![[image-64.png]]
    2. **Thevenin Equivalent Resistance ():** This acts as a single resistor.
    ![[image-65.png]]

    **[[03:47](http://www.youtube.com/watch?v=-X7otqsma4Q&t=227)]** You might wonder why we bother with this if methods like Nodal or Mesh analysis exist. The huge benefit here is flexibility. If you wanted to test five different loads on a circuit, you would normally have to re-analyze the whole circuit five times. With Thevenin’s theorem, you solve the complex part once to get your equivalent circuit, and then you can easily swap in any load you want.

    ---

    ### Chapter 1: The Three Scenarios for Finding 

    **[[01:14](http://www.youtube.com/watch?v=-X7otqsma4Q&t=74)]** To solve these problems, we always need to find two values:  and . Finding  is usually straightforward (we find the Open Circuit Voltage, or ), but finding  depends entirely on what is inside your circuit. I classify these into three specific scenarios:

    ![[image-66.png]]

    1. **Independent Sources Only:** To find , we remove the load and calculate the voltage across the open terminals (). To find , we turn off the sources: voltage sources become short circuits (wires), and current sources become open circuits (broken wires). We then look back into the circuit and calculate the total resistance.
    2. **Mix of Dependent and Independent Sources:** We find  normally (). However, we *cannot* turn off dependent sources. Instead, we remove the load and place a short circuit (a wire) across the terminals. We calculate the current flowing through that wire, which we call the Short Circuit Current (). Then, we use the formula:

    3. **Dependent Sources Only:** Here, there is no independent electricity flow, so  is zero. To find resistance, we remove the load and inject a test source—usually a **1 mA current source**—into the terminals. We calculate the resulting voltage, and since our current is 1 mA, that voltage helps us find resistance using Ohm's Law.

    ---

    ### **Chapter 2: Example with Independent Sources**

    ![[image-67.png|341x206]]

    ![[image-68.png|340x194]]

    ![[image-69.png|339x166]]

    ![[image-70.png|339x214]]

    ![[image-71.png|339x185]]




    **[[04:25](http://www.youtube.com/watch?v=-X7otqsma4Q&t=265)]** Let’s start with a simple example where we need to find the voltage  across a 2 k$\Omega$ resistor.
    First, I remove the load (the 2 k$\Omega$ resistor). Now I need to find the open-circuit voltage () across those terminals. I notice that with the load removed, one part of the circuit becomes an open branch, meaning no current flows there. This allows me to use a simple KVL (Kirchhoff's Voltage Law) loop.

    I assume a counter-clockwise current and solve for the loop current, getting **1 mA**. Using Ohm's Law, the voltage drop across the resistor in the loop is 2V. I then write a KVL equation for the outer loop including my open terminals to find , which turns out to be **8V**.

    **[[06:37](http://www.youtube.com/watch?v=-X7otqsma4Q&t=397)]** Next, I find . Since this circuit only has independent sources, I turn the voltage sources into short circuits. Looking into the terminals, I see two resistors in parallel. I calculate their equivalent resistance to be **1.33 k$\Omega$**.

    Finally, I draw the Thevenin Equivalent circuit: an 8V source in series with a 1.33 k$\Omega$ resistor. I place my original load back in and use the voltage division rule to find the final answer.

    ---

    ### **Chapter 3: Mixing Voltage and Current Sources**

    **[[08:15](http://www.youtube.com/watch?v=-X7otqsma4Q&t=495)]** In this example, we have both a voltage source and a current source. I need to find the voltage .
    I start by removing the load (a 2 k$\Omega$ resistor). To find , I use Mesh Analysis. I have two loops, but one loop has a current source, which constrains that mesh current immediately.

    I write the equation for the first loop. Interestingly, I find that the current  is **zero**. This means the voltage drop across one resistor is zero, and the drop across the other is 12V. Therefore, my  is **12V**.

    **[[09:36](http://www.youtube.com/watch?v=-X7otqsma4Q&t=576)]** To find , I turn the voltage source into a short circuit and the current source into an open circuit. Looking from the terminals, I see two parallel resistors in series with a third one. I combine them to get my total resistance. I redraw the circuit, put the load back, and use voltage division to get the final answer of **4.8V**.

    ---

    ### **Chapter 4: Finding Current Instead of Voltage**

    **[[10:30](http://www.youtube.com/watch?v=-X7otqsma4Q&t=630)]** Here, I need to find a current, , flowing through a resistor.
    I remove the load. Because the current direction was downwards, I define my positive terminal at the top. Finding  here requires seeing the geometry of the circuit; the current has nowhere to flow except through one specific conductor. I calculate the voltage drop on a 4 k$\Omega$ resistor as . A quick KVL loop gives me the .

    **[[11:48](http://www.youtube.com/watch?v=-X7otqsma4Q&t=708)]** For , I open the current sources and short the voltage sources. I notice one conductor becomes useless (dangling), so I remove it to simplify the view. I see two parallel resistors in series with another. My  is **4 k$\Omega$**.
    I redraw the circuit with my calculated voltage and resistance, insert the load, and use Ohm's Law to find the current: **2.67 mA**.

    ---

    ### **Chapter 5: Dependent and Independent Sources (Voltage)**

    **[[12:40](http://www.youtube.com/watch?v=-X7otqsma4Q&t=760)]** Now things get trickier. I have an independent voltage source *and* a dependent voltage source.
    I remove the load (4 k$\Omega$ resistor). I need to be careful with variables; I rename the controlling voltage  to  because the circuit state has changed.
    I use KVL to find the loop current (2 mA), which lets me find  (8V). Then I do another KVL loop to find . I get a negative value, which just means the polarity is opposite to my assumption.

    **[[14:13](http://www.youtube.com/watch?v=-X7otqsma4Q&t=853)]** Now for . I **cannot** turn off the dependent source. Instead, I short-circuit the output terminals. I need to find the current flowing through this short, . The circuit variables change again, so I rename  to .
    I use Mesh Analysis (two loops). I write the equations, substituting the dependent variable with an expression involving my mesh currents. Solving the system gives me .
    Finally, I calculate . I draw the equivalent circuit, keeping the negative polarity I found earlier, and solve for the final load voltage using voltage division.

    ---

    ### **Chapter 6: Dependent and Independent Sources (Current & Voltage)**

    **[[16:06](http://www.youtube.com/watch?v=-X7otqsma4Q&t=966)]** This is a complex case with independent sources and *both* types of dependent sources (voltage and current).
    I remove the load (a 7  resistor). I need .
    I use Mesh Analysis. The 5A source constrains one loop. I write equations for the other loops. I substitute the controlling variables ( and ) with my mesh currents.
    Surprisingly, solving this tells me the current  is **0 A**. This makes the calculation very simple:  turns out to be **12V**.

    **[[18:04](http://www.youtube.com/watch?v=-X7otqsma4Q&t=1084)]** For , I short the terminals to find . I have to re-analyze the whole circuit with new variables ().
    I write mesh equations again. I substitute the dependent variables. I find that my short-circuit current is the difference between two mesh currents: .
    Once I have  and , I divide them to get . I draw the final circuit, insert the load, and use Ohm's Law to find the current .

    ---

    ### **Chapter 7: Dependent Sources Only**

    **[[20:02](http://www.youtube.com/watch?v=-X7otqsma4Q&t=1202)]** In this final example, the circuit has *only* a dependent source. There are no independent sources to start the flow of electricity.
    Because of this,  is effectively zero (no current flow). We cannot find  by the previous methods.

    **[[20:39](http://www.youtube.com/watch?v=-X7otqsma4Q&t=1239)]** My strategy is to **inject a 1 mA current source** into the terminals A and B. This forces current to flow. Now, I just need to find the voltage across these terminals.
    I set up Mesh Analysis. The 1 mA source constrains one loop immediately. I write equations for the other loops, being careful to define the dependent source's controlling current correctly ().
    I solve the system and find the voltage across the terminals is **0.4V**.

    **[[22:22](http://www.youtube.com/watch?v=-X7otqsma4Q&t=1342)]** To find , I use Ohm's Law: Resistance = Voltage / Current.



    When I draw the final Thevenin Equivalent circuit, it is just a single 400  resistor. There is no voltage source because the original circuit had no independent power.

    **[[23:01](http://www.youtube.com/watch?v=-X7otqsma4Q&t=1381)]** That covers the main types of problems you will face. Best of luck with your studies!
