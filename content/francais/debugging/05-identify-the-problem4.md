```markdown
---
title: "Étape 1 - Identifier le problème (Partie 4)"
difficulties: ["intermédiaire"]
weight: 6
draft: false
---

## Un autre type de bug : les erreurs de mémoire

C’est le cauchemar des développeurs C/C++, les erreurs de mémoire sont parmi les types de bugs les plus frustrants qui existent. Ne pas les résoudre peut entraîner des comportements indéfinis (des bugs non reproductibles !) et des fuites de mémoire. Il est donc essentiel de les corriger rapidement.

{{% notice note %}}

Une fuite de mémoire se produit lorsque votre programme alloue de la mémoire en utilisant malloc ou calloc (ou d'autres appels d'allocation de mémoire), mais ne la libère pas. La mémoire est “perdue” - il n'y a pas de moyen (facile) pour la récupérer avant que le programme ne se termine.

{{% /notice %}}

Heureusement, des outils ont été développés pour vous aider à trouver les erreurs de mémoire, et l'un de ces outils est `valgrind`. Valgrind est un outil qui non seulement détecte les erreurs de mémoire, mais indique exactement où elles se produisent dans votre code. Utilisons valgrind pour identifier les erreurs de mémoire. À titre d'exemple, nous avons une implémentation rudimentaire d'un vecteur en C, qui correspond à la version de la bibliothèque standard C++ d'un tableau à taille dynamique.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Lancer Replit</a>

Commencez par compiler le programme en utilisant 

```bash 
make Vector
``` 

Puis exécutez-le avec

```bash
examples/Vector
```

Remarquez qu’il y a une erreur appelée 'double free' ! C’est un type d'erreur de mémoire causée par un appel à `free` sur un pointeur deux fois.

Maintenant, au lieu d'utiliser gdb, utilisez valgrind pour vérifier comment la mémoire est allouée et utilisée. Exécutez la commande :

```bash
valgrind --tool=memcheck --leak-check=full examples/Vector
```

Il devrait être évident que valgrind a détecté des erreurs, peut-être liées au double free (remarquez le `ERROR SUMMARY` en bas qui indique quelques erreurs détectées !).

Examinons certaines de ces erreurs.

![Erreur Valgrind 1](../resources/w4-02.png "Capture d'écran de l'erreur dans la console avec le texte 'Invalid read of size 8 at 0x484522D...'")

L'erreur indiquée ci-dessus s'appelle une lecture invalide, souvent causée par la tentative de lecture de mémoire qui a été libérée dans un autre bloc. Valgrind vous montre où la mémoire a été libérée et allouée :

![Erreur Valgrind 2](../resources/w4-03.png "Capture d'écran de l'erreur dans la console avec le texte 'Address 0x4b74040 is 0 bytes inside a block of size 16 free'd...'")

Le bloc de mémoire a été alloué par la fonction `malloc` dans `createVectorInt`, appelé dans la fonction `main`. Le bloc a été libéré par la fonction `free` appelée dans la fonction `pushBack`.

Enfin, dans le résumé du tas de mémoire, vous pouvez voir qu'il y avait 96 octets 'perdus' - autrement dit, il y avait une fuite de mémoire. Cela s'est produit parce que nous avons oublié d'appeler `deleteVectorInt` sur le vecteur à la fin de la fonction main.

![Erreur Valgrind 3](../resources/w4-04.png "Capture d'écran de l'erreur dans la console avec le texte 'HEAP SUMMARY: in use at exit: 96 bytes in 2 blocks... 96 bytes in 2 blocks are definitely lost in loss record...'")

Valgrind fournit une multitude d'informations que vous pouvez utiliser pour traquer les erreurs de mémoire dans vos programmes en C et C++. Il vous informe non seulement des endroits où les erreurs se produisent, mais également des endroits où les blocs de mémoire sont alloués et éventuellement libérés (ou non libérés, dans le cas d'une fuite de mémoire). Pouvez-vous trouver le bug qui cause toutes les lectures invalides dans l'exemple du vecteur ?

{{% expand "**Cliquez pour voir la réponse**"%}}
Remarquez que lorsque nous ré-allouons le tableau, nous avons oublié de mettre à jour `list->__arr` ! Cela signifie que nous écrivons sur un pointeur qui a été libéré, ce qui explique les lectures et écritures invalides que nous voyons avec Valgrind, les doubles libérations (puisque nous appelons free sur un pointeur déjà libéré) et les fuites de mémoire (puisque nous ne faisons jamais référence aux nouveaux tableaux alloués par la suite) ! Il suffit de mettre ce pointeur à jour avec le nouveau tableau alloué, ce qui devrait corriger l'erreur.
{{% /expand %}}
<br/>

Dans les exercices, vous devrez corriger toutes les erreurs de mémoire qui apparaîtront.
```