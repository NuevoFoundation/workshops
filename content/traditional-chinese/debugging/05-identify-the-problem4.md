---
title: "步驟 1 - 找出問題 (第 4 部分)"
difficulties: ["中等"]
weight: 6
draft: false
---

## 另一類型的錯誤：記憶體錯誤

C/C++ 的噩夢，記憶體錯誤是最令人沮喪的錯誤類型之一。如果沒有解決這些錯誤，可能會導致未定義的行為（不可重現的錯誤！）以及記憶體洩漏。因此，修復它們是首要任務。

{{% notice note %}}

記憶體洩漏發生在當您的程式使用 malloc 或 calloc（或其他記憶體分配函數）分配了記憶體，卻沒有釋放它。這些記憶體被「遺失」了 - 直到程式結束之前，幾乎無法（輕易地）取回它們。

{{% /notice %}}

幸運的是，也有人開發了幫助尋找記憶體錯誤的工具，其中之一就是 `valgrind`。Valgrind 是一個不僅能檢測記憶體錯誤，還能精確顯示錯誤發生位置的工具。

我們來使用 Valgrind 找出記憶體錯誤的發生位置。例如，我們有一個以 C 語言實現的簡單向量，這是 C++ 標準庫對動態大小陣列的版本。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">啟動 Replit</a>

首先使用以下命令構建程式：

```bash 
make Vector
``` 

接著使用以下命令執行程式：

```bash
examples/Vector
```

注意到出現了一個名為 "double free" 的錯誤！這是一種由於對同一個指標多次調用 `free` 所導致的記憶體錯誤。

現在，我們不再使用 gdb，而改為使用 Valgrind 檢查記憶體的分配與使用情況。執行以下命令：

```bash
valgrind --tool=memcheck --leak-check=full examples/Vector
```

可以明顯看到，Valgrind 檢測到一些錯誤，可能與 double free 有關（注意底部的 `ERROR SUMMARY` 顯示檢測到一些錯誤！）。

讓我們來看看這些錯誤的一些細節。

![Valgrind error 1](../resources/w4-02.png "控制台錯誤的屏幕截圖，文字為 'Invalid read of size 8 at 0x484522D...'")

如上所見，該錯誤被稱為無效讀取 (invalid read)，通常是因為您嘗試讀取了一段已被另一處代碼釋放的記憶體。Valgrind 會顯示記憶體在哪裡被分配以及釋放的信息：

![Valgrind error 2](../resources/w4-03.png "控制台錯誤的屏幕截圖，文字為 'Address 0x4b74040 is 0 bytes inside a block of size 16 free'd...'")

這段記憶體是通過 `createVectorInt` 函數中的 `malloc` 函數分配的，而該函數是在 `main` 函數中被調用的。該記憶體區塊是被 `pushBack` 函數中的 `free` 函數釋放的。

最後，在堆積 (heap) 摘要中，您可以看到有 96 個位元組「遺失」——換句話說，發生了記憶體洩漏。這是因為我們忘記在主函數的最後呼叫向量的 `deleteVectorInt`。

![Valgrind error 3](../resources/w4-04.png "控制台錯誤的屏幕截圖，文字為 'HEAP SUMMARY: in use at exit: 96 bytes in 2 blocks... 96 bytes in 2 blocks are definitely lost in loss record...'")

Valgrind 提供了豐富的資訊，幫助您尋找 C 和 C++ 程式中的記憶體錯誤。它不僅告訴您錯誤的位置，還能告訴您記憶體區塊是在哪裡分配和釋放的（或在發生記憶體洩漏的情況下沒有被釋放）。您能找出導致向量範例中所有無效讀取的錯誤嗎？

{{% expand "**點擊以顯示答案**"%}}
注意到當我們重新分配陣列時，忘記更新 `list->__arr`！這意味著我們正在寫入一個已經被釋放的指標，這也解釋了為什麼我們在 Valgrind 上看到無效的讀寫、多次釋放，以及記憶體洩漏的原因！您所需要做的就是將該指標設定為新的更新陣列，這樣應該能修復錯誤。
{{% /expand %}}
<br/>

在練習中，您需要修復出現的任何記憶體錯誤。