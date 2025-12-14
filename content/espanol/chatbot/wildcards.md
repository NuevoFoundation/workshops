---
title: "Comodines"
draft: false
weight: 8
---

## Comodines
Es posible que hayas notado que lleva mucho trabajo escribir una categoría para cada manera en que un usuario podría hacer una pregunta. Por ejemplo, actualmente el bot responde a "Hello" con "Hello, world". Pero, ¿qué pasaría si el usuario dice "Hello there" o "Hello chatbot"? Tendríamos que escribir una nueva categoría para cada uno de estos casos. Afortunadamente, hay herramientas adicionales que podemos usar para hacer nuestro bot más flexible.
<img src="../img/party.png" alt="" width="25%" style="display: block; margin-left: 0;" />
Una de estas herramientas es el **comodín**. Un comodín es un carácter especial que coincide con cualquier palabra o frase. Veamos cómo funciona.

```
<category>
    <pattern>HELLO *</pattern>
    <template>
        ¡Hola!
    </template>
</category>
```

El símbolo ```*``` es capaz de capturar 1 o más palabras en la entrada del usuario. Con esta nueva categoría, el chatbot ahora responderá con "¡Hola!" a cualquier entrada que comience con "Hello" seguido de cualquier palabra. Así que el patrón "HELLO *" coincidirá con "HELLO THERE", "HELLO CHATBOT", "HELLO WORLD", "HELLO EVERYONE", entre otros.