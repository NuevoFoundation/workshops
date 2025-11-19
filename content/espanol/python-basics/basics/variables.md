---
title: "Variables"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 4
--- 

En un ejercicio anterior, aprendimos a imprimir distintos contenidos con `print("")`. Aunque está bien imprimir un número o una frase, no les hemos dado un significado. Variables son simplemente nombres que podemos dar a valores como cadenas (strings), números y booleanos. Así se crea una variable llamada *'s'* en Python. Decimos que *'s'* es una cadena que tiene el valor `"¡Hola, Mundo!"`. 

```python
s = "¡Hola, Mundo!"
x = 88
happy = True
```
Presiona run. 

![Captura de pantalla de cómo se ve el ejemplo de variables en Trinket](../../img/variables_es.png "imagen de cómo se ven las variables en Trinket") 

Ten en cuenta que las variables no se imprimen automáticamente en la consola. En lugar de eso, la variable simplemente guarda la cadena, número o booleano en la memoria del ordenador. Podemos usar estas variables en otras sentencias. Por ejemplo, el siguiente código imprimiría `"Hola Nuevo Foundation"` en la consola:

```python
str1 = "Hola"
str2 = "Nuevo Foundation"
print(str1 + " " + str2)
```

También puedes hacer lo siguiente para imprimir cadenas juntas añadiendo espacios entre las palabras.

```python
str1 = "Hola"
str2 = "Nuevo Foundation"
print(str1, str2)
```
## ¡Qué tipo!

Antes de aprender a crear variables, necesitamos entender el concepto de **tipo**. El tipo describe qué se está almacenando en la caja.

Python es un lenguaje con tipado dinámico, lo que significa que, a diferencia de lenguajes como Java, no tienes que especificar el tipo de variable antes de asignarle un valor. Y si tienes un entero en la caja y luego quitas ese entero y colocas una cadena en la caja, Python te permitirá hacerlo. Pero debes usar la variable según su tipo.


{{% notice note %}}
Los siguientes son los tipos de datos importantes:

**Tipo** | **Descripción** | **Ejemplos**
--------|-----------|----------
`integer` | entero | `20`, `30`, `35`
`string` | una secuencia de `char` | `"Hello"`, `"Bonjour"`, `"Hola"`
`boolean` | tiene un valor de `true` o `false` | `true`, `false`
`float` | números fraccionarios | `2.0`, `3.14`, `9.33`

{{% /notice %}}

Revisemos las tres variables que mencionamos en el primer ejemplo e identifiquemos sus tipos de datos. `s` es una string, `x` es un int y `happy` es un boolean.

### Desafío

- Crea dos variables nuevas: Una variable llamada `comp` que almacene la cadena `"Computadora"`.
- Una variable llamada `cinco` que almacene el número `5`.

A continuación, usa las variables y lo que aprendiste en las actividades anteriores para `print` lo siguiente en la consola. ¡Debes usar las variables!

    Computadora
    5
    ComputadoraComputadora
    10
    ComputadoraComputadoraComputadora
    15

{{% notice tip %}}

Pista: Si estás atascado, considera usar el operador `+`. Recuerda que puedes usar las variables **comp** y **cinco** varias veces en la misma línea.

{{% /notice %}}

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>