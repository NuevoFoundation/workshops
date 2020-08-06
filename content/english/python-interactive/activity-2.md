---
title: "Activity 2 - How to Create and Store your Menu"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
translationKey: "python-INTERACTIVE-activity-2"
---
## How to Create and Store your Menu
Now that we have a banner for your restaurant, let's start thinking about how to organize the information about your dishes. Remember how earlier you decided what foods and beverages you wanted to sell at your restaurant? Well, now we need to figure out how to store all of that information. We need to store the name, price, and description of every item on your menu.
In order to do this, we can use what's called a Python dictionary to keep track of this information.


We're going to have a dictionary where the values are Lists!
By doing this, we can have the price of the item and the description of the item available to us. When we have a list or another container as a value to a key in a dictionary, we end up with a **nested dictionary**. Since we need to hold both price and description info, we need to store it in our lists in a specific order.

Here's the structure we'll use:
{item : [price, description]}
By making sure to follow this structure when creating the **nested dictionary**, we can ensure that accessing the price and description later will be simple.

Here's a sample nested dictionary, but remember to apply the structure from above when making your menu!
```
#structure
#{word:[meaning, partOfSpeech, pronounciation]}
smallDictionary = {'toy':['an object kids play with', 'noun', 'toi'], 'walk':['a way to move at a regular and slow pace, one foot lifted after the other, in sequence', 'verb', 'wok']}
```

Go back to the <span>Repl.it</span> link from earlier and add in code that will store your menu in a variable named `dictMenu`. Remember to make `dictMenu` a global variable - don't put it in the main(), rather place it at the top of your code so that it can be accessed by any function.
Hint: Your price is a Float, and your description is a String.

Pick your 5 favorite foods/drinks to be in your menu
ex. Creamy Pesto Pasta, Caesar Salad, Pink Lemonade, Root Beer, Iced Tea, Carrot Cake, Spring Rolls