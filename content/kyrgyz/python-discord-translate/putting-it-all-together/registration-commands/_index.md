---
title: "Каттоо буйруктары"
draft: false
weight: 3
---

Бул буйруктар колдонуучуларга авто-тил которууга катталууга, алардын жөндөмдөрүн текшерүүгө жана которууларды токтотууга мүмкүнчүлүк берет.

## Колдонуучуларды Эске Сактоо

Бот ким кайсы тилди каалай турганын жөнөкөй сөздүк аркылуу сактап турат:

```python
# Бул жерде сакталат: user_id -> алардын артык көргөн тили ("en" же "es")
user_languages = {}
```

Муну ар ким өзүнүн аты-жөнүн жана каалаган тилин жазган каттоо барагы деп ойлонсоңуз болот!

## `/register_language` Буйругу

Бул буйрук колдонуучуларга сүйлөгөн тилин (ал башка тилдерге которулушун каалаган тилди) тандоого мүмкүнчүлүк берет:

```python
@bot.tree.command(name="register_language", description="Сүйлөгөн тилиңди танда")
@app_commands.describe(language="Кайсы тилге билдирүүлөр которулушун каалайсың?")
@app_commands.choices(language=[
    app_commands.Choice(name="Мен Англисче сүйлөйм", value="en"),
    app_commands.Choice(name="Мен Испанча сүйлөйм", value="es")
])
async def register_language(interaction: discord.Interaction, language: app_commands.Choice[str]):
    user_languages[interaction.user.id] = language.value
    lang_name = "Англисче" if language.value == "en" else "Испанча"
    await interaction.response.send_message(
        f"Түшүндүм! Сен {lang_name} сүйлөйсүң, андыктан мен билдирүүлөрдү сен үчүн {lang_name} тилине которуп турам!",
        ephemeral=True
    )
```

### Бул Эмне Үчүн Кызыктуу
- **Так тандоолор**: "Мен Англисче сүйлөйм" же "Мен Испанча сүйлөйм" - эч кандай чаташуу жок!
- **Жеке жооп**: Бул билдирүүнү бир гана алар көрө алат
- **Сакталат**: Алар түшүнгөн тилди эсине сактайт

## `/my_language` Буйругу

Бул буйрук колдонуучуларга тандалган тилди көрсөтөт:

```python
@bot.tree.command(name="my_language", description="Тандаган тилиңди көр")
async def my_language(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        lang = user_languages[uid]
        lang_name = "Англисче" if lang == "en" else "Испанча"
        await interaction.response.send_message(f"Тандаган тилиң: {lang_name}", ephemeral=True)
    else:
        await interaction.response.send_message("Сен али тил тандай элексиң! /register_language буйругун колдон", ephemeral=True)
```

### Аткара Турган Жумушу
- **Тандоону көрсөтөт**: Аларга кайсы тилди тандаганын айтат
- **Ыңгайлуу эскертүү**: Эгер катталбаган болсо, кантип катталууну түшүндүрөт

## `/stop_translation` Буйругу

Бул буйрук колдонуучуларга которууларды токтотууга мүмкүндүк берет:

```python
@bot.tree.command(name="stop_translation", description="Авто-которууларды токтот")
async def stop_translation(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        del user_languages[uid]
        await interaction.response.send_message("Эми сен которууларды албайсың.", ephemeral=True)
    else:
        await interaction.response.send_message("Сен которууларды алчу эмессиң!", ephemeral=True)
```

### Кантип Иштейт
- **Тизмеден чыгарат**: Алардын жазуусун өчүрөт
- **Иштегенин ырастайт**: Белгиси бар билдирүү көрсөтөт
- **Жылуу мамиле**: Катталбаган болсо да, жылуу жооп берет

## Бул Бардыгы Бирге Кантип Иштейт

1. **Башталгыч**: Эч ким катталган эмес
2. **Катталуу**: `/register_language` буйругу аларды тизмеге кошот
3. **Которууларды алуу**: Бот кимге эмне керектигин тизмеден текшерет
4. **Статусту текшерүү**: `/my_language` алардын тандоосун көрсөтөт
5. **Токтотуу**: `/stop_translation` аларды тизмеден чыгарат

## Мисал: Эки Дос Катталуу

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi маскоту" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi кеңеши:</strong> Бул Мария жана Жон системаны кантип колдоно турганы тууралуу мисал:
{{< /alert >}}

1. **Мария** (Испанча сүйлөйт): `/register_language` жазат жана "Мен Испанча сүйлөйм" тандайт
   - Эми ал Англисче билдирүүлөрдү Испанчага которуп алат
   
2. **Жон** (Англисче сүйлөйт): `/register_language` жазат жана "Мен Англисче сүйлөйм" тандайт
   - Эми ал Испанча билдирүүлөрдү Англисче которуп алат

3. **Мария** текшерет: `/my_language`
   - Бот айтат: "Тандаган тилиң: Испанча"
   
4. **Жон** токтотууну тандайт: `/stop_translation`
   - Бот айтат: "✅ Эми сен которууларды албайсың."

## Билүү Үчүн Жакшы

- **Жеке билдирүүлөр**: Бардык жооптор жеке (бир гана сен көрөсүң)
- **Бот өчүрүлсө тазарбайт**: Тизмеде гана сакталат, файлга сакталбайт
- **Оңой өзгөртүү**: Жөн гана `/register_language` буйругун жаңы тандоо менен иштет
- **Спам жок**: Катталгандар гана которууларды алышат

## Маселелерди Чечүү

| Маселе | Чечим |
|--------|-------|
| Жөндөмдөр жок болду | Бот өчүрүлгөн окшойт - кайра каттал |
| Тилди өзгөрткүң келет | Жөн гана `/register_language` буйругун иштет |
