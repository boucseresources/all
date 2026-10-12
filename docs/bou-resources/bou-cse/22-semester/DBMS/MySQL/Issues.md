


MySQL does not have a direct RENAME DATABASE command. To rename a database, you must create a new database, transfer the data from the old database to the new one, and then delete the old database.


??? warning "Combined query error in table creatinon"

    এই table এ ভুলে আমি backtick use করেছি। আর এভাবে  combined query table creatino এ ব্যবহার করা যাবে না। 

    ```sql
        CREATE TABLE students (
            std_id INT PRIMARY KEY,
            student_name VARCHAR(100),
            department VARCHAR(10),
            city VARCHAR(20),
            cgpa FLOAT
        )
        VALUES 
        (101, `Aisha`,	`CSE`, 	21, 	`Dhaka`,	3.75 )

    ```


??? warning "Change a Table Column and change table order"


    সহজ কথায়, এটা হলো **সিনট্যাক্স (Syntax)** বা নিয়ম। আপনি যখন কোনো টেবিলে নতুন একটা কলাম নিজের ইচ্ছামতো জায়গায় বসাতে চান, তখন কোডটা কীভাবে সাজাতে হবে—এটা সেটার একটা ফরম্যাট।

    ব্র্যাকেট `[ ]` এবং পাইপ `|` চিহ্নের মানে হলো:

    * **`[ ]` (Square brackets):** এগুলো অপশনাল। চাইলে দিতে পারেন, না দিলেও চলবে।
    * **`FIRST | AFTER existing_column_name`:** যেকোনো **একটি** বেছে নিতে হবে (`|` মানে "বা/অথবা")।
    * `FIRST` দিলে কলামটা একদম শুরুতে যাবে।
    * `AFTER existing_column_name` দিলে নির্দিষ্ট কলামের পরে বসবে।



    ---

    ### বাস্তব উদাহরণ দিয়ে দেখুন:

    ধরি, আপনার `users` নামের একটি টেবিল আছে যার কলামগুলো হলো:

    1. `id`
    2. `name`
    3. `email`

    #### ১. একদম শুরুতে নতুন কলাম বসাতে চাইলে (`FIRST`):

    ```sql
    ALTER TABLE users
    ADD COLUMN serial_no INT FIRST;

    ```

    *ফলাফল:* `serial_no` চলে আসবে সবার আগে (১ নম্বরে)।

    ---

    #### ২. নির্দিষ্ট কোনো কলামের পরে বসাতে চাইলে (`AFTER`):

    ধরুন, `name`-এর ঠিক পরে আপনি `phone` কলাম যোগ করতে চান:

    ```sql
    ALTER TABLE users
    ADD COLUMN phone VARCHAR(15) AFTER name;

    ```

    *ফলাফল:* কলামগুলোর ক্রম হবে: `id` ➔ `name` ➔ **`phone`** ➔ `email`।

??? warning ""
??? warning ""



