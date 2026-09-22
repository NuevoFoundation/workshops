---
title: "教學 2：新員工入職培訓"
draft: false
weight: 10
---
{{%showanswer "免責聲明：本文檔、網站或任何其他材料中使用的所有域名、數據和名稱均為虛構 ...（續）"%}}
*免責聲明：本文檔、網站或任何其他材料中使用的所有域名、數據和名稱均為虛構，僅為演示和教育目的而創建。它們並不代表任何真實的個人、公司或組織。*

*本文檔、網站或任何其他材料，包括但不限於文本、圖片、圖形、標識和軟件，是以「現狀」提供的，並不提供任何形式的保證，無論是明示還是暗示，包括但不限於適銷性和特定用途適用性的隱含保證。*

*在任何情況下，本文檔、網站或其他材料的創作者或擁有者均不對因使用或無法使用本文檔、網站或任何其他材料而引起的，直接、間接、特殊、附帶或後果性的任何損失或損害負責，即使已被告知此類損害發生的可能性。*

*本文檔、網站或任何其他材料的創作者或擁有者保留隨時更改內容而無需通知的權利。*

*通過訪問或使用本文檔、網站或其他材料，即表示您同意受限於本免責聲明中列出的條款和條件。如果您不同意這些條款和條件，請不要訪問或使用本文檔、網站或任何其他材料。*
{{%/showanswer%}}

## 簡介：歡迎來到 EnvolveLabs

歡迎加入 EnvolveLabs 公司！🥳 今天是您作為我們公司初級安全運營中心 (SOC) 分析師的第一天。您的主要職責是保護 EnvolveLabs 及其員工免受惡意網絡行為者的侵害。

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/EnvolveLabLogo.png?raw=true" alt= "" width="50%" height="value">

EnvolveLabs 是一家總部位於美國的醫療科技創業公司，成立於 2012 年。我們的使命是開發一種新的靈活疫苗技術，該技術可覆蓋多種病毒株並提供持久免疫力。這將消除定期間隔接種加強針的需求，使疫苗接種變得更加便捷。我們的初期研究已證明這種技術非常有效——我們計劃於 2024 年第一季度開始生產。

EnvolveLabs 擁有一系列關鍵合作夥伴，他們為我們業務的成功做出了貢獻。因此，我們期待員工與這些重要合作夥伴進行定期溝通：

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Envolve1.png?raw=true" alt="" width="60%" height="value">

直到現在，我們一直專注於醫學研究和達成生產目標。然而，隨著我們的工作越來越重要和成功，我們意識到需要更多地投資於網絡安全工作。這就是為什麼我們聘請了您！

像所有優秀的公司一樣，EnvolveLabs 收集有關其員工在企業網絡上執行活動的日誌數據。這些安全審計日誌存儲在 Azure Data Explorer (ADX) 中——Azure (微軟雲) 的一項數據存儲服務。您將使用 Kusto 查詢語言 (KQL) 對各類安全日誌進行解析。通過分析這些日誌，您可以幫助我們判斷我們是否正被惡意行為者攻擊。
 - 您可以在此處找到關於 ADX 的 KQL 查詢的完整文檔：  
 https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/tutorial?pivots=azuredataexplorer


### EnvolveLabs 數據庫

EnvolveLabs_Analysis 數據庫包含八個表。表中包含許多相似數據的行。對於安全日誌來說，單一行通常表示某員工或設備在特定時間內於網絡上執行的單一操作。

我們目前有八種類型的日誌數據。正如您即將在 ADX 中看到的，每種類型的日誌對應於 EnvolveLabs_Analysis 數據庫中存在的一個表：

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Envolve3.png?raw=true" alt="" width="70%" height="value">

{{< notice note >}}
🎯**關鍵點 – 超越地平線 (OTH) 數據：** 上述表格中的一個與其他表不同——**PassiveDns**。與內部安全日誌不同，**PassiveDns** 是我們從第三方供應商處購買的數據源。並非所有的惡意網絡活動都發生在我們的公司網絡內，因此有時我們需要依靠來自其他來源的數據來完成調查。 {{< /notice >}}

您將在稍後學習如何使用每個這些數據集。首先，我們先運行一些查詢，讓您練習使用 KQL 和 ADX。