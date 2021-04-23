---
title: "For Loops"
draft: false
weight: 5
---
<link rel="stylesheet" href="../../style.css">

When you know exactly how many times you want to loop through a block of code, use the for loop instead of a while loop:

```js javascript

for (statement 1; statement 2; statement 3) {
  // code block to be executed
}

```

<ul>
  <li>Statement 1 is executed (one time) before the execution of the code block.</li>
  <li>Statement 2 defines the condition for executing the code block.</li>
  <li>Statement 3 is executed (every time) after the code block has been executed.</li>
</ul>

The example below will print the numbers 0 to 4:

```js javascript

for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
```

<ul>
  <li>Statement 1 sets a variable before the loop starts (int i = 0).</li>
  <li>Statement 2 defines the condition for the loop to run (i must be less than 5). If the condition is true, the loop will start over again, if it is false, the loop will end.
</li>
  <li>Statement 3 increases a value (i++) each time the code block in the loop has been executed.</li>
</ul>

This example will only print even values between 0 and 10:

```js javascript

for (int i = 0; i <= 10; i = i + 2) {
  System.out.println(i);
}
```