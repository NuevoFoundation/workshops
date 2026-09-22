---
title: "Charger l'image de l'oiseau et changer le texte de l'écran"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

Tout d'abord, chargeons Flappy et plaçons-le à l'écran.

Ajoutez la commande suivante dans le fichier [File: load-sprites.js]
      ```
      game.load.image('bird','assets/bird.png');
       ```

### Travailler ensemble

Dans la fenêtre Replit ci-dessous, nous avons commencé le code avec la ligne `game.load.image('bird', 'assets/bird.png');`.

![alt text](../img/loadbird.png "image pour ajouter l'oiseau dans le fichier")

Dans votre console, vous devriez voir un oiseau Jsappy après avoir appuyé sur **run** puis sur la barre d'espace :

![alt text](../img/loadbird_output.png "image de l'oiseau dans la sortie")

## Changer le texte de l'écran

Changeons le texte de l'écran de démarrage :

Ajoutez la commande suivante dans le fichier [File: start-screen.js]
     var text = game.add.text(0, 0, "Appuyez sur Espace pour Demarrer", textOptions);
     
### Travailler ensemble

Dans la fenêtre Replit ci-dessous, nous avons commencé le code avec la ligne `var text = game.add.text(0, 0, "Appuyez sur Espace pour Demarrer", textOptions);`.

![alt text](../img/startscreen.png "image pour ajouter l'oiseau dans le fichier")

Dans votre console, vous devriez voir `Appuyez sur Espace pour Demarrer` après avoir appuyé sur **run** :

![alt text](../img/startscreen_output.png "image de l'oiseau dans la sortie")