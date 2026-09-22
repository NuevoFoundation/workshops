---
title: "Variables"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 4
---

Dans un exercice précédent, nous avons appris à afficher différents contenus avec `print("")`. Bien qu'il soit pratique d'imprimer un nombre ou une phrase, nous ne leur avons pas donné de signification. Les variables sont simplement des noms que nous pouvons donner à des valeurs telles que des chaînes de caractères, des nombres et des booléens. Voici comment créer une variable nommée `s` en Python. Nous disons que `s` est une chaîne ayant la valeur `"Hello, World!"`.

```python
s = "Hello, World!"
x = 88
happy = True
```
Appuyez sur exécuter.

![Capture d'écran de ce à quoi ressemble l'exemple des variables dans Codebunga](../../img/variables.png "Image de l'apparence des variables dans Codebunga")

Notez que les variables ne sont pas affichées dans la console. Au lieu de cela, la variable stocke simplement la chaîne, le nombre ou le booléen dans la mémoire de l'ordinateur. Nous pouvons utiliser ces variables dans d'autres instructions. Par exemple, le code suivant afficherait `"Hello Nuevo Foundation"` dans la console :

```python
str1 = "Hello"
str2 = "Nuevo Foundation"
print(str1 + " " + str2)
```

Vous pouvez également faire ce qui suit pour afficher les chaînes ensemble tout en ajoutant des espaces entre les mots.

```python
str1 = "Hello"
str2 = "Nuevo Foundation"
print(str1, str2)
```

## C'est quoi le Type !

Avant d'apprendre à créer des variables, nous devons comprendre le concept de **type**. Le type décrit ce qui est stocké dans la boîte.

Python est un langage dynamiquement typé, ce qui signifie, contrairement à des langages comme Java, que vous n'avez pas besoin de spécifier le type de variable avant de lui attribuer une valeur. Et, si vous avez un entier dans la boîte et que vous retirez cet entier pour y placer une chaîne de caractères, Python vous permettra de le faire. Mais, vous devez utiliser la variable en fonction de son type.

{{% notice note %}}
Les types de données importants sont les suivants :

**Type** | **Description** | **Exemples**  
--------|-----------|----------  
`integer` | entier | `20`, `30`, `35`  
`string` | une séquence de `char` | `"Hello"`, `"Bonjour"`, `"Hola"`  
`boolean` | ayant une valeur de soit `true` soit `false` | `true`, `false`  
`float` | nombres fractionnaires | `2.0`, `3.14`, `9.33`  

{{% /notice %}}

Revisitez les trois variables évoquées dans le premier exemple et identifiez leurs types de données. `s` est une chaîne, `x` est un entier, et `happy` est un booléen.

### Défi

- Créez deux nouvelles variables : Une variable nommée `comp` qui stocke la chaîne `"Computer"`.  
- Une variable nommée `five` qui stocke le nombre `5`.

Ensuite, utilisez les variables et ce que vous avez appris dans les activités précédentes pour afficher dans la console les éléments suivants. Vous _devez_ utiliser les variables !  

    Computer  
    5  
    ComputerComputer  
    10  
    ComputerComputerComputer  
    15  

{{% notice tip %}}

Astuce : Si vous êtes bloqué, envisagez d'utiliser l'opérateur `+`. Rappelez-vous que vous pouvez utiliser les variables **comp** et **five** plusieurs fois dans une même ligne !

{{% /notice %}}

<iframe title="Challenge - Codebunga" src="https://codebunga.com/embed/eceyb8yx" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>