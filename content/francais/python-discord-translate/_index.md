---
title: "Discord : Créer un Bot Traducteur"
description: "Apprenez des concepts intermédiaires de Python comme les bibliothèques et APIs avec une intégration Discord"
date: 2025-09-15T10:11:00-07:00
prereq: "Bases de Python"
difficulties: ["intermédiaire"]
language: "python"
topics: ["bases de la programmation"]
icon: "fab fa-python"
draft: false
---

## Aperçu
Bienvenue dans le cours **Python : Création d'un Bot Traducteur Discord** !

{{< alert theme="info" >}}
<img src="media/NF_mascot.jpg" alt="Mascotte Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi dit :</strong> Prêt(e) à coder quelque chose de génial ? Nous allons créer un bot qui brise les barrières linguistiques — comme un ami ultra-intelligent qui traduit instantanément les messages. Rendons internet plus accueillant, une traduction à la fois.
{{< /alert >}}

![Nuvi](media/NF_mascot.jpg)
Nuvi vient de créer un nouveau serveur Discord pour que tous ses amis du monde entier puissent se retrouver, partager des idées et planifier des projets créatifs. Il n'y a qu'un problème : tout le monde ne parle pas la même langue. Certains amis écrivent en anglais, d'autres en espagnol, en portugais, en coréen ou en chinois. Les conversations deviennent confuses, certaines personnes se sentent exclues, et Nuvi veut que tout le monde se sente inclus.

Donc, Nuvi a une idée : construire un **bot traducteur** qui vit au sein même du serveur Discord. Vous commencerez par des commandes slash simples, puis vous améliorerez le bot pour que les utilisateurs puissent enregistrer leur langue préférée (anglais ou espagnol) et recevoir automatiquement en privé (DM) des traductions chaque fois que quelqu'un parle dans l'autre langue. Pour y parvenir, Nuvi (et vous !) allez apprendre à :

{{< alert theme="warning" >}}
<img src="media/NF_mascot.jpg" alt="Mascotte Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Attention :</strong> Pas de panique si certains termes semblent nouveaux. Nous expliquerons tout étape par étape. À la fin, vous verrez comment les pièces s'assemblent comme un puzzle.
{{< /alert >}}

- Connecter un code Python à Discord en utilisant un utilisateur bot
- Écouter les messages en toute sécurité (avec les droits d'intention appropriés)
- Faire fonctionner un service de traduction local (LibreTranslate)
- Détecter si un message est en anglais ou en espagnol
- Traduire automatiquement les messages pour les utilisateurs enregistrés
- Envoyer les traductions en privé pour que le canal reste propre
- Offrir toujours une commande manuelle `/translate` comme solution de secours

À la fin, vous aurez un bot fonctionnel qui aide les personnes parlant différentes langues à discuter ensemble. Vous n'écrivez pas seulement du code — vous construisez un pont entre amis.

### Feuille de route
1. Préparation : prérequis & bases de Discord  
2. Création du Bot : enregistrement + commande slash minimale  
3. Lancer un service de traduction localement : démarrer LibreTranslate + tester le script  
4. Tout assembler : détecter, traduire, enregistrer les préférences linguistiques  
5. Objectifs facultatifs : persistance (enregistrement des choix de langue des utilisateurs), commandes supplémentaires  

### Glossaire
- **Endpoint (Point de terminaison) :** Une URL spécifique sur un serveur qui exécute une tâche (ex. : `/translate`).  
- **Intention :** Un drapeau de permission indiquant à Discord quels événements votre bot peut recevoir.  
- **Commande Slash :** Une commande structurée qui commence par `/`, validée et complétée automatiquement par Discord.  
- **Serveur de Traduction :** Le processus local LibreTranslate qui détecte et traduit du texte.  
- **Persistance (Facultatif) :** Sauvegarde des choix de langue des utilisateurs pour qu'ils persistent après un redémarrage.  

Prêt(e) à aider Nuvi ? Construisons-le étape par étape.  