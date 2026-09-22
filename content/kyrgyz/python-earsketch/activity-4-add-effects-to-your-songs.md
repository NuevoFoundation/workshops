---
title: "Иш-аракет 4 - Ырга эффекттерди кошуу"
description: "Наушникти орнотуу"
weight: 8
prereq: "Python негиздери: Print, Комментарийлер, Функциялар"
difficulties: ["орточо"]
draft: false
---
<p style="text-align: center;"><iframe width="560" height="315" src="https://youtube.com/embed/vryYSBvwnIY" title="Иш-аракет 4 - Ырга эффекттерди кошуу - YouTube видеосу" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## EarSketch'теги эффекттер

**Эффекттер** продюсердин аудио клиптин үнүн өзгөчө уникалдуу үнгө өзгөртүүгө мүмкүндүк берет. `fitMedia()` функциясын колдонуп жаңы аудио клиптерди кошкон сыяктуу эле, ар бир аудио клип үчүн белгилүү бир эффекттерди аныктоо үчүн `setEffect()` функциясын колдонушубуз керек. Эскертүү: бир эле трекке көптөгөн эффекттерди кошсо болот. Бул продюсерге бир нече эффектти айкалыштырууга мүмкүндүк берет. EarSketch’те көптөгөн эффекттер бар. Бардык эффекттер тууралуу маалымат алуу үчүн [бул шилтемеге](https://earsketch.gatech.edu/earsketch2/#?curriculum=5-1-0&language=python) кирип, оң жагында *Curriculum* панели пайда болгонун текшере кетиңиз.

Ырга эффекттерди кошууга кирише электе, эки `setEffect` функциясынын бөлүктөрүн түшүндүрүп көрөлү:

![](../img/screenshot-seteffect1.png)

- `track`: Эффект колдонулган трек номери. Эскертүү: Эгер эффектти Башкы (Master) трекке кошкуңуз келсе, track'тин маанисине 0 бериңиз. Башкы трек бардык аудиолор биригип ойногон жер. Бул бардык аудио үндөргө чогуу эффекттерди кошуунун оңой жолу.
- `type`: Колдонулуучу белгилүү бир эффект
- `parameter`: Колдонулуучу эффекттин жөндөөсү
- `value`: effectParameter'ге колдонулган мааниси

<style>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 33.3%;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>

<div class="row">
  <div class="column">
    <img src="../img/Robot_2_Pink.PNG" width="45%">
  </div>
  <div class="column">
    <img src="../img/Robot_1_Green.PNG" width="45%">
  </div>
  <div class="column">
    <img src="../img/Robot_2_Blue.PNG" width="45%">
  </div>
</div>

## Ырга setEffect функциясын кошуу

Эффекттерди колдонууга көнүп калган соң, ырга бир эффект кошолу.

1. Сол жактагы API көрүүчүсүндө "setEffect" API’сине төмөн жылдырыңыз.
2. Кодуңузга `setEffect` функциясынын чакыруусун, көчүрүү иконкасын колдонуп киргизиңиз.
3. Параметрлерди өзүңүздүн маанилериңиз менен алмаштырышыбыз керек. `track` үчүн бүтүн сан маанисин киргизиңиз. Келгиле, 2 деп коёлу.
4. Калган эффект параметрлери үчүн `setEffect` API'нин жанындагы **Open** үстүн басыңыз. Ошондо "Every Effect Explained in Detail" шилтемеси көрүнөт. Аны оң терезеде ачуу үчүн чыкылдатыңыз.

<img src="../img/screenshot-seteffect-open.png" height="400"/>

<img src="../img/screenshot-seteffect-explain.png" width="200"/>

5. Сиз байкасаңыз керек, EarSketch көптөгөн түрдүү эффекттерди сунуштайт. Демейки абалда, оң жакта 10.1 BANDPASS бөлүмү көрүнөт. Азырынча, `setEffect` функциясына 10.4 бөлүмдөн DELAY’ди `type` катары колдонобуз.
6. `type` тандап алгандан кийин, бизге `parameter` керек. DELAY үчүн колдоого алынуучу параметрлерди көрүү үчүн оң жактагы 10.4 бөлүмгө өтүңүз. Бул бөлүмдүн сүрөтүн төмөндө көрө аласыз. DELAY\_FEEDBACK’ти колдонууну сунуштайбыз.

![Параметр эффект сүрөтү](../img/screenshot-effect-parameter.png)

7. Акыркы параметр үчүн жарактуу маанини киргизиңиз. DELAY\_FEEDBACK’ти тандалгандыктан, сүрөттө көрсөтүлгөндөй -120.0 менен -1.0 ортосундагы санды киргизүү керек. Мисал: DELAY\_FEEDBACK үчүн -6.0 маанисин колдонсоңуз болот.

Кодуңуз эми төмөнкүдөй көрүнүштө болушу керек:

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

makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")
makeBeat(OS_CLAP01, 6, 2, "--0+--0+--000000")
makeBeat(OS_CLAP01, 6, 3, "0+-0+-0+-0+-0-0-")
makeBeat(OS_CLAP01, 6, 4, "0+-0+-0+-0+-0000")

setEffect(2, DELAY, DELAY_FEEDBACK, -6.0)
