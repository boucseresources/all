# MIPS Assembly Quick Cheat Sheet


=== "Bangla"

    এখানে C থেকে **MIPS Assembly**-তে রূপান্তরের কুইক চিট শিট দেওয়া হলো:

    ## 1. MIPS রেজিস্টার পরিচিতি (MIPS Registers)

    MIPS-এ ৩২টি জেনারেল পারপাস রেজিস্টার থাকে। সবচেয়ে বেশি ব্যবহৃত রেজিস্টারগুলো হলো:

    * `$zero`: এর মান সবসময় `0` (কনস্ট্যান্ট)।
    * `$s0 - $s7`: সেভড রেজিস্টার (Saved Registers), সাধারণত C-এর ভেরিয়েবলগুলো এখানে রাখা হয়।
    * `$t0 - $t9`: টেম্পোরারি রেজিস্টার (Temporary Registers), হিসাব-নিকাশের মাঝখানের সাময়িক মান রাখার জন্য।
    * `$a0 - `$a3`: ফাংশনের আর্গুমেন্ট (Arguments) পাস করার জন্য।
    * `$v0 - $v1`: ফাংশনের রিটার্ন ভ্যালু (Return Value) রাখার জন্য।

    ---

    ## 2. ডাটা মুভমেন্ট এবং অ্যাসাইনমেন্ট (Variable Assignment)

    MIPS-এ সরাসরি মেমোরি-টু-মেমোরি অপারেশন করা যায় না। মান লোড (`lw`) বা স্টোর (`sw`) করতে হয়।

    | C Code | MIPS Assembly | ব্যাখ্যা |
    | --- | --- | --- |
    | `int x = 5;` | `li $s0, 5` | Load Immediate: `$s0` রেজিস্টারে (ধরি এটি `x`) সরাসরি `5` রাখা হলো। |
    | `x = y;` | `move $s0, $s1` | `$s1` (ধরি এটি `y`) এর মান `$s0` তে কপি করা হলো। |
    | `x = arr[2];` | `lw $s0, 8($s2)` | Load Word: অ্যারের বেস অ্যাড্রেস `$s2` হলে, ৩য় উপাদান (ইন্ডেক্স ২, তাই $2 \times 4 = 8$ বাইট অফসেট) থেকে মান লোড করা হলো। |

    ---

    ## 3. গাণিতিক অপারেশন (Arithmetic Operations)

    | C Code | MIPS Assembly | ব্যাখ্যা |
    | --- | --- | --- |
    | `x = a + b;` | `add $s0, $s1, $s2` | `$s0 = $s1 + $s2` |
    | `x = a - 5;` | `subi $s0, $s1, 5` | Add Immediate (বিয়োগের জন্য নেগেটিভ মান বা `subi` ব্যবহৃত হয়): `$s0 = $s1 - 5` |
    | `x = a * b;` | `mult $s1, $s2`<br>

    <br>`mflo $s0` | গুণফলের নিচের ৩২-বিট `lo` রেজিস্টারে থাকে, সেখান থেকে মান `$s0` তে আনা হলো। |

    ---

    ## 4. কন্ডিশনাল স্টেটメント (If-Else)

    MIPS-এ কন্ডিশনের জন্য `beq` (Branch if Equal) এবং `bne` (Branch if Not Equal) ব্যবহার করা হয়।

    ### C Code:

    ```c
    if (x == y) {
        a = 1;
    } else {
        a = 2;
    }

    ```

    ### MIPS Assembly:

    ```assembly
    # ধরি, x = $s0, y = $s1, a = $s2
        bne $s0, $s1, else_block    # যদি x != y হয়, তবে else_block এ যাও
        li $s2, 1                   # If block: a = 1
        j exit_block                # Else ব্লক স্কিপ করার জন্য জাম্প (Jump)
        
    else_block:
        li $s2, 2                   # Else block: a = 2

    exit_block:
        # কোডের পরবর্তী অংশ

    ```

    ---

    ## 5. লুপ (While Loop)

    ### C Code:

    ```c
    int i = 0;
    while (i < 10) {
        i++;
    }

    ```

    ### MIPS Assembly:

    ```assembly
    # ধরি, i = $s0
        li $s0, 0           # i = 0
        
    loop:
        slti $t0, $s0, 10   # যদি i < 10 হয়, তবে $t0 = 1, নয়তো $t0 = 0 (Set Less Than Immediate)
        beq $t0, $zero, exit # যদি $t0 == 0 হয় (অর্থাৎ i >= 10), তবে লুপ থেকে বের হয়ে যাও
        
        addi $s0, $s0, 1    # i++
        j loop              # আবার লুপের শুরুতে ফিরে যাও
        
    exit:
        # লুপের পরের কোড

    ```

    ---

    ## 6. ফাংশন কল (Function Call)

    MIPS-এ ফাংশন কল করার জন্য `jal` (Jump and Link) এবং রিটার্ন করার জন্য `jr $ra` (Jump Register) ব্যবহার করা হয়।

    ### C Code:

    ```c
    int main() {
        int x = fun(5);
    }

    ```

    ### MIPS Assembly:

    ```assembly
    main:
        li $a0, 5           # আর্গুমেন্ট রেজিস্টার $a0 তে 5 রাখা হলো
        jal fun             # fun ফাংশন কল করা হলো ($ra তে রিটার্ন অ্যাড্রেস সেভ হয়)
        move $s0, $v0       # ফাংশনের রিটার্ন ভ্যালু $v0 থেকে $s0 (x) এ রাখা হলো
        
        # প্রোগ্রাম শেষ করার জন্য সিস্টেম কল
        li $v0, 10
        syscall

    fun:
        # ধরি ফাংশনটি ইনপুটের সাথে ২ যোগ করে রিটার্ন করে
        addi $v0, $a0, 2    # $v0 = $a0 + 2 (রিটার্ন ভ্যালু $v0 তে রাখা হলো)
        jr $ra              # মেইন ফাংশনে ফিরে যাও (Jump Register)

    ```

    ---

    > 💡 **MIPS টিপ:** MIPS-এ প্রতিটি নির্দেশনার (Instruction) সাইজ নির্দিষ্ট (৪ বাইট বা ৩২-বিট)। তাই মেমোরি বা অ্যারে নিয়ে কাজ করার সময় অফসেট সবসময় ৪ এর গুণিতক (যেমন: `0($s0)`, `4($s0)`, `8($s0)`) হিসেবে বাড়ে।

=== "English"

    ## 1. MIPS Register Reference

    MIPS has 32 general-purpose registers. The most frequently used ones are:

    * **`$zero`:** Always holds the constant value `0`.
    * **`$s0 - `$s7`:** Saved registers (used to hold C variables).
    * **`$t0 - `$t9`:** Temporary registers (used for intermediate calculations).
    * **`$a0 - `$a3`:** Argument registers (used to pass arguments to functions).
    * **`$v0 - `$v1`:** Value registers (used to return values from functions).

    ---

    ## 2. Data Movement & Assignment

    MIPS cannot perform direct memory-to-memory operations. Data must be loaded (`lw`) into registers or stored (`sw`) back into memory.

    | C Code | MIPS Assembly | Explanation |
    | --- | --- | --- |
    | `int x = 5;` | `li $s0, 5` | **Load Immediate:** Loads the constant `5` directly into `$s0` (assuming `$s0` is `x`). |
    | `x = y;` | `move $s0, $s1` | Copies the value of `$s1` (assuming `y`) into `$s0`. |
    | `x = arr[2];` | `lw $s0, 8($s2)` | **Load Word:** If `$s2` holds the base address of the array, index 2 is at offset 8 bytes ($2 \times 4$ bytes per integer). |

    ---

    ## 3. Arithmetic Operations

    | C Code | MIPS Assembly | Explanation |
    | --- | --- | --- |
    | `x = a + b;` | `add $s0, $s1, $s2` | `$s0 = $s1 + $s2` |
    | `x = a - 5;` | `addi $s0, $s1, -5` | **Add Immediate:** Subtraction is done by adding a negative integer: `$s0 = $s1 + (-5)` |
    | `x = a * b;` | `mult $s1, $s2`<br>

    <br>`mflo $s0` | Multiplies `$s1` and `$s2`. The lower 32 bits of the product go to the `lo` register, which is then moved to `$s0`. |

    ---

    ## 4. Conditional Statements (If-Else)

    MIPS uses branches like `beq` (Branch if Equal) and `bne` (Branch if Not Equal) to implement conditions.

    ### C Code:

    ```c
    if (x == y) {
        a = 1;
    } else {
        a = 2;
    }

    ```

    ### MIPS Assembly:

    ```assembly
    # Assuming: x = $s0, y = $s1, a = $s2
        bne $s0, $s1, else_block    # If x != y, jump to else_block
        li $s2, 1                   # If block: a = 1
        j exit_block                # Unconditional Jump to skip the else block
        
    else_block:
        li $s2, 2                   # Else block: a = 2

    exit_block:
        # Next lines of code

    ```

    ---

    ## 5. Loops (While Loop)

    ### C Code:

    ```c
    int i = 0;
    while (i < 10) {
        i++;
    }

    ```

    ### MIPS Assembly:

    ```assembly
    # Assuming: i = $s0
        li $s0, 0           # i = 0
        
    loop:
        slti $t0, $s0, 10   # Set Less Than Immediate: If i < 10, then $t0 = 1, else $t0 = 0
        beq $t0, $zero, exit # If $t0 == 0 (meaning i >= 10), break out of the loop
        
        addi $s0, $s0, 1    # i++
        j loop              # Jump back to the start of the loop
        
    exit:
        # Code after loop

    ```

    ---

    ## 6. Function Calls

    MIPS uses `jal` (Jump and Link) to call a function and `jr $ra` (Jump Register) to return back to the caller.

    ### C Code:

    ```c
    int main() {
        int x = fun(5);
    }

    ```

    ### MIPS Assembly:

    ```assembly
    main:
        li $a0, 5           # Pass 5 as an argument to $a0
        jal fun             # Jump and Link to 'fun' (saves return address in $ra)
        move $s0, $v0       # Copy return value from $v0 to $s0 (x)
        
        # Exit program via system call
        li $v0, 10
        syscall

    fun:
        # Let's assume the function adds 2 to the input and returns it
        addi $v0, $a0, 2    # $v0 = $a0 + 2 (Result is placed in return register $v0)
        jr $ra              # Jump back to main using the address in $ra

    ```

    ---

    > 💡 **MIPS Pointer Pointer:** Every instruction in MIPS is exactly 4 bytes (32-bit). When dealing with memory byte-addressing (like arrays), your offsets must always increment by multiples of 4 (e.g., `0($s0)`, `4($s0)`, `8($s0)`).