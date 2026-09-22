---
title: "Paso 1 - Encontrando el problema (Parte 4)"
difficulties: ["intermedio"]
weight: 6
draft: false
---

## Otro Tipo de Error: Errores de Memoria

La pesadilla de C/C++, los errores de memoria son uno de los tipos de errores más frustrantes que existen. No abordarlos puede resultar en comportamientos indefinidos (¡errores no replicables!) y filtraciones de memoria. Por lo tanto, solucionarlos es una prioridad enorme.

{{% notice note %}}

Una fuga de memoria ocurre cuando tu programa asigna memoria utilizando malloc o calloc (u otras llamadas de asignación de memoria), y no la libera. La memoria se "pierde": no hay una forma (fácil) de recuperarla hasta que el programa termine.

{{% /notice %}}

Afortunadamente, las personas también han desarrollado programas para ayudarte a encontrar errores de memoria, y uno de estos programas es `valgrind`. Valgrind es una herramienta que no solo busca errores de memoria, sino que te muestra exactamente dónde ocurren los errores en tu código. Usemos valgrind para encontrar dónde ocurren los errores de memoria. Como ejemplo, tenemos una implementación rudimentaria de un vector en C, que es la versión de la biblioteca estándar de C++ de un arreglo dinámicamente dimensionado.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Lanzar Replit</a>

Primero, construye el programa usando 

```bash
make Vector
``` 

Ahora ejecútalo usando

```bash
examples/Vector
```

¡Observa que hay un error llamado 'doble liberación' ('double free')! Este es un tipo de error de memoria ocasionado por llamar a `free` en un puntero dos veces.

Ahora, en lugar de usar gdb, usa valgrind para comprobar cómo se asigna y utiliza la memoria. Ejecuta el comando:

```bash
valgrind --tool=memcheck --leak-check=full examples/Vector
```

Debería ser evidente que valgrind detectó algunos errores, tal vez relacionados con la doble liberación (observa el `ERROR SUMMARY` al final, donde se indica que se detectaron algunos errores).

Echemos un vistazo a algunos de los errores.

![Error de Valgrind 1](../resources/w4-02.png "Captura de pantalla del error en la consola con el texto 'Invalid read of size 8 at 0x484522D...'")

El error mostrado arriba se llama una lectura inválida ('invalid read'), que usualmente ocurre porque estás leyendo memoria que fue liberada en otro bloque. Valgrind te permite ver dónde se liberó y se asignó la memoria:

![Error de Valgrind 2](../resources/w4-03.png "Captura de pantalla del error en la consola con el texto 'Address 0x4b74040 is 0 bytes inside a block of size 16 free'd...'")

El bloque de memoria fue asignado por la función `malloc` en `createVectorInt`, el cual fue llamado en la función `main`. El bloque fue liberado por la función `free` llamada en la función `pushBack`.

Finalmente, en el resumen del heap, puedes ver que hubo 96 bytes que fueron 'perdidos', en otras palabras, hubo una fuga de memoria. Esto ocurrió porque olvidamos llamar a `deleteVectorInt` en el vector al final de la función principal.

![Error de Valgrind 3](../resources/w4-04.png "Captura de pantalla del error en la consola con el texto 'HEAP SUMMARY: in use at exit: 96 bytes in 2 blocks... 96 bytes in 2 blocks are definitely lost in loss record...'")

Valgrind proporciona una gran cantidad de información que puedes usar para localizar errores de memoria en tus programas en C y C++. No solo te informa dónde están ocurriendo los errores, sino también dónde se asignan y se liberan (o no se liberan, en el caso de una fuga de memoria) los bloques de memoria. ¿Puedes encontrar el error que causa todas las lecturas inválidas en el ejemplo del vector?

{{% expand "**Haz clic para mostrar la respuesta**"%}}
Observa que cuando estamos reasignando el arreglo, ¡olvidamos actualizar `list->__arr`! Esto significa que estamos escribiendo en un puntero que ya fue liberado, lo que explica las lecturas y escrituras inválidas que vemos en Valgrind, las dobles liberaciones (ya que llamamos a free en ese puntero ya liberado) y las fugas de memoria (ya que nunca hacemos referencia a los nuevos arreglos asignados después de eso). Todo lo que necesitas hacer es establecer ese puntero en el nuevo arreglo actualizado, lo cual debería corregir el error.
{{% /expand %}}
<br/>

En los ejercicios, se te pedirá que repares cualquier error de memoria que aparezca.