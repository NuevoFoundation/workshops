```yaml
---
title: "设置 PlayCode 环境"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

<p style="font-size:1.8rem; text-align:center; color:#333;">点击下面的链接，自己构建 Costa Rica 应用：</p>

<a class="my-2 mx-4 btn btn-info" href="https://playcode.io/react" target="_blank" style="display:block; text-align:center; background-color:#007BFF; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; font-size:1.5rem; margin:20px auto; width:fit-content;">创建你的 React 项目！</a>

当你点击按钮后，你将进入 PlayCode 页面：

<img src="../media/UsarPlaygroud.png" alt="PlayCode 开始界面展示免费选项" style="width:50%;">

**点击 Start Free**

<video controls width="800" height="400" style="display:block; margin:20px auto;">
  <source src="../media/Configuracion2.mp4" type="video/mp4">
  您的浏览器不支持 video 标签。
</video>

在文件 `"App.jsx"` 中 **粘贴以下代码！**

```jsx
import React from 'react';

export function App(props) {
  return (
      <div className="App">
       <h2>Hola mundo</h2>
      </div>
      );
}

console.log('Configurando')
``` 

在文件 `"index.jsx"` 中 **粘贴以下代码！**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.jsx'

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<App />)

```

在文件 `"index.html"` 中 **粘贴以下代码！**

```jsx 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/style.css">
  </head>
  <body>
    <div id="root"></div>

    <script src="src/index.jsx"></script>
  </body>
</html>

```

**创建一个名为** `"style.css"` 的文件

<img src="../media/css.png" alt="在 PlayCode 中创建新的 style.css 文件" style="width:50%;">

在了解创建 Costa Rica 项目所需的所有元素之前，我们需要先设置或更具体地创建一个重要的文件夹。

**点击主文件夹旁边的三个点，文件夹名称为** `"src"`

<img src="../media/paso1-carpeta.png" alt="点击 src 文件夹旁边的三个点" style="width:70%;">

{{% notice info %}}
#### 'style.css' 文件必须位于 src 文件夹中
{{% /notice %}}

**按照以下步骤：**

`"New", "Directory"`

<img src="../media/paso2-carpeta.png" alt="选择 New 然后选择 Directory 以创建文件夹" style="width:70%;">

**现在我们已经创建了文件夹，点击三个点并重命名文件夹**：

<img src="../media/paso3-carpeta.png" alt="将新文件夹重命名为 Components" style="width:70%;">

**完成！我们已创建 Components 文件夹，我们快准备好了！**

<img src="../media/paso4-carpeta.png" alt="在 src 中创建的 Components 文件夹" style="width:70%;">

**最后，我们需要添加 jsx 文件，以便开始构建项目**！

为此，再次点击三个点，但这次是在 `"Components"` 文件夹上。

**注意：请选择** `"JSX"` **文件类型**。

<img src="../media/paso5-carpeta.png" alt="在 Components 文件夹中添加新的 JSX 文件" style="width:70%;">

这是新文件的样子，命名为：`"Tortugero.jsx"`

```jsx 
Tortugero.jsx
```

**托图格罗岛是一个属于中美洲国家哥斯达黎加的岛屿。它位于加勒比海和同名泻湖之间，估计面积为 2,810 公顷。**

<img src="../media/paso6-carpeta.png" alt="在 Components 文件夹中创建的 Tortugero.jsx 文件" style="width:70%;">
```