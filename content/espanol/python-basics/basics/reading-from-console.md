---
title: "Leyendo de la Consola"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 6
prereq: "Python Básicos: Variables"
difficulty: Intermediate
--- 

Ahora que sabemos lo básico sobre variables, podemos pedir entrada al usuario. Usa la siguiente línea para indicar a nuestro programa que espere hasta que el usuario escriba algo en la consola. Luego, la computadora toma todo lo que se escribe en la consola y lo guarda en la variable llamada **valor**.

```python
valor = input()
```

Aquí hay ejemplos de cómo usar `input()` para aceptar la entrada del usuario:

```python
print("¿Cuál es tu nombre?")
valor = input()
print("Hola " + valor + "!")
```

¡Pruébalo! Cuando pulses run, notarás que la imagen siguiente aún no aparece en la consola.

![Captura de pantalla del símbolo de fin de la consola](../../img/end_symbol_es.png "imagen del símbolo de fin de consola")

![Captura de pantalla de la consola esperando la entrada del usuario](../../img/console_read_waiting_es.png "imagen de cómo se ve la consola esperando la entrada del usuario")

Esto es porque el programa está esperando a que escribas algo. Escribe tu nombre o 'Nuvi' en la consola a la derecha, presiona Enter y comprueba que se imprime correctamente.

![Captura de pantalla de la consola después de que el usuario ha dado su entrada y el programa ha finalizado](../../img/console_read_input_es.png "imagen de cómo se ve la consola después de haber leído la entrada del usuario")

{{% notice note %}}

Incluso si escribimos un número, por ejemplo `8`, la variable valor contendrá la cadena `"8"`. ¡Ten cuidado al intentar hacer operaciones matemáticas con variables obtenidas mediante input!

{{% /notice %}}

## Desafío

Veamos si podemos escribir un programa que primero imprima las siguientes dos líneas en la consola:

    ¡Bienvenido!
    ¿Cómo puedo ayudarte hoy?

Después, la consola debe esperar la entrada del usuario. Cuando el usuario escriba algo en la consola y presione _Enter_, el ordenador imprimirá:

    Preguntaste: [input]?
    No sé la respuesta a [input]. ¡Adiós!

`[input]` debe ser reemplazado por lo que el usuario haya escrito en la consola. Por ejemplo, si quisieras preguntar "¿Cuántos años tengo?", el ordenador imprimirá que no sabe la respuesta a eso.

{{% notice tip %}}

Esto es muy similar al ejemplo que vimos arriba. Intenta hacer pequeños cambios respecto a lo que ya te hemos dado.

{{% /notice %}}

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>