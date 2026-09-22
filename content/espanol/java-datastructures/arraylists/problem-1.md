---
title: "Problema 1: Conceptos básicos de ArrayList"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/unwrTbTILmA" title="Problema 1: Conceptos básicos de ArrayList - Vídeo de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<!--<link rel="stylesheet" href="../../style.css">-->

## Tarea 1: Inserción

¡El camión de tacos ahora está disponible en la calle! Los nuevos empleados tienen dificultades para mantener un registro de todos los diferentes pedidos. ¡Ayúdales a organizar todos los elementos utilizando `ArrayList`!

```js javascript
/*
Dan está ordenando de su taquería favorita:
    - 2 órdenes de "carne asada"
    - 4 órdenes de "carnitas"
    - 1 orden de "pollo"
    - 2 órdenes de "birria"

    Devuelve un ArrayList con todos estos elementos en ese orden.
*/
```

{{% notice tip %}}
1. ¿Cómo puedes agregar elementos a la lista?
2. ¿Qué quiere Dan en su pedido?
{{% /notice %}}

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DInsert?lite=true" title="Problema 1: Conceptos básicos de ArrayList - Editor de Replit 1"></iframe>

## Tarea 2: Obtener elementos

Un restaurante que vende comida china acaba de abrir cerca. Ha llegado una gran cantidad de pedidos y el gerente tiene problemas para mantener todo en orden, por lo que han puesto todo en un `ArrayList`. Ayuda a terminar el programa para devolver el elemento dado en un índice específico.

```js javascript
ArrayList<String> menu = new ArrayList<>(); 

menu.add("Pizza"); 
menu.add("Hotdog"); 
menu.add("Hamburger"); 
menu.add("Hotdog"); 

// Devuelve "Pizza" ya que es el elemento en la posición 0 del menú
item = find(menu, 0);
```

{{% notice tip %}}
1. ¿Cómo puedes iterar sobre la lista?
2. ¡Mira el ejemplo del menú!
{{% /notice%}}

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DFind?lite=true" title="Problema 1: Conceptos básicos de ArrayList - Editor de Replit 2"></iframe>

## Tarea 3: Eliminar elementos

¡El mismo restaurante chino tiene un error en su código! Los pedidos se han duplicado aleatoriamente y el `ArrayList` está lleno de copias de pedidos. Ayuda al dueño escribiendo un programa para eliminar las primeras `n` ocurrencias de un pedido específico en el `ArrayList`.

```js javascript
ArrayList<String> menu = new ArrayList<>(); 

menu.add("Pizza"); 
menu.add("Hotdog"); 
menu.add("Hamburger"); 
menu.add("Pizza");
menu.add("Pizza");
menu.add("Hotdog"); 

// Elimina las dos primeras órdenes de Pizza
item = remove(menu, "Pizza", 2);

// El menú ahora será el siguiente array: {"Hotdog", "Hamburger", "Pizza", "Hotdog"}
```

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DRemove?lite=true" title="Problema 1: Conceptos básicos de ArrayList - Editor de Replit 3"></iframe>