---
title: "Activity 2 - 清洁海滩"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

<img src="../media/Playa.png" alt="Beach cleanup" style="width:50%;">

太棒了！你已经成功拯救了海龟。现在，为了清洁哥斯达黎加的海滩，我们将学习如何在数组中使用常量、for 循环和 let 变量。

**写入以下文件 `"Playa.jsx"`**：

{{% notice info %}}
### 重要提示：

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function Playa() { }</p>

{{% /notice %}}
首先，我们将创建一个数组，用来存储任意数量的元素。看看以下示例！

这是 React 中数组通常的样子。

```jsx
const [Dinero, setDinero] = useState([
    "Colones",
    "Dolares",
    "Euros",
    "Pesos"
]);
```

为本次活动创建一个名为 **desechos 和 setDesechos** 的常量。在这个常量中，放入海滩上的一些垃圾。

我们需要创建一个函数，以便从数组中清除垃圾。

```jsx
const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));
``` 

此函数将在点击时从列表中移除一项垃圾。让我们看看它是如何工作的：

{{% notice tip %}}
### 这个函数的作用是什么？
<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));</code></p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">当你点击时，它会移除数组中的对应项。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">filter 将逐项检查，并创建一个新数组，随后保存没有该垃圾的列表。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">示例：如果你移除塑料，剩下的就是玻璃、金属和纸张。</p>

{{% /notice %}}

然后我们需要创建一个名为 `"let"` 的变量。与 const 不同，let 可以被修改。

我们将其命名为 `"botones = [];"`

```jsx
let botones = [];

  for (let i = 0; i < desechos.length; i++) {
    botones.push(
      <button key={i} onClick={() => limpiar(desechos[i])}>
        Recolectar {desechos[i]}
      </button>
    );
  }
```

这种方法可以避免我们手动编写 4 个按钮。

{{% notice info %}}
### 循环的作用是：
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. 从第一个垃圾开始。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. 为该垃圾创建一个按钮。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">3. 移动到下一个垃圾。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">4. 重复直到完成。</p>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">按钮具有用于清理的 onClick 属性</p>

**如果列表发生变化，React 只会重新绘制剩余的按钮。**

{{% /notice %}}
return (
  <div className="playas-container">
      <h2>海滩清洁</h2>
      <p className="instruccion">
        点击垃圾进行清理，帮助保护海洋生物
      </p>

      <div className="botones">{botones}</div>

      {desechos.length === 0 && (
        <p className="mensaje-final">海滩已清洁完成!</p>
      )}
    </div>
);
```

**别忘了在 APP.JSX 中导入它**
``` jsx
import Playa from "./Components/Playa.jsx"
``` 

<img src="../media/Components2Playa.png" alt="Playa component rendered in the app" style="width:50%;">