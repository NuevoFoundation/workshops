---
title: "Actividad 2: Configurar PandoraBots"
draft: false
weight: 5
---

## AIML
Usaremos AIML para crear nuestro chatbot. AIML significa **Lenguaje de Marcado de Inteligencia Artificial**. Si alguna vez has utilizado HTML para crear un sitio web, encontrarás que AIML es muy similar. Antes de comenzar a escribir AIML, necesitamos registrarnos en PandoraBots.
<img src="../img/chat_Alice.png" alt="" width="20%" style="" />

## Pandorabots
Ve a [https://www.pandorabots.com/](https://www.pandorabots.com/) y haz clic en **Registrarse**. Ingresa un correo electrónico y contraseña para crear una cuenta. Alternativamente, puedes registrarte utilizando una cuenta de Google, Facebook, Twitter o Github. Si se te solicita, elige la opción de prueba gratuita.

## Crear un nuevo bot
Una vez que te hayas registrado, deberías ver una página como esta:

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="nueva página de inicio de cuenta en pandorabots" width="40%"/></p>

Para crear un nuevo bot, utiliza el botón “+” junto a Mis Bots en el panel de navegación. Dale un nombre y haz clic en “Crear Bot”.

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="crear un nuevo bot en pandorabots" width="40%"/></p>

## Edición del Bot
Una vez que hayas creado un nuevo bot, el nombre del bot aparecerá en el panel de navegación. Haz clic en **Editar** debajo del Nombre de tu Bot y luego selecciona **Editor de Código** para navegar al Editor.

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="editar un bot en pandorabots" width="40%"/></p>

El Editor es donde escribirás los archivos AIML y las categorías que permitirán que tú y otros puedan interactuar con tu bot. 

Utiliza el menú de archivos para crear un nuevo archivo AIML llamado greetings.

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="agregar un nuevo archivo en pandorabots" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="agregar un nuevo archivo en pandorabots" width="40%"/></p>

## Hola Mundo

Copia el código de la siguiente categoría en el editor de texto entre las etiquetas iniciales ```<aiml>``` y finales ```</aiml>```:

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

Una vez completado, guarda tu archivo a través del menú desplegable “Archivo”.

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="agregar un nuevo archivo en pandorabots" width="40%"/></p>

## Probar tu bot
El Widget de Chat te permite interactuar con tu bot. Haz clic en el icono de "burbujas de chat" en el rincón inferior derecho para comenzar a hablar con tu bot. Escribe `Hello` y deberías recibir la respuesta que acabas de programar, `“Hello, world!”`.

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="agregar un nuevo archivo en pandorabots" width="40%"/></p>