---
title: "Activity 3 - Loops"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: true
---

Great! 

The King has now requested that we input our message letter by letter so that we can change them afterwards.

To do this we need something called **loops**. Loops allow us to execute a block of code multiple times. Let's see the below example which uses a loop to print out some numbers.

```
for(int i=0; i<3; i++){
  cout << i << endl;
}
```
Let's try to understand what this line of code does.

{{% notice tip %}}


### Loops

 `for(int i=0; i<3; i++) { }`. 
This tells the program that the instructions that are held within the brackets `{}` are supposed to be executed in a loop. 
We can identify three different parts inside this command:
1. `int i=0;` declares an int variable called `i` which will be initialized as 0. This variable will work as a counter of how many times we've been in the loop.
2. `1<3;` is the condition that needs to be met for the loop to continue working. If the value of the variable `i` is smaller than 3, the loop will continue executing.
3. `i++` will add 1 to the variable `i` at the end of each loop.
The most important part to take away from this is that this is the general way of repeating instructions some number of times (in this case, 3 times).

{{% /notice %}}

A property of **string** variables is that we can count the amount of characters in the string. 

{{% notice tip %}}

### Accessing each character from a string

Each character from a string variable is called a **char**. We can access this `char` by the position that holds inside the string. Let's picture it as a list of characters. The first character will be at position 0, the second one at position 1, and the next one at position 2, and so on.

That being said, we would need the following code to access each character:

```
string word = "hello";
char letter = word[0];
cout << "The first letter is: " << letter << endl;
```
This would print: 
```
The first letter is: h
```

### String size

Apart from accessing each individual character in a string, we can also know how long it is by using the following lines of code:

```
string word = "hello";
int wordSize = word.size();
cout << "The size is: " << wordSize << endl;
```
This would print:
```
The size is: 5
```
{{% /notice %}}

Now we modify the code we had to print each letter of the name instead of a hello.

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/activity-3-english?lite=true#main.cpp" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

