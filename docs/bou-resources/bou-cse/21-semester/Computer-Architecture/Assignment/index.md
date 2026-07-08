**Question 1. Write down the history of computer architecture over last 30 years.** 

**Answer:** 
## History of Computer Architecture Over the Last 30 Years

The evolution of computer architecture over the past three decades can be broadly divided into three major eras, shifting focus from pure raw speed to parallel processing, and finally to specialized, energy-efficient silicon.

### The 1990s: The Frequency and Instruction-Level Parallelism (ILP) Race

During this decade, performance scaling was governed primarily by Dennard scaling and Moore’s Law. Clock frequencies doubled roughly every 18 months, leading to intense competition between manufacturers to reach higher gigahertz targets.

* Microarchitectures heavily exploited Instruction-Level Parallelism (ILP) using techniques like deep pipelining, out-of-order execution, branch prediction, and superscalar execution.
* The Reduced Instruction Set Computer (RISC) philosophy matured significantly, influencing mainstream architectures.
* Intel introduced iconic architectures like the Pentium Pro, Pentium II, and Pentium III, which brought advanced superscalar execution and dynamic execution to x86 processors.

### The 2000s: The Power Wall and the Shift to Multi-Core

By the mid-2000s, the industry hit a major barrier known as the **Power Wall**. Increasing clock frequencies further resulted in unsustainable power consumption and heat dissipation, effectively ending the pure frequency race.

* Because single-threaded performance scaling hit a plateau, architects shifted their paradigm from making a single core run faster to putting multiple execution cores on a single silicon die.
* This birthed the Thread-Level Parallelism (TLP) era, making dual-core and quad-core processors standard for consumers and multi-socket, highly core-dense processors standard for servers.
* Memory latency also lagged severely behind processing speeds, leading to the **Memory Wall**. This forced architects to implement larger, multi-level cache hierarchies (L1, L2, and L3 caches) to minimize memory access bottlenecks.

### The 2010s to Present: Amdahl's Law and Domain-Specific Architectures (DSAs)

As the physical limits of silicon fabrication approached (marking the slowing down of Moore’s Law), general-purpose CPUs could no longer deliver historic generational leaps in efficiency and speed.

* Architects increasingly turned to Heterogeneous Computing, combining different types of processing cores optimized for specific tasks on a single chip or System-on-Chip (SoC).
* The rise of big data, computer vision, and deep learning led to the proliferation of Domain-Specific Architectures (DSAs). Processing shifted toward highly parallel accelerators like Graphics Processing Units (GPUs) and Tensor Processing Units (TPUs) to bypass the limitations of general-purpose CPUs.
* Energy efficiency became the primary design constraint. This era saw the massive dominance of ARM-based architectures in mobile devices and their successful expansion into laptops (e.g., Apple’s M-series chips) and cloud data centers due to their superior performance-per-watt efficiency.


Question 2. Write down the classes of computer architecture. 

Answer:
**Classes of Computer Architecture**

Computer architecture can be classified based on how instructions and data are handled and organized. The main classes are:

**1. Instruction Set Architecture (ISA)**
This defines the programmer-visible part of the machine: instruction formats, opcodes, addressing modes, registers, and data types. Based on ISA design philosophy, architectures split into:
- **CISC** (Complex Instruction Set Computer) — e.g., x86, VAX
- **RISC** (Reduced Instruction Set Computer) — e.g., MIPS, ARM
- **VLIW** (Very Long Instruction Word) — multiple operations packed into one instruction

**2. Flynn's Classification (based on instruction/data streams)**
- **SISD** — Single Instruction, Single Data (traditional uniprocessor)
- **SIMD** — Single Instruction, Multiple Data (vector/array processors, GPUs)
- **MISD** — Multiple Instruction, Single Data (rare, e.g., fault-tolerant systems)
- **MIMD** — Multiple Instruction, Multiple Data (multiprocessors, multicore systems)
- **SPMD** — Single Program, Multiple Data (a software model, not pure hardware class — multiple processors run the same program independently on different data)

**3. Micro-architecture Classification**
- **Single-cycle** architecture
- **Multi-cycle** architecture
- **Pipelined** architecture
- **Superscalar** architecture (multiple instructions issued per cycle)
- **Out-of-order execution** architecture

**4. Memory Architecture Classification**
- **Von Neumann architecture** — single shared memory for instructions and data
- **Harvard architecture** — separate memory/buses for instructions and data

**5. Based on Processing Approach**
- **Uniprocessor systems**
- **Multiprocessor systems** (shared memory / distributed memory)
- **Parallel processing architectures** (array processors, vector processors, multicore)


**Q3. What are the layers of computing system architecture?**

**Introduction**

A computing system is organized as a hierarchy of layers, where each layer provides an abstraction to the layer above it while hiding the implementation details of the layers below it. This layered structure allows programmers, compiler designers, and hardware engineers to work independently at their own level without needing to understand the full depth of the system. There are seven such layers, arranged from the most abstract to the most physical.

**Software Layers**

At the top of the hierarchy lies the Application Software layer, consisting of programs used directly by end users, such as word processors, browsers, and games, typically written in high-level languages like C, Java, or Python.

Below this is the System Software layer, which has two important components. The Compiler translates the high-level language program into assembly instructions specific to a given machine's instruction set, while the Operating System manages hardware resources and provides essential services such as input-output handling, memory management, process scheduling, and file management, acting as an intermediary between application programs and the underlying hardware.

**ISA and Microarchitecture Layers**

Beneath the system software lies the Instruction Set Architecture (ISA) layer, which forms the interface between software and hardware. It defines the complete set of instructions a processor can execute, along with the registers, addressing modes, and data types available to the programmer. The compiler generates code targeting this layer, and it remains consistent even when the underlying hardware implementation changes. MIPS and x86 are common examples of ISAs.

Below the ISA lies the Microarchitecture layer, also called the Organization layer, representing the actual hardware implementation of a given ISA. This includes the datapath, control unit, pipeline structure, and cache hierarchy. Two different processors can implement the same ISA yet have entirely different microarchitectures, resulting in different performance and power characteristics, as seen when comparing Intel and AMD processors that both implement the x86 ISA.

**Hardware Realization Layers**

Underneath the microarchitecture is the Logic Design layer, where digital circuits such as logic gates, flip-flops, multiplexers, and arithmetic logic units are designed using combinational and sequential logic principles to realize the microarchitecture.

Further down lies the Circuit layer, which deals with the transistor-level implementation of these logic gates, accounting for analog electrical properties such as voltage levels, current flow, and timing delays.

Finally, at the base is the Device or Physical layer, concerning the actual semiconductor devices and the physical fabrication process of the chip, involving silicon wafers, doping, and photolithography techniques. This is the domain of physics and materials science rather than computer science proper.

**Conclusion**

Together, these seven layers, namely Application Software, System Software, Instruction Set Architecture, Microarchitecture, Logic Design, Circuit Design, and Physical Devices, form a complete abstraction hierarchy. Each layer interacts only with its immediate neighboring layers, which is precisely what makes the design, understanding, and maintenance of modern computing systems practically feasible despite their enormous complexity.

![[image-100.png|394x273]]



**Q4. What are the differences between RISC and CISC architecture?**

**Introduction**

RISC (Reduced Instruction Set Computer) and CISC (Complex Instruction Set Computer) represent two contrasting philosophies of instruction set design. RISC architectures, such as MIPS and ARM, are built around a small set of simple, fixed-length instructions that execute in a single clock cycle, whereas CISC architectures, such as x86, provide a large set of complex, variable-length instructions capable of performing multi-step operations within a single instruction.

**Instruction Set Complexity**

In CISC design, instructions are complex and can perform multiple low-level operations, such as loading from memory, performing an arithmetic operation, and storing the result, all within a single instruction. This reduces the number of instructions per program but makes each instruction more complicated to decode and execute. In RISC design, each instruction performs only one simple operation, so more instructions are needed to accomplish the same task, but each individual instruction is straightforward to execute.

**Instruction Format and Length**

CISC instructions are typically of variable length, since different instructions require different amounts of encoding depending on their complexity and addressing mode. RISC instructions, in contrast, are of fixed length, usually one word (32 bits), which greatly simplifies instruction fetching and decoding in hardware.

**Addressing Modes and Registers**

CISC architectures support a large number of complex addressing modes, allowing operands to be accessed directly from memory in many different ways, and consequently tend to use fewer general-purpose registers since operations can be performed directly on memory. RISC architectures support only a few simple addressing modes and rely on a larger set of general-purpose registers for register-to-register operations, with memory accessed only through explicit load and store instructions, following what is known as a load-store architecture.

**Execution Model and Performance**

CPU performance for both approaches can be expressed using the fundamental CPU time equation:

$$CPU\ Time = \frac{Instructions}{Program} \times \frac{Cycles}{Instruction} \times \frac{Seconds}{Cycle}$$

	This equation has three factors: the number of instructions required to execute the program, the average number of clock cycles needed per instruction (CPI), and the clock cycle time (the inverse of clock frequency). The two design philosophies attack this equation from opposite ends.

RISC reduces the cycles per instruction, at the cost of increasing the number of instructions per program:

$$\downarrow \frac{Cycles}{Instruction} \quad \text{(at the cost of} \uparrow \frac{Instructions}{Program}\text{)}$$

CISC reduces the number of instructions per program, at the cost of increasing the number of cycles required per instruction:

$$\downarrow \frac{Instructions}{Program} \quad \text{(at the cost of} \uparrow \frac{Cycles}{Instruction}\text{)}$$

For example, to add two 8-bit numbers, a CISC machine would use a single ADD instruction that internally handles the entire operation. A RISC machine would instead break the same task into separate load, operate, and store instructions:

```
LOAD  R1, A
LOAD  R2, B
ADD   R3, R1, R2
STORE R3, C
```

As a result, RISC programs tend to be longer and require more memory to store, but the individual instructions are less complex and need fewer transistors to implement.

**Hardware Design**

CISC processors require a more complex control unit, often implemented using microcode, to decode and execute the wide variety of instructions, which also makes pipelining more difficult. RISC processors use simpler, hardwired control logic, since the instruction set itself is limited and uniform, which reduces hardware complexity and makes pipelining much easier to implement efficiently.

**Historical Context**

CISC architecture evolved during the era when programs were written directly in assembly language, where it was desirable for a single instruction to accomplish more work, since assembly programming was slow and error-prone. As high-level languages and compilers became dominant, the burden of translating operations shifted from the programmer to the compiler, which reduced the need for complex instructions and allowed the simpler RISC approach to become more practical and widely adopted.

**Comparison Table**

| Feature | RISC | CISC |
|---|---|---|
| Instruction set | Small and simple | Large and complex |
| Instruction length | Fixed | Variable |
| Cycles per instruction | Usually 1 | Multiple |
| Registers | More general-purpose registers | Fewer registers |
| Addressing modes | Simple and limited | Complex and many |
| Code size | Larger (more instructions) | Smaller (fewer instructions) |
| Hardware/pipelining | Simple hardware, easier pipelining | Complex hardware, harder pipelining |
| Examples | ARM, RISC-V, MIPS | x86, Intel 80386 |

**Conclusion**
In essence, CISC trades hardware simplicity at the compiler level for complexity at the processor level, while RISC does the opposite, keeping the hardware simple and shifting the burden of instruction sequencing to the compiler. This fundamental difference in philosophy is why RISC architectures are generally easier to pipeline and achieve higher clock speeds, while CISC architectures offer more compact code and richer instruction functionality at the cost of hardware complexity.


**Q5. What do you mean by SISD, MIMD, SIMD, and SPMD?**

**Answer**

SISD, SIMD, MIMD, and SPMD are different ways to describe how a computer handles instructions and data during execution. The first three, SISD, SIMD, and MIMD, are part of Flynn's Taxonomy. This is a classification made by Michael Flynn based on how many instruction streams and data streams a system can process at the same time. SPMD is a bit different. It is a programming model, not a hardware type, and it is usually used on top of MIMD hardware.


![[image-101.png]]

**SISD (Single Instruction, Single Data)**

In SISD, there is only one instruction stream and one data stream at a time. This means the processor executes one instruction, on one piece of data, one after another. This is the normal model of a simple, traditional computer with a single processor. Most old personal computers and simple single-core CPUs work like this. Because there is no parallel work happening, performance can only be increased by things like pipelining or making the clock faster.

![[image-102.png|330x256]]

**SIMD (Single Instruction, Multiple Data)**

In SIMD, one single instruction is sent to many processing units at the same time, but each unit works on different data. So the same operation is done on many data values at once, in parallel. This is very useful for tasks like image processing, graphics, and scientific calculations where the same operation is repeated on large amounts of data. Examples of SIMD are array processors, vector processors, and modern GPUs. Also, many normal CPUs have SIMD instruction sets built in, like Intel's SSE and AVX.

![[image-103.png|329x255]]

**MIMD (Multiple Instruction, Multiple Data)**

In MIMD, many processors run at the same time, but each one executes its own instruction stream on its own data. This is more flexible than SIMD because each processor can do a completely different task, or work on a different part of the same task, independently. Multicore processors, multiprocessor systems, and computer clusters are common examples of MIMD. MIMD systems can be divided into two types: shared-memory MIMD, where all processors use one common memory, and distributed-memory MIMD, where each processor has its own memory and they communicate through a network.

![[image-104.png|330x256]]

**SPMD (Single Program, Multiple Data)**

SPMD is not a hardware type like the other three. It is a programming model that usually runs on MIMD hardware. In SPMD, every processor runs the same program, but each one works on a different part of the data. Even though the program is the same, different processors can take different paths inside the program, for example using if-conditions based on the processor's ID. Since each processor runs on its own, without needing to stay in exact lockstep like SIMD, SPMD is more flexible. Because of this, SPMD is used a lot in real-world parallel programming, and it is the basic idea behind tools like MPI and CUDA programming for GPUs.

![[image-105.png|449x221]]

**Comparison Table**

| Model | Instruction Stream      | Data Stream | Example                    |
| ----- | ----------------------- | ----------- | -------------------------- |
| SISD  | Single                  | Single      | Simple, traditional CPU    |
| SIMD  | Single                  | Multiple    | Vector processors, GPUs    |
| MIMD  | Multiple                | Multiple    | Multicore CPUs, clusters   |
| SPMD  | Multiple (same program) | Multiple    | MPI programs, CUDA kernels |

**Conclusion**

SISD, SIMD, and MIMD describe how hardware handles instructions and data, starting from simple one-by-one execution to fully independent parallel execution. SPMD, on the other hand, describes a way of writing parallel programs, where the same program code runs on many processors but each processor works on different data. Together, these four ideas explain the basic types of parallelism used in modern computers, from a single-core processor to large parallel and distributed systems.


**Q6. Differentiate between 80386, 80486 and Pentium processor.**

**Introduction**

Intel 80386, 80486, and Pentium are three important processors in the history of x86 architecture, and each one represents a big step forward compared to the previous one. They came out one after another and each generation added new features, better performance, and more advanced design compared to the last.

**Intel 80386**

The 80386, also called i386, was released by Intel in 1985. It was the first 32-bit processor in the x86 family, while earlier processors like the 8086 and 80286 were only 16-bit. Because of this, the 80386 could handle 32-bit data and addresses, which means it could access much more memory, up to 4 GB, compared to earlier chips. It also introduced virtual memory support and protected mode, which allowed multitasking and better memory protection between different programs. But the 80386 did not have a built-in floating-point unit (FPU); it needed a separate chip called the 80387 math coprocessor if floating-point operations were needed. It also did not have any on-chip cache.

![[image-106.png]]


**Intel 80486**

The 80486 came out in 1989 and was a big improvement over the 80386. The most important change is that the 80486 included a built-in floating-point unit right inside the chip, so a separate math coprocessor was no longer required for most versions. Another major addition was an on-chip cache memory (usually 8 KB), which reduced the need to access slower main memory again and again, and improved performance a lot. The 80486 also introduced pipelining into its execution, which allowed instructions to overlap during execution, something the 80386 did not have. Because of the pipeline and cache, the 80486 was much faster than the 80386 even at similar clock speeds.

![[image-107.png|270x270]]


**Pentium**

The Pentium processor was released in 1993 and represents another big jump. Unlike 80386 and 80486, which were part of Intel's numbered series (hence "486" instead of a name), Intel started using the name "Pentium" because numbers could not be trademarked. The Pentium introduced a superscalar architecture, meaning it had two execution pipelines (called u-pipe and v-pipe), so it could execute two instructions at the same time in one clock cycle, which was not possible in the 80486's single pipeline design. It also had a much improved floating-point unit, separate instruction and data caches, and introduced branch prediction to reduce pipeline stalls caused by branch instructions. The data bus was also widened to 64 bits, even though it was still internally a 32-bit processor, which allowed faster data transfer with memory.

![[image-108.png|281x277]]

**Comparison Table**

| Feature | 80386 | 80486 | Pentium |
|---|---|---|---|
| Year released | 1985 | 1989 | 1993 |
| Data width | 32-bit | 32-bit | 32-bit (64-bit data bus) |
| Floating-point unit | Separate (80387) | Built-in | Built-in, improved |
| On-chip cache | None | Yes (8 KB, unified) | Yes (separate for instruction and data) |
| Pipelining | No | Yes (single pipeline) | Yes (superscalar, dual pipeline) |
| Branch prediction | No | No | Yes |
| Instructions per cycle | 1 (multi-cycle) | About 1 (pipelined) | Up to 2 (superscalar) |

**Conclusion**

Overall, going from 80386 to 80486 to Pentium shows a clear pattern of improvement in Intel's processor design: the 80386 established 32-bit computing, the 80486 added pipelining, on-chip cache, and an integrated FPU, and the Pentium introduced superscalar execution with dual pipelines and branch prediction. Each generation reduced the number of clock cycles per instruction and increased the amount of work the processor could do at the same time, which is why the Pentium was much faster than the 80486, even beyond what higher clock speed alone would explain.


**Q7. Explain different types of instruction format in MIPS.**

**Answer**

MIPS is a RISC architecture, so all its instructions have a fixed length of 32 bits. But even though every instruction is 32 bits, the way these 32 bits are divided depends on what kind of instruction it is. MIPS has three main instruction formats: R-type, I-type, and J-type. Each format arranges the bits in a different way, depending on how many registers or values the instruction needs to use.

![[image-109.png]]

**R-type (Register Type)**

R-type format is used for instructions that work only with registers, like arithmetic and logic operations, for example add, sub, and, or, slt. This format has six fields:

```
| opcode (6) | rs (5) | rt (5) | rd (5) | shamt (5) | funct (6) |
```

Here, opcode is mostly 0 for R-type instructions, and the actual operation is decided by the funct field. rs and rt are the two source registers, rd is the destination register where the result is stored, and shamt is used only for shift instructions to say how many bits to shift.

**I-type (Immediate Type)**

I-type format is used for instructions that need an immediate (constant) value, like load, store, branch, and arithmetic instructions with a constant, for example lw, sw, beq, addi. This format has four fields:

```
| opcode (6) | rs (5) | rt (5) | immediate (16) |
```

Here, rs is the source register (often used as a base address for load/store), rt is the destination register (or source, depending on instruction), and immediate is a 16-bit constant value, which can represent a number, an offset for memory address, or a branch offset.

**J-type (Jump Type)**

J-type format is used only for jump instructions, like j and jal, where the program needs to jump directly to a new address instead of computing it from registers. This format has two fields:

```
| opcode (6) | address (26) |
```

Here, the 26-bit address field gives a large part of the target address directly. Since MIPS instructions are word-aligned, this address is combined with the upper bits of the program counter and shifted to make the final full jump address.

**Comparison Table**

| Format | Used for | Fields |
|---|---|---|
| R-type | Register-register operations (add, sub, and, or) | opcode, rs, rt, rd, shamt, funct |
| I-type | Immediate operations, load/store, branch (addi, lw, sw, beq) | opcode, rs, rt, immediate |
| J-type | Jump instructions (j, jal) | opcode, address |

**Conclusion**

All three formats keep the same total length of 32 bits, which is one of the reasons MIPS is easy to fetch and decode in hardware. The opcode field is always the first 6 bits in every format, so the processor can quickly check what type of instruction it is before deciding how to read the rest of the bits. This fixed and simple structure is a key reason why MIPS is a good example of clean RISC design.