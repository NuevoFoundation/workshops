```yaml
---
title: "Python: Basics - 答案键"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
这些是示例解决方案。许多挑战有多个有效答案，特别是要求您创建自己的例子的情况。如果您的解决方案生成了预期的输出，则您的答案是正确的！
{{% /notice %}}

## 基础

### 写入控制台 - 挑战 1

```python
print("Hello, World!")
```

输出：
```
Hello, World!
```

### 写入控制台 - 挑战 2

添加第二个打印语句，内容可以是您喜欢的任何文本：

```python
print("Hello, World!")
print("I am learning Python!")
```

### 变量 - 挑战

使用 `comp = "Computer"` 和 `five = 5`，打印以下输出：

```python
comp = "Computer"
five = 5
print(comp)
print(five)
print(comp + comp)
print(five + five)
print(comp + comp + comp)
print(five + five + five)
```

输出：
```
Computer
5
ComputerComputer
10
ComputerComputerComputer
15
```

### 从控制台读取 - 挑战

```python
print("Welcome!")
print("How can I help you today?")
value = input()
print("You asked: " + value + "?")
print("I don't know the answer to " + value + ". Goodbye!")
```

示例输出（如果用户输入 "What is Python"）：
```
Welcome!
How can I help you today?
You asked: What is Python?
I don't know the answer to What is Python. Goodbye!
```

## 数据类型

### 字符串 - 挑战 1

组合您的名字和姓氏：

```python
first = "Nuevo"
last = "Foundation"
print(first + " " + last)
```

输出：
```
Nuevo Foundation
```

### 字符串 - 挑战 2

用两个 `+` 符号打印 "Nuevo Foundation" 的三种方法：

```python
print("Nuevo" + " " + "Foundation")
print("Nuevo " + "Foun" + "dation")
print("Nue" + "vo Foundati" + "on")
```

有许多有效的解决方案！任何使用两个 `+` 符号且生成 "Nuevo Foundation" 的组合都是合法的。

### 数字 - 挑战 1

```python
print(2 - 19)
print((3 + 5) * 6)
print((13 + 5 * 8) / (6 - (3 + 7)))
```

输出：
```
-17
48
-13.25
```

第三个表达式的数学计算：
- 分子：13 + (5 * 8) = 13 + 40 = 53
- 分母：6 - (3 + 7) = 6 - 10 = -4
- 结果：53 / -4 = -13.25

### 数字 - 挑战 2

{{% notice warning %}}
教程文本显示为 `"527 time 199 is: __"` — 这似乎是原始教程中的拼写错误，这里的答案与文本完全匹配。
{{% /notice %}}

```python
print("527 time 199 is: " + str(527 * 199))
```

输出：
```
527 time 199 is: 104873
```

记住在与 `+` 组合之前使用 `str()` 将数字转换为字符串。

### 布尔值 - 挑战 1

{{% notice warning %}}
教程代码的第二个表达式中的括号位置有误：`print((3 + 5) * 6) == (65 - 17)`。这将打印 `48`，但不会显示布尔结果。以下修正版将比较放置在 `print()` 中。
{{% /notice %}}

```python
print(5 + 8 < 10)
print((3 + 5) * 6 == (65 - 17))
```

输出：
```
False
True
```

- 5 + 8 = 13，而 13 < 10 是 `False`
- (3 + 5) * 6 = 48，65 - 17 = 48，因此 48 == 48 是 `True`

### 布尔值 - 挑战 2

```python
print(54 < (10 + 32))
print((37 / 5) != 7)
print("Hello" + "World" == "Hello World")
print(False == False)
```

输出：
```
False
True
False
True
```

- 54 < 42 是 `False`
- 37 / 5 = 7.4，而 7.4 != 7 是 `True`
- "Hello" + "World" = "HelloWorld"（没有空格！），因此 "HelloWorld" == "Hello World" 是 `False`
- False == False 是 `True`

### 布尔值 - 理论问题

```python
print((11 - 2 < 10) and (7 + 3 > 10))
print((True or 3 < 1) and (False or 3 > 1))
```

输出：
```
False
True
```

- (11 - 2 < 10) = (9 < 10) = `True`，(7 + 3 > 10) = (10 > 10) = `False`。True `and` False = `False`
- (True `or` False) = `True`，(False `or` True) = `True`。True `and` True = `True`

### 布尔值 - 挑战 3

此挑战为开放式问题。以下是一些示例表达式：

```python
print(100 > 99)           # True
print(len("hello") == 5)  # True
print(10 % 3 == 0)        # False（10 除以 3 的余数是 1）
print(not True)            # False
```

任何有效的布尔表达式都可以！