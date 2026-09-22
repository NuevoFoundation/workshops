---
title: "TensorFlow : Bases de l'apprentissage automatique"
description: "Apprenez la classification d'images de base et entraînez des modèles d'apprentissage automatique avec TensorFlow"
date: 2020-09-09T16:19:17-07:00
prereq: "Bases de Python"
image: ""
draft: false
icon: "fab fa-python"
language: "python"
topics: ["ai"]
difficulties: ["intermédiaire"]
---

## Bienvenue dans TensorFlow !

Dans cet atelier, nous utiliserons la bibliothèque Python TensorFlow pour entraîner un modèle de réseau neuronal capable de reconnaître et de classer différents types de vêtements. Nous allons examiner les étapes qui permettent au modèle de faire une prédiction pour la catégorie la plus adaptée d'une image spécifiée.

Vous pouvez également utiliser [cette vidéo](https://www.youtube.com/watch?v=FiNglI1wRNk) pour suivre cet atelier et mieux comprendre ce qui est abordé.

Les vidéos ci-dessous couvrent tout le code et les activités ; nous vous recommandons donc de réaliser les activités en premier avant de consulter les solutions guidées.

<iframe width="560" height="315" src="https://www.youtube.com/embed/6FfxBNRn0Ww" title="Python: Bases de l'apprentissage automatique avec TensorFlow - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Premiers pas avec Google Colab
Visitez [Google Colab](https://colab.research.google.com/), un environnement de programmation en ligne similaire à Google Docs mais conçu pour exécuter du code. Après vous être connecté à votre compte Google, cliquez sur l'option pour créer un "Nouveau Notebook". Pour exécuter le code que vous complétez dans cet atelier, cliquez sur le bouton "Lecture" à gauche. 

Nous vous recommandons d'organiser votre code en créant un nouveau bloc pour chaque segment de code utilisé dans les activités tout au long de l'atelier. Assurez-vous également de lire les commentaires dans les blocs de code pour mieux comprendre ce que chaque segment de code fait.

{{% notice warning %}}
## Compte Google requis

Pour utiliser Google Colab afin d'éditer et d'exécuter du code, vous devez être connecté à votre compte Google (ou compte scolaire avec accès aux services Google/Google Drive).

## Vous n'avez pas de compte Google ?
Si vous n'avez pas de compte Google et que vous ne pouvez pas en créer un, veuillez contacter l'un des administrateurs de Nuevo Foundation pour obtenir un accès temporaire à un compte Nuevo exclusivement pour cet atelier. Veuillez garder à l'esprit que Google Colab est requis pour cet atelier afin de pouvoir exécuter tout le code.

{{% /notice %}}

{{% notice note %}}
Lorsque vous exécutez votre code pour la première fois, assurez-vous de le lancer en cliquant sur _Runtime -> Run all_ dans la barre de menu pour exécuter tous vos extraits de code dans leur ordre séquentiel. Cela évite d'exécuter par accident des fonctions sans avoir d'abord importé les bibliothèques !
![Introduction Colab](media/colab_intro.png "Introduction Colab")

{{% /notice %}}

## Table des matières
<details>
<summary>Sections</summary>
{{% children /%}}
</details>

<br>

<a href="https://www.tensorflow.org/tutorials/keras/classification" target="_blank">Références</a>