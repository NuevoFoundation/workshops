---
title: "活動 3：Kusto 查詢語言 101"
draft: false
weight: 12
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/lAeRxuUN1IM" title="Activity 3: Kusto Query Language 101 - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice tip >}} 這裡是請你開啟先前的計分板和 ADX 查看器並將其分別放在不同視窗內，完成接下來的練習。如果你無法或不想使用計分板，本節的所有問題都已列在下方。

*請記得，任何包含影片的頁面都會以影片和書面形式重複該課程。你可以根據自己的學習方式選擇任何一種形式進行學習。* {{< /notice >}}

## KQL 101  

**[確保你使用的是這次練習的 SecurityLogs 數據庫。]**

在工作環境中輸入以下查詢，以檢視 **Employees** 表中的前幾列資料。按下 “run” 或使用 “Shift + Enter” 執行查詢。本工作坊的所有 KQL 程式碼區塊都會像下方的一樣用灰色框框顯示。

```KQL
Employees
|   take 10
```

此查詢由幾個部分組成。我們花一點時間來逐一分析：

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL1.png?raw=true" alt= “KQL1” width="50%" height="value">

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL2.png?raw=true" alt= “KQL2” width="80%" height="value">

<span style="color:red">**take**</span> 運算符是一個強大工具，可用來探索表格中的列，進一步了解該表中存儲的資料類型。

{{< notice note >}} 🎯**重點–當你不知道該如何做時該如何處理**：當面對一個不熟悉的數據庫表時，你應該做的第一件事是使用 <span style="color:red">**take**</span> 運算符來抽取其列資料樣本。這樣你就能知道有哪些字段可供查詢，並推測可以從資料來源中提取出哪些類型的資訊。{{< /notice >}}

Employees 表會包含我們組織中所有人員的資訊。在這個案例中，我們可以看到該組織的名稱是 “Envolve Labs”，域名是 “envolvelabs.com”。

{{< alert theme="success" >}}
*問題 1.	🤔 請自己嘗試一下！在其他所有表格執行一次 <span style="color:red">**take**</span> 10，檢查裡面包含的資料類型。*{{< /alert >}}

你可以在同一個工作環境標籤中輕鬆撰寫多個查詢。為此，請確保在每個查詢之間插入一個空行。注意下圖中，我們在第 3 和第 6 行之間分隔了 Employees、Email 和 OutboundBrowsing 表格的查詢。

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL3.png?raw=true" alt= “KQL3” width="value" height="value">

當有多個查詢時，務必要告訴 ADX 你想執行哪一個查詢。選擇查詢時，只需點擊該查詢內的任何一行。選定查詢後，會如圖中第 4 和 5 行顯示為藍色高亮。

#### **查詢 “數量”：'count' 運算符**

我們可以使用 <span style="color:red">**count**</span> 來查看表中的行數，這樣可以知道存儲了多少資料。  

```KQL
Employees
|   count
```
{{< alert theme="success" >}}
*問題 2.	🤔 該公司有多少名員工？*{{< /alert >}}

#### **使用 'where' 運算符篩選數據**

目前為止，我們運行的查詢都是檢視表格的全部內容。而在網絡安全分析中，我們通常只想檢視符合特定條件或標準的數據。為此，我們需要對特定字段應用篩選。

我們可以在 KQL 中使用 <span style="color:red">**where**</span> 運算符來篩選特定欄位。例如，我們可以通過篩選 **Employees** 表的 name 列找到所有名字為 “Linda” 的員工。

<span style="color:red">**where**</span> 語句的結構具有一定規範。以下圖表解釋如何構造 <span style="color:red">**where**</span> 語句。

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL4.png?raw=true" alt= “KQL4” width="50%" height="value">

```KQL
Employees
|   where name has "Linda"
```
此處的 <span style="color:blue">**has**</span> 運算符十分有用，因為我們正在尋找部分匹配。如果我們想查找特定的名字（例如名字和姓氏的完全匹配），則可以使用 == 運算符：  

```KQL
Employees
|   where name == "Linda Holbert"
```
{{< alert theme="success" >}}
*問題 3.	🤔 Envolve Labs 的每位員工具有一個分配的 IP 地址。哪位員工的 IP 地址是：“192.168.0.191”？*{{< /alert >}}

在執行日常任務時，Envolve Labs 的員工會發送和接收電子郵件。每封郵件的記錄都存儲在 **Email** 表中。

{{< notice note >}} 🎯**重點 – 用戶隱私和元數據**：如你所想，有些電子郵件