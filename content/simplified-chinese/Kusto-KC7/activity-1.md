---
title: "活动 1：登录和设置网络环境"
draft: false
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/kMIKZhS5E4k" title="活动 1：登录和设置网络环境 - YouTube 视频" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 开始

好啦，网络防御者们！你需要做的第一件事就是设置一个捕获黑客的环境。为了实现这一点，请打开以下链接并按照指示首先设置 Azure Data Explorer（ADX），然后登录到计分板会话。

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Resources.png?raw=true" alt= “Resources” width="60%" height="value">

### 设置 Azure Data Explorer (ADX)

ADX 是一些网络防御者用来进行数据探索和分析的主要工具。ADX 的一个优点在于，许多大大小小的公司都在使用它。

让我们帮助你登录并开始使用 ADX 吧：

1. 前往 [Azure Data Explorer](https://dataexplorer.azure.com/) 并使用你的 Microsoft 账户登录  
   - 如果你还没有 Microsoft 账户，现在就可以免费创建一个
2. 点击屏幕左侧的 Query 选项卡。

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX1.png?raw=true" alt= “ADX1” width="20%">

在 ADX 中，数据被组织为**集群、数据库和表**的层次结构。Envolve Labs 的所有安全日志都存储在一个集群中。你需要将这个集群添加到你的 ADX 界面中，才能开始查看日志数据。

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX2.png?raw=true" alt= “ADX2” width="40%" height="value">

3. 使用你的讲师提供的集群 URI 添加一个新集群  
   - 点击添加集群  
   - 输入连接 URI：mstictraining.eastus  

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX3.png?raw=true" alt= “ADX3” width="40%" height="value">

4. 选择你的数据库  
   - 展开你的集群旁边的下拉箭头。然后你应该会看到一个数据库，名为 **SecurityLogs**。  
   - 展开 **SecurityLogs** 数据库旁边的下拉箭头。  
   - 点击 **SecurityLogs** 数据库。完成此操作后，你应该会看到数据库被高亮显示——这意味着你已经选中数据库，可以查询其中的表了。  

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX4_updated.png?raw=true" alt= “ADX4_updated” width="30%" height="value">

在你的集群列表右侧的大空白区域是查询工作区。在这里，你将使用 KQL 代码编写我们称为查询的内容，用于与我们的日志数据交互。

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX5.png?raw=true" alt= “ADX5” width="60%" height="value">

### 计分板设置

1. 打开 [计分板网站](https://aka.ms/kc7scoreboard)，创建一个用户账户。请确保使用一个容易记住的用户名和密码，因为系统会立即要求你登录。  
2. 点击绿色按钮 **"Join a new game"（加入新游戏）**  
3. 进入后，输入会话密码：**GAMEON**

现在你应该可以看到计分板了，在点击挑战标签时，你会看到如下图所示的列表。我们稍后在培训中会用到它，所以可以最小化计分板，但请保持其准备状态。  
<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Scoreboard.png?raw=true" alt= “ADX3” width="value" height="value">

{{< alert theme="info" >}} 完成啦！现在你已经设置好环境，可以动手处理数据了！{{< /alert >}}

[def]: Images/ADX1.png