---
title: "Actividad 5 - Código Ascii"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

¡Genial! 

En esta actividad vamos a encriptar (hacer secreto) el nombre del destinatario.

Vamos a utilizar el **Código Ascii**

{{% notice tip %}}


### Código Ascii

El código Ascii muestra que cada caracter tiene un valor numérico. Por ejemplo, el caracter `A` es el número 65, el `B` es el 66, el `C` el 67, etc.

La siguiente lista muestra el valor de los caracteres más usados:

![Lista del código ASCII](../media/ascii.PNG)

Que cada caracter tenga un valor, nos servirá para sumar o restar letras, y así cambiar el orden de ellas de una manera determinada. Nos permite convertir caracteres (`char`) en números (`int`) y viceversa.

Ejemplo

```
char letra = 'A';
int valor_letra = letra;

cout << letra << " = " << valor_letra << endl;
```
Esto imprimirá:
```
A = 65
```

En este ejemplo, guardamos el caracter `A` en una variable tipo **char**. Luego, en una variable tipo **int** guardamos la variabale tipo char, pero como la segunda variable guarda números, convertirá el caracter en su valor numérico según el código ascii.

De esta manera, podríamos hacer lo contrario, por ejemplo:
```
int valor_letra = 67;
char letra = valor_letra;
cout << valor_letra << " = " << letra << endl;
```
Esto imprimirá:
```
67 = C
```
{{% /notice %}}

Para crear el mensaje secreto usaremos una palabra clave, a partir de la cual codificaremos el nombre. La idea es recorrer cada caracter del nombre con una instrucción **for**, y al mismo tiempo recorrer cada caracter de la palabra clave. Entonces sumaremos el valor del caracter del nombre y de la palabra clave, y el resultado será un caracter nuevo, que hará que el mensaje esté encriptado.

Por ejemplo, si mi palabra clave es `reina` y el nombre que quiero encriptar es `programador`, el programa tiene que sumar primero la `'r'` y la `'p'`, y el resultado guardarlo en lugar de la 'p' en el string "programador". Luego sumaría la `'r'` y la `'e'`, la `'o'` y la `'i'`, etc. Cuando estemos en el caracter 5 del string programador (contado el primero como 0), tendremos que dar la vuelta en el string reina y comenzar en el caracter 0 devuelta, es decir, la letra `'r'`, ya que el string reina no tiene más caracteres.

Para eso, vamos a reunir parte de lo que ya hicimos, y debemos seguir los siguientes pasos:

1. Crea una variable del tipo string para que sea la palabra clave.
2. Ingresa su valor por consola.
3. Declara una variable tipo int e inicializarla en 0. A esta variable, le sumaremos 1 en cada ciclo del for para recorrer la palabra clave.
4. En la instrucción for, crea una variable tipo int que sea igual a la suma del caracter del nombre (`nombre[i]`) y el caracter de la palabra clave en la posición del contador (`clave[contador]`). A esta suma le debemos restar una letra minúscula `'a'` para que la suma corresponda a una letra y no otro caracter del código ascii.
5. Utiliza una instrucción if para determinar si la suma de caracteres corresponde a un caracter mayor a `'z'`. Si es así, a este número se le debe restar 25 (la cantidad de letras del abecedario) para que el número de la vuelta, y comience por la letra `'a'`.
6. Iguala el caracter `nombre[i]` a la variable int con la suma. Esto cambiará la letra original por el carcater nuevo.
7. Suma 1 al contador que llevamos de la palabra clave.
8. Programa una condición donde si el contador de la palabra clave, es mayor o igual al largo del string clave, el contador volverá a valer 0.
9. Por último, luego de la instrucción for, imprime por consola la variabale nombre.

Como ayuda, recuerda que puedes volver a las otras actividades.

Una vez completado los pasos, ¡comienza a jugar y a encriptar tus palabras! Apretá **Run** y escribe en la consola la palabra clave seguida por la tecla enter, y luego el nombre o palabra a encriptar, seguido también de un enter. Por ejemplo, puedes copiar y pegar lo siguiente en la consola:
```
programador
reina
```
{{< alert theme="warning" >}}**Ten cuidado**, en este programa siempre debemos escribir los strings y caracteres en **letra minúscula**.  {{< /alert >}}


<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/actividad-5?lite=true#main.cpp" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{< alert theme="danger" >}}**Cuidado**. Para pegar algo en la consola, haz click derecho pegar. De otra forma puede no funcionar. {{< /alert >}}

