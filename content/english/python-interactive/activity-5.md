---
title: "Activity 5 - Analyzing the customer's order"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---
## Pre-reqs
- <a href="../../python-basics/functions" target="_blank">Functions</a>
- <a href="../../python-basics/Loops" target="_blank">Loops</a>

## Analyzing the customer's order
We've got the customer's order, and now we have to simply calculate how much their order costs!

### Creating a dictionary from the customer's order
The first function we'll be writing is `createDictOrderItems(listOrderItems)` and it takes the list of items in the customer's order as a parameter. We'll be returning a dictionary of all the items ordered and their respective quantities. Currently we only have a list of strings that contain both the item name and quantity, however, we need to separate this information out and convert the quantity into an integer type since it's a number.
  - Let's first create an empty dictionary titled `dictItems` that will eventually store this information.
  - Next, write a loop (Hmm, which type of loop do you want to use?) that iterates over all of the orderItems in the list we passed in. 
  - In this loop, we want to split each string by the `"-"` that is in between the item name and quantity. If you specified a different format with `" : "` or `" - "` or anything else, specify that here. The first item we receive from splitting the string is the item name. The second item we get is the quantity, convert this to an integer. Store both values in helpfully named variables like `itemName` and `itemQuantity`.
  - Still within the for loop, we now need to add this to the dictionary `dictItems`. However, remember that since a customer can technically order the same thing multiple times in separate order items, we need to combine that here. For instance, if the customer orders Spring Rolls-2 twice, we want to interpret that as 4 Spring Rolls. To do this, we need to have an if-else block where if the dictionary already contains the item name, then add this new quantity to the quantity already associated with the item name, else create a new key-value pair with the item name and quantity.
  - Finally, after this loop ends, remember to return this dictionary!

### Compute prices from the dictionary  
The second function we're going to write is `computePrices(dictItems)` which takes the dictionary we created in the last function as a parameter and returns a new dictionary that has every item name associated with the price * quantity.
  - Create an empty dictionary `dictItemAndPrice` will hold the item and the total price for that item.
  - Loop through the items in the dictionary we just passed in. Within this loop, we want to get the item quantity from `dictItems` since it's the value in the dictionary's key-value pair. We also want to access the item's price from the global variable `dictMenu`. Keep in mind though that it is the first value in the list associated with the item name and we need to access it accordingly.
  - Multiply those two numbers together to get the total price for that item.
  - Add the item name and total price pair to the dictionary `dictItemAndPrice`.
  - Return this dictionary.

### Compute the total price of the order
The third function we'll create is `computeTotalPrice(dictItemAndPrice)` which takes the dictionary we created in `computePrices(dictItems)` as a parameter and returns the total price of the customer's entire order.
  - Initialize a variable `totalPrice` to 0 so we can add the prices of each item to it.
  - Loop through the dictionary `dictItemAndPrice` and add each of the values to `totalPrice`.
  - Return totalPrice rounded to 2 decimal places by using `round()` and provide 2 as the second value so it rounds to the hundredths place since that's how we want the final price to be displayed.

All 3 of these helper functions will be called in the `main()` in the else block in the order we wrote them in. The value we returned for the 1st function will be the argument to the second function, and the value returned from the 2nd function will be the argument to the third function, and finally, the result of the 3rd function will be used in the next activity! Remember to explicitly store each of the results of the functions in variables so that you can reuse them multiple times.