```markdown
---
title: "Activité 3 - Ajouter des rythmes à votre chanson avec makeBeat"
description: "Installation des écouteurs"
prereq: "Bases de Python : Fonctions"
difficulties: ["intermédiaire"]
weight: 7
draft: false
---

Essayons d'ajouter des rythmes intéressants à la chanson ! Nous allons utiliser la fonction `makeBeat`.

Avant d'utiliser la fonction `makeBeat`, comprenons comment fonctionnent les **chaînes de caractères**.

## Chaînes de caractères

Tout ce qui est entre **guillemets** est appelé une **chaîne de caractères**. Une chaîne de caractères n'est qu'une séquence de caractères (qu'il s'agisse de lettres, de chiffres ou de symboles). Par exemple, `"bonjour le monde"` est une chaîne de caractères.

Pour `makeBeat`, nous allons mélanger et assortir les trois types de rythmes suivants pour créer un rythme intéressant pour notre chanson :

- `"0"` joue le son pour une note.
- `"-"` crée un silence pour une note.
- `"+"` lie (c'est-à-dire maintient) le son ou le silence pour une note supplémentaire.

La fonction `makeBeat` suppose que nous voulons créer des rythmes couvrant 16 notes par mesure. Pour simplifier, nous allons créer des rythmes sous forme de chaînes de caractères de longueur exactement 16 caractères. Bien que vous puissiez également utiliser des chaînes de n'importe quelle longueur, il est préférable qu'elles soient des multiples de 16 (c'est-à-dire, 16, 32, 48, etc.).

Voici quelques exemples de rythmes valides :

- `"0+------0+------"` : joue 2 sons par mesure, chaque son dure 2 notes, suivi de 6 notes de silence.

<figure>
    <audio
        controls
        src="../audio/makebeat1.mp3">
            Test audio pour vérifier si votre navigateur prend en charge l'élément audio. Si vous ne pouvez pas lire l'audio, cela signifie probablement que votre navigateur ne le prend pas en charge. 
            <code>audio</code> élément.
    </audio>
</figure>

- `"0-0-0-0-0-0-0-0-"` : joue 8 sons par mesure, chaque son dure 1 note.

<figure>
    <audio
        controls
        src="../audio/makebeat2.mp3">
            Test audio pour vérifier si votre navigateur prend en charge l'élément audio. Si vous ne pouvez pas lire l'audio, cela signifie probablement que votre navigateur ne le prend pas en charge. 
            <code>audio</code> élément.
    </audio>
</figure>

- `"0++0++0++0++0-0-"` : joue 6 sons dans un schéma swing.

<figure>
    <audio
        controls
        src="../audio/makebeat3.mp3">
            Test audio pour vérifier si votre navigateur prend en charge l'élément audio. Si vous ne pouvez pas lire l'audio, cela signifie probablement que votre navigateur ne le prend pas en charge. 
            <code>audio</code> élément.
    </audio>
</figure>

Maintenant, il est temps d'ajouter des rythmes à votre chanson !

## Activité 3

1. Assurez-vous que le curseur de votre programme est situé sous les fonctions `fitMedia()`.

2. Faites défiler la liste **API** sur le côté gauche de l'éditeur de code et trouvez la première fonction `makeBeat()`.

<img src="../img/screenshot-find-makebeat.png" height="400"/>

3. Cliquez sur l'icône **Coller** située dans le coin droit de `makeBeat()` pour insérer la fonction sous la fonction `fitMedia`.

<img src="../img/icon-paste.png"/>

4. Une fois que vous avez collé la fonction, Earsketch produit des `paramètres` que nous devrons remplacer ultérieurement.

<img src="../img/screenshot-makebeat.png" />

Vous pouvez spécifier vos propres valeurs pour les éléments suivants :

- `sound` - Accédez au panneau **Sounds**. Cliquez sur **GENRES**, puis sur le filtre **MAKEBEAT**. Trouvez un son qui vous plaît dans cette liste.

<img src="../img/screenshot-makebeat-sounds.png" height="400"/>

- `track` - Sélectionnez un entier positif comme numéro de piste. Assurez-vous qu'il s'agit d'un numéro de piste que vous n'avez pas encore utilisé.
- `start` - Spécifiez à quelle mesure le rythme doit commencer.
- `beat` - Spécifiez le rythme que vous souhaitez ajouter sous forme de `chaîne de caractères`, idéalement de 16 caractères de long.

Si vous ne savez pas quelles valeurs choisir, essayez ceci :

- `makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")`

Ensuite, ajoutez d'autres fonctions `makeBeat` à votre chanson. Essayez d'ajouter au moins deux fonctions `makeBeat`.

Votre code devrait maintenant ressembler à quelque chose comme ceci :

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)  

fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")
makeBeat(OS_CLAP01, 6, 2, "--0+--0+--000000")
makeBeat(OS_CLAP01, 6, 3, "0+-0+-0+-0+-0-0-")
makeBeat(OS_CLAP01, 6, 4, "0+-0+-0+-0+-0000")
```
```