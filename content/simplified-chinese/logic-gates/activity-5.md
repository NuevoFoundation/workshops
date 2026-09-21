```markdown
---
title: "第4项活动 - Toucan的反向闸（与门 + 非门）"
date: 2025-10-20T02:10:00-05:00
weight: 5
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/tucan.png" alt="扮成犀鸟的Nuvi" width="15%" />

## 引言

在石门前，**犀鸟**向你眨了眨眼：

> “记得我的**与门**吗？今天我们将通过**非门**对它进行**反转**。  
> 除非两根火把都点燃，否则门不会打开。”

---

<img src="../media/pattern.webp" alt="逻辑工作坊的装饰图案" width="100%" />

## 逻辑目标

构建一个输出结果为真，**除非**A = 1 **并且** B = 1：

<details class="lg-details">
<summary class="lg-summary">
查看完整真值表
</summary>

<div class="lg-div">

| A | B | A AND B | Output = NOT(A AND B)  |
|---|---|---------|------------------------|
| 0 | 0 |    0    |           1            |
| 0 | 1 |    0    |           1            |
| 1 | 0 |    0    |           1            |
| 1 | 1 |    1    |           0            |

</div>
</details>

---

<img src="../media/paisaje_puerta.webp" alt="森林中石门的风景" width="100%" />

## 模拟器操作说明

### 1. 放置组件
1. 确保你处于**编辑**模式。
- **输入**：A, B  
- **与门**  
- **非门**  
- **输出**

<img src="../media/actividad_5.png" alt="与门后接非门的电路视觉示例，两输入一输出" width="20%" class="lg-img"/>

### 2. 连接
1. A 和 B ➔ **与门**  
2. **与门**输出 ➔ **非门**  
3. **非门**输出 ➔ **输出**

### 3. 测试
- 测试 00, 01, 10, 11。  
- 门在所有情况中都会打开，**除了**11。

**胜利条件：**只有当 A = 1 且 B = 1 时，输出为 0。

---

## 快速提示

- 如果总是显示 0，可能是你将**输出**连接到了**与门**而不是**非门**。

---

## 模拟器

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="逻辑门模拟器" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## 你学到了什么？

- 如何对复合条件进行**取反**：先用**与门**，然后再用**非门**。
```