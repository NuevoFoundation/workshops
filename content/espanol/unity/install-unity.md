---
title: "Instalando Unity"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 1
---

Necesitamos ayudar a Nuvi a derrotar a los alienígenas, pero programar todo desde cero podría ser demasiado por ahora. 
Unity es una herramienta que tiene algunas partes básicas de la creación de juegos simplificadas para nosotros, así que todo lo que necesitamos hacer es arrastrar y soltar objetos, y escribir un poco de código C# sencillo.

{{< notice info >}}
#### ¿Por qué usar Unity cuando hay otras herramientas?

Bueno, Unity tiene algunos grandes aspectos, especialmente si estás comenzando tu viaje en el desarrollo de juegos. Es multiplataforma, lo que significa que puedes desarrollar un juego tanto para computadoras como para teléfonos celulares. Es amigable para principiantes en programación. ¡Lo mejor de todo, tiene una gran y solidaria comunidad!

Algunos juegos desarrollados en Unity incluyen: *Subway Surfers*, *Hearthstone*, *Cytus*, *Pokemon Go*, *Overcooked*, *Cuphead*, *Hollow Knight*, *Among Us* y *Genshin Impact*.
Solo de esta lista, puedes notar que hay tanto títulos independientes como títulos AAA, y hay juegos para una variedad de plataformas. Ya sea que quieras desarrollar en una gran empresa o por tu cuenta, es una buena idea tener experiencia con Unity.
{{< /notice >}}

Entonces, antes de que podamos hacer algo, necesitas descargar e instalar Unity.
Incluso si ya tienes Unity instalado, revisa esta actividad para asegurarte de que tienes la configuración correcta.

## Paso 1: Descargar Unity

Primero, vamos a [elegir y descargar Unity](https://unity3d.com/get-unity/download?_ga=2.142217974.513534012.1631151100-1023620192.1630193772).

1. Haz clic en "Choose your Unity + download" (Elige tu Unity + descargar).

2. Haz clic en **"Student and hobbyist"** y bajo **"Personal"** o **"Student"** si tienes una dirección de correo electrónico de estudiante, selecciona "Get Started". 

3. Desplázate hacia abajo en la página web bajo **"1. Download the Unity Hub"** y descarga según tu computadora.  
 
{{< notice note >}}
Para este taller, usamos la versión "2019.4.19f1" para el contenido y las capturas de pantalla. Si deseas usar esta versión exacta, en la misma página bajo "2. Choose your Unity version", selecciona "Visit the download archive" para encontrar la misma versión que este taller. Si no, puede haber pequeños cambios en la interfaz de usuario en versiones más recientes. ¡Si decides embarcarte en el camino de desarrollo de juegos con Unity, no olvides revisar las versiones más recientes!
{{< /notice >}}

4. Después de que Unity termine de descargarse, ábrelo, lo que iniciará la configuración de Unity Hub, una aplicación que te ayudará a gestionar tus proyectos de Unity.

5. Aparecerá una ventana emergente. Acepta el acuerdo de usuario, activa la licencia, selecciona la carpeta de destino donde deseas descargarlo en tu computadora, instala, y luego ejecuta Unity Hub seleccionando "Finish" (Finalizar).

## Paso 2: Unity Hub

1. Inicia sesión con tu ID de Unity: Aparecerá el instalador de Unity Hub. Una vez que haces clic en instalar, se te llevará a una página donde debes crear un ID de Unity. Si aún no tienes uno, crea un nuevo ID. Si ya tienes uno, selecciona "I already have a Unity ID" (Ya tengo un ID de Unity) e ingresa tus datos. 

2. Después de ingresar tu información, la página te pedirá que elijas una plantilla para un microjuego. Esto solo ocurre porque escogimos "First-Time Users" (Usuarios por primera vez), así que Unity quiere que los nuevos usuarios jueguen con los proyectos proporcionados para ayudarles a entender mejor Unity.

3. Usaremos nuestros propios proyectos para enseñar, así que por ahora, puedes elegir una plantilla aleatoria que quieras explorar más tarde y hacer clic en "continue" (continuar) y "Launch Unity" (Iniciar Unity). Unity luego iniciará el microjuego, pero como no lo usaremos, simplemente cierra Unity.

4. Si tu versión de Unity no es la 2019.4, entonces abre Unity Hub y, en la parte izquierda de la ventana, selecciona "Installs" (Instalaciones). Haz clic en el botón "ADD" (AÑADIR) y selecciona la versión que quieras. Puedes seleccionar la última versión o la versión que estamos usando para este proyecto, **"2019.4.19f1 (LTS)"**. Luego, Unity Hub te llevará a una página donde puedes elegir las bibliotecas que deseas incluir. ¡Asegúrate de que los soportes de compilación para Windows y Mac estén seleccionados!

## Paso 3: ¡Comencemos!
Para empezar a trabajar en un nuevo proyecto, abre Unity Hub y haz clic en el botón azul que dice "NEW" (NUEVO). Nombra tu proyecto como prefieras y elige un lugar para crear tu carpeta de proyecto. Asegúrate de tener seleccionado "2D" como tu plantilla de proyecto, como se muestra en la captura de pantalla.

![Creando un nuevo proyecto 2D en Unity](../img/0_new_project_edited.png)