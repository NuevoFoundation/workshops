---
title: "Condición Else-if"
draft: false
weight: 2
---

En el ejercicio anterior, aprendimos las condiciones básicas if-else. Si necesitas un repaso rápido, puedes revisar <a href="../../python-basics/conditional-statements">Declaraciónes Condicionales</a>.

En esta sección, ampliaremos el tema para introducir una nueva condición llamada "elif".

### Condición Elif

La palabra clave **Elif** representa la condición "else-if". Un ejemplo del mundo real sería: Si tengo mucha hambre, me comeré un pastel; else if solo tengo un poco de hambre, comeré una manzana; else no comeré nada. Se usa cuando quieres probar otra condición si la primera no es verdadera.

```python
# Esta es la sintaxis básica de elif
if expression:
    statement(s)
elif expression:
    statement(s)
else:
    statement(s)
```

#### Veamos un ejemplo
```python
# Este es un ejemplo
if 1 > 3:
    print('1>3')
elif 1 == 3:
    print('1=3')
else:
    print('1<3')
```
Como podemos ver, la primera expresión, `1` mayor que `3`, es falso, por lo que evalúa a `false`. El contenido del bloque `if` no se ejecutará. Luego evaluaremos la expresión del `elif`, `1` es igual a `3`, que también evalúa a `false`. El contenido del `elif` tampoco se ejecutará. Entonces se imprimirá lo que hay en `else`.

### Advertencia: `elif` es diferente de `if`  
#### Veamos dos ejemplos
#### Ejemplo A
```python
# Este es el Ejemplo A de dos declaraciónes if
if 1 == 1:
    print('1=1')
if 3 == 3:
    print('3=3')
else:
    print('wrong')
```
El Ejemplo A imprimirá:

```
1 = 1
3 = 3
```

#### Ejemplo B
```python
# Este es un ejemplo de sentencias elif
if 1 == 1:
    print('1=1')
elif 3 == 3:
    print('3=3')
else:
    print('wrong')
```
El Ejemplo B imprimirá:

```
1 = 1
```

En el Ejemplo A evaluamos la primera declaración `if` (`1==1`) como `true`. Entonces se ejecutará el contenido de la primera `if`. Luego evaluaremos la segunda declaración `if` (`3==3`) también como `true`. El contenido de la segunda `if` también se ejecutará.

En el Ejemplo B evaluamos la primera declaración `if` (`1==1`) como `true`. Entonces el resto (las partes `elif` y `else`) no se evaluarán ya que el `if` ya se cumplió.

#### Desafío
¿Puedes utilizar los conocimientos que aprendiste en Python-Basics-Booleanos para crear tu propio ejemplo con `elif`?
Quizás quieras repasar booleanos para completar este desafío.
- <a href="../../python-basics/data-types/booleans">Booleanos</a>
<br/><br/>

<iframe src="https://trinket.io/embed/python/ef70399cdf9a" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>