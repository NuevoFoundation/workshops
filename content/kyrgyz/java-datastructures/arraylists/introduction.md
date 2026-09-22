---
title: "Киришүү"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

Биз массивдер жөнүндө үйрөнүп, көп өлчөмдүү массивдерге да сапар тарттык. Тилекке каршы, массивдерде көп чектөөлөр бар жана кээде аларды колдонуу кыйын болушу мүмкүн. Массивдин бир чектөөсү - анын такталган көлөмү. Эгерде сиздин массивде 10 элемент үчүн орун болсо, анда ошол массивге 10 эле элемент сактай аласыз. `ArrayList` динамикалык көлөмгө ээ сонун маалымат структурасы болуп эсептелет, башкача айтканда, сиз каалаган убакта элементтерди кошуп же алып сала аласыз. `ArrayList` көптөгөн иштерди аткара алат жана дал ушул мүмкүнчүлүктөр аны өтө күчтүү маалымат структурасына айлантат.

![image](../img/arraylist.png)

Биз `ArrayList` түзүүдөн мурун, `ArrayList` классын импорттошубуз керек болот. Бул төмөнкүчө болот.

```js javascript
import java.util.ArrayList; // ArrayList классын импорттоо
```

Эсиңиздерде болсун, биздин максатыбыз - кардардын заказынын тизмегин жүргүзгөн `ArrayList` түзүү. Бул төмөндөгүдөй кылып жасалат:

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
    }
}
```

Көрүнүп тургандай, массивге окшоп, биз дагы `ArrayList` кандай түрдөгү маалыматты камтый турганын белгилешибиз керек. Бул учурда, меню пункттары `String` болгондуктан, аны `String` кылып көрсөтөбүз.

Заказга элементтерди кошуу үчүн `add()` ыкмасын колдонобуз. Эгер кардар Burger King'ден буйрутма берип, Whopper, тоок наггеттери жана картошка фри алгысы келсе, сиздин ыкмаңыз төмөнкүчө көрүнөт:

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
    }
}
```

Эгерде биз `ArrayList`тин биринчи элементин алгыбыз келсе, анда `get()` ыкмасын элементтин индекси менен бирге колдонобуз, мисалы:

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        System.out.println(order.get(0));
        // Жыйынтык: Whopper
  }
}
```

`ArrayList` үчүн колдонууга мүмкүн болгон ыкмалар абдан көп, бирок бул жерде аларды кантип колдонуу керектигин жалпылап гана көрсөтүү менен чектелдик. Калган ыкмаларды кийинки беттен таба аласыз.