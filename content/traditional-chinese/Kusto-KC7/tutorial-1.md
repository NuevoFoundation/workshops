---
title: "教程 1：威脅情報入門"
draft: false
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/F6qFmiV6Alc" title="Tutorial 1: Intro to Threat Intelligence - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice note >}} 在參加本次工作坊時，您會注意到每個有視頻的頁面都以視訊和書面形式重複課程內容。您可以根據自己的學習偏好選擇一種方式進行學習。{{< /notice >}}

## 什麼是威脅情報？

**威脅情報分析師**：

{{<icon name="user" size="large">}} 瞭解對手……並與公共/私人部門合作夥伴分享知識

{{<icon name="time" size="large">}} 隨時間追蹤對手……以瞭解不斷變化的威脅環境

{{<icon name="lock" size="large">}} 實施防禦……並與產品開發團隊合作以保護客戶

僅僅擁有數據並不等於擁有情報。僅靠安全日誌並不能提供有價值的見解，只有將其處理過後才會有意義。當威脅情報分析師根據跟蹤的對手及不斷變化的威脅環境來處理數據和資訊後，他們可以開始構建發生事件的故事和時間線。理解這些威脅的含義、為什麼會發生，以及它如何影響您的公司……這才是真正的威脅情報。

## 什麼是 Cyber Kill Chain？

Cyber Kill Chain（網路殺戮鏈），最初由 Lockheed Martin 開發，是一種用於識別和防止網路攻擊的框架。該框架定義了對手需要完成的 7 個步驟，才能實現其目標 [^1] 。
[^1]: https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html

<img src= "https://www.lockheedmartin.com/content/dam/lockheed-martin/rms/photo/cyber/THE-CYBER-KILL-CHAIN-body.png.pc-adaptive.1280.medium.png" alt= “CyberKillChain” width="60%" height="value">

## 理解鑽石模型

鑽石模型（Diamond Model）入侵分析提供了一種分析網路攻擊特徵的方法。該模型強調了 4 個組成部分之間的關係：**對手、能力、基礎設施和受害者**。該理論基於以下觀點：每次網路攻擊都存在「一個**對手**透過利用**能力**來操作**基礎設施**以攻擊**受害者**，從而達成其目標」[^2] 。
[^2]: https://www.recordedfuture.com/diamond-model-intrusion-analysis 

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/diamondmodel.png?raw=true" alt= “DiamondModel” width="40%" height="value">

## 什麼是 KC7？

這就涉及到為什麼我們將這個遊戲命名為 KC7；因為它幫助人們一步步瞭解之前描述的 Cyber Kill Chain（網路殺戮鏈）中的 7 個階段。

**KC7 是一款專為教授人們應用網路安全知識和利用真實數據開展分析技能而設計的遊戲。** 它是一款獨特且沉浸式的網絡安全分析模擬遊戲，由微軟威脅情報中心（Microsoft’s Threat Intelligence Center，MSTIC）的安全專家開發，該團隊專注於追蹤世界上最複雜的網絡行動者。最棒的一點是，該數據是由一個 Python 腳本生成的虛構數據，這意味著參與者能夠學習真實技術，而無需處理敏感的私人數據。通過這項培訓，參與者可以學習和應用網絡威脅分析技能，同時保護一個模擬公司免受駭客攻擊。

{{< alert theme="info" >}} 現在我們已經涵蓋了一些威脅情報主題，讓我們繼續進行其他內容吧。即使您現在還不完全掌握這些概念，也不用擔心，這些主題會在後續訓練中逐漸變得更容易理解。{{< /alert >}}