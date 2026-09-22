---
title: "Activité 1 - Définir le tempo et ajouter des sons"
date: 2019-07-23T11:45:38-07:00
weight: 3
draft: false
---

Examinons de plus près le code préexistant et comprenons ce qu'il signifie.

<img src="../img/screenshot-setup-complete.png" height="400"/>

La fonction `setTempo()` vous permet de définir le tempo global du projet. Le tempo est la vitesse à laquelle une pièce musicale est jouée. Modifier le tempo d'un projet permet de créer différents styles de musique. Essayez de modifier le tempo de votre fonction `setTempo` en changeant le nombre dans le bloc et voyez ce qui se passe ! Assurez-vous qu'il s'agit d'un nombre compris entre 45 et 220. Voici quelques suggestions de tempos que vous pouvez utiliser.

<img src="../img/img-tempo1.png" height="200"/>

Maintenant que notre tempo est défini, il est temps d'ajouter des sons. Pour ce faire, nous devons utiliser la fonction `fitMedia()`. Nous placerons le nouveau code sous le bloc de fonction `setTempo()`.

## Activité 1

1. Trouvez le bloc violet `fitMedia()` sur le côté gauche de l'éditeur de code.
2. Faites glisser le bloc `fitMedia()` pour l'insérer sous le bloc `setTempo`.
3. Vous remarquerez peut-être que lorsque le bloc est ajouté, Earsketch produit des textes d'espace réservé que nous devrons remplacer plus tard. Ces textes d'espace réservé sont également appelés `paramètres`.

<img src="../img/screenshot-parameters.png" height="100"/>

Nous allons remplacer chacun de ces textes par une valeur valide.

- `sound` - Naviguez vers le volet "Sounds" et trouvez un son qui vous plaît. Cliquez sur "sound" dans le bloc de la fonction `fitMedia()`, puis appuyez sur le bouton "Paste" à côté du son que vous souhaitez ajouter. Le nom du son devrait maintenant apparaître dans le bloc `fitMedia()`.
- `trackNumber` - Utilisez le menu déroulant pour sélectionner un entier positif en tant que numéro de piste. Par exemple, sélectionnez `1`.
- `start/end` - Ces paramètres sont des entiers positifs exprimés en mesures. Une mesure est un segment de temps qui correspond à un nombre spécifique de temps. Essayez de définir `start` sur `1` et `end` sur `9`.

Votre code devrait maintenant ressembler à ceci :

<img src="../img/screenshot-fit-media.png" height="400"/>

{{% notice warning %}}

Assurez-vous que les blocs de fonction et le texte sont placés correctement.

{{% /notice %}}

5. Une fois que vous avez saisi vos propres paramètres, appuyez sur "Run", puis cliquez sur "Play" pour écouter votre clip audio !

   - **Si vous voyez du texte rouge, vous avez rencontré des erreurs ! Veuillez demander de l'aide.** La fonction `fitMedia()` est la base pour créer de la musique dans Earsketch. Nous l'utiliserons fréquemment, donc si vous avez des questions concernant son utilisation, n'hésitez pas à demander !

{{% notice info %}}

Le **Station Audio Numérique** (Digital Audio Workstation - DAW) est la zone où les sons apparaissent. Elle se trouve dans la partie supérieure centrale de votre fenêtre EarSketch. Voici un exemple de l'apparence des différentes sections d'une chanson dans le DAW.

<img src="../img/screenshot-daw.png" height="400"/>

{{% /notice %}}