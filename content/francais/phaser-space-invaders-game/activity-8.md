```markdown
---
title: "Activité 8 - Permettre aux ennemis de tirer"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 15
---

Maintenant, nous allons faire en sorte que les ennemis tirent sur le joueur. Chaque ennemi tirera aléatoirement, et la difficulté (qui augmentera par la suite avec chaque niveau) est définie par la fréquence à laquelle ils tirent de manière aléatoire.

Le faisceau de l'ennemi est assez similaire à celui du joueur. Nous allons créer un fichier `enemyBeam.js` très similaire au fichier `playerBeam.js`, mais avec des noms de variables et des chiffres différents :

<!--- ![enemy_bullet](../media/9/enemy_bullet.png)--->
<img src="../media/9/enemy_bullet.png" alt="enemy_bullet" style="width:950px;"/>

Nous partagerons le sprite et l'animation pour les faisceaux des joueurs et des ennemis. Cependant, lors de l'implémentation, vous créerez un groupe séparé pour les projectiles ennemis :

<!--- ![enemy_projectiles](../media/9/enemy_projectiles.png)--->
<img src="../media/9/enemy_projectiles.png" alt="enemy_projectiles" style="width:950px;"/>

Nous devons également créer une difficulté pour ce jeu (nous expliquerons davantage la notion de `difficulty` plus tard, mais pour l'instant, la `difficulty` permettra de s'assurer que les ennemis tirent) :

<!--- ![add_diff](../media/9/add_diff.png)--->
<img src="../media/9/add_diff.png" alt="add_diff" style="width:950px;"/>

{{% notice hint %}}
* Nous vous recommandons de définir la difficulté à 1000.
* Si vous définissez la difficulté à 1000, le nombre aléatoire sera choisi entre 1 et 1000. Ce n’est que si le nombre aléatoire est 1 que l’ennemi tirera.
* Les ennemis tireront continuellement si vous définissez la difficulté à 1.
{{% /notice %}}

Pour que les ennemis puissent tirer aléatoirement, nous allons tout d'abord créer une méthode `enemyShoot()` :

<!--- ![enemyShoot](../media/9/enemyShoot.png)--->
<img src="../media/9/enemyShoot.png" alt="enemyShoot" style="width:950px;"/>

et l'appeler dans la méthode `update()` :

<!--- ![update_player_shoot](../media/9/update_player_shoot.png)--->
<img src="../media/9/update_player_shoot.png" alt="update_player_shoot" style="width:950px;"/>

Cette méthode crée un nouveau projectile ennemi avec un taux aléatoire spécifié.

Ensuite, nous devons mettre à jour les projectiles ennemis. Nous devons nous assurer que chaque faisceau est supprimé.

Vous devrez mettre à jour les faisceaux ennemis dans `enemyBeam.js` comme vous l'avez fait dans `playerBeam.js` :

<!--- ![update](../media/9/update.png)--->
<img src="../media/9/update.png" alt="update_player_shoot again" style="width:950px;"/>

Vous devez également mettre à jour chaque projectile ennemi dans la scène 2, de manière similaire à la façon dont nous mettons à jour les projectiles :

<!--- ![update_projectiles](../media/9/update_enemy_projectiles.png)--->
<img src="../media/9/update_enemy_projectiles.png" alt="update_enemy_projectiles" style="width:950px;"/>

À la fin, le gameplay devrait ressembler à ceci :
![enemyShoot](../media/9/enemy-shoot.gif)
```