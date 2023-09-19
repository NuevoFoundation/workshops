---
title: "内置函数"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

Python 中有许多内置函数，可以提高编写代码的便捷性。让我们在这里讨论其中一些。

# sort()
此函数用于对数据结构（如数组和列表）中的值进行排序。
```python
arr = [8,5,1,4,6]
arr.sort()
print('The sorted arr is :',arr)
#输出 [1,4,5,6,8]
```

# find()
返回给定字符串中输入（模式）的第一个出现位置。
```python
str1 = "Hello World"
index = str1.find("World)"
print(index) #输出 6
```

# len()
`len()` 用于测量给定数据结构的大小。
```python
arr = [10,5,4,2,3]
print(len(arr)) #输出 5
```

# isdigit()
此函数判断传递的字符串是否仅由数字组成，是则返回 `true`；否则返回 `false`。
```python
s = "123";  
print s.isdigit() #输出 true

s = "Hello World";
print s.isdigit() #输出 false

s = "123Hello"
print s.isdigit() #输出 false 因为其中包含字母和数字
```

# reverse()
此函数用于反转数组或列表的内容。
```python
arr = [5, 6, 7, 8, 9];
arr.reverse();
print(arr) #输出 [9,8,7,6,5]
```

# replace()
此函数用第二个参数替换给定字符串中的第一个参数。

```python
initial_str = "My name is Harry. Harry is a good boy."
final_str = initial_str.replace("Harry", "Potter")
print(final_str) #输出 My name is Potter. Potter is a good boy.
```

# append()
此函数用于将数字、字符或任何数据类型的元素添加到列表或数组的末尾。
```python
arr = [1,2,3,4,5];
arr.append(6);
print(arr) #输出 [1,2,3,4,5,6]

arr = ['Harry','Ram',1,2]
arr.append("Jenifer")
print(arr) #输出 [Harry,Ram,1,2,Jenifer]
```

# remove()
删除给定对象的第一次出现。如果尝试删除不在列表中的元素，将引发异常指出元素不在列表中。
```python
arr = [1,1,2,3,3]  
arr.remove(1)  
print(arr) #输出 1,2,3,3

arr.remove(4) #引发异常，指出元素不在列表中
```

### 小挑战一

创建一个名为 `arr` 的数组

- 将其初始化为 `[1,2,3,4,5]`

- 将数字 `6` 添加到末尾并打印

- 反转 `arr` 并打印它

- 对 `arr` 进行排序并打印

- 打印 `arr` 的长度

- 从 `arr` 中删除元素 6 并打印

- 打印 `arr` 的长度

#### 正确输出
```Output
    [1,2,3,4,5,6]
    [6,5,4,3,2,1]
    [1,2,3,4,5,6]
    6
    [1,2,3,4,5]
    5
```

### 小挑战二
- 将字符串 `s` 初始化为 "Hello all.Hello people"。

- 查找字符串 `s` 中单词 `Hello` 的出现位置并打印。

- 将字符串 `s` 中的单词 `Hello` 替换为 `Hi`。

- 查找字符串 `s` 是否仅包含数字，并打印判断结果。

#### 正确输出
```Output
    0
    Hi all.Hi people.
    False
```

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
