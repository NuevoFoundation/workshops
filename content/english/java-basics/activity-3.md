---
title: "Operators"
description: "Introduce operators and perform operations on variables in Java."
date: 2020-07-13T00:00:00Z
weight: 4
---

### 1. Let's do Math: Arithmetic Operator
In the last exercise, we learn about variables any how we can assign values to a variable of a specific type, such as:
```java
int age = 3;  // declare variable age of type int with value 3
age = 4;      // assign 4 to the variable age
```

Looking at the code above, it essentially add 1 to the value of the variable `age`. 

And, in Java, we can perform math operations on variables directly with <b>arithmetic operators</b>: `+`, `-`, `*`, `/`, `%`.
For example, we can use the add operator `+` to add 1 to `age`:
```java
int age = 3;  // declare variable age of type int with value 3
age = age + 1;// add 1 to age
```
{{% notice note %}}
The following are the arithmetic operators in Java:

- `+`: addition.

- `-`: subtraction. 

- `*`: multiplication.

- `/`: (regular real) division. <b>Note</b>: `10 / 4` returns 2, not 2.5 since we throw away the remainder.

- `%`: mod/remainder. <b>Note</b>: `10 / 4` returns 2. This operation get the remainder of the division.
{{% /notice %}}

{{% notice tip %}}
Add (`+`) is used on String as concatenation operator. For example:

`String name = "Patric" + "k";` is same as `String name = "Patrick";`
{{% /notice %}}

### 2. Comparisons: Relational Operator
Next, let's learn how to compare numbers. Let me introduce the <b>relational operators</b>.

Just like in math, we can compare numbers using `>`, `<`, `>=`, `<=`. For example: `(3 > 2)` is `true`, a boolean value.

{{% notice note %}}
The following are the relational operators in Java:

- `==`: equal to. (i.e. `(3 == 3)` is `true`)

- `!=`: not equal to. (i.e. `(3 != 3)` is `false`)

- `>`: greater than.

- `<`: less than.

- `>=`: greater than or equal to.

- `<=`: less than or equal to.

Note: you can use `==` and `!=` on 2 pieces of data of the same type.
{{% /notice %}}

### 3. Exam Statistic! 
Patrick 🐥 and 4 of his classmates just had a music exam in this class. These are the grades of their exams: Patrick(88), Tom(89), Mary(95), Chris(84), Jen(92).

We want to produce a grade statistic report of the whole class. 

This report list of students grade, class average score, and whether class average is over 60, 70, 80, 90 (`true` or `false`), like the following:
```
---------------------------
     Music Grade Report    
---------------------------

Student Grades:          
- Patrick: ...
- Tom: ...
...

Class Average: ...
- Average Over 60: ...
- Average Over 70: ...
- Average Over 80: ...
- Average Over 90: ...
```
Let's write it with the help of operators 🎵!

{{% notice note %}}
#### Instructions:

1. Identify all the variables in the print statements and declare them starting on line 12 with the correct data type and value. Note that there are 10 variables in total, and `average` has been declared for you).

   Hint: for example, the variable `patrickGrade` should be declared and assigned on line 13 as `int patrickGrade = 88;`.

2. Calculate the correct class average and assign it to variable `average` using <b>arithmetic operators</b> such as `+`, `-`, `*`, `/`, `%`.

   Note that an average score is `(total points)`/`(number of students)`.

3. Assign variables `over60`, `over70`, `over80`, `over90` with the correct value using <b>relational operators</b> such as `>`, `<`, `>=`, `<=`.

4. Run the program and see the report printed!

{{% /notice %}}

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicsOperators?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
