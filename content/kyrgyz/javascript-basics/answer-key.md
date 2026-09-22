---
title: "JavaScript: Негиздер - Жооптор"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Бул JavaScript Негиздер семинарында мугалимдер үчүн адистештирилген колдонмо. Ал класста колдонуу үчүн бардык код мисалдарын жана алардын күтүүчү натыйжаларын бир баракта бириктирет. Студенттердин коду [playcode.io](https://playcode.io) платформасында жаза алат.
{{% /notice %}}

## Айлана-чөйрөнү даярдоо боюнча текшерүү тизмеси

Баштоодон мурун студенттер төмөнкүлөрдү аткарышы керек:
1. [playcode.io](https://playcode.io) ачыңыз
2. Бардык файлдарды жабыңыз, **script.js** файлынан башкасын
3. script.js ичиндеги нерсенин бардыгын өчүрүңүз
4. **live** режимин өчүрүңүз (бир жолу live баскычын басыңыз)

## While цикли

### Негизги эсептегич (8 жолу иштейт)

```javascript
let i = 0;
while (i < 8) {
  console.log(i);
  i++;
}
```

Натыйжа:
```
0
1
2
3
4
5
6
7
```

{{% notice tip %}}
**Жалпы студенттик суроо:** "Эмне үчүн ал 0-7ди чыгарып жатат, 1-8 эмес?"

Ийгиликтүү жооп: `i` 0 менен башталат жана `i++` `console.log` командасынан кийин иштейт. Эгер сиз 1-8 алгыңыз келсе, анда `let i = 1` баштап, `i <= 8` колдонуңуз.
{{% /notice %}}

### Негизги түшүнүк: `i++`

`i++` бул `i = i + 1` дегендин кыскартылган түрү. Бул цикл ар бир айлануусунда эсептегичти 1ге көбөйтөт. Ансыз цикл туруктуу иштеп турат (чексиз цикл).

## Өзгөрмөлөр жана Маалымат Түрлөрү

### Өзгөрмөлөрдү жарыялоонун үч жолу

```javascript
var x = 5;    // эски ыкма (функциялык аймакта колдонулат)
let y = 6;    // заманбап ыкма (блоктук аймакта колдонулат, өзгөрөт)
const z = 11; // туруктуу (орнотулгандан кийин өзгөртүлбөйт)
```

Натыйжа (console.log колдонулганда):
```javascript
console.log(x); // 5
console.log(y); // 6
console.log(z); // 11
```

### Сабактарга мисалдар (Strings)

```javascript
let animal = "Пил";
let alphabet = "abc";
let name = "Жон";
console.log(animal);
console.log(typeof animal);
```

Натыйжа:
```
Пил
string
```

### Сан мисалдары (Numbers)

```javascript
let age = 16;
let weight = 7.5;
console.log(age);
console.log(weight);
console.log(typeof age);
```

Натыйжа:
```
16
7.5
number
```

### Буль (Boolean) мисалдары

```javascript
let truth = true;
let lie = false;
console.log(truth);
console.log(lie);
console.log(typeof truth);
```

Натыйжа:
```
true
false
boolean
```

### Undefined (аныкталбаган) мисалы

```javascript
let x = undefined;
console.log(x);
console.log(typeof x);
```

Натыйжа:
```
undefined
undefined
```

### Объекттерге мисалдар

```javascript
const person = {firstName: "Жон", lastName: "Доу"};
const cars = ["Saab", "Volvo", "BMW"];
const date = new Date("2022-03-25");

console.log(person);
console.log(cars);
console.log(typeof person);
```

Натыйжа:
```
{firstName: "Жон", lastName: "Доу"}
["Saab", "Volvo", "BMW"]
object
```

### `typeof` операторы

```javascript
console.log(typeof "Айша");       // "string"
console.log(typeof 0);            // "number"
console.log(typeof (3));          // "number"
console.log(typeof (3 + 4));      // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof [1, 2]);       // "object"
```

{{% notice tip %}}
**Жалпы студенттик суроо:** "Эмне үчүн массивдин `typeof` резултаты `object` болуп жатат?"

JavaScript'те массивдер объекттин атайын түрү. Массив экендигинен ишенүү үчүн, `Array.isArray([1, 2])` колдонуңуз, бул `true` кайтарат.
{{% /notice %}}

## Массивдер

### Массив түзүү

```javascript
// Үч ыкмада тең бирдей массив түзүлөт:
let fruits1 = new Array("Алма", "Апельсин", "Манго");
let fruits2 = Array("Алма", "Апельсин", "Манго");
let fruits3 = ["Алма", "Апельсин", "Манго"];

console.log(fruits3);
console.log(fruits3.length);
```

Натыйжа:
```
["Алма", "Апельсин", "Манго"]
3
```

### Массив касиеттери

#### Индекс аркылуу кайрылуу

```javascript
let fruits = ["Алма", "Апельсин", "Манго"];
console.log(fruits[0]); // биринчи элемент
console.log(fruits[1]); // экинчи элемент
console.log(fruits[2]); // үчүнчү элемент
```

Натыйжа:
```
Алма
Апельсин
Манго
```

{{% notice tip %}}
**Жалпы студенттик суроо:** "Эмне үчүн биринчи нерсе 0 көрсөткүчү менен башталат?"

Массив индекстери көп программалоо тилдеринде 0 менен башталат. Ошондуктан `fruits[0]` биринчи нерсени көрсөтөт, `fruits[1]` экинчиси, жана андан ары.
{{% /notice %}}

#### Индекс аркылуу өзгөр