---
title: "Activité 7 - Définir la combinaison de touches pour quitter le jeu"
date: 2019-07-29T13:24:17-07:00
weight: 9
draft: false
---

Temps pour la dernière activité de cet atelier ; yay ! Vous avez fait un excellent travail pour en arriver là. Vous pouvez être fier de vous !

Dans cette activité, vous devez modifier la façon dont le jeu se ferme lorsqu'une combinaison de touches donnée est pressée.

Trouvez `# TODO (ACTIVITY 7)` dans le code. La bibliothèque Pygame vous offre un moyen pratique de détecter quelles touches sont pressées pendant l'exécution du programme en utilisant `event`. 
Actuellement, le jeu se ferme lorsque la touche `'BACKSPACE'` est appuyée ou lorsque la fenêtre entière est fermée. Modifiez-le pour que le jeu se ferme lorsque la touche `'ESC'` du clavier est appuyée.

{{% notice tip %}}

Si la valeur de la touche `'BACKSPACE'` dans la bibliothèque Pygame est `K_BACKSPACE`, pouvez-vous deviner la valeur de la touche `'ESC'` ? Essayez plusieurs fois avant de demander de l'aide. Vous pouvez le faire !
Appuyez sur **Run** pour confirmer le résultat.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PongLessonStudent" target="_blank">Lancer Replit</a>

## À retenir

Vous venez de modifier la façon dont le jeu se ferme en surveillant une pression de touche spécifique.