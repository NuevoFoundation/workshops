---
title: "Faire sauter l'oiseau avec force et tomber avec rotation"
date: 2020-07-29T13:24:17-07:00
draft: false
weight: 4
---

Ajoutons de la force à l'oiseau

Ajoutez la commande ci-dessous dans le fichier [File: create-game.js]  
    bird.body.velocity.y = -350;
    
{{% notice tip %}}

## Travaillons ensemble

Dans la fenêtre Replit ci-dessous, nous avons commencé le code avec la ligne `bird.body.velocity.y = -350;`.

![alt text](../img/jump_force.png "image pour ajouter de la gravité à l'oiseau")

Dans votre console, vous devriez voir un oiseau JSappy sautant avec force après avoir appuyé sur **run** :

![alt text](../img/jump_output.png "oiseau sautant avec gravité")

{{% /notice %}}

## Activité Bonus

Faisons en sorte que l'oiseau saute en avant et vers le haut :  

Ajoutez la commande ci-dessous dans le fichier [File: create-game.js]  
    bird.body.velocity.x = 100;

# L'oiseau tombe avec rotation

Ajoutons de la rotation à l'oiseau :

Ajoutez la commande ci-dessous dans le fichier [File: update-game.js]  
    if (bird.angle < 50) {
       bird.angle += 1;
    }

## Commentaires :

`If` est un bloc conditionnel où nous vérifions l'angle de l'oiseau et, si l'angle est inférieur à 50, nous exécutons la condition.  
   -bird.angle += 1;

{{% notice tip %}}

## Travaillons ensemble

Dans la fenêtre Replit ci-dessous, nous avons commencé le code avec la ligne `bird.angle +=1;`.

![alt text](../img/rotate.png "image pour ajouter de la rotation à l'oiseau")

Dans votre console, vous devriez voir un oiseau JSappy tournant avec un angle après avoir appuyé sur **run** :

![alt text](../img/rotate_output.png "oiseau en rotation")

{{% /notice %}}