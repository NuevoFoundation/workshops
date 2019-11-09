---
title: "Numbers"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 7
---

# Numbers

The computer can also do regular math that you see in school. Use `Console.WriteLine` to print out the result from the math expressions. No quotation marks are needed for numbers!

```csharp
Console.WriteLine(5 + 4);
Console.WriteLine(6 * (9 - 7) / 3);
```

![Printing numbers](../media/numbers-intro.png)

Here is the full list of math symbols that you can use:

| Operator | Description | Operator     | Description        |
| -------- | ----------- | ------------ | ------------------ |
| `+`      | Add         | `\` | Divide |
| `-`      | Subtract    | `%`          | Modulo (remainder) |
| `*`      | Multiply    | `(`,`)`      | Parenthesis        |

{{% notice info %}}

## Fun Fact: Computer Division

The computer does division differently from your regular calculator. Computer division will exclude remainders or decimals. For example, `15 / 4` produces `3`, and not `3.75`.

{{% /notice %}}

{{% notice tip %}}

## Working Together

Try printing out the answers to the following to the console. Ensure your brackets are matched. Use a calculator (or mental math) to verify the computer produced the correct answer.

- `2 - 19`
- `(3 + 5) * 6`
- `(13 + 5 * 8) / (6 - (3 + 7))`

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/NF-CSharp-blank?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% /notice %}}

{{% notice info %}}

## Fun Fact: Random Numbers

Here is how to print a random number between `1` (inclusive) and `10` (exclusive):

```csharp
Random random = new Random();
Console.WriteLine(random.Next(1, 10));
```

Try to find where we use `Random` in the GuessTheWord game! However, the details as to how this works is complicated, so we will skip this discussion.

{{% /notice %}}
