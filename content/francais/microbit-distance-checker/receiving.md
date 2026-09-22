---
title: "Réception d'un message"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

Maintenant que nous envoyons des messages et les écoutons, nous devons utiliser ces informations pour déterminer la distance entre les micro:bits. Pour ce faire, nous devons connaître la puissance du signal que nous recevons. Retournez dans la section Radio et cette fois, faites glisser le bloc "on radio received (receivedNumber)" et placez-le dans un endroit vide de votre espace de travail. Il ne doit pas être à l'intérieur d'un autre bloc.

Ce bloc indique à notre micro:bit de faire quelque chose chaque fois qu'il reçoit un numéro envoyé par un autre micro:bit.

!["Bloc "On radio received" ajouté à l’espace de travail](../img/onRadioReceived.png)

Ensuite, cliquez sur la section rouge Variables, puis cliquez sur "Créer une variable...". Dans la boîte de texte, saisissez "force" comme nom pour votre nouvelle variable, puis cliquez sur "Ok ✔".

![Menu MakeCode montrant la section Variables sélectionnée](../img/makeVariable.png)  
![Fenêtre contextuelle pour le nom de la variable](../img/variableModal.png)

Maintenant, retournez au menu Variables et faites glisser "set strength to 0" à l'intérieur du bloc rose "on radio received (receivedNumber)". Ensuite, retournez au menu Radio et faites glisser "received packet (signal strength)" au-dessus du `0️` dans "set strength to 0️". Lorsque vous avez terminé, votre espace de travail devrait ressembler à ceci :

![Espace de travail avec les blocs on start, forever, et received packet remplis](../img/savedRSSI.png)

Les variables sont simplement des endroits où nous pouvons stocker des informations avec un nom convivial pour clarifier ce qui est stocké à l'intérieur. Ainsi, en créant une variable appelée `force`, ce que nous faisons, c'est réserver un espace pour stocker une valeur, dans ce cas la puissance du signal mesuré du message que nous avons reçu. Nous pouvons ensuite simplement utiliser le nom `force` à chaque fois que nous voulons vérifier la valeur actuelle qu’elle contient ou la comparer à autre chose. Si plus tard, nous recevons un nouveau message avec un signal plus fort ou plus faible, la valeur de `force` est mise à jour automatiquement avec cette nouvelle valeur. D'où le bloc "on radio received" : chaque fois que nous recevons un nouveau message, la valeur de `force` est mise à jour avec la dernière puissance du signal sans que vous n'ayez à faire quoi que ce soit manuellement.