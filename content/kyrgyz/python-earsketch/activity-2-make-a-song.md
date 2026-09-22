---
title: "Иш-аракет 2 - Ыр түзүңүз!"
description: "Наушниктерди орнотуу"
prereq: "Python негиздери: Print, Комментарийлер, Функциялар"
difficulties: ["орточо"]
weight: 6
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/GVG8DlG1Tuo" title="Иш-аракет 2 - Ыр түзүңүз! - YouTube видеосу" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Сиз Earsketchке үндөрдү кантип кошууну үйрөнгөн соң, эми бир ыр түзүүгө аракет кылабыз! Earsketchде бир аудио үзүндүңүз буга чейин даяр болушу керек, бирок ыр ар түрдүү аспаптардан турат, ошондуктан кошумча аудио үзүндүлөрдү кошушубуз керек.

1. Дагы бир `fitMedia()` чакыруусун кошуңуз.
2. Учурдагы ырыңызга кошкуңуз келген аудио үзүндүнү таап, аны `fileName` параметринде толтуруңуз.
3. `track` параметри уникалдуу сан болушу керек. Бул үндөрдү ар башка тректерге жайгаштырууга мүмкүнчүлүк берет. Ар башка тректерде үндөрдү жайгаштыруу саясатка ылайык, үндөрдү иреттеп, ар кандай үндөрдү бир убакта ойнотууга шарт түзөт. Мисалы: Эгерде биринчи `fitMedia()` чакыруу 1-тректе болсо, экинчи чакыруу 2-тректе болушу керек.
4. Калган параметрлерди толтуруңуз.
5. Ушул кадамдарды кайталаңыз, жок дегенде төрт башка аудио үндү ырыңызга кошкончо.

Сиздин кодуңуз төмөнкүчө болушу керек:
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

![Робот ыр түзүп жатат](https://media.giphy.com/media/9RJRzvIuKGrL3tAchc/giphy.gif)