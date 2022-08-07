---
title: "Methods"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 
## Priority Queues

A `PriorityQueue` is used when the objects are supposed to be processed based on the priority. In this case, we want to sort the queue by the time the customer has been waiting. It is known that a Queue follows the First-In-First-Out algorithm, but sometimes the elements of the queue are needed to be processed according to the priority; that’s when the `PriorityQueue` comes into play. The PriorityQueue is based on the priority heap. The elements of the priority queue are ordered according to the natural ordering, or by a Comparator provided at queue construction time, depending on which constructor is used.  

Before we create a queue, we will have to `import` the `PriorityQueue` class. To make life easier, we can use a `*` instead to import all classes in the library. It will look something like this.

```js javascript
// Will import PriorityQueue, among other classes
import java.util.*; 
```
There are several methods to use on a Priority Queue and if you are interested, feel free to google the methods yourself. However, we are only going to talking about the most important methods now: `add()`, `peek()`, and `poll()`.

<hr>

## Creating a Priority Queue
    
```js javascript
Queue<Integer> orders = new PriorityQueue<>();
```

There are several ways to order the priority queue and it's up to you to decide how you want to implement it.

<hr>

## Adding Elements

You can add to a queue by using the `add()` method. The PriorityQueue` will automatically sort the elements for you. It's default is by an object's natural order, but you can change it base on what you want.

```js javascript
add(1);
add(2);
add(3);

// Creates a queue with elements [1, 2, 3]
```

<hr>

## Accessing Elements

`peek()` will return the top element without removing it.

```js javascript
queue.peek();

// Returns 1
// Queue contains [1, 2, 3]
```

<hr>

## Removing Elements

`poll()` will return the top element and removes it from the queue.

```js javascript
queue.poll();

// Returns 1
// Queue contains [2, 3]
```

<hr>

With these three methods in mind, let's go ahead and take a look at an example.

```js javascript
import java.util.*;
 
class PriorityQueueDemo {
   
      // Main Method
    public static void main(String args[])
    {
        // Creating empty priority queue
        PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>();
 
        // Adding items to the pQueue using add()
        pQueue.add(60);
        pQueue.add(30);
        pQueue.add(10);
 
        // Printing the top element of PriorityQueue
        System.out.println(pQueue.peek());
 
        // Printing the top element and removing it
        // from the PriorityQueue container
        System.out.println(pQueue.poll());
 
        // Printing the top element again
        System.out.println(pQueue.peek());
    }
}
```

So we have three customer's with varying wait times of `10`, `30`, and `60`. What do you think the compiler will output?

Let's go ahead and try to digest the code a little bit. For the first line, we call `pQueue.peek()`. What does `peek()` do? Peek simply returns the element at the top. What is at the top? Well since it is already sorted, it should print the smallest element which is `10`.

How about `pQueue.poll()`? Well it should do the same exact thing as peek earlier, but now it removes the top element from the queue which is `10`.

What if we try to call `peek()` again? Well now that `10` does not exist anymore, it will now be `30`.

So the final output might look like this:

```js javascript
10
10
30
```

Hold on? Didn't we want to have the people waiting the longest in line be at the top of the queue first? It seems like the queue outputs the smallest elements first, but what we actually want is the biggest element instead. To accomplish this, we would just have to instantiate the queue a little differently. `Collections.reverseOrder()` will essentially just reverse the order of our queue. Like this!

```js javascript
PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>(Collections.reverseOrder());
```
Now our implementation should be solid.

```js javascript
import java.util.*;
 
class PriorityQueueDemo {
   
      // Main Method
    public static void main(String args[])
    {
        // Creating empty priority queue
        PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>(Collections.reverseOrder());
 
        // Adding items to the pQueue using add()
        pQueue.add(60);
        pQueue.add(30);
        pQueue.add(10);
 
        // Printing the top element of PriorityQueue
        System.out.println(pQueue.peek());
 
        // Printing the top element and removing it
        // from the PriorityQueue container
        System.out.println(pQueue.poll());
 
        // Printing the top element again
        System.out.println(pQueue.peek());
    }
}
```

Check-In Question: What will this `pQueue` output now?

Answer:
```js javascript
60
60
30
```