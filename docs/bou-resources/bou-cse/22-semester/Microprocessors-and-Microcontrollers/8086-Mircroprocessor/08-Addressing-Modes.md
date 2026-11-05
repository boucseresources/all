!!! info "🧠 The 10-Mode Mnemonic"

    If Dhaka Is Really Raining, I Rather Always Stay Bed!
    (Meaningful & Relatable: If it's pouring rain outside in Dhaka's traffic, the best decision is to just stay in bed!)

    📋 The 10-Mode Breakdown

    • 🌧️ If → Immediate Mode
    • 🚗 Dhaka → Direct Mode
    • 🌧️ Is → Indirect Mode
    • 🚦 Really → Register Mode
    • ⛈️ Raining, → Register Indirect Mode
    • 🛌 I → Indexed Mode
    • 😴 Rather → Relative Mode
    • 🛌 Always → Auto-increment/decrement Mode
    • 💤 Stay → Stack Mode
    • 🛏️ Bed! → Base Register Mode


    The Complete 10-Mode Breakdown

    1. I → Immediate: The operand value is directly hardcoded into the instruction (e.g., MOV R1, #5).
    2. D → Direct (Absolute): The instruction gives the exact memory address of the data.
    3. I → Indirect: The instruction points to a memory address, which holds another address where the data is actually stored.
    4. R → Register: The operand is stored inside a CPU register rather than memory.
    5. R → Register Indirect: A CPU register holds the memory address of the data.
    6. I → Indexed: Calculates the final address by adding a constant offset to an index register.
    7. R → Relative (PC-Relative): The address is calculated as an offset relative to the Program Counter (used for jumps/branches). 

    ✨ The 3 Added Modes:
    8. A → Auto-Increment / Auto-Decrement: Similar to register indirect, but automatically changes the register pointer value after (or before) accessing the memory—great for stepping through arrays.
    9. S → Stack: The operand is implicitly located at the top of the system stack (e.g., PUSH and POP operations).
    10. B → Base Register (Implied/Displacement): The address is calculated by adding a displacement to a base register, allowing programs to relocate smoothly in memory. 

    Why the difference?

    Different CPU architectures (like RISC vs. CISC) implement varying numbers of modes. While RISC architectures use fewer, simpler modes, comprehensive Computer Organization courses list all 10 unique configurations to cover everything from basic constants to complex data structure lookups.
    
    ---

    ### Addressing Mode: ১০টির Mnemonic

    ## ১০টি Mode (সিরিয়াল)

    1. **I**mplied
    2. **I**mmediate
    3. **R**egister
    4. **R**egister Indirect
    5. **D**irect
    6. **I**ndirect
    7. **R**elative
    8. **I**ndexed
    9. **B**ase Register
    10. **A**uto Increment/Decrement

    ## Mnemonic (প্রথম অক্ষর: I I R R D I R I B A)

    > **"I Imagine Rabbits Run Down In Rainy Isolated Bushes, Always"**

    | অক্ষর | Mode |
    |---|---|
    | I | Implied |
    | Imagine | Immediate |
    | Rabbits | Register |
    | Run | Register indirect |
    | Down | Direct |
    | In | Indirect |
    | Rainy | Relative |
    | Isolated | Indexed |
    | Bushes | Base register |
    | Always | Auto inc/dec |

    ## বাংলায় মনে রাখার সহজ উপায়: "Operand কোথায় আছে?"

    **ধাপ ১: Operand instruction-এর ভেতরেই (Memory লাগে না)**
    - **Implied:** Operand বলার দরকারই নেই (যেমন `CLA`, `HLT`)
    - **Immediate:** Operand নিজেই instruction-এ আছে (`MOV A, 5`)

    **ধাপ ২: Operand Register-এ**
    - **Register:** Register-এ সরাসরি ডাটা (`MOV A, B`)
    - **Register Indirect:** Register-এ ডাটা নেই, **ডাটার address** আছে (`MOV A, [BX]`)

    **ধাপ ৩: Operand Memory-তে**
    - **Direct:** Instruction-এ memory address দেওয়া আছে (`LDA 2000H`)
    - **Indirect:** Address-এর ভেতরে আরেকটা address আছে (দুইবার memory যেতে হয়)

    **ধাপ ৪: Address হিসাব করে বের করতে হয়**
    - **Relative:** `PC + offset` (branch/jump-এ ব্যবহার হয়)
    - **Indexed:** `Index register + address` (array-র জন্য)
    - **Base Register:** `Base register + offset` (relocation/segment-এর জন্য)
    - **Auto inc/dec:** Access-এর আগে/পরে register নিজে +1 বা -1 হয় (stack, loop)

    ## মনে রাখার ট্রিক

    - **Indexed বনাম Base:** *Index* = array-র **index** বদলায়, address fixed। *Base* = **base** বদলায়, offset fixed।
    - **Direct বনাম Indirect:** Direct = সোজা যাও। Indirect = পথে আরেকজনকে জিজ্ঞেস করে যাও (extra memory access)।
    - **Relative:** সবসময় **PC**-এর সাথে সম্পর্কিত, "relative" মানে আত্মীয়, PC-র আত্মীয়।

    বইভেদে মোড সংখ্যা ৯ বা ১০ হতে পারে (কিছু বই Auto increment ও Auto decrement আলাদা ধরে, কিছু বই Implied ও Immediate-কে একসাথে রাখে)। তোমার বইয়ে কোন কোনটা আছে বললে মিলিয়ে mnemonic ঠিক করে দেব।