---
title: "Paso 1 - Encontrando el problema (Parte 2)"
difficulties: ["intermedio"]
weight: 4
draft: false
---

## Errores en Tiempo de Ejecución

Los errores de compilación son una cosa, pero los **errores y bugs en tiempo de ejecución** son otra. Mientras que el compilador puede indicarte fácilmente dónde buscar, los bugs en tiempo de ejecución están relacionados con cómo se ejecuta tu programa. Es necesario entender qué está haciendo el programa cuando sucede el error:
- ¿Qué variables están siendo utilizadas?
- ¿Qué instrucción se está llamando?
- ¿Falta alguna declaración necesaria?

En aplicaciones más pequeñas, podemos usar **declaraciones print** en el código para entender rápidamente el estado de ejecución del programa. Estas declaraciones son una manera rápida y sencilla de observar el comportamiento del programa mientras se está ejecutando, y con suerte, podrás encontrar lo que está causando el error sin demasiados problemas.

## Búsqueda Binaria

Uno de los algoritmos más simples que aprenderás o ya habrás aprendido es la **búsqueda binaria**, que te permite buscar un elemento en una lista ordenada en tiempo logarítmico. La idea es verificar el elemento del medio de la lista ordenada y ver si coincide con el elemento que queremos; si encontramos el elemento, el algoritmo termina. Si el elemento es mayor, buscamos en la mitad superior de la lista. De lo contrario, buscamos en la mitad inferior. Repetimos el proceso hasta encontrar el elemento que estamos buscando.

|![Buscando el número 7 en una lista ordenada de 10 números utilizando Búsqueda Binaria](../resources/binary_search.svg "Un árbol que muestra el proceso de búsqueda del número 7 en una lista ordenada de números del 1 al 10 utilizando Búsqueda Binaria")|
|:--:|
|Buscando el número **7** en una lista ordenada de **10** números utilizando Búsqueda Binaria.|

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Abrir Replit</a>

Nuestro programa te pedirá buscar un nombre basado en la posición en la que se encuentra.

Abre la **Shell** en el programa Replit y compila el programa:
```bash
make BinarySearch
```

Ejecuta el programa de la siguiente manera:
```bash
./examples/BinarySearch
```

Deberías ver una lista de nombres y sus números en una lista. Busca a Emily escribiendo 6 en el prompt y presionando `Enter`.

|![Buscando a Amy](../resources/debugging_process_searching_for_amy.svg "Captura de pantalla de una consola que muestra una lista de nombres y sus números asociados. Se resalta 'Número: 5, Nombre: Amy'.")|
|:--:|
|Buscando a Amy.|

Ahora ejecuta el programa nuevamente y busca el número de `Ramona`. ¡El programa se rompe con un mensaje de `Segmentation fault (core dumped)`! 😮

Cuando te enfrentas a un problema como este, deberías preguntarte, ¿cuál es el comportamiento del error?  
Los errores de "segmentation fault" usualmente son señales de alguno de los siguientes problemas:
- Acceder a un array fuera de sus límites.
- Intentar usar un puntero NULL.
- Desbordamientos de memoria o de pila.

Para más información, consulta una [Lista de Razones Comunes para Segmentation Faults en C](https://www.tutorialspoint.com/List-of-Common-Reasons-for-Segmentation-Faults-in-C-Cplusplus#:~:text=List%20of%20Common%20Reasons%20for%20Segmentation%20Faults%20in,7%20Stack%20overflow%208%20Writing%20to%20read-only%20memory).

Veamos el código que implementa la búsqueda binaria en nuestro programa:

1. La función `binary_search()` toma tres argumentos: el array de elementos, la longitud del array y el número que estamos buscando. Luego, llama a la función recursiva `rbin_search()`.

2. `rbin_search()` realiza la búsqueda binaria de forma recursiva y devuelve el índice del elemento si es encontrado. De lo contrario, devuelve `-1`.

Una **función recursiva** divide un problema en varios problemas más pequeños llamándose a sí misma, lo que hace que el problema sea más fácil de manejar con un conjunto de **casos base**. Una función recursiva que no termina correctamente usualmente tiene problemas en alguno de estos puntos:

1. Los casos base están incompletos.
2. Las llamadas recursivas están configuradas incorrectamente.

¡Hagamos un poco de depuración!

## Usando Declaraciones Print

Colocar declaraciones `print` en tu código es una manera simple pero a veces efectiva de comprobar si tu código está funcionando como se esperaba. Ve y comprueba si `rbin_search()` está funcionando correctamente colocando declaraciones `print` para observar cómo cambian los valores.

{{% expand "***Pista 1: ¿Qué hace que el problema que estamos tratando de resolver se vuelva más pequeño?***" %}} 
- Intenta colocar la declaración print después de la variable `middle` en la función `rbinary_search` para ver cómo cambian los valores de `lo`, `hi` y `middle`. Ve y busca algo.
|![Colocando declaración print para comprobar valores "lo", "hi" y "middle".](../resources/debugging_process_print_statement.svg "Captura de pantalla de código que agrega una declaración print en la línea 17. La declaración print muestra los valores de 'lo', 'hi' y 'middle'.")|
|:--:|
|Colocando declaración print para comprobar valores `lo`, `hi` y `middle`.|

- Observa los valores mientras se imprimen.
{{% /expand %}}

{{% expand "**Haz clic para ver la respuesta**" %}} 
La llamada recursiva para buscar en la mitad inferior del array en realidad está buscando en la mitad superior.

Para corregirlo, los argumentos `lo` y `hi` de la función `rbin_search()` deben ser `lo` y `middle-1`.

|![Corregir llamada recursiva para la mitad inferior.](../resources/debugging_process_fixing_lowerhalf_search.svg "Captura de pantalla del código que resalta la línea 24, en la que aparece 'return rbin_search(arr, lo, middle-1, element);'")|
|:--:|
|Corregir llamada recursiva para la mitad inferior.|

|![Observando cómo cambian las variables "lo", "hi" y "middle" al buscar a Becky.](../resources/debugging_process_searching_for_becky.svg "Captura de pantalla de la consola que muestra una lista de personas más las declaraciones print que muestran cómo cambian los valores de 'lo', 'hi' y 'middle'.")|
|:--:|
|Observando cómo cambian las variables "lo", "hi" y