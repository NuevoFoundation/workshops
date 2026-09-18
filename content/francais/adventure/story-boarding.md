---
title: "Section 1 : Création d’un scénario"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 1
difficulties: ["intermédiaire"]
prereq: "Bases de Python - Écriture dans la console (Print), Lecture depuis la console, Chaînes, Variables, Instructions conditionnelles"
---

## Temps de créer

Il est temps de commencer à créer nos propres histoires avec toutes les compétences que nous avons apprises aujourd’hui ! La question que nous abordons aujourd’hui est comment impliquer le public dans l’intrigue, et la réponse est le CODE !

Pour commencer, prenez une feuille de papier et commencez à "créer un scénario". Qu’est-ce que cela signifie ? Afin de développer une excellente histoire qui permet au lecteur de choisir entre différentes options, vous pouvez esquisser le déroulement de votre histoire. C’est une étape de planification importante qui vous aidera énormément une fois que vous commencerez à coder !

Je commencerais par les 3 ou 4 choix principaux que votre protagoniste va faire dans l’histoire. À partir de là, dessinez des flèches pour montrer comment les différents choix de votre protagoniste influencent l’histoire.

## Exemple de Nuvi

Voici un exemple de création de scénario !  
Les 4 choix principaux que le protagoniste devra faire sont :

1. Rentrera-t-il à pied après l’entraînement de robotique ?  
2. Reviendra-t-il à vélo après l’entraînement de robotique ?  
3. Jouera-t-il au football avec ses amis à la maison ?  
4. Irait-il nager avec ses amis à la maison ?

Voici le scénario qui en résulte :

![#Impossible de trouver l’image](../img/story.png)

Maintenant, il est intéressant de marquer les différentes sections du scénario pour les faire correspondre aux différents concepts de codage que nous avons appris. Si notre histoire doit prendre une décision, dans notre code, nous utiliserons les instructions `if`-`else`. Si nous demandons au public de fournir une entrée pour prendre des décisions dans notre histoire, nous utiliserons **les entrées utilisateur**. L’histoire réelle que le public lira est composée de **variables de texte (chaînes)** !

Annotons le scénario en conséquence ! Voici à quoi cela ressemble :

![#Impossible de trouver l’image](../img/annotated.png)

Il est vraiment utile d’annoter votre scénario pour savoir quels concepts liés au code nous pouvons utiliser ! Nous voyons que l’intrigue sera composée de texte ou de variables de type `string`. L’entrée utilisateur peut être le lecteur tapant s’il veut "marcher" ou "faire du vélo" ou choisir entre "football" et "nager". L’utilisateur peut choisir son histoire en fonction des informations qu’il donne à l’ordinateur ! Les différents chemins que Nuvi peut emprunter sont une série de décisions. Heureusement, nous avons appris à utiliser les instructions `if`–`else`, ce qui permet à Nuvi de choisir facilement les différents chemins que l’histoire peut prendre !