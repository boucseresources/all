# 📚 জাভাতে পলিমরফিজম (Polymorphism in Java): সম্পূর্ণ নোট

**ভিডিও রেফারেন্স:** [Engineering Digest - Polymorphism: Compile Time vs Run Time](https://www.google.com/search?q=https://youtu.be/TRlz0X5hD7E)

---

## ১. পলিমরফিজম কী? (What is Polymorphism?)

* **শব্দগত অর্থ:**
* `Poly` = অনেক (Many)
* `Morph` = রূপ বা আকৃতি (Forms)
* অর্থাৎ, **Polymorphism** শব্দের অর্থ হলো **"বহুরূপিতা" (Many Forms)**।


* **সংজ্ঞা:** অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিংয়ের (OOP) এমন একটি বৈশিষ্ট্য, যার মাধ্যমে একই নামের মেথড ভিন্ন ভিন্ন অবজেক্টের ওপর কাজ করার ভিত্তিতে ভিন্ন ভিন্ন আচরণ প্রকাশ করে (*Polymorphism allows methods to do different things based on the object it is acting upon, even though the method name and signature might be the same*)।
* **মূল প্রকারভেদ:** পলিমরফিজম প্রধানত দুই প্রকার:
1. **Compile Time Polymorphism** (কম্পাইল-টাইম পলিমরফিজম)
2. **Run Time Polymorphism** (রান-টাইম পলিমরফিজম)



---

## ২. কম্পাইল টাইম পলিমরফিজম (Compile Time Polymorphism)

* **অন্য নাম:** স্ট্যাটিক পলিমরফিজম (Static Polymorphism) বা আর্লি বাইন্ডিং (Early Binding)।
* **কীভাবে বাস্তবায়িত হয়:** **Method Overloading**-এর মাধ্যমে এটি বাস্তবায়িত হয়।
* **কেন কম্পাইল-টাইম বলা হয়?** প্রোগ্রামের কম্পাইল করার সময়ই কম্পাইলার আর্গুমেন্টের সংখ্যা, ডেটা টাইপ বা সিকোয়েন্স দেখে সিদ্ধান্ত নেয় যে কোন মেথডটি কল করা হবে।
* **কোড উদাহরণ (`Calculator` Class):**
```java
class Calculator {
    // দুটি int যোগ করার মেথড
    public int add(int a, int b) {
        return a + b;
    }

    // তিনটি int যোগ করার মেথড (প্যারামিটার সংখ্যা ভিন্ন)
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    // দুটি double যোগ করার মেথড (ডেটা টাইপ ভিন্ন)
    public double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(5, 10));        // Output: 15 (প্রথম add কল হবে)
        System.out.println(calc.add(5, 10, 15));    // Output: 30 (দ্বিতীয় add কল হবে)
        System.out.println(calc.add(5.5, 10.5));    // Output: 16.0 (তৃতীয় add কল হবে)
    }
}

```


এখানে `add()` মেথডের নাম একই হলেও তার ভিন্ন ভিন্ন ফর্ম (বহুরূপিতা) রয়েছে যা কম্পাইলার কম্পাইল টাইমে নির্ধারণ করে।

---

## ৩. রান টাইম পলিমরফিজম (Run Time Polymorphism)

* **অন্য নাম:** ডাইনামিক পলিমরফিজম (Dynamic Polymorphism) বা লেট বাইন্ডিং (Late Binding)।
* **কীভাবে বাস্তবায়িত হয়:** **Inheritance (উত্তরাধিকার)** এবং **Method Overriding**-এর মাধ্যমে।
* **Method Overriding কী?** প্যারেন্ট ক্লাসের কোনো মেথডকে যদি চাইল্ড ক্লাসে এসে পুনরায় নিজস্ব লজিক দিয়ে সংজ্ঞায়িত (override) করা হয়, তবে তাকে মেথড ওভাররাইডিং বলে।
* **কোড উদাহরণ (`Animal`, `Dog`, `Cat`):**
```java
// প্যারেন্ট ক্লাস
class Animal {
    public void sayHello() {
        System.out.println("...");
    }
}

// চাইল্ড ক্লাস ১
class Dog extends Animal {
    @Override
    public void sayHello() {
        System.out.println("Woof");
    }
}

// চাইল্ড ক্লাস ২
class Cat extends Animal {
    @Override
    public void sayHello() {
        System.out.println("Meow");
    }
}

```



---

## ৪. প্যারেন্ট রেফারেন্স এবং চাইল্ড অবজেক্ট (Parent Reference to Child Object)

জাভাতে প্যারেন্ট ক্লাসের রেফারেন্স ভ্যারিয়েবলের ভেতর চাইল্ড ক্লাসের অবজেক্ট এসাইন করা যায়:

```java
Animal dog = new Dog();
Animal cat = new Cat();

dog.sayHello(); // Output: Woof
cat.sayHello(); // Output: Meow

```

### রেফারেন্স সংক্রান্ত গুরুত্বপূর্ণ নিয়মাবলী:

1. **বৈধ:** প্যারেন্ট রেফারেন্সে চাইল্ড অবজেক্ট রাখা যায় (`Animal dog = new Dog();`)।
2. **অবৈধ (উল্টোটা সম্ভব নয়):** চাইল্ড রেফারেন্সে প্যারেন্ট অবজেক্ট সরাসরি রাখা যায় না (`Dog dog = new Animal();` ❌ কম্পাইল এরর দেবে)।
3. **অবৈধ (সম্পর্কহীন ক্লাস):** ইনহেরিটেন্স সম্পর্ক নেই এমন ক্লাসের অবজেক্ট রেফারেন্সে রাখা যায় না (`Animal dog = new Student();` ❌ কম্পাইল এরর দেবে)।

---

## ৫. ডাইনামিক মেথড ডিসপ্যাচ (Dynamic Method Dispatch)

* **কেন রান-টাইম পলিমরফিজম বলা হয়?**
* `Animal dog = new Dog();` লেখার সময় `new` কি-ওয়ার্ডের মাধ্যমে রান-টাইমে মেমোরি অ্যালোকেট হয় এবং হিপ মেমোরিতে প্রকৃত `Dog` অবজেক্ট তৈরি হয়।
* যখন `dog.sayHello()` কল করা হয়, তখন জাভা ভার্চুয়াল মেশিন (JVM) রান-টাইমে বুঝতে পারে যে রেফারেন্সটি `Animal`-এর হলেও মেমোরিতে আসল অবজেক্টটি `Dog`-এর। ফলে JVM স্বয়ংক্রিয়ভাবে `Dog` ক্লাসের ওভাররাইডেড মেথডটি এক্সিকিউট করে।


* **Dynamic Method Dispatch:** রান-টাইমে ডাইনামিকালি নির্ধারণ করা হয় যে কোন মেথডটি চলবে—এই পুরো মেকানিজমকে **Dynamic Method Dispatch** বলা হয়।

---

## ৬. আপকাস্টিং এবং ডাউনকাস্টিং (Upcasting & Downcasting)

### ক. আপকাস্টিং (Upcasting):

* চাইল্ড ক্লাসের অবজেক্টকে প্যারেন্ট ক্লাসের রেফারেন্সে রাখা (লোয়ার হায়ারার্কি থেকে আপার হায়ারার্কিতে যাওয়া)।
* এটি জাভাতে স্বয়ংক্রিয়ভাবে (Implicitly) ঘটে।
```java
Animal dog = new Dog(); // Upcasting

```



### খ. ডাউনকাস্টিং (Downcasting):

* প্যারেন্ট ক্লাসের রেফারেন্সে থাকা চাইল্ড অবজেক্টকে পুনরায় চাইল্ড ক্লাসের নিজস্ব রেফারেন্সে কনভার্ট করা।
* এটি এক্সপ্লিসিটলি (Explicitly) টাইপকাস্ট করতে হয় (যেমন প্রিমিটিভ টাইপে `double` থেকে `int`-এ কাস্ট করার মতো)।
```java
Animal animalRef = new Dog();       // Upcasting
Dog myDog = (Dog) animalRef;        // Downcasting (Explicitly)

```



---

## ৭. রেফারেন্স টাইপের সীমাবদ্ধতা (Crucial Rule: What Can Be Accessed?)

* **প্রশ্ন:** `Dog` ক্লাসে যদি নিজস্ব কোনো অতিরিক্ত মেথড থাকে (যেমন `sayBye()`), যা `Animal` ক্লাসে নেই—তাহলে কি `Animal dog = new Dog();` দিয়ে `dog.sayBye()` কল করা যাবে?
```java
class Dog extends Animal {
    public void sayBye() {
        System.out.println("Woof woof");
    }
}

// টেস্ট ক্লাসে:
Animal bob = new Dog();
bob.sayBye(); // ❌ কম্পাইল এরর দেবে!

```


* **কারণ:**
* কম্পাইলার সবসময় মেথড কলের বৈধতা যাচাই করে **রেফারেন্স টাইপ (`Animal`)** দেখে, অবজেক্ট টাইপ দেখে নয়।
* যেহেতু `Animal` ক্লাসের মধ্যে `sayBye()` নামের কোনো মেথড নেই, তাই কম্পাইলার এটি অ্যাক্সেস করতে দেয় না।


* **সমাধান:** চাইল্ড ক্লাসের নিজস্ব স্পেসিফিক মেথড কল করতে হলে হয় সরাসরি চাইল্ড রেফারেন্স ব্যবহার করতে হবে (`Dog bob = new Dog();`), অথবা ডাউনকাস্ট করতে হবে (`((Dog) bob).sayBye();`)।

---

## 📌 সারসংক্ষেপ (Summary Table)

| বিষয় | Compile Time Polymorphism | Run Time Polymorphism |
| --- | --- | --- |
| **অন্য নাম** | Method Overloading / Static Binding | Method Overriding / Dynamic Method Dispatch |
| **সিদ্ধান্ত কখন হয়?** | কোড কম্পাইল করার সময় | কোড রান করার সময় (JVM দ্বারা) |
| **বাস্তবায়নের উপায়** | একই ক্লাসে মেথডের প্যারামিটার পরিবর্তনের মাধ্যমে | ইনহেরিটেন্সের মাধ্যমে সাবক্লাসে মেথড ওভাররাইড করে |
| **রেফারেন্সের ভূমিকা** | কল করার মেথডের স্বাক্ষর চেক করে | মেথড অ্যাক্সেসের অনুমতি দেয়, তবে রানটাইমে অবজেক্টের ওভাররাইডেড ভার্সন চলে |
| **কাস্টিং** | প্রযোজ্য নয় | আপকাস্টিং (Implicit) এবং ডাউনকাস্টিং (Explicit) |
|  |  |  |
|  |  |  |