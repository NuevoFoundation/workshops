```markdown
---
title: "Paso 1 - Encontrando el problema (Parte 3)"
difficulties: ["intermedio"]
weight: 5
draft: false
---

## Depuradores

Depurar código es un problema tan extendido y común que las personas han creado programas completos diseñados para ayudar a otros programadores a depurar de manera más eficiente. Estos programas se conocen como **depuradores**, y hay muchos depuradores que funcionan para el lenguaje de programación C. Echemos un vistazo a `gdb`, un depurador común usado desde la línea de comandos.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Abrir Replit</a>

Para nuestros ejemplos, haremos uso del algoritmo <a href="https://www.youtube.com/watch?v=SLauY6PpjW4" target="_blank">Quicksort</a>.

**Quicksort** es un algoritmo que ordena un arreglo seleccionando primero un elemento dentro del arreglo como un `pivote`.

A continuación, los elementos se organizan según las siguientes condiciones:
- Elementos menores que el pivote.
- Elementos mayores que el pivote.

Cuando se completa la ordenación, el mismo proceso se llama recursivamente en las particiones superiores e inferiores del arreglo, tomando el pivote como el punto medio.

{{% notice note %}}
Nuestra versión de quicksort asume que el elemento más a la izquierda es el elemento "mayor" y el elemento más a la derecha es el pivote dentro de la partición.
{{% /notice %}}

|![Quicksort usando el pivote como el elemento más a la derecha.](../resources/debugging_process_quicksort.svg "Proceso de varios pasos de quicksort usando el pivote como el elemento más a la derecha.")|
|:--:|
|Figura 1: Quicksort usando el elemento más a la derecha como el pivote y asumiendo que el elemento más a la izquierda es el "mayor".|

[GDB (GNU Project Debugger)](https://sourceware.org/gdb/) es un depurador poderoso que te permite depurar programas desde la línea de comandos, lo cual es útil en casos donde no tienes acceso a una GUI (Interfaz Gráfica de Usuario).

Es importante entender cómo funciona el programa para poder realizar una depuración efectiva. Nuestra implementación de 'quicksort' ejecuta una implementación recursiva del algoritmo quicksort y realiza la ordenación si el elemento actual es menor que el pivote, asumiendo que el primer elemento es el "mayor". El proceso de ordenación ocurre en la función `partition`.

### Pasos para depurar con GDB
#### Compila el programa
1. Abre la pestaña **Shell** y compila el programa:

```bash
make Quicksort
```

{{% notice note %}}
Cuando se compila el programa, se utilizan las banderas: `-g` y `-Og`. La primera le indica al compilador que añada **información de depuración**, lo que significa que sin esa bandera, gdb no podría depurar el programa. La segunda le indica al compilador que optimice el programa de una forma que no afecte la estructura de ejecución del programa. Sin `-Og`, el compilador podría optimizar partes de tu código, haciendo que un depurador sea mucho menos efectivo.

Es importante tener en cuenta la segunda bandera. Para depurar, debes **SIEMPRE** asegurarte de que el compilador haga optimizaciones mínimas en tu código porque las optimizaciones podrían cambiar drásticamente cómo se ejecuta el código.
{{% /notice %}}

#### Ejecuta el programa 
1. Escribe el comando `gdb examples/Quicksort`. Esto abrirá la interfaz de línea de comandos de GDB. Para depurar un programa con `gdb`, puedes usar `gdb <nombre del programa>`.

2. Asegúrate de que GDB diga que está `Reading symbols from ./examples/Quicksort...`, de lo contrario no has adjuntado el programa a GDB. 

3. Puedes salir de GDB ingresando el comando `quit` (o cualquiera de sus prefijos: `q` funciona) como si fuera la línea de comando normal.

Deberías ver algo como esto:

|![Ejecutando GDB en el archivo 'Quicksort'.](../resources/w4-01.png "Captura de pantalla de la consola después de ejecutar GDB en el archivo 'Quicksort'.")|
|:--:|
|Figura 2: Ejecutando GDB en el archivo 'Quicksort'.|

#### Depura el programa

Para depurar el programa, necesitamos ejecutarlo desde GDB. 

1. Ingresa el comando `run` (o `r`). Esto ejecutará el programa como si lo hubieras ejecutado desde la línea de comandos normal.
```bash
(gdb) run
```

El programa primero imprime el contenido del arreglo a ordenar: un arreglo de números desordenados. Luego, ejecuta el algoritmo de ordenación y, finalmente, imprime el arreglo ordenado. ¡Puedes observar cómo el arreglo cambia durante el proceso de ordenación!

Sin embargo, parece que la ordenación no está ocurriendo como se esperaba.

Vamos a utilizar una de las herramientas más importantes que ofrecen los depuradores: **puntos de interrupción**. Un punto de interrupción le dice al depurador que pause el programa cada vez que alcance esa línea de código durante la ejecución. Esto te permite observar lo que está ocurriendo dentro del programa en tiempo real. Nota que el depurador no ejecuta la línea de código donde está el punto de interrupción hasta después de que continúes ejecutando el programa.

Primero identificaremos dónde se realiza toda la ordenación de elementos. ¿Sabes dónde ocurre la ordenación?
{{% expand "***Respuesta***" %}}
La ordenación ocurre dentro del bucle `for` y al final del proceso, cuando el pivote se cambia con el elemento "mayor".
{{% /expand %}}
<br/>

2. Coloca un punto de interrupción donde ocurre la ordenación usando la sintaxis `break <nombre del archivo:línea>`.
{{% expand "***Respuesta***" %}}
```bash
(gdb) break quicksort.c:27
``` 
{{% /expand %}}
<br/>

3. Ejecuta el programa con `run` y observa cómo el programa se detiene al alcanzar el punto de interrupción. 

4. Mientras el programa está en pausa, puedes ver los valores de las variables. Prueba algunas sentencias `print` para evaluar expresiones. Aquí tienes un ejemplo de cómo usarlas:
```bash
# puedes imprimir el valor de una variable
print myVariable

# puedes crear sentencias print más elaboradas utilizando expresiones completas
print myVariable + 2 
```

5. Puedes avanzar manualmente por tu código llamando al comando `next` (o `n`), que instruirá al depurador para avanzar a la siguiente línea de código **sin entrar en una