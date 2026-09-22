---
title: "Python: EarSketch - Жооптун ачкычтары"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Бул EarSketch устаканында колдонулган үлгүлүү чечимдер. EarSketch чыгармачыл музыкалык устакана болгондуктан, көптөгөн туура жооптор болушу мүмкүн. Сиз тандай турган үн клиптер, темптер жана трек номерлери өз эркиңүздө. Эгер кодуңуз ката жок иштеп, музыка жаратып жатса, анда баары туура! Төмөндө келтирилген мисалдар ар бир иш-аракеттеги көрсөтүлгөн үлгүлүү коддорго дал келет.
{{% /notice %}}

## Иш-аракет 1: Темпти коюу жана үн кошуу

Темпти коюп, `fitMedia()` функциясын колдонуп бир үн кошуу:

```python
from earsketch import *

setTempo(120)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
```

**Ар бир параметрдин мааниси:**

| Параметр | Маңызы | Түшүндүрмөсү |
|----------|--------|--------------|
| Үн клип | `YG_TRAP_ELECTRIC_PIANO_FILTERED_1` | Ойнолуучу аудио клип (Sounds бөлүмүнөн клиптерди издөөгө болот) |
| Трек | `3` | Үн кайсы тректе жайгаштырыла турганы (ар кандай оң сан болушу мүмкүн) |
| Башталышы | `1` | Үн кайсы өлчөмдөн баштала турганы |
| Бурулушу | `17` | Үн кайсы өлчөмдө аяктаары |

{{% notice tip %}}
**Окуучулардан кийинки суроо:** "Кайсы темпти колдонушум керек?"

45-220 санынын ортосундагы любой сан жарайт. Бир нече сунуштар:
- **80-90**: Хип-хоп, Трап
- **100-130**: Поп, Хаус
- **140-180**: Драм & Бас, Дабстеп
{{% /notice %}}

## Иш-аракет 2: Тректи (көптөгөн үндөрдү) түзүү

Төрт түрдүү аудио клипти ар башка тректерге кошуу:

```python
from earsketch import *

setTempo(120)
fitMedia(RD_TRAP_BELLLEAD_1, 1, 5, 9)
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
fitMedia(YG_TRAP_BASS_9, 4, 1, 9)
```

{{% notice tip %}}
**Негизги түшүнүк:** Ар бир `fitMedia()` чакырышы ар башка трек номерин колдонушу керек. Бул үндөрдү уюштурууну жеңилдетет жана бир эле учурда бир нече үндүн ойношуна мүмкүнчүлүк берет. 1-трек бир үндү ойнойт, 2-трек башка үндү ойнойт, жана башка.
{{% /notice %}}

## Иш-аракет 3: Функциялар аркылуу уюштуруу

Функцияларды колдонуп, A-B-A үлгүсүндө тректин бөлүмдөрүн түзүү:

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

# A бөлүмү
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

# B бөлүмү
def sectionB(startMeasure, endMeasure):
    fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
    fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

sectionA(1, 9)
sectionB(9, 17)
sectionA(17, 25)
```

**A-B-A структурасынын иштөөсү:**

| Өлчөмдөр | Бөлүм | Чакырылган функция |
|----------|-------|--------------------|
| 1-9 | A | `sectionA(1, 9)` |
| 9-17 | B | `sectionB(9, 17)` |
| 17-25 | A (кайталанат) | `sectionA(17, 25)` |

{{% notice tip %}}
**Окуучулардан кийинки суроо:** "Эмнеге жөн гана көбүрөөк fitMedia чакыруулардын ордуна функцияларды колдонуш керек?"

Функциялар үндөр тобун көчүрбөстөн кайра колдонууга мүмкүнчүлүк берет. A бөлүмүн эки жолу ойнотуу үчүн, өлчөмдөрдү башкача коюп, жөн гана `sectionA()` чакырууга болот.
{{% /notice %}}

## Иш-аракет 4: Эффекттерди кошуу

`setEffect()` функциясын колдонуп кечиктирүү эффектиси кошуу:

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

# A бөлүмү
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

# B бөлүмү
def sectionB(startMeasure, endMeasure):
    fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
    fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure