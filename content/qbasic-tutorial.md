# QBASIC Programming: A Beginner-Friendly Guide

**QBASIC (Quick Beginners All-purpose Symbolic Instruction Code)** is an easy-to-learn programming language designed for beginners. It allows new programmers to write simple and complex programs quickly. Although QBASIC is older, it is still a great way to start learning programming concepts due to its simplicity.

In this guide, we will cover the following topics:

- Introduction to QBASIC
- Basics of QBASIC Programming
- Key Concepts
- Advanced Features
- Programming Tips
- Examples and Code Snippets

## Introduction to QBASIC

QBASIC is a variant of the BASIC programming language. It was introduced by Microsoft and is often pre-installed on early versions of DOS. QBASIC uses an interpreter, meaning it executes the program line by line, making it easy to spot errors.

### Features of QBASIC:

- **User-Friendly**: Simple to write and understand.
- **Interpreted Language**: You don’t need to compile your program; you can run it directly.
- **Structured Programming**: It allows the use of loops, functions, and conditional statements.
- **Built-in Functions**: QBASIC includes many built-in functions for input/output, string manipulation, and mathematical operations.

## Basics of QBASIC Programming

### 1. **Writing Your First Program**

Let's start with a simple program that prints "Hello, World!".

```qbasic
PRINT "Hello, World!"
```

**Explanation**:
- `PRINT` is a command that displays text or values on the screen.
- The text "Hello, World!" is enclosed in quotes and will be printed on the screen.

### 2. **Variables and Data Types**

In QBASIC, variables are used to store data. There are three main types of data:

- **Integer**: Whole numbers.
- **String**: Text data (enclosed in double quotes).
- **Real (Floating-point)**: Decimal numbers.

```qbasic
LET x = 5      ' Integer
LET y = 3.14   ' Real number
LET name$ = "Bibek"  ' String (Note the $ for string variables)
```

**Explanation**:
- `LET` is used to assign values to variables.
- `name$` is a string variable, and `$` must be used at the end of string variables in QBASIC.

### 3. **Input and Output**

- **Input**: To take input from the user, use the `INPUT` statement.
- **Output**: Use `PRINT` to display output.

```qbasic
INPUT "Enter your name: ", name$
PRINT "Hello "; name$
```

**Explanation**:
- `INPUT` asks the user to input a value.
- The semi-colon `;` allows concatenation of text and variables in `PRINT`.

### 4. **Conditional Statements**

Conditional statements help in making decisions in a program. The `IF...THEN...ELSE` statement is used for this.

```qbasic
INPUT "Enter a number: ", num
IF num > 10 THEN
    PRINT "The number is greater than 10"
ELSE
    PRINT "The number is less than or equal to 10"
END IF
```

**Explanation**:
- `IF...THEN...ELSE` checks the condition (`num > 10`).
- `END IF` ends the conditional block.

### 5. **Loops**

Loops are used to execute a block of code repeatedly. QBASIC supports `FOR...NEXT` and `WHILE...WEND` loops.

- **FOR...NEXT** loop example:

```qbasic
FOR i = 1 TO 5
    PRINT i
NEXT i
```

- **WHILE...WEND** loop example:

```qbasic
i = 1
WHILE i <= 5
    PRINT i
    i = i + 1
WEND
```

**Explanation**:
- `FOR...NEXT` runs a block of code a set number of times.
- `WHILE...WEND` runs as long as the condition is true.

## Key Concepts in QBASIC

### 1. **Arrays**

Arrays store multiple values under one variable name. In QBASIC, you can declare an array with the `DIM` statement.

```qbasic
DIM numbers(5)
FOR i = 1 TO 5
    INPUT "Enter a number: ", numbers(i)
NEXT i
```

**Explanation**:
- `DIM` declares an array with 5 elements.
- The array index starts from 1 in this example.

### 2. **Subroutines and Functions**

- **Subroutines** are used to break the code into smaller parts for better organization. Use `SUB` and `END SUB`.
- **Functions** return values and are declared using `FUNCTION`.

- Subroutine Example:

```qbasic
SUB Greet
    PRINT "Hello from the Subroutine!"
END SUB

CALL Greet
```

- Function Example:

```qbasic
FUNCTION Square(x)
    Square = x * x
END FUNCTION

PRINT Square(4)  ' Output: 16
```

### 3. **Random Numbers**

You can generate random numbers using the `RND` function.

```qbasic
RANDOMIZE TIMER
PRINT "Random number between 1 and 10: "; INT(RND * 10) + 1
```

## Advanced Features of QBASIC

### 1. **File Handling**

QBASIC allows you to work with files for reading and writing data.

- **Open a file for output**:

```qbasic
OPEN "output.txt" FOR OUTPUT AS #1
PRINT #1, "This is a line in the file."
CLOSE #1
```

- **Open a file for input**:

```qbasic
OPEN "output.txt" FOR INPUT AS #1
WHILE NOT EOF(1)
    LINE INPUT #1, line$
    PRINT line$
WEND
CLOSE #1
```

**Explanation**:
- `OPEN` opens a file for reading or writing.
- `#1` is the file number.
- `EOF` checks if the end of the file has been reached.

### 2. **Graphics in QBASIC**

QBASIC also supports simple graphics. You can use commands like `PSET`, `LINE`, and `CIRCLE` to draw.

- **Drawing a Circle**:

```qbasic
SCREEN 12   ' Switch to graphics mode
CIRCLE (320, 240), 100   ' Draw a circle with center (320, 240) and radius 100
```

### 3. **Error Handling**

QBASIC provides `ON ERROR` for error handling. You can catch errors and prevent your program from crashing.

```qbasic
ON ERROR GOTO ErrorHandler

PRINT "This will cause an error."
x = 1 / 0

ErrorHandler:
PRINT "An error occurred!"
END
```

## Programming Tips

1. **Comment Your Code**: Use single quotes (`'`) to write comments and explain the purpose of code.
   
   ```qbasic
   ' This is a comment
   ```

2. **Break Down Problems**: Use subroutines and functions to organize complex programs.

3. **Test Frequently**: Run and test your programs often to catch errors early.

4. **Use Meaningful Variable Names**: Choose names that reflect the data they store for better readability.

## Conclusion

QBASIC is a simple yet powerful tool to learn the fundamentals of programming. It provides a clear structure for writing programs, handling user input, conditional logic, loops, and even basic graphics. With the examples provided, you can now start exploring and experimenting with your own QBASIC programs.

As you gain experience, try working on more complex projects, including file handling and graphical applications, and keep improving your skills. Happy coding!

---

*If you have any questions or need further clarification, feel free to reach out in the comments section.*