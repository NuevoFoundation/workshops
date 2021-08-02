---
title: "Activity 4 - Interacting with the Customer"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---
## Interacting with the Customer
Let's continue interacting with the customer and get their order! In the `main()` function, the next thing we need to do is create an empty list stored in the variable `listOrderItems` so that any items they will eventually order are stored here.

Now let's use our knowledge of if-else statements and while loops to receive the customer's order. If the customer responded No to the question asking them whether they would like to order anything from the menu, then print out a Goodbye statement. Otherwise, ask them to input the first item and quantity they would like to order with a specified format such as `"(Example order item: Spring Rolls-2)"` provided in the prompt.   

We've got the first item the customer wants to order! Well, that's what we think at least... However, we don't actually know what the customer entered into the `input()` function, they might have just entered `"Baa Baa Baa Ba ba banana"` from the Minions movie. Or they might have entered a valid menu item, but it's not in the format you specified. They might have written `"Spring Rolls : 2"` or `"Spring Rolls -2`, neither of which is a valid input! Or they might have even given you a NEGATIVE quantity, point being, we have no clue what the customer might have entered, and we need to protect the customer and our program against this invalid input.

So let's write a function that will check any user's order item input and call it `orderItemChecking(item)`. Notice how we gave it a parameter? That signals we need to pass in the order item as an argument to this function from the `main()`. In this function we're going to want to safeguard against all of the possible pitfalls mentioned in the previous paragraph.

Hint: Use if statements to catch incorrect input.

Hint: Return a boolean value, either `True` if the input is valid or `False` if the input is invalid.

Hint: A helpful string method to analyze the orderItemInput would be `str.split()`... what should we split by?

Since we can check customer input, let's go back to the `main()` function and add a while loop in the else block under the call to get the customer's first item. This while loop will continue to ask the user to input a valid order item and quantity just like earlier until `orderItemChecking(item)` returns `True`. Remember to store the result of the `input()` in the same variable as you used when you first asked for input, otherwise the while loop can't continue.

When the user has finally entered a valid first order item, add that item into the list `listOrderItems` you created earlier.

Since we've gotten one item successfully, let's find out if the customer wants to order another item, or another two items, or even more. In order to do this, we'll be writing another helper function, `isOrderComplete()`, which will ask the user to input either Yes or No similar to the `orderFromRestaurantYN()` in a specified format until they give us a valid response. If they say Yes, then we return `True` to indicate that they do want to order at least one more item. Otherwise we return `False` since they don't want to order anything else.

Our helper functions are complete! now we just need to call these functions in the else block of the `main()`. The logic for this last part is essentially:

- While `isOrderComplete()` is True, continue to ask the customer to enter an item from the menu they'd like to order and the quantity.
- Within this while loop... After the user gives us an item they want to order, check with `orderItemChecking(item)` to see whether it's a valid input or not. While it's not a valid input, continue to ask the customer to try again until they successfully order another item. Make sure to let them know they gave us an incorrect input.
- After the inner while loop terminates, indicating the user entered a correct item and quantity, add this item to the list `listOrderItems` from before.

If some of that process sounded familiar, that's good! It's exactly what we did when we had the user input the first item they wanted to order.

Great job! You have successfully taken user input and checked for any errors they might have made, which is awesome!
