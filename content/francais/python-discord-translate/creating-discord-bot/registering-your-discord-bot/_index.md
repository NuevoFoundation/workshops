---
title: "Enregistrement de Votre Bot Discord"
draft: false
weight: 1
---

Nuvi ne peut pas déployer un traducteur sans une « identité » officielle. Avant de coder un réel comportement, vous devez créer un utilisateur bot dans le portail développeur de Discord. Cela vous fournira un **jeton** (un mot de passe secret) que votre code utilisera pour se connecter.

### 1. Ouvrir le Portail Développeur
Rendez-vous sur le [portail développeur de Discord](https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications%3Fnew_application%3Dtrue) et connectez-vous avec votre compte Discord (ou créez-en un si vous n’en possédez pas).

### 2. Créer une Nouvelle Application
Cliquez sur **New Application**.
- Donnez-lui un nom court et clair (exemple : `Nuevo Translator Bot`).
- Cochez la case des conditions d’utilisation, puis cliquez sur **Create**.

![Créer une nouvelle application](../../media/discord-bot-name.png)

### 3. Ajouter un Utilisateur Bot
Sur la page de votre application :
- Cliquez sur **Bot** dans le menu de gauche.
- Cliquez sur **Add Bot** → **Yes, do it!**
- (Optionnel) Donnez-lui une icône et un pseudonyme.

### 4. Copier le Jeton du Bot (Gardez-le Secret !)
Toujours sur la page de votre bot :
- Cliquez sur **Reset Token** ou **Copy Token**.
- Cette longue chaîne de caractères est comme un mot de passe pour votre bot.
- Ne la publiez jamais publiquement.

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascotte Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Attention :</strong> Si quelqu’un obtient votre jeton, il peut contrôler votre bot. Si cela arrive, réinitialisez-le immédiatement.
{{< /alert >}}

### 5. Activer l’Accès au Contenu des Messages (Important pour la Traduction !)
Toujours sur la page **Bot** :
- Faites défiler jusqu’à **Privileged Gateway Intents**.
- Activez le basculement **Message Content Intent**.
- Cela permet à votre bot de lire les messages (nécessaire pour la traduction automatique).

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascotte Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Attention :</strong> Sans l’activation de l’accès au contenu des messages, votre bot ne pourra pas les lire, et la traduction automatique ne fonctionnera pas.
{{< /alert >}}

### 6. Inviter Votre Bot à un Serveur
- Cliquez sur **OAuth2 → URL Generator**.
- Sous **Scopes**, cochez : `bot` et `applications.commands`.
- Sous **Bot Permissions**, sélectionnez uniquement ce dont vous avez besoin (commencez simplement : `Read Messages/View Channels`, `Send Messages`).
- Copiez l’URL générée, collez-la dans votre navigateur, choisissez un serveur que vous possédez ou gérez, et autorisez.

Votre bot est maintenant enregistré et ajouté à votre serveur ! Il ne sera pas en ligne tant que vous ne lancerez pas votre code Python avec le jeton. Une fois en ligne, vous commencerez à le transformer en l’assistant traducteur dont Nuvi a besoin.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascotte Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Astuce Nuvi :</strong> Si l’URL d’invitation échoue, vérifiez que les options `bot` et `applications.commands` ont bien été sélectionnées.
{{< /alert >}}