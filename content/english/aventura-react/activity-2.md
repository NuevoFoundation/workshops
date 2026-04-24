---
title: "Activity 2 - Cleaning beaches"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

<img src="../media/Playa.png" alt="Beach cleanup" style="width:50%;">

Great! You managed to save the turtles. Now to clean the beaches of Costa Rica we will learn how to use constants with arrays, for loops, and let variables.

**Write this file `"Playa.jsx"`**

{{% notice info %}}
### Important to use:

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function Playa() { }</p>

{{% /notice %}}



First, what we are going to do is create an array where you can store any number of elements. Look at this example!

This is how arrays normally look in React.

``` jsx
const [Dinero, setDinero] = useState([
    "Colones",
    "Dolares",
    "Euros",
    "Pesos"
  ]);
```

Create a constant called **desechos and setDesechos** for this activity. Inside that const, put items that are trash on the beaches.

We need to create a function to be able to clean the beach of the waste in the array.

``` jsx
const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));

``` 

This function removes a piece of waste from the list when you click on it. Let's see how it works:



{{% notice tip %}}
### What does this function do?
<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));</code></p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">When you click it, it removes what you have in the array</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">The filter checks one by one, creates a new array, then saves the list without that piece of waste</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Example: if you remove plastic, you are left with glass, metal, and paper</p>

{{% /notice %}}

Then we need to create a variable called `"let"`. Unlike const, let can be modified.

We name it `"botones = [];"`

```jsx
let botones = [];

  for (let i = 0; i < desechos.length; i++) {
    botones.push(
      <button key={i} onClick={() => limpiar(desechos[i])}>
        Recolectar {desechos[i]}
      </button>
    );
  }

```

This saves us from writing 4 buttons by hand.

{{% notice info %}}
### The loop does this:
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. Starts at the first piece of waste.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. Creates a button for that piece of waste.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">3. Moves to the next one.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">4. Repeats until finished.</p>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">The button has the onClick that is used to clean</p>

**If the list changes, React redraws only the remaining buttons.**

{{% /notice %}}



```jsx
return (
  <div className="playas-container">
      <h2>Limpieza de las Playas</h2>
      <p className="instruccion">
        Haz clic en los desechos para recolectarlos y ayudar a proteger a las
        especies marinas
      </p>

      <div className="botones">{botones}</div>

      {desechos.length === 0 && (
        <p className="mensaje-final">Playa limpia!</p>
      )}
    </div>
);
```

**DON'T FORGET TO IMPORT IT IN APP.JSX**
``` jsx
import Playa from "./Components/Playa.jsx"
``` 

<img src="../media/Components2Playa.png" alt="Playa component rendered in the app" style="width:50%;">