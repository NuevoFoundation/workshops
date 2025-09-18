---
title: "Tuples (Tuplas)"
draft: false
weight: 2
---

Una tupla es también una colección ordenada de elementos, al igual que las listas, pero las tuplas son inmutables. Por lo tanto no puedes cambiar los elementos de una tupla después de asignarla (a diferencia de las listas, donde se permite). Esta naturaleza inmutable hace que las tuplas sean muy útiles cuando no quieres que tus datos sean modificados a lo largo del programa. Además, las tuplas se usan generalmente para almacenar elementos de diferentes tipos de datos. Mientras que defines una lista usando corchetes cuadrado (`[]`), una tupla puede crearse colocando todos los elementos entre paréntesis `()`, separados por comas.

```python
# crear una tupla de dos elementos de tipo String
mi_tupla = ('manzana', 'naranja')
```

{{% notice note %}}

Las tuplas también pueden crearse sin paréntesis. Sin embargo, es buena práctica usarlos.

{{% /notice %}}

Una tupla también puede tener elementos de distintos tipos.

```python
# una tupla con elementos de diferentes tipos de datos
mi_tupla = ('manzana', 1, 4.5)
```

### Acceder a los Elementos de una Tupla

Podemos acceder a los elementos de una tupla usando índices entre corchetes cuadrado `[]`, igual que en las listas. Además, al igual que en las listas, el índice comienza en `0`.

```python
# crear una tupla de tres elementos de tipo String
mi_tupla = ('manzana', 'naranja', 'mango')

print(mi_tupla[0]) ## imprime apple
print(mi_tupla[2]) ## imprime mango
```

### Combinar Dos Tuplas

Podemos combinar dos tuplas usando el operador `+`.

```python
frutas = ('manzana', 'naranja', 'mango') 
números = (1, 2, 3)

# combinar las tuplas frutas y números 
tupla_combinada = frutas + números
print(tupla_combinada) ## imprime ('manzana', 'naranja', 'mango', 1, 2, 3)
```

### Longitud de una Tupla

La función `len(tuple)` devuelve el número de elementos presentes en la tupla.

```python
frutas = ('manzana', 'naranja', 'mango') 

print(len(frutas))  ## imprime 3
```

### Reasignar una Tupla

Dado que las tuplas son inmutables, no podemos cambiar un elemento individual de la tupla. Por ejemplo, `fruits[0] = 'lemon'` dará un error porque intentamos cambiar el elemento en el índice `0` de `fruits`.
Pero sí podemos reasignar la variable que contiene la tupla (reemplazar la tupla completa).

```python
mi_tupla = ('manzana', 'naranja', 'mango')

print(mi_tupla)  ## imprime ('manzana', 'naranja', 'mango')

# reasignando mi_tupla
mi_tupla = (1, 2, 3) 

print(mi_tupla)  ## imprime (1, 2, 3)
```

### Eliminar una Tupla

Podemos eliminar una tupla por completo usando la palabra clave `del`.

```python
frutas = ('manzana', 'naranja', 'mango')

print(frutas) ## imprime ('manzana', 'naranja', 'mango')

# eliminando frutas
del frutas
print(frutas) ## da error ya que la tupla fruits ya no existe
```

### Desafío
Intentemos el mismo ejercicio que acabamos de hacer con listas, pero usando tuplas.

Comienza con la lista de frutas que aparece abajo. Imprime la lista de frutas y, para cada fruta, pregunta al usuario si le gusta. Si le gusta, consérvala. Si no le gusta, elimínala de la lista. Después, pide al usuario que agregue una fruta que falte en la lista. Añádela a la lista e imprime el número de frutas que al usuario le gustan.

```python
frutas = ['naranja', 'kiwi', 'banana', 'manzana', 'mango', 'limón']
```

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>