---
title: "Funciones Integradas"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

Hay muchas funciones incorporadas en Python que pueden usarse para facilitar la escritura de código. Discutamos algunas de ellas aquí.

# sort()
Esta función se utiliza para ordenar los valores en estructuras de datos como arrays y listas.
```python
arr = [8,5,1,4,6]
arr.sort()
print('El arreglo ordenado es :',arr)
# imprime El arreglo ordenado es [1,4,5,6,8]
```

# find()
Devuelve la primera ocurrencia del patrón proporcionado a find() dentro de la cadena dada.
```python
str1 = "Hello World"
index = str1.find("World)")
print(index) # imprime 6
```

# len()
`len()` ayuda a encontrar el tamaño de la estructura de datos dada.
```python
arr = [10,5,4,2,3]
print(len(arr)) # imprime 5
```

# isdigit()
Esta función devuelve `True` si la cadena pasada como argumento consiste únicamente de dígitos; de lo contrario devuelve `False`.
```python
s = "123";  
print s.isdigit() # imprime True

s = "Hello World";
print s.isdigit() # imprime False

s = "123Hello"
print s.isdigit() # imprime False ya que tiene letras además de dígitos
```

# reverse()
Esta función se utiliza para invertir el contenido de un array o una lista.
```python
arr = [5, 6, 7, 8, 9];
arr.reverse();
print(arr) # imprime [9,8,7,6,5]
```

# replace()
Esta función reemplaza el primer argumento pasado a la función por el segundo argumento en la cadena dada.
```python
initial_str = "Me llamo Harry. Harry es un buen chico."
final_str = initial_str.replace("Harry", "Potter")
print(final_str) # imprime Me llamo Potter. Potter es un buen chico.
```

# append()
Esta función se utiliza para agregar un número, carácter o elemento de cualquier tipo de dato al final de una lista o un array.
```python
arr = [1,2,3,4,5];
arr.append(6);
print(arr) # imprime [1,2,3,4,5,6]

arr = ['Harry','Ram',1,2]
arr.append("Jenifer")
print(arr) # imprime [Harry,Ram,1,2,Jenifer]
```

# remove()
Elimina la primera ocurrencia del argumento pasado para el objeto dado. Si intentas eliminar un elemento que no está en la lista, lanzará una excepción indicando que el elemento no está en la lista.
```python
arr = [1,1,2,3,3]  
arr.remove(1)  
print(arr) # imprime [1,2,3,3]

arr.remove(4) # da una excepción indicando que el elemento no está en la lista
```

### Desafío 1
Crea un arreglo llamado `arr`

- Inicialízalo a `[1,2,3,4,5]`

- Agrega el número `6` al final y muéstralo.

- Invierte `arr` y muéstralo.

- Ordena `arr` y muéstralo.

- Muestra la longitud de `arr`

- Elimina el elemento 6 de `arr` y muéstralo.

- Muestra la longitud de `arr`,

#### Salida esperada
```Output
    [1,2,3,4,5,6]
    [6,5,4,3,2,1]
    [1,2,3,4,5,6]
    6
    [1,2,3,4,5]
    5
```

### Desafío 2
-Inicializa una cadena `s` con "Hello all.Hello people".

-Encuentra la ocurrencia de la palabra `Hello` en la cadena `s` y muéstrala.

-Reemplaza la palabra `Hello` por `Hi` en `s`.

-Comprueba si la cadena `s` contiene solo dígitos y muestra el veredicto.

#### Salida esperada
```Output
    0
    Hi all.Hi people.
    False
```

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
; manteniéndolo claro para principiantes. 
        Preserve technical terms, code syntax, and formatting. Only translate comments that explain concepts.
        Adapt cultural references appropriately. Don't translate the header key title; don't translate the image html