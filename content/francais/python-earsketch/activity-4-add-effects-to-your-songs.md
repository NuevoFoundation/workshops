---
title: "Activité 4 - Ajoutez des effets à votre chanson"
description: "Configuration des écouteurs"
weight: 8
prereq: "Bases de Python : Print, Commentaires, Fonctions"
difficulties: ["intermédiaire"]
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/vryYSBvwnIY" title="Activité 4 - Ajoutez des effets à votre chanson - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Effets dans EarSketch

Les **effets** permettent au producteur de modifier le son du clip audio pour en faire un son unique. De la même manière que nous avons utilisé `fitMedia()` pour ajouter de nouveaux clips audio, nous devons utiliser la fonction `setEffect()` pour définir des effets spécifiques pour chaque clip audio. Il est important de noter qu’il est possible de placer plusieurs effets sur la même piste. Cela permet au producteur de combiner plusieurs effets ensemble. EarSketch contient de nombreux effets intégrés. Pour consulter tous les effets, visitez ce [lien](https://earsketch.gatech.edu/earsketch2/#?curriculum=5-1-0&language=python) et assurez-vous que le volet *Curriculum* s’affiche sur le côté droit de l’écran.

Avant de commencer à ajouter des effets à notre chanson, décomposons les éléments des deux fonctions `setEffect` :

![](../img/screenshot-seteffect1.png)

- `track` : Le numéro de piste à laquelle l’effet est appliqué. Remarque : Pour appliquer un effet à la piste Master, utilisez 0 comme valeur pour la piste. La piste Master est celle où tous les sons sont joués ensemble. C’est un moyen simple d’appliquer un effet à l’ensemble des sons traités.
- `type` : L’effet spécifique utilisé
- `parameter` : Le paramètre pour l’effet utilisé
- `value` : La valeur appliquée au paramètre de l’effet

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

Maintenant que nous connaissons mieux les effets, ajoutons-en un à notre chanson.

1. Dans le navigateur API à gauche, faites défiler jusqu’à l’API `setEffect`.
2. Insérez un appel de fonction `setEffect` dans votre code à l'aide de l'icône de collage.
3. Nous devons remplacer les paramètres par nos propres valeurs. Mettez une valeur entière pour `track`. Prenons 2.
4. Pour le reste des paramètres d’effet, cliquez sur **Ouvrir** à côté de l’API `setEffect` et vous verrez un lien vers "Tous les effets expliqués en détail". Cliquez dessus pour ouvrir cette section sur le côté droit de votre fenêtre.

<img src="../img/screenshot-seteffect-open.png" height="400"/>

<img src="../img/screenshot-seteffect-explain.png" width="200"/>

5. Vous remarquerez peut-être qu'EarSketch propose de nombreuses variations d’effets. Par défaut, vous devriez voir la section 10.1 BANDPASS sur la droite. Pour l’instant, nous utiliserons le DELAY de la section 10.4 comme `type` dans notre appel de fonction `setEffect`.
6. Maintenant que nous avons choisi notre `type`, nous avons besoin d'un `parameter`. Naviguez vers la section 10.4 à droite pour voir les différents paramètres pris en charge pour DELAY. Voici une image de cette section. Nous vous recommandons d’utiliser DELAY\_FEEDBACK.

![Image des paramètres d'effet](../img/screenshot-effect-parameter.png)

7. Pour le dernier paramètre, entrez une valeur valide. Comme nous avons choisi DELAY\_FEEDBACK, nous devons spécifier un nombre entre -120.0 et -1.0 (comme indiqué dans l'image ci-dessus). Exemple : Utilisez -6.0 comme valeur d’effet pour DELAY\_FEEDBACK.

Votre code devrait maintenant ressembler à ceci :

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, 1, 9)
fitMedia(HOUSE_MAIN_BEAT_002, 4, 1, 9)
fitMedia(HOUSE_ROADS_BASS_001, 5, 1, 9)

fitMedia(Y37_ORGAN_1, 2, 9, 17)
fitMedia(HOUSE_ROADS_BASS_001, 5, 9, 17)
fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, 9, 17)

makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")
makeBeat(OS_CLAP01, 6, 2, "--0+--0+--000000")
makeBeat(OS_CLAP01, 6, 3, "0+-0+-0+-0+-0-0-")
makeBeat(OS_CLAP01, 6, 4, "0+-0+-0+-0+-0000")

setEffect(2, DELAY, DELAY_FEEDBACK, -6.0)
setEffect(2, DELAY, DELAY_TIME, 1200.0)
```