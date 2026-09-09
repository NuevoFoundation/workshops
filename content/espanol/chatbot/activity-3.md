---
title: "Actividad 3: Añade tus propias categorías"
draft: false
weight: 7
---

## Añadir más categorías

En este momento, nuestro bot solo puede responder a "Hello". Vamos a añadir más categorías para que nuestro bot pueda responder a más cosas.

1. Si el usuario dice "What is your name?" el bot debería responder "My name is Chatbot".
2. Si el usuario dice "What is your favorite color?" el bot debería responder "My favorite color is blue".
3. Si el usuario dice "What is your favorite food?" el bot debería responder "My favorite food is pizza".

<img src="../img/ideas.png" alt="" width="30%" style="" />

Como recordatorio, aquí está la estructura básica de una categoría:

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice tip %}}

Recuerda: Al escribir el patrón, usa mayúsculas y evita utilizar puntuaciones. Así que si quieres hacer coincidir "What is your name?", deberías escribir el patrón como "WHAT IS YOUR NAME".

{{% /notice %}}

{{% notice tip %}}

Recuerda guardar el archivo cada vez que modifiques las categorías y quieras interactuar con el chatbot.

{{% /notice %}}

Intenta añadir estas categorías a tu bot y pruébalas usando el widget de chat. En este punto, el bot debería responder a "Hello", "What is your name?", "What is your favorite color?" y "What is your favorite food?".
