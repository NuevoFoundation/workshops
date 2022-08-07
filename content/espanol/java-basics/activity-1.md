---
title: "Imprimir Declaraciones y Añadir Comentarios"
description: "Guía introductoria al método println() y comentarios en Java."
date: 2020-07-08T00:00:00Z
weight: 2
---

### 1. Deja que el programa hable! 

Vamos a escribir un programa que diga `Hello World` luego de escribir la siguiente línea de código `System.out.print("Hello World");` 

El programa imprimirá lo que escribas entre los paréntesis de `System.out.print(`. Cada línea de código termina con `;`.

Añada más declaraciones para imprimir números, escribiendo los números entre los paréntesis (i.e. `System.out.print(2020)`) o cualquier símbolo, escribiendo el símbolo entre 2 comillas simples `'` (i.e. `System.out.print('@')`).

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicosHelloWorld?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% notice tip %}}
#### Te fijaste que todas las declaraciones que escribistes fueron impreses en una línea?
Aveces queremos añadir una línea entre medio cuando escribimos. Para lograr eso, tenemos que usar el siguiente código `System.out.println();` 

(Nota: escribimos `println` en vez de `print` para crear una línea nueva)

Añada una línea nueva a todas las declaraciones que hemos hecho hasta ahora.
{{% /notice %}}

{{% notice tip %}}
#### Cómo imprimir multiples símbolos en una línea de código?
Apredimos que para imprimir símbolos, los escribimos entre 2 comillas sencillas `'`, pero cómo podemos imprimir multiples símbolos en una línea?

Para lograrlo, ponemos escribir los multiples símbolos entre 2 comillas dobles `"` (i.e. `System.out.print("@ , - h A #");`)

{{% /notice %}}

{{% notice tip %}}
#### !! Importante !! Aveces no se puede escribir caracteres entre las comillas dobles " "
Cuando quieres poner caracteres entre medio de `" "` en una declaración de imprimir, es fácil confundir a la computadora en cuanto a qué caracteres debería imprimir.

Por ejemplo, cómo le dejas saber a la computadora que debe imprimir `"`? 

Si escribes `System.out.print(""");`, causarás un error, por que la computadora no puede identificar dónde acaba el texto. 

Hay ciertos caracteres que necesitan ser <b>escaped</b> añadiendo `\` en frente de ellos.

     System.out.print("\"");  // esto imprime "

Otros caracteres que necesitad ser <b>escaped</b> en Java son: `'`, `"`, `\`.
{{% /notice %}}

### 2. Imprima un Búho
Vamos a conocer el primer amigo de 🐥 Patrick, el búho Minerva 🦉!

Con lo que has aprendido, re crea la imágen del búho con solo 4 líneas de código (Art credit: asciiart.eu/animals/birds-land)

        , ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \
     `\/{o,o}  <   Hola, yo soy Minerva. Amiga de Patrick |
      / /)  )    \ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /
     /,--"-"- 


<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/JavaBasicosOwl?lite=true#Main.java" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
{{% notice warning %}}
#### Tuve un error

     Main.java:4: error: reached end of file while parsing
Si llegas a un error como este, es posible que se te haya olvidado <b>escape</b> caraceteres como `"` o `\`.

Repasa el tercer tip para ver como <b>escape</b> caracteres en el método de print.
{{% /notice %}}

### 3. Make a Comment
Cuando creamos un programa de Java, podemos dejar anotcaciones y comentarios en una línea añadiendo `//` o para multiples líneas usando `/*` y `*/` (Note: Las instrucciones en las actividades previas estaban escritas como comentarios). 

Añadir comentarios no afecta tu programa de ninguna manera. Puedes añadir cualquier cantidad de comentarios en tu programa.

     // ejemplo de comentario en una línea
     /* ejemplo
      * de comentarios
      * en multiples líneas */
