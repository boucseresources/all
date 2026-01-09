Yes. There **is** a trick.
And once you see it, you stop memorizing patterns forever.

I will explain this **slowly, mechanically, and exam-oriented**, not motivational talk.

---

# The ONE mental trick to derive formulas yourself

> **Never look at the whole pattern.
> Look at ONE row at a time.**

Every formula comes from answering **four fixed questions per row**.

---

## The 4-Question Rule (this is the real trick)

For **row `i`** (1-based):

1. How many **leading spaces**?
2. How many **items** (stars or numbers)?
3. What is the **value printed**?
4. Does the row **increase or decrease** as `i` grows?

If you answer these four, formulas appear automatically.

---

# Step-by-step method (use this every time)

I will demonstrate on different pattern types.

---

## Example 1: Right aligned triangle (Pattern 6)

```
    *
   **
  ***
 ****
*****
```

Assume `n = 5`.

### Step 1: Number the rows

```
Row 1:     *
Row 2:    **
Row 3:   ***
Row 4:  ****
Row 5: *****
```

### Step 2: Count spaces and stars per row

| Row (i) | Spaces | Stars |
| ------- | ------ | ----- |
| 1       | 4      | 1     |
| 2       | 3      | 2     |
| 3       | 2      | 3     |
| 4       | 1      | 4     |
| 5       | 0      | 5     |

### Step 3: Convert table to formulas

Look carefully:

* Spaces: 4,3,2,1,0 → this is `n - i`
* Stars: 1,2,3,4,5 → this is `i`

### Final formula

```c
spaces = n - i;
stars  = i;
```

This is not guessing. It comes from the table.

---

## Example 2: Full pyramid (Pattern 8)

```
    *
   ***
  *****
 *******
*********
```

### Step 1: Number rows

```
Row 1
Row 2
Row 3
Row 4
Row 5
```

### Step 2: Count

| Row (i) | Spaces | Stars |
| ------- | ------ | ----- |
| 1       | 4      | 1     |
| 2       | 3      | 3     |
| 3       | 2      | 5     |
| 4       | 1      | 7     |
| 5       | 0      | 9     |

### Step 3: Spot the pattern

Stars:

```
1, 3, 5, 7, 9
```

That is **odd numbers**.

Odd number formula:

```
2*i - 1
```

Spaces are still:

```
n - i
```

### Final formula

```c
spaces = n - i;
stars  = 2*i - 1;
```

---

## Example 3: Inverted pyramid (Pattern 9)

```
*********
 *******
  *****
   ***
    *
```

### Count table

| Row (i) | Spaces | Stars |
| ------- | ------ | ----- |
| 1       | 0      | 9     |
| 2       | 1      | 7     |
| 3       | 2      | 5     |
| 4       | 3      | 3     |
| 5       | 4      | 1     |

Stars go:

```
9,7,5,3,1
```

Which is:

```
2*(n - i + 1) - 1
```

Spaces:

```
i - 1
```

---

## Example 4: Hollow patterns (Pattern 13)

```
    *
   * *
  *   *
 *     *
*********
```

### Step 1: Forget hollow first

First imagine it as **solid pyramid**.

That already gives:

```
spaces = n - i
columns = 2*i - 1
```

### Step 2: Decide where stars appear

Stars appear only if:

* first column
* last column
* last row

Translate to conditions:

```c
if (i == n || j == 1 || j == 2*i - 1)
```

Everything else is space.

This rule always works for hollow shapes.

---

## Example 5: Number palindrome (Pattern 30)

```
    1
   2 1 2
  3 2 1 2 3
```

### Step 1: Split row into parts

For row `i`:

* spaces
* decreasing numbers
* increasing numbers

### Step 2: Count spaces

Row 1 → 4 spaces
Row 2 → 3 spaces
So:

```
spaces = n - i
```

### Step 3: Numbers logic

Left side:

```
i, i-1, ..., 1
```

Right side:

```
2, 3, ..., i
```

### Code logic (not magic)

```c
for(j=i;j>=1;j--) printf("%d ", j);
for(j=2;j<=i;j++) printf("%d ", j);
```

---

## Example 6: 0-1 pattern (Pattern 22)

```
1
0 1
1 0 1
0 1 0 1
```

### Trick

Look diagonally.

If `(row + column)` is:

* even → 1
* odd → 0

### Formula

```c
(i + j) % 2
```

---

## The Universal Pattern-Finding Algorithm (memorize this)

Whenever you see a new pattern:

1. Fix `n`
2. Write row numbers
3. Make a **table** for:

   * spaces
   * stars or numbers
4. Convert the table into:

   * `n - i`
   * `i`
   * `2*i - 1`
   * `n - i + 1`
5. Apply border conditions if hollow

This works **every single time**.

---

## Why this works in exams

Because examiners:

* Fix size `n`
* Expect loop logic
* Accept any correct spacing

They do NOT expect fancy math.



!!! "Cheat Sheet"


    Print it mentally.

    # C PATTERN PROGRAMMING

    ### ONE-PAGE CHEAT SHEET (Formulas + Logic)

    Assume:

    ```c
    n = number of rows
    i = row (1 → n)
    j = column
    ```

    ---

    ## 1) BASIC LOOP SKELETON (ALWAYS SAME)

    ```c
    for(i = 1; i <= n; i++) {
        // spaces loop
        // content loop
        printf("\n");
    }
    ```

    ---

    ## 2) SPACE FORMULAS (MOST IMPORTANT)

    | Pattern type   | Spaces before content |
    | -------------- | --------------------- |
    | Left aligned   | 0                     |
    | Right aligned  | `n - i`               |
    | Inverted right | `i - 1`               |
    | Pyramid top    | `n - i`               |
    | Pyramid bottom | `i - 1`               |

    ```c
    for(j = 1; j <= spaces; j++) printf(" ");
    ```

    ---

    ## 3) STAR COUNT FORMULAS

    | Shape             | Stars               |
    | ----------------- | ------------------- |
    | Square            | `n`                 |
    | Right triangle    | `i`                 |
    | Inverted triangle | `n - i + 1`         |
    | Pyramid           | `2*i - 1`           |
    | Inverted pyramid  | `2*(n - i + 1) - 1` |

    ```c
    for(j = 1; j <= stars; j++) printf("*");
    ```

    ---

    ## 4) HOLLOW PATTERN RULE (UNIVERSAL)

    Print `*` **ONLY IF**:

    ```c
    i == 1          // first row
    i == n          // last row
    j == 1          // first column
    j == lastColumn // last column
    ```

    Else print space.

    ```c
    if(i==1 || i==n || j==1 || j==last)
        printf("*");
    else
        printf(" ");
    ```

    ---

    ## 5) DIAMOND RULE

    Diamond =
    **Upper pyramid** + **Lower inverted pyramid**

    Upper:

    ```c
    for(i = 1; i <= n; i++)
    ```

    Lower:

    ```c
    for(i = n-1; i >= 1; i--)
    ```

    Same formulas inside.

    ---

    ## 6) NUMBER PATTERNS

    ### 1 to i

    ```c
    printf("%d ", j);
    ```

    ### Continuous numbers

    ```c
    int num = 1;
    printf("%d ", num++);
    ```

    ### Same number in row

    ```c
    printf("%d ", i);
    ```

    ---

    ## 7) 0-1 PATTERN TRICK

    ```c
    printf("%d ", (i + j) % 2);
    ```

    Even → 0
    Odd → 1 (or reverse depending start)

    ---

    ## 8) PALINDROME NUMBERS

    For row `i`:

    Left side:

    ```c
    for(j = i; j >= 1; j--)
        printf("%d ", j);
    ```

    Right side:

    ```c
    for(j = 2; j <= i; j++)
        printf("%d ", j);
    ```

    Spaces before:

    ```c
    n - i
    ```

    ---

    ## 9) PASCAL TRIANGLE (NO ARRAY)

    ```c
    val = 1;
    for(j = 0; j <= i; j++) {
        printf("%d ", val);
        val = val * (i - j) / (j + 1);
    }
    ```

    ---

    ## 10) ALPHABET PATTERNS

    ### Increasing alphabets

    ```c
    printf("%c ", 'A' + j - 1);
    ```

    ### Decreasing alphabets

    ```c
    printf("%c ", 'A' + n - j);
    ```

    Lowercase:

    ```c
    'a' instead of 'A'
    ```

    ---

    ## 11) TWO-SIDED PATTERNS (MIRROR)

    Left part:

    ```c
    for(j = 1; j <= i; j++)
    ```

    Gap:

    ```c
    2*(n - i)
    ```

    Right part:

    ```c
    for(j = 1; j <= i; j++)
    ```

    ---

    ## 12) EXAM DERIVATION METHOD (USE ALWAYS)

    For any new pattern:

    1. Number the rows
    2. Count spaces per row
    3. Count stars/numbers per row
    4. Convert counts into `n - i`, `i`, `2*i - 1`
    5. Apply hollow rule if needed

    No memorization needed.

    ---

    ## FINAL MEMORY LOCK 🔒

    If you remember only **these 6 formulas**, you can solve everything:

    ```text
    n - i
    i
    n - i + 1
    2*i - 1
    2*(n - i + 1) - 1
    (i + j) % 2
    ```
