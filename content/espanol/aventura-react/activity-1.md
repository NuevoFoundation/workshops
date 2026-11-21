---
title: "Actividad 1: Salva las tortugas"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

<img src="../media/Tortuga.png" alt="Sharky con cara de sorpresa junto a un caparazón de tortuga café" width="35%">

Tu primera parada es el **Parque Nacional Tortuguero**, en la costa del Caribe de Costa Rica. Es una de las playas más importantes del mundo donde las tortugas verdes ponen sus huevos. ¡Sharky necesita tu ayuda para llevar 10 tortuguitas sanas y salvas hasta el mar!

## Lo que vas a aprender

- Qué es el **estado**: la memoria de React
- Cómo hacer que un botón haga algo cuando le haces clic
- Cómo React actualiza la pantalla por sí solo cuando cambia el estado

## Abre tu archivo

Ve a tu pestaña de StackBlitz. `Tortugas.jsx` ya debería estar abierto en el medio. Si no, haz clic en él en la lista de archivos: `src` → `components` → `Tortugas.jsx`.

¿No tienes una pestaña de StackBlitz? Vuelve a [Abre tu proyecto inicial](../get-started/).

## Paso 1 — TAREA 1: Dale a React una memoria

Ahora mismo `tortugas` es un número normal, `0`. Si cambiara, React no se daría cuenta, así que la pantalla seguiría igual. Necesitamos **estado**: un valor que React recuerda y vigila. El estado es como el marcador de un partido: cuando cambia el marcador, todos ven el número nuevo.

**Busca esta línea:**

```jsx
  const tortugas = 0;
```

**Bórrala y escribe esto en su lugar:**

```jsx
  const [tortugas, setTortugas] = useState(0);
```

`useState(0)` crea un estado que empieza en `0`. Te da dos cosas: `tortugas` es el número en este momento, y `setTortugas` es la forma de cambiarlo. (`useState` viene de React. La primera línea del archivo, `import { useState } from "react";`, lo trae).

Fíjate en las mayúsculas, porque en el código importan: el componente se llama `Tortugas`, con **T** mayúscula; el estado se llama `tortugas`, con **t** minúscula; y `setTortugas` lleva una **T** mayúscula en el medio.

**Lo que deberías ver:** Todavía no cambia nada en la pantalla. Sigue diciendo **0 de 10**. ¡Así está bien!

## Paso 2 — TAREA 2: Salva una tortuga con cada clic

Cerca del final del archivo hay un botón: `<button onClick={salvarTortuga}>`. `onClick` significa "cuando alguien haga clic en este botón, ejecuta `salvarTortuga`". Pero `salvarTortuga` está vacía, así que todavía no pasa nada. Vamos a llenarla.

**Busca estas líneas:**

```jsx
  const salvarTortuga = () => {

  };
```

**Haz clic en la línea vacía del medio y escribe 3 líneas nuevas, para que quede así:**

```jsx
  const salvarTortuga = () => {
    if (tortugas < total) {
      setTortugas(tortugas + 1);
    }
  };
```

`if (tortugas < total)` revisa que todavía queden tortugas por salvar (`<` significa "menor que"). `setTortugas(tortugas + 1)` cambia el estado a una tortuga más. React ve el cambio y actualiza la tarjeta.

{{% notice tip %}}
Cuando escribes `(` o `{`, a veces el editor agrega por su cuenta el `)` o la `}` que los cierra. Revisa que tu código sea igual al del recuadro de arriba, sin una `}` de más.
{{% /notice %}}

**Consejo:** ¿Te cansaste de hacer clic 10 veces? Mientras pruebas, cambia `const total = 10;` por `const total = 3;`. Cuando termines, vuelve a ponerlo en `10`.

**Lo que deberías ver:** Haz clic en **Salvar tortuga**. El número sube: 1 de 10, 2 de 10, 3 de 10… Cuando llegas a 10, el botón desaparece. Ves **¡Todas las tortugas están a salvo!** y un botón **Reiniciar misión**.

**¿Cómo apareció ese mensaje?** Tú no lo escribiste. Esta parte ya estaba en el archivo:

```jsx
      {tortugas < total ? (
        <button onClick={salvarTortuga}>Salvar tortuga</button>
      ) : (
        <>
          <p className="exito">¡Todas las tortugas están a salvo!</p>
          <button onClick={reiniciar}>Reiniciar misión</button>
        </>
      )}
```

Léelo como una pregunta: ¿todavía quedan tortugas por salvar? Si la respuesta es **sí** (después del `?`), muestra el botón para salvar. Si es **no** (después de los `:`), muestra el mensaje y el botón para reiniciar. Los `<>` y `</>` solo mantienen juntas esas dos cosas.

## Paso 3 — TAREA 3: Reinicia la misión

Haz clic en **Reiniciar misión**. No pasa nada, porque `reiniciar` está vacía. Para jugar otra vez, el contador tiene que volver a 0.

**Busca estas líneas:**

```jsx
  const reiniciar = () => {

  };
```

**Escribe 1 línea nueva en el medio, para que quede así:**

```jsx
  const reiniciar = () => {
    setTortugas(0);
  };
```

**Lo que deberías ver:** Haz clic en **Reiniciar misión**. La tarjeta vuelve a **0 de 10**, y el botón **Salvar tortuga** regresa.

## Punto de control

<img src="../media/checkpoint-turtles.png" alt="La tarjeta de las tortugas dice Has salvado 3 de 10 tortugas y tiene un botón rojo que dice Salvar tortuga" width="50%">

Prueba tu tarjeta de las tortugas:

1. Haz clic en **Salvar tortuga** varias veces. ¿El número sube de uno en uno?
2. Sigue hasta salvar todas las tortugas. ¿Ves **¡Todas las tortugas están a salvo!**?
3. Haz clic en **Reiniciar misión**. ¿Volviste a 0?

## Tu turno

¡Haz que la misión sea tuya! Cambia `total` por otro número, como `5` o `25`. Después cambia las palabras del botón. En `<button onClick={salvarTortuga}>Salvar tortuga</button>`, cambia solo las palabras `Salvar tortuga`, por ejemplo por `Salvar una tortuga bebé 🐢`. Salva todas las tortugas y revisa que el mensaje siga apareciendo.

## ¿Atascado?

Compara tu código con el archivo terminado. Haz clic en **Muestra el archivo completo** para abrirlo.

Para ponerte al día, puedes reemplazar todo tu archivo con él:

1. Haz clic justo antes de `import`, al principio del recuadro. Después mantén presionada la tecla **Shift** (⇧) y haz clic justo después de la última `}`, al final del recuadro. Copia lo que seleccionaste (**Ctrl + C**, o **Cmd + C** en Mac).
2. En StackBlitz, haz clic dentro de `Tortugas.jsx` y presiona **Ctrl + A** (**Cmd + A** en Mac) para seleccionar todo.
3. Pega (**Ctrl + V**, o **Cmd + V** en Mac).

<details>
<summary>▶ Muestra el archivo completo</summary>

```jsx
import { useState } from "react";

export default function Tortugas() {
  const [tortugas, setTortugas] = useState(0);

  const total = 10;

  const salvarTortuga = () => {
    if (tortugas < total) {
      setTortugas(tortugas + 1);
    }
  };

  const reiniciar = () => {
    setTortugas(0);
  };

  return (
    <div className="tortugas">
      <h2>🐢 Parque Nacional Tortuguero</h2>
      <p>Has salvado {tortugas} de {total} tortugas</p>

      {tortugas < total ? (
        <button onClick={salvarTortuga}>Salvar tortuga</button>
      ) : (
        <>
          <p className="exito">¡Todas las tortugas están a salvo!</p>
          <button onClick={reiniciar}>Reiniciar misión</button>
        </>
      )}
    </div>
  );
}
```

</details>

## ¿No funciona?

- **El recuadro de error dice `Identifier 'tortugas' has already been declared`.** Quiere decir "el nombre `tortugas` ya existe". Todavía tienes la línea vieja `const tortugas = 0;`. Bórrala. Solo debe quedar `const [tortugas, setTortugas] = useState(0);`.
- **El número no sube.** Revisa que `setTortugas` esté escrito igual en la TAREA 1 y en la TAREA 2, con **T** mayúscula. ¡En el código, las mayúsculas importan! Revisa también que las líneas de la TAREA 2 estén *dentro* de `salvarTortuga`, entre `() => {` y `};`.
- **Dice 10 de 10 antes de que hagas clic.** Tus líneas de la TAREA 2 quedaron fuera de `salvarTortuga`. Muévelas entre `() => {` y `};`.
- **El recuadro de error dice `Unexpected token` o `'return' outside of function`.** Te falta o te sobra un paréntesis o una llave. (`Unexpected token` quiere decir "encontré algo que no esperaba", y `'return' outside of function` quiere decir "hay un `return` fuera de una función"). Cada `(` necesita un `)`, y cada `{` necesita una `}`. Compara tu archivo con el archivo completo de arriba.
- **Toda la app desapareció y el lado derecho está en blanco.** Busca un error al escribir, como `usestate` en vez de `useState`. Cuando lo corrijas, la app vuelve.
- **Tu cambio no aparece.** Presiona **Ctrl + S** (**Cmd + S** en Mac) para guardar.
