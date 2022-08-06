---
title: "Problem 1: HashMap Basics"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

<!--<link rel="stylesheet" href="../../style.css">-->

## Task 1: Using Hashmap to organize data

It's a party! A customer has a big birthday party for more than 20 people! Everyone has their own order. To keep the mass order organized, you decide to create a hashmap of `String`s. The birthday girl's name is Isabella, but her name is lost in the list. Can you figure out what Isabella ordered?

{{%notice tip%}}
1. Do you remember the hashmap methods?
2. Look at example order below!
{{%/notice%}}

```js javascript
// Example of current hashmap
HashMap<String, String> order = new HashMap<String, String>();

//key, value
order.put("Justin", "Sprite");
order.put("George", "Coke");
order.put("Sam", "Fanta");
order.put("Eva", "Coke");
order.put("Olivia", "Coke");
...
```

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/HashMapGet?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>