```markdown
---
title: "列印至主控台"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 4
---
有時候，遊戲或應用程式可能無法如預期運作，或者您希望將某些訊息寫入主控台以進行日誌記錄。在調試應用程式之外，您可以使用 `System.out.println()` 來寫入您的訊息。在 Android Studio 底部的 "logcat" 視窗中查看您的訊息：
<img src="../resources/_gen/images/println.gif" height="60%" width="60%" title="System.out.println()" alt="Android Studio 中的 Logcat 視窗顯示透過 System.out.printIn 日誌函數創建的訊息"/>

{{% notice tip %}}

## 一起動手做

1. 不要刪除引號，試著將 `"Restarting the Tac-Tic-Toe Game!"` 改成 `"Restarting the Tic-Tac-Toe Game!"` 或任何您喜歡的句子。按下執行看看是否有改變。
2. 在目前的程式碼下方新增另一行 `System.out.println`，以便印出第二句訊息在第一句以下。
3. 按下執行看看是否印出了兩句訊息。如果您看到任何紅色文字，請尋求協助。

{{% /notice %}}

{{% notice warning %}}
## 救命！出現了一堆紅色文字！

如果您看到任何紅色文字，表示程式碼出現錯誤！請尋求協助。撰寫 Android 程式碼時，請注意以下事項：

1. `out` 和 `println` 是以小寫字母開頭。
2. `System` 是以大寫字母開頭。
3. 請確保您希望列印的句子被引號包圍，並且句子位於括號內。
4. 請勿刪除任何大括號 `{` 或 `}`。

{{% /notice %}}

`System.out.println` 在修復程式碼中的錯誤時非常有用，但您的使用者（使用應用程式的人）無法看到透過此函數列印的文字。不過我們可以使用 Toast 來做到這點！Toast 是一種快速、小型的文字提示，能顯示給使用者。以下是如何建立 Toast：
```kotlin
Toast.makeText(this, "我們想顯示的文字", Toast.LENGTH_SHORT).show()
```
<img src="../resources/_gen/images/toast_example.png" title="Toast 範例" alt="Toast 範例。您可以使用 toast.makeText 函數，參數包括 context、訊息字串，以及 Toast.LENGTH_LONG 或 Toast.LENGTH_SHORT，來顯示歡迎訊息，如 Welcome to Tic-Tac-Toe"/>
```