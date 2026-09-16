---
title: "Sets (Conjuntos)"
draft: false
weight: 3
---

Al igual que una lista, un conjunto es una colección de elementos. La diferencia entre un conjunto y una lista es que un conjunto no puede contener duplicados. Entonces, si tienes 5 chocolates y los pones en un conjunto, solo te quedará 1 chocolate porque se eliminarán los duplicados. 😢

<a href = "https://www.youtube.com/watch?v=mLIuHU5Sj5w">
<img src="../../img/sets_example.jpg" width="500" alt="Picture of two circles with chess and ping pong in the left circle, soccer and cricket bat in the right circle, and basketball and badminton in both circles where they overlap" />
</a>

En la imagen de arriba, el lado izquierdo representa **<font color="#b00020">Juegos de Interior</font>** (Ajedrez y Tenis de Mesa) mientras que el lado derecho representa los **<font color="#2e6b2e">Juegos de Exterior</font>** (Críquet y Fútbol). La parte central representa la parte común de ambos conjuntos. Estos son los juegos que pueden jugarse tanto en interiores como en exteriores (Baloncesto y Bádminton). La parte central también se conoce como la intersección entre dos conjuntos.

{{% notice tip %}}
Un conjunto se crea usando la función `set()` o colocando todos los elementos entre un par de llaves.
{{% /notice %}}

```python
juegosInterior = set(["Ajedrez", "Tenis de Mesa", "Baloncesto", "Bádminto"])
juegosExterior = {"Críquet", "Fútbol", "Baloncesto", "Bádminto"}
print('** Juegos de Interior **')
print(juegosInterior)
print('** Juegos de Exterior **')
print(juegosExterior)
```

**Output**
```
** Juegos de Interior **
set(["Ajedrez", "Tenis de Mesa", "Baloncesto", "Bádminto"])
** Outdoor Games **
set(["Críquet", "Fútbol", "Baloncesto", "Bádminto"])
```

### Unión de Conjuntos
Si tenemos 2 conjuntos como los anteriores, la unión de estos dos conjuntos contiene los juegos de ambos conjuntos. El resultado será un nuevo conjunto. Los duplicados se eliminarán.

El símbolo usado para la unión es `|`.

```python
todoLosJuegos = juegosInterior | juegosExterior
print('** Todo Los Juegos **')
print(todoLosJuegos)
```

**Output**
```
** Todo Los Juegos **
set(["Ajedrez", "Tenis de Mesa", "Baloncesto", "Bádminto", "Críquet", "Fútbol"])
```

### Intersección de Conjuntos
La intersección de 2 conjuntos será el conjunto que contiene los juegos que son tanto de interior como de exterior.

El símbolo usado para la intersección es `&`.

```python
juegosComun = juegosInterior & juegosExterior
print('** Juegos Comun **')
print(juegosComun)
```

**Output**
```
** Juegos Comun **
set(["Baloncesto", "Bádminto"])
```

### Diferencia de Conjuntos
La diferencia de 2 conjuntos será el conjunto que contiene los juegos de un conjunto que no están presentes en el otro conjunto.

El símbolo usado para la diferencia es `-`.

```python
juegosSoloInteriores = juegosInterior - juegosExterior
print('** Juegos Solo Interiores **')
print(juegosSoloInteriores)
```

**Output**
```
** Juegos Solo Interiores **
set(["Ajedrez", "Tenis de Mesa"])
```


### Imprimir los Elementos de un Conjunto
No puedes imprimir los elementos de un conjunto usando el número de índice como en una lista. Los elementos de un conjunto no están en una secuencia fija.

Por lo tanto, no puedes hacer algo como `juegosInterior[0]` o `juegosInterior[1]` como sí podrías hacer en una lista. Sin embargo, puedes recorrer los elementos de un conjunto usando un bucle `for`.

```python
for g in juegosInterior:
  print(g)
```

**Output**
```
Ajedrez
Tenis de Mesa
Baloncesto
Bádminto
```


### Agregar elementos a un conjunto
Podemos usar la función `.add` para añadir un nuevo juego a un conjunto. 
```python
juegosInterior.add("Carrom")
print('** Juegos Interiores **')
print(juegosInterior)
```


**Output**
```
** Juegos Interiores **
set(["Ajedrez", "Tenis de Mesa", "Baloncesto", "Bádminto", "Carrom"])
```


### Eliminar elementos de un conjunto
Podemos usar la función `.discard` para eliminar un elemento del conjunto. 
```python
juegosInterior.discard("Ajedrez")
print('** Juegos Interiores **')
print(juegosInterior)
```


**Output**

```
** Juegos Interiores **
set(["Tenis de Mesa", "Baloncesto", "Bádminto", "Carrom"])
```
{{% notice note %}}
Si eliminas un elemento que no está presente en el conjunto, no obtendrás ningún error. Por otro lado, si intentas eliminar un elemento que no está presente en una lista, ¡obtendrías un `ValueError`!
{{% /notice %}}


### Desafío
Probemos el mismo ejercicio que hicimos con Listas y Tuplas, pero usando Conjuntos.

Empieza con la lista de frutas a continuación. Imprime la lista de frutas y para cada fruta, pregunta al usuario si le gusta. Si le gusta, mantenla. Si no le gusta, elimínala de la lista. Luego, pide al usuario que agregue una fruta que falte en la lista. Agrégala a la lista e imprime el número de frutas que le gustan al usuario.

```python
frutas = ['naranja', 'kiwi', 'banana', 'manzana', 'mango', 'limón']
```

<iframe title="Desafío - Codebunga" src="https://codebunga.com/embed/i7wzei96" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
