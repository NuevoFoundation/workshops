---
title: "Escribiendo un bot simple"
draft: false
weight: 2
---

Nuvi ahora tiene una identidad de bot registrada. El siguiente paso: haz que responda. Con tu carpeta de proyecto, entorno virtual y archivo inicial listos, construirás una **base mínima para el bot**. Esta primera versión solo prueba que la conexión funciona. También activamos un permiso (`message_content`) para que las páginas posteriores puedan agregar auto-traducción sin necesidad de volver a configurar.

En esta parte, harás lo siguiente:

1. Agregarás `discord.py` a `requirements.txt` e instalarás la librería (utilizando la interfaz de VS Code — sin necesidad de escribir en la terminal).
1. Escribirás un bot básico que responda a un comando slash `/hello`.
1. Activarás el "intent" de contenido de mensajes (necesario más adelante para la auto‑traducción).
1. Ejecutarás y probarás el bot.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi dice:</strong> Tu primer objetivo es simplemente ver que el bot se conecte—la traducción vendrá después. ¡Pequeñas victorias ayudan a mantener el impulso!
{{< /alert >}}

---

## 1. Agregar e Instalar la Librería discord.py (Usando requirements.txt + Interfaz de VS Code)
Primero declararemos la dependencia, luego dejaremos que VS Code la instale en tu entorno virtual.

### 1.a Agrégala a requirements.txt
1. Abre `requirements.txt` en tu proyecto.
1. Agrega esta línea (el archivo puede contener solo esto por ahora):
```text
discord.py
```
1. Guarda el archivo.

### 1.b Instalar mediante la interfaz de administración del entorno
1. Abre la vista de extensión de Python (icono de Python en la barra de actividades) y confirma que el entorno correcto (por ejemplo, `.venv`) está seleccionado.
1. Selecciona el icono "Paquetes" (parece una caja) que mostrará un menú desplegable. Ahora selecciona "Instalar dependencias del proyecto".
![Instalar dependencias del proyecto](../../media/dependencies.png)
1. Haz clic en la casilla de verificación para "requirements.txt" y luego en "Ok".
![Seleccionar requirements.txt](../../media/requirements.png)
1. Espera hasta que `discord.py` aparezca en la lista de paquetes instalados.
![discord.py instalado](../../media/discord-installed.png)

## 2. Escribir el Código del Bot
Abre `bot.py` y reemplaza cualquier código de marcador de posición con el siguiente. (Notarás un diccionario `user_languages` ya presente—este es un "cuaderno placeholder" que realmente empezaremos a usar cuando agreguemos registro y auto‑traducción pronto).
```python
import discord
from discord.ext import commands

TOKEN = "<your token here>"

# Aquí recordamos el idioma que cada usuario quiere
# Es como un cuaderno: user_languages[user_id] = "en" o "es"
user_languages = {}

# Informamos a Discord que nuestro bot necesita leer mensajes (no solo comandos)
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"Bot está online como {bot.user}!")
    try:
        synced = await bot.tree.sync()
        print(f"Se sincronizaron {len(synced)} comandos.")
    except Exception as e:
        print(f"Error: {e}")

@bot.tree.command(name="hello", description="¡Dice hola!")
async def hello_command(interaction: discord.Interaction):
    await interaction.response.send_message(f"¡Hola {interaction.user.display_name}! ¡Que tengas un gran día programando!")

if not TOKEN:
    raise RuntimeError("Falta el token del bot. Agrégalo a la variable TOKEN cerca de la parte superior del archivo.")

bot.run(TOKEN)
```

### Qué hace:
- Importa la librería de Discord para que no tengas que reinventar la conexión.
- Configura los "intents" y habilita `message_content` tempranamente (la futura auto‑traducción necesita leer mensajes).
- Crea y inicia una conexión del bot.
- Registra un comando slash `/hello` para probar que la sincronización de comandos funciona.
- Usa `user_languages = {}` como un lugar simple en memoria que llenaremos más adelante.
- Responde con un saludo personalizado cuando se ejecuta `/hello`.
- Verificación de seguridad: detiene la ejecución si falta el token.

<details>
<summary><strong>-> Detalles avanzados (haz clic para expandir si deseas aprender más sobre algunos conceptos avanzados usados aquí. Totalmente opcional.)</strong></summary>

**async / await**: Estas palabras clave permiten que Python ejecute otras tareas mientras espera (por ejemplo, la respuesta de Discord) para que tu bot no se congele.

**Event (@bot.event)**: Los decoradores como `@bot.event` le dicen a la librería “ejecuta esta función cuando ocurra un evento específico” (en este caso: cuando el bot esté listo).

**Comandos slash (`@bot.tree.command`)**: Estos crean comandos modernos que aparecen cuando los usuarios escriben `/` en Discord. Se registran en los servidores de Discord y puede tomar un tiempo sincronizarlos.

**Interaction**: Representa un usuario que utiliza un comando slash. `interaction.user` te proporciona la información del usuario, y `interaction.response.send_message(...)` envía una respuesta.

**Bot vs Client**: `commands.Bot` agrega funciones útiles de comandos (como árboles de comandos) sobre el cliente de Discord de nivel más bajo.

**Intents**: Permisos que indican a Discord qué datos deseas (mensajes, miembros, etc.). Usar menos permisos mantiene tu bot más simple y seguro.

**Exceptions (try / except)**: El bloque `try:` ejecuta código que podría fallar; `except Exception as e:` atrapa errores para que tu bot los registre en lugar de fallar.

</details>

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Advertencia:</strong> Para simplificar mostramos el token en el código. En proyectos reales, guarda secretos en variables de entorno o un repositorio seguro.
{{< /alert >}}

---

## 3. Ejecutar el Bot
1. Abre `bot.py` en el editor.
1. Abre la vista de Ejecutar y Depurar (icono de "play" con un insecto).
1. Si se te pide seleccionar una configuración, elige `Archivo Python`.
1. Haz clic en el botón verde de Ejecutar/Depurar.
1