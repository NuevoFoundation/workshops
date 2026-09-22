```markdown
---
title: "Activité 3 - Organiser votre chanson en utilisant des fonctions"
description: "Configuration des écouteurs"
prereq: "Bases de Python : Fonctions"
difficulties: ["intermédiaire"]
weight: 7
draft: true
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/cApCvf3hoiQ" title="Activité 3 - Organiser votre chanson en utilisant des fonctions - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Dans EarSketch, les fonctions sont principalement utilisées pour organiser différentes sections d'une chanson. La forme musicale la plus courante est A-B-A où chaque section dure quatre mesures, et les sections A sont différentes de la section B.

Maintenant que nous avons appris à utiliser les fonctions, essayons de les utiliser pour mieux organiser nos chansons.

1. Définissez votre fonction avec un paramètre `startMeasure` et un paramètre `endMeasure`.
2. Placez les sons que vous souhaitez que la fonction représente sous la définition de votre fonction.
3. Essayez de créer plusieurs sections d'une chanson (couplet, refrain, intro, etc.) et définissez-les avec vos fonctions. Si vous ne faites pas cela et utilisez uniquement plusieurs appels à `fitMedia`, vous remarquerez que votre programme deviendra long et difficile à comprendre. Pour éviter d'avoir un fichier de projet volumineux, utilisez des fonctions !

Votre code devrait désormais ressembler à quelque chose comme ceci :

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

# Section A
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)  

# Section B
def sectionB(startMeasure, endMeasure):
    fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
    fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

sectionA(1, 9)
sectionB(9, 17)
sectionA(17, 25)
```
```