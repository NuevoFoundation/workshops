---
title: "Functions"
weight: 5
draft: false
---
<iframe title="Functions - YouTube video" width="560" height="315" src="https://www.youtube.com/embed/0207zoiJ6s8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**函數**是一種組織相似或重複程式碼的方式。我們不需要不斷地輸入相同的程式碼，而是可以將所需的程式碼放入函數中，並在我們需要使用它時隨時呼叫。

{{% notice info %}}
**注意：** 函數的目的是幫助減少程式中的冗餘程式碼。
{{% /notice %}}

## 建立函數

### 定義函數 - 名稱與參數

要在 Python 中建立函數，我們必須使用 `def` 關鍵字。這個關鍵字告訴程式碼編輯器函數的定義位置。`def` 後面是函數的名稱。函數名稱用於在程式的其他部分呼叫您的函數。
為了讓函數通用（以便我們可以在多個地方使用它），我們可能需要向它發送一些資訊。這可以通過參數實現。參數放在括號 `()` 內，並緊接在函數名稱之後。如果不需要參數，可以忽略它們。函數的宣告以冒號結尾。在函數被呼叫時執行的語句位於下一行。這裡縮排非常重要，因此請確保您的程式碼正確縮排。在函數定義行之後（註解除外）的每個縮排行都將在您呼叫函數時執行。

以下是函數的樣子：

```python
def functionName(parameter1, parameter2, ...):
    # 寫程式碼
    # 從其他地方呼叫此函數
    # 使用 functionName
```
![描述函數結構的圖示](../img/annotated-screenshot-function.png)

{{% notice warning %}}
確保函數的第一行始終以冒號 `:` 結尾。
{{% /notice %}}

### 寫函數主體

在 Python 中，縮排決定哪些程式碼是由函數控制的。在下面的範例中，為了呼叫函數 `sectionA`，您必須指定 2 個參數，`startMeasure` 和 `endMeasure`。當您呼叫 `sectionA` 時，會執行 3 行 `fitMedia` 函數。底部的 2 行 `fitMedia` 函數呼叫在 `sectionA` 函數主體之外。

```python
# Section A
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

 fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
 fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)   
```

在 `sectionA` 函數下縮排的程式碼就是每次函數 `sectionA` 被呼叫時執行的程式碼。

{{% notice warning %}}
**警告：** 由於縮排在 Python 中非常重要，請確保
函數主體的開始始終縮排 2 個空格。
{{% /notice %}}

## 回傳值
通常您不僅需要打印結果或執行某個操作，還希望函數提供執行操作後的結果。為此，您可以使用 `return` 關鍵字。

```python
def my_function(x):
    return 5 * x

print(my_function(3)) # 印出 15
print(my_function(5)) # 印出 25
```

## 使用函數 - 呼叫函數

若要呼叫函數，請在您希望執行函數的位置輸入函數名稱及其參數。例如，要呼叫函數 `sectionA`，我們可以這樣做：

```python
sectionA(1,9)
```

在此範例中，`sectionA` 將以 `startMeasure` 值為 `1` 和 `endMeasure` 值為 `9` 被呼叫。

{{% notice warning %}}
**注意：** 在 Python 中建立函數時，您必須先定義函數及其內容，然後再呼叫它。換句話說，程式碼中必須將函數的宣告放在函數呼叫之前。否則，您將收到類似以下的 NameError。請參閱圖示了解範例：
![範例顯示先呼叫函數但未先定義其名稱所產生的 NameError](../img/annotated-screenshot-function4-error.png)
{{% /notice %}}

### 挑戰 1 - 建立您自己的函數！

**挑戰：** 建立一個名為 addNumbers 的函數，該函數接收兩個名為 number1 和 number2 的參數，並在控制台上打印它們的總和。使用參數 3 和 5 呼叫函數 addNumbers。
控制台上印出了甚麼？

<iframe title="Challenge 1 - Create your own function! - Codebunga" src="https://codebunga.com/embed/cgv9gk32" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### 挑戰 2

讓我們嘗試建立一些簡單的數學函數。建立一個名為 add 的函數，該函數接收兩個參數 number1 和 number2，並回傳這兩個數字的總和。

{{% notice tip %}}

首先複製 triple 函數的結構。將 triple 的函數名稱更改為 add 並將參數 number 替換為 number1 和 number2，用逗號分隔。兩者的型態應為 <font color="#005a9c">int</font>，且不要忘記將 number1 和 number2 相加！

{{% /notice %}}

為了測試您的函數是否正常工作，請在函數定義後添加以下程式碼，呼叫函數 add