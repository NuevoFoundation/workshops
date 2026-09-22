---
title: "Utilisation de Replit"
date: 2019-07-29T13:24:17-07:00
weight: 1
draft: false
---

Pour créer notre jeu, nous utiliserons la bibliothèque Pygame, qui fournit un ensemble de fonctionnalités prêtes à l'emploi que nous pouvons utiliser pour développer Pong et ses animations.

## Utilisation de Replit

Aujourd'hui, nous utiliserons Replit pour construire le jeu Pong.

Si vous souhaitez une révision sur la façon d'utiliser Replit, consultez notre <a href="https://workshops.nuevofoundation.org/python-basics/repl-it/" target="_blank">tutoriel sur les bases de Python</a>.

Passons maintenant en revue une partie du code qui vous a été fourni dans le fichier `main.py`.

{{% notice tip %}}

## Bibliothèques et instructions d'importation

Regardez en haut du code. Vous verrez la ligne suivante :

```
import pygame
```

Cette instruction nous permet d'importer toutes les fonctionnalités d'animation et de dessin d'objets fournies par la bibliothèque `pygame`. Une **bibliothèque** est un ensemble où des fonctionnalités liées sont regroupées afin d'être utilisées dans le langage Python. Par exemple, la bibliothèque `pygame` offre un moyen de dessiner un rectangle à l'écran, que nous pouvons utiliser pour dessiner les limites, la balle et les raquettes utilisées dans le jeu Pong.

## Commentaires

La ligne grise qui commence par un `#` est appelée un **commentaire**. Ce sont des notes dans le code qui permettent d'expliquer ce que le code fait en langage courant, ici en anglais. Les commentaires sont ignorés par l'ordinateur ; les développeurs les utilisent pour communiquer entre eux, en particulier lorsque plusieurs développeurs travaillent sur le même code. Les commentaires permettent également à quelqu'un qui regarde le code d'obtenir un aperçu général de ce qui se passe sans avoir à lire tout le code en détail. Dans `main.py`, nous utilisons des commentaires tout au long du fichier pour indiquer où des modifications doivent être apportées au code.

{{% /notice %}}