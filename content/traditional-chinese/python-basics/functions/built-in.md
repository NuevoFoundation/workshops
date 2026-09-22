```markdown
---
title: "內建函數"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

Python 提供許多內建函數，能夠提升編寫程式碼的便利性。我們在這裡探討其中的一些。

# sort()
此函數用於排序陣列或列表中的值。
```python
arr = [8,5,1,4,6]
arr.sort()
print('排序後的 arr 是 :',arr)
#印出 排序後的 arr 是 [1,4,5,6,8]
```

# find()
返回輸入的字符串中第一次出現的指定模式（pattern）的索引位置。
```python
str1 = "Hello World"
index = str1.find("World")
print(index) #印出 6
```

# len()
`len()` 用來找出給定數據結構的大小。
```python
arr = [10,5,4,2,3]
print(len(arr)) #印出 5
```

# isdigit()
此函數如果字串僅由數字組成，則返回 `True`，否則返回 `False`。
```python
s = "123";  
print(s.isdigit()) #印出 True

s = "Hello World";
print(s.isdigit()) #印出 False

s = "123Hello"
print(s.isdigit()) #印出 False，因為包含字母與數字
```

# reverse()
此函數用於反轉陣列或列表的內容。
```python
arr = [5, 6, 7, 8, 9];
arr.reverse();
print(arr) #印出 [9,8,7,6,5]
```

# replace()
此函數將字符串中的第一個參數替換為第二個參數。
```python
initial_str = "My name is Harry. Harry is a good boy."
final_str = initial_str.replace("Harry", "Potter")
print(final_str) #印出 My name is Potter. Potter is a good boy.
```

# append()
此函數用於在列表或陣列的末尾添加數字、字符或任何數據類型的元素。
```python
arr = [1,2,3,4,5];
arr.append(6);
print(arr) #印出 [1,2,3,4,5,6]

arr = ['Harry','Ram',1,2]
arr.append("Jenifer")
print(arr) #印出 [Harry,Ram,1,2,Jennifer]
```

# remove()
移除列表中第一次出現的指定元素。如果嘗試移除列表中不存在的元素，將拋出一個例外，提示元素不在列表中。
```python
arr = [1,1,2,3,3]  
arr.remove(1)  
print(arr) #印出 [1,2,3,3]

arr.remove(4) #拋出一個例外提示元素不在列表中
```

### 挑戰 1
建立一個陣列名為 `arr`

- 將其初始化為 `[1,2,3,4,5]`

- 將數字 `6` 附加到其中並列印。

- 反轉 `arr` 並列印。

- 排序 `arr` 並列印。

- 列印 `arr` 的長度。

- 移除 `arr` 中的元素 6 並列印。

- 列印 `arr` 的長度。

#### 預期輸出
```Output
    [1,2,3,4,5,6]
    [6,5,4,3,2,1]
    [1,2,3,4,5,6]
    6
    [1,2,3,4,5]
    5
```

### 挑戰 2
- 將字符串 `s` 初始化為 "Hello all.Hello people"。

- 找出字符串 `s` 中單詞 `Hello` 的出現位置並列印。

- 將字符串 `s` 中的單詞 `Hello` 替換為 `Hi`。

- 判斷字符串 `s` 是否僅由數字組成，並列印判定結果。

#### 預期輸出
```Output
    0
    Hi all.Hi people.
    False
```

<iframe title="Expected Output - Codebunga" src="https://codebunga.com/embed/pjz7g5n5" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```