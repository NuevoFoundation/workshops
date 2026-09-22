```markdown
---
title: "Activité 2 - Dessiner les murs du Grand Labyrinthe"
date: 2025-10-13T10:30:00-04:00
weight: 2
draft: false
---

Nuvo et Nuvi sont prêts à commencer leur aventure ! 🐢✨  
Mais avant de pouvoir explorer, ils ont besoin d’un **labyrinthe** — plein de virages et de détours.  
Dans cette activité, nous allons aider Nuvo à dessiner les **murs** du labyrinthe en utilisant Python Turtle.

---

### Étape 1 : Importer vos assistants et créer un dessinateur de labyrinthe 🧰

Nous allons réutiliser notre module d’assistance spécial afin de positionner facilement la tortue et de garder notre code soigné.

```python
import turtle
import turtlehelper as th
```

Maintenant, créons une nouvelle tortue qui dessinera les murs du labyrinthe.

```python
# Créer une tortue pour dessiner le labyrinthe
maze_drawer = th.create_turtle_object("black", 3, "arrow", 0)
```

{{% notice info %}}

🔍 Explication

1. "black" → couleur des lignes du labyrinthe  
2. 3 → épaisseur du crayon  
3. "arrow" → forme qui montre la direction de la tortue  
4. 0 → vitesse de dessin la plus rapide (0 est instantané)  

{{% /notice %}}

### Étape 2 : Choisir le point de départ 🎯

Avant de dessiner, nous déplaçons notre tortue au bon endroit.

```python
th.set_cursor(maze_drawer, 0, 100)
```

{{% notice info %}}

🔍 Explication

1. Cela indique à la tortue de :  
2. lever son crayon (pour ne pas dessiner en se déplaçant)  
3. se déplacer vers (x = 0, y = 100)  
4. puis de reposer le crayon  

{{% /notice %}}

### Étape 3 : Commencer à dessiner le mur extérieur 🧱

Maintenant, le labyrinthe commence à prendre forme !

```python
maze_drawer.forward(150)
maze_drawer.right(90)
maze_drawer.forward(250)
maze_drawer.right(90)
maze_drawer.forward(300)
maze_drawer.right(90)
maze_drawer.forward(250)
maze_drawer.right(90)
maze_drawer.forward(110)
maze_drawer.right(90)
maze_drawer.forward(30)
```

{{% notice info %}}

🧩 Que se passe-t-il ici ?

1. forward(150) → avance de 150 pas  
2. right(90) → tourne à droite de 90 degrés (comme un coin carré)  
3. Chaque paire de « forward + turn » dessine un côté du labyrinthe.  

{{% /notice %}}

### Étape 5 : Masquer le constructeur et admirer le labyrinthe 👀

```python
maze_drawer.hideturtle()
```

Maintenant, vous pouvez voir les contours du labyrinthe clairement sans que la flèche ne gêne.

#### 🌟 Défi pour vous  

Changez la couleur du labyrinthe pour quelque chose de plus amusant, comme « brown » ou « darkgreen ».  

Rendez vos murs plus épais ou plus fins en ajustant la taille du crayon.  

Essayez de créer des chemins supplémentaires — pouvez-vous créer un raccourci secret pour Nuvi ?

<p style="text-align: center;"><iframe src="https://codebunga.com/embed/8sanyhiu" title="Activité 2 - Dessiner les murs du Grand Labyrinthe - Éditeur Codebunga" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></p>

Excellent travail, Maître du Labyrinthe ! 🏆  
Vous venez de créer la scène pour l’aventure.

Dans l’Activité 3, vous allez construire l'intérieur du labyrinthe et cacher Nuvi dedans. Cela prépare le terrain pour que Nuvo commence à explorer et à chercher Nuvi !
```