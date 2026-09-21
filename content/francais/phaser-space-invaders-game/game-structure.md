---
title: "La Structure des Fichiers du Jeu"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 2
---

Comme vous pouvez le constater, nous avons déjà créé de nombreux fichiers pour vous. La structure du jeu a déjà été mise en place, et vous remplirez chaque fichier avec du contenu. Donc, pour commencer, nous devons tout d'abord avoir au moins une compréhension de base de ce que fait chaque fichier et comment ils sont liés les uns aux autres.

Tout d'abord, `phaser.min.js` est simplement un fichier JavaScript qui contient le code permettant au jeu d'exécuter Phaser, le framework que nous utilisons pour développer le jeu. Vous n'avez pas à vous soucier beaucoup de ce fichier, et vous n'aurez pas à le modifier.

Ensuite, regardez `index.html`. Il s'agit d'un fichier HTML qui constitue l'épine dorsale de tout notre projet en important tous les fichiers JavaScript utilisés.

Le fichier suivant est `Game.js`. Ce fichier représente essentiellement notre jeu. À l'intérieur, le code principal du jeu s'étend à travers `Scene1.js` et `Scene2.js`. Ces fichiers de scène sont ceux où vous écrirez la majorité de votre code, et nous examinerons plus en détail les scènes de Phaser un peu plus tard.

`PlayerBullet.js`, `EnemyBullet.js` et `Explosion.js` sont des fichiers qui créent des objets spécifiques pour notre jeu.

Enfin, le dossier `assets` contient toutes les images utilisées par notre jeu.