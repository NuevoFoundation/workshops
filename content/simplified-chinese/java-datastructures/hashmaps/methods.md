```yaml
---
title: "方法"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

## 哈希映射 (Hashmaps)

哈希映射 (HashMap) 可以以键值对的形式存储项目，并且可以将这些键值对分配给不同的类型，例如字符串或整型。

通常，要创建一个 `HashMap`，你需要像下面这样导入 HashMap 类。

```js javascript
import java.util.HashMap; // 将导入 HashMap

HashMap<String, String> addresses = new HashMap<String, String>();
```
在这个例子中，我们创建了一个名为 `addresses` 的 `HashMap`，它存储 `String` 类型的键和值。

## 添加元素

要向 HashMap 中添加键值对，请使用 `put()` 方法。

```js javascript
// 导入 HashMap 类
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // 创建一个名为 addresses 的 HashMap 对象
        HashMap<String, String> addresses = new HashMap<String, String>();

        // 添加键和值 (姓名, 地址)
        addresses.put("Melissa", "333 Foster St. Conyers, GA 30012");
        addresses.put("Jun", "66 E. Wentworth Ave. Annandale, VA 22003");
        addresses.put("Isabelle", "11 John Ave. Champaign, IL 61821");
        addresses.put("Tom", "808 Blue Spring Street Colorado Springs, CO 80911");
  }
}
```
如上代码所示，我们将键值对插入到我们的 HashMap `addresses` 中。

## 访问元素

要访问 `HashMap` 中的某个项目，请使用 `get()` 方法。

```js javascript
// 导入 HashMap 类
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // 创建一个名为 addresses 的 HashMap 对象
        HashMap<String, String> addresses = new HashMap<String, String>();

        // 添加键和值 (姓名, 地址)
        addresses.put("Melissa", "333 Foster St. Conyers, GA 30012");
        addresses.put("Jun", "66 E. Wentworth Ave. Annandale, VA 22003");
        addresses.put("Isabelle", "11 John Ave. Champaign, IL 61821");
        addresses.put("Tom", "808 Blue Spring Street Colorado Springs, CO 80911");
                                          
        String junAddress = addresses.get("Jun");
        System.out.println("Jun 的地址是: " + junAddress); // 输出 Jun 的地址
    }
}
```

通过使用 `get()` 方法，我们调用 `addresses.get("Jun")` 并返回 Jun 的地址。

以上是 HashMap 一些最基本的方法。其他方法可能包括 `remove()` 方法，用于移除一个项目，或 `size()` 方法，用于返回 HashMap 中的项目数量。在下一页，我们将提供更多示例供你体验！
```