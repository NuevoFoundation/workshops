---
title: "Methods"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

## Hashmaps

HashMap 可以以鍵值對的形式儲存項目，並且您可以將這些鍵值對分配為不同的類型，例如字符串或整數。

如同往常，要建立一個 `HashMap`，您需要像以下方式匯入 HashMap 類別。

```js javascript
import java.util.HashMap; // 匯入 HashMap

HashMap<String, String> addresses = new HashMap<String, String>();
```
在這個例子中，我們建立了一個名為 `addresses` 的 `HashMap`，它存儲鍵與值均為 `String` 類型。


## 添加元素

要將鍵值對添加到 HashMap 中，可使用 `put()` 方法。

```js javascript
// 匯入 HashMap 類別
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // 建立一個名為 capitalCities 的 HashMap 物件
        HashMap<String, String> addresses = new HashMap<String, String>();

        // 添加鍵和值 (Country, City)
        addresses.put("Melissa", "333 Foster St. Conyers, GA 30012");
        addresses.put("Jun", "66 E. Wentworth Ave. Annandale, VA 22003");
        addresses.put("Isabelle", "11 John Ave. Champaign, IL 61821");
        addresses.put("Tom", "808 Blue Spring Street Colorado Springs, CO 80911");
  }
}
```
如您所見，上述程式碼將鍵值對插入到我們的 HashMap `addresses` 中。

## 存取元素

要存取 `HashMap` 中的某個項目，可使用 `get()` 方法。

```js javascript
// 匯入 HashMap 類別
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // 建立一個名為 addresses 的 HashMap 物件
        HashMap<String, String> addresses = new HashMap<String, String>();

        // 添加鍵和值 (Name, Address)
        addresses.put("Melissa", "333 Foster St. Conyers, GA 30012");
        addresses.put("Jun", "66 E. Wentworth Ave. Annandale, VA 22003");
        addresses.put("Isabelle", "11 John Ave. Champaign, IL 61821");
        addresses.put("Tom", "808 Blue Spring Street Colorado Springs, CO 80911");
                                          
        String junAddress = addresses.get("Jun");
        System.out.println("Jun 的地址是: " + junAddress); // 輸出 Jun 的地址
    }
}
```

透過使用 `get()` 方法，我們呼叫 `addresses.get("Jun")` 並返回 Jun 的地址。

以上是 HashMap 的部分基本方法，其他方法包含 `remove()` 方法（移除某個項目）或 `size()` 方法（返回 HashMap 中的項目個數）。在下一頁，我們將提供更多範例，讓您練習使用它！