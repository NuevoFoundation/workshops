---
title: "Categorías"
draft: false
weight: 6
---

## Fundamentos de AIML
La unidad básica de AIML es la **categoría**. Una categoría consiste en un patrón y una plantilla. El **patrón** es lo que el usuario dice al bot. La **plantilla** es la respuesta que el bot da al usuario.

Mirando el siguiente ejemplo, podemos ver que el patrón es "HELLO" y la plantilla es "Hello, World!". Cuando el usuario dice "HELLO", el bot responderá con "Hello, World!". Ten en cuenta que la coincidencia de patrones no distingue entre mayúsculas y minúsculas, por lo que el bot responderá de la misma manera a "hello", "HELLO", "Hello" y "HeLlo".
<img src="../img/chat_persons_robot.png" alt="" width="20%"/>

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice info %}}

Al escribir el patrón, recomendamos escribirlo todo en MAYÚSCULAS y evitar el uso de puntuación. Por lo tanto, si quieres que coincida con "What is your name?", deberías escribir el patrón como "WHAT IS YOUR NAME". Pandora eliminará cualquier puntuación en la entrada del usuario antes de comparar el patrón.

{{% /notice %}}