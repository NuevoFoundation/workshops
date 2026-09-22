---
title: "教程 1: 威胁情报简介"
draft: false
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/F6qFmiV6Alc" title="Tutorial 1: Intro to Threat Intelligence - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice note >}} 在本次工作坊中，你会注意到每个含有视频的页面都会同时以视频和文字的形式来重复课程内容。根据你的学习偏好，你可以选择观看视频或者阅读文字内容。{{< /notice >}}

## 什么是威胁情报？

**威胁情报分析师**：

{{<icon name="user" size="large">}} 了解对手...并与公共/私人部门的合作伙伴分享知识

{{<icon name="time" size="large">}} 追踪对手的动态...以理解不断变化的威胁环境

{{<icon name="lock" size="large">}} 实施防御措施...并与产品开发团队合作保护客户

仅有数据并不等于情报。单纯的安全日志本身并不能提供有影响力的信息，只有经过处理后才有意义。当威胁情报分析师将数据和信息处理过后，在结合他们所追踪的对手及不断变化的威胁环境的上下文背景时，他们才能开始构建一段故事和时间线，以说明可能发生了什么。理解这些威胁的意义、为何发生以及它们如何影响你的公司...这才是真正的威胁情报。

## 什么是网络攻击链（Cyber Kill Chain）？

网络攻击链最初由洛克希德·马丁开发，是一种用于识别和防止网络攻击的框架。该框架定义了攻击者为实现其目标必须完成的7个步骤 [^1]。
[^1]: https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html

<img src= "https://www.lockheedmartin.com/content/dam/lockheed-martin/rms/photo/cyber/THE-CYBER-KILL-CHAIN-body.png.pc-adaptive.1280.medium.png" alt= “CyberKillChain” width="60%" height="value">

## 理解钻石模型

钻石模型是一种分析网络攻击特征的方法。该模型强调 **对手、能力、基础设施和受害者** 之间的关系。理论基础是，每次网络攻击中都存在这样一种关系：“一个 **对手** 为了达到目标，利用一种 **能力**，通过 **基础设施** 对 **受害者** 发起行动，从而产生结果” [^2]。
[^2]: https://www.recordedfuture.com/diamond-model-intrusion-analysis 

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/diamondmodel.png?raw=true" alt= “DiamondModel” width="40%" height="value">

## 什么是 KC7？

这引出了我们为何将该游戏命名为 KC7；因为它帮助人们逐步学习上述网络攻击链的7个阶段。

**KC7 是一款设计用来教授人们如何应用网络安全知识和通过分析技能处理实际数据的游戏。** 它是一个独特且沉浸式的网络安全分析模拟，由微软威胁情报中心（MSTIC）的安全专家开发，该团队专注于追踪世界上最复杂的网络攻击者。这些数据的最佳之处在于它是通过 python 脚本生成的虚构数据，这意味着参与者可以学习实际技能而无需担心处理私人数据的风险。这次培训为参与者提供了一个防御模拟公司免受黑客攻击的机会，同时学习和应用网络威胁分析技能。

{{< alert theme="info" >}} 既然我们已经了解了一些威胁情报的主题，让我们继续进入下一部分吧。不要担心如果你现在还不能完全理解这些内容，随着培训的进行，这些主题会变得更加易于理解。{{< /alert >}}