---
title: "Activity 5 - Rescuing sloths"
date: 2019-07-25T13:24:17-07:00
weight: 8
draft: false
---

<img src="../media/Perezoso.png" alt="Sloth, illustration downloaded from freepik" width="25%" />

We are almost done with our trip through Costa Rica! To finish, let's learn a bit about sloths.  
Sloths in Costa Rica are an icon of the country, and there are two species: the two-toed sloth (Choleopus hoffmanni) and the three-toed sloth (Bradypus variegatus). They are known for their slowness, their ability to camouflage, and for being national symbols that represent Costa Rica's connection with nature. You can spot them in national parks like Manuel Antonio and Corcovado, and in areas like La Fortuna and Cahuita.  

**Write this file `"Perezoso.jsx"`**

{{% notice info %}}
### Important to use:

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>

### A component inside another component

In this activity we are going to use two components:

- A small component: **Perezoso**
- A large component: **Perezosos**

This means we create a small component (like a cookie cutter) and then use it many times inside the large component.
{{% /notice %}}

```jsx
// Componente pequeño
function Perezoso() {
  return <p>Soy un perezoso</p>;
}

// Componente grande
export default function Perezosos() {
  return (
    <Perezoso />
  );
}
```

---

{{% notice info %}}
### Props, information that the component receives

Props are information that we send from the large component to the small component.  
The Perezoso component will receive:

- nombre
- onRescatar
- rescatado
{{% /notice %}}

```jsx
function Perezoso({ nombre, onRescatar, rescatado }) {
  return <p>{nombre}</p>;
}
```

This is how they are sent:

```jsx
<Perezoso
  nombre="Marcos"
  onRescatar={rescatar}
  rescatado={false}
/>
```
---

#### Inside the **Perezoso** component goes this code

```jsx
<div className={`perezoso-card ${rescatado ? "rescatado" : ""}`}>
      <p>
        {rescatado
          ? `${nombre} está a salvo!`
          : `${nombre} necesita ayuda`}
      </p>

      {!rescatado && (
        <button onClick={() => onRescatar(nombre)}>Rescatar</button>
      )}
    </div>
```

---

{{% notice info %}}
#### 1. Main container with dynamic classes

```jsx
<div className={`perezoso-card ${rescatado ? "rescatado" : ""}`}>
```

- It always uses the perezoso-card class from style.css
- If the sloth has already been rescued (```rescatado === true```), it also adds the ```rescatado``` class.
- This is used to change styles based on its state.

It is like giving it a special sticker when it has been saved.
The **"rescatado"** class is that sticker.

---

#### 2. Text that changes based on the sloth's state

```jsx
<p>
  {rescatado
      ? `${nombre} está a salvo!`
      : `${nombre} necesita ayuda`}
</p>

```

- If rescatado is true, it shows a message that it is safe.
- If it is false, it shows that it needs help.
- **The ```? :``` is an "if it is rescued → show this, if not → show the other".**

It is like a traffic light:

If it is green → it is already safe!

If it is yellow → it still needs help.

---

#### 3. Button that appears only if it is NOT rescued

```jsx
{!rescatado && (
  <button onClick={() => onRescatar(nombre)}>Rescatar</button>
)}

```

- !rescatado means "NOT rescued".
- If this is true, the button is shown.
- If it is already rescued → the button disappears.
- The button executes ```onRescatar(nombre)``` when you press it.

It is like a "help it!" button.
If it is already fine, the button hides because you no longer need it.

{{% /notice %}}






---


{{% notice info %}}
### Create a function called Perezosos

<p style="font-size:1.6rem; color:#444; line-height:1.8;">A constant called rescatados and setRescatados.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Another constant called perezosos, and add sloth names to it.</p>
{{% /notice %}}

---



**Constant to rescue the sloths!**
```jsx
const rescatar = (nombre) => {
    setRescatados([...rescatados, nombre]);
  };
```

---

{{% notice info %}}
### Create a list of components with a for loop

```jsx
let listaPerezosos = [];

for (let i = 0; i < perezosos.length; i++) {
  listaPerezosos.push(
    <Perezoso
      key={i}
      nombre={perezosos[i]}
      onRescatar={rescatar}
      rescatado={rescatados.includes(perezosos[i])}
    />
  );
}
```
{{% /notice %}}

#### How it is displayed 

```jsx
return (
    <div className="perezosos-container">
      <h2>Rescate de los Perezosos</h2>
      <p className="instruccion">
        Haz clic en los perezosos para rescatarlos del bosque
      </p>

      <div className="lista-perezosos">{listaPerezosos}</div>

      {rescatados.length === perezosos.length && (
        <h3 className="mensaje-final">
          Has rescatado a todos los perezosos!
        </h3>
      )}
    </div>
  );
```

**DON'T FORGET TO IMPORT IT IN APP.JSX**

``` jsx
import Perezosos from "./Components/Perezoso.jsx"
``` 

<img src="../media/Components5Perezoso.png" alt="Perezosos component rendered in the app" style="width:50%;">
