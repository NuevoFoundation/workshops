---
title: "Activité 1 - Régler le tempo et ajouter des sons"
description: "Installation des écouteurs"
prereq: "Bases de Python : Print, commentaires, fonctions"
difficulties: ["intermédiaire"]
weight: 5
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/INHMwQoni-M" title="Activity 1 - Set tempo &amp; add sounds - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Analysons de plus près le code existant et comprenons ce qu'il signifie.

<img src="../img/screenshot-setup-complete.png" height="400"/>

La fonction `setTempo()` vous permet de régler le tempo global du projet. Le tempo est la vitesse à laquelle une pièce musicale est jouée. Modifier le tempo d’un projet permet de créer différents styles de musique. Essayez de changer le tempo de votre fonction `setTempo` en modifiant le nombre dans le bloc et voyez ce qu’il se passe ! Assurez-vous qu’il s’agit d’un nombre entre 45 et 220. Voici quelques suggestions de tempos que vous pouvez utiliser.

<img src="../img/img-tempo1.png" height="200"/>

Maintenant que notre tempo est réglé, il est temps d’ajouter des sons. Pour ce faire, nous allons utiliser la fonction `fitMedia()`. Nous placerons le nouveau code sous la fonction `setTempo()`.

## Activité 1

1. Assurez-vous que le curseur de votre programme se trouve sous les fonctions `setTempo()`.

<img src="../img/screenshot-cursor.png" height="200"/>

2. Faites défiler la liste **API** située sur le côté gauche de l'éditeur de code et trouvez la fonction `fitMedia()`.

<img src="../img/screenshot-find-fitmedia.png" height="400"/>

3. Cliquez sur l'icône **Coller** dans le coin droit de `fitMedia()` pour insérer la fonction sous la fonction `setTempo`.

<img src="../img/icon-paste.png"/>

4. Vous remarquerez peut-être que lorsque vous collez la fonction, Earsketch génère des textes d'espace réservé que nous devrons remplacer ultérieurement. Ces textes d’espace réservé sont également connus sous le nom de `paramètres`.

<img src="../img/screenshot-fitmedia.png" />

Vous pouvez spécifier vos propres valeurs pour les éléments suivants :

- `sound` - Accédez au volet \'Sounds\' et trouvez un son qui vous plaît.
- `track` - Sélectionnez un entier positif comme numéro de piste.
- `start/end` - Ces paramètres sont mesurés en mesures. Une mesure est un segment de temps qui correspond à un nombre spécifique de pulsations.

Si vous ne savez pas quelles valeurs choisir, essayez ceci :

- `fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)`

Votre code devrait maintenant ressembler à ceci :

```python
from earsketch import *

setTempo(120)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
```

{{% notice warning %}}
Assurez-vous que la capitalisation de l’appel de la méthode est correcte. La plupart des langages de programmation, y compris Python, sont sensibles à la casse. Cela signifie qu’ajouter des lettres majuscules peut appeler une fonction différente de celle attendue. Par exemple, `fitMedia()` n’est pas la même chose que `FitMedia()`.
{{% /notice %}}

6. Une fois que vous avez saisi vos propres paramètres, appuyez sur Exécuter, puis cliquez sur Jouer pour écouter votre extrait audio !

<img src="../img/icon-play.png" />

- **Si vous voyez du texte rouge, vous avez rencontré des erreurs ! Veuillez demander de l’aide.** La fonction `fitMedia()` est la base pour créer de la musique dans Earsketch. Nous utiliserons beaucoup cette fonction. Si vous avez des questions sur son utilisation, n’hésitez pas à demander !

{{% notice info %}}

Le poste de travail audio numérique (DAW) est l’endroit où les sons apparaissent. Il se trouve en haut au centre de la fenêtre EarSketch. Voici un exemple de la façon dont différentes sections d’une chanson peuvent apparaître dans le DAW.

<img src="../img/screenshot-daw.png" height="400"/>

{{% /notice %}}