---
title: "Маселе 1: Стек негиздери"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

## Тапшырма 1: Стекти колдонуп тескөөгө алуу

Ой, жок! Жаңы практикант жалданып, ресторандардын тизмегин бүлгүндөтүп салды! Ресторандардын маалыматтары **тескери** иретте берилген! Жакшы жаңылык, стек бул жерде абдан ыңгайлуу берилиш түзүмү болуп саналат. Жаңы стекти туура иретке келтире аласызбы?

{{% notice tip %}}
1. Эсиңизде болсун, стек акыркы кирген биринчи чыгат (LIFO; тарелкалардын үймөгү сыяктуу).
2. Алгачкы стек кандай көрүнөт?
{{% /notice%}}

```js javascript
// Учурдагы стек мисалы
Stack<String> restaurants = new Stack<>();

restaurants.push("McDonalds");
restaurants.push("Carls Jr.");
restaurants.push("Burger King");
restaurants.push("Chipotle");
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/stackReverse" target="_blank">Replitти ачуу</a>

## Тапшырма 2: Тарыхты сактоо

Стекти колдонгон дагы бир практика undo функциясы болуп саналат. Бүгүнкү күндө көптөгөн программалар акыркы өзгөртүүлөрдү артка кайтаруу үчүн undo баскычын камтыйт. Стек бул нерсеге эң сонун туура келет! Акыркы өзгөртүүнү артка кайтаруу үчүн функцияны түзө аласызбы? Мисалы:

```js javascript
// Учурдагы стек мисалы
Stack<String> myOrder = new Stack<>();

restaurants.push("Drink");
restaurants.push("Fries");
restaurants.push("Pizza");
restaurants.push("Pizza");

// Колдонуучу кошумча пицца буйрутма берген! Акыркы өзгөртүүнү кантип артка кайтарууга болот?

Stack.undo() // Акыркы push аракетин өчүрүү
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/stackUndo" target="_blank">Replitти ачуу</a>