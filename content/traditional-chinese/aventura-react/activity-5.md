---
title: "活動 5 - 拯救樹懶"
date: 2019-07-25T13:24:17-07:00
weight: 8
draft: false
---

<img src="../media/Perezoso.png" alt="樹懶，由 freepik 下載的插圖" width="25%" />

我們的哥斯大黎加之旅即將結束！最後，讓我們來了解一下樹懶吧。  
樹懶是哥斯大黎加的國家象徵，國內有兩種樹懶：二趾樹懶（Choleopus hoffmanni）和三趾樹懶（Bradypus variegatus）。它們以動作緩慢、擅長偽裝以及作為與大自然緊密聯繫的國家象徵而聞名。你可以在 Manuel Antonio 和 Corcovado 這些國家公園，以及 La Fortuna 和 Cahuita 等地區看到它們。  

**編寫這個文件 `"Perezoso.jsx"`**：

{{% notice info %}}
### 需要使用的內容：

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>

### 一個組件包含在另一個組件內

在這個活動中，我們將使用兩個組件：

- 一個小組件：**Perezoso**
- 一個大組件：**Perezosos**

這意味著我們創建一個小組件 (就像一個餅乾模具)，然後在大組件內多次使用它。
{{% /notice %}}

```jsx
// 小組件
function Perezoso() {
  return <p>我是樹懶</p>;
}

// 大組件
export default function Perezosos() {
  return (
    <Perezoso />
  );
}
```

---

{{% notice info %}}
### Props：組件接收的信息

Props 是我們從大組件傳遞給小組件的信息。  
Perezoso 組件將接收以下內容：

- nombre
- onRescatar
- rescatado
{{% /notice %}}

```jsx
function Perezoso({ nombre, onRescatar, rescatado }) {
  return <p>{nombre}</p>;
}
```

這就是它們的傳遞方式：

```jsx
<Perezoso
  nombre="Marcos"
  onRescatar={rescatar}
  rescatado={false}
/>
```
---

#### 在 **Perezoso** 組件內放置以下代碼

```jsx
<div className={`perezoso-card ${rescatado ? "rescatado" : ""}`}>
      <p>
        {rescatado
          ? `${nombre} 已經安全了!`
          : `${nombre} 需要幫助`}
      </p>

      {!rescatado && (
        <button onClick={() => onRescatar(nombre)}>拯救</button>
      )}
    </div>
```

---

{{% notice info %}}
#### 1. 動態類別的主容器

```jsx
<div className={`perezoso-card ${rescatado ? "rescatado" : ""}`}>
```

- 它始終使用 style.css 中的 perezoso-card 類別。
- 如果樹懶已經被拯救（```rescatado === true```），它還會添加 ```rescatado``` 類別。
- 此功能用於根據它的狀態更改樣式。

這就像是在樹懶被拯救後，給它貼上一個特別的標籤。  
**"rescatado"** 類就是那個標籤。

---

#### 2. 根據樹懶的狀態變化的文字

```jsx
<p>
  {rescatado
      ? `${nombre} 已經安全了!`
      : `${nombre} 需要幫助`}
</p>

```

- 如果 rescatado 為 true，則顯示它已經安全的消息。
- 如果為 false，則顯示它需要幫助。
- **```? :``` 就是 “如果已被拯救 → 顯示這個，否則 → 顯示另一個”。**

它就像一個交通信號：

如果是綠色 → 表示安全！

如果是黃色 → 表示仍然需要幫助。

---

#### 3. 僅在尚未拯救的情況下顯示的按鈕

```jsx
{!rescatado && (
  <button onClick={() => onRescatar(nombre)}>拯救</button>
)}

```

- !rescatado 表示 "尚未拯救"。
- 如果這為真，則顯示按鈕。
- 如果它已經被拯救 → 按鈕會消失。
- 按鈕在被點擊時執行 ```onRescatar(nombre)```。

這就像是 “幫幫它！” 按鈕。  
如果它已經沒事了，按鈕將隱藏，因為不再需要它。

{{% /notice %}}

---


{{% notice info %}}
### 創建一個名為 Perezosos 的函數

<p style="font-size:1.6rem; color:#444; line-height:1.8;">一個名為 rescatados 和 setRescatados 的常量。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">另一個名為 perezosos 的常量，並在其中添加樹懶的名字。</p>
{{% /notice %}}

---

**拯救樹懶的常量！**
```jsx
const rescatar = (nombre) => {
    setRescatados([...rescatados, nombre]);
  };
```

---

{{% notice info %}}
### 使用 for 迴圈創建組件列表

```jsx
let listaPerezosos = [];

for (let i = 0; i < perezosos.length; i++) {
  listaPerezosos.push(
    <Perezoso
      key={i}
      nombre={perezosos[i]}
      onRescatar={rescatar}
      rescatado={rescatados.includes(perezosos[i])}
    />
  );
}
```
{{% /notice %}}

#### 顯示方式 

```jsx
return (
    <div className="perezosos-container">
      <h2>拯救樹懶</h2>
      <p className="instruccion">
        點擊樹懶將它們從森林中拯救出來
      </p