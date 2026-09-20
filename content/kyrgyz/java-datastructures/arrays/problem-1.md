```markdown
---
title: "Маселе 1: Массивдин негиздери"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---
<!--<link rel="stylesheet" href="../../style.css">-->

## Тапшырма 1: Басып чыгаруу

Биздин системада бар болгон ресторандардын массивин түздүк! Массивдеги маалыматтарды басып чыгарып, кайталанган ресторандарды кошпоо үчүн сиздин жардамыңыз керек.

{{% notice tip %}}
1. Массивдин мазмунун басып чыгыш үчүн `for` циклин колдонуңуз.
2. Массивдин көлөмүн табуу үчүн `length()` ыкмасын колдонуңуз.
3. Төмөнкү мисалды көрүңүз.
{{% /notice%}}

Эгерде бизге төмөнкү массив берилсе:

```js javascript
String[] restaurants = { "Burger King", "Chipotle", "Panda Express", "McDonalds" };
```

жооп мындай басылып чыгышы керек:

```js javascript
String answer = "Burger King,Chipotle,Panda Express,McDonalds";
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Problem-1-getRestaurant" target="_blank">Replitти ачуу</a>

## Тапшырма 2: Элементтерди өзгөртүү

Көйгөй! McDonalds тамак-ашсыз калды! Адамдар McDonaldsтан тамак-аш заказ кылып, тамак-ашсыз калбашы үчүн ресторандар тизмесин өзгөртүш керек. Бактыга жараша, "Pizza Hut" жардам берүүгө даяр! McDonaldsты тизмеден алып салуу үчүн Pizza Hutды индекске кошуңуз.

{{% notice tip %}}
1. Баштаңыз 
1. Биринчи McDonaldстын индексин табыңыз
2. `"Pizza Hut"` үчүн тырмакчаларды унутпаңыз
3. Төмөнкү мисалды караңыз!
{{% /notice%}}

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "McDonalds"};
//"McDonalds" ордуна "Pizza Hut" коюңуз

```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Problem-2-insertRestaurant" target="_blank">Replitти ачуу</a>
```