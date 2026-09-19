---
title: "Cadenas"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 7
---
Todo lo que está rodeado de comillas se llama una cadena. Así es como una computadora representa palabras o frases. Por ejemplo, `"a"`, `"2"`, `"¡banana!"` y `"Hola Mundo"` son cadenas, pero `Hola Mundo` y `2` no son cadenas, porque faltan las comillas. Puedes combinar muchas cadenas juntas usando el operador +. Por ejemplo:

- `"Manzana" + "Piña"` produce la cadena `"ManzanaPiña"`.
- `"Nuevo" + " " + "Foundation"` produce la cadena `"Nuevo Foundation"`.

{{% notice tip %}}
## Trabajando Juntos

Borra todo tu texto `System.out.println` en tu código. Comienza tu código con la línea `System.out.println("Nuevo" + " " + "Foundation");`. Ten en cuenta que hay muchas formas de combinar cadenas juntas. Por ejemplo, otra forma de imprimir Nuevo Foundation sería escribir `System.out.println("Nue" + "vo Fou" + "ndation");`. Vamos a proponer al menos una forma más de imprimir la cadena `"Nuevo Foundation"` usando dos símbolos `+` en cada instrucción `System.out.println`. Verifica que Nuevo Foundation se imprima 3 veces. En otras palabras, tu consola debería verse así después de presionar ejecutar:

        Nuevo Foundation
        Nuevo Foundation
        Nuevo Foundation
{{% /notice %}}