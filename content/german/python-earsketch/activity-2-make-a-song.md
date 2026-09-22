---
title: "Aktivität 2 – Mache ein Lied!"
description: "Kopfhörer einrichten"
prereq: "Python-Grundlagen: Print, Kommentare, Funktionen"
difficulties: ["mittel"]
weight: 6
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/GVG8DlG1Tuo" title="Aktivität 2 – Mache ein Lied! - YouTube-Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Jetzt, da du gelernt hast, wie man Sounds zu Earsketch hinzufügt, versuchen wir, ein Lied zu machen! Du solltest bereits einen Audioclip in Earsketch haben, doch Songs bestehen aus verschiedenen Instrumenten, also müssen wir weitere Audioclips hinzufügen.

1. Füge einen weiteren Aufruf von `fitMedia()` hinzu.
2. Suche dir einen Audioclip aus, den du zu deinem aktuellen Song hinzufügen möchtest, und füge ihn unter dem Parameter `fileName` ein.
3. Der Parameter `track` sollte eine eindeutige Nummer sein. Das erlaubt uns, die Sounds auf verschiedene Spuren zu platzieren. Unterschiedliche Sounds auf separaten Spuren helfen uns, die Organisation zu erhalten und verschiedene Sounds gleichzeitig abzuspielen. Beispiel: Wenn der erste Aufruf von `fitMedia()` auf Spur 1 liegt, sollte der zweite Aufruf von `fitMedia()` auf Spur 2 liegen.
4. Fülle die restlichen Parameter aus.
5. Wiederhole diese Schritte, bis du mindestens vier verschiedene Audio-Sounds in deinem Song hast.

Dein Code sollte jetzt etwa so aussehen:
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

![Roboter macht ein Lied](https://media.giphy.com/media/9RJRzvIuKGrL3tAchc/giphy.gif)