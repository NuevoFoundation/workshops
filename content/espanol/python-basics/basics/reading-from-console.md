---
title: "Leyendo de la Consola"
date: 2023-09-13T13:24:17-07:00
draft: false
weight: 6
prereq: "Python: Conceptos Básicos - Variables"
difficulty: Intermedio
--- 

Ahora que concocemos los conceptos básicos sobre las variables, podemos solicitar información al usuario. Use la siguiente línea para indicarle a nuestro programa que espere hasta que el usuario escriba algo en la consola. Luego, la computadora toma lo que se escribe en la consola y lo almacena en una variable llamada **value**

```python
value = input()
```

Aquí hay algunos ejemplos de cómo usar `input()` para aceptar entradas del usuario:

```python
print("Cómo te llamas?")
value = input()
print("Hola " + value + "!")
```

¡Pruébe esto! Cuando presione **run**, notará que la imagen a continuación no aparece en la consola todavía.

![Captura de pantalla del símbolo de fin de la consola.](../../img/end_symbol.png "Captura de pantalla del símbolo de fin de la consola.")

![Captural de pantalla de la consola esperando entrada del usuario.](../../img/console_read_waiting.png "Captural de pantalla de la consola esperando entrada del usuario.")

Esto se debe a que el programa está esperando que escriba algo! Ingresa su nombre o `Nuvi` en la consola, presiona Enter y verifica que se imprima correctamente.

![Captura de pantalla de la consola después de que el usuario ingrese algo y el programa termina.](../../img/console_read_input.png "Captura de pantalla de la consola después de que el usuario ingrese algo y el programa termina.")

{{% notice note %}}

Incluso si escribimos un número, como `8`, el valor de la variable contendrá el string `"8"`. ¡Tenga cuidado al intentar hacer cálculos con variables de entrada!

{{% /notice %}}

## Reto

Veamos si podemos escribir un programa que primero imprima las siguientes dos líneas en la consola:

    Welcome!
    How can I help you today?

Afterwards, the console waits for user input. After the user types something in the console and presses _Enter_, the computer prints out:

Luego, la consola espera la entrada del usuario. Después de que el usuario escribe algo en la consola y presiona *Enter*, la computadora imprime:

    You asked: [input]?
    I don’t know the answer to [input]. Goodbye!

`[input]` debe reemplazarse con lo que el usuario haya escrito en la consola. Por ejemplo, si quisieras preguntar "Cúantos años tengo?", la computadora imprimirá que no sabe la respuesta.

{{% notice tip %}}

Esto es muy similar al ejemplo que hicimos juntos anteriormente. Intenta realizar algunos pequeños cambios con respecto a lo que ya le hemos proporcionado.

{{% /notice %}}

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>