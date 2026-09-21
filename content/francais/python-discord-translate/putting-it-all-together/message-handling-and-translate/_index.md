---
title: "Gestion des Messages & Commande Traduire"
draft: false
weight: 4
---

C'est ici que la magie opère ! Le bot surveille chaque message et traduit automatiquement pour ceux qui en ont besoin. De plus, il existe une commande de secours `/translate`.

## Permettre au Bot de Lire les Messages

Tout d'abord, nous avons besoin de la permission de lire les messages :

```python
# Dire à Discord que nous voulons lire les messages
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)
```

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascotte Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Avertissement :</strong> Activez "Message Content Intent" dans le Portail des Développeurs Discord sinon le bot ne pourra pas lire les messages.
{{< /alert >}}

## Le Code d'Auto-Traduction

Ce code s'exécute chaque fois que quelqu'un envoie un message :

```python
@bot.event
async def on_message(message):
    # Ne pas traduire les messages des bots
    if message.author.bot:
        return
    
    # Ignorer les messages très courts (moins de 3 lettres)
    if len(message.content.strip()) < 3:
        return
    
    # Si personne ne s'est inscrit, ne rien faire
    if not user_languages:
        return

    # Déterminer la langue de ce message
    detected_lang = detect_language(message.content)
    if detected_lang not in ["en", "es"]:
        return

    # Vérifier chaque utilisateur inscrit
    for uid, preferred_lang in user_languages.items():
        # Ne pas envoyer les messages à leur auteur
        if uid == message.author.id:
            continue
        
        # Ignorer si l'utilisateur parle déjà cette langue
        if detected_lang == preferred_lang:
            continue

        # Traduire !
        translation = translate_text(message.content, detected_lang, preferred_lang)
        if translation:
            # Trouver l'utilisateur
            user = bot.get_user(uid)
            if user is None:
                try:
                    user = await bot.fetch_user(uid)
                except:
                    continue
            if not user:
                continue
            
            # Leur envoyer un DM
            try:
                original_lang_name = "Anglais" if detected_lang == "en" else "Espagnol"
                target_lang_name = "Anglais" if preferred_lang == "en" else "Espagnol"
                dm_text = (
                    f"**Traduction** ({original_lang_name} -> {target_lang_name})\n"
                    f"**Original :** {message.content}\n"
                    f"**Traduction :** {translation}\n"
                    f"*Par {message.author.display_name} dans #{message.channel.name}*\n\n"
                )
                await user.send(dm_text)
            except:
                pass  # Si l'envoi du DM échoue, simplement ignorer
```

### Ce Qu'il Fait Étape par Étape

1. **Filtrer les indésirables** :
   - Ignorer les messages des bots (pour éviter les boucles infinies !)
   - Ignorer les messages très courts (comme "ok" ou "salut")
   - Ignorer s'il n'y a personne d'inscrit

2. **Vérifier la langue** :
   - Utiliser `detect_language()` pour trouver la langue
   - Continuer uniquement si c'est de l'anglais ou de l'espagnol

3. **Boucler à travers les utilisateurs** :
   - Vérifier chaque personne inscrite
   - Ignorer l'auteur du message
   - Ignorer les personnes qui parlent déjà cette langue

4. **Envoyer les traductions** :
   - Traduire dans leur langue préférée
   - Les trouver sur Discord
   - Leur envoyer un joli DM avec la traduction

## La Commande Manuelle `/translate`

Parfois, vous voulez juste traduire quelque chose rapidement :

```python
@bot.tree.command(name="translate", description="Traduire manuellement Anglais ↔ Espagnol")
@app_commands.describe(
    phrase="Que voulez-vous traduire ?",
    translate_to="anglais ou espagnol (par défaut : espagnol)"
)
async def translate_command(interaction: discord.Interaction, phrase: str, translate_to: str | None = None):
    # Afficher "réflexion..." pendant le traitement
    await interaction.response.defer(thinking=True)
    
    # Déterminer la direction de la traduction
    target = (translate_to or "spanish").lower()
    if target in ("spanish", "es"):
        from_lang, to_lang, label = "en", "es", "Espagnol"
    elif target in ("english", "en"):
        from_lang, to_lang, label = "es", "en", "Anglais"
    else:
        await interaction.followup.send("Veuillez choisir 'anglais' ou 'espagnol'")
        return
    
    # Effectuer la traduction
    result = translate_text(phrase, from_lang, to_lang)
    if result:
        await interaction.followup.send(f"{label}: {result}")
    else:
        await interaction.followup.send("La traduction a échoué. Le serveur fonctionne-t-il ?")
```

### Fonctionnalités Sympas

- **Bi-directionnel** : Anglais -> Espagnol ou Espagnol -> Anglais
- **Par défaut intelligent** : Si vous ne précisez pas, cela suppose espagnol
- **Affiche "réflexion"** : Pour signaler que cela fonctionne
- **Erreurs explicites** : Indique ce qui ne va pas

## À Quoi Ressemble le DM

Quand quelqu'un écrit "¡Buenos días amigos !", les anglophones reçoivent ce DM :

```
**Traduction** (Espagnol -> Anglais)
**Original :** ¡Buenos días amigos !
**Traduction :** Good morning friends!
*Par UserName dans #general*
```

## Tout Tester

### Tester l'Auto-Traduction
1. Personne A : `/register_language` -> choisit Espagnol
2. Personne B : `/register_language` -> choisit Anglais
3. Personne A écrit : "Hello everyone!"
   - La Personne B reçoit une traduction en espagnol dans ses DMs
4. Personne B écrit : "¡Gracias!"
   - La Personne A reçoit une traduction en anglais dans ses DMs

### Tester la Traduction Manuelle
```
/translate phrase:"Hello world"
-> Espagnol: ¡Hola Mundo!

/translate phrase:"Buenos dias" translate_to:english
-> Anglais: Good morning

/translate phrase:"How are you?"
-> Espagnol: ¿Cómo estás?
```

## Problèmes Courants

| Problème | Raison | Solution |
|----------|--------|----------|
| Pas d'auto-traduction | L'int