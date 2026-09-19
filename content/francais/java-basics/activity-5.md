---
title: "Méthodes"
description: "Introduction aux méthodes en Java."
date: 2021-10-13T00:00:00Z
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/mO6S9Yq_K4I" title="Vidéo sur les méthodes en Java" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Qu'est-ce qu'une Méthode ?

Jusqu'ici, nous avons appris à stocker des données dans des variables, imprimer des données et des phrases, et prendre des décisions à l'aide de structures comme `if-statement`, `for-loop` et `while-loop`.

Dans le dernier exercice, nous avons vu que le bloc de code suivant calcule la somme de 1 à 100 :

```java
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
System.out.println("Somme : " + total);
```

Mais que se passe-t-il si nous voulons calculer la somme de 1 à 77 à la place ? Comment faire sans réécrire tout ce bloc de code à nouveau ?

Nous souhaitons créer une ✨ boîte magique ✨ dans notre code, capable de faire le calcul pour nous, peu importe les deux nombres pour lesquels nous souhaitons calculer une somme ! 
<img src="../images/method.png" height="250" alt="Num 1 et Num 2 avec une flèche pointant vers un cercle avec les mots Boîte Magique et une flèche qui en sort pointant vers Somme de Num 1 à Num 2"/>  

En Java, une **méthode** est comme cette boîte magique qui effectue une tâche spécifique en exécutant un bloc de code, et qui peut utiliser des entrées utilisateur.

Une méthode se compose de deux parties : un en-tête et un corps.

{{% notice note %}}
### En-tête de Méthode

Pour définir une méthode, nous devons d'abord écrire son <b>en-tête</b>. Un en-tête de méthode comprend quatre parties principales :

**Nom de la Partie** | **Description** | **Exemples ou options possibles**
----|----|----
**spécificateur d'accès** | détermine le niveau d'accès à la méthode | `public` indique que tout le monde peut utiliser cette méthode. `private` indique qu'elle ne peut être appelée qu'à l'intérieur d'une classe. (Nous apprendrons ce qu'est une classe dans la page suivante !) `protected` indique qu'elle peut être appelée par des objets de même classe.
**type de retour** | type de données renvoyé à la fonction appelante | utilisez `void` si la méthode ne retourne rien.
**nom de la méthode** | nom de la méthode utilisé pour l'appeler | défini par l'utilisateur en fonction de ce que fait la méthode.
**liste des paramètres** | liste des entrées nécessaires pour exécuter la méthode | format de (`type` `nom de l'entrée`, `type` `nom de l'entrée`, ... ).

```
// un exemple
public void sing (String songName)
   1.    2.   3.        4.
```
**Remarque :** Les noms de variables des paramètres n'ont pas à correspondre aux noms des variables des données passées en paramètre à la méthode.

<br />

### Corps de la Méthode

Ensuite, nous écrivons le bloc de code associé à la méthode dans le **corps de la méthode**, qui se trouve entre `{` et `}` après l'en-tête de méthode.

Pour retourner des données, nous utilisons le mot clé `return`, suivi d'un nom de variable ou d'une valeur à retourner.

**Remarque :** Une fois que l'instruction `return` est exécutée, plus rien après cela dans la méthode ne sera exécuté.

Voici un exemple de définition d'une méthode qui calcule la somme des nombres entre `numA` et `numB` :

```java
/* Nom de la méthode : sumNum
 * Entrées/Paramètres : 2 nombres de type int
 * Fonctionnalité : retourne la somme des nombres entre numA et numB
 */
public int sumNum(int numA, int numB){
    int total = 0;
    int num = numA;      // nous accédons à la première entrée avec le nom numA
    while(num <= numB){  // nous accédons à la seconde entrée avec le nom numB
        total = total + num;
        num = num + 1;
    }
    return total; // instruction return
}
```

<br />

### Appel de Méthode

Enfin, pour exécuter une méthode dans votre code, nous devons effectuer un <b>appel de méthode</b>. Nous écrivons le nom de la méthode avec les entrées appropriées.  
Par exemple :

```java
sumNum(1, 3); // une ligne de code qui appelle la méthode sumNum() et qui retourne la valeur 6
```

Sachant que `sumNum(1, 3)` retourne un `int` qui correspond à la somme allant de 1 à 3, nous pouvons faire ceci pour stocker la valeur :

```java
int sum1to3 = sumNum(1, 3); 
```
{{% /notice %}}

## Comptez la Pyramide ! 🔺

<img src="../images/pyramid.png" height="250" alt="pyramide avec des couches de perles colorées. La couche inférieure est jaune, puis bleue, marron, blanche, rose, bleu clair, orange, corail, verte, et enfin rouge" /> 
<p style="text-align: center;">(photo crédit : aliexpress.com/item/32306945847.html)</p>

L'image ci-dessus représente une pyramide de carrés parfaits où chaque niveau contient un carré parfait correspondant au numéro du niveau en partant du haut.

Ainsi, le niveau supérieur contient `1 * 1` perle, le 2ᵉ niveau contient `2 * 2` perles.

<br />  
Écrivons une méthode qui prend en entrée le nombre total de niveaux et renvoie le nombre total de perles dans la pyramide !

Lorsque vous aurez résolu le défi, vous verrez le message suivant :

```
Félicitations ! Défi réussi !
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsPyramid" target="_blank">Lancer Replit</a>