---
title: "Actividad 3 - Dar la Bienvenida al Cliente a tu Restaurante y Mostrar el Menú"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---
## Dar la Bienvenida al Cliente a tu Restaurante y Mostrar el Menú
Ahora que tenemos tanto un banner del restaurante para mostrar al cliente como un menú guardado en tu programa en Python, vamos a mostrar tu menú al cliente y darle la bienvenida. En esta actividad, vamos a escribir 2 funciones auxiliares para lograr esto.

{{% notice info %}}
## Funciones Auxiliares
Las funciones auxiliares son funciones que se llaman dentro de una función principal que ejecuta todo el código para este programa. Cada una de estas funciones auxiliares trabaja hacia un objetivo sencillo.
{{% /notice %}}

La primera función auxiliar que escribiremos será `printMenu()`, una función que iterará a través del diccionario `dictMenu` y generará un menú como el ejemplo mostrado a continuación. Dado que los valores de `dictMenu` son todas listas, con el precio del artículo como el primer elemento y la descripción como el segundo elemento, queremos asegurarnos de que, al imprimir la información de cada artículo, accedamos a cada elemento de esa lista utilizando índices.  
Pista: La descripción del artículo está en una línea separada del nombre y precio del artículo, ¿qué te dice esto?  
Pista 2: Hay un espacio entre cada artículo del menú, ¿cómo logramos eso...?

Ejemplo de Menú:

-----Menú-----

Creamy Pesto Pasta ------ $15.99

Penne pasta mezclada con una cremosa salsa pesto, adornada con aceitunas negras y tomates secos.

Spring Rolls ------ $8.0

Verduras salteadas como repollo y zanahoria mezcladas con vermicelli y tiras finas de tofu frito, envueltas en una capa exterior crujiente.

La segunda función auxiliar que escribiremos es `orderFromRestaurantYN()`, donde tomaremos la entrada del usuario acerca de si quiere pedir algo del menú o no. Recuerda proporcionar al usuario un ejemplo de lo que debe ingresar. Ya sea que ingresen Y para Sí y N para No o sí/no o Sí/No o y/n, esto debe estar especificado para que el cliente sepa cuál es una respuesta válida.

Después de escribir estas funciones, ve adelante y llámalas en tu función `main()` después de imprimir el banner del restaurante.  
Al llamar estas funciones en `main()`, recuerda que mientras el usuario no esté ingresando alguna de las respuestas válidas para `orderFromRestaurantYN()`, debemos decirle que su respuesta no fue en un formato válido, mostrarles el menú nuevamente y, después, pedirles que respondan nuevamente.