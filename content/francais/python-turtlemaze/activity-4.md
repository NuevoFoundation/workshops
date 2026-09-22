```markdown
---
title: "Activité 4 - Testez Nuvo à travers le labyrinthe"
date: 2025-10-13T11:00:00-04:00
weight: 4
draft: false
---

Nuvo est tout excité ! 🐢  
Il a enfin un labyrinthe à explorer — mais avant de l’envoyer à la recherche de Nuvi, aidons-le à s’entraîner à se déplacer en toute sécurité.  

Dans cette activité, vous allez **conduire manuellement Nuvo** à travers quelques virages en utilisant de simples commandes Turtle.  
C’est comme contrôler à distance votre ami tortue avec du code ! 🎮  

---

### Étape 1 : Importez vos modules et définissez la scène 🎨

Réutilisons nos fichiers de labyrinthe et d’aides précédents pour permettre à Nuvo de se déplacer à l’intérieur de son labyrinthe.

```python
import turtle
import turtlehelper as th
import maze
```

Ensuite, dessinons le labyrinthe et créons Nuvo !

```python
# Dessiner les murs du labyrinthe
maze.draw_maze()

# Créer Nuvo (notre explorateur)
nuvo = th.create_turtle_object("purple", 4, "turtle", 3)
th.set_cursor(nuvo, -20, 120)   # Début près de l’entrée du labyrinthe
```

### Étape 2 : Faites avancer Nuvo 🐾

Essayez de faire avancer un peu Nuvo à l’intérieur du labyrinthe.

```python
nuvo.forward(50)
```

Chaque fois que vous appelez forward(50), Nuvo avance de 50 pas.  
Vous pouvez expérimenter avec différents nombres — les petits pas sont plus sûrs dans les espaces étroits !

### Étape 3 : Apprenez à tourner à gauche et à droite 🔄

Pour faire tourner Nuvo, utilisez :

```python
nuvo.left(90)   # tournez à gauche
nuvo.right(90)  # tournez à droite
```

Chaque commande fait tourner Nuvo du nombre de degrés que vous spécifiez — 90 degrés correspond à un virage parfait.

Essayez ce petit parcours de test :

```python
nuvo.forward(50)
nuvo.left(90)
nuvo.forward(50)
nuvo.right(90)
nuvo.forward(50)
```

Est-ce que Nuvo se déplace comme vous vous y attendiez ?  
Sinon, ajustez les angles — par exemple, utilisez 45 ou 120 pour faire des virages diagonaux ou des angles en triangle.

### Étape 4 : Combinez des mouvements en un chemin simple 🚶‍♂️

Faisons traverser une partie du labyrinthe à Nuvo.  
Vous pouvez lui écrire un petit itinéraire :

```python
# Un essai personnalisé pour Nuvo
nuvo.forward(100)
nuvo.right(90)
nuvo.forward(80)
nuvo.left(90)
nuvo.forward(60)
```

Chaque étape correspond à une instruction de conduite :

1. « Avance de cette distance »
2. « Tourne dans cette direction »
3. « Continue à avancer »

### Étape 5 : Cachez ou réinitialisez Nuvo s’il est coincé 🔁

Si Nuvo frappe un mur ou sort du chemin — pas de problème !  
Vous pouvez le relever et recommencer.

```python
th.set_cursor(nuvo, 10, -135)
```

🌟 Défi pour vous

🧩 Essayez de créer votre propre petit parcours d’aventure !

1. Pouvez-vous faire tracer à Nuvo un carré dans le labyrinthe ?
2. Que se passe-t-il si vous tournez de 45 degrés au lieu de 90 ?
3. Pouvez-vous guider Nuvo du coin en bas à gauche au coin en haut à droite ?

<p style="text-align: center;"> <iframe src="https://codebunga.com/embed/yuftctjd" title="Activity 4 - Test Drive Nuvo Through the Maze - Codebunga editor" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe> </p>

Bravo, pilote de tortue ! 🚗💨  
Vous venez d’apprendre à contrôler la direction, la distance et les tournants — tous les outils dont vous avez besoin pour naviguer dans n’importe quel labyrinthe.

Dans la prochaine activité, nous apprendrons à Nuvo comment trouver Nuvi !!
```