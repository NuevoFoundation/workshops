---
title: "Guía para instructores"
hidden: true
weight: 21
draft: false
---

Los estudiantes (de 10 a 18 años, sin saber React) crean una pequeña app de React en un viaje a Costa Rica con Sharky: salvan tortugas (estado), limpian una playa (una lista en el estado, `filter` y `map`) y rescatan perezosos (componentes y props). Todos abren el mismo proyecto inicial en StackBlitz: no hay nada que instalar, `App.jsx` ya está conectado y cada archivo tiene comentarios numerados que dicen `TAREA`. En cada TAREA, tú la explicas, la escribes en vivo, los estudiantes la escriben, revisas los pulgares y sigues. Dura unos 75 minutos, con un máximo de 90. Las mismas páginas sirven para avanzar a su propio ritmo, y cada actividad termina con el archivo completo, así que nadie se queda atrás por mucho tiempo.

## Enlaces

- **Páginas para estudiantes:** [Abre tu proyecto inicial](../get-started/) · [Actividad 1](../activity-1/) · [Actividad 2](../activity-2/) · [Actividad 3](../activity-3/) · [¡Lo lograste!](../finish/) · [Extra 1](../bonus-1/) · [Extra 2](../bonus-2/). Dirección pública: `workshops.nuevofoundation.org/es/aventura-react`
- **Diapositivas:** [../slides/](../slides/). Presiona **S** para ver las notas del presentador (permite las ventanas emergentes). Las notas de cada diapositiva tienen el tiempo, qué decir, qué escribir, una pregunta para revisar cómo van y los errores a los que hay que estar atento.
- **Proyecto inicial (lo que abren los estudiantes):** [Proyecto inicial en StackBlitz](https://stackblitz.com/github/NuevoFoundation/workshops/tree/main/workshopcode/espanol/aventura-react?file=src%2Fcomponents%2FTortugas.jsx)
- **App terminada (para la demostración):** [App terminada en StackBlitz](https://stackblitz.com/github/NuevoFoundation/workshops/tree/main/workshopcode/espanol/aventura-react-solution?file=src%2FApp.jsx)
- **Respuestas:** [../answer-key/](../answer-key/)

## Antes de la sesión

- **El día anterior, haz una prueba en las computadoras y la red del lugar.** Abre el enlace del proyecto inicial y espera a que la app aparezca a la derecha (la primera carga instala paquetes y tarda uno o dos minutos). Luego haz clic en "Salvar tortuga". StackBlitz necesita una versión reciente de Chrome, Edge o Firefox, y a veces las redes de las escuelas lo bloquean. Si falla, pide al equipo de informática que permita StackBlitz o lleva un punto de acceso móvil.
- **Decide cómo les vas a dar el enlace.** Mándalos a la página "Abre tu proyecto inicial" o pega el enlace del proyecto inicial en el chat. Diles que lo abran **una sola vez** y que usen **esa única pestaña** toda la sesión. Si abren el enlace otra vez, empiezan con una copia nueva y vacía.
- **Haz tú las tres actividades una vez** en el proyecto inicial (unos 20 minutos), para que sepas dónde está cada TAREA.
- **Abre tus pestañas:** las diapositivas (presiona **S**), tu propio proyecto inicial, la app terminada (la muestras en la diapositiva 4) y las páginas de las actividades 1 a 3 (para mostrar la sección **¿Atascado?**).
- **Agranda la letra de tu editor** para que la última fila pueda leer tu código.
- **Prepara a tus ayudantes** con la tabla de errores comunes de abajo.

## Tiempos

| Parte | Diapositivas | Minutos | Deberías ir en |
|---|---|---|---|
| Bienvenida, historia y abrir el proyecto inicial | 1–8 | 10 | 0:10 |
| Actividad 1: Salva las tortugas (`Tortugas.jsx`, estado) | 9–16 | 20 | 0:30 |
| Actividad 2: Limpia la playa (`Playa.jsx`, listas, `filter`, `map`) | 17–23 | 20 | 0:50 |
| Actividad 3: Rescata a los perezosos (`Perezosos.jsx`, componentes, props) | 24–31 | 20 | 1:10 |
| Cierre y actividades extra | 32–34 | 5 | 1:15 |
| Margen para problemas al abrir el proyecto y preguntas | | hasta 15 | 1:30, sin falta |

Cada nota del presentador empieza con una marca como `[3 min, acumulado 0:17]`: los minutos de esa diapositiva y el tiempo total en que deberías ir al pasar a la siguiente. Si vas más de 5 minutos atrasado, mira "Si te falta tiempo" más abajo.

## Cómo dar la clase programando juntos

Usa el mismo ritmo en cada TAREA (las diapositivas marcadas con ⌨️):

1. **Explica** la TAREA en una frase, más la comparación de las notas (el marcador, la mochila, el molde de galletas).
2. **Escribe la misma TAREA en vivo** en tu StackBlitz. Ve despacio y di en voz alta los paréntesis, los corchetes y las llaves.
3. **Los estudiantes escriben.** La diapositiva muestra el código exacto. La página muestra el mismo código en "Paso 1 — TAREA 1", y así con las demás.
4. **Revisa con los pulgares** ("pulgar arriba cuando tu contador suba"). Busca a quien no tenga el pulgar arriba.
5. **Sigue adelante.** Nunca esperes más de unos 2 minutos por un solo estudiante. Quien se quede atrás (o un ayudante) abre **▶ Muestra el archivo completo** en la sección **¿Atascado?** al final de la página de la actividad, lo copia, hace clic en su archivo, selecciona todo (Ctrl+A) y pega. Ya está al día. La lista **¿No funciona?** de cada página cubre los errores más comunes.

Cosas que conviene avisar desde antes:

- **Playa:** no aparece nada hasta la TAREA 3, y entonces todo funciona a la vez. Es normal.
- **Parte del código ya está escrito:** el `? :` en `Tortugas.jsx`, y `rescatados` y `rescatar` en `Perezosos.jsx`. Explícalo, pero los estudiantes no lo escriben.
- **El editor puede agregar solo los paréntesis, las llaves y las comillas de cierre.** Fíjate que no queden `))` o `}}` repetidos.
- **Nadie debe recargar la pestaña del navegador ni volver a hacer clic en el enlace del proyecto inicial.** Si un cambio no aparece a la derecha, presiona Ctrl+S (Cmd+S en Mac) para guardar el archivo.
- **Las mayúsculas importan:** el componente es `Tortugas` y la variable es `tortugas`; la tarjeta es `Perezoso` y la zona de rescate es `Perezosos`.

## Edades mezcladas (10 a 18 años)

- **Los más pequeños (10 a 12):** ponlos en parejas. Uno escribe y el otro lee la página en voz alta, y cambian en cada actividad. Felicítalos cuando copien el código exactamente igual. No necesitan entender cada símbolo.
- **Los mayores o los más rápidos:** dales el reto **Tu turno** al final de cada actividad y luego las actividades extra (primero la finca de café y después el volcán Arenal, que tiene menos pistas). Pídeles que ayuden a un compañero explicándole, no escribiendo por él. Las notas tienen preguntas extra para ellos ("explica el `?` y los `:`").
- No frenes al grupo por el estudiante más rápido ni por el más lento. Las páginas dejan que cada quien avance a su ritmo.

## Errores comunes

Los errores de código de abajo se probaron en el proyecto inicial. Los mensajes que aparecen en el recuadro rojo o en la consola salen en inglés, tal como los verán los estudiantes. Los marcados como "consola" solo aparecen en la consola del navegador (**F12 → Console**); la app solo se ve mal.

| Lo que ve el estudiante | Causa | Solución |
|---|---|---|
| Recuadro rojo encima de la app: "Unexpected token" con un archivo y un número de línea | Falta un `)`, `}`, `]` o `"` | Revisa esa línea y las anteriores. Si falta una `}`, el número de línea muchas veces señala el final del archivo. Compara con la página. |
| Recuadro rojo: "Identifier 'tortugas' has already been declared" (el nombre ya existe) | Escribió la línea nueva de la TAREA 1 pero dejó `const tortugas = 0;` | Borra la línea vieja. |
| Recuadro rojo en la lista de desechos: "Unexpected token, expected ','" o "Unterminated string constant" | TAREA 1 de Playa: olvidó el `)` de `]);`, o borró unas comillas o una coma | La última línea de la lista tiene que ser `]);`, y cada desecho necesita sus comillas y su coma. |
| Toda la app se pone en blanco, sin recuadro rojo | Código que falla al ejecutarse: `usestate`, `Tortugas` con mayúscula en la TAREA 1, `{Nombre}`, líneas escritas fuera de las `{ }` de una función, o faltan las `{ }` alrededor de `desechos.map(...)` | Ctrl+Z. La consola dice qué pasó, por ejemplo "usestate is not defined", "tortugas is not defined", "Too many re-renders" o "desecho is not defined". |
| El contador salta solo a 10 y Reiniciar misión no hace nada | Escribió el `if` de la TAREA 2 debajo de `};`, fuera de `salvarTortuga` | Mueve esas líneas dentro de las `{ }` de `salvarTortuga`. |
| El contador de tortugas se queda en 0 | No hizo la TAREA 2 (`salvarTortuga` está vacía), o tiene un error de escritura en la TAREA 1 (consola: "setTortugas is not defined") | Haz la TAREA 2. Revisa que `setTortugas` tenga T mayúscula en los dos lugares. |
| "Reiniciar misión" no hace nada | No hizo la TAREA 3, la escribió dentro de `salvarTortuga`, o escribió `setTortugas = 0` (consola: "Assignment to constant variable") | `setTortugas(0);` dentro de `reiniciar`. |
| No aparece nada en la playa | Todavía no hace la TAREA 3. Es normal. | Haz la TAREA 3. Si ya la hizo: usó `{ }` después de `=>` en vez de `( )`. |
| "¡La playa está limpia!" de inmediato, sin botones | `onClick={recoger(desecho)}` | `onClick={() => recoger(desecho)}` |
| Hacer clic en un desecho no hace nada | No hizo la TAREA 2, o no hizo la TAREA 1 (consola: "setDesechos is not defined") | Termina la TAREA 1 y la TAREA 2. |
| Al tocar un desecho desaparecen todos los demás | `===` en vez de `!==` en `filter` | `d !== desecho` |
| Todos los botones dicen "Recoger desecho" | Faltan las llaves | `Recoger {desecho}` |
| La tarjeta del perezoso dice "🦥 nombre" | Faltan las llaves | `<h3>🦥 {nombre}</h3>` |
| 5 tarjetas de perezosos, Mau dos veces | Dejó la tarjeta de Mau escrita a mano (`<Perezoso nombre="Mau" … />`, 5 líneas) | Bórrala. |
| Ninguna tarjeta de perezoso, sin error | `<perezoso` con p minúscula | `<Perezoso` |
| Rescatar nunca pone verde la tarjeta | `rescatados.includes("nombre")` con comillas | `rescatados.includes(nombre)` |
| Consola: "Each child in a list should have a unique key prop" (cada elemento de una lista necesita su propia key) | Olvidó `key=` | La app sigue funcionando. Agrega la `key`. |
| La actividad extra no aparece / la app en blanco / se ve `/*` como texto | Solo quitó el comentario del import (no aparece nada), solo el de la etiqueta (en blanco, "FincaCafe is not defined"), o dejó los `/* */` | Borra las `//` del import **y** todas las `{/* */}` alrededor de la etiqueta. |
| El estudiante ve otra vez el proyecto inicial vacío | Volvió a hacer clic en el enlace del proyecto inicial o abrió una pestaña nueva | Vuelve a la pestaña anterior. Si ya no está, pega los archivos completos de las secciones **¿Atascado?**. |
| Un cambio no aparece | El archivo todavía no se guardó | Ctrl+S (Cmd+S en Mac). |
| El lado derecho sigue vacío | La primera carga todavía está instalando, StackBlitz está bloqueado o el navegador es muy viejo | Espera 1 o 2 minutos. Si no carga, sienta al estudiante con un compañero. |

## Si te falta tiempo

- **Lo primero que puedes quitar:** el **Tu turno** de la Actividad 3 (diapositiva 31), y luego los otros Tu turno. Los estudiantes pueden hacerlos en casa.
- **Si vas 10 minutos o más atrasado:** haz la Actividad 3 como demostración en vez de programarla todos juntos. Tú escribes mientras ellos miran, y luego pegan el `Perezosos.jsx` completo desde **▶ Muestra el archivo completo**, en la sección **¿Atascado?** de la página, y hacen clic en Rescatar.
- **Si vas muy atrasado (problemas para abrir el proyecto):** termina la Actividad 2, muestra la app terminada y haz el cierre. La Actividad 3 y las actividades extra se pueden hacer en casa, a su propio ritmo.
- **Nunca quites el cierre.** Terminar con "creaste una app de React de verdad" es lo más importante de la sesión.
- **¿Te sobra tiempo?** Los que terminan rápido empiezan el Extra 1 (la finca de café). El volcán es una ronda de práctica con menos pistas.
