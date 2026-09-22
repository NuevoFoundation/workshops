---
title: "Nombres"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

L'ordinateur peut également effectuer des calculs. Utilisez `print()` pour afficher le résultat des expressions mathématiques. Pas besoin de guillemets pour les nombres ! Contrairement aux chaînes de caractères, vous pouvez effectuer des opérations mathématiques sur les nombres.

```python
print(7-3)  # imprime 4
print(5 * -6 + 7)   # imprime -23
print(24 * (8-3) / 6)   # imprime 20.0
```

{{% notice note %}}
En Python 3, l'opérateur `/` renvoie toujours un résultat en décimal. Pour effectuer une division et obtenir un nombre entier (en ignorant le reste), utilisez `//` à la place.

Par exemple,

`15 / 4` donne `3.75`
`15 // 4` donne `3`

{{% /notice %}}

Vous pouvez également essayer d'utiliser les symboles mathématiques pour créer vos propres expressions !

| Symbole          | Utilisation   | Symbole     | Utilisation   |
| ----------------- | ------------- | ----------- | ------------- |
| `+`              | Additionner   | `*`         | Multiplier    |
| `-`              | Soustraire    | `/`         | Diviser       |

### Défi 1

Essayons de trouver les réponses aux opérations suivantes en utilisant Python. Essayez d'afficher le résultat des opérations ci-dessous (<b>assurez-vous de ne pas oublier les parenthèses</b>) :

- 2 - 19
- (3 + 5) * 6
- (13 + 5 * 8) / (6 - (3 + 7))

### Défi 2

Pouvez-vous afficher cette déclaration ? `"527 fois 199 donne : __"`

Vous devrez compléter le blanc avec la réponse de `(527 * 199)`. Si vous souhaitez afficher une chaîne de caractères et un nombre ensemble, vous devez d'abord convertir le nombre en chaîne de caractères.

Voici un exemple : <font color="#005a9c">print</font>(`"Bonjour, tout le monde !"` + str(5))

{{% notice tip %}}

Utiliser `str(5)` transforme le nombre en chaîne de caractères `"5"`. Convertir un type de donnée en un autre est appelé "casting".

{{% /notice%}}

{{% notice info %}}

#### Fait amusant : Nombres Aléatoires

Voici comment afficher un nombre aléatoire compris entre 1 (inclus) et 10 (inclus) :

 ```python 
 # Cette ligne importe la bibliothèque nécessaire
 from random import randint
 # Cette ligne affiche un nombre aléatoire entre 1 (inclus) et 10 (inclus)
 print(randint(1,10))
 ```

Vous voulez en savoir plus ? Demandez de l'aide ou cherchez sur Internet ! Le meilleur ami de tout programmeur est un moteur de recherche !

En particulier, essayez de comprendre ce que signifient les mots <font color="#005a9c">from</font> et <font color="#005a9c">import</font>. Nous reviendrons sur ces mots plus tard dans le projet.

{{% /notice %}}

<iframe title="Fait amusant : Nombres Aléatoires - Codebunga" src="https://codebunga.com/embed/nuthi3gj" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>