---
title: "Extra: Finca de café"
date: 2026-11-20T00:00:00-08:00
weight: 6
draft: false
---

<img src="../media/Cafe.png" alt="Sharky relamiéndose junto a dos granos de café" width="40%">

¡Llegaste a la Finca del Abuelo! En Costa Rica se cultiva café desde hace más de 200 años, y Tarrazú es una de sus regiones cafetaleras más famosas. ¿Sabías que un grano de café en realidad es la semilla de una frutita roja? Vamos a seguir el café desde la planta hasta la taza.

Esta es una actividad extra. Primero termina las Actividades 1, 2 y 3.

## Lo que vas a aprender

- Cómo activar un componente nuevo en `App.jsx`
- Cómo elegir un elemento de una lista por su número de posición
- Cómo avanzar por etapas, un clic a la vez

## Activa la finca de café

La tarjeta del café está apagada: en `App.jsx` es un comentario, así que React se la salta. Vamos a activarla. Haz clic en `App.jsx` en la lista de archivos. Está en la carpeta `src`, no en `components`.

**Busca esta línea:**

```jsx
// import FincaCafe from "./components/FincaCafe.jsx";
```

**Borra las `//` y el espacio del principio, para que quede así:**

```jsx
import FincaCafe from "./components/FincaCafe.jsx";
```

**Después busca esta línea, cerca del final:**

```jsx
      {/* <FincaCafe /> */}
```

**Borra el `{/*` de antes y el `*/}` de después, para que quede así:**

```jsx
      <FincaCafe />
```

**Lo que deberías ver:** Baja hasta el final de tu app. Hay una tarjeta nueva del café que dice **Etapa 1 de 5** y **🌱 Sembrar el café**. El botón **Siguiente etapa ➡️** todavía no funciona.

## Abre tu archivo

Haz clic en `FincaCafe.jsx` en la lista de archivos (`src` → `components`). Arriba hay una lista llamada `etapas` con las 5 etapas para hacer café.

## Paso 1 — TAREA 1: Recuerda en qué etapa estás

`paso` es la posición de la etapa en la que estás. Las computadoras empiezan a contar desde **0**, así que el paso `0` es la primera etapa, el paso `1` es la segunda, y así. `etapas[paso]` elige la etapa que está en esa posición. Guardamos `paso` en el estado para que React actualice la tarjeta cuando cambie.

**Busca esta línea:**

```jsx
  const paso = 0;
```

**Bórrala y escribe esto en su lugar:**

```jsx
  const [paso, setPaso] = useState(0);
```

**Lo que deberías ver:** Todavía no cambia nada. Sigue diciendo **Etapa 1 de 5**. (La tarjeta muestra `paso + 1`, ¡porque las personas empezamos a contar desde 1!)

## Paso 2 — TAREA 2: Pasa a la siguiente etapa

Hay 5 etapas, así que `etapas.length` es `5`. Empezamos a contar desde 0, así que la última etapa es la número `4`, o sea, `etapas.length - 1`. Solo avanzamos si todavía no estamos en la última etapa.

**Busca estas líneas:**

```jsx
  const siguiente = () => {

  };
```

**Escribe 3 líneas nuevas en el medio, para que quede así:**

```jsx
  const siguiente = () => {
    if (paso < etapas.length - 1) {
      setPaso(paso + 1);
    }
  };
```

{{% notice tip %}}
Cuando escribes `(` o `{`, a veces el editor agrega por su cuenta el `)` o la `}` que los cierra. Revisa que tu código sea igual al del recuadro de arriba, sin una `}` de más.
{{% /notice %}}

**Lo que deberías ver:** Haz clic en **Siguiente etapa ➡️**. La tarjeta muestra **Etapa 2 de 5** y **🍒 Cosechar los granos de café**. ¡Sigue haciendo clic! En la etapa 5, **☕ Disfrutar una taza de café**, el botón desaparece y verás **¡Has completado todo el proceso del café!**

## Punto de control

<img src="../media/checkpoint-coffee.png" alt="La tarjeta del café en la Etapa 3 de 5, Secar los granos al sol, con un botón café que dice Siguiente etapa" width="50%">

Prueba tu tarjeta del café:

1. Haz clic en **Siguiente etapa ➡️**. ¿El número de la etapa sube de uno en uno?
2. ¿Ves una etapa del café diferente cada vez?
3. En la etapa 5, ¿ves **¡Has completado todo el proceso del café!**?

## Tu turno

Agrega una etapa nueva a la lista `etapas`. Por ejemplo, agrega `"📦 Empacar el café en bolsas"` entre tostar y disfrutar. Ponle comillas alrededor y una coma después. ¡Ahora la tarjeta dice **de 6**!

## ¿Atascado?

Compara tu código con el archivo terminado. Haz clic en **Muestra el archivo completo** para abrirlo.

Para ponerte al día, puedes reemplazar todo tu archivo con él:

1. Haz clic justo antes de `import`, al principio del recuadro. Después mantén presionada la tecla **Shift** (⇧) y haz clic justo después de la última `}`, al final del recuadro. Copia lo que seleccionaste (**Ctrl + C**, o **Cmd + C** en Mac).
2. En StackBlitz, haz clic dentro de `FincaCafe.jsx` y presiona **Ctrl + A** (**Cmd + A** en Mac) para seleccionar todo.
3. Pega (**Ctrl + V**, o **Cmd + V** en Mac).

En `App.jsx`, solo necesitas los dos cambios de [Activa la finca de café](#activa-la-finca-de-café).

<details>
<summary>▶ Muestra el archivo completo</summary>

```jsx
import { useState } from "react";

export default function FincaCafe() {
  const etapas = [
    "🌱 Sembrar el café",
    "🍒 Cosechar los granos de café",
    "🌞 Secar los granos al sol",
    "🔥 Tostar los granos",
    "☕ Disfrutar una taza de café",
  ];

  const [paso, setPaso] = useState(0);

  const siguiente = () => {
    if (paso < etapas.length - 1) {
      setPaso(paso + 1);
    }
  };

  return (
    <div className="finca-cafe">
      <h2>☕ Finca del Abuelo</h2>
      <p className="numero-etapa">
        Etapa {paso + 1} de {etapas.length}
      </p>
      <p className="etapa">{etapas[paso]}</p>

      {paso < etapas.length - 1 ? (
        <button className="boton-siguiente" onClick={siguiente}>
          Siguiente etapa ➡️
        </button>
      ) : (
        <h3 className="mensaje-final">¡Has completado todo el proceso del café!</h3>
      )}
    </div>
  );
}
```

</details>

## ¿No funciona?

- **Toda la app desapareció y el lado derecho está en blanco.** Activaste `<FincaCafe />`, pero la línea `import FincaCafe` todavía empieza con `//`. Borra las `//`. ¡Necesitas los dos cambios en `App.jsx`!
- **Ves `/*` y `*/` en la página.** Borraste la `{` y la `}`, pero no el `/*` ni el `*/`. Esa línea debe ser solo `<FincaCafe />`.
- **No hay tarjeta del café.** Baja hasta el final de tu app. ¿Sigue sin aparecer? Revisa que `<FincaCafe />` ya no esté dentro de `{/* */}`.
- **El recuadro de error dice `Identifier 'paso' has already been declared`.** Quiere decir "el nombre `paso` ya existe". Borra la línea vieja `const paso = 0;`.
- **El recuadro de error dice `Unexpected token` o `'return' outside of function`.** Te falta o te sobra un paréntesis o una llave. Cada `(` necesita un `)`, y cada `{` necesita una `}`. Compara tu archivo con el archivo completo de arriba.
- **Siguiente etapa no hace nada.** Revisa que `setPaso` esté escrito igual en la TAREA 1 y en la TAREA 2, con **P** mayúscula.
