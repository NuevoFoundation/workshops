---
title: "Configuración de Android"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 2
---
Sigue los pasos que se indican a continuación para instalar Android Studio en tu ordenador. Si ya tienes Android Studio instalado, ábrelo y salta al siguiente paso.

Estos pasos tienen ejemplos para instalar en equipos Windows. Sin embargo, los pasos también son similares para otros tipos de computadoras.

## Descarga e Instala Android Studio
1. [Descarga Android Studio](https://developer.android.com/studio/) para tu sistema operativo.
2. [Sigue estos pasos](https://developer.android.com/studio/install) para instalar Android Studio.


## Establecer la variable de entorno JAVA_HOME
Android Studio viene con una versión de Java necesaria para que ciertas partes de la aplicación se ejecuten. Siga los pasos a continuación para establecer la variable de entorno `JAVA_HOME` en su computadora, que le indica a estas herramientas dónde encontrar Java:
1. En el cuadro de búsqueda en la parte inferior izquierda de la pantalla, escriba `env`.
2. Selecciona en "Mejor coincidencia" `Editar las variables de entorno del sistema`.

<img src="../resources/_gen/images/edit_env_variable.png" height="30%" width="30%" title="Edit system environment variables" alt="Edit system environment variables"/>

3. Selecciona `Variables de entorno...`.

4. `Nuevo...` en 'Variables de usuario'.

5. Escribe JAVA_HOME como el nombre de la variable.

6. Copia lo siguiente en el valor de la variable:
```
C:\Program Files\Android\Android Studio\jre
```
7. Selecciona OK.
<img src="../resources/_gen/images/set_java_home.gif" height="40%" width="40%" title="Setting JAVA_HOME" alt="shows steps to set the JAVA_HOME environment variable"/>

{{% notice tip %}}
Te recomendamos que reinicies tu computadora ahora para que Android Studio se abra correctamente.
{{% /notice %}}

## Inicia Android Studio
Una vez instalada, abre Android Studio para trabajar en la aplicación.

{{% notice tip %}}
Hay varias formas de iniciar la aplicación Android Studio en tu computadora con Windows. Aquí hay dos métodos:
#### Método 1
1. Click the Windows icon in the lower left hand corner of your computer.
2. Scroll through the list until you see the `Android Studio` folder.
3. Click the `Android Studio` folder to expand it.
4. Click the `Android Studio` application in the folder to start Android Studio.

#### Método 2
1. Haga clic en el icono de Windows en la esquina inferior izquierda de su computadora.
2. Desplácese por la lista hasta que vea la carpeta `Android Studio`.
3. Haga clic en la carpeta `Android Studio` para expandirla.
4. Haga clic en la aplicación `Android Studio` en la carpeta para iniciar Android Studio.
{{% /notice %}}

## Open Project Files
1. Haga clic en `Abrir un proyecto existente` en la pantalla de inicio de Android Studio.
2. Busque la ubicación donde descargó los archivos del proyecto.
3. Seleccione la carpeta 'TicTacToe' dentro de la carpeta 'TicTacToe' que descomprimió anteriormente. 
   - La carpeta 'TicTacToe' para seleccionar debe tener un icono verde de Android al lado, lo que indica que es una carpeta de proyecto de Android.
<img src="../resources/_gen/images/open_android_project.gif" height="40%" width="40%" title="Open TicTacToe project" alt="Shows how to open the TicTacToe project in Android Studio"/>

Inicia Android Studio y abre el proyecto. Deberías ver algo similar a la siguiente captura de pantalla:
<img src="../resources/_gen/images/android_studio.png" height="60%" width="60%" title="Android Studio IDE" alt="Example of Android Studio IDE"/>

## Aceptar Licencias
Antes de poder ejecutar el código, deberá aceptar las licencias de Android siguiendo los pasos a continuación:
1. Haga clic en el botón `Terminal` en la parte inferior de la ventana de Android Studio.
2. Escriba el siguiente comando, reemplazando '<USER_NAME>' con el nombre de usuario de su computadora.

```
C:\Users\<USER_NAME>\AppData\Local\Android\Sdk\tools\bin\sdkmanager --licenses
```
3. Escribe `y` y presiona `ENTER` en las indicaciones, para aceptar las licencias. Esto será necesario varias veces.
<img src="../resources/_gen/images/accept_licenses.gif" height="60%" width="60%" title="Accepting Android licenses" alt="shows the steps needed to accept Android licenses"/>
