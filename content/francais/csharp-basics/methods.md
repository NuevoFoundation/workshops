```markdown
---
title: "Méthodes"
description: "Introduction aux méthodes en C#."
date: 2024-09-16T00:00:00Z
weight: 7
---

## Qu'est-ce qu'une Méthode ?

Jusqu'à présent, nous avons appris comment stocker des données dans des variables, imprimer des données et des phrases, et prendre des décisions avec des `if`-statements, des `for`-loops et des `while`-loops. 

Dans le dernier exercice, nous savons que le bloc de code suivant calcule la somme de 1 à 100 :

```C#
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
Console.WriteLine("Sum: " + total);
```

Mais que faire si nous voulons calculer la somme de 1 à 77 ? Comment faire sans réécrire tout le bloc de code ?

Nous voulons créer une ✨ boîte magique ✨ dans le code qui effectue les calculs pour nous, peu importe les deux nombres pour lesquels nous voulons calculer une somme !
<img src="../images/method.png" height="250" alt="Num 1 et Num 2 avec une flèche pointant vers un cercle contenant les mots Boîte Magique et une flèche sortant du cercle vers la Somme de Num 1 à Num 2"/> 

En C#, une **méthode** est comme une boîte magique qui exécute une tâche spécifique en exécutant un bloc de code qui peut utiliser des entrées de l'utilisateur.

Il y a 2 parties dans une méthode : la signature et le corps :

{{% notice note %}}
### Signature de la Méthode

Pour définir une méthode, nous devons d'abord écrire sa <b>signature de méthode</b>. Une signature d'entête comporte quatre parties principales :

```
access_specifier return_type method_name(list_of_parameters)
```

**Nom de la Partie** | **Description** | **Exemples ou options possibles**
----|----|----
**access specifier** | fournit le niveau d'accès à la méthode  | `public` indique à l'ordinateur que tout le monde peut utiliser cette méthode. `private` indique à l'ordinateur qu'elle ne peut être appelée que dans une classe. (Nous apprendrons les classes sur la page suivante !) `protected` indique à l'ordinateur qu'elle peut être appelée par des objets de la même classe.
**return type** | type de données retourné à la fonction appelante, techniquement le type de retour ne fait pas partie de la signature en C# | `string` ou `int`, utilisez `void` si la méthode ne retourne rien.
**method name** | nom de la méthode, utilisé pour l'appeler | un nom descriptif que vous choisissez en fonction de ce que fait la méthode.
**list of parameters** | liste des entrées qui doivent être fournies lors de l'utilisation de la méthode | peut avoir zéro ou plusieurs paramètres sous la forme de (`type` `nom de l'entrée`, `type` `nom de l'entrée`, ... ).  Utilisez () pour aucun paramètre.

```
// un exemple qui prend une chaîne de texte en paramètre et retourne une autre chaîne en réponse
public string artist (string songName)
```
**Note :** Les noms de variables pour les paramètres n'ont pas besoin de correspondre aux noms de variables des données passées à la méthode.

### Corps de la Méthode

Ensuite, nous mettons le bloc de code associé à la méthode dans le **corps de la méthode**, entre `{` et `}` après la signature de la méthode.

Pour retourner des données, nous utilisons le mot-clé `return` suivi du nom de la variable ou de la valeur à retourner.

**Note :** Une fois que vous utilisez `return`, rien d'autre après cela dans la méthode ne s'exécute.

Voici un exemple de définition d'une méthode qui calcule la somme des nombres de `numA` à `numB` :

```c#
/* Nom de la Méthode : sumNum
 * Entrée/Paramètre : 2 nombres de type int
 * Fonctionnalité : retourne la somme de numA à numB
 */
public int sumNum(int numA, int numB){
    int total = 0;
    int num = numA;      // nous accédons à la première entrée avec le nom numA
    while(num <= numB){  // nous accédons à la deuxième entrée avec le nom numB
        total = total + num;
        num = num + 1;
    }
    return total; // instruction return
}
```

### Appel de la Méthode

Enfin, pour exécuter une méthode dans votre code, nous devons effectuer un **appel de méthode**. Nous écrivons le nom de la méthode avec les entrées appropriées. 
Par exemple :

```C#
sumNum(1, 3); // une ligne de code qui appelle la méthode sumNum() avec la valeur retournée 6
```

Sachant que `sumNum(1, 3)` retourne un `int` avec la somme de 1 à 3, nous pouvons faire ce qui suit pour stocker et ensuite imprimer la valeur :

Pour appeler cette méthode, vous pourriez faire ceci :
```c#
    int sum = 0;
    sum = sumNum(1, 3);
    Console.WrlineLine(sum); // imprime 6
```

Une des raisons pour lesquelles les méthodes sont puissantes est que nous pouvons les appeler plus d'une fois :
```C#
    int sum = 0;
    sum = sumNum(1, 3);
    Console.WrlineLine(sum); // imprime 6
    sum = sumNum(1, 4);
    Console.WrlineLine(sum); // imprime 10
```

Nous aurions pu écrire cela simplement pour imprimer les nombres retournés, sans les stocker dans une variable :
```c#
    Console.WriteLine(sumNum(1,3)); // imprime 6
    Console.WriteLine(sumNum(1,4)); // imprime 10
```
{{% /notice %}}

## Comptez la Pyramide !🔺

Voici une image d'une pyramide de carrés parfaits où chaque niveau est un carré parfait du nombre du niveau actuel en partant du sommet. 

<img src="../images/pyramid.png" height="250" alt="pyramide avec des couches de perles colorées. La couche inférieure est jaune, suivie de bleu, brun, blanc, rose, bleu clair, orange, corail, vert, et enfin rouge" /> 

Le niveau supérieur contient `1 * 1` perle, le deuxième niveau contient `2 * 2` perles, et ainsi de suite.

Écrivons une méthode qui prend le nombre total de niveaux et retourne le nombre total de perles dans la pyramide !

Une fois le défi résolu, vous verrez le message suivant :

```
Félicitations ! Défi réussi !
```

<iframe