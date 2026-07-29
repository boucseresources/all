# Computer Architecture: Complete Study Index

## Priority Marker Guide

- 🔥 **Current teacher’s suggestion**
- ⭐ **Previous faculty question**
- 📘 **Another teacher’s suggestion from the supplied handwritten images**
- Two or three emojis together mean that the topic appears in multiple suggestion sets.

> The emojis mark priority only. Every unmarked topic is still part of the complete syllabus.

## Table of Contents

1. [Fundamentals and Instruction Set Architecture](#chapter-1-fundamentals-and-instruction-set-architecture)
2. [Basic Processing Unit and Pipelining](#chapter-2-basic-processing-unit-and-pipelining)
3. [Advanced ILP, Multicore and GPU](#chapter-3-advanced-ilp-multicore-and-gpu)
4. [Arithmetic for Computers](#chapter-4-arithmetic-for-computers)
5. [Memory System](#chapter-5-memory-system)
6. [Input/Output Organization](#chapter-6-inputoutput-organization)
7. [Supporting Topics](#supporting-topics-required-for-the-mini-book)
8. [Exact Teacher-Suggested Practice Problems](#exact-teacher-suggested-practice-problems)

# Chapter 1: Fundamentals and Instruction Set Architecture

## 1.1 Introduction to Computer Architecture

- Meaning of computer architecture
- Meaning of computer organization
- Meaning of computer design
- Difference among architecture, organization and design
- 🔥 Classes of computers
- 🔥 Characteristics of different classes of computers
- Personal computers
- Workstations
- Servers
- Mainframe computers
- Supercomputers
- Embedded systems
- Mobile computers
- Cloud and warehouse-scale computers
- General-purpose and special-purpose computers
- Analog, digital and hybrid computers
- ⭐📘 Historical development of computer architecture
- ⭐ Development of computer architecture during the last 30 years
- ⭐ Evolution of microprocessors
- ⭐ Intel 80386, 80486 and Pentium processors
- Computer generations and enabling technologies
- Role and importance of computer architecture

## 1.2 Models and Classes of Computer Architecture

- 🔥📘 Von Neumann architecture
- 📘 Harvard architecture
- Modified Harvard architecture
- Stored-program concept
- Program and data memory
- Von Neumann bottleneck
- Comparison of Von Neumann and Harvard architectures
- 🔥⭐📘 Flynn’s classification
- 🔥⭐📘 SISD architecture
- 🔥⭐📘 SIMD architecture
- 🔥⭐📘 MISD architecture
- 🔥⭐📘 MIMD architecture
- ⭐📘 SPMD model
- Shared-memory architecture
- Distributed-memory architecture
- Multiprocessor and multicomputer systems
- Scalar, vector and parallel computers

## 1.3 Functional Units and System Layers

- 🔥 Basic functional units of a digital computer
- 🔥 Input unit
- 🔥 Output unit
- 🔥 Memory unit
- 🔥 Arithmetic and Logic Unit
- 🔥 Control Unit
- 🔥 Processor or CPU
- Registers
- Main memory
- Secondary storage
- 🔥 Interconnection among functional units
- 🔥 System bus
- 🔥 Data bus
- 🔥 Address bus
- 🔥 Control bus
- 🔥 Bus width
- 🔥 Bus timing
- 🔥 Bus arbitration
- 🔥 Processor bus structure
- Single-bus organization
- Two-bus organization
- 🔥 Three-bus organization
- 🔥 Layers of a computer system
- 🔥 Application layer
- 🔥 High-level language layer
- 🔥 Assembly-language layer
- 🔥 Operating-system layer
- 🔥 Instruction Set Architecture layer
- 🔥 Microarchitecture layer
- 🔥 Digital-logic layer
- 🔥 Hardware layer
- Abstraction in computer systems
- Technology development across hardware generations

## 1.4 Software

- Meaning of software
- System software
- Application software
- Operating system
- Utility software
- Device driver
- Language translator
- 🔥 Compiler
- Interpreter
- 🔥 Assembler
- 🔥 Linker
- 🔥 Loader
- Library files
- Firmware
- Difference between hardware and software

## 1.5 Hardware–Software Interface

- Meaning of hardware–software interface
- Role of the operating system
- 🔥 Role of Instruction Set Architecture
- System calls
- Device drivers
- Application Binary Interface or ABI
- Registers visible to software
- Memory address space
- Input/output address space
- Interrupt and exception interface
- User mode and supervisor mode
- 🔥 Relationship among application, operating system, ISA and hardware
- 🔥 Abstraction layers of a computer system

## 1.6 Translation from High-Level Language to Hardware Language

- 🔥 High-level language
- 🔥 Assembly language
- 🔥 Machine language
- 🔥 Source program
- 🔥 Object program
- 🔥 Executable program
- 🔥 Compilation process
- 🔥 Preprocessor
- 🔥 Compiler
- 🔥 Assembler
- 🔥 Linker
- 🔥 Loader
- Static and dynamic linking
- Interpretation process
- Just-In-Time or JIT compilation
- 🔥 Translation of statements into assembly instructions
- 🔥📘 Representation of expressions in assembly language
- 🔥 Translation of assembly into machine code
- 🔥 Instruction encoding
- Binary execution by hardware
- 🔥 Complete program-translation diagram
- 🔥 Example of translating a C statement into assembly and machine instructions

## 1.7 Instruction Set Architecture

- 🔥 Definition of ISA
- 🔥 Importance of ISA
- 🔥 ISA as the interface between hardware and software
- Programmer-visible components
- 🔥 Instruction types
- Data-transfer instructions
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
- 🔥 Opcode
- 🔥 Operand
- 🔥 Register fields
- 🔥 Immediate fields
- 🔥 Address fields
- 🔥 Number of operands
- Zero-address instruction
- 📘 One-address instruction
- Two-address instruction
- 📘 Three-address instruction
- Data types supported by ISA
- Register organization
- General-purpose and special-purpose registers
- Memory organization
- 🔥📘 Endianness
- 🔥📘 Big-endian byte order
- 🔥📘 Little-endian byte order
- Alignment
- 🔥📘 Addressing modes
- Immediate addressing
- Register addressing
- 🔥📘 Direct addressing
- 🔥📘 Indirect addressing
- Register-indirect addressing
- Indexed addressing
- Base addressing
- Relative or PC-relative addressing
- Stack addressing
- Auto-increment and auto-decrement addressing
- 🔥📘 Instruction encoding and decoding
- Orthogonality
- Compatibility and extensibility

## 1.8 ISA Styles and Features

- Accumulator-based architecture
- Stack-based architecture
- General-purpose register architecture
- Register–memory architecture
- Load–store architecture
- Fixed-length instructions
- Variable-length instructions
- Memory-to-memory operation
- Register-to-register operation
- Condition codes and status flags
- Procedure and function support
- Privileged-operation support
- Interrupt and exception support
- Scalar instructions
- ⭐📘 Vector instructions
- 🔥⭐📘 Array processing
- 🔥⭐📘 Vector processing
- 🔥⭐📘 Vector processor
- 🔥⭐📘 Array processor
- SIMD instructions
- Atomic instructions
- ISA design principles
- Code density
- Hardware complexity
- Compiler friendliness

## 1.9 RISC Architecture

- 🔥 Meaning of RISC
- 🔥 Design philosophy
- 🔥 Simple instruction set
- 🔥 Fixed instruction length
- 🔥 Load–store operation
- 🔥 Large register set
- 🔥 Simple addressing modes
- 🔥 Few instruction formats
- 🔥 Pipeline-friendly design
- 🔥 Advantages and disadvantages
- 🔥 Examples: MIPS, ARM and RISC-V

## 1.10 CISC Architecture

- 🔥 Meaning of CISC
- 🔥 Design philosophy
- 🔥 Large and complex instruction set
- 🔥 Variable-length instructions
- 🔥 Multiple addressing modes
- 🔥 Memory-to-memory instructions
- 🔥 Microprogrammed control
- 🔥 Advantages and disadvantages
- 🔥 Examples: x86 and VAX
- 🔥 Three-bus CISC-style processor organization

## 1.11 RISC and CISC Comparison

- 🔥 Instruction complexity
- 🔥 Instruction length
- 🔥 Number of registers
- 🔥 Addressing modes
- 🔥 Control-unit design
- 🔥 Memory access
- 🔥 Pipelining suitability
- 🔥 Compiler complexity
- 🔥 Code size
- 🔥 Execution speed
- 🔥 Power consumption
- 🔥 Modern combination of RISC and CISC ideas

## 1.12 Performance Metrics

- 🔥📘 Meaning of computer performance
- 🔥📘 Response time or latency
- 🔥📘 Throughput
- 🔥📘 Difference between response time and throughput
- 🔥📘 Execution time
- 🔥 CPU execution time
- User CPU time
- System CPU time
- Elapsed time
- 🔥 Clock cycle
- 🔥📘 Clock rate
- 🔥 Clock-cycle time
- 🔥 Instruction count
- 🔥📘 Cycles Per Instruction or CPI
- Instructions Per Cycle or IPC
- 🔥📘 Million Instructions Per Second or MIPS
- Floating-Point Operations Per Second or FLOPS
- Benchmark
- Workload
- 🔥⭐📘 Speedup
- 🔥 Performance ratio
- Power and energy consumption
- Performance per watt
- Cost-performance ratio
- Reliability and availability
- 🔥 CPU performance equation
- 🔥 Average CPI calculation
- 🔥 Comparison of processors
- Effect of compiler, ISA and implementation on performance
- Common mistakes in performance comparison

Important equations:

\[
\text{CPU Time}
=
\text{Instruction Count}\times\text{CPI}\times\text{Clock Cycle Time}
\]

\[
\text{CPU Time}
=
\frac{\text{Instruction Count}\times\text{CPI}}{\text{Clock Rate}}
\]

\[
\text{Performance}=\frac{1}{\text{Execution Time}}
\]

\[
\text{Speedup}
=
\frac{\text{Old Execution Time}}{\text{New Execution Time}}
\]

## 1.13 Amdahl’s Law

- ⭐📘 Meaning and purpose of Amdahl’s Law
- ⭐📘 Enhanced and unaffected portions
- ⭐📘 Fraction of execution time improved
- ⭐📘 Enhancement factor
- ⭐📘 Overall speedup
- ⭐📘 Maximum possible speedup
- ⭐📘 Limitation of parallel improvement
- ⭐📘 Sequential bottleneck
- ⭐📘 Numerical problems
- ⭐📘 Application to processors, memory and parallel systems
- ⭐📘 Amdahl’s Law versus ideal speedup
- 📘 Moore’s Law
- 📘 Moore’s Law versus Amdahl’s Law

\[
\text{Overall Speedup}
=
\frac{1}
{(1-f)+\frac{f}{S}}
\]

Here, \(f\) is the improved fraction and \(S\) is its speedup.

## 1.14 Case Studies of ISA

- 🔥 MIPS ISA
- 🔥 MIPS register organization
- 🔥 MIPS instruction formats: R, I and J
- 🔥 MIPS addressing modes
- 🔥 MIPS arithmetic, memory and branch instructions
- ARM ISA
- ARM registers and instruction styles
- Conditional execution in ARM
- ⭐ x86 ISA
- ⭐ x86 register organization
- ⭐ Variable-length x86 instructions
- ⭐ Intel 80386 architecture
- ⭐ Intel 80486 architecture
- ⭐ Pentium architecture
- RISC-V ISA
- RISC-V base instruction formats
- Comparison of MIPS, ARM, x86 and RISC-V
- 🔥📘 Example instruction translation for an ISA

# Chapter 2: Basic Processing Unit and Pipelining

## 2.1 Components of the Processor

- Processor organization
- 🔥 Arithmetic and Logic Unit
- 🔥 Control Unit
- 🔥 Register file
- Program Counter or PC
- Instruction Register or IR
- Memory Address Register or MAR
- Memory Data Register or MDR
- General-purpose registers
- Stack Pointer
- Status or flag register
- 🔥 Instruction decoder
- Clock and timing unit
- 🔥 Internal CPU buses
- Multiplexer
- Sign-extension unit
- Shift unit
- Adder
- Pipeline registers
- 🔥 Connections among processor components

## 2.2 Datapath

- 🔥 Meaning of datapath
- Single-bus datapath
- Two-bus datapath
- 🔥 Three-bus datapath
- 🔥 Three-bus CISC-style processor organization
- Register-file operation
- 🔥 ALU input selection
- 🔥 Multiplexer operation
- Immediate-value generation
- Sign extension and zero extension
- PC update circuit
- Branch-target calculation
- Jump-target calculation
- 🔥 Memory-access path
- 🔥 Single-cycle datapath
- 🔥 Multicycle datapath
- 🔥 Datapath for R-type instruction
- 🔥 Datapath for load instruction
- 🔥 Datapath for store instruction
- 🔥 Datapath for branch instruction
- Datapath for jump instruction
- 🔥 Block diagram of a processor datapath
- 🔥 Datapath modifications for data forwarding

## 2.3 Control Unit

- 🔥 Purpose of the control unit
- 🔥 Control signals
- 🔥 Instruction decoding
- 🔥 ALU control
- 🔥 Register control
- 🔥 Memory control
- 🔥 Multiplexer control
- 🔥 PC control
- Main decoder
- ALU decoder
- 🔥 Timing and sequencing
- Control word
- 🔥📘 Control-state diagram
- 🔥📘 Finite State Machine or FSM
- Single-cycle control
- Multicycle control
- Pipelined control

## 2.4 Execution of a Complete Instruction

- 🔥📘 Instruction cycle
- 🔥📘 Instruction-cycle state diagram
- 🔥📘 Instruction fetch
- 🔥📘 Instruction decode
- 🔥📘 Operand fetch
- 🔥📘 Execute
- 🔥📘 Memory access
- 🔥📘 Write-back
- 🔥📘 PC update
- 🔥 Register Transfer Language or RTL
- 🔥 Micro-operations
- 🔥 Fetch-cycle micro-operations
- 🔥📘 Execution of arithmetic instructions
- Execution of logical instructions
- 🔥📘 Execution of load and store instructions
- 🔥 Execution of branch and jump instructions
- Procedure call and return
- 🔥📘 Complete instruction-execution examples
- 🔥 Single-cycle versus multicycle execution
- 🔥 Execution steps for `Load R2, LOC`
- 🔥 Execution steps for `Add (R3), R1`
- 📘 One-operand execution such as `MUL BX`
- 📘 Three-address execution such as `ADD R4, R3, R2`

## 2.5 Hardwired Control

- Meaning of hardwired control
- Control-signal generation
- Opcode decoder
- Sequence counter
- Timing signals
- State-machine implementation
- Advantages and disadvantages
- Speed and hardware complexity
- Suitable applications

## 2.6 Microprogrammed Control

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
- Microinstruction formats
- Control-store organization
- Nanoprogramming
- Advantages and disadvantages
- Hardwired versus microprogrammed control
- 🔥 Microprogrammed control for a branch instruction

## 2.7 Instruction-Level Parallelism

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
- Measuring ILP using CPI and IPC

## 2.8 Basic Concepts of Pipelining

- 🔥 Meaning of pipelining
- 🔥 Laundry or assembly-line analogy
- 🔥 Pipeline stages
- 🔥 Five-stage instruction pipeline
- 🔥 IF: Instruction Fetch
- 🔥 ID: Instruction Decode
- 🔥 EX: Execute
- 🔥 MEM: Memory Access
- 🔥 WB: Write Back
- Pipeline registers
- Pipeline clock cycle
- Pipeline latency
- 🔥📘 Pipeline throughput
- Pipeline filling and draining
- 🔥 Ideal pipeline speedup
- Pipeline efficiency
- 🔥 Pipeline timing diagram
- 🔥 Non-pipelined versus pipelined processor
- Balanced and unbalanced pipeline stages
- Pipeline depth
- 🔥 Pipeline performance calculations
- 🔥 How pipelining increases processor performance
- 🔥 Ideal pipelined operation

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

## 2.9 Pipelined Implementation of Datapath and Control

- 🔥 Pipelined datapath
- IF/ID pipeline register
- ID/EX pipeline register
- EX/MEM pipeline register
- MEM/WB pipeline register
- Movement of instructions through stages
- Passing data and control signals
- Pipelined control signals
- Register-file timing
- Memory-operation timing
- Branch handling in pipeline
- Pipeline control unit
- 🔥 Forwarding unit
- 🔥 Hazard-detection unit
- 🔥 Stalling and flushing
- Complete pipelined instruction execution
- 🔥 Pipeline timing table and diagram
- 🔥 Datapath modification to support data forwarding

## 2.10 Structural Hazards

- 🔥 Meaning of structural hazard
- 🔥 Resource conflict
- Single memory for instruction and data
- Register-file conflicts
- ALU resource conflicts
- Detection of structural hazards
- Pipeline stalling
- Duplication of hardware resources
- Separate instruction and data cache
- Multiport memory
- 🔥 Examples and timing diagrams

## 2.11 Data Hazards

- 🔥📘 Meaning of data hazard
- 🔥📘 Read After Write or RAW hazard
- 🔥 Write After Read or WAR hazard
- 🔥 Write After Write or WAW hazard
- True dependence
- Anti-dependence
- Output dependence
- 🔥 Load-use hazard
- 🔥 Hazard detection
- 🔥 Operand forwarding or bypassing
- 🔥 EX-to-EX forwarding
- 🔥 MEM-to-EX forwarding
- 🔥 Pipeline stall
- 🔥 Bubble or NOP insertion
- Compiler instruction scheduling
- Register renaming
- 🔥 Side effects of hazards on pipeline performance
- 🔥 Examples and timing diagrams

## 2.12 Control Hazards

- 🔥📘 Meaning of control hazard
- 🔥📘 Branch instruction
- Jump instruction
- Branch outcome and branch target
- Branch penalty
- 🔥 Pipeline flushing
- Stall until branch decision
- Early branch resolution
- Delayed branch
- Static branch prediction
- Dynamic branch prediction
- One-bit predictor
- Two-bit predictor
- Branch History Table
- Branch Target Buffer
- Return Address Stack
- Prediction accuracy
- Misprediction penalty
- 🔥 Examples and timing diagrams

## 2.13 Exception Handling

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
- Transferring control to a handler
- Returning from an exception
- Exception handling in a pipeline
- Flushing affected instructions
- Handling multiple simultaneous exceptions

# Chapter 3: Advanced ILP, Multicore and GPU

## 3.1 Exploitation of More ILP

- Review of instruction-level parallelism
- Basic block
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

## 3.2 Hardware Approaches

- 🔥 Dynamic instruction scheduling
- 🔥 Out-of-order execution
- In-order issue and completion
- Out-of-order issue and completion
- Multiple functional units
- Register renaming
- Reorder buffer
- Reservation stations
- Scoreboarding
- 🔥 Tomasulo’s algorithm
- Dynamic branch prediction
- Speculative execution
- Load/store queues
- Memory disambiguation
- In-order retirement
- Precise exception support

## 3.3 Software and Compiler Approaches

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

## 3.4 Dynamic Scheduling

- 🔥 Need for dynamic scheduling
- 🔥 Dynamic-scheduler block diagram
- 🔥 Handling variable execution latency
- Scoreboarding technique
- 🔥 Tomasulo’s algorithm
- 🔥 Issue, execute and write-result stages
- Reservation station
- Common Data Bus
- Register-status table
- Operand availability
- Register renaming
- RAW, WAR and WAW handling
- Out-of-order execution
- In-order retirement
- Worked instruction-scheduling example

## 3.5 Speculation

- Meaning of speculation
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

## 3.6 Multiple-Issue Processors

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

## 3.7 ILP and Thread-Level Parallelism

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
- ⭐📘 Single Program, Multiple Data or SPMD
- 🔥⭐📘 Flynn’s classification in parallel processing

## 3.8 Multicore Processors

- Meaning of multicore processor
- Single-core versus multicore
- Homogeneous and heterogeneous cores
- Shared and private caches
- Inter-core communication
- Cache coherence
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

## 3.9 Graphics and Computing GPUs

- CPU versus GPU
- GPU architecture
- Graphics pipeline
- Streaming multiprocessor
- GPU core
- 🔥⭐📘 SIMD and SIMT execution
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

## 3.10 Current Processor Trends

- Many-core processors
- Heterogeneous computing
- Chiplet-based processors
- System-on-Chip or SoC
- AI and machine-learning accelerators
- Tensor-processing units
- Neural-processing units
- Energy-efficient architecture
- Domain-specific architecture
- Edge-computing processors
- Mobile-processor architecture
- Vector extensions
- Open ISA such as RISC-V
- Advanced packaging
- 3D stacking
- Security-related processor features
- Cloud and data-centre processors

# Chapter 4: Arithmetic for Computers

## 4.1 Number Representation Fundamentals

- Binary, octal, decimal and hexadecimal systems
- Number-system conversion
- Unsigned integers
- Signed-magnitude representation
- One’s complement
- Two’s complement
- Range of signed and unsigned numbers
- Sign extension
- Fixed-point numbers
- Overflow and underflow
- Binary fractions
- Arithmetic shift and logical shift

## 4.2 Binary Addition

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

## 4.3 Binary Subtraction

- Rules of binary subtraction
- Direct binary subtraction
- Subtraction using one’s complement
- Subtraction using two’s complement
- Borrow and overflow
- Signed-number subtraction
- Adder–subtractor implementation
- Examples and numerical problems

## 4.4 Fast Adders

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

## 4.5 Binary Multiplication

- 🔥📘 Basic multiplication algorithm
- 🔥📘 Multiplication-algorithm flowchart
- 🔥📘 Multiplicand and multiplier
- 🔥📘 Partial products
- 🔥📘 Shift-and-add multiplication
- 🔥📘 Hardware multiplication unit
- 🔥📘 Algorithm and hardware diagram for multiplication
- Sequential multiplication
- 🔥📘 Combinational multiplier
- 🔥📘 Signed multiplication
- 🔥📘 Booth’s multiplication algorithm
- Modified Booth algorithm
- Carry-save multiplication
- 🔥📘 Array multiplier
- Overflow in multiplication
- 🔥📘 Worked numerical problems
- 🔥 Detailed design of a 4-bit binary multiplier

## 4.6 Binary Division

- 🔥📘 Dividend, divisor, quotient and remainder
- 🔥📘 Shift-and-subtract division
- 🔥📘 Division-algorithm flowchart
- 🔥📘 Restoring division algorithm
- 🔥📘 Non-restoring division algorithm
- Signed binary division
- 🔥📘 Hardware division unit
- Division by zero
- Overflow condition
- Comparison of restoring and non-restoring division
- 🔥📘 Worked numerical problems

## 4.7 Floating-Point Numbers

- Need for floating-point representation
- Scientific notation
- Normalized and denormalized numbers
- Sign, exponent and significand
- Biased exponent
- 🔥 IEEE 754 standard
- 🔥 Single-precision format
- 🔥 Double-precision format
- Half-precision concept
- Positive and negative zero
- Infinity
- Not a Number or NaN
- Subnormal numbers
- 🔥 Conversion from decimal to IEEE 754
- 🔥 Conversion from IEEE 754 to decimal
- Range and precision
- Overflow and underflow
- Guard, round and sticky bits
- Rounding modes
- Rounding error
- Floating-point accuracy

\[
N=(-1)^S\times(1.F)\times2^{E-\text{Bias}}
\]

## 4.8 Floating-Point Addition and Subtraction

- Compare exponents
- Align significands
- Add or subtract significands
- Determine result sign
- Normalize result
- Round result
- Check overflow and underflow
- Hardware flowchart
- Worked numerical examples

## 4.9 Floating-Point Multiplication

- Determine sign
- Add exponents
- Subtract exponent bias
- Multiply significands
- Normalize result
- Round result
- Check exceptional conditions
- Hardware flowchart
- Worked numerical examples

## 4.10 Floating-Point Division

- Determine sign
- Subtract exponents
- Add exponent bias
- Divide significands
- Normalize and round
- Check exceptional conditions
- Hardware flowchart
- Worked numerical examples

# Chapter 5: Memory System

## 5.1 Need for a Hierarchical Memory System

- Difference between processor speed and memory speed
- Memory wall
- Memory hierarchy
- Registers
- Cache memory
- Main memory
- Secondary storage
- Archival storage
- Speed, cost and capacity relationship
- 🔥📘 Locality of reference
- 🔥📘 Temporal locality
- 🔥📘 Spatial locality
- Sequential locality
- Average Memory Access Time
- Principle of inclusion

## 5.2 Types and Characteristics of Memory

- Memory capacity
- 🔥 Word and addressable unit
- Access method
- Sequential access
- Direct access
- Random access
- 📘 Associative access
- 🔥 Memory access time
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

## 5.3 Main Memory Organization

- 🔥 Memory cells
- 🔥 Internal organization of bit cells
- 🔥 Memory words
- 🔥 Memory address
- Byte-addressable memory
- Word-addressable memory
- 🔥📘 Memory chips and memory blocks
- 🔥📘 Address decoding
- 🔥📘 Memory expansion
- 🔥📘 Increasing word length
- 🔥📘 Increasing number of words
- Memory banks
- Memory interleaving
- Low-order interleaving
- High-order interleaving
- Error detection and correction
- Parity bit
- ECC memory
- Hamming-code concept
- 🔥📘 Memory-module design using smaller memory chips
- 📘 Design of a \(1K\times8\) memory
- 🔥 Design of a \(2M\times32\) memory with \(512K\times8\) SRAM chips

## 5.4 Cache Memory Fundamentals

- 🔥📘 Meaning and purpose of cache
- 🔥📘 Cache hit
- 🔥📘 Cache miss
- 🔥📘 Hit rate
- 🔥📘 Miss rate
- Hit time
- 🔥📘 Miss penalty
- 🔥📘 Cache line or memory block
- Cache controller
- 🔥📘 Cache mapping
- 🔥📘 Mapping function
- 🔥📘 Direct-mapped cache
- 🔥📘 Fully associative cache
- 🔥📘 Set-associative cache
- 🔥📘 Tag, index and offset fields
- Valid bit
- Dirty bit
- Cache-address calculation
- Cache-size calculation
- Read hit and read miss
- Write hit and write miss

\[
\text{AMAT}
=
\text{Hit Time}
+
(\text{Miss Rate}\times\text{Miss Penalty})
\]

## 5.5 Cache Replacement and Writing Policies

- Need for replacement
- Least Recently Used or LRU
- First In First Out or FIFO
- Random replacement
- Least Frequently Used or LFU
- 🔥 Write-through policy
- 🔥 Write-back policy
- 🔥 Advantages and disadvantages of write-through
- 🔥 Advantages and disadvantages of write-back
- Write allocate
- No-write allocate
- Write buffer
- Multilevel cache
- Inclusive, exclusive and non-inclusive cache
- Unified and split cache
- Instruction and data cache

## 5.6 Improving Cache Performance

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
- Cache-performance numerical problems

## 5.7 Virtual Memory

- 🔥📘 Meaning and purpose of virtual memory
- 🔥📘 Virtual and physical addresses
- 🔥📘 Address translation
- 🔥📘 Mapping between virtual and physical memory
- Page and page frame
- Page table
- Page Table Entry or PTE
- Valid and dirty bits
- Protection bits
- Page fault
- Page-fault handling
- Demand paging
- Translation Lookaside Buffer or TLB
- TLB hit and miss
- Multilevel page table
- Inverted page table
- Page size
- Internal fragmentation
- Memory protection
- Shared pages
- Virtual-memory access-time calculation

## 5.8 Memory Management Techniques

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
- Thrashing
- Memory protection and sharing
- Comparison of paging and segmentation

## 5.9 Associative Memory

- 📘 Meaning of associative memory
- 📘 Content-Addressable Memory or CAM
- 📘 Search by content
- 📘 Match logic
- 📘 Associative-memory organization
- 📘 Read and write operations
- 📘 Mask register
- 📘 Exact and partial matching
- 📘 Applications in TLB and cache
- 📘 Advantages and disadvantages
- 📘 Associative memory versus conventional memory

# Chapter 6: Input/Output Organization

## 6.1 Accessing Input/Output Devices

- I/O-device characteristics
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
- Handshaking
- Serial and parallel communication
- I/O bus operation

## 6.2 Programmed Input/Output

- Meaning of programmed I/O
- Polling
- Busy-waiting
- Status checking
- Input-operation sequence
- Output-operation sequence
- Processor involvement
- Advantages and disadvantages
- Programmed-I/O flowchart
- Suitable applications

## 6.3 Interrupts

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

## 6.4 Direct Memory Access

- 📘 Meaning and need for DMA
- 📘 DMA controller
- 📘 DMA registers
- 📘 DMA request and acknowledgement
- 📘 Data transfer between I/O and memory
- 📘 Bus arbitration
- 📘 Burst-mode DMA
- 📘 Cycle-stealing DMA
- 📘 Transparent DMA
- 📘 Block transfer
- 📘 Processor involvement
- 📘 DMA operation sequence
- 📘 Advantages and disadvantages
- 📘 Programmed I/O versus interrupt I/O versus DMA

## 6.5 Interface Circuits

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

## 6.6 Standard I/O Interfaces

- Need for standard interfaces
- Compatibility
- Data-transfer speed
- Device addressing
- Plug-and-play
- Error detection
- Physical and logical interface
- Serial versus parallel interface

## 6.7 PCI

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

## 6.8 SCSI

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

## 6.9 USB

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

## 6.10 Comparison of I/O Interfaces

- PCI, PCIe, SCSI and USB comparison
- Serial versus parallel operation
- Internal versus external connection
- Transfer speed
- Device support
- Communication method
- Cost and complexity
- Common applications

# Supporting Topics Required for the Mini-Book

- Boolean algebra and logic gates
- Combinational and sequential circuits
- Multiplexers and decoders
- Flip-flops and registers
- Counters
- Binary and hexadecimal conversion
- Signed-number representation
- 🔥 Register Transfer Language
- 🔥📘 Assembly-language basics
- 🔥 MIPS instruction formats
- 🔥📘 Memory-address calculation
- Basic operating-system concepts
- 🔥 Basic compiler and assembler concepts
- 🔥📘 Finite State Machine
- 🔥⭐📘 Performance numerical problems
- 🔥 Pipeline timing diagrams
- 🔥📘 Cache numerical problems
- 🔥📘 Virtual-memory numerical problems
- 🔥 IEEE 754 conversion problems
- 🔥📘 Arithmetic-algorithm flowcharts

# Exact Teacher-Suggested Practice Problems

## Current Teacher’s Exact Priority Problems 🔥

1. 🔥 What are the classes of computers? Explain their characteristics.
2. 🔥 Explain the layers of computer-system architecture with a neat diagram.
3. 🔥 Define throughput and response time. Compare them as performance measures.
4. 🔥 Discuss the basic functional units of a computer.
5. 🔥 Briefly discuss the bus structure of a processor.
6. 🔥 Define ISA and explain MIPS instruction formats with examples.
7. 🔥 Differentiate between RISC and CISC.
8. 🔥 Write the execution steps of `Load R2, LOC`.
9. 🔥 Explain the characteristics of a RISC processor.
10. 🔥 Draw the three-bus CISC-style processor organization.
11. 🔥 Write the execution steps and architecture for `Add (R3), R1`.
12. 🔥 Explain MIPS addressing modes with examples.
13. 🔥 Translate `f = (a + b) - (c + d); g = f + A[10];` into MIPS assembly.
14. 🔥 Explain the complete compilation process of a C program.
15. 🔥 Explain various addressing modes with examples.
16. 🔥 Define an instruction and explain its computer representation.
17. 🔥 Explain the processor datapath with a block diagram.
18. 🔥 Explain datapath control signals.
19. 🔥 Explain a dynamic scheduler with a block diagram.
20. 🔥 Explain a microprogrammed control unit for a branch instruction.
21. 🔥 Explain the purpose of a control unit.
22. 🔥 Define word, address and memory access time.
23. 🔥 Explain how pipelining increases processor performance.
24. 🔥 Explain ideal pipelined operation.
25. 🔥 Explain the issues of pipelined operation.
26. 🔥 Explain operand forwarding with an example.
27. 🔥 Show datapath modifications for data forwarding.
28. 🔥 Define a data hazard, its solutions and its performance effects.
29. 🔥 Show a processor multiplication algorithm and hardware with an example.
30. 🔥 Divide \((1010)_2\) by \((0010)_2\), showing all steps.
31. 🔥 Represent \(-0.625_{10}\) in IEEE 754 single and double precision.
32. 🔥 Design a 4-bit binary multiplier.
33. 🔥 Apply Booth’s algorithm to \(16\times(-2)\).
34. 🔥 Explain performance using clock rate, CPI and MIPS.
35. 🔥 Solve the P1, P2 and P3 processor-performance problem.
36. 🔥 Explain Flynn’s classification with examples.
37. 🔥 Define cache, cache hit, cache miss and miss penalty.
38. 🔥 Compare write-through and write-back cache policies.
39. 🔥 Write RTL for MIPS `addu`, `addi`, `lw`, `sw` and `beq`.
40. 🔥 Describe the basic connection of memory to a processor.
41. 🔥 Explain the internal organization of bit cells in a memory chip.
42. 🔥 Design a \(2M\times32\) memory using \(512K\times8\) SRAM chips.
43. 🔥 Explain virtual memory and the need for a cache-mapping function.

## Another Teacher’s Exact Priority Topics 📘

1. 📘 Von Neumann architecture and the two basic computer-architecture models.
2. 📘 Throughput and speedup.
3. 📘 Multiplication and division algorithms.
4. 📘 Booth’s multiplication algorithm with a flowchart and example.
5. 📘 Moore’s Law and Amdahl’s Law.
6. 📘 Instruction cycle and its state diagram.
7. 📘 Big-endian and little-endian byte ordering.
8. 📘 Execution steps for an instruction, including one-operand and three-address forms.
9. 📘 Memory mapping, memory blocks and cache-mapping functions.
10. 📘 Different cache-mapping techniques.
11. 📘 Virtual memory.
12. 📘 Associative memory.
13. 📘 Cache hit, cache miss, hit rate and miss rate.
14. 📘 DMA controller.
15. 📘 Vector processing and array processing.
16. 📘 Flynn’s classification.
17. 📘 SPMD and related parallel-processing models.
18. 📘 Data hazards and control hazards.
19. 📘 Direct and indirect addressing modes.
20. 📘 Design of a \(1K\times8\) memory.
21. 📘 Temporal and spatial locality.
22. 📘 Representation of an expression such as \((A+B)\times(C+D)\) in assembly language.

## Previous Faculty Topics Retained ⭐

- ⭐ Historical evolution of computer architecture
- ⭐ Development during the last 30 years
- ⭐ Intel 80386, 80486 and Pentium architectures
- ⭐ Flynn’s classification
- ⭐ SIMD and SPMD
- ⭐ Vector and parallel processing
- ⭐ Performance and speedup
- ⭐ Amdahl’s Law

---

## Suggested Revision Order

1. Study all 🔥⭐📘 topics first.
2. Then study topics carrying any two markers.
3. Next complete the remaining single-marker topics.
4. Finally revise every unmarked supporting topic.
