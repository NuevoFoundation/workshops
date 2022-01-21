---
title: "Actividad 4 - Condiciones"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

¡Muy bien! 

Cada vez estamos más cerca de hacer nuestros mensajes secretos. Pero también, ¡no olvidemos que tenemos que poder descifrar esos mensajes!

Para eso, vamos a ingresar en la consola un 1, si es que queremos encriptar un mensaje, o el número 2, si queremos desencriptarlo.

Para esto necesitaremos de las **CONDICIONES**.

{{% notice tip %}}


### Condiciones if / else

Una condición en programación es una instrucción o un grupo de instrucciones, que pueden ejecutarse o no, en base a si una condición es verdadera. Sería algo así: **SI** (if) pasa esto, ejecuta estas instrucciones, **SI NO** (else), ejecuta estas otras instrucciones.

Ejemplo

```
if(3 > 1){
  cout << "3 es mayor que 1" << endl;
}else{
  cout << "3 no es mayor que 1" << endl;
}
```
El programa imprimirá: 
```
3 es mayor que 1
```

Ahí estamos indicando que si `if` el número 3 es mayor a 1 `(3>1)`, que se ejecute lo que está entre sus llaves `{ }`. Y de lo contrario, que se ejecute lo que está en el bloque `else`. 
En el ejemplo, el bloque *else* no se ejecutará porque la condición del *if* es verdadera, ya que 3 es mayor que 1.

Para crear condiciones, usualmente usamos los siguientes **operadores lógicos** en los paréntesis `()` de las instrucciones **if**: 

Ejemplo: `a=5` y `b=3`
1. Menor que: `a < b` (¿5 es menor que 3?)
2. Menor o igual que: `a <= b` (¿5 es menor o igual a 3?)
3. Mayor que: `a > b` (¿5 es mayor a 3?)
4. Mayor o igual que: `a >= b`(¿5 es mayor o igual a 3?)
5. Igual que: `a == b` (¿5 es igual a 3?)
6. distinto que : `a != b` (¿5 es distinto que 3?)

{{% /notice %}}

Para la actividad, vamos a usar una condición para saber si lo que queremos es crear un mensaje secreto (encriptarlo) o descifrar un mensaje (desencriptarlo).

Para eso, debemos seguir los siguientes pasos:
1. Crea una variable del tipo int.
2. Ingresa por consola el contenido de esa variable.
3. Crea una condición **if** / **else** para saber si el número ingresado es igual a 1, por lo tanto, queremos encriptar un mensaje, o de lo contrario, queremos desencriptarlo.
4. Imprime por consola en cada caso que es lo que queremos hacer. Ej: "Encriptar un mensaje" o "Desencriptar un mensaje".

Como ayuda, recuerda que puedes volver a las otras actividades.

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/actividad-4?lite=true#main.cpp" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

