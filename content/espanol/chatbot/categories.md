---
title: "Categorías"
draft: false
weight: 6
---

## Fundamentos de AIML
La unidad básica de AIML es la **categoría**. Una categoría consiste en un patrón y una plantilla. El **patrón** es lo que el usuario le dice al bot. La **plantilla** es la respuesta que el bot le da al usuario.

Observando el siguiente ejemplo, vemos que el patrón es "HELLO" y la plantilla es "¡Hola, Mundo!". Cuando el usuario dice "HELLO", el bot responderá con "¡Hola, Mundo!". Ten en cuenta que la coincidencia de patrones no distingue entre mayúsculas y minúsculas, por lo que el bot responderá a "hello", "HELLO", "Hello" y "HeLlo" de la misma manera.
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

Al escribir el patrón, recomendamos escribirlo en mayúsculas y evitar el uso de signos de puntuación. Por lo tanto, si deseas coincidir con "¿Cuál es tu nombre?", deberías escribir el patrón como "CUAL ES TU NOMBRE". Pandora eliminará cualquier signo de puntuación de la entrada del usuario antes de comparar con el patrón.

{{% /notice %}}