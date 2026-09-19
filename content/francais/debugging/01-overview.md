---
title: "Un Aperçu du Débogage"
difficulties: ["intermédiaire"]
weight: 2
draft: false
---

Il existe de nombreuses façons de déboguer un programme. Dans ce guide, nous commencerons par quelques étapes générales afin que vous ne soyez pas perdu(e) lorsque vous déboguez un programme. Il y a 3 étapes de base pour déboguer un programme :

1. **Identifier le problème**. Dans cette étape, votre objectif est d’identifier ce qui cause le bug. Cela implique de trouver les conditions qui ont conduit au bug. Être capable de reproduire le bug vous donne certaines des informations dont vous avez besoin, ce qui vous permet de cerner le problème et peut-être de comprendre pourquoi le bug se produit en premier lieu.

2. **Trouver une solution**. Dans cette étape, votre objectif est de corriger le bug. Parfois, c'est l’étape la plus simple, mais d'autres fois elle est difficile, car vous pourriez découvrir que la logique de votre programme était incorrecte dès le départ ! Cette étape, combinée avec l’étape 3, peut facilement prendre le plus de temps.

3. **Tester la solution**. Si votre correction ne résout pas réellement le bug, à quoi bon ? Vous devez également vous assurer que votre correction n’introduit pas d'autres bugs. Cette étape peut être aussi simple que de recompiler et d’exécuter à nouveau le programme une fois que vous avez appliqué la correction. Ou bien, cela peut impliquer d’exécuter toute une suite de tests automatisés dans un environnement. Quoi qu’il en soit, l’objectif de cette étape est d’établir la *correction* du programme.

On peut dire que la partie la plus frustrante du débogage est l’étape 1. En tant que programmeurs, notre travail est d’écrire du code, mais nous ne pouvons pas écrire de code pour résoudre le problème si nous ne savons pas quel est le problème en premier lieu ! Ainsi, la majeure partie de cet atelier se concentrera sur la recherche des endroits où un bug pourrait se cacher, ainsi que sur la manière dont vous pouvez utiliser certains outils pour vous aider dans votre recherche.