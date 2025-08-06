নিচে C প্রোগ্রামিং শেখার জন্য **একজন একেবারে নতুন শিক্ষার্থীর জন্য পূর্ণ পরিবেশ সেটআপ গাইড (বাংলায়)** দেওয়া হলো। এতে আপনি কীভাবে আপনার কম্পিউটারে C প্রোগ্রাম রান করতে পারবেন, সেটার বিস্তারিত ধাপে ধাপে ব্যাখ্যা করা হয়েছে।

---

## 🖥️ ধাপ ১: C কম্পাইলার ও IDE নির্বাচন

C প্রোগ্রাম রান করার জন্য আপনার দরকার হবে একটি **C কম্পাইলার** এবং একটি **কোড এডিটর বা IDE**। নিচে Windows ও Android উভয়ের জন্য গাইড দেওয়া হলো:

---

### 💻 Windows-এর জন্য:

#### 🔹 পদ্ধতি ১: Code::Blocks (সহজতম)

**Code::Blocks** একটি ফ্রি ও ওপেন-সোর্স IDE যেটি C ও C++ প্রোগ্রামিংয়ের জন্য অত্যন্ত জনপ্রিয়।

✅ ইনস্টলেশন লিংক:
👉 [https://www.codeblocks.org/downloads/26/](https://www.codeblocks.org/downloads/26/)

**✅ যেটা ইনস্টল করবেন:**

> **codeblocks-20.03mingw-setup.exe**
> কারণ এতে MinGW C কম্পাইলার বিল্ট-ইন থাকে।

**📌 ধাপসমূহ:**

1. উপরের লিংকে যান এবং `.exe` ফাইলটি ডাউনলোড করুন।
2. ফাইলটি ডাবল ক্লিক করে ইনস্টল করুন (Next → Next → Finish)
3. ইনস্টল শেষে Code::Blocks ওপেন করুন।
4. File → New → Project → Console Application → C নির্বাচন করুন।
5. কোড লিখুন ও রান করুন।

#### 🔹 পদ্ধতি ২: VS Code + GCC (MinGW)

এই পদ্ধতিতে আপনি Visual Studio Code ব্যবহার করে C প্রোগ্রাম চালাতে পারবেন।

✅ বিস্তারিত গাইড (ভিডিওসহ):
👉 [https://youtu.be/0MfU2XkMOCc](https://youtu.be/0MfU2XkMOCc)

✅ MinGW ডাউনলোড:
👉 [https://sourceforge.net/projects/mingw/](https://sourceforge.net/projects/mingw/)

✅ Visual Studio Code:
👉 [https://code.visualstudio.com/](https://code.visualstudio.com/)

---

### 📱 Android মোবাইলের জন্য:

#### 🔹 অ্যাপ ১: Cxxdroid (No Internet Required)

**Cxxdroid** হচ্ছে অ্যান্ড্রয়েডের জন্য একটি অফলাইন C/C++ কম্পাইলার অ্যাপ।

✅ ডাউনলোড লিংক:
👉 [Cxxdroid on Play Store](https://play.google.com/store/apps/details?id=ru.iiec.cxxdroid)

**📌 ব্যবহার:**

1. অ্যাপ ইনস্টল করুন
2. ওপেন করে New Project খুলুন
3. কোড লিখে ▶️ বাটনে ট্যাপ করে রান করুন

#### 🔹 অ্যাপ ২: Dcoder

✅ লিংক:
👉 [https://play.google.com/store/apps/details?id=com.paprbit.dcoder](https://play.google.com/store/apps/details?id=com.paprbit.dcoder)

---

## 🧪 ধাপ ২: একটি বেসিক C প্রোগ্রাম রান করে দেখুন

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

* এই কোডটি লিখে রান করলে স্ক্রিনে দেখাবে: `Hello, World!`

---

## 📚 ধাপ ৩: বাংলা টিউটোরিয়াল ও রিসোর্স

1. **YouTube C Programming Tutorial (বাংলা):**
   👉 [https://www.youtube.com/playlist?list=PLgH5QX0i9K3pHMTm5WDXy7ACmZEOlAq2V](https://www.youtube.com/playlist?list=PLgH5QX0i9K3pHMTm5WDXy7ACmZEOlAq2V)

2. **বাংলা ব্লগ টিউটোরিয়াল (Website):**
   👉 [https://hellohasan.com/c-programming-tutorial-in-bangla/](https://hellohasan.com/c-programming-tutorial-in-bangla/)

---

## ✅ সংক্ষিপ্ত তালিকা

| সিস্টেম | সফটওয়্যার    | লিংক                                                                                                                                 |
| ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Windows | Code::Blocks  | [https://www.codeblocks.org/downloads/26/](https://www.codeblocks.org/downloads/26/)                                                 |
| Windows | VS Code + GCC | [https://youtu.be/0MfU2XkMOCc](https://youtu.be/0MfU2XkMOCc)                                                                         |
| Android | Cxxdroid      | [https://play.google.com/store/apps/details?id=ru.iiec.cxxdroid](https://play.google.com/store/apps/details?id=ru.iiec.cxxdroid)     |
| Android | Dcoder        | [https://play.google.com/store/apps/details?id=com.paprbit.dcoder](https://play.google.com/store/apps/details?id=com.paprbit.dcoder) |

---

## যদি আপনি চান, আমি একটি PDF/গাইড আকারেও তৈরি করে দিতে পারি।

আপনি চাইলে পরবর্তী ধাপে “**ফার্স্ট প্রোগ্রাম লেখা, কম্পাইলিং এর সমস্যা সমাধান, ইনপুট-আউটপুট হ্যান্ডলিং**” এসব নিয়েও বাংলা সিরিজ করে দিতে পারি।

বলুন, পরের ধাপে কী চান? 📘📲💻
