```markdown
---
title: "Configuration du PC"
draft: false
weight: 2
---

## Découverte de l'IDE Arduino

Téléchargez et installez l'IDE Arduino depuis :

* le Microsoft Store (installation plus rapide) - <https://www.microsoft.com/store/productId/9NBLGGH4RSD8>
* ou depuis le site web d'Arduino <https://www.arduino.cc/en/Main/Software> (choisissez la dernière version)

Une fois le logiciel installé sur votre ordinateur, ouvrez-le. Ceci est l'IDE Arduino, l'endroit où toute la programmation se fera. Prenez un peu de temps pour explorer et vous familiariser avec l'interface.

![Texte Alt : Image annotée de l'IDE Arduino](../img/ArduinoIDE-labeled.png)
*<https://www.makerspaces.com/simple-arduino-projects-beginners/>*

1. Barre de menu : Vous donne accès aux outils nécessaires pour créer et sauvegarder des sketches Arduino.
2. Bouton Vérifier : Compile votre code et vérifie les erreurs d'orthographe ou de syntaxe.
3. Bouton Télécharger : Envoie le code à la carte connectée, comme l'Arduino Uno dans ce cas. Les lumières de la carte clignoteront rapidement pendant le téléchargement.
4. Nouveau Sketch : Ouvre une nouvelle fenêtre contenant un sketch vierge.
5. Nom du Sketch : Lorsqu'un sketch est sauvegardé, son nom s'affiche ici.
6. Ouvrir un Sketch existant : Permet d'ouvrir un sketch sauvegardé ou un exemple parmi ceux proposés.
7. Sauvegarder le Sketch : Sauvegarde le sketch actuellement ouvert.
8. Moniteur Série : Lorsque la carte est connectée, cela affichera les informations série de votre Arduino.
9. Zone de Code : C'est ici que vous rédigez le code du sketch qui indique à la carte ce qu'elle doit faire.
10. Zone des Messages : Indique le statut des sauvegardes, des compilations de code, des erreurs et plus encore.  
11. Console Texte : Affiche les détails des messages d'erreur, la taille du programme compilé et d'autres informations supplémentaires.
12. Carte et Port Série : Indique quelle carte est utilisée et à quel port série elle est connectée.

## Connectez votre Arduino

À ce stade, vous êtes prêt à connecter votre Arduino à votre ordinateur. Branchez une extrémité du câble USB à l'Arduino Uno et l'autre extrémité à un port USB de votre ordinateur.

Une fois la carte connectée, vous devrez aller dans Outils, puis Carte, et enfin sélectionner Arduino Uno.

![Texte Alt : Capture d'écran de l'IDE Arduino montrant comment sélectionner le type de carte](../img/board-select.png)

Ensuite, vous devez indiquer à l'Arduino quel port vous utilisez sur votre ordinateur.

Pour sélectionner le port, allez dans Outils, puis Port, puis sélectionnez le port sur lequel est indiqué Arduino.

![Texte Alt : Capture d'écran de l'IDE Arduino montrant comment sélectionner le port COMM](../img/COMM-port.png)
```