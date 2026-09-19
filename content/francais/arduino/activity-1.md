---
title: "Activité 1 : Faire clignoter une LED"
draft: false
weight: 4
---

## Câblage de notre LED clignotante

Pour votre introduction à ce système, nous allons allumer et éteindre une LED. Grâce à cela, nous allons apprendre les bases des circuits et comment notre programme peut exécuter et manipuler des composants.

![Texte alternatif : Schéma de câblage pour la LED](../img/act1_LED1.png)

1. Connectez la longue patte (anode) de votre LED à la broche 25J et la patte courte (cathode) n'importe où dans la ligne bleue [-].
2. Fixez une résistance de 220 ohms avec une patte en 25H et l'autre n'importe où dans la ligne rouge [+].
3. Connectez une extrémité d'un fil de connexion n'importe où sur la même ligne rouge [+] sur la plaque de prototypage que l'Étape 2 et l'autre extrémité au 5V du module Elegoo.
4. Connectez une extrémité d'un fil de connexion à 31Z sur la plaque de prototypage et l'autre à GND (masse) sur le module Elegoo.
5. Branchez la carte Arduino via USB à votre PC et ouvrez l'application Arduino IDE.

{{% notice info %}} 
Il est courant et très pratique d'utiliser un code de couleur pour les fils ! Ici, nous avons utilisé le rouge pour la charge positive et le noir pour la charge négative, mais la couleur n'a pas d'importance tant que vous pouvez vous rappeler ce qui est quoi. 
{{% /notice %}}

## Ouverture du code d'exemple de la LED

6. Cliquez sur Fichier -> Exemples -> 01.Basics -> Blink

![Texte alternatif : Illustration montrant comment trouver le code d'exemple Blink](../img/Blink-sample-code.png)

7. Cliquez maintenant sur le bouton "Téléverser" pour envoyer le programme à l'Arduino.

{{% notice info %}}
SUPPLÉMENTAIRE : Remarquez le timing de l'allumage et de l'extinction de la LED. Que pensez-vous pouvoir modifier dans le programme pour ajuster ce timing ?
Si vous avez dit le nombre 1000 dans delay(1000); vous avez RAISON !
Changez ce nombre (n'oubliez pas de cliquer à nouveau sur le bouton téléverser).
Vous remarquez une différence ? Pourquoi pensez-vous que 1000 correspond à 1 seconde ? Combien de temps durée 10 minutes serait-il ? Pourquoi ?

{{% /notice %}}