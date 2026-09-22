---
title: "Activité 3 - Changer l'affectation des touches pour déplacer la raquette gauche"
date: 2019-07-29T13:24:17-07:00
weight: 5
draft: false
---

Bravo ! Non seulement vous avez corrigé les limites du jeu, mais vous avez également réussi à donner de la couleur aux objets. Maintenant, voyons si vous pouvez changer les touches pour déplacer la raquette.

Pour ce faire, nous devons modifier l'un des paramètres que nous avons passés lors de la création de l'objet raquette gauche. Rappelez-vous, dans la section « Les bases - Classes et objets », vous avez défini la classe `Paddle` avec les affectations des touches UP et DOWN comme ses attributs.

Trouvez `# TODO (ACTIVITY 3)` dans le code. Modifiez la valeur de l'attribut approprié pour la raquette gauche afin que l'appui sur la touche `'s'` déplace la raquette gauche vers le bas. Notez qu'actuellement, le mouvement vers le bas de la raquette gauche est contrôlé par la touche `'T'`.

{{% notice tip %}}

Essayez d’échanger la touche UP avec une autre touche. Appuyez sur <b>Run</b> pour tester vos modifications.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PongLessonStudent" target="_blank">Lancer Replit</a>

## À retenir

Vous venez de modifier l'attribut `down_key` dans la classe `Paddle` pour influencer la façon dont l'objet raquette gauche doit se déplacer à l'écran.