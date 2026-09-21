```markdown
---
title: "活动 5 - 树懒的静默山巅 (或 OR + 非 NOT)"
date: 2025-10-20T02:25:00-05:00
weight: 6
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/perezoso.webp" alt="穿着树懒装的Nuvi" width="10%" />

## 引言

**树懒**在山顶上等着你：

> “我需要完全的安静：只有当**没有**小路有灯光时，输出才会亮起。  
> 让我们用**OR**来检测是否有灯光，再用**NOT**来反转。”

---

<img src="../media/pattern.webp" alt="逻辑工作坊的装饰图案" width="100%" />

## 逻辑目标

只有当 **A = 0 且 B = 0** 时，输出为 1：

<details class="lg-details">
<summary class="lg-summary">
查看完整真值表
</summary>

<div class="lg-div">

| A | B | A OR B | 输出 = NOT(A OR B) |
|---|---|--------|---------------------|
| 0 | 0 |   0    |          1          |
| 0 | 1 |   1    |          0          |
| 1 | 0 |   1    |          0          |
| 1 | 1 |   1    |          0          |

</div>
</details>

---

<img src="../media/paisaje_camino.webp" alt="山顶风景" width="100%" />

## 模拟器说明

### 1. 放置
- **输入信号**：A, B  
- **或门（OR Gate）**  
- **非门（NOT Gate）**  
- **输出（Output）**

<img src="../media/actividad_6.png" alt="两个输入和一个输出的和门后接非门的电路视觉示例" width="20%" class="lg-img"/>

### 2. 连接
1. A 和 B ➔ **OR门**  
2. **OR门**的输出 ➔ **NOT门**  
3. **NOT门**的输出 ➔ **输出**

### 3. 测试
- 尝试 00, 01, 10, 11。  
- 只有在 00 时，输出应为 1。

**胜利条件：** 如果 A 或 B 中**有任意一个**亮起，输出应为 0。

---

## 快速提示

- 如果输出总是保持为 1，可能是从 **OR** 到 **NOT** 的电缆没有连接好。  
- 为中间信号命名为 `OR_AB`。

---

## 模拟器

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="逻辑门模拟器" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## 你学到了什么？

- 如何通过用**OR**后接**NOT**来表达“**没有一个**输入信号是激活的”。
```