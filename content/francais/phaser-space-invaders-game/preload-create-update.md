---
title: "Précharger, Créer et Mettre à Jour"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 4
---

## Les méthodes Précharger, Créer et Mettre à Jour

Regardons maintenant nos scènes, qui contiendront finalement le code de notre jeu. Si vous parcourez, vous verrez que chaque scène a un constructeur (puisque c'est une classe), ainsi que trois grandes méthodes : `preload()`, `create()`, `update()`. Il y a également un certain nombre de fonctions auxiliaires dans la Scène 2, mais nous allons parler des trois méthodes mentionnées précédemment car elles sont essentielles pour comprendre Phaser.

Avec la façon dont nous avons configuré les scènes, preload() et create() se trouvent dans la Scène 1, et create() et update() se trouvent dans la Scène 2. Ces trois fonctions sont les principaux outils qu'utilisera tout jeu utilisant Phaser.

## Preload()

Commençons par décrire preload() - cette fonction charge essentiellement des éléments dans notre jeu. Cela peut être des images, des variables et pratiquement tout ce que vous souhaitez définir pour que votre jeu puisse l'utiliser. Les éléments chargés dans le jeu avec preload() ne sont PAS réellement utilisés ou placés quelque part dans le jeu tant que vous ne les utilisez pas plus tard. Vous pouvez considérer cette méthode comme un espace de stockage qui est rempli une seule fois avant le début du jeu. La plupart des choses doivent être placées dans preload() avant d'être utilisées n'importe où dans le jeu.

## Create()

Ensuite, il y a create(). Cette fonction est également relativement simple - elle s'exécute une seule fois au début du jeu et permet à l'utilisateur de placer les éléments qu'il a préchargés avec preload() et de créer des objets dans notre jeu, tels que des animations, des détecteurs de collision, du texte, des groupes, et bien plus encore.

## Update()

Enfin, la dernière fonction est update(). Alors que preload() et create() ne s'exécutent qu'une seule fois au démarrage du jeu, update() s'exécute constamment.

{{% notice info %}}
En jouant à des jeux, vous avez peut-être rencontré le terme "FPS". Cela fait référence aux "images par seconde" d'un jeu, ou à la fréquence à laquelle une nouvelle image est mise à jour à l'écran. Une image correspond essentiellement à un seul appel à la méthode update(). Phaser fonctionne généralement à 60 FPS, ce qui signifie que la méthode update() est appelée 60 fois en une seule seconde !
{{% /notice %}}

La méthode update() est utilisée de différentes manières. L'une d'entre elles consiste à gérer les mouvements - si nous attribuons un mouvement à un objet dans update(), alors lorsque nous jouons au jeu, cela donnera l'impression que l'objet se déplace de manière fluide, car update() est appelée si souvent que nous ne voyons pas les pauses entre chaque mouvement. Nous pouvons également utiliser update() pour vérifier constamment si une entrée a été donnée. Par exemple, si nous voulons que le joueur puisse tirer lorsqu'il appuie sur la barre d'espace, nous pouvons utiliser une instruction if qui vérifie la barre d'espace dans la fonction update(), de sorte que le jeu vérifie constamment cette action.