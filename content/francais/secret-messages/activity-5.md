```markdown
---
title: "Activité 5 - Code ASCII"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/MeOQFpey0pA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

C'est génial !

Dans cette activité, nous allons chiffrer (rendre secret) le nom du destinataire.

Utilisons le **Code ASCII**

{{% notice tip %}}

### Code ASCII

Le code ASCII montre que chaque caractère a une valeur numérique. Par exemple, le caractère `A` correspond au numéro 65, `B` à 66, `C` à 67, etc.

La liste suivante montre la valeur des caractères les plus couramment utilisés :

![Liste des codes ASCII](../media/ascii-english.png)

Puisque chaque caractère possède une valeur numérique, nous pouvons utiliser cela pour ajouter ou soustraire des valeurs à ces lettres, et ainsi changer leur ordre d'une certaine manière. Cela nous permet de convertir des caractères (`char`) en nombres (`int`) et vice versa.

Exemple
```
char letter = 'A';
int letter_value = letter;

cout << letter << " = " << letter_value << endl;
```
Cela affichera :
```
A = 65
```

Dans cet exemple, nous stockons le caractère dans une variable de type **char**. Ensuite, dans une variable de type **int**, nous enregistrons la variable de type char. Mais puisque la deuxième variable conserve des nombres, elle convertira le caractère en sa valeur numérique selon le code ASCII.

Nous pourrions faire l'inverse, par exemple :
```
int letter_value = 67;
char letter = letter_value;
cout << letter_value << " = " << letter << endl;
```
Cela affichera :
```
67 = C
```
{{% /notice %}}

Pour créer le message secret, nous utiliserons un mot-clé, à partir duquel nous coderons le nom. L'idée est de parcourir chaque caractère du nom avec une instruction **for**, et en même temps parcourir chaque caractère du mot-clé. Ensuite, nous ajouterons la valeur du caractère du nom et du mot-clé, et le résultat sera un nouveau caractère, ce qui rendra le message chiffré.

Par exemple, si mon mot-clé est `queen` et que le nom que je veux chiffrer est `programmer`, le programme doit ajouter le `'r'` et le `'p'`, et enregistrer le résultat à la place de 'p' dans la chaîne "programmer". Ensuite, il ajouterait le `'r'` et le `'e'`, le `'o'` et le `'i'`, etc. Lorsque nous serons au caractère 5 de la chaîne programmer (le premier étant compté comme 0), nous devrons revenir au début de la chaîne queen et recommencer avec le caractère retourné 0, c'est-à-dire la lettre `'r'`, puisque la chaîne queen n'a plus de caractères.

Pour cela, nous allons rassembler une partie de ce que nous avons déjà fait, et nous devrons suivre les étapes suivantes :

1. Tout d'abord, créez une variable de type `string` pour être le mot-clé.
2. Stockez la saisie reçue depuis la console dans cette variable. Cela sera le nom.
3. Répétez les deux premières étapes, mais cela servira à stocker le mot-clé.
3. Déclarez une boucle `for`, et utilisez une variable de type `int` initialisée à 0. Ajoutez `1` à cette variable pour chaque cycle de la boucle, et continuez la boucle tant que la variable est inférieure à la `size` de la variable `string`.
4. Dans le corps de la boucle `for`, créez une variable de type `int` égale à la somme du caractère du nom (`name[i]`) et du caractère du mot-clé à la position de compteur (`key[counter]`). De cette somme, nous devons soustraire une lettre minuscule `'a'` afin que la somme corresponde à une lettre et pas à un autre caractère aléatoire du code ASCII.
5. Utilisez une instruction `if` pour déterminer si la somme des caractères correspond à un caractère supérieur à `'z'`. Si tel est le cas, soustrayez `25` (le nombre de lettres de l'alphabet) pour assurer que nous obtenions une véritable lettre dans l'alphabet.
6. Placez le caractère `name[i]` comme étant la valeur contenue dans la variable `sum`. Cela changera la lettre originale en un nouveau caractère.
7. Ajoutez `1` au compteur du mot-clé.
8. Vérifiez si le compteur du mot-clé est supérieur ou égal à la longueur de la chaîne `key`; si tel est le cas, réinitialisez le compteur à `0`.
9. Enfin, après l'instruction `for`, imprimez le message chiffré dans la console.

Souvenez-vous que vous pouvez toujours revenir aux activités précédentes pour réviser quoi que ce soit !

Une fois les étapes complétées, commencez à jouer et à chiffrer vos mots ! Appuyez sur **Run** et saisissez dans la console le mot-clé suivi de la touche "Entrée", puis le nom ou le mot à chiffrer, suivi également par la touche "Entrée". Par exemple, vous pouvez copier et coller ce qui suit dans votre console :
```
programmer
queen
```
{{< alert theme="warning" >}} **Attention :** dans ce programme, nous devons toujours écrire les chaînes et les caractères en **lettres minuscules**. {{< /alert >}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-5-english" target="_blank">Lancer Replit</a>

{{< alert theme="danger" >}}**Important :** Pour coller dans la console, cliquez avec le bouton droit sur la console et sélectionnez "Coller". Sinon, l'opération de collage pourrait ne pas fonctionner correctement. {{< /alert >}}
© 2022 GitHub, Inc.
```