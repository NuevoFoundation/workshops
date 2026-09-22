以下是翻譯成繁體中文的文件內容，保留所有的Hugo語法、HTML標籤，並僅翻譯純文字內容：

---

title: "Python: 基礎 - 解答"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
這些是範例解答。許多挑戰有多種正確答案，特別是那些要求您自行創建範例的題目。只要您的解答能生成預期的輸出，就算正確！
{{% /notice %}}

## 基礎

### 輸出到控制台 - 挑戰1

```python
print("Hello, World!")
```

輸出：
```
Hello, World!
```

### 輸出到控制台 - 挑戰2

新增第二行 `print` 語句，內容可以自行決定：

```python
print("Hello, World!")
print("我正在學習Python！")
```

### 變數 - 挑戰

使用 `comp = "Computer"` 和 `five = 5`，生成以下輸出：

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

輸出：
```
Computer
5
ComputerComputer
10
ComputerComputerComputer
15
```

### 從控制台讀取 - 挑戰

```python
print("歡迎！")
print("今天需要什麼幫忙嗎？")
value = input()
print("您詢問的是：" + value + "?")
print("我不知道 " + value + " 的答案。再見！")
```

範例輸出（如果使用者輸入 "什麼是Python"）：
```
歡迎！
今天需要什麼幫忙嗎？
您詢問的是：什麼是Python?
我不知道什麼是Python的答案。再見！
```

## 資料型別

### 字串 - 挑戰1

結合您的名字和姓氏：

```python
first = "Nuevo"
last = "Foundation"
print(first + " " + last)
```

輸出：
```
Nuevo Foundation
```

### 字串 - 挑戰2

用每次兩個 `+` 符號來輸出 "Nuevo Foundation" 的三種方法：

```python
print("Nuevo" + " " + "Foundation")
print("Nuevo " + "Foun" + "dation")
print("Nue" + "vo Foundati" + "on")
```

有許多合理解答！只要任何組合能用恰好兩個 `+` 符號生成 "Nuevo Foundation" 就可以。

### 數字 - 挑戰1

```python
print(2 - 19)
print((3 + 5) * 6)
print((13 + 5 * 8) / (6 - (3 + 7)))
```

輸出：
```
-17
48
-13.25
```

數學解釋對第三個表達式：
- 分子：13 + (5 * 8) = 13 + 40 = 53
- 分母：6 - (3 + 7) = 6 - 10 = -4
- 結果：53 / -4 = -13.25

### 數字 - 挑戰2

{{% notice warning %}}
工作坊提示文字為 `"527 time 199 is: __"` — 看起來原文中 `time` 是打錯的，應該為 "times"。以下解答完全符合工作坊提示文字。
{{% /notice %}}

```python
print("527 time 199 is: " + str(527 * 199))
```

輸出：
```
527 time 199 is: 104873
```

記住要使用 `str()` 方法將數字轉換為字串，才能與 `+` 符號結合。

### 布林值 - 挑戰1

{{% notice warning %}}
關於第二個表達式，工作坊範例碼的括號位置錯誤：`print((3 + 5) * 6) == (65 - 17)`。這樣的寫法將輸出 `48` 而不是布林結果。以下是正確版本，將比較放進 `print()` 中。
{{% /notice %}}

```python
print(5 + 8 < 10)
print((3 + 5) * 6 == (65 - 17))
```

輸出：
```
False
True
```

- 5 + 8 = 13，13 < 10 為 `False`
- (3 + 5) * 6 = 48，而 65 - 17 = 48，所以 48 == 48 是 `True`

### 布林值 - 挑戰2

```python
print(54 < (10 + 32))
print((37 / 5) != 7)
print("Hello" + "World" == "Hello World")
print(False == False)
```

輸出：
```
False
True
False
True
```

- 54 < 42 為 `False`
- 37 / 5 = 7.4，而 7.4 != 7 為 `True`
- "Hello" + "World" = "HelloWorld"（沒有空格！），所以 "HelloWorld" == "Hello World" 為 `False`
- False == False 是 `True`

### 布林值 - 理論問題

```python
print((11 - 2 < 10) and (7 + 3 > 10))
print((True or 3 < 1) and (False or 3 > 1))
```

輸出：
```
False
True
```

- (11 - 2 < 10) = (9 < 10) = `True`，(7 + 3 > 10) = (10 > 10) = `False`。True `and` False = `False`
- (True `or` False) = `True`，(False `or` True) = `True`。True `and` True = `True`

### 布林值 - 挑戰3

此挑戰是開放式的。以下是一些例子：

```python
print(100 > 99)           # True
print(len("hello") == 5)  # True
print(10 % 3 == 0)        # False（10 除以3的餘數為1）
print(not True)           # False
```

任何有效的布林值表達式都