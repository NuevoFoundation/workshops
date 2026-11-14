---
title: "Actividad 3: Añade tus propias categorías"
draft: false
weight: 7
---

## Añadir más categorías

Ahora mismo, nuestro bot solo puede responder a "Hola". Vamos a añadir algunas categorías más para que nuestro bot pueda responder a más cosas.

1. Si la persona escribe "¿Cómo te llamas?", el bot debe responder "Me llamo Chatbot".
2. Si la persona escribe "¿Cuál es tu color favorito?", el bot debe responder "Mi color favorito es el azul".
3. Si la persona escribe "¿Cuál es tu comida favorita?", el bot debe responder "Mi comida favorita es la pizza".

<img src="../img/ideas.png" alt="Ilustración de un personaje pensando en ideas nuevas" width="30%" />

Como recordatorio, esta es la estructura básica de una categoría:

```
<category>
    <pattern>HOLA</pattern>
    <template>
        ¡Hola, Mundo!
    </template>
</category>
```

{{% notice tip %}}

Recuerda: Al escribir el patrón, usa MAYÚSCULAS y evita las tildes y los signos de puntuación. Así, si quieres que coincida con "¿Cómo te llamas?", debes escribir el patrón como "COMO TE LLAMAS".

{{% /notice %}}

{{% notice tip %}}

Recuerda guardar el archivo cada vez que modifiques las categorías y quieras interactuar con el chatbot.

{{% /notice %}}

Intenta añadir estas categorías a tu bot y pruébalas usando el widget de chat. En este punto, el bot debería responder a "Hola", "¿Cómo te llamas?", "¿Cuál es tu color favorito?" y "¿Cuál es tu comida favorita?".
