```markdown
---
title: "Activité 3 - Boucles"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/zEQkGgS779g" title="Lecteur de vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Génial ! 

Le Roi a maintenant demandé que nous saisissions notre message lettre par lettre afin que nous puissions les changer par la suite.

Pour cela, nous avons besoin de quelque chose appelé **boucles**. Les boucles nous permettent d'exécuter un bloc de code plusieurs fois. Voyons l'exemple ci-dessous qui utilise une boucle pour imprimer des nombres.

```
for(int i=0; i<3; i++){
  cout << i << endl;
}
```
Essayons de comprendre ce que cette ligne de code fait.

{{% notice tip %}}

### Boucles

`for(int i=0; i<3; i++) { }`.  
Cela indique au programme que les instructions contenues dans les accolades `{}` doivent être exécutées en boucle. 
Nous pouvons identifier trois parties différentes dans cette commande :
1. `int i=0;` déclare une variable de type int appelée `i` qui sera initialisée à `0`. Cette variable fonctionnera comme un compteur indiquant combien de fois nous avons été dans la boucle.
2. `i<3;` est la condition qui doit être remplie pour que la boucle continue de fonctionner. Si la valeur de la variable `i` est inférieure à `3`, la boucle continuera à s'exécuter.
3. `i++` ajoute 1 à la variable `i` à la fin de chaque boucle.  
La partie la plus importante à retenir est que c'est la manière générale de répéter des instructions plusieurs fois (dans ce cas, 3 fois).

{{% /notice %}}

Une propriété des variables de type **string** est que nous pouvons compter le nombre de caractères dans la chaîne.

{{% notice tip %}}

### Accéder à chaque caractère d'une chaîne de caractères

Chaque caractère d'une variable de type string est appelé un **char**. Nous pouvons accéder à ce `char` grâce à sa position dans la chaîne de caractères. Imaginez-le comme une liste de caractères. Le premier caractère sera à la position `0`, le deuxième à la position `1`, le suivant à la position `2`, et ainsi de suite.

Cela dit, nous aurions besoin du code suivant pour accéder à chaque caractère :

```
string word = "hello";
char letter = word[0];
cout << "La première lettre est : " << letter << endl;
```
Cela imprimerait : 
```
La première lettre est : h
```

### Taille d'une chaîne de caractères

En plus d'accéder à chaque caractère individuel d'une chaîne de caractères, nous pouvons également connaître sa longueur en utilisant les lignes de code suivantes :

```
string word = "hello";
int wordSize = word.size();
cout << "La taille est : " << wordSize << endl;
```
Cela imprimerait :
```
La taille est : 5
```
{{% /notice %}}

Maintenant, nous modifions le code que nous avions pour imprimer chaque lettre du nom à la place d'un message "hello".

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-3-english" target="_blank">Lancer Replit</a>
```