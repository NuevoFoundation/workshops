---
title: "Comodines con eco"
draft: false
weight: 9
---

## Presentamos la etiqueta ```<star />```
Vamos a aprender una herramienta más para que nuestro chatbot pueda dar respuestas más interesantes. En la lección anterior aprendimos cómo usar el comodín ```*``` para que coincida con cualquier palabra o frase. Pero ¿qué pasa si queremos usar en nuestra respuesta la palabra o frase que escribió la persona? Por ejemplo, si alguien nos dice cuál es su color favorito, queremos que la respuesta del bot incluya ese color. Podemos hacerlo con la etiqueta ```<star />```.

La etiqueta ```<star />``` es una etiqueta especial que nos permite usar en nuestra respuesta la palabra o frase que escribió la persona. Veamos cómo funciona.

```
<category>
    <pattern>MI COLOR FAVORITO ES *</pattern>
    <template>
        Tu color favorito es <star />.
    </template>
</category>
```

Veamos paso a paso cómo funciona esta categoría. El patrón "MI COLOR FAVORITO ES *" coincidirá con cualquier texto que empiece con "MI COLOR FAVORITO ES" seguido de cualquier palabra o frase. Así, el patrón coincidirá con "MI COLOR FAVORITO ES AZUL", "MI COLOR FAVORITO ES ROJO", "MI COLOR FAVORITO ES VERDE", y así sucesivamente. La etiqueta ```<star />``` capturará la palabra o frase que escribió la persona y la usará en la respuesta. Entonces, si alguien escribe "MI COLOR FAVORITO ES AZUL", "azul" es la palabra representada por el comodín, así que cuando el chatbot responda, ```<star />``` será reemplazado por "azul". El bot responderá "Tu color favorito es azul".

<img src="../img/sentence_response.png" alt="Ilustración que muestra cómo un chatbot reconoce patrones de frases y responde" width="27%" />

Aquí tienes más ejemplos de entradas y salidas de esta categoría:

Entrada | Salida 
---|--------------
MI COLOR FAVORITO ES AZUL | Tu color favorito es azul.
MI COLOR FAVORITO ES ROJO | Tu color favorito es rojo.
MI COLOR FAVORITO ES VERDE | Tu color favorito es verde.
