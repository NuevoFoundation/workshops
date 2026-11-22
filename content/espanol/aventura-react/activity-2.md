---
title: "Actividad 2: Limpia la playa"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

<img src="../media/playas.png" alt="Sharky sonriente flota sobre una playa con palmeras, mientras dos jóvenes recogen botellas y vasos de plástico de la arena y los meten en bolsas negras" width="45%">

Las tortugas están a salvo. ¡Ahora vamos a limpiar su playa! Costa Rica tiene playas en dos costas: la del océano Pacífico y la del mar Caribe. Las tortugas marinas pueden confundir una bolsa de plástico que flota en el agua con una medusa, que es la comida de muchas de ellas. Por eso, cada desecho que recoges ayuda.

## Lo que vas a aprender

- Cómo guardar una **lista** en el estado
- Cómo quitar un elemento de una lista con `.filter()`
- Cómo mostrar un botón por cada elemento de una lista con `.map()`

## Abre tu archivo

En tu pestaña de StackBlitz, haz clic en `Playa.jsx` en la lista de archivos. Está en la misma carpeta `components` que `Tortugas.jsx`.

{{% notice info %}}
En esta actividad, los botones de los desechos no aparecen hasta el Paso 3. ¡Ahí todo empieza a funcionar de una vez!
{{% /notice %}}

## Paso 1 — TAREA 1: Guarda la lista de desechos en el estado

`desechos` es una **lista** (los programadores le dicen *arreglo*, o *array* en inglés): varios elementos entre corchetes `[ ]`, separados por comas. Queremos que React recuerde esta lista y actualice la pantalla cuando cambie. Así que, igual que `tortugas` en la Actividad 1, la guardamos en el estado. Esta vez el estado empieza con una lista en vez de `0`.

**Busca estas líneas:**

```jsx
  const desechos = [
    "🧃 Plástico",
    "🍾 Vidrio",
    "🥫 Lata",
    "📄 Papel",
  ];
```

**Cambia la primera y la última línea, para que quede así:**

```jsx
  const [desechos, setDesechos] = useState([
    "🧃 Plástico",
    "🍾 Vidrio",
    "🥫 Lata",
    "📄 Papel",
  ]);
```

No tienes que tocar los elementos del medio. Solo cambian dos líneas:

1. La primera línea: `const desechos = [` se convierte en `const [desechos, setDesechos] = useState([`.
2. La última línea: `];` se convierte en `]);`.

**Lo que deberías ver:** Si solo cambiaste la primera línea, puede que aparezca el recuadro de error. ¡Es normal! Desaparece cuando cambias también la última línea. Después de eso, todavía no cambia nada en la pantalla. ¡Así está bien!

## Paso 2 — TAREA 2: Recoge un desecho

`recoger` se va a ejecutar cuando hagas clic en un desecho. El desecho en el que hiciste clic se llama `desecho`. Usamos `.filter()` para crear una lista nueva que se queda con todos los desechos que **no** son `desecho`. Es como vaciar tu mochila y volver a meter todo menos la cáscara de banano. Después, `setDesechos` guarda la lista nueva.

**Busca estas líneas:**

```jsx
  const recoger = (desecho) => {

  };
```

**Escribe 1 línea nueva en el medio, para que quede así:**

```jsx
  const recoger = (desecho) => {
    setDesechos(desechos.filter((d) => d !== desecho));
  };
```

`(d) => d !== desecho` mira cada desecho de la lista, `d`, uno por uno. `!==` significa "no es igual a". Fíjate bien: `desechos` (con **s**) es toda la lista, y `desecho` (sin **s**) es solo el que tocaste.

**Lo que deberías ver:** Todavía no cambia nada, porque no hay botones para hacer clic. ¡Ese es el siguiente paso!

## Paso 3 — TAREA 3: Crea un botón para cada desecho

`.map()` recorre una lista elemento por elemento y convierte cada uno en algo para mostrar. Aquí, cada desecho se convierte en un botón: 4 desechos, 4 botones. Cuando la lista se hace más corta, hay menos botones.

**Busca estas líneas:**

```jsx
      <div className="botones-desechos">
        {/* TAREA 3: Crea un botón para cada desecho. */}
      </div>
```

**Cambia el comentario de la TAREA 3 por este código, para que quede así:**

```jsx
      <div className="botones-desechos">
        {desechos.map((desecho) => (
          <button key={desecho} onClick={() => recoger(desecho)}>
            Recoger {desecho}
          </button>
        ))}
      </div>
```

- `key={desecho}` le da a cada botón su propio nombre, para que React sepa cuál es cuál.
- `onClick={() => recoger(desecho)}` significa "cuando alguien haga clic en este botón, recoge este desecho". En la Actividad 1, el botón decía `onClick={salvarTortuga}`. Aquí también tenemos que decirle a `recoger` *cuál* desecho, así que lo envolvemos en una pequeña función, `() =>`, que solo se ejecuta cuando haces clic. ¡No la olvides!
- Mira el final: `))}`. El primer `)` cierra la parte del botón, el segundo cierra `.map(`, y la `}` cierra la `{` del principio.

{{% notice tip %}}
Cuando escribes `(` o `{`, a veces el editor agrega por su cuenta el `)` o la `}` que los cierra. Revisa que tu código sea igual al del recuadro de arriba, sin un `))}` de más.
{{% /notice %}}

**Lo que deberías ver:** Aparecen cuatro botones: **Recoger 🧃 Plástico**, **Recoger 🍾 Vidrio**, **Recoger 🥫 Lata** y **Recoger 📄 Papel**. Haz clic en uno y ¡desaparece! Recoge los cuatro y verás **¡La playa está limpia!**

Ese mensaje viene de una línea que ya estaba en el archivo:

```jsx
      {desechos.length === 0 && <p className="mensaje-final">¡La playa está limpia!</p>}
```

`desechos.length` es cuántos elementos hay en la lista. `&&` significa "solo si lo de antes es verdad, muestra lo de después". Así que el mensaje aparece solo cuando la lista está vacía.

## Punto de control

<img src="../media/checkpoint-beach.png" alt="La tarjeta de la playa con cuatro botones verdes: Recoger Plástico, Recoger Vidrio, Recoger Lata y Recoger Papel" width="50%">

Prueba tu tarjeta de la playa:

1. ¿Ves 4 botones?
2. Haz clic en uno. ¿Desaparece solo ese botón?
3. Haz clic en los demás. ¿Ves **¡La playa está limpia!**?

## Tu turno

Agrega tu propio desecho a la lista de la TAREA 1. Crea una línea nueva después de `"📄 Papel",` y escribe algo como `"👟 Zapato viejo",`, con comillas alrededor y una coma al final. Que sea diferente de los otros elementos. ¡Aparece un botón nuevo!

Los emoji son opcionales. Para agregar uno, presiona **tecla de Windows + .** en Windows, o **Ctrl + Cmd + Espacio** en Mac.

## ¿Atascado?

Compara tu código con el archivo terminado. Haz clic en **Muestra el archivo completo** para abrirlo.

Para ponerte al día, puedes reemplazar todo tu archivo con él:

1. Haz clic justo antes de `import`, al principio del recuadro. Después mantén presionada la tecla **Shift** (⇧) y haz clic justo después de la última `}`, al final del recuadro. Copia lo que seleccionaste (**Ctrl + C**, o **Cmd + C** en Mac).
2. En StackBlitz, haz clic dentro de `Playa.jsx` y presiona **Ctrl + A** (**Cmd + A** en Mac) para seleccionar todo.
3. Pega (**Ctrl + V**, o **Cmd + V** en Mac).

<details>
<summary>▶ Muestra el archivo completo</summary>

```jsx
import { useState } from "react";

export default function Playa() {
  const [desechos, setDesechos] = useState([
    "🧃 Plástico",
    "🍾 Vidrio",
    "🥫 Lata",
    "📄 Papel",
  ]);

  const recoger = (desecho) => {
    setDesechos(desechos.filter((d) => d !== desecho));
  };

  return (
    <div className="playa">
      <h2>🏖️ Limpieza de las Playas</h2>
      <p className="instrucciones">
        Haz clic en los desechos para recogerlos y proteger a las especies marinas.
      </p>

      <div className="botones-desechos">
        {desechos.map((desecho) => (
          <button key={desecho} onClick={() => recoger(desecho)}>
            Recoger {desecho}
          </button>
        ))}
      </div>

      {desechos.length === 0 && <p className="mensaje-final">¡La playa está limpia!</p>}
    </div>
  );
}
```

</details>

## ¿No funciona?

- **No aparece ningún botón.** Revisa que tu código con `.map` esté entre `<div className="botones-desechos">` y `</div>`. Revisa también que justo después de `(desecho) =>` hayas escrito un paréntesis `(`, no una llave `{`.
- **Toda la app desapareció.** Revisa que tu código con `.map` empiece con `{` y termine con `))}`.
- **Todos los desechos desaparecieron de una vez y dice "¡La playa está limpia!"** Seguramente escribiste `onClick={recoger(desecho)}`, como en el botón de las tortugas. Agrega `() =>` para que diga `onClick={() => recoger(desecho)}`. Sin eso, React ejecuta `recoger` para cada desecho apenas muestra los botones, en vez de esperar a que hagas clic.
- **Los botones no desaparecen cuando haces clic.** Revisa que tu línea de la TAREA 2 esté dentro de `recoger`, y que `setDesechos` esté escrito igual que en la TAREA 1, con **D** mayúscula. Revisa también las **s**: la lista es `desechos` y cada elemento es `desecho`.
- **El recuadro de error dice `Unexpected token` o `'return' outside of function`.** Te falta o te sobra un paréntesis, un corchete o una llave. La TAREA 1 tiene que terminar con `]);` y la TAREA 3 con `))}`. Compara tu archivo con el archivo completo de arriba.
- **Ves `))}` escrito en la tarjeta de la playa.** El editor agregó `))}` por ti y tú lo volviste a escribir. Borra uno de los dos.
