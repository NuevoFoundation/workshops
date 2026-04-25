---
title: "¡Ayuda, Estoy Atrapado!"
description: "Setting up headphones"
date: 2019-07-23T11:45:38-07:00
weight: 12
prereq: "None"
difficulty: "Beginner"
draft: false
---
##### ¡No te preocupes! Revisa si alguna de las siguientes sugerencias te ayuda; si no, no dudes en ponerte en contacto con cualquiera de nosotros y te ayudaremos.

1.  La indentación es muy importante cuando trabajas en Python. Ten cuidado con los espacios y las tabulaciones en tu código, porque los errores de indentación a veces pueden ser bastante difíciles de detectar. 

    ![IndentationError: expected an indented block](../img/screenshot-indentationerror.png)

    Sin embargo, por el lado positivo, el formato estricto hace que el código Python sea muy limpio y organizado. ¿Están todas tus variables y funciones indentadas correctamente según las instrucciones?
2.  **SyntaxError: invalid syntax**  
    Comprueba que tus palabras clave estén escritas correctamente y que estés siguiendo la estructura definida.
3.  **IndentationError: unexpected indent**  
    Si ves esto, revisa tus indentaciones.
4.  **NameError: global name \'\-\--\' is not defined**
    Las variables que se definen dentro de una función solo se pueden usar dentro de esa función. Si intentas usar una variable de una función en otra función, recibirás este error. 
    
    Para hacer que la información esté disponible para otras funciones, devuélvela desde una función con la instrucción `return`, posiblemente asignándola a una variable. Luego pásala a otra función usando un parámetro. Consulta el tutorial de funciones en mi firma para una explicación detallada.
5.  **Cannot recognize error: spelling mistake?**  
    Normalmente recibes esto cuando cometes un error ortográfico en tus palabras clave. Revisa todas tus palabras clave.
6.  **TypeError: Can't convert 'int' object to str implicitly**  
    Comprueba que no estés intentando usar un entero en operaciones con cadenas. No puedes concatenar un `str` y un `int`; debes convertir primero el `int` a `str`.