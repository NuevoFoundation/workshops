---
title: "Interprétation de la Puissance du Signal"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

Maintenant que notre micro:bit sait à quel point le signal qu'il reçoit est puissant, nous devons utiliser cette information pour déterminer à quelle distance nous sommes. Cliquez sur la section "Logic" et prenez le bloc "si vrai alors / sinon". Glissez ce bloc à l’intérieur du bloc "radio received", juste en dessous de l’endroit où nous avons défini la variable strength. Retournez dans la section "Logic" et faites glisser la comparaison 0 = 0 au-dessus de "vrai" sur la ligne "si vrai alors". Votre code devrait maintenant ressembler à ceci :

![Espace de travail avec instruction si/alors/sinon ajoutée au bloc d'événement](../img/addedLogic.png)

Ensuite, nous allons indiquer à notre microcontrôleur micro:bit comment déterminer si nous sommes à une distance de 6 pieds (2 mètres). Ouvrez le menu des variables et sélectionnez la bulle qui dit simplement "strength" et faites-la glisser au-dessus du premier zéro dans notre bloc "si", de sorte qu'il dise `si strength = 0 alors`. Maintenant, cliquez sur le signe égal (=) pour faire apparaître une liste de différents symboles. Choisissez le symbole supérieur à (>). Enfin, cliquez sur le dernier zéro dans notre instruction "si" et remplacez-le par `-67`. Votre bloc rose "on radio received" devrait maintenant ressembler à ceci :

![Espace de travail avec instruction si/alors/sinon complétée dans le bloc d'événement](../img/completedCondition.png)

Vous vous demandez peut-être : "Pourquoi -67 ? Cela semble être un nombre aléatoire." -67 dBm (c’est-à-dire décibel-milliwatts) est simplement le niveau de puissance que nous avons déjà mesuré au préalable lorsque deux micro:bits sont séparés de 6 pieds. Les différentes radios Bluetooth, comme celle de votre téléphone, peuvent avoir une puissance différente à la même distance. Plus votre signal est proche de 0, plus il est puissant et plus vous êtes proche de l’autre radio. Une puissance qui s’éloigne de 0 est plus faible, ce qui signifie que vous êtes probablement également plus éloigné de la radio.

Cela signifie que si le signal que nous recevons est plus fort que -67 dBm (`strength > -67`), nos radios micro:bit se trouvent à moins de 6 pieds l'une de l'autre. Mais si le signal est plus faible que cela, nos radios doivent être à plus de 6 pieds l'une de l'autre.