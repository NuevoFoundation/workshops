```markdown
---
title: "變數"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 4
--- 

在前一個練習中，我們學習了如何使用 `print("")` 印出不同的內容。雖然印出一個數字或一段句子已經不錯，但我們還沒賦予它們實際的意義。變數只是我們給字符串、數字和布林值等賦予的名稱。以下是如何在 Python 中創建一個名為 s 的變數。我們說 s 是一個字符串，其值為 `"Hello, World!"`。

```python
s = "Hello, World!"
x = 88
happy = True
```
按下運行。

![在Codebunga中變數範例的截圖](../../img/variables.png "Codebunga中變數範例的圖像")

請注意，變數並不會直接被打印到控制台。相反，變數只是將字符串、數字或布林值存儲到電腦的記憶體中。我們可以在其他語句中使用這些變數。例如，以下代碼將在控制台打印 `"Hello Nuevo Foundation"`：

```python
str1 = "Hello"
str2 = "Nuevo Foundation"
print(str1 + " " + str2)
```

您也可以使用以下方式來打印字符串，同時在單字之間添加空格。

```python
str1 = "Hello"
str2 = "Nuevo Foundation"
print(str1, str2)
```
## 資料類型是什麼！

在學習如何創建變數之前，我們需要了解 **資料類型** 的概念。類型描述了存在盒子裡的內容是什麼。

Python 是一種動態類型語言，這意味著，與像 Java 這樣的語言不同，您不需要在賦值之前指定變數的類型。而且，如果盒子裡原本是一個整數，然後將整數移出放入字符串，Python 會允許您進行這樣的操作。但是，您必須根據類型來使用變數。

{{% notice note %}}
以下是重要的資料類型：

**類型** | **描述** | **範例**
--------|-----------|----------
`integer` | 整數 | `20`, `30`, `35`
`string` | 一串字符 | `"Hello"`, `"Bonjour"`, `"Hola"`
`boolean` | 值為 `true` 或 `false` | `true`, `false`
`float` | 小數數字 | `2.0`, `3.14`, `9.33`

{{% /notice %}}

讓我們回顧一下第一個範例中的三個變數並確定它們的資料類型。`s` 是字符串，`x` 是整數，`happy` 是布林值。

### 挑戰

- 創建兩個新變數：一個名為 `comp` 的變數，存儲字符串 `"Computer"`。
- 一個名為 `five` 的變數，存儲數字 `5`。

接下來，使用這些變數以及您在之前活動中學到的知識，在控制台上 `打印` 出以下內容。您 _必須_ 使用變數！

    Computer
    5
    ComputerComputer
    10
    ComputerComputerComputer
    15

{{% notice tip %}}

提示：如果卡住了，考慮使用 `+` 運算符。記住，您可以在同一行中多次使用變數 **comp** 和 **five**！

{{% /notice %}}

<iframe title="挑戰 - Codebunga" src="https://codebunga.com/embed/eceyb8yx" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```