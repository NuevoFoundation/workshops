```markdown
---
title: "Python : Apprentissage Automatique"
description: "Bases de l'Apprentissage Automatique"
prereq: "Aucun"
draft: false
language: "python"
topics: ["ai"]
difficulties: ["débutant"]
---

## Apprenons l'apprentissage automatique pour évaluer les notes globales des joueurs dans le jeu vidéo FIFA

L'apprentissage automatique est la science qui étudie les *algorithmes* et les *modèles* qui permettent aux ordinateurs de reconnaître des choses, de prendre des décisions, voire de prédire des résultats sans instructions explicites. Par exemple, lorsque vous parlez à votre assistant vocal comme Siri ou Cortana, l'apprentissage automatique aide à traduire votre voix en texte et à comprendre ce que vous avez demandé. Fascinant, non ?

Aujourd'hui, nous allons vous montrer comment *apprendre* à un ordinateur à évaluer les notes globales des joueurs de football en fonction de leurs attributs, étape par étape.

C'est parti !

## Un peu de contexte

Supposons qu'il existe une formule pour calculer les notes "globales" des joueurs de football par EA Sports (le développeur de FIFA 2019). Avec cette formule, nous pourrions facilement calculer les notes globales de n'importe quel joueur, même s'il/elle n'est pas dans le jeu. Le problème est que nous ne savons pas exactement à quoi ressemble cette formule. <br>
Nous connaissons les *données d'entrée* constituées des attributs des joueurs et les *résultats* qui sont les notes globales. Nous pouvons alors utiliser une approche appelée "régression" pour "estimer" la formule basée sur ces entrées/sorties.

Aujourd'hui, nous allons utiliser un modèle simple appelé Régression Linéaire. 
Supposons que la formule pour calculer les notes globales d'un joueur de football \( y = f(x)\) est
\[
    f(x) = ax + b
\]
La régression linéaire vise à déterminer \(a\) et \(b\). La formule (f(x)) est appelée "modèle" en apprentissage automatique, et le processus de résolution/estimation du modèle est appelé "entraînement" du modèle. Une fois que nous avons entraîné le modèle, nous pouvons l'utiliser pour prédire la cible \(y\) pour de nouvelles données.

Pour revenir à notre exemple, s'il n'y a qu'une seule variable \(x\), estimer \(f(x)\) serait facile. Tout le monde devrait pouvoir le résoudre avec un stylo et une feuille de papier. Cependant, lorsque \(x\) est une longue liste d'attributs des joueurs de football comme la vitesse, la puissance, les passes, les tacles, cela devient complexe. La formule devrait alors être réécrite comme suit :
\[
    f(x_1, x_2, ..., x_n) = a_1 * x_1 + a_2 * x_2 + ... + a_n * x_n + b
\]
Ensuite, nous devons fournir au modèle beaucoup de données de haute qualité pour que le modèle se rapproche davantage de la formule "réelle". Commençons !

## Table des Matières

<details close>
<summary>Table des Matières</summary>
{{% children /%}}
</details>
```