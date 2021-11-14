---
title: "Problem 1: Example Menu"
draft: false
weight: 4
---

## Task 1: Print the 2d Array!

<p style="margin-center: auto;padding: 1em 1em 1em 1em; margin-left: auto; margin-right: auto; width: 80em; font-size: 1vw; font-family: sans-serif; color:grey; line-height: 200%">In the 2D array below we have a list of different foods. Each row is the same type. For an example, row 1 is an array of main courses. Row 2 is an array of drinks and row 3 is an array of desserts.</p>

```js javascript
{
    String[][] menu = {    
                        { "Hamburger", "Pasta", "Steak", "Tacos" },
                        { "Cola", "Sprite", "Pepsi", "Fanta" },
                        { "Pudding", "Ice Cream", "Mochi", "Cake" }
                      };
}
```

<p style="margin-center: auto;padding: 1em 1em 1em 1em; margin-left: auto; margin-right: auto; width: 80em; font-size: 1vw; font-family: sans-serif; color:grey; line-height: 200%">Use what you have learned to print out the array!</p>

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/TwoArrayPrint?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Task 2: Search for an Item!

<p style="margin-center: auto;padding: 1em 1em 1em 1em; margin-left: auto; margin-right: auto; width: 80em; font-size: 1vw; font-family: sans-serif; color:grey; line-height: 200%">The manager wants to know if there is a specific item in the menu. Build a search that returns `true` or `false` if the item is in the menu or not.</p>

{{ % notice tip % }}
1. Remember to check every element in the row and column!
2. What value type does this return?
{{ % /notice % }}

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/TwoArraySearch?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>