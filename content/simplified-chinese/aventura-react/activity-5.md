---
title: "活动 5 - 拯救树懒"
date: 2019-07-25T13:24:17-07:00
weight: 8
draft: false
---

<img src="../media/Perezoso.png" alt="树懒，从 freepik 下载的插图" width="25%" />

我们的哥斯达黎加之旅即将结束！最后，让我们了解一下树懒。  
在哥斯达黎加，树懒是国家的象征，有两种树懒：二趾树懒（Choleopus hoffmanni）和三趾树懒（Bradypus variegatus）。它们以缓慢、伪装能力强以及作为代表哥斯达黎加与自然联系的国家象征而闻名。你可以在国家公园如 Manuel Antonio 和 Corcovado，或者像 La Fortuna 和 Cahuita 的地区看到它们。

**编写此文件 `"Perezoso.jsx"`**：

{{% notice info %}}
### 需要注意的要点:

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>

### 一个组件嵌套在另一个组件中

在本次活动中，我们将使用两个组件：

- 一个小组件：**Perezoso**
- 一个大组件：**Perezosos**

这意味着我们将创建一个小组件（像一个模具），然后在大组件中多次使用它。
{{% /notice %}}

```jsx
// 小组件
function Perezoso() {
  return <p>我是树懒</p>;
}

// 大组件
export default function Perezosos() {
  return (
    <Perezoso />
  );
}
```

---

{{% notice info %}}
### Props，组件接收的信息

Props 是我们从大组件传递到小组件的信息。  
Perezoso 组件会接收以下内容：

- nombre
- onRescatar
- rescatado
{{% /notice %}}

```jsx
function Perezoso({ nombre, onRescatar, rescatado }) {
  return <p>{nombre}</p>;
}
```

信息的传递方式如下：

```jsx
<Perezoso
  nombre="Marcos"
  onRescatar={rescatar}
  rescatado={false}
/>
```
---

#### 在 **Perezoso** 组件内部添加以下代码

```jsx
<div className={`perezoso-card ${rescatado ? "rescatado" : ""}`}>
      <p>
        {rescatado
          ? `${nombre} 已经获救了!`
          : `${nombre} 需要帮助`}
      </p>

      {!rescatado && (
        <button onClick={() => onRescatar(nombre)}>救助</button>
      )}
    </div>
```

---

{{% notice info %}}
#### 1. 带有动态类名的主要容器

```jsx
<div className={`perezoso-card ${rescatado ? "rescatado" : ""}`}>
```

- 它总是使用样式表 style.css 中的 perezoso-card 类。
- 如果该树懒已经被救助 (```rescatado === true```)，则会额外添加类 ```rescatado```。
- 这是用来根据状态更改样式的。

这就像是当树懒被救助时给它一个特殊的标记。
**"rescatado"** 类就是那个标记。

---

#### 2. 根据树懒状态变化的文本

```jsx
<p>
  {rescatado
      ? `${nombre} 已经获救了!`
      : `${nombre} 需要帮助`}
</p>

```

- 如果 rescatado 为真，则显示一条信息说明它已经获救。
- 如果为假，则显示它需要帮助。
- **```? :``` 是一种 “如果被救了 → 显示这个，未被救 → 显示其他信息” 的语法。**

这就像一个交通灯：

如果是绿灯 → 它已经安全了！

如果是黄灯 → 它仍然需要帮助。

---

#### 3. 仅在未被救助时显示的按钮

```jsx
{!rescatado && (
  <button onClick={() => onRescatar(nombre)}>救助</button>
)}

```

- !rescatado 表示 "未被救助"。
- 如果此条件为真，则显示按钮。
- 如果已经被救助 → 按钮消失。
- 当点击按钮时，会执行 ```onRescatar(nombre)```。

这就像一个 “帮助它！” 的按钮。  
如果它已经安全，按钮就会隐藏，因为你不再需要它。

{{% /notice %}}

---


{{% notice info %}}
### 创建一个名为 Perezosos 的函数

<p style="font-size:1.6rem; color:#444; line-height:1.8;">一个名为 rescatados 和 setRescatados 的常量。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">另一个名为 perezosos 的常量，并向其中添加树懒的名字。</p>
{{% /notice %}}

---

**拯救树懒的常量！**
```jsx
const rescatar = (nombre) => {
    setRescatados([...rescatados, nombre]);
  };
```

---

{{% notice info %}}
### 使用 for 循环创建组件列表

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

#### 显示结果时

```jsx
return (
    <div className="perezosos-container">
      <h2>树懒救援</h2>
      <p className="instruccion">
        点击树懒以将它们从森林中拯救出来
      </p>

      <div className="lista-perezosos">{listaPerezosos}</div>

      {rescatados.length === perezosos.length && (
        <h3 className="mensaje-final">
          你已经救了所有的树懒！
        </h3>
      )}
    </div>
  );
```

**不要忘记在 APP.JSX 中导入：**

``` jsx
import Perezosos from "./Components/Perezoso.jsx"
``` 

<img src="../media/Components5Perezoso.png" alt="在应用程序中渲染的 Perezosos 组件" style="width:50%;">