---
title: "Gestión de Mensajes y Comando de Traducción"
draft: false
weight: 4
---

¡Aquí es donde sucede la magia! El bot supervisa cada mensaje y traduce automáticamente para las personas que lo necesitan. Además, hay un comando de respaldo `/translate`.

## Permitir que el Bot Lea Mensajes

Primero, necesitamos el permiso para leer los mensajes:

```python
# Decirle a Discord que queremos leer los mensajes
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)
```

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Advertencia:</strong> Activa la "Intención de Contenido de Mensaje" en el Portal de Desarrolladores de Discord o el bot no podrá leer mensajes.
{{< /alert >}}

## El Código de Traducción Automática

Esto se ejecuta cada vez que alguien envía un mensaje:

```python
@bot.event
async def on_message(message):
    # No traducir mensajes del bot
    if message.author.bot:
        return
    
    # Omitir mensajes muy cortos (menos de 3 letras)
    if len(message.content.strip()) < 3:
        return
    
    # Si nadie se ha registrado, no hacer nada
    if not user_languages:
        return

    # Determinar en qué idioma está este mensaje
    detected_lang = detect_language(message.content)
    if detected_lang not in ["en", "es"]:
        return

    # Verificar cada persona que se registró
    for uid, preferred_lang in user_languages.items():
        # No enviar a las personas sus propios mensajes
        if uid == message.author.id:
            continue
        
        # Omitir si ya hablan este idioma
        if detected_lang == preferred_lang:
            continue

        # ¡Traducir!
        translation = translate_text(message.content, detected_lang, preferred_lang)
        if translation:
            # Encontrar al usuario
            user = bot.get_user(uid)
            if user is None:
                try:
                    user = await bot.fetch_user(uid)
                except:
                    continue
            if not user:
                continue
            
            # Enviarles un mensaje privado
            try:
                original_lang_name = "Inglés" si detected_lang == "en" else "Español"
                target_lang_name = "Inglés" si preferred_lang == "en" else "Español"
                dm_text = (
                    f"**Traducción** ({original_lang_name} -> {target_lang_name})\n"
                    f"**Original:** {message.content}\n"
                    f"**Traducción:** {translation}\n"
                    f"*De {message.author.display_name} en #{message.channel.name}*\n\n"
                )
                await user.send(dm_text)
            except:
                pass  # Si falla el DM, simplemente se omite
```

### Qué Hace Paso a Paso

1. **Filtrar contenido irrelevante**:
   - Omitir mensajes del bot (¡sin bucles infinitos!)
   - Omitir mensajes pequeños (como "ok" o "hola")
   - Omitir si nadie se ha registrado

2. **Comprobar el idioma**:
   - Usar `detect_language()` para determinar el idioma
   - Continuar solo si es inglés o español

3. **Recorrer usuarios**:
   - Comprobar cada persona registrada
   - Omitir a la persona que envió el mensaje
   - Omitir personas que ya hablan ese idioma

4. **Enviar traducciones**:
   - Traducir al idioma preferido del usuario
   - Encontrarlos en Discord
   - Enviarles un mensaje privado con la traducción

## El Comando Manual `/translate`

A veces simplemente quieres traducir algo rápidamente:

```python
@bot.tree.command(name="translate", description="Traduce manualmente Inglés ↔ Español")
@app_commands.describe(
    phrase="¿Qué quieres traducir?",
    translate_to="inglés o español (predeterminado: español)"
)
async def translate_command(interaction: discord.Interaction, phrase: str, translate_to: str | None = None):
    # Mostrar "pensando..." mientras trabaja
    await interaction.response.defer(thinking=True)
    
    # Determinar hacia qué idioma traducir
    target = (translate_to or "spanish").lower()
    if target in ("spanish", "es"):
        from_lang, to_lang, label = "en", "es", "Español"
    elif target in ("english", "en"):
        from_lang, to_lang, label = "es", "en", "Inglés"
    else:
        await interaction.followup.send("Por favor elige 'inglés' o 'español'")
        return
    
    # Realizar la traducción
    result = translate_text(phrase, from_lang, to_lang)
    if result:
        await interaction.followup.send(f"{label}: {result}")
    else:
        await interaction.followup.send("La traducción falló. ¿El servidor está funcionando?")
```

### Funciones Geniales

- **Funciona en ambos sentidos**: Inglés -> Español o Español -> Inglés
- **Predeterminado inteligente**: Si no especificas, asume Español
- **Muestra "pensando"**: Para que sepas que está trabajando
- **Errores claros**: Te dice qué salió mal

## Cómo se Ve el Mensaje Privado

Cuando alguien escribe "¡Buenos días amigos!", los angloparlantes reciben este mensaje privado:

```
**Traducción** (Español -> Inglés)
**Original:** ¡Buenos días amigos!
**Traducción:** Good morning friends!
*De UserName en #general*
```

## Prueba de Todo

### Prueba de Traducción Automática
1. Persona A: `/register_language` -> elige Español
2. Persona B: `/register_language` -> elige Inglés
3. Persona A escribe: "¡Hola a todos!"
   - Persona B recibe una traducción al inglés en un mensaje privado
4. Persona B escribe: "Thank you!"
   - Persona A recibe una traducción al español en un mensaje privado

### Prueba de Traducción Manual
```
/translate phrase:"Hello world"
-> Español: ¡Hola Mundo!

/translate phrase:"Buenos días" translate_to:ingles
-> Inglés: Good morning

/translate phrase:"¿Cómo estás?"
-> Español: How are you?
```

## Problemas Comunes

| ¿Qué sucede? | Por qué | Cómo solucionarlo |
|--------------|---------|-------------------|
| No hay traducción automática | La intención de Contenido de Mensaje está desactivada | Actívala en el Portal de Desarrolladores |
| No llegan mensajes privados | El usuario tiene desactivados los mensajes privados | Necesitan permitir mensajes privados del servidor |
| Traducciones lentas |