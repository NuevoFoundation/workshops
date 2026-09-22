---
title: "活動 1: 登錄與建立網絡安全環境"
draft: false
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/kMIKZhS5E4k" title="活動 1: 登錄與建立網絡安全環境 - YouTube 視頻" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 開始

好的，網絡安全防禦者！您需要做的第一件事是設置您將用來追蹤駭客的環境。為了完成此步驟，請打開以下連結，並按照指引完成 Azure Data Explorer (ADX) 的初始設置，然後登錄到計分板會話。

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Resources.png?raw=true" alt= “Resources” width="60%" height="value">

### 設定 Azure Data Explorer (ADX)

ADX 是一些網絡安全防禦者用於數據探索和分析的主要工具。ADX 的優勢在於，全世界許多小型和大型組織的網絡分析師都在使用它。

讓我們開始讓您登錄並使用 ADX：

1.  前往 [Azure Data Explorer](https://dataexplorer.azure.com/) 並使用您的 Microsoft 帳戶登錄  
    - 如果您尚無 Microsoft 帳戶，現在可以免費創建一個。
2.  點擊螢幕左側的 **Query** 分頁。

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX1.png?raw=true" alt= “ADX1” width="20%">

在 ADX 中，數據以包含 **叢集、數據庫和表格** 的層級結構組織。Envolve Labs 的所有安全日誌都存儲於單一叢集中。您需要將這個叢集新增到 ADX 界面，然後才能開始查看日誌數據。

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX2.png?raw=true" alt= “ADX2” width="40%" height="value">

3. 使用您的指導員提供的叢集 URI 新增一個叢集  
    - 點擊 **Add cluster**  
    - 輸入連結 URI：mstictraining.eastus  

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX3.png?raw=true" alt= “ADX3” width="40%" height="value">

4. 選擇您的數據庫  
    - 展開您的叢集旁的下拉箭頭。此時您應該會看到叢集中只有一個名為 **SecurityLogs** 的數據庫。
    - 展開 **SecurityLogs** 數據庫旁的下拉箭頭。
    - 點擊 **SecurityLogs** 數據庫。一旦選擇成功，數據庫會被高亮顯示，這表示您已選定此數據庫，可以開始查詢其中的表格了。

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX4_updated.png?raw=true" alt= “ADX4_updated” width="30%" height="value">

叢集列表右側的大空白區域即為查詢工作區。在這裡，您將使用 KQL 代碼撰寫我們稱為查詢的內容，用來與日誌數據進行互動。

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX5.png?raw=true" alt= “ADX5” width="60%" height="value">

### 設定計分板

1. 前往 [計分板網站](https://aka.ms/kc7scoreboard)，創建一個用戶帳戶。請務必使用方便記住的用戶名及密碼，因為系統創建後將立即要求您登錄。  
2. 點擊綠色按鈕 **"Join a new game"**  
3. 進入後，請輸入會話密碼： **GAMEON**  

此時您應可看到計分板界面。當您切換至 **Challenges** 頁籤時，應能看到如下圖所示的列表。我們稍後的訓練將會用到計分板，暫時可以先將其最小化，但需要保持可用狀態。
<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Scoreboard.png?raw=true" alt= “ADX3” width="value" height="value">

{{< alert theme="info" >}} 完成了！現在您已準備就緒，可以開始獲取數據了。 {{< /alert >}}

[def]: Images/ADX1.png