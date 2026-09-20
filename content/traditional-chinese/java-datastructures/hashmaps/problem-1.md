---
title: "Problem 1: HashMap Basics"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

## 任務 1：使用 HashMap 組織資料

派對開始了！一位客人舉辦了一場超過 20 人的大型生日派對！每個人都有自己的訂單。為了讓大量的訂單井井有條，你決定建立一個包含 `String` 的 HashMap。壽星女生的名字是 Isabella，但她的名字在清單中遺失了。你能找到 Isabella 點了什麼嗎？

{{% notice tip %}}
1. 你還記得 HashMap 的方法嗎？
2. 看下面的訂單範例！
{{% /notice%}}

```js javascript
// 當前的 HashMap 範例
HashMap<String, String> order = new HashMap<String, String>();

//鍵、值
order.put("Justin", "Sprite");
order.put("George", "Coke");
order.put("Sam", "Fanta");
order.put("Eva", "Coke");
order.put("Olivia", "Coke");
...
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/HashMapGet" target="_blank">Launch Replit</a>