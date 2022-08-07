---
title: "For Loops"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 5
---

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://www.youtube.com/embed/QHM7dmhFP64" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<!--<link rel="stylesheet" href="../../style.css">-->

When you know exactly how many times you want to loop through a block of code, use a `for` loop instead of a `while` loop:

```java
for (initialization; condition; iteration) {
  // code block to be executed
}
```

- `initialization` is executed (one time) before the execution of the code block.
- `condition` (as the name implies) defines the condition for executing the code block.
- `iteration` is executed (every time) after the code block has been executed.

The example below will print the numbers `0` to `4`:

```java
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
```

- `initialization` sets a variable before the loop starts (`int i = 0`).
- `condition` defines the condition for the loop to run (`i` must be less than `5`). If the condition is `true`, the loop will start over again, if it is `false`, the loop will end.
- `iteration` increases a value (`i++`) each time the code block in the loop has been executed.

This example will only print even values between `0` and `10`:

```java
for (int i = 0; i <= 10; i = i + 2) {
  System.out.println(i);
}
```