---
title: "Cadenas (Strings)"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

Cualquier cosa que esté entre comillas se llama un `string`. Así es como la computadora representa palabras o frases. Por ejemplo, "a", "2", "banana!" y "Hello World" son strings, pero 2 y Hello World no son strings, porque faltan las comillas. ¡Puedes combinar muchos strings usando el signo `+`!

{{% notice tip %}}
¡Las strings que combines no tienen que ser palabras reales! Por ejemplo, `"Man" + "zana"` producirá la `string` `"Manzana"`. 
<b>¡Pide ayuda si estás confundido!</b>
{{% /notice %}}

Por ejemplo,

- `"Manzana" + "Piña"` produce el string `"ManzanaPiña"`

- `"Nuevo" + " " + "Foundation"` produce `"Nuevo Foundation"`


#### Desafío 1

¿Qué pasa si combinas tu nombre y apellido? ¿Cómo lo harías? 

#### Desafío 2

Elimina todas las instrucciones `print` en tu código. Empieza tu código con la línea `print("Nuevo" + " " + "Foundation")`

Si lo ejecutas, deberías obtener la siguiente salida:

    Nuevo Foundation

Intentemos encontrar dos maneras más de imprimir la `string` `"Nuevo Foundation"` usando dos símbolos más (`+`) en cada instrucción `print`. Una vez que lo logres, deberías tener "Nuevo Foundation" imprimido 3 veces. En otras palabras, tu consola debería verse así después de presionar ejecutar:

    Nuevo Foundation
    Nuevo Foundation
    Nuevo Foundation

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>