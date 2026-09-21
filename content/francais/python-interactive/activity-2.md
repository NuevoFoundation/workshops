```markdown
---
title: "Activité 2 - Comment Créer et Stocker votre Menu"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---
## Pré-requis
- <a href="../../python-basics/data-structures/lists/" target="_blank">Listes</a>

## Comment Créer et Stocker votre Menu
Maintenant que nous avons une bannière pour votre restaurant, réfléchissons à la manière d'organiser les informations sur vos plats. Vous souvenez-vous comment, plus tôt, vous avez décidé quels aliments et boissons vous vouliez vendre dans votre restaurant ? Eh bien, maintenant nous devons réfléchir à la façon de stocker toutes ces informations. Nous devons stocker le nom, le prix et la description de chaque élément de votre menu.

Pour cela, nous pouvons utiliser ce qu'on appelle un dictionnaire Python pour suivre ces informations.

Nous allons avoir un dictionnaire où les valeurs sont des listes !  
En procédant ainsi, nous pourrons accéder au prix et à la description de chaque élément. Lorsque nous utilisons une liste ou un autre conteneur comme valeur associée à une clé dans un dictionnaire, nous obtenons un **dictionnaire imbriqué**. Comme nous devons conserver à la fois les informations sur le prix et la description, nous devons les stocker dans nos listes dans un ordre spécifique.

Voici la structure que nous allons utiliser :  
{élément : [prix, description]}  
En respectant cette structure lors de la création du **dictionnaire imbriqué**, nous nous assurons que l'accès au prix et à la description sera simple plus tard.

Voici un exemple de dictionnaire imbriqué. N'oubliez pas d'appliquer la structure ci-dessus lorsque vous créez votre menu !  
```python
#structure
#{mot: [signification, catégorieGrammaticale, prononciation]}
petitDictionnaire = {'jouet':['un objet avec lequel les enfants jouent', 'nom', 'jou-et'], 'marcher':['une manière de se déplacer à un rythme régulier et lent, un pied après l’autre, en séquence', 'verbe', 'march-é']}
```

Retournez au lien `Replit` mentionné précédemment et ajoutez du code pour stocker votre menu dans une variable appelée `dictMenu`. Rappelez-vous de faire de `dictMenu` une variable globale : ne la placez pas dans la fonction `main()`, placez-la plutôt en haut de votre code afin qu'elle soit accessible depuis n'importe quelle fonction.  
Astuce : Votre prix est un `float`, et votre description est une `string`.

Choisissez vos 5 aliments/boissons préférés pour figurer dans votre menu.  
Par exemple : Pâtes au pesto crémeux, Salade César, Limonade Rose, Root Beer, Thé Glacé, Gâteau aux Carottes, Rouleaux de Printemps.
```