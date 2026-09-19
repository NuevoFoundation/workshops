---
title: "Ejercicio 3 - La Transformada de Burrows-Wheeler"
difficulties: ["intermedio"]
weight: 11
draft: false
---

La transformada de Burrows-Wheeler (BWT, por sus siglas en inglés) es un algoritmo utilizado en la compresión de datos. Toma como entrada una cadena de texto y produce una cadena codificada, que generalmente agrupa caracteres similares juntos.

## La Teoría

El algoritmo es relativamente simple y fácil de entender.

1. Toma la cadena de entrada y extrae todas sus transformaciones rotacionales. (Ver imagen).
2. Ordena las rotaciones en orden lexicográfico ascendente.
3. Toma la última columna de la transformación ordenada; este es el resultado.

![Transformada de Burrows-Wheeler](../resources/e3-01.png "Los 3 pasos de una transformada Burrows-Wheeler")

En el diagrama anterior, usamos la cadena `banana` como ejemplo. El `\0` es un símbolo utilizado para denotar el final de la cadena (como el carácter nulo terminador en C), pero es lexicográficamente el carácter MÁS GRANDE en comparación con los demás.

Una forma eficiente de implementar la BWT es utilizando una estructura de datos llamada arreglo de sufijos. Para crear un arreglo de sufijos, primero tomamos todos los sufijos de una cadena de entrada y les asignamos un número como etiqueta. Luego, ordenamos los sufijos en orden lexicográfico.

![Arreglo de Sufijos](../resources/e3-02.png "Pasos para crear un arreglo de sufijos")

Usando `Nuevo\0` como ejemplo, primero tomamos los sufijos y los enlistamos. Luego, los ordenamos en orden lexicográfico, donde `\0` es el carácter nulo terminador, como antes, y actúa como el carácter más grande. Finalmente, tomamos el índice de la primera letra de cada sufijo y lo colocamos en un arreglo. Por ejemplo, el índice de la letra `N` en `Nuevo\0` es `0`, mientras que el índice de `e` es `2`. Dado que son alfabéticamente los más pequeños, van en las posiciones 0 y 1 del arreglo, respectivamente.

¡Podemos pensar en los sufijos como rotaciones para la transformada de Burrows-Wheeler! Todo lo que necesitamos es añadir el *prefijo* que "cortamos" al final de la cadena. Así, `evo\0` se convierte en `evo\0Nu` cuando queremos pensar en el sufijo como una rotación. Luego, si hacemos esto para todos los sufijos, obtenemos las rotaciones ordenadas que queremos en la transformada de Burrows-Wheeler.

![Sufijos a Rotaciones](../resources/e3-03.png "Tabla de rotaciones ordenadas a partir de sufijos para la transformada de Burrows-Wheeler")

Una nota clave es que no necesitamos almacenar realmente las rotaciones porque la información ya está en el índice del arreglo de sufijos. Si `suffix_array[i] == 0`, entonces sabemos que la rotación que estamos viendo es `Nuevo\0`. Si `suffix_array[i] == 3`, entonces la rotación que estamos viendo es `vo\0Nue`. Puedes pensar en ello como si giráramos `N` espacios a la derecha en el caso de que `suffix_array[i] == N`. La ilustración anterior lo demuestra.

Entonces, dicho esto, podemos obtener el último carácter de la rotación simplemente tomando `suffix_array[i]` y restando 1, luego aplicando la operación de módulo con la longitud total del arreglo de sufijos para obtener el índice de la cadena original que estamos buscando. Esto nos da la transformada de Burrows-Wheeler para cualquier cadena dada.

## La Implementación

La estrategia de implementación que usamos es la que destacamos anteriormente: construir un arreglo de sufijos, luego tomar los índices, restar 1 y realizar una operación de módulo con la longitud de la cadena (incluido el terminador nulo).

Hemos implementado el arreglo de sufijos y, con él, la transformada de Burrows-Wheeler. Sin embargo, estábamos cansados en ese momento y surgieron varios errores. Este ejercicio puede ser complicado porque implica muchos índices y descubrir cómo podemos ser inteligentes al utilizarlos. Como pista para corregir los errores, la mayoría de ellos están relacionados con el arreglo de sufijos y cómo lo usamos.

{{% notice tip %}}
El carácter nulo terminador puede estropear cómo imprimes tus cadenas. En este ejercicio, debes imprimir la cadena transformada carácter por carácter, porque el carácter nulo terminador hará que la función `printf` deje de imprimir después de encontrarlo. El siguiente código imprimirá el resultado de llamar a `bwt(dest, src)`, donde `STR_LEN` es la longitud estática de la cadena **incluyendo el terminador nulo**.
```c
for(int i = 0; i < STR_LEN; ++i) {
    printf("%c", dest[i]);
}
```
Nota que `strlen()` devuelve la longitud de la cadena, sin incluir el terminador nulo.

Un último consejo: ¡el operador `%` en C **no** es el operador de módulo! Es el operador de residuo. Tal vez esta sea la razón por la cual algunos índices han salido mal...
{{% /notice %}}

Todas las funciones están documentadas en `bwt.h`. Utiliza cualquier herramienta como gdb y valgrind para tu beneficio. ¡Buena suerte!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Exercise-3" target="_blank">Lanzar Replit</a>