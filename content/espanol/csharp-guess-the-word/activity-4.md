---
title: "Actividad 4 - Poniéndolo todo junto"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 13
---

## Actividad 4

Esta actividad tiene cuatro partes. Este es un buen momento para usar tu conocimiento sobre comentarios, números, variables y lectura desde la consola para completar las 4 actividades. A continuación, se proporciona información de fondo para cada actividad, y hay pistas en el código. Después de cada parte, presiona **run** y asegúrate de que no haya errores en la consola.

### Actividad 4.1

Primero, vamos a introducir más código en nuestro juego. Encuentra las dos líneas de código que comienzan con `TODO (ACTIVITY 4.1)` (una se encuentra aproximadamente en la línea 60 y la otra aproximadamente en la línea 130). Elimina ambas líneas de código por completo. Esto desbloquea el comportamiento principal del juego, como comprobar si la letra adivinada por el jugador se encuentra en la palabra a adivinar.

Desafortunadamente, después de presionar **run**, parece que el juego no espera la entrada del usuario y continuamente adivina `'C'` en su lugar. ¡Esto no está bien! Así que arreglémoslo en la siguiente parte.

### Actividad 4.2

Cuando el jugador hace una suposición, necesitamos tomar la letra adivinada y almacenarla en una variable. La variable se usará para verificar si la letra aparece en la palabra a adivinar. Usa `Console.ReadLine` para esperar la entrada del usuario y almacena la entrada en la variable `input`. Nota: ya hemos declarado la variable `input`, por lo que no necesitas usar la palabra clave `var`.

Para comprobar si lo has hecho correctamente, presiona **run** y ahora deberías poder escribir una letra en la consola.

### Actividad 4.3

Cada vez que se adivina una letra correctamente, necesitamos incrementar (sumar uno a) el número de letras correctamente adivinadas. Usa la variable `lettersRevealed` para cambiar el número de letras correctamente adivinadas. 
Presiona **run** para asegurarte de que no ocurren errores. También hemos proporcionado algo de código para imprimir el valor de la variable `lettersRevealed` con fines de prueba. Asegúrate de eliminar esto cuando termines de probar, ya que esta es información que no queremos revelar al jugador.

### Actividad 4.4

Cada vez que se adivina una letra incorrectamente, el jugador pierde una vida. Decrementa (resta uno) el número de vidas usando la variable `lives`. También le diremos al jugador cuántas vidas le quedan al hacer una suposición incorrecta, imprimiendo el número de vidas en la consola. 
Verifica si has hecho esto correctamente presionando **run**, adivinando una letra incorrecta y viendo si el número correcto de vidas se muestra en la consola.

{{% notice info %}}

### Dato Curioso - Bugs

Recuerda que en **Actividad 4.1** después de descomentar algo de código, experimentamos un comportamiento inesperado. Cualquier problema o comportamiento inesperado en el programa se conoce como **"bugs"**. Arreglamos el bug introducido en la **Actividad 4.1** al introducir la entrada del usuario en la **Actividad 4.2**.

Incluso si implementaste todo correctamente en las partes anteriores, si sigues jugando por un tiempo, aún ocurre otro problema. ¿Qué es? Arreglaremos este bug en la **Actividad 6**.

{{% /notice %}}