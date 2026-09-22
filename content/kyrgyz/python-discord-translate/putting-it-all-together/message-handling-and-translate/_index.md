---
title: "Каттарды иштетүү жана Котормо буйругу"
draft: false
weight: 4
---

Бул жерде керемет жасалат! Бот ар бир билдирүүнү карайт жана кимге керектүү болсо, автоматтык түрдө которот. Андан тышкары, `/translate` резервдик буйругу бар.

## Ботту Билдирүүлөрдү Окууга Жол Бериңиз

Алгач, билдирүүлөрдү окууга уруксат алышыбыз керек:

```python
# Discord'го билдирүүлөрдү окууну каалай турганыбызды айтабыз
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)
```

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi талисманы" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Эскертүү:</strong> "Билдирүүлөрдүн мазмунуна макулдук" Discord Developer Portal'да жандырылышы керек, антпесе бот билдирүүлөрдү окуй албайт.
{{< /alert >}}

## Авто-Котормо Коду

Бул код кимдир бирөө билдирүү жиберген сайын иштейт:

```python
@bot.event
async def on_message(message):
    # Боттун билдирүүлөрүн которбойбуз
    if message.author.bot:
        return
    
    # Өтө кыска билдирүүлөрдү өткөрүп жиберүү (3 тамгадан кем)
    if len(message.content.strip()) < 3:
        return
    
    # Эгер эч ким катталбаган болсо, убакыт кетирбөө
    if not user_languages:
        return

    # Бул билдирүүнүн кайсы тилде экенин аныктайбыз
    detected_lang = detect_language(message.content)
    if detected_lang not in ["en", "es"]:
        return

    # Катталган ар бир адамды текшерүү
    for uid, preferred_lang in user_languages.items():
        # Өзүнүн билдирүүлөрүн жөнөтпөйбүз
        if uid == message.author.id:
            continue
        
        # Эгер алар ошол тилде сүйлөсө, өткөрүп жиберүү
        if detected_lang == preferred_lang:
            continue

        # Которуу
        translation = translate_text(message.content, detected_lang, preferred_lang)
        if translation:
            # Колдонуучуну табуу
            user = bot.get_user(uid)
            if user is None:
                try:
                    user = await bot.fetch_user(uid)
                except:
                    continue
            if not user:
                continue
            
            # Алардын Direct Message (DM) жиберүү
            try:
                original_lang_name = "Англисче" if detected_lang == "en" else "Испанча"
                target_lang_name = "Англисче" if preferred_lang == "en" else "Испанча"
                dm_text = (
                    f"**Котормо** ({original_lang_name} -> {target_lang_name})\n"
                    f"**Түп нуска:** {message.content}\n"
                    f"**Котормо:** {translation}\n"
                    f"*{message.channel.name} каналындагы {message.author.display_name} аттуу колдонуучудан*\n\n"
                )
                await user.send(dm_text)
            except:
                pass  # Эгер DM бүтпөсө, жөн гана өткөрүп жиберүү
```

### Эмне Кылат Адат-Адат

1. **Керексиз билдирүүлөрдү чыпкалоо**:
   - Боттун билдирүүлөрүн өткөрүп жиберүү (чексиз циклден сактануу!)
   - Өтө кыска билдирүүлөрдү өткөрүп жиберүү (мисалы, "ок" же "салам")
   - Эгер катталган колдонуучулар жок болсо, улантпоо

2. **Тилди текшерүү**:
   - `detect_language()` функциясын колдонуп аныктоо
   - Бул англисче же испанча болсо гана улантуу

3. **Колдонуучуларды аралап чыгуу**:
   - Катталган ар бир адамды текшерүү
   - Билдирүүнү жазган адамды өткөрүп жиберүү
   - Тилди билип жаткан колдонуучуларды өткөрүп жиберүү

4. **Котормолоруңузду жөнөтүңүз**:
   - Алардын тандалган тилине которуу
   - Discord'дон аларды табуу
   - Жагымдуу DM менен котормону жөнөтүү

## Кол менен `/translate` Буйругу

Кээде бир нерсени тез которууну каалайсыз:

```python
@bot.tree.command(name="translate", description="Англисче ↔ Испанча кол менен которуу")
@app_commands.describe(
    phrase="Эмне которгуңуз келет?",
    translate_to="англисче же испанча (демейки: испанча)"
)
async def translate_command(interaction: discord.Interaction, phrase: str, translate_to: str | None = None):
    # Биз иштеп жатканда "ойлонууда..." көрсөтүү
    await interaction.response.defer(thinking=True)
    
    # Кайсы тарапка которууну аныктоо
    target = (translate_to or "spanish").lower()
    if target in ("spanish", "es"):
        from_lang, to_lang, label = "en", "es", "Испанча"
    elif target in ("english", "en"):
        from_lang, to_lang, label = "es", "en", "Англисче"
    else:
        await interaction.followup.send("Сураныч, 'англисче' же 'испанча' тандаңыз")
        return
    
    # Котормо жүргүзүү
    result = translate_text(phrase, from_lang, to_lang)
    if result:
        await interaction.followup.send(f"{label}: {result}")
    else:
        await interaction.followup.send("Котормо жасай албады. Сервер иштеп жатабы?")
```

### Кызыктуу Өзгөчөлүктөр

- **Эки багытта да иштейт**: Англисче -> Испанча же Испанча -> Англисче
- **Акылдуу демейки жөндөөлөр**: Эгер айтылбаса, испанча деп түшүнөт
- **"Ойлонууда" көргөзүү**: Ал иштеп жатканын билип турасыз
- **Пайдалуу каталар**: Эмне туура эмес кеткенин айтат

## DM кандай көрүнөт

Кимдир бирөө "¡Buenos días amigos!" деп жазганда,