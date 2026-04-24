---
title: "Activity 1 - Rescuing turtles"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

<img src="../media/Tortuga.png" alt="Sharky with the turtle shell" style="width:25%;">

<p style="font-size:1.8rem; text-align:center; color:#333;">Click the link below to build the Costa Rica app yourself</p>

<a class="my-2 mx-4 btn btn-info" href="https://playcode.io/react" target="_blank" style="display:block; text-align:center; background-color:#007BFF; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; font-size:1.5rem; margin:20px auto; width:fit-content;">Create your React project!</a>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">Great! Now we are going to build step by step a component to save turtles on Tortuguero Island.</p>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">Imagine that React is a huge box full of LEGO pieces. Each piece (component) has a job, for example:</p>

<ul style="font-size:1.5rem; line-height:1.8; color:#333; padding-left:20px;">
  <li>One piece can be a button</li>
  <li>Another piece can be a screen</li>
  <li>Another can be a list</li>
  <li>Another can be an image</li>
</ul>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">When you put all those pieces together... your complete application is formed!</p>

Let's get started


{{% notice tip %}}



<h2 style="font-size:2rem; color:#007BFF;">import { useState } from "react";</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">What does <code>import { useState } from "react";</code> mean?</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">In React, some tools are not ready to use right away. You have to request them from the React toolbox. <code>useState</code> is one of those special tools that lets us store things that change.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">For example: how many turtles are left to save.</p>

<h2 style="font-size:2rem; color:#007BFF;">export default function Tortugero() { }</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">What is <code>export default function Tortugero()</code>?</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Here we are creating a component. <code>export default</code> means: "This is the main file, you can use it in other places".</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>function Tortugero()</code> is the name of the component. Like a box that says: <b>"This is Tortugero"</b>.</p>

{{% /notice %}}


{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">What is <code>const [tortugas, setTortugas] = useState(0);</code>?</h2> <p style="font-size:1.6rem; color:#444; line-height:1.8;"> Imagine we have a magic box where we store a number. That number is the amount of turtles saved. </p> <ul style="font-size:1.6rem; color:#444; line-height:1.8;"> <li><b>tortugas</b> → what is in the box (a number)</li> <li><b>setTortugas</b> → the magic key that lets you change that number</li> <li><b>useState(0)</b> → starts at 0 turtles saved</li> </ul> <p style="font-size:1.6rem; color:#444; line-height:1.8;"> This is how React remembers how many turtles you have saved. </p>

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">What is <code>const total = 10;</code>?</h2> <p style="font-size:1.6rem; color:#444; line-height:1.8;"> This number is the goal of the game: there are 10 turtles trapped in Tortuguero! Here we are saying: <b>"We must save 10 turtles"</b>. </p> <p style="font-size:1.6rem; color:#444; line-height:1.8;"> You could change it to another number to make the game easier or harder. </p>

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">What does <code>const salvarTortuga = () => { }; </code> do?</h2> <p style="font-size:1.6rem; color:#444; line-height:1.8;"> This function is triggered when we click the <b>"Salvar tortuga"</b> button. </p> <ul style="font-size:1.6rem; color:#444; line-height:1.8;"> <li>It checks if there are still turtles left to save → <code>tortugas &lt; total</code></li> <li>If yes, it adds one more turtle → <code>setTortugas(tortugas + 1)</code></li> </ul> <p style="font-size:1.6rem; color:#444; line-height:1.8;"> Each click rescues a new turtle. </p>

``` jsx
if (tortugas < total) setTortugas(tortugas + 1);
``` 

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">What does <code>reiniciar()</code> do?</h2> <p style="font-size:1.6rem; color:#444; line-height:1.8;"> When we finish the mission, we can start over. This function sets the turtle counter back to 0. </p> <p style="font-size:1.6rem; color:#444; line-height:1.8;"> This way you can play again from the beginning. </p>

``` jsx
const reiniciar = () => setTortugas(0);
``` 

{{% /notice %}}


```jsx 
<p>Has salvado {tortugas} de {total} tortugas</p>
``` 

Here the turtles you have saved and the total will be displayed.

``` jsx
return (
    <div className="Tortugero">
      <h2>Parque Nacional Tortuguero</h2>
      <p>Has salvado {tortugas} de {total} tortugas</p>

      {tortugas < total ? (
        <button onClick={salvarTortuga}>Salvar tortuga</button>
      ) : (
        <>
          <p className="exito">Todas las tortugas están a salvo!</p>
          <button onClick={reiniciar}>Reiniciar misión</button>
        </>
      )}
    </div>
  );
``` 

**The button responds to the salvarTortuga function to keep adding rescues**

The reset button clears the mission so you can rescue more turtles.

Then to display what we just built, we need to import it in `"App.jsx"`

``` jsx
import Tortugero from "./Components/Tortugero.jsx"
``` 

With the name `"Tortugero"` we can implement a new "tag" and display everything contained in the file `"Tortugero.jsx"`

<img src="../media/Components1Tortugero.png" alt="Tortugero component rendered in the app" style="width:50%;">
