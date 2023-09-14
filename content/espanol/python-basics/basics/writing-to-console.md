---
title: "Escribir en la consola (declaración print)"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/NrbQCjlzhYc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## ¡Haz que su programa le hable!

Las declaraciones **print** se utilizan para escribir algo en la consola. Utilice `print("Hello World")` para imprimir *Hello World* en la consola. Más adelante aprenderemos que `print` es una función y la utilizamos para realizar un trabajo de impresión. Todo lo que pase a la funcion `print` se imprime en la pantalla. Comencemos haciendo una declaración `print`.

Utilizaremos mucho la declaración `print` en las lecciones que vienen, así que asegúrese de comprender este concepto antes de pasar al siguiente!

### Reto 1

Para empezar, escriba el siguiente texto en su Trinket `main.py` y presiona **RUN**.

```python
print("Hello, World!")
```

Mira cómo su consola dice "Hello, World!"! `print` le dice a la computadora que imprima la oración entre paréntesis `()` en la ventana de la consola, o en la pantalla en la derecha.

![alt text](../../img/print.png "hello world en python!")

<iframe src="https://trinket.io/embed/python/ce70252d93" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

{{% notice tip %}}
### Usando " con impresión

¿Notó que Hello, World estaba rodeado por `"`? ¿Lo intentó sin las `"` para comprobar que produce error? Pero, si probó `print(123)`, ¿notó que funciona? Esto se debe a que el texto (Strings en lenguages de programación) requiere que especifique que es texto por envolviéndolo entre comillas. Números no las requieren.

¡Vuelve atrás e intenta imprimir cosas diferentes!
{{% /notice %}}

### Reto 2

1. Sin quitar las comillas, intente cambiar `"Hello, World"` por otra oración. (Por ejemplo - `"Mi nombre es Nuvi!"`) Presione **run** para ver si algo cambia.
2. Agregue otra declaración `print` debajo de la línea actual para imprimir una segunda oración debajo de la primera.
3. Presione **run** para ver si se imprimen dos oraciónes.

<iframe src="https://trinket.io/embed/python/ce70252d93" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

{{% notice warning %}}

## ¡AYUDA! ¡Recibí mucho texto en rojo!

Si ve algún texto en rojo, ¡ha encontrado algunos errores! Por favor pide ayuda. En particular, tenga cuidado con lo siguiente cuando programe en Python:

1. Asegúrese de que la oración que desea imprimir esté **entre comillas** y que la oración esté **dentro de los paréntesis**.

![Ejemplo que muestra una declaración print hecha incorrectamente (sin comillas) y correctamente (con comillas)](../../img/redLine.png)

2. El espaciado en Python es muy importante. Asegúrese de no tener espacios o tabulaciones innecesarias al principio o al final de cada línea, ya que de lo contrario Python no podrá leer el código. Por ejemplo, no coloque espacios antes de `print` ni espacios después del último paréntesis en `print("Hello, World!")`.

{{% /notice %}}
