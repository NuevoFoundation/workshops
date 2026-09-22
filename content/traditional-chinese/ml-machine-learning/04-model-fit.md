---
title: "模型擬合"
prereq: "Python"
icon: ""
draft: false
weight: 4
---

# 我們的模型擬合嗎？

記住，我們建立的線性方程中有一個隨機誤差值 (**ε**)。

<h3>
\[
    SALARY = 9449.96(XP) + 25792.20 + ε
\]
</h3>

由於 **ε** 是我們無法確定的誤差值，因此我們需要問自己：

1. 我們的模型在多大程度上代表現實？或者說，我們的模型在多大程度上與我們現有的數據「擬合」？
2. 我們如何知道**工作年限**是否真的對**薪水**有影響？

有很多方法可以回答這些問題，但在機器學習和統計學的領域中，有一個我們可以使用的指標。我們稱之為 **決定係數 R-Squared** 或 **R<sup>2</sup>**。

[R-Squared](https://www.ncl.ac.uk/webtemplate/ask-assets/external/maths-resources/statistics/regression-and-correlation/coefficient-of-determination-r-squared.html#:~:text=6%20See%20Also-,Definition,line%20approximates%20the%20actual%20data.) - 是一種測量，用於提供有關模型擬合優度的信息。在迴歸的背景下，它是一種統計量，用來衡量迴歸線有多好地逼近實際數據。一般來說，如果 **R<sup>2</sup>** 值接近 1，這意味著我們選擇的數學模型與實際數據的擬合效果非常好。

## 練習 1：計算 R-Squared

`Experience_vs_Salary-More_Data` 文件中有超過 10,000 條數據記錄，您可以看到公司員工的薪水與工作年限之間的對應關係。以下的 Replit 程式碼將採用 30 名員工的初始樣本，並計算標準誤差和 R<sup>2</sup>。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/04-e1.py" target="_blank">啟動 Replit</a>

如您所見，R<sup>2</sup> 的值為 0.973。如果有人問我們數據中是否存在某種關聯，我們可以說：「我們有 97.3% 的信心認為員工的工作年限與他們的薪水相關。」

我鼓勵您更改 `sample_size` 變數為更大或更小的值，以觀察 R<sup>2</sup> 值如何受到影響。

現在，讓我們開始進行一些預測吧！