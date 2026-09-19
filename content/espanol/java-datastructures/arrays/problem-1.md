---
title: "Problema 1: Conceptos básicos de arreglos"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---
<!--<link rel="stylesheet" href="../../style.css">-->

## Tarea 1: Imprimir

¡Hemos creado un arreglo de restaurantes existentes en nuestro sistema! Necesitamos tu ayuda para imprimir todo y así evitar incluir los mismos restaurantes.

{{% notice tip %}}
1. Usa un bucle `for` para imprimir el contenido del arreglo.
2. Usa el método `length()` para encontrar el tamaño del arreglo.
3. Observa el ejemplo a continuación.
{{% /notice%}}

Si se nos da el siguiente arreglo:

```js javascript
String[] restaurants = { "Burger King", "Chipotle", "Panda Express", "McDonalds" };
```

la respuesta debería imprimirse como:

```js javascript
String answer = "Burger King,Chipotle,Panda Express,McDonalds";
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Problem-1-getRestaurant" target="_blank">Lanzar Replit</a>

## Tarea 2: Cambiar elementos

¡Oh no! ¡McDonalds se quedó sin comida! Cambia la lista de restaurantes antes de que las personas intenten ordenar de McDonalds y se desilusionen al no encontrar comida. Por suerte, "Pizza Hut" está dispuesta a ayudar. Reemplaza McDonalds con Pizza Hut en el índice correspondiente.

{{% notice tip %}}
1. Encuentra primero el índice de McDonalds.
2. Recuerda agregar comillas alrededor de `"Pizza Hut"`.
3. Observa el ejemplo a continuación.
{{% /notice%}}

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "McDonalds"};
//reemplaza "McDonalds" con "Pizza Hut"

```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Problem-2-insertRestaurant" target="_blank">Lanzar Replit</a>