---
title: "Repitiendo Comodines"
draft: false
weight: 9
---

## Introducción a la etiqueta ```<star />```
Aprendamos una herramienta más para permitir que nuestro chatbot tenga respuestas más interesantes. En la lección anterior aprendimos cómo podemos usar el comodín ```*``` para coincidir con cualquier palabra o frase. Pero ¿qué pasa si queremos usar la palabra o frase que el usuario ingresó en nuestra respuesta? Por ejemplo, si el usuario nos dice cuál es su color favorito, queremos que la respuesta del bot incluya el color favorito del usuario. Podemos hacer esto usando la etiqueta ```<star />```.

La etiqueta ```<star />``` es una etiqueta especial que nos permite usar la palabra o frase que el usuario ingresó en nuestra respuesta. Veamos cómo funciona.

```
<category>
    <pattern>MI COLOR FAVORITO ES *</pattern>
    <template>
        Tu color favorito es <star />.
    </template>
</category>
```

Analicemos cómo funciona esta categoría. El patrón "MI COLOR FAVORITO ES *" coincidirá con cualquier entrada que comience con "MI COLOR FAVORITO ES" seguido de cualquier palabra o frase. Así que el patrón coincidirá con "MI COLOR FAVORITO ES AZUL", "MI COLOR FAVORITO ES ROJO", "MI COLOR FAVORITO ES VERDE", y así sucesivamente. La etiqueta ```<star />``` capturará la palabra o frase que el usuario ingresó y la utilizará en la respuesta. Por lo tanto, si el usuario ingresa "MI COLOR FAVORITO ES AZUL", "azul" es la palabra representada por el comodín, por lo que cuando el chatbot responda, ```<star />``` será reemplazado por "azul". El bot responderá con "Tu color favorito es azul".

<img src="../img/sentence_response.png" alt="" width="27%" />

Aquí hay algunos ejemplos más de entradas y salidas de esta categoría:

Entrada | Salida 
---|--------------
MI COLOR FAVORITO ES AZUL | Tu color favorito es azul.
MI COLOR FAVORITO ES ROJO | Tu color favorito es rojo.
MI COLOR FAVORITO ES VERDE | Tu color favorito es verde.