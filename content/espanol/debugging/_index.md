---
title: "C: El Proceso de Depuración"
description: "Una introducción a la depuración de programas"
date: 2026-04-25T00:00:00-07:00
prereq: "C"
icon: ""
draft: false
alwaysopen: false
language: "c"
topics: ["programming-basics"]
difficulties: ["intermediate"]
---

## Introducción

Entonces, has aprendido los conceptos básicos de un lenguaje de programación. Probablemente hayas dominado el arte de `“Hello World”` y hayas comenzado un proyecto personal o seguido suficientes tutoriales como para poder convertir una idea en código.

Sin embargo, ¿qué pasa cuando tu código no se compila? Los principiantes en programación suelen buscar en línea para ver si otros han enfrentado problemas similares. Esto es un poco tedioso, ya que tendrías que recurrir a internet cada vez que encuentres un error. 

¿Qué pasa cuando tu programa se compila pero no funciona como esperas? (es decir, encontraste **un bug 🪲**).

Volver a arreglar tu código puede ser un desafío más difícil que escribir el código en sí. Aprender cómo navegar entre estos bugs y errores requiere habilidad, paciencia y experiencia. En este taller, desentrañaremos el proceso básico para depurar tu código. Recuerda que la depuración es parte de todos los lenguajes de programación.

{{% panel theme="info" header="¿Por qué se llama bug?"%}}
El primer bug de programación registrado se documentó en 1947, cuando una polilla decidió estar en el lugar equivocado. Mira <a href="https://education.nationalgeographic.org/resource/worlds-first-computer-bug" target="_blank">El primer bug de computadora en el mundo.</a>

{{% /panel %}}

## Sobre este taller

Este taller asume que entiendes y puedes escribir código en el lenguaje de programación **C**. Los ejemplos usados en este taller hacen uso de estructuras de datos y algoritmos, temas que generalmente se enseñan en un curso introductorio de ciencias de la computación. Tendremos una breve explicación de ellos, pero están pensados como un repaso para que tengas una idea de lo que hace el código de ejemplo. Este taller también asume que ya tienes una cuenta en [Replit](https://replit.com) y estás familiarizado con Replit.

## Replit y la Línea de Comandos

Vamos a intentar usar Replit para ejecutar algo de código y familiarizarnos más con la línea de comandos. Haz clic en el botón "Lanzar Replit" a continuación y haz un fork del programa. Cuando se abra el programa en Replit, abre la pestaña **Shell**.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Lanzar Replit</a>

Primero, compilamos nuestro código. Dentro de la pestaña shell, escribe lo siguiente y haz clic en **ENTER**:

```bash
make HelloWorld
```

Después de compilar nuestro código, necesitamos usar un comando diferente para ejecutarlo. Escribe lo siguiente y haz clic en **ENTER**:

```bash
./examples/HelloWorld
```

¡Deberías ver un texto `Hello, World!` impreso en la shell!

{{% panel theme="info" header="¿Por qué usar la línea de comandos?"%}}

La línea de comandos puede parecer poco intuitiva y nada amigable para los principiantes. Sin embargo, saber cómo utilizarla es extremadamente importante para tu carrera en programación. La usaremos para ejecutar `gdb` y `valgrind` más adelante en el taller, ¡así que cuanta más experiencia tengas con ella, mejor!

Los ejemplos se escribieron en un único Replit. Proveeremos todos los comandos que necesitas conocer para compilarlos y ejecutarlos, así que no te preocupes si no has usado la línea de comandos hasta ahora.

{{% /panel %}}

## Contenidos del Taller

{{% children /%}}