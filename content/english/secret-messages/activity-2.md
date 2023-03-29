---
title: "Activity 2 - Variables and Inputs"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

{{< youtube umCdJDmdf3s >}}

Awesome! Now let's go a step further. We will now not only print the message, but input the name of the receiver and make our program say "Hello".

To do that we will need **variables**.


{{% notice tip %}}

### Variables

A **variable** is a container that stores information. There are many kinds of variables, each storing different types of information:

1. **string**: represents a sequence of characters, letters, numbers, and symbols. **string**s are always wrapped in double quotes. Examples: `"hello"`, `"1,2,3"`.
2. **int**: represents positive or negative integer numbers. Examples: `1`, `100`, `-250`.
3. **char**: represents a single character. Examples: `'A'`, `'e'`, `'I'`. **char**s are always wrapped between single quotes.
4. **bool**: represents either a `true` or `false` value.

To create a variable, declare it as follows:

```
int number = 10;
```
Let's look at this line of code in more detail:

We first need to specify the type of information that will be stored inside that variable. In this case, it will be of the `int` type. Then we need to declare the name of the container; in this case, we will name our variable `number`. Finally we specify the value that the container will hold; in this case `10`. We end with a semicolon to indicate that the line is complete.

We can now use the variable `number` inside the program to reference the stored number.  If we would like to print its value, we would use the following line of code:

```
cout << "The number is: " << number << endl;
```
 
Running this line of code, the console will print:

```
The number is: 10
```
{{% /notice %}}

{{< notice note >}}
We can use `cout` to print words, numbers or variables. If we would to print more that one thing, we would have to add `<<` between each term:
Example: 
```
int hour = 13;
cout << "It is " << hour << " in the afternoon" << endl;
```
This will print:
```
It is 13 in the afternoon.
```
{{< /notice >}}

Next, we'd like the recipient of the message to be able to write his or her name to the console, (which we will be storing inside a variable), and the program to say "Hello" to him or her.

To input the name we will be using the following code:
```
string name;
cin >> name;
```
Let's dig into this line of code.

{{% notice tip %}}

### Console Input

Similar to how we can print to console using `cout`, we can input data into the console by using `cin`, and specifying the name of the variable in which the input will be stored.

In the previous example we are stating that whatever data we input, it will be stored inside the variable `name`.

That being said, if we input:
```
Queen
```
Then the variable `name` will store the string `"Queen"`.

{{% /notice%}}

Now it's time to begin with our program.

These are the steps to follow for this activity:

1. Declare a string variable named `name`.
2. Use `cin` to request input from the user, and store the inputted data into the `name` variable.
3. Print to console `"Hello (name)"`, where `(name)` should be replaced by the value of the `name` variable.
4. Click Run. Type in `"Queen"` as the name of the recipient in the **console** tab, and make sure you get `"Hello Queen"` as output from the console.


<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-2-english" target="_blank">Launch Replit</a>

{{% notice warning %}}

### HELP!

If after clicking the Run button, an error message in red appears, it means that there is something wrong with your code. Please ask for help from your instructor.

You should also check for the following
1. Ensure the spelling, capitalization, and symbols used match with the example given.
2. Make sure that you add a semicolon at the end of each line of code. 
3. Remember that all strings must be between quotation marks.
4. All the code that you write need to be within the brackets `{}` in the `int main` function.

{{% /notice %}}


