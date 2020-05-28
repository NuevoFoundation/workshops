---
title: "Variables"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 10
---
# Variables

Variables are simply names that we can give to values such as strings, numbers and booleans. We use variables to store information that the computer can keep track of.

Here's how to declare a variable named `str`. We say `str` has the value `"Hello World"`. Can you describe what the other variables below mean?

```csharp
var str = "Hello World";
var x = 88;
var happy = true;
```

Press **run**. Note that variables are not printed out to the console. Instead, the variable simply stores the string or number or boolean into the computer's memory. 

![Variables introduction](../media/variables-intro.png)

We can use these variables in other statements. For example, the following code would print `Hello Nuevo Foundation` to the console:

```csharp
var str1 = "Hello";
var str2 = "Nuevo Foundation";
Console.WriteLine(str1 + " " + str2);
```

![Variables with strings](../media/variables-strings.png)

You can change the value of a variable at any time by using the `=` operator again. If you're changing a value of a variable, you don't need to use `var` again. In the following example, `Hola` will be printed instead of `Hello`.

```csharp
var str = "Hello";
str = "Hola";
Console.WriteLine(str);
```

![Variables replacing values](../media/variables-replace.png)

Here's another example: `10` will be printed instead of `9`.

```csharp
var num = 9;
num = num + 1;
Console.WriteLine(num);
```

![Variables with numbers](../media/variables-numbers.png)

Note that you CANNOT replace a string variable with a number or a boolean, and similarly for other combinations. The following example code will NOT work:

```csharp
var happy = "Hello";
happy = 9;
```

![Variables invalid](../media/variables-invalid.png)

Another way to declare variables is to replace var with the type (`string`, `int`, `bool`) of variable you are creating. By declaring the type explicitly, you avoid the problem that we see above. For example:

```csharp
string str = "Hello World";
int x = 88;
bool happy = true;
```

Note that `var`, `string`, `int`, or `bool` are special keywords in C#, so you cannot create variables with those names.

{{% notice tip %}}

## Working Together

Let's create two new variables:

- A variable named comp that stores the string `"Computer"`.
- A variable named five that stores the number `5`.

Next, let's use the variables to print out (`Console.WriteLine`) the following to the console. Let's try to do this while using the variables!

**_Hint:_** we will use the `+` operator to combine strings together, and to also add numbers together.

```
Computer
5
ComputerComputer
10
ComputerComputerComputer
15
```

<!--<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/NF-CSharp-blank?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>-->

{{% /notice %}}
