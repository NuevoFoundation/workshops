---
title: "Маселе 1: ArrayList Негиздери"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/unwrTbTILmA" title="Маселе 1: ArrayList Негиздери - YouTube видео" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<!--<link rel="stylesheet" href="../../style.css">-->

## Тапшырма 1: Кошуу

Такосу Траку көчөнүн кесилишинде жеткиликтүү болду! Жаңы кызматкерлерге ар кандай заказдарды көзөмөлдөө кыйын болууда. Аларга ар кандай нерселерди `ArrayList` колдонуп уюштурууга жардам бергиле!

```js javascript
/*
Дан өзүнүн сүйүктүү такосу дүкөнүнөн заказ кылып жатат:
    - 2 порция "карне асада"
    - 4 порция "карнитас"
    - 1 порция "пойо"
    - 2 порция "биррия"

    Бул нерселердин баарын ошол тартипте камтыган ArrayList кайтарыңыз
*/
```

{{% notice tip %}}
1. Тизмеге элементтерди кантип кошсо болот?
2. Дан заказына эмнелер кирет?
{{% /notice %}}

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DInsert?lite=true" title="Маселе 1: ArrayList Негиздери - Replit редактору 1"></iframe>

## Тапшырма 2: Элементтерди алуу

Айланабызда жаңы кытай ресторан ачылды. Абдан көп заказ түшүп, менеджер алардын баарын көзөмөлдөөдө кыйынчылыкка туш болууда, андыктан алар баарын `ArrayList`ке салышты. Программадагы бериле турган индекс боюнча сапты кайтарууга жардам бергиле.

```js javascript
ArrayList<String> menu = new ArrayList<>(); 

menu.add("Пицца"); 
menu.add("Хот-дог"); 
menu.add("Гамбургер"); 
menu.add("Хот-дог"); 

// Менюдагы 0-пункттагы "Пиццаны" кайтарат
item = find(menu, 0);
```

{{% notice tip %}}
1. Тизмени кантип көчмөлөр аркылуу кыдырса болот?
2. Меню мисалын карагыла!
{{% /notice%}}

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DFind?lite=true" title="Маселе 1: ArrayList Негиздери - Replit редактору 2"></iframe>

## Тапшырма 3: Элементтерди өчүрүү

Ушул эле кытай ресторанында программалык мүчүлүштүк бар! Заказдар кокустан кайталанып кетип, `ArrayList` заказдын көчүрмөлөрүнө толуп калган. Тизмеде белгилүү бир заказдын алгачкы `n` көчүрмөлөрүн өчүрүүчү программаны жазуу менен ээсине жардам бергиле.

```js javascript
ArrayList<String> menu = new ArrayList<>(); 

menu.add("Пицца"); 
menu.add("Хот-дог"); 
menu.add("Гамбургер"); 
menu.add("Пицца");
menu.add("Пицца");
menu.add("Хот-дог"); 

// Эки Пиццанын биринчи көчүрмөлөрүн өчүрүңүз
item = remove(menu,"Пицца", 2);

// Меню эми төмөнкү массив болуп калат: {"Хот-дог", "Гамбургер", "Пицца", "Хот-дог"}
```

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DRemove?lite=true" title="Маселе 1: ArrayList Негиздери - Replit редактору 3"></iframe>