```yaml
---
title: "Fonctions"
weight: 5
draft: false
---
<iframe title="Fonctions - Vidéo YouTube" width="560" height="315" src="https://www.youtube.com/embed/0207zoiJ6s8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Les fonctions** sont un moyen d'organiser des blocs de code similaires ou répétitifs. Au lieu de taper sans cesse le même code, nous pouvons mettre le code souhaité dans une fonction et l'appeler chaque fois que nous voulons l'utiliser.

{{% notice info %}}
**Remarque :** Le but d'une fonction est de réduire le code redondant dans tout le programme.
{{% /notice %}}

## Création d'une fonction

### Définir votre fonction - nom & paramètres

Pour créer une fonction en Python, nous devons utiliser le mot-clé `def`. Ce mot-clé indique à l'éditeur de code où la fonction est définie. `def` est suivi par le nom de la fonction. Le nom de la fonction est utilisé pour appeler votre fonction à partir d'autres parties du programme.
Pour rendre la fonction plus générale (de manière à ce que nous puissions l'utiliser à plusieurs endroits), nous pourrions avoir besoin de lui envoyer certaines informations. Cela s'accomplit en utilisant des paramètres. Ils sont placés entre parenthèses `()` juste après le nom de la fonction. Si aucun paramètre n'est nécessaire, ils peuvent être ignorés. La déclaration de la fonction se termine par un deux-points. 
Les instructions à exécuter chaque fois que la fonction est appelée suivent sur les lignes suivantes. Les tabulations sont très importantes ici, alors assurez-vous que votre code est correctement indenté. Chaque ligne indentée après la ligne de définition de fonction (à l'exception des commentaires) sera exécutée lorsque vous appelerez la fonction.

Voici à quoi ressemble une fonction :

```python
def nomDeLaFonction(paramètre1, paramètre2, ...):
    # écrivez du code
    # appelez cette fonction depuis d'autres
    # parties du code en utilisant nomDeLaFonction
```
![Graphique décrivant la structure d'une fonction](../img/annotated-screenshot-function.png)

{{% notice warning %}}
Assurez-vous que la première ligne de votre fonction se termine toujours par un deux-points `:`.
{{% /notice %}}

### Écrire le corps de la fonction

En Python, l'indentation définit quel code est contrôlé par la fonction. Dans l'exemple ci-dessous, afin d'appeler la fonction `sectionA`, vous devez spécifier 2 paramètres : `startMeasure` et `endMeasure`. Lorsque vous appelez `sectionA`, les 3 lignes de la fonction `fitMedia` sont exécutées. Les 2 appels de fonction `fitMedia` au bas ne font pas partie du corps de la fonction `sectionA`.

```python
#Section A
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

 fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
 fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)   
```

Le code qui est indenté sous la fonction `sectionA` est celui qui est exécuté à chaque appel de la fonction `sectionA`.

{{% notice warning %}}
**Attention :** Puisque l'indentation est très importante en Python, assurez-vous que le corps de la fonction commence toujours par deux espaces.
{{% /notice %}}

## Retourner une valeur
Souvent, vous ne voulez pas simplement afficher les résultats ou effectuer une action, mais vous souhaitez que la fonction vous renvoie le résultat de l'action effectuée. Pour ce faire, vous utilisez le mot-clé `return`.

```python
def ma_fonction(x):
    return 5 * x

print(ma_fonction(3)) # imprime 15
print(ma_fonction(5)) # imprime 25
```

## Utiliser la fonction - Appel de fonction

Pour appeler une fonction, saisissez le nom de la fonction et ses paramètres où vous voulez exécuter la fonction. Par exemple, pour appeler la fonction `sectionA`, nous ferions quelque chose comme ceci :

```python
sectionA(1,9)
```

Dans cet exemple, `sectionA` sera appelé avec une valeur de `startMeasure` de `1` et une valeur de `endMeasure` de `9`.

{{% notice warning %}}
**Attention :** Lorsque vous créez une fonction en Python, vous devez définir la fonction et son contenu avant de l'appeler. En d'autres termes, dans le code, vous devez placer la déclaration de la fonction au-dessus de son appel. Sinon, vous obtiendrez une erreur NameError comme ci-dessous. Voir la figure suivante comme exemple :
![Exemple montrant une fonction appelée avant sa définition et produisant une NameError](../img/annotated-screenshot-function4-error.png)
{{% /notice %}}

### Défi 1 - Créez votre propre fonction !

**Défi :** Créez une fonction appelée `addNumbers` qui prend 2 paramètres appelés `number1` et `number2`, et imprime la somme dans la console. Appelez la fonction `addNumbers` avec les paramètres 3 et 5.
Qu'est-ce qui est affiché dans la console ?

<iframe title="Défi 1 - Créez votre propre fonction ! - Codebunga" src="https://codebunga.com/embed/cgv9gk32" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### Défi 2

Essayons de créer des fonctions mathématiques simples. Créez une fonction appelée `add` qui prend deux paramètres, `number1` et `number2`, et retourne la somme des deux nombres.

{{% notice tip %}}

Commencez par copier la structure de la fonction triple. Changez le nom de la fonction triple, et remplacez le paramètre `number` par `number1` et `number2`, séparés par une virgule. Les deux paramètres `number1` et `number2` devraient être de type <font color="#005a9c">int</font>, et n'oubliez pas d'additionner `number1` et `number2` !

{{% /notice %}}

Pour vérifier que votre fonction fonctionne correctement, ajoutez le code suivant après la définition de votre fonction, qui appelle la fonction `add()` et sauvegarde sa valeur dans une variable. Par exemple :

<pre>
value2 = add(2