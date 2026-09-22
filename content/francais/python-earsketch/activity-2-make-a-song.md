---
title: "Activité 2 - Créer une chanson !"
description: "Configurer des écouteurs"
prereq: "Bases de Python : Print, Commentaires, Fonctions"
difficulties: ["intermédiaire"]
weight: 6
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/GVG8DlG1Tuo" title="Activité 2 - Créer une chanson ! - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Maintenant que vous avez appris à ajouter des sons dans Earsketch, essayons de créer une chanson ! Vous devriez déjà disposer d’un extrait audio dans Earsketch, mais les chansons sont composées de différents instruments, nous devons donc ajouter d’autres extraits audio.

1. Ajoutez un autre appel `fitMedia()`.
2. Trouvez un extrait audio que vous souhaitez ajouter à votre chanson actuelle et insérez-le sous le paramètre `fileName`.
3. Le paramètre `track` doit être un nombre unique. Cela nous permettra de placer nos sons sur différentes pistes. Avoir différents sons sur différentes pistes nous aide à organiser nos sons et à jouer différents sons en même temps. Exemple : si le premier appel à `fitMedia()` est sur la piste 1, le deuxième appel à `fitMedia()` doit être sur la piste 2.
4. Complétez le reste des paramètres.
5. Répétez ces étapes jusqu’à ce que vous ayez au moins quatre sons audio différents dans votre chanson.

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
```

![Robot créant une chanson](https://media.giphy.com/media/9RJRzvIuKGrL3tAchc/giphy.gif)