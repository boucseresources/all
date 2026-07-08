# printf

=== "Bangla"

    ### কি-ওয়ার্ড রিভিশন এক্সারসাইজ (Keyword Revision Exercise)
    * সি ল্যাঙ্গুয়েজে `switch`, `while`, `for` ইত্যাদি কিওয়ার্ডস (Keywords) সরাসরি ভ্যারিয়েবলের নাম হিসেবে ব্যবহার করা সম্পূর্ণ নিষিদ্ধ। 
    * তবে কেস-সেন্সিটিভিটির কারণে এই কিওয়ার্ডগুলোর যেকোনো একটি বা একাধিক অক্ষর আপারকেস (Uppercase) বা বড় হাতের অক্ষরে পরিবর্তন করে (যেমন: `Switch`) সেটিকে ভ্যালিড ভ্যারিয়েবল নাম হিসেবে ব্যবহার করা যায়।

    ### printf ফাংশন এবং আর্গুমেন্টের গঠন (printf Function and Arguments Structure)
    * `printf` ফাংশনে আর্গুমেন্টের (Arguments) সংখ্যা ভিন্ন হতে পারে; যেমন একটি আর্গুমেন্ট `printf("Neso Academy");`, দুটি আর্গুমেন্ট `printf("...", var);`, অথবা তিনটি আর্গুমেন্ট থাকতে পারে।
    * **প্রধান নিয়ম (Core Rule):** `printf` ফাংশনের প্রথম আর্গুমেন্টটি সর্বদা ডাবল কোটেশন বা উদ্ধৃতি চিহ্নের (`" "`) ভেতরে থাকতে হবে। কারণ প্রথম আর্গুমেন্টটি মূলত একটি স্ট্রিং কনস্ট্যান্ট (String Constant), যা স্ক্রিনে প্রিন্ট করার জন্য ক্যারেক্টারের একটি সিকোয়েন্স বা সমষ্টি।

    ### প্লেসহোল্ডার এবং ফরম্যাট স্পেসিফায়ার (Placeholders and Format Specifiers)
    * ডাবল কোটের ভেতরের `%d` সরাসরি স্ক্রিনে প্রিন্ট হয় না; এটি একটি প্লেসহোল্ডার (Placeholder) বা ফরম্যাট স্পেসিফায়ার হিসেবে কাজ করে। 
    * এটি কম্পাইলারকে নির্দেশ দেয় ডাবল কোটের বাইরে থাকা পরবর্তী আর্গুমেন্ট বা ভ্যারিয়েবলের মান দিয়ে এই স্থানটিকে প্রতিস্থাপন (Replace) করতে।
    * এখানে `d` অক্ষরের একটি নির্দিষ্ট অর্থ রয়েছে; এর মানে হলো আগত ডেটাকে ডেসিমোল নাম্বার (Decimal Number) বা পূর্ণসংখ্যা (Integer) হিসেবে প্রিন্ট করতে হবে (০ থেকে ৯ পর্যন্ত সংখ্যার যেকোনো কম্বিনেশন)।

    ### আর্গুমেন্ট ম্যাপিং এবং এরর হ্যান্ডেলিং (Argument Mapping and Error Handling)
    * কোডে একাধিক প্লেসহোল্ডার থাকলে তারা ক্রমানুসারে ভ্যারিয়েবলগুলোর সাথে ম্যাপ করে। যেমন: `printf("%d %d", var1, var2);` স্টেটমেন্টে প্রথম `%d` ম্যাপ করবে `var1` এর সাথে এবং দ্বিতীয় `%d` ম্যাপ করবে `var2` এর সাথে। যদি `var1 = 3` এবং `var2 = 4` হয়, তবে মাঝখানে খালি জায়গাসহ আউটপুট আসবে `3 4`।

    * **বাধ্যতামূলক নিয়ম (Mandatory Rule):** প্রোগ্রামে যতগুলো প্লেসহোল্ডার (`%d`) ব্যবহার করা হবে, ঠিক ততগুলোই ম্যাচিং ভ্যারিয়াল আর্গুমেন্ট প্রদান করতে হবে। যদি কোনো প্লেসহোল্ডারের বিপরীতে ভ্যারিয়েবল আর্গুমেন্ট কম থাকে, তবে কম্পাইলার সরাসরি টোকেন এরর (Token Error) দেখাবে: `expected expression before...`।

    ### অ্যারিথমেটিক এক্সপ্রেশন এবং আউটপুট মূল্যায়ন (Arithmetic Expression and Output Evaluation)
    * একটি গাণিতিক সমীকরণের উদাহরণ: ৪টি ভ্যারিয়েবল যথাক্রমে `2`, `3`, `6`, `3` মানে ইনিশিয়ালাইজ করা হলো এবং সমীকরণটি হলো `result = var1 + var2 * var3 / var4;`।
    * কোড এক্সিকিউশনের সময় ভ্যারিয়েবলের নামগুলো মেমরিতে তাদের একচুয়াল কনস্ট্যান্ট ভ্যালু দ্বারা প্রতিস্থাপিত হয় (যেমন: `2 + 3 * 6 / 3`)।
    * ভিডিওর স্ক্রিপ্ট অনুযায়ী গাণিতিক হিসাবের ক্রমানুসার: প্রথমে ২ এবং ৩ যোগ করে ৫, তারপর ২৬ দিয়ে গুণ করে ৩০ এবং সবশেষে ৩ দিয়ে ভাগ করে চূড়ান্ত ফলাফল বা `result` এর মান দাঁড়ায় `10`।
    * সমীকরণটি প্লেসহোল্ডার দিয়ে প্রিন্ট করার নিয়ম:
    ```c
    printf("%d + %d * %d / %d", var1, var2, var3, var4);
    ```
    এটি কনসোল উইন্ডোতে প্লেসহোল্ডারগুলো সরিয়ে সরাসরি মানসহ ইকুয়েশনটি প্রিন্ট করবে: `2 + 3 * 6 / 3`।
    * চূড়ান্ত ফলাফল প্রিন্ট করার জন্য দ্বিতীয় `printf` স্টেটমেন্ট: `printf("and the result of this expression is %d", result);`, যা স্ক্রিনে `10` আউটপুট প্রদর্শন করবে এবং সফল সমাপ্তি হিসেবে `process returned 0` মেসেজ দেখাবে।



=== "English"


    ### Keyword Revision Exercise
    * Direct utilization of keywords (কিওয়ার্ড) like `switch`, `while`, or `for` as variable names is strictly prohibited in C.
    * However, due to the language being case-sensitive, changing one or more letters to uppercase (আপারকেস) (e.g., `Switch`) converts it into a valid (বৈধ) variable name configuration.

    ### Structure of the printf Function and Arguments
    * The number of arguments (আর্গুমেন্ট) supplied to a `printf` function can vary: a single argument like `printf("Neso Academy");`, two arguments `printf("...", var);`, or three arguments.
    * **Core Rule:** The first argument of the `printf` function must strictly be enclosed within double quotes (`" "`). This is because the initial argument is always a string constant (স্ট্রিং ধ্রুবক), representing a sequence of characters to be printed directly onto the screen.

    ### Understanding Placeholders and Format Specifiers
    * The character sequence `%d` inside the double quotes does not get printed literally; it functions as a placeholder (প্লেসহোল্ডার) or format specifier.
    * It instructs the compiler to retrieve the subsequent sequential argument outside the quotes and replace the placeholder with that specific variable's value.
    * The letter `d` holds a specific architectural meaning, denoting a decimal number (দশমিক সংখ্যা), which mandates the system to print the incoming data as an integer composed of digits from 0 to 9.

    ### Argument Mapping and Error Handling
    * When multiple placeholders are used, they map sequentially (ক্রমানুসারে) to the subsequent variable arguments. For instance, in `printf("%d %d", var1, var2);`, the first `%d` maps to `var1` and the second maps to `var2`. If `var1 = 3` and `var2 = 4`, the output rendered on the console will be `3 4` separated by a blank space.

    * **Mandatory Constraint:** For every single placeholder (`%d`) declared inside the format string, a matching variable argument must be provided. Failing to supply a corresponding variable for any placeholder causes the compiler to generate a token error: `expected expression before...`.

    ### Arithmetic Expression and Output Evaluation
    * Consider an arithmetic expression where 4 variables are initialized to `2`, `3`, `6`, and `3` respectively, forming the expression: `result = var1 + var2 * var3 / var4;`.
    * During execution, variable names are replaced under the hood by their respective constant values (`2 + 3 * 6 / 3`).
    * According to the strict execution sequence detailed in the video: 2 plus 3 yields 5, multiplied by 6 yields 30, and divided by 3 results in a final computed valuation of `10` stored inside the `result` variable.
    * To print the structure of the equation using variables:
    ```c
    printf("%d + %d * %d / %d", var1, var2, var3, var4);
    ```
    This replaces the specifiers to cleanly render the numbers on the screen as: `2 + 3 * 6 / 3`.
    * The second statement `printf("and the result of this expression is %d", result);` replaces the placeholder with the calculated variable content to output `10` onto the console window, concluding with a successful `process returned 0` indicator.

