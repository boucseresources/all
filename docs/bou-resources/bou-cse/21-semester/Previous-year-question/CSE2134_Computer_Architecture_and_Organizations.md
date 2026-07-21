# CSE2134 - Computer Architecture and Organizations

## Fundamentals of a Computer System

### Term 151

- **Q1(a) [6]:** What do you understand by Instruction Set Architecture (ISA)? Explain the seven dimension of ISA.
- **Q1(b) [3]:** Why embedded processor market is higher than the others?
- **Q1(c) [3]:** Explain the Amdahl's law. What is the significance of this law?
- **Q1(d) [2]:** List the registers of x86 microprocessor.
- **Q3(a) [4]:** What do you understand by SISD, MIMD, SIMD and SPMD?
- **Q3(b) [6]:** What do you understand by microprocessor performance? Explain CPI with example.
- **Q5(b) [4]:** Explain in detail Flynn's classification of parallel hardware.

### Term 161

- **Q1(a) [2+6]:** What are the classes of computer architecture? Explain with their characteristics.
- **Q1(b) [6]:** Explain the layers of computer system architecture.
- **Q2(a) [2+6]:** What do you mean by instruction set architecture? Explain MIPS instruction set format.
- **Q2(b) [3]:** Differentiate between RISC and CISC architecture.
- **Q4(b) [3+3]:** What do you mean by CPI and IPC?
- **Q5(a) [5]:** How the performance of a computer is measured? Explain with example.
- **Q5(b) [6]:** Consider three different processors P1, P2, and P3 executing the same instruction set. P1 has a 3 GHz clock rate and a CPI of 1.5. P2 has a 2.5 GHz clock rate and a CPI of 1.0. P3 has a 4.0 GHz clock rate and has a CPI of 2.2.
  1. Which processor has the highest performance expressed in instructions per second?
  2. If the processors each execute a program in 10 seconds, find the number of cycles and the number of instructions.
  3. We are trying to reduce the execution time by 30% but this leads to an increase of 20% in the CPI. What clock rate should we have to get this time reduction?
- **Q5(c) [3]:** Explain Amdahl's Law.
- **Q6(a) [6]:** Explain in detail Flynn's classification of parallel hardware.
- **Q7(b) [3]:** What do you understand by shared memory multiprocessor?

### Term 171

- **Q1(a) [4]:** What are the classes of computer?
- **Q1(b) [4]:** What are the layers of computer architecture? Explain in brief.
- **Q1(c) [2]:** Define throughput and response time.
- **Q1(d) [4]:** Suppose we have two implementations of the same instruction set architecture. Computer A has a clock cycle time of 250 ps and a CPI of 2.0 for some program, and computer B has a clock cycle time of 500 ps and a CPI of 1.2 for the same program. Which computer is faster for this program and by how much?
- **Q2(a) [3]:** How the performance of microprocessor is measured? Explain with example.
- **Q2(b) [3]:** The execution time of the program after making the improvement is given by Amdahl's law. Explain the law. Give an example.
- **Q2(c) [5]:** How do the computers can convert from a High-Level Language to the Language of Hardware?
- **Q3(a) [4]:** Briefly discuss about four design principle of a computer.

### Term 181

- **Q1(a) [4]:** What are the classes of computer? Explain briefly.
- **Q1(b) [2+2]:** Briefly Discuss about Moore's Law and Amdahl's Law.
- **Q1(d) [2]:** Differentiate between RISC and CISC architecture.
- **Q2(c) [3]:** Discuss the layer of computer system architecture.
- **Q5(a) [6]:** Suppose 1.5GHz machine A executes 5000 instructions in 6s for a program P. Suppose 3GHz machine B executes 4000 instructions in 3s for the same program P. What is the CPI for each machine? If a second program Q has the same CPI as P and takes 3s on machine A and 4s on machine B, what is the IC of Q on each machine?
- **Q7(c) [5]:** Give short notes on memory protection, IPC and CPI?

### Term 191

- **Q1(a) [5]:** What are the class of computer based on usage and architecture? Explain briefly.
- **Q1(c) [1+4]:** Define interrupt. How do you distinguish between computer architecture and computer organization?
- **Q2(b) [6]:** How the performance of a microprocessor is measured? Explain with example.
- **Q3(c) [4]:** What are the differences between RISC and CISC architecture?
- **Q4(a) [5]:** Suppose a program runs in 10 seconds in computer A, which has 4 GHz clock. We are trying to design a new computer B, in which the same program runs in 6 seconds. Computer B requires 1.2 times the clock cycles of A requires. What is the clock rate of machine B?
- **Q5(a) [8]:** A benchmark program is run on a 40 MHz processor. The executed program consists of 100,000 instruction executions, with the following instruction mix and clock cycle count:

  | Instruction Type | Instruction Count | Cycle per Instruction |
  |---|---:|---:|
  | Integer arithmetic | 45000 | 1 |
  | Data transfer | 32000 | 2 |
  | Floating point | 15000 | 2 |
  | Control transfer | 8000 | 2 |

  Determine the effective CPI, MIPS rate for this program.

### Term 201

- **Q1(c) [6]:** List and briefly define the main structural components of a computer.
- **Q1(d) [2]:** Explain Moore's law.
- **Q2(a) [4]:** How a computer data is represented in Big-Endian and Little-Endian format? Explain with an example.
- **Q2(b) [2+2]:** How an instruction is represented in assembly language? Evaluate the instruction using two address format: $(A+B)*(C+D)$.

### Term 211

- **Q1(a) [4]:** Discuss the basic functional units of a computer.
- **Q1(b) [3]:** Briefly discuss the bus structure of processor.
- **Q2(a) [3]:** What are the characteristics of RISC processor?
- **Q7(c) [1+2]:** What is an instruction? How an instruction is represented by computer?
- **Q7(d) [6]:** Explain various addressing modes.

## Basic Processing Unit

### Term 151

- **Q2(a) [5]:** Explain the basic MIPS implementation of instruction set.
- **Q2(b) [6]:** Write down MIPS assembly code for following C code: `f = (g - h) + (i - j)`.
- **Q2(c) [3]:** What is data hazard? How do you overcome it? What are its side effects?
- **Q4(a) [4]:** Write down the RTL (Register Transfer Logic) for `adda`, `addi`, load, store and `beq`.
- **Q4(b) [3]:** Briefly explain the instruction fetch unit.
- **Q4(c) [3]:** Explain the data path of branch instruction.
- **Q5(a) [7]:** Explain the single cycle data path with control.
- **Q5(c) [3]:** How pipeline can increase performance? Explain with example.

### Term 161

- **Q2(c) [3]:** What is data hazard? How do you overcome it? What are its side effects?
- **Q3(a) [9]:** Explain MIPS addressing modes with example.
- **Q3(b) [5]:** Write down the MIPS assembly code of the following C code: `f = (g+h) - (i+j);`
- **Q6(b) [4]:** How can you build a data path?
- **Q6(c) [4]:** Discuss about control implementation scheme.
- **Q7(a) [6]:** Explain the register transfer logic (RTL) for the following instructions: `addu`, `addi`, load, store and `beq`.

### Term 171

- **Q2(d) [3]:** This segment of a C program contains the five variables a, b, c, d, and e.

  ```c
  a = b + c;
  d = a - e;
  ```

  Show the MIPS code produced by a compiler.
- **Q3(b) [6]:** Explain different instruction format in MIPS machine language.
- **Q3(c) [4]:** Write down the assembly code for the following code segment:

  ```c
  f = (g + h) - (i + j);
  h = g + A[8];
  ```
- **Q5(a) [10]:** Design a processor architecture which can perform the following operations: load word (`lw`), store word (`sw`), branch equal (`beq`), and the arithmetic-logical instructions add, sub, AND, OR, and set on less than.
- **Q6(a) [3]:** Write short note on clocking methodology.
- **Q6(b) [2+3]:** What do you understand by pipelining? Why pipelining is important? Explain.
- **Q6(c) [1+3+2]:** What is pipeline hazard? Discuss about different pipelining hazards in brief. Also explain how to overcome different pipeline hazards.

### Term 181

- **Q1(c) [4]:** Draw the instruction cycle state diagram. Explain in brief.
- **Q2(a) [5]:** Explain the steps of compilation process of a C program.
- **Q2(b) [6]:** Explain the following assembly code of

  ```c
  if (i == j) f = g + h;
  else f = g - h;
  ```
- **Q3(a) [4]:** Illustrate the MIPS addressing modes.
- **Q3(b) [6]:** Explain the implementation of jump instruction in MIPS.
- **Q3(c) [4]:** Write down the MIPS assembly code for the following: `A[12] = h + A[8];`
- **Q4(c) [4]:** Explain the RTL implementation of add, subtract, load and store instruction.
- **Q6(a) [4]:** What do you mean by structural hazard and control hazard?
- **Q6(c) [6]:** How does the pipeline increase the performance of processor? Explain.

### Term 191

- **Q2(a) [3]:** What is a basic block? Explain with example.
- **Q2(c) [5]:** Translate the following C code to MIPS assembly code:

  ```c
  if (i == j)
      i++;
  else
      j--;
  j += i;
  ```
- **Q3(a) [5]:** Describe different types instruction format of MIPS architecture.
- **Q3(b) [5]:** Explain the single cycle datapath for MIPS implementation.
- **Q6(a) [4]:** How data and control hazard is removed? Explain.
- **Q6(b) [4]:** What is branch prediction? How branch target buffer can be used for branch prediction?

### Term 201

- **Q1(a) [2]:** Describe the execution steps for an instruction.
- **Q1(b) [4]:** Write the steps needed to execute the below instruction: `Add R4, R2, R3`.
- **Q2(c) [6]:** Explain the register transfer notation for memory, processor and register with example.
- **Q6(a) [6]:** Explain add, load and store operation using the datapath.
- **Q6(b) [3]:** Write the difference between hardware control and microprogrammed control.
- **Q7(a) [3]:** What are the advantages and shortcomings of hardware controlled processor?
- **Q7(b) [2+4]:** Define memory access delay issue during pipelining. How can we solve the memory access delay issue?
- **Q7(c) [5]:** Consider the instruction `Add (R3), R1`. Write the control sequence of the instruction.

### Term 211

- **Q1(c) [4]:** Consider the below instruction: `Load R2, LOC`. Write the execution step of the above machine instruction.
- **Q2(b) [3]:** Draw the three-bus CISC-style processor organization.
- **Q2(c) [5]:** Briefly explain the micro-programmed control unit for the branch instruction.
- **Q2(d) [3]:** Write the execution steps with its architecture to complete the below instruction: `Add (R3), R1`.
- **Q3(a) [5]:** Explain with block diagram, the data path of a processor.
- **Q3(b) [3]:** What are the control signals for the data path?
- **Q4(a) [3]:** Explain the pipelined operation in ideal case.
- **Q4(b) [4]:** What are the issues of pipelined operation?
- **Q4(c) [3]:** Explain with example the use of operand forwarding to resolve data dependency issue.
- **Q4(d) [4]:** Show the modification in data path to support data forwarding.

## Advanced Concepts in ILP and Current Trends

### Term 151

- **Q3(c) [4]:** Explain different types of multithreading.

### Term 211

- **Q3(c) [6]:** Briefly explain about dynamic scheduler with block diagram.

## Arithmetic for Computers

### Term 151

- **Q4(d) [4]:** Multiply the following pair of signed 2's complement numbers: $A = 010111$, $B = 101100$.
- **Q6(b) [4]:** Write the overflow conditions for addition and subtraction.
- **Q7(c) [2]:** Draw a block diagram of ALU.

### Term 161

- **Q4(a) [8]:** Explain the multiplication algorithm and its hardware.

### Term 171

- **Q4(a) [5]:** Show the algorithm and hardware diagram for multiplication in a processor.
- **Q4(b) [5]:** Divide $(1100)_2$ by $(0101)_2$ using division algorithm.
- **Q4(c) [4]:** Show the IEEE 754 binary representation of the number $-0.75_{ten}$ in single and double precision.

### Term 181

- **Q4(a) [6]:** Explain multiplication algorithm with an example.
- **Q4(b) [4]:** How do you use the adder circuit to subtract two numbers? Explain with example.

### Term 191

- **Q1(b) [4]:** How to deal overflow for arithmetic operation?
- **Q4(b) [5]:** Show the steps to multiply $(00111)_b$ with $(00011)_b$ units multiplication algorithm.
- **Q4(c) [4]:** What are the representations of IEEE 754 for single precision and double precision floating point?

### Term 211

- **Q5(a) [6]:** Design a 4-bit binary multiplier with details implementation.
- **Q5(b) [8]:** Briefly analysis the booth multiplication algorithm for the given input: $16 \times -2$.

## Memory and I/O

### Term 151

- **Q6(a) [4]:** What do you mean by cache hit rate and miss rate?
- **Q6(c) [6]:** Discuss about different mapping technique in detail.
- **Q7(a) [8]:** Define the following addressing modes in detail with diagram: (i) Immediate addressing, (ii) Register addressing, (iii) Base or displacement addressing and (iv) PC relative addressing.
- **Q7(b) [4]:** Give a block diagram for a $256K \times 16$ memory module using $64K \times 1$.

### Term 161

- **Q7(c) [5]:** Draw a block diagram for a $250k \times 16$ memory module using $64k \times 1$.

### Term 171

- **Q5(b) [4]:** What is cache memory? Define cache-hit, cache-miss and miss-penalty.
- **Q7(a) [6]:** Give a block diagram for a $512k \times 32$ memory module using $128k \times 8$.
- **Q7(b) [3+5]:** Why mapping function is needed when we use cache memory in the computer system? Explain three different mapping functions.

### Term 181

- **Q5(b) [2+3]:** What is physical address and logical address? Define cache miss, hit rate, miss rate.
- **Q5(c) [3]:** What is temporal and spatial locality?
- **Q6(b) [4]:** Explain the write-through and write back cache handling policy.
- **Q7(a) [4]:** What do you mean by virtual memory? Explain with example.
- **Q7(b) [5]:** Explain three different mapping functions.

### Term 191

- **Q5(b) [6]:** Explain page fault, address translation and page table.
- **Q6(c) [6]:** Explain the proper techniques for fast address translation.
- **Q7(a) [5]:** Why does DMA have priority over the CPU when both request a memory transfer?
- **Q7(b) [5]:** Explain memory mapping techniques used in cache memory.
- **Q7(c) [4]:** Write short notes on cache replacement policy and TLB.

### Term 201

- **Q3(a) [4]:** Define memory hierarchy. As one goes down the hierarchy, what happens about (i) Cost per bit; (ii) Capacity; (iii) Access time; (iv) Frequency of access of the memory by the processor.
- **Q3(b) [6]:** Explain with diagram the organization of a $1K \times 1$ memory chip.
- **Q3(c) [4]:** Describe the read and write operation from SRAM.
- **Q4(a) [2+2]:** Define memory latency and bandwidth. What is the special feature of DDR SDRAM?
- **Q4(b) [4+2]:** Explain interrupt with its hardware circuit diagram. Draw the block diagram of multiple priority interrupt unit.
- **Q4(c) [4]:** Explain Direct Memory Access (DMA) controller with necessity diagram.
- **Q5(a) [6]:** Suppose, main memory of a computer contains 32 blocks (0-31) and cache memory contains 8 blocks (0-7). Where does a block 15 go in the cache if direct mapped and set associative mapped are used?
- **Q5(b) [4]:** Explain the direct-mapped and associative-mapped cache.
- **Q5(c) [4]:** Briefly describe the memory to processor connection with necessary diagram.
- **Q6(c) [5]:** Briefly explain the internal organisation of bit cells in memory-chips with a diagram.

### Term 211

- **Q6(a) [3]:** Briefly describe the basic connection of the memory to the processor.
- **Q6(b) [5]:** Briefly explain the internal organization of bit cells in a memory chip.
- **Q6(c) [6]:** Design $2M \times 32$ memory module using a $512K \times 8$ static memory chips.
- **Q7(a) [2]:** What is the purpose of control unit?
- **Q7(b) [3]:** Define Word, Address, Memory Access time.
