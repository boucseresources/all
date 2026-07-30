# Addressing Modes

Addressing modes are techniques used by the CPU to identify the location of the operand(s) needed for executing an instruction. They provide rules for interpreting the address field in an instruction, helping the CPU fetch operands correctly.

- **Opcode** – Tells the CPU what operation to perform (e.g., ADD, MOV).
- **Operands** – The data or addresses on which the operation is performed.

![Addressing Modes](https://media.geeksforgeeks.org/wp-content/uploads/20250918145714440431/Addressing_Modes_1.jpg)

## Addressing Modes Types

### Implicit (Implied) Addressing

The instruction does not mention the operand directly. The CPU knows what to use from the instruction itself, usually a special register like the accumulator or the stack.

![Implicit (Implied) Addressing](https://media.geeksforgeeks.org/wp-content/uploads/20250918152309527905/Addressing_Modes_2.jpg)

It is used for special instructions or control commands like CLA, PUSH, and RET, where the operand is automatically known from the instruction itself.

### Immediate Addressing

The operand is the part of the instruction itself. It is used when the value is known while writing the program.

![Immediate Addressing](https://media.geeksforgeeks.org/wp-content/uploads/20250913153608510554/immediate_addressing.webp)

**Example:** `MOV R1, #5` moves the value 5 into register R1, where `#5` is the immediate value.

### Direct Addressing

The instruction contains the memory address of the operand. The CPU accesses the data directly from that address.

![Direct Addressing](https://media.geeksforgeeks.org/wp-content/uploads/20250918150537443399/direct_addressing-.webp)

**Example:** `LOAD R1, 1000` loads data from memory address 1000 into register R1.

### Indirect Addressing

The instruction contains the address of a memory location, which itself stores the actual address of the operand. The CPU first accesses this memory location to get the effective address, and then fetches the operand.

![Indirect Addressing](https://media.geeksforgeeks.org/wp-content/uploads/20250913161451620386/indirect_addressing-.webp)

**Example:** `LOAD R1, (A)` loads data from the memory location whose address is stored at memory location **A**.

### Register Addressing

The operand is located in a CPU register specified by the instruction.

![Register Addressing](https://media.geeksforgeeks.org/wp-content/uploads/20250913153310211115/register_addressing.webp)

**Step:**

- The instruction specifies a register (R).
- The CPU takes operand directly from register R.

**Example:** `MOV A, B` copies data from register B to register A.

### Register Indirect Addressing

The register specified in the instruction contains the memory address of the operand.

**Steps:**

- The instruction specifies a register.
- The register holds the memory address.
- The CPU accesses that memory location to fetch the operand.

![Register Indirect Addressing](https://media.geeksforgeeks.org/wp-content/uploads/20250913153310059985/register_indirect_addressing.webp)

**Example:** `LOAD R1, (R2)` loads data from the memory location whose address is stored in **register R2**.

### Displacement Addressing (Indexed, Base-Register, Relative)

The operand’s effective address is calculated by adding a constant value (displacement) to the contents of one or more registers.

![Displacement Addressing](https://media.geeksforgeeks.org/wp-content/uploads/20250913161823219520/displacement_addressing.webp)

**Step:**

- The instruction provides a base register (R) and an address part (A).
- CPU adds the value of R and A to get the effective operand address.
- Operand is fetched from the calculated address in memory.

**Example:** Used for arrays, accessing an element at a position relative to a base.

### Stack Addressing

The operand is implicitly taken from the top of the stack, without being mentioned in the instruction.

![Stack Addressing](https://media.geeksforgeeks.org/wp-content/uploads/20250913153139079567/stack_addressing.webp)

**Step:**

- Operation is performed using the value at the stack’s top (implied by instruction).
- No need for explicit operand field; CPU refers to stack pointer register by default.

**Example:** `POP` and `PUSH` operations.

## Practice Questions

### Question 1

Which of the following addressing modes are suitable for program relocation at run time?

I. Absolute Addressing  
II. Based Addressing  
III. Relative Addressing  
IV. Indirect Addressing

**(GATE 2004 | MCQ | 1-mark)**

- **A.** I and IV
- **B.** I and II
- **C.** II and III
- **D.** I, II and IV

### Question 2

Which of the following statements is TRUE regarding the functionality of different addressing modes?

**(GATE 2011 | MCQ | 1-mark)**

- **A.** Immediate addressing mode is ideal for defining variable data values that update frequently during execution.
- **B.** Auto-increment and Auto-decrement addressing modes are highly efficient for implementing loop iterations over linear arrays.
- **C.** Stack addressing mode utilizes an explicit 16-bit reference field within the instruction word to point to memory.
- **D.** Immediate addressing mode always requires an additional memory access to fetch the operand.

### Question 3

A stack grows toward lower memory addresses. The stack pointer (SP) currently contains 5000. A PUSH operation stores a 4-byte word.

What will be the new value of SP after the PUSH operation?

- **A.** 4996
- **B.** 5004
- **C.** 5000
- **D.** 4992

### Question 4

Consider the following instruction sequence:

| Instruction Number | Operation |
| --- | --- |
| i | `add R2, R3, R4` |
| i + 1 | `sub R5, R6, R7` |
| i + 2 | `cmp R1, R9, R10` |
| i + 3 | `beq R1, Offset` |

Consider a RISC machine where each instruction is exactly 4 bytes long. Conditional branch instructions use PC-relative addressing, and the offset is specified in bytes relative to the address of the next instruction. If the target of the branch instruction is instruction i, what is the decimal value of Offset?

**(GATE 2017 | MCQ | 1-mark)**

- **A.** −12
- **B.** −16
- **C.** −8
- **D.** −4

### Question 5

Which of the following is true of the Auto-Increment Addressing Mode?

I. It is useful in creating self-relocating code.  
II. If it is included in an ISA, then an additional ALU is required for effective address calculation.  
III. The amount of increment depends on the size of the data item accessed.

**(GATE 2008 | MCQ | 1-mark)**

- **A.** I only
- **B.** II only
- **C.** III only
- **D.** II and III only

### Question 6

An instruction is stored at memory location 300 with an index register value of 40. The address field of the instruction contains the value 500. If the addressing mode specified is Indexed Addressing, what is the effective address of the operand?

**(GATE 1997 | MCQ | 1-mark)**

- **A.** 300
- **B.** 340
- **C.** 500
- **D.** 540

### Question 7

Implied addressing mode differs from Memory-Mapped I/O in that implied mode:

- **A.** Does not require an operand field in the instruction
- **B.** Uses I/O address space only
- **C.** Is slower due to memory access
- **D.** Requires an explicit address operand
