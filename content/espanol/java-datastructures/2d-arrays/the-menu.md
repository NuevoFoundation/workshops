---
title: "El Menú"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://youtube.com/embed/LelFnKtml8Q" title="The Menu - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Almacenando Información de Restaurantes

Recordemos el arreglo de restaurantes que hicimos anteriormente en la sección de arreglos. 

![restaurant](../../arrays/img/array2.png)

Como puedes ver, este arreglo contiene todos los distintos restaurantes para nuestra aplicación. Ahora, intentemos hacer que cada restaurante contenga un arreglo de todos sus elementos del menú. Si se hace correctamente, el elemento `0` de nuestro arreglo, "Burger King", debería ahora contener sus respectivos elementos del menú. Podría verse algo así:

![burgerkingarray](../img/2darray2.png)

Como puedes observar, el elemento `0` debería ser nuestro Arreglo de Burger King. Igual que con nuestros arreglos unidimensionales, los elementos de nuestros arreglos tienen un índice empezando desde cero. Si quisiéramos pedir un Whopper, simplemente llamaríamos a `Restaurant[0][0]`. Esto llamaría a nuestro Arreglo de Burger King y al primer elemento de ese arreglo, que es un Whopper. Si quisiéramos papas fritas en nuestro arreglo, entonces llamaríamos a `Restaurant[0][2]`. 

Pregunta: Si quisiéramos pedir un pollo a la naranja y el pollo a la naranja fuera el décimo elemento de nuestro arreglo de Panda Express, ¿cómo podríamos acceder a ese elemento?

Si tu respuesta fue `Restaurant[2][9]`, ¡entonces es correcto! Panda Express es el tercer arreglo `[2]`, y el pollo a la naranja es el décimo elemento `[9]`.