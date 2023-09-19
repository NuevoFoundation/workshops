---
title: "布尔值"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

布尔值是<font color="blue">True</font>（真）或<font color="blue">False</font>（假）的语句。与字符串或数字不同，<b>布尔值</b> 存储了关于真假的陈述：一件事物是真还是假？

例如，如果我说：“你是机器人”，一个布尔值可以存储这个陈述是否为真。在这种情况下，由于你不是机器人（希望如此！），我们将存储<font color="blue">False</font>。

关于以下问题，你的布尔值答案是什么？

我是人类。 _______
我有25个手指。 _______
我喜欢饼干。 _______
我最喜欢的颜色是蓝色。 ______

最常见的布尔运算符是比较运算符，如小于或大于。在Python中，如何编写这些运算符如下所示。打印以下结果：fal


| 运算符 | 描述          | 运算符 | 描述              |
| -------- | --------------------- | -------- | ------------------------ |
| `<`      | 小于            | `>`      | 大于            |
| `<=`     | 小于等于 | `>=`     | 大于等于 |
| `==`     | 等于              | `!=`     | 不等于             |

### 小挑战一
像往常一样，我们使用 `print` 打印以下结果：

```python
print(5 + 8 < 10)
print((3 + 5) * 6) == (65 - 17)
```

第一个陈述应返回<font color="blue">False</font>。第二个应返回<font color="blue">True</font>。

![alt text](../../img/booleans.png "image of the above example showing the first is False and the second is true") 

### 小挑战二
尝试使用print打印以下表达式的答案。如果其中任何陈述的结果不合理，请寻求帮助！ 

- 54 < (10 + 32)
- (37 / 5) != 7
- "Hello" + "World" == "Hello World"
- <font color="blue">False</font> == <font color="blue">False</font>

### 小挑战三 
尝试创建自己的表达式！

### 趣事: 使用AND和OR运算符连接布尔值

你还可以使用AND和OR运算符将布尔表达式连接在一起。以下是描述我们如何连接布尔表达式时会发生什么情况的图表：

表达式  | 结果
------------|----------
<font color="blue">True</font> and <font color="blue">True</font>  | <font color="blue">True</font> 
<font color="blue">True</font>  and <font color="blue">False</font> | <font color="blue">False</font>
<font color="blue">False</font> and <font color="blue">True</font> | <font color="blue">False</font>
<font color="blue">False</font> and <font color="blue">False</font> | <font color="blue">False</font>
<font color="blue">True</font>  or <font color="blue">True</font>  | <font color="blue">True</font> 
<font color="blue">True</font>  or <font color="blue">False</font> | <font color="blue">True</font> 
<font color="blue">False</font> or <font color="blue">True</font>  | <font color="blue">True</font> 
<font color="blue">False</font>  and <font color="blue">False</font> | <font color="blue">False</font>

总结一下，AND要求两个布尔表达式都为true，而OR只需要其中一个布尔表达式为true。以下是一些更多的例子：

- (5 < 8) and (9 != 10) 生成 <font color="blue">True</font> 因为5小于8，而9不等于10。
- (8 <= 2) or ("h" + "e" == "he") 生成 <font color="blue">True</font> 因为"h" + "e"的结果是"he"，即使8不小于或等于2。
- (6 != 2 * 3) or (8 < 2 * 4) 生成 <font color="blue">False</font> 因为6不等于2 * 3，8小于2 * 4，都生成 <font color="blue">False</font>.

#### 以下这些表达式会产生什么结果?

- (11-2 < 10) and (7+3 > 10)
- (<font color="blue">True</font> or 3 < 1) and (<font color="blue">False</font> or 3>1)

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>