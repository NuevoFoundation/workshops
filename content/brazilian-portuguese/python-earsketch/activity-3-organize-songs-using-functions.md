---
title: "Atividade 3 - Organize sua música usando funções"
description: "Configurando fones de ouvido"
prereq: "Noções básicas de Python: funções"
difficulty: "Intermediário"
weight: 7
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ENPl4QnJg1I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

No EarSketch, as funções são usadas principalmente para organizar diferentes seções de uma música. A forma musical mais comum é A-B-A, onde cada seção é
quatro compassos de comprimento, e as seções A soam diferentes da seção B.

Agora que aprendemos a usar funções, vamos tentar usá-las para organizar melhor nossas músicas.

1. Defina sua função com um parâmetro `startMeasure` e um parâmetro `endMeasure`.
2. Coloque os sons que você gostaria que a função representasse abaixo de sua definição de função.
3. Tente fazer várias seções de uma música (verso, refrão, introdução, etc.) e defina-as com suas funções. Se você não fizer isso e usar apenas várias chamadas `fitMedia`, notará que seu programa ficará longo e difícil de entender. Para ajudar a evitar ter um arquivo de projeto grande, use funções!

Seu código agora deve se parecer com isto:

```python
    from earsketch import *

    init()
    setTempo(120)

    fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
    fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

    # Seção A
    def sectionA(startMeasure, endMeasure):
        fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
        fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
        fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)  

    # Seção B
    def sectionB(startMeasure, endMeasure):
        fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
        fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
        fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

    sectionA(1, 9)
    sectionB(9, 17)
    sectionA(17, 25)

    finish()
```