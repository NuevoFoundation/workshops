---
title: "Activité 5 - Déclarer et utiliser une variable pour la police"
date: 2019-07-29T13:24:17-07:00
weight: 7
draft: false
---

Excellent progrès jusqu'à présent ! Maintenant, utilisons une variable pour modifier la police du texte dans le jeu.

Dans cette activité, vous devez appliquer vos connaissances sur les variables que vous avez apprises dans l'atelier Python Basics.

Trouvez `# TODO (ACTIVITY 5)` dans le code. Déclarez la variable `font_label` et assignez-lui la valeur `'arial'`. Maintenant, examinez cette instruction dans le code `font_name = pygame.font.match_font('arial')`. Pouvez-vous déterminer à quel endroit dans cette instruction cette nouvelle variable devrait être utilisée pour contrôler la police affichée à l'écran ?

{{% notice tip %}}

Vous pouvez obtenir une liste des polices que votre ordinateur prend en charge en exécutant `pygame.font.get_fonts()`. Essayez d'utiliser une police autre que `'arial'`. Quelle police préférez-vous le plus ? Appuyez sur **Run** pour voir le résultat.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PongLessonStudent" target="_blank">Lancer Replit</a>

## À retenir

Vous venez de modifier le paramètre de la police en utilisant une variable. Si jamais vous utilisez la même police à plusieurs endroits dans votre programme, vous pouvez simplement modifier la variable à un seul endroit, et cela prendra effet partout où vous avez utilisé la variable !