---
title: "Problem 1: Example Menu"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 4
---

## Task 1: Print the 2D array

In the 2D array below we have a list of different foods. Each row is the same type. For an example, row 1 is an array of main courses. Row 2 is an array of drinks and row 3 is an array of desserts.

```js javascript
String[][] menu = {    
                    { "Hamburger", "Pasta", "Steak", "Tacos" },
                    { "Cola", "Sprite", "Pepsi", "Fanta" },
                    { "Pudding", "Ice Cream", "Mochi", "Cake" }
                  };
```
Use what you have learned to print out the array!

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/2DPrint?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Task 2: Search for an item

The manager wants to know if there is a specific item in the menu. Build a search method that returns `true` or `false` if the item is in the menu or not.

{{% notice tip %}}
1. Remember to check every element in the row and column!
2. What value type does this return?
{{% /notice %}}

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/2DFind?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>