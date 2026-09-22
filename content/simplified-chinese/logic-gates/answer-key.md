---
title: "逻辑门工作坊：答案解析"
date: 2025-12-04T10:00:00-06:00
draft: false
hidden: true
weight: 300
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

{{% notice tip %}}
注意：参加本工作坊时，请确保使用兼容的浏览器，并启用 JavaScript 来使用交互式模拟器。

活动可能需要在模拟器中选择选项或组件。
{{% /notice %}}

### 活动 1：AND 门
预期答案：仅当两个输入均为激活状态（1）时，输出才会被激活（1）。

提示：尝试两种输入的所有可能组合。仅当二者均为 1 时，输出才会为 1。

{{< workshop-image filename="media/answer_1.png" alt="具有两个输入和一个输出的 AND 电路的图示解决方案" width="40%" class="lg-img" >}}

---

### 活动 2：OR 门
预期答案：只要任一输入是激活状态（1），输出就会被激活（1）。

提示：如果一个或两个输入是 1，输出就是 1。只有当两个输入都为 0 时，输出才会为 0。

{{< workshop-image filename="media/answer_2.png" alt="具有两个输入和一个输出的 OR 电路的图示解决方案" width="40%" class="lg-img" >}}

---

### 活动 3：NOT 门
预期答案：输出始终是输入的相反值。

提示：如果输入为 0，输出为 1；如果输入为 1，输出为 0。

{{< workshop-image filename="media/answer_3.png" alt="具有一个输入和一个输出的 NOT 电路的图示解决方案" width="40%" class="lg-img" >}}

**双重 NOT 挑战：**  
如果将两个 NOT 门串联使用，信号会被反转两次。  
- 如果输入是 0：第一个 NOT 将其转换为 1，第二个将其再次转换为 0。  
- 如果输入是 1：第一个 NOT 将其转换为 0，第二个将其再次转换为 1。  

**结论：** 两个连续的 NOT 门会相互抵消反转效果，输出与原始输入相同。

---

### 活动 4：AND + NOT（反转门）
预期答案：输出为 1，除非两个输入均为 1（使用 AND 门然后接 NOT 门）。

提示：NOT 门会反转 AND 的结果。只有当两个输入都是 1 时，输出才会为 0。

{{< workshop-image filename="media/answer_5.png" alt="具有两个输入和一个输出的 AND 后接 NOT 电路的图示解决方案" width="40%" class="lg-img" >}}

---

### 活动 5：OR + NOT（静音输出）
预期答案：只有当两个输入都为 0 时，输出为 1（使用 OR 门然后接 NOT 门）。

提示：NOT 门会反转 OR 的结果。如果任一输入为 1，输出将为 0。

{{< workshop-image filename="media/answer_6.png" alt="具有两个输入和一个输出的 OR 后接 NOT 电路的图示解决方案" width="40%" class="lg-img" >}}

---

### 活动 6：组合门（AND、OR、NOT）
预期答案：如果 B 是 1 或 A 是 1 且 C 是 0，则输出被激活（使用 NOT 反转 C）。

提示：根据给定的逻辑条件组合逻辑门构建电路。测试活动中提供的案例。

1. **识别输入和输出：**  
- 输入：A, B, C  
- 输出：Output  

2. **使用 NOT 反转输入 C：**  
- 将 C 连接到 NOT 门，得到 `NOT C`。  

3. **使用 AND 组合 A 和 NOT C：**  
- 将 A 和 `NOT C` 连接到 AND 门，得到 `A AND NOT C`。  

4. **使用 OR 组合先前结果和 B：**  
- 将 `A AND NOT C` 和 B 连接到 OR 门，得到最终输出：`(A AND NOT C) OR B`。  

5. **将 OR 输出连接到 Output。**

**连接示例：**

{{< workshop-image filename="media/answer_4.png" alt="具有三个输入和一个输出的 AND、OR 和 NOT 组合电路的图示解决方案" width="40%" class="lg-img" >}}

**指导测试：**
- A = 1, B = 0, C = 0 → 输出 = 1  
- A = 1, B = 0, C = 1 → 输出 = 0  
- A = 0, B = 1, C = 1 → 输出 = 1  
- A = 0, B = 0, C = 0 → 输出 = 0  

---

### 活动 7：互斥差异（使用 AND/OR/NOT 实现 XOR）
预期答案：仅当两个输入不同（一个为 0，另一个为 1）时，输出为 1（使用 AND、OR 和 NOT 的组合）。

提示：尝试所有组合。仅当一个输入为 1，另一个为 0 时，输出才会为 1。

1. **识别输入和输出：**  
- 输入：A, B  
- 输出：Output  

2. **创建 OR 组合：**  
- 将 A 和 B 连接到 OR 门，得到 `OR_AB`。  

3. **创建 AND 组合：**  
- 将 A 和 B 连接到 AND 门，得到 `AND_AB`。  

4. **反转 AND 结果：**  
- 将 `AND_AB` 的输出连接到 NOT 门，得到 `NOT_AND_AB`。  

5. **用另一个 AND 进行最终组合：**  
- 将 `OR_AB` 和 `NOT_AND_AB` 连接到第二个 AND 门，得到最终输出：`XOR = (A OR B) AND NOT(A AND B)`。  

6. **将第二个 AND 的输出连接到 Output。**

**连接示例：**

{{< workshop-image filename="media/answer_7.png" alt="使用 AND、OR 和 NOT 实现的两输入一输出的 XOR 电路图示解决方案" width="40%" class="lg-img" >}}

**指导测试：**
- A = 0, B = 0 → 输出 = 0  
- A = 0, B = 1 → 输出 = 1  
- A = 1, B = 0 →