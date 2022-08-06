---
title: "Examples"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---
![image](../../img/2dexample.png)

<!--<link rel="stylesheet" href="../../style.css">-->

<hr>

2D arrays work very similarly to regular arrays, and many of the ideas or methods that we use on arrays apply to multidimensional arrays as well. As a quick reminder, here is how to initialize a 2D array and access an element:

```js javascript
public static void main(String[] args) 
{ 
    int[][] arr = new int[10][20]; 
    arr[0][0] = 1; 
    System.out.println(arr[0][0]); 
} 
    // Outputs 1
```

The only hard part that might not make a whole lot of sense at first is iterating through a 2D array, but this is quite simple as well. Instead of a single `for` loop, we will use two `for` loops instead. Here is a quick example to give you an idea. 

```js javascript
public static void main(String[] args) 
{ 
    int[][] arr = new int[10][20]; 
    int num = 0;

    // Iterate over the array of arrays
    for (int i = 0; i < arr.length; i++) {

        // Iterate over an individual array within the 2D array
        for (int j = 0; j < arr[i].length; j++) {

            // Access individual values
            arr[i][j] = num;
            num++;
        }
    }
} 
```

As you can see, we create an empty array called `arr`. In it, we have `10` arrays, each with `20` elements respectively. To iterate through all the arrays, we use a standard `for` loop just like how we would a normal array. However, the only difference is that we now need to create a second `for` loop that iterates through the `i`th array. In this example, we simply set `arr[i][j]` to `num` and `num++`.