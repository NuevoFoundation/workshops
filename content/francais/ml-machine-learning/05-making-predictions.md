```markdown
---
title: "Faire des Prédictions"
prereq: "Python"
icon: ""
draft: false
weight: 5
---

# Entraîner le Modèle

Pour que notre modèle puisse prédire des valeurs, nous devons l'entraîner. Mais, comment faire cela ? Eh bien, nous l'avons déjà fait 😉 !

Entraîner un modèle consiste à vérifier qu'il existe une bonne relation entre les données et que notre modèle correspond bien aux données.

Nous avons accompli cela en nous assurant que R<sup>2</sup> est proche de 1. Maintenant, ce que nous devons faire, c'est utiliser le jeu de données de plus de 10 000 enregistrements pour créer un jeu de données d'entraînement et de test. Le jeu de données d'entraînement sera un échantillon aléatoire au lieu des 30 initialement utilisés. Selon l'Université du Texas à El Paso, prendre un échantillon de 30 % est la meilleure façon de créer un modèle précis. Si vous souhaitez en savoir plus, consultez ce lien : ([Pourquoi une relation 70/30 ou 80/20 entre les ensembles d'entraînement et de test](https://scholarworks.utep.edu/cs_techrep/1209/)).

À mesure que le nombre d'employés augmente, le jeu de données augmentera également, et la valeur de R<sup>2</sup> changera. Nous devons effectuer cette mise à jour à chaque fois que le jeu de données des 10 000+ employés augmente pour nous assurer que notre modèle reste adapté au nombre actuel d'employés.

# Faire des Prédictions

Dans le Replit ci-dessous, vous pouvez voir comment le code crée un "jeu de données d'entraînement" et un "jeu de données de test" en divisant les données du fichier contenant plus de 10 000 enregistrements et en réalisant des prédictions pour les deux ensembles de données.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/05-e1.py" target="_blank">Lancer Replit</a>

Comme vous pouvez le voir, la ligne de prédiction générée dans les deux graphiques est très similaire pour les jeux de données d'entraînement et de test. Vous pouvez également constater que le R<sup>2</sup> pour les deux jeux est presque identique, voire parfois identique.

Vous pouvez maintenant utiliser le code ci-dessous et modifier la variable `experience` à votre guise. Le graphique affichera le salaire prédit en fonction de l'expérience que vous spécifiez.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/05-e2.py" target="_blank">Lancer Replit</a>
```