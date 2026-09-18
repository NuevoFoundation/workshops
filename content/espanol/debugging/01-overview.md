---
title: "Una Visión General de la Depuración"
difficulties: ["intermedio"]
weight: 2
draft: false
---

Existen muchas maneras diferentes de depurar un programa. En esta guía, comenzaremos con algunos pasos generales para que no te pierdas cuando depures un programa. Hay 3 pasos básicos para depurar un programa:

1. **Identificar el problema**. En este paso, tu objetivo es identificar qué está causando el error. Esto implica encontrar las condiciones que llevaron al error. Poder reproducir el error te proporciona información necesaria, lo que te permite delimitar el problema y, tal vez, entender por qué está ocurriendo el error en primer lugar.

2. **Encontrar una solución**. En este paso, tu objetivo es corregir el error. A veces, este es el paso más fácil, pero en otras ocasiones es complicado porque podrías descubrir que la lógica de tu programa estaba equivocada desde el principio. Este paso, combinado con el paso 3, puede fácilmente consumir la mayor cantidad de tiempo.

3. **Probar la solución**. Si tu corrección no arregla realmente el error, ¿de qué sirve? También debes asegurarte de que tu solución no introduzca más errores. Este paso puede ser tan simple como volver a compilar y ejecutar el programa una vez que hayas aplicado la corrección, o puede implicar ejecutar una serie completa de pruebas automatizadas en un entorno. De cualquier forma, el objetivo de este paso es establecer la *corrección* del programa.

Indudablemente, la parte más frustrante de la depuración es el paso 1. Como programadores, nuestro trabajo es escribir código, pero no podemos escribir código para corregir el problema si no sabemos cuál es el problema en primer lugar. Por lo tanto, gran parte de este taller se centrará en encontrar dónde podría estar escondido un error, así como en cómo puedes utilizar algunas herramientas para ayudarte en tu búsqueda.