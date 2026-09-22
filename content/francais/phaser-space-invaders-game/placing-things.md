---
title: "Placer des éléments dans Phaser"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 5
---

## Placer du texte

Maintenant, vous allez apprendre comment placer des éléments dans Phaser. Regardez le repl ci-dessous.

Commençons par voir comment placer du texte !

```javascript
message = this.add.text(20, 10, "Hello World!", {
	font: "25px Arial",
	fill: "white"
});
```

Ces lignes de code créent une variable nommée "message". Cette variable ajoute le texte "Hello World" aux coordonnées (X, Y) (20, 10) dans la fenêtre de notre jeu. Le code spécifie également que le texte est de couleur blanche, avec une police Arial et une taille de police de 25 px.

Mettez cette ligne dans votre méthode `create()` en bas de la page et voyez si elle apparaît dans la fenêtre de votre jeu.

{{% notice note %}}

1. Lors de la création de texte, le nom de la variable n'est pas le texte qui s'affiche à l'écran, c'est ce que vous mettez entre guillemets.
2. Cette syntaxe peut également être utilisée pour placer du texte contenu dans une variable de type chaîne de caractères (String).

{{% /notice %}}

{{% notice warning %}}

### Aide ! La fenêtre de mon jeu est très petite !

Ne vous inquiétez pas, elle est en réalité assez grande, mais repl la réduit par défaut. Vous pouvez agrandir la vue de votre fenêtre en déplaçant les barres entre elles.

{{% /notice %}}

## Placer un arrière-plan

Les textes sont très simples, mais lorsque nous voulons utiliser nos propres sprites personnalisés pour le jeu (ce que vous voudrez presque toujours), vous devez d'abord charger le sprite dans la méthode `preload()` avant d'en spécifier l'emplacement dans `create()`.

Commençons par créer un arrière-plan. Mettez ce code dans votre méthode `preload()`.

```javascript
this.load.image('background', 'assets/sky.png');
```

Cela charge simplement l'image dans le jeu. Ensuite, ajoutons cette image au jeu avec `create()` :

```javascript
this.add.image(400, 300, 'sky');
```

Cette ligne place simplement l'image aux coordonnées (400, 300). Essayez, et voyez si votre écran noir de fond a disparu !

{{% notice note %}}

Les coordonnées (400, 300) font référence à l'emplacement où nous positionnons le pixel central de notre image. Cela signifie que (400, 300) sera le centre de l'image. Nous plaçons l'image ici pour qu'elle couvre tout l'écran, comme un arrière-plan devrait le faire.

{{% /notice %}}

## Placer un personnage

Ensuite, ajoutons un personnage dans notre monde.

Le code à inclure dans votre fonction `preload()` ressemble à ceci :

```javascript
this.load.spritesheet('dude', 'assets/dude.png', {
    frameWidth: 32,
    frameHeight: 48
});
```

Cela nécessite un peu plus de code parce qu'il s'agit d'une feuille de sprites (spritesheet) plutôt qu'un simple sprite. Les feuilles de sprites ressemblent à ceci :
![dude](../media/example-dude.png)
Ceci est la feuille de sprites pour notre personnage. Les feuilles de sprites sont essentiellement une collection de sprites d'un même personnage ou objet dans plusieurs positions. Lorsque les images sont affichées successivement, elles créeront une animation pour notre jeu (ce que nous décrirons plus en détail dans la prochaine leçon). Bien qu'il soit évident pour nous qu'il s'agit d'une série d'images du même personnage, l'ordinateur n'est pas capable de le détecter facilement de lui-même. Nous devons donc ajouter plus de syntaxe pour indiquer à l'ordinateur quelles sont les dimensions de chaque sprite dans la feuille (dans ce cas, 32x48).

La syntaxe pour placer cette feuille de sprites dans `create()` est presque identique à celle utilisée pour une simple image, mais avec une étiquette de physique (physics) :

```javascript
dude = this.physics.add.sprite(250, 200, 'dude');
```

Dans cette ligne, nous créons une variable "dude" qui ajoute la première image dans la feuille de sprites aux coordonnées (250, 200). L'image reçoit également le nom "dude."

Dans cette ligne, "dude" est le nom d'une variable que nous créons. 250 et 200 sont les coordonnées X et Y où nous avons placé le sprite, ce qui signifie qu'il sera placé aux coordonnées (250, 200) sur notre écran. "dude" est le nom de notre sprite, mais cela n'aura pas d'importance dans cette leçon spécifique.

Essayez d'ajouter le personnage ! Voyez-vous le personnage sur votre écran ?

{{% notice note %}}

1. Pour voir le personnage, la variable "dude" dans `create()` DOIT être créée après l'arrière-plan. Cela est dû au fait que l'ordinateur lit le code de haut en bas, donc si le personnage est placé avant l'arrière-plan, l'ordinateur affichera l'arrière-plan par-dessus le personnage, le rendant invisible pour l'utilisateur.
2. Le "dude" est censé regarder vers la gauche, car au premier placement, les feuilles de sprites affichent toujours la première image dans la feuille, et pour notre "dude," il regarde vers la gauche.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PhasorPlacingThings" target="_blank">Lancer Replit</a>