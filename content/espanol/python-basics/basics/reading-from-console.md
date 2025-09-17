---
title: "Leyendo de la Consola"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 6
prereq: "Python Básicos: Variables"
difficulty: Intermediate
--- 

Ahora que sabemos lo básico sobre variables, podemos pedir entrada al usuario. Usa la siguiente línea para indicar a nuestro programa que espere hasta que el usuario escriba algo en la consola. Luego, la computadora toma todo lo que se escribe en la consola y lo guarda en la variable llamada **value**.

```python
value = input()
```

Aquí hay ejemplos de cómo usar `input()` para aceptar la entrada del usuario:

```python
print("What's your name?")
value = input()
print("Hello " + value + "!")
```

¡Pruébalo! Cuando pulses run, notarás que la imagen siguiente aún no aparece en la consola.

![Screenshot of the console end symbol](../../img/end_symbol.png "image of the console end symbol")

![Screen shot of the console waiting for user input](../../img/console_read_waiting.png "image of how the console looks waiting for user input")

Esto es porque el programa está esperando a que escribas algo. Escribe tu nombre o 'Nuvi' en la consola a la derecha, presiona Enter y comprueba que se imprime correctamente.

![Screen shot of the console after the user has given input and the program completed](../../img/console_read_input.png "image of how the console looks after it has read user input")

{{% notice note %}}

Incluso si escribimos un número, por ejemplo `8`, la variable value contendrá la cadena `"8"`. ¡Ten cuidado al intentar hacer operaciones matemáticas con variables obtenidas mediante input!

{{% /notice %}}

## Desafío

Veamos si podemos escribir un programa que primero imprima las siguientes dos líneas en la consola:

    Welcome!
    How can I help you today?

Después, la consola debe esperar la entrada del usuario. Cuando el usuario escriba algo en la consola y presione _Enter_, el ordenador imprimirá:

    You asked: [input]?
    I don’t know the answer to [input]. Goodbye!

`[input]` debe ser reemplazado por lo que el usuario haya escrito en la consola. Por ejemplo, si quisieras preguntar "¿Cuántos años tengo?", el ordenador imprimirá que no sabe la respuesta a eso.

{{% notice tip %}}

Esto es muy similar al ejemplo que vimos arriba. Intenta hacer pequeños cambios respecto a lo que ya te hemos dado.

{{% /notice %}}

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>