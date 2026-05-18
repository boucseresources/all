# CSE2134 — Computer Architecture and Organizations

**Bangladesh Open University — School of Science and Technology**
**B. Sc in Computer Science and Engineering Program — 2nd Year 1st Semester**

> **General instruction (all terms):** Answer any 5 (five) questions. The figures in the right margin indicate the full marks. All portions of each question must be answered sequentially.
> **Time:** 3 hours | **Total Marks:** 5×14 = 70

---

## 151 Term (Jan – Jun 2015)

**1.**
(a) What do you understand by Instruction Set Architecture (ISA)? Explain the seven dimension of ISA.   `6`
(b) Why embedded processor market is higher than the others?   `3`
(c) Explain the Amdahl's law. What is the significance of this law?   `3`
(d) List the registers of x86 microprocessor.   `2`

**2.**
(a) Explain the basic MIPS implementation of instruction set.   `5`
(b) Write down MIPS assembly code for following C code
   F = (g - h) + (i - j).   `6`
(c) What is data hazard? How do you overcome it? What are its side effects?   `3`

**3.**
(a) What do you understand by SISD, MIMD, SIMD and SPMD?   `4`
(b) What do you understand by microprocessor performance? Explain CPI with example.   `6`
(c) Explain different types of multithreading.   `4`

**4.**
(a) Write down the RTL (Register Transfer Logic) for adds, addi, load store and beq.   `4`
(b) Briefly explain the instruction fetch unit.   `3`
(c) Explain the data path of branch instruction.   `3`
(d) Multiply the following pair of signed 2's complement numbers A=010111, B=101100.   `4`

**5.**
(a) Explain the single cycle data path with control.   `7`
(b) Explain in detail Flynn's classification of parallel hardware.   `4`
(c) How pipeline can increase performance? Explain with example.   `3`

**6.**
(a) What do you mean by cache hit rate and miss rate?   `4`
(b) Write the overflow conditions for addition and subtraction.   `4`
(c) Discuss about different mapping technique in detail.   `6`

**7.**
(a) Define the following addressing modes in detail with diagram.
   i) Immediate addressing; ii) Register addressing; iii) Base or displacement addressing and iv) PC relative addressing.   `8`
(b) Give a block diagram for a 250ᵏ × 16 memory module using 64ᵏ × 1.   `4`
(c) Draw a block diagram of ALU.   `2`

---

## 161 Term (Jan – Jun 2016)

**1.**
(a) What are the classes of computer architecture? Explain with their characteristics.   `2+6`
(b) Explain the layers of computer system architecture.   `6`

**2.**
(a) What do you mean by instruction set architecture? Explain MIPS instruction set format.   `2+6`
(b) Differentiate between RISC and CISC architecture.   `3`
(c) What is data hazard? How do you overcome it? What are its side effects?   `3`

**3.**
(a) Explain MIPS addressing modes with example.   `9`
(b) Write down the MIPS assembly code of the following C code
   f = (g+h) − (i+j);   `5`

**4.**
(a) Explain the multiplication algorithm and its hardware.   `8`
(b) What do you mean by CPI and IPC?   `3+3`

**5.**
(a) How the performance of a computer is measured? Explain with example.   `5`
(b) Consider three different processors P1, P2, and P3 executing the same instruction set. P1 has a 3 GHz clock rate and a CPI of 1.5. P2 has a 2.5 GHz clock rate and a CPI of 1.0. P3 has a 4.0 GHz clock rate and has a CPI of 2.2.   `6`
   i. Which processor has the highest performance expressed in instructions per second?
   ii. If the processors each execute a program in 10 seconds, find the number of cycles and the number of instructions.
   iii. We are trying to reduce the execution time by 30% but this leads to an increase of 20% in the CPI. What clock rate should we have to get this time reduction?
(c) Explain Amdahl's Law.   `3`

**6.**
(a) Explain in detail Flynn's classification of parallel hardware.   `4`
(b) How can you build a data path?   `4`
(c) Discuss about control implementation scheme.   `6`

**7.**
(a) Explain the register transfer logic(RTL) for the following instructions:
   addu, addi, load, store and beq.   `5`
(b) What do you understand by shared memory multiprocessor?   `4`
(c) Draw a block diagram for a 250k × 16 memory module using 64k × 1.   `5`

---

## 171 Term (2nd Year 1st Semester) Final Examination

**1.**
(a) What are the classes of computer?   `4`
(b) What are the layers of computer architecture? Explain in brief.   `4`
(c) Define throughput and response time.   `2`
(d) Suppose we have two implementations of the same instruction set architecture. Computer A has a clock cycle time of 250 ps and a CPI of 2.0 for some program, and computer B has a clock cycle time of 500 ps and a CPI of 1.2 for the same program. Which computer is faster for this program and by how much?   `4`

**2.**
(a) How the performance of microprocessor is measured? Explain with example.   `3`
(b) The execution time of the program after making the improvement is given by Amdahl's law. Explain the law. Give an example.   `3`
(c) How do the computers can convert from a High-Level Language to the Language of Hardware?   `5`
(d) This segment of a C program contains the five variables a, b, c, d, and e.
   `a = b + c;`
   `d = a − e;`
   Show the MIPS code produced by a compiler.   `3`

**3.**
(a) Briefly discuss about four design principle of a computer.
(b) Explain different instruction format in MIPS machine language.
(c) Write down the assembly code for the following code segment:   `4`
   `f = (g + h) − (i + j);`
   `h = g + A[8];`

**4.**
(a) Show the algorithm and hardware diagram for multiplication in a processor.   `5`
(b) Divide (1100)₂ by (0101)₂ using division algorithm.   `5`
(c) Show the IEEE 754 binary representation of the number −0.75ₜₑₙ in single and double precision.   `4`

**5.**
(a) Design a processor architecture which can perform the following operations: load word (lw), store word (sw), branch equal (beq), and the arithmetic-logical instructions add, sub, AND, OR, and set on less than.   `10`
(b) What is cache memory? Define cache-hit, cache-miss and miss-penalty.   `4`

**6.**
(a) Write short note on clocking methodology.   `3`
(b) What do you understand by pipelining? Why pipelining is important? Explain.   `2+3`
(c) What is pipeline hazard? Discuss about different pipelining hazards in brief. Also explain how to overcome different pipeline hazards.   `1+3+2`

**7.**
a) Give a block diagram for a 512k × 32 memory module using 128k × 8.   `6`
b) Why mapping function is needed when we use cache memory in the computer system? Explain three different mapping functions.   `3+5`

---

## 181 Term (2nd Year 1st Semester) Final Examination

**1.**
(a) What are the classes of computer? Explain briefly.   `4`
(b) Briefly Discuss about Moore's Law and Amdahl's Law.   `2+2`
(c) Draw the instruction cycle state diagram. Explain in brief.   `4`
(d) Differentiate between RISC and CISC architecture.   `2`

**2.**
(a) Explain the steps of compilation process of a C program.   `5`
(b) Explain the following assembly code of
   `if (i==j) f = g+h;`
   `else f = g-h;`   `6`
(c) Discuss the layer of computer system architecture.   `3`

**3.**
(a) Illustrate the MIPS addressing modes.   `4`
(b) Explain the implementation of jump instruction in MIPS.   `6`
(c) Write down the MIPS assembly code for the following:
   `A[12] = h + A[8];`   `4`

**4.**
(a) Explain multiplication algorithm with an example.   `6`
(b) How do you use the adder circuit to subtract two numbers? Explain with example.   `4`
(c) Explain the RTL implementation of add, subtract, load and store instruction.   `4`

**5.**
(a) Suppose 1.5GHz machine A executes 5000 instructions in 6s for a program P. Suppose 3GHz machine B executes 4000 instructions in 3s for the same program P. What is the CPI for each machine? If a second program Q has the same CPI as P and takes 3s on machine A and 4s on machine B, what is the IC of Q on each machine?   `6`
(b) What is physical address and logical address? Define cache miss, hit rate, miss rate.   `2+3`
(c) What is temporal and spatial locality?   `3`

**6.**
(a) What do you mean by structural hazard and control hazard?   `4`
(b) Explain the write-through and write back cache handling policy.   `4`
(c) How does the pipeline increase the performance of processor? Explain.   `6`

**7.**
a) What do you mean by virtual memory? Explain with example.   `4`
b) Explain three different mapping functions.   `5`
(c) Give short notes on memory protection, IPC and CPI?   `5`

---

## 201 Term (2nd Year 1st Semester) Final Examination

**1.**
(a) Describe the execution steps for an instruction.   `2`
(b) Write the steps needed to execute the below instruction:
   *Add R4, R2, R3*   `4`
(c) List and briefly define the main structural components of a computer.   `6`
(d) Explain Moore's law.   `2`

**2.**
(a) How a computer data is represented in Big-Endian and Little-Endian format? Explain with an example.   `4`
(b) How an instruction is represented in assembly language? Evaluate the instruction using two address format: (A + B) * (C + D).   `2+2`
(c) Explain the register transfer notation for memory, processor and register with example.   `6`

**3.**
(a) Define memory hierarchy. As one goes down the hierarchy, what happens about   `4`
   (i) Cost per bit;
   (ii) Capacity;
   (iii) Access time;
   (iv) Frequency of access of the memory by the processor.
(b) Explain with diagram the organization of a 1K × 1 memory chip.   `6`
(c) Describe the read and write operation from SRAM.   `4`

**4.**
(a) Define memory latency and bandwidth. What is the special feature of DDR SDRAM?   `2+2`
(b) Explain interrupt with its hardware circuit diagram. Draw the block diagram of multiple priority interrupt unit.   `4+2`
(c) Explain Direct Memory Access (DMA) controller with necessity diagram.   `4`

**5.**
(a) Suppose, main memory of a computer contains 32 blocks (0-31) and cache memory contains 8 blocks (0-7). Where does a block 15 go in the cache if direct mapped and set associative mapped are used?   `6`
(b) Explain the direct-mapped and associative-mapped cache.   `4`
(c) Briefly describe the memory to processor connection with necessary diagram.   `4`

**6.**
(a) Explain add, load and store operation using the datapath.   `6`
(b) Write the difference between hardware control and microprogrammed control.   `3`
(c) Briefly explain the internal organisation of bit cells in memory-chips with a diagram.   `5`

**7.**
(a) What are the advantages and shortcomings of hardware controlled processor?   `3`
(b) Define memory access delay issue during pipelining. How can we solve the memory access delay issue?   `2+4`
(c) Consider the instruction Add (R3), R1. Write the control sequence of the instruction.   `5`

---

*End of CSE2134 Computer Architecture and Organizations compilation.*
