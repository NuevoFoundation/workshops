---
title: "Activity 6 - Functions"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/hSsqsvhyYAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Very well!

You've already done a lot of the program!

In this activity we will use **functions** to group sections of the code.

{{% notice tip %}}

### Functions
Functions allow us to divide the work of a program into smaller tasks separate from the main section, that is, from the `main` function.

We can think of functions as a machine such that when we turn it on, it executes instructions to return a final result. You can have several machines that perform different processes, and we identify each one with a name, and the type of result it returns.

In this activity we will use functions with the **void** (empty) return type. These functions only process instructions, and do not return anything.

To declare (create) a function, we must use the following structure **outside the main function**:
```
void name_function(){
    //Code here
}
```
Let's analyze this code in more detail:
1. The **return type** of the function indicate the type of object the function will return. In this case, we use `void` to specify that this function doesn't return anything.
2. The **name** of this function is `name_function`.
3. The parentheses `()` are added after the name to identify that it is a function.
4. The braces `{}` determine the block of code that will execute when we use the function.

### Calling a function

Since the functions we declare go outside the `main()` function, when we press **Run**, the block of code we write in the functions will not run. Therefore, within the function `main()` we must **call** the function. We must tell the program when we want that block of code to run. To call a function, we must use the following statement:
```
name_function();
```
We just have to write the name we gave to the function, followed by the parentheses, and finish with a semicolon `;`.
This will cause the instructions that are inside the function `name_function()` to be executed.

### Parameters of a function
When we declare a function, we can pass **parameters** to it. These are additional objects that the function can use to execute its instructions.
The parameters go within the parentheses of the function. For example:
```
void name_function(int sum, int &number){
    number += sum;
}
```
And in the `main()` function we can call `name_function` with some parameters:
```
int main(){
    int x = 25;
    int y = 5;
    name_function(y, x);
}
```
Let's understand in detail what we did:
1. When declaring `name_function`, we write within the parentheses which variables we are going to pass into the function. Then, within the function body, we can use those variables.
2. In `main`, we had two variables already declared, which we then pass as parameters into the created function `name_function`. By doing this, the variable `sum` equals the variable `y`. 
3. The variable `number` has this symbol `&` in front. This means that if we modify the variable within the function, the variable that we pass to it in the main function will also be modified. That is, the variable `x` will be modified by the function since we pass it **by reference** when writing that symbol in front. When we do not put this symbol, even if we modify its value in the function, we will not see that change in `main`.
{{% /notice %}}

That's great!
Now, let's create 2 functions - one to encrypt the message, and the other to decrypt it. For this, we're going to use code we already had, and we'll program something new as well.

1. First, declare a function of return type `void`, just like encrypting, but to decrypt the name. Name this function `decrypt()`.

2. Copy the contents of the `encrypt()` function into the new `decrypt` function.

3. In the `sum` variable, instead of adding, subtract the character of the name and character of the keyword, and add a letter `a` (instead of subtracting) so that the final character is a letter of the alphabet and not some random character.

4. Change the condition to turn in the alphabet. Instead of checking to see if the `sum` is greater than the character `z`, check if the `sum` is less than `a`; if so, add `25` to the variable, instead of subtracting.

5. In the `main` function, call the corresponding function in the `if` condition depending on if we want to encrypt or decrypt a message.

When you're done, you can press **Run** and try the following examples:
```
programmer
1
reina
```
```
witvczxipigrmg
2
reina
```
You should also try using your own secret words!

{{< alert theme="warning" >}} **Warning:** in this program we should always write the strings and characters in **lowercase letters**. {{< /alert >}}

Remember that you can always go back to the previous activities to review anything!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-6-english" target="_blank">Launch Replit</a>

{{< alert theme="danger" >}}**Important:** To paste into the console, right click the console and click "Paste". Otherwise, the paste operation may not work correctly. {{< /alert >}}
