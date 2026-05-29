---
title: "Actividad 2: Configurar PandoraBots"
draft: false
weight: 5
---

## AIML
Usaremos AIML para crear nuestro chatbot. AIML significa **Lenguaje de Marcado de Inteligencia Artificial** (Artificial Intelligence Markup Language). Si alguna vez has usado HTML para crear un sitio web, notarás que AIML se parece mucho. Antes de que podamos empezar a escribir AIML, necesitamos registrarnos para obtener una cuenta en PandoraBots.
<img src="../img/chat_Alice.png" alt="" width="20%" style="" />

## Pandorabots
Ve a [https://www.pandorabots.com/](https://www.pandorabots.com/) y haz clic en **Sign Up**. Ingresa un correo electrónico y una contraseña para crear una cuenta. Alternativamente, puedes registrarte utilizando una cuenta de Google, Facebook, Twitter o Github. Si se te solicita, elige la opción de prueba gratuita.

## Crear un nuevo bot
Una vez que te hayas registrado, deberías ver una página que se ve así:

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="página de inicio de sesión en pandorabots" width="40%"/></p>

Para crear un nuevo bot, usa el botón “+” junto a "My Bots" en el panel de navegación. Asigna un nombre y haz clic en “Create Bot”.

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="creando un nuevo bot en pandorabots" width="40%"/></p>

## Edición del Bot
Una vez que hayas creado un nuevo bot, el nombre del bot aparecerá en el panel de navegación. Haz clic en **Edit** debajo del nombre de tu bot y luego selecciona **Code Editor** para navegar al Editor.

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="editando un bot en pandorabots" width="40%"/></p>

El Editor es donde escribirás archivos AIML y categorías que permitirán que tú y otros interactúen con tu bot.

Usa el menú "File" para crear un nuevo archivo AIML llamado greetings.

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="añadiendo un nuevo archivo en pandorabots" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="añadiendo un nuevo archivo en pandorabots" width="40%"/></p>

## Hola Mundo

Copia el código de la siguiente categoría en el editor de texto entre las etiquetas de inicio ```<aiml>``` y fin ```</aiml>```:

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

Una vez completado, guarda tu archivo desde el menú desplegable “File”.

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="añadiendo un nuevo archivo en pandorabots" width="40%"/></p>

## Probando tu bot
El Chat Widget te permite hablar con tu bot. Haz clic en el ícono de "burbujas de chat" en la esquina inferior derecha para comenzar a interactuar con tu bot. Escribe `Hello` y deberías recibir la respuesta que acabas de programar, `“Hello, world!”`

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="añadiendo un nuevo archivo en pandorabots" width="40%"/></p>
