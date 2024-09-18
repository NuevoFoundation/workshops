---
title: "Bucles While"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 3
---

Un bucle `while` es exactamente eso, una sección de código que continúa realizando algunas acciones "mientras" la condición sea verdadera. Comenzamos con la palabra `while` seguida de la condición que es verdadera entre paréntesis `()`, y luego colocamos la acción (o acciones) a realizar dentro de llaves `{}`. Aquí está la configuración:

```javascript
// Configuración del bucle while
while (la condición es verdadera) {
  // acción a realizar
}
```

¡Ahora vamos a ver algunos ejemplos!

## Ejemplos
Digamos que queremos crear un bucle que se ejecute 8 veces.
  
```javascript
// Ejemplo de 8 veces
let i = 0; // establecer una variable de contador
while (i < 8) {
  i++; // pasa a la siguiente iteración del bucle (hace que el bucle se ejecute nuevamente por esta parte)
}
```

La condición también podría ser una declaración, como un booleano (verdadero/falso). Por ejemplo, supongamos que queremos leer diferentes comentarios en un video hasta leerlos todos. Para hacer esto en un bucle while necesitaríamos algunas variables diferentes (puedes ignorar las palabras complicadas de nodo).

```javascript
const commentIterator = video.createNodeIterator(video, NodeFilter.SHOW_COMMENT) // esta es una forma de pasar de un comentario al siguiente en el video
let currentComment; // esto es un marcador de posición para el comentario actual

// este bucle while continuará en bucle mientras haya un "nextNode", que es otra forma de decir que hay otro comentario después de este
while (currentComment = commentIterator.nextNode()) {
  console.log(currentComment.textContent.trim()); // esto imprime el comentario actual para que podamos leerlo!
}
```
