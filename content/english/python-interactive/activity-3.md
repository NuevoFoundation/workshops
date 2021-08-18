---
title: "Activity 3 - Welcome Customer to your Restaurant & Display Menu"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---
## Welcome Customer to your Restaurant & Display Menu
Now that we have both a restaurant banner to display to the customer and a menu stored in your Python Program, let's display your menu to the customer and welcome them in. In this activity, we're going to write 2 helper functions to accomplish this.

{{% notice %}}
## Helper Functions
Helper functions are functions that get called in a main function that runs all of the code for this program. Each of these helper functions works toward one simple goal.
{{% /notice %}}

The first helper function we'll be writing is `printMenu()`, a function that will iterate through the `dictMenu` dictionary and result in a Menu that looks like the example shown below. Since dictMenu's values are all lists with the price of the item as the first element and the description as the second element, we want to make sure that when we print out each item's information, we access each element of that list by using indexing.
Psst: The description of the item is on a separate line from the item name and item price, what does this tell you?
Pssst: There's a space between each item in the menu, how do we do that...?

Example Menu:

-----Menu-----

Creamy Pesto Pasta ------ $15.99

Penne pasta tossed in a creamy pesto sauce, topped with black olives and sundried tomatoes

Spring Rolls ------ $8.0

Stir fried vegetables such as cabbage and carrot mixed with vermicelli and thin strips of fried tofu, wrapped in a crunchy outer layer.

The second helper function we'll be writing is `orderFromRestaurantYN()` where we will take input from the user about whether they would like to order anything from the menu or not. Remember to provide the user an example of what they should enter. Whether they enter Y for Yes and N for No or yes/no or Yes/No or y/n; this needs to be specified for the customer so they know what is a valid response.

After you've written these functions, go ahead and call them in your `main()` after the printing of the restaurant banner.
When calling these functions in `main()`, remember that as long as the user is not entering either of the valid answers to `orderFromRestaurantYN()`, we must say that they didn't enter their answer in a valid format, show them the menu again, and then prompt them to answer again.
