```yaml
---
title: "Activité 2 - Variables et Entrées"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---
```

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/umCdJDmdf3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Super ! Maintenant, allons un peu plus loin. Nous allons non seulement afficher le message, mais permettre d'entrer le nom du destinataire et faire en sorte que notre programme dise "Bonjour".

Pour cela, nous aurons besoin de **variables**.

{{% notice tip %}}

### Variables

Une **variable** est un conteneur qui stocke des informations. Il existe plusieurs types de variables, chacun stockant différents types d'informations :

1. **string** : représente une séquence de caractères, lettres, chiffres et symboles. Les **string**s sont toujours entourées de guillemets doubles. Exemples : `"bonjour"`, `"1,2,3"`.
2. **int** : représente des nombres entiers positifs ou négatifs. Exemples : `1`, `100`, `-250`.
3. **char** : représente un seul caractère. Exemples : `'A'`, `'e'`, `'I'`. Les **char**s sont toujours entre guillemets simples.
4. **bool** : représente une valeur soit `true` soit `false`.

Pour créer une variable, déclarez-la comme suit :

```
int number = 10;
```
Analysons cette ligne de code en détail :

Tout d’abord, nous devons spécifier le type d’information qui sera stockée dans cette variable. Dans ce cas, ce sera du type `int`. Ensuite, nous devons déclarer le nom du conteneur ; ici, nous appellerons notre variable `number`. Enfin, nous spécifions la valeur que contiendra le conteneur ; dans ce cas, `10`. Nous terminons par un point-virgule pour indiquer que la ligne est complète.

Nous pouvons maintenant utiliser la variable `number` dans le programme pour faire référence au nombre stocké. Si nous voulons afficher sa valeur, nous utiliserons la ligne de code suivante :

```
cout << "Le nombre est : " << number << endl;
```

En exécutant cette ligne de code, la console affichera :

```
Le nombre est : 10
```
{{% /notice %}}

{{< notice note >}}
Nous pouvons utiliser `cout` pour afficher des mots, des nombres ou des variables. Si nous voulons afficher plus d'une chose, nous devons ajouter `<<` entre chaque terme :
Exemple :
```
int heure = 13;
cout << "Il est " << heure << " heures de l'après-midi" << endl;
```
Cela affichera :
```
Il est 13 heures de l'après-midi.
```
{{< /notice >}}

Ensuite, nous voudrions que le destinataire du message puisse écrire son nom dans la console (que nous stockerons dans une variable), et que le programme lui dise "Bonjour".

Pour entrer le nom, nous utiliserons le code suivant :
```
string name;
cin >> name;
```
Analysons cette ligne de code.

{{% notice tip %}}

### Entrée Console

De la même manière que nous pouvons afficher dans la console avec `cout`, nous pouvons saisir des données dans la console en utilisant `cin`, et en spécifiant le nom de la variable dans laquelle les données saisies seront stockées.

Dans l’exemple précédent, nous indiquons que les données saisies seront stockées dans la variable `name`.

Cela dit, si nous saisissons :
```
Queen
```
Alors la variable `name` stockera la chaîne de caractères `"Queen"`.

{{% /notice%}}

Il est maintenant temps de commencer avec notre programme.

Voici les étapes à suivre pour cette activité :

1. Déclarez une variable de type string nommée `name`.
2. Utilisez `cin` pour demander une entrée à l'utilisateur et stockez les données saisies dans la variable `name`.
3. Affichez dans la console `"Bonjour (name)"`, où `(name)` doit être remplacé par la valeur contenue dans la variable `name`.
4. Cliquez sur Run. Saisissez `"Queen"` comme nom du destinataire dans l'onglet **console**, et vérifiez que vous obtenez `"Bonjour Queen"` comme résultat dans la console.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-2-english" target="_blank">Lancer Replit</a>

{{% notice warning %}}

### AIDE !

Si après avoir cliqué sur le bouton Run, un message d'erreur en rouge apparaît, cela signifie qu'il y a quelque chose qui ne va pas avec votre code. Veuillez demander de l'aide à votre instructeur.

Vous pouvez également vérifier les points suivants :
1. Assurez-vous que l’orthographe, les majuscules et les symboles utilisés correspondent à l’exemple donné.
2. Assurez-vous d'ajouter un point-virgule à la fin de chaque ligne de code.
3. Souvenez-vous que toutes les chaînes doivent être entre guillemets.
4. Tout le code que vous écrivez doit être compris entre les accolades `{}` dans la fonction `int main`.

{{% /notice %}}
