---
title: "Atividade 1 - Resgatando tartarugas"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

<img src="../media/Tortuga.png" alt="Sharky com o casco da tartaruga" style="width:25%;">

<p style="font-size:1.8rem; text-align:center; color:#333;">Clique no link abaixo para construir o app da Costa Rica você mesmo:</p>

<a class="my-2 mx-4 btn btn-info" href="https://playcode.io/react" target="_blank" style="display:block; text-align:center; background-color:#007BFF; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; font-size:1.5rem; margin:20px auto; width:fit-content;">Crie seu projeto React!</a>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">Ótimo! Agora vamos construir passo a passo um componente para salvar tartarugas na Ilha Tortuguero.</p>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">Imagine que o React é uma grande caixa cheia de peças de LEGO. Cada peça (componente) tem uma função, por exemplo:</p>

<ul style="font-size:1.5rem; line-height:1.8; color:#333; padding-left:20px;">
  <li>Uma peça pode ser um botão</li>
  <li>Outra peça pode ser uma tela</li>
  <li>Outra pode ser uma lista</li>
  <li>Outra pode ser uma imagem</li>
</ul>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">Quando você junta todas essas peças... sua aplicação completa é formada!</p>

Vamos começar!

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">import { useState } from "react";</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">O que significa <code>import { useState } from "react";</code>?</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">No React, algumas ferramentas não estão prontas para uso imediato. Você precisa solicitá-las da caixa de ferramentas do React. <code>useState</code> é uma dessas ferramentas especiais que nos permite armazenar coisas que mudam.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Por exemplo: quantas tartarugas ainda faltam resgatar.</p>

<h2 style="font-size:2rem; color:#007BFF;">export default function Tortugero() { }</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">O que é <code>export default function Tortugero()</code>?</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Aqui estamos criando um componente. <code>export default</code> significa: "Este é o arquivo principal, você pode usá-lo em outros lugares".</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>function Tortugero()</code> é o nome do componente. Como uma caixa que diz: <b>"Esta é Tortugero"</b>.</p>

{{% /notice %}}


{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">O que é <code>const [tortugas, setTortugas] = useState(0);</code>?</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">Imagine que temos uma caixa mágica onde armazenamos um número. Esse número é a quantidade de tartarugas resgatadas.</p>
<ul style="font-size:1.6rem; color:#444; line-height:1.8;">
  <li><b>tortugas</b> → o que está na caixa (um número)</li>
  <li><b>setTortugas</b> → a chave mágica que permite alterar esse número</li>
  <li><b>useState(0)</b> → começa com 0 tartarugas resgatadas</li>
</ul>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">É assim que o React lembra quantas tartarugas você já resgatou.</p>

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">O que é <code>const total = 10;</code>?</h2>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Este número é o objetivo do jogo: há 10 tartarugas presas em Tortuguero! Aqui estamos dizendo: <b>"Precisamos resgatar 10 tartarugas"</b>.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Você pode alterá-lo para outro número e tornar o jogo mais fácil ou mais difícil.</p>

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">O que faz <code>const salvarTortuga = () => { }; </code>?</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">Esta função é ativada quando clicamos no botão <b>"Salvar tartaruga"</b>.</p>
<ul style="font-size:1.6rem; color:#444; line-height:1.8;">
  <li>Ela verifica se ainda há tartarugas para resgatar → <code>tortugas &lt; total</code></li>
  <li>Se sim, adiciona mais uma tartaruga → <code>setTortugas(tortugas + 1)</code></li>
</ul>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Cada clique resgata uma nova tartaruga.</p>

``` jsx
if (tortugas < total) setTortugas(tortugas + 1);
``` 

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">O que faz <code>reiniciar()</code>?</h2>
<p style="font-size:1.6rem; color:#444; line-height:1.