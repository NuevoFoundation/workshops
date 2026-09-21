```markdown
---
title: "Actividad 5 - Analizando el pedido del cliente"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---
## Pre-requisitos
- <a href="../../python-basics/functions" target="_blank">Funciones</a>
- <a href="../../python-basics/conditional-statements-loops/loops/" target="_blank">Bucles</a>

## Analizando el pedido del cliente
¡Tenemos el pedido del cliente y ahora simplemente tenemos que calcular cuánto cuesta su pedido!

### Crear un diccionario a partir del pedido del cliente
La primera función que escribiremos es `createDictOrderItems(listOrderItems)` y toma la lista de artículos en el pedido del cliente como parámetro. Estaremos devolviendo un diccionario de todos los artículos pedidos y sus respectivas cantidades. Actualmente, solo tenemos una lista de cadenas de texto que contienen tanto el nombre del artículo como la cantidad, sin embargo, necesitamos separar esta información y convertir la cantidad en un tipo entero ya que es un número.
  - Primero, creemos un diccionario vacío llamado `dictItems` que eventualmente almacenará esta información.
  - A continuación, escribe un bucle (Hmm, ¿qué tipo de bucle quieres usar?) que recorra todos los elementos del pedido en la lista que pasamos.
  - En este bucle, queremos dividir cada cadena de texto por el `"-"` que está entre el nombre del artículo y la cantidad. Si especificaste un formato diferente con `" : "` o `" - "` o algo más, especifica eso aquí. El primer elemento que obtenemos al dividir la cadena de texto es el nombre del artículo. El segundo elemento que obtenemos es la cantidad, conviértela en un número entero. Almacena ambos valores en variables con nombres útiles como `itemName` y `itemQuantity`.
  - Todavía dentro del bucle, ahora necesitamos agregar esto al diccionario `dictItems`. Sin embargo, recuerda que, dado que un cliente técnicamente puede pedir lo mismo varias veces en pedidos separados, necesitamos combinar eso aquí. Por ejemplo, si el cliente pide Spring Rolls-2 dos veces, debemos interpretar eso como 4 Spring Rolls. Para hacer esto, necesitamos tener un bloque de `if`-`else` donde si el diccionario ya contiene el nombre del artículo, entonces agrega esta nueva cantidad a la cantidad ya asociada con el nombre del artículo; si no, crea un nuevo par clave-valor con el nombre del artículo y la cantidad.
  - Finalmente, después de que este bucle termine, recuerda devolver este diccionario.

### Computar precios desde el diccionario  
La segunda función que vamos a escribir es `computePrices(dictItems)` que toma el diccionario que creamos en la última función como un parámetro y devuelve un nuevo diccionario que tiene cada nombre de artículo asociado con el precio * cantidad.
  - Crea un diccionario vacío `dictItemAndPrice` que contendrá el artículo y el precio total de ese artículo.
  - Recorre los artículos en el diccionario que acabamos de pasar. Dentro de este bucle, queremos obtener la cantidad del artículo de `dictItems`, ya que es el valor en el par clave-valor del diccionario. También queremos acceder al precio del artículo desde la variable global `dictMenu`. Ten en cuenta que es el primer elemento en la lista asociada con el nombre del artículo y necesitamos acceder a él en consecuencia.
  - Multiplica esos dos números para obtener el precio total de ese artículo.
  - Agrega el par de nombre del artículo y precio total al diccionario `dictItemAndPrice`.
  - Devuelve este diccionario.

### Computar el precio total del pedido
La tercera función que crearemos es `computeTotalPrice(dictItemAndPrice)` que toma el diccionario que creamos en `computePrices(dictItems)` como parámetro y devuelve el precio total de todo el pedido del cliente.
  - Inicializa una variable `totalPrice` en `0` para poder sumar los precios de cada artículo.
  - Recorre el diccionario `dictItemAndPrice` y suma cada uno de los valores a `totalPrice`.
  - Devuelve `totalPrice` redondeado a 2 decimales utilizando `round()` y proporciona 2 como segundo valor para redondearlo al lugar de los centésimos, ya que así es como queremos que se muestre el precio final.

Las 3 funciones auxiliares se llamarán en la función `main()` en el bloque `else` en el orden en que las escribimos. El valor que devolvimos para la primera función será el argumento de la segunda función, y el valor devuelto por la segunda función será el argumento de la tercera función, y finalmente, el resultado de la tercera función se utilizará en la próxima actividad. Recuerda almacenar explícitamente cada uno de los resultados de las funciones en variables para que puedas reutilizarlos varias veces.
```