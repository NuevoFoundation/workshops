---
title: "Web Basics"
date: 2019-09-03T17:53:41-07:00
draft: true
---

# The Basics

## What is JavaScript?

JavaScript is one of many programming languages and it is known as the programming language for the web. It used to control website behavior, such as button clicks, pop-up windows, data flows, and many other functions.

## Variables

Variables are containers in your code that can hold a single number, word, or other information. This information can be used and changed by calling the variable later on throughout your program. This means that you are asking your program to access the information that you've stored.

With a few exceptions, variables can be named anything containing letters, digits, underscores, and dollar signs. BUT No matter what, they cannot have spaces and they should always start with a letter.

Variables can hold different types of data, let's go over the basic ones.

## The Data Types

### Integers

Integer is basically just a fancy name for any real number that is not a decimal. For example, integers are whole numbers like 3, 100, 6,000, -3, and so on!

```javascript
// this is a comment, these are used to describe what your code does
// Below are different examples of variables

//Integer (non decimal number) variables examples:

var a = 5;
var b = 10;
var c = 15;
```

### Strings

Strings are just what programmers decided to call words. If it helps remind you that strings are words, think of them as a "string" of characters. Strings can be anything like your name or the name of favorite pet.

Strings are surrounded by "quotation marks"

```javascript
//String (one or more words aka a "string" of characters) variable examples:
//string variable values are surrounded by "quotation marks"

var company = "MICROSOFT";
var course = "Coding with Micro:Bits!";
var message = "Coding is so fun!";
```

### Booleans

Sometimes programmers want to check if certain conditions are true or false. This information is stored in a Boolean data type.

If you're curious about why these are called Booleans, a guy named George Boole is the one that created them.

```javascript
//Boolean (true or false) variable example

var canPigsFly = false;
var codingIsCool = true;
```
### Characters

Characters are single letters. They are surrounded by 'single quotes'

```javascript
//Character (a single letter) variable example:
//character variable values are surrounded by 'single quotes'

var letter = "A";
```

### Conditionals and Logical Operators

Conditionals, most commonly called if-statements, are used to choose what code you want to run depending on the value of your variables or other conditions.

```javascript
//conditionals
if (true) {
  //this section of code will run
}
if (false) {
  //this section of code will not run
}

var age = 10;
if (age < 18) {
  // if age is less than 10
  print("You're not an adult yet! :( ");
}
```

### Functions
Functions are a set of instructions that are designed to perform a particular task, similar to a receipe for example. They can be used repeatedly without having to write the same code again.

```javascript
// Define a function that prints a string
function welcomeMessage() {
  console.log('Welcome to JavaScript');
}
// Call the function
welcomeMessage();
```

### Parameters
Parameters allow a function to perform tasks without knowing the specific input values ahead of time. For the example below: <b>firstNumber</b> and <b>secondNumber</b> are the parameters of the function. 

```javascript
// Define a function that adds two numbers
function addTwoNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
// Call the function and pass in the arguements (in this case we want the two numbers we want our function to add together)
addTwoNumbers(3, 5);
```

### Query Selector(s)
The <b>querySelector()</b> method returns the first element that matches a specified CSS selector(s) in the document.

```javascript
// return all elements in the document with class="example":
var exampleElement = document.querySelectorAll(".example");

// returns the ul elements
var ulElement = document.querySelector("ul");
```
### Event Listeners
The <b>addEventListener()</b> is a function in JavaScript which takes the event to listen for, and a second argument to be called whenever the described event gets triggered. 

```javascript
element = document.querySelector("form");
element.addEventListener("submit", submitAction);
```

### Adding facts about Benji
Using what you've just learned about Javascript, let's add some facts about Benji so people can learn more about him. 

<iframe height="607" style="width: 100%;" scrolling="no" title="Information" src="//codepen.io/amarielo92/embed/mdbxNaq/?height=607&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

<div class="exercise-box">
  <h2>Challenge 1 - Writing a JavaScript function to delete items.</h2>
  <ol>
      <li>Open the web editor (click the "Try it yourself!" button below).</li>
      <li>The function to create a list item about Benji has already been written.</li>
      <li>In the JS section of the web editor, try to create your own <code>deleteTask() function.</code></li>
      <li>You can use the <code>addTask()</code> function as a guide while creating your delete function.</li>
      <li>If you get completely blocked, take a look at the sample <code>deleteTask()</code> at the bottom of the web editor in the JS section.</li>
  </ol>
  <a class="my-2 mx-4 btn btn-info" href="https://codepen.io/amarielo92/pen/mdbxNaq" target="_blank">Try it yourself!</a>
</div>