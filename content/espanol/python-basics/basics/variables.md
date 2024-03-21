---
title: "Variables"
date: 2023-09-13T14:45:38-07:00
draft: false
weight: 4
--- 

In a previous exercise, we learned to print different statements with `print("")`. While it is great to print out a number or a sentence, we haven't given them a meaning. Variables are simply names that we can give to values such as strings, numbers, and booleans. Here’s how to make a variable named s in Python. We say s is a string that has the value `"Hello, World!"`.

En un ejerciso anterior, aprendimos a imprimir diferentes oraciónes con `print("")`. Si bien es genial imprimir un número o una oración, no les hemos dado un significado. Las variables simplemente son nombres que podemos darle a valores como strings, números, y booleans. Aquí se muestra cómo crear una variable llamada `s` en Python. Decimos que `s` es un string que tiene el valor `"Hello, World!"`.

```python
s = "Hello, World!"
x = 88
happy = True
```
Presione **run**. 

![Screenshot of what variables example looks like in replit](../../img/variables.png "image of how variables look in replit") 

Note que las variables no se imprimen a la consola. En cambio, la variable simplemente guarda el string, número, o boolean en la memoria de la computadora. Podemos usar estas variables en otras declaraciones. Por ejemplo, este código imprimaría `"Hello Nuevo Foundation"` a la consola:

```python
str1 = "Hello"
str2 = "Nuevo Foundation"
print(str1 + " " + str2)
```

Tambiín puede hacer lo siguiente para imprimir strings juntos mientras agrega espacios entre las palabras.

```python
str1 = "Hello"
str2 = "Nuevo Foundation"
print(str1, str2)
```
## ¿Qué tipo?

Antes de aprender a crear variables, debemos aprender el concepto de **tipo**. El tipo describe lo que se almacena en la caja.

Python es lenguage de programación con tipos dínamicos, es decir, a diferencia de lenguages como Java, no necesita especificar el tipo de la variable antes de asignarle un valor. Python tambien deja que el tipo de una variable cambie, puede reemplazar un string con un número sin problema. Ten en cuenta que las operaciones que puede usar con una variable se basen en el tipo.


{{% notice note %}}
Los siguientes son los tipos importantes:

**Tipo** | **Descripción** | **Ejemplos**
--------|-----------|----------
`int` | número entero | `20`, `30`, `35`
`char` | carácter como un símbolo o una sola letra del alfabeto | `'A'`,`'b'`, `'('`, `']'`
`String` | una secuencia de `char` | `"Hello"`, `"Bonjour"`, `"Hola"`
`boolean` | tiene un valor de verdadero o falso | `true`, `false`
`double` | números fraccionarios | `2.0`, `3.14`, `9.33`

{{% /notice %}}

Revisemos las tres variables de las que hablamos en el primer ejemplo e identifiquemos sus tipos. `s` es un string, `x` es un int, y `happy` es un boolean.

### Reto

Crea dos variables nuevas: 
- Una variable llamada `comp` que almacena el string `"Computadora"`.
- Una variable llamada `cinco` que almacena el número `5`.

A continuación, use las variables y lo que aprendió en las actividades anteriores para imprimir (`print`) lo siguiente en la consola. ¡Debes usar las variables!

    Computer
    5
    ComputerComputer
    10
    ComputerComputerComputer
    15

{{% notice tip %}}

Si está atascado, considere usar el operador `+`. Recuerde que puede usar las variables `comp` y `cinco` varias veces en la misma línea.

{{% /notice %}}

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
