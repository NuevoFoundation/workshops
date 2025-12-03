---
title: "Actividad 1 - Rescatando tortugas"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

<img src="../media/Tortuga.png" alt="Abeja imaginando un cuadrado" style="width:25%;);">

<p style="font-size:1.8rem; text-align:center; color:#333;">Entra en el link de abajo para construir tú mismo el app de Costa Rica</p>

<a class="my-2 mx-4 btn btn-info" href="https://playcode.io/react" target="_blank" style="display:block; text-align:center; background-color:#007BFF; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; font-size:1.5rem; margin:20px auto; width:fit-content;">Crea tu proyecto de React!</a>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">¡Muy bien! Ahora vamos a construir paso a paso un componente para salvar a tortugas en la isla Tortuguero.</p>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">Imagina que React es una caja enorme llena de piezas LEGO. Cada pieza (componente) tiene un trabajo, por ejemplo:</p>

<ul style="font-size:1.5rem; line-height:1.8; color:#333; padding-left:20px;">
  <li>Una pieza puede ser un botón</li>
  <li>Otra pieza puede ser una pantalla</li>
  <li>Otra puede ser una lista</li>
  <li>Otra puede ser una imagen</li>
</ul>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">Cuando juntas todas esas piezas… ¡se forma tu aplicación completa!</p>

Empecemos


{{% notice tip %}}



<h2 style="font-size:2rem; color:#007BFF;">import { useState } from "react";</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">¿Qué significa <code>import { useState } from "react";</code>?</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">En React, algunas herramientas no vienen listas. Hay que pedirlas de la cajita de React. <code>useState</code> es una de esas herramientas especiales que nos deja guardar cosas que cambian.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Por ejemplo: cuántas tortugas quedan por salvar.</p>

<h2 style="font-size:2rem; color:#007BFF;">export default function Tortugero()</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">¿Qué es <code>export default function Tortugero()</code>?</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Aquí estamos creando un componente. <code>export default</code> significa: “Este es el archivo principal, lo puedes usar en otros lugares”.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>function Tortugero()</code> es el nombre del componente. Como una caja que dice: <b>"Esto es Tortugero"</b>.</p>

{{% /notice %}}


{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">¿Qué es <code>const [tortugas, setTortugas] = useState(0);</code>?</h2> <p style="font-size:1.6rem; color:#444; line-height:1.8;"> Imagina que tenemos una caja mágica donde guardamos un número. Ese número es la cantidad de tortugas salvadas. </p> <ul style="font-size:1.6rem; color:#444; line-height:1.8;"> <li><b>tortugas</b> → lo que hay en la caja (un número)</li> <li><b>setTortugas</b> → la llave mágica que permite cambiar ese número</li> <li><b>useState(0)</b> → empieza en 0 tortugas salvadas</li> </ul> <p style="font-size:1.6rem; color:#444; line-height:1.8;"> Así React recuerda cuántas tortugas llevas salvadas. </p>

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">¿Qué es <code>const total = 10;</code>?</h2> <p style="font-size:1.6rem; color:#444; line-height:1.8;"> Este número es la meta del juego: ¡hay 10 tortugas atrapadas en Tortuguero! Aquí estamos diciendo: <b>"Debemos salvar 10 tortugas"</b>. </p> <p style="font-size:1.6rem; color:#444; line-height:1.8;"> Podrías cambiarlo a otro número para hacer el juego más fácil o más difícil. </p>

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">¿Qué hace <code>salvarTortuga()</code>?</h2> <p style="font-size:1.6rem; color:#444; line-height:1.8;"> Esta función se activa hacemos clic en el botón <b>"Salvar tortuga"</b>. </p> <ul style="font-size:1.6rem; color:#444; line-height:1.8;"> <li>Revisa si aún quedan tortugas por salvar → <code>tortugas &lt; total</code></li> <li>Si sí, suma una tortuga más → <code>setTortugas(tortugas + 1)</code></li> </ul> <p style="font-size:1.6rem; color:#444; line-height:1.8;"> Cada clic rescata una tortuga nueva. </p>

``` jsx
if (tortugas < total) setTortugas(tortugas + 1);
``` 

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">¿Qué hace <code>reiniciar()</code>?</h2> <p style="font-size:1.6rem; color:#444; line-height:1.8;"> Cuando terminamos la misión, pueden volver a empezar. Esta función pone el contador de tortugas en 0 de nuevo. </p> <p style="font-size:1.6rem; color:#444; line-height:1.8;"> Así pueden jugar otra vez desde el inicio. </p>

``` jsx
const reiniciar = () => setTortugas(0);
``` 

{{% /notice %}}

**Importante colocar un div con el classname= Tortugero**

```jsx 
<p>Has salvado {tortugas} de {total} tortugas</p>
``` 

Aqui se mostraran las tortugas que has salvado y el total.

``` jsx
{tortugas < total ? (
        <button onClick={salvarTortuga}>Salvar tortuga</button>
      ) : (
        <>
          <p className="exito">Todas las tortugas están a salvo!</p>
          <button onClick={reiniciar}>Reiniciar misión</button>
        </>
      )}
``` 

**El button responde a la funcion SALVARTORTUGAS para ir sumando rescates**

El botton reiniciar limpia la mision, para que puedas rescatar mas tortugas.

Luego para mostrar lo que acabamos de construir debemos importarlo en el `"App.jsx"`

``` jsx
import Tortugero from "./components/Tortugero.jsx"
``` 

Con el nombre `"Tortugero"` podemos implementar una nueva "etiqueta" y asi mostramos todo lo que contiene el archivo `"Tortugero.jsx"`

![alt text height="200px" width="50%"](../media/Components1Tortugero.png "Tortugero")




