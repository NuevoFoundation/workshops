---
title: "Categorías"
draft: false
weight: 6
---

## Fundamentos de AIML
La unidad básica de AIML es la **categoría** (`category`). Una categoría está formada por un patrón y una plantilla. El **patrón** (`pattern`) es lo que la persona le dice al bot. La **plantilla** (`template`) es la respuesta que el bot le da a la persona. 

Si miramos el siguiente ejemplo, podemos ver que el patrón es "HOLA" y la plantilla es "¡Hola, Mundo!". Cuando la persona escribe "HOLA", el bot responderá "¡Hola, Mundo!". Ten en cuenta que la coincidencia de patrones no distingue entre mayúsculas y minúsculas, así que el bot responderá igual a "hola", "HOLA", "Hola" y "HoLa".
<img src="../img/chat_persons_robot.png" alt="Ilustración de personas comunicándose con un robot chatbot" width="20%"/>

```
<category>
    <pattern>HOLA</pattern>
    <template>
        ¡Hola, Mundo!
    </template>
</category>
```

{{% notice info %}}

Al escribir el patrón, te recomendamos escribirlo todo en MAYÚSCULAS, sin tildes y sin signos de puntuación. Así, si quieres que coincida con "¿Cómo te llamas?", debes escribir el patrón como "COMO TE LLAMAS". Pandorabots elimina los signos de puntuación de lo que escribe la persona antes de comparar el patrón, y escribirlo sin tildes evita que la respuesta falle cuando alguien escribe sin acentos.

{{% /notice %}}
