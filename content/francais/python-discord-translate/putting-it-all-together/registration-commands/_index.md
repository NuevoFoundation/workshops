---
title: "Commandes d'inscription"
draft: false
weight: 3
---

Ces commandes permettent aux utilisateurs de s'inscrire à la traduction automatique, de consulter leurs paramètres et d'arrêter de recevoir des traductions.

## Suivi des utilisateurs

Le bot mémorise les préférences linguistiques des utilisateurs à l'aide d'un simple dictionnaire :

```python
# Cela stocke : user_id -> leur langue préférée ("en" ou "es")
user_languages = {}
```

C'est comme une feuille d'inscription où chaque personne écrit son nom et sa langue préférée !

## Commande `/register_language`

Cette commande permet aux utilisateurs de choisir la langue qu'ils parlent (celle dans laquelle ils souhaitent recevoir les messages) :

```python
@bot.tree.command(name="register_language", description="Choisissez la langue que vous parlez")
@app_commands.describe(language="Dans quelle langue souhaitez-vous que les messages soient traduits ?")
@app_commands.choices(language=[
    app_commands.Choice(name="Je parle anglais", value="en"),
    app_commands.Choice(name="Je parle espagnol", value="es")
])
async def register_language(interaction: discord.Interaction, language: app_commands.Choice[str]):
    user_languages[interaction.user.id] = language.value
    lang_name = "Anglais" si language.value == "en" else "Espagnol"
    await interaction.response.send_message(
        f"Entendu ! Vous parlez {lang_name}, donc je traduirai les messages en {lang_name} pour vous !",
        ephemeral=True
    )
```

### Ce qui est génial avec cette commande
- **Choix clairs** : "Je parle anglais" ou "Je parle espagnol" - pas de confusion !
- **Réponse privée** : Seul l'utilisateur voit le message de confirmation
- **Mémoire** : Sauvegarde la langue que l'utilisateur comprend

## Commande `/my_language`

Cette commande montre à l'utilisateur la langue qu'il a choisie :

```python
@bot.tree.command(name="my_language", description="Voir la langue que vous avez choisie")
async def my_language(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        lang = user_languages[uid]
        lang_name = "Anglais" si lang == "en" else "Espagnol"
        await interaction.response.send_message(f"Votre langue : {lang_name}", ephemeral=True)
    else:
        await interaction.response.send_message("Vous n'avez pas encore choisi de langue ! Utilisez /register_language", ephemeral=True)
```

### Ce que cela fait
- **Affiche leur choix** : Indique la langue choisie par l'utilisateur
- **Rappel utile** : Si l'utilisateur ne s'est pas inscrit, il reçoit des indications sur comment le faire

## Commande `/stop_translation`

Cette commande permet à l'utilisateur d'arrêter de recevoir des traductions :

```python
@bot.tree.command(name="stop_translation", description="Arrêter de recevoir des traductions automatiques")
async def stop_translation(interaction: discord.Interaction):
    uid = interaction.user.id
    if uid in user_languages:
        del user_languages[uid]
        await interaction.response.send_message("Vous ne recevrez plus de traductions.", ephemeral=True)
    else:
        await interaction.response.send_message("Vous ne receviez pas de traductions de toute façon !", ephemeral=True)
```

### Ce qui se passe
- **Supprime du registre** : Efface l'entrée de l'utilisateur
- **Confirme l'action** : Affiche un message de confirmation
- **Réponse amicale** : Même si l'utilisateur n'était pas inscrit

## Comment tout fonctionne ensemble

1. **Début** : Personne n'est inscrit
2. **Inscription** : `/register_language` ajoute l'utilisateur à la liste
3. **Réception des traductions** : Le bot vérifie la liste pour savoir qui a besoin de quoi
4. **Vérifier le statut** : `/my_language` montre le choix de l'utilisateur
5. **Se désinscrire** : `/stop_translation` supprime l'utilisateur de la liste

## Exemple : Deux amis s'inscrivent

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascotte Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Astuces Nuvi :</strong> Voici comment Maria et John utilisent le système :
{{< /alert >}}

1. **Maria** (parle espagnol) tape : `/register_language` et choisit "Je parle espagnol"
   - Maintenant, elle recevra les messages en anglais traduits en espagnol

2. **John** (parle anglais) tape : `/register_language` et choisit "Je parle anglais"
   - Maintenant, il recevra les messages en espagnol traduits en anglais

3. **Maria** vérifie : `/my_language`
   - Le bot lui dit : "Votre langue : Espagnol"

4. **John** décide d’arrêter : `/stop_translation`
   - Le bot lui dit : "✅ Vous ne recevrez plus de traductions."

## Bon à savoir

- **Messages privés** : Toutes les réponses sont privées (seul l'utilisateur les voit)
- **Réinitialisation au redémarrage du bot** : La liste est uniquement en mémoire et n'est pas sauvegardée dans un fichier
- **Facile à changer** : Il suffit de relancer `/register_language` avec un nouveau choix
- **Pas de spam** : Seules les personnes inscrites reçoivent des traductions

## Résolution des problèmes

| Problème | Solution |
|----------|----------|
| Paramètres disparus | Le bot a probablement redémarré - inscrivez-vous à nouveau |
| Changer de langue | Il suffit de relancer `/register_language` |
| Pas de traductions reçues | Vérifiez avec `/my_language` si vous êtes inscrit |
| Impossible de recevoir des messages privés | Vérifiez vos paramètres de confidentialité Discord |

---