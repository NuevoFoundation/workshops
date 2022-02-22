---
title: "Actividad 1 - Output"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

Para que nuestro programa cree mensajes secretos, primero debemos ingresar un mensaje.

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/activity-1?lite=true#main.cpp" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Para eso, vamos a comenzar diciendole a la computadora que muestre en la consola para quien es ese mensaje. Esta es la instrucción que necesitaremos:

```
cout << "Hola programador!" << endl;
```

Intentemos entender esta línea de código en más detalle.

{{% notice tip %}}

### Cadenas (Strings)

Todo lo que veas entre **comillas ""** se llama **cadena o string**. Un string es solo una secuencia de caracteres, es decir, de números, letras o símbolos.

En el código que escribimos arriba `"Hola programador!"` es un string. Otros ejemplos de string pueden ser `"123"`, `"abc!"` o `"Hola"`. ¡Ojo!, `123`, `abc!` y `buen día` NO son strings ¡porque no tienen comillas!

### Imprimir en consola

`cout` lo usamos para mostrar algo en la consola. En este caso, si apretamos Run, mostrará `Hola programador!`, ya que es el string que le indicamos.
Siempre la instrucción `cout` está acompañado de los signos `<<`. Luego del string, los volvemos a poner acompañado de `endl`, que significa que es el fin de la linea, por lo que la computadora va a hacer un salto de linea (enter) en la consola.

{{% /notice %}}

Copia la línea de arriba, pégala en el archivo `main.cpp` que teníamos al inicio, y dale click en Run. 
Prueba cambiar el contenido del string. Por ejemplo `"Hola mundo"`, `"Para la Reina"`, etc.

{{% notice warning %}}

### ¡AYUDA! 

Si después de presionar el botón **Run**, está la palabra **error** en rojo en la pestaña **console**, es porque tienes errores en el código. Pídele ayuda al instructor para revisar tu código.

Mientas tanto puedes revisar lo siguiente:

1. No uses letras mayúsculas.
2. Asegúrate que las líneas que escribiste tengan al final un punto y coma **`;`**.

{{% /notice %}}
