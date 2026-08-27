জাভার অত্যন্ত গুরুত্বপূর্ণ বিষয় **Access Modifiers (Public, Private, Default & Protected)** নিয়ে আলোচনা করা হয়েছে। ভিডিওটির প্রতিটি বিষয়, কোড উদাহরণ এবং বিশেষ ব্যবহারের নিয়মাবলী নিচে বিস্তারিত নোট আকারে বাংলায় সাজিয়ে দেওয়া হলো:

# 📚 জাভাতে Access Modifiers: সম্পূর্ণ বিস্তারিত নোট

**ভিডিও রেফারেন্স:** [Engineering Digest - Access Modifiers: Public, Private, Default & Protected](https://www.google.com/search?q=https://youtu.be/ZlUuQIw-a9U)

## ১. Access Modifier কী? (What are Access Modifiers?)

* **সংজ্ঞা:** Access Modifier হলো জাভার এমন কিছু কী-ওয়ার্ড (Keyword), যা নির্ধারণ করে কোনো ক্লাস, ভ্যারিয়েবল/ফিল্ড, মেথড বা কনস্ট্রাক্টরের **দৃশ্যমানতা (Visibility) ও অ্যাক্সেসযোগ্যতা (Accessibility)** প্রোগ্রামের কোথায় কতটুকু থাকবে।
* **জাভাতে ৪ ধরনের Access Level রয়েছে:**
1. **Public**
2. **Private**
3. **Default** (কোনো কী-ওয়ার্ড লিখতে হয় না)
4. **Protected**



## ২. Public Access Modifier

* **স্কোপ (Scope):** `public` ব্যবহার করলে তা যেকোনো স্থান থেকে (Anywhere) অ্যাক্সেস করা যায়—একই ক্লাস, একই প্যাকেজ, কিংবা অন্য কোনো প্যাকেজের যেকোনো ক্লাস থেকে।
* **কোড উদাহরণ:**
```java
package school;

public class Student {
    public String name;
    public int age;

    public void sayHello() {
        System.out.println("Hello");
    }
}

```


```java
package test;
import school.Student;

public class Test {
    public static void main(String[] args) {
        Student student = new Student();
        student.name = "Ram";
        student.age = 12;
        student.sayHello(); // কোনো এরর ছাড়াই রান হবে
    }
}

```



## ৩. Private Access Modifier

* **স্কোপ (Scope):** শুধুমাত্র যে ক্লাসের ভেতর ডিক্লেয়ার করা হয়েছে, **সেই ক্লাসের ভেতরেই (Class Level)** সীমাবদ্ধ থাকে। ক্লাসের বাইরে (অন্য কোনো ক্লাস বা প্যাকেজ থেকে) তা সরাসরি দেখা বা অ্যাক্সেস করা যায় না।
* কোনো ফিল্ড বা মেথড `private` করলে অন্য ক্লাস থেকে ডট (`.`) দিয়ে অ্যাক্সেস করতে গেলে কম্পাইল এরর দেয়: *`<member> has private access`*।

### 💡 Private Constructor (প্রাইভেট কনস্ট্রাক্টর ও এর ব্যবহার)

কনস্ট্রাক্টরকে `private` করা হলে ক্লাসের বাইরে থেকে `new` কী-ওয়ার্ড দিয়ে অবজেক্ট তৈরি করা অসম্ভব হয়ে যায়। এর প্রধান দুটি ব্যবহার রয়েছে:

#### ব্যবহার ১: Utility Class (যেমন: `Utils`)

* যে ক্লাসে শুধুমাত্র কিছু সাহায্যকারী স্ট্যাটিক মেথড (`static methods`) থাকে, তার অবজেক্ট বানানোর কোনো প্রয়োজন নেই।
* যাতে কেউ ভুল করেও অবজেক্ট না বানাতে পারে, সেজন্য কনস্ট্রাক্টর প্রাইভেট করা হয় এবং মেথডগুলো সরাসরি ক্লাসের নাম দিয়ে কল করা হয়:
```java
public class Utils {
    private Utils() {} // Private Constructor

    public static void sayBye() {
        System.out.println("Bye...");
    }
}

// ব্যবহারের নিয়ম:
Utils.sayBye(); // সরাসরি ক্লাস নাম দিয়ে কল

```



#### ব্যবহার ২: Singleton Design Pattern (সিঙ্গেলটন প্যাটার্ন)

* যখন নিশ্চিত করতে হয় যে পুরো অ্যাপ্লিকেশনে একটি ক্লাসের **শুধুমাত্র একটি মাত্র অবজেক্ট (Single Instance)** তৈরি হবে।
* **বাস্তবায়ন পদ্ধতি:**
```java
public class School {
    // ১. নিজস্ব ক্লাসের একটি প্রাইভেট স্ট্যাটিক ইনস্ট্যান্স
    private static School instance;

    // ২. প্রাইভেট কনস্ট্রাক্টর (বাইরে থেকে new নিষিদ্ধ)
    private School() {}

    // ৩. গ্লোবাল এক্সেস পয়েন্ট
    public static School getInstance() {
        if (instance == null) {
            instance = new School(); // প্রথমবার অবজেক্ট তৈরি হবে
        }
        return instance; // পরবর্তী প্রতিবার আগের তৈরি অবজেক্টই রিটার্ন করবে
    }
}

```



## ৪. Default Access Modifier (Package-Private)

* **কী-ওয়ার্ড:** এর জন্য কোনো নির্দিষ্ট কী-ওয়ার্ড নেই (No Keyword)। কোনো মেম্বারের আগে কিছু না লিখলে জাভা সেটিকে বাই ডিফল্ট ধরে নেয়।
* **স্কোপ (Scope):** শুধুমাত্র **একই প্যাকেজের ভেতরের ক্লাসগুলো** এটি অ্যাক্সেস করতে পারে। অন্য প্যাকেজ থেকে এটি দেখা বা ইমপোর্ট করা যায় না।
* **টপ-লেভেল ক্লাসের নিয়ম:** কোনো শীর্ষ বা আউটার ক্লাস কেবল `public` অথবা `default` হতে পারে (ক্লাসের আগে কখনো `private` বা `protected` ব্যবহার করা যায় না)।

## ৫. Protected Access Modifier

* **স্কোপ (Scope):**
1. একই ক্লাসের ভেতর।
2. **একই প্যাকেজের যেকোনো ক্লাসের ভেতর** (ইনহেরিট না করলেও অ্যাক্সেস পাওয়া যায়)।
3. **অন্য প্যাকেজের চাইল্ড/সাবক্লাসের ভেতর** (ইনহেরিটেন্স বা `extends`-এর মাধ্যমে)।
4. অন্য প্যাকেজের সাধারণ (নন-সাবক্লাস) ক্লাস থেকে অ্যাক্সেস করা যায় না।


* **কোড উদাহরণ:**
```java
package zoo;

public class Animal {
    private String name;
    protected String sound;

    public Animal(String name, String sound) {
        this.name = name;
        this.sound = sound;
    }

    public void makeSound() {
        System.out.println(name + " makes a sound: " + sound);
    }

    protected void changeSound(String newSound) {
        this.sound = newSound;
    }
}

```


```java
package zoo;

public class Dog extends Animal {
    public Dog(String name) {
        super(name, "Bark");
    }

    // চাইল্ড ক্লাসের ভেতর protected মেথড অ্যাক্সেসযোগ্য
    public void setDogSound(String newSound) {
        changeSound(newSound); 
    }
}

```


* **অন্য প্যাকেজের টেস্ট ক্লাসে:** `dog.changeSound("Woof");` সরাসরি কল করলে এরর দেবে, কারণ মেথডটি `protected`। তবে `Dog` ক্লাসের নিজস্ব পাবলিক মেথড `dog.setDogSound("Woof");` এর মাধ্যমে তা পরিবর্তন করা যাবে।
* **একই প্যাকেজের ক্লাসে:** যদি টেস্ট ক্লাসটি একই প্যাকেজে (`zoo`) থাকে, তবে ইনহেরিট না করেও সরাসরি `dog.changeSound("Woof");` কল করা সম্ভব।



## 📊 Access Modifier সামারি চার্ট (Accessibility Matrix)

| কনটেক্সট (Context) | Private | Default (No modifier) | Protected | Public |
||||||
| **একই ক্লাস (Same Class)** | Yes | Yes | Yes | Yes |
| **একই প্যাকেজ (Same Package)** | ❌ No | Yes | Yes | Yes |
| **একই প্যাকেজের সাবক্লাস (Subclass - Same Package)** | ❌ No | Yes | Yes | Yes |
| **ভিন্ন প্যাকেজের সাবক্লাস (Subclass - Different Package)** | ❌ No | ❌ No | Yes | Yes |
| **ভিন্ন প্যাকেজের সাধারণ ক্লাস (Different Package - Non-subclass)** | ❌ No | ❌ No | ❌ No | Yes |

## 📌 সংক্ষেপে মূল বিষয়সমূহ

* **`public`:** সবার জন্য উন্মুক্ত (Global Access)।
* **`private`:** নিজের ক্লাসের বাইরে কেউ পাবে না (Class Scope)।
* **`default`:** নিজের প্যাকেজের বাইরে কেউ পাবে না (Package Scope)।
* **`protected`:** নিজের প্যাকেজের সবাই পাবে + অন্য প্যাকেজের শুধুমাত্র চাইল্ড ক্লাস পাবে (Package + Inheritance Scope)।
* **টপ লেভেল ক্লাস:** কেবল `public` অথবা `default` হতে পারে।