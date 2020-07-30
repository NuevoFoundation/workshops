---
title: "Boolean Operators"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 9
---

# Booleans Operators

You can also connect boolean expressions together using the `&&` (AND) and the `||` (OR) operator. For example, suppose I ask: "Are you a human, and is Nuvi a robot?" The word "and" connects the two true-false questions together. In this case, since it is true that you are a human, and it is also true that Nuvi is a robot, then the overall result is `true`.

Here's a chart that describes what happens when we connect booleans together:

| Expression       | Result  | Expression                            | Result  |
| ---------------- | ------- | ------------------------------------- | ------- |
| `true && true`   | `true`  | <code>true &#124;&#124; true</code>   | `true`  |
| `true && false`  | `false` | <code>true &#124;&#124; false</code>  | `true`  |
| `false && true`  | `false` | <code>false &#124;&#124; true</code>  | `true`  |
| `false && false` | `false` | <code>false &#124;&#124; false</code> | `false` |

To summarize, `&&` requires both Boolean expressions to be true, while `||` only requires one of the two Boolean expressions to be `true`. Here are some more examples:

- `(5 < 8) && (9 != 10)` produces `true` since both `5` is less than `8` and `9` is not equal to `10`.
- `(8 <= 2) || ("h" + "e" == "he")` produces `true` since `"h" + "e"` results in `"he"`, even though `8` is not less than or equal to `2`.
- `(6 != 2 * 3) || (8 < 2 * 4)` produces `false` since both `6` not equal to `2 * 3`, and `8` not being less than `2 * 4`, produce `false`.

![Combining booleans](../media/booleans-advanced.png)

## Working Together

{{% panel theme="instructions" header="Instructions" %}}

Try guessing the answers to the following expressions. Use `Console.WriteLine` to print out the answers.

- `(9 < 10) && (12 => 11)`
- `(15 - 2 == 11) || (4 % 3 != 2)`

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/NF-CSharp-blank?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% /panel %}}
