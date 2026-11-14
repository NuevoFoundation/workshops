---
title: "Comodines"
draft: false
weight: 8
---

## Comodines
Puede que ya te hayas dado cuenta de que cuesta mucho trabajo escribir una categoría para cada forma posible en que alguien podría hacer una pregunta. Por ejemplo, ahora mismo el bot responde "¡Hola, Mundo!" a "Hola". Pero ¿qué pasa si la persona escribe "Hola qué tal" u "Hola chatbot"? Tendríamos que escribir una categoría nueva para cada uno de esos casos. Por suerte, existen otras herramientas que podemos usar para que nuestro bot sea más flexible. 
<img src="../img/party.png" alt="Ilustración de un personaje celebrando las nuevas capacidades del chatbot" width="25%" style="display: block; margin-left: 0;" />
Una de esas herramientas es el **comodín** (en inglés, *wildcard*). Un comodín es un carácter especial que coincide con cualquier palabra o frase. Veamos cómo funciona.

```
<category>
    <pattern>HOLA *</pattern>
    <template>
        ¡Hola!
    </template>
</category>
```

El símbolo ```*``` es capaz de capturar una o más palabras de lo que escribe la persona. Con esta nueva categoría, el chatbot responderá "¡Hola!" a cualquier texto que empiece con "Hola" seguido de cualquier palabra. Así, el patrón "HOLA *" coincidirá con "HOLA QUE TAL", "HOLA CHATBOT", "HOLA MUNDO", "HOLA A TODOS", y así sucesivamente.
