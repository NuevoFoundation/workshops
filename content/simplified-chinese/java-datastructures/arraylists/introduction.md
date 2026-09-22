```markdown
---
title: "Introduction"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

我们已经学习了数组，也探讨过多维数组。不幸的是，数组有很多局限性，有时也会难以使用。数组的一个限制是它的固定大小。如果一个数组中只分配了10个元素的空间，你就只能存储最多10个元素。`ArrayList` 是一个非常好的数据结构，它具有动态大小，这意味着你可以随时添加或删除元素。`ArrayList` 还能做很多其他事情，这也是它如此强大的原因。

![image](../img/arraylist.png)

在创建 `ArrayList` 之前，我们需要导入 `ArrayList` 类。看起来会像这样：

```js javascript
import java.util.ArrayList; // 导入 ArrayList 类
```

记住，我们的目标是创建一个用于记录顾客订单的 `ArrayList`。我们可以这样创建：

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
    }
}
```

正如你所见，与数组类似，我们需要声明 `ArrayList` 将包含的数据类型。在这里，我们将其设置为包含 `String`，因为菜单项是 `String` 类型的。

要向订单中添加项目，我们可以使用 `add()` 方法。如果顾客在汉堡王点餐，想要一个包含汉堡包、鸡块和薯条的套餐，你的方法可能看起来像这样：

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

如果我们想获取 `ArrayList` 中的第一个元素，可以使用 `get()` 方法，并传入元素的索引号，像这样：

```js javascript
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> order = new ArrayList<String>();
        order.add("Whopper");
        order.add("Chicken Nugget");
        order.add("Fries");
        System.out.println(order.get(0));
        // 输出 Whopper
  }
}
```

`ArrayList` 还有许多可以使用的方法，但以上是 `ArrayList` 的基础功能。更多方法可以在下一页中找到。
```