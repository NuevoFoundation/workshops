---
title: "Actividad 2: Configurar PandoraBots"
draft: false
weight: 5
---

## AIML
Usaremos AIML para crear nuestro chatbot. AIML son las siglas en inglés de **Artificial Intelligence Markup Language** (lenguaje de marcado de inteligencia artificial). Si alguna vez has usado HTML para hacer una página web, notarás que AIML se parece mucho. Antes de empezar a escribir AIML, necesitamos registrarnos en PandoraBots.
<img src="../img/chat_Alice.png" alt="Ilustración del personaje del chatbot ALICE" width="20%" />

## Pandorabots
Ve a [https://www.pandorabots.com/](https://www.pandorabots.com/) y haz clic en **Sign Up**. Escribe un correo electrónico y una contraseña para crear una cuenta. También puedes registrarte usando una cuenta de Google, Facebook, Twitter o GitHub. Si te lo pide, elige la opción de prueba gratuita (*free trial*).

## Crear un bot nuevo
Una vez que te hayas registrado, deberías ver una página como esta:

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="página de inicio de una cuenta nueva en pandorabots" width="40%"/></p>

Para crear un bot nuevo, usa el botón “+” que está junto a **My Bots** en el panel de navegación. Dale un nombre y haz clic en “Create Bot”.

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="creando un bot nuevo en pandorabots" width="40%"/></p>

## Editar el bot
Una vez que hayas creado un bot nuevo, el nombre del bot aparecerá en el panel de navegación. Haz clic en **Edit** debajo del nombre de tu bot y luego elige **Code Editor** para ir al editor.

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="editando un bot en pandorabots" width="40%"/></p>

El editor es donde escribirás los archivos AIML y las categorías que permitirán que tú y otras personas hablen con tu bot. 

Usa el menú **File** para crear un archivo AIML nuevo llamado greetings.

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="añadiendo un archivo nuevo en pandorabots" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="añadiendo un archivo nuevo en pandorabots" width="40%"/></p>

## Hola Mundo

Copia el código de la siguiente categoría en el editor de texto, entre las etiquetas de inicio ```<aiml>``` y de cierre ```</aiml>```:

```
<category>
    <pattern>HOLA</pattern>
    <template>
        ¡Hola, Mundo!
    </template>
</category>
```

Cuando termines, guarda el archivo desde el menú desplegable “File”.

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="añadiendo un archivo nuevo en pandorabots" width="40%"/></p>

## Probar tu bot
El widget de chat te permite hablar con tu bot. Haz clic en el icono de las “burbujas de diálogo” en la esquina inferior derecha para empezar a hablar con tu bot. Escribe `Hola` y deberías recibir la respuesta que acabas de programar: `“¡Hola, Mundo!”`

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="añadiendo un archivo nuevo en pandorabots" width="40%"/></p>
