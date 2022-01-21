---
title: "Usando Repl.It"
date: 2019-07-25T13:24:17-07:00
weight: 1
draft: false
---

Para ayudar a los reyes, vamos a crear un programa en el lenguaje llamado C++, donde podamos ingresar un mensaje, y el programa lo modifique de una manera determinada para hacerlo secreto.

## Usando Repl.it

Vamos a utilizar la herramienta Repl.it para jugar con nuestros códigos de C++. Este es un ejemplo de una ventana interactiva como las que usaremos en todo el tutorial:

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/activity-0?lite=true#main.cpp" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Antes de empezar, entendamos como funciona esta ventana. El programa `main.cpp` contiene las instrucciones que la computadora va a ejecutar o "correr" (Run en inglés). Al presionar el botón **Run**, le estás diciendo a la computadora que ejecute las instrucciones que están en el programa. Los resultados del programa los puedes ver en la pantalla negra que está debajo, en la pestaña **console**.

Ahora explicaremos el código que tenemos en el archivo `main.cpp` 

{{% notice tip %}}

### Bibliotecas (Library) e instrucciones "#include"

Mira el inicio del código. Ahí puedes ver la siguiente línea:

```
#include <iostream>
```

Esta instrucción nos permite agregar la biblioteca `iostream` a nuestro programa. Una **biblioteca** es el lugar donde se agrupan en C++ las funciones (o instrucciones) relacionadas a un tema en particular. Hay bibliotecas para dibujar, otras para conectarse a internet, otras para hacer operaciones matemáticas. `iostream` es una biblioteca básica para ingresar datos a nuestro programa y generar mensajes de salida. 

### Comentarios (Comments)

La línea gris que empieza con `//` se llama **comentario**. Estos son notas en el código que nos ayudan a explicar qué está pasando. Como los comentarios son ignorados por la computadora, suelen ser usados para que otros puedan entender lo que nuestro código está haciendo.

### Namespace std
```
using namespace std;
```
Esta linea nos da acceso a algunas palabras reservadas de C++. Una **palabra reservada** es una palabra que tiene un significado específico en el lenguaje de programación, por lo que no podemos usar esa misma palabra para identificar o nombrar otra cosa.
En este caso, estamos usando las palabras reservadas **std**, que quiere decir las palabras reservadas estándar, que son las que casi todo programa usa, por lo que es importante incluir esta instrucción.
 `using` indica que estamos usando el `namespace` (el espacio en el que se guardan las palabras reservadas) llamado `std` (estándar). 

### Función Main
```
int main(){
    
    return 0;
}
```
**main** es la función que tiene que estar siempre en los programas de C++. Adentro de sus llaves `{ ... }` estará el código que se correrá al poner run.   
`return 0;` indica el fin del programa. Si escribiésemos instrucciones después de esta línea, el programa no las ejecutará.
{{% /notice %}}

{{< alert theme="warning" >}}Toda instrucción de C++ debe terminar con un **punto y coma** `;` {{< /alert >}}
