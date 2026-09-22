---
title: "Paso 3 - Pruebas"
difficulties: ["intermedio"]
weight: 8
draft: false
---

Has implementado la(s) solución(es) para tu(s) error(es). Naturalmente, lo primero que haces es recompilar tu código y ejecutarlo. Si parece correcto, ¡has solucionado el error! Para proyectos pequeños, esto funciona relativamente bien. Los proyectos más grandes podrían ser más difíciles, ya que tomaría mucho más tiempo compilar. Normalmente, estos tienen pruebas automatizadas que se ejecutan automáticamente después de realizar actualizaciones en el código base, de modo que los programadores no tienen que preocuparse demasiado por este paso (excepto por los programadores que crean las pruebas).

En las pruebas ya sabes o tienes una buena idea de dónde ocurrirá el error, por lo que en tus pruebas querrás ejecutar intencionalmente ese código para asegurarte de que sea correcto. Las pruebas son tan importantes que toda una metodología de desarrollo de software gira en torno a ellas (¡desarrollo basado en pruebas!).

A veces, corregir un error puede introducir otro, lo cual se llama _regresión_. Es muy normal que a veces ocurra un ciclo de múltiples iteraciones para corregir errores.

## Pruebas Unitarias
Siempre comienza de manera pequeña con tus pruebas. Esta idea se toma de los experimentos científicos: si reduces la cantidad de factores (variables independientes) que están en juego, puedes identificar la causa más fácilmente. A esto se le llama pruebas unitarias. En lugar de probar si todo el programa o una parte funciona, una prueba unitaria analiza una parte específica. Una prueba unitaria podría llamar a una función específica que no llama a otras funciones para verificar si produce el valor correcto/esperado.

Por ejemplo, supongamos que tienes una aplicación de calculadora que puede sumar, restar, multiplicar y dividir números. Podrías escribir una prueba unitaria para probar únicamente la función de suma, dándole 2 números y verificando si devuelve el valor correcto.  

## Pruebas de Integración
Solo cuando tus pruebas unitarias hayan tenido éxito, deberías comenzar con las pruebas de integración. Las pruebas de integración analizan cómo múltiples componentes de tu programa trabajan juntos para verificar si producen el valor correcto/esperado. Una prueba de integración podría llamar a una función que a su vez llame a muchas otras funciones o afecte a muchas partes diferentes del programa.

Que tus pruebas unitarias funcionen no significa necesariamente que tus pruebas de integración también funcionen. Podrías escribir una prueba de integración para tu aplicación de calculadora probando una serie de operaciones aritméticas, como realizar una suma y luego una multiplicación, y verificar el resultado.