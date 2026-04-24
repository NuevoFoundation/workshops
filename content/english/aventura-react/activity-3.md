---
title: "Activity 3 - Coffee farm"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---

Do you know how important coffee is in Costa Rica?

Costa Rican coffee is recognized worldwide for its high quality, thanks to the combination of fertile volcanic soils, an ideal climate, and the exclusive cultivation of Arabica beans. The country prohibits the cultivation of the Robusta variety to guarantee a smooth and balanced product. Coffee has historically been vital to the economy and culture of the country, and it is grown in various regions, including Tarrazú, which is one of the most famous.

So let's learn about the coffee process and why not learn more about React with **Sharky**

**Write this file `"FincaCafe.jsx"`**

{{% notice info %}}
### Important to use:

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function FincaCafe() { }</p>

{{% /notice %}}

<img src="../media/Cafe.png" alt="Coffee" style="width:50%;">

To make coffee, we first need to know that this involves an important process that contains several stages, which we will see next.

{{% notice info %}}
### We will learn some different things
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. We will use a number to know which stage of a story we are in</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. We change what we see based on that number</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">3. We are not counting, we are navigating steps</p>

{{% /notice %}}

```jsx
const etapas = [
  "Sembrar café",
  "Cosechar granos",
  "Secar al sol",
  "Tostar",
  "Disfrutar"
];

const [indice, setIndice] = useState(0);

```

**Here we create a constant called `"ETAPAS"`, but we also have another constant called `"INDICE"`**

{{% notice info %}}
### This means that:
<p style="font-size:1.6rem; color:#444; line-height:1.8;">The number 0 means stage 1</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">The number 1 means stage 2</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">The number 2 means stage 3</p>

{{% /notice %}}

Now with this we can create a const called `"siguiente"` so that we can move between stages.

```jsx
const siguiente = () => {
    if (indice < etapas.length - 1) {
      setIndice(indice + 1);
    }
  };
```



```jsx
return (
    <div className="finca-container">
      <h2>Finca del Abuelo</h2>
      <p className="etapa">{etapas[indice]}</p>

      {indice < etapas.length - 1 ? (
        <button className="btn-siguiente" onClick={siguiente}>
          Siguiente etapa
        </button>
      ) : (
        //LLEGASTE A LA ULTIMA ETAPA
        <h3 className="mensaje-final">
          Has completado todo el proceso del café!
        </h3>
      )}
    </div>
  );
```

{{% notice tip %}}
### Imagine you are playing a game with 5 levels
<p style="font-size:1.6rem; color:#444; line-height:1.8;">etapas.length = How many levels the game has (example: 5 levels)</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">indice = What level you are on right now (can be level 1, 2, 3...)</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">The number 2 means stage 3</p>

{{% /notice %}}

**DON'T FORGET TO IMPORT IT IN APP.JSX**

``` jsx
import FincaCafe from "./Components/FincaCafe.jsx"
``` 

<img src="../media/Components3FincaCafe.png" alt="FincaCafe component rendered in the app" style="width:50%;">
