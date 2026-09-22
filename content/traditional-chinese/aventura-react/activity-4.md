```markdown
---
title: "活動 4 - 阿雷納火山"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

你知道哥斯大黎加有大約 200 座火山嗎？其中只有五座是活火山：波阿斯火山（Poás）、伊拉苏火山（Irazú）、圖里亞巴火山（Turrialba）、老婦人火山（Rincón de la Vieja）和阿雷納火山（Arenal）。其餘火山都是休眠或已經滅絕的。 

現在，我們將告訴你阿雷納火山的故事。

<img src="../media/Arenal.jpg" alt="Arenal Volcano" style="width:50%;">  
阿雷納火山是一座休眠的層狀火山，也是哥斯大黎加的一個象徵，位於阿拉胡埃拉省內的阿雷納火山國家公園。它以典型的圓錐形地貌著稱，周圍環繞著熱帶雨林、溫泉與豐富的生物多樣性，包括大量的鳥類物種。最近一次主要的火山活動始於 1968 年，並在 2010 年停止。

**將此檔案保存為 `"Volcan.jsx"`：**

{{% notice info %}}
### 使用以下內容很重要：

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>  
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function Volcan() { }</p>  

{{% /notice %}}

<h2 style="font-size:2rem; color:#007BFF;">建立一個包含動物的常數，並搭配 SetAnimales 函數，寫下你認為生活在哥斯大黎加的動物！</h2>

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

#### **快來拯救牠們吧，因為看起來阿雷納火山有動靜了！**

<img src="../media/Volcan.png" alt="Volcano danger" style="width:50%;">  
**我們創建了一個常數來將牠們從危險地區撤離**
```jsx
const evacuar = (nombre) => {
    setAnimales(animales.filter((a) => a !== nombre));
  };
```

{{% notice info %}}
<p style="font-size:1.6rem; color:#444; line-height:1.8;">在 "Beaches" 中，我們僅創建了按鈕，但在 "Volcano" 中，我們創建了一個完整的清單：</p>  
<p style="font-size:1.6rem; color:#444; line-height:1.8;">一個 "li" 可以包含文字、按鈕和一個函數。</p>  
{{% /notice %}}

```jsx
/*這裡使用 for 手動创建清單*/
  let listaAnimales = [];

  for (let i = 0; i < animales.length; i++) {
    listaAnimales.push(
      <li key={i}>
        {animales[i]} 正面臨危險{" "}
        <button onClick={() => evacuar(animales[i])}>撤離</button>
      </li>
    );
  }
```

{{% notice tip %}}
### 想像以下情況  
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. 一架直升機輪流救援動物：</p>  

```jsx
for (let i = 0; i < animales.length; i++)
```  
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 0 → 第一次輪到動物 1。</p>  
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 1 → 第二次輪到動物 2。</p>  
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 2 → 第三次輪到動物 3。</p>  
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 3 → 第四次輪到動物 4。</p>  
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 4 → 停止！沒有更多動物了（因為 animales.length = 4）。</p>

```jsx
listaAnimales.push( ... )
```

<p style="font-size:1.6rem; color:#444; line-height:1.8;">這就像飛行員把記錄寫在清單上，標註看到的每隻動物以及按下哪個按鈕可以拯救牠們。</p>  
{{% /notice %}}

{{% notice info %}}
<p style="font-size:1.6rem; color:#444; line-height:1.8;">在 "Beaches" 中我們使用了：</p>  

```jsx
<div className="botones">{botones}</div>

```
<p style="font-size:1.6rem; color:#444; line-height:1.8;">但在 "Volcan.jsx" 中，我們看到這個：</p>  

```jsx
<ul>{listaAnimales}</ul>

```
{{% /notice %}}

**顯示結果如下：**

```jsx
return (
    <div className="volcan">
      <h2>阿雷納火山</h2>

      {animales.length > 0 ? (
        <ul>{listaAnimales}</ul>
      ) : (
        <p>所有動物都已安全！</p>
      )}
    </div>
  );
```

**別忘了在 APP.JSX 中導入它**

``` jsx
import Volcan from "./Components/Volcan.jsx"
``` 

<img src="../media/Components4Volcan.png" alt="Volcan component rendered in the app" style="width:50%;">
```