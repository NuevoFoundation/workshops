---
title: "While Loops"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 3
---

A `while` loop is just that, it's a section of code that continues to carry out a few actions "while" the condition is true. We start with the word `while` followed by the condition that's true in parentheses `()`, and then put the action (or actions) to be performed inside of curly brackets `{}`. Here is the set up:

```javascript
// While loop setup
while (condition is true) {
  // action to perform
}
```

Now let's jump into some examples!

## Examples
Say we want to create a loop that runs 8 times.
  
```javascript
// 8x example
let i = 0; // set a counter variable
while (i < 8) {
  i++; //moves to the next iteration of the loop (makes the loop run through this part again)
}
```

The condition could also be a statement, such as a boolean (true/false). For example, say we wanted to read through different comments on a video until we read all of them. To do this in a while loop we would need a few different variables (you can ignore the fancy node words).

```javascript
const commentIterator = video.createNodeIterator(video, NodeFilter.SHOW_COMMENT) // this is a way to move from one comment to the next on the video
let currentComment; // this is a placeholder for the current comment


// this while loop will keep looping while there is a "nextNode" which is another way of saying there is another comment after this
while (currentComment = commentIterator.nextNode()) {
  console.log(currentComment.textContent.trim()); //this prints out the current comment so we can read it!
}
```
