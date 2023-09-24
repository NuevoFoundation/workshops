---
title: "The Menu"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://youtube.com/embed/LelFnKtml8Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Storing Restaurant Information

Let's recall the restaurant array that we made earlier in the array section. 

![restaurant](../../arrays/img/array2.png)

As you can see, this array holds all the different restaurants for our app. Now, let's try to make each restaurant contain an array of all of its menu items. If done correctly, the `0`th element of our array, "Burger King", should now hold its respective menu items. It might look something like this:

![burgerkingarray](../img/2darray2.png)

As you can see, the `0`th element should be our Burger King Array. Just like our 1D arrays, we zero index the items of our array. If we wanted to place an order for a Whopper, we would simply call `Restaurant[0][0]`. This would call our Burger King Array and the first element at that array, which is a whopper. If we wanted fries in our array, then we would call `Restaurant[0][2]`. 

Question: If we wanted to order some orange chicken and orange chicken was the 10th element of our Panda Express array, how could we access that element?

If you answered `Restaurant[2][9]`, then you are correct! Panda Express is the third array `[2]`, and orange chicken is the tenth element `[9]`.