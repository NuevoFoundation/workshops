```markdown
---
title: "Intervalle de Confiance"
description: "Apprenez aux ordinateurs à prédire les résultats."
prereq: "Python"
icon: ""
draft: false
weight: 3
---

Dans la section précédente, nous avons pu trouver le coefficient et l'interception de notre équation linéaire à l'aide d'un échantillon de 30 employés choisis au hasard.

<h3>
\[
    Intercept = 25792.20
\]
\[
    Coefficient= 9449.96
\]
\[
    SALAIRE = 9449.96(XP) + 25792.20 + ε
\]
</h3>

Mais cela a soulevé une autre question : Le **salaire** est-il VRAIMENT lié aux **années d'expérience** d'un employé ? La relation entre les deux variables est-elle suffisamment forte pour affirmer qu'elles sont liées ? 30 employés choisis au hasard suffisent-ils pour le déterminer ? Comment pouvons-nous nous assurer que ce sont les bonnes valeurs ?

Il faut se rappeler que vous avez trouvé les valeurs en travaillant avec un petit échantillon tiré d'un ensemble de données beaucoup plus grand. Comme nous n'avons qu'un seul échantillon à tester, les valeurs du **coefficient** et de la **pente** seront plus incertaines.

Que pouvons-nous faire pour nous assurer que les valeurs sont valides ?

{{% expand "**Cliquez pour voir la réponse**" %}}

Nous devons exécuter le modèle linéaire avec d'autres échantillons aléatoires.

{{% /expand %}}

# Exercice 1 : Tester avec d'autres échantillons

Supposons que vous ayez pu trouver plus de 10 000 dossiers concernant les employés de votre entreprise 😯 ! C'est incroyable, car dans le monde de l'apprentissage automatique, plus vous disposez de données, meilleurs seront les résultats. Maintenant, prenons 30 dossiers au hasard dans cet ensemble de données de plus de 10 000 éléments et vérifions si les valeurs d'interception et de coefficient diffèrent de l'échantillon original que nous avions. Dans la fenêtre Replit ci-dessous, exécutez le code autant de fois que vous le souhaitez, mais remarquez comment les valeurs de **l'interception** et du **coefficient** sont quelque peu similaires à celles que nous avons calculées précédemment.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/03-e1.py" target="_blank">Lancer Replit</a>

Pourquoi cela se produit-il ? Pourquoi les valeurs de **l'interception** et du **coefficient** sont-elles différentes à chaque fois ? Pourquoi la ligne d'échantillon d'origine (c.-à-d. : la ligne verte) est-elle très proche de la ligne bleue (c.-à-d. : la nouvelle ligne d'échantillon) ?

{{% expand "**Cliquez pour voir la réponse**" %}} 
Cela s'explique par le fait que chaque fois que vous exécutez le programme, un échantillon aléatoire de 30 dossiers est sélectionné. Pour chaque échantillon aléatoire que vous testez, les deux valeurs seront différentes. Mais la bonne nouvelle, c'est que toutes ces valeurs sont obtenues à partir du même ensemble de données.

{{% /expand %}}

Maintenant, posez-vous la question, à quel point êtes-vous **confiant** que les valeurs de **l'interception** et du **coefficient** représentent réellement les données que nous avons ?

# Intervalles de Confiance

L'exemple précédent nous apprend que, lorsque vous travaillez avec des échantillons aléatoires issus d'un ensemble de données plus grand, les valeurs de **l'interception** et du **coefficient** se situent dans une certaine plage. Nous savons que la valeur réelle doit se situer entre 2 valeurs, mais nous ne savons pas lesquelles ! C'est ce qu'on appelle un [intervalle de confiance](https://www.geeksforgeeks.org/confidence-intervals-for-machine-learning/).

Lorsque vous exécutez le code de l'**Exercice 1** plusieurs fois, vous pouvez observer que la valeur du **coefficient** change à chaque fois, mais remarquez également qu'elle dépasse rarement 10 000 ou descend rarement en dessous de 9 000. Quelle est la différence entre tous les **coefficients** possibles que nous pouvons obtenir en exécutant le code plusieurs fois ? Quelle est cette valeur ? C'est ce qu'on appelle l'**erreur standard**.

**[Erreur Standard](https://www.statology.org/standard-error-regression/)** - la distance moyenne à laquelle les valeurs s'écartent de la ligne de régression.

# Exemple 2 : Trouver l'Erreur Standard.

Nous pouvons utiliser la bibliothèque [StatsModels](https://www.statsmodels.org/stable/index.html) pour obtenir toutes sortes de valeurs à partir de notre régression linéaire. Exécutez le Replit ci-dessous et vous devriez voir un résultat semblable à ceci :

|![Résultat Statmodels](../resources/finding_stderror.png)|
|:--:|
|Résumé de l'exécution de Statsmodel|

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/03-e2.py" target="_blank">Lancer Replit</a>

Dans le tableau, concentrons-nous sur l'erreur standard qui est la valeur marquée **stderr**. Dans ce cas, c'est **409.40**. Cela signifie que, pour n'importe quel ensemble d'échantillons aléatoires, le **coefficient** ou **la pente** de notre ligne variera de 409.40 ou, en d'autres termes :

"Le salaire d'un employé peut varier de 409,40 $."

# Exemple 3 : La Distribution Normale

Prenons du recul et demandons-nous, parmi les coefficients ou pentes que nous pouvons voir dans l'"Exercice 2", quelle est la probabilité qu'ils se reproduisent lorsque l'on exécute le programme avec d'autres échantillons ?

L'apprentissage automatique utilise beaucoup de statistiques pour déterminer les valeurs que nous avons obtenues. Dans le domaine des statistiques, il existe un graphique utilisé pour mesurer la `probabilité` qu'une valeur apparaisse dans les données. C'est ce qu'on appelle la `Distribution Normale` ou `Courbe en cloche`, et elle ressemble à ceci :

|![Distribution Normale](../resources/normal_distribution.png)|
|:--:|
|Figure #: Distribution Normale ou Courbe en cloche|

Prenons l'exemple suivant, quelle est la probabilité de voir une personne très petite ? Quelle est la probabilité de voir une personne très grande ?

Si nous faisons cette correspondance avec une courbe en cloche, vous obtiendrez quelque chose comme ceci :

|![Distribution Normale](../resources/normal_distribution_height.png)|
|: