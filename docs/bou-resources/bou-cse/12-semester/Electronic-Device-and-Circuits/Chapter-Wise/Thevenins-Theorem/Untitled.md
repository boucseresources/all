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


Explanation of **Thevenin's Theorem** in English, structured for your exam based on the video:

### **Thevenin's Theorem**

**Statement:**
Thevenin's Theorem states that any linear bilateral network consisting of voltage sources, current sources, and resistors can be replaced by a simple equivalent circuit consisting of a single voltage source () in series with a single resistor () connected across the load terminals.

**Thevenin Equivalent Circuit:**

* ** (Thevenin Voltage):** It is the open-circuit voltage across the load terminals when the load is removed.
* ** (Thevenin Resistance):** It is the equivalent resistance of the circuit looking into the open terminals when all independent sources are turned off (replaced by their internal resistances).

---

### **Steps to Solve Problems (Based on Circuit Type)**

The video explains 3 different scenarios for finding  and :

#### **Case 1: Circuit with Independent Sources Only**

* **Step 1 (Find ):** Remove the load resistor (). Calculate the Open Circuit Voltage () across the terminals using KVL, KCL, or Mesh Analysis. Here, .
* **Step 2 (Find ):** Turn off all independent sources:
* **Voltage Sources:** Replace with a **Short Circuit** (0V).
* **Current Sources:** Replace with an **Open Circuit** (0A).
* Calculate the equivalent resistance looking into the load terminals.



#### **Case 2: Circuit with Both Dependent and Independent Sources**

* **Step 1 (Find ):** Remove the load resistor. Calculate the Open Circuit Voltage () across the terminals using standard circuit analysis methods.
* **Step 2 (Find ):** You cannot simply turn off dependent sources. Instead:
* Short-circuit the load terminals.
* Calculate the Short Circuit Current () flowing through that shorted path.
* Calculate  using the formula:





#### **Case 3: Circuit with Dependent Sources Only (No Independent Sources)**

* **Step 1 (Find ):** Since there is no active source to drive the circuit, .
* **Step 2 (Find ):**
* Remove the load.
* Apply an external **Test Source** (e.g., a 1V voltage source or a 1mA current source) across the open terminals.
* Calculate the response (Source Current or Source Voltage).
* Determine  using Ohm’s Law:





---

### **Final Step: Calculate Load Current/Voltage**

Once you have the Thevenin Equivalent Circuit, reconnect the load resistor () in series with  and .

* **Load Current ():**


* **Load Voltage ():**