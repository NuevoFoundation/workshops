---
title: "Lists (Listas)"
draft: false
weight: 1
---

Las listas son una colección ordenada de elementos y pueden escribirse como valores separados por comas dentro de corchetes cuadrado `[]`. Como vimos en la lección sobre bucles, las listas pueden ser de cualquier tipo de dato, por ejemplo cadenas o enteros.

```python
# Creando una lista de 5 frutas
frutas = ['naranja', 'manzana', 'banana', 'manzana', 'mango']
```

Si quieres referirte a un elemento específico de una lista, puedes hacerlo usando índices (posición) dentro de corchetes cuadrado. El primer elemento tiene índice (posición) `0` y la lista continúa hasta `(número de elementos en la lista - 1)`. Por ejemplo, una lista con 6 elementos tendrá índices de 0 a 5.

```python
# Creando una lista de 5 frutas
frutas = ['naranja', 'manzana', 'banana', 'manzana', 'mango']

# Imprime el elemento en el índice 2
print(frutas[2])     ## imprime banana
```

**Índice** | **Elemento**
-------|-------
0 | naranja
1 | manzana
2 | banana
3 | manzana
4 | mango

{{% notice note %}}

Como puedes ver en este ejemplo, las listas pueden tener elementos duplicados.

{{% /notice %}}

En Python, las listas no tienen que ser todas del mismo tipo de dato, por lo que una sola lista puede contener una combinación de cadenas y números.

```python
# las listas también pueden tener distintos tipos de datos
mi_lista = ['dulce', 10, 2.5]
```

### Longitud de la Lista

Puedes obtener la longitud de la lista usando la función `len(list)` pasando el nombre de la lista como parámetro.

```python
length = len(frutas)  ## longitud = 5
```

### Añadir un Elemento a la Lista

Puedes agregar elementos a una lista usando la función `append`, `list.append(x)` donde `list` es el nombre de la lista y `x` es el elemento que quieres añadir. Añade el elemento al final de la lista.

```python
# Antes la lista es ['naranja', 'manzana', 'banana', 'manzana', 'mango']
frutas.append('limon')
# Ahora la lista es ['naranja', 'manzana', 'banana', 'manzana', 'mango', 'limon']
```

### Insertar un Elemento en un Indice Específico

Si quieres controlar dónde colocas un elemento nuevo, puedes insertarlo en un índice específico usando la función `list.insert(i, x)`. Aquí `list` es el nombre de la lista, `i` es el índice donde quieres insertar y `x` es el elemento que quieres insertar. **Nota**: esto desplazará todos los elementos a partir de la posición `i` un índice hacia la derecha.

```python
frutas.insert(1, 'guava')
# Ahora la lista es ['naranja', 'guava', 'manzana', 'banana', 'manzana', 'mango', 'limon']
```

### Eliminar un Elemento de la Lista

La función `list.remove(x)` busca la primera aparición del elemento dado `x` y lo elimina de la lista.

```python
frutas.remove('manzana')
# Ahora la lista es ['naranja', 'guava', 'banana', 'manzana', 'mango', 'limon']
```

{{% notice note %}}

`list.remove(x)` lanza un ValueError si el elemento `x` no está presente en la lista.

También, fíjate que la segunda instancia de `'apple'` aún está en la lista.

{{% /notice %}}


### Eliminar un elemento en una posición específica

La función `list.pop(i)` elimina el elemento en el índice `i`.

```python
frutas.pop(0)
# Ahora la lista es ['guava', 'banana', 'manzana', 'mango', 'limon']
```

{{% notice note %}}

Si no especificas el índice, `list.pop()` elimina el último elemento de la lista.

{{% /notice %}}


### Invertir los Elementos de la Lista

La función `list.reverse()` invierte el orden de los elementos de la lista.

```python
frutas.reverse()
#Ahora la lista es ['limon', 'mango', 'manzana', 'banana', 'guava']
```

### Obtener el Elemento Mínimo y Máximo de la Lista

La función `min(list)` devuelve el elemento mínimo de la lista y el máximo puede encontrarse con la función `max(list)`. Si tu lista es de números, devolverá el valor numérico más bajo o más alto. Si tu lista es de cadenas, devolverá el primero o el último en orden alfabético.

```python
mi_lista = [4, 1, 2, 5, 3]  ## Definiendo una nueva lista de enteros

print(min(mi_lista)) ## imprime 1, el elemento mínimo de mi_lista
print(max(mi_lista)) ## imprime 5, el elemento máximo de mi_lista

```
{{% notice note %}}

Si tu lista mezcla cadenas y números, las funciones `min` y `max` producirán un error.

{{% /notice %}}

### Desafío

Ahora inténtalo tú mismo. Empieza con la lista de frutas de abajo. Imprime la lista de frutas y, por cada fruta, pregunta al usuario si le gusta. Si le gusta, mantenla. Si no le gusta, elimínala de la lista. Después, pide al usuario que agregue una fruta que falte en la lista. Añádela a la lista e imprime cuántas frutas le gustan al usuario.

```python
frutas = ['naranja', 'kiwi', 'banana', 'manzana', 'mango', 'limón']
```

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>