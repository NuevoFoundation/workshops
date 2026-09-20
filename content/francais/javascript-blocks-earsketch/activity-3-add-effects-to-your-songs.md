---
title: "Activité 3 - Ajouter des effets à votre chanson"
date: 2019-07-23T11:45:38-07:00
weight: 5
draft: false
---

## Effets dans EarSketch

**Les effets** permettent au producteur de modifier le son du clip audio pour créer un son unique. De la même manière que nous avons utilisé `fitMedia()` pour ajouter de nouveaux clips audio, nous devons utiliser la fonction `setEffect()` pour définir des effets spécifiques pour chaque clip audio. Il est important de noter que plusieurs effets peuvent être appliqués sur la même piste. Cela permet au producteur de combiner plusieurs effets ensemble. EarSketch possède de nombreux effets intégrés. Pour consulter tous les effets, visitez ce [lien](https://earsketch.gatech.edu/earsketch2/#?curriculum=5-1-0&language=python) et assurez-vous que le panneau *Curriculum* est sélectionné dans la barre de navigation.

Avant de commencer à ajouter des effets à notre chanson, décomposons les éléments des deux fonctions `setEffect` :

<img src="../img/screenshot-seteffect1.png" height="30"/>

- `track`: Le numéro de piste auquel l’effet est appliqué. Remarque : pour appliquer un effet à la piste Master, utilisez 0 comme valeur pour la piste. La piste master est là où tous les sons sont joués collectivement ensemble. C’est une manière simple d’appliquer un effet à tous les sons en cours de traitement.
- `effectType`: L’effet spécifique utilisé
- `effectParameter`: Le paramètre de réglage de l’effet utilisé
- `effectValue`: La valeur appliquée au effectParameter
<style>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 33.3%;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>

<div class="row">
  <div class="column">
    <img src="../img/Robot_2_Pink.PNG" width="45%">
  </div>
  <div class="column">
    <img src="../img/Robot_1_Green.PNG" width="45%">
  </div>
  <div class="column">
    <img src="../img/Robot_2_Blue.PNG" width="45%">
  </div>
</div>

## Ajouter la fonction setEffect à votre chanson

Maintenant que nous sommes plus familiers avec l’utilisation des effets, ajoutons un effet à notre chanson.

1. Trouvez le bloc de fonction `setEffect`. Il y a deux blocs `setEffect`, choisissez le plus haut. Faites glisser le bloc dans le script sous vos blocs de code existants.
2. Nous devons remplacer les paramètres par nos propres valeurs. Utilisez le menu déroulant pour remplacer `track` par 2 (ou tout autre numéro de votre choix).
3. Utilisez le menu déroulant pour voir les différents effets qui peuvent être sélectionnés pour le paramètre `effectType`. Sélectionnons DELAY comme `effectType`.
4. Maintenant que nous avons choisi notre `effectType`, nous avons besoin d’un `parameter`. Sélectionnons DELAY_FEEDBACK pour le `parameter`.
5. Pour le dernier paramètre, entrez une valeur valide. Étant donné que nous avons choisi DELAY_FEEDBACK, nous devons spécifier un nombre entre -120,0 et -1,0. Exemple : Utilisez -6.0 en tant que valeur d'effet pour DELAY_FEEDBACK.

Votre code devrait maintenant ressembler à ceci :

<img src="../img/screenshot-set-effect-1.png" height="400"/>