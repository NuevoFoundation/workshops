---
title: "Activity 4 - Arenal volcano"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

Did you know there are about 200 volcanoes in Costa Rica? Of those, only five are active: Poás, Irazú, Turrialba, Rincón de la Vieja, and Arenal. The rest are inactive or extinct. 

Well, we are going to tell you about the Arenal Volcano. 

<img src="../media/Arenal.jpg" alt="Arenal Volcano" style="width:50%;">
The Arenal Volcano is an inactive stratovolcano and an icon of Costa Rica, located in the province of Alajuela, within the Arenal Volcano National Park. It is known for its conical shape and is surrounded by tropical forests, hot springs, and rich biodiversity, which includes a large number of bird species. Its last major eruptive activity began in 1968 and ceased in 2010.

**Write this file `"Volcan.jsx"`**

{{% notice info %}}
### Important to use:

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function Volcan() { }</p>

{{% /notice %}}

<h2 style="font-size:2rem; color:#007BFF;">Create a constant of animals with a corresponding SetAnimales, write the ones you think live in Costa Rica!</h2>

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

#### **Let's go save them because it looks like the Arenal Volcano is showing activity!**

<img src="../media/Volcan.png" alt="Volcano danger" style="width:50%;">
**We create a constant to evacuate them from the area**
```jsx
const evacuar = (nombre) => {
    setAnimales(animales.filter((a) => a !== nombre));
  };
```


{{% notice info %}}
<p style="font-size:1.6rem; color:#444; line-height:1.8;">In Beaches we only created buttons, but in Volcano we create a complete list:</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">An "li" can contain text + a button + a function</p>
{{% /notice %}}

```jsx
/*Aquí hacemos una lista a mano usando un for*/
  let listaAnimales = [];

  for (let i = 0; i < animales.length; i++) {
    listaAnimales.push(
      <li key={i}>
        {animales[i]} está en peligro{" "}
        <button onClick={() => evacuar(animales[i])}>Evacuar</button>
      </li>
    );
  }
```

{{% notice tip %}}
### Imagine the following
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. A helicopter makes rounds to rescue the animals:</p>

```jsx
for (let i = 0; i < animales.length; i++)
```
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 0 → First round: visits animal 1</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 1 → Second round: visits animal 2 </p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 2 → Third round: visits animal 3 </p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 3 → Fourth round: visits animal 4 </p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 4 → STOP! There are no more animals (because animales.length = 4)</p>

```jsx
listaAnimales.push( ... )
```

<p style="font-size:1.6rem; color:#444; line-height:1.8;">It is like when the pilot writes down on their list which animal was found and which button to press to save it. </p>
{{% /notice %}}

{{% notice info %}}
<p style="font-size:1.6rem; color:#444; line-height:1.8;">In Beaches we used:</p>

```jsx
<div className="botones">{botones}</div>

```
<p style="font-size:1.6rem; color:#444; line-height:1.8;">But in Volcan.jsx we see this: </p>

```jsx
<ul>{listaAnimales}</ul>

```
{{% /notice %}}

**How it is displayed**

```jsx
return (
    <div className="volcan">
      <h2>Volcán Arenal</h2>

      {animales.length > 0 ? (
        <ul>{listaAnimales}</ul>
      ) : (
        <p>Todos los animales están a salvo!</p>
      )}
    </div>
  );
```

**DON'T FORGET TO IMPORT IT IN APP.JSX**

``` jsx
import Volcan from "./Components/Volcan.jsx"
``` 

<img src="../media/Components4Volcan.png" alt="Volcan component rendered in the app" style="width:50%;">

