---
title: "Qu'est-ce qu'un micro:bit ?"
date: 2019-07-25T13:24:17-07:00
weight: 1
draft: false
---

## Qu'est-ce qu'un micro:bit ?

Un micro:bit est un microcontrôleur programmable ! Il peut être programmé depuis n'importe quel navigateur web dans divers langages tels que JavaScript, Python, Scratch et Blocks. Pour notre session d'aujourd'hui, nous utiliserons MakeCode Blocks.

Votre micro:bit possède de nombreuses fonctionnalités et capteurs, notamment :

- 25 LED adressables individuellement
- 2 boutons physiques
- 2 broches d'entrée/sortie (IO)
- Capteur de boussole
- Accéléromètre (capteur de mouvement)
- Bluetooth

<!---![Image of simulated micro:bits with the radio highlighted](../img/simulatorStart.png) --->
<img src="../img/microbit-hardware-access.jpg" alt="composants du micro:bit" style="width:800px;"/>

Si vous souhaitez en savoir plus sur chaque composant individuel et toutes les fonctionnalités de votre micro:bit, vous pouvez cliquer [ici](https://micro:bit.org/guide/features/).

Sortez le micro:bit et les autres composants du sac. Vous devriez avoir un micro:bit, 2 piles, un câble micro USB et le support de batterie (la boîte noire avec les fils rouge et noir qui en sortent). Si quelque chose manque ou si vous avez besoin d'aide, n'hésitez pas à demander à l'un des instructeurs !

## Utiliser le simulateur

Bien que ce ne soit pas aussi amusant que d'utiliser le matériel physique, vous pouvez également utiliser le simulateur pour voir votre code en action. Cherchez les images de micro:bits sur le côté gauche de votre écran. Si vous ne les voyez pas, cherchez le symbole ">" sur la gauche et cliquez dessus pour afficher le simulateur. Sur les micro:bits simulés, repérez l'antenne radio Bluetooth. Elle ressemble à une onde carrée jaune :

<!---![microbit components](../img/microbit-hardware-access.jpg) --->
<img src="../img/simulatorStart.png" alt="Image de micro:bits simulés avec la radio mise en évidence" style="width:500px;"/>

Si vous survolez cette antenne en forme d'onde avec le curseur de votre souris, la puissance réelle du signal s'affichera à côté. Vous pouvez ensuite cliquer sur l'antenne et déplacer votre curseur vers la gauche pour diminuer la puissance du signal ou vers la droite pour l'augmenter. Si vous parvenez à obtenir une puissance de signal suffisamment forte (`strength > -67`), l'autre micro:bit affichera un visage triste. Diminuez à nouveau le signal pour faire sourire le micro:bit.

<!---![Sowing RSSI](../img/showingRSSI.png) --->
<img src="../img/showingRSSI.png" alt="Affichage RSSI" style="width:300px;"/> 
<!---![Image of sad simulator](../img/sadSimulator.png) --->
<img src="../img/sadSimulator.png" alt="Image du simulateur triste" style="width:300px;"/>

Maintenant, commençons à programmer !