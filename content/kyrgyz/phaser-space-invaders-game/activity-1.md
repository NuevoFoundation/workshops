```markdown
---
title: "Иш-чара 1 - Фонду жана оюнчу кемесин жайгаштыруу"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 6
---

Бул иш-чара эки бөлүктөн турат: оюндун фонун жүктөө жана кийинчерээк оюнчу башкара турган кемени жүктөө (бул убактылуу кыймылдабаган сүрөт болот). Экөө үчүн ыкма бирдей: алгач сүрөттү 1-сценага жүктөп, анан 2-сценадан ал көрүнүктүү кылынат. Сиз 1-сценаны сүрөттү оюнга жүктөө үчүн, ал эми 2-сценаны жүктөлгөн нерселерди түзүү үчүн колдонулат деп элестете аласыз.

## 1-бөлүк: Фон

Алгач фонду баштайлы. Дагы бир жолу, оюнга сүрөттөрдү кошуу үчүн, алар алгач 1-сценада жүктөлөт, анан 2-сценада оюнга коюлат. Биринчи кадам катары `Scene1.js` файлындеги `preload()` функциясынын 1-адамына өтүңүз:

<!---![background part 1](../media/3/step1.png) --->
<img src="../media/3/step1.png" alt="background part 1" style="width:950px;"/>

Эми фон сүрөтүн `preload()` функциясына жүктөө.

Жыйынтыгын кайталап көрүү үчүн:
* Сиз бул сапты аткаргандан кийин эч нерсе болбойт, анткени сүрөттү келечекте колдонуу үчүн жүктөп жатасыз, аны азырынча эч жакка жайгаштырбайсыз.

* `imageID` – сүрөткө берген атыңыз.

* `imagePosition` – сүрөттүн жайгашкан жери.
(мисал.png аттуу сүрөт assets папкасында, `imagePosition` – assets/example.png)

Кийинки, `Scene2.js` файлындеги `create()` функциясынын 1 жана 2-кадамдарына өтүңүз. Ар бир кадам бир сап кодду талап кылат, жалпысынан 2 сап жаратып:

<!---![background_section](../media/3/background_section.png) --->
<img src="../media/3/background_section.png" alt="background_section" style="width:950px;"/>

Баракты жүктөп көрүңүз жана фон иштеп жатканын текшериңиз! Оң жактагы консолуңыз мындай көрүнүшү керек:

<!---![after_add_image](../media/3/after_add_image.png) --->
<img src="../media/3/after_add_image.png" alt="background_after_add_image" style="width:950px;"/>

## 2-бөлүк: Оюнчу кемеси

Оюнчунун кемесине дээрлик ошол эле ыкма колдонулат, бирок бул жолу башка синтаксис, анткени оюнчунун кемеси кадрлардан турган сүрөттөр топтому (spritesheet), муну кийинки иш-чарада түшүнөсүз.

Бул бөлүктө `Scene1.js` файлынын `preload()` функциясынын 2-кадамын аткарабыз:

<!---![background player ship step2](../media/3/step2.png) --->
<img src="../media/3/step2.png" alt="background player ship step2" style="width:950px;"/>

* `SpriteID` жана `SpritePosition` `imageID` жана `imagePosition` сыяктуу иштейт.

* `FrameWidth` 32 жана `FrameHeight` 48 болот.

Мындан тышкары `Scene2.js` файлындагы `player section`:

<!--- ![player_section](../media/3/player_section.png) --->
<img src="../media/3/player_section.png" alt="background player_section" style="width:950px;"/>

{{% notice hint %}}

Эгерде оюнчу бөлүмү туура толтурулган болсо, бирок оюнчу экранда көрүнбөсө, x жана y'ди өзгөртүүгө аракет кылыңыз, балким оюнчу экрандан сырткары жерде болушу мүмкүн!

{{% /notice %}}

Оюнчунун кайыгын кошкондон кийин, консолуңуз мындай көрүнүшү керек:

<!--- ![after_add_player](../media/3/after_add_player.png) --->
<img src="../media/3/after_add_player.png" alt="background after_add_player" style="width:950px;"/>
```