---
title: "幫助，我卡住了！"
description: "設置耳機"
date: 2019-07-23T11:45:38-07:00
weight: 12
prereq: "無"
difficulties: ["初學者"]
draft: false
---
##### 別擔心！看看以下內容是否對您有所幫助，如果這些無法解決問題，請隨時聯繫我們中的一位，我們將協助您。

1.  在使用 Python 時，縮排非常重要。請小心代碼中的空格和制表符，因為縮排錯誤有時候可能很難發現。 

    ![IndentationError: expected an indented block](../img/screenshot-indentationerror.png)

    不過，從好的方面來看，嚴格的格式化讓 Python 代碼非常乾淨和有條理。您的變數和函數是否按照指示正確縮排了呢？
    
2.  SyntaxError: invalid syntax  
    確認您的關鍵字是否拼寫正確，並且遵循了定義的結構。

3.  IndentationError: unexpected indent  
    如果您看到此錯誤，請檢查您的縮排。

4.  NameError: global name \'\-\--\' is not defined  
    在函數內定義的變數只能在該函數內使用。如果您嘗試在另一個函數中使用一個函數內的變數，您將會收到這個錯誤。  
    
    如果要使信息可供其他函數使用，可以通過 `return` 語句將信息從一個函數中傳遞出去，並將其賦值給某個變數。然後，您可以用參數將它傳遞到另一個函數中。詳細說明請參考我簽名中的函數教程鏈接。

5.  無法識別的錯誤：拼寫錯誤？  
    通常當您在關鍵字中拼寫錯誤時會收到這個錯誤。檢查您的所有關鍵字。

6.  TypeError: Can't convert 'int' object to str implicitly  
    確保您沒有嘗試在字符串操作中使用整數（您無法將字符串與整數進行拼接。您必須先將整數轉換為字符串）。