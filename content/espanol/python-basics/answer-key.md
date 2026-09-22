```markdown
---
title: "Python: Conceptos básicos - Clave de respuestas"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Estas son soluciones de ejemplo. Muchos retos tienen múltiples respuestas válidas, especialmente aquellos que te piden crear tus propios ejemplos. ¡Tu solución es correcta si produce el resultado esperado!
{{% /notice %}}

## Conceptos básicos

### Escribir en la Consola - Reto 1

```python
print("¡Hola, Mundo!")
```

Salida:
```
¡Hola, Mundo!
```

### Escribir en la Consola - Reto 2

Agrega una segunda declaración print con cualquier texto que te guste:

```python
print("¡Hola, Mundo!")
print("¡Estoy aprendiendo Python!")
```

### Variables - Reto

Usando `comp = "Ordenador"` and `five = 5`, imprime la siguiente salida:

```python
comp = "Ordenador"
five = 5
print(comp)
print(five)
print(comp + comp)
print(five + five)
print(comp + comp + comp)
print(five + five + five)
```

Salida:
```
Ordenador
5
OrdenadorOrdenador
10
OrdenadorOrdenadorOrdenador
15
```

### Leer de la Consola - Reto

```python
print("¡Bienvenido!")
print("¿En qué puedo ayudarte hoy?")
value = input()
print("Preguntaste: " + value + "?")
print("No sé la respuesta a " + value + ". ¡Adiós!")
```

Ejemplo de salida (si el usuario escribe "¿Qué es Python?"):
```
¡Bienvenido!
¿En qué puedo ayudarte hoy?
Preguntaste: ¿Qué es Python?
No sé la respuesta a ¿Qué es Python?. ¡Adiós!
```

## Tipos de Datos

### Cadenas de texto (Strings) - Reto 1

Combina tu nombre y apellido:

```python
first = "Nuevo"
last = "Fundación"
print(first + " " + last)
```

Salida:
```
Nuevo Fundación
```

### Cadenas de texto (Strings) - Reto 2

Tres maneras de imprimir "Nuevo Fundación" usando cada vez dos símbolos `+`:

```python
print("Nuevo" + " " + "Fundación")
print("Nuevo " + "Fun" + "dación")
print("Nue" + "vo Fundac" + "ión")
```

¡Hay muchas soluciones válidas! Cualquier combinación que produzca "Nuevo Fundación" usando exactamente dos símbolos `+` es válida.

### Números - Reto 1

```python
print(2 - 19)
print((3 + 5) * 6)
print((13 + 5 * 8) / (6 - (3 + 7)))
```

Salida:
```
-17
48
-13.25
```

Explicación matemática para la tercera expresión:
- Numerador: 13 + (5 * 8) = 13 + 40 = 53
- Denominador: 6 - (3 + 7) = 6 - 10 = -4
- Resultado: 53 / -4 = -13.25

### Números - Reto 2

{{% notice warning %}}
El texto del taller dice `"527 time 199 is: __"` — parece ser un error tipográfico, debería ser "times" en lugar de "time" en el taller original. La respuesta a continuación coincide exactamente con el texto del taller.
{{% /notice %}}

```python
print("527 time 199 is: " + str(527 * 199))
```

Salida:
```
527 time 199 is: 104873
```

Recuerda usar `str()` para convertir el número a una cadena antes de combinarlo con `+`.

### Booleanos - Reto 1

{{% notice warning %}}
El código del taller para la segunda expresión tiene un paréntesis fuera de lugar: `print((3 + 5) * 6) == (65 - 17)`. Esto imprimirá `48` pero no mostrará el resultado booleano. La versión corregida pone la comparación dentro de `print()`.
{{% /notice %}}

```python
print(5 + 8 < 10)
print((3 + 5) * 6 == (65 - 17))
```

Salida:
```
False
True
```

- 5 + 8 = 13, y 13 < 10 es `False`
- (3 + 5) * 6 = 48, y 65 - 17 = 48, entonces 48 == 48 es `True`

### Booleanos - Reto 2

```python
print(54 < (10 + 32))
print((37 / 5) != 7)
print("Hola" + "Mundo" == "Hola Mundo")
print(False == False)
```

Salida:
```
False
True
False
True
```

- 54 < 42 es `False`
- 37 / 5 = 7.4, y 7.4 != 7 es `True`
- "Hola" + "Mundo" = "HolaMundo" (¡sin espacio!), entonces "HolaMundo" == "Hola Mundo" es `False`
- False == False es `True`

### Booleanos - Preguntas Teóricas

```python
print((11 - 2 < 10) and (7 + 3 > 10))
print((True or 3 < 1) and (False or 3 > 1))
```

Salida:
```
False
True
```

- (11 - 2 < 10) = (9 < 10) = `True`, (7 + 3 > 10) = (10 > 10) = `False`. True `and` False = `False`
- (True `or` False) = `True`, (False `or` True) = `True`. True `and` True = `True`

### Booleanos - Reto 3

Este reto es abierto. Aquí hay algunos ejemplos de expresiones que podrías intentar:

```python
print(100 > 99)           # True
print(len("hola") == 5)   # False (4 no es igual a 5)
print(10 % 3 == 0)        # False (10 dividido por 3 deja residuo 1)
print(not True)           # False
```

¡Cualquier expresión Boolean válida funcionará!

## Condicionales y Bucles

### Condicionales - Reto

```python
print("¿Cómo te llamas?")
name = input()
if name == "Nuvi":
    print("¡Ese es mi nombre también!")
else:
    print("¡Mucho gusto, " + name + "!")
```

Tu nombre y respuestas serán diferentes. Lo importante es la estructura `if`/