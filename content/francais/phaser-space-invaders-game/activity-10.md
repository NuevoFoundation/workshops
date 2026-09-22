---
title: "Activité 10 - Ajouter un écran titre"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 17
---

Maintenant, nous allons utiliser la séparation de la scène 1 et de la scène 2 pour ajouter un écran titre et ainsi finaliser notre jeu !

C'est très simple ! Nous allons d'abord commenter la ligne `startGame()` en bas de la fonction `create()` dans la `Scène 1`. Nous allons utiliser la fonction `startGame()` pour démarrer le jeu au lieu de le lancer automatiquement comme avant :

<!--- ![startGame()](../media/11/comment_out.png)--->
<img src="../media/11/comment_out.png" alt="startGame comment out" style="width:950px;"/>

La console reviendra à un écran noir. Pour créer un écran titre, nous devons importer l'image de fond et ajouter du texte dans la section `start page` de la scène 1 :

<!--- ![start_page](../media/11/start_page.png)--->
<img src="../media/11/start_page.png" alt="start_page" style="width:950px;"/>

Vous pouvez uniquement créer le fond comme une image dans la fonction `create()`, car les images ne peuvent être déplacées que dans les fonctions `update()` !

Pour les textes, nous vous recommandons d'utiliser différentes `polices` et `couleurs` pour le texte du titre et le texte de départ.

Ensuite, nous appellerons la méthode `startGame()` uniquement si le joueur clique pour démarrer le jeu :

<!--- ![on_click](../media/11/on_click.png)--->
<img src="../media/11/on_click.png" alt="on_click" style="width:950px;"/>

Votre écran devrait ressembler à ceci :
![title_screen](../media/11/title_screen.gif)

## Félicitations !

Vous avez maintenant terminé toutes les leçons et créé votre propre jeu Space Invader ! Amusez-vous bien avec ! 👏🏽👏🏽👏🏽