---
title: "¡Ayuda, estoy atascado!"
description: "Consejos rápidos y soluciones a errores comunes"
date: 2023-09-12T11:45:38-07:00
weight: 12
prereq: "Ninguno"
difficulty: "Principiante"
draft: false
---
¡No hay problema! Vea si algo de lo siguiente le ayuda; si no, no dude en comunicarse con uno de nosotros y le ayudaremos.

1.  La sangría es muy importante cuando trabajas en Python. Tenga cuidado de los espacios y tabulaciones en su código porque los errores de sangría suelen ser difíciles de encontrar.

    ![IndentationError: expected an indented block](../img/screenshot-indentationerror.png)

    Sin embargo, el lado positivo es que el formato estricto hace que el código Python sea muy limpio y organizado. ¿Todas sus variables y funciones están sangradas correctamente según las instrucciones?

2.  **SyntaxError: invalid syntax.** 
    Asegúrese que las palabras claves estén escritas correctamente y que sigas la estructura definida.

3.  **IndentationError: unexpected indent.**
    Si ve esto, verifique sus sangrías.

4.  **NameError: global name \'\-\--\' is not defined.**
    Las variables que se definen dentro de una función solo se pueden usar dentro de la función. Si intenta utilizar una variable de una función en otra función, recibirá este error.

    Para que la información esté disponible para otras funciónes, la pasa fuera de una función con la instrucción `return`, posiblemente asignándola a una variable. Luego la pasas a otra función usando un parámetro. Consulte el enlace del tutorial de funciones para obtener una explicación detallada.

5.  **Cannot recognize error: spelling mistake?**
    Normalmente recibe este error cuando comete un error ortográfico en sus palabras claves. Verifique todas sus palabras claves.

6.  **TypeError: Can't convert 'int' object to str implicitly**
    Verifique para asegurarse de que no está intentando utilizar un integer en acciones de strings. No puede concatenar un string y un integer. Primero debe convertir el integer en un string.
