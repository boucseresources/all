# CV builder all source codes 

??? "Terminology Explained" 

    GridBagConstraints-এর গুরুত্বপূর্ণ প্রোপার্টিগুলোর সংক্ষিপ্ত রূপ নিচে দেওয়া হলো:

    * gridx & gridy: উপাদানটি গ্রিডের কত নম্বর কলাম ও রো-তে বসবে।
    * gridwidth & gridheight: উপাদানটি পাশাপাশি বা উপর-নিচে কয়টি ঘর জুড়ে থাকবে।
    * weightx & weighty: স্ক্রিন বড় করলে উপাদানটি কলাম বা রো বরাবর কতটা জায়গা বাড়িয়ে নেবে।
    * fill: উপাদানটি নিজের ঘরের ভেতরের ফাঁকা জায়গা কীভাবে ভরাট (Horizontal/Vertical/Both) করবে।
    * anchor: উপাদানটি নিজের ঘরের ভেতর কোন দিকে চেপে থাকবে (যেমন: CENTER, NORTH, WEST)।
    * insets: উপাদানটির চারপাশের বাইরের ফাঁকা জায়গা (Padding/Margin)।
    * ipadx & ipady: উপাদানটির ভেতরের নিজস্ব Internal Padding বা আকার বাড়ানো।


??? "Professional Summary Pane"

    আপনার প্রশ্নটা কিন্তু খুবই লজিক্যাল! 💡 আপনার মনে হতেই পারে যে ইনপুট ফিল্ড তো `txtSummary`, তাহলে মাঝখানে আবার স্ক্রল প্যানকে টানার কী দরকার?

    জাভা সুইং (Java Swing)-এ `JTextArea` ব্যবহারের সময় একটা চমৎকার মেকানিজম কাজ করে। 📜

    আমরা যদি সরাসরি `txtSummary`-কে প্যানেলে যুক্ত করি, তাহলে ইউজার যখন ৪ লাইনের বেশি বড় কোনো সামারি টাইপ করবে, তখন অতিরিক্ত লেখাগুলো বক্সের নিচে ঢাকা পড়ে যাবে। ইউজার চাইলেও মাউস দিয়ে স্ক্রল করে ওপর-নিচের লেখা দেখতে পারবে না।

    এখানেই কাজে আসে `JScrollPane` (আমাদের `summaryScroll`):

    * 📦 এটি একটি ধারক বা কন্টেইনার হিসেবে কাজ করে যা ফিল্ডটিকে নিজের পেটে ধরে রাখে।
    * ↕️ যখনই লেখা নির্ধারিত সাইজের চেয়ে বড় হয়ে যায়, এটি অটোমেটিক পাশে একটি স্ক্রলবার নিয়ে আসে, যা পুরো সিভির লেআউটকে নষ্ট হতে দেয় না।

    তাই সুইং-এর নিয়ম হলো, বড় টেক্সট এরিয়া তৈরি করে তাকে স্ক্রল প্যানের ভেতর ঢুকিয়ে দিতে হয়, আর প্যানেলে যুক্ত করতে হয় সেই স্ক্রল প্যানটিকে।






## 01 Intro and Setup



## 02 Write and Fix pom.xml file

```xml

<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.example</groupId>
    <artifactId>ResumeBuilder</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.15.2</version>
        </dependency>

        <dependency>
            <groupId>com.itextpdf</groupId>
            <artifactId>itextpdf</artifactId>
            <version>5.5.13.3</version>
        </dependency>
    </dependencies>
</project>

```

---

## 03 Creating JFrame and Title

```java
import javax.swing.JFrame;

public class ResumeBuilder {
    public static void main(String[] args) {
        JFrame window = new JFrame("My Resume Builder");
        window.setSize(800, 600); // উইন্ডোর সাইজ (চওড়া ও লম্বা)
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // বন্ধ করলে প্রোগ্রাম থামবে
        window.setVisible(true); // উইন্ডোটি স্ক্রিনে দেখাবে
    }
}

```
---

## 04 Splitting Panels

```java
package org.example;

import javax.swing.*;
import java.awt.*;

public class ResumeBuilderUI {
    public static void main(String[] args) {
        JFrame window = new JFrame("MY CV Builder");
        window.setSize(800, 500);

        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JSplitPane splitPane  = new JSplitPane(JSplitPane.HORIZONTAL_SPLIT);
        splitPane.setDividerLocation(400);

        // left panel
        JPanel leftPanel = new JPanel();
        leftPanel.setBackground(Color.LIGHT_GRAY);

        
        // right panel
        JPanel rightPanel = new JPanel();
        rightPanel.setBackground(Color.WHITE);

        splitPane.setLeftComponent(leftPanel);
        splitPane.setRightComponent(rightPanel);

//        leftPanel | rightPanel

        window.add(splitPane);
        window.setVisible(true);


    }
}

```
---

## 05 Adding Simple Form fields

```java
package org.example;

import javax.swing.*;
import java.awt.*;

public class ResumeBuilderUI {
    public static void main(String[] args) {
        JFrame window = new JFrame("MY CV Builder");
        window.setSize(800, 500);

        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JSplitPane splitPane  = new JSplitPane(JSplitPane.HORIZONTAL_SPLIT);
        splitPane.setDividerLocation(400);

        // left panel
        JPanel leftPanel = new JPanel(new GridLayout(5, 2, 10, 10)); // row, cols, hgap, vgap
        leftPanel.setBackground(Color.LIGHT_GRAY);

        // FORM
        // Name field
        JLabel lblName = new JLabel("Full Name");
        JTextField txtName = new JTextField();
        leftPanel.add(lblName);
        leftPanel.add(txtName);

        // Email field
        JLabel lblEmail = new JLabel("Full Email");
        JTextField txtEmail = new JTextField();
        leftPanel.add(lblEmail);
        leftPanel.add(txtEmail);

        // Phone field
        JLabel lblPhone = new JLabel("Full Phone");
        JTextField txtPhone = new JTextField();
        leftPanel.add(lblPhone);
        leftPanel.add(txtPhone);

        // Skills field
        JLabel lblSkills = new JLabel("Full Skills");
        JTextField txtSkills = new JTextField();
        leftPanel.add(lblSkills);
        leftPanel.add(txtSkills);




        // right panel
        JPanel rightPanel = new JPanel();
        rightPanel.setBackground(Color.WHITE);

        splitPane.setLeftComponent(leftPanel);
        splitPane.setRightComponent(rightPanel);

//        leftPanel | rightPanel



        window.add(splitPane);
        window.setVisible(true);


    }
}

```
---
## 06 Adding Live Preview

```java
package org.example;

import javax.swing.*;
import java.awt.*;

public class ResumeBuilderUI {
    public static void main(String[] args) {
        JFrame window = new JFrame("MY CV Builder");
        window.setSize(800, 500);

        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JSplitPane splitPane  = new JSplitPane(JSplitPane.HORIZONTAL_SPLIT);
        splitPane.setDividerLocation(400);

        // left panel
        JPanel leftPanel = new JPanel(new GridLayout(5, 2, 10, 10)); // row, cols, hgap, vgap
        leftPanel.setBackground(Color.LIGHT_GRAY);

        // FORM
        // Name field
        JLabel lblName = new JLabel("Full Name");
        JTextField txtName = new JTextField();
        leftPanel.add(lblName);
        leftPanel.add(txtName);

        // Email field
        JLabel lblEmail = new JLabel("Full Email");
        JTextField txtEmail = new JTextField();
        leftPanel.add(lblEmail);
        leftPanel.add(txtEmail);

        // Phone field
        JLabel lblPhone = new JLabel("Full Phone");
        JTextField txtPhone = new JTextField();
        leftPanel.add(lblPhone);
        leftPanel.add(txtPhone);

        // Skills field
        JLabel lblSkills = new JLabel("Full Skills");
        JTextField txtSkills = new JTextField();
        leftPanel.add(lblSkills);
        leftPanel.add(txtSkills);

        // for preview
        JTextArea txtPreview = new JTextArea();
        txtPreview.setEditable(false);



        // right panel
        JPanel rightPanel = new JPanel();
        rightPanel.setBackground(Color.WHITE);
        rightPanel.setLayout(new BorderLayout());
        rightPanel.add(txtPreview);

        // scrolling option for right preview panel
        JScrollPane previewScroll = new JScrollPane(txtPreview);
        rightPanel.add(previewScroll);


        splitPane.setLeftComponent(leftPanel);
        splitPane.setRightComponent(rightPanel);

//        leftPanel | rightPanel

        addLiveTracking(txtName.getDocument(), ()-> updatePreview(txtName, txtEmail, txtPhone, txtSkills, txtPreview) );
        addLiveTracking(txtEmail.getDocument(), ()-> updatePreview(txtName, txtEmail, txtPhone, txtSkills, txtPreview) );
        addLiveTracking(txtPhone.getDocument(), ()-> updatePreview(txtName, txtEmail, txtPhone, txtSkills, txtPreview) );
        addLiveTracking(txtSkills.getDocument(), ()-> updatePreview(txtName, txtEmail, txtPhone, txtSkills, txtPreview) );

        window.add(splitPane);
        window.setVisible(true);


    }

    private static void updatePreview (JTextField name, JTextField email, JTextField phone, JTextField skills, JTextArea preview) {
        String text = " RESUME PREVIEW " + "\n" +
                "Name: " + name.getText() + "\n" +
                "Email: " + email.getText() + "\n" +
                "Name: " + phone.getText() + "\n" +
                "Email: " + skills.getText();
        preview.setText(text);
    }
    private static void addLiveTracking (javax.swing.text.Document doc, Runnable action ){
        doc.addDocumentListener(new javax.swing.event.DocumentListener() {
            public void  insertUpdate (javax.swing.event.DocumentEvent event){ action.run(); };
            public void removeUpdate (javax.swing.event.DocumentEvent event){action.run();};
            public void  changedUpdate (javax.swing.event.DocumentEvent event){action.run();};
        });
    }
}

```
---
## 07 Save ResumeData  as JSON

`ResumeData` এর code:

```java
package org.example;

public class ResumeData {
    private String name;
    private String email;
    private String phone;
    private String skills;

    public ResumeData() {
    }

    public ResumeData(String name, String email, String phone, String skills) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.skills = skills;
    }

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }
}

```


`ResumeBuilderUI` এর code:
```java
package org.example;

import com.fasterxml.jackson.databind.ObjectMapper;

import javax.swing.*;
import java.awt.*;
import java.io.File;

public class ResumeBuilderUI {
    public static void main(String[] args) {
        
        // same code 


    }

    private static void updatePreview(JTextField name, JTextField email, JTextField phone, JTextField skills, JTextArea preview) {
        String text = " RESUME PREVIEW " + "\n" +
                "Name: " + name.getText() + "\n" +
                "Email: " + email.getText() + "\n" +
                "Name: " + phone.getText() + "\n" +
                "Email: " + skills.getText();
        preview.setText(text);
        saveToJson(name.getText(), email.getText(), phone.getText(), skills.getText());
    }

    private static void addLiveTracking(javax.swing.text.Document doc, Runnable action) {
        // same code 
    }

    private static void saveToJson(String name, String email, String phone, String skills){
        try {
            ResumeData data = new ResumeData(name, email, phone, skills);

            ObjectMapper mapper = new ObjectMapper();

            mapper.writeValue(new File("Resume_backup.json"), data);
        }
        catch (Exception e){
            e.printStackTrace(); // console a print korbe

        }
    }
}

```
---
## 08 Export to PDF Functionality

```java
// for pdf export
//import com.itextpdf.text.Document;
import com.itextpdf.text.Paragraph;
import  com.itextpdf.text.pdf.PdfWriter;
import  java.io.FileOutputStream;
import javax.swing.JOptionPane;


public class ResumeBuilderUI {
    public static void main(String[] args) {

        
        /* other codes as before */

       // Export PDF button
        JButton btnExport = new JButton("Export to PDF");
        rightPanel.add(btnExport, BorderLayout.SOUTH);
        btnExport.setFocusPainted(false);
        btnExport.addActionListener(e -> {
            exportToPDF(txtName.getText(), txtEmail.getText(), txtPhone.getText(), txtSkills.getText());
        });
        
        // === footer ===
        window.add(splitPane);
        window.setVisible(true);


    }

    // other methods 

    private  static void exportToPDF(String name, String email, String phone, String skills){
        com.itextpdf.text.Document document = new com.itextpdf.text.Document();
        try {
            PdfWriter.getInstance(document, new FileOutputStream("My_Resume.pdf"));
            document.open();

            document.add(new Paragraph(" ==== RESUME ===="));
            document.add(new Paragraph(" ==== \n ===="));
            document.add(new Paragraph("Name: " + name));
            document.add(new Paragraph("Email: " + email ));
            document.add(new Paragraph("Phone: " + phone));
            document.add(new Paragraph("Skills: " + skills));

            document.close();
            JOptionPane.showMessageDialog(null, "PDF Exported Successfully!");

        }
        catch (Exception e){
            e.printStackTrace();
            JOptionPane.showMessageDialog(null, "Error creating PDF: " + e.getMessage());
        }

    }
}

```
---
## 09 Start Moderning UI and PDF - Part 1

```java

 /* same code  */

// FlatLaf
import com.formdev.flatlaf.FlatLightLaf;

public class ResumeBuilderUI {
    public static void main(String[] args) {

        // FLATLAF
        try {
            com.formdev.flatlaf.FlatLightLaf.setup();
        } catch (Exception e) {
            System.err.println("Failed to initialize LaF");
        }

        JFrame window = new JFrame("MY CV Builder");
        //    same code

        // FORM
    /* same code  */


        // right panel
        JPanel rightPanel = new JPanel();
        rightPanel.setBackground(Color.WHITE);
        rightPanel.setLayout(new BorderLayout());
        rightPanel.add(txtPreview);

        // scrolling option for right preview panel
        JScrollPane previewScroll = new JScrollPane(txtPreview);
        rightPanel.add(previewScroll);


        splitPane.setLeftComponent(leftPanel);
        splitPane.setRightComponent(rightPanel);

        //        leftPanel | rightPanel

        //    same code

        // Export PDF button
        JButton btnExport = new JButton("Export to PDF");
        rightPanel.add(btnExport, BorderLayout.SOUTH);
        btnExport.setFocusPainted(false);
        btnExport.addActionListener(e -> {
            exportToPDF(txtName.getText(), txtEmail.getText(), txtPhone.getText(), txtSkills.getText());
        });


        // === footer ===
        window.add(splitPane);
        window.setVisible(true);


    }

    private static void updatePreview(JTextField name, JTextField email, JTextField phone, JTextField skills, JTextArea preview) {
        //    same code
    }

    private static void addLiveTracking(javax.swing.text.Document doc, Runnable action) {
        //    same code
    }

    private static void saveToJson(String name, String email, String phone, String skills){
        try {
            ResumeData data = new ResumeData(name, email, phone, skills);

            ObjectMapper mapper = new ObjectMapper();

            mapper.writeValue(new File("Resume_backup.json"), data);
        }
        catch (Exception e){
            e.printStackTrace(); // console a print korbe

        }
    }
    private  static void exportToPDF(String name, String email, String phone, String skills){
        com.itextpdf.text.Document document = new com.itextpdf.text.Document();
        try {
            BaseColor primaryColor = new BaseColor(30, 58, 138);
            Font titleFont = new Font(Font.FontFamily.HELVETICA, 24, Font.BOLD, primaryColor);
            Font normalFont = new Font(Font.FontFamily.HELVETICA, 12, Font.NORMAL, BaseColor.DARK_GRAY);


            PdfWriter.getInstance(document, new FileOutputStream("My_Resume.pdf"));
            document.open();

            document.add(new Paragraph("RESUME", titleFont));
            //    same code



            document.close();
            JOptionPane.showMessageDialog(null, "PDF Exported Successfully!");

        }
        catch (Exception e){
        //    same code
        }

    }
}

```
---
## 02 Write and Fix pom.xml file

```java
```
---
