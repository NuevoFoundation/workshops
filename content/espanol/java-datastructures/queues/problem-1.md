---
title: "Problema 1: Conceptos Básicos de Colas"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
--- 
<!--<link rel="stylesheet" href="../../style.css">-->

## Tarea 1: Limpiar la Cola para Nuevos Pedidos

¡Se ha agregado un nuevo restaurante a Nuevo Eats! ¡Han estado llegando nuevos pedidos y la cola está llena! La popularidad de los diferentes tacos creció rápidamente y el restaurante está sobrecargado. ¡Busca una manera de limpiar todos los elementos para salvar al restaurante!

{{% notice tip %}}
1. ¿Cómo puedes iterar a través de la Cola?
2. ¡Intenta limpiar la Cola mientras la recorres!
3. ¡Mira el ejemplo del menú!
{{% /notice%}}

```js javascript
// Esto utiliza una lista como organizador de la cola.
Queue<String> orders = new PriorityQueue<>();

orders.add("Taco de pescado");
orders.add("Taco de res");
orders.add("Taco de pollo");
orders.add("Taco de pescado");
orders.add("Taco de res");
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Clear" target="_blank">Lanzar Replit</a>

## Tarea 2: Usar una Cola de Prioridad para encontrar el precio mínimo

Un restaurante está utilizando una Cola de Prioridad para gestionar los pedidos. El restaurante quiere poder mirar los pedidos basándose en sus precios para preparar mejor las comidas que están haciendo. Específicamente, les gustaría poder encontrar el precio mínimo número "n" actualmente en su lista. Escribe una función que mire su cola de pedidos y devuelva el precio mínimo número "n".

{{% notice tip %}}
1. ¿Cómo te asegurarás de que la lista esté ordenada?
2. ¿Qué hace más fácil encontrar el precio mínimo?
3. ¿Y si están buscando el quinto precio más bajo?
{{% /notice%}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Min" target="_blank">Lanzar Replit</a>