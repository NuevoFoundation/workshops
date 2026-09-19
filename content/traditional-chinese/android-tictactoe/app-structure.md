---
title: "遊戲應用程式結構"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 3
---

## 回到基礎
現在遊戲擁有了正確的標題，讓我們更深入地了解遊戲資料夾中的這些檔案。這些檔案代表什麼？它們如何對遊戲做出貢獻？
<img src="../resources/_gen/images/app_structure_files.png" height="25%" width="25%" title="應用程式檔案的展開檢視" alt="在 Android Studio 中顯示的應用程式檔案"/>

### AndroidManifest.xml
每個 Android 專案都包含一個清單檔案。對於你的遊戲來說，這個檔案是 `AndroidManifest.xml`。清單檔案定義了遊戲的元數據，例如，它可以定義遊戲應用程式的圖示和主題。

### activity_main.xml
這個檔案位於 "layout" 資料夾下。正如資料夾名稱所示，這個資料夾中的檔案定義了應用程式的外觀。如果你查看 `activity_main.xml` 的程式碼，你會看到像 `TableLayout` 或 `TableRow` 的關鍵字。`activity_main.xml` 檔案中的關鍵字組合創建了用於遊戲選擇按鈕（玩家對戰玩家或玩家對戰電腦）、圈圍棋盤，以及重置按鈕的佈局。`TableLayout` 關鍵字表示佈局將按照表格樣式排列，包括列和行。`TableRow` 關鍵字則創建了一個新的行，每個附加的元素對應於該行中的一個位置：
<img src="../resources/_gen/images/activity_main.png" height="30%" width="30%" title="以行排列的遊戲棋盤佈局" alt="圈圍棋盤由五行構成。第一行包括兩個遊戲選擇按鈕，接著是 3 行 3 列的圈圍棋網格，最後為一個帶有重啟按鈕的第五行"/>

### MainActivity.kt

這個檔案位於 "java" 資料夾下。此檔案包含應用程式的邏輯和程式碼。

### colors.xml, strings.xml, styles.xml

這些檔案位於 "values" 資料夾下。這些檔案包含了可以被其他 XML 檔案和應用程式程式碼參考的值。

## 將這些組合起來

所有這些檔案共同作用以創建你的遊戲。`activity_main.xml` 檔案決定了顯示的內容。當你點擊按鈕時，事件會從 `activity_main.xml` 發送至 `MainActivity.kt`，以決定按鈕點擊後會發生什麼事情。對於可重複使用的值，`activity_main.xml` 和 `MainActivity.kt` 可以從 `colors.xml`、`strings.xml` 或 `styles.xml` 中取用這些值，方便地從一個地方管理這些數據。
