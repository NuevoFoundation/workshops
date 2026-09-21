---
title: "Activité 9 - Ajouter un Score, des Niveaux et des Vies"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 16
---

Maintenant, nous allons ajouter des chiffres pour quantifier notre jeu ! Le plus simple à implémenter est le score. Créez une variable de texte en haut à gauche de l'écran qui affiche `Score : ` et la valeur d'une variable numérique qui stocke le score du joueur.

```javascript
this.scoreText = this.add.text(20, 10, "Score: " + this.score, {
    font: "25px Arial",
    fill: "white"
});
```

{{% notice hint %}}
Cette ligne affiche la variable score en haut à gauche de l'écran.

* `20` et `10` sont les valeurs x et y.
* `"score" + this.score` est la valeur du texte.
{{% /notice %}}

Vous pouvez insérer cette ligne à cet endroit après avoir créé la valeur du score : 

<!--- ![create_score](../media/10/create_score.png)--->
<img src="../media/10/create_score.png" alt="create_score" style="width:950px;"/>

Ajoutez simplement une variable de score et un peu de texte à l'écran affichant "Score : 'variable du score'". Nous allons mettre à jour la fonction `hitEnemy()` afin que le joueur gagne des points dans son score s'il vainc un ennemi :

<!--- ![hit_enemy_score](../media/10/hit_enemy_score.png)--->
<img src="../media/10/hit_enemy_score.png" alt="hit_enemy_score" style="width:950px;"/>

Nous allons maintenant ajouter des niveaux. Nous les initialiserons de la même manière que le score, mais cette fois nous les afficherons au centre de l'écran au lieu du coin supérieur gauche :

<!--- ![create_level](../media/10/create_level.png)--->
<img src="../media/10/create_level.png" alt="create_level" style="width:950px;"/>

Nous allons rendre les niveaux assez simples : chaque fois que le joueur détruit tous les ennemis, il passe au niveau suivant, ce qui fait réapparaître tous les ennemis. Pour rendre chaque niveau plus difficile que le précédent, nous ferons en sorte que les ennemis tirent plus souvent. Pour cela, nous allons créer une variable de difficulté et l'utiliser lorsque nous faisons tirer les ennemis de manière aléatoire.

Avec ce système, en modifiant la variable de difficulté, nous changeons à quelle fréquence les ennemis tirent. Une difficulté plus basse rendra le jeu plus difficile car elle augmentera la probabilité qu’un ennemi tire plus fréquemment.

Pour faire en sorte que le niveau se mette à jour lorsque le joueur détruit tous les ennemis, nous allons créer une méthode `levelClear()` qui mettra à jour la variable de difficulté, réinitialisera le chronomètre des ennemis, créera de nouveaux ennemis (en appelant `createEnemies()`) et actualisera le texte du niveau à l'écran :

<!--- ![level_clear](../media/10/level_clear.png)--->
<img src="../media/10/level_clear.png" alt="level_clear" style="width:950px;"/>

Notez que nous devons créer un nouveau chronomètre à chaque fois que nous créons de nouveaux ennemis, sinon les ennemis et le chronomètre pourraient ne pas être synchronisés. Nous recommandons également de décrémenter la variable de difficulté moins rapidement lorsque nous atteignons 200, car la difficulté augmente beaucoup plus rapidement à ce moment-là.

N'oubliez pas de mettre à jour `levelClear()` dans `update()` :

<!--- ![update_level_clear](../media/10/update_level_clear.png)--->
<img src="../media/10/update_level_clear.png" alt="update_level_clear" style="width:950px;"/>

Passons maintenant aux vies, que nous allons initialiser de manière similaire et afficher en haut à droite de l'écran :

<!--- ![create_live](../media/10/create_live.png)--->
<img src="../media/10/create_live.png" alt="create_live" style="width:950px;"/>

Pour perdre une vie à chaque fois que vous êtes touché, ajoutez le code suivant dans `hurtPlayer()` :

<!--- ![hurt_player](../media/10/hurt_player.png)--->
<img src="../media/10/hurt_player.png" alt="hurt_player" style="width:950px;"/>

Cependant, pour que les vies aient un impact, nous allons créer une phase de Game Over lorsqu'un joueur n'a plus de vies. Commençons par créer un texte invisible à l'écran dans la méthode `create()` :

<!--- ![create_game_over](../media/10/create_game_over.png)--->
<img src="../media/10/create_game_over.png" alt="create_game_over" style="width:950px;"/>

Nous rendrons ce texte visible lorsqu'il y aura un Game Over. Nous ferons cela dans la méthode `hurtPlayer()` :

<!--- ![hurt_player_restart](../media/10/hurt_player_restart.png)--->
<img src="../media/10/hurt_player_restart.png" alt="hurt_player_restart" style="width:950px;"/>

Cela fait en sorte que le personnage ne réapparaisse pas, affiche le texte de fin de jeu et redémarre le jeu si le joueur clique sur l'écran.

Il ne reste plus qu'à créer la méthode `restart()` mentionnée dans ce code :

<!--- ![restart_function](../media/10/restart_function.png)--->
<img src="../media/10/restart_function.png" alt="restart_function" style="width:950px;"/>

Cette méthode réinitialise tout pour recommencer le jeu.

![gameplay](../media/10/game-play.gif)