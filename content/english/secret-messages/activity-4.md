---
title: "Activity 4 - Conditions"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

Very well!

We are getting closer and closer to making our secret messages. But let's also not forget that we have to be able to decipher these messages!

For that, we are going to enter in the console a `1`, if we want to encrypt a message, or the number `2`, if we want to decrypt it.

For this we will need **conditions**.

{{% notice tip %}}

### Conditions if / else
A condition in programming is an instruction or a group of instructions, which can be executed or not, based on whether a condition is true. It would look something like this: **IF**(if) this happens, execute these instructions, **IF NOT** (else), execute these other instructions.

Example
```
if(3 > 1){
  cout << "3 is greater than 1" << endl;
}else{
  cout << "3 is not greater than 1" << endl;
}
```
The program will print:
```
3 is greater than 1
```


1. `if(3 > 1)` checks to see if the number 3 is greater than 1.
2. If this is true, then the code block immediately following `if` will be executed.
3. Otherwise, the code block following `else` will be executed. 
In the example, the `else` block will not run because the `if` condition is true - 3 is indeed greater than 1.

To create conditions, we usually use **logical operators** in the parentheses `()` beside `if`. Suppose `a = 5` and `b = 3`. Then, the following are examples of logical operators we can use:

1. Less than: `a < b` (is 5 is less than 3?)
2. Less than or equal to: `a <= b` (is 5 less than or equal to 3?)
3. Greater than: `a > b` (is 5 is greater than 3?)
4. Greater than or equal to: `a >= b` (is 5 greater than or equal to 3?)
5. Equals: `a == b` (is 5 equal to 3?)
6. Not equals: `a != b` (is 5 not equal to 3?)

{{% /notice %}}

For the activity, we are going to use a condition to know if what we want is to create a secret message (encrypt it) or uncover a message (decrypt it).

For that, we must follow the following steps:
1. Create a variable of type `int`.
2. Request input from the user, and store the inputted data into the variable of type `int`.
3. Create an if/else condition to check if the number inputted is equal to `1`. If so, then we want to encrypt the message; otherwise, we want to decrypt the message.
4. Print to console in each case what we wish to do. For example, if `1` is inputted, then print out `"Encrypt a message"`. Otherwise, print `"Decrypt a message"`.

If you need help, remember that you can go back to the previous activities and review.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-4-english" target="_blank">Launch Replit</a>