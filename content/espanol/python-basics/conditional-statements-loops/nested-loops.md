---
title: "Bucles Anidados"
description: "Aplicaciones avanzadas para bucles"
date: 2020-07-16T00:00:00Z
weight: 4
---


### Bucles Anidados
*Nested loops* (Bucles Anidados) se basa en lo que aprendimos sobre bucles for y bucles while en el ejercicio anterior. Puede que quieras revisar la página <a href="../../../python-basics/loops" target="blank">For-loop and While-loop</a> antes de continuar.

En esta sección usaremos un bucle dentro de otro, lo que se llama nested loops o *bucles anidados*.
<hr/>

### Bucle while anidado
```python
#Este es el formato para un bucle while anidado
while expressionA:
    while expressionB:
        statement(B)
    statement(A)
```
En el `while` anterior, cuando expressionA produce `False`, se omitirá todo el bloque. Cuando expressionA produce `True`, iremos al bucle while interior y comprobaremos expressionB. Si expressionB produce `True`, se ejecutará statement(B). Si expressionB produce `False`, se omitirá el bucle while interior y se continuará con statement(A).

Si expressionA produce `False`, ninguna de las sentencias se ejecutará; statement(A) y statement(B) se ejecutarán si y solo si tanto expressionA como expressionB producen `True`.

Veamos un ejemplo de bucle while anidado.
 ```python
 #Este es el ejemplo de un bucle while anidado.
 x = 0
 y = 0
 #A continuación nuestro bucle exterior
 while x < 3:
     #Imprime si "x < 3" es True
     print("Pasa por el bucle externo while, x es", x, "y es", y, sep = " ")
     #A continuación nuestro bucle interior
     while y < 5:
         #Imprime si "y < 5" es True
         print("Pasa por el bucle interno while, x es", x, "y es", y, sep = " ")
         y += 1
     #Estas líneas se ejecutan después de terminar cada bucle interior.
     x += 1
     y = 0
 ```
Este es el resultado de nuestro ejemplo.

 ```output
Pasa por el bucle externo while, x es 0 y es 0
Pasa por el bucle interno while, x es 0 y es 0
Pasa por el bucle interno while, x es 0 y es 1
Pasa por el bucle interno while, x es 0 y es 2
Pasa por el bucle interno while, x es 0 y es 3
Pasa por el bucle interno while, x es 0 y es 4
Pasa por el bucle externo while, x es 1 y es 0
Pasa por el bucle interno while, x es 1 y es 0
Pasa por el bucle interno while, x es 1 y es 1
Pasa por el bucle interno while, x es 1 y es 2
Pasa por el bucle interno while, x es 1 y es 3
Pasa por el bucle interno while, x es 1 y es 4
Pasa por el bucle externo while, x es 2 y es 0
Pasa por el bucle interno while, x es 2 y es 0
Pasa por el bucle interno while, x es 2 y es 1
Pasa por el bucle interno while, x es 2 y es 2
Pasa por el bucle interno while, x es 2 y es 3
Pasa por el bucle interno while, x es 2 y es 4
 ```

#### Preguntas
¿Puedes intentar averiguar cómo cambian los valores de x e y y explicar por qué?

(**Pista**: ¿Cuántas veces recorremos el bucle exterior y el bucle interior por separado?)

<hr/>

### Desafío Uno
Intenta cambiar los enteros en el bucle while anidado y predice las salidas. Luego ejecuta el código y observa los resultados. ¿Coinciden con tus predicciones?

<iframe src="https://trinket.io/embed/python/f3c616d39391" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
<br/><br/>
<hr/>

### Bucle for anidado

```python
#Este es el formato para un bucle for anidado
for variableA in rangeA:
   for variableB in rangeB:
      statements(B)
   statements(A)
```
En el bucle `for` anterior, cuando variableA no está en rangeA, se omitirá todo el bloque. Cuando variableA está en rangeA, iremos al bucle for interior. Si variableB está en rangeB, se ejecutará statement(B). Si variableB no está en rangeB, se omitirá el bucle for interior y se continuará con el bucle exterior.

Si variableA no está en rangeA, ninguna de las sentencias se ejecutará; statement(B) y statement(A) se ejecutarán si y solo si variableA está en rangeA y variableB está en rangeB.

Veamos un ejemplo.

```python
# Este es el ejemplo de un bucle for anidado
# A continuación nuestro bucle exterior
for n in range(0, 3):
    # A continuación nuestro bucle interior
    for m in range(0, 3):
        # Imprime si m está en range(0, 3)
        print("(", n, ",", m, ")", end = " ")
    # Imprime si n está en range(0, 3)
    print("")
```
Este es el resultado de nuestro ejemplo.

```output
( 0 , 0 ) ( 0 , 1 ) ( 0 , 2 ) 
( 1 , 0 ) ( 1 , 1 ) ( 1 , 2 ) 
( 2 , 0 ) ( 2 , 1 ) ( 2 , 2 ) 
```

#### Preguntas
¿Puedes intentar explicar el patrón de impresión?

(**Pista**: ¿Cuántas veces recorremos el bucle exterior y el bucle interior por separado?)

<hr/>

### Desafío Dos
Intenta cambiar los enteros en el bucle for anidado y predice las salidas.
Luego ejecuta el código y observa los resultados. ¿Coinciden con tus predicciones?

<iframe src="https://trinket.io/embed/python/64c90dd23a3e" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

#### Preguntas
Intenta inicializar n y m. ¿Esto cambiará nuestra salida de los bucles anidados y por qué?
Luego ejecuta el código y observa los resultados. ¿Coinciden con tus predicciones?

<iframe src="https://trinket.io/embed/python/c94af8e20690" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

#### Preguntas
Al final de esta sección, pensemos en las siguientes preguntas:
*1*. ¿Por qué la inicialización no cambia la salida?

(**Pista**: ¿Qué representa la variable en el bucle for?)

*2*. ¿Qué deberíamos hacer si queremos empezar a imprimir desde (1, 1)?

(**Pista**: ¿Qué pasaría si cambiamos los rangos?)

### Desafío Tres

Usando un `for` anidado o un `while` anidado, intenta imprimir el siguiente patrón

```
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5
```

**Pista**: para imprimir sin salto de línea puedes usar `print(x, end=" ")`. Y para forzar un salto de línea puedes usar `print()`.