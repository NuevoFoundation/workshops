```markdown
---
title: "Repetición de comodines"
draft: false
weight: 9
---

## Introduciendo la etiqueta ```<star />```
Aprendamos una herramienta más que permitirá a nuestro chatbot tener respuestas más interesantes. En la última lección, aprendimos cómo podemos usar el comodín ```*``` para coincidir con cualquier palabra o frase. Pero, ¿qué sucede si queremos usar la palabra o frase que el usuario escribió en nuestra respuesta? Por ejemplo, si el usuario nos dice cuál es su color favorito, queremos que la respuesta del bot incluya ese color favorito del usuario. Podemos hacer esto usando la etiqueta ```<star />```.

La etiqueta ```<star />``` es una etiqueta especial que nos permite utilizar la palabra o frase que el usuario escribió en nuestra respuesta. Veamos cómo funciona.

```
<category>
    <pattern>MI COLOR FAVORITO ES *</pattern>
    <template>
        Tu color favorito es <star />.
    </template>
</category>
```

Hablemos de cómo funciona esta categoría. El patrón "MI COLOR FAVORITO ES *" coincidirá con cualquier entrada que comience con "MI COLOR FAVORITO ES" seguido de cualquier palabra o frase. De esta manera, el patrón coincidirá con "MI COLOR FAVORITO ES AZUL", "MI COLOR FAVORITO ES ROJO", "MI COLOR FAVORITO ES VERDE", y así sucesivamente. La etiqueta ```<star />``` capturará la palabra o frase que el usuario ingresó y la usará en la respuesta. Por lo tanto, si el usuario ingresa "MI COLOR FAVORITO ES AZUL", "azul" será la palabra representada por el comodín, por lo que, cuando el chatbot responda, la etiqueta ```<star />``` se reemplazará por "azul". El bot responderá "Tu color favorito es azul".

<img src="../img/sentence_response.png" alt="" width="27%" />

Aquí tienes más ejemplos de entradas y salidas de esta categoría:

Entrada | Salida 
---|--------------
MI COLOR FAVORITO ES AZUL | Tu color favorito es azul.
MI COLOR FAVORITO ES ROJO | Tu color favorito es rojo.
MI COLOR FAVORITO ES VERDE | Tu color favorito es verde.
```