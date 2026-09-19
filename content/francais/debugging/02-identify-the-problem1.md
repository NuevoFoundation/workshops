```yaml
---
title: "Étape 1 - Trouver le problème (Partie 1)"
difficulties: ["intermédiaire"]
weight: 3
draft: false
---
```

## Erreurs du compilateur

Commençons et examinons l'un des premiers problèmes intimidants auxquels un programmeur novice est confronté : **lire** et **comprendre** les erreurs.

Il existe deux types d'erreurs : les **erreurs de compilation** et les **erreurs d'exécution**. 

Une **erreur de compilation** indique généralement un problème avec votre syntaxe. Peut-être avez-vous voulu exprimer une idée dans le programme, mais vous n'avez pas respecté les règles du langage de programmation. Ces erreurs sont détectées lorsque vous compilez votre programme. Les erreurs de compilation sont intéressantes car elles sont relativement faciles à corriger. Les compilateurs comme `gcc` fournissent souvent beaucoup d'informations sur ce qui a mal tourné lors de la compilation du code. Explorons certaines de ces erreurs. 

Ouvrez l'onglet **Shell** dans le programme Replit ci-dessous et exécutez la commande suivante : 

```bash
make CompilerErrors
```

{{% notice note %}}
Pour cet exemple, nous n'exécuterons pas le programme - ce programme est destiné à illustrer certaines erreurs de compilation courantes que vous pourriez rencontrer.
{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Lancer Replit</a>

La première erreur devrait ressembler à ceci (ou similaire) :

![Erreur 1 : Point-virgule manquant](../resources/w2-01.png "Une capture d'écran d'une erreur de compilation indiquant 'error: expected ';' after top level declarator'")

Vous remarquerez que l'erreur contient :

- le nom du fichier que nous avons tenté de compiler (**`CompilerErrors.c`**).
- la ligne où l'erreur a été détectée (**`12`**).
- la position sur la ligne où l'erreur est située (**`19`**).

Comme vous pouvez le constater, le compilateur vous donne la ligne de code et indique où l'erreur s'est réellement produite ! Il donne ensuite un bref nom de l'erreur - dans ce cas, le compilateur attendait un point-virgule (**`;`**) à la fin de la ligne. Vous pouvez simplement ajouter un point-virgule pour corriger cette erreur.

Une autre erreur indique qu'il manque une accolade (**`}`**) lorsque le compilateur ne s'y attendait pas. La solution pour celle-ci est également relativement simple : vous pouvez ajouter l'accolade correspondante `{` à côté de `func()`.

{{% notice warning %}}
Une accolade manquante est souvent la cause d'erreurs apparemment extraordinaires. Le compilateur n'est pas très doué pour repérer où une accolade devrait se trouver. Donc, si vous incluez un fichier d'en-tête avec une accolade manquante, cela peut provoquer de nombreux problèmes. Dans presque tous les cas, lorsque le compilateur signale un grand nombre d'erreurs dans un code que vous n'avez pas écrit, il y a de fortes chances qu'une accolade soit manquante quelque part dans votre code (ou peut-être même dans celui de la bibliothèque)!
{{% /notice %}}

Une fois que vous l'avez corrigée, vous pouvez compiler à nouveau le code en utilisant la même commande.

```bash
make CompilerErrors
```

Attendez, il y a encore plus d'erreurs ! Comme mentionné dans le panneau d'avertissement, le compilateur n'est pas très doué pour détecter des erreurs si une accolade manque. Une erreur de compilation peut "cacher" d'autres.

Utilisons un tableau pour illustrer des erreurs de compilation courantes et leur cause générale.

| Erreur | Cause | Solution générale |
|---|---|---|
| Point-virgule manquant | Point-virgule manquant. | Ajouter le point-virgule `;`.|
| Corps de fonction attendu après le déclarateur de fonction | Accolade manquante `{`, généralement au début d'une déclaration du corps de fonction. | Ajouter l'accolade `{` où elle est nécessaire. |
| Identifiant ou '(' attendu | Dans le contexte d'une accolade, cela signifie généralement que vous avez une accolade suspendue `{`. | Enlever l'accolade ou ajouter une correspondante `}` après.|
| Redéfinition de ... | Quelque part dans votre code, vous avez déclaré une variable. Plus tard, vous l'avez redéclarée. | Renommer les variables ou supprimer l'une d'elles. |
| Utilisation d'un type non déclaré... | Le compilateur ne peut pas trouver la déclaration d'un type que vous souhaitez utiliser. | Cela provient généralement de directives `#include` incorrectes (car les types sont généralement déclarés dans des fichiers d'en-tête). Vérifiez qu'il n'y a pas de fautes de frappe. |
| Doit utiliser le mot-clé `struct` (ou `enum`) | En C, vous devez utiliser `struct NOM_DU_TYPE` ou `enum NOM_DU_ENUM` chaque fois que vous faites référence au type struct/enum. | En général, les développeurs C utilisent une instruction `typedef` pour éviter d'avoir à taper `struct` ou `enum` pour se référer à ces types. Vous pouvez ajouter ces mots-clés vous-même, cependant. |
| Absence de membre nommé... | Dans votre `struct`, il n'y a pas de champ avec le nom requis. | Probablement une faute de frappe, ou vous n'avez pas encore défini un champ dans votre `struct`. |
| Types incompatibles... | Vous mélangez et associez des types, ce qui n'est pas autorisé en C sans transformation explicite. | Vérifiez si une affectation est correcte, ou utilisez une transformation explicite pour supprimer l'erreur pendant la compilation. Cependant, cela pourrait entraîner des erreurs lors de l'exécution. |
| Type d'argument incomplet | Si une fonction retourne void, vous ne pouvez pas la passer en tant qu'argument à une autre fonction ! | Corriger la déclaration de la fonction à autre chose que void, et assurez-vous que ce comportement est voulu. |
| Parenthèse '(' ou ')' étrangère avant ';' | Parenthèses mal appariées `()` | Vous avez une paire supplémentaire de parenthèses quelque part. Vérifiez bien qu'il y ait une paire correspondante pour chacune d'entre elles ! |

Si une solution générale ne fonctionne pas, *alors* vous devriez vous tourner vers Internet pour demander de l'aide. Pour les erreurs courantes avec des corrections simples, savoir lire l'erreur et déchiffrer ce qu'elle demande de corriger peut être beaucoup plus rapide que de chercher la solution.

{{% notice warning %}}
Tous les compilateurs ne fournissent pas des informations utiles. Par exemple, les erreurs des compilateurs C++ peuvent aller des erreurs simples