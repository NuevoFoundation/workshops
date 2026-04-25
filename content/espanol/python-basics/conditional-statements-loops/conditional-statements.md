---
title: "Declaraciones Condicionales"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 1
---

Ahora que conocemos lo básico sobre las declaraciónes print, las variables y cómo leer la entrada del usuario, podemos combinar todas estas increíbles habilidades con las declaraciones condicionales. Las declaraciones condicionales permiten que la computadora tome **decisiones** en función del **valor** de una expresión. En el mundo real, ¡usamos declaraciones condicionales todo el tiempo para tomar decisiones! Por ejemplo, si está lloviendo afuera, entonces uso un paraguas. En este ejemplo, evalué el clima exterior y, como estaba lloviendo, tomé la decisión secuencial de usar un paraguas.

¿Qué declaraciones condicionales se te ocurren que usas en la vida?

# Declaraciones If

Comenzaremos con una oración if en su forma más simple. Si miras el ejemplo del mundo real, verás ciertas palabras que se usan y que también aplican a las sentencias en programación. `if` nos indica que necesitamos tomar una decisión. ¿Está lloviendo? Esa pregunta se llama la expresión. Luego, **Si** está lloviendo afuera, entonces uso un paraguas. Esa es una oración que se aplica cuando la expresión es veraz.

```python
if (expr):
    statement
```

Arriba mostramos tres partes diferentes:

1. **If** – esto le dice a la computadora que vamos a decidir en base a la expresión dentro del paréntesis
2. **Expr** – esto representa la expresión que estamos evaluando. Si la expresión es "verdadera" entonces la computadora entrará en la declaraciones if y ejecutará la statement.
3. **Statement** – lo que la computadora completará si la expresión es "verdadera"

```python
x = 0
y = 5

if (x<y):       # verdadero
    print('si')
if (y<x):       # falso
    print('si')
if (x == 10):   # falso
    print('si')
```

Desglosemos el ejemplo anterior y decidamos por qué algunas frase son "verdaderas" o "falsas".

Se nos dan dos variables `x` y `y` y a cada una se le asigna un valor. En la primera declaraciones if estamos probando si el valor de `x` es menor que el valor de `y`. Como `0` es menor que `5`, ¡esto es verdadero! Entonces, la primera declaraciones `if` imprimirá yes.

Sin embargo, podemos ver que `y` no es menor que `x`, por lo que evalúa a `false`. El interior de la declaraciones `if` no se ejecutará entonces. Lo mismo aplica para la declaraciones `if` que evalúa si `x` es igual a `10`. Vemos que `x` es igual a `0`, así que esta expresión es `false`, y el interior de la declaraciones `if` no se ejecutará.

# Declaraciones Else

Ahora que sabemos cómo usar declaraciónes if para ejecutar condicionalmente una sola declaración o múltiples declaraciones, ¡veamos qué más podemos hacer con `else`!

A veces necesitas evaluar una condición para actuar en consecuencia si es `true`, pero si es `false` actuamos de manera diferente. Aquí está la forma más simple de la declaración `else`.

```python
if (expr):
    statement1
else: 
    statement2
```    

¡Esto es realmente como la declaración `if`! Sin embargo aquí, si la declaración `if` es `false` (no verdadera), el programa ejecutará automáticamente la `statement2` en la declaración `else`.

Un ejemplo de la vida real es: si tengo hambre, comeré. Else (en otras palabras, no tengo hambre), no comeré. ¡Veamos esto en código python!

```python
if (hambriento):
    comer
else:
    no_comer
```

### Desafío

¡Juntémoslo todo lo que hemos aprendido hasta ahora! Veamos si podemos crear un programa que solicite al usuario su nombre. El usuario puede escribir su nombre en la consola. Luego la computadora puede decidir si su nombre es igual al tuyo y imprimir una respuesta. ¡Else, imprime una respuesta diferente!

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Pista: Trata de verbalizar los diferentes caminos que puede tomar la computadora. Asegúrate de identificar cuáles son las condiciones del if y del else.
