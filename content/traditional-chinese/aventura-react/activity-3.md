```yaml
---
title: "活動 3 - 咖啡農場"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---

你知道咖啡在哥斯達黎加有多重要嗎？

哥斯達黎加的咖啡因其卓越的品質在全球享有盛名，這得益於肥沃的火山土壤、理想的氣候以及獨家栽培的阿拉比卡咖啡豆。該國禁止種植羅布斯塔品種，以保證產品的醇和平衡性。咖啡在哥斯達黎加的經濟和文化中歷史悠久，並且在包括塔拉祖（Tarrazú）在內的多個地區都有種植，塔拉祖是其中最著名的產區之一。

讓我們一起學習咖啡的生產過程，順便跟著 **Sharky** 學習更多關於 React 的知識吧！

**撰寫此檔案 `"FincaCafe.jsx"`**：

{{% notice info %}}
### 重要工具使用：

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function FincaCafe() { }</p>

{{% /notice %}}

<img src="../media/Cafe.png" alt="Coffee" style="width:50%;">

製作咖啡時，我們首先需要知道，這包含了一個重要的過程，並由多個階段構成。我們將在接下來介紹它們。

{{% notice info %}}
### 我們將學習一些不同的內容
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. 我們將使用數字來標記故事所處的階段。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. 根據階段的數字，改變我們所看到的內容。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">3. 我們並不是在計數，而是在導航各個步驟。</p>

{{% /notice %}}

```jsx
const etapas = [
  "種植咖啡",
  "收穫咖啡豆",
  "太陽下晾曬",
  "烘焙",
  "品味"
];

const [indice, setIndice] = useState(0);

```

**在這裡我們創造了一個名為 `"ETAPAS"` 的常數，但我們也擁有另一個名為 `"INDICE"` 的常數。**

{{% notice info %}}
### 這意味著：
<p style="font-size:1.6rem; color:#444; line-height:1.8;">數字 0 表示第一階段。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">數字 1 表示第二階段。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">數字 2 表示第三階段。</p>

{{% /notice %}}

現在基於此，我們可以創建一個名為 `"siguiente"` 的常數，以便在階段之間進行切換。

```jsx
const siguiente = () => {
    if (indice < etapas.length - 1) {
      setIndice(indice + 1);
    }
  };
```
return (
    <div className="finca-container">
      <h2>阿布洛農場</h2>
      <p className="etapa">{etapas[indice]}</p>

      {indice < etapas.length - 1 ? (
        <button className="btn-siguiente" onClick={siguiente}>
          下一階段
        </button>
      ) : (
        //你已到達最終階段
        <h3 className="mensaje-final">
          你已完成整個咖啡製作過程！
        </h3>
      )}
    </div>
  );
```

{{% notice tip %}}
### 想像你正在玩一個有五個關卡的遊戲
<p style="font-size:1.6rem; color:#444; line-height:1.8;">etapas.length = 遊戲中有多少個關卡（例如：5 個關卡）。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">indice = 你目前所在的關卡（可以是第 1, 2, 3... 關）。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">數字 2 表示第三階段。</p>

{{% /notice %}}

**記得在 APP.JSX 中匯入此檔案**

``` jsx
import FincaCafe from "./Components/FincaCafe.jsx"
``` 

<img src="../media/Components3FincaCafe.png" alt="FincaCafe component rendered in the app" style="width:50%;">
```