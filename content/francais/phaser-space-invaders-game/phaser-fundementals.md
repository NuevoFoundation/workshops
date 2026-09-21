---
title: "Fondamentaux de Phaser"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 3
---

## Partie 1 : La variable Config

Passons en revue quelques fondamentaux de Phaser, un framework de jeu qui utilise HTML et JavaScript pour créer des jeux pour le web ! C'est ce que vous apprendrez à utiliser dans cet atelier.

Allez dans `game.js`. Chaque jeu Phaser commence par une variable qui contient les configurations du jeu (généralement nommée `config` comme nous l'avons fait ici).

```javascript
var config = {
  type: Phaser.AUTO,
  width: 512,
  height: 544,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2],

	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
};
```

Dans cette variable, vous remarquerez que nous avons défini diverses caractéristiques de notre jeu telles que la largeur, la hauteur et la couleur d'arrière-plan. Nous avons également défini les scènes que nous utiliserons (plus d'informations sur les scènes un peu plus loin). Vous pouvez également créer un jeu sans scènes et simplement placer tout le code dans le fichier `game.js`.

Vous remarquerez également que nous définissons la physique du jeu dans la configuration. Dans la conception de jeux, la physique est l'un des aspects les plus essentiels qui définit la "sensation" d'un jeu. Par exemple, la physique rebondissante de Mario lui donne une sensation distincte propre à "Mario". Pour notre jeu, vous pouvez voir que nous utilisons la physique "arcade", un type de physique dans Phaser très simple à utiliser. Notez également que dans notre configuration physique, nous définissons la gravité à 0, car notre jeu est un Space Shooter et nous n'avons pas besoin de gravité qui ferait chuter nos personnages.

À la fin de `game.js`, vous pouvez voir que nous transmettons la variable `config` à une variable `game`, quelque chose qui est également presque toujours nécessaire dans un jeu Phaser.

## Partie 2 : Les Scènes

Maintenant, parlons un peu des scènes. Une scène est essentiellement un état du jeu dans lequel l'utilisateur évolue. C'est mieux compris à travers un exemple :

Prenons la célèbre franchise de jeux, Pokémon. Lorsque vous jouez, vous vous promenez souvent dans le monde. Lorsque vous rencontrez un dresseur ou un Pokémon sauvage dans les hautes herbes, vous entrez dans une scène différente où vous pouvez combattre. Une fois le combat terminé, vous pouvez ouvrir votre carte pour voir où aller ensuite - cela ouvre également une scène différente. Ces trois scènes fonctionnent de manière complètement différente et ont leurs propres mécaniques. Lorsque vous quittez la carte, le jeu revient à la scène du monde où vous explorez en tant que joueur. Et lorsque vous engagez un combat, vous basculez vers la scène de combat. Vous pouvez voir comment créer ces trois états de jeu serait complètement différent - le combat nécessite un menu, le monde demande un espace 2D et un joueur, et la carte est essentiellement un graphique interactif. Nous séparons ces éléments en scènes car elles doivent être construites de manière totalement différente.

Vous pouvez imaginer l'utilisateur se déplaçant entre les scènes en jouant au jeu. Il utilise seulement une scène à la fois, et chaque scène est presque comme un mini-jeu (bien qu'il y ait généralement une scène principale qui n'est pas tout à fait un "mini-jeu").

{{% notice info %}}

Techniquement, nous pourrions utiliser une seule scène pour ces trois états de jeu si nous le voulions (la manière de diviser un jeu en scènes dépend du concepteur de jeux). C'est techniquement possible de le faire. Cependant, créer des scènes séparées rendra le codage beaucoup plus simple (dans ce cas, il est même difficile d'imaginer comment tout placer dans une seule scène sans simplement empiler les visuels les uns sur les autres).
{{% /notice %}}

Voici un autre exemple de manière très courante d'utiliser des scènes : un écran de titre.

![Écran de titre du jeu Outliers](../media/title-game.png)

La première scène affiche simplement un écran de titre qui contient souvent des éléments comme les paramètres, le chargement d'une sauvegarde, et plus encore. Une fois que le joueur clique sur "jouer", il passe à une scène différente où il jouera réellement dans le jeu.

C'est exactement ce que nous allons faire. La Scène 1 contiendra un écran de titre, et la Scène 2 contiendra le gameplay proprement dit. Ainsi, la Scène 2 comportera la majorité des lignes de code, et ce sera là que vous ferez la majeure partie de votre travail.

# Partie 3 : Canvas Infini

Lorsque vous démarrez le jeu sur le replit, vous pouvez voir un canvas vierge sur votre écran, où vous allez éventuellement placer des éléments. Cependant, vous ne voyez qu'une partie du canvas total - en réalité, le canvas est infini dans toutes les directions. Le canvas fonctionne de la même manière dans toutes les sections - cela signifie que des objets peuvent se déplacer et être placés dans des parties du canvas que l'utilisateur ne peut pas voir. Cela deviendra important pour notre jeu, car nous ne voulons pas vraiment que les choses sortent de l'écran, nous devrons donc limiter nos objets à rester sur l'écran ou les supprimer s'ils en sortent.