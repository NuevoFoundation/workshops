---
title: "Actividad 3: Agrega tus propias categorías"
draft: false
weight: 7
---

## Agrega más categorías

En este momento, nuestro bot solo puede responder a "Hello". Vamos a agregar más categorías para que nuestro bot pueda responder a más cosas.

1. Si el usuario dice "¿Cuál es tu nombre?" el bot debería responder con "Mi nombre es Chatbot".
2. Si el usuario dice "¿Cuál es tu color favorito?" el bot debería responder con "Mi color favorito es azul".
3. Si el usuario dice "¿Cuál es tu comida favorita?" el bot debería responder con "Mi comida favorita es pizza".

<img src="../img/ideas.png" alt="" width="30%" style="" /

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

Recuerda: Al escribir el patrón, utiliza letras en mayúsculas y evita usar puntuación. Así que, si quieres hacer coincidir "¿Cuál es tu nombre?", deberías escribir el patrón como "CUAL ES TU NOMBRE".

{{% /notice %}}

{{% notice tip %}}

Recuerda guardar el archivo cada vez que modifiques las categorías y quieras interactuar con el chatbot.

{{% /notice %}}

Prueba agregar estas categorías a tu bot y pruébalas usando el widget de chat. En este punto, el bot debería responder a "Hello", "¿Cuál es tu nombre?", "¿Cuál es tu color favorito?" y "¿Cuál es tu comida favorita?".