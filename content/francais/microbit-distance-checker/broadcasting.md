---
title: "Diffuser un Signal"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

## Allumer la Radio

Nous allons utiliser la radio Bluetooth de votre micro:bit pour déterminer à quelle distance vous vous trouvez d'autres micro:bits. La première chose à faire est d'allumer la radio et de la régler sur un canal. Cliquez sur la section Radio. C'est la section rose qui est la cinquième à partir du haut. Choisissez "définir le groupe radio sur 1" et faites-le glisser dans le bloc bleu "au démarrage" dans l'espace de travail. Assurez-vous d'utiliser le même numéro de groupe que tout le monde. Si vous utilisez des numéros de groupe différents, vos micro:bits ne pourront pas communiquer entre eux. Votre espace de travail devrait ressembler à celui ci-dessous une fois terminé :

![Menu MakeCode montrant la section Radio sélectionnée](../img/radioMenu.png)  
![Espace de travail MakeCode montrant le bloc "définir le groupe radio" dans le bloc "au démarrage"](../img/setRadioGroup.png)

## Diffuser un Signal

Maintenant que nos micro:bits sont configurés pour écouter, nous avons besoin d'émettre un signal qu'ils pourront capter. Cliquez à nouveau sur la section Radio. Cette fois, faites glisser le bloc "envoyer le numéro radio 0" dans le bloc bleu "toujours" de votre espace de travail. Cela permettra à votre micro:bit d'envoyer continuellement ce numéro à tout appareil écoutant dans le même groupe.

![Espace de travail MakeCode montrant le bloc "envoyer le numéro radio" dans le bloc "toujours"](../img/radioSendNumber.png)