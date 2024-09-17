---
title: "Operators"
description: "Introduce operators and perform operations on variables in C#."
date: 2024-09-16T00:00:00Z
weight: 5
---

## Let's do Math: Arithmetic Operator

In the last exercise, we learned about variables and how we can assign values to a variable of a specific type, such as:

```C#
int age = 3;  // declare variable age of type int with value 3
age = 4;      // assign 4 to the variable age
```

Looking at the code above, it essentially adds 1 to the value of the variable `age`. 

And, in C#, we can perform math operations on variables directly with **arithmetic operators**: `+`, `-`, `*`, `/`, `%`.
For example, we can use the add operator `+` to add 1 to `age`:

```c#
int age = 3;  // declare variable age of type int with value 3
age = age + 1;// add 1 to age
```

{{% notice note %}}
The following are the arithmetic operators in C#:

**Operator** | **Description** | **Example**
------|------|--------
`+` | addition | `1 + 1 = 2`
`-` | subtraction | `2 - 1 = 1`
`*` | multiplication | `3 * 3 = 9`
`/` | division | `9 / 3 = 3`
`%` | modulus/remainder | `10 % 4 = 2`

**Note**: If both of the operands of division are integers, the result will also be an integer. For example, `10 / 4` returns 2, not 2.5 since we throw away the remainder. If either of the operands is a double, the result will be a double.

**Note**: Use the modulus operation (`%`) get the remainder of the division operation.

{{% /notice %}}

{{% notice tip %}}
The add (`+`) operator is used on Strings as a concatenation operator. For example:

`String name = "Patric" + "k";` is same as `String name = "Patrick";`
{{% /notice %}}

### Instructions
1. Use the program below to practice using the arithmetic operators. Change the numbers to see the answers.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/CSharpBasicsOperators" target="_blank">Launch Replit</a>

## Comparisons: Relational Operator

Next, let's learn how to compare numbers, using **relational operators**.

Just like in math, we can compare numbers using `>`, `<`, `>=`, `<=`. For example: `(3 > 2)` is `true`, a boolean value.

{{% notice note %}}
The following are the relational operators in C#:

**Operator** | **Description** | **Example**
------| ------| ------
`==` | equal to | `(3 == 3)` is `true`
`!=` | not equal to | `(3 != 3)` is `false`
`>` | greater than | `(3 > 2)` is `true`
`<` | less than | `(3 < 2)` is `false`
`>=` | greater than or equal to | `(3 >= 2)` is `true`
`<=` | less than or equal to | `(2 <= 2)` is `true`

Note: `==` and `!=` can only be used on data of the same type. For example:
```csharp
int x=3; 
double y=3.0; 
x==y; // This would produce an error because x and y are of different types.
```

{{% /notice %}}

{{% notice tip %}}
Using 1 equal sign assigns a value to the variable. Using 2 equal signs compares the values of two elements.

```csharp
age = 3;  // sets the value of age to 3
age == 3; // checks to see if the value of age is 3
```
{{% /notice %}}

### Comparison Practice

1. Use the program below to practice using the comparison operators. Change the numbers to see the answers.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/CSharpBasicsRelationalOperators" target="_blank">Launch Replit</a>

## Exam Statistics!

Patrick 🐥 and 4 of his classmates just had a music exam in this class. These are the grades of their exams: Patrick(88), Tom(89), Mary(95), Chris(84), Jen(92).

We want to produce a grade statistic report of the whole class. 

This report lists each student's grade, class average score, and whether class average is over 60, 70, 80, 90 (`true` or `false`), like the following:

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

### Instructions:

1. Identify all the variables in the print statements and declare them starting on line 12 with the correct data type and value. Note that there are 10 variables in total, and `average` has been declared for you).

   Hint: for example, the variable `patrickGrade` should be declared and assigned on line 13 as `int patrickGrade = 88;`.

2. Calculate the correct class average and assign it to variable `average` using **arithmetic operators** such as `+`, `-`, `*`, `/`, `%`.  Be sure to use parenthesis around the total number of points.

   Note that an average score is `(total points)`/`(number of students)`.

3. Assign variables `over60`, `over70`, `over80`, `over90` with the correct value using **relational operators** such as `>`, `<`, `>=`, `<=`.

4. Run the program and see the report printed!

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/CSharpBasicsOperatorPractice" target="_blank">Launch Replit</a>
