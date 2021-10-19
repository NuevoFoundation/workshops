---
title: "Actividad 7 - Input line"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

¡Felicitaciones!

Estás muy cerca de salvar por completo a la nación.

¡Solo falta poder ingresar una frase completa!

Para esto solo tenemos que hacer unos pequeños cambios.

Primero, debes usar la instrucción `getline()` para ingresar el string: 

```
string frase;
getline(cin, frase);
```
De esta manera, en la consola podemos ingresar un mensaje completo, no una sola palabra.


**Sigue estos pasos**, y finaliza el programa para salvar al Reino:

1. En la función main, cambia la instrucción `cin >> nombre; ` por `getline(cin, nombre)`.

2. En ambas funciones, agrega una condición if en el ciclo for, para que si el caracter que estamos visitando es mayor o igual `>=` al caracter `a` y menor o igual`<=` al caracter `'z'`, entonces que se ejecute todo lo que teníamos dentro del ciclo. Esto servirá para no encriptar signos de admiración, comas, o espacios.

Como ejemplo recuerda la estructura de la entrada:
Primero debe ir el mensaje encriptado o a encriptar, luego un 1, si queremos encriptar el mensaje, o 2, si queremos desencriptarlo. Por último, debe ir la palabra clave.


¡Crea tus propios mensajes secretos, o desencripta la de tus compañeros!

{{< alert theme="warning" >}}**Ten cuidado**, en este programa siempre debemos escribir los strings y caracteres en **letra minúscula**.  {{< /alert >}}

¡Recuerda que siempre puedes volver a las actividades anteriores para recordar algo!


<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/actividad-7?lite=true#main.cpp" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

