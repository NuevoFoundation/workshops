---
title: "Estructura de la Aplicación del Juego"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 3
---

## Volviendo a lo Básico
Ahora que el juego tiene el título correcto, profundicemos en todos estos archivos en la carpeta del juego. ¿Qué significan todos ellos? ¿Cómo contribuye al juego?
<img src="../resources/_gen/images/app_structure_files.png" height="25%" width="25%" title="Expanded view of application files" alt="App files shown in Android Studio"/>

### AndroidManifest.xml
Cada proyecto en Android incluye un archivo de manifiesto. Para tu juego, este es el archivo `AndroidManifest.xml`. El archivo de manifiesto define los metadatos para su juego, por ejemplo, puede definir el icono y el tema general para su aplicación de juego.

### activity_main.xml
Este archivo se encuentra en la carpeta "layout". Como indica el nombre de la carpeta, los archivos de esta carpeta definen el aspecto de la aplicación. Si observa el código de `activity_main.xml`, verá palabras clave como `TableLayout` o `TableRow`. La combinación de palabras clave en el archivo `activity_main.xml` crea el diseño para los botones de selección de juegos (Jugador vs Jugador o Jugador vs Computadora), el tablero de tres en raya y el botón de reinicio. La palabra clave `TableLayout` dice que el diseño se alineará con un estilo de tabla, que incluye columnas y filas. La palabra clave `TableRow` crea una nueva fila en el diseño, con cada elemento adicional correspondiente a un lugar en esa fila:
<img src="../resources/_gen/images/activity_main.png" height="30%" width="30%" title="Game board layout in rows" alt="Tic-Tac-Toe board with 5 rows. The first row includes the two game chooser buttons, followed by 3 rows by 3 columns for the Tic-Tac-Toe grid, and finally the fifth row with the restart button"/>

### MainActivity.kt

Este archivo se encuentra en la carpeta "java". El archivo contiene el código y la lógica de la aplicación.

### colors.xml, strings.xml, styles.xml

Estos archivos se encuentran en la carpeta "valores". Los archivos contienen valores a los que pueden hacer referencia otros archivos XML y código de aplicación.

## Juntando Todo

Todos estos archivos trabajan juntos para crear tu juego. El archivo `activity_main.xml` decide lo que se le muestra. Al hacer clic en los botones, los eventos se envían desde el `activity_main.xml` al `MainActivity.kt` para determinar qué sucede en ese clic del botón. Para valores repetibles, `activity_main.xml` y `MainActivity.kt` pueden llegar a `colors.xml`, `strings.xml` o `styles.xml` para usar esos valores desde una ubicación conveniente.