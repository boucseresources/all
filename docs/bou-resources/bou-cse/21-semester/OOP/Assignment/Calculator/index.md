# Java Calculator 
এখানে একটি সহজ জাভা Calculator বানাচ্ছি। যারা আমরা ইতিমধ্যেই 

<!-- #region Optional Title -->
??? note "Click to expand this block"
    Everything indented under this line will be hidden.
    You can add paragraphs, lists, or code here.
<!-- #endregion -->




Button গুলোর জন্য Level 1 হিসেবে এগুলো use করবোঃ

???  "Manual Buttons"

    ```java
        // Standard Number Buttons (0-9)
        JButton buttonZero  = new JButton("0");
        JButton buttonOne   = new JButton("1");
        JButton buttonTwo   = new JButton("2");
        JButton buttonThree = new JButton("3");
        JButton buttonFour  = new JButton("4");
        JButton buttonFive  = new JButton("5");
        JButton buttonSix   = new JButton("6");
        JButton buttonSeven = new JButton("7");
        JButton buttonEight = new JButton("8");
        JButton buttonNine  = new JButton("9");

        // Basic Operators & Controls
        JButton buttonDot   = new JButton(".");
        JButton buttonEqual = new JButton("=");
        JButton buttonAdd   = new JButton("+");
        JButton buttonSub   = new JButton("-");
        JButton buttonMul   = new JButton("x");
        JButton buttonDiv   = new JButton("/");
        JButton buttonClear = new JButton("C");
        JButton buttonDelete= new JButton("DEL");

        // Scientific Functions (Trigonometry)
        JButton buttonSin   = new JButton("sin");
        JButton buttonCos   = new JButton("cos");
        JButton buttonTan   = new JButton("tan");
        JButton buttonAsin  = new JButton("sin⁻¹");
        JButton buttonAcos  = new JButton("cos⁻¹");
        JButton buttonAtan  = new JButton("tan⁻¹");

        // Scientific Functions (Logarithms & Powers)
        JButton buttonLog   = new JButton("log");
        JButton buttonLn    = new JButton("ln");
        JButton buttonSqrt  = new JButton("√");
        JButton buttonCbrt  = new JButton("³√");
        JButton buttonSquare= new JButton("x²");
        JButton buttonCube  = new JButton("x³");
        JButton buttonPower = new JButton("xʸ");
        JButton buttonFact  = new JButton("n!");

        // Constants & Extras
        JButton buttonPi    = new JButton("π");
        JButton buttonE     = new JButton("e");
        JButton buttonOpenBracket  = new JButton("(");
        JButton buttonCloseBracket = new JButton(")");
        JButton buttonMod          = new JButton("mod");
        JButton buttonPercent      = new JButton("%");
    ```


<!-- the  -->

    ```java
    // ১. গ্লোবাল বাটন স্টোরেজ (Java-র HashMap এর বিকল্প)
    const allButtons = {};

    // ২. বাটন লেবেলের অ্যারে
    const numAndBasicOps = [
        "7", "8", "9", "/", "C",
        "4", "5", "6", "x", "DEL",
        "1", "2", "3", "-", "=",
        "0", ".", "+", "(", ")"
    ];

    // ৩. গ্রিড প্যানেল তৈরি করা (Java-র JPanel এর বিকল্প)
    const buttonPanel = document.createElement("div");
    buttonPanel.style.display = "grid";
    buttonPanel.style.gridTemplateColumns = "repeat(5, 1fr)";
    buttonPanel.style.gap = "5px";

    // ৪. লুপ চালিয়ে ডাইনামিকালি বাটন রেন্ডার করা
    numAndBasicOps.forEach(label => {
        const button = document.createElement("button");
        button.innerText = label;
        button.style.fontSize = "16px";
        button.style.fontWeight = "bold";

        // ক্লিক লিসেনার (Java-র addActionListener এর বিকল্প)
        button.addEventListener("click", (e) => {
            console.log("You pressed: " + label);
        });

        // ম্যাপে পুশ করে রাখা
        allButtons[label] = button;

        // মেইন প্যানেলে যুক্ত করা
        buttonPanel.appendChild(button);
    });

    // ৫. লুপের বাইরে এসে নির্দিষ্ট বাটন স্টাইল করা (Java-র get() এর বিকল্প)
    if (allButtons["C"]) {
        allButtons["C"].style.backgroundColor = "red";
        allButtons["C"].style.color = "white";
    }
    if (allButtons["="]) {
        allButtons["="].style.backgroundColor = "green";
        allButtons["="].style.color = "white";
    }

    // স্ক্রিনে অ্যাপেন্ড করা (Java-র this.add() এর বিকল্প)
    document.body.appendChild(buttonPanel);
    ```

??? "Components Properties"

    তুমি যেহেতু ওয়েব টেকনোলজি (HTML, CSS, JS) ভালো পারো, তাই জাভার এই উইন্ডো ডিজাইন করার কোডটা বুঝতে তোমার মাত্র দুই মিনিট লাগবে!

    জাভাতে (Swing) আমরা একটা এলিমেন্ট তৈরি, স্টাইল এবং স্ক্রিনে বসানোর কাজ **একটানা জাভা কোড লিখে** করি। কিন্তু ওয়েবে আমরা এই কাজটাকে ৩ ভাগে ভাগ করি:

    1. **HTML:** এলিমেন্ট বা ট্যাগ তৈরি করা।
    2. **CSS:** সেটার সাইজ, কালার, পজিশন ঠিক করা (স্টাইলিং)।
    3. **JS:** সেটাকে ডমে বা প্যারেন্ট কন্টেইনারে পুশ করা।

    চলো তোমার জাভা কোডের প্রতিটি লাইনকে HTML, CSS আর JS এর সাথে মুখোমুখি তুলনা করে বুঝি:

    ---

    ### ১. `JLabel` অংশের তুলনা

    জাভাতে `JLabel` মূলত টেক্সট বা নোটিশ দেখানোর জন্য ব্যবহার করা হয়। ওয়েবে এটার সবচেয়ে কাছের রূপ হলো `<span>` বা `<label>` ট্যাগ।

    | Java Swing কোড | Web (HTML / CSS / JS) এর সমকক্ষ রূপ | ব্যাখ্যা |
    | --- | --- | --- |
    | `label.setBounds(250, 0, 50, 50);` | **CSS:**<br>

    <br>`position: absolute;`<br>

    <br>`left: 250px; top: 0px;`<br>

    <br>`width: 50px; height: 50px;` | জাভার `setBounds` দিয়ে একদম পিক্সেল মেপে পজিশন দেওয়া হয়, যা CSS-এর `absolute` পজিশনিংয়ের মতো। |
    | `label.setForeground(Color.white);` | **CSS:**<br>

    <br>`color: white;` | জাভাতে টেক্সটের কালার বদলাতে `setForeground` ব্যবহার করা হয়। |
    | `frame.add(label);`<br>

    <br>*(তোমার কোডে ভুলে label.add(label) ছিল, এটা frame.add হবে)* | **JS:**<br>

    <br>`frameElement.appendChild(label);` | জাভাতে স্ক্রিনে দেখানোর জন্য মেইন ফ্রেমে `add()` করতে হয়, যা JS-এর `appendChild()` এর মতো। |

    ---

    ### ২. `JTextField` অংশের তুলনা

    জাভার `JTextField` হলো ইনপুট নেওয়ার বক্স। ওয়েবে এটার হুবহু রূপ হলো `<input type="text">` ট্যাগ।

    | Java Swing কোড | Web (HTML / CSS / JS) এর সমকক্ষ রূপ | ব্যাখ্যা |
    | --- | --- | --- |
    | `textField.setBounds(10, 40, 270, 40);` | **CSS:**<br>

    <br>`position: absolute;`<br>

    <br>`left: 10px; top: 40px;`<br>

    <br>`width: 270px; height: 40px;` | ইনপুট বক্সটির পিক্সেল পারফেক্ট পজিশন এবং সাইজ (Width, Height) ঠিক করা হলো। |
    | `textField.setFont(new Font("Arial", Font.BOLD, 20));` | **CSS:**<br>

    <br>`font-family: 'Arial';`<br>

    <br>`font-weight: bold;`<br>

    <br>`font-size: 20px;` | ইনপুট বক্সের ভেতরের লেখার ফন্ট স্টাইল সেট করা হলো। |
    | `textField.setHorizontalAlignment(SwingConstants.RIGHT);` | **CSS:**<br>

    <br>`text-align: right;` | ক্যালকুলেটরে যেমন ডানদিক থেকে লেখা শুরু হয়, জাভাতে সেটা `RIGHT` অ্যালাইনমেন্ট দিয়ে করা হয়। |
    | `frame.add(textField);` | **JS:**<br>

    <br>`frameElement.appendChild(textField);` | ইনপুট বক্সটিকে মেইন উইন্ডো বা ফ্রেমে যুক্ত করা হলো। |

    ---

    ### ৩. সম্পূর্ণ কোডটি যদি আমরা ওয়েব ফরম্যাটে লিখতাম:

    তোমার এই `addComponents()` মেথডটা যদি ব্রাউজারের জন্য লিখতে হতো, তবে আমরা এভাবে লিখতাম:

    #### HTML (ট্যাগ তৈরি)

    ```html
    <div id="frame">
        <span id="label"></span>
        <input type="text" id="textField">
    </div>

    ```

    #### CSS (স্টাইলিং ও পজিশন)

    ```css
    #frame {
        position: relative; /* জাভার JFrame এর মতো প্যারেন্ট কন্টেইনার */
        width: 300px;
        height: 400px;
    }

    #label {
        position: absolute;
        left: 250px; top: 0px;
        width: 50px; height: 50px;
        color: white;
    }

    #textField {
        position: absolute;
        left: 10px; top: 40px;
        width: 270px; height: 40px;
        font-family: 'Arial';
        font-weight: bold;
        font-size: 20px;
        text-align: right; /* ডানদিক থেকে লেখা শুরু হবে */
    }

    ```

    #### JavaScript (`addComponents` মেথডের আসল রূপ)

    জাভাতে আমরা যেমন কোড দিয়ে ফ্রেমের ভেতর উপাদানগুলো ঢুকিয়ে দিচ্ছি, JS-এ সেটা দেখতে এমন হতো:

    ```javascript
    function addComponents() {
        const frame = document.getElementById("frame");
        const label = document.getElementById("label");
        const textField = document.getElementById("textField");

        // জাভার frame.add(label) এবং frame.add(textField) এর কাজ:
        frame.appendChild(label);
        frame.appendChild(textField);
    }

    ```

    সহজ কথায়, জাভা সুইং (Swing) এ HTML এবং CSS এর আলাদা কোনো ফাইল থাকে না। মেথডের ভেতর জাভা কোড লিখেই একসাথে এলিমেন্ট তৈরি, CSS-এর মতো স্টাইল এবং JS-এর মতো অ্যাপেন্ড করার কাজগুলো করে ফেলা হয়।

