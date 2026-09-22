```markdown
---
title: "Методдор"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

## HashMap'тар

HashMap элементтерди ачкыч/маани жуптары катары сактай алат жана бул жуптарды текст же бүтүн сандар сыяктуу түрлөргө бөлөп бере аласыз.

Кадимкидей эле, `HashMap` түзүү үчүн HashMap классын төмөндөгүдөй импорттошуңуз керек.

```js javascript
import java.util.HashMap; // HashMap импорттолот

HashMap<String, String> addresses = new HashMap<String, String>();
```
Бул учурда, биз `Address` аттуу `HashMap` түздүк, ал ачкычтарды `String` түрүндө жана маанилерди `String` түрүндө сактайт.


## Элементтерди кошуу

HashMap ичиндеги ачкыч/маани жуптарын кошуу үчүн `put()` методун колдонуңуз.

```js javascript
// HashMap классын импорттоо
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // capitalCities аттуу HashMap объект түзүү
        HashMap<String, String> addresses = new HashMap<String, String>();

        // Ачкычтарды жана маанилерди кошуу (Өлкө, Шаар)
        addresses.put("Melissa", "333 Foster St. Conyers, GA 30012");
        addresses.put("Jun", "66 E. Wentworth Ave. Annandale, VA 22003");
        addresses.put("Isabelle", "11 John Ave. Champaign, IL 61821");
        addresses.put("Tom", "808 Blue Spring Street Colorado Springs, CO 80911");
  }
}
```
Жогорудагы код жылуулай биздин HashMap `addresses` объектине ачкыч/маани жуптарын кошот.

## Элементтерди алуу

HashMap ичиндеги элементке жетүү үчүн `get()` методун колдонуу керек.

```js javascript
// HashMap классын импорттоо
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // addresses аттуу HashMap объект түзүү
        HashMap<String, String> addresses = new HashMap<String, String>();

        // Ачкычтарды жана маанилерди кошуу (Аталыш, Дарек)
        addresses.put("Melissa", "333 Foster St. Conyers, GA 30012");
        addresses.put("Jun", "66 E. Wentworth Ave. Annandale, VA 22003");
        addresses.put("Isabelle", "11 John Ave. Champaign, IL 61821");
        addresses.put("Tom", "808 Blue Spring Street Colorado Springs, CO 80911");
                                          
        String junAddress = addresses.get("Jun");
        System.out.println("Jun'дун дареги: " + junAddress); // Jun'дун дареги чыгат
    }
}
```

`get()` методун колдонуу менен, биз `addresses.get("Jun")` деп чакырып, Jun'дун дареги кайтарылат.

Бул HashMapтин негизги методдору болду. Башка методдорго `remove()` методу (элементти алып салат) же `size()` методу (HashMap ичинде канча элемент бар экенин кайтарат) кирет. Төмөнкү баракта дагы мисалдарды берем, аракет кылып көрүңүз!
```