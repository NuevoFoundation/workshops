```markdown
---
title: "Étape 1 - Trouver le problème (Partie 3)"
difficulties: ["intermédiaire"]
weight: 5
draft: false
---

## Débogueurs

Le débogage de code est un problème si répandu et courant que des logiciels entiers ont été développés pour aider les programmeurs à déboguer plus efficacement. Ces outils sont donc nommés **débogueurs**, et il existe de nombreux débogueurs fonctionnant avec le langage de programmation C. Découvrons `gdb`, un débogueur couramment utilisé dans l'interface en ligne de commande.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Lancer Replit</a>

Pour nos exemples, nous allons utiliser l'algorithme <a href="https://www.youtube.com/watch?v=SLauY6PpjW4" target="_blank">Quicksort</a>.

**Quicksort** est un algorithme qui trie un tableau en sélectionnant d'abord un élément du tableau comme `pivot`.

Ensuite, les éléments sont organisés en fonction de l'une des conditions suivantes :
- Éléments inférieurs au pivot.
- Éléments supérieurs au pivot.

Une fois le tri terminé, le même processus est appliqué récursivement sur les sous-parties supérieures et inférieures du tableau, en prenant le pivot comme point central.

{{% notice note %}}
Notre version de quicksort suppose que l'élément le plus à gauche est l'élément "plus grand" et que l'élément le plus à droite est le pivot dans la partition.
{{% /notice %}}

|![Quicksort en utilisant le pivot comme l'élément le plus à droite.](../resources/debugging_process_quicksort.svg "Processus multi-étapes de quicksort en utilisant le pivot comme l'élément le plus à droite.")|
|:--:|
|Figure 1 : Quicksort en utilisant l'élément le plus à droite comme pivot et en supposant que l'élément le plus à gauche est l'élément "plus grand".|

[GDB (GNU Project Debugger)](https://sourceware.org/gdb/) est un puissant débogueur qui vous permet de déboguer des programmes via la ligne de commande, ce qui est utile dans les cas où vous n'avez pas accès à une interface graphique (Graphical User Interface).

Il est essentiel de comprendre comment le programme fonctionne pour effectuer un débogage efficace. Notre implémentation de 'quicksort' utilise une implémentation récursive de quicksort et réalise le tri si l'élément actuel est inférieur au pivot, en supposant que le premier élément est l'élément "plus grand". Le tri lui-même se fait dans la fonction `partition`.

### Étapes pour déboguer avec GDB
#### Compiler le programme
1. Ouvrez l'onglet **Shell** et compilez le programme :

```bash
make Quicksort
```

{{% notice note %}}
Lors de la compilation du programme, les options : `-g` et `-Og` sont utilisées. La première indique au compilateur d'ajouter des **informations de débogage**, ce qui signifie que sans cette option, gdb ne serait pas en mesure de déboguer le programme. La seconde indique au compilateur d'optimiser le programme de manière à ne pas affecter la structure d'exécution du programme. Sans `-Og`, le compilateur pourrait potentiellement optimiser certaines parties de votre code, ce qui rendrait un débogueur beaucoup moins efficace.

Il est important de noter la deuxième option. Pour le débogage, vous devez **TOUJOURS** vous assurer que le compilateur effectue des optimisations minimales sur votre code, car les optimisations pourraient modifier considérablement la façon dont le code est exécuté !
{{% /notice %}}

#### Exécuter le programme 
1. Tapez la commande `gdb examples/Quicksort`. Cela ouvrira l'interface en ligne de commande de GDB. Pour déboguer un programme avec `gdb`, vous pouvez utiliser `gdb <nom du programme>`.

2. Assurez-vous que GDB indique qu'il est `Reading symbols from ./examples/Quicksort...`, sinon le programme n'a pas été attaché à GDB. 

3. Vous pouvez quitter GDB en saisissant la commande `quit` (ou n'importe lequel de ses préfixes : `q` fonctionne) comme si c'était une commande normale de ligne de commande Shell.

Vous devriez voir quelque chose comme ceci :

|![Exécution de GDB sur le fichier 'Quicksort'.](../resources/w4-01.png "Capture d'écran de la console après avoir exécuté GDB sur le fichier 'Quicksort'.")|
|:--:|
|Figure 2 : Exécution de GDB sur le fichier 'Quicksort'.|

#### Déboguer le programme

Pour déboguer le programme, nous devons l'exécuter depuis GDB. 

1. Saisissez la commande `run` (ou `r`). Cela exécutera le programme comme si vous l'aviez exécuté à partir de la ligne de commande normale.
```bash
(gdb) run
```

Le programme commence par afficher le contenu du tableau à trier : un tableau de nombres désordonnés. Ensuite, il exécute l'algorithme de tri, et enfin, affiche le tableau trié. Vous pouvez voir comment le tableau est modifié pendant le tri !

Cependant, il semble que le tri ne fonctionne pas comme prévu.

Utilisons l'un des outils les plus importants que les débogueurs offrent : **les points d'arrêt**. Un point d'arrêt indique au débogueur de mettre le programme en pause chaque fois qu'il atteint cette ligne de code lors de l'exécution. Cela vous permet de voir ce qui se passe dans le programme en temps réel. Notez que le débogueur n'exécute pas la ligne de code sur laquelle se trouve le point d'arrêt avant que vous ne continuiez l'exécution du programme.

Identifions tout d'abord où se fait le tri des éléments. Savez-vous où le tri se produit ?
{{% expand "***Réponse***" %}}
Le tri a lieu dans la boucle `for` et à la fin du processus lorsque le pivot est échangé avec l'élément "plus grand".
{{% /expand %}}
<br/>

2. Placez un point d'arrêt à l'endroit où le tri se produit en utilisant la syntaxe `break <nom fichier:ligne>`.
{{% expand "***Réponse***" %}}
```bash
(gdb) break quicksort.c:27
``` 
{{% /expand %}}
<br/>

3. Exécutez le programme avec `run` et observez comment le programme s'arrête lorsqu'il atteint le point d'arrêt. 

4. Pendant que le programme est en pause, vous pouvez voir les valeurs des variables. Essayez