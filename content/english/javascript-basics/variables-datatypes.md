---
title: "Variables and Data Type"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 4
---

To make a variable in JavaScript, you have 3 options.

1. Using `var` (which is short for variable) like this:
```javascript
var x = 5;
var y = 6;
var z = x + y;
```

2. Using `let` like this:
```javascript
let x = 5;
let y = 6;
let z = x + y;
```

3. Using `const` (which is short for constant) like this:
```javascript
const x = 5;
const y = 6;
```
It's important to realize here that a constant does not change. This means that these values are stuck to what they are set to at the beginning.

You can use `var`, `let`, and `const` to hold any of the different data types in JavaScript. This is called having _dynamic types_.

JavaScript has 8 different data types:
- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- Object
- BigInt

We're going to go over the most important ones: String, Number, Boolean, Undefined, and Object!

## String
Strings can be made up of words or a group of letters.

```javascript
// String examples
let animal = "Elephant";
let alphabet = "abc";
let name = "John";
```

## Number
Numbers can be used for all different types of numbers (small and big!). That is, until you need REALLLLY big numbers, then you need a special variable called a bigint (but that's a topic for another time).
  
```javascript
// Number examples
let age = 16;
let weight = 7.5;
```

## Boolean
Booleans represent true and false values so like telling the truth and telling a lie.
  
```javascript
// Boolean examples
let truth = true;
let lie = false;
let x = true;
let y = false;
```

## Undefined
Undefined means that the variable has no value (because 0 is technically a value)!

```javascript
// Undefined example
let x = undefined;
```

## Object
An object in JavaScript is a bit more complicated. It can be a built-in object such as an array, dates, maps, sets, and more, or it can be a user-defined array, which means it can be any group of data.

```javascript
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

// User-defined object (in this case first and last names)
const person = {firstName:"John", lastName:"Doe"};
```

## When you're unsure what type of variable it is...
Use the `typeof` operator! If you run the `typeof` operator with a variable, it'll tell you what it is:

```javascript
typeof "Amy" // returns "string"
typeof 0 // returns "number"
typeof (3) // returns "number" (the parantheses don't do anything)
typeof (3 + 4) // returns "number"
```
