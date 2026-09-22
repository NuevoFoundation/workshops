---
title: "Régression Linéaire Simple"
description: "Apprenez à prédire des résultats avec des ordinateurs."
prereq: "Python"
icon: ""
draft: false
weight: 2
---

# Qu'est-ce que la régression linéaire simple ?

La régression linéaire simple vise à trouver une corrélation entre deux variables et à extraire des équations mathématiques qui expliquent la relation entre une variable dépendante et une variable indépendante. En général, avec la régression linéaire simple, nous voulons arriver aux conclusions suivantes :

1. Existe-t-il une **relation** entre les variables que nous avons ?

    Vous pouvez déterminer la relation entre le revenu et les dépenses, l'expérience et le salaire, ou l'humidité et la température. Mais, par exemple, il n'y a AUCUNE relation entre la taille d'un étudiant et ses résultats aux examens.

2. Peut-on **prévoir** des valeurs avec cela ?

    Grâce à la régression, nous pouvons entraîner le modèle et découvrir si nous pouvons prédire des valeurs avec certitude. Peut-on utiliser ce que l'on sait de la relation pour prédire de nouvelles valeurs ?

    Exemple : Quelle sera la température demain ? Combien ma boulangerie vendra-t-elle cette année par rapport à l'année dernière ? Quel sera mon salaire si j'ai 5 ans d'expérience ?

# Rôles des variables

Dans la régression linéaire simple, les variables peuvent jouer l'un des deux rôles.

1. **Variable Dépendante**

    La variable dont nous voulons prédire ou prévoir la valeur. On l'appelle **dépendante** car sa valeur dépend de quelque chose d'autre. Nous appellerons cette variable **y**.

2. **Variables Indépendantes**

    Il s'agit de la variable que nous pouvons contrôler ou modifier afin d'influencer la variable dépendante. Nous appellerons cette variable **x**.

    Exemple : Si une pomme coûte 1,00 $, et que vous en achetez 10, le coût total sera de 10,00 $. La variable dépendante ici est le `coût total` tandis que la variable indépendante est le nombre de pommes que vous souhaitez acheter.

# Le Modèle Mathématique de l'Équation Linéaire Simple

Lorsqu'on utilise la régression linéaire simple, on l'appelle **linéaire** car, eh bien... le modèle mathématique représente une ligne droite dans un plan 2D. Prenons un moment pour y réfléchir.

Quelle est l'équation mathématique d'une ligne droite ?

{{% expand "**Cliquez pour voir la réponse**" %}}

Cette équation peut vous sembler très familière. Si c'est le cas, c'est l'équation générale d'une ligne droite.

<h1>
\[
    y = ax + b
\]
</h1>

- **x** est la variable indépendante.
- **y** est la valeur dépendante.
- **a** est la pente de la ligne.
- **b** est l'interception ou la valeur de **y** lorsque **x = 0**.

En suivant cette équation, nous allons développer la manière dont les modèles mathématiques de régression linéaire simple calculent et prédisent de nouvelles valeurs.

{{% /expand %}}

# Exemples Réels

Dans le monde réel, les données ne sont parfois pas linéaires et se comportent différemment de ce que l'on pense. À première vue, il peut sembler que les données n'ont aucune relation. Dans le cas de la régression linéaire simple, ce que vous devez chercher, ce sont des données qui suivent plus ou moins un motif linéaire.

Supposons que vous travaillez en tant qu’`analyste de données` dans le département des ressources humaines d’une entreprise qui compte plus de 10 000 employés. Votre patron veut savoir si les années d’expérience d’un employé ont un impact sur le montant de son salaire. Bien entendu, en tant qu’`analyste de données`, vous pouvez consulter la base de données des employés et rapidement vérifier les éléments suivants :

1. Quel est leur salaire actuel ?
2. Combien d'années d'expérience la personne a-t-elle ?

Supposons que vous êtes en mesure d'obtenir des données de 30 employés au hasard qui ressemblent à ceci :

|ID Employé|Années d'Expérience|Salaire|
|:--:|:--:|:--:|
|1|1.1|39343|
|2|1.3|46205|
|3|1.5|37731|
|4|2.0|43525|
|5|2.2|39891|
|6|2.9|56642|
|7|3.0|60150|
|8|3.2|54445|
|...|...|...|
|26|9.0|105582|
|27|9.5|116969|
|28|9.6|112635|
|29|10.3|122391|
|30|10.5|121872|

Après avoir examiné le tableau, vous tracez toutes ces valeurs dans un graphique en nuage de points 2D et obtenez une image comme suit.

|![Years of Experience vs Salary](../resources/Years_vs_Salary.png)|
|:--:|
|Nuage de points : Années d'Expérience vs Salaire.|

Comme vous pouvez le voir, les points ressemblent _en quelque sorte_ à une ligne. Dessinons une ligne imaginaire pour voir si nous pouvons passer par tous les points.

|![Years of Experience vs Salary with Trendline](../resources/Years_vs_Salary_with_trendline.png)|
|:--:|
|Nuage de points : Années d'Expérience vs Salaire avec ligne.|

Comme vous pouvez le constater, la ligne ne passe pas par **TOUS** les points, mais elle est plutôt proche. Que signifie cela ? Pourquoi dans certains cas les points sont-ils proches ou éloignés de notre ligne imaginaire ?

Jusqu'à présent, nous savons que :

1. Les données suivent approximativement une **approche linéaire**.
2. Les données comportent 2 variables importantes : **SALARY** et **YEARS OF EXPERIENCE**. Cela signifie que nous pouvons commencer à **modéliser** nos données comme une équation linéaire.

**Question :** Nous savons que **SALARY** et **YEARS OF EXPERIENCE** sont nos variables, mais laquelle est la variable dépendante et laquelle est la variable indépendante ?
{{% expand "**Cliquez pour voir la réponse**" %}}

- **YEARS OF EXPERIENCE (XP)** est notre variable indépendante.
- **SALARY** est notre variable dépendante.

Si nous insérons ces variables dans notre équation linéaire, nous obtenons quelque chose comme ceci :

<h1>
\[
    SALARY = a(XP) + b
\]
</h1>

Avec une équation comme celle-ci, nous disons : "Les années d'expérience ont un effet direct sur le salaire d'un employé".

{{% /expand %}}

