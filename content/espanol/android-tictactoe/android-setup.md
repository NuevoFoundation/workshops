---
title: "Configuración de Android"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 2
---
Sigue los pasos a continuación para instalar Android Studio en tu computadora. Si ya tienes Android Studio instalado, ábrelo y pasa al siguiente paso.

Estos pasos incluyen ejemplos para instalarlo en computadoras con Windows. Sin embargo, los pasos son similares para otros tipos de computadoras también.

## Descargar e instalar Android Studio
1. [Descarga Android Studio](https://developer.android.com/studio/) para tu sistema operativo.
2. [Sigue estos pasos](https://developer.android.com/studio/install) para instalar Android Studio.

## Configurar la variable de entorno JAVA_HOME
Android Studio incluye una versión de Java necesaria para que ciertas partes de la aplicación funcionen. Sigue los pasos a continuación para configurar la variable de entorno `JAVA_HOME` en tu computadora, que indica a estas herramientas dónde encontrar Java:
1. En el cuadro de búsqueda en la parte inferior izquierda de la pantalla, escribe `env`.
2. Selecciona el programa "Mejor coincidencia" llamado `Editar las variables de entorno del sistema`.
<img src="../resources/_gen/images/edit_env_variable.png" height="30%" width="30%" title="Editar variables de entorno del sistema" alt="Editar variables de entorno del sistema"/>
3. Haz clic en `Variables de entorno...`.
4. Haz clic en `Nueva...` en la sección 'Variables de usuario'.
5. Escribe JAVA_HOME como el nombre de la variable.
6. Copia lo siguiente en el valor de la variable:
```
C:\Program Files\Android\Android Studio\jre
```
7. Haz clic en OK.
<img src="../resources/_gen/images/set_java_home.gif" height="40%" width="40%" title="Configurando JAVA_HOME" alt="Muestra cómo configurar la variable de entorno JAVA_HOME"/>

{{% notice tip %}}
Recomendamos encarecidamente que reinicies tu computadora ahora para que Android Studio se abra correctamente.
{{% /notice %}}

## Iniciar Android Studio
Una vez instalado, abre Android Studio para trabajar en la aplicación.

{{% notice tip %}}
Hay varias formas de iniciar la aplicación Android Studio en tu computadora con Windows. Aquí tienes dos métodos:
#### Método 1
1. Haz clic en el ícono de Windows en la esquina inferior izquierda de tu computadora.
2. Desplázate por la lista hasta que veas la carpeta `Android Studio`.
3. Haz clic en la carpeta `Android Studio` para expandirla.
4. Haz clic en la aplicación `Android Studio` dentro de la carpeta para iniciar Android Studio.

#### Método 2
1. En el cuadro de búsqueda en la parte inferior izquierda de la pantalla, escribe `Android Studio`.
2. En la ventana de resultados, si la "Mejor coincidencia" resalta `Android Studio`, haz clic en la aplicación `Android Studio` o presiona `ENTER` en tu teclado.
{{% /notice %}}

## Abrir los archivos del proyecto
1. Haz clic en `Open an Existing Project` en la pantalla de inicio de Android Studio.
2. Busca la ubicación donde descargaste los archivos del proyecto.
3. Selecciona la carpeta 'TicTacToe' dentro de la carpeta 'TicTacToe' que descomprimiste anteriormente. 
   - La carpeta 'TicTacToe' que debes seleccionar tendrá un ícono verde de Android junto a ella, lo que indica que es una carpeta de proyecto de Android.
<img src="../resources/_gen/images/open_android_project.gif" height="40%" width="40%" title="Abrir proyecto TicTacToe" alt="Muestra cómo abrir el proyecto TicTacToe en Android Studio"/>

Ejecuta Android Studio y abre el proyecto. Tu vista lucirá similar a esta:
<img src="../resources/_gen/images/android_studio.png" height="60%" width="60%" title="IDE de Android Studio" alt="Ejemplo del IDE de Android Studio"/>

## Aceptar licencias
Antes de que puedas ejecutar el código, necesitarás aceptar las licencias de Android siguiendo los pasos a continuación:
1. Haz clic en el botón `Terminal` en la parte inferior de la ventana de Android Studio.
2. Escribe el siguiente comando, reemplazando '<USER_NAME>' con el nombre de usuario de tu computadora.
```
C:\Users\<USER_NAME>\AppData\Local\Android\Sdk\tools\bin\sdkmanager --licenses
```
3. Escribe `y` y presiona `ENTER` en los mensajes para aceptar las licencias. Esto será necesario varias veces.
<img src="../resources/_gen/images/accept_licenses.gif" height="60%" width="60%" title="Aceptando licencias de Android" alt="Muestra los pasos necesarios para aceptar las licencias de Android"/>