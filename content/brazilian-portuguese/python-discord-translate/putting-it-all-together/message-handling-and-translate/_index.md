---
title: "Manipulação de Mensagens e Comando de Tradução"
draft: false
weight: 4
---

É aqui que a mágica acontece! O bot monitora todas as mensagens e as traduz automaticamente para pessoas que precisam. Além disso, há um comando de backup `/translate`.

## Permitir que o Bot Leia Mensagens

Primeiro, precisamos de permissão para ler mensagens:

```python
# Informar ao Discord que queremos ler mensagens
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)
```

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Aviso:</strong> Ative a "Message Content Intent" no Discord Developer Portal, ou o bot não poderá ler mensagens.
{{< /alert >}}

## O Código de Tradução Automática

Este código executa sempre que alguém envia uma mensagem:

```python
@bot.event
async def on_message(message):
    # Não traduzir mensagens de bots
    if message.author.bot:
        return
    
    # Ignorar mensagens muito curtas (menos de 3 letras)
    if len(message.content.strip()) < 3:
        return
    
    # Se ninguém se registrou, não faça nada
    if not user_languages:
        return

    # Detectar o idioma da mensagem
    detected_lang = detect_language(message.content)
    if detected_lang not in ["en", "es"]:
        return

    # Verificar cada pessoa que se registrou
    for uid, preferred_lang in user_languages.items():
        # Não enviar mensagens de volta para o próprio autor
        if uid == message.author.id:
            continue
        
        # Ignorar se já falam este idioma
        if detected_lang == preferred_lang:
            continue

        # Traduzir!
        translation = translate_text(message.content, detected_lang, preferred_lang)
        if translation:
            # Encontrar o usuário
            user = bot.get_user(uid)
            if user is None:
                try:
                    user = await bot.fetch_user(uid)
                except:
                    continue
            if not user:
                continue
            
            # Enviar um DM
            try:
                original_lang_name = "Inglês" if detected_lang == "en" else "Espanhol"
                target_lang_name = "Inglês" if preferred_lang == "en" else "Espanhol"
                dm_text = (
                    f"**Tradução** ({original_lang_name} -> {target_lang_name})\n"
                    f"**Original:** {message.content}\n"
                    f"**Tradução:** {translation}\n"
                    f"*De {message.author.display_name} no #{message.channel.name}*\n\n"
                )
                await user.send(dm_text)
            except:
                pass  # Se o envio do DM falhar, apenas ignore
```

### O Que Ele Faz Passo a Passo

1. **Filtrar conteúdo inútil**:
   - Ignorar mensagens de bots (para evitar laços infinitos!)
   - Ignorar mensagens muito curtas (como "ok" ou "oi")
   - Ignorar se ninguém se registrou

2. **Verificar o idioma**:
   - Usar `detect_language()` para identificar o idioma
   - Continuar apenas se for inglês ou espanhol

3. **Loop pelos usuários**:
   - Verificar cada pessoa registrada
   - Ignorar quem enviou a mensagem
   - Ignorar pessoas que já falam o idioma

4. **Enviar traduções**:
   - Traduzir para o idioma preferido
   - Encontrar o usuário no Discord
   - Enviar uma DM com a tradução

## O Comando Manual `/translate`

Às vezes você só quer traduzir algo rapidamente:

```python
@bot.tree.command(name="translate", description="Traduzir manualmente Inglês ↔ Espanhol")
@app_commands.describe(
    phrase="O que você deseja traduzir?",
    translate_to="inglês ou espanhol (padrão: espanhol)"
)
async def translate_command(interaction: discord.Interaction, phrase: str, translate_to: str | None = None):
    # Mostrar "pensando..." enquanto trabalha
    await interaction.response.defer(thinking=True)
    
    # Determinar para qual idioma traduzir
    target = (translate_to or "espanhol").lower()
    if target in ("espanhol", "es"):
        from_lang, to_lang, label = "en", "es", "Espanhol"
    elif target in ("inglês", "en"):
        from_lang, to_lang, label = "es", "en", "Inglês"
    else:
        await interaction.followup.send("Escolha entre 'inglês' ou 'espanhol'")
        return
    
    # Realizar a tradução
    result = translate_text(phrase, from_lang, to_lang)
    if result:
        await interaction.followup.send(f"{label}: {result}")
    else:
        await interaction.followup.send("Tradução falhou. O servidor está em execução?")
```

### Recursos Interessantes

- **Funciona nos dois sentidos**: Inglês -> Espanhol ou Espanhol -> Inglês
- **Padrão inteligente**: Se você não especificar, assume Espanhol
- **Mostra "pensando"**: Assim você sabe que está funcionando
- **Mensagens de erro úteis**: Explica o que deu errado

## Como a DM Parece

Quando alguém escreve "¡Buenos días amigos!", falantes de inglês recebem esta DM:

```
**Tradução** (Espanhol -> Inglês)
**Original:** ¡Buenos días amigos!
**Tradução:** Good morning friends!
*De UserName no #general*
```

## Testando Tudo

### Testar Tradução Automática
1. Pessoa A: `/register_language` -> escolhe Espanhol
2. Pessoa B: `/register_language` -> escolhe Inglês
3. Pessoa A digita: "Hello everyone!"
   - Pessoa B recebe uma tradução para o Espanhol via DM
4. Pessoa B digita: "¡Gracias!"
   - Pessoa A recebe uma tradução para o Inglês via DM

### Testar Tradução Manual
```
/translate phrase:"Hello world"
-> Spanish: ¡Hola Mundo!

/translate phrase:"Buenos dias" translate_to:english
-> English: Good morning

/translate phrase:"How are you?"
-> Spanish: ¿Cómo estás?
```

## Problemas Comuns

| Problema | Causa | Solução |
|----------|-------|---------|
| Sem tradução automática | "Message Content Intent" está desativado | Ative no Developer Portal |
| As DMs não chegam | O usuário desativou DMs | Eles precisam permitir DMs do servidor |
| Traduções lentas | O servidor está ocupado | Seja paciente ou reinicie o LibreTranslate |
| O bot se traduz | Faltou a verificação do bot | Certifique-se