---
title: "JavaScript Basics"
description: "Basics of JavaScript"
date: 2020-07-29T18:45:38-07:00
prereq: "None"
icon: "fab fa-js"
hidden: true
language: "javascript"
topics: ["web", "programming-basics"]
difficulties: ["beginner"]
---

## 目錄

<details close>
<summary>目錄</summary>
{{% children /%}}
</details>

## JavaScript 基礎知識
歡迎來到這裡！如果你正在閱讀這篇文章，那麼希望這代表你是來學習 JavaScript 的 😁🥳。無論這是你第一次接觸編程，還是你希望快速學習一種新語言 - 你來對地方了！準備好探索編程的力量並享受其中的樂趣吧。

## 什麼是程式碼？

在學習如何編寫程式碼之前，我們需要先了解什麼是程式碼。想一想你最喜歡的網站，如果你一時想不到，我們來談談 NuevoFoundation.org。作為用戶，你只需要在瀏覽器中輸入網址，然後，不一會兒 - 噹噹！- 網站就出現了，有著所有漂亮的色彩和 Nuvi 的圖片。

看起來很簡單是不是？其實並不完全如此，這背後有著數百 - 甚至數千條代碼，為了讓一切運行起來。讓我們看一下這個互動中的某一個步驟，比如搜尋並進入 Nuevo Foundation 網站的過程。互聯網上有數十億個網站（上次我確認時是 17 億），你的瀏覽器如何能如此迅速地找到你想訪問的網站？思考一下...

有人為這些編寫了代碼，也有人為瀏覽器、Nuvi 網站，以及你現在閱讀的這個課程編寫了代碼，還有......你懂的。程式碼就是我們人類創建和構建像網站、應用程式和遊戲這類事物的方式。這是我們用來告訴電腦該做什麼的「語言」。

## 什麼是 JavaScript？它有什麼用途？

就像人類語言有很多種，程式語言也有很多種。也許你聽過一些，例如 Python 或者 Java。每種程式語言都有其優勢和用途 - 舉例來說，CSS 用於設計網站樣式，Python 非常適合數據科學等等。

JavaScript 有時被稱為「網絡的語言」。幾乎所有你能想到的網站都在某種形式上使用了 JavaScript。JavaScript 特別擅長控制網站的行為，例如控制當你點擊按鈕時會發生什麼，或者在不同頁面間傳遞數據。

好消息是，一旦你學會了一種程式語言，再學習其他的就會很快，因為基本原理基本一樣。

## 環境設定

環境？我還以為這是編程工作坊呢？

環境是程式員用來稱呼他們編寫程式的設置。我們平常用 Microsoft Word 或 Google Docs 來寫文章對吧？你可以把那個看作你的「寫作環境」。

而對於程式員來說，則有一種叫做 IDE（統合開發環境, Integrated Development Environment）的應用程式，這是用來編寫和執行代碼的工具。

在這次課程中，我們將使用 playcode.io。

打開 playcode.io 後，在我們開始編寫程式碼之前，需要做以下幾件事：
* 關閉左上角所有檔案，只保留 __script.js__。
* 刪除 __script.js__ 文件中所有內容。
* 點擊右上角的 __live__ 按鈕一次，關閉 __live__ 功能。

如果你正確完成了以上步驟，螢幕看起來應該像這樣：
![#Can't find image](img/playcode.png)

現在，我們 _終於_ 準備開始學習一些 JavaScript 了！