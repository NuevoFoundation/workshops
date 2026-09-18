---
title: "Estructura de la Aplicación de Juego"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 3
---

## Volviendo a las Bases
Ahora que el juego tiene el título correcto, profundicemos en todos estos archivos en la carpeta del juego. ¿Qué significan todos? ¿Cómo contribuyen al juego?
<img src="../resources/_gen/images/app_structure_files.png" height="25%" width="25%" title="Vista expandida de los archivos de la aplicación" alt="Archivos de la aplicación mostrados en Android Studio"/>

### AndroidManifest.xml
Cada proyecto en Android incluye un archivo de manifiesto. Para tu juego, este es el archivo `AndroidManifest.xml`. El archivo de manifiesto define los metadatos de tu juego, por ejemplo, puede definir el ícono y el tema general de tu aplicación de juego.

### activity_main.xml
Este archivo se encuentra en la carpeta "layout". Como su nombre lo indica, los archivos en esta carpeta definen cómo se ve tu aplicación. Si observas el código de `activity_main.xml`, verás palabras clave como `TableLayout` o `TableRow`. La combinación de palabras clave del archivo `activity_main.xml` crea el diseño para los botones de selección del juego (Jugador vs Jugador o Jugador vs Computadora), el tablero de tic-tac-toe y el botón de reinicio. La palabra clave `TableLayout` indica que el diseño estará alineado en un estilo de tabla, que incluye columnas y filas. La palabra clave `TableRow` crea una nueva fila en el diseño, con cada elemento adicional correspondiente a un espacio en esa fila:
<img src="../resources/_gen/images/activity_main.png" height="30%" width="30%" title="Diseño del tablero de juego en filas" alt="Tablero de Tic-Tac-Toe con 5 filas. La primera fila incluye los dos botones de selección de juego, seguidos por 3 filas con 3 columnas para la cuadrícula de Tic-Tac-Toe, y finalmente la quinta fila con el botón de reinicio"/>

### MainActivity.kt

Este archivo se encuentra en la carpeta "java". El archivo contiene el código y la lógica de tu aplicación.

### colors.xml, strings.xml, styles.xml

Estos archivos se encuentran en la carpeta "values". Los archivos contienen valores que pueden ser referenciados por otros archivos XML y el código de la aplicación.

## Uniendo Todo

Todos estos archivos trabajan juntos para crear tu juego. El archivo `activity_main.xml` decide qué se muestra en pantalla. Cuando haces clic en los botones, los eventos se envían desde el archivo `activity_main.xml` al archivo `MainActivity.kt` para determinar qué ocurre al hacer clic en ese botón. Para valores repetibles, `activity_main.xml` y `MainActivity.kt` pueden usar los valores en `colors.xml`, `strings.xml` o `styles.xml` desde una ubicación conveniente.