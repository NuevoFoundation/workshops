---
title: "Requisitos Previos de Código"
draft: false
weight: 2
---

¡Nuvi aún no puede invitar a un bot traductor! ¡No hay un entorno de código configurado! Vamos a preparar tu computadora. Instalarás Python, configurarás un entorno virtual (una "burbuja" segura para los paquetes de tu proyecto), instalarás VS Code (tu editor de código) y crearás los archivos iniciales. Una vez que esta base esté lista, comenzarás a escribir el bot que ayudará a todos a entenderse.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascota Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi dice:</strong> Elige Python 3.10 para que las partes del traductor se instalen sin problemas: ¡las actualizaciones futuras serán más fáciles una vez que todo funcione ahora!
{{< /alert >}}

## 1. Instalar Python
Instala **Python 3.10** (una versión 3.10.x, como 3.10.14) desde el sitio web oficial.
- Windows & macOS: https://www.python.org/downloads/
- (Algunos Chromebooks pueden necesitar el modo Linux; pídele ayuda a un adulto o maestro).

¿Por qué 3.10? Algunas de las bibliotecas que utilizaremos para Discord y traducción funcionan mejor (o únicamente) con Python 3.10 en este momento. Usar una versión más reciente (como 3.11 o 3.12) puede causar errores de instalación.

Deberías ver algo como `Python 3.10.x`.

## 2. Instalar VS Code (y las herramientas de Python)

VS Code es un editor de código gratuito y amigable para estudiantes donde escribirás y ejecutarás tu bot; ofrece autocompletado inteligente, sugerencias de errores y una forma fácil de gestionar Python.

{{<button href="https://code.visualstudio.com" theme="info">}}Descargar VS Code{{< /button >}}

Después de instalar VS Code, añade las herramientas de Python:
1. Abre VS Code y ve a la vista de Extensiones (Haz clic en el ícono de extensiones en la barra de actividades lateral o presiona `Ctrl+Shift+X`).
![Ícono de la vista de extensiones](../../media/extensions.png)
1. Busca `Python` (Editor: Microsoft) y haz clic en Instalar. Esto instalará algunas herramientas útiles que usaremos durante el taller. ![Página de extensión de Python en VSCode](../../media/python-extension.png)
1. Instala la experiencia de `Python Environment Manager` si se te solicita; viene incluida en las versiones recientes de la extensión de Python.
1. Recarga VS Code si te lo pide.

Ahora deberías ver el símbolo de la extensión de Python en tu barra lateral.
![Símbolo de la extensión de Python](../../media/python-symbol.png)

## 3. Crear una Carpeta de Proyecto
Elige una ubicación que puedas encontrar fácilmente, como tus Documentos o Escritorio. 
Ejemplo de nombre de carpeta: `discord-translator-bot`. 
Abre la carpeta en VS Code (Archivo → Abrir Carpeta).

## 4. Crear un Entorno Virtual
Un entorno virtual mantiene tu proyecto separado de otros proyectos y facilita la organización de todos los archivos de Python en tu computadora. La extensión de Python de VS Code puede crearlo y seleccionarlo por ti.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascota Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Sugerencia de Nuvi:</strong> Si la creación del entorno parece atascada, espera un minuto antes de intentarlo nuevamente: Python está configurando tu laboratorio aislado.
{{< /alert >}}

1. Para crear el entorno, busca el símbolo de Python en la barra lateral y haz clic en él: ![Ícono de la extensión de Python en VS Code](../../media/sidebar.png)
1. Haz clic en el menú desplegable "venv". Debería decir algo como "No environment found, click to create" (No se encontró entorno, haz clic para crear). Haz clic en él.
1. Esto debería abrir un menú desplegable cerca de la parte superior que diga "Select environment creation mode" (Seleccionar modo de creación de entorno). Elige "Quick Create".
![Menú desplegable crear entorno](../../media/create-env.png)
1. Ahora deberías ver una pequeña ventana de carga que indica que se está creando el entorno virtual. Esto puede tardar unos minutos.
![Creando entorno virtual](../../media/loading-env.png)
1. Cuando termine, si seleccionas el símbolo de Python en la barra lateral nuevamente y haces clic en el menú desplegable "venv", deberías ver que el entorno virtual ha sido creado y seleccionado.
![Entorno virtual creado y seleccionado](../../media/venv-created.png)

## 5. Crear Archivos Iniciales
Dentro de la carpeta del proyecto, crea estos archivos:
```
bot.py
requirements.txt
```

### bot.py
Aquí irá todo el código para tu bot. Por ahora, solo añade este código inicial:
```python
print("Proyecto del bot listo. ¡Pronto añadiremos el código de Discord!")
```

### requirements.txt 
Este archivo puede permanecer vacío por ahora. Más adelante, agregarás los nombres de las bibliotecas de Python que tu bot necesita para que puedan instalarse fácilmente.

## 6. Ejecutar el Script del Bot
1. En la barra lateral también debería haber un ícono de "Ejecutar y Depurar" (un botón de reproducir con un insecto). Con el archivo `bot.py` abierto en el editor principal, haz clic en el ícono y luego haz clic en el botón Ejecutar y Depurar en la parte superior de la barra lateral.
![Ícono de ejecutar y depurar](../../media/run-and-debug.png)

1. En el menú desplegable que aparece, selecciona "Depurador de Python".
![Seleccionar depurador de Python](../../media/debugger.png)

1. Luego, en la configuración de depuración, selecciona "Archivo de Python".
![Seleccionar archivo de Python](../../media/select-python.png)

1. Al hacer clic nuevamente en "Ejecutar y Depurar" debería ejecutarse el script, ¡y deberías ver la salida en la terminal en la parte inferior!
![Salida en la terminal](../../media/terminal.png)

---