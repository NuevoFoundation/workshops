---
title: "C: 除錯過程"
description: "程式除錯的入門介紹"
date: 2026-04-25T00:00:00-07:00
prereq: "C"
icon: ""
draft: false
alwaysopen: false
language: "c"
topics: ["programming-basics"]
difficulties: ["intermediate"]
---

## 簡介

所以，你已經學習了一種程式語言的基礎了。你可能已經掌握了 `“Hello World”`，並開始進行個人專案，或者已經完成了足夠的教學範例，可以將想法轉化為程式碼。

然而，當你的程式無法編譯時該怎麼辦？初學者通常會在網路上搜尋，看看是否有其他人也遇到過類似的問題。這樣做有點麻煩，因為每次遇到錯誤時你都得上網尋求解決辦法。

那如果程式可以編譯，但無法按預期執行時（也就是說，你找到 **一個 Bug 🪲)**）呢？

回過頭去修正你的程式碼，有時甚至比撰寫程式碼本身更具挑戰性。學會如何處理這些 Bug 與錯誤需要技巧、耐心與經驗。在本次工作坊中，我們將解開除錯程式碼的基本流程。請記住，除錯是所有程式語言的共同部分。

{{% panel theme="info" header="為什麼稱作 Bug？"%}}
最早被記錄的程式 Bug 可追溯到 1947 年，當時一隻飛蛾不小心進入了錯誤的位置。看看這篇文章：<a href="https://education.nationalgeographic.org/resource/worlds-first-computer-bug" target="_blank">世界上第一個程式 Bug。</a>

{{% /panel %}}

## 關於本次工作坊

本次工作坊假設你了解並能撰寫 **C** 程式語言的程式。工作坊中使用的範例包括資料結構與演算法，這些內容通常在計算機科學的入門課程中教授。我們將對其進行簡要解釋，目的是幫助你回憶並瞭解範例程式碼在做什麼。本次工作坊還假設你已有一個 [Replit](https://replit.com) 帳戶，並且熟悉 Replit。

## Replit 與命令列

接下來，我們試著使用 Replit 執行一些程式碼，並更熟悉命令列的使用。點擊下方的 "Launch Replit" 按鈕，然後 fork 該程式。當 Replit 程式打開後，打開 **Shell** 標籤。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Launch Replit</a>

首先，我們來編譯程式碼。在 Shell 標籤中輸入以下命令，然後按下 **ENTER**：

```bash
make HelloWorld
```

編譯好程式碼後，我們需要使用另一個命令來執行它。輸入以下命令並按下 **ENTER**：

```bash
./examples/HelloWorld
```

此時，你應該會在 Shell 中看到 `Hello, World!` 的文字！

{{% panel theme="info" header="為什麼要使用命令列？"%}}

對初學者來說，命令列可能看起來不直觀且不容易使用。然而，學會使用命令列對你的程式設計職涯非常重要。在這次工作坊中，我們會用到 `gdb` 和 `valgrind`，所以對命令列越熟悉越好！

所有範例都整合在一個 Replit 中。我們將提供所有你需要的命令來編譯與執行程式，因此即使你之前沒有使用過命令列，也不需要擔心。

{{% /panel %}}

## 工作坊內容

{{% children /%}}