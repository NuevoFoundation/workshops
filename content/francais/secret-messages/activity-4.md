```markdown
---
title: "Activité 4 - Conditions"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/eweOJoWtuwg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Très bien !

Nous nous rapprochons de plus en plus de la création de nos messages secrets. Mais n'oublions pas non plus que nous devons être capables de déchiffrer ces messages !

Pour cela, nous allons entrer dans la console un `1`, si nous souhaitons chiffrer un message, ou le chiffre `2`, si nous souhaitons le déchiffrer.

Pour cela, nous allons avoir besoin des **conditions**.

{{% notice tip %}}

### Conditions if / else
Une condition en programmation est une instruction ou un groupe d'instructions qui peuvent être exécutées ou non, en fonction de la véracité d'une condition. Cela ressemble à ceci : **SI** (if) cela se produit, exécutez ces instructions, **SINON** (else), exécutez ces autres instructions.

Exemple
```
if(3 > 1){
  cout << "3 est plus grand que 1" << endl;
}else{
  cout << "3 n'est pas plus grand que 1" << endl;
}
```
Le programme affichera :
```
3 est plus grand que 1
```

1. `if(3 > 1)` vérifie si le chiffre 3 est plus grand que 1.
2. Si c'est vrai, alors le bloc de code immédiatement après `if` sera exécuté.
3. Sinon, le bloc de code suivant `else` sera exécuté. 
Dans l'exemple, le bloc `else` ne sera pas exécuté car la condition `if` est vraie - 3 est effectivement plus grand que 1.

Pour créer des conditions, nous utilisons habituellement des **opérateurs logiques** dans les parenthèses `()` à côté de `if`. Supposons que `a = 5` et `b = 3`. Voici quelques exemples d'opérateurs logiques que nous pouvons utiliser :

1. Moins que : `a < b` (5 est-il moins que 3 ?)
2. Moins ou égal à : `a <= b` (5 est-il moins ou égal à 3 ?)
3. Plus grand que : `a > b` (5 est-il plus grand que 3 ?)
4. Plus ou égal à : `a >= b` (5 est-il plus grand ou égal à 3 ?)
5. Égale à : `a == b` (5 est-il égal à 3 ?)
6. Différent de : `a != b` (5 est-il différent de 3 ?)

{{% /notice %}}

Pour l'activité, nous allons utiliser une condition pour savoir si ce que nous voulons est créer un message secret (le chiffrer) ou découvrir un message (le déchiffrer).

Pour cela, nous devons suivre les étapes suivantes :
1. Créer une variable de type `int`.
2. Demander une entrée à l'utilisateur et enregistrer les données saisies dans la variable de type `int`.
3. Créer une condition if/else pour vérifier si le chiffre saisi est égal à `1`. Si c'est le cas, cela signifie que nous souhaitons chiffrer le message ; sinon, nous souhaitons déchiffrer le message.
4. Afficher dans la console ce que nous souhaitons faire dans chaque cas. Par exemple, si `1` est saisi, alors afficher `"Chiffrer un message"`. Sinon, afficher `"Déchiffrer un message"`.

Si vous avez besoin d'aide, n'oubliez pas que vous pouvez revenir aux activités précédentes pour réviser.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-4-english" target="_blank">Lancer Replit</a>
```