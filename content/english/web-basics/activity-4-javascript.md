---
title: "Activity 4 - JavaScript"
date: 2024-09-16T15:25:51.25-07:00
draft: true
weight: 9
---
<!-- <p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/tppIJbxknJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p> -->

## Making your webpage interactive with JS

Now that we have elements on our screen and know how to style them with CSS, let's make our website more interesting and interactive. We may want to add animations or buttons that our site visitors can click on. We can do this by adding code logic to our page using JavaScript.  

## JavaScript (JS)

JavaScript is a programming language often used to make websites interactive and control their behavior. It allows you to add logic to your page, for example, if you click a button, then something on the page changes in response!

<img src="../media/clickingButton.png" alt="image of clicking a button" width="200" height="200">

<!-- ![alt text](../media/clickingButton.png "image of clicking a button") -->

We'll cover the very basics to get your started.

Similar to CSS, JS files work closely with HTML tags to select different items on the page.

See this example below:
<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="PorrJbr" data-pen-title="Adding JavaScript" data-preview="true" data-user="houghj16" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/houghj16/pen/PorrJbr">
  Adding JavaScript</a> by Jessie Houghton (<a href="https://codepen.io/houghj16">@houghj16</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<b>Click the "HTML" tab on the top left corner to see the HTML code, the "CSS" tab to see the CSS code, and the "JS" tab to see the JS code.</b>

Remember how we used the `class` attribute or the `id` attribute with CSS to give the corresponding HTML tags a style? We can use that same `id` with JavaScript to select that element.

You'll notice in the example above, even though we made the info `div` teal in exercise 2, since the JavaScript function <code>document.getElementById("info").style.color = "black";</code> runs after the styling is applied, it changed the color back to black.

Just like CSS, JS has a syntax (or way of writing) in the JS file so the computer understands what you're asking it to do. You'll use special keywords like `document` and functions like `getElementById` to give the computer instructions. There are too many keywords and functions to introduce now, but an important thing to remember is to end each line with a ;. Additionally, you can add comments to your code using // to help you remember what the code is doing.

With a little practice, JavaScript can enable you to do almost anything you want with your websites such as create games, animate 2D and 3D graphics, keep track of data in a database, and much more. Here are some good resources to learn more.

- <a href="https://www.w3schools.com/jsref/default.asp" target="_blank">w3schools JavaScript and HTML DOM References</a>
- <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" target="_blank">JavaScript Basics from MDN Web Docs</a>

## How to add an alert button

You might've noticed in the example, we added a new button "Pet Benji" next to our image of Benji. When you click on it, it adds an alert on the screen that says "Thanks for the pets!" and adds a message from Benji to the page. How did we do that?

- We added a new HTML element with the unique id `"pet-button"` to the HTML `<button id="pet-button">Pet Benji</button>`
- We added an empty HTML element with the unique id `"message"` to the HTML `<div id="message"></div>`
- Then, in the JS, we used `document.querySelector("#pet-button")` to find the element with id `"pet-button"`, and added a click event listenter that calls the alert function with the message `"Thanks for the pets!"`

![alt text](../media/sample-event-listener-code.png "code block with click event listener code")

{{% notice tip %}}

Inside the curly brackets {} of the function, you can call whatever JavaScript code you'd like! Checkout the resource links above to get ideas of what else you can do.

{{% /notice %}}

## Activity 4 - Adding another alert button to your website

Now, it's your turn to try it out! To complete this activity, you will need to complete the following steps:

1. Click on the <strong>try it yourself!</strong> button to open the editor
2. Add a new HTML button element to the HTML page with a unique ID. For example, `<button id="my-button">Click me!</button>`
3. Add the corresponding JS to the JS page to add a click event listener to the button.
4. Click on the button to see if it works!

<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/houghj16/pen/PorrJbr" target="_blank">Try it yourself!</a>
