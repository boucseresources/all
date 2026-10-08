### Storage Management (স্টোরেজ ম্যানেজমেন্ট)

=== "English"

    ### Storage Management

    **Storage Management** is a critical (অত্যন্ত গুরুত্বপূর্ণ) program module in a Database Management System (DBMS). It acts as an interface (যোগসূত্র/সংযোগ মাধ্যম) between the low-level data stored on the physical disk and the application programs or queries submitted to the system. It handles how data is stored, retrieved (পুনরুদ্ধার/আহরণ করা), and organized to ensure high performance (উচ্চ কার্যক্ষমতা) and data safety.

    ---

    ### 1. Storage Hierarchy (স্টোরেজের স্তরসমূহ)

    Data is distributed across multiple memory tiers (স্তরসমূহ) based on speed, cost, and permanence (স্থায়িত্ব):

    * **Primary Storage (প্রাথমিক স্টোরেজ):** Includes Cache and main memory (RAM). It offers the fastest access speed but is volatile (অস্থায়ী—বিদ্যুৎ চলে গেলে ডেটা মুছে যায়) and limited in capacity (ধারণক্ষমতা).
    * **Secondary Storage (মাধ্যমিক স্টোরেজ):** Includes Magnetic Hard Drives (HDD) and Solid State Drives (SSD). It provides non-volatile (স্থায়ী), large-scale storage for the database records, though reading from it is significantly slower than RAM.
    * **Tertiary Storage (তৃতীয় পর্যায়ের স্টোরেজ):** Includes Magnetic Tapes and Optical Disks. It is extremely slow and cost-effective (সাশ্রয়ী), primarily reserved for disaster recovery (বিপর্যয় পুনরুদ্ধার) and long-term archiving (দীর্ঘমেয়াদী সংরক্ষণ).

    ---

    ### 2. Components of a Storage Manager (স্টোরেজ ম্যানেজারের উপাদানসমূহ)

    The storage manager is divided into specialized (বিশেষায়িত) sub-modules to handle distinct tasks:

    * **Authorization and Integrity Manager (অনুমোদন ও সততা ব্যবস্থাপক):**
    * Verifies (যাচাই করে) user privileges (অধিকারসমূহ) to ensure unauthorized users cannot view or alter confidential records.
    * Enforces (বাস্তবায়ন করে) integrity constraints (শর্তাবলী বা নিয়ম) to prevent illegal data values from entering the database.


    * **Transaction Manager (লেনদেন ব্যবস্থাপক):**
    * Guarantees that ongoing transactions execute without conflicts (বিরোধ) during concurrent access (একসাথে একাধিক জনের ব্যবহার).
    * Preserves data consistency (সামঞ্জস্যতা) and ensures transactions complete fully or roll back entirely in case of system failures (ক্র্যাশ বা বিভ্রাট).


    * **File Manager (ফাইল ব্যবস্থাপক):**
    * Handles disk space allocation (ডিস্কে জায়গা বরাদ্দ করা) and manages the layout (বিন্যাস) of files stored on physical media.


    * **Buffer Manager (বাফার ব্যবস্থাপক):**
    * Fetches (তুলে আনে) necessary data blocks from the slower physical disk into main memory (RAM).
    * Implements caching strategies (সাময়িক জমা রাখার কৌশল) to minimize expensive disk I/O operations (ডিস্ক ইনপুট-আউটপুট কার্যকলাপ) and optimize system throughput (কার্যদক্ষতা).



    ---

    ### 3. Physical Data Structures Maintained (রক্ষিত ভৌত ডেটা কাঠামোসমূহ)

    The storage manager maintains three fundamental (মৌলিক) structures on the secondary storage:

    * **Data Files (ডেটা ফাইলসমূহ):** Store the actual data records (আসল তথ্য) belonging to tables.
    * **Data Dictionary / System Catalog (ডেটা ডিকশনারি/মেটাডেটা):** Stores metadata (মেটাডেটা—তথ্যের তথ্য), which includes table schemas, column names, constraints, and user authorization rules.
    * **Indices (সূচকসমূহ):** Auxiliary (সহায়ক) data structures designed to provide accelerated access paths (দ্রুত ডেটা খোঁজার পথ) to specific records, similar to an index section in a book.

=== "Bangla"

    **Storage Management** হলো ডেটাবেজ ম্যানেজমেন্ট সিস্টেমের (DBMS) একটি গুরুত্বপূর্ণ প্রোগ্রাম মডিউল। এর প্রধান কাজ হলো হার্ডডিস্ক বা স্টোরেজ ডিভাইসে ডেটা কীভাবে সংরক্ষিত থাকবে, কীভাবে তা দ্রুত উদ্ধার (Retrieve) করা হবে এবং মেমোরির সাথে ডেটার আদান-প্রদান কীভাবে নিয়ন্ত্রণ করা হবে—তা পরিচালনা করা।

    ব্যবহারকারী বা অ্যাপ্লিকেশন যখন কোনো কুয়েরি (Query) পাঠায়, তখন স্টোরেজ ম্যানেজার ব্যাকএন্ডে ডিস্কের জটিল ফাইল সিস্টেম এবং ব্যবহারকারীর কুয়েরির মাঝে একটি ইন্টারফেস (Interface) হিসেবে কাজ করে।

    ![Storage Management (স্টোরেজ ম্যানেজমেন্ট) - BOU CSE Notes](https://res.cloudinary.com/zopgecx6/image/upload/v1791458108/storage-management_welosz.jpg)

    ### ১. Storage Hierarchy (স্টোরেজের স্তরসমূহ)

    * **Primary Storage (প্রাথমিক স্টোরেজ):** যেমন RAM ও Cache Memory। এটি দ্রুতগতির হলেও সাময়িক (Volatile), অর্থাৎ বিদ্যুৎ চলে গেলে ভেতরের ডেটা মুছে যায়।
    * **Secondary Storage (মাধ্যমিক স্টোরেজ):** যেমন HDD (Hard Disk) এবং SSD (Solid State Drive)। এখানে ডাটাবেজের মূল ডেটা স্থায়ীভাবে (Non-volatile) সংরক্ষিত থাকে।
    * **Tertiary Storage (তৃতীয় পর্যায়ের স্টোরেজ):** যেমন Magnetic Tape বা Optical Disk। এগুলো ধীরগতির এবং সাধারণত বড় ডেটাবেজের ব্যাকআপ বা দীর্ঘমেয়াদী আর্কাইভ সংরক্ষণের জন্য ব্যবহৃত হয়।

    ---

    ### ২. Components of a Storage Manager (স্টোরেজ ম্যানেজারের উপাদানসমূহ)

    * **Authorization and Integrity Manager (অনুমোদন ও সততা ব্যবস্থাপক):**
    * কোনো ব্যবহারকারীর নির্দিষ্ট ডেটা দেখার বা পরিবর্তনের অধিকার (Authority) আছে কি না তা যাচাই করে।
    * ডাটাবেজের শর্তাবলি বা নিয়ম (Integrity Constraints) ভঙ্গ হচ্ছে কি না তা নিশ্চিত করে।


    * **Transaction Manager (লেনদেন ব্যবস্থাপক):**
    * কোনো লেনদেন বা ট্রানজ্যাকশন চলাকালীন সিস্টেম ক্র্যাশ করলেও ডেটা যেন ক্ষতিগ্রস্ত বা অসামঞ্জস্যপূর্ণ (Inconsistent) না হয় তা নিশ্চিত করে।
    * একসাথে একাধিক ব্যবহারকারীর কাজ করার প্রক্রিয়া (Concurrent Access) নিয়ন্ত্রণ করে।


    * **File Manager (ফাইল ব্যবস্থাপক):**
    * ডিস্কের স্টোরেজে জায়গা বরাদ্দ (Space Allocation) এবং কোন ডেটা স্ট্রাকচার ব্যবহার করে ডেটা জমা রাখা হবে তা পরিচালনা করে।


    * **Buffer Manager (বাফার ব্যবস্থাপক):**
    * ডিস্ক থেকে প্রয়োজনীয় ডেটা RAM-এর সাময়িক বাফার মেমোরিতে (Buffer Pool) এনে জমা রাখে, যাতে বারবার স্লো হার্ডডিস্কে পড়তে না হয় এবং সিস্টেমের পারফরম্যান্স বৃদ্ধি পায়।



    ---

    ### ৩. Physical Data Structures (ভৌত ডেটা কাঠামো)

    স্টোরেজ ম্যানেজার ডিস্কের ভেতরে মূলত ৩ ধরনের ফাইল সংরক্ষণ ও পরিচালনা করে:

    * **Data Files (ডেটা ফাইলসমূহ):** যেখানে টেবিলের ভেতরের মূল ডেটা বা রেকর্ডগুলো জমা থাকে।
    * **Data Dictionary (ডেটা ডিকশনারি / মেটাডেটা):** ডাটাবেজের গঠন ও স্কিমা সম্পর্কিত তথ্য (Metadata)—যেমন টেবিলের নাম, কলাম, ডেটা টাইপ এবং কনস্ট্রেইন্ট সম্পর্কিত বিবরণ।
    * **Indices (সূচকসমূহ):** বইয়ের সূচিপত্রের মতো একটি ডেটা স্ট্রাকচার, যা ব্যবহার করে ডিস্কের কোটি কোটি রেকর্ডের মধ্য থেকে কাঙ্ক্ষিত ডেটা দ্রুত খুঁজে বের করা যায়।