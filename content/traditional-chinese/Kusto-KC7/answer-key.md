---
title: "KC7: 網絡防禦者遊戲 - 答案鍵"
date: 2026-04-29T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
這是 KC7 網絡防禦者研習班的教師參考資料。內容涵蓋活動 2-4 的 KQL 查詢解法與方法學。準確的數值結果取決於即時的 SecurityLogs 資料庫，因此會隨場次而有所不同。

活動 3.5 (KQL 101 解答) 和活動 4.5 (抓住駭客解答) 也提供影片講解。

Bonus 1 和 Bonus 3 的答案則需在 KC7 擂台查詢。Bonus 2 是沒有固定答案的開放性分析練習。
{{% /notice %}}

## 活動 2：威脅情報遊戲 (誰是兇手)

三個基於場景的歸因問題。學生需辨識對手類型。

| 問題 | 場景 | 答案 | 原因 |
|----------|----------|--------|-----------|
| 1 | 與政府相關的網絡行動 | **C. 國家支持** | 目標明確，資金充足，政治動機 |
| 2 | 以財務為動機的攻擊 | **B. 網絡犯罪分子** | 驅動力量為金錢，目標不分青紅皂白 |
| 3 | 國家主導的網絡行動 | **C. 國家支持** | 政府支持，選擇性目標，長期行動 |

{{% notice tip %}}
觀看活動 2 的教學影片，可了解每個場景的詳細實例，包括 POLONIUM 案例研究。
{{% /notice %}}

## 活動 3：KQL 101

這些問題教導學生如何使用 **SecurityLogs** 資料庫進行核心 KQL 運算符操作。以下查詢示範了正確的方法；實際結果取決於即時資料。

### 問題 1：使用 `take` 探索所有表格

```KQL
Employees
| take 10

Email
| take 10

OutboundBrowsing
| take 10

PassiveDns
| take 10

AuthenticationEvents
| take 10

FileCreationEvents
| take 10

ProcessEvents
| take 10

SecurityAlerts
| take 10
```

**目的：** 學生探索每個表格的結構，以了解其中的欄位和數據類型。

### 問題 2：公司有多少名員工？

```KQL
Employees
| count
```

**預期概念：** `count` 運算符返回表中的總行數。每行代表一名員工。

### 問題 3：哪位員工擁有 IP 地址 192.168.0.191？

```KQL
Employees
| where ip_addr == "192.168.0.191"
```

**概念：** `where` 運算符篩選行數。`==` 運算符檢查精確匹配。

### 問題 4：Betty Parrish 收到了多少封郵件？

```KQL
Email
| where recipient == "betty_parrish@envolvelabs.com"
| count
```

**概念：** 篩選 Email 表的收件者列，然後計算結果。郵件地址的格式為 `firstname_lastname@envolvelabs.com`。

### 問題 5：有多少用戶收到了主題包含 "vaccine" 的郵件？

```KQL
Email
| where subject has "vaccine"
| distinct recipient
| count
```

**概念：** 鏈接多個運算符：`where` 用於篩選，`distinct` 用於去重，`count` 用於統計總數。`has` 運算符執行整詞匹配 (基於字詞邊界)，因此會找到主題中包含完整單詞 "vaccine" 的郵件。

### 問題 6：Keith Mitchell 訪問了多少個唯一網站？

這需要在兩個表之間進行 **數據透視 (pivoting)**：

```KQL
// 第一步：找出 Keith Mitchell 的 IP 地址
Employees
| where name == "Keith Mitchell"
```

```KQL
// 第二步：使用他的 IP 查詢 OutboundBrowsing
OutboundBrowsing
| where src_ip == "[Keith's IP from Step 1]"
| distinct url
| count
```

或者，使用 `let` 語句將兩步合併：

```KQL
let keith_ip = Employees
| where name == "Keith Mitchell"
| distinct ip_addr;
OutboundBrowsing
| where src_ip in (keith_ip)
| distinct url
| count
```

**概念：** 數據透視：使用一個表 (Employees) 的數據查詢另一個表 (OutboundBrowsing)。這是一項核心的網絡分析技能。

### 問題 7：PassiveDns 中有多少個域名包含 "vaccine"？

```KQL
PassiveDns
| where domain contains "vaccine"
| distinct domain
| count
```

**概念：** 此處需要 `contains` 運算符而非 `has`，因為 "vaccine" 可能是更長域名的一部分。

### 問題 8："biotechenvolv.science" 解析為哪些 IP？

```KQL
PassiveDns
| where domain == "biotechenvolv.science"
```

**概念：** 查看結果中的 IP 地址欄位，發現該域名關聯的所有 IP。

### 問題 9：名稱包含 "Karen" 的員工瀏覽了多少個唯一的 URL？

```KQL
let karen_ips = Employees
| where name has "Karen"
| distinct ip_addr;
OutboundBrowsing
| where src_ip in (karen_ips)
| distinct url
| count
```

**概念：** 這結合了 `let` 語句與數據透視操作。`let` 用於存儲第一個查詢的結果 (Karen 的 IP 地址)，然後可在第二個查詢中重用。

{{% notice tip %}}
**教師提示：** `let` 語句是最強大的 KQL 模式之一。鼓勵學生賦予變數具描述性的名稱 (如 `karen_ips` 而非 `x`)，以提高查詢的可讀性。
