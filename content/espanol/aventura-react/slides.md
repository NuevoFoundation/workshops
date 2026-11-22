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
- **Haz:** Ábrelo tú también en el proyector para que vean qué esperar. Si hay un chat, pega el enlace directo: https://workshops.nuevofoundation.org/es/aventura-react/open-starter/
- **Pregunta:** "Pulgar arriba cuando veas código en tu pantalla. No pasa nada si el lado derecho todavía está cargando".
- **Atento a:** (1) La primera carga instala cosas y puede tardar uno o dos minutos. Diles que esperen y que no vuelvan a hacer clic. (2) Una computadora donde StackBlitz no abre (navegador viejo, red bloqueada): sienta a ese estudiante con un compañero de inmediato. No lo arregles ahora.

---

## Lo que vamos a crear hoy

<img src="../media/finished-app.png" alt="La app terminada de Mi aventura en Costa Rica, con el juego de las tortugas, la limpieza de la playa, el rescate de los perezosos y las dos actividades extra" width="45%">

🐢 Salva tortugas · 🏖️ Limpia una playa · 🦥 Rescata perezosos

Note:
**[1 min, acumulado 0:05]**

- **Di:** "Mientras carga tu proyecto, te muestro adónde vamos. Tu app va a tener tres partes: un juego de tortugas con un contador, una playa donde haces clic en la basura para recogerla y unas tarjetas de perezosos que puedes rescatar. Ahora mismo los botones no funcionan. Tú vas a encender cada parte".
- **Haz:** Muestra la app terminada en vivo en tu otra pestaña y haz clic en algunos botones (20 segundos). Unos botones que se mueven emocionan más que una imagen. App terminada: https://workshops.nuevofoundation.org/es/aventura-react/open-finished/
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
- **Atento a:** Si el lado derecho está vacío, todavía se está instalando. Espera 30 segundos. Nunca vuelvas a hacer clic en el botón del proyecto inicial ni recargues la pestaña. Más adelante, si un cambio no aparece a la derecha, presiona Ctrl+S (Cmd+S en Mac) para guardar el archivo.

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
- 🔍 en una diapositiva = lo descubrimos juntos · 💡 = una pista

Note:
**[2 min, acumulado 0:12]**

- **Di:** "Primera parada: el Parque Nacional Tortuguero, en la costa del Caribe. Cada año, miles de tortugas verdes salen del mar a esta playa para poner sus huevos. Nuestra misión: ¡salvar 10 tortugas! Abre el archivo Tortugas.jsx. Cuando veas la lupa en una diapositiva, no te voy a dar el código. Vamos a mirar el código que ya está ahí y a descubrir juntos la parte que falta. Si nos atascamos, tengo pistas".
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

## 🔍 TAREA 1: ¿Por qué se queda en 0?

```jsx
  const tortugas = 0;
```

🗣️ ¿Qué tipo de variable es `tortugas`? ¿Qué necesita React en su lugar?

<div class="fragment clue">

💡 Mira la primera línea del archivo. ¿Qué herramienta de React está esperando ahí?

</div>

<div class="fragment clue">

💡 `useState` te da **dos** cosas: el valor y una función que lo cambia. El nombre de esa función empieza con `set`

</div>

<div class="fragment clue">

💡 Completa los espacios:

```jsx
  const [tortugas, set________] = useState(___);
```

</div>

Note:
**[4 min, acumulado 0:18]**

- **Plantea:** "Haz clic en Salvar tortuga. No pasa nada, y es a propósito. Con lo que acabamos de aprender: ¿qué tipo de variable es `tortugas`? ¿Qué necesita React en su lugar?". Dales 30 segundos para hablarlo con un compañero y luego escucha 2 o 3 respuestas. Buscas "es una variable normal" y "tiene que ser estado".
- **Pistas:** Presiona → para mostrar una pista a la vez, solo cuando el grupo lleve unos 30 segundos atascado. Deja de mostrar pistas en cuanto alguien lo tenga.
- **Constrúyelo con el grupo:** Cuando un estudiante tenga la línea, pídele que te la dicte mientras la escribes en tu StackBlitz, diciendo cada parte en voz alta. Luego todos la escriben.
- **Respuesta (no la muestres en la diapositiva):** `const [tortugas, setTortugas] = useState(0);` reemplaza a `const tortugas = 0;`. `tortugas` es el número que React recuerda, `setTortugas` es el botón del marcador que lo cambia y `0` es donde empieza.
- **Di:** "Todavía no cambia nada en la pantalla. ¡No pasa nada! Le dimos memoria a React, pero todavía no la usamos".
- **Pregunta:** "Pulgar arriba cuando tu línea sea igual a la mía y la app siga diciendo 0 de 10".
- **Atento a:** (1) Dejaron la línea vieja y agregaron la nueva → recuadro de error "Identifier 'tortugas' has already been declared" (el nombre `tortugas` ya existe). Borra la línea vieja. (2) `usestate` con s minúscula, o `Tortugas` con T mayúscula dentro de los corchetes → toda la app se pone en blanco. Las mayúsculas importan: el componente es `Tortugas` y la variable es `tortugas`. (3) Paréntesis en vez de corchetes alrededor de `tortugas, setTortugas`.

---

## 🔍 TAREA 2: ¿Qué debe hacer un clic?

```jsx
  const salvarTortuga = () => {

  };
```

🗣️ Esto se ejecuta en cada clic de **Salvar tortuga**. ¿Qué debería pasar? ¿Deberíamos llegar a 11?

<div class="fragment clue">

💡 ¿Cuál de nuestros dos nombres **cambia** el número: `tortugas` o `setTortugas`?

</div>

<div class="fragment clue">

💡 Número nuevo = número viejo **+ 1**, pero solo **si** tenemos menos que `total`. `<` significa "menor que"

</div>

<div class="fragment clue">

💡 Completa los espacios:

```jsx
    if (tortugas ___ total) {
      setTortugas(____________);
    }
```

</div>

Note:
**[5 min, acumulado 0:23]**

- **Plantea:** "`salvarTortuga` es una función: una pequeña lista de instrucciones que se ejecuta cada vez que alguien hace clic. Ahora la lista está vacía. ¿Qué debería pasar cuando haces clic?" (El número sube en uno). "¿Y deberíamos poder salvar 11 tortugas de 10?" (¡No! Hay que parar en `total`).
- **Pistas:** Una a la vez, solo cuando el grupo esté atascado. La primera pista conecta con la TAREA 1: `setTortugas` es el botón del marcador.
- **Constrúyelo con el grupo:** Pide a un estudiante que te dicte la línea del `if` y a otro la de `setTortugas` mientras las escribes en el proyector. Avisa que a veces el editor agrega solo la `}` o el `)` de cierre, así que hay que revisar que no queden dos.
- **Respuesta (no la muestres en la diapositiva):** dentro de `salvarTortuga`: `if (tortugas < total) { setTortugas(tortugas + 1); }`
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
**[2 min, acumulado 0:25]**

- **Di:** "Esta parte ya está escrita. No la escribes tú. Hace una pregunta: ¿`tortugas` es menor que `total`? El `?` significa 'si la respuesta es sí, muestra esto'. Los dos puntos `:` significan 'si no, muestra aquello'. Así que mientras tengas menos de 10, ves el botón 'Salvar tortuga'. Al llegar a 10, ves '¡Todas las tortugas están a salvo!' y un botón 'Reiniciar misión'. Los `<>` y `</>` son una caja invisible que mantiene dos cosas juntas".
- **Haz:** Haz clic en "Salvar tortuga" hasta llegar a 10 en tu pantalla para que vean aparecer el mensaje.
- **Pregunta:** "Haz clic hasta llegar a 10. Pulgar arriba cuando veas '¡Todas las tortugas están a salvo!'. Ahora haz clic en Reiniciar misión. ¿Funciona?" (¡No! Esa es la TAREA 3).
- **Atento a:** Estudiantes que cambian este código. Recuérdales que ya está listo. Para los más rápidos: pídeles que le expliquen el `?` y los `:` a un compañero.

---

## 🔍 TAREA 3: Empieza la misión otra vez

```jsx
  const reiniciar = () => {

  };
```

🗣️ ¿A qué número debe volver el contador? ¿Qué función puede cambiarlo?

<div class="fragment clue">

💡 Ya usaste la función que cambia `tortugas` en la TAREA 2

</div>

<div class="fragment clue">

💡 Esta vez no sumamos nada y no necesitamos un `if`. Solo le damos el número con el que empezamos

</div>

<div class="fragment clue">

💡 Completa los espacios:

```jsx
    set________(___);
```

</div>

Note:
**[3 min, acumulado 0:28]**

- **Plantea:** "Reiniciar tiene que volver a poner el contador como al principio. ¿En qué número?" (0). "¿Qué función cambia el número de tortugas?" (¡`setTortugas`!). Esta es corta: la mayoría de los grupos la resuelve antes de la segunda pista. Dale la palabra a alguien que todavía no haya hablado.
- **Constrúyelo con el grupo:** Un estudiante te dicta la línea mientras la escribes dentro de `reiniciar`.
- **Respuesta (no la muestres en la diapositiva):** `setTortugas(0);` dentro de `reiniciar`.
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
**[1 min, acumulado 0:29]**

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
**[1 min, acumulado 0:30]**

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

## 🔍 TAREA 1: Recuerda una lista completa

```jsx
  const desechos = [
    "🧃 Plástico", … ,
  ];
```

🗣️ Al recoger desechos, esta lista va a cambiar. ¿Cómo hicimos que React recordara las tortugas?

<div class="fragment clue">

💡 El mismo truco de la Actividad 1: `useState`, más una función cuyo nombre empieza con `set`

</div>

<div class="fragment clue">

💡 Los desechos del medio no cambian. Solo cambian la **primera** y la **última** línea. Toda la lista va dentro de `useState( )`, donde estaba el `0`

</div>

<div class="fragment clue">

💡 Completa los espacios:

```jsx
  const [desechos, ___________] = useState([
    "🧃 Plástico", … ,
  ]___;
```

</div>

Note:
**[4 min, acumulado 0:38]**

- **Plantea:** "Cuando recogemos un desecho, la lista se hace más corta. Así que React tiene que recordar esta lista. ¿Cómo hicimos que React recordara las tortugas?" (¡Con `useState`!). "¿Cómo vamos a llamar a la función que cambia `desechos`?" (`setDesechos`).
- **Pistas:** Una a la vez. Lo difícil no es la idea, son los signos: la lista conserva sus `[ ]` y va dentro de `useState( )`.
- **Constrúyelo con el grupo:** Un estudiante te dicta la primera línea y otro la última, mientras cambias solo esas dos líneas. No vuelvas a escribir los emojis.
- **Respuesta (no la muestres en la diapositiva):** primera línea `const [desechos, setDesechos] = useState([`, última línea `]);`. Los cuatro desechos del medio no cambian.
- **Di:** "Todavía no cambia nada en la pantalla. No pasa nada".
- **Pregunta:** "Pulgar arriba cuando tu lista termine en `]);`".
- **Atento a:** (1) Olvidaron el `)` del final → recuadro de error "Unexpected token, expected ','" (la computadora esperaba otra cosa en esa línea). (2) Borraron unas comillas o una coma entre los desechos → recuadro de error (si falta una comilla dice "Unterminated string constant"). (3) `setdesechos` con d minúscula (más adelante, al hacer clic, la consola dirá "setDesechos is not defined").

---

## 🔍 TAREA 2: ¡Recógelo!

```jsx
  const recoger = (desecho) => {

  };
```

🗣️ `desecho` es el que tocaste. ¿Cómo debería quedar la lista nueva? ¿Qué función la guarda?

<div class="fragment clue">

💡 La lista nueva = todos los desechos **menos** el que tocaste

</div>

<div class="fragment clue">

💡 `filter` se queda solo con los elementos que pasan una prueba. `!==` significa "no es igual a":

```jsx
["🍎", "🍌", "🍇"].filter((f) => f !== "🍌")
// → ["🍎", "🍇"]
```

</div>

<div class="fragment clue">

💡 Completa los espacios:

```jsx
    setDesechos(desechos.filter((d) => d ___ _______));
```

</div>

Note:
**[5 min, acumulado 0:43]**

- **Plantea:** "`recoger` se ejecuta cuando haces clic en un desecho, y `desecho` es el que tocaste. Digamos que tocamos el Vidrio. ¿Cómo queda la lista después?" (Plástico, Lata y Papel: todo menos el Vidrio). "¿Qué función guarda una lista nueva?" (`setDesechos`).
- **Pistas:** La segunda pista presenta `filter` con frutas, no con desechos, para que los estudiantes todavía tengan que dar el salto. Comparación: `filter` es como revisar cada cosa de tu mochila y quedarte con todo lo que NO es lo que quieres botar.
- **Constrúyelo con el grupo:** Pregunta: "En el ejemplo de las frutas, ¿qué fue lo que sacamos? ¿Y aquí?" (`desecho`). Un estudiante te dicta la línea mientras la escribes. La `d` es cada desecho mientras `filter` los revisa. Al final, cuenta los paréntesis en voz alta: "dos paréntesis de cierre y punto y coma".
- **Respuesta (no la muestres en la diapositiva):** dentro de `recoger`: `setDesechos(desechos.filter((d) => d !== desecho));`
- **Pregunta:** "Pulgar arriba cuando lo hayas escrito. La playa sigue vacía. Es normal: los botones llegan en la TAREA 3".
- **Atento a:** (1) `===` en vez de `!==` → más adelante, al tocar un desecho desaparecen todos los DEMÁS. (2) Falta el `))` del final → recuadro de error. (3) La línea quedó fuera de las `{ }` de `recoger`.

---

## 🔍 TAREA 3: Un botón por desecho

```jsx
{/* TAREA 3: Crea un botón para cada desecho. */}
```

🗣️ ¿Cómo hacemos un botón para cada desecho?

<div class="fragment clue">

💡 `map` convierte cada elemento de una lista en algo nuevo, como un botón:

```jsx
{["🍎", "🍌"].map((f) => <p key={f}>Me gusta {f}</p>)}
```

</div>

<div class="fragment clue">

💡 Cada botón necesita una `key` (su etiqueta), un `onClick` que llame a `recoger` con **su** desecho, y las palabras `Recoger` más el desecho

</div>

<div class="fragment clue">

💡 Completa los espacios:

```jsx
{desechos.map((desecho) => (
  <button key={_______} onClick={() => _______(_______)}>
    Recoger {_______}
  </button>
))}
```

</div>

Note:
**[5 min, acumulado 0:48]**

- **Plantea:** "Tenemos 4 desechos, así que queremos 4 botones. Podríamos escribir 4 botones a mano. ¿Pero y si alguien agrega un quinto? ¿O 100?". Deja que propongan ideas: "un ciclo", "repetirlo", "uno por cada uno". Cualquiera de esas es la idea correcta. Luego: "Cada botón tiene que saber tres cosas. ¿Cuáles?" (Qué desecho es, qué hacer al hacer clic y qué palabras mostrar).
- **Pistas:** La primera pista muestra `map` con frutas. Comparación: entra una lista y sale un botón por cada elemento. La segunda pista es la lista de lo que necesita cada botón. El `() =>` del `onClick` hace que espere al clic; sin él, todo se recoge de inmediato.
- **Constrúyelo con el grupo:** Escribe primero la línea `{desechos.map((desecho) => (` y su cierre `))}`, y luego pregúntale al grupo qué va en cada espacio dentro del botón. Escribe despacio y di en voz alta los paréntesis y las llaves.
- **Respuesta (no la muestres en la diapositiva):** reemplaza el comentario de la TAREA 3 por:
  `{desechos.map((desecho) => (<button key={desecho} onClick={() => recoger(desecho)}>Recoger {desecho}</button>))}` (en 5 líneas, como en la tercera pista).
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
**[1 min, acumulado 0:49]**

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
**[1 min, acumulado 0:50]**

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

## 🔍 TAREA 1: ¿Quién es este perezoso?

```jsx
function Perezoso({ nombre, rescatado, onRescatar }) {
  …
      <h3>🦥 Un perezoso</h3>
```

🗣️ Todas las tarjetas dicen "Un perezoso". La tarjeta ya **recibe** el nombre del perezoso. ¿Dónde? ¿Cómo lo mostramos?

<div class="fragment clue">

💡 Mira la primera línea: `nombre` es una de las props que recibe la tarjeta

</div>

<div class="fragment clue">

💡 En JSX, las llaves `{ }` significan "esto es código: muestra lo que vale". Ya lo hiciste en la playa: `Recoger {desecho}`

</div>

<div class="fragment clue">

💡 Completa los espacios:

```jsx
      <h3>🦥 ________</h3>
```

</div>

Note:
**[4 min, acumulado 1:02]**

- **Plantea:** "Todas las tarjetas dicen 'Un perezoso'. Pero la tarjeta ya sabe el nombre de su perezoso. ¿Dónde está escondido?" (En las props de la primera línea: `nombre`). "¿Cómo mostramos un valor en vez de texto? Lo hicimos en la playa" (Con llaves, como `Recoger {desecho}`).
- **Pistas:** Una a la vez. La mayoría de los grupos lo resuelve después de la segunda pista.
- **Constrúyelo con el grupo:** Un estudiante te dice qué reemplaza a `Un perezoso`. Escríbelo. Deja el emoji.
- **Respuesta (no la muestres en la diapositiva):** `<h3>🦥 {nombre}</h3>`
- **Para los mayores:** "¿Qué mostraría la tarjeta si escribiéramos `nombre` sin llaves?" (La palabra "nombre").
- **Pregunta:** "¡Pulgar arriba cuando tu tarjeta diga 🦥 Mau!".
- **Atento a:** (1) `nombre` sin llaves → la tarjeta dice "nombre". (2) `{Nombre}` con N mayúscula → la app se pone en blanco (la consola dice "Nombre is not defined"). (3) Borraron sin querer el emoji o el `<h3>` → Ctrl+Z.

---

## 🔍 TAREA 2: 4 perezosos, 1 tarjeta

```jsx
const perezosos = ["Mau", "Rick", "Luna", "Toby"];
<Perezoso nombre="Mau"
  rescatado={rescatados.includes("Mau")}
  onRescatar={rescatar} />
```

🗣️ 4 nombres, solo 1 tarjeta. ¿Dónde resolvimos esto antes?

<div class="fragment clue">

💡 En la playa, `map` creó un **botón** por desecho. Aquí, un `<Perezoso />` por **nombre**

</div>

<div class="fragment clue">

💡 Parte de la tarjeta de Mau: donde dice `"Mau"`, usa el nombre de la lista. Agrega una `key` y luego borra la tarjeta de Mau

</div>

<div class="fragment clue">

💡 Completa los espacios:

```jsx
{perezosos.map((nombre) => (
  <Perezoso key={______} nombre={______}
    rescatado={rescatados.includes(______)}
    onRescatar={rescatar} />
))}
```

</div>

Note:
**[6 min, acumulado 1:08]**

- **Plantea:** "La lista `perezosos` tiene 4 nombres: Mau, Rick, Luna y Toby. Pero solo vemos una tarjeta, porque alguien escribió a mano la de Mau. ¿Dónde ya convertimos una lista en muchas cosas?" (¡En la playa! Con `map`). "¿Qué debería salir de `map` esta vez?" (Una tarjeta `<Perezoso />` por cada nombre).
- **Pistas:** La segunda pista es la gran ayuda: la tarjeta de Mau escrita a mano ya tiene todo, solo que usa `"Mau"` en vez de un nombre de la lista.
- **Constrúyelo con el grupo:** Escribe primero las líneas `{perezosos.map((nombre) => (` y `))}`. Luego pregúntale al grupo qué va en cada espacio, y por qué `nombre` no lleva comillas. Cuando escribas `nombre={nombre}`, di: "el nombre de la izquierda es la etiqueta; el de la derecha es el perezoso de la lista". Al final, borren juntos las 5 líneas de la tarjeta de Mau.
- **Respuesta (no la muestres en la diapositiva):** reemplaza la tarjeta de Mau por
  `{perezosos.map((nombre) => (<Perezoso key={nombre} nombre={nombre} rescatado={rescatados.includes(nombre)} onRescatar={rescatar} />))}`. La página de la actividad pone cada prop en su propia línea; las dos formas funcionan.
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
**[1 min, acumulado 1:09]**

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
**[1 min, acumulado 1:10]**

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
- Mira la [app terminada](../finish/)
- Las páginas del taller siguen en línea: ¡sigue programando en casa!

Note:
**[1 min, acumulado 1:15]**

- **Di:** "'Pura vida' es lo que dicen en Costa Rica para saludar, para despedirse y para decir 'la vida es buena'. Hoy creaste una app con React. ¡Pura vida, programadoras y programadores!".
- **Haz:** Si los estudiantes quieren guardar su código, StackBlitz tiene un botón Fork que guarda una copia en una cuenta gratuita. Si no, pueden abrir la app terminada cuando quieran.
- **Pregunta:** "¡Un último pulgar arriba si te divertiste!".
- **Atento a:** Antes de que cierren la pestaña, recuérdales que las páginas y el botón del proyecto inicial van a seguir ahí la próxima vez.
