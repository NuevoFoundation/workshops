---
title: "JavaScript: Basics - Answer Key"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
This is a teacher's reference guide for the JavaScript Basics workshop. It consolidates all code examples with their expected console outputs so you have a single page to reference during class. Students use [playcode.io](https://playcode.io) as their coding environment.
{{% /notice %}}

## Environment Setup Checklist

Before starting, students should:
1. Open [playcode.io](https://playcode.io)
2. Close all files except **script.js**
3. Delete everything in script.js
4. Turn off **live** mode (click once on the live button)

## While Loops

### Basic Counter (runs 8 times)

```javascript
let i = 0;
while (i < 8) {
  console.log(i);
  i++;
}
```

Output:
```
0
1
2
3
4
5
6
7
```

{{% notice tip %}}
**Common student question:** "Why does it print 0-7 instead of 1-8?"

Because `i` starts at 0 and `i++` runs after the `console.log`. If you want 1-8, start with `let i = 1` and use `i <= 8`.
{{% /notice %}}

### Key concept: `i++`

`i++` is shorthand for `i = i + 1`. It increases the counter by 1 each loop. Without it, the loop runs forever (infinite loop).

## Variables and Data Types

### Three ways to declare variables

```javascript
var x = 5;    // old way (function-scoped)
let y = 6;    // modern way (block-scoped, can change)
const z = 11; // constant (cannot change after setting)
```

Output (if you log them):
```javascript
console.log(x); // 5
console.log(y); // 6
console.log(z); // 11
```

### String examples

```javascript
let animal = "Elephant";
let alphabet = "abc";
let name = "John";
console.log(animal);
console.log(typeof animal);
```

Output:
```
Elephant
string
```

### Number examples

```javascript
let age = 16;
let weight = 7.5;
console.log(age);
console.log(weight);
console.log(typeof age);
```

Output:
```
16
7.5
number
```

### Boolean examples

```javascript
let truth = true;
let lie = false;
console.log(truth);
console.log(lie);
console.log(typeof truth);
```

Output:
```
true
false
boolean
```

### Undefined example

```javascript
let x = undefined;
console.log(x);
console.log(typeof x);
```

Output:
```
undefined
undefined
```

### Object examples

```javascript
const person = {firstName: "John", lastName: "Doe"};
const cars = ["Saab", "Volvo", "BMW"];
const date = new Date("2022-03-25");

console.log(person);
console.log(cars);
console.log(typeof person);
```

Output:
```
{firstName: "John", lastName: "Doe"}
["Saab", "Volvo", "BMW"]
object
```

### The `typeof` operator

```javascript
console.log(typeof "Amy");    // "string"
console.log(typeof 0);        // "number"
console.log(typeof (3));      // "number"
console.log(typeof (3 + 4));  // "number"
console.log(typeof true);     // "boolean"
console.log(typeof undefined);// "undefined"
console.log(typeof [1, 2]);   // "object"
```

{{% notice tip %}}
**Common student question:** "Why is an array's typeof `object` and not `array`?"

In JavaScript, arrays are a special kind of object. To check if something is an array, use `Array.isArray([1, 2])` which returns `true`.
{{% /notice %}}

## Arrays

### Creating arrays

```javascript
// All three ways create the same array:
let fruits1 = new Array("Apple", "Orange", "Mango");
let fruits2 = Array("Apple", "Orange", "Mango");
let fruits3 = ["Apple", "Orange", "Mango"];

console.log(fruits3);
console.log(fruits3.length);
```

Output:
```
["Apple", "Orange", "Mango"]
3
```

### Array Properties

#### Accessing by index

```javascript
let fruits = ["Apple", "Orange", "Mango"];
console.log(fruits[0]); // first element
console.log(fruits[1]); // second element
console.log(fruits[2]); // third element
```

Output:
```
Apple
Orange
Mango
```

{{% notice tip %}}
**Common student question:** "Why does the first item start at 0?"

Array indexes start at 0 in most programming languages. So `fruits[0]` is the first item, `fruits[1]` is the second, and so on.
{{% /notice %}}

#### Modifying by index

```javascript
let fruits = ["Apple", "Orange", "Mango"];
fruits[1] = "Banana";
console.log(fruits);
```

Output:
```
["Apple", "Banana", "Mango"]
```

#### Length property

```javascript
let fruits = ["Apple", "Orange", "Mango"];
console.log(fruits.length);
```

Output:
```
3
```

#### Constructor property

```javascript
let fruits = ["Apple", "Orange", "Mango"];
console.log(fruits.constructor);
```

Output:
```
function Array() { [native code] }
```

### Array Iteration (forEach)

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(item) {
  console.log(item);
});
```

Output:
```
1
2
3
4
5
```

### Array Methods

#### concat() - join arrays

```javascript
let arr1 = ["A", "B"];
let arr2 = ["C", "D"];
let result = arr1.concat(arr2);
console.log(result);
```

Output:
```
["A", "B", "C", "D"]
```

#### push() - add to end

```javascript
let fruits = ["Apple", "Orange"];
fruits.push("Mango");
console.log(fruits);
```

Output:
```
["Apple", "Orange", "Mango"]
```

#### pop() - remove from end

```javascript
let fruits = ["Apple", "Orange", "Mango"];
let removed = fruits.pop();
console.log(removed);
console.log(fruits);
```

Output:
```
Mango
["Apple", "Orange"]
```

#### shift() - remove from beginning

```javascript
let fruits = ["Apple", "Orange", "Mango"];
let removed = fruits.shift();
console.log(removed);
console.log(fruits);
```

Output:
```
Apple
["Orange", "Mango"]
```

#### unshift() - add to beginning

```javascript
let fruits = ["Orange", "Mango"];
fruits.unshift("Apple");
console.log(fruits);
```

Output:
```
["Apple", "Orange", "Mango"]
```

#### sort() - alphabetical order

```javascript
let fruits = ["Mango", "Apple", "Orange"];
fruits.sort();
console.log(fruits);
```

Output:
```
["Apple", "Mango", "Orange"]
```

{{% notice tip %}}
**Common student question:** "Why does `sort()` put 10 before 2?"

```javascript
let nums = [10, 2, 30, 1];
nums.sort();
console.log(nums); // [1, 10, 2, 30] - sorted as strings!
```

By default, `sort()` converts values to strings and sorts alphabetically. For numbers, use: `nums.sort(function(a, b) { return a - b; });`
{{% /notice %}}

#### reverse() - flip the order

```javascript
let fruits = ["Apple", "Mango", "Orange"];
fruits.reverse();
console.log(fruits);
```

Output:
```
["Orange", "Mango", "Apple"]
```

## Quick Reference Table

| Concept | Code | Output |
|---------|------|--------|
| Declare variable | `let x = 5;` | |
| Print to console | `console.log(x);` | `5` |
| Check type | `typeof "hello"` | `"string"` |
| While loop | `while (i < 3) { i++; }` | loops 3 times |
| Array create | `let a = [1, 2, 3];` | |
| Array access | `a[0]` | `1` |
| Array length | `a.length` | `3` |
| Add to end | `a.push(4)` | `[1,2,3,4]` |
| Remove from end | `a.pop()` | removes `4` |
| Add to start | `a.unshift(0)` | `[0,1,2,3]` |
| Remove from start | `a.shift()` | removes `0` |
| Join arrays | `a.concat(b)` | new array |
| Sort | `a.sort()` | sorted |
| Reverse | `a.reverse()` | reversed |
| Loop each | `a.forEach(fn)` | calls fn per item |
