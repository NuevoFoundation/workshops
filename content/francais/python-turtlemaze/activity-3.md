```markdown
---
title: "Activité 3 - Dessiner les Murs Internes du Labyrinthe"
date: 2025-10-13T10:30:00-04:00
weight: 3
draft: false
---

Nuvo et Nuvi sont prêts à commencer leur aventure ! 🐢✨  
Mais avant de pouvoir explorer, ils ont besoin d’un **labyrinthe** — rempli de détours et de méandres.  
Dans cette activité, nous allons dessiner les **murs internes** du labyrinthe en utilisant Python Turtle.

---

### Étape 1 : Ajouter des passages internes au labyrinthe 🌀

Ajoutons quelques passages pour que Nuvo puisse s’y aventurer.  
Vous pouvez continuer à utiliser set_cursor() pour sauter à de nouveaux emplacements de départ sans dessiner de lignes indésirables.

```python
th.set_cursor(maze_drawer, -120, 70)
maze_drawer.left(90)
maze_drawer.forward(30)
maze_drawer.right(90)
maze_drawer.forward(30)
maze_drawer.left(90)
maze_drawer.forward(150)
```

{{% notice info %}}

Chaque fois que vous souhaitez dessiner un nouveau mur ailleurs,  
il suffit de déplacer la tortue avec set_cursor() — pas besoin de tout recommencer !

{{% /notice %}}

<p style="text-align: center;"><iframe src="https://codebunga.com/embed/a4i3d3pk" title="Activité 3 - Dessiner les Murs Internes du Labyrinthe - Éditeur Codebunga 1" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></p>

#### 🌟 Défi pour vous

Les murs ne sont pas que des barrières — ils sont des invitations à explorer.  
Ajoutez des détours, des tournants et des chemins cachés pour que chaque pas soit une découverte excitante.

Voici un exemple de labyrinthe pour votre référence :

<p style="text-align: center;"><iframe src="https://codebunga.com/embed/3s58emjh" title="Activité 3 - Dessiner les Murs Internes du Labyrinthe - Éditeur Codebunga 2" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe></p>

### Étape 2 : C'est le moment de cacher Nuvi dans le labyrinthe

Cachons Nuvi dans le labyrinthe pour que Nuvo puisse la retrouver.

```python
nuvi = th.create_turtle_object("green",5,"turtle",1)
th.set_cursor(nuvi,10,-135)
nuvi.right(90)
nuvi.right(90)
```

Excellent travail, Maître du Labyrinthe ! 🏆  
Vous venez de créer le labyrinthe pour l’aventure.

Dans l’Activité 4, Nuvo commencera à se déplacer dans le labyrinthe et vous le guiderez vers Nuvi en utilisant la logique et les tournants !
```