
## 1) **VCC**

* **Meaning:** IC-কে যেই voltage দেই, সেটা positive supply pin-এ যায়।
* **Easy way:** তোমার power supply-এর “লাল তার”-এর ভোল্টেজ মানে VCC।
* **এই case-এ:** 74HC08-এর VCC pin = 14 নম্বর pin।

---

## 2) **GND**

* **Meaning:** Ground (0V reference point)। সব voltage এর মাপ GND এর তুলনায় হয়।
* **Easy way:** কালো তার = GND।
* **এই case-এ:** IC-এর GND pin = 7 নম্বর pin।

---

## 3) **LED forward voltage**

* **Meaning:** LED অন হতে হলে যত ভোল্টেজ দরকার।
* **Easy way:** Red LED অন হয় প্রায় 1.8–2.2V এ।
* **এই case-এ:** VCC যদি 2V এর কম হয় → LED জ্বলবে না।

---

## 4) **AND Gate**

* **Meaning:** Digital logic circuit, যেটা তখনই 1 দেয় যখন সব input 1 হয়।
* **Easy way:** দুইটা সুইচ সিরিজে, দুইটাতেই ON দিলে লাইট জ্বলে।
* **এই case-এ:** 74HC08-এর 1A ও 1B = input, 1Y = output।

---

## 5) **Floating Input**

* **Meaning:** যখন input pin-এ না GND, না VCC—মানে কোন নির্দিষ্ট লেভেল নেই।
* **Problem:** তখন pin random 0/1 হয়ে যায়।
* **Fix:** Input pin-এ সরাসরি +5V বা 0V connect করো।

---

## 6) **Pull-down resistor**

* **Meaning:** একধরনের resistor, যা pin-কে ডিফল্টে GND-তে টেনে রাখে।
* **Easy way:** যদি pin ফাঁকা থাকে, সেটা Low হয়ে থাকবে।
* **এই case-এ:** শুরুতে দরকার নেই, সরাসরি GND দিলেই হবে।

---

## 7) **Absolute maximum rating**

* **Meaning:** IC যত ভোল্টেজ/কারেন্ট সেফলি সহ্য করতে পারে, তার সর্বোচ্চ সীমা।
* **এই case-এ:** 74HC08 VCC max ≈ 7V; এর বেশি দিলে damage হবে।

---

## 8) **Truth Table**

* **Meaning:** একটা টেবিল যা সব input combination-এর output দেখায়।
* **এই case-এ:**
  \| A | B | Output | LED |
  \|---|---|---|---|
  \| 0 | 0 | 0 | OFF |
  \| 0 | 1 | 0 | OFF |
  \| 1 | 0 | 0 | OFF |
  \| 1 | 1 | 1 | ON ✅ |

---

## 9) **Regulated power supply**

* **Meaning:** এমন power supply যা ভোল্টেজ স্থির রাখে, current যাই বদলাক।
* **Easy way:** তুমি 5.0V সেট করলে, load যাই হোক 5.0V রাখার চেষ্টা করবে।
* **এই case-এ:** তাই LED on/off করলেও ভোল্টেজ বদলাচ্ছে না।



---

