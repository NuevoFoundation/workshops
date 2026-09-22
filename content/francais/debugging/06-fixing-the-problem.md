---
title: "Étape 2 - Résoudre le problème"
difficulties: ["intermédiaire"]
weight: 7
draft: false
---

Une fois que vous avez identifié la cause du bug, vous pouvez commencer à réfléchir à la manière de le corriger. Les erreurs de compilation sont relativement simples à résoudre - la plupart du temps, le compilateur vous donne de nombreux indices sur la façon de les corriger, et lorsque vous ne parvenez pas à les comprendre uniquement grâce aux messages du compilateur, vous pouvez consulter le web. Il y a de fortes chances que quelqu’un ait rencontré le même problème que vous il y a des années et ait déjà posé la question sur un forum tel que [StackOverflow](https://stackoverflow.com/).

En ce qui concerne la résolution des erreurs d'exécution, cela dépend de l'application que vous déboguez. Vous devrez réfléchir à ce que votre programme fait, à ce que vous voulez qu'il fasse, et à la manière d'écrire du code pour lui indiquer ce que vous voulez qu'il fasse.

Par exemple, une manière générale de résoudre un problème de mémoire consiste à s'assurer que le programme accède uniquement à la mémoire autorisée. Le premier endroit où chercher est là où les accès mémoire se produisent, comme dans les cas de déréférencement de pointeurs et/ou d'indexation de tableaux, qui sont généralement à l'origine de ces problèmes. Comme nous l'avons montré dans la partie précédente, un outil comme `valgrind` peut également être utile pour détecter les fuites de mémoire et identifier les endroits où votre programme peut être défectueux.

Pour corriger un programme qui présente un comportement étrange, le premier endroit où chercher est de vérifier si votre algorithme ou stratégie semble approprié. Ensuite, il convient de vérifier si votre programme met correctement en œuvre l'algorithme. Dans bien des cas, un algorithme complexe est difficile à coder correctement. Il existe de nombreuses implémentations d’algorithmes sécurisés dans le domaine de la cybersécurité, mais beaucoup d’entre elles comportent des erreurs qui compromettent leur sécurité !

La chose la plus importante est de trouver les bonnes questions à vous poser lorsque vous déboguez. La méthode *Rubber Duck Coding* consiste à parler à voix haute à un canard en plastique, et le simple fait d'entendre l'explication de vos actions peut permettre de détecter des erreurs.

Malheureusement, corriger une erreur est souvent extrêmement spécifique au programme. Il est difficile de proposer plus que des suggestions générales.

{{% notice note %}}
De nombreux outils peuvent vous aider à identifier un problème - les _linters_ sont disponibles pour la plupart des langages et peuvent détecter des erreurs de syntaxe comme des problèmes de formatage, des crochets manquants ou des mots-clés mal orthographiés.

Avec les avancées de l'intelligence artificielle (IA), des outils comme Github Copilot peuvent également suggérer des corrections pour vos erreurs. Cependant, souvenez-vous que les réponses générées par l'IA peuvent être erronées, alors utilisez votre meilleur jugement !

{{% /notice %}}