---
title: "Step 1 - 尋找問題 (第 2 部分)"
difficulties: ["中級"]
weight: 4
draft: false
---

## 執行時錯誤

編譯器錯誤是一回事，但**執行時錯誤和程式錯誤**則是另一回事。雖然編譯器可以輕易告訴你問題所在，但執行時錯誤是程式執行時導致的。我們需要了解程式在錯誤發生時的行為：
- 有哪些變數正在使用？
- 哪一條指令被執行？
- 是否缺少我們需要的語句？

在較小的應用程式中，我們可以在程式中使用**印出語句**來快速了解程式的執行狀態。印出語句是一種快速而簡單的方法，讓我們可以在程式運行時觀察其狀態，如果幸運的話，你可能可以輕鬆找到引起錯誤的原因。

## 二分搜尋法

其中一個簡單的演算法是你可能已經學過或將要學的**二分搜尋法**，它可以讓你在已排序的列表中以對數時間搜尋項目。其主要概念是檢查排序列表的中間項，看看是否符合我們想要的元素；如果找到該元素，演算法就完成了。如果元素較大，我們便搜尋列表的上半部分；否則，就搜尋列表的下半部分。我們重複這個過程直到找到我們要搜尋的項目。

|![二分搜尋法在有序列表中搜尋數字 7 的過程](../resources/binary_search.svg "樹形結構顯示如何使用二分搜尋法在由數字 1 到 10 構成的有序列表中尋找數字 7 的過程")|
|:--:|
|使用二分搜尋法在**10**個數字的有序列表中尋找數字**7**|

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">啟動 Replit</a>

我們的程式將要求你基於他們所在的位置來搜尋一個名字。

在 Replit 程式中打開**Shell**，並編譯程式：
``` bash
make BinarySearch
```

按如下方式運行程式：
``` bash
./examples/BinarySearch
```

你應該會看到一個名字列表和他們的編號。嘗試在提示語中輸入數字 6 搜尋 Emily，並按下 `Enter`。

|![搜尋 Amy](../resources/debugging_process_searching_for_amy.svg "顯示名字和其相關編號列表的終端截圖。'編號: 5，名字: Amy' 被高亮顯示。")|
|:--:|
|搜尋 Amy。|

現在再次運行程式並嘗試搜尋 `Ramona` 的編號。程式崩潰並顯示 `Segmentation fault (core dumped)` 信息！😮

面對這種問題時，你應該問自己，此錯誤的行為是什麼？
Segmentation fault（分段錯誤）通常是由以下問題之一引起的：
- 訪問超出數組邊界的元素。
- 對 NULL 指針進行解除引用操作。
- 記憶體/堆疊溢位。

更多資訊請參考 [C 中 Segmentation Fault 的常見原因列表](https://www.tutorialspoint.com/List-of-Common-Reasons-for-Segmentation-Faults-in-C-Cplusplus#:~:text=List%20of%20Common%20Reasons%20for%20Segmentation%20Faults%20in,7%20Stack%20overflow%208%20Writing%20to%20read-only%20memory)。

讓我們來看看實現二分搜尋的程式碼：

1. `binary_search()` 函數接受三個參數：元素數組、數組長度以及我們要搜尋的數字。然後它會呼叫遞迴函數 `rbin_search()`。

2. `rbin_search()` 遞迴執行二分搜尋並在找到元素時返回其索引。如果未找到，將返回 `-1`。

所謂的**遞迴函數**，就是通過呼叫自身不斷分解問題為更小的部分，以便憑藉一些**基準案例**更簡單地處理問題。一個無法終止的遞迴函數通常有以下問題：
1. 基準案例不完整。
2. 遞迴呼叫設置方式有誤。

讓我們進行一些除錯吧！

## 使用印出語句

在程式中添加 `print` 語句是瞭解程式是否按照預期運行的一種簡單但有效的方法。請自行檢查 `rbin_search()` 函數是否正確工作，方法是在程式碼中的不同位置插入印出語句，查看變數值的變化。

{{% expand "***提示 1：什麼可以讓我們試圖解決的問題變得更簡單？***" %}} 
- 嘗試在 `rbinary_search` 函數中 `middle` 變數之後放置印出語句，查看 `lo`、`hi` 和 `middle` 的值如何變化。開始搜索一些內容吧。
|![在程式碼中放置印出語句檢查變數值 "lo"、"hi" 和 "middle"](../resources/debugging_process_print_statement.svg "在第 17 行的程式碼中添加印出語句的截圖。印出語句會顯示 'lo'、'hi' 和 'middle' 的值")|
|:--:|
|在程式碼中放置印出語句檢查值 `lo`、`hi` 和 `middle`。|

- 注意印出值的變化。
{{% /expand %}}

{{% expand "**點擊顯示答案**" %}} 
搜尋數組下半部時的遞迴呼叫實際上在搜尋上半部。

要修正錯誤，`rbin_search()` 的 `lo` 和 `hi` 參數需要設為 `lo` 和 `middle-1`。

|![修正搜尋數組下半部的遞迴呼叫](../resources/debugging_process_fixing_lowerhalf_search.svg "截