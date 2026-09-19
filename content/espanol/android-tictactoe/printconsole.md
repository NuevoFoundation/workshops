---
title: "Imprimir en la Consola"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 4
---
A veces, el juego o la aplicación puede no funcionar como esperas, o quizás quieras escribir algo en la consola para propósitos de registro. Además de depurar la aplicación, puedes usar `System.out.println()` para escribir tu mensaje. Busca tus mensajes en la ventana "logcat" en la parte inferior de Android Studio:
<img src="../resources/_gen/images/println.gif" height="60%" width="60%" title="System.out.println()" alt="Ventana Logcat en Android Studio mostrando mensajes creados usando la función de registro System.out.printIn"/>

{{% notice tip %}}

## Trabajando Juntos

1. Sin remover las comillas, intenta cambiar `"Restarting the Tac-Tic-Toe Game!"` a `"Restarting the Tic-Tac-Toe Game!"` o cualquier otra frase que te guste. Presiona ejecutar para ver si algo cambia.
2. Agrega otro `System.out.println` debajo de la línea actual para imprimir una segunda frase debajo de la primera.
3. Presiona ejecutar para ver si se imprimen dos frases. Si ves algún texto en rojo, por favor pide ayuda.

{{% /notice %}}

{{% notice warning %}}
## ¡AYUDA! ¡Tengo mucho texto en rojo!

Si ves algún texto en rojo, ¡has encontrado errores! Por favor pide ayuda. Ten en cuenta lo siguiente al programar en Android:

1. `out` y `println` comienzan con una letra minúscula.
2. `System` comienza con una letra mayúscula.
2. Asegúrate de que la frase que deseas imprimir esté rodeada de comillas y que la frase esté entre los paréntesis.
3. No elimines ninguna de las llaves `{` o `}`.

{{% /notice %}}

`System.out.println` es útil cuando deseas corregir errores en el código, pero tu usuario (la persona que usa la aplicación) no puede ver el texto impreso con esta función. Sin embargo, ¡podemos hacerlo visible con "toasts"! Un "toast" es un texto rápido y pequeño que hacemos visible para el usuario. Así es como puedes crear un toast:
```kotlin
Toast.makeText(this, "Texto que queremos mostrar", Toast.LENGTH_SHORT).show()
```
<img src="../resources/_gen/images/toast_example.png" title="Ejemplo de Toast" alt="Ejemplo de toast. Puedes usar la función toast.makeText con los argumentos contexto, la cadena de mensaje y Toast.LENGTH_LONG o Toast.LENGTH_SHORT para mostrar un mensaje de bienvenida, como Bienvenido a Tic-Tac-Toe"/>
