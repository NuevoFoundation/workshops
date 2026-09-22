---
title: "Методдор"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

## Элементтерди өзгөртүү

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        order.set(1, "Coke");
        // Бул биринчи элементти (тоок наггетсин) кока-кола менен алмаштырат
    }
}
```
`set()` методун колдонуп, индекс номери боюнча элементти жаңы элементке алмаштырсаңыз болот.

<hr>

## Элементтерди алып салуу

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        order.remove(2);
        // Fries элементин ArrayList'тен алып салат
    }
}
```
`set()` методуна окшоп, `remove()` методу белгиленген индекс номериндеги элементти алып салат.

<hr>

## ArrayList'тин өлчөмүн алуу

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        System.out.println(order.size());
        // ArrayList'тин өлчөмүн кайтартат, бул учур үчүн: 3
    }
}
```
`size()` `ArrayList`тин өлчөмүн кайтарат.

<hr>

## Элементтерди кайталоо

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        for (int i = 0; i < order.size(); i++) {
            System.out.println(order.get(i));
        }
        // Натыйжалар:
        // Whopper
        // Chicken Nugget
        // Fries
    }
}
```

`for` цикли жана `get` методу аркылуу биз `ArrayList` ичиндеги элементтердин ар бирин кайталап, алардын индексиндеги баалуулуктарды чыгара алабыз.