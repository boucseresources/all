??? " `#!c printf()` and `#!c scanf()`"

    **Ans to the Q2(a)**

    ### **Purpose of printf() and scanf()**

    Both `printf()` and `scanf()` are built-in library functions (লাইব্রেরি ফাংশন) defined in the standard input-output header file `<stdio.h>`. They are used for formatted input and output operations.

    **1. Purpose of printf():**
    The `printf()` function stands for "print formatted". Its main purpose is to display (প্রদর্শন করা) data or messages on the standard output device, which is usually the monitor screen.

    * It allows us to format the output (ফলাফল) using special characters and format specifiers.
    * **Syntax:** `printf("format string", variable_list);`

    **2. Purpose of scanf():**
    The `scanf()` function stands for "scan formatted". Its main purpose is to read (পড়া/গ্রহণ করা) input from the standard input device, which is usually the keyboard.

    * It takes input from the user and stores it in the specified variable (চলক).
    * It requires the address of the variable, so we use the ampersand `&` symbol.
    * **Syntax:** `scanf("format string", &variable_list);`

    ### **Datatype Format Specifiers**

    Format Specifiers (বিন্যাস নির্দেশক) tell the compiler what type of data is being input or output. Below is the list of appropriate format specifiers for common data types.

    | Data Type | Format Specifier for scanf() (Input) | Format Specifier for printf() (Output) |
    | --- | --- | --- |
    | **Integer (`int`)** | `%d` | `%d` |
    | **Character (`char`)** | `%c` | `%c` |
    | **Floating Point (`float`)** | `%f` | `%f` |
    | **Double (`double`)** | `%lf` | `%lf` (or `%f`) |
    | **String (`char[]`)** | `%s` | `%s` |

