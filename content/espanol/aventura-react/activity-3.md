---
title: "Actividad 3: Rescata a los perezosos"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

<img src="../media/Perezoso.png" alt="Un perezoso feliz colgado de una rama con una computadora portátil, junto a Sharky sonriendo" width="40%">

¡Última parada: el bosque tropical! En Costa Rica viven dos tipos de perezosos: el de dos dedos y el de tres dedos. Se mueven tan despacio que en su pelaje crecen algas, unos seres vivos diminutos parecidos a plantas, que los ayudan a esconderse en los árboles. Puedes verlos en parques nacionales como Manuel Antonio y Corcovado. ¡Cuatro perezosos necesitan tu ayuda!

## Lo que vas a aprender

- Cómo usar un componente pequeño muchas veces
- Cómo enviarle información a un componente con **props**
- Cómo crear un componente por cada elemento de una lista con `.map()`

## Abre tu archivo

Haz clic en `Perezosos.jsx` en la lista de archivos (`src` → `components`).

Este archivo tiene **dos** componentes:

- `Perezoso`, arriba, es pequeño. Muestra la tarjeta de **un** perezoso.
- `Perezosos`, más abajo, es grande. Es toda la zona de rescate, y usa tarjetas `Perezoso` adentro.

`Perezoso` es como un molde para galletas, y cada `<Perezoso />` es una galleta. ¡Un molde, muchas galletas!

Los nombres se parecen mucho, así que fíjate bien: `Perezoso` (sin **s**) es la tarjeta pequeña, `Perezosos` (con **s**) es el componente grande, y `perezosos` (con **p** minúscula) es la lista de nombres.

## Paso 1 — TAREA 1: Muestra el nombre del perezoso

Cuando el componente grande escribe `<Perezoso nombre="Mau" ... />`, le pasa información al pequeño. Esa información se llama **props**. El componente pequeño recibe sus props en su primera línea: `function Perezoso({ nombre, rescatado, onRescatar })`. Pero ahora mismo la tarjeta no usa `nombre` y siempre dice "Un perezoso".

**Busca esta línea** en el componente pequeño `Perezoso`, cerca del principio:

```jsx
      <h3>🦥 Un perezoso</h3>
```

**Cámbiala por:**

```jsx
      <h3>🦥 {nombre}</h3>
```

Solo cambia `Un perezoso` por `{nombre}`, y deja el 🦥. Las llaves `{ }` significan "muestra el valor de `nombre`". Sin ellas, solo verías la palabra "nombre".

**Lo que deberías ver:** La tarjeta ahora dice **🦥 Mau**.

## Paso 2 — TAREA 2: Una tarjeta por cada perezoso

En el componente grande `Perezosos` hay una lista con cuatro nombres: `const perezosos = ["Mau", "Rick", "Luna", "Toby"];`. Pero solo Mau tiene tarjeta, porque el `<Perezoso ... />` está escrito solo para Mau. Vamos a usar `.map()` para crear una tarjeta por cada nombre, como los botones de los desechos en la Actividad 2.

**Busca estas líneas** cerca del final, debajo del comentario de la TAREA 2:

```jsx
        <Perezoso
          nombre="Mau"
          rescatado={rescatados.includes("Mau")}
          onRescatar={rescatar}
        />
```

**Bórralas y escribe esto en su lugar:**

```jsx
        {perezosos.map((nombre) => (
          <Perezoso
            key={nombre}
            nombre={nombre}
            rescatado={rescatados.includes(nombre)}
            onRescatar={rescatar}
          />
        ))}
```

Cada tarjeta recibe una `key` y tres props:

- `key={nombre}`: un nombre que React usa para saber cuál tarjeta es cuál.
- `nombre={nombre}`: el nombre del perezoso. Lo muestras en la tarjeta gracias a la TAREA 1.
- `rescatado={rescatados.includes(nombre)}`: `true` (verdadero) si este perezoso está en la lista de rescatados, `false` (falso) si no.
- `onRescatar={rescatar}`: la función que se ejecuta cuando haces clic en **Rescatar**. No lleva `()` después de `rescatar`, porque le estamos pasando la función, no la estamos ejecutando todavía.

{{% notice tip %}}
Cuando escribes `(` o `{`, a veces el editor agrega por su cuenta el `)` o la `}` que los cierra. Revisa que tu código sea igual al del recuadro de arriba, sin un `))}` de más.
{{% /notice %}}

**Esto ya está en el archivo:** `rescatados` es una lista en el estado que empieza vacía, `useState([])`. La función `rescatar` agrega el nombre de un perezoso a esa lista:

```jsx
  const [rescatados, setRescatados] = useState([]);

  const rescatar = (nombre) => {
    if (!rescatados.includes(nombre)) {
      setRescatados([...rescatados, nombre]);
    }
  };
```

`!rescatados.includes(nombre)` significa "si este nombre **todavía no** está en la lista". `[...rescatados, nombre]` significa "todo lo que ya está en la lista, más este nombre nuevo".

**Lo que deberías ver:** Cuatro tarjetas: **Mau**, **Rick**, **Luna** y **Toby**. Haz clic en **Rescatar** en una tarjeta. Se pone verde y dice **✅ ¡A salvo!** Rescata a los cuatro y verás **¡Has rescatado a todos los perezosos!**

## Punto de control

<img src="../media/checkpoint-sloths.png" alt="Cuatro tarjetas de perezosos llamadas Mau, Rick, Luna y Toby. Mau y Rick están en verde y dicen ¡A salvo!; Luna y Toby dicen Necesita ayuda y tienen un botón Rescatar" width="50%">

Prueba tus tarjetas de perezosos:

1. ¿Ves cuatro tarjetas con cuatro nombres diferentes?
2. Haz clic en **Rescatar** en dos de ellas. ¿Se ponen verdes y dicen **✅ ¡A salvo!**?
3. Rescata a los demás. ¿Ves **¡Has rescatado a todos los perezosos!**?

## Tu turno

Agrega tu propio perezoso a la lista `perezosos`, como `"Pura Vida"` (¡así se saluda, se dan las gracias y se dice "todo bien" en Costa Rica!). Escríbelo después de `"Toby"`, antes del `]`. Ponle comillas al nombre y una coma antes, y que sea diferente de los otros nombres. Con Pura Vida, la línea queda así:

~~~jsx
  const perezosos = ["Mau", "Rick", "Luna", "Toby", "Pura Vida"];
~~~

Aparece una tarjeta nueva, y ahora tienes que rescatar a 5 perezosos para terminar.

## ¿Atascado?

Compara tu código con el archivo terminado. Haz clic en **Muestra el archivo completo** para abrirlo.

Para ponerte al día, puedes reemplazar todo tu archivo con él:

1. Haz clic justo antes de `import`, al principio del recuadro. Después mantén presionada la tecla **Shift** (⇧) y haz clic justo después de la última `}`, al final del recuadro. Copia lo que seleccionaste (**Ctrl + C**, o **Cmd + C** en Mac).
2. En StackBlitz, haz clic dentro de `Perezosos.jsx` y presiona **Ctrl + A** (**Cmd + A** en Mac) para seleccionar todo.
3. Pega (**Ctrl + V**, o **Cmd + V** en Mac).

<details>
<summary>▶ Muestra el archivo completo</summary>

```jsx
import { useState } from "react";

// Un componente PEQUEÑO: la tarjeta de un perezoso.
// Recibe su información por props: nombre, rescatado y onRescatar.
function Perezoso({ nombre, rescatado, onRescatar }) {
  return (
    <div className={rescatado ? "tarjeta-perezoso rescatado" : "tarjeta-perezoso"}>
      <h3>🦥 {nombre}</h3>

      <p>{rescatado ? "✅ ¡A salvo!" : "Necesita ayuda"}</p>

      {!rescatado && <button onClick={() => onRescatar(nombre)}>Rescatar</button>}
    </div>
  );
}

// Un componente GRANDE: toda la zona de rescate.
export default function Perezosos() {
  const perezosos = ["Mau", "Rick", "Luna", "Toby"];
  const [rescatados, setRescatados] = useState([]);

  const rescatar = (nombre) => {
    if (!rescatados.includes(nombre)) {
      setRescatados([...rescatados, nombre]);
    }
  };

  return (
    <div className="perezosos">
      <h2>🦥 Rescate de los Perezosos</h2>
      <p className="instrucciones">Haz clic en un perezoso para rescatarlo del bosque.</p>

      <div className="lista-perezosos">
        {perezosos.map((nombre) => (
          <Perezoso
            key={nombre}
            nombre={nombre}
            rescatado={rescatados.includes(nombre)}
            onRescatar={rescatar}
          />
        ))}
      </div>

      {rescatados.length === perezosos.length && (
        <h3 className="mensaje-final">¡Has rescatado a todos los perezosos!</h3>
      )}
    </div>
  );
}
```

</details>

## ¿No funciona?

- **La tarjeta sigue diciendo "Un perezoso".** La TAREA 1 va en el componente pequeño `Perezoso`, arriba en el archivo, no en el grande.
- **Todas las tarjetas dicen "nombre".** Te faltaron las llaves. Debe decir `{nombre}`.
- **Ves a Mau dos veces (5 tarjetas).** Agregaste el código con `.map`, pero no borraste las 5 líneas viejas de `<Perezoso nombre="Mau" ... />`. Bórralas.
- **No hay ninguna tarjeta.** Los nombres de los componentes empiezan con mayúscula: `<Perezoso`, no `<perezoso`. Revisa también que justo después de `(nombre) =>` hayas escrito un paréntesis `(`, no una llave `{`.
- **Toda la app desapareció.** Revisa que tu código con `.map` empiece con `{` y termine con `))}`. Revisa también las **s**: la lista es `rescatados` y la prop es `rescatado`, así que debe decir `rescatado={rescatados.includes(nombre)}`.
- **Hacer clic en Rescatar no hace nada.** Revisa que diga `onRescatar={rescatar}`, sin `()` después de `rescatar`.
- **Ves `))}` escrito en la tarjeta de los perezosos.** El editor agregó `))}` por ti y tú lo volviste a escribir. Borra uno de los dos.
- **El recuadro de error dice `Unexpected token` o `'return' outside of function`.** Te falta o te sobra una llave o un paréntesis. Compara tu archivo con el archivo completo de arriba.
