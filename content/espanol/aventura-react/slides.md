---
title: "Diapositivas"
type: "slide"
hidden: true
weight: 22
---

# React: Aventura por Costa Rica

<img src="../media/Sharky.png" alt="Sharky, un tiburón anaranjado que sonríe" width="25%">

Crea tu primera app con **React** en un viaje a Costa Rica 🇨🇷

Note:
**[1 min, acumulado 0:01]** (El acumulado es el reloj del taller: dónde deberías ir al salir de esta diapositiva).

- **Di:** "¡Hola a todos! Hoy nos vamos de viaje a Costa Rica, y mientras viajamos vamos a crear una app de verdad con React. No necesitas saber nada de React. Si sabes escribir y hacer clic, puedes hacerlo".
- **Haz:** Preséntate y presenta a tus ayudantes. Ten la app terminada abierta en otra pestaña, lista para la diapositiva 4.
- **Pregunta:** "Levanta la mano si alguna vez hiciste una página web o un juego" (así sabes quién podría ir más rápido).
- **Atento a:** Nadie escribe código todavía. Pide que todos tengan un navegador abierto (Chrome, Edge o Firefox).

---

## ¡Te ganaste un viaje a Costa Rica!

<img src="../media/MapaCR.jpg" alt="Mapa ilustrado y colorido de Costa Rica, entre el océano Pacífico y el mar Caribe" width="26%">

Tu guía: **Sharky**, el tiburón anaranjado 🦈

Note:
**[1 min, acumulado 0:02]**

- **Di:** "¡Felicidades, te acabas de ganar un viaje a Costa Rica! Es un país pequeño de Centroamérica, con playas en dos océanos. Es chiquito, pero allí viven cerca de 5 de cada 100 especies de plantas y animales del planeta. Nuestro guía es Sharky, un tiburón muy raro que unos pescadores encontraron en las aguas de Costa Rica. ¡Un tiburón anaranjado! Tenemos tres paradas: tortugas, una playa y perezosos".
- **Pregunta:** "¿Quién puede nombrar un animal que viva en Costa Rica?". Escucha una o dos respuestas y sigue.
- **Atento a:** Esta diapositiva dura solo un minuto. No dejes que la conversación se alargue; la siguiente diapositiva toma tiempo.

---

## Abre tu proyecto inicial, ¡ya!

1. Ve a la página del taller:<br>[workshops.nuevofoundation.org/es/aventura-react](https://workshops.nuevofoundation.org/es/aventura-react/)
2. Haz clic en [**Abre tu proyecto inicial**](../get-started/)
3. Haz clic en el botón grande. Se abre **StackBlitz**
4. ⭐ **Deja esta ÚNICA pestaña abierta todo el taller**

Note:
**[2 min, acumulado 0:04]**

- **Di:** "Primero vamos a abrir nuestro proyecto, porque tarda un minuto en cargar. Ve a la página del taller, haz clic en 'Abre tu proyecto inicial' y luego en el botón grande. Se abre un sitio que se llama StackBlitz. No necesitas cuenta. Muy importante: deja esta ÚNICA pestaña abierta todo el tiempo. No vuelvas a hacer clic en ese botón: te da una copia nueva y vacía, y tu trabajo se queda en la pestaña vieja".
- **Haz:** Ábrelo tú también en el proyector para que vean qué esperar. Si hay un chat, pega el enlace directo: https://stackblitz.com/github/NuevoFoundation/workshops/tree/master/workshopcode/espanol/aventura-react?file=src%2Fcomponents%2FTortugas.jsx
- **Pregunta:** "Pulgar arriba cuando veas código en tu pantalla. No pasa nada si el lado derecho todavía está cargando".
- **Atento a:** (1) La primera carga instala cosas y puede tardar uno o dos minutos. Diles que esperen y que no vuelvan a hacer clic. (2) Una computadora donde StackBlitz no abre (navegador viejo, red bloqueada): sienta a ese estudiante con un compañero de inmediato. No lo arregles ahora.

---

## Lo que vamos a crear hoy

<img src="../media/finished-app.png" alt="La app terminada de Mi aventura en Costa Rica, con el juego de las tortugas, la limpieza de la playa, el rescate de los perezosos y las dos actividades extra" width="45%">

🐢 Salva tortugas · 🏖️ Limpia una playa · 🦥 Rescata perezosos

Note:
**[1 min, acumulado 0:05]**

- **Di:** "Mientras carga tu proyecto, te muestro adónde vamos. Tu app va a tener tres partes: un juego de tortugas con un contador, una playa donde haces clic en la basura para recogerla y unas tarjetas de perezosos que puedes rescatar. Ahora mismo los botones no funcionan. Tú vas a encender cada parte".
- **Haz:** Muestra la app terminada en vivo en tu otra pestaña y haz clic en algunos botones (20 segundos). Unos botones que se mueven emocionan más que una imagen. App terminada: https://stackblitz.com/github/NuevoFoundation/workshops/tree/master/workshopcode/espanol/aventura-react-solution?file=src%2FApp.jsx
- **Pregunta:** "Pulgar arriba si ya cargó tu StackBlitz".
- **Atento a:** Estudiantes que cerraron la pestaña o abrieron dos. Ayúdalos a quedarse con una sola.

---

## ¿Qué es React?

<img src="../media/React.png" alt="Sharky junto al logo azul de React" width="22%">

- React nos ayuda a crear apps con **piezas**
- Cada pieza es un **componente**, como un bloque de LEGO 🧱
- Juntas las piezas → ¡una app completa!

Note:
**[2 min, acumulado 0:07]**

- **Di:** "React es una herramienta para crear apps. La crearon en Facebook, y apps como Instagram la usan. Imagina una caja grande de LEGO. Cada bloque tiene un trabajo: uno es un botón, otro es un contador, otro es una tarjeta. En React, cada bloque se llama componente. Creas componentes pequeños y luego los juntas para armar la app completa".
- **Pregunta:** "Con tus propias palabras: ¿qué es un componente?" (Respuesta: una pieza de la app).
- **Atento a:** Estudiantes mayores que pregunten por HTML o JavaScript. Basta con una frase: "React es JavaScript. Las partes que parecen HTML se llaman JSX".

---

## Conoce StackBlitz

<img src="../media/start-app.png" alt="La app inicial: Parque Nacional Tortuguero, Limpieza de las Playas y Rescate de los Perezosos, antes de agregar código" width="30%">

- **Izquierda:** archivos · **Centro:** código · **Derecha:** tu app
- Vas a cambiar 3 archivos: `Tortugas.jsx`, `Playa.jsx` y `Perezosos.jsx`
- Busca los comentarios que dicen `TAREA`

Note:
**[1 min, acumulado 0:08]**

- **Di:** "StackBlitz tiene tres partes. A la izquierda, la lista de archivos. En el centro, el código. A la derecha, tu app funcionando. Cuando cambias el código, la app de la derecha cambia sola. En el código vas a ver comentarios que empiezan con TAREA. Cada TAREA enciende una cosa".
- **Haz:** Señala las tres zonas en el proyector. Haz clic en "Salvar tortuga" para mostrar que todavía no pasa nada.
- **Pregunta:** "Pulgar arriba si ves 'Parque Nacional Tortuguero' a la derecha".
- **Atento a:** Si el lado derecho está vacío, todavía se está instalando. Espera 30 segundos. Nunca vuelvas a hacer clic en el enlace del proyecto inicial ni recargues la pestaña. Más adelante, si un cambio no aparece a la derecha, presiona Ctrl+S (Cmd+S en Mac) para guardar el archivo.

---

## Nuestra app está hecha de componentes

```jsx
export default function App() {
  return (
    <div className="App">
      <h1>Mi aventura en Costa Rica</h1>

      <Tortugas />
      <Playa />
      <Perezosos />
```

Note:
**[1 min, acumulado 0:09]**

- **Di:** "Este es App.jsx, la caja que guarda todos nuestros bloques de LEGO. ¿Ves `<Tortugas />`, `<Playa />` y `<Perezosos />`? Cada uno es un componente, y cada uno vive en su propio archivo dentro de la carpeta components. Ya están conectados, así que hoy no cambias este archivo".
- **Haz:** Haz clic en `App.jsx` en la lista de archivos para que vean el archivo de verdad, y luego vuelve a `Tortugas.jsx` (está en `src` y luego en `components`).
- **Pregunta:** "Pulgar arriba cuando tengas Tortugas.jsx abierto".
- **Atento a:** Estudiantes que escriben en App.jsx. Si lo cambiaron sin querer: Ctrl+Z (Cmd+Z en Mac) hasta que vuelva a quedar como estaba.

---

## Si algo se rompe

- 🟥 **¿Recuadro de error?** Lee el número de línea. Busca un `)`, `}` o `"` que falte o que sobre
- ⬜ **¿App en blanco?** Presiona **Ctrl+Z** para deshacer tu último cambio
- 😕 **¿Te quedaste atrás?** En **¿Atascado?**, abre **▶ Muestra el archivo completo**
- ✋ ¿Sigues atascado? ¡Levanta la mano!

Note:
**[1 min, acumulado 0:10]**

- **Di:** "A todo el mundo se le rompe el código, incluso a los programadores profesionales, todos los días. Mientras estás escribiendo, la app puede quedarse en blanco o mostrar el recuadro de error por un momento. ¡Es normal! Desaparece cuando terminas de escribir. Si sigue ahí, el recuadro de error te dice el archivo y la línea. Casi siempre falta un paréntesis, una llave o unas comillas. Si toda la app se pone en blanco, deshaz tu último cambio. Y si te quedas atrás, no hay problema: cada página de actividad tiene una sección que se llama '¿Atascado?' con el archivo completo. Lo copias, lo pegas encima de todo tu archivo y quedas al día".
- **Haz:** Muestra la página de la Actividad 1 y baja hasta la sección **¿Atascado?**. Abre **▶ Muestra el archivo completo** para que vean cómo se ve. Señala **¿No funciona?** justo debajo: una lista corta con los errores más comunes de esa actividad.
- **Pregunta:** "Pulgar arriba si sabes dónde encontrar '¿Atascado?'".
- **Atento a:** Estudiantes nerviosos. Diles que no pueden romper la computadora y que el archivo completo siempre arregla su archivo. Consejo para ti: el número de línea del recuadro de error es donde la computadora se confundió. El error de verdad suele estar unas líneas más arriba.

---

## Actividad 1: Salva las tortugas 🐢

<img src="../media/Tortuga.png" alt="Sharky sorprendido junto a un caparazón de tortuga" width="25%">

- Cada año, miles de tortugas marinas ponen sus huevos en **Tortuguero**
- Abre `src/components/Tortugas.jsx`
- ⌨️ en una diapositiva = escribe conmigo

Note:
**[2 min, acumulado 0:12]**

- **Di:** "Primera parada: el Parque Nacional Tortuguero, en la costa del Caribe. Cada año, miles de tortugas verdes salen del mar a esta playa para poner sus huevos. Nuestra misión: ¡salvar 10 tortugas! Abre el archivo Tortugas.jsx. Cuando veas el teclado en una diapositiva, significa: escribe conmigo".
- **Haz:** Agranda la letra de tu editor (Ctrl y +) para que la última fila pueda leer tu código. Ten la página de la Actividad 1 abierta en otra pestaña para mostrar la sección **¿Atascado?**.
- **Pregunta:** "Pulgar arriba cuando veas `TAREA 1` en tu archivo".
- **Atento a:** Estudiantes en el archivo equivocado. Mira el nombre del archivo en la pestaña que está encima del código.

---

## El estado = la memoria de React 🧠

- Una variable normal: React **no se entera** cuando cambia
- Una variable de **estado**: React la recuerda **y** vuelve a dibujar la pantalla
- Como un marcador: cambia el puntaje → todos lo ven

Note:
**[2 min, acumulado 0:14]**

- **Di:** "Ahora mismo, el contador de tortugas es un número normal: `const tortugas = 0;`. Se queda en 0 para siempre. Necesitamos que React recuerde el número y actualice la pantalla cuando cambie. Eso se llama estado. Piensa en el marcador de un partido de fútbol: cuando un equipo mete un gol, alguien aprieta un botón y la pantalla gigante muestra el nuevo marcador. El estado es el marcador. La función set es el botón".
- **Haz:** Todavía no escribas nada. Señala `const tortugas = 0;` en tu archivo.
- **Pregunta:** "En una palabra, ¿qué es el estado?" (Respuesta: ¡memoria!).
- **Atento a:** Estudiantes que empiezan a escribir antes de tiempo. Está bien si escriben la línea correcta.

---

## ⌨️ Paso 1 — TAREA 1

Busca esta línea:

```jsx
  const tortugas = 0;
```

Cámbiala por:

```jsx
  const [tortugas, setTortugas] = useState(0);
```

Note:
**[3 min, acumulado 0:17]**

- **Di:** "Vamos a darle memoria a React. Dentro de los corchetes hay dos nombres. `tortugas` es el número que React recuerda. `setTortugas` es el botón que lo cambia. `useState(0)` significa: empieza en 0. `useState` viene de React; por eso la primera línea del archivo dice `import { useState } from "react";`".
- **Escribe en vivo:** Selecciona `const tortugas = 0;` y escribe encima despacio, diciendo cada parte en voz alta: "const, abre corchete, tortugas, coma, setTortugas con T mayúscula, cierra corchete, igual, useState con S mayúscula, paréntesis con 0 adentro, punto y coma".
- **Di:** "Todavía no cambia nada en la pantalla. ¡No pasa nada! Le dimos memoria a React, pero todavía no la usamos".
- **Pregunta:** "Pulgar arriba cuando tu línea se vea exactamente como la mía y la app siga diciendo 0 de 10".
- **Atento a:** (1) Dejaron la línea vieja y agregaron la nueva → recuadro de error "Identifier 'tortugas' has already been declared" (el nombre `tortugas` ya existe). Borra la línea vieja. (2) `usestate` con s minúscula, o `Tortugas` con T mayúscula dentro de los corchetes → toda la app se pone en blanco. Las mayúsculas importan: el componente es `Tortugas` y la variable es `tortugas`. (3) Paréntesis en vez de corchetes alrededor de `tortugas, setTortugas`.

---

## ⌨️ Paso 2 — TAREA 2

Busca:

```jsx
  const salvarTortuga = () => {

  };
```

Escribe adentro:

```jsx
  const salvarTortuga = () => {
    if (tortugas < total) {
      setTortugas(tortugas + 1);
    }
  };
```

Note:
**[4 min, acumulado 0:21]**

- **Di:** "`salvarTortuga` es una función: una pequeña lista de instrucciones que se ejecuta cada vez que alguien hace clic en 'Salvar tortuga'. Ahora la lista está vacía. Vamos a agregar: si las tortugas que salvamos son menos que el total, cambia tortugas a tortugas más uno. El signo `<` significa 'menor que'".
- **Escribe en vivo:** Haz clic en la línea vacía entre `{` y `};` y escribe las tres líneas. Avisa que a veces el editor agrega solo la `}` o el `)` de cierre, así que hay que revisar que no queden dos.
- **Pregunta:** "Haz clic en 'Salvar tortuga' varias veces. ¡Pulgar arriba cuando tu contador suba!".
- **Atento a:** (1) Líneas escritas debajo de `};` en vez de dentro de las `{ }` → la app se pone en blanco (la consola dice "Too many re-renders": React se quedó dibujando sin parar) o el contador salta solo a 10. Hay que moverlas adentro. (2) Falta una `}` → recuadro de error "Unexpected token", que muchas veces señala la última línea del archivo. Si sobra una `}` (a veces el editor la agrega solo), dice "'return' outside of function". Revisa las llaves que acabas de escribir. (3) El contador no se mueve y no hay recuadro de error → un error de escritura en la TAREA 1, como `settortugas`; la consola (F12) dice "setTortugas is not defined".
- **Para ponerse al día:** "Si te quedaste atrás, abre **▶ Muestra el archivo completo** en la sección **¿Atascado?** de la página de la Actividad 1".

---

## ¿Qué pasa al llegar a 10?

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

Note:
**[2 min, acumulado 0:23]**

- **Di:** "Esta parte ya está escrita. No la escribes tú. Hace una pregunta: ¿`tortugas` es menor que `total`? El `?` significa 'si la respuesta es sí, muestra esto'. Los dos puntos `:` significan 'si no, muestra aquello'. Así que mientras tengas menos de 10, ves el botón 'Salvar tortuga'. Al llegar a 10, ves '¡Todas las tortugas están a salvo!' y un botón 'Reiniciar misión'. Los `<>` y `</>` son una caja invisible que mantiene dos cosas juntas".
- **Haz:** Haz clic en "Salvar tortuga" hasta llegar a 10 en tu pantalla para que vean aparecer el mensaje.
- **Pregunta:** "Haz clic hasta llegar a 10. Pulgar arriba cuando veas '¡Todas las tortugas están a salvo!'. Ahora haz clic en Reiniciar misión. ¿Funciona?" (¡No! Esa es la TAREA 3).
- **Atento a:** Estudiantes que cambian este código. Recuérdales que ya está listo. Para los más rápidos: pídeles que le expliquen el `?` y los `:` a un compañero.

---

## ⌨️ Paso 3 — TAREA 3

Busca:

```jsx
  const reiniciar = () => {

  };
```

Escribe adentro:

```jsx
  const reiniciar = () => {
    setTortugas(0);
  };
```

Note:
**[3 min, acumulado 0:26]**

- **Di:** "Reiniciar tiene que volver a poner el contador en 0. ¿Qué botón cambia el número de tortugas? ¡`setTortugas`! Así que lo ponemos en 0".
- **Escribe en vivo:** La línea `setTortugas(0);` dentro de `reiniciar`.
- **Consejo:** "¿Te cansaste de hacer clic 10 veces? Cambia `const total = 10;` por `const total = 3;` para probar más rápido".
- **Pregunta:** "Llega al final y haz clic en Reiniciar misión. ¡Pulgar arriba cuando vuelvas a 0!".
- **Atento a:** (1) `setTortugas(0);` escrito dentro de `salvarTortuga` en vez de `reiniciar` → el contador ya no sube. (2) `setTortugas = 0` en vez de `setTortugas(0)` → Reiniciar no hace nada (la consola dice "Assignment to constant variable"). Necesita los paréntesis.

---

## Punto de control ✅

<img src="../media/checkpoint-turtles.png" alt="La tarjeta de Tortuguero a mitad del juego, que dice Has salvado 3 de 10 tortugas" width="40%">

- **Salvar tortuga** → el número sube
- Al final → **¡Todas las tortugas están a salvo!**
- **Reiniciar misión** → vuelve a 0

Note:
**[2 min, acumulado 0:28]**

- **Di:** "Probemos todo. Haz clic en Salvar tortuga, llega al final y haz clic en Reiniciar misión".
- **Haz:** Camina por el salón (o pide a tus ayudantes que lo hagan) y mira las pantallas.
- **Pregunta:** "Pulgar arriba si las tres cosas funcionan. Pulgar de lado si algo no funciona".
- **Para ponerse al día:** Pulgar de lado → en la página de la Actividad 1, sección **¿Atascado?**, abre **▶ Muestra el archivo completo**, cópialo, haz clic en Tortugas.jsx, selecciona todo (Ctrl+A) y pega. No esperes más de 2 minutos por un solo estudiante. Los ayudantes siguen arreglando mientras tú avanzas.
- **Atento a:** Estudiantes que cambiaron `total` a 3. Está bien; es su juego.

---

## Tu turno ✨

```jsx
  const total = 10;
```

- Cambia el 10 por cualquier número. ¿Qué cambia en la pantalla?
- ¿Te quedaste atrás? En **¿Atascado?**, abre **▶ Muestra el archivo completo**

Note:
**[2 min, acumulado 0:30]**

- **Di:** "Tu turno: cambia el total por el número que quieras: 5, 20, 100. Mira la frase de la derecha. Dice 'de 20 tortugas' solita. Cambiaste UN número y React actualizó todo lo que lo usa".
- **Pregunta:** "¡Di tu número en voz alta!".
- **Extra (en la página):** cambia también el texto del botón, por ejemplo `Salvar una tortuga bebé 🐢`.
- **Resumen antes de seguir:** "En la Actividad 1 aprendiste el estado. `useState` le da memoria a React, y `setTortugas` la cambia".
- **Atento a:** Con un total de 0 aparece '¡Todas las tortugas están a salvo!' de inmediato. No es un error: 0 no es menor que 0. Es divertido explicárselo a los mayores.

---

## Actividad 2: Limpia la playa 🏖️

<img src="../media/playas.png" alt="Sharky volando sobre una playa donde dos personas recogen basura" width="35%">

- Costa Rica tiene playas en **dos océanos**
- La basura de la playa puede terminar en el mar
- Abre `src/components/Playa.jsx`

Note:
**[2 min, acumulado 0:32]**

- **Di:** "Siguiente parada: ¡la playa! Costa Rica tiene playas en el océano Pacífico y en el mar Caribe. La basura que se queda en la playa puede llegar al mar, y una tortuga marina puede confundir una bolsa plástica con una medusa y comérsela. ¡A limpiar! Abre Playa.jsx".
- **Pregunta:** "Pulgar arriba cuando tengas Playa.jsx abierto y veas la TAREA 1".
- **Atento a:** Estudiantes que siguen en Tortugas.jsx y escriben ahí el código de la playa. Revisa el nombre del archivo en la pestaña.

---

## Una lista en el estado 📋

```jsx
  const desechos = [
    "🧃 Plástico",
    "🍾 Vidrio",
    "🥫 Lata",
    "📄 Papel",
  ];
```

- `[ ]` con comas = una **lista** (un arreglo)
- Esta vez React tiene que recordar una lista completa

Note:
**[2 min, acumulado 0:34]**

- **Di:** "Unos corchetes con cosas adentro, separadas por comas, forman una lista. En código se llama arreglo, o *array* en inglés. Nuestra playa tiene 4 desechos. Cuando recogemos uno, la lista se hace más corta, así que React tiene que recordar la lista, igual que recordaba el número de tortugas. ¡El mismo truco de la Actividad 1!".
- **Di:** "Atención: en esta playa no aparece nada hasta el último paso. Es normal".
- **Pregunta:** "¿Cuántos desechos hay en la lista?" (Respuesta: 4).
- **Atento a:** Todavía no hay nada que escribir.

---

## ⌨️ Paso 1 — TAREA 1

- Primera línea: `const desechos = [` → `const [desechos, setDesechos] = useState([`
- Última línea: `];` → `]);`

```jsx
  const [desechos, setDesechos] = useState([
    "🧃 Plástico",
    "🍾 Vidrio",
    "🥫 Lata",
    "📄 Papel",
  ]);
```

Note:
**[3 min, acumulado 0:37]**

- **Di:** "Igual que con las tortugas, vamos a convertir `desechos` en estado. Solo cambias la primera y la última línea de la lista. Deja los desechos del medio tal como están. La primera línea, `const desechos = [`, se convierte en `const [desechos, setDesechos] = useState([`. En la última línea, agrega un `)` antes del `;`. La lista va dentro de los paréntesis de useState, como antes iba el 0".
- **Escribe en vivo:** Cambia solo la primera y la última línea. No vuelvas a escribir los emojis.
- **Di:** "Todavía no cambia nada en la pantalla. No pasa nada".
- **Pregunta:** "Pulgar arriba cuando tu lista termine en `]);`".
- **Atento a:** (1) Olvidaron el `)` del final → recuadro de error "Unexpected token, expected ','" (la computadora esperaba otra cosa en esa línea). (2) Borraron unas comillas o una coma entre los desechos → recuadro de error (si falta una comilla dice "Unterminated string constant"). (3) `setdesechos` con d minúscula (más adelante, al hacer clic, la consola dirá "setDesechos is not defined").

---

## ⌨️ Paso 2 — TAREA 2

Busca:

```jsx
  const recoger = (desecho) => {

  };
```

Escribe adentro:

```jsx
  const recoger = (desecho) => {
    setDesechos(desechos.filter((d) => d !== desecho));
  };
```

Note:
**[4 min, acumulado 0:41]**

- **Di:** "`recoger` se ejecuta cuando haces clic en un desecho. `desecho` es el que tocaste. `filter` revisa la lista uno por uno, como cuando revisas cada cosa de tu mochila, y se queda con todo lo que NO es el desecho que tocaste. La `d` es cada desecho mientras `filter` los revisa, y `!==` significa 'no es igual a'. Después, `setDesechos` guarda la lista nueva, más corta".
- **Escribe en vivo:** La única línea. Al final, cuenta los paréntesis en voz alta: "dos paréntesis de cierre y punto y coma".
- **Pregunta:** "Pulgar arriba cuando lo hayas escrito. La playa sigue vacía. Es normal: los botones llegan en la TAREA 3".
- **Atento a:** (1) `===` en vez de `!==` → más adelante, al tocar un desecho desaparecen todos los DEMÁS. (2) Falta el `))` del final → recuadro de error. (3) La línea quedó fuera de las `{ }` de `recoger`.

---

## ⌨️ Paso 3 — TAREA 3

Busca:

```jsx
      <div className="botones-desechos">
        {/* TAREA 3: Crea un botón para cada desecho. */}
      </div>
```

Escribe dentro del `div`:

```jsx
        {desechos.map((desecho) => (
          <button key={desecho} onClick={() => recoger(desecho)}>
            Recoger {desecho}
          </button>
        ))}
```

Note:
**[5 min, acumulado 0:46]**

- **Di:** "Ahora viene la magia. `map` recorre la lista y crea un botón por cada desecho. Entra una lista y sale un botón por cada elemento. Cada botón necesita una `key`, como una etiqueta con su nombre, para que React pueda distinguir los botones. Cuando haces clic en un botón, se llama a `recoger` con ese desecho".
- **Escribe en vivo:** Reemplaza la línea del comentario de la TAREA 3 por las 5 líneas. Escribe despacio y di en voz alta los paréntesis y las llaves.
- **Di:** "Ahora todo funciona a la vez: ¡4 botones, y al hacer clic en uno se recoge!".
- **Pregunta:** "Recoge todos los desechos. Pulgar arriba cuando veas '¡La playa está limpia!'".
- **Atento a:** (1) Llaves `{ }` después de `=>` en vez de paréntesis `( )` → no aparecen botones y no hay error. (2) `onClick={recoger(desecho)}` sin `() =>` → dice '¡La playa está limpia!' de inmediato, sin botones. (3) Faltan las `{ }` alrededor de `desechos.map(...)` → la app se pone en blanco (la consola dice "desecho is not defined"). (4) Falta la `key` → funciona, pero sale un aviso en la consola ("Each child in a list should have a unique key prop"). Agrégala de todos modos.

---

## Punto de control ✅

<img src="../media/checkpoint-beach.png" alt="La tarjeta de Limpieza de las Playas con cuatro botones Recoger" width="40%">

- 4 botones, uno por cada desecho
- Haz clic en uno → desaparece
- Todos recogidos → **¡La playa está limpia!**

Note:
**[2 min, acumulado 0:48]**

- **Di:** "Pruébalo: cuatro botones; haz clic en uno y desaparece; recógelos todos y la playa queda limpia".
- **Haz:** Camina por el salón y mira las pantallas.
- **Pregunta:** "Pulgar arriba si funciona, pulgar de lado si no".
- **Para ponerse al día:** "Si te quedaste atrás, abre **▶ Muestra el archivo completo** en la sección **¿Atascado?** de la página de la Actividad 2, cópialo y pégalo encima de todo Playa.jsx". No esperes más de 2 minutos por un solo estudiante.
- **Atento a:** Todos los botones dicen "Recoger desecho" → escribieron `Recoger desecho` sin llaves. Tiene que ser `Recoger {desecho}`.

---

## Tu turno ✨

- Agrega **tu propio** desecho a la lista de la TAREA 1
- Usa comillas `" "` y una coma
- ¿Emojis? **Windows + .** o **Ctrl + Cmd + Espacio**
- ¿Te quedaste atrás? En **¿Atascado?**, abre **▶ Muestra el archivo completo**

Note:
**[2 min, acumulado 0:50]**

- **Di:** "Agrega tu propio desecho: un zapato viejo, una bolsa, una tapa de botella. Aparece un botón nuevo solito, porque `map` crea un botón por cada elemento de la lista".
- **Muestra:** Agrega una línea nueva `"👟 Zapato viejo",` justo después de `"📄 Papel",` (antes de `]);`). Los emojis son opcionales, pero las comillas y la coma no.
- **Pregunta:** "¡Pulgar arriba cuando aparezca tu botón nuevo! ¿Qué agregaste?".
- **Resumen antes de seguir:** "En la Actividad 2 guardaste una lista en el estado. `filter` saca cosas y `map` crea un botón por cada cosa".
- **Atento a:** (1) Falta una coma o unas comillas → recuadro de error. (2) Dos desechos con el mismo nombre → desaparecen juntos, y la consola avisa que hay dos elementos con la misma key ("Encountered two children with the same key").

---

## Actividad 3: Rescata a los perezosos 🦥

<img src="../media/Perezoso.png" alt="Un perezoso colgado de una rama con una laptop, junto a Sharky" width="30%">

- ¡Los perezosos se mueven tan despacio que les crecen algas en el pelaje!
- Abre `src/components/Perezosos.jsx`

Note:
**[2 min, acumulado 0:52]**

- **Di:** "Última parada: ¡el bosque lluvioso! En Costa Rica hay dos tipos de perezosos: el de dos dedos y el de tres dedos. Se mueven tan despacio que en su pelaje crecen algas, unos seres vivos diminutos parecidos a plantas, que los ayudan a esconderse en los árboles. Algunos perezosos necesitan nuestra ayuda. Abre Perezosos.jsx".
- **Pregunta:** "Pulgar arriba cuando tengas Perezosos.jsx abierto".
- **Atento a:** Esta es la actividad más difícil. Si vas corto de tiempo, mira "Si te falta tiempo" en la guía para instructores: puedes hacer esta actividad como demostración en vez de programarla todos juntos.

---

## Componentes dentro de componentes 🧩

- `Perezoso` (pequeño) = **una** tarjeta de perezoso
- `Perezosos` (grande) = toda la zona de rescate
- Haces una tarjeta y la usas muchas veces, como un molde de galletas 🍪

Note:
**[2 min, acumulado 0:54]**

- **Di:** "¿Te acuerdas de los bloques de LEGO? Este archivo tiene dos componentes. El pequeño, `Perezoso` sin s, dibuja UNA tarjeta. El grande, `Perezosos` con s, es toda la zona de rescate, y usa al pequeño. Escribimos la tarjeta una vez y la usamos todas las veces que queramos, como un molde de galletas: un molde, muchas galletas".
- **Haz:** Recorre tu archivo y señala `function Perezoso` y `export default function Perezosos`.
- **Pregunta:** "¿Cuál dibuja una sola tarjeta: Perezoso o Perezosos?" (Respuesta: Perezoso).
- **Atento a:** Confundir Perezoso con Perezosos. Una letra, gran diferencia.

---

## Props = información que le das a un componente

```jsx
function Perezoso({ nombre, rescatado, onRescatar }) {
```

- `nombre`: el nombre del perezoso
- `rescatado`: ¿ya está a salvo? (true o false: sí o no)
- `onRescatar`: qué hacer cuando haces clic en **Rescatar**

Note:
**[2 min, acumulado 0:56]**

- **Di:** "¿Cómo sabe una tarjeta qué perezoso es? Le damos información, como si le pusiéramos una etiqueta con su nombre. Esa información se llama props. La tarjeta Perezoso recibe tres props: su nombre, si ya está rescatado y qué hacer cuando alguien hace clic en Rescatar. Mira más abajo en el archivo: `<Perezoso nombre="Mau" ... />`. Ahí le damos el nombre de Mau a la tarjeta".
- **Haz:** Señala en tu editor la tarjeta de Mau: las 5 líneas que van de `<Perezoso` a `/>`, dentro de `<div className="lista-perezosos">`.
- **Pregunta:** "¿Cómo se llama el perezoso de esa tarjeta?" (Respuesta: Mau).
- **Atento a:** Estudiantes mayores que pregunten por las `{ }` en `({ nombre, rescatado, onRescatar })`. Una frase basta: "Las llaves sacan las props de la bolsa por su nombre".

---

## Ya está escrito para ti: rescatar

```jsx
  const [rescatados, setRescatados] = useState([]);

  const rescatar = (nombre) => {
    if (!rescatados.includes(nombre)) {
      setRescatados([...rescatados, nombre]);
    }
  };
```

Note:
**[2 min, acumulado 0:58]**

- **Di:** "Esta parte no la escribes tú. `rescatados` es una lista en el estado, como los desechos, pero empieza vacía: `[]`. Cuando rescatas un perezoso, su nombre se agrega a la lista. `includes` pregunta: ¿este nombre ya está en la lista? El `!` significa 'no'. Entonces: si todavía no está rescatado, agrégalo. Los tres puntos `...` significan 'todo lo que ya está en la lista', más el nombre nuevo".
- **Pregunta:** "Haz clic en Rescatar en la tarjeta. ¿Qué pasa?" (Se pone verde y dice "¡A salvo!").
- **Atento a:** Estudiantes que cambian este código. No hace falta cambiarlo.

---

## ⌨️ Paso 1 — TAREA 1

Busca esta línea:

```jsx
      <h3>🦥 Un perezoso</h3>
```

Cámbiala por:

```jsx
      <h3>🦥 {nombre}</h3>
```

Note:
**[3 min, acumulado 1:01]**

- **Di:** "La tarjeta siempre dice 'Un perezoso'. Vamos a usar la prop `nombre`. Las llaves dentro de JSX significan: esto es código, no texto, así que muéstrame lo que vale `nombre`".
- **Escribe en vivo:** Cambia `Un perezoso` por `{nombre}`. Deja el emoji.
- **Pregunta:** "¡Pulgar arriba cuando tu tarjeta diga 🦥 Mau!".
- **Atento a:** (1) `nombre` sin llaves → la tarjeta dice "nombre". (2) `{Nombre}` con N mayúscula → la app se pone en blanco (la consola dice "Nombre is not defined"). (3) Borraron sin querer el emoji o el `<h3>` → Ctrl+Z.

---

## ⌨️ Paso 2 — TAREA 2

- Borra las 5 líneas de la tarjeta de Mau, de `<Perezoso` a `/>`
- Escribe esto en su lugar:

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

Note:
**[5 min, acumulado 1:06]**

- **Di:** "Ahora mismo escribimos a mano una sola tarjeta, la de Mau. Pero la lista `perezosos` tiene 4: Mau, Rick, Luna y Toby. El mismo truco de la playa: `map` recorre la lista y crea una tarjeta Perezoso por cada nombre. Cada tarjeta recibe una key, su nombre, si está rescatado y la función para rescatar".
- **Escribe en vivo:** Borra las 5 líneas de la tarjeta de Mau y escribe las 8 líneas. Cuando escribas `nombre={nombre}`, di: "el nombre de la izquierda es la etiqueta; el de la derecha es el perezoso de la lista".
- **Pregunta:** "Pulgar arriba cuando veas 4 tarjetas de perezosos. Rescátalos a todos. ¿Ves '¡Has rescatado a todos los perezosos!'?".
- **Atento a:** (1) Dejaron la tarjeta de Mau → 5 tarjetas, Mau dos veces. (2) `<perezoso` con p minúscula → no aparece ninguna tarjeta (React cree que es una etiqueta HTML). (3) `rescatados.includes("nombre")` con comillas → las tarjetas nunca se ponen verdes. (4) Falta el `/>` o el `))}` → recuadro de error.
- **Para ponerse al día:** "Si te quedaste atrás, abre **▶ Muestra el archivo completo** en la sección **¿Atascado?** de la página de la Actividad 3".

---

## Punto de control ✅

<img src="../media/checkpoint-sloths.png" alt="Cuatro tarjetas de perezosos con nombres; dos están verdes y dicen ¡A salvo!" width="45%">

- 4 tarjetas, cada una con un nombre
- **Rescatar** → la tarjeta se pone verde ✅
- Los 4 → **¡Has rescatado a todos los perezosos!**

Note:
**[2 min, acumulado 1:08]**

- **Di:** "Pruébalo: cuatro tarjetas con nombres; Rescatar las pone verdes; y después de las cuatro sale el mensaje final".
- **Haz:** Camina por el salón y mira las pantallas.
- **Pregunta:** "¡Pulgar arriba si todos tus perezosos están a salvo!".
- **Para ponerse al día:** Pulgar de lado → en la página de la Actividad 3, sección **¿Atascado?**, abre **▶ Muestra el archivo completo** y pégalo encima de todo Perezosos.jsx. No esperes más de 2 minutos por un solo estudiante.
- **Atento a:** Tarjetas que nunca se ponen verdes (mira `includes("nombre")` en la diapositiva anterior).

---

## Tu turno ✨

```jsx
  const perezosos = ["Mau", "Rick", "Luna", "Toby"];
```

- Agrega un perezoso con un nombre **inventado por ti**
- ¿Te quedaste atrás? En **¿Atascado?**, abre **▶ Muestra el archivo completo**

Note:
**[2 min, acumulado 1:10]**

- **Di:** "Agrega un quinto perezoso. Ponle el nombre que quieras: el tuyo o el de tu mascota. Aparece una tarjeta nueva solita. Y fíjate: ahora tienes que rescatar 5 perezosos para ver el mensaje final. El código compara con `perezosos.length`, así que cuenta por ti".
- **Muestra:** `"Toby"` se convierte en `"Toby", "Pura Vida"` (cualquier nombre, entre comillas y después de una coma; la página usa el mismo ejemplo).
- **Pregunta:** "Pulgar arriba cuando veas 5 tarjetas. ¿Quién nos cuenta cómo se llama su perezoso?".
- **Resumen antes de seguir:** "En la Actividad 3 hiciste un componente pequeño y lo usaste muchas veces, pasándole props".
- **Atento a:** (1) Faltan las comillas o la coma → recuadro de error. (2) Dos perezosos con el mismo nombre → se ponen verdes juntos.
- **¿Poco tiempo?** Sáltate esta diapositiva.

---

## Lo que aprendimos 🎓

- 🐢 **Estado:** `useState` le da memoria a React
- 🏖️ **Listas:** `filter` saca cosas y `map` crea algo por cada elemento
- 🦥 **Componentes + props:** una tarjeta, usada muchas veces
- ¡Creaste una app de React de verdad! 🎉

Note:
**[2 min, acumulado 1:12]**

- **Di:** "¡Mira lo que creaste! Usaste el estado para que React recuerde cosas, listas con filter y map, y componentes con props. Son las mismas herramientas que usan los programadores en apps reales todos los días".
- **Pregunta:** "¿Cuál fue tu actividad favorita? ¿Tortugas, playa o perezosos? Muéstrame con los dedos: 1, 2 o 3".
- **Atento a:** Estudiantes que todavía están terminando. Déjalos; los archivos completos están en cada página.

---

## Sigue explorando 🧭

<img src="../media/Cafe.png" alt="Sharky relamiéndose junto a dos granos de café" width="22%"> <img src="../media/Volcan.png" alt="Sharky sorprendido junto a un volcán en erupción" width="28%">

- **Extra: Finca de café** ☕ y **Extra: Volcán Arenal** 🌋
- Primero, actívalas en `App.jsx` (las páginas extra te explican cómo)
- Aprende más React en **es.react.dev**

Note:
**[2 min, acumulado 1:14]**

- **Di:** "¿Quieres más? Hay dos actividades extra en la página del taller. En la finca de café sigues el café desde la planta hasta la taza. Costa Rica es famosa por su café, de lugares como Tarrazú. En el volcán Arenal rescatas animales usando todo lo que aprendiste. ¡El Arenal estuvo en erupción desde 1968 hasta 2010! Las páginas extra te muestran cómo activarlas en App.jsx".
- **Haz:** Los que terminan rápido pueden empezar una actividad extra ahora. Los demás pueden hacerlas en casa: las páginas funcionan solas.
- **Pregunta:** "¡Pulgar arriba si quieres probar una actividad extra!".
- **Atento a:** En App.jsx hay que borrar las `//` al inicio de la línea del import Y las `{/* */}` alrededor de la etiqueta. Solo el import → no aparece nada nuevo. Solo la etiqueta → la app se pone en blanco ("FincaCafe is not defined"). Si quitan las `{ }` pero dejan `/* */` → `/*` y `*/` aparecen como texto.

---

## ¡Pura vida! 🇨🇷

<img src="../media/Sharky.png" alt="Sharky, un tiburón anaranjado que sonríe" width="20%">

- ¡Lo lograste! Gracias por viajar con Sharky
- Mira la [app terminada](https://stackblitz.com/github/NuevoFoundation/workshops/tree/master/workshopcode/espanol/aventura-react-solution?file=src%2FApp.jsx)
- Las páginas del taller siguen en línea: ¡sigue programando en casa!

Note:
**[1 min, acumulado 1:15]**

- **Di:** "'Pura vida' es lo que dicen en Costa Rica para saludar, para despedirse y para decir 'la vida es buena'. Hoy creaste una app con React. ¡Pura vida, programadoras y programadores!".
- **Haz:** Si los estudiantes quieren guardar su código, StackBlitz tiene un botón Fork que guarda una copia en una cuenta gratuita. Si no, pueden abrir la app terminada cuando quieran.
- **Pregunta:** "¡Un último pulgar arriba si te divertiste!".
- **Atento a:** Antes de que cierren la pestaña, recuérdales que las páginas y el enlace del proyecto inicial van a seguir ahí la próxima vez.
