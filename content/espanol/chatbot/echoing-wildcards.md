```markdown
---
title: "Eco con comodines"
draft: false
weight: 9
---

## Introducción a la etiqueta ```<star />```
Aprendamos una herramienta más para permitir que nuestro chatbot tenga respuestas más interesantes. Aprendimos en la lección pasada cómo podemos usar el comodín ```*``` para hacer coincidir cualquier palabra o frase. Pero, ¿qué pasa si queremos usar la palabra o frase que el usuario introdujo en nuestra respuesta? Por ejemplo, si el usuario nos dice cuál es su color favorito, queremos que la respuesta del bot incluya el color favorito del usuario. Podemos hacer esto usando la etiqueta ```<star />```.

La etiqueta ```<star />``` es una etiqueta especial que nos permite usar la palabra o frase que el usuario introdujo en nuestra respuesta. Veamos cómo funciona.

```
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        Your favorite color is <star />.
    </template>
</category>
```

Analicemos cómo funciona esta categoría. El patrón "MY FAVORITE COLOR IS *" coincidirá con cualquier entrada que comience con "MY FAVORITE COLOR IS" seguido de cualquier palabra o frase. Por lo tanto, el patrón coincidirá con "MY FAVORITE COLOR IS BLUE", "MY FAVORITE COLOR IS RED", "MY FAVORITE COLOR IS GREEN", etc. La etiqueta ```<star />``` capturará la palabra o frase que el usuario introdujo y la usará en la respuesta. Entonces, si el usuario escribe "MY FAVORITE COLOR IS BLUE", "blue" es la palabra representada por el comodín, por lo que, cuando el chatbot responda, ```<star />``` será reemplazado por "blue". El bot responderá con "Your favorite color is blue".

<img src="../img/sentence_response.png" alt="" width="27%" />

Aquí hay algunos ejemplos más de entradas y salidas para esta categoría:

Entrada | Salida 
---|--------------
MY FAVORITE COLOR IS BLUE | Your favorite color is blue.
MY FAVORITE COLOR IS RED | Your favorite color is red.
MY FAVORITE COLOR IS GREEN | Your favorite color is green.
```