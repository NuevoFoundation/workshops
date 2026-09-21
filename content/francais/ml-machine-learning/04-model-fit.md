---
title: "Ajustement du Modèle"
prereq: "Python"
icon: ""
draft: false
weight: 4
---

# Notre modèle s'ajuste-t-il ?

Rappelez-vous que l'équation linéaire que nous avons construite contient une valeur d'erreur aléatoire (**ε**).

<h3>
\[
    SALARY = 9449.96(XP) + 25792.20 + ε
\]
</h3>

Étant donné que **ε** est une valeur d'erreur que nous ne pouvons pas déterminer, nous devons nous poser les questions suivantes :

1. Dans quelle mesure notre modèle représente-t-il la réalité ou dans quelle mesure notre modèle `s'ajuste`-t-il aux données que nous avons ?
2. Comment savoir si **les années d'expérience** ont réellement un impact sur le **salaire** ?

Il existe de nombreuses façons de répondre à ces questions, mais dans le domaine de l'apprentissage automatique et des statistiques, il existe une valeur que nous pouvons utiliser. Cette valeur s'appelle le **R-Carré** ou **R<sup>2</sup>**.

[R-Carré](https://www.ncl.ac.uk/webtemplate/ask-assets/external/maths-resources/statistics/regression-and-correlation/coefficient-of-determination-r-squared.html#:~:text=6%20See%20Also-,Definition,line%20approximates%20the%20actual%20data.) - est une mesure qui fournit des informations sur la qualité d'ajustement d'un modèle. Dans le contexte de la régression, c'est une mesure statistique de la façon dont la ligne de régression approximative correspond aux données réelles. En règle générale, si la valeur de **R<sup>2</sup>** est proche de 1, cela signifie que le modèle mathématique que nous avons choisi s'ajuste bien ou correspond réellement aux valeurs réelles de nos données.

## Exercice 1 : Trouver le R-Carré

Le fichier `Experience_vs_Salary-More_Data` contient plus de 10 000 entrées où vous pouvez voir le salaire et les années d'expérience des employés de l'entreprise pour laquelle vous travaillez. Le code Replit ci-dessous prendra l'échantillon initial de 30 employés et calculera l'erreur standard et le R<sup>2</sup>.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/04-e1.py" target="_blank">Lancer Replit</a>

Comme vous pouvez le constater, la valeur de R<sup>2</sup> est de 0,973. Désormais, si quelqu'un nous demande s'il existe une relation dans nos données, nous pouvons dire que "nous sommes confiants à 97,3 % que les années d'expérience d'un employé sont liées au salaire qu'il perçoit".

Je vous encourage à modifier la variable 'sample_size' pour une valeur plus grande ou plus petite afin de voir comment la valeur de R<sup>2</sup> est affectée.

Maintenant, allons faire quelques prédictions !