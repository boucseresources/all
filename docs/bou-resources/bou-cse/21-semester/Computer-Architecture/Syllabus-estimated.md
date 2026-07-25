# Complete Computer Architecture Study Map

**Legend:**

- 🔥 = Current teacher-suggested topic or a topic directly required to answer it
- ⭐ = Topic found in the previous faculty’s question list
- 🔥⭐ = Topic included in both lists

## Chapter 1: Fundamentals of a Computer System

### 🔥⭐ 1.1 Basic Concepts of a Computer System

- Meaning and purpose of a computer system
- ⭐ History and evolution of computer architecture over the last 30 years
- 🔥⭐ Classes of computers and their characteristics
- ⭐ Classes of computer architecture
- 🔥 Classification by data handling: digital, analogue and hybrid computers
- 🔥 Digital computer and analogue computer
- 🔥 Classification by purpose: general-purpose and special-purpose computers
- 🔥 Classification by size and processing capacity: microcomputer, workstation, minicomputer, mainframe and supercomputer
- Computer architecture and computer organization
- Difference between architecture and organization
- Stored-program concept
- Von Neumann architecture
- Harvard architecture
- Modified Harvard architecture
- Basic operation of a computer
- Input, processing, storage and output cycle
- Data and instruction representation
- Clock, clock cycle and clock frequency

### 🔥 1.2 Functional Units of a Digital Computer

- 🔥 Input unit
- 🔥 Output unit
- 🔥 Memory or storage unit
- 🔥 Arithmetic and Logic Unit (ALU)
- 🔥 Control Unit (CU)
- 🔥 Central Processing Unit (CPU)
- 🔥 Register set
- 🔥 System bus
- 🔥 Address bus
- 🔥 Data bus
- 🔥 Control bus
- 🔥 Interconnection of functional units
- 🔥 Working sequence of all functional units
- 🔥 Basic block diagram of a digital computer

### 1.3 Hardware

- Meaning of hardware
- Processor hardware
- Memory hardware
- Input and output devices
- Storage devices
- Communication devices
- Motherboard and chipset
- Buses and interconnection systems
- Firmware (স্থায়ীভাবে সংরক্ষিত নিয়ন্ত্রণ সফটওয়্যার)
- Hardware abstraction (হার্ডওয়্যারকে সহজ স্তরে উপস্থাপন)
- ⭐ Hardware generations and technology development

### 1.4 Software

- Meaning of software
- System software
- Application software
- Operating system
- Utility software
- Device driver
- Language translator
- Compiler
- Interpreter
- Assembler
- Linker
- Loader
- Library files
- Firmware
- Difference between hardware and software

### 🔥⭐ 1.5 Hardware–Software Interface

- 🔥 Meaning of hardware–software interface
- 🔥 Role of operating system
- 🔥 Role of Instruction Set Architecture
- System calls
- Device drivers
- Application Binary Interface or ABI
- 🔥 Registers visible to software
- 🔥 Memory address space
- Input/output address space
- Interrupt and exception interface
- User mode and supervisor mode
- 🔥⭐ Relationship among application, operating system, ISA and hardware
- 🔥⭐ Abstraction layers (বিমূর্ত স্তর) of a computer system
- 🔥⭐ Layered architecture diagram of a computer system

### 🔥⭐ 1.6 Translation from High-Level Language to Hardware Language

- 🔥⭐ High-level language
- 🔥⭐ Assembly language
- 🔥⭐ Machine language
- 🔥⭐ Source program
- 🔥⭐ Object program
- 🔥⭐ Executable program
- 🔥⭐ Compilation process
- 🔥⭐ Preprocessor
- 🔥⭐ Compiler
- 🔥⭐ Assembler
- 🔥⭐ Linker
- 🔥⭐ Loader
- Static and dynamic linking
- Interpretation process
- Just-In-Time or JIT compilation
- 🔥⭐ Translation of statements into assembly instructions
- 🔥⭐ Translation of assembly into machine code
- 🔥⭐ Instruction encoding
- 🔥⭐ Binary execution by hardware
- 🔥⭐ Complete program translation diagram
- 🔥⭐ Example of translating a C statement into assembly and machine instruction

### 🔥 1.7 Instruction Set Architecture

- 🔥 Definition of ISA
- 🔥 Importance of ISA
- 🔥 ISA as an interface between hardware and software
- 🔥 Programmer-visible components
- 🔥 Meaning of an instruction and its binary representation in a computer
- 🔥 Instruction types
- Data transfer instructions
- Arithmetic instructions
- Logical instructions
- Shift and rotate instructions
- Comparison instructions
- Branch and jump instructions
- Procedure-call instructions
- Input/output instructions
- System and privileged instructions
- 🔥 Instruction formats
- 🔥 Instruction length
- 🔥 Opcode (অপারেশনের সংকেত)
- 🔥 Operand (যে ডেটার ওপর কাজ হয়)
- 🔥 Register fields
- 🔥 Immediate fields
- 🔥 Address fields
- 🔥 Number of operands
- 🔥 Zero-address instruction
- 🔥 One-address instruction
- 🔥 Two-address instruction
- 🔥 Three-address instruction
- Data types supported by ISA
- 🔥 Register organization
- 🔥 General-purpose and special-purpose registers
- Memory organization
- Endianness
- Alignment
- 🔥 Addressing modes
- 🔥 Immediate addressing
- 🔥 Register addressing
- 🔥 Direct addressing
- 🔥 Indirect addressing
- 🔥 Register-indirect addressing
- 🔥 Indexed addressing
- 🔥 Base addressing
- 🔥 Relative or PC-relative addressing
- 🔥 Stack addressing
- 🔥 Auto-increment and auto-decrement addressing
- 🔥 Instruction encoding and decoding
- Orthogonality (স্বাধীনভাবে সমন্বয় করার সুবিধা)
- Compatibility and extensibility

### 1.8 ISA Styles and Features

- Accumulator-based architecture
- Stack-based architecture
- General-purpose register architecture
- Register–memory architecture
- 🔥 Load–store architecture
- 🔥 Fixed-length instructions
- 🔥 Variable-length instructions
- 🔥 Memory-to-memory operation
- 🔥 Register-to-register operation
- Condition codes and status flags
- Procedure and function support
- Privileged operation support
- Interrupt and exception support
- Scalar and vector instructions
- SIMD instructions
- Atomic instructions
- ISA design principles
- Code density
- Hardware complexity
- Compiler friendliness

### 🔥⭐ 1.9 RISC Architecture

- 🔥⭐ Meaning of RISC
- 🔥⭐ Design philosophy
- 🔥⭐ Simple instruction set
- 🔥⭐ Fixed instruction length
- 🔥⭐ Load–store operation
- 🔥⭐ Large register set
- 🔥⭐ Simple addressing modes
- 🔥⭐ Few instruction formats
- 🔥⭐ Pipeline-friendly design
- 🔥⭐ Advantages and disadvantages
- 🔥⭐ Examples: MIPS, ARM and RISC-V

### 🔥⭐ 1.10 CISC Architecture

- 🔥⭐ Meaning of CISC
- 🔥⭐ Design philosophy
- 🔥⭐ Large and complex instruction set
- 🔥⭐ Variable-length instructions
- 🔥⭐ Multiple addressing modes
- 🔥⭐ Memory-to-memory instructions
- 🔥⭐ Microprogrammed control
- 🔥⭐ Advantages and disadvantages
- 🔥⭐ Examples: x86 and VAX
- 🔥 Three-bus CISC-style processor organization and diagram

### 🔥⭐ 1.11 RISC and CISC Comparison

- 🔥⭐ Instruction complexity
- 🔥⭐ Instruction length
- 🔥⭐ Number of registers
- 🔥⭐ Addressing modes
- 🔥⭐ Control-unit design
- 🔥⭐ Memory access
- 🔥⭐ Pipelining suitability
- 🔥⭐ Compiler complexity
- 🔥⭐ Code size
- 🔥⭐ Execution speed
- 🔥⭐ Power consumption
- Modern combination of RISC and CISC ideas

### 🔥⭐ 1.12 Performance Metrics

- 🔥⭐ Meaning of computer performance
- 🔥 Response time or latency (বিলম্ব)
- 🔥 Throughput (প্রতি এককে সম্পন্ন কাজের পরিমাণ)
- 🔥 Difference between response time and throughput
- 🔥⭐ Execution time
- 🔥⭐ CPU execution time
- User CPU time
- System CPU time
- Elapsed time
- 🔥⭐ Clock cycle
- 🔥⭐ Clock rate
- 🔥⭐ Clock-cycle time
- 🔥⭐ Instruction count
- 🔥⭐ Cycles Per Instruction or CPI
- ⭐ Instructions Per Cycle or IPC
- 🔥⭐ Million Instructions Per Second or MIPS
- Floating-Point Operations Per Second or FLOPS
- Benchmark (মান যাচাইয়ের পরীক্ষামূলক প্রোগ্রাম)
- Workload
- Speedup
- Performance ratio
- Power and energy consumption
- Performance per watt
- Cost-performance ratio
- Reliability and availability
- 🔥⭐ CPU performance equation
- 🔥⭐ Average CPI calculation
- 🔥⭐ Comparison of two or more processors
- Effect of compiler, ISA and implementation on performance
- Common mistakes in performance comparison
- 🔥⭐ Performance calculation using clock rate, CPI and MIPS
- 🔥 Calculation of cycles and instruction count from execution time
- 🔥 Required clock-rate calculation after changes in execution time and CPI
- 🔥 Suggested P1, P2 and P3 processor-comparison numerical problem
- ⭐ Relationship and difference between IPC and CPI
- ⭐ Machine A versus Machine B numerical: \(1\text{ ns},\ \text{CPI}=2.0\) versus \(2\text{ ns},\ \text{CPI}=1.2\)
- ⭐ Two-machine numerical: \(2\text{ GHz},\ 200\times10^6\) instructions in \(6\text{ s}\) versus \(3\text{ GHz},\ 160\times10^6\) instructions in \(3\text{ s}\), including MIPS, CPI and the instruction count of program Q

Important equations:

\[
\text{CPU Time}=\text{Instruction Count}\times\text{CPI}\times\text{Clock Cycle Time}
\]

\[
\text{CPU Time}=\frac{\text{Instruction Count}\times\text{CPI}}{\text{Clock Rate}}
\]

\[
\text{Performance}=\frac{1}{\text{Execution Time}}
\]

\[
\text{Instructions Per Second}=\frac{\text{Clock Rate}}{\text{CPI}}
\]

\[
\text{MIPS}=\frac{\text{Clock Rate}}{\text{CPI}\times10^6}
\]

\[
\text{Speedup}=\frac{\text{Old Execution Time}}{\text{New Execution Time}}
\]

### 1.13 Amdahl’s Law

- Meaning and purpose of Amdahl’s Law
- Enhanced and unaffected portions
- Fraction of execution time improved
- Enhancement factor
- Overall speedup
- Maximum possible speedup
- Limitation of parallel improvement
- Sequential bottleneck (ক্রমিক অংশের বাধা)
- Numerical problems
- Application to processors, memory and parallel systems
- Amdahl’s Law versus ideal speedup

\[
\text{Overall Speedup}
=
\frac{1}
{(1-f)+\frac{f}{S}}
\]

Here, \(f\) is the improved fraction and \(S\) is its speedup.

### 🔥⭐ 1.14 Case Studies of ISA

- 🔥⭐ MIPS ISA
- 🔥⭐ MIPS register organization
- 🔥⭐ MIPS instruction formats: R, I and J
- 🔥⭐ Examples of MIPS R-format, I-format and J-format instructions
- 🔥⭐ MIPS addressing modes
- 🔥⭐ MIPS addressing modes with suitable examples
- 🔥⭐ MIPS arithmetic, memory and branch instructions
- ARM ISA
- ARM registers and instruction styles
- Conditional execution in ARM
- ⭐ x86 ISA
- ⭐ x86 register organization
- ⭐ Variable-length x86 instructions
- ⭐ 80386 processor architecture and characteristics
- ⭐ 80486 processor architecture and characteristics
- ⭐ Pentium processor architecture and characteristics
- ⭐ Comparison among 80386, 80486 and Pentium processors
- RISC-V ISA
- RISC-V base instruction formats
- Comparison of MIPS, ARM, x86 and RISC-V
- Example instruction translation for each ISA
- 🔥⭐ Example instruction translation for MIPS
- 🔥⭐ MIPS assembly translation of arithmetic C statements
- 🔥⭐ MIPS assembly translation of array-access C statements
- 🔥 MIPS translation of `f = (a + b) - (c + d);` and `g = f + A[10];`
- ⭐ MIPS translation of `f = (g + h) - (i + j);` and `h = g + A[8];`
- ⭐ MIPS translation of `if (i == j) f = g + h; else f = g - h;`

## Chapter 2: Basic Processing Unit

### 🔥⭐ 2.1 Components of the Processor

- 🔥⭐ Processor organization
- 🔥 Arithmetic and Logic Unit
- 🔥 Control Unit
- 🔥 Register file
- 🔥 Program Counter or PC
- 🔥 Instruction Register or IR
- 🔥 Memory Address Register or MAR
- 🔥 Memory Data Register or MDR
- 🔥 General-purpose registers
- Stack Pointer
- Status or flag register
- 🔥 Instruction decoder
- 🔥 Clock and timing unit
- 🔥 Internal CPU buses
- 🔥 Bus structure of a processor
- 🔥 Single-bus, two-bus and three-bus processor structures
- 🔥 Multiplexer
- 🔥 Sign-extension unit
- 🔥 Shift unit
- 🔥 Adder
- Pipeline registers
- 🔥 Connections among processor components
- 🔥 Three-bus CISC-style processor organization
- ⭐ Major steps in designing a microprocessor
- ⭐ Specification, ISA selection, datapath design, control-unit design, verification and implementation

### 🔥⭐ 2.2 Datapath

- 🔥 Meaning of datapath
- 🔥 Single-bus datapath
- 🔥 Two-bus datapath
- 🔥 Three-bus datapath
- 🔥 Register file operation
- 🔥 ALU input selection
- 🔥 Multiplexer operation
- 🔥 Immediate-value generation
- 🔥 Sign extension and zero extension
- 🔥 PC update circuit
- 🔥 Branch-target calculation
- 🔥⭐ Jump-target calculation
- 🔥 Memory-access path
- 🔥⭐ Single-cycle datapath
- 🔥 Multicycle datapath
- 🔥 Datapath for R-type instruction
- 🔥 Datapath for load instruction
- 🔥 Datapath for store instruction
- 🔥 Datapath for branch instruction
- 🔥⭐ Datapath for jump instruction
- 🔥 Complete block diagram of a processor datapath
- ⭐ Single-cycle datapath for MIPS implementation
- ⭐ Datapath modifications and control flow required for a MIPS jump instruction

### 🔥⭐ 2.3 Control Unit

- 🔥 Purpose of the control unit
- 🔥 Control signals
- 🔥 Instruction decoding
- 🔥 ALU control
- 🔥 Register control
- 🔥 Memory control
- 🔥 Multiplexer control
- 🔥 PC control
- 🔥 Main decoder
- 🔥 ALU decoder
- 🔥 Timing and sequencing
- 🔥 Control word
- 🔥 Control-state diagram
- 🔥 Finite State Machine or FSM
- 🔥⭐ Single-cycle control
- 🔥 Multicycle control
- 🔥 Pipelined control
- 🔥⭐ Control-signal values for common MIPS instructions
- 🔥 Control signals required for a processor datapath

### 🔥⭐ 2.4 Execution of a Complete Instruction

- 🔥 Instruction cycle
- 🔥 Instruction fetch
- 🔥 Instruction decode
- 🔥 Operand fetch
- 🔥 Execute
- 🔥 Memory access
- 🔥 Write-back
- 🔥 PC update
- 🔥 Register Transfer Language or RTL
- 🔥 Micro-operations
- 🔥 Fetch-cycle micro-operations
- 🔥 Execution of arithmetic instructions
- 🔥 Execution of logical instructions
- 🔥 Execution of load and store instructions
- 🔥⭐ Execution of branch and jump instructions
- Procedure call and return
- 🔥 Complete instruction execution example
- 🔥 Single-cycle versus multicycle execution
- 🔥 Execution steps of `Load R2, LOC`
- 🔥 Execution steps and architecture for `Add (R3), R1`
- 🔥 RTL for MIPS instructions `addu`, `addi`, `lw`, `sw` and `beq`
- ⭐ Step-by-step implementation of the MIPS `j` (jump) instruction

### 2.5 Hardwired Control

- Meaning of hardwired control
- Control-signal generation
- Opcode decoder
- Sequence counter
- Timing signals
- State-machine implementation
- Advantages and disadvantages
- Speed and hardware complexity
- Suitable applications

### 🔥 2.6 Microprogrammed Control

- 🔥 Meaning of microprogrammed control
- 🔥 Control memory
- 🔥 Microinstruction
- 🔥 Microprogram
- 🔥 Control word
- 🔥 Microprogram counter
- 🔥 Microinstruction register
- 🔥 Microprogram sequencer
- Horizontal microprogramming
- Vertical microprogramming
- 🔥 Microinstruction formats
- 🔥 Control-store organization
- Nanoprogramming
- Advantages and disadvantages
- Hardwired versus microprogrammed control
- 🔥 Microprogrammed control sequence for a branch instruction
- 🔥 Block diagram of a microprogrammed control unit

### 2.7 Instruction-Level Parallelism

- Meaning of ILP
- Sequential execution
- Overlapped execution
- Dependence between instructions
- Data dependence
- Name dependence
- Control dependence
- Pipeline parallelism
- Multiple-issue parallelism
- Limits of ILP
- ⭐ Measuring ILP using CPI and IPC

### 🔥⭐ 2.8 Basic Concepts of Pipelining

- 🔥⭐ Meaning of pipelining
- 🔥 Laundry or assembly-line analogy
- 🔥⭐ Pipeline stages
- 🔥⭐ Five-stage instruction pipeline
- 🔥⭐ IF: Instruction Fetch
- 🔥⭐ ID: Instruction Decode
- 🔥⭐ EX: Execute
- 🔥⭐ MEM: Memory Access
- 🔥⭐ WB: Write Back
- 🔥 Pipeline registers
- 🔥 Pipeline clock cycle
- 🔥 Pipeline latency
- 🔥 Pipeline throughput
- 🔥 Pipeline filling and draining
- 🔥⭐ Ideal pipeline speedup
- 🔥 Pipeline efficiency
- 🔥⭐ Pipeline timing diagram
- 🔥⭐ Non-pipelined versus pipelined processor
- 🔥 Balanced and unbalanced pipeline stages
- 🔥 Pipeline depth
- 🔥⭐ Pipeline performance calculations
- 🔥⭐ How pipelining increases processor performance
- 🔥 Pipelined operation in the ideal case
- 🔥 Issues affecting pipelined operation

\[
\text{Pipeline Time}=(k+n-1)t
\]

\[
\text{Ideal Speedup}
=
\frac{\text{Non-pipelined Time}}
{\text{Pipelined Time}}
\]

Here, \(k\) is the number of stages, \(n\) is the number of instructions and \(t\) is the pipeline clock time.

### 🔥⭐ 2.9 Pipelined Implementation of Datapath and Control

- 🔥 Pipelined datapath
- 🔥 IF/ID pipeline register
- 🔥 ID/EX pipeline register
- 🔥 EX/MEM pipeline register
- 🔥 MEM/WB pipeline register
- 🔥 Movement of instructions through stages
- 🔥 Passing data and control signals
- 🔥 Pipelined control signals
- 🔥 Register-file timing
- 🔥 Memory operation timing
- 🔥⭐ Branch handling in pipeline
- 🔥 Pipeline control unit
- 🔥⭐ Forwarding unit
- 🔥⭐ Hazard-detection unit
- 🔥⭐ Stalling and flushing
- 🔥 Complete pipelined instruction execution
- 🔥 Pipeline timing table and diagram
- 🔥 Datapath modification needed to support data forwarding
- 🔥 Forwarding paths and forwarding multiplexers

### 🔥⭐ 2.10 Structural Hazards

- 🔥⭐ Meaning of structural hazard
- 🔥 Resource conflict (একই সম্পদ নিয়ে সংঘর্ষ)
- 🔥 Single memory for instruction and data
- 🔥 Register-file conflicts
- 🔥 ALU resource conflicts
- 🔥⭐ Detection of structural hazards
- 🔥⭐ Pipeline stalling
- 🔥 Duplication of hardware resources
- 🔥 Separate instruction and data cache
- 🔥 Multiport memory
- 🔥 Examples and timing diagrams

### 🔥⭐ 2.11 Data Hazards

- 🔥⭐ Meaning of data hazard
- 🔥 Read After Write or RAW hazard
- 🔥 Write After Read or WAR hazard
- 🔥 Write After Write or WAW hazard
- 🔥 True dependence
- 🔥 Anti-dependence
- 🔥 Output dependence
- 🔥 Load-use hazard
- 🔥⭐ Hazard detection
- 🔥⭐ Forwarding or bypassing
- 🔥 EX-to-EX forwarding
- 🔥 MEM-to-EX forwarding
- 🔥⭐ Pipeline stall
- 🔥⭐ Bubble or NOP insertion
- 🔥 Compiler instruction scheduling
- 🔥 Register renaming
- 🔥 Examples and timing diagrams
- 🔥 Operand-forwarding example for resolving data dependency
- 🔥 Side effects of data hazards on pipeline performance

### 🔥⭐ 2.12 Control Hazards

- 🔥⭐ Meaning of control hazard
- 🔥 Branch instruction
- 🔥 Jump instruction
- 🔥 Branch outcome and branch target
- 🔥⭐ Branch penalty
- 🔥⭐ Pipeline flushing
- 🔥⭐ Stall until branch decision
- 🔥⭐ Early branch resolution
- 🔥 Delayed branch
- 🔥⭐ Static branch prediction
- 🔥⭐ Dynamic branch prediction
- 🔥⭐ One-bit predictor
- 🔥⭐ Two-bit predictor
- 🔥⭐ Branch History Table
- 🔥⭐ Branch Target Buffer
- 🔥 Return Address Stack
- 🔥⭐ Prediction accuracy
- 🔥⭐ Misprediction penalty
- 🔥⭐ Examples and timing diagrams
- ⭐ Branch prediction explained with a worked instruction example

### 2.13 Exception Handling

- Meaning of exception
- Exception versus interrupt
- Synchronous and asynchronous events
- Internal and external exceptions
- Arithmetic overflow
- Divide-by-zero
- Undefined instruction
- Page fault
- Hardware failure
- System call or trap
- Precise exception
- Imprecise exception
- Exception Program Counter
- Cause register
- Status register
- Exception vector
- Saving processor state
- Transferring control to handler
- Returning from exception
- 🔥 Exception handling in a pipeline
- 🔥 Flushing affected instructions
- Handling multiple simultaneous exceptions

## Chapter 3: Advanced ILP and Current Trends

### 3.1 Exploitation of More ILP

- Review of instruction-level parallelism
- ⭐ Basic block
- ⭐ Identification and explanation of a basic block with an example
- Loop-level parallelism
- Dependence analysis
- Data dependence
- Name dependence
- Control dependence
- Pipeline limitations
- Multiple functional units
- Increased issue width
- Instruction scheduling
- Register renaming
- Branch prediction
- Speculative execution
- Memory dependence
- Limits of available parallelism

### 🔥 3.2 Hardware Approaches

- 🔥 Dynamic instruction scheduling
- 🔥 Out-of-order execution
- 🔥 In-order issue and completion
- 🔥 Out-of-order issue and completion
- 🔥 Multiple functional units
- 🔥 Register renaming
- 🔥 Reorder buffer
- 🔥 Reservation stations
- 🔥 Scoreboarding
- 🔥 Tomasulo’s algorithm
- Dynamic branch prediction
- Speculative execution
- 🔥 Load/store queues
- 🔥 Memory disambiguation (মেমরি নির্ভরতা আলাদা করে নির্ধারণ)
- 🔥 In-order retirement
- Precise exception support

### 3.3 Software and Compiler Approaches

- Static instruction scheduling
- Code reordering
- Loop unrolling
- Loop interchange
- Loop fusion
- Loop fission
- Software pipelining
- Register allocation
- Trace scheduling
- Predication
- Branch elimination
- Dependency analysis
- Compiler-generated parallel instructions
- Profile-guided optimization
- Advantages and limitations of compiler techniques

### 🔥 3.4 Dynamic Scheduling

- 🔥 Need for dynamic scheduling
- 🔥 Dynamic-scheduler block diagram
- 🔥 Handling variable execution latency
- 🔥 Scoreboarding technique
- 🔥 Tomasulo’s algorithm
- 🔥 Issue, execute and write-result stages
- 🔥 Reservation station
- 🔥 Common Data Bus
- 🔥 Register status table
- 🔥 Operand availability
- 🔥 Register renaming
- 🔥 RAW, WAR and WAW handling
- 🔥 Out-of-order execution
- 🔥 In-order retirement
- 🔥 Worked instruction-scheduling example

### 3.5 Speculation

- Meaning of speculation (অনুমানের ভিত্তিতে আগাম কাজ)
- Control speculation
- Data speculation
- Hardware speculation
- Software speculation
- Branch prediction
- Speculative instruction execution
- Reorder buffer
- Instruction commit or retirement
- Recovery after wrong speculation
- Exception handling during speculation
- Benefits and risks of speculation

### 3.6 Multiple-Issue Processors

- Meaning of multiple issue
- Issue width
- Superscalar processor
- Statically scheduled multiple issue
- Dynamically scheduled superscalar processor
- Very Long Instruction Word or VLIW
- Explicitly Parallel Instruction Computing or EPIC
- Instruction pairing
- Issue restrictions
- Functional-unit conflicts
- Dependency checking
- In-order versus out-of-order issue
- Superscalar versus VLIW
- CPI below one and IPC above one
- Limitations of multiple-issue execution

### 🔥⭐ 3.7 ILP and Thread-Level Parallelism

- Instruction-level parallelism
- Thread-level parallelism or TLP
- Process and thread
- Hardware thread
- Fine-grained multithreading
- Coarse-grained multithreading
- Simultaneous Multithreading or SMT
- Hyper-Threading
- Multiprocessing
- Shared-memory multiprocessor
- Distributed-memory system
- ILP versus TLP
- Advantages and limitations of multithreading
- 🔥 Flynn’s classification of parallel hardware
- 🔥⭐ Single Instruction Single Data or SISD
- 🔥⭐ Single Instruction Multiple Data or SIMD
- 🔥 Multiple Instruction Single Data or MISD
- 🔥⭐ Multiple Instruction Multiple Data or MIMD
- ⭐ Single Program Multiple Data or SPMD
- 🔥 Characteristics, examples, advantages and limitations of SISD, SIMD, MISD and MIMD
- 🔥 Comparative diagram and table of Flynn’s four classes
- ⭐ Comparison and examples of SISD, SIMD, MIMD and SPMD

### 3.8 Multicore Processors

- Meaning of multicore processor
- Single-core versus multicore
- Homogeneous and heterogeneous cores
- Shared and private caches
- Inter-core communication
- Cache coherence (ক্যাশের তথ্যের সামঞ্জস্য)
- Coherence problem
- Snooping protocol
- Directory-based protocol
- MESI protocol
- Memory consistency
- On-chip interconnection
- Bus, ring, mesh and Network-on-Chip
- Scalability
- Power wall and thermal limitation
- Parallel-programming challenges
- Examples of modern multicore processors

### 3.9 Graphics and Computing GPUs

- CPU versus GPU
- GPU architecture
- Graphics pipeline
- Streaming multiprocessor
- GPU core
- SIMD and SIMT execution
- Warp or wavefront
- Thread, block and grid
- GPU memory hierarchy
- Registers
- Shared memory
- Global memory
- Constant and texture memory
- Coalesced memory access
- Branch divergence
- General-Purpose GPU or GPGPU
- CUDA and OpenCL concepts
- GPU applications
- Advantages and limitations of GPU computing
- Heterogeneous CPU–GPU systems

### ⭐ 3.10 Current Processor Trends

- ⭐ Major processor and computer-architecture developments over the last 30 years
- Many-core processors
- Heterogeneous computing
- Chiplet-based processors
- System-on-Chip or SoC
- AI and machine-learning accelerators
- Tensor-processing units
- Neural-processing units
- Energy-efficient architecture
- Domain-specific architecture
- Edge computing processors
- Mobile processor architecture
- Vector extensions
- Open ISA such as RISC-V
- Advanced packaging
- 3D stacking
- Security-related processor features
- Cloud and data-centre processors

## Chapter 4: Arithmetic for Computers

### 4.1 Number Representation Fundamentals

- Binary, octal, decimal and hexadecimal systems
- Number-system conversion
- Unsigned integers
- 🔥 Signed-magnitude representation
- 🔥 One’s complement
- 🔥 Two’s complement
- 🔥 Range of signed and unsigned numbers
- 🔥 Sign extension
- Fixed-point numbers
- 🔥 Overflow and underflow
- 🔥 Binary fractions
- Arithmetic shift and logical shift

### 4.2 Binary Addition

- Rules of binary addition
- Addition of unsigned numbers
- Addition of signed numbers
- Two’s-complement addition
- Carry and overflow
- Half adder
- Full adder
- Ripple-carry adder
- Parallel binary adder
- Adder–subtractor circuit
- Examples and numerical problems

### 4.3 Binary Subtraction

- Rules of binary subtraction
- Direct binary subtraction
- Subtraction using one’s complement
- Subtraction using two’s complement
- Borrow and overflow
- Signed-number subtraction
- Adder–subtractor implementation
- Examples and numerical problems

### 4.4 Fast Adders

- Delay in ripple-carry adder
- Carry propagation and carry generation
- Carry Look-Ahead Adder or CLA
- Generate and propagate functions
- Carry-look-ahead equations
- Block carry-look-ahead
- Carry-select adder
- Carry-skip adder
- Carry-save adder
- Parallel-prefix adder
- Kogge–Stone adder concept
- Comparison of adder speed, area and complexity

For each bit:

\[
G_i=A_iB_i
\]

\[
P_i=A_i\oplus B_i
\]

\[
C_{i+1}=G_i+P_iC_i
\]

### 🔥⭐ 4.5 Binary Multiplication

- 🔥⭐ Basic multiplication algorithm
- 🔥⭐ Multiplicand and multiplier
- 🔥⭐ Partial products
- 🔥⭐ Shift-and-add multiplication
- 🔥⭐ Hardware multiplication unit
- 🔥⭐ Sequential multiplication
- 🔥⭐ Combinational multiplier
- 🔥⭐ Signed multiplication
- 🔥 Booth’s multiplication algorithm
- Modified Booth algorithm
- Carry-save multiplication
- 🔥 Array multiplier
- 🔥 Overflow in multiplication
- 🔥⭐ Worked numerical problems
- 🔥⭐ Algorithm and hardware diagram for multiplication in a processor
- 🔥 Four-bit binary multiplier design with detailed implementation
- 🔥 Booth multiplication example for \(16\times(-2)\)

### 🔥⭐ 4.6 Binary Division

- 🔥⭐ Dividend, divisor, quotient and remainder
- 🔥⭐ Shift-and-subtract division
- 🔥⭐ Restoring division algorithm
- 🔥⭐ Non-restoring division algorithm
- 🔥⭐ Signed binary division
- 🔥⭐ Hardware division unit
- 🔥 Division by zero
- 🔥 Overflow condition
- 🔥⭐ Comparison of restoring and non-restoring division
- 🔥⭐ Worked numerical problems
- 🔥 Complete division of \((1010)_2\) by \((0010)_2\) with all steps

### 🔥 4.7 Floating-Point Numbers

- 🔥 Need for floating-point representation
- 🔥 Scientific notation
- 🔥 Normalized and denormalized numbers
- 🔥 Sign, exponent and significand
- 🔥 Biased exponent
- 🔥 IEEE 754 standard
- 🔥 Single-precision format
- 🔥 Double-precision format
- Half-precision concept
- 🔥 Positive and negative zero
- 🔥 Infinity
- 🔥 Not a Number or NaN
- 🔥 Subnormal numbers
- 🔥 Conversion from decimal to IEEE 754
- 🔥 Conversion from IEEE 754 to decimal
- 🔥 Range and precision
- 🔥 Overflow and underflow
- Guard, round and sticky bits
- Rounding modes
- Rounding error
- Floating-point accuracy
- 🔥 IEEE 754 single-precision representation of \(-0.625_{10}\)
- 🔥 IEEE 754 double-precision representation of \(-0.625_{10}\)

\[
N=(-1)^S\times(1.F)\times2^{E-\text{Bias}}
\]

### 4.8 Floating-Point Addition and Subtraction

- Compare exponents
- Align significands
- Add or subtract significands
- Determine result sign
- Normalize result
- Round result
- Check overflow and underflow
- Hardware flowchart
- Worked numerical examples

### ⭐ 4.9 Floating-Point Multiplication

- ⭐ Determine sign
- ⭐ Add exponents
- ⭐ Subtract exponent bias
- ⭐ Multiply significands
- ⭐ Normalize result
- ⭐ Round result
- ⭐ Check exceptional conditions
- ⭐ Hardware flowchart for floating-point multiplication
- ⭐ Worked numerical examples

### 4.10 Floating-Point Division

- Determine sign
- Subtract exponents
- Add exponent bias
- Divide significands
- Normalize and round
- Check exceptional conditions
- Hardware flowchart
- Worked numerical examples

## Chapter 5: Memory System

### 5.1 Need for a Hierarchical Memory System

- Difference between processor speed and memory speed
- Memory wall
- Memory hierarchy
- Registers
- Cache memory
- Main memory
- Secondary storage
- Archival storage
- Speed, cost and capacity relationship
- Locality of reference
- Temporal locality
- Spatial locality
- Sequential locality
- Average Memory Access Time
- Principle of inclusion

### 🔥 5.2 Types and Characteristics of Memory

- Memory capacity
- 🔥 Word and addressable unit
- 🔥 Definition and characteristics of a word
- 🔥 Definition and role of an address
- Access method
- Sequential access
- Direct access
- Random access
- Associative access
- 🔥 Access time
- 🔥 Memory Access Time
- Memory cycle time
- Transfer rate
- Volatile and non-volatile memory
- Read-only and read-write memory
- Semiconductor memory
- Magnetic memory
- Optical memory
- SRAM
- DRAM
- SDRAM and DDR memory
- ROM
- PROM
- EPROM
- EEPROM
- Flash memory
- Hard disk and solid-state drive
- Comparison of different memory types

### 🔥 5.3 Main Memory Organization

- 🔥 Memory cells
- 🔥 Internal organization of bit cells in a memory chip
- 🔥 Memory words
- 🔥 Memory address
- 🔥 Byte-addressable memory
- 🔥 Word-addressable memory
- 🔥 Memory chips
- 🔥 Address decoding
- 🔥 Memory expansion
- 🔥 Increasing word length
- 🔥 Increasing number of words
- Memory banks
- Memory interleaving
- Low-order interleaving
- High-order interleaving
- Error detection and correction
- Parity bit
- ECC memory
- Hamming code concept
- 🔥 Basic connection of memory to the processor
- 🔥 Address, data and control-line connections between processor and memory
- 🔥 Memory-module design using smaller memory chips
- 🔥 Design of a \(2M\times32\) memory module using \(512K\times8\) static memory chips
- 🔥 Chip-count, row/column organization and address-decoder calculation

### 🔥 5.4 Cache Memory Fundamentals

- 🔥 Meaning and purpose of cache
- 🔥 Cache hit
- 🔥 Cache miss
- 🔥 Hit rate and miss rate
- 🔥 Hit time
- 🔥 Miss penalty
- 🔥 Cache line or block
- 🔥 Cache controller
- 🔥 Cache mapping
- 🔥 Need for a mapping function in cache memory
- 🔥 Direct-mapped cache
- 🔥 Fully associative cache
- 🔥 Set-associative cache
- 🔥 Tag, index and offset fields
- 🔥 Valid bit
- 🔥 Dirty bit
- 🔥 Cache-address calculation
- 🔥 Cache size calculation
- 🔥 Read hit and read miss
- 🔥 Write hit and write miss
- 🔥 Worked example of cache hit, cache miss and miss penalty

\[
\text{AMAT}
=
\text{Hit Time}
+
(\text{Miss Rate}\times\text{Miss Penalty})
\]

### 🔥 5.5 Cache Replacement and Writing Policies

- Need for replacement
- Least Recently Used or LRU
- First In First Out or FIFO
- Random replacement
- Least Frequently Used or LFU
- 🔥 Write-through policy
- 🔥 Write-back policy
- 🔥 Advantages and disadvantages of write-through
- 🔥 Advantages and disadvantages of write-back
- 🔥 Comparison of write-through and write-back
- 🔥 Write allocate
- 🔥 No-write allocate
- 🔥 Write buffer
- Multilevel cache
- Inclusive, exclusive and non-inclusive cache
- Unified and split cache
- Instruction and data cache

### 5.6 Improving Cache Performance

- Reducing miss rate
- Reducing miss penalty
- Reducing hit time
- Compulsory miss
- Capacity miss
- Conflict miss
- Coherence miss
- Larger block size
- Larger cache
- Higher associativity
- Multilevel cache
- Victim cache
- Prefetching
- Critical-word-first
- Early restart
- Non-blocking cache
- Write buffer
- Cache optimization by compiler
- Loop interchange and loop blocking
- Cache performance numerical problems

### 🔥 5.7 Virtual Memory

- 🔥 Meaning and purpose of virtual memory
- 🔥 Virtual and physical addresses
- 🔥 Address translation
- 🔥 Page and page frame
- 🔥 Page table
- 🔥 Page Table Entry or PTE
- 🔥 Valid and dirty bits
- 🔥 Protection bits
- 🔥 Page fault
- 🔥 Page-fault handling
- 🔥 Demand paging
- 🔥 Translation Lookaside Buffer or TLB
- 🔥 TLB hit and miss
- Multilevel page table
- Inverted page table
- 🔥 Page size
- 🔥 Internal fragmentation
- 🔥 Memory protection
- Shared pages
- Virtual-memory access-time calculation

### 5.8 Memory Management Techniques

- Contiguous memory allocation
- Fixed partitioning
- Variable partitioning
- Internal fragmentation
- External fragmentation
- Compaction
- Paging
- Segmentation
- Segmentation with paging
- Page-replacement algorithms
- FIFO replacement
- Optimal replacement
- LRU replacement
- Clock or second-chance replacement
- Working-set concept
- Thrashing (অতিরিক্ত পেজ অদলবদলের কারণে ধীরগতি)
- Memory protection and sharing
- Comparison of paging and segmentation

### 5.9 Associative Memory

- Meaning of associative memory
- Content-Addressable Memory or CAM
- Search by content
- Match logic
- Associative-memory organization
- Read and write operations
- Mask register
- Exact and partial matching
- Applications in TLB and cache
- Advantages and disadvantages
- Associative memory versus conventional memory

## Chapter 6: Input/Output Organization

### 6.1 Accessing Input/Output Devices

- I/O device characteristics
- Peripheral devices
- I/O module
- I/O controller
- Device controller
- Data register
- Status register
- Control register
- I/O port
- Input and output instructions
- Memory-mapped I/O
- Isolated or port-mapped I/O
- Synchronous and asynchronous transfer
- Handshaking (সমন্বয় সংকেতের মাধ্যমে তথ্য বিনিময়)
- Serial and parallel communication
- I/O bus operation

### 6.2 Programmed Input/Output

- Meaning of programmed I/O
- Polling
- Busy-waiting
- Status checking
- Input operation sequence
- Output operation sequence
- Processor involvement
- Advantages and disadvantages
- Programmed I/O flowchart
- Suitable applications

### 6.3 Interrupts

- Meaning of interrupt
- Need for interrupt-driven I/O
- Interrupt-request signal
- Interrupt acknowledgement
- Interrupt Service Routine or ISR
- Interrupt vector
- Vectored and non-vectored interrupts
- Maskable and non-maskable interrupts
- Hardware and software interrupts
- Internal and external interrupts
- Interrupt priority
- Daisy-chain priority
- Parallel priority
- Nested interrupts
- Saving and restoring processor context
- Interrupt latency
- Return from interrupt
- Interrupt-driven I/O sequence
- Polling versus interrupt-driven I/O

### 6.4 Direct Memory Access

- Meaning and need for DMA
- DMA controller
- DMA registers
- DMA request and acknowledgement
- Data transfer between I/O and memory
- Bus arbitration
- Burst-mode DMA
- Cycle-stealing DMA
- Transparent DMA
- Block transfer
- Processor involvement
- DMA operation sequence
- Advantages and disadvantages
- Programmed I/O versus interrupt I/O versus DMA

### 6.5 Interface Circuits

- Purpose of an interface circuit
- I/O ports
- Data, status and control registers
- Address decoder
- Buffer register
- Tri-state buffer
- Handshaking circuits
- Strobe control
- Serial interface
- Parallel interface
- Synchronous interface
- Asynchronous interface
- Device-controller connection
- Input-interface circuit
- Output-interface circuit
- Typical interface-circuit diagram

### 6.6 Standard I/O Interfaces

- Need for standard interfaces
- Compatibility
- Data-transfer speed
- Device addressing
- Plug-and-play
- Error detection
- Physical and logical interface
- Serial versus parallel interface

### 6.7 PCI

- Meaning of Peripheral Component Interconnect
- PCI bus architecture
- PCI devices
- Bus master and target
- Address and data transfer
- Bus arbitration
- PCI configuration space
- PCI Express or PCIe
- PCIe lanes
- Point-to-point connection
- PCI versus PCIe
- Applications, advantages and limitations

### 6.8 SCSI

- Meaning of Small Computer System Interface
- SCSI architecture
- Initiator and target
- SCSI bus
- Device identification
- Command and data phases
- Parallel and Serial Attached SCSI
- Storage-device applications
- Advantages and limitations
- SCSI versus other storage interfaces

### 6.9 USB

- Meaning of Universal Serial Bus
- USB architecture
- Host, hub and device
- USB topology
- Endpoint and pipe
- USB transfer types
- Control transfer
- Bulk transfer
- Interrupt transfer
- Isochronous transfer
- Device enumeration
- Plug-and-play
- Power delivery
- USB connectors
- USB generations and speed classes
- Advantages and limitations

### 6.10 Comparison of I/O Interfaces

- PCI, PCIe, SCSI and USB comparison
- Serial versus parallel operation
- Internal versus external connection
- Transfer speed
- Device support
- Communication method
- Cost and complexity
- Common applications

## Supporting Topics Required for the Mini-Book

These topics are not always written separately in the syllabus, but they are necessary for understanding the main chapters:

- Boolean algebra and logic gates
- Combinational and sequential circuits
- Multiplexers and decoders
- Flip-flops and registers
- Counters
- 🔥 Binary and hexadecimal conversion
- 🔥 Signed-number representation
- 🔥 Register Transfer Language
- 🔥 Assembly-language basics
- 🔥⭐ MIPS instruction formats
- 🔥⭐ MIPS addressing modes
- 🔥 Memory-address calculation
- Basic operating-system concepts
- 🔥⭐ Basic compiler and assembler concepts
- 🔥 Finite State Machine
- 🔥⭐ Performance numerical problems
- 🔥⭐ Pipeline timing diagrams
- 🔥 Data-forwarding diagrams and examples
- 🔥 Cache numerical problems
- Virtual-memory numerical problems
- 🔥 IEEE 754 conversion problems
- Arithmetic algorithm flowcharts
- 🔥⭐ Multiplication and division algorithm flowcharts
- 🔥 Processor datapath and control-signal diagrams
- 🔥 Memory-chip organization and module-design problems
- 🔥⭐ Flynn’s classification diagram and comparison table
- ⭐ SPMD execution-model diagram and comparison
- ⭐ 80386, 80486 and Pentium comparison table
- ⭐ History timeline of computer architecture over the last 30 years

## Proposed Mini-Book Structure

The complete notes can be written in six main parts:

1. Fundamentals and ISA
2. Basic Processing Unit and Pipelining
3. Advanced ILP, Multicore and GPU
4. Computer Arithmetic
5. Memory Hierarchy and Virtual Memory
6. Input/Output Organization

Every topic will contain:

- Exam-ready definition
- Direct and easy explanation
- Important points and features
- Required classifications
- Working procedure
- Advantages and disadvantages
- Comparison tables
- Markdown-friendly equations
- Solved numerical examples
- Simple book-style diagrams
- Common hard words with Bangla meanings
- Short-note and broad-question preparation
- Important exam-writing points
