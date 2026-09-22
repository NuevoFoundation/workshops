---
title: "Qu'est-ce que Discord ?"
draft: false
weight: 1
---

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascotte Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi dit :</strong> Discord peut sembler être une application de chat comme une autre, mais c'est en fait parfait pour notre projet de bot ! C'est là que des millions de personnes se retrouvent en ligne—des gamers aux groupes d'étude. Et la partie la plus cool ? Discord nous permet d'ajouter des bots pour améliorer encore plus ces communautés.
{{< /alert >}}

La nouvelle communauté de Nuvi vit sur Discord—une plateforme en ligne où les gens créent des communautés (appelées **serveurs**) pour discuter via texte, voix ou vidéo. Vous pouvez voir un serveur comme un groupe pour un club, un jeu, une classe ou des amis. À l'intérieur de chaque serveur se trouvent des **salons**. Les salons permettent d'organiser les conversations. Par exemple, un salon pourrait être dédié à l'aide aux devoirs et un autre à parler de jeux vidéo.

### Concepts Clés
- **Serveurs :** Espaces que les gens créent pour des groupes ou des sujets.
- **Salons :** Pièces à l'intérieur d'un serveur (texte ou vocal) pour différents types de discussions.
- **Utilisateurs :** Personnes ayant des comptes qui peuvent rejoindre des serveurs (parfois sur invitation).
- **Bots :** Programmes informatiques (comme celui que vous allez construire !) qui peuvent aider à réaliser des tâches telles que modérer les discussions, traduire des messages ou jouer de la musique.

Discord était d'abord populaire parmi les gamers, mais il est maintenant utilisé par des groupes d'étude, des communautés de loisirs et même des salles de classe. Cela en fait un endroit parfait pour les amis internationaux de Nuvi—si seulement tout le monde pouvait lire les messages des autres.

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascotte Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Avertissement :</strong> Restez prudent en ligne ! Ne partagez jamais d'informations personnelles comme votre vrai nom, adresse ou école avec des personnes que vous ne connaissez pas dans la vraie vie. Gardez le jeton de votre bot secret—c’est le mot de passe de votre bot.
{{< /alert >}}

### Note sur la Sécurité
Ne partagez jamais vos informations personnelles (nom complet, adresse, téléphone, école) avec des inconnus en ligne. Gardez aussi le jeton de votre bot (mot de passe) secret (il permet à quelqu’un de contrôler votre bot s’il l’obtient).

_Source : Adapté d'informations publiques sur l'article Wikipédia de Discord._

---

## Créez un Serveur de Test pour Votre Bot
Avant d'inviter votre bot, il est préférable de disposer d'un serveur privé où vous pourrez expérimenter en toute sécurité.

{{< alert theme="success" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascotte Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Astuce Nuvi :</strong> Créer votre propre serveur, c'est comme avoir un labo où vous pouvez expérimenter en toute sécurité. Je teste toujours de nouvelles choses dans un serveur privé appelé « Terrain de Jeu pour Bots » en premier.
{{< /alert >}}

1. Ouvrez l'application Discord (ou rendez-vous sur https://discord.com/app dans un navigateur et connectez-vous).
1. Regardez la barre latérale à gauche (la colonne avec les icônes des serveurs). Cliquez sur le bouton plus.
![Bouton pour créer un serveur](../../media/add-server.png)
1. Choisissez `Créer pour moi-même` (vous n'avez pas besoin de modèle).
![Choisir un modèle](../../media/create-my-own.png)
1. Sélectionnez `Pour moi et mes amis`.
![Pour moi et mes amis](../../media/friends.png)
1. Donnez-lui un nom comme `Laboratoire de Test Bot` ou `Dev Bot Traducteur`.
1. Cliquez sur `Créer`.

Vous avez maintenant un serveur vierge avec quelques salons par défaut (comme `#général`). Vous y inviterez votre bot plus tard pour tester les commandes de votre bot.

### Gardez-le Privé
N'invitez que des personnes de confiance pendant votre période d'apprentissage. Vous pourrez toujours créer un "vrai" serveur plus tard une fois que votre bot sera stable.

Ensuite, vous apprendrez à configurer votre environnement de développement et à commencer à coder le bot.

---