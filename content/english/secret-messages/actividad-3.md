---
title: "Activity 3 - Loops"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: true
---

Great! 

The King has now requested that we input our message later by later so that we can change them afterwords.

To do this we need something called loops. Loops execute a bunch of code however times it is required. Lets see the below example to print out numbers.

```
for(int i=0; i<3; i++){
  cout << i << endl;
}
```
Lets try understanding what this code does.

{{% notice tip %}}


### Loops

 `for(int i=0; i<3; i++) { }`. 
This tells the program that the instructions that are held within the brackets `{}` are supposed to be executed in a loop. 
We can identify three different parts inside this command:
1. `int i=0;` this declares an int variable called `i` which will be initialized in 0. This variable will work as a counter of how many times we´ve been in the loop.
2. `1<3;` is the condition that needs to be met for the loop to continue working. While variable `i` is lower to 3, the loop will continue executing.
3. `i++` this will ad 1 to the variable `i` on each loop.

{{% /notice %}}

A property of **string** variables is that we can count the amount of character that it is made from. 

{{% notice tip %}}

### Count characters from a string

Each character from a string variable is called a char. We can access this char by the position that holds inside the string. Lest picture it as queue of characters. The first character will be then the number 0, the second one the 1, and the next one the 2…

That being said, we would need the following code to access each:

```
string word = "hello";
char letter = word[0];
cout << "The first letter is: " << letter << endl;
```
This would print: 
```
The first letter is h
```

### String size:

Apart from accessing to each individual character in a string, we can also know how long it is by using the following lines of code:

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

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/actividad-3?lite=true#main.cpp" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

