---
title: "Méthodes"
description: "Introduire les méthodes en C#."
date: 2024-09-16T00:00:00Z
weight: 7
---

## Qu'est-ce qu'une méthode ?

Jusqu'à présent, nous avons appris comment stocker des données dans des variables, imprimer des données et des phrases, et prendre des décisions avec des `if`-statements, des `for`-loops et des `while`-loops.

D'après le dernier exercice, nous savons que le bloc de code suivant calcule la somme de 1 à 100 :

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

Nous voulons créer une ✨ boîte magique ✨ en code qui fait le calcul pour nous, peu importe les deux nombres pour lesquels nous voulons créer une somme !
<img src="../images/method.png" height="250" alt="Num 1 et Num 2 avec une flèche pointant vers un cercle avec les mots Boîte Magique et une flèche en sortant pointant vers Somme de Num 1 à Num 2"/> 

En C#, une **méthode** est comme la boîte magique qui effectue une tâche spécifique en exécutant un bloc de code qui peut utiliser des entrées de l'utilisateur.

Il y a 2 parties dans une méthode : signature et corps :

{{% notice note %}}
### Signature de Méthode

Pour définir une méthode, nous devons d'abord écrire sa <b>signature de méthode</b>. Un en-tête de signature a quatre parties principales :

```
access_specifier return_type method_name(list_of_parameters)
```

**Nom de la Partie** | **Description** | **Exemples ou options possibles**
----|----|----
**specifier d'accès** | fournit le niveau d'accès à la méthode  | `public` indique à l'ordinateur que tout le monde peut utiliser cette méthode. `private` indique à l'ordinateur que cela ne peut être appelé que dans une classe. (Nous apprendrons les classes à la page suivante !) `protected` indique à l'ordinateur qu'il peut être appelé par des objets de la même classe.
**type de retour** | type de données qui est retourné à la fonction appelante, techniquement le type de retour ne fait pas partie de la signature en C#  | `string` ou `int`, utilisez `void` si la méthode ne retourne rien.
**nom de la méthode** | nom de la méthode, utilisé pour l'appeler | un nom descriptif que vous choisissez en fonction de ce que fait la méthode.
**liste des paramètres** | liste des entrées qui doivent être fournies lors de l’utilisation de la méthode | peut avoir zéro ou plusieurs paramètres sous la forme de (`type` `nom input`, `type` `nom input`, ...). Utilisez () pour aucun paramètre.

```
// un exemple qui prend une chaîne comme paramètre et retourne une autre chaîne en réponse
public string artist (string songName)
```
**Note :** Les noms de variables pour les paramètres ne doivent pas nécessairement correspondre au nom de la variable des données qui sont passées à la méthode.

### Corps de Méthode

Ensuite, nous plaçons le bloc de code associé à la méthode dans le **corps de la méthode**, qui est entre `{` et `}` après la signature de la méthode.

Pour retourner des données, nous mettons le mot-clé `return` suivi d'un nom de variable ou d'une valeur à renvoyer.

**Note :** Une fois que vous retournez, rien d'autre après cela dans la méthode n'est exécuté.

Voici un exemple de comment définir une méthode qui calcule la somme des nombres de `numA` à `numB` :

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
    return total; // instruction de retour
}
```

### Appel de Méthode

Enfin, pour exéc