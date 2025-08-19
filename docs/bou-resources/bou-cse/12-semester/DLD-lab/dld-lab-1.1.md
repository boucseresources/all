<!-- prettier-ignore-start -->

# ল্যাব এক্সপেরিমেন্ট: AND Gate (IC 7408), LED এবং R<sub>L</sub> রেজিস্টর

---

## 🎯 উদ্দেশ্য

!!! info "Objective"

    - AND Gate-এর কাজ বাস্তবে দেখা  
    - ইনপুট সুইচের বিভিন্ন কম্বিনেশনে LED কিভাবে অন/অফ হয় তা পর্যবেক্ষণ করা  
    - AND Gate-এর Truth Table যাচাই করা

---

## 🛠️ প্রয়োজনীয় উপকরণ

| উপাদান                            | সংখ্যা     | কাজ                      |
| --------------------------------- | ---------- | ------------------------ |
| IC 7408 (Quad 2-input AND Gate)   | 1          | লজিক অপারেশন             |
| পুশ বাটন সুইচ                     | 2          | ইনপুট A ও B দেওয়ার জন্য  |
| LED                               | 1          | আউটপুট দেখার জন্য        |
| রেজিস্টর R<sub>L</sub> (330Ω–1kΩ) | 1          | LED-এর কারেন্ট সীমিত করা |
| ব্রেডবোর্ড                        | 1          | সার্কিট তৈরির জন্য       |
| জাম্পার তার                       | প্রয়োজনমতো | সংযোগ                    |
| DC পাওয়ার সাপ্লাই (5V)            | 1          | IC ও LED-কে পাওয়ার দেওয়া |

---

## ⚡ তত্ত্ব (Theory)

!!! note "Core Concepts"

    - **AND Gate নিয়ম:** আউটপুট HIGH (1) হবে **শুধু** যখন সব ইনপুট HIGH (1); অন্যথায় LOW (0)।  
    - **IC 7408:** TTL IC; মোট ৪টি AND gate আছে। **Pin 14 = Vcc (+5V)**, **Pin 7 = GND**।  
    - **R<sub>L</sub> রেজিস্টর:** LED সরাসরি 5V নিলে অতিরিক্ত কারেন্টে নষ্ট হতে পারে—রেজিস্টর কারেন্ট **limit** করে LED-কে সুরক্ষিত রাখে।


### Truth Table

| ইনপুট A | ইনপুট B | আউটপুট (AND) | LED          |
| ------- | ------- | ------------ | ------------ |
| 0       | 0       | 0            | নিভে থাকবে ❌ |
| 0       | 1       | 0            | নিভে থাকবে ❌ |
| 1       | 0       | 0            | নিভে থাকবে ❌ |
| 1       | 1       | 1            | জ্বলবে ✅     |

---

## 🔧 কীভাবে সংযোগ হবে (মূল ধারণা)

!!! tip "Power, Input, Output—৩টি স্তম্ভ"


    1) **Power:** IC-কে চালাতে **Pin 14 → +5V**, **Pin 7 → GND** (অবশ্যই লাগাতে হবে)  
    2) **Inputs:** Switch দিয়ে A ও B ইনপুট — চাপলে 5V (HIGH), ছেড়ে দিলে 0V (LOW) (pull-down 10kΩ দিলে আরও স্থিতিশীল)  
    3) **Output→LED:** Output → **R<sub>L</sub>** → LED → GND (Output HIGH হলে LED জ্বলে)

    ```text
      +5V ---- Switch A ----\
                              |----> [7408 AND Gate] ---- Output ---- Resistor ---- LED ---- GND
      +5V ---- Switch B ----/
    ```


**ব্যাখ্যা:** যখন A=1 ও B=1 একসাথে, Output=HIGH → Resistor হয়ে LED-এ কারেন্ট যায় → LED অন। অন্য সব কম্বিনেশনে LED OFF।

!!! warning "Common mistake"


    Battery লাইন সরাসরি gate-এ ঢোকালে হবে না। **Input pin**-এ নির্দিষ্ট HIGH/LOW দিতে হবে; আর **IC Vcc–GND অবশ্যই সংযুক্ত** থাকতে হবে।


---

## 🔄 কার্যপ্রণালী (Procedure)

1. ব্রেডবোর্ডে IC 7408 বসাও
2. **Pin 14 → +5V**, **Pin 7 → GND**
3. দুটি পুশ-বাটন সুইচ ইনপুট A (Pin 1) ও B (Pin 2)-তে দাও; **10kΩ pull-down** দিলে ভাল
4. আউটপুট (Pin 3) → **R<sub>L</sub> (330Ω–1kΩ)** → **LED → GND**
5. পাওয়ার অন করে (00, 01, 10, 11) সব কম্বিনেশন টেস্ট করো
6. LED অবস্থা Truth Table-এর সাথে মিলাও

### 📊 পর্যবেক্ষণ (Observation)

| ইনপুট A | ইনপুট B | আউটপুট | LED   |
| ------- | ------- | ------ | ----- |
| 0       | 0       | 0      | OFF ❌ |
| 0       | 1       | 0      | OFF ❌ |
| 1       | 0       | 0      | OFF ❌ |
| 1       | 1       | 1      | ON ✅  |

---

## 📌 ফলাফল (Result)

!!! success "Verified"


    ইনপুট A ও B **দুটিই HIGH** হলে তবেই AND Gate-এর আউটপুট HIGH হয়; LED জ্বলে। Truth Table সফলভাবে যাচাই হলো ✅


---

## 📖 কেন জরুরি (Importance)

1. **লজিকের ভিত্তি:** AND gate হলো digital electronics-এর মূল বেস—এটা না বুঝলে প্রসেসর/মেমরি/কম্পিউটার সার্কিট বোঝা কঠিন
2. **তত্ত্ব যাচাই:** বইয়ের truth table-কে LED-এর মাধ্যমে বাস্তবে দেখা
3. **ল্যাব স্কিল:** ব্রেডবোর্ড, IC pin-out, resistor নির্বাচন—প্রাকটিক্যাল স্কিল তৈরি হয়
4. **রিয়েল-লাইফ উদাহরণ:**

   * দরজা খুলবে **পাসওয়ার্ড + চাবি**—দুটোই মিললে (AND)
   * মেশিন চালু হবে **Main switch + Safety switch** ON হলে
   * CPU/ডিজিটাল সিস্টেম—সবখানেই gate কম্বিনেশন

---

## 🔍 সহজ উপমা (Analogy)

!!! example "দুজন প্রহরী"


    - দুই প্রহরীই **“হ্যাঁ”** বললে তবেই দরজা খুলবে → LED ON ✅  
    - একজন “না” বললেই দরজা বন্ধ → LED OFF ❌
   

---

## ⚠️ সাবধানতা (Safety)

!!! danger "Precautions"


    - LED-কে **রেজিস্টর ছাড়া** সরাসরি লাগাবে না  
    - Supply **5V** (TTL) রাখো  
    - ইনপুট **floating** রাখবে না—HIGH/LOW স্পষ্ট করো (pull-down/জাম্পার)


---

## ❓ FAQ + ডায়াগ্রাম

!!! note "Q1: IC-কে Power (Vcc) ও GND কেন দিতে হয়?"

   
    - IC-র ভেতরের transistor network চালাতে **+5V (Vcc)** ও **GND** দরকার; শুধু input HIGH দিলেই হবে না  
    - **Pin 14 = +5V**, **Pin 7 = GND** আবশ্যক

    ```text
      +5V (Vcc, Pin 14)
            │
      [ 7408 IC ]
            │
          GND (Pin 7)
    ```
    

---

!!! note "Q2: শুধু Input A/B-তে 5V দিলেই কাজ হওয়া উচিত—তবু কেন হয় না?"


    - **Input pin** শুধু সিগন্যাল নেয়; পাওয়ার দেয় না  
    - Vcc–GND না দিলে IC dead/floating—output আসে না

    ```text
    Input A ──> [IC Logic] ──> Output
    Input B ──> [IC Logic]

    (Power না থাকলে Logic চলবে না)
    ```


---

!!! note "Q3: Rₗ (current limiting resistor) কেন LED path-এ? Power লাইনে দিলে হবে না?"


    - Rₗ LED-এর **current limit** করে  
    - Power লাইনে R দিলে IC-র Vcc drop → logic error/unstable

    ```text
    Correct:  OUT ── R ──▶|── GND
                          LED

    Wrong:   +5V ── R ── Vcc (IC)   ← IC voltage drop ❌
    ```


---

!!! note "Q4: LED-এর আগে না পরে Resistor?"


    - সিরিজে অবস্থান বদলালেও **কারেন্ট একই**—দুইভাবেই কাজ ঠিক

    ```text
    Option 1: OUT ── R ──▶|── GND
                          LED

    Option 2: OUT ──▶|── R ── GND
                    LED
    ```


---

!!! note "Q5: দুই ইনপুটই +5V দিলে LED সবসময় জ্বলে কেন?"

    - AND নিয়ম: সব ইনপুট HIGH ⇒ Output HIGH ⇒ LED ON

    ```text
    +5V ── A
          │
          └─> [AND Gate] ── HIGH ──> LED ON
    +5V ── B
    ```


---

!!! note "Q6: ইনপুট floating রাখলে কী হয়?"


    - Random/noise পড়ে → অনির্ভরযোগ্য output; **pull-down 10kΩ** দাও

    ```text
    +5V ──[SW]─+──> Input
    GND ──[10k]─+
    ```


---

!!! note "Q7: LED polarity উল্টো হলে?"


    - LED একদিকে কারেন্ট নেয়—উল্টো হলে জ্বলে না

    ```text
    Correct: OUT ──▶|── GND
                    LED

    Wrong:  OUT ──|<── GND   (উল্টো ❌)
                  LED
    ```


!!! note "Q8: 74HC08 vs 74LS08—LED বসানোর পার্থক্য?"


    - **74HC08 (CMOS):** HIGH-এ কিছু mA **source** করতে পারে → OUT→R→LED→GND  
    - **74LS08 (TTL LS):** HIGH-এ source দুর্বল (~0.4 mA), LOW-এ **sink শক্তিশালী** → Active-low কানেকশন

    ```text
    HC Series (HIGH-এ LED ON):
    OUT ── R ──▶|── GND
                LED

    LS Series (LOW-এ LED ON):
    +5V ── R ──▶|── OUT
                LED
    ```


---

!!! note "Q9: LED current কিভাবে হিসাব করবো?"


    - Vcc=5V, Red LED≈2V, R=1kΩ → I=(5−2)/1000=**3 mA** (সেফ)

    ```text
    +5V ── R(1k) ──▶|── GND
                    LED
    (I ≈ 3 mA)
    ```


---

!!! note "Q10: ‘সব ঠিক’ তবু LED জ্বলে না—কী কী চেক করবো?"


    - [ ] Pin14=+5V, Pin7=GND  
    - [ ] ইনপুট floating না (pull-down/জাম্পার আছে)  
    - [ ] LED polarity ঠিক  
    - [ ] Resistor আছে/মান ঠিক  
    - [ ] Breadboard rail break ব্রিজ করা

    ```text
    Check:
    [Vcc Pin14] +5V?
    [GND Pin7]  GND?
    LED polarity OK?
    Resistor in series?
    Rail bridge OK?
    ```


---

## 🧠 বাড়তি নোট: Input ≠ Power

!!! info "কেন Input দিলেই কাজ হয় না?"


    Input হল **control signal**; IC চালাতে আলাদা **Vcc–GND** লাগে (যেমন সুইচ টিপে ফ্যান চালাতে গেলেও **সকেটে পাওয়ার** না থাকলে ফ্যান ঘুরবে না)


---

## ✅ Bottom Line

!!! success ""


    - **Power (Pin14=Vcc, Pin7=GND) না দিলে IC কাজ করবে না**  
    - **Input শুধু সিগন্যাল পড়ে**, পাওয়ার দেয় না  
    - **R<sub>L</sub> সবসময় LED path-এ**—current limit করার জন্য  
    - **LED আগে/পরে R—দুইভাবেই ঠিক**, কাজ একই  
    - **HC বনাম LS**: LS-এ দরকারে **active-low** LED  
    - **Switch + 10kΩ pull-down** দিলে সব logic case পরিষ্কার দেখা যায়

<!-- prettier-ignore-end -->
