---
title: "設置 PlayCode 環境"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

<p style="font-size:1.8rem; text-align:center; color:#333;">點擊以下連結自行構建哥斯大黎加應用程式：</p>

<a class="my-2 mx-4 btn btn-info" href="https://playcode.io/react" target="_blank" style="display:block; text-align:center; background-color:#007BFF; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; font-size:1.5rem; margin:20px auto; width:fit-content;">創建您的 React 專案！</a>

點擊按鈕後，您將進入 PlayCode 頁面：

<img src="../media/UsarPlaygroud.png" alt="顯示免費選項的 PlayCode 起始畫面" style="width:50%;">


**點擊 "Start Free"**

<video controls width="800" height="400" style="display:block; margin:20px auto;">
  <source src="../media/Configuracion2.mp4" type="video/mp4">
  您的瀏覽器不支援該視頻標籤。
</video>

在 `"App.jsx"` 文件中，**貼上以下程式碼！**

```jsx
import React from 'react';

export function App(props) {
  return (
      <div className="App">
       <h2>你好，世界</h2>
      </div>
      );
}

console.log('配置完成')
``` 

在 `"index.jsx"` 文件中，**貼上以下程式碼！**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.jsx'

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<App />)

```

在 `"index.html"` 文件中，**貼上以下程式碼！**

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

**新建一個名為** `"style.css"` **的文件**

<img src="../media/css.png" alt="在 PlayCode 中創建新的 style.css 文件" style="width:50%;">

在了解創建我們的哥斯大黎加專案所需的所有元素之前，我們需要設置或更具體地說，創建一個重要的資料夾。

**點擊主資料夾 `"src"` 旁邊的三個點**

<img src="../media/paso1-carpeta.png" alt="點擊 src 資料夾旁的三個點" style="width:70%;">

{{% notice info %}}
#### 'style.css' 文件必須位於 src 資料夾中
{{% /notice %}}

**然後按以下步驟操作：**

`"New", "Directory"`

<img src="../media/paso2-carpeta.png" alt="選擇 New 然後是 Directory 創建新資料夾" style="width:70%;">

**現在我們已經創建了資料夾，請點擊三個點並重新命名：**

<img src="../media/paso3-carpeta.png" alt="將新資料夾重新命名為 Components" style="width:70%;">

**完成！我們已經創建了 Components 資料夾，我們快要準備好了！**

<img src="../media/paso4-carpeta.png" alt="Components 資料夾已在 src 內部創建" style="width:70%;">

**最後，我們需要添加 JSX 文件以便開始構建我們的專案！**

為此，請再次點擊 `"Components"` 資料夾上的三個點。

**重要提示：請選擇** `"JSX"` **文件類型**。

<img src="../media/paso5-carpeta.png" alt="在 Components 資料夾內添加新 JSX 文件" style="width:70%;">

這是我們的新文件應該有的樣子，命名為：`"Tortugero.jsx"`

```jsx 
Tortugero.jsx
```

**托圖格羅島是屬於中美洲國家哥斯大黎加的一座島嶼。它位於加勒比海和同名潟湖之間，估計面積為 2,810 公頃。**

<img src="../media/paso6-carpeta.png" alt="在 Components 中創建的 Tortugero.jsx 文件" style="width:70%;">