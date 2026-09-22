```markdown
---
title: "Операциялар"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/NQXV586afr8" title="Operations - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Массив түзүү

Массивдер бир нече маанини бир өзгөрмөгө сактоо үчүн колдонулат, ар бир маанини өз-өзүнчө өзгөрмөгө жарыялаганга караганда. Массив жарыялоо үчүн, өзгөрмөнүн типин квадраттык кашаалар менен аныктаңыз.

```js javascript
String[] restaurants;
```
Азыр биз саптардын массивин кармаган өзгөрмөнү жарыяладык. Ага маанилерди киргизүү үчүн, массив литералын колдонсок болот - маанилерди үтүр менен бөлүп, ийилген кашааларга жайгаштырыңыз:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
```

Сандык массив түзүү үчүн төмөнкүлөрдү жазсаңыз болот:

```js javascript
int[] myNum = {10, 20, 30, 40};
```
<hr>

## Массив элементтерине жетүү

Массивдин элементине жетүү үчүн индекс номерине кайрылыш керек. Бул билдирүү ресторандардын массивинен биринчи элементтин маани-баркына жетет:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants[0]);

// Системадан "Burger King" чыгат
```

<hr>

## Массив элементин өзгөртүү

Белгилүү бир элементтин маанисин өзгөртүү үчүн индекс номерине кайрылыңыз:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants[0]);
// Системадан "Burger King" чыгат

restaurants[0] = "McDonalds";
System.out.println(restaurants[0]);
// Системадан азыр "McDonalds" чыгат
```

<hr>

## Массивдин узундугун табуу

Массив канча элементке ээ экенин билүү үчүн `length` касиетин колдонуңуз:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants.length);
// Системадан 4 чыгат
```
<hr>

## Массив боюнча цикл жүргүзүү

Массив элементтерин `for` цикли аркылуу өткөрүүгө болот, жана цикл канча жолу иштеши керектигин көрсөтүү үчүн `length` касиетин колдонуңуз. Төмөнкү мисал ресторандардын массивиндеги бардык элементтерди чыгарат:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
for (int i = 0; i < restaurants.length; i++) {
    System.out.println(restaurants[i]);
}

// Чыгат:
// Burger King
// Chipotle
// Panda Express
// Subway
```
```