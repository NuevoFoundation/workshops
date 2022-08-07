---
title: "Introduction"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://youtube.com/embed/DZkUUk64mWM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## What is a 2D Array?

We've already learned plenty about arrays. We know that an array can hold many different types (integers, strings, doubles, etc.), but how about an array that holds arrays?

A 2D array has a type such as `int[][]` or `String[][]`, with two pairs of square brackets. The elements of a 2D array are arranged in rows and columns, and the new operator for 2D arrays specifies both the number of rows and the number of columns. For example,

```js javascript
int[][] A;
A = new int[3][4];
```

This creates a 2D array of `int` that has 12 elements arranged in 3 rows and 4 columns. There are also initializers for 2D arrays. For example, this statement creates the 3-by-4 array that is shown in the picture below:


```js javascript
int[][] A = {    
                {  1,  0, 12, -1 },
                {  7, -3,  2,  5 },
                { -5, -2,  2, -9 }
            };
```

An array initializer for a 2D array contains the rows of `A`, separated by commas and enclosed between braces. Each row, in turn, is a list of values separated by commas and enclosed between braces. There are also 2D array literals with a similar syntax that can be used anywhere, not just in declarations. For example,

```js javascript
A = new int[][] { 
                    {  1,  0, 12, -1 },
                    {  7, -3,  2,  5 },
                    { -5, -2,  2, -9 }
                };
```
                  
All of this extends naturally to three-dimensional, four-dimensional, and even higher-dimensional arrays.