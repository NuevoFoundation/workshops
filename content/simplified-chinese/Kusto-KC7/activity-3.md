```markdown
---
title: "活动 3：Kusto 查询语言 101"
draft: false
weight: 12
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/lAeRxuUN1IM" title="活动 3：Kusto 查询语言 101 - YouTube 视频" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice tip >}} 在这里，建议您拉出之前的记分板和 ADX 查看器，打开为单独的窗口，用于完成剩余的练习。如果您无法或不愿意使用记分板，本部分的所有问题都列举在下方。

*请记住，任何包含视频的页面都会将课程以视频和书面形式同时展示。您可以根据自己的学习类型选择其中一种进行观看或阅读。* {{< /notice >}}

## KQL 101  

**[请务必使用 SecurityLogs 数据库来完成本练习。]**

在工作区中输入以下查询以查看 **Employees** 表中的前十行。按下“运行”按钮或使用“Shift + Enter”来执行查询。本研讨会中所有 KQL 代码块均会被灰色框标示，如下所示：

```KQL
Employees
|   take 10
```

该查询包含几个部分。我们来逐步分解一下它们：

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL1.png?raw=true" alt= “KQL1” width="50%" height="value">

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL2.png?raw=true" alt= “KQL2” width="80%" height="value">

<span style="color:red">**take**</span> 运算符是一个非常实用的工具，它可以帮助您探索表中的行，从而更好地理解存储在其中的数据类型。

{{< notice note >}} 🎯**关键点 - 当您不确定如何操作时该怎么办？**：每当您面对一个陌生的数据库表时，首先应该使用 <span style="color:red">**take**</span> 运算符对其行进行采样。这样，您就能知道有哪些字段可供查询，并推测可以从数据源中提取什么类型的信息。 {{< /notice >}}

Employees 表包含关于我们组织内所有员工的信息。在这种情况下，我们可以看到组织名称为 “Envolve Labs”，域名为 “envolvelabs.com”。

{{< alert theme="success" >}}
*问题 1.	🤔自己试试吧！对所有其他表执行 <span style="color:red">**take**</span> 10 操作，查看它们包含什么类型的数据。*{{< /alert >}}

您可以在同一个工作区标签中轻松编写多个查询。为此，请确保用空行将每个查询进行分隔。注意，下图中我们通过第 3 行和第 6 行的空行来分隔 **Employees**、**Email** 和 **OutboundBrowsing** 表的查询。

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL3.png?raw=true" alt= “KQL3” width="value" height="value">

当您有多个查询时，必须告诉 ADX 您想运行哪一个查询。选择查询的方法是点击属于该查询的任意一行。一旦选择了查询，它会被高亮显示为蓝色，如上图中的第 4 和第 5 行所示。

#### **找出“数量”：'count' 运算符**

我们可以使用 <span style="color:red">**count**</span> 查看表中的行数。这能告诉我们表中存储了多少数据。  

```KQL
Employees
|   count
```
{{< alert theme="success" >}}
*问题 2.	🤔公司里有多少员工？*{{< /alert >}}

#### **使用 'where' 运算符过滤数据**

到目前为止，我们运行的查询都是查看表的整个内容。在网络安全分析中，我们通常只想查看符合某些条件或标准的数据。为了实现这一目标，我们在特定列上应用过滤器。

我们可以使用 KQL 中的 <span style="color:red">**where**</span> 运算符对某一字段应用过滤。例如，我们可以通过在 **Employees** 表中的 name 列应用过滤器，找到所有名字为 “Linda” 的员工。

<span style="color:red">**where**</span> 语句的写法有特定的结构。可以使用下方的帮助图表来理解如何构造 <span style="color:red">**where**</span> 语句。

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL4.png?raw=true" alt= “KQL4” width="50%" height="value">

```KQL
Employees
|   where name has "Linda"
```

当我们只查找部分匹配时，<span style="color:blue">**has**</span> 运算符非常实用。如果我们想查找具有特定名字和姓氏（完全匹配）的员工，可以使用 == 运算符：

```KQL
Employees
|   where name == "Linda Holbert"
```
{{< alert theme="success" >}}
*问题 3.	🤔Envolve Labs 的每位员工都有一个分配的 IP 地址。哪个员工的 IP 地址是：“192.168.0.191”？*{{< /alert >}}

在日常工作中，Envolve Labs 的员工会发送和接收电子邮件。这些电子邮件的记录存储在 **Email** 表中。

{{< notice note >}}🎯**关键点 - 用户隐私与元数据：**如您所料，有些电子邮件可能非常敏感。为了避免将公司内的所有员工发送和接收的每封邮件的完整内容存储在可以被安全分析师轻松访问的数据库里，我们只捕获电子邮件元数据。

电子邮件元数据包括以下信息：邮件发送时间、发件人、收件人、主题行，以及邮件可能包含的任何链接。仅存储邮件元数据而非完整内容有助于保护员工隐私，同时确保安全分析师能够保护公司安全。有时即使是元数据也可能透露敏感信息，因此切勿与 SOC 外的其他员工讨论日志数据。{{< /notice >}}

我们可以通过在 **Email** 表中的发件人和收件人字段里查找员工的邮箱地址，来找到其发送或