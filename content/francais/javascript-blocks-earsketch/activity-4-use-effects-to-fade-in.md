---
title: "Activité 4 - Utiliser des effets pour créer une transition en fondu"
date: 2019-07-23T11:45:38-07:00
weight: 6
draft: false
---

Maintenant que vous avez ajouté un effet à votre chanson, essayons de faire une introduction en fondu.

Dans l'activité 3, nous avons utilisé la fonction `setEffect` pour appliquer un effet à une piste spécifique durant toute la durée de la chanson. Mais que faire si vous souhaitez appliquer un effet uniquement à une section spécifique de votre chanson ? Utilisez la fonction `setEffect` avec plus de paramètres !

<img src="../img/screenshot-seteffect2.png" height="30"/>

- `startValue` : La valeur de départ appliquée au paramètre
- `start` : La mesure à laquelle la valeur de départ est définie
- `endValue` : La valeur finale du paramètre
- `end` : La mesure à laquelle la valeur finale est définie

Cette version de la fonction `setEffect` nous permet de réaliser une *automatisation* sur une section spécifique de notre chanson. L'automatisation est un moyen de modifier la valeur d'un effet au fil du temps. Une utilisation courante de l'automatisation est de créer une transition en fondu d'ouverture ou de fermeture. Pour ce faire, nous devons ajuster le volume du **GAIN** dans le type d'effet **VOLUME** au fil du temps. Par exemple, si nous définissons la `startValue` à -60 dB et la `endValue` à 0 dB, notre chanson semblera s'ouvrir progressivement en volume. Pour ajuster le point de départ et la durée de l'effet, spécifiez les paramètres `start` et `end`.

![DJ Nuvi](https://media.giphy.com/media/OTk8FTCvQ5WQQfJqVf/giphy.gif)

## Ajouter une autre fonction setEffect à votre chanson

1. Ajoutez un autre bloc `setEffect` dans votre code, mais assurez-vous que 7 paramètres soient présents dans le bloc.
2. Sélectionnez VOLUME comme `effectType` via le menu déroulant.
3. Sélectionnez GAIN comme `parameter` via le menu déroulant.
4. Si nous voulons donner l'impression qu'une partie de la chanson s'ouvre en fondu, nous devons que le volume démarre très bas et augmente progressivement. Pour ce faire, définissez `startValue` à une valeur très basse (par exemple -60) et `endValue` à une valeur plus élevée (par exemple 0).

{{% notice tip %}}
*Conseil:* Le volume est mesuré en décibels. En décibels, plus un nombre est positif, plus il est fort. Essayez également de ne pas dépasser 0 décibels.
{{% /notice %}}

5. Définissez les valeurs des paramètres `start` et `end` pour préciser quand commencer et arrêter l'effet de fondu.

Votre code devrait maintenant ressembler à ceci :

<img src="../img/screenshot-set-effect-2.png" height="400"/>