# CSE2134 - Computer Architecture and Organizations

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
