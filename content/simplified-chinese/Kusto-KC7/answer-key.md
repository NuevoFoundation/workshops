---
title: "KC7: Cyber Defender Game - 答案钥匙"
date: 2026-04-29T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
这是针对 KC7 Cyber Defender 研讨会的一份教师参考資料。包含用于活动 2-4 的 KQL 查询解决方案和方法。具体的数值结果取决于实时的 SecurityLogs 数据库，可能会因会话不同而有所差异。

活动 3.5（KQL 101 答案）和活动 4.5（抓住黑客答案）的详细视频演示也可供参考。

Bonus 1 和 Bonus 3 的答案可通过 KC7 记分板检查。Bonus 2 为没有固定答案的开放性分析练习。
{{% /notice %}}

## 活动 2: 威胁情报游戏（谁干的？）

三个基于场景的归因问题。学生需识别敌人类型。

| 问题 | 场景 | 答案 | 理由 |
|------|------|------|------|
| 1 | 政府支持的网络行动 | **C. 国家支持** | 定向攻击、资金充足、政治动机 |
| 2 | 出于经济动机的攻击 | **B. 网络犯罪分子** | 以金钱为驱动力、目标广泛 |
| 3 | 国家主导的网络行动 | **C. 国家支持** | 政府发起、选择性目标、长期活动 |

{{% notice tip %}}
观看活动 2 的视频以了解每个场景背后的详细真实案例，包括 POLONIUM 的案例研究。
{{% /notice %}}

## 活动 3: KQL 101

通过 **SecurityLogs** 数据库学习核心 KQL 运算符。这些查询展示了正确的操作方法；具体结果值取决于实时数据。

### 问题 1: 使用 `take` 探索所有表格

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

**目的：** 学生探索每个表的模式以了解可用的列和数据类型。

### 问题 2: 公司里有多少员工？

```KQL
Employees
| count
```

**预期概念：** `count` 运算符返回表中的总行数。每行代表一位员工。

### 问题 3: 哪位员工的 IP 地址是 192.168.0.191？

```KQL
Employees
| where ip_addr == "192.168.0.191"
```

**概念：** `where` 运算符过滤行。`==` 运算符检查是否完全匹配。

### 问题 4: Betty Parrish 收到了多少封邮件？

```KQL
Email
| where recipient == "betty_parrish@envolvelabs.com"
| count
```

**概念：** 在 Email 表中通过收件人列进行筛选，然后统计结果。邮件格式为 `firstname_lastname@envolvelabs.com`。

### 问题 5: 有多少用户收到了主题中包含“vaccine”的邮件？

```KQL
Email
| where subject has "vaccine"
| distinct recipient
| count
```

**概念：** 链接多个运算符：`where` 过滤、`distinct` 去重、`count` 计算总数。`has` 运算符执行完整术语匹配（基于词边界），因此它在主题行中找到“vaccine”作为一个完整的词。

### 问题 6: Keith Mitchell 浏览了多少独特网站？

需要在两个表之间进行 **轴旋转**：

```KQL
// 步骤 1: 查找 Keith Mitchell 的 IP 地址
Employees
| where name == "Keith Mitchell"
```

```KQL
// 步骤 2: 使用他的 IP 查询 OutboundBrowsing
OutboundBrowsing
| where src_ip == "[第 1 步中找到的 Keith 的 IP]"
| distinct url
| count
```

或者，使用 `let` 语句合并两步：

```KQL
let keith_ip = Employees
| where name == "Keith Mitchell"
| distinct ip_addr;
OutboundBrowsing
| where src_ip in (keith_ip)
| distinct url
| count
```

**概念：** 轴旋转：使用一张表（Employees）的数据查询另一张表（OutboundBrowsing）。这是核心的网络分析技能。

### 问题 7: PassiveDns 中有多少域名包含“vaccine”？

```KQL
PassiveDns
| where domain contains "vaccine"
| distinct domain
| count
```

**概念：** 此处需要使用 `contains` 运算符（而非 `has`），因为“vaccine”可能会作为较长域名的一部分出现。

### 问题 8: "biotechenvolv.science" 解析到了哪些 IP 地址？

```KQL
PassiveDns
| where domain == "biotechenvolv.science"
```

**概念：** 查看结果中的 IP 地址列以查看与此域名关联的所有 IP。

### 问题 9: 被称为 "Karen" 的员工浏览了多少独特 URL？

```KQL
let karen_ips = Employees
| where name has "Karen"
| distinct ip_addr;
OutboundBrowsing
| where src_ip in (karen_ips)
| distinct url
| count
```

**概念：** 这结合了 `let` 语句与轴旋转。`let` 将第一个查询的结果（Karen 的 IP）存储起来，以便在第二个查询中重复使用。

{{% notice tip %}}
**教师提示：** `let` 语句是最强大的 KQL 模式之一。鼓励学生使用描述性命名变量（如 `karen_ips` 而非 `x`），以使查询更易于阅读。
{{% /notice %}}

### KQL 101快速参考

| 运算符 | 目的 | 示例 |
|--------|------|------|
| `take` | 从表中抽样行 | `Employees \| take 10` |
| `count` | 统计总行数 | `Employees \| count` |
| `where` | 根据条件过滤行 | `\| where name has "Linda"` |
| `==` | 完全匹配 | `\| where ip_addr == "192.168.0.191"` |
| `has` | 整词匹配（词