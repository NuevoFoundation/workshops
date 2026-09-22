---
title: "Activité 5 - Utiliser des effets pour un fondu en entrée"
description: "Configurer des écouteurs"
weight: 9
prereq: "Bases de Python : Print, commentaires, fonctions"
difficulties: ["intermédiaire"]
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/VSm6m5p3CUg" title="Activité 5 - Utiliser des effets pour un fondu en entrée - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Maintenant que vous avez ajouté un effet à votre chanson, essayons de créer un fondu en entrée pour son introduction.

Dans l'activité 4, nous avons utilisé la fonction `setEffect` pour appliquer un effet sur une piste spécifique pendant toute la durée de la chanson. Mais que faire si vous voulez qu'un effet s'applique uniquement à une section spécifique de votre chanson ? Utilisez la fonction `setEffect` avec plus de paramètres !

<img src="../img/screenshot-seteffect2.png" alt="Extrait de code" width="60%"/>

- `startValue` : La valeur de départ appliquée au paramètre
- `start` : La mesure à laquelle la valeur de départ est définie
- `endValue` : La valeur de fin du paramètre
- `end` : La mesure à laquelle la valeur de fin est définie

Cette version de la fonction `setEffect` nous permet d'effectuer une *automation* sur une section spécifique de notre chanson. L'automation est un moyen de modifier la valeur d'un effet au fil du temps. Une utilisation courante de l'automation est de faire un fondu en entrée ou un fondu en sortie d'une chanson. Pour ce faire, nous devons ajuster le volume du paramètre **GAIN** dans le type **VOLUME** au fil du temps. Par exemple, si nous définissons notre `startValue` à -60 dB et notre `endValue` à 0 dB, cela donnera l'impression que notre chanson apparaît progressivement. Pour ajuster le point de départ et la durée de l'effet, spécifiez les valeurs pour `start` et `end`.

![DJ Nuvi](https://media.giphy.com/media/OTk8FTCvQ5WQQfJqVf/giphy.gif)

## Ajoutez une autre fonction setEffect à votre chanson

1. Ajoutez un autre appel à la fonction `setEffect` dans votre code, mais assurez-vous que tous les 7 paramètres soient présents dans l’appel.
2. Définissez le `type` sur VOLUME.
3. Utilisez le guide de référence "Every Effect Explained in Detail" (Chaque effet expliqué en détail) pour voir quels paramètres VOLUME possède. Pour ajuster le volume d'un clip audio, utilisez le paramètre GAIN.
4. Si nous voulons qu'un son donne l'impression d'un fondu en entrée, nous devons commencer avec un volume nul et l'augmenter jusqu'à environ 0 décibel. Pour cela, définissez `effectStartValue` à une valeur très basse et `effectEndValue` à une valeur plus élevée.

{{% notice tip %}}
*Astuce :* Le volume est mesuré en décibels. Plus un nombre est positif, plus le son est fort. Essayez également de ne pas dépasser 0 décibel.
{{% /notice %}}

5. Définissez des valeurs pour `start` et `end` afin de spécifier quand commencer et arrêter l'effet de fondu en entrée.

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
setEffect(0, VOLUME, GAIN, -60, 1, 0, 3)
```