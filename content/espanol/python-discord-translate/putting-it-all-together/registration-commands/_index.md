---
title: "Comandos de Registro"
draft: false
weight: 3
---

Estos comandos permiten a los usuarios registrarse para la traducción automática, verificar sus configuraciones y dejar de recibir traducciones.

## Seguimiento de Usuarios

El bot recuerda quién quiere qué idioma utilizando un diccionario simple:

```python
# Esto almacena: user_id -> su idioma preferido ("en" o "es")
user_languages = {}
```

¡Piénsalo como una hoja de registro donde cada persona escribe su nombre y el idioma que prefiere!

## Comando `/register_language`

Este comando permite a los usuarios elegir el idioma que hablan (el idioma en el que quieren recibir mensajes):

```python
@bot.tree.command(name="register_language", description="Elige el idioma que hablas")
@app_commands.describe(language="¿A qué idioma deseas traducir los mensajes?")
@app_commands.choices(language=[
    app_commands.Choice(name="Hablo inglés", value="en"),
    app_commands.Choice(name="Hablo español", value="es")
])
async def register_language(interaction: discord.Interaction, language: app_commands.Choice[str]):
    user_languages[interaction.user.id] = language.value
    lang_name = "Inglés" if language.value == "en" else "Español"
    await interaction.response.send_message(
        f"¡Entendido! Hablas {lang_name}, así que traduciré los mensajes a {lang_name} para ti.",
        ephemeral=True
    )
```

### ¿Qué tiene de genial?
- **Opciones claras**: "Hablo inglés" o "Hablo español" - ¡sin confusión!
- **Respuesta privada**: Sólo ellos ven el mensaje de confirmación
- **Los recuerda**: Guarda el idioma que entienden

## Comando `/my_language`

Este comando muestra a los usuarios qué idioma eligieron:

```python
@bot.tree.command(name="my_language", description="Revisa qué idioma elegiste")
async def my_language(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        lang = user_languages[uid]
        lang_name = "Inglés" si lang == "en" else "Español"
        await interaction.response.send_message(f"Tu idioma: {lang_name}", ephemeral=True)
    else:
        await interaction.response.send_message("¡Aún no has elegido un idioma! Usa /register_language", ephemeral=True)
```

### ¿Qué hace?
- **Muestra su configuración**: Les indica qué idioma eligieron
- **Recordatorio útil**: Si no se han registrado, les dice cómo hacerlo

## Comando `/stop_translation`

Este comando permite a los usuarios dejar de recibir traducciones:

```python
@bot.tree.command(name="stop_translation", description="Deja de recibir traducciones automáticas")
async def stop_translation(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        del user_languages[uid]
        await interaction.response.send_message("Ya no recibirás traducciones.", ephemeral=True)
    else:
        await interaction.response.send_message("¡No estabas recibiendo traducciones de todas maneras!", ephemeral=True)
```

### ¿Qué sucede?
- **Los elimina de la lista**: Borra su entrada
- **Confirma que funcionó**: Muestra un mensaje de confirmación
- **Respuesta amigable**: Incluso si no estaban registrados

## Cómo Funciona Todo Junto

1. **Inicio**: Nadie está registrado
2. **Registro**: `/register_language` los agrega a la lista
3. **Recibir traducciones**: El bot revisa la lista para ver quién necesita qué idioma
4. **Revisar estado**: `/my_language` muestra su elección
5. **Salir**: `/stop_translation` los elimina

## Ejemplo: Dos Amigos Se Registran

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascota Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Consejo de Nuvi:</strong> Así es como María y John usarían el sistema:
{{< /alert >}}

1. **María** (habla español) escribe: `/register_language` y elige "Hablo español"
   - Ahora recibirá mensajes en inglés traducidos al español para ella
   
2. **John** (habla inglés) escribe: `/register_language` y elige "Hablo inglés"
   - Ahora recibirá mensajes en español traducidos al inglés para él

3. **María** verifica con: `/my_language`
   - El bot dice: "Tu idioma: Español"
   
4. **John** decide salir con: `/stop_translation`
   - El bot dice: "✅ Ya no recibirás traducciones."

## Cosas Importantes a Saber

- **Mensajes privados**: Todas las respuestas son privadas (sólo tú las ves)
- **Se restablece al reiniciar el bot**: La lista sólo está en memoria, no se guarda en un archivo
- **Fácil de cambiar**: Sólo ejecuta `/register_language` nuevamente con una nueva opción
- **Sin spam**: Sólo reciben traducciones quienes se registren

## Resolución de Problemas

| Problema | Solución |
|----------|----------|
| Configuraciones desaparecieron | El bot probablemente se reinició - regístrate nuevamente |
| Deseas cambiar el idioma | Simplemente ejecuta `/register_language` nuevamente |
| No recibes traducciones | Verifica con `/my_language` para ver si estás registrado |
| No puedes recibir mensajes directos | Revisa la configuración de privacidad de Discord |

---