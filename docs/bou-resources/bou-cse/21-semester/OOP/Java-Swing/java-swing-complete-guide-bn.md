# Java Swing GUI: পূর্ণাঙ্গ ৫ ঘণ্টার কোর্স গাইডবুক (বাংলায়)
> **সোর্স ক্রেডিট:** ব্রো কোড (Bro Code) Java Swing GUI কোর্স।  
> **লেখক:** আপনার জন্য প্রস্তুতকৃত কাস্টম হ্যান্ডবুক (NotebookLM)।  
> **ভাষা:** বাংলা (Bengali)  
> *এই গাইডে কোনো প্রকার টাইমস্ট্যাম্প ব্যবহার করা হয়নি এবং প্রতিটি বিষয় কোড উদাহরণসহ নিখুঁতভাবে ব্যাখ্যা করা হয়েছে।*

---

## সূচিপত্র (Table of Contents)
1. [JFrame (Frames)](#1-jframe-frames)
2. [JLabel (Labels)](#2-jlabel-labels)
3. [JPanel (Panels)](#3-jpanel-panels)
4. [JButton (Buttons)](#4-jbutton-buttons)
5. [BorderLayout](#5-borderlayout)
6. [FlowLayout](#6-flowlayout)
7. [GridLayout](#7-gridlayout)
8. [JLayeredPane](#8-jlayeredpane)
9. [Open New Window](#9-open-new-window)
10. [JOptionPane](#10-joptionpane)
11. [JTextField (Text Fields)](#11-jtextfield-text-fields)
12. [JCheckBox (Checkboxes)](#12-jcheckbox-checkboxes)
13. [JRadioButton (Radio Buttons)](#13-jradiobutton-radio-buttons)
14. [JComboBox (Combo Boxes)](#14-jcombobox-combo-boxes)
15. [JSlider (Sliders)](#15-jslider-sliders)
16. [JProgressBar (Progress Bars)](#16-jprogressbar-progress-bars)
17. [JMenuBar (Menu Bars)](#17-jmenubar-menu-bars)
18. [JFileChooser (Select a file)](#18-jfilechooser-select-a-file)
19. [JColorChooser (Color chooser)](#19-jcolorchooser-color-chooser)
20. [KeyListener](#20-keylistener)
21. [MouseListener](#21-mouselistener)
22. [Drag & Drop](#22-drag--drop)
23. [Key Bindings](#23-key-bindings)
24. [2D Graphics](#24-2d-graphics)
25. [2D Animations](#25-2d-animations)

---
## 1. JFrame (Frames)

### ধারণা (Concept)
`JFrame` হলো একটি গ্রাফিক্যাল উইন্ডো বা ক্যানভাস, যেখানে অন্যান্য সমস্ত GUI কম্পোনেন্ট (যেমন বাটন, টেক্সট ফিল্ড, লেবেল ইত্যাদি) যোগ করা হয়। এটি জাভা সুইং অ্যাপ্লিকেশনের মূল ভিত্তি।

### মূল মেথডসমূহ:
* `setTitle(title)`: উইন্ডোর ওপরে একটি শিরোনাম সেট করে।
* `setSize(width, height)`: উইন্ডোর প্রস্থ ও উচ্চতা নির্ধারণ করে।
* `setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE)`: উইন্ডোর ক্লোজ (X) বাটনে ক্লিক করলে যেন পুরো প্রোগ্রামটি বন্ধ হয়ে যায় তা নিশ্চিত করে।
* `setResizable(false)`: ব্যবহারকারী যাতে টেনে উইন্ডোর সাইজ বড়-ছোট করতে না পারে।
* `setVisible(true)`: উইন্ডোটিকে স্ক্রিনে দৃশ্যমান করে। এটি সবসময় কোডের শেষে লেখা উচিত।

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.ImageIcon;
import java.awt.Color;

public class Main {
    public static void main(String[] args) {
        // একটি JFrame অবজেক্ট তৈরি করা
        JFrame frame = new JFrame(); 
        
        frame.setTitle("আমার প্রথম উইন্ডো"); // টাইটেল সেট করা
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // ক্লোজ মেথড সেট করা
        frame.setResizable(false); // উইন্ডোর সাইজ পরিবর্তন বন্ধ করা
        frame.setSize(420, 420); // উইন্ডোর সাইজ নির্ধারণ (Width, Height)
        frame.setVisible(true); // উইন্ডো দৃশ্যমান করা

        // উইন্ডোর আইকন পরিবর্তন করার নিয়ম
        ImageIcon image = new ImageIcon("logo.png"); // ইমেজ লোড করা. image টা অবশ্যই Project Root এ রাখতে হবে। src বা অন্য কোন folder এ নয়।
        
        frame.setIconImage(image.getImage()); // আইকন সেট করা
        
        // ব্যাকগ্রাউন্ড কালার পরিবর্তন করা
        frame.getContentPane().setBackground(Color.green); // default color
        frame.getContentPane().setBackground(new Color(50, 116, 123)); // adding custom rgb color
        frame.getContentPane().setBackground(new Color(0x123456)); // Custom Hex Color
    }
}
```

---
## 2. JLabel (Labels)

### ধারণা (Concept)
`JLabel` ব্যবহার করে উইন্ডোর ভেতরে যেকোনো টেক্সট বা ছবি (Image) প্রদর্শন করা যায়। এটি সাধারণত ব্যবহারকারীকে কোনো তথ্য বা লেবেল দেখানোর কাজে লাগে।

### গুরুত্বপূর্ণ মেথডসমূহ:
* `setText("text")`: লেবেলের টেক্সট পরিবর্তন করে।
* `setIcon(image)`: লেবেলে কোনো ছবি বা আইকন যুক্ত করে।
* `setHorizontalTextPosition()` এবং `setVerticalTextPosition()`: ছবির সাপেক্ষে টেক্সটটি কোথায় থাকবে (উপরে, নিচে, মাঝে) তা নির্ধারণ করে।
* `setFont(new Font(...))`: টেক্সটের ফন্ট, স্টাইল ও সাইজ সেট করে।
* `setForeground(Color)`: টেক্সটের রঙ পরিবর্তন করে।
* `setBackground(Color)`: ব্যাকগ্রাউন্ড কালার পরিবর্তন করে। (মনে রাখবেন, ব্যাকগ্রাউন্ড কালার দেখতে হলে অবশ্যই `setOpaque(true)` ব্যবহার করতে হবে)।
* `pack()`: এটি অত্যন্ত কাজের একটি মেথড। এটি স্বয়ংক্রিয়ভাবে উইন্ডোর সাইজ ভেতরের সব উপাদানের সমান করে দেয়।

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.ImageIcon;
import java.awt.Color;
import java.awt.Font;
import javax.swing.border.Border;
import javax.swing.BorderFactory;

public class Main {
    public static void main(String[] args) {
        // একটি ইমেজ তৈরি এবং বর্ডার তৈরি করা
        ImageIcon image = new ImageIcon("coding.png");
        Border border = BorderFactory.createLineBorder(Color.GREEN, 3);

        JLabel label = new JLabel(); // লেবেল তৈরি
        label.setText("হ্যালো জাভা ডেভেলপার!"); // টেক্সট সেট
        label.setIcon(image); // ইমেজ সেট
        
        // ছবি ও টেক্সটের পজিশন সেট করা
        label.setHorizontalTextPosition(JLabel.CENTER); // ছবির মাঝখানে টেক্সট
        label.setVerticalTextPosition(JLabel.TOP); // ছবির ওপরে টেক্সট
        label.setForeground(new Color(0x00FF00)); // টেক্সটের রঙ সবুজ করা
        label.setFont(new Font("Arial", Font.BOLD, 24)); // ফন্ট স্টাইল ও সাইজ
        label.setIconTextGap(20); // ছবি ও টেক্সটের মধ্যকার দূরত্ব
        
        label.setBackground(Color.BLACK); // ব্যাকগ্রাউন্ড কালো করা
        label.setOpaque(true); // ব্যাকগ্রাউন্ড কালার অন করা
        label.setBorder(border); // লেবেলের চারপাশে বর্ডার দেওয়া
        
        label.setVerticalAlignment(JLabel.CENTER); // সম্পূর্ণ লেবেলটি উইন্ডোর মাঝে আনা
        label.setHorizontalAlignment(JLabel.CENTER);

        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
        frame.add(label); // ফ্রেমে লেবেল যুক্ত করা
        frame.pack(); // কম্পোনেন্টের সাইজ অনুযায়ী ফ্রেম ছোট-বড় করা
    }
}
```

---
## 3. JPanel (Panels)

### ধারণা (Concept)
`JPanel` হলো এক ধরনের সাব-কন্টেইনার বা ছোট পাত্র, যা একটি মূল ফ্রেমের ভেতর আলাদা আলাদা অংশ বা লেআউট তৈরি করতে ব্যবহৃত হয়। এর ভেতর আমরা অন্যান্য কম্পোনেন্ট (যেমন বাটন বা লেবেল) সুবিন্যস্তভাবে রাখতে পারি।

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JLabel;
import javax.swing.ImageIcon;
import java.awt.Color;
import java.awt.BorderLayout;

public class Main {
    public static void main(String[] args) {
        ImageIcon icon = new ImageIcon("icon.png");

        JLabel label = new JLabel();
        label.setText("প্যানেলের ভেতরের লেখা");
        label.setIcon(icon);

        // লাল রঙের একটি প্যানেল তৈরি
        JPanel redPanel = new JPanel();
        redPanel.setBackground(Color.RED);
        redPanel.setBounds(0, 0, 250, 250); // পজিশন ও সাইজ
        redPanel.setLayout(new BorderLayout()); // লেআউট সেট

        // নীল রঙের প্যানেল তৈরি
        JPanel bluePanel = new JPanel();
        bluePanel.setBackground(Color.BLUE);
        bluePanel.setBounds(250, 0, 250, 250);
        bluePanel.setLayout(new BorderLayout());

        // সবুজ রঙের প্যানেল তৈরি
        JPanel greenPanel = new JPanel();
        greenPanel.setBackground(Color.GREEN);
        greenPanel.setBounds(0, 250, 500, 250);
        greenPanel.setLayout(new BorderLayout());

        // মূল ফ্রেম তৈরি
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(null); // ম্যানুয়াল পজিশন ব্যবহারের জন্য null লেআউট
        frame.setSize(750, 750);
        frame.setVisible(true);

        // সবুজ প্যানেলে লেবেলটি যুক্ত করা
        greenPanel.add(label);

        // ফ্রেমে প্যানেলগুলো যুক্ত করা
        frame.add(redPanel);
        frame.add(bluePanel);
        frame.add(greenPanel);
    }
}
```

---
## 4. JButton (Buttons)

### ধারণা (Concept)
`JButton` হলো একটি বাটন বা বোতাম যা ব্যবহারকারীকে কোনো কাজের ট্রিগার করতে সাহায্য করে। বাটনে ক্লিক করলে কী ঘটবে, তা নির্ধারণ করতে `ActionListener` ব্যবহার করা হয়।

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.JButton;
import javax.swing.JLabel;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.Font;
import java.awt.Color;

// আমরা JFrame ক্লাসের সাথে ActionListener ইমপ্লিমেন্ট করছি
public class MyFrame extends JFrame implements ActionListener {
    JButton button;
    JLabel label;

    MyFrame() {
        label = new JLabel("বাটন ক্লিক করার পর এখানে টেক্সট আসবে");
        label.setBounds(150, 250, 300, 50);
        label.setFont(new Font("Arial", Font.ITALIC, 16));
        label.setVisible(false); // শুরুতে লেখাটি দেখাবে না

        button = new JButton();
        button.setBounds(200, 100, 150, 50);
        button.setText("আমাকে ক্লিক করুন!");
        button.setFocusable(false); // টেক্সটের চারপাশের ফোকাস বক্স রিমুভ করা
        button.setFont(new Font("Comic Sans", Font.BOLD, 14));
        button.setForeground(Color.BLUE);
        button.setBackground(Color.LIGHT_GRAY);

        // বাটনের সাথে অ্যাকশন লিসেনার যুক্ত করা
        button.addActionListener(this);

        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(null);
        this.setSize(500, 500);
        this.setVisible(true);
        this.add(button);
        this.add(label);
    }

    // বাটন ক্লিক করলে এই মেথডটি রান হবে
    @Override
    public void actionPerformed(ActionEvent e) {
        if(e.getSource() == button) {
            System.out.println("বাটন ক্লিক করা হয়েছে!");
            label.setVisible(true); // লেবেলটি দৃশ্যমান হবে
            button.setEnabled(false); // বাটনটি ডিজেবল বা অকার্যকর হয়ে যাবে
        }
    }
}
```

---
## 5. BorderLayout

### ধারণা (Concept)
`BorderLayout` হলো এমন একটি লেআউট ম্যানেজার যা কন্টেইনারকে ৫টি নির্দিষ্ট এলাকায় বিভক্ত করে: **NORTH, SOUTH, WEST, EAST, এবং CENTER**। প্রতিটি এলাকায় কেবল একটি কম্পোনেন্ট বা উপাদানই রাখা যায়।

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;

public class Main {
    public static void main(String[] args) {
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(500, 500);
        frame.setLayout(new BorderLayout(10, 10)); // বর্ডার লেআউট (হরাইজন্টাল গ্যাপ, ভার্টিক্যাল গ্যাপ)
        frame.setVisible(true);

        JPanel panel1 = new JPanel();
        JPanel panel2 = new JPanel();
        JPanel panel3 = new JPanel();
        JPanel panel4 = new JPanel();
        JPanel panel5 = new JPanel();

        panel1.setBackground(Color.red);
        panel2.setBackground(Color.green);
        panel3.setBackground(Color.yellow);
        panel4.setBackground(Color.magenta);
        panel5.setBackground(Color.blue);

        // প্যানেলগুলোর ডিফল্ট সাইজ নির্ধারণ
        panel1.setPreferredSize(new Dimension(100, 100));
        panel2.setPreferredSize(new Dimension(100, 100));
        panel3.setPreferredSize(new Dimension(100, 100));
        panel4.setPreferredSize(new Dimension(100, 100));
        panel5.setPreferredSize(new Dimension(100, 100));

        // ফ্রেমে দিক অনুযায়ী প্যানেল যুক্ত করা
        frame.add(panel1, BorderLayout.NORTH);
        frame.add(panel2, BorderLayout.WEST);
        frame.add(panel3, BorderLayout.EAST);
        frame.add(panel4, BorderLayout.SOUTH);
        frame.add(panel5, BorderLayout.CENTER); // মাঝের অংশটি স্বয়ংক্রিয়ভাবে বাকি জায়গা দখল করবে
    }
}
```

---
## 6. FlowLayout

### ধারণা (Concept)
`FlowLayout` অত্যন্ত সহজ একটি লেআউট। এটি একের পর এক কম্পোনেন্টগুলোকে একটি লাইনে (সারি) বাম থেকে ডানে সাজায়। যখন একটি সারি পূর্ণ হয়ে যায়, তখন এটি স্বয়ংক্রিয়ভাবে পরবর্তী সারিতে চলে যায়।

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.JButton;
import java.awt.FlowLayout;
import java.awt.Color;
import java.awt.Dimension;
import javax.swing.JPanel;

public class Main {
    public static void main(String[] args) {
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(500, 500);
        
        // FlowLayout.LEADING (বাম দিক), CENTER (মাঝে), TRAILING (ডান দিক)
        frame.setLayout(new FlowLayout(FlowLayout.CENTER, 10, 10)); 

        JPanel panel = new JPanel();
        panel.setPreferredSize(new Dimension(250, 250));
        panel.setBackground(Color.lightGray);
        panel.setLayout(new FlowLayout()); // প্যানেলেও ডিফল্টভাবে FlowLayout থাকে

        // বাটনের সেট তৈরি করা
        panel.add(new JButton("১"));
        panel.add(new JButton("২"));
        panel.add(new JButton("৩"));
        panel.add(new JButton("৪"));
        panel.add(new JButton("৫"));
        panel.add(new JButton("৬"));

        frame.add(panel);
        frame.setVisible(true);
    }
}
```

---
## 7. GridLayout

### ধারণা (Concept)
`GridLayout` কম্পোনেন্টগুলোকে সারি (Rows) এবং কলাম (Columns) দিয়ে তৈরি একটি দ্বিমাত্রিক গ্রিডে সাজায়। প্রতিটি কম্পোনেন্ট সমপরিমাণ জায়গা দখল করে। সাধারণত ক্যালকুলেটর বা সমজাতীয় গ্রিড ডিজাইনে এটি দরকার হয়।

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.JButton;
import java.awt.GridLayout;

public class Main {
    public static void main(String[] args) {
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(500, 500);
        
        // GridLayout(সারি, কলাম, হরাইজন্টাল গ্যাপ, ভার্টিক্যাল গ্যাপ)
        frame.setLayout(new GridLayout(3, 3, 5, 5)); 

        // ৯টি বাটন তৈরি করে গ্রিডে যুক্ত করা
        frame.add(new JButton("১"));
        frame.add(new JButton("২"));
        frame.add(new JButton("৩"));
        frame.add(new JButton("৪"));
        frame.add(new JButton("৫"));
        frame.add(new JButton("৬"));
        frame.add(new JButton("৭"));
        frame.add(new JButton("৮"));
        frame.add(new JButton("৯"));

        frame.setVisible(true);
    }
}
```

---
## 8. JLayeredPane

### ধারণা (Concept)
`JLayeredPane` হলো একটি বিশেষ কন্টেইনার যা উইন্ডোকে ত্রিমাত্রিক বা গভীরতা (Depth/Z-index) প্রদান করে। এর মাধ্যমে আমরা একটি কম্পোনেন্টের ওপর আরেকটি কম্পোনেন্ট বসাতে পারি (Overlap করতে পারি)।

### লেয়ারের পজিশনসমূহ (নিচ থেকে ওপরে):
1. **Default Layer** (সবচেয়ে নিচে)
2. **Palette Layer**
3. **Modal Layer**
4. **Popup Layer**
5. **Drag Layer** (সবচেয়ে ওপরে)

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.JLayeredPane;
import javax.swing.JLabel;
import java.awt.Color;

public class Main {
    public static void main(String[] args) {
        JLayeredPane layeredPane = new JLayeredPane();
        layeredPane.setBounds(0, 0, 500, 500);

        // লাল রঙের লেবেল (নিচের লেয়ার)
        JLabel label1 = new JLabel();
        label1.setOpaque(true);
        label1.setBackground(Color.RED);
        label1.setBounds(50, 50, 200, 200);

        // নীল রঙের লেবেল (মাঝের লেয়ার)
        JLabel label2 = new JLabel();
        label2.setOpaque(true);
        label2.setBackground(Color.BLUE);
        label2.setBounds(100, 100, 200, 200);

        // সবুজ রঙের লেবেল (সবচেয়ে ওপরের লেয়ার)
        JLabel label3 = new JLabel();
        label3.setOpaque(true);
        label3.setBackground(Color.GREEN);
        label3.setBounds(150, 150, 200, 200);

        // লেয়ার অনুযায়ী কম্পোনেন্ট যুক্ত করা (Integer ভ্যালু দিয়ে লেয়ারের গভীরতা প্রকাশ করা হয়)
        layeredPane.add(label1, JLayeredPane.DEFAULT_LAYER);
        layeredPane.add(label2, JLayeredPane.DRAG_LAYER); // এটিকে ওপরে ড্র্যাগ লেয়ারে দেওয়া হয়েছে
        layeredPane.add(label3, JLayeredPane.PALETTE_LAYER);

        JFrame frame = new JFrame();
        frame.add(layeredPane);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(500, 500);
        frame.setLayout(null);
        frame.setVisible(true);
    }
}
```

---
## 9. Open New Window

### ধারণা (Concept)
এটি উইন্ডো ন্যাভিগেশন বা এক স্ক্রিন থেকে অন্য স্ক্রিনে যাওয়ার মূল ভিত্তি। জাভাতে মূলত একাধিক ফ্রেম তৈরি করে বাটন ক্লিকের ইভেন্টে নতুন ফ্রেমকে দৃশ্যমান এবং পুরাতন ফ্রেমকে অদৃশ্য করা হয়।

### সোর্স কোড (Java Code)

**১ম ফাইল: LaunchPage.java**
```java
import javax.swing.JFrame;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class LaunchPage implements ActionListener {
    JFrame frame = new JFrame();
    JButton myButton = new JButton("নতুন উইন্ডো খুলুন");

    LaunchPage() {
        myButton.setBounds(100, 160, 200, 40);
        myButton.setFocusable(false);
        myButton.addActionListener(this);

        frame.add(myButton);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(420, 420);
        frame.setLayout(null);
        frame.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if(e.getSource() == myButton) {
            frame.dispose(); // আগের উইন্ডোটি বন্ধ করা
            NewWindow myWindow = new NewWindow(); // নতুন উইন্ডো অবজেক্ট তৈরি করা
        }
    }
}
```

**২য় ফাইল: NewWindow.java**
```java
import javax.swing.JFrame;
import javax.swing.JLabel;
import java.awt.Font;

public class NewWindow {
    JFrame frame = new JFrame();
    JLabel label = new JLabel("নতুন উইন্ডোতে স্বাগতম!");

    NewWindow() {
        label.setBounds(100, 150, 250, 40);
        label.setFont(new Font("Arial", Font.BOLD, 18));

        frame.add(label);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(420, 420);
        frame.setLayout(null);
        frame.setVisible(true);
    }
}
```

---
## 10. JOptionPane

### ধারণা (Concept)
`JOptionPane` ব্যবহার করে খুব সহজে মেসেজ বক্স, ইনফরমেশন বক্স, ওয়ার্নিং অ্যালার্ট বা কনফার্মেশন প্রম্পট ডায়ালগ তৈরি করা যায়। এর জন্য জটিল কোনো JFrame ডিজাইনের দরকার হয় না।

### ৪ ধরনের ডায়ালগ টাইপ:
* `PLAIN_MESSAGE`
* `INFORMATION_MESSAGE`
* `WARNING_MESSAGE`
* `ERROR_MESSAGE`

### সোর্স কোড (Java Code)
```java
import javax.swing.JOptionPane;

public class Main {
    public static void main(String[] args) {
        // ১. সাধারণ তথ্য দেখানোর ডায়ালগ (Information Dialog)
        JOptionPane.showMessageDialog(null, "এটি একটি সাধারণ মেসেজ!", "শিরোনাম", JOptionPane.INFORMATION_MESSAGE);

        // ২. ওয়ার্নিং মেসেজ ডায়ালগ (Warning Dialog)
        JOptionPane.showMessageDialog(null, "সতর্কতা: আপনার স্টোরেজ পূর্ণ!", "সতর্কবার্তা", JOptionPane.WARNING_MESSAGE);

        // ৩. ব্যবহারকারীর কাছ থেকে হ্যাঁ/না জানতে প্রম্পট (Confirm Dialog)
        int answer = JOptionPane.showConfirmDialog(null, "আপনি কি জাভা ভালোবাসেন?", "প্রশ্ন", JOptionPane.YES_NO_CANCEL_OPTION);
        if (answer == JOptionPane.YES_OPTION) {
            System.out.println("অসাধারণ! জাভা শিখতে থাকুন।");
        } else if (answer == JOptionPane.NO_OPTION) {
            System.out.println("অন্য ল্যাঙ্গুয়েজও বেশ দারুণ!");
        }

        // ৪. ব্যবহারকারীর ইনপুট নেওয়ার ডায়ালগ (Input Dialog)
        String name = JOptionPane.showInputDialog("আপনার নাম কী?");
        if (name != null && !name.trim().isEmpty()) {
            JOptionPane.showMessageDialog(null, "হ্যালো " + name + "!", "স্বাগতম", JOptionPane.PLAIN_MESSAGE);
        }
    }
}
```

---
## 11. JTextField (Text Fields)

### ধারণা (Concept)
`JTextField` ব্যবহার করে ব্যবহারকারীর কাছ থেকে এক লাইনের টেক্সট ইনপুট নেওয়া হয়। এতে ইনপুট নেওয়া তথ্য পরবর্তীতে অ্যাকশন লিসেনারের মাধ্যমে রিড করা যায়।

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.JTextField;
import javax.swing.JButton;
import java.awt.FlowLayout;
import java.awt.Dimension;
import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class MyFrame extends JFrame implements ActionListener {
    JButton button;
    JTextField textField;

    MyFrame() {
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(new FlowLayout());

        button = new JButton("জমা দিন");
        button.addActionListener(this);

        textField = new JTextField();
        textField.setPreferredSize(new Dimension(250, 40));
        textField.setFont(new Font("Consolas", Font.PLAIN, 18));
        textField.setForeground(Color.GREEN);
        textField.setBackground(Color.BLACK);
        textField.setCaretColor(Color.WHITE); // কার্সারের রঙ নির্ধারণ
        textField.setText("আপনার নাম লিখুন..."); // প্লেসহোল্ডার বা ডিফল্ট টেক্সট

        this.add(textField);
        this.add(button);
        this.pack();
        this.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == button) {
            String input = textField.getText(); // টেক্সট ফিল্ডের ভ্যালু পড়া
            System.out.println("ব্যবহারকারীর নাম: " + input);
            button.setEnabled(false);
            textField.setEditable(false); // টেক্সট ফিল্ড লক করে দেওয়া
        }
    }
}
```

---
## 12. JCheckBox (Checkboxes)

### ধারণা (Concept)
`JCheckBox` হলো একটি চারকোণা সিলেকশন বক্স যেখানে ব্যবহারকারী কোনো নির্দিষ্ট অপশন অন বা অফ করতে টিক মার্ক দিয়ে সিলেক্ট করেন। এটি সত্য বা মিথ্যা (Boolean) ডিসিশনের জন্য বেশ উপযোগী।

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.JCheckBox;
import javax.swing.JButton;
import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class MyFrame extends JFrame implements ActionListener {
    JButton button;
    JCheckBox checkBox;

    MyFrame() {
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(new FlowLayout());

        button = new JButton("অর্ডার করুন");
        button.addActionListener(this);

        checkBox = new JCheckBox();
        checkBox.setText("আমি সব শর্তাবলী মেনে নিচ্ছি");
        checkBox.setFocusable(false);
        checkBox.setFont(new Font("Arial", Font.PLAIN, 16));

        this.add(checkBox);
        this.add(button);
        this.pack();
        this.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == button) {
            // চেক বক্স টিক দেওয়া আছে কি না তা চেক করা
            boolean isChecked = checkBox.isSelected();
            if (isChecked) {
                System.out.println("ধন্যবাদ! শর্তাবলী সফলভাবে গৃহীত হয়েছে।");
            } else {
                System.out.println("অনুগ্রহ করে শর্তাবলীর বাক্সে টিক দিন!");
            }
        }
    }
}
```

---
## 13. JRadioButton (Radio Buttons)

### ধারণা (Concept)
`JRadioButton` হলো গোলাকার সিলেকশন বাটন যেখানে একাধিক অপশনের মধ্য থেকে ব্যবহারকারী কেবল **একটিমাত্র** অপশন বেছে নিতে পারেন। একাধিক রেডিও বাটনকে একসাথে কাজ করাতে তাদের একটি `ButtonGroup`-এ যোগ করতে হয়।

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.JRadioButton;
import javax.swing.ButtonGroup;
import java.awt.FlowLayout;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class MyFrame extends JFrame implements ActionListener {
    JRadioButton pizzaButton;
    JRadioButton burgerButton;
    JRadioButton hotdogButton;

    MyFrame() {
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(new FlowLayout());

        pizzaButton = new JRadioButton("পিজ্জা");
        burgerButton = new JRadioButton("বার্গার");
        hotdogButton = new JRadioButton("হটডগ");

        // একটি বাটন গ্রুপ তৈরি করা যাতে একের অধিক বাটন একসাথে সিলেক্ট না হতে পারে
        ButtonGroup group = new ButtonGroup();
        group.add(pizzaButton);
        group.add(burgerButton);
        group.add(hotdogButton);

        // অ্যাকশন লিসেনার যুক্ত করা
        pizzaButton.addActionListener(this);
        burgerButton.addActionListener(this);
        hotdogButton.addActionListener(this);

        this.add(pizzaButton);
        this.add(burgerButton);
        this.add(hotdogButton);
        this.pack();
        this.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if(e.getSource() == pizzaButton) {
            System.out.println("আপনি পিজ্জা অর্ডার করেছেন!");
        } else if(e.getSource() == burgerButton) {
            System.out.println("আপনি বার্গার অর্ডার করেছেন!");
        } else if(e.getSource() == hotdogButton) {
            System.out.println("আপনি হটডগ অর্ডার করেছেন!");
        }
    }
}
```

---
## 14. JComboBox (Combo Boxes)

### ধারণা (Concept)
`JComboBox` হলো ড্রপডাউন মেনুর জাভা রূপ। এর ভেতরে আইটেম লিস্ট থেকে ব্যবহারকারী মাউস ক্লিক করার মাধ্যমে তার কাঙ্ক্ষিত আইটেমটি বেছে নিতে পারেন।

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.JComboBox;
import java.awt.FlowLayout;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class MyFrame extends JFrame implements ActionListener {
    JComboBox comboBox;

    MyFrame() {
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(new FlowLayout());

        // ড্রপডাউন অপশনের ডেটা অ্যারে
        String[] animals = {"কুকুর", "বিড়াল", "পাখি"};
        
        comboBox = new JComboBox(animals);
        comboBox.addActionListener(this);

        // কম্বো বক্সের প্রয়োজনীয় ফাংশনসমূহ:
        // comboBox.setEditable(true); // চাইলে ব্যবহারকারী ড্রপডাউনে টাইপও করতে পারবেন
        // comboBox.addItem("হাতি"); // নতুন আইটেম যোগ করা
        // comboBox.removeItem("পাখি"); // নির্দিষ্ট আইটেম মুছে ফেলা
        // comboBox.insertAt("সিংহ", 0); // নির্দিষ্ট ইনডেক্সে আইটেম যোগ করা

        this.add(comboBox);
        this.pack();
        this.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == comboBox) {
            // সিলেক্টেড আইটেম পড়া
            System.out.println("সিলেক্টেড আইটেম: " + comboBox.getSelectedItem());
            System.out.println("সিলেক্টেড ইনডেক্স: " + comboBox.getSelectedIndex());
        }
    }
}
```

---
## 15. JSlider (Sliders)

### ধারণা (Concept)
`JSlider` ব্যবহার করে ইউজাররা ড্র্যাগ করার মাধ্যমে একটি স্কেলের যেকোনো ইন্টিজার মান নির্ধারণ করতে পারেন (যেমন ভলিউম বা ব্রাইটনেস কন্ট্রোল)। এতে সর্বোচ্চ ও সর্বনিম্ন মান নির্দিষ্ট করে দেওয়া যায়।

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JLabel;
import javax.swing.JSlider;
import javax.swing.SwingConstants;
import javax.swing.event.ChangeListener;
import javax.swing.event.ChangeEvent;
import java.awt.Dimension;
import java.awt.Font;

public class SliderDemo implements ChangeListener {
    JFrame frame;
    JPanel panel;
    JLabel label;
    JSlider slider;

    SliderDemo() {
        frame = new JFrame("স্লাইডার ডেমো");
        panel = new JPanel();
        label = new JLabel();
        
        // JSlider(সর্বনিম্ন, সর্বোচ্চ, শুরু করার মান)
        slider = new JSlider(0, 100, 50);

        slider.setPreferredSize(new Dimension(400, 200));
        slider.setPaintTicks(true); // স্কেলের দাগ দেখানো
        slider.setMinorTickSpacing(10); // ছোট দাগের ব্যবধান
        slider.setPaintTrack(true);
        slider.setMajorTickSpacing(25); // বড় দাগের ব্যবধান
        slider.setPaintLabels(true); // সংখ্যার মান দেখানো
        slider.setFont(new Font("Arial", Font.PLAIN, 15));
        slider.setOrientation(SwingConstants.VERTICAL); // ভার্টিক্যাল বা খাড়া স্লাইডার

        label.setText("তাপমাত্রা: " + slider.getValue() + "°C");
        label.setFont(new Font("Arial", Font.BOLD, 20));

        // মান পরিবর্তন শোনার জন্য চেঞ্জ লিসেনার যুক্ত করা
        slider.addChangeListener(this);

        panel.add(slider);
        panel.add(label);
        frame.add(panel);
        frame.setSize(420, 420);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }

    @Override
    public void stateChanged(ChangeEvent e) {
        // মান পরিবর্তন হলে লেবেলের ভ্যালু রিয়েল-টাইমে আপডেট হবে
        label.setText("তাপমাত্রা: " + slider.getValue() + "°C");
    }
}
```

---
## 16. JProgressBar (Progress Bars)

### ধারণা (Concept)
`JProgressBar` মূলত প্রজেক্ট বা ফাইলের ডাউনলোডিং, লোডিং বা গেম আপডেট ইত্যাদি কাজের রিয়েল-টাইম প্রোগ্রেস ভিজ্যুয়ালি পার্সেন্টেজ আকারে দেখানোর জন্য ব্যবহৃত হয়।

### সোর্স কোড (Java Code)
```java
import java.awt.Color;
import java.awt.Font;
import javax.swing.JFrame;
import javax.swing.JProgressBar;

public class ProgressBarDemo {
    JFrame frame = new JFrame();
    JProgressBar bar = new JProgressBar();

    ProgressBarDemo() {
        bar.setValue(0);
        bar.setBounds(50, 100, 400, 50);
        bar.setStringPainted(true); // প্রোগ্রেসবারের মাঝে পার্সেন্টেজ (%) প্রদর্শন করা
        bar.setFont(new Font("Consolas", Font.BOLD, 20));
        bar.setForeground(Color.RED);
        bar.setBackground(Color.BLACK);

        frame.add(bar);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(500, 500);
        frame.setLayout(null);
        frame.setVisible(true);

        fill(); // প্রোগ্রেসবার পূরণ করার মেথড রান করা
    }

    public void fill() {
        int counter = 0;
        while (counter <= 100) {
            bar.setValue(counter);
            try {
                Thread.sleep(50); // প্রতি ৫০ মিলি-সেকেন্ডে প্রোগ্রেস বৃদ্ধি পাবে
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            counter += 1;
        }
        bar.setString("লোডিং সম্পূর্ণ!"); // সম্পূর্ণ লোড শেষে লেখা পরিবর্তন করা
    }
}
```

---
## 17. JMenuBar (Menu Bars)

### ধারণা (Concept)
পিসি বা ম্যাক অ্যাপ্লিকেশনের ওপরে যে ফাইল (File), এডিট (Edit), হেল্প (Help) ইত্যাদি ড্রপডাউন টেক্সট থাকে, সেগুলোকে সুইং-এ `JMenuBar` বলা হয়। এটি ব্যবহার করে মেনু, সাব-মেনু এবং শর্টকাট কি বোর্ড (Mnemonic) অ্যাসাইন করা যায়।

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.JMenuBar;
import javax.swing.JMenu;
import javax.swing.JMenuItem;
import java.awt.FlowLayout;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.event.KeyEvent;

public class MyFrame extends JFrame implements ActionListener {
    JMenuBar menuBar;
    JMenu fileMenu;
    JMenu editMenu;
    JMenu helpMenu;
    JMenuItem loadItem;
    JMenuItem saveItem;
    JMenuItem exitItem;

    MyFrame() {
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setSize(500, 500);
        this.setLayout(new FlowLayout());

        menuBar = new JMenuBar();

        // মেনু তৈরি করা
        fileMenu = new JMenu("ফাইল");
        editMenu = new JMenu("এডিট");
        helpMenu = new JMenu("হেল্প");

        // ফাইলের ভেতরের আইটেমসমূহ
        loadItem = new JMenuItem("লোড ফাইল");
        saveItem = new JMenuItem("সেভ ফাইল");
        exitItem = new JMenuItem("বাহির");

        loadItem.addActionListener(this);
        saveItem.addActionListener(this);
        exitItem.addActionListener(this);

        // কিবোর্ড শর্টকাট (Mnemonic) সেট করা
        fileMenu.setMnemonic(KeyEvent.VK_F); // Alt + F চাপলে ফাইল মেনু খুলবে
        loadItem.setMnemonic(KeyEvent.VK_L); // L চাপলে লোড হবে

        // মেনুতে আইটেম যুক্ত করা
        fileMenu.add(loadItem);
        fileMenu.add(saveItem);
        fileMenu.add(exitItem);

        // মেনুবারে মেনুগুলো যুক্ত করা
        menuBar.add(fileMenu);
        menuBar.add(editMenu);
        menuBar.add(helpMenu);

        this.setJMenuBar(menuBar); // ফ্রেমের মেনুবার হিসেবে সেট করা
        this.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == loadItem) {
            System.out.println("ফাইল সফলভাবে লোড হচ্ছে...");
        } else if (e.getSource() == saveItem) {
            System.out.println("ফাইল সফলভাবে সংরক্ষিত হচ্ছে...");
        } else if (e.getSource() == exitItem) {
            System.exit(0); // সম্পূর্ণ সফটওয়্যার বন্ধ করা
        }
    }
}
```

---
## 18. JFileChooser (Select a file)

### ধারণা (Concept)
`JFileChooser` উইন্ডো ব্যবহার করে খুব সহজেই অপারেটিং সিস্টেমের যেকোনো ফোল্ডার ব্রাউজ করা যায়। এর মাধ্যমে ইউজার তার পিসি বা ডেক্সটপ থেকে যেকোনো ফাইল বেছে নিতে এবং জাভা প্রোগ্রামে ইম্পোর্ট বা এক্সপোর্ট করতে পারেন।

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.JButton;
import javax.swing.JFileChooser;
import java.io.File;
import java.awt.FlowLayout;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class MyFrame extends JFrame implements ActionListener {
    JButton button;

    MyFrame() {
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(new FlowLayout());

        button = new JButton("ফাইল সিলেক্ট করুন");
        button.addActionListener(this);

        this.add(button);
        this.pack();
        this.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == button) {
            JFileChooser fileChooser = new JFileChooser();

            // ফাইল খোলার ডায়ালগ প্রদর্শন করা
            int response = fileChooser.showOpenDialog(null); // .showSaveDialog() ব্যবহার করলে সেভ ডায়ালগ দেখাবে

            if (response == JFileChooser.APPROVE_OPTION) {
                // ব্যবহারকারী ফাইল সিলেক্ট করলে তার পাথ এবং ইনফরমেশন প্রিন্ট করা
                File file = new File(fileChooser.getSelectedFile().getAbsolutePath());
                System.out.println("সিলেক্টেড ফাইলের পাথ: " + file);
            }
        }
    }
}
```

---
## 19. JColorChooser (Color chooser)

### ধারণা (Concept)
`JColorChooser` হলো একটি ইন্টারেক্টিভ উইন্ডো যা দিয়ে ব্যবহারকারীরা উইন্ডোর স্ক্রিনে খুব সুন্দর ও আধুনিক কালার প্যালেট দেখতে পান। সেখান থেকে যেকোনো কালার সিলেক্ট করলে সেই অনুযায়ী ব্যাকগ্রাউন্ড বা কম্পোনেন্টের রঙ পরিবর্তন করা সম্ভব হয়।

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JColorChooser;
import java.awt.FlowLayout;
import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class MyFrame extends JFrame implements ActionListener {
    JButton button;
    JLabel label;

    MyFrame() {
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(new FlowLayout());

        button = new JButton("রঙ নির্বাচন করুন");
        button.addActionListener(this);

        label = new JLabel("আমার রঙ পরিবর্তন হবে!");
        label.setFont(new Font("Arial", Font.BOLD, 24));
        label.setOpaque(true);

        this.add(button);
        this.add(label);
        this.pack();
        this.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == button) {
            JColorChooser colorChooser = new JColorChooser();

            // কালার ডায়ালগ প্রম্পট খুলে এবং নির্বাচিত রঙটি 'color' ভ্যারিয়েবলে স্টোর করা হয়
            Color color = JColorChooser.showDialog(null, "একটি রঙ বেছে নিন", Color.BLACK);

            // টেক্সটের রঙ পরিবর্তন করা
            label.setForeground(color);
        }
    }
}
```

---
## 20. KeyListener

### ধারণা (Concept)
কিবোর্ডে কোনো কি বা বোতাম টাইপ করলে, প্রেস করলে বা ছেড়ে দিলে তা শনাক্ত করতে `KeyListener` ইন্টারফেসটি ব্যবহার করা হয়। এটি গেম তৈরির অন্যতম প্রধান কম্পোনেন্ট।

### KeyListener-এর ৩টি গুরুত্বপূর্ণ মেথড:
1. `keyTyped()`: কোনো ক্যারেক্টার টাইপ হলে (যেমন: 'a', '1')।
2. `keyPressed()`: কিবোর্ডের যেকোনো ফিজিক্যাল বাটন প্রেস হলে (যেমন: Arrow Keys, Shift)।
3. `keyReleased()`: কিবোর্ডের বাটন প্রেস করা শেষ হলে বা বাটনটি ছেড়ে দিলে।

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.ImageIcon;
import java.awt.Color;
import java.awt.event.KeyListener;
import java.awt.event.KeyEvent;

public class MyFrame extends JFrame implements KeyListener {
    JLabel label;
    ImageIcon image;

    MyFrame() {
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setSize(500, 500);
        this.setLayout(null);

        // এই ফ্রেমে কি অ্যাকটিভিটি শোনার জন্য লিসেনার যুক্ত করা
        this.addKeyListener(this);

        image = new ImageIcon("rocket.png"); // রকেটের একটি ইমেজ
        label = new JLabel();
        label.setBounds(0, 0, 100, 100);
        label.setIcon(image);

        this.add(label);
        this.setVisible(true);
    }

    @Override
    public void keyTyped(KeyEvent e) {
        // এখানে ক্যারেক্টার টাইপিং কাজ ডিটেক্ট হয়
    }

    @Override
    public void keyPressed(KeyEvent e) {
        // এরো কি দ্বারা স্ক্রিনে রকেট মুভ করা
        switch(e.getKeyCode()) {
            case KeyEvent.VK_LEFT: // বাম দিকের এরো কি
                label.setLocation(label.getX() - 10, label.getY());
                break;
            case KeyEvent.VK_RIGHT: // ডান দিকের এরো কি
                label.setLocation(label.getX() + 10, label.getY());
                break;
            case KeyEvent.VK_UP: // উপরের এরো কি
                label.setLocation(label.getX(), label.getY() - 10);
                break;
            case KeyEvent.VK_DOWN: // নিচের এরো কি
                label.setLocation(label.getX(), label.getY() + 10);
                break;
        }
    }

    @Override
    public void keyReleased(KeyEvent e) {
        System.out.println("ছেড়ে দেওয়া বাটনের ক্যারেক্টার: " + e.getKeyChar());
    }
}
```

---
## 21. MouseListener

### ধারণা (Concept)
ব্যবহারকারী স্ক্রিনে মাউস ক্লিক করলেন কি না, হোভার বা মাউস এন্টার করলেন কি না কিংবা স্ক্রিনের ওপর থেকে মাউস সরিয়ে নিলেন কি না ইত্যাদি নিখুঁত অ্যাক্টিভিটি শনাক্ত করতে `MouseListener` ব্যবহার করা হয়।

### MouseListener-এর ৫টি গুরুত্বপূর্ণ মেথড:
1. `mouseClicked()`: মাউসের বোতাম ক্লিক ও রিলিজ সম্পন্ন হলে।
2. `mousePressed()`: মাউস বাটন প্রেস হওয়া শুরু করলে।
3. `mouseReleased()`: মাউস বাটন ছেড়ে দিলে।
4. `mouseEntered()`: কম্পোনেন্টের সীমানার ভেতর মাউস কার্সার প্রবেশ করলে।
5. `mouseExited()`: কম্পোনেন্টের সীমানার বাইরে মাউস কার্সার চলে গেলে।

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.JLabel;
import java.awt.Color;
import java.awt.event.MouseListener;
import java.awt.event.MouseEvent;

public class MyFrame extends JFrame implements MouseListener {
    JLabel label;

    MyFrame() {
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setSize(500, 500);
        this.setLayout(null);

        label = new JLabel();
        label.setBounds(150, 150, 200, 200);
        label.setBackground(Color.RED);
        label.setOpaque(true);

        // লেবেলের ওপর মাউস ইভেন্ট শোনার জন্য লিসেনার অ্যাড করা
        label.addMouseListener(this);

        this.add(label);
        this.setVisible(true);
    }

    @Override
    public void mouseClicked(MouseEvent e) {
        System.out.println("মাউস ক্লিক করা হয়েছে!");
    }

    @Override
    public void mousePressed(MouseEvent e) {
        // মাউস চেপে রাখলে কালার হলুদ হবে
        label.setBackground(Color.YELLOW);
    }

    @Override
    public void mouseReleased(MouseEvent e) {
        // মাউস ছেড়ে দিলে কালার সবুজ হবে
        label.setBackground(Color.GREEN);
    }

    @Override
    public void mouseEntered(MouseEvent e) {
        // মাউস বক্সের ভেতরে আনলে কালার নীল হবে
        label.setBackground(Color.BLUE);
    }

    @Override
    public void mouseExited(MouseEvent e) {
        // মাউস বক্সের বাইরে নিয়ে গেলে আগের লাল কালার ফিরে আসবে
        label.setBackground(Color.RED);
    }
}
```

---
## 22. Drag & Drop

### ধারণা (Concept)
ড্র্যাগ অ্যান্ড ড্রপ (Drag & Drop) হলো একটি ইন্টারেক্টিভ গেম বা ক্যানভাস মেকানিজম, যেখানে আমরা কোনো ইমেজ বা কম্পোনেন্টকে মাউস দিয়ে চেপে ধরে স্ক্রিনের এক জায়গা থেকে অন্য জায়গায় স্থানান্তর বা ড্র্যাগ করতে পারি। এটি করার জন্য আমাদের মাউস মোশন লিসেনারের সাহায্য নিতে হয়।

### সোর্স কোড (Java Code)

**১ম ফাইল: DragPanel.java**
```java
import javax.swing.JPanel;
import javax.swing.ImageIcon;
import java.awt.Graphics;
import java.awt.Point;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.MouseMotionAdapter;

public class DragPanel extends JPanel {
    ImageIcon image = new ImageIcon("smiley.png");
    final int WIDTH = image.getIconWidth();
    final int HEIGHT = image.getIconHeight();
    Point imageCorner;
    Point prevPt;

    DragPanel() {
        imageCorner = new Point(0, 0); // শুরুতে ছবির পজিশন
        ClickListener clickListener = new ClickListener();
        DragListener dragListener = new DragListener();

        this.addMouseListener(clickListener);
        this.addMouseMotionListener(dragListener);
    }

    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        image.paintIcon(this, g, (int)imageCorner.getX(), (int)imageCorner.getY());
    }

    private class ClickListener extends MouseAdapter {
        public void mousePressed(MouseEvent e) {
            prevPt = e.getPoint(); // মাউস ক্লিক করার সময়ে অবস্থান স্টোর করা
        }
    }

    private class DragListener extends MouseMotionAdapter {
        public void mouseDragged(MouseEvent e) {
            Point currentPt = e.getPoint();

            // নতুন অবস্থান হিসাব করে ছবি পুনরায় আঁকা (Repaint)
            imageCorner.translate(
                (int)(currentPt.getX() - prevPt.getX()),
                (int)(currentPt.getY() - prevPt.getY())
            );
            prevPt = currentPt;
            repaint();
        }
    }
}
```

**২য় ফাইল: MyFrame.java**
```java
import javax.swing.JFrame;

public class MyFrame extends JFrame {
    DragPanel dragPanel = new DragPanel();

    MyFrame() {
        this.add(dragPanel);
        this.setTitle("ড্র্যাগ অ্যান্ড ড্রপ প্রজেক্ট");
        this.setSize(600, 600);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setVisible(true);
    }
}
```

---
## 23. Key Bindings

### ধারণা (Concept)
জাভাতে `KeyListener`-এর বড় একটি অসুবিধা হলো এটি কোনো কম্পোনেন্ট ফোকাসড না থাকলে কাজ করে না। এই ফোকাসড ইস্যু এড়াতে এবং নিখুঁত কিবোর্ড শর্টকাট তৈরির জন্য **Key Bindings** তৈরি করা হয়েছে। এটি আধুনিক অ্যাপ্লিকেশন এবং জটিল অ্যাকশন ডিটেকশনে ব্যবহৃত হয়।

### সোর্স কোড (Java Code)
```java
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.AbstractAction;
import javax.swing.KeyStroke;
import java.awt.Color;
import java.awt.event.ActionEvent;

public class Game {
    JFrame frame;
    JLabel label;
    
    // কিবোর্ডের জন্য অ্যাকশন তৈরি
    UpAction upAction;
    DownAction downAction;

    Game() {
        frame = new JFrame("কি বাইন্ডিং ডেমো");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(420, 420);
        frame.setLayout(null);

        label = new JLabel();
        label.setBackground(Color.RED);
        label.setBounds(100, 100, 100, 100);
        label.setOpaque(true);

        upAction = new UpAction();
        downAction = new DownAction();

        // কী ম্যাপ এবং অ্যাকশন ম্যাপ সংযুক্ত করা
        label.getInputMap().put(KeyStroke.getKeyStroke("UP"), "upAction");
        label.getActionMap().put("upAction", upAction);

        label.getInputMap().put(KeyStroke.getKeyStroke("DOWN"), "downAction");
        label.getActionMap().put("downAction", downAction);

        frame.add(label);
        frame.setVisible(true);
    }

    // আপ এরো কি প্রেস করার অ্যাকশন ক্লাস
    public class UpAction extends AbstractAction {
        @Override
        public void actionPerformed(ActionEvent e) {
            label.setLocation(label.getX(), label.getY() - 10);
        }
    }

    // ডাউন এরো কি প্রেস করার অ্যাকশন ক্লাস
    public class DownAction extends AbstractAction {
        @Override
        public void actionPerformed(ActionEvent e) {
            label.setLocation(label.getX(), label.getY() + 10);
        }
    }
}
```

---
## 24. 2D Graphics

### ধারণা (Concept)
জাভাতে `Graphics` বা `Graphics2D` অবজেক্টের মাধ্যমে কোনো ক্যানভাসে সরাসরি রেখাচিত্র, বৃত্ত, চারকোণা ব্লক তৈরি, আঁকা এবং ডিজাইন করা সম্ভব। এটি গেম ডেভেলপিং বা ভিজ্যুয়াল ম্যাথ ড্রয়িং-এর জন্য খুবই প্রয়োজনীয়।

### সোর্স কোড (Java Code)

**১ম ফাইল: MyPanel.java**
```java
import javax.swing.JPanel;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Color;
import java.awt.BasicStroke;
import java.awt.Font;
import java.awt.Dimension;

public class MyPanel extends JPanel {

    MyPanel() {
        this.setPreferredSize(new Dimension(500, 500));
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g); // ব্যাকগ্রাউন্ড আঁকা নিশ্চিত করা
        
        // উন্নত ২ডি গ্রাফিক্স রেন্ডারার ব্যবহারের জন্য টাইপ কাস্টিং
        Graphics2D g2D = (Graphics2D) g;

        // ১. একটি সোজা লাইন আঁকা (লাইন রঙ: নীল)
        g2D.setPaint(Color.BLUE);
        g2D.setStroke(new BasicStroke(5)); // লাইনের পুরুত্ব
        g2D.drawLine(0, 0, 500, 500);

        // ২. একটি রেক্টেঙ্গেল (চারকোণা বক্স) আঁকা ও ফিল করা
        g2D.setPaint(Color.RED);
        g2D.fillRect(100, 50, 200, 100);

        // ৩. বৃত্ত বা ওভাল আঁকা
        g2D.setPaint(Color.ORANGE);
        g2D.fillOval(150, 200, 150, 150);

        // ৪. কাস্টম টেক্সট ড্রয়িং
        g2D.setPaint(Color.BLACK);
        g2D.setFont(new Font("Arial", Font.BOLD, 20));
        g2D.drawString("২ডি ড্রয়িং চমৎকার!", 150, 420);
    }
}
```

**২য় ফাইল: MyFrame.java**
```java
import javax.swing.JFrame;

public class MyFrame extends JFrame {
    MyPanel panel = new MyPanel();

    MyFrame() {
        this.add(panel);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.pack();
        this.setLocationRelativeTo(null); // স্ক্রিনের ঠিক মাঝখানে উইন্ডোটি ওপেন হবে
        this.setVisible(true);
    }
}
```

---
## 25. 2D Animations

### ধারণা (Concept)
জাভাতে ২ডি অ্যানিমেশনের মূল কৌশল হলো একটি ইমেজ বা অবজেক্টের কার্টেসিয়ান স্থানাঙ্ক (X ও Y কোঅর্ডিনেট) অনবরত পরিবর্তন করা এবং একটি নির্দিষ্ট সময় পরপর (`Timer` ব্যবহার করে) স্ক্রিনটিকে রি-ড্র করা বা রি-পেইন্ট (`repaint()`) করা।

### সোর্স কোড (Java Code)

**১ম ফাইল: MyPanel.java**
```java
import javax.swing.JPanel;
import javax.swing.Timer;
import javax.swing.ImageIcon;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class MyPanel extends JPanel implements ActionListener {
    final int PANEL_WIDTH = 600;
    final int PANEL_HEIGHT = 600;
    ImageIcon enemyImage;
    Timer timer;
    
    // গতি ও শুরুর অবস্থান
    int xVelocity = 3;
    int yVelocity = 2;
    int x = 0;
    int y = 0;

    MyPanel() {
        this.setPreferredSize(new Dimension(PANEL_WIDTH, PANEL_HEIGHT));
        this.setBackground(Color.BLACK);
        
        enemyImage = new ImageIcon("ufo.png"); // এলিয়েন ইউএফও-র ইমেজ
        
        // প্রতি ১০ মিলি-সেকেন্ডে অ্যাকশন লিসেনার ফায়ার করবে (১০০ এফপিএস)
        timer = new Timer(10, this);
        timer.start(); // অ্যানিমেশন শুরু
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        Graphics2D g2D = (Graphics2D) g;
        
        // স্ক্রিনে ইমেজটিকে নতুন X ও Y অবস্থানে ড্র করা
        g2D.drawImage(enemyImage.getImage(), x, y, null);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        // উইন্ডোর দেওয়ালে লাগলে দিক পরিবর্তন (Collision with wall)
        if (x >= PANEL_WIDTH - enemyImage.getIconWidth() || x < 0) {
            xVelocity = xVelocity * -1; // উল্টো দিকে মুভমেন্ট
        }
        x = x + xVelocity;

        if (y >= PANEL_HEIGHT - enemyImage.getIconHeight() || y < 0) {
            yVelocity = yVelocity * -1;
        }
        y = y + yVelocity;

        repaint(); // নতুন অবস্থানে গ্রাফিক্স ড্র করার কল
    }
}
```

**২য় ফাইল: MyFrame.java**
```java
import javax.swing.JFrame;

public class MyFrame extends JFrame {
    MyPanel panel = new MyPanel();

    MyFrame() {
        this.add(panel);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.pack();
        this.setLocationRelativeTo(null);
        this.setVisible(true);
    }
}
```

---
## সমাপনী (Conclusion)
অভিনন্দন! আপনি সফলভাবে জাভা সুইং-এর ৫ ঘণ্টার পুরো কোর্সটি একটি পূর্ণাঙ্গ গাইডের মাধ্যমে সম্পন্ন করলেন। এই গাইডের ২৫টি অধ্যায়ে ফ্রেম তৈরি থেকে শুরু করে মাউস মোশন ডিটেকশন ও ২ডি অ্যানিমেশনের মতো গুরুত্বপূর্ণ ধারণাগুলো রিয়েল কোড ও বাংলা ব্যাখ্যাসহ নিখুঁতভাবে আলোচনা করা হয়েছে।

**অনুশীলন গাইড:**
১. কোডগুলো আপনার লোকাল IDE-তে (যেমন: IntelliJ IDEA, NetBeans বা Eclipse) কপি করে রান করুন।
২. আপনার প্রোজেক্ট ডিরেক্টরিতে কোডে উল্লিখিত প্রয়োজনীয় রিসোর্স ইমেজগুলো (যেমন: `ufo.png`, `smiley.png`, `rocket.png`, `coding.png`) অ্যাড করে নিন।

*জাভা গ্রাফিক্যাল ইন্টারফেস ডেভেলপমেন্ট যাত্রার জন্য শুভকামনা!*
