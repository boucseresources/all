=== "Bangla"

    # আল্ট্রাসনিক দূরত্ব মাপক প্রজেক্ট (Ultrasonic Distance Meter)

    ---

    ## ১. বাংলা সংস্করণ (Bengali Version)

    ### ভূমিকা (Introduction)

    এই প্রজেক্টে আরডুইনো (Arduino Uno), এইচসি-এসআর০৪ (HC-SR04) আল্ট্রাসনিক সেন্সর এবং একটি আইটুসি (I2C) ১৬×২ এলসিডি ডিসপ্লে ব্যবহার করে বাস্তব সময়ে কোনো বস্তুর দূরত্ব মেপে পর্দায় দেখানোর সম্পূর্ণ প্রক্রিয়া তুলে ধরা হয়েছে। এটি রোবোটিক্স, স্বয়ংক্রিয় প্রতিবন্ধক শনাক্তকরণ (Obstacle Avoidance) এবং স্মার্ট পরিমাপক যন্ত্র তৈরিতে ব্যাপকভাবে ব্যবহৃত হয়।

    ---

    ### যন্ত্রাংশের বিবরণ ও বিকল্প মডেল (Components & Alternatives)

    | যন্ত্রাংশ (Component) | মূল ভূমিকা (Role) | বিকল্প ব্র্যান্ড ও মডেল (Alternatives) |
    | --- | --- | --- |
    | **Arduino Uno R3** | প্রধান মাইক্রোকন্ট্রোলার যা সেন্সর থেকে ডেটা নিয়ে প্রসেস করে ডিসপ্লেতে পাঠায়। | **Arduino Nano** (ছোট প্রজেক্টের জন্য), **Arduino Mega 2560**, **ESP32** / **ESP8266** (IoT সুবিধার জন্য), **Raspberry Pi Pico**। |
    | **HC-SR04 Ultrasonic Sensor** | শব্দ তরঙ্গ পাঠিয়ে বাধার দূরত্ব নির্ণয় করে। এতে ৪টি পিন থাকে (VCC, TRIG, ECHO, GND)। | **Parallax PING)))** (৩-পিন সেন্সর), **JSN-SR04T** (ওয়াটারপ্রুফ আল্ট্রাসনিক), **VL53L0X** (লেজার-ভিত্তিক Time-of-Flight সেন্সর)। |
    | **LCD 16×2 (I2C Module)** | দূরত্বের মান প্রদর্শন করে। I2C থাকার কারণে মাত্র ৪টি তারে কাজ করে। | **0.96" I2C OLED Display (SSD1306)**, **4-Digit 7-Segment Display (TM1637)**, বা সাধারণ ১৬-পিন এলসিডি (সমান্তরাল সংযোগ)। |
    | **তার ও ব্রেডবোর্ড** | সার্কিট জোড়া দেওয়ার জন্য জাম্পার তার। | সরাসরি সংযোগ (Direct Jumper Wire) বা পিসিবি (Custom PCB)। |

    ---

    ### সার্কিট সংযোগ (Circuit Connections)

    **১. আল্ট্রাসনিক সেন্সর $\rightarrow$ আরডুইনো:**

    * **VCC** $\rightarrow$ Arduino **5V**
    * **GND** $\rightarrow$ Arduino **GND**
    * **TRIG** $\rightarrow$ Arduino ডিজিটাল পিন **9**
    * **ECHO** $\rightarrow$ Arduino ডিজিটাল পিন **10**

    **২. LCD 16×2 (I2C) $\rightarrow$ আরডুইনো:**

    * **VCC** $\rightarrow$ Arduino **5V**
    * **GND** $\rightarrow$ Arduino **GND**
    * **SDA** $\rightarrow$ Arduino অ্যানালগ পিন **A4** (ডেটা লাইন)
    * **SCL** $\rightarrow$ Arduino অ্যানালগ পিন **A5** (ক্লক লাইন)

    ---

    ### আরডুইনো কোড (Arduino Code)

    *(Tinkercad-এর ডিফল্ট `MCP23008` চিপসেট এবং সাধারণ আরডুইনো উভয়ের জন্যই এই কোড প্রযোজ্য)*

    ```cpp
    #include <Adafruit_LiquidCrystal.h>

    // MCP23008 চিপের অ্যাড্রেস 32 (0x20)-এর জন্য 0
    Adafruit_LiquidCrystal lcd(0);

    const int trigPin = 9;
    const int echoPin = 10;

    long duration;
    int distance;

    void setup() {
    pinMode(trigPin, OUTPUT);
    pinMode(echoPin, INPUT);
    
    lcd.begin(16, 2);
    lcd.setCursor(0, 0);
    lcd.print("Distance Meter");
    delay(1000);
    lcd.clear();
    }

    void loop() {
    // ট্রিগার পিন লো রাখা
    digitalWrite(trigPin, LOW);
    delayMicroseconds(2);
    
    // ১০ মাইক্রোসেকেন্ডের ট্রিগার পালস পাঠানো
    digitalWrite(trigPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigPin, LOW);
    
    // শব্দের প্রতিধ্বনি আসার সময় পরিমাপ (মাইক্রোসেকেন্ডে)
    duration = pulseIn(echoPin, HIGH);
    
    // শব্দ বাতাসের মধ্য দিয়ে যায় প্রায় ০.০৩৪ সেমি/মাইক্রোসেকেন্ড গতিতে
    // যাওয়া এবং আসা মিলিয়ে দ্বিগুণ দূরত্ব অতিক্রম করায় ২ দিয়ে ভাগ করা হয়
    distance = duration * 0.034 / 2;
    
    // পর্দায় মান দেখানো
    lcd.setCursor(0, 0);
    lcd.print("Distance: ");
    lcd.print(distance);
    lcd.print(" cm   ");
    
    delay(200);
    }

    ```

    ---

    ### সাধারণ সমস্যা ও সমাধান (Others & Troubleshooting)

    1. **ডিসপ্লে ফাঁকা থাকা (Display Issue):** Tinkercad-এ আইটুসি এলসিডি মূলত `MCP23008` চিপ ব্যবহার করে। তাই `LiquidCrystal_I2C.h`-এর পরিবর্তে `Adafruit_LiquidCrystal.h` ব্যবহার করতে হয়। বাস্তব হার্ডওয়্যারে যদি `PCF8574` ব্যাকপ্যাক থাকে, তখন অ্যাড্রেস সাধারণত `0x27` হয় এবং সাধারণ `LiquidCrystal_I2C` লাইব্রেরি কাজ করে।
    2. **সেন্সর কাজ না করা:** সেন্সরের `VCC` পিনে ৫ ভোল্ট ঠিকমতো পাচ্ছে কি না তা নিশ্চিত করুন। পাওয়ার সংযোগ বিচ্ছিন্ন থাকলে ইকো পিন কোনো মান ফেরত পাঠায় না।
    3. **ব্রেডবোর্ড সংযোগ:** ব্রেডবোর্ডে পিন পুরোপুরি না বসলে লাইন ড্রপ করে; সরাসরি জাম্পার ওয়্যার ব্যবহার করলে এই সমস্যা এড়ানো যায়।


    ??? "Buzzer পরিচিতি"
    
    বাজার (Buzzer) হলো একটি অডিও সংকেত সৃষ্টিকারী ইলেকট্রনিক যন্ত্র (Audio signaling device), যা বিদ্যুৎ প্রবাহ বা সিগন্যাল পেলে নির্দিষ্ট কম্পাঙ্কে শব্দ বা বিপ (Beep) তৈরি করে।

    বাজারে থাকা **`+`** এবং **`-`** হলো এর দুটি বিদ্যুৎ প্রবাহের প্রান্ত বা টার্মিনাল (Terminals):

    ---

    ### ১. ধনাত্মক প্রান্ত বা পজিটিভ পিন (`+` Pin / Anode)

    * **কাজ:** এই পিনটি দিয়ে বাজারে সিগন্যাল বা বিদ্যুৎ সরবরাহ (Power/Signal) প্রবেশ করে।


    * **সংযোগ (Connection):** আরডুইনো দিয়ে বাজার নিয়ন্ত্রণ করার জন্য এই পিনটিকে আরডুইনোর যেকোনো ডিজিটাল পিনে (যেমন: D8 বা D7) সংযোগ করতে হয়। কোড থেকে যখন ওই পিনে সংকেত পাঠানো হয়, তখনই বাজারটি শব্দ করা শুরু করে।
    * **বাস্তবে চেনার উপায়:** বাস্তব হার্ডওয়্যারে এই পিনের পা বা লেগটি (Leg) তুলনামূলকভাবে লম্বা থাকে এবং প্লাস্টিক কেসিংয়ের ওপরে অনেক সময় `+` চিহ্ন খোদাই করা থাকে।

    ---

    ### ২. ঋণাত্মক প্রান্ত বা নেগেটিভ পিন (`-` Pin / Cathode)

    * **কাজ:** বিদ্যুৎ প্রবাহের পথ বা সার্কিট সম্পূর্ণ করে গ্রাউন্ডে ফেরত নেওয়ার কাজ করে এই পিনটি (Ground / Return path)।


    * **সংযোগ (Connection):** এই পিনটিকে সবসময় সার্কিটের গ্রাউন্ড অর্থাৎ আরডুইনোর **GND** পিনের সাথে যুক্ত করতে হয়।
    * **বাস্তবে চেনার উপায়:** বাস্তব বাজারে এর পা বা লেগটি (Leg) পজিটিভ পিনের চেয়ে কিছুটা খাটো থাকে।

    ---

    ### উল্টো লাগালে কী হবে?

    বেশিরভাগ বাজারই হলো পোলারাইজড (Polarized), অর্থাৎ নির্দিষ্ট ধনাত্মক ও ঋণাত্মক দিক মেনে চলে। পজিটিভ ও নেগেটিভ উল্টো সংযোগ দিলে বাজারের ভেতর দিয়ে বিদ্যুৎ সঠিক পথে প্রবাহিত হতে পারে না, ফলে বাজার থেকে কোনো শব্দ বের হবে না।


=== "English"

    ### Introduction

    This project explains how to build a digital distance meter using an **Arduino Uno**, an **HC-SR04 Ultrasonic Sensor**, and an **I2C 16×2 LCD Display**. It measures the distance between the sensor and an object in real-time and prints the result in centimeters on the screen.

    ---

    ### Components & Alternative Models

    | Component | Function | Alternative Models & Brands |
    | --- | --- | --- |
    | **Arduino Uno R3** | Brain of the project. It sends pulses to the sensor, calculates distance, and updates the screen. | **Arduino Nano** (compact size), **Arduino Mega**, **ESP32** / **ESP8266** (for Wi-Fi projects), **Raspberry Pi Pico**. |
    | **HC-SR04 Sensor** | Ultrasonic sensor. Uses 4 pins: VCC, TRIG, ECHO, GND. Measures distances up to 400 cm. | **Parallax PING)))** (3-pin sensor), **JSN-SR04T** (waterproof sensor for outdoor use), **VL53L0X** (laser-based distance sensor). |
    | **I2C 16×2 LCD** | Displays text and numerical distance. The I2C module reduces wire clutter to only 4 pins. | **0.96" I2C OLED (SSD1306)**, **4-Digit 7-Segment (TM1637)**, or Standard 16-pin Parallel LCD. |
    | **Jumper Wires** | Connects modules together. | Direct DuPont wires or Breadboard setup. |

    ---

    ### Circuit Wiring

    **1. HC-SR04 Ultrasonic Sensor to Arduino:**

    * **VCC** $\rightarrow$ Arduino **5V**
    * **GND** $\rightarrow$ Arduino **GND**
    * **TRIG** $\rightarrow$ Arduino Digital Pin **9**
    * **ECHO** $\rightarrow$ Arduino Digital Pin **10**

    **2. I2C 16×2 LCD to Arduino:**

    * **VCC** $\rightarrow$ Arduino **5V**
    * **GND** $\rightarrow$ Arduino **GND**
    * **SDA** $\rightarrow$ Arduino Analog Pin **A4** (Serial Data line)
    * **SCL** $\rightarrow$ Arduino Analog Pin **A5** (Serial Clock line)

    ---

    ### Arduino Code

    *(Works directly inside Tinkercad and physical Arduino boards configured with MCP23008)*

    ```cpp
    #include <Adafruit_LiquidCrystal.h>

    // Initialize LCD for address 32 (0x20) using index 0
    Adafruit_LiquidCrystal lcd(0);

    const int trigPin = 9;
    const int echoPin = 10;

    long duration;
    int distance;

    void setup() {
    pinMode(trigPin, OUTPUT);
    pinMode(echoPin, INPUT);
    
    lcd.begin(16, 2);
    lcd.setCursor(0, 0);
    lcd.print("Distance Meter");
    delay(1000);
    lcd.clear();
    }

    void loop() {
    // Clear the trigger pin
    digitalWrite(trigPin, LOW);
    delayMicroseconds(2);
    
    // Send a 10-microsecond high pulse
    digitalWrite(trigPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigPin, LOW);
    
    // Read travel time of the wave in microseconds
    duration = pulseIn(echoPin, HIGH);
    
    // Speed of sound = 0.034 cm/us (divide by 2 for one-way trip)
    distance = duration * 0.034 / 2;
    
    // Print distance to LCD
    lcd.setCursor(0, 0);
    lcd.print("Distance: ");
    lcd.print(distance);
    lcd.print(" cm   ");
    
    delay(200);
    }

    ```

    ---

    ### Common Issues & Quick Fixes (Others)

    * **Screen shows nothing in Tinkercad:** Tinkercad’s default I2C LCD uses an **MCP23008** chip. Using the `LiquidCrystal_I2C.h` library will not show text; use `Adafruit_LiquidCrystal.h` instead. On physical hardware with a `PCF8574` backpack, standard `LiquidCrystal_I2C(0x27, 16, 2)` works.
    * **Sensor reads 0 cm continuously:** Check whether the `VCC` pin has 5V power. If power is loose or floating, the transmitter never fires sound pulses.
    * **Flickering numbers on screen:** Always add empty spaces at the end of the print statement (e.g., `" cm   "`). This clears leftovers when numbers drop from two digits to one.


