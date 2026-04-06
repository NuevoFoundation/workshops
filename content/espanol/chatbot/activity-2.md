---
title: "Actividad 2: Configurar PandoraBots"
draft: false
weight: 5
---

## AIML
Usaremos AIML para crear nuestro chatbot. AIML significa **Artificial Intelligence Markup Language**. Si alguna vez has usado HTML para hacer un sitio web, encontrarás que AIML es muy similar. Antes de comenzar a escribir AIML, necesitamos registrarnos para obtener una cuenta en PandoraBots.
<img src="../img/chat_Alice.png" alt="" width="20%" style="" />

## Pandorabots
Ve a [https://www.pandorabots.com/](https://www.pandorabots.com/) y haz clic en **Sign Up**. Ingresa un correo electrónico y una contraseña para crear una cuenta. Alternativamente, puedes registrarte utilizando una cuenta de Google, Facebook, Twitter o Github. Si se te solicita, elige la opción de prueba gratuita.

## Crear un nuevo bot
Una vez que te hayas registrado, deberías ver una página que luce así:

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="página de aterrizaje para nueva cuenta en pandorabots" width="40%"/></p>

Para crear un nuevo bot, utiliza el botón “+” al lado de My Bots en el panel de navegación. Dale un nombre y haz clic en “Create Bot”.

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="crear un nuevo bot en pandorabots" width="40%"/></p>

## Edición del Bot
Una vez que hayas creado un nuevo bot, el nombre del bot aparecerá en el panel de navegación. Haz clic en **Edit** debajo del nombre de tu bot y luego elige **Code Editor** para navegar al Editor.

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="editar un bot en pandorabots" width="40%"/></p>

El Editor es donde escribirás archivos AIML y categorías que permitirán que tú y otros hablen con tu bot. 

Usa el menú de archivos para crear un nuevo archivo AIML llamado greetings.

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="agregar un nuevo archivo en pandorabots" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="agregar un nuevo archivo en pandorabots" width="40%"/></p>

## Hola Mundo

Copia el código para la siguiente categoría en el editor de texto entre las etiquetas de inicio ```<aiml>``` y fin ```</aiml>```:

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

Una vez completo, guarda tu archivo desde el menú desplegable “File”.

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="agregar un nuevo archivo en pandorabots" width="40%"/></p>

## Probar tu bot
El Widget de Chat te permite hablar con tu bot. Haz clic en el ícono de "burbujas de chat" en la esquina inferior derecha para comenzar a hablar con tu bot. Escribe `Hello` y deberías recibir la respuesta que acabas de codificar, `“Hello, world!”`

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="agregar un nuevo archivo en pandorabots" width="40%"/></p>