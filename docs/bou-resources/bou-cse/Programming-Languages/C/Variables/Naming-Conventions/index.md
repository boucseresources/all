=== "Bangla"

    
    ### ভ্যারিয়েবল নামকরণের নিয়মকানুন (Variable Naming Conventions)

    সি প্রোগ্রামিংয়ে ভ্যারিয়েবলের নাম দেওয়ার জন্য কিছু ফিক্সড রুলস বা ভ্যারিয়েবল নেমিং কনভেনশন (Variable Naming Conventions) ফলো করতে হয়। কোডিং শেখার সময় অনেকেই এই টপিকটাকে একদম পাত্তাই দেয় না বা স্কিপ করে যায়, কারণ তারা ভাবে ভ্যারিয়েবলের নাম যা ইচ্ছা তা-ই দেওয়া যায়। কিন্তু সিনের পেছনে কাহিনী অন্যরকম; সি-তে তোমার যা মন চায় তা-ই কিন্তু এলাউড না। তাই কম্পাইলার যেন এরর না দেয়, সেজন্য এই নিয়মগুলো জানা একদম মাস্ট।

    একটা ভ্যারিয়েবলের নাম মূলত লেটারস (Letters (উভয় আপারকেস ও লোয়ারকেস)), ডিজিট বা সংখ্যা (Digits) এবং আন্ডারস্কোর (\_) এর কম্বিনেশনে তৈরি হয়।

    #### ভ্যারিয়েবল নেমিংয়ের মেইন রুলস

    1. **ফাস্ট ক্যারেক্টার বা শুরুর সীমাবদ্ধতা:** তুমি কখনোই একটা ভ্যারিয়েবলের নাম কোনো সংখ্যা বা ডিজিট দিয়ে স্টার্ট করতে পারবে না। নাম অলওয়েজ লেটার অথবা আন্ডারস্কোর দিয়ে শুরু হতে হবে। যেমন ধরো, `globe` লিখলে সেটা একদম জোস এবং ভ্যালিড নাম, কিন্তু তুমি যদি `2globe` লেখো, তবে কম্পাইলার সেটাকে সরাসরি ইনভ্যালিড বা অবৈধ ঘোষণা করবে।

    2. **আন্ডারস্কোরের ক্যাчал:** আন্ডারস্কোর (\_) কে সি ল্যাঙ্গুয়েজে টেকনিক্যালি একটা লেটার হিসেবেই কাউন্ট করা হয়, কিন্তু ভুলেও ভ্যারিয়েবলের নামের শুরুতে আন্ডারস্কোর ইউজ করবে না। এর মেইন রিজন হলো, আন্ডারস্কোর দিয়ে শুরু হওয়া একগাদা নাম ওএসের ভেতরের সিস্টেম লেভেল ইউজের (System use) জন্য অলরেডি রিজার্ভ বা সংরক্ষিত করে রাখা আছে। তুমি যদি নিজের কোডে ওগুলো শুরুতে বসাও, তবে সিস্টেমের ইন্টারনাল কোডের সাথে একটা মারামারি বা কনф্লিক্ট লেগে এক্সিকিউশনে এরর আসতে পারে। তবে ভ্যারিয়েবলের নামের মাঝখানে আন্ডারস্কোর ইউজ করায় কোনো প্যারা নেই।

    3. **কেস সেন্সিটিভিটির সীন:** সি ল্যাঙ্গুয়েজ হলো একদম স্ট্রিক্টলি কেস সেন্সিティブ (Case Sensitive)। এর মানে হলো আপারকেস (বড় হাতের) আর লোয়ারকেস (ছোট হাতের) অক্ষরের মানে কম্পাইলারের কাছে সম্পূর্ণ আলাদা। যেমন ধরো, তুমি যদি লেখো `var`, `Var`, `vAr`, বা `VAR` , কম্পাইলার এই চারটা জিনিসকে সম্পূর্ণ আলাদা চারটা ভ্যারিয়েবল হিসেবে ট্রিট করবে। তবে ট্র্যাডিশনাল নিয়ম হলো, সাধারণ ভ্যারিয়েবলের নামের জন্য আমরা অলওয়েজ লোয়ারকেস বা ছোট হাতের অক্ষর ইউজ করি, আর বড় হাতের অক্ষরগুলো তুলে রাখি সিম্বলিক কনস্ট্যান্ট (Symbolic Constants) এর জন্য, যা পরে `#define` দিয়ে শিখলে ক্লিয়ার হবে।

    4. **স্পেশাল ক্যারেক্টার নিষিদ্ধ:** আন্ডারস্কোর বাদে অন্য কোনো স্পেশাল ক্যারেক্টার যেমন `@`, `#`, `%`, `^`, `&`, বা `*` ভ্যারিয়েবলের নামে একদমই এলাউড না। কিছু কিছু কম্পাইলারে হয়তো নামের শুরুতে বা মাঝখানে ডলার সাইন `$` দিলে কাজ করলেও করতে পারে, কিন্তু ম্যাক্সিমাম স্পেশাল ক্যারেক্টার (যেমন `%`) দেওয়া মাত্রই কোড এরর খাবে। তাই সেফ জোনে থাকার জন্য আন্ডারস্কোর ছাড়া সব স্পেশাল ক্যারেক্টার এভয়েড করাই বেস্ট বুদ্ধি।

    5. **হোয়ایت স্পেস বা খালি জায়গার নিষেধাজ্ঞা:** ভ্যারিয়েবলের নামের মাঝখানে কোনো ব্ল্যাংক স্পেস বা হোয়ایت স্পেস (White Spaces) রাখা সম্পূর্ণ নিষিদ্ধ। যেমন তুমি যদি লেখো `int my variable;`, তবে সেটা টোটালি ইনভ্যালিড। কারণ মাঝখানের স্পেসটার জন্য কম্পাইলার পুরো জিনিসটাকে একটা একক ভ্যারিয়েবল হিসেবে চিনতেই পারবে না। কোডের রিডাবিলিটি বা পঠনযোগ্যতা জোস রাখার জন্য স্পেসের বদলে আন্ডারস্কোর ইউজ করবে, যেমন `int my_variable;` লিখলে জিনিসটা একদম ভ্যালিড হয়ে যাবে।

    6. **রিজার্ভড কিওয়ার্ডস:** সি ল্যাঙ্গুয়েজের নিজস্ব কিছু রিজার্ভড শব্দ বা কিওয়ার্ড (Keywords) আছে, যেমন `if`, `else`, `for`, `while`, `switch`, `int`, `float`, `long`, `double` ইত্যাদি। এই নামগুলোকে তুমি কখনোই ডিরেক্ট ভ্যারিয়েবলের নাম হিসেবে ইউজ করতে পারবে না। তবে সি-এর সব কিওয়ার্ড যেহেতু ছোট হাতের অক্ষরে লেখা, তুমি যদি খুব বেশি জেদ করো, তবে এগুলোর এক বা একাধিক অক্ষর বড় হাতের বানিয়ে (যেমন `Int` বা `While`) ভ্যারিয়েবল হিসেবে চালাতে পারো। যেহেতু সি কেস-সেন্সিটিভ, তাই এটা ভ্যালিড হবে, যদিও ক্লিন কোডিংয়ের খাতিরে এই কাজ না করাই ভালো।

    #### ডিজাইন টিপস

    ভ্যারিয়েবলের নাম কখনো ঢাউস সাইজের বা অতিরিক্ত লম্বা (Long names) করবে না। দেখতে তো ফালতু লাগেই, প্লাস পরে যখন কোডের ভেতরে ওই ভ্যারিয়েবল বারবার ইউজ করতে যাবে, তখন অত বড় নাম বারবার টাইপ করা চরম লেভেলের একটা প্যারা। তাই নাম অলওয়েজ শর্ট আর মিনিংফুল রাখা ট্রাই করবে।


=== "English"


    ### Rules and Conventions for Variable Naming

    In C programming, naming your variables follows highly specific rules or naming conventions (নামকরণ বিধি). This is often one of the most avoidable (উপেক্ষাযোগ্য) topics because programmers frequently assume any name is allowed, which is completely incorrect. To write valid code, you must follow the strict structural guidelines of the compiler.

    A variable name is fundamentally composed (গঠিত) of letters (both uppercase and lowercase), digits, and the underscore symbol. 

    #### Core Naming Rules

    1. **The First Character Constraint:** A variable name cannot start with a digit. It must always begin with either a letter or an underscore. For example, `globe` is a perfectly valid variable name, whereas `2globe` is completely invalid.

    2. **The Underscore Restriction:** Although the underscore character technically counts as a letter, you should never begin your variable names with an underscore. A massive number of names starting with underscores are already reserved (সংরক্ষিত) for system use and library configurations. Utilizing them in your program can cause unforeseen conflicts (দ্বন্দ্ব) or execution errors. However, using underscores in the middle of a name is fully permitted.

    3. **Case Sensitivity:** C language is strictly case sensitive, which means uppercase and lowercase letters are completely distinctive (স্বতন্ত্র). For example, variations like `var`, `Var`, `vAr`, and `VAR` represent entirely different memory locations. Traditionally (ঐতিহ্যগতভাবে), lowercase letters are used exclusively for standard variables, while uppercase letters are reserved for symbolic constants (প্রতীকী ধ্রুবক) defined via preprocessor directives like `#define`.

    4. **Special Character Prohibition:** Special characters such as `@`, `#`, `%`, `^`, `&`, or `*` are completely prohibited inside variable names. While a few compilers might exceptionally tolerate certain characters like `$`, most special characters like `%` will immediately trigger a compilation error. The safest standard practice is to completely avoid them.

    5. **White Space Restriction:** Blanks or white spaces (খালি জায়গা) are strictly forbidden within a variable name. For example, `int my variable;` is invalid because the compiler cannot recognize it as a single entity. To separate multiple words and maintain high readability (পঠনযোগ্যতা), you should substitute the blank space with an underscore, making `int my_variable;` a valid declaration.

    6. **Reserved Keywords:** Keywords such as `if`, `else`, `for`, `while`, `switch`, `int`, `float`, `long`, and `double` are reserved words used by the compiler's core internal logic. You cannot use them directly as variable names. Since all standard C keywords are strictly written in lowercase, you can technically override this rule by forcing one or more letters into uppercase, such as using `Int` or `While`. Because C is case-sensitive, this becomes valid, though it is still not recommended for clean code.

    #### Design Recommendations

    Do not use excessively (অতিরিক্ত) long names for your variables. Highly elongated names do not look professional and create unnecessary overhead because you have to manually type those long configurations again and again whenever you reference them later in your source code.


Reference Video: [http://www.youtube.com/watch?v=Rl9w0hVxuRw](http://www.youtube.com/watch?v=Rl9w0hVxuRw)