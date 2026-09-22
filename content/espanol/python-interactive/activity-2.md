---
title: "Actividad 2 - Cómo Crear y Almacenar tu Menú"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---
## Prerrequisitos
- <a href="../../python-basics/data-structures/lists/" target="_blank">Listas</a>

## Cómo Crear y Almacenar tu Menú
Ahora que tenemos un banner para tu restaurante, empecemos a pensar en cómo organizar la información sobre tus platillos. ¿Recuerdas que antes decidiste qué alimentos y bebidas querías vender en tu restaurante? Pues bien, ahora necesitamos averiguar cómo almacenar toda esa información. Necesitamos almacenar el nombre, precio y descripción de cada elemento de tu menú.  
Para hacer esto, podemos usar lo que se llama un diccionario de Python para llevar un registro de esta información.

¡Vamos a usar un diccionario donde los valores sean Listas!  
Haciendo esto, podemos tener el precio del artículo y la descripción del mismo disponibles para nosotros. Cuando tenemos una lista u otro contenedor como valor de una clave en un diccionario, terminamos con un **diccionario anidado**. Dado que necesitamos contener información tanto de precio como de descripción, debemos almacenarla en nuestras listas en un orden específico.

Esta es la estructura que usaremos:  
{artículo : [precio, descripción]}  
Asegurándonos de seguir esta estructura al crear el **diccionario anidado**, podemos garantizar que acceder al precio y a la descripción más adelante será sencillo.

Aquí tienes un ejemplo de un diccionario anidado, pero recuerda aplicar la estructura anterior cuando hagas tu menú.  
```python
#estructura
#{palabra:[definición, parteDelDiscurso, pronunciación]}
diccionarioPequeño = {'juguete':['un objeto con el que los niños juegan', 'sustantivo', 'ju-gete'], 'caminar':['forma de moverse a un ritmo regular y lento, levantando un pie después del otro, en secuencia', 'verbo', 'ca-mi-nar']}
```

Vuelve al enlace de `Replit` de antes y agrega código que almacene tu menú en una variable llamada `dictMenu`. Recuerda hacer que `dictMenu` sea una variable global - no la pongas en la función `main()`, en su lugar colócala en la parte superior de tu código para que pueda ser accedida desde cualquier función.  
Consejo: Tu precio es un `float` y tu descripción es un `string`.

Elige tus 5 alimentos/bebidas favoritos para que estén en tu menú.  
Por ejemplo: Pasta con Pesto Cremoso, Ensalada César, Limonada Rosa, Cerveza de Raíz, Té Helado, Pastel de Zanahoria, Rollitos Primavera