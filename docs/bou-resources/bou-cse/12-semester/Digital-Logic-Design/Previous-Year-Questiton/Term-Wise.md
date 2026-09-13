Questions from the supplied CSE1235 papers, rearranged only by the five chapters in the *Full Course Handbook*. Original term, question number, wording, mathematical content, and marks are retained; supplied figures and tables are redrawn as vectors.


!!! info "Download full as PDF"
        
    [Click Here to Download](https://drive.google.com/file/d/14Rsz_YirIuLF6LdR4wNMUstKeHBADFKb/view?usp=drive_link)

# Boolean Algebra and Logic Gates

## 212 Term

**Q1(a) [3]** Convert the following numbers (with indicated bases) to decimal:

(i) $(10110.0101)_2$ &nbsp;&nbsp; (ii) $(BAE3)_{16}$ &nbsp;&nbsp; (iii) $(26.24)_8$

**Q1(b) [3]** Briefly explain the duality principle with example.

**Q1(c) [4]** Express the Boolean function $F=xy+\bar{x}z$ as a product of maxterms.

**Q1(d) [4]** Implement the Boolean function $F(x,y,z)=\sum(1,2,3,4,5,7)$ using NAND gate.

**Q2(a) [6]** Apply DeMorgan’s theorem (i) $\overline{A+BC+D(E+\bar F)}$ &nbsp;&nbsp; (ii) $\overline{ABC+D+F}$

**Q2(b) [4]** Using Boolean algebra simplify the expression:

$$\bar A B C+A\bar B\bar C+\bar A\bar B C+A\bar B C+ABC$$

**Q2(c) [4]** Show how the following expressions can be implemented using NOR gates only: $X=(A+B)(C+D);\ X=AB+CD$

**Q3(a) [4]** Convert the following POS expression to an equivalent SOP expression using truth table.

$$(\bar A+B+C)(\bar A+\bar B+C)(A+\bar B+\bar C)(A+B+C)$$

**Q3(b) [4]** Minimize the following expression using Karnaugh map and draw the circuit diagram after minimization.

$$Y=\bar A BCD+\bar A\bar BCD+A\bar B\bar CD+A\bar BCD+A\bar BC\bar D+ABC\bar D+AB\bar C\bar D+ABCD$$

**Q3(c) [6]** Map the following SOP expression on a Karnaugh map and find the equivalent SPOS and minimum form of POS expressions.

$$\bar A\bar B\bar C\bar D+\bar A BC+ A\bar B\bar C D+A\bar B C\bar D+AB\bar C\bar D+\bar A B\bar C D+ABC\bar D$$

## 202 Term

**Q1(a) [5]** Give short answers of the following questions:

(i) Convert the Gray code $1010110$ to its binary number equivalent.

(ii) Convert the BCD number $011110000001$ to its decimal equivalent.

(iii) Convert $(37)_{10}$ to its binary number equivalent.

(iv) A typical CD-ROM can store 650 megabytes of digital data. Since mega = $2^{20}$, how many bits of data can a CD-ROM hold?

(v) Express hexadecimal number $9A4.8$ as a sum of values of each digit.

**Q1(b) [6]** Express the Boolean function $F=xy+\bar{x}z$ in a product of maxterm and $F=A+\overline{BC}$ in a sum of minterms.

**Q1(c) [3]** Show that the dual of the exclusive-OR is equal to its complement.

**Q2(a) [4]** Implement the following Boolean function with (i) NAND and (ii) NOR gates: $F(x,y,z)=\sum(1,2,3,4,5,7)$.

**Q2(b) [1+4]** What are the advantages of tabulation method? Simplify the following Boolean function using tabulation method.

$$F(w,x,y,z)=\sum(1,4,6,7,8,9,10,11,15)$$

**Q3(a) [6]** Simplify the Boolean function using the don’t care conditions $d$ in (i) sum of products and (ii) product of sums.

$$f=ACE+\bar A\bar CDE+\bar AC\bar DE$$
$$d=D\bar E+A\bar DE+A\bar D\bar E$$

**Q5(c) [3]** Show that the dual of the equivalence function $f(A,B)=AB+\bar A\bar B$ is equal to its complement.

**Q5(d) [1+1]** What is the difference between canonical form and standard form? Which form is preferable when implementing a Boolean function with gates?

## 192 Term

**Q1(a) [7]** Give short answers of the following questions:

(i) Express the decimal number $158.58$ as a sum of values of each digit.

(ii) Express the binary number $10101.101$ as a sum of values of each digit.

(iii) Express the octal number $237.5$ as a sum of values of each digit.

(iv) Express hexadecimal number $9A5.8$ as a sum of values of each digit.

(v) Convert the following binary number into octal and hexadecimal form: $10011011011$.

(vi) Convert the following binary number $110011$ into BCD form.

(vii) Convert the following gray code into binary number: $10101110$.

**Q1(b) [4]** Using Boolean algebra simplify the expressions: (i) $[AB(C+(BD)')+(AB)']C$; (ii) $ABC[(AB+C')(BC+AC)]$.

**Q1(c) [3]** Why the NOR gate is called universal gate? Explain with example.

**Q2(a) [5]** Implement the following Boolean function with (i) NAND and (ii) NOR gates. $F(x,y,z)=\sum(1,2,3,4,5,7)$.

**Q2(b) [1+4]** What are the advantages of tabulation method? Simplify the below Boolean function using tabulation method.

$$F(w,x,y,z)=\sum(1,4,6,7,8,9,10,11,15)$$

**Q3(a) [4]** Convert the following POS expression to an equivalent SOP expression.

$$(A+B'+C)(A'+B+C'+D)(A+B'+C'+D)(B+C'+D')(A'+B'+D')(A'+B'+C+D)(A+B+C'+D)(A+B+C+D')$$

**Q3(c) [5]** Using Karnaugh map convert the given SSOP expression into minimum SOP expression, SPOS expression, and a minimum POS expression.

$$A'B'C'D'+AB'C'D+AB'C'D'+A'BC'D+AB'CD'+A'BCD+ABCD'+A'B'CD'+A'BC'D'+ABCD$$

## 182 Term

**Q1(a) [4]** Name the universal gates. Implement the basic gates using universal gates.

**Q1(b) [1.5×4=6]** Simplify the following Boolean functions to a minimum number of literals using Boolean algebra:

(i) $xyz+\bar{x}y+xy\bar{z}$; &nbsp; (ii) $(x+y)(x+\bar y)$; &nbsp; (iii) $\overline{(x+y)}(\bar x+\bar y)$; &nbsp; (iv) $xy+\bar xz+yz$.

**Q2(a) [6]** Apply DeMorgan’s theorem for the following: (i) $\overline{A+BC+D(E+\bar F)}$; (ii) $\overline{ABC+D+F}$.

**Q2(b) [4]** Show how the following expressions can be implemented using NAND gates only: (i) $X=(A+B)(C+D)$; (ii) $X=AB+CD$.

**Q2(c) [4]** Convert the following POS expression to an equivalent SOP expression using truth table:

$$(\bar A+B+C)(\bar A+\bar B+C)(A+\bar B+\bar C)(A+B+C)$$

**Q3(a) [4]** Minimize the following expression using Karnaugh map and draw the circuit diagram after minimization:

$$Y=\bar A BCD+\bar A\bar BCD+A\bar B\bar CD+A\bar BCD+A\bar BC\bar D+ABC\bar D+AB\bar C\bar D+ABCD$$

**Q3(b) [6]** Map the following SOP expression on a Karnaugh map and find the equivalent POS and minimum form of POS expression:

$$\bar A\bar B\bar C\bar D+\bar A BC+A\bar B\bar CD+A\bar BC\bar D+AB\bar C\bar D+\bar A B\bar CD+ABC\bar D$$

## 172 Term

**Q1(a) [4]** Name the universal gates. Why they are called so? Explain with example using one of the universal gates.

**Q1(c) [4]** Apply DeMorgan’s theorem (i) $\overline{(A+B+C)'D'}$; (ii) $(AB'+C'D+EF)'$.

**Q2(b) [4]** Simplify the Boolean function in (a) sum of products and (b) product of sums using mapping technique.

$$F(w,x,y,z)=\sum(0,1,2,4,5,6,8,9,12,13,14)$$

**Q2(c) [6]** Simplify the below functions to a minimum number of literals: (i) $xy+x'z+yz$; (ii) $(xy'+w'z)(wx'+yz')$.

**Q3(a) [3]** Minimize the following expression using Karnaugh map and Draw the circuit diagram after minimization.

$$Y=A'B'C'D+A'B'CD+A'BCD+AB'C'D'+ABC'D'+ABCD'+ABCD$$

**Q3(b) [5]** Map the following SOP expression on a Karnaugh map and find the equivalent SPOS and minimum form of POS expressions.

$$A'BC+AB'+AB'C+AB'C'D+ABC'D'+A'BC'D$$

**Q3(c) [6]** Implement the below function with NAND gates: (i) $F(x,y,z)=\sum(1,2,3,4,5,7)$; (ii) $(AB'+CD')E+BC(A+B)$.

## 162 Term

**Q1(a) [4]** Design a logic circuit whose output is HIGH whenever A and B are both HIGH as long as C and D are either both LOW or both HIGH.

**Q1(b) [6]** Find the Boolean expression for the following truth table, simplify that expression and design the logic circuit for that simplified expression.

![Truth table supplied with 162 Term Q1(b)](assets/162-q1b-truth-table.svg){width=45%}

**Q1(c) [0.5×4=2]** Convert the following numbers with the indicated bases to decimal: (i) $(4310)_5$ &nbsp; (ii) $(198)_{12}$ &nbsp; (iii) $(2EB)_{16}$ &nbsp; (iv) $(2001.5)_8$.

**Q1(d) [2]** Perform subtraction on the following binary numbers using 2’s complement: (i) $101101-01001$ &nbsp; (ii) $0101010-100100$.

**Q2(a) [2×3=6]** Simplify the Boolean functions using K-map:

(i) $F(w,x,y,z)=\sum(0,1,2,4,5,6,8,9,12,13,14)$

(ii) $F=\bar A\bar B\bar C+B\bar C\bar D+\bar A B C\bar D+A\bar B\bar C$

(iii) $F(w,x,y,z)=\sum(1,3,7,11,15)$

**Q2(b) [1.5×4=6]** Simplify the following Boolean functions to a minimum number of literals using Boolean algebra:

(i) $xy+\bar{x}z+yz$ &nbsp; (ii) $(x+y)(x+\bar y)$ &nbsp; (iii) $xy+x(wz+w\bar z)$ &nbsp; (iv) $xy+\bar x\bar y+\bar yz$

\newpage

## 152 Term

**Q1(a) [2]** A technician testing a logic circuit sees that the output of a particular INVERTER is stuck LOW while its input is pulsing. List as many possible reasons as you can for this faulty operation.

**Q1(c) [4]** Simplify the following expressions using Boolean algebra:

(i) $x=\bar A\bar B C+\bar A B C+A\bar B\bar C+A\bar B C+AB\bar C$

(ii) $y=\overline{(C+D)}+\bar A C\bar D+A\bar B\bar C+\bar A\bar BCD+AC\bar D$

**Q1(d) [4]** Simplify the following Boolean functions using K-maps and draw the logic circuit for the simplified expression:

$$F(A,B,C,D)=\sum(0,1,2,4,5,7,11,15)$$

\newpage

# Combinational Logic

## 212 Term

**Q4(a) [3]** What is combinational logic circuit? Give an example of combinational logic circuit.

**Q4(b) [3]** Show how a full-adder can be converted to full-subtractor with the addition of one inverter circuit.

**Q4(c) [2+4]** How multiplexers work? Draw the circuit diagram with waveforms for a 4-input multiplexer.

**Q5(a) [4]** Design a 3:8 decoder with timing diagram.

**Q5(b) [4]** Design a decimal-to-BCD encoder.

**Q7(c) [4]** Implement the following Boolean expression using 4:1 and 8:1 multiplexer block.

$$\bar A BC+\bar A\bar BC+A\bar BC+ABC+AB\bar C$$

## 202 Term

**Q2(c) [2+3]** Define Multiplexer, with block diagram. Implement the following function with a Multiplexer.

$$F(W,X,Y,Z)=\sum(0,1,3,4,8,9,15)$$

**Q3(b) [5]** Consider the carry propagate and carry generate as follows:

$$P_i=A_i+B_i,\qquad G_i=A_iB_i$$

Show that the output carry and output sum of full-adder becomes

$$C_{i+1}=\overline{(\bar C_i\bar G_i+P_i)},\qquad S_i=\overline{(P_iG_i)}\oplus C_i$$

**Q3(c) [3]** Design a combinational circuit that accepts a three-bit number and generates an output binary number equal to the square of the input number.

**Q5(a) [3]** Construct the truth table for the circuit shown below in Figure 1. Draw an equivalent circuit for it with fewer NAND gates.

![Figure 1: supplied NAND-gate circuit](assets/202-q5a-nand-circuit.svg){width=72%}

**Q5(b) [2+4]** Define Adder and Subtractors. Design a combinational circuit using a ROM. The circuit accepts a 3-bit number and generates any output binary number equal to the square of the input number.

## 192 Term

**Q2(c) [1+3]** Describe multiplexer with block diagram. Design logic diagram of a 4-to-1 line multiplexer.

**Q4(b) [7]** Implement the following Boolean expression using 8:1 multiplexer blocks.

$$A'BCD+A'BCD+AB'CD+ABC'D+ABCD'+A'B'CD+A'BCD'+ABCD$$

## 182 Term

**Q1(c) [4]** Design a 4-bit Adder Subtractor circuit.

**Q3(c) [4]** Implement the following Boolean function with a multiplexer: $F(A,B,C,D)=\sum(0,1,3,4,8,9,15)$.

## 172 Term

**Q1(b) [6]** Write the truth table, minimum Boolean expression of a full adder and draw the circuit diagram. Draw the block diagram of a full adder using halfadder.

**Q2(a) [4]** How multiplexers work? Draw the circuit diagram with waveforms for a 4-input multiplexer.

**Q4(a) [5]** Water is used for manufacturing process in a factory. The water is stored in four different tanks. A level sensor in each tank produces a HIGH signal when the level of water in the tank drops below a specified point. Design a circuit that monitors the water level in each tank and indicates when the level in any three of the tanks drops below the specified point.

**Q4(b) [3]** Design a decimal-to-BCD encoder.

**Q4(c) [4]** Implement the following Boolean expression using multiplexer.

$$A'BC+A'B'C+AB'C'+ABC'+ABC$$

**Q4(d) [2]** Draw a 2 by 4 de-multiplexer.

**Q7(b) [5]** Design and draw the logic diagram of carry look-ahead generator.

## 162 Term

**Q2(c) [2]** Design a full adder circuit.

**Q3(a) [4]** Write the Boolean expression for output x in the following figure. Determine the value of x for all possible input conditions, and list the values in a truth table.

![Logic circuit supplied with 162 Term Q3(a)](assets/162-q3a-logic-circuit.svg){width=78%}

## 152 Term

**Q1(b) [4]** Four large tanks at a chemical plant contain different liquids being heated. Liquid-level sensors are being used to detect whenever the level in tank A or tank B rises above a predetermined level. Temperature sensors in tanks C and D detect when the temperature in either of these tanks drops below a prescribed temperature limit. Assume that the liquid-level sensor outputs A and B are LOW when the level is satisfactory and HIGH when the level is too high. Also, the temperature-sensor outputs C and D are LOW when the temperature is satisfactory and HIGH when the temperature is too low. Design a logic circuit that will detect whenever the level in tank A or tank B is too high at the same time that the temperature in either tank C or tank D is too low.

**Q2(b) [6]** Design and describe a 4-bit adder subtractor circuit with example.

**Q2(c) [2+4]** What do you mean by BCD adder? Design and describe a BCD adder circuit with truth table.

**Q3(a) [4]** Construct logic diagram for the following Boolean function with multiplexer. Consider D as input.

$$F(X,Y,Z,W)=\sum(1,3,4,11,12,13,14,15)$$

\newpage

# Synchronous Sequential Logic

## 212 Term

**Q4(d) [2]** Define the Mealy and Moore model with block diagram.

**Q5(c) [6]** Draw the circuit diagram of a 4-bit parallel-in-serial-out shift register.

**Q6(a) [4]** “J-K flip-flops are used as frequency divider”- Justify with an example of divide by four with timing diagram.

**Q6(c) [4]** Draw the block diagram of MOD-9 counter with true table.

**Q7(b) [7]** Consider the counter circuit that contains six FFs wired in the arrangement i.e $Q_5,Q_4,Q_3,Q_2,Q_1$. Now calculate:

(i) Determine the counters MOD number.

(ii) Determine the frequency at the output of the last FF ($Q_5$) when the clock frequency is 1 MHz.

(iii) What is the range of counting states for this counter?

Assume a staring count of 00000. What will be the counter’s state after 129 pulses?

## 202 Term

**Q4(a) [2+1]** Define sequential circuit with its basic block diagram. Classify it.

**Q4(b) [6]** Illustrate the excitation table for RS, D, JK, and T flip-flops.

**Q4(c) [5]** Design a counter with the following binary sequence 0, 3, 4, 6, 2, 5, 7 and repeat. Use J-K flip-flops.

**Q6(a) [1]** Define State reduction and state assignment.

**Q6(b) [4+1]** Derive the state table and state diagram of the sequential circuit of Figure 2. What is the function of the circuit?

![Figure 2: supplied sequential circuit](assets/202-q6b-sequential-circuit.svg){width=72%}

**Q6(d) [2+3]** Draw a 4-bit bidirectional shift register and show the basic data movement in a shift register.

**Q7(d) [3]** Define the Mealy and Moore model with block diagram.

## 192 Term

**Q4(a) [7]** Draw a circuit diagram of a decade asynchronous counter with truth table.

**Q5(a) [3]** Define sequential circuit with its basic block diagram. Classify it.

**Q5(b) [6]** Demonstrate the excitation table of RS, D, JK and T flip-flops.

**Q5(c) [5]** Design a counter with the following binary sequence 0, 1, 2, 3, 4, 5, 6, 7, 8 and repeat. Use J-K flip-flops.

## 182 Term

**Q4(a) [7]** What is flip-flop? Define S-R and D flip-flop using block, circuit and timing diagrams.

**Q4(b) [2+5]** How asynchronous counters work? Draw a circuit diagram of a MOD-11 asynchronous counter with truth table and timing diagram.

**Q5(a) [6]** Draw a circuit diagram of a MOD-9 synchronous counter with truth table.

**Q5(b) [6]** Draw the circuit diagram of a 4-bit parallel-in-serial-out shift register.

**Q6(a) [6]** Reduce the number of states in the following state table and design the reduced state diagram:

![State table supplied with 182 Term Q6(a)](assets/182-q6a-state-table.svg){width=94%}

**Q6(b) [5]** Design a universal shift register that operates according to the following function table:

![Function table supplied with 182 Term Q6(b)](assets/182-q6b-function-table.svg){width=58%}

**Q6(c) [3]** Distinguish between sequential and combinational circuit.

## 172 Term

**Q5(a) [5]** What is a flip-flop? Define S-R and D flip-flops using block, circuit and timing diagrams.

**Q5(b) [4]** “J-K flip-flops are used as frequency divider”. justify with example of divide by four with timing diagram.

**Q5(c) [5]** How asynchronous counters work? Draw a circuit diagram of a MOD-10 asynchronous counter with truth table and timing diagram.

**Q6(a) [1]** Define sequential circuit with its basic block diagram.

**Q6(b) [4]** Draw a 2-bit up down binary counter which is designed using T-flip-flops.

**Q6(c) [9]** Design a sequential circuit from the following state table:

![State table supplied with 172 Term Q6(c)](assets/172-q6c-state-table.svg){width=98%}

## 162 Term

**Q3(b) [10]** Given the following Boolean function:

![State diagram supplied with 162 Term Q3(b)](assets/162-q3b-state-diagram.svg){width=86%}

**Q5(a) [6]** A sequential circuit has three D flip-flops, A, B, C and one input, x. It is described by the following flip-flop input functions:

$$D_A=(B\bar C+\bar BC)x+(BC+\bar B\bar C)\bar x$$
$$D_B=A$$
$$D_C=B$$

(i) Derive the state table for the circuit.

(ii) Draw two state diagram: one for x=0 and the other for x=1.

**Q5(b) [8]** Design the sequential circuit specified by the following state diagram using D flip-flops.

![State diagram supplied with 162 Term Q5(b)](assets/162-q5b-state-diagram.svg){width=78%}

**Q6(a) [1+3]** What do you mean by shift register? Draw and describe the 4-bit serial transfer register circuit with an example.

**Q6(b) [5]** Draw and explain BCD ripple counter.

**Q6(c) [5]** Explain 4-bit up-down binary counter with necessary diagram.

**Q7(c) [3]** The content of 4-bit register is initially 1101. The register is shifted six times to the right with the serial input being 101101. What is the content of the register after each shift?

## 152 Term

**Q2(a) [2]** Distinguish between sequential circuit and combinational circuit.

**Q3(b) [1+1]** What is the problem of S-R Flip-Flop? How do you solve this problem?

**Q3(c) [1+4]** What is J-K Flip-Flop? Design and describe the operation of a J-K Flip-Flop circuit.

**Q3(d) [3]** Write HDL code for D Flip-Flop and T Flip-Flop.

**Q5(a) [6]** Consider the following state diagram that accepts the input sequence 01010110100 starting from the initial state ‘a’. Each input of 0 or 1 produces an output of 0 or 1 and causes the circuit to go to the next state.

![State diagram supplied with 152 Term Q4(a)](assets/152-q4a-state-diagram.svg){width=86%}

Now,

(i) Draw state table and reducing state table.

(ii) Draw reduced state table and reduced state diagram.

(iii) Draw reduced state table with binary assignment.

**Q5(b) [2]** List out the procedure for designing synchronous sequential circuit.

**Q5(c) [6]** Design a logic circuit that detects three or more consecutive 1’s in a string of bits coming through an input line. Show all the possible steps.

**Q6(a) [1+4]** What do you mean by shift register? Draw and describe the 4-bit serial transfer register circuit with an example.

**Q6(b) [5]** Draw and explain 4-bit synchronous binary counter.

\newpage

# Asynchronous Sequential Logic

## 152 Term

**Q7(b) [3]** Given the following function $F(A,B,C)=\sum(1,5,6,7)$. Is this function Hazard free or not? If yes, design a hazard free circuit, otherwise why explain.

**Q7(c) [3]** Design a block diagram of an asynchronous sequential circuit.

\newpage

# Memory and Programmable Logic

## 212 Term

**Q6(b) [6]** Describe the architecture of a $16\times8$ ROM with its internal block diagram.

**Q7(a) [3]** What is Programmable Logic Array (PLA) and what are its main component?

## 202 Term

**Q6(c) [3]** Distinguish between the following terms: (i) MAR and MBR; (ii) Volatile and non-volatile memory.

**Q7(a) [1+4]** Define PLA. Implement the following two Boolean functions with a PLA:

$$F_1(A,B,C)=\sum(0,1,2,4)$$
$$F_2(A,B,C)=\sum(0,5,6,7)$$

**Q7(b) [2+1]** A certain memory has a capacity of $4K\times8$. How many address lines does it have? What is its capacity in bytes?

**Q7(c) [1+2]** Why do we need array of RAM chips? Mention the parameters in which the capacity of the memory depends on.

## 192 Term

**Q3(b) [5]** Draw the circuit diagram of a $16\times8$ RAM using $8\times4$ RAM chip.

## 182 Term

**Q5(c) [2]** Distinguish between SRAM and DRAM.

**Q7(a) [3]** Explain read and write operation of memory.

**Q7(b) [5]** Obtain the 15-bit Hamming code word for the 11-bit data word 11001001010.

**Q7(c) [6]** Implement the following Boolean functions with a PLA:

(i) $F_1(A,B,C)=\sum(0,1,2,4)$;

(ii) $F_2(A,B,C)=\sum(0,5,6,7)$;

(iii) $F_3(A,B,C)=\sum(1,5,6,7)$.

## 172 Term

**Q7(a) [4]** Consider the below 8-bit data word: 11000100. Generate parity bits and check bits for the above data.

**Q7(c) [5]** Design 64K DRAM using address multiplexing.

## 162 Term

**Q7(a) [4]** How many address lines and input-out data lines are needed in each ROM: (i) $2G\times8$ &nbsp; (ii) $16M\times32$ &nbsp; (iii) $4K\times16$ &nbsp; (iv) $256K\times64$.

**Q7(b) [2]** Explain Read and Write operation of memory.

**Q7(d) [5]** Given a $32\times8$ ROM chip with an enable input, show the external connections necessary to construct a $128\times8$ ROM with four chips and a decoder.

## 152 Term

**Q4(a) [2+6]** What is Hamming code? Given the 8 bit data word 11000100, generate the 12 bit composite word for the Hamming code. Now,

(i) What will be the 12-bit composite word that stored in memory?

(ii) Explain the error detection procedure using Hamming code technique, when the 12 bits are read from memory.

**Q4(b) [2]** The statement “Hamming code can be used to correct a single error and detect double errors”. Justify your answer.

**Q4(c) [4]** Design a combinational circuit using a ROM. The circuit accepts 3-bit number and generates an output binary number equal to the square of the input number.

**Q6(c) [4]** What do you mean by memory unit? Design a $4\times4$ RAM.

**Q7(a) [8]** Consider the following Boolean functions:

$$w(A,B,C,D)=\sum(2,12,13)$$
$$x(A,B,C,D)=\sum(7,8,9,10,11,12,13,14,15)$$
$$y(A,B,C,D)=\sum(0,2,3,4,5,6,7,8,10,11,15)$$
$$z(A,B,C,D)=\sum(1,2,8,12,13)$$

Now,

(i) Simplifying the four functions to a minimum numbers of terms.

(ii) Design a PAL programming table.

(iii) Design PAL logic circuit.
