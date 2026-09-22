---
title: "Activité 1 - Placer l'Arrière-Plan et le Vaisseau du Joueur"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 6
---

Cette activité comportera deux parties : charger l'arrière-plan du jeu et charger le vaisseau que le joueur contrôlera éventuellement (pour l'instant, ce sera juste une image qui ne bougera pas). Pour ces deux activités, la méthode sera très similaire : nous commencerons par importer l'image dans le jeu sur la Scène 1 et ensuite la rendre visible avec la Scène 2. Vous pouvez considérer la Scène 1 comme étant utilisée pour importer l'image dans le jeu, et la Scène 2 comme étant utilisée pour créer les éléments que nous avons importés.

## Partie 1 : L'Arrière-Plan

Commençons par l'arrière-plan. Encore une fois, pour ajouter des images dans le jeu, nous allons d'abord les importer dans la Scène 1, puis les placer dans notre jeu dans la Scène 2. Tout d'abord, accédez à l'Étape 1 de la fonction `preload()` dans le fichier `Scene1.js` :

<!---![background part 1](../media/3/step1.png) --->
<img src="../media/3/step1.png" alt="partie arrière-plan 1" style="width:950px;"/>

Ensuite, chargez l'image d'arrière-plan dans `preload()`.

Pour rappel,
* Rien ne se passera après avoir complété cette ligne, car vous chargez simplement l'image pour un usage futur, sans la placer nulle part.

* `imageID` est le nom que vous attribuez à l'image.

* `imagePosition` représente l'emplacement de l'image.
(Si l'image appelée example.png se trouve dans le dossier assets, `imagePosition` sera assets/example.png)

Ensuite, accédez aux Étapes 1 et 2 de la fonction `create()` dans le fichier `Scene2.js`. Chaque étape nécessitera une ligne de code, créant ainsi un total de 2 lignes :

<!---![background_section](../media/3/background_section.png) --->
<img src="../media/3/background_section.png" alt="section arrière-plan" style="width:950px;"/>

Essayez de charger la page et vérifiez si l'arrière-plan fonctionne ! Votre console à droite devrait ressembler à ceci :

<!---![after_add_image](../media/3/after_add_image.png) --->
<img src="../media/3/after_add_image.png" alt="après ajout de l'image arrière-plan" style="width:950px;"/>

## Partie 2 : Le Vaisseau du Joueur

Nous effectuerons quasiment la même opération avec le vaisseau, mais avec une syntaxe différente puisque le vaisseau du joueur est une spritesheet et non une image normale (vous comprendrez pourquoi dans l'activité suivante).

Pour cette partie, effectuez l'Étape 2 dans la fonction `preload()` du fichier `Scene1.js` :

<!---![background player ship step2](../media/3/step2.png) --->
<img src="../media/3/step2.png" alt="étape 2 vaisseau du joueur" style="width:950px;"/>

* `SpriteID` et `SpritePosition` fonctionnent de la même manière que `imageID` et `imagePosition`.

* `FrameWidth` doit être 32 et `FrameHeight` doit être 48.

Et complétez la section `player section` dans le fichier `Scene2.js` :

<!--- ![player_section](../media/3/player_section.png) --->
<img src="../media/3/player_section.png" alt="section joueur" style="width:950px;"/>

{{% notice hint %}}

Si la section du joueur est correctement remplie mais que le joueur n'apparaît pas à l'écran, essayez de modifier les coordonnées `x` et `y`, le joueur pourrait être hors de l'écran !

{{% /notice %}}

Après avoir ajouté le vaisseau du joueur, votre console devrait ressembler à ceci :

<!--- ![after_add_player](../media/3/after_add_player.png) --->
<img src="../media/3/after_add_player.png" alt="après ajout du joueur" style="width:950px;"/>