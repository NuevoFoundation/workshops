```markdown
---
title: "Python : Notions de base - Clé de réponse"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Ce sont des solutions d'exemple. De nombreux défis ont plusieurs réponses valides, en particulier ceux qui vous demandent de créer vos propres exemples. Votre solution est correcte si elle produit le résultat attendu !
{{% /notice %}}

## Bases

### Écrire sur la console - Défi 1

```python
print("Hello, World!")
```

Sortie :
```
Hello, World!
```

### Écrire sur la console - Défi 2

Ajoutez une deuxième instruction print avec le texte de votre choix :

```python
print("Hello, World!")
print("J'apprends Python !")
```

### Variables - Défi

En utilisant `comp = "Ordinateur"` et `cinq = 5`, affichez la sortie suivante :

```python
comp = "Ordinateur"
cinq = 5
print(comp)
print(cinq)
print(comp + comp)
print(cinq + cinq)
print(comp + comp + comp)
print(cinq + cinq + cinq)
```

Sortie :
```
Ordinateur
5
OrdinateurOrdinateur
10
OrdinateurOrdinateurOrdinateur
15
```

### Lecture depuis la console - Défi

```python
print("Bienvenue !")
print("Comment puis-je vous aider aujourd'hui ?")
value = input()
print("Vous avez demandé : " + value + " ?")
print("Je ne connais pas la réponse à " + value + ". Au revoir !")
```

Exemple de sortie (si l'utilisateur tape "Qu'est-ce que Python ?") :
```
Bienvenue !
Comment puis-je vous aider aujourd'hui ?
Vous avez demandé : Qu'est-ce que Python ?
Je ne connais pas la réponse à Qu'est-ce que Python. Au revoir !
```

## Types de données

### Chaînes de caractères - Défi 1

Combinez votre prénom et votre nom de famille :

```python
prenom = "Nuevo"
nom = "Foundation"
print(prenom + " " + nom)
```

Sortie :
```
Nuevo Foundation
```

### Chaînes de caractères - Défi 2

Trois façons d'écrire "Nuevo Foundation" en utilisant deux symboles `+` à chaque fois :

```python
print("Nuevo" + " " + "Foundation")
print("Nuevo " + "Foun" + "dation")
print("Nue" + "vo Foundati" + "on")
```

Il existe de nombreuses solutions valides ! Toute combinaison produisant "Nuevo Foundation" avec exactement deux `+` est correcte.

### Nombres - Défi 1

```python
print(2 - 19)
print((3 + 5) * 6)
print((13 + 5 * 8) / (6 - (3 + 7)))
```

Sortie :
```
-17
48
-13.25
```

Décomposition mathématique pour la troisième expression :
- Numérateur : 13 + (5 * 8) = 13 + 40 = 53
- Dénominateur : 6 - (3 + 7) = 6 - 10 = -4
- Résultat : 53 / -4 = -13.25

### Nombres - Défi 2

{{% notice warning %}}
Le texte de l'atelier dit `"527 time 199 is: __"` — il semble y avoir une faute de frappe pour "times" dans le texte original. La réponse ci-dessous correspond exactement au texte de l'atelier.
{{% /notice %}}

```python
print("527 time 199 is: " + str(527 * 199))
```

Sortie :
```
527 time 199 is: 104873
```

N'oubliez pas d'utiliser `str()` pour convertir le nombre en chaîne avant de le combiner avec `+`.

### Booléens - Défi 1

{{% notice warning %}}
Le code de l'atelier pour la deuxième expression contient une parenthèse mal placée : `print((3 + 5) * 6) == (65 - 17)`. Cela affichera `48` mais ne montrera pas le résultat booléen. La version corrigée ci-dessous place la comparaison dans le `print()`.
{{% /notice %}}

```python
print(5 + 8 < 10)
print((3 + 5) * 6 == (65 - 17))
```

Sortie :
```
False
True
```

- 5 + 8 = 13, et 13 < 10 est `False`
- (3 + 5) * 6 = 48, et 65 - 17 = 48, donc 48 == 48 est `True`

... [continuer le contenu traduit avec la fidélité au texte original]
```