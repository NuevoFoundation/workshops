---
title: "Structure d'Application de Jeu"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 3
---

## Retour aux Fondations
Maintenant que le jeu a le bon titre, plongeons plus en profondeur dans tous ces fichiers dans le dossier du jeu. Que signifient-ils tous ? Comment contribuent-ils au jeu ?
<img src="../resources/_gen/images/app_structure_files.png" height="25%" width="25%" title="Vue étendue des fichiers de l'application" alt="Fichiers de l'application affichés dans Android Studio"/>

### AndroidManifest.xml
Chaque projet Android inclut un fichier manifeste. Pour votre jeu, il s'agit du fichier `AndroidManifest.xml`. Le fichier manifeste définit les métadonnées pour votre jeu, par exemple, il peut définir l'icône et le thème global de votre application de jeu.

### activity_main.xml
Ce fichier est situé dans le dossier "layout". Comme le nom du dossier l'indique, les fichiers dans ce dossier définissent l'apparence de votre application. Si vous regardez le code du fichier `activity_main.xml`, vous verrez des mots-clés tels que `TableLayout` ou `TableRow`. La combinaison de mots-clés dans le fichier `activity_main.xml` crée la disposition pour les boutons de sélection du jeu (Joueur contre Joueur ou Joueur contre Ordinateur), le plateau de tic-tac-toe et le bouton de réinitialisation. Le mot-clé `TableLayout` indique que la disposition sera alignée selon un style tableau, qui inclut des colonnes et des rangées. Le mot-clé `TableRow` crée une nouvelle rangée dans la disposition, chaque élément supplémentaire correspondant à une case dans cette rangée :
<img src="../resources/_gen/images/activity_main.png" height="30%" width="30%" title="Disposition du plateau de jeu en rangées" alt="Plateau de Tic-Tac-Toe avec 5 rangées. La première rangée comprend les deux boutons de sélection du jeu, suivie par 3 rangées de 3 colonnes pour la grille du Tic-Tac-Toe, et enfin la cinquième rangée avec le bouton de redémarrage"/>

### MainActivity.kt

Ce fichier est situé dans le dossier "java". Ce fichier contient le code et la logique pour votre application.

### colors.xml, strings.xml, styles.xml

Ces fichiers sont situés dans le dossier "values". Ils contiennent des valeurs qui peuvent être référencées par d'autres fichiers XML et par le code de l'application.

## Tout Mettre Ensemble

Tous ces fichiers fonctionnent ensemble pour créer votre jeu. Le fichier `activity_main.xml` décide de ce qui est affiché. Lorsque vous cliquez sur les boutons, des événements sont envoyés depuis le fichier `activity_main.xml` au fichier `MainActivity.kt` pour déterminer ce qu'il se passe lors du clic sur ce bouton. Pour des valeurs réutilisables, `activity_main.xml` et `MainActivity.kt` peuvent faire appel à `colors.xml`, `strings.xml` ou `styles.xml` pour utiliser ces valeurs depuis un emplacement pratique.