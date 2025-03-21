---
title: "Imprimiéndolo en Consola"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 4
---
A veces, es posible que el juego o la aplicación no funcionen de la manera esperada o que desee escribir algo en la consola con fines de registro. Además de depurar la aplicación, puede usar `System.out.println()` para escribir su mensaje. Busca tus mensajes en la ventana "logcat" en la parte inferior de Android Studio:
<img src="../resources/_gen/images/println.gif" height="60%" width="60%" title="System.out.println()" alt="Ventana Logcat en Android Studio que muestra los mensajes creados con la función de registro System.out.printIn"/>

{{% notice tip %}}

## Trabajando Juntos

1. Sin quitar las comillas, intente cambiar `"Reiniciando el juego Tac-Tic-Toe!"` a `"Reiniciando el juego Tic-Tac-Toe!" ` o cualquier otra frase que te guste. Presione ejecutar para ver si algo cambia.
2. Agregue otro `System.out.println` debajo de la línea actual para imprimir una segunda oración debajo de la primera oración.
3. Presione ejecutar para ver si se imprimen dos oraciones. Si ves algún texto rojo, pide ayuda.

{{% /notice %}}

{{% notice warning %}}
## ¡AYUDA! ¡Tengo un montón de texto rojo!

Si ve algún texto rojo, ¡ha encontrado algunos errores! Por favor, pida ayuda. Tenga cuidado con lo siguiente al codificar en Android:

1. `out` y `println` comienzan con una letra minúscula.
2. `Sistema` comienza con una letra mayúscula.
2. Asegúrese de que la oración que desea imprimir esté rodeada de comillas y que la oración esté entre paréntesis.
3. No elimine ninguna llave `{` o `}`.

{{% /notice %}}


`System.out.println` es útil cuando desea corregir errores en el código, pero su usuario (la persona que usa la aplicación) no puede ver el texto impreso con esta función. ¡Pero podemos hacer esto con toasts! Una notificación del sistema es un texto rápido y pequeño que hacemos visible para el usuario. A continuación, le indicamos cómo hacer un toast:

```kotlin
Toast.makeText(this, "Texto que se quiera mostrar", Toast.LENGTH_SHORT).show()
```
<img src="../resources/_gen/images/toast_example.png" title="Ejemplo de Toast" alt="Ejemplo de toast. Puede utilizar la función toast.makeText con el contexto de argumentos, la cadena de mensaje y Toast.LENGTH_LONG o Toast.LENGTH_SHORT para mostrar un mensaje de bienvenida, como Bienvenido al juego de Gato"/>
