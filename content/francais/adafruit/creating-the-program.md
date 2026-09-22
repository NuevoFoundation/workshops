---
title: "Créer le Programme"
description: ""
draft: false
weight: 3
---
Ouvrez votre navigateur internet préféré (tel que Edge, Firefox, Google Chrome, Internet Explorer) et allez sur https://aka.ms/oranges. Votre écran devrait ressembler à ceci :

![Impossible de charger l'image](../img/adafruit.png?classes=border,shadow)

## Définir les Variables

Aujourd'hui, nous allons utiliser des oranges pour dire à notre Adafruit quand émettre un son. La première chose à faire est de donner à l'ordinateur un nom pour chaque orange et l'endroit où chercher ce qu'elles "disent". Nous faisons cela en définissant une variable. Cliquez sur la section qui s'appelle VARIABLES — elle est de couleur saumon et se trouve en 7ème position à partir du haut. Ensuite, définissez une variable en cliquant sur "Créer une Variable" et en lui donnant un nom. Faites-le deux fois : dans notre exemple, nous utilisons les noms analog1 et analog2, mais vous pouvez les appeler comme vous voulez.

![Impossible de charger l'image](../img/adafruit-define-variables.png?classes=border,shadow)
![Impossible de charger l'image](../img/adafruit-make-variable-dialog.png?classes=border,shadow)
![Impossible de charger l'image](../img/adafruit-variables-created.png?classes=border,shadow)

## Interpréter les Entrées

Maintenant que notre ordinateur a un nom pour nos oranges, nous devons apprendre à notre Adafruit à les comprendre. Il existe deux types d'entrées : numériques et analogiques. Les interrupteurs de lumière et les boutons d'alimentation sont des exemples d'entrées numériques. Ils sont simplement activés ou désactivés : 1 ou 0. Les entrées analogiques, comme un variateur de lumière ou un bouton de volume, offrent plusieurs options de valeur. Nos oranges fonctionneront comme des entrées analogiques, et la manière de les toucher ou de les presser changera la valeur qu'elles transmettent à l'Adafruit.

Cliquez à nouveau sur la section Variables. Cette fois, vous devriez voir quelques options supplémentaires, maintenant que nous avons défini nos deux variables. Faites glisser l'un des blocs "définir ___ à __" dans le bloc vert "toujours" dans notre espace de travail. Utilisez la flèche blanche pour changer le premier champ vide à "analog1".

![Impossible de charger l'image](../img/adafruit-set-variable-block.png?classes=border,shadow)

Ensuite, cliquez sur la flèche vers le bas en regard d'AVANCÉ, puis cliquez sur PINS. Cherchez le bloc "lecture analogique pin __", il sera le troisième en haut, et insérez-le là où figure le 0 dans notre bloc "définir analog1 à 0". Pour l’insérer dans cet emplacement, faites-le glisser jusqu'à ce qu'il survole le zéro, assurez-vous que le 0 est mis en évidence en jaune, puis relâchez la souris (ou le pavé tactile). Vous devriez voir le bloc s'étendre pour intégrer le nouveau bloc. Si cela ne se produit pas, essayez à nouveau.

![Impossible de charger l'image](../img/adafruit-analog-read-pin.png?classes=border,shadow)
![Impossible de charger l'image](../img/adafruit-analog1-complete.png?classes=border,shadow)

Après cela, votre espace de travail devrait ressembler à l'image ci-dessus. Répétez cette procédure à nouveau, cette fois en sélectionnant analog2 et A2 à l'aide des flèches blanches. Consultez l'image ci-dessous pour vérifier si vous avez correctement exécuté cette étape.
![Impossible de charger l'image](../img/adafruit-analog2-complete.png?classes=border,shadow)

## Créer les Boucles

Maintenant que l'ordinateur sait comment nommer nos oranges et comment comprendre ce qu'elles disent, créons une boucle qui vérifiera si nous tenons notre orange. Cliquez sur la section LOGIQUE et faites glisser le bloc "Si ____ alors" sous vos blocs de variables.

![Impossible de charger l'image](../img/adafruit-if-then-block.png?classes=border,shadow)

Reprenons l'exemple du bouton de volume pour comprendre la comparaison que nous allons faire dans notre boucle. Chaque personne a un niveau sonore idéal pour profiter au mieux de sa musique. Ce niveau idéal s’applique aussi à nos oranges. Elles transmettront un chiffre à l'ordinateur lorsqu'elles restent immobiles et un chiffre `plus bas` lorsque nous les touchons. Le défi est de trouver la valeur intermédiaire afin qu'elles produisent un bruit uniquement lorsque nous le souhaitons.

Pour configurer ceci, retournez dans la section LOGIQUE et prenez le bloc hexagonal " __ < __ ", le deuxième sous la sous-section Comparaison. Placez-le sur "vrai" dans le bloc "Si __ alors". Assurez-vous de voir le surlignage jaune avant de le relâcher. Vérifiez l'image ci-dessous pour confirmer que votre espace de travail est correct.

![Impossible de charger l'image](../img/adafruit-comparison-block.png?classes=border,shadow)

Passons maintenant à ce que nous allons comparer. Retournez dans la section VARIABLES, tirez analog1, et placez-le dans le premier champ. Cliquez ensuite sur le second champ et saisissez 40. Cette valeur, 40, devrait être un bon point intermédiaire pour la plupart des personnes. Si à la fin votre orange produit un bruit sans que vous la touchiez, vous pouvez revenir à cette étape et augmenter ce nombre. Si votre orange ne produit pas de bruit lorsqu'elle est touchée, vous pouvez revenir et diminuer ce nombre. Pour l'instant, laissons-le à 40.

![Impossible de charger l'image](../img/adafruit-threshold-value.png?classes=border,shadow)

Nous pouvons maintenant choisir notre musique ! Cliquez sur la section MUSIQUE et tirez le deuxième bloc "jouer _____ jusqu'à la fin" dans notre bloc Si-Alors. N'hésitez pas à cliquer sur la flèche vers le bas et à sélectionner vos propres sons.

![Impossible de charger l'image](../img/adafruit-play-sound-block.png?classes=border,shadow)

Une fois cette étape effectuée, répétez-la pour analog2. À la fin, votre espace de travail ressemblera à l'image ci-dessous (avec vos choix de musique).

![Impossible de charger l'image](../img/adafruit-complete-workspace.png?classes=border,shadow)

## Amusement Supplémentaire avec les Lumières (Si le Temps le Permet)

Le circuit Adafruit possède beaucoup de lumières ! Elles sont très amusantes, donc nous allons ajouter un peu de couleur à nos sons pour voir et entendre la différence lorsqu'on touche nos oranges. Cliquez sur la section LUMIÈRE et tirez le bloc "Fixer tous les Pixels à ___" dans nos deux parties Si-Alors. Vous devez les insérer juste avant de jouer un son. Vous pouvez cliquer sur la partie couleur pour changer la couleur