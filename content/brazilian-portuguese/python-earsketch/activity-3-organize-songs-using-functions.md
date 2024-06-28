---
title: "Atividade 3 - Organize sua música usando funções"
description: "Configurando fones de ouvido"
prereq: "Python: Fundamentos. Impressão, comentários, funções"
difficulty: "Intermediário"
weight: 7
draft: false
---

No EarSketch, as funções são usadas principalmente para organizar diferentes seções de uma música. A forma musical mais comum é A-B-A onde cada seção é
quatro compassos de duração, e as seções A soam diferentes da seção B.

Agora que aprendemos como usar as funções, vamos tentar utilizá-las para organizar melhor nossas músicas.

1. Defina sua função com um parâmetro `startMeasure` e um parâmetro `endMeasure`.
2. Coloque os sons que você gostaria que a função representasse abaixo da definição da sua função.
3. Tente fazer múltiplas seções de uma música (verso, refrão, introdução, etc.) e defina-as com suas funções. Se você não fizer isso e usar apenas múltiplas chamadas `fitMedia`, você notará que seu programa se tornará longo e difícil de entender. Para ajudar a evitar um arquivo de projeto grande, use funções!

Seu código agora deve ser parecido com isto:

```python
    from earsketch import *

    init()
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

    finish()
```