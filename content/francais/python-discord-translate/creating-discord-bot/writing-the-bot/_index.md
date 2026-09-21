---
title: "Écrire un bot simple"
draft: false
weight: 2
---

Nuvi possède désormais une identité de bot enregistrée. Prochaine étape : lui faire répondre. Avec votre dossier de projet, environnement virtuel et fichier de départ prêts, vous allez construire une **fondation minimale de bot**. Cette première version prouve simplement que la connexion fonctionne. Nous activons également une permission (`message_content`) maintenant pour que les pages suivantes puissent ajouter une auto-traduction sans revisiter la configuration.

Dans cette partie, vous allez :

1. Ajouter `discord.py` à `requirements.txt` et l’installer (UI de VS Code — sans taper dans le terminal)
1. Écrire un bot basique qui répond à la commande slash `/hello`
1. Activer l’intention de contenu des messages (nécessaire plus tard pour l’auto-traduction)
1. Exécuter et tester le bot

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascotte Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi dit :</strong> Votre premier objectif est simplement de voir le bot se connecter — la traduction viendra ensuite. De petites victoires gardent le momentum !
{{< /alert >}}

---

## 1. Ajouter et installer la bibliothèque discord.py (en utilisant requirements.txt + UI de VS Code)
Nous allons déclarer la dépendance d’abord, puis laisser VS Code l’installer dans votre environnement virtuel.

### 1.a Ajouter dans requirements.txt
1. Ouvrez `requirements.txt` dans votre projet.
1. Ajoutez cette ligne (le fichier peut simplement contenir cela pour l'instant) :
```text
discord.py
```
1. Enregistrez le fichier

### 1.b Installer via l’interface du gestionnaire d’environnement
1. Ouvrez la vue de l'extension Python (icône Python dans la barre d’activités) et confirmez que le bon environnement (par ex. `.venv`) est sélectionné.
1. Sélectionnez l’icône "Packages" (elle ressemble à une boîte) qui affichera un menu déroulant. Maintenant, sélectionnez "Install project dependencies".
![Installer les dépendances](../../media/dependencies.png)
1. Cliquez sur la case à cocher pour "requirements.txt" et cliquez sur "Ok".
![Sélectionner requirements.txt](../../media/requirements.png)
1. Attendez que `discord.py` apparaisse dans la liste des packages installés.
![discord.py installé](../../media/discord-installed.png)

## 2. Écrire le code du bot
Ouvrez `bot.py` et remplacez tout code de remplacement par ce qui suit. (Vous remarquerez un dictionnaire `user_languages` déjà présent — c'est un "carnet temporaire" que nous utiliserons réellement lorsque nous ajouterons l'inscription et l'auto-traduction bientôt.)
```python
import discord
from discord.ext import commands

TOKEN = "<votre token ici>"

# C'est ici que nous mémorisons la langue que veut chaque utilisateur
# C'est comme un carnet : user_languages[user_id] = "en" ou "es"
user_languages = {}

# Dire à Discord que notre bot doit lire les messages (pas seulement les commandes)
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"Bot est en ligne sous le nom {bot.user}!")
    try:
        synced = await bot.tree.sync()
        print(f"{len(synced)} commandes synchronisées.")
    except Exception as e:
        print(f"Erreur : {e}")

@bot.tree.command(name="hello", description="Dit bonjour !")
async def hello_command(interaction: discord.Interaction):
    await interaction.response.send_message(f"Bonjour {interaction.user.display_name} ! Passez une excellente journée à coder !")

if not TOKEN:
    raise RuntimeError("Token du bot manquant. Ajoutez-le à la variable TOKEN près du haut du fichier.")

bot.run(TOKEN)
```

### Ce que cela fait :
- Importe la bibliothèque Discord pour ne pas réinventer la mise en réseau.
- Configure les "intentions" et active `message_content` tôt (l’auto-traduction future a besoin de lire les messages).
- Crée et démarre une connexion bot.
- Enregistre une commande slash `/hello` pour prouver que la synchronisation des commandes fonctionne.
- Utilise `user_languages = {}` comme un endroit simple en mémoire que nous remplirons plus tard.
- Répond avec un message d’accueil personnalisé lorsque `/hello` s'exécute.
- Contrôle de sécurité : s’arrête si le token est manquant.

<details>
<summary><strong>-> Détails avancés (cliquez pour développer si vous souhaitez en savoir plus sur les concepts avancés utilisés ici. Totalement optionnel !) </strong></summary>

**async / await** : Ces mots-clés permettent à Python d’exécuter d’autres tâches en attendant (par exemple, que Discord réponde) pour que votre bot ne gèle pas.

**Événement (@bot.event)** : Les décorateurs comme `@bot.event` indiquent à la bibliothèque "exécute cette fonction lorsqu’un événement spécifique se produit" (ici : lorsque le bot est prêt).

**Commandes slash (`@bot.tree.command`)** : Cela crée des commandes modernes qui apparaissent lorsque les utilisateurs tapent `/` sur Discord. Elles sont enregistrées auprès des serveurs Discord et peuvent prendre un court instant pour se synchroniser.

**Interaction** : Représente un utilisateur utilisant une commande slash. `interaction.user` vous donne la personne, et `interaction.response.send_message(...)` envoie une réponse.

**Bot vs Client** : `commands.Bot` ajoute des fonctionnalités de commande utiles (comme les arbres de commandes) au-dessus du client Discord de niveau inférieur.

**Intentions** : Permissions indiquant à Discord quelles données vous souhaitez (messages, membres, etc.). En utiliser moins simplifie et sécurise votre bot.

**Exceptions (try / except)** : Le bloc `try:` exécute du code pouvant échouer ; `except Exception as e:` capture les erreurs afin que votre bot les enregistre au lieu de planter.

</details>

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascotte Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Attention :</strong> Par souci de simplicité, nous montrons le token directement dans le code. Dans des projets réels, stockez les secrets dans des variables d’environnement ou un coffre-fort sécurisé.
{{< /alert >}}

---

## 3. Exécuter le Bot
1. Ouvrez `bot.py` dans l’éditeur.
1. Ouvrez l’affichage Exécuter&Déboguer (icône de lecture avec un bug).
1. Si on