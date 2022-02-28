---
title: "Activity 2 - Variables and Inputs"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: true
---

Awesome! Now lets go a step further. We will now not only print the message, but input the name of the receiver and make our program say hello.

To do that we will need **variables**.


{{% notice tip %}}

### Variables

A **variable**  is a container that stores information. There are many types of variables that will depend of the kind of information that they store:

1. **String**: it stores a sequence of characters, letters, numbers, and symbols. Example: `"hello"`, `"1,2,3"`.
2. **Int**: it stores integer numbers, that being negative or positives. Example `1`, `100`, `-250`.
3. **Char**: it stores only one single character. Example `'A'`, `'e'`, `'I'`. Char always goes wrapped in between single quotes.
4. **Bool**: it only stores `true` or `false`.

To create a variable it is necessary to declare it as follows:

```
int number = 10;
```
Lets look at it into more detail:

We first need to specify the type of information that will be stored inside that variable. In this case, It will be of the `int` type. Then we need to declare the name of the container, in this case `number`. Finally we specify the value that the container will hold, in this case `10`. We end with a semicolon to indicate that the line is complete.

We can now use the variable `number` inside the program to make reference to the stored number.  If we would like to print its value, we would use the following line of code:

```
cout << "The number is: " << number << endl;
```
 
Console will print:

```
The number is: 10
```
{{% /notice %}}

{{< notice note >}}
We can use cout to print words, numbers or variables. If we would to print more that one thing, we would have to add `<<` between each term:
Example: 
```
int hour = 13;
cout << "It is" << hour << " in the afternoon" << endl;
```
This will print:
```
It is 13 in the afternoon.
```
{{< /notice >}}

The next thing we need is the ability to type into console the name of the recipient (which we will be storing inside a variable), and the program to say hello to him or her.

To input the name we will be using the following code:
```
string name;
cin >> name;
```
Lets dig into this line of code.

{{% notice tip %}}

### Console Input

As same as we can print to console using `cout`, we can input data through console by using `cin` specifying the name of the variable in which whatever input will be stored.

In the previous example we are stating that whatever data we input, it will be stored inside the variable **name**.

That being said, if we input:
```
Queen
```
Then the variable `name` will store the String "Queen".

{{% /notice%}}

It is time then!

Lets begin with our program.

These are the steps to follow for this activity:

1. Declare a String variable.
2. Use `cin` to input the data that will be stored in the variable.
3. Print to console "Hello " and the data stored in the variable.
4. Click Run. Type in the name of the recipient in the **console** tab.


<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/activity-2?lite=true#main.cpp" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% notice warning %}}

### HELP!

In case that after clicking the Run button, an error message in red shows, it means that there is something wrong with your code. Please ask for help to your instructor.

In the meantime you could check for:

1. Do not use caps.
2. Make sure that you add a semicolon after each line of code. 
3. Remember that all Strings have to go between quotation marks.
4. For now, all code that write will have to go inside the brackets `{}` on the `int main` function.

{{% /notice %}}


