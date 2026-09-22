```yaml
---
title: "活動 2 - 清理海灘"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

<img src="../media/Playa.png" alt="Beach cleanup" style="width:50%;">

太棒了！你已經成功拯救了海龜。現在，我們要一起清理哥斯大黎加的海灘。在這個過程中，我們將學習如何使用常數與陣列、`for` 迴圈，以及 `let` 變數。

**編寫這個檔案 `"Playa.jsx"`：**

{{% notice info %}}
### 必須使用以下內容：

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function Playa() { }</p>

{{% /notice %}}
首先，我們要建立一個陣列來存放任意數量的元素。看看這個範例！

以下是 React 中陣列的常見寫法：

``` jsx
const [Dinero, setDinero] = useState([
    "Colones",
    "Dolares",
    "Euros",
    "Pesos"
  ]);
```

請為這次活動創建一個名為 **desechos 和 setDesechos** 的常數。在這個常數內，放入海灘上的垃圾項目。

接著，我們需要創建一個函數，用來移除陣列中的垃圾，幫助清理海灘。

``` jsx
const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));
``` 

此函數會在你點擊某項垃圾時，將其從列表中移除。讓我們看看它是如何運作的：

{{% notice tip %}}
### 這個函數的作用是什麼？
<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));</code></p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">當你點擊時，它會從陣列中刪除對應的項目。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">`filter` 函數會逐一檢查項目，並創建一個新的陣列，然後存儲不包含該垃圾的新列表。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">範例：如果你移除了「塑膠」，剩下的會是「玻璃」、「金屬」和「紙張」。</p>

{{% /notice %}}

然後，我們需要創建一個名為 `"let"` 的變數。與 `const` 不同的是，`let` 是可以被修改的。

我們將其命名為 `"botones = [];"`

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

這樣我們就不用手動寫 4 個按鈕了。

{{% notice info %}}
### 迴圈的執行過程如下：
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. 從第一個垃圾項目開始。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. 為該垃圾項目創建一個按鈕。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">3. 移動到下一個項目。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">4. 重複直到結束。</p>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">按鈕包含觸發垃圾清理功能的 `onClick`。</p>

**如果列表內容發生更改，React 只會重新渲染剩下的按鈕。**

{{% /notice %}}
return (
  <div className="playas-container">
      <h2>海灘清理活動</h2>
      <p className="instruccion">
        點擊垃圾來收集它們，幫助保護海洋生物
      </p>

      <div className="botones">{botones}</div>

      {desechos.length === 0 && (
        <p className="mensaje-final">海灘清理完成！</p>
      )}
    </div>
);
```

**別忘了在 APP.JSX 中匯入它**
``` jsx
import Playa from "./Components/Playa.jsx"
``` 

<img src="../media/Components2Playa.png" alt="Playa component rendered in the app" style="width:50%;">
```