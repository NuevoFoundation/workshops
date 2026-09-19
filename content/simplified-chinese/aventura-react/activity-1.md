---
title: "活动 1 - 拯救海龟"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

<img src="../media/Tortuga.png" alt="Sharky with the turtle shell" style="width:25%;">

<p style="font-size:1.8rem; text-align:center; color:#333;">点击以下链接，亲自构建哥斯达黎加的应用程序：</p>

<a class="my-2 mx-4 btn btn-info" href="https://playcode.io/react" target="_blank" style="display:block; text-align:center; background-color:#007BFF; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; font-size:1.5rem; margin:20px auto; width:fit-content;">创建你的 React 项目！</a>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">太棒了！现在我们将一步步构建一个组件，用来拯救托尔图格罗岛上的海龟。</p>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">想象一下，React 是一个装满乐高积木的大盒子。每一块积木（组件）都有它的独特作用，比如：</p>

<ul style="font-size:1.5rem; line-height:1.8; color:#333; padding-left:20px;">
  <li>一块积木可以是一个按钮</li>
  <li>另一块积木可以是一个屏幕</li>
  <li>另一块可以是一个列表</li>
  <li>还有一块可以是一张图片</li>
</ul>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">当你把所有这些积木拼接在一起时... 你的完整应用程序就形成了！</p>

让我们开始吧！

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">import { useState } from "react";</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>import { useState } from "react";</code> 的意思是什么？</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">在 React 中，有些工具并不能直接使用，你需要从 React 的工具箱中调用它们。<code>useState</code> 就是其中一个特殊工具，它可以让我们存储会发生变化的东西。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">例如：还有多少只海龟需要拯救。</p>

<h2 style="font-size:2rem; color:#007BFF;">export default function Tortugero() { }</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>export default function Tortugero()</code> 是什么？</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">这里我们正在创建一个组件。<code>export default</code> 的意思是：“这是主文件，你可以在其他地方使用它”。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>function Tortugero()</code> 是组件的名字。就像一个盒子上写着：<b>“这是 Tortugero”</b>。</p>

{{% /notice %}}


{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">什么是 <code>const [tortugas, setTortugas] = useState(0);</code>？</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;"> 想象我们有一个神奇的盒子，用来存储一个数字。这个数字是已拯救的海龟数量。 </p>
<ul style="font-size:1.6rem; color:#444; line-height:1.8;">
  <li><b>tortugas</b> → 盒子里的内容（一个数字）</li>
  <li><b>setTortugas</b> → 用来改变这个数字的魔法钥匙</li>
  <li><b>useState(0)</b> → 初始状态：已拯救 0 只海龟</li>
</ul>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"> 这就是 React 如何记住你已经拯救了多少只海龟。 </p>

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">什么是 <code>const total = 10;</code>？</h2>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"> 这个数字是游戏的目标：托尔图格罗岛上有 10 只被困的海龟！这里我们是在说：<b>“我们必须拯救 10 只海龟”</b>。</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"> 你可以把它改成另一个数字，让游戏变得更简单或更困难。 </p>

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;"><code>const salvarTortuga = () => { };</code> 是做什么的？</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;"> 这个函数会在点击 <b>“拯救海龟”</b> 按钮时被触发。 </p>
<ul style="font-size:1.6rem; color:#444; line-height:1.8;">
  <li>它会检查是否还有海龟需要拯救 → <code>tortugas &lt; total</code></li>
  <li>如果有，它会增加一个海龟数量 → <code>setTortugas(tortugas + 1)</code></li>
</ul>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"> 每点击一次，就会拯救一只新海龟。 </p>

``` jsx
if (tort