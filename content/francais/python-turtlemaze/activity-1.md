```markdown
---
title: "Activité 1 - Rencontre Nuvo l'Explorateur"
date: 2025-10-12T12:00:00-04:00
weight: 1
draft: false
---

Bienvenue, jeune explorateur ! 🐢✨ Aujourd'hui, tu vas rencontrer **Nuvo**, une petite tortue curieuse qui adore les aventures. Avant que Nuvo puisse commencer à explorer la prairie et trouver Nuvi, nous devons l'aider à **apparaître à l'écran** en utilisant le **module turtle** de Python.

<img src="../media/nuvo.png" alt="Nuvo la tortue" width="25%" />

Voici ce que nous allons faire dans cette activité :

1. Importer la bibliothèque turtle et notre module utilitaire.
2. Créer Nuvo la tortue.
3. Le faire apparaître à une position de départ à l'écran.
4. Garder la fenêtre ouverte pour le voir.

Avant que Nuvo puisse explorer la prairie et le labyrinthe, il a besoin de quelques **outils utiles**. 🐢✨  
En Python, nous pouvons créer des **fonctions utilitaires** — de petites instructions qui rendent le codage plus simple et plus rapide.

Aujourd'hui, nous allons découvrir **deux outils magiques** du fichier `turtlehelper.py` :

1. **`create_turtle_object()`** — crée rapidement une nouvelle tortue.
2. **`set_cursor()`** — déplace une tortue à n'importe quelle position sur l'écran.

---

### 🌟 Étape 1 : La fonction `set_cursor()`

Cette fonction **déplace une tortue à n'importe quelle position** sur l'écran.

```python
def set_cursor(t, x, y, isPenDown=True):
    t.penup()            # Lève le crayon pour qu'il ne dessine pas
    t.goto(x, y)         # Déplace la tortue à (x, y)
    if isPenDown:        # Si vrai, pose le crayon pour dessiner
        t.pendown()
    return
```

{{% notice info %}}

🔍 Explication

1. t.penup() – lève le crayon de la tortue pour qu'elle ne trace pas de ligne pendant qu'elle se déplace.
2. t.goto(x, y) – déplace la tortue aux coordonnées (x, y) sur l'écran. Les `x` et `y` dans la méthode `t.goto()` sont les coordonnées de la tortue. Nous voulons changer les coordonnées `x` et `y` de la tortue de `(0, 0)`, qui est le centre de l'image, à une position un peu plus éloignée pour que Nuvo puisse naviguer dans le labyrinthe et que Nuvi puisse s'y cacher.
3. if isPenDown: – vérifie si nous voulons que la tortue recommence à dessiner.
4. t.pendown() – pose le crayon pour qu'il puisse dessiner.
5. return – termine la fonction (facultatif, mais une bonne pratique).

{{% /notice %}}

### 🌟 Étape 2 : La fonction create_turtle_object()

Cette fonction crée une nouvelle tortue avec des paramètres personnalisés, comme la couleur, la taille, la forme et la vitesse.

```python
def create_turtle_object(color_name=None, size=None, turtle_shape=None, speed=None):
    t = turtle.Turtle()       # Crée une nouvelle tortue
    if color_name:
        t.color(color_name)   # Définir la couleur du crayon
    if size:
        t.pensize(size)       # Définir l'épaisseur du crayon
    if turtle_shape:
        t.shape(turtle_shape) # Définir la forme de la tortue (flèche, tortue, cercle, etc.)
    if speed:
        return t
    t.speed(speed)            # Définir la vitesse de déplacement de la tortue
    return t
```

{{% notice info %}}

🔍 Explication

1. t = turtle.Turtle() – crée un nouvel objet tortue.
2. if color_name: – définit la couleur du crayon si spécifiée.
3. if size: – définit l'épaisseur des lignes.
4. if turtle_shape: – choisit l'apparence de la tortue.
5. if speed: – définit la vitesse de la tortue.
6. return t – renvoie la tortue pour que nous puissions l'utiliser dans notre code.

{{% /notice %}}

### 🌟 Étape 3 : Créons une tortue de texte pour que Nuvo affiche des messages

```python
# Créer l'objet texte de Nuvo (pour afficher des messages plus tard)
text = th.create_turtle_object("black", 4, "arrow")
text.hideturtle()  # Cacher l'icône de la tortue
th.set_cursor(text, 0, 160, False)
text.write("Bienvenue dans le Conte de Nuvo et Nuvi", align="center", font=("Comic Sans MS", 14, "bold"))
th.set_cursor(text, 0, 140, False)
text.write("La Grande Aventure dans le Labyrinthe", align="center", font=("Comic Sans MS", 14, "bold"))
```

{{% notice info %}}

🔍 Explication

1. text.hideturtle() – cache la tortue pour que seul le texte soit visible.
2. text.write() – affiche un message à l'écran.
3. set_cursor positionne le texte au bon endroit.
4. align="center" – aligne le texte au centre de l'emplacement de la tortue. Autres options : "left" ou "right".
5. font=("Comic Sans MS", 14, "bold") – contrôle le style du texte : "Comic Sans MS" → type de police, 14 → taille de la police et "bold" → épaisseur de la police (peut aussi utiliser "normal" ou "italic").

{{% /notice %}}

{{% notice tip %}}
💡 Astuce de Nuvo :  
Les fonctions utilitaires, c'est comme offrir un sac à dos magique à votre tortue — il contient toutes les instructions pour garder le code propre et facile.

Amuse-toi à changer le texte, la taille de la police ou l'alignement pour voir le résultat.
{{% /notice %}}

### 🌟 Étape 4 : Créons Nuvo & Nuvi

Faisons vivre nos héros en utilisant la fonction utilitaire que nous avons créée plus tôt !

```python
# Créer nos amis tortues
nuvo = th.create_turtle_object("green", 3, "turtle", 6)
nuvi = th.create_turtle_object("purple", 3, "turtle", 6)
```

{{% notice info %}}

🔍 Explication

1. "green" et "purple" – choisissez leurs couleurs.
2. 3 – épaisseur des lignes (taille du crayon).
3. "turtle" – donne une