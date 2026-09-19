---
title: "活动 4 - 阿雷纳尔火山"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

你知道哥斯达黎加有大约 200 座火山吗？其中只有 5 座是活跃的：波阿斯火山、伊拉苏火山、图里亚尔瓦火山、维耶哈火山口火山和阿雷纳尔火山。其他的要么是休眠火山要么是死火山。

接下来，我们将告诉你关于阿雷纳尔火山的一些信息。

<img src="../media/Arenal.jpg" alt="Arenal Volcano" style="width:50%;">
阿雷纳尔火山是一座不活跃的复式火山，是哥斯达黎加的象征，位于阿拉胡埃拉省的阿雷纳尔火山国家公园内。它因锥形外观而闻名，并被热带雨林、温泉和丰富的生物多样性所环绕，其中包括大量的鸟类。它最近一次主要的火山活动开始于 1968 年，停止于 2010 年。

**将此文件命名为 `"Volcan.jsx"`：**

{{% notice info %}}
### 必须使用：

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function Volcan() { }</p>

{{% /notice %}}

<h2 style="font-size:2rem; color:#007BFF;">创建一个包含动物名称的常量和对应的 SetAnimales，列出你认为生活在哥斯达黎加的动物！</h2>

```jsx
const [animales, setAnimales] = useState([
    "",
    "",
    "",
    "",
    ""
  ]);
```

---

#### **快点保存它们，因为看起来阿雷纳尔火山开始有活动了！**

<img src="../media/Volcan.png" alt="Volcano danger" style="width:50%;">
**我们创建一个常量以将它们从该区域撤离**

```jsx
const evacuar = (nombre) => {
    setAnimales(animales.filter((a) => a !== nombre));
  };
```


{{% notice info %}}
<p style="font-size:1.6rem; color:#444; line-height:1.8;">在 Beaches 中，我们只创建了按钮，而在 Volcano 中，我们将创建一个完整的列表：</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">一个 "li" 可以包含文本 + 一个按钮 + 一个功能。</p>
{{% /notice %}}

```jsx
/* 这里我们用循环手动创建列表 */
  let listaAnimales = [];

  for (let i = 0; i < animales.length; i++) {
    listaAnimales.push(
      <li key={i}>
        {animales[i]} 正处于危险中{" "}
        <button onClick={() => evacuar(animales[i])}>撤离</button>
      </li>
    );
  }
```

{{% notice tip %}}
### 想象如下场景
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. 一架直升机逐一救援动物：</p>

```jsx
for (let i = 0; i < animales.length; i++)
```
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 0 → 第一轮：救援第一只动物。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 1 → 第二轮：救援第二只动物。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 2 → 第三轮：救援第三只动物。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 3 → 第四轮：救援第四只动物。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 4 → 停止！没有更多动物了（因为 animales.length = 4）。</p>

```jsx
listaAnimales.push( ... )
```

<p style="font-size:1.6rem; color:#444; line-height:1.8;">这就像飞行员在清单上记录下发现了哪些动物，并标记出哪个按钮可以将它们救出。</p>
{{% /notice %}}

{{% notice info %}}
<p style="font-size:1.6rem; color:#444; line-height:1.8;">在 Beaches 中，我们使用了：</p>

```jsx
<div className="botones">{botones}</div>

```
<p style="font-size:1.6rem; color:#444; line-height:1.8;">但在 Volcan.jsx 中，我们使用了：</p>

```jsx
<ul>{listaAnimales}</ul>

```
{{% /notice %}}

**它的显示方式如下**：

```jsx
return (
    <div className="volcan">
      <h2>阿雷纳尔火山</h2>

      {animales.length > 0 ? (
        <ul>{listaAnimales}</ul>
      ) : (
        <p>所有动物都已安全！</p>
      )}
    </div>
  );
```

**不要忘记在 APP.JSX 中导入它**

```jsx
import Volcan from "./Components/Volcan.jsx"
``` 

<img src="../media/Components4Volcan.png" alt="Volcan component rendered in the app" style="width:50%;">