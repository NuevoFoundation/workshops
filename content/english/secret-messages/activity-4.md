---
title: "Activity 4 - Conditions"
date: 2022-2-23
weight: 4
draft: true
---

Very well!

We are getting closer and closer to making our secret messages. But also, let's not forget that we have to be able to decipher those messages!

For that, we are going to enter in the console a 1, if we want to encrypt a message, or the number 2, if we want to decrypt it.

For this we will need the CONDITIONS.

{{% notice tip %}}

### Conditions if / else
A condition in programming is an instruction or a group of instructions, which can be executed or not, based on whether a condition is true. It would look something like this: **IF**(if) this happens, execute these instructions, **IF NOT** (else), execute these other instructions.

Example
```
if(3 > 1){
  cout << "3 is grater than 1" << endl;
}else{
  cout << "3 is not grater than 1" << endl;
}
```
The program will print:
```
3 is grater than 1
```


There we are indicating that `if` the number 3 is greater than 1 `(3>1)`, let what is between its keys be executed `{}`. And otherwise, let what is in the block be executed as `else`. 
In the example, the *else* block will not run because the *if* condition is true, since 3 is greater than 1.

To create conditions, we usually use the following **logical operators** in the parentheses `()` of the if statements **if**:

Example: `a=5` and `b=3`

1. Less than: `a < b` (5 is less than 3?)
2. Less than or equal to: `a <= b` (is 5 less than or equal to 3?)
3. Greater than: `a > b` (5 is greater than 3?)
4. Greater than or equal to: `a >= b` (is 5 greater than or equal to 3?)
5. Same as: `a == b` (5 equals 3?)
6. other than : `a != b` (5 is different than 3?)

{{% /notice %}}

For the activity, we are going to use a condition to know if what we want is to create a secret message (encrypt it) or decrypt a message (decrypt it).

For that, we must follow the following steps:
1. Creates a variable of type int.
2. Enter the contents of that variable by console.
3. It creates an if/else condition to know if the number entered is equal to 1, therefore, we want to encrypt a message, or else, we want to decrypt it.
4. Print by console in each case which is what we want to do. Ex: "Encrypt a message" or "Decrypt a message".

To help, remember that you can go back to the other activities.

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/activity-4-english?lite=true#main.cpp" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>