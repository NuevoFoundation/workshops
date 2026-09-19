---
title: "活動 1 - 拯救海龜"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

<img src="../media/Tortuga.png" alt="Sharky with the turtle shell" style="width:25%;">

<p style="font-size:1.8rem; text-align:center; color:#333;">點擊以下連結，自己動手建立哥斯大黎加應用程式：</p>

<a class="my-2 mx-4 btn btn-info" href="https://playcode.io/react" target="_blank" style="display:block; text-align:center; background-color:#007BFF; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; font-size:1.5rem; margin:20px auto; width:fit-content;">創建你的 React 專案！</a>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">太棒了！現在我們要一步步建立一個可以拯救托圖蓋羅島海龜的元件。</p>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">想像一下，React 就像是一個充滿 LEGO 積木的巨大箱子。每塊積木（元件）都有自己的作用，例如：</p>

<ul style="font-size:1.5rem; line-height:1.8; color:#333; padding-left:20px;">
  <li>一塊積木可以是一個按鈕</li>
  <li>另一塊積木可以是一個螢幕</li>
  <li>還有一塊可以是清單</li>
  <li>另一塊則可以是圖片</li>
</ul>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">當你將這些積木全部組合在一起時......你完整的應用程式就完成了！</p>

現在就開始吧！

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">import { useState } from "react";</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>import { useState } from "react";</code> 是什麼意思？</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">在 React 中，有些工具並不能直接使用。你需要從 React 的工具箱中請求它們。<code>useState</code> 就是這種特殊工具之一，它讓我們可以儲存會改變的值。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">例如：剩下需要拯救的海龜數量。</p>

<h2 style="font-size:2rem; color:#007BFF;">export default function Tortugero() { }</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>export default function Tortugero()</code> 是什麼？</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">這裡我們建立了一個元件。<code>export default</code> 的意思是：「這是主要的檔案，你可以在其他地方使用它」。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>function Tortugero()</code> 是該元件的名稱，就好比一個標有「這是托圖蓋羅」的箱子。</p>

{{% /notice %}}


{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">什麼是 <code>const [tortugas, setTortugas] = useState(0);</code>？</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">想像我們有個魔法箱子可以儲存一個數字。這個數字代表被救出的海龜數量。</p>
<ul style="font-size:1.6rem; color:#444; line-height:1.8;">
  <li><b>tortugas</b> → 箱子裡的內容（數字）</li>
  <li><b>setTortugas</b> → 更改數字的神奇鑰匙</li>
  <li><b>useState(0)</b> → 從救出 0 隻海龜開始</li>
</ul>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">這就是 React 記住你救了多少海龜的方式。</p>

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">什麼是 <code>const total = 10;</code>？</h2>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">這個數字是遊戲目標：托圖蓋羅有 10 隻被困住的海龜！這裡我們設定為目標：<b>「我們必須救下 10 隻海龜」</b>。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">你可以將這個數字改為其他值，讓遊戲更容易或更難。</p>

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">什麼是 <code>const salvarTortuga = () => { }; </code>？</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">這個函式會在點擊 <b>「拯救海龜」</b> 按鈕時觸發。</p>
<ul style="font-size:1.6rem; color:#444; line-height:1.8;">
  <li>它會檢查是否還有海龜需要拯救 → <code>tortugas &lt; total</code></li>
  <li>如果還有，它會新增一隻被救的海龜數量 → <code>setTortugas(tortugas + 1)</code></li>
</ul>
<p style