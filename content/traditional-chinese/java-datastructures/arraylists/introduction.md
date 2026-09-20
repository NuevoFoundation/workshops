---
title: "Introduction"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

我們已經學習了陣列，甚至深入探討了多維陣列。不幸的是，陣列有許多限制，有時使用起來也會有些困難。其中一個限制是陣列的大小是固定的。如果陣列中只有 10 個元素的空間，你最多只能存儲 10 個元素。而 `ArrayList` 是一種很棒的資料結構，具有動態大小，這意味著你可以隨時添加或移除項目。此外，`ArrayList` 還有很多強大的功能，這讓它成為一種非常強大的資料結構。

![image](../img/arraylist.png)

在創建 `ArrayList` 之前，我們需要先匯入 `ArrayList` 類別。代碼看起來會像這樣：

```js javascript
import java.util.ArrayList; // 匯入 ArrayList 類別
```

記住，我們的目標是創建一個 `ArrayList`，用來追蹤顧客的訂單。我們可以這樣做：

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
    }
}
```

如你所見，與陣列類似，我們必須宣告 `ArrayList` 將包含的資料類型。在這個例子中，我們讓它包含 `String`，因為菜單項目將是 `String`。

要將項目添加到訂單中，我們可以使用 `add()` 方法。如果顧客從 Burger King 訂購一個包含炸鯊堡、雞塊和薯條的套餐，你的方法可能看起來像這樣：

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

如果我們想要獲取 `ArrayList` 中的第一個項目，可以使用 `get()` 方法，並在其中傳遞元素的索引號碼，如下所示：

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        System.out.println(order.get(0));
        // 輸出 Whopper
  }
}
```

`ArrayList` 還有許多其他可以使用的方法，但以上是 `ArrayList` 所能執行功能的概要。這些方法可以在下一頁中找到。