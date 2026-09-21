```markdown
---
title: "Куш сүрөтүн жүктөө жана экран текстин өзгөртүү"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

Алгач Flappyди жүктөп, экранга чыгарып көрөлү.

Төмөнкү буйрукту [Файл: load-sprites.js] файлына кошуңуз:
```
game.load.image('bird','assets/bird.png');
```
       
### Чогуу Жумуш

Төмөнкү Replit терезесинде, биз кодду `game.load.image('bird', 'assets/bird.png');` сапынан баштадык.

![alt text](../img/loadbird.png "bird.png файлын кошуу үчүн сүрөт")

**Иштетүү** баскычын жана андан кийин боштук баскычын баскандан кийин, консолуңуздан Jsappy кушту көрүшүңүз керек:

![alt text](../img/loadbird_output.png "чыгарылышта куштун сүрөтү")

## Экран текстин өзгөртүү

Башталгыч экрандын текстин өзгөртөлү:

Төмөнкү буйрукту [Файл: start-screen.js] файлына кошуңуз:
```
var text = game.add.text(0, 0, "Press Space to Start", textOptions);
```
     
### Чогуу Жумуш

Төмөнкү Replit терезесинде, биз кодду `var text = game.add.text(0, 0, "Press Space to Start", textOptions);` сапынан баштадык.

![alt text](../img/startscreen.png "start-screen.js файлына текст кошуу үчүн сүрөт")

**Иштетүү** баскычын баскандан кийин, консолуңузда `Press Space to Start` текстин көрүшүңүз керек:

![alt text](../img/startscreen_output.png "чыгарылышта текст көрүү")
```