---
title: "Escribiendo a Console (Declaraciones Print)"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/NrbQCjlzhYc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## ¡Haz que tu programa te hable!

Las declaraciones **print** se usan para escribir algo en la consola. Usa `print("Hello World")` para imprimir *Hello World* en la pantalla de salida. Más adelante aprenderemos que print es una función y la usamos para realizar una tarea de impresión. Lo que pases a la función `print` se mostrará en la pantalla.
Empecemos haciendo una declaracion `print`. 

Usaremos la declaracion mucho en las lecciones posteriores, así que asegúrate de entender esto antes de pasar al siguiente concepto.

### Desafío 1
Para empezar, escribe el siguiente texto en tu main.py de Trinket y haz clic a Run.

```python
print("Hello, World!")
```

¡Observa cómo tu consola muestra "Hello, World!" en la pantalla a la derecha! `print` le indica al ordenador que imprima la frase dentro de los paréntesis `()` en la ventana de la consola, o en la pantalla a la derecha.

![alt text](../../img/print.png "hello world in python!")

<iframe src="https://trinket.io/embed/python/ce70252d93" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

{{% notice tip %}}
### Uso de " al imprimir

¿Notaste que Hello, World! estaba entre `"`? ¿Probaste sin las comillas y viste que apareció un error? Pero, si probaste `print(123)`, verías que funciona sin errores. Eso es porque el texto (Strings en los lenguajes de programación) requiere que especifiques que es texto envolviéndolo entre comillas. Los números no requieren comillas.

Vuelve arriba y prueba imprimiendo cosas diferentes.
{{% /notice %}}

### Desafío 2

1. Sin eliminar las comillas, cambia `"Hello, World"` por otra frase. (Por ejemplo – `"Mi nombre es Nuvi!"`) Pulsa **run** para ver si cambia algo.
2. Añade otro `print` debajo de la línea actual para imprimir una segunda frase debajo de la primera.
3. Pulsa **run** para ver si se imprimen dos frases.

<iframe src="https://trinket.io/embed/python/ce70252d93" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Usaremos la impresión mucho en las lecciones posteriores, así que asegúrate de entender esto antes de continuar.

{{% notice warning %}}

## ¡AYUDA! ¡Apareció mucho texto rojo!

Si ves texto rojo, ¡has encontrado errores! Pide ayuda. En particular, ten cuidado con lo siguiente al programar en Python:

1. Asegúrate de que la frase que deseas imprimir esté **entre comillas** y que la frase esté **dentro de los paréntesis**.

![Example showing print statement done wrong (without quotation marks - print(Hello, World!)) and correctly (with quotation marks - print('Hello, World!'))](../../img/redLine.png)

2. El espaciado en Python es muy importante. Asegúrate de no tener espacios o tabulaciones innecesarias al principio o al final de cada línea, ya que Python no podrá leer el código correctamente. Por ejemplo, no pongas espacios antes de `print`, ni espacios después del último paréntesis en `print("Hello, World!")`.

{{% /notice %}}