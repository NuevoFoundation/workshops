---
title: "Les Bases - Classe et Objet"
date: 2019-07-29T13:24:17-07:00
weight: 2
draft: false
---

## Classes et objets

Avant de commencer à créer un jeu, vous devriez savoir comment dessiner différents objets et les modifier en fonction de leur apparence et de leurs mouvements à l'écran.

Pour créer des objets, vous devez d'abord décider de leur apparence, de leur rôle dans le jeu, et de la manière dont le joueur peut contrôler leurs mouvements à l'écran. Vous pouvez faire cela en créant une classe pour chaque objet que vous souhaitez afficher à l'écran.  
Avant que des objets soient créés dans un programme, vous devez définir leur classe. Une classe décrit comment un objet individuel apparaîtra et se comportera. Elle contient les attributs et les méthodes que son objet peut utiliser pendant l'exécution du programme (dans ce cas, il s'agit d'un jeu de Pong). Vous n'avez besoin de définir une classe qu'une seule fois, après quoi vous pouvez l'utiliser pour créer autant d'objets que vous le souhaitez.  

Vous ne pouvez pas utiliser une classe directement dans un programme ; une classe doit avoir un objet comme manifestation qui sera utilisé dans le programme.  
Tous les aspects liés aux éléments visuels et au mouvement sont appelés les `"attributs"` de l'objet que vous voyez à l'écran d'ordinateur.  
Tous les aspects liés au contrôle d'un objet sont appelés les `"fonctions"` de l'objet.  

Tout d'abord, définissons la classe pour la palette utilisée dans le jeu. Pour ce faire, utilisez le code suivant :

```python
class Paddle(pygame.Rect):
    def __init__(self, velocity, up_key, down_key, *args, **kwargs):
        self.velocity = velocity
        self.up_key = up_key
        self.down_key = down_key
        super().__init__(*args, **kwargs)

    def move_paddle(self, board_height):
        keys_pressed = pygame.key.get_pressed()

        if keys_pressed[self.up_key]:
            if self.y - self.velocity > 0:
                self.y -= self.velocity

        if keys_pressed[self.down_key]:
            if self.y + self.velocity < board_height - self.height:
                self.y += self.velocity
```

Essayons de comprendre ce code plus en détail.

{{% notice tip %}}

### Nommez la classe

`class Paddle(pygame.Rect)`

Voici comment vous nommez la classe `"Paddle"`. Maintenant, notez le `pygame.Rect` à l'intérieur des `()`. Vous l'avez peut-être déjà deviné : pour dessiner la palette à l'écran, il faut la dessiner comme un rectangle, puis définir ses dimensions et sa position à l'écran pour qu'elle ressemble à une palette. L'instruction `(pygame.Rect)` nous permet d'indiquer au compilateur Python qu'il doit dessiner cet objet comme un rectangle et lui fournir tous les attributs d'un rectangle, comme `WIDTH` et `HEIGHT`. Cela nous aide à utiliser tous les attributs disponibles dans la classe `Rectangle` de la bibliothèque Pygame.

### Ajoutez des attributs

`def __init__(self, velocity, up_key, down_key, *args, **kwargs):`

Vous n'avez pas besoin de vous inquiéter pour l'instant de `args` et `kwargs` - concentrez-vous simplement sur les attributs principaux de la classe `Paddle`.

La fonction `__init__` vous permet de configurer la classe avec les attributs que vous souhaitez voir dans ses objets. Vous pouvez définir des attributs supplémentaires ici en plus de ce que vous obtenez déjà depuis la classe `Rectangle`. Ajoutons des attributs comme `velocity`, `up_key`, `down_key` pour représenter la vitesse du déplacement de la palette et les touches nécessaires pour le mouvement vers le haut et vers le bas de la palette.

```python
class Paddle(pygame.Rect):
    def __init__(self, velocity, up_key, down_key, *args, **kwargs):
        self.velocity = velocity
        self.up_key = up_key
        self.down_key = down_key
        super().__init__(*args, **kwargs)
```

### Ajoutez des méthodes

`move_paddle()` est une **méthode**. Nous utilisons cette méthode pour amener la palette à effectuer des actions de mouvement. Dans ce cas, `move_paddle()` déplace la palette soit vers le haut, soit vers le bas en fonction de la touche appuyée, et à une certaine vitesse.

```python
def move_paddle(self, board_height):
        keys_pressed = pygame.key.get_pressed()
        if keys_pressed[self.up_key]:
            if self.y - self.velocity > 0:
                self.y -= self.velocity
        if keys_pressed[self.down_key]:
            if self.y + self.velocity < board_height - self.height:
                self.y += self.velocity
```

{{% /notice %}}

Maintenant que vous avez défini comment la palette doit apparaître et comment elle doit se déplacer, n'hésitez pas à jeter un œil aux classes `Ball` et `Pong`. Dans les prochaines activités, vous modifierez certains aspects de ces classes pour personnaliser le jeu de Pong selon vos préférences.