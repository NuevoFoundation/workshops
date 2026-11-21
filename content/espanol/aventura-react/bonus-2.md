---
title: "Extra: Volcán Arenal"
date: 2026-11-20T00:00:00-08:00
weight: 7
draft: false
---

<img src="../media/Volcan.png" alt="Sharky asustado junto a un volcán de caricatura con lava roja y anaranjada" width="45%">

El **Volcán Arenal**, en el norte de Costa Rica, fue uno de los volcanes más activos del mundo desde 1968 hasta 2010. Hoy está descansando, rodeado de bosque tropical y aguas termales. Pero en nuestra historia, ¡el Arenal empieza a retumbar! Ayuda a Sharky a poner a salvo a los animales.

<img src="../media/Arenal.jpg" alt="Foto del Volcán Arenal, una montaña alta en forma de cono con una nube en la punta, detrás de un lago azul y un bosque verde" width="45%">

{{% notice info %}}
Este extra es para practicar, así que tiene menos pistas. Ya hiciste todo esto en la Actividad 2. Primero intenta cada paso por tu cuenta. Si necesitas ayuda, haz clic en **Pista**.
{{% /notice %}}

## Lo que vas a aprender

- A practicar: guardar una lista en el estado, quitar elementos con `.filter()` y mostrarlos con `.map()`
- Cómo crear un elemento de lista con texto **y** un botón adentro

## Activa el volcán

Haz clic en `App.jsx` en la lista de archivos (en la carpeta `src`). Activa el volcán con dos cambios:

1. Busca la línea `// import Volcan from "./components/Volcan.jsx";` y borra las `//` y el espacio del principio.
2. Busca la línea `{/* <Volcan /> */}` cerca del final y borra el `{/*` y el `*/}` que están alrededor de `<Volcan />`.

<details>
<summary>▶ Pista</summary>

Las dos líneas deben quedar así:

```jsx
import Volcan from "./components/Volcan.jsx";
```

```jsx
      <Volcan />
```

</details>

**Lo que deberías ver:** Una tarjeta del volcán al final de tu app que dice **¡El volcán está retumbando! Evacúa a todos los animales.** Todavía no tiene animales.

## Abre tu archivo

Haz clic en `Volcan.jsx` en la lista de archivos (`src` → `components`).

## Paso 1 — TAREA 1: Agrega animales y guárdalos en el estado

**Meta:** una lista de al menos 5 animales que React recuerde, con una función `setAnimales` para cambiarla.

**Busca esta línea:**

```jsx
  const animales = ["🐒 Mono congo", "🦜 Tucán"];
```

Primero, agrega al menos 3 animales más que vivan en Costa Rica. Algunas ideas: jaguar, rana de ojos rojos, perezoso de tres dedos, lapa roja, pizote (coatí) o danta (tapir). Cada animal tiene que ser diferente. Después convierte la lista en estado, igual que `desechos` en la Actividad 2.

<details>
<summary>▶ Pista</summary>

Tus animales pueden ser otros. Si pones cada animal en su propia línea, la lista es más fácil de leer:

```jsx
  const [animales, setAnimales] = useState([
    "🐒 Mono congo",
    "🦜 Tucán",
    "🐆 Jaguar",
    "🐸 Rana de ojos rojos",
    "🦥 Perezoso de tres dedos",
  ]);
```

</details>

**Lo que deberías ver:** Todavía no cambia nada en la pantalla.

## Paso 2 — TAREA 2: Evacúa a un animal

**Meta:** cuando se ejecuta `evacuar(animal)`, ese animal sale de la lista. Mira `recoger` en `Playa.jsx`. ¡Es casi igual!

**Busca estas líneas:**

```jsx
  const evacuar = (animal) => {

  };
```

<details>
<summary>▶ Pista</summary>

```jsx
  const evacuar = (animal) => {
    setAnimales(animales.filter((a) => a !== animal));
  };
```

</details>

**Lo que deberías ver:** Todavía no cambia nada. No hay botones para hacer clic.

## Paso 3 — TAREA 3: Muestra los animales

**Meta:** un elemento de lista por cada animal. Cada elemento muestra una frase como **¡🐒 Mono congo está en peligro!** y un botón **Evacuar** que llama a `evacuar`. Usa `.map()` como en los botones de los desechos. Esta vez cada elemento es un `<li>` (un *elemento de lista*) con el texto y el `<button>` adentro. Pon la `key` en el `<li>`.

**Busca estas líneas:**

```jsx
        <ul>
          {/* TAREA 3: Crea un elemento de la lista para cada animal, con un botón Evacuar. */}
        </ul>
```

<details>
<summary>▶ Pista</summary>

Cambia el comentario de la TAREA 3, para que quede así:

```jsx
        <ul>
          {animales.map((animal) => (
            <li key={animal}>
              ¡{animal} está en peligro!
              <button onClick={() => evacuar(animal)}>Evacuar</button>
            </li>
          ))}
        </ul>
```

Fíjate en que la línea del texto empieza con `¡`, el signo de exclamación que abre la frase.

</details>

**Lo que deberías ver:** Cada animal aparece con un botón **Evacuar**. Haz clic en uno, y ese animal sale de la lista. Evacúa a todos y verás **¡Todos los animales están a salvo!**

## Punto de control

<img src="../media/checkpoint-volcano.png" alt="La tarjeta del volcán con una lista de cinco animales. Cada uno dice que está en peligro y tiene un botón anaranjado que dice Evacuar" width="50%">

Prueba tu tarjeta del volcán:

1. ¿Ves todos los animales que agregaste?
2. Haz clic en **Evacuar** en uno. ¿Sale solo ese animal?
3. Evacúa a los demás. ¿Ves **¡Todos los animales están a salvo!**?

## Tu turno

Muestra cuántos animales siguen en peligro. Después de la línea `</p>` que cierra las instrucciones, agrega esta línea:

~~~jsx
      <p>Animales todavía en peligro: {animales.length}</p>
~~~

`{animales.length}` muestra cuántos animales hay en la lista, igual que la tarjeta de las tortugas muestra `{tortugas}`. Después haz clic en **Evacuar** y mira cómo baja el número.

## ¿Atascado?

Compara tu código con los archivos terminados. Haz clic en **Muestra el archivo completo** para abrirlos.

Para ponerte al día, puedes reemplazar un archivo completo:

1. Haz clic justo antes de `import`, al principio de uno de los recuadros. Después mantén presionada la tecla **Shift** (⇧) y haz clic justo después de la última `}`, al final de ese mismo recuadro. Copia lo que seleccionaste (**Ctrl + C**, o **Cmd + C** en Mac).
2. En StackBlitz, haz clic dentro del archivo con el mismo nombre y presiona **Ctrl + A** (**Cmd + A** en Mac) para seleccionar todo.
3. Pega (**Ctrl + V**, o **Cmd + V** en Mac).

<details>
<summary>▶ Muestra el archivo completo</summary>

`Volcan.jsx`:

```jsx
import { useState } from "react";

export default function Volcan() {
  const [animales, setAnimales] = useState([
    "🐒 Mono congo",
    "🦜 Tucán",
    "🐆 Jaguar",
    "🐸 Rana de ojos rojos",
    "🦥 Perezoso de tres dedos",
  ]);

  const evacuar = (animal) => {
    setAnimales(animales.filter((a) => a !== animal));
  };

  return (
    <div className="volcan">
      <h2>🌋 Volcán Arenal</h2>
      <p className="instrucciones">
        ¡El volcán está retumbando! Evacúa a todos los animales.
      </p>

      {animales.length > 0 ? (
        <ul>
          {animales.map((animal) => (
            <li key={animal}>
              ¡{animal} está en peligro!
              <button onClick={() => evacuar(animal)}>Evacuar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mensaje-final">¡Todos los animales están a salvo!</p>
      )}
    </div>
  );
}
```

`App.jsx`, con las dos tarjetas extra activadas:

```jsx
import Tortugas from "./components/Tortugas.jsx";
import Playa from "./components/Playa.jsx";
import Perezosos from "./components/Perezosos.jsx";
import FincaCafe from "./components/FincaCafe.jsx";
import Volcan from "./components/Volcan.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>Mi aventura en Costa Rica</h1>

      <Tortugas />
      <Playa />
      <Perezosos />

      <FincaCafe />
      <Volcan />
    </div>
  );
}
```

</details>

## ¿No funciona?

- **Toda la app desapareció y el lado derecho está en blanco.** En `App.jsx`, la línea `import Volcan` todavía empieza con `//`. Borra las `//`.
- **Ves `/*` y `*/` en la página.** En `App.jsx`, esa línea debe ser solo `<Volcan />`.
- **Todos los animales desaparecieron de una vez.** El botón necesita `() =>`: `onClick={() => evacuar(animal)}`.
- **Un clic evacúa a dos animales.** Dos animales tienen exactamente el mismo nombre. Haz que cada animal sea diferente.
- **El recuadro de error dice `Unexpected token` o `'return' outside of function`.** Te falta o te sobra un paréntesis, un corchete o una llave, o te falta una coma o unas comillas. Revisa las comas y las comillas entre tus animales, que la lista termine con `]);` y que `.map` termine con `))}`.
- **Ves `))}` escrito en la tarjeta del volcán.** El editor agregó `))}` por ti y tú lo volviste a escribir. Borra uno de los dos.

## ¡Viaje completo!

¡Terminaste todas las paradas! **¡Pura vida!** 🦈

¿Quieres conservar tu app? Pídele a una persona adulta que te ayude a iniciar sesión en StackBlitz y a guardar tu propia copia con el botón **Fork** de arriba.
