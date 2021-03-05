---
title: "Booleans"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 9
---
Booleans are true or false statements. Unlike strings or numbers, booleans store statements of truth: is what I am saying true or false? For example, if I ask, "Are you a robot?", this question produces a true or false result, which we call a Boolean. In this case, since you are not a robot (hopefully!), we would produce false. We can also use math operators to create boolean expressions. Here are some examples; however, notice the unusual symbols for "equal to" and "not equal to":

| Operator | Description           | Operator | Description              |
| -------- | --------------------- | -------- | ------------------------ |
| `<`      | Less than             | `>`      | Greater than             |
| `<=`     | Less than or equal to | `>=`     | Greater than or equal to |
| `==`     | Equal to              | `!=`     | Not equal to             |

As usual, use `System.out.println` to print out your results:

```kotlin
System.out.println(10 < 8);
System.out.println((3 * 6) == (32 - 14));
```
{{% notice tip %}}
## Working Together

Delete all your `System.out.println` text in your code. Try guessing the answers to the following expressions. Use `System.out.println` to check your answers.

- 54 < (10 + 32)
- (37 / 5) == 7
- "Hello" + "World" == "Hello World"
- false == false
{{% /notice %}}

## Booleans Operators

You can also connect boolean expressions together using the `&&` (AND) and the `||` (OR) operator. For example, suppose I ask: "Are you a human, and is Nuvi a robot?" The word "and" connects the two true-false questions together. In this case, since it is true that you are a human, and it is also true that Nuvi is a robot, then the overall result is `true`. Here's a chart that describes what happens when we connect booleans together:  

| Expression                  | Result   | Expression                            | Result  |
| --------------------------- | -------- | ------------------------------------- | ------- |
| <code>true && true</code>   | `true`   | <code>true &#124;&#124; true</code>   | `true`  |
| <code>true && false</code>  | `false`  | <code>true &#124;&#124; false</code>  | `true`  |
| <code>false && true</code>  | `false`  | <code>false &#124;&#124; true</code>  | `true`  |
| <code>false && false</code> | `false`  | <code>false &#124;&#124; false</code> | `false` | 

To summarize, `&&` requires both Boolean expressions to be true, while `||` only requires one of the two Boolean expressions to be true. Here are some more examples:

- `(5 < 8) && (9 != 10)` produces `true` since both 5 is less than 8 and 9 is not equal to 10.
- `(6 != 2 * 3) || (8 < 2 * 4)` produces `false` since both 6 not equal to 2 * 3, and 8 not being less than 2 * 4 produce `false`.
