---
title: "Paso 2 - Solucionando el problema"
difficulties: ["intermedio"]
weight: 7
draft: false
---

Una vez que hayas identificado lo que está causando el error, puedes comenzar a pensar en cómo solucionarlo. Los errores del compilador son bastante fáciles de manejar: la mayoría de las veces, el compilador te da muchas pistas sobre cómo resolverlos, y en las ocasiones en las que no puedes descifrarlo solo con la salida del compilador, puedes recurrir a la web. Es probable que alguien haya enfrentado el mismo problema que tú hace años y ya haya formulado la pregunta en un foro como [StackOverflow](https://stackoverflow.com/).

Cuando se trata de corregir errores de ejecución, todo depende de la aplicación que estás depurando. Deberás pensar en qué está haciendo tu programa, qué quieres que haga y cómo escribir código para indicarle que haga lo que deseas.

Por ejemplo, una forma general de resolver un problema de memoria es asegurarte de que el programa solo acceda a la memoria que se le permite. El lugar obvio para investigar es ver dónde ocurren los accesos a la memoria. La desreferenciación de punteros y/o el uso de índices de arrays suelen ser los puntos donde ocurren estos problemas. Como mostramos en la parte anterior, una herramienta como `valgrind` también es valiosa para identificar fugas de memoria y las áreas en las que tu programa puede tener fallos.

Para solucionar un programa que muestra comportamientos extraños, el primer lugar para mirar es determinar si tu algoritmo o estrategia es apropiado. El siguiente paso es verificar si tu programa implementa correctamente el algoritmo. Más a menudo de lo que se piensa, un algoritmo complejo es difícil de ejecutar correctamente. Hay muchas implementaciones de algoritmos seguros en ciberseguridad, pero muchas de ellas tienen implementaciones defectuosas que las hacen inseguras.

Lo más importante es encontrar las preguntas correctas que debes formularte mientras depuras. *La programación con el pato de goma* implica que el programador hable en voz alta con un pato de goma, y el hecho de escucharte explicar lo que estás haciendo puede ayudarte a detectar errores.

Desafortunadamente, corregir un error suele ser extremadamente específico según el programa. Es difícil ofrecer más que sugerencias generales.

{{% notice note %}}
Existen muchas herramientas que puedes usar para ayudarte a identificar un problema: los _linters_ están disponibles para la mayoría de los lenguajes y pueden detectar errores de sintaxis como problemas de formato, llaves faltantes y palabras clave mal escritas.

Con el avance de la inteligencia artificial (IA), herramientas como Github Copilot también pueden sugerir soluciones para tus errores. Pero recuerda que las respuestas de IA pueden ser incorrectas, así que siempre usa tu mejor criterio.

{{% /notice %}}