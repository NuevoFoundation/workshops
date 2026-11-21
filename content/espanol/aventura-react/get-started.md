---
title: "Abre tu proyecto inicial"
date: 2026-11-20T00:00:00-08:00
weight: 1
draft: false
---

<img src="../media/React.png" alt="Sharky sonriendo junto al logo azul de React" width="30%">

¡Sharky ya hizo las maletas! Tu app ya está empezada. Solo tienes que abrirla.

## Abre tu proyecto inicial

Haz clic en el botón de abajo. Tu proyecto se abre en una pestaña nueva en **StackBlitz**, un sitio web donde puedes escribir código y ver tu app al instante. No necesitas una cuenta.

### <a class="btn btn-info" href="https://stackblitz.com/github/NuevoFoundation/workshops/tree/master/workshopcode/espanol/aventura-react?file=src%2Fcomponents%2FTortugas.jsx" target="_blank" rel="noopener">👉 Abrir mi app de Costa Rica</a>

Ahora espera más o menos un minuto mientras StackBlitz prepara tu app. Puede que veas líneas de texto pasando en la parte de abajo de la pantalla. ¡Es normal!

¿Pasaron 2 minutos y todavía no aparece tu app? Revisa que estés usando Chrome, Edge o Firefox, y después pídele ayuda a tu instructor o a una persona adulta.

{{% notice warning %}}
**Deja abierta esta pestaña de StackBlitz hasta el final del taller.** No vuelvas a hacer clic en el botón de arriba, y no cierres ni recargues la pestaña de StackBlitz. El botón siempre abre una copia nueva, sin tu trabajo.
{{% /notice %}}

## Lo que vas a ver

StackBlitz tiene tres partes:

- **A la izquierda: la lista de archivos.** Todos los archivos de tu proyecto.
- **En el medio: el código.** El archivo en el que hiciste clic. `Tortugas.jsx` ya está abierto.
- **A la derecha: tu app.** Ejecuta tu código.

Si no ves la lista de archivos, haz clic en el ícono de archivos, en el borde izquierdo de la pantalla.

Tu app debería verse así:

<img src="../media/start-app.png" alt="La app inicial: el título Mi aventura en Costa Rica, una tarjeta de tortugas que dice Has salvado 0 de 10 tortugas, una tarjeta de playa sin desechos y una tarjeta de perezosos que dice Un perezoso" width="50%">

Todavía no hace mucho. ¡Ese es tu trabajo!

- 🐢 El botón **Salvar tortuga** todavía no hace nada. Lo vas a arreglar en la Actividad 1.
- 🏖️ La tarjeta de la playa todavía no tiene desechos para recoger. Eso es la Actividad 2.
- 🦥 Solo hay un perezoso, y se llama simplemente "Un perezoso". Eso es la Actividad 3.

## Tus archivos

En la lista de archivos, abre la carpeta `src`. Ahí vive todo tu código, y las tarjetas viven en la carpeta `components` que está adentro. Esto es lo que hace cada archivo:

| Archivo | Qué es | ¿Lo vas a cambiar? |
|---|---|---|
| `components/Tortugas.jsx` | La tarjeta de las tortugas | ✏️ Sí, en la Actividad 1 |
| `components/Playa.jsx` | La tarjeta de la playa | ✏️ Sí, en la Actividad 2 |
| `components/Perezosos.jsx` | La tarjeta de los perezosos | ✏️ Sí, en la Actividad 3 |
| `components/FincaCafe.jsx` | La tarjeta del café | ✏️ Sí, en una actividad extra |
| `components/Volcan.jsx` | La tarjeta del volcán | ✏️ Sí, en una actividad extra |
| `App.jsx` | Pone todas las tarjetas en la página | Solo en las actividades extra |
| `main.jsx` y `style.css` | Arrancan la app y le dan color | 🚫 No |
| Todos los demás archivos | La configuración del proyecto | 🚫 No |

## Cómo encajan las piezas

En React, cada parte de la pantalla es un **componente**. Un componente es un pedacito de código que crea una parte de la pantalla. Cada archivo de la carpeta `components` tiene un componente.

`App.jsx` pone los componentes en la página. Ya está listo:

```jsx
import Tortugas from "./components/Tortugas.jsx";
import Playa from "./components/Playa.jsx";
import Perezosos from "./components/Perezosos.jsx";

// EXTRA: Cuando llegues a una actividad extra, borra las // al
// inicio de su línea import de abajo, y las {/* */} alrededor de su etiqueta.
// import FincaCafe from "./components/FincaCafe.jsx";
// import Volcan from "./components/Volcan.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>Mi aventura en Costa Rica</h1>

      <Tortugas />
      <Playa />
      <Perezosos />

      {/* <FincaCafe /> */}
      {/* <Volcan /> */}
    </div>
  );
}
```

- `import Tortugas from "./components/Tortugas.jsx";` trae el componente de las tortugas desde su archivo.
- `<Tortugas />` significa "muestra aquí la tarjeta de las tortugas".
- Las líneas que empiezan con `//`, y todo lo que está dentro de `{/* */}`, son **comentarios**: notas para las personas. React se las salta. Por eso las tarjetas de la finca de café y del volcán todavía no aparecen. Las vas a activar en las actividades extra.

## Cómo funciona cada actividad

1. Haz clic en el archivo que la actividad te dice que abras.
2. Busca el comentario que dice `TAREA 1` (después `TAREA 2`, y así). Marca el lugar donde va tu código.
3. Escribe el código de la página de la actividad. Escríbelo en lugar de copiarlo: ¡así aprendes más!
4. Mira tu app a la derecha. Se actualiza un momento después de que escribes. Si no, presiona **Ctrl + S** (**Cmd + S** en Mac) para guardar.

Mientras estás escribiendo, puede que tu app se quede en blanco o que muestre el **recuadro de error**: un recuadro oscuro con letras rojas que tapa tu app. ¡Es normal! Desaparece cuando terminas de escribir. Solo mira la sección **¿No funciona?**, al final de cada actividad, si sigue ahí cuando ya terminaste.

{{% notice tip %}}
¿Te equivocaste? Presiona **Ctrl + Z** (**Cmd + Z** en Mac) para deshacerlo.
{{% /notice %}}

**¿Perdiste tu pestaña de StackBlitz?** Haz clic en el botón de arriba de esta página para abrir una copia nueva. Después ponte al día: en cada actividad que ya terminaste, pega el archivo completo de su sección **¿Atascado?**.

¿Todo listo? ¡Vamos a la [Actividad 1: Salva las tortugas](../activity-1/)!
