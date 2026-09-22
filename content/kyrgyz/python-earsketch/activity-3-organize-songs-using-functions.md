```markdown
---
title: "Иш-аракет 3 - Функцияларды колдонуп, ырды уюштуруңуз"
description: "Наушниктерди жөндөө"
prereq: "Python Негиздери: Функциялар"
difficulties: ["орточо"]
weight: 7
draft: true
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/cApCvf3hoiQ" title="Иш-аракет 3 - Функцияларды колдонуп, ырды уюштуруңуз - YouTube видеосу" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

EarSketch'те функциялар негизинен ырдын ар башка бөлүктөрүн уюштурууда колдонулат. Эң кеңири колдонулган музыкалык форма – бул A-B-A, анда ар бир бөлүк төрт өлчөмдөн (measure) турат жана A бөлүктөрү B бөлүгүнөн башкача угулат.

Эми функцияларды кантип колдонуу керек экенин үйрөндүк, эми аларды ырларыбызды жакшылап уюштуруу үчүн колдонуп көрөлү.

1. Функцияңызды `startMeasure` жана `endMeasure` параметрлери менен аныктаңыз.
2. Функцияны чагылдырган үндөрдү функция аныктамасынын ичине жайгаштырыңыз.
3. Ырдын ар кандай бөлүктөрүн (куплет, хор, киришүү ж.б.) түзүп, аларды функциялар менен аныктап көрүңүз. Эгер буларды жасабай, бир нече `fitMedia` чакырыктарын гана колдонсоңуз, программаңыз узун жана түшүнүү кыйын болуп калышы мүмкүн. Чоң долбоор файлынын алдын алуу үчүн функцияларды колдонуңуз!

Кодуңуз эми төмөнкүдөй көрүнүшү керек:

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

# A бөлүгү
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)  

# B бөлүгү
def sectionB(startMeasure, endMeasure):
    fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
    fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

sectionA(1, 9)
sectionB(9, 17)
sectionA(17, 25)
```
```