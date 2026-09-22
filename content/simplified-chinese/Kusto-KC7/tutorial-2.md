---
title: "教程 2：新员工入职培训"
draft: false
weight: 10
---
{{%showanswer "免责声明：本文档、网站或任何其他材料中使用的所有域名、数据和名称均为虚构...（续）"%}}
*免责声明：本文档、网站或任何其他材料中使用的所有域名、数据和名称均为虚构，仅为说明和教育目的而创建。它们不代表任何真实的个人、公司或组织。*

*本文档、网站或任何其他材料（包括但不限于文本、图像、图形、徽标和软件）按“原样”提供，不附带任何形式的明示或暗示保证，包括但不限于适销性和针对特定用途的适用性隐含保证。*

*在任何情况下，本文档、网站或任何其他材料的创作者或所有者均不对因使用或无法使用本文档、网站或任何其他材料而引起的任何损害负责，包括但不限于直接的、间接的、特殊的、偶然的或后果性损害，即使已被告知可能发生此类损害。*

*本文档、网站或任何其他材料的创作者或所有者保留随时更改内容而无需通知的权利。*

*通过访问或使用本文档、网站或任何其他材料，即表示您同意受此免责声明中规定的条款和条件约束。如果您不同意这些条款和条件，则不应访问或使用本文档、网站或任何其他材料。*
{{%/showanswer%}}

## 简介：欢迎加入 EnvolveLabs

欢迎加入 EnvolveLabs 公司！🥳 今天是你作为初级安全运营中心 (SOC) 分析师在公司工作的第一天。你的主要工作职责是保护 EnvolveLabs 及其员工免受恶意网络攻击者的威胁。

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/EnvolveLabLogo.png?raw=true" alt= “” width="50%" height="value">

EnvolveLabs 是一家位于美国的医疗技术初创公司，成立于 2012 年。我们的使命是开发一种新型的灵活疫苗技术，该技术可以覆盖许多不同的病毒株并提供持久的免疫力。这样可以消除定期接种加强针的需要，并使疫苗接种更加便捷。我们的初步研究已经证明，这项技术具有很高的有效性——我们计划在 2024 年第一季度开始生产。

EnvolveLabs 有一系列重要的合作伙伴，他们为我们企业的成功做出了贡献。因此，我们希望我们的员工能够与这些关键合作伙伴进行定期沟通：

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Envolve1.png?raw=true" alt= “” width="60%" height="value">

到目前为止，我们一直专注于医学研究和生产目标的实现。但随着我们的工作变得更加重要和成功，我们意识到需要在网络安全方面进行更多投资。这也是我们聘请你的原因！

像所有优秀的公司一样，EnvolveLabs 收集有关其员工在企业网络上执行活动的日志数据。这些安全审计日志存储在 Azure Data Explorer (ADX) 中，这是一种 Azure（微软云）中的数据存储服务。你将使用 Kusto 查询语言 (KQL) 来解析各种类型的安全日志。通过分析这些日志，你可以帮助我们确定我们是否正在被恶意攻击者盯上。
 - 你可以在此处查找有关 ADX 的 KQL 查询的完整文档：  
 https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/tutorial?pivots=azuredataexplorer


### EnvolveLabs 数据库

EnvolveLabs_Analysis 数据库包含八张表。表格包含许多行相似的数据。对于安全日志，一行通常代表在特定时间内员工或网络设备的一项活动。

我们目前有八种日志数据。如你将在 ADX 中所见，每种日志类型都对应 EnvolveLabs_Analysis 数据库中的一个表：

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Envolve3.png?raw=true" alt= “” width="70%" height="value">



{{< notice note >}}
🎯**关键点 – Over the Horizon (OTH) 数据：** 上述表格之一与其他表格有所不同 —— **PassiveDns**。它并不是内部的安全日志，而是我们从第三方供应商购买的数据源。并非所有的恶意网络活动都发生在我们的公司网络中，因此有时我们依赖其他数据源来完成调查。 {{< /notice >}}

接下来你将了解如何使用这些数据集中的每一个。不过，首先，让我们先运行一些查询，让你练习使用 KQL 和 ADX。