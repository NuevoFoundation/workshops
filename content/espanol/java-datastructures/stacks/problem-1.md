---
title: "Problema 1: Fundamentos de Pilas"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

## Tarea 1: Revertir Usando una Pila

¡Oh, no! ¡Se contrató a un nuevo pasante y desordenó la lista de restaurantes! ¡Los nombres de los restaurantes están en orden **inverso**! Afortunadamente, la pila es la estructura de datos perfecta para resolver esto. ¿Puedes crear una nueva pila en el orden correcto?

{{% notice tip %}}
1. Recuerda que la pila funciona como Último en Entrar, Primero en Salir (LIFO; piensa en una pila de platos).
2. ¿Cómo se ve la pila original?
{{% /notice%}}

```js javascript
// Ejemplo de pila actual
Stack<String> restaurants = new Stack<>();

restaurants.push("McDonalds");
restaurants.push("Carls Jr.");
restaurants.push("Burger King");
restaurants.push("Chipotle");
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/stackReverse" target="_blank">Lanzar Replit</a>

## Tarea 2: Mantener el Historial

Otro uso práctico de la pila es la función de deshacer. ¡Muchos programas hoy en día incluyen un botón de deshacer para registrar los cambios más recientes! ¡La pila es la estructura de datos perfecta para esta función! ¿Puedes crear una función para deshacer el cambio más reciente? Por ejemplo:

```js javascript
// Ejemplo de pila actual
Stack<String> myOrder = new Stack<>();

restaurants.push("Drink");
restaurants.push("Fries");
restaurants.push("Pizza");
restaurants.push("Pizza");

// ¡El usuario pidió una pizza extra! ¿Cómo puedes deshacer el cambio más reciente?

Stack.undo() // Elimina el push más reciente
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/stackUndo" target="_blank">Lanzar Replit</a>