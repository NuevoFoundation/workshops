```yaml
---
title: "活动 3 - 咖啡农场"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---

你知道咖啡在哥斯达黎加有多重要吗？

哥斯达黎加咖啡因其高品质而在全球范围内得到认可，这得益于肥沃的火山土壤、理想的气候以及专门种植阿拉比卡咖啡豆的组合。该国禁止种植罗布斯塔咖啡品种，以确保生产出香醇平衡的产品。咖啡在该国的经济和文化中历史悠久，是重要的一环，它种植于多个地区，其中塔拉祖地区尤为著名。

那么，让我们了解一下咖啡制作过程，同时，不妨通过 **Sharky ** 学点 React 吧！

**将此文件命名为 `"FincaCafe.jsx"`**：

{{% notice info %}}
### 使用以下内容：

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function FincaCafe() { }</p>

{{% /notice %}}

<img src="../media/Cafe.png" alt="咖啡" style="width:50%;">

制作咖啡的过程中包含多个重要阶段，接下来我们将逐一了解。

{{% notice info %}}
### 我们将学习一些不同的内容
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. 我们会使用一个数字来表示故事处于哪个阶段。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. 我们根据该数字更改显示的内容。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">3. 我们不是在计数，而是进行步骤导航。</p>

{{% /notice %}}

```jsx
const etapas = [
  "种植咖啡",
  "采收果实",
  "阳光晾干",
  "烘焙",
  "享用"
];

const [indice, setIndice] = useState(0);

```

**这里我们创建了一个 名为 `"ETAPAS"` 的常量，同时也有一个 名为 `"INDICE"` 的常量。**

{{% notice info %}}
### 这意味着：
<p style="font-size:1.6rem; color:#444; line-height:1.8;">数字 0 表示阶段 1。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">数字 1 表示阶段 2。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">数字 2 表示阶段 3。</p>

{{% /notice %}}

现在，我们可以创建一个名为 `"siguiente"` 的常量，以便在阶段之间切换。

```jsx
const siguiente = () => {
    if (indice < etapas.length - 1) {
      setIndice(indice + 1);
    }
  };
```
return (
    <div className="finca-container">
      <h2>祖父的农场</h2>
      <p className="etapa">{etapas[indice]}</p>

      {indice < etapas.length - 1 ? (
        <button className="btn-siguiente" onClick={siguiente}>
          下一阶段
        </button>
      ) : (
        // 到达最后阶段
        <h3 className="mensaje-final">
          你已经完成了整个咖啡制作过程！
        </h3>
      )}
    </div>
  );
```

{{% notice tip %}}
### 想象你正在玩一个包含 5 个关卡的游戏
<p style="font-size:1.6rem; color:#444; line-height:1.8;">etapas.length = 游戏包含的关卡数量（比如 5 个关卡）。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">indice = 当前正在进行的关卡（可以是第 1、2、3...关）。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">数字 2 表示阶段 3。</p>

{{% /notice %}}

**不要忘记在 APP.JSX 中导入它**

``` jsx
import FincaCafe from "./Components/FincaCafe.jsx"
``` 

<img src="../media/Components3FincaCafe.png" alt="FincaCafe 组件在应用中渲染" style="width:50%;">
```