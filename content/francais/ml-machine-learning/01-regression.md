---
title: "Qu'est-ce que la régression ?"
description: "Apprenez aux ordinateurs à prédire des résultats."
prereq: "Python"
icon: ""
draft: false
weight: 1
---

# Qu'est-ce que la régression ?
La régression est une technique permettant de modéliser la relation entre une caractéristique (variables indépendantes) et une prédiction (variables dépendantes). Elle nous aide à comprendre comment la valeur d'une variable dépendante change en fonction de la valeur de la variable indépendante. Lorsqu'elle est correctement appliquée, elle nous aide à prédire des valeurs 😯 !

<!-- TODO: Ajouter un diagramme pour remplacer l'image ci-dessous. -->
|![Régression](../resources/regression.png)|
|:--:|
|Régression|

La régression est une technique puissante qui nous permet de trouver une ligne ou une courbe qui correspond aux données que nous avons. En utilisant la régression, nous pouvons créer ou réutiliser des `modèles mathématiques` montrant comment les variables dépendantes et indépendantes sont liées. [Les modèles mathématiques](https://www.youtube.com/watch?v=xHtsuOB-TPw) sont utiles car ils nous aident à comprendre un système et à faire des prédictions basées sur les variables du système. Parfois, le modèle mathématique choisi peut ne pas bien correspondre aux données ; dans ce cas, nous devons chercher un meilleur modèle capable de capturer les motifs observés.

## Exemple 1 : Comment savoir s'il va pleuvoir ?
Chaque fois que vous consultez votre téléphone, regardez un bulletin météo ou demandez simplement sur Internet "Quelle est la probabilité de pluie aujourd'hui ?", des modèles mathématiques sont utilisés par les météorologues pour prédire s'il y a une possibilité de pluie. Vous pourriez vous demander : quelles sont les `variables` prises en compte lors de l'exécution de ces modèles mathématiques ? L'odeur de la pluie suffit-elle ?

{{% expand "**Quelles variables devriez-vous considérer pour savoir s'il va pleuvoir ?**"%}}

- Température &rarr; Fait-il chaud, froid ou est-on dans la zone idéale ?
- Altitude &rarr; Selon votre hauteur relative au sol, les endroits peuvent devenir plus frais ou plus chauds.
- Localisation &rarr; L'endroit où vous vous trouvez compte (par exemple : forêt, plage, chaîne de montagnes, désert, etc.).
- Humidité &rarr; Ressentez-vous un air lourd ? Y a-t-il assez d'eau dans l'air pour qu'il pleuve ?
- Période de l'année &rarr; En quel mois sommes-nous ? Quelle est la saison actuelle ?
- Et bien d'autres encore !

Il y a de nombreuses autres variables à considérer lorsque nous pensons à la probabilité de pluie. En fin de compte, la "**probabilité de pluie**" est la variable dépendante, tandis que les autres propriétés mentionnées ci-dessus sont les variables indépendantes. La probabilité de pluie dépend des valeurs des autres variables mentionnées.
{{% /expand %}}

### Exercice 1
Supposons que quelqu'un veuille connaître le type de formes qu'il possède en fonction de la surface de la forme.

1. Est-ce possible ? Peut-on savoir quelle forme on a en fonction de la surface ?
{{% expand "**Cliquez pour afficher la réponse**" %}}  
***Non***, comme vous pouvez rapidement le deviner, il n'existe pas de relation entre la **surface** et le type de forme qu'une figure peut avoir.

Par exemple, un carré de côté 3 a une surface de 9.

<h3>
\[
    3 \cdot 3 = 9
\]
</h3>

Mais c'est également le cas d'un triangle de base 6 et de hauteur 3.
<h3>
\[
    (6 \cdot 3)/2 = 9
\]
</h3>

{{% /expand %}}
<br>

2. Si la surface n'est pas une bonne variable ou propriété pour comprendre le type de forme que nous avons, nous devons trouver une autre relation. Quel lien pourrait-on utiliser pour identifier le type de forme ?
{{% expand "**Cliquez pour afficher la réponse**" %}}  

***Le nombre de **côtés** qu'elle possède ! Plus le nombre de côtés augmente, plus il est simple de déterminer le type de la forme.***

Si vous avez remarqué dans notre tableau, nous avons construit une relation linéaire qui peut être représentée par X=Y.

X &rarr; **le nombre de côtés**
Y &rarr; **le type de la forme**

Voilà, vous avez créé votre premier modèle d'apprentissage automatique !
{{% /expand %}}
<br>

Un modèle, dans l'exemple précédent, n'est qu'une fonction construite pour établir une relation entre notre variable dépendante et nos variables indépendantes. Par exemple, des fonctions comme des lignes droites (y = ax + b), des paraboles (y = a(x -h)^2), des courbes cubiques (y = ax^3 + bx^2 + cx + d), et bien d'autres peuvent servir de modèles.

### Comment s'assurer que votre modèle correspond aux données ?

Lorsque nous effectuons une analyse à l'aide d'un modèle d'apprentissage automatique existant, nous devons veiller à sélectionner un modèle approprié, capable de représenter nos données. Sur l'image ci-dessous, vous pouvez voir que les points de données représentent une parabole. Il est très probable que le modèle que nous devons utiliser soit un modèle parabolique, quelque chose comme ceci...

<h2>
\[
    y = a(x -h)^2
\]
</h2>

Lorsque vous utilisez un modèle parabolique, vous devez connaître les sommets de la parabole afin de prédire où un nouveau point apparaîtra. Vous pourriez exécuter un modèle sans définir de sommets et finir avec une situation ressemblant à l'image "Sous-ajustement" (Under-fitting), ou définir trop de sommets et aboutir à l'image "Sur-ajustement" (Over-fitting). Notre objectif est de définir un modèle "juste comme il faut" pour qu'il corresponde aux données et que les nouveaux points de données puissent être représentés grâce à ce modèle.
 
<!-- TODO: Ajouter un diagramme pour remplacer l'image ci-dessous. -->
|![Exemple d'ajustement des données](../resources/fitting-data-example.png)|
|:--:|
|Image 1 : Sous-ajustement et Sur-ajustement|

Vous devez toujours vous assurer que le modèle choisi pour représenter vos données correspond à ce sur quoi vous travaillez. Dans le cas contraire, vous pourriez rencontrer deux problèmes :
- **Sous-ajustement**
    
    Cela se produit lorsque vous êtes incapable de trouver une relation dans les données qui vous ont été données. Cela arrive souvent lorsque vous ne disposez pas de suffisamment de données à utiliser.

- **Sur-ajustement**
    
    Cela survient lorsque vous essayez d'accommoder toutes les valeurs possibles dans vos données, même celles qui ne représentent rien. En faisant cela, vous risquez de choisir