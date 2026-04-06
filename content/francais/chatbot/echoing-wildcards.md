---
title: "Écho des Cartes Sauvages"
draft: false
weight: 9
---

## Introduction de la balise ```<star />```
Apprenons un autre outil pour permettre à notre chatbot de donner des réponses plus intéressantes. Dans la leçon précédente, nous avons appris à utiliser le caractère générique ```*``` pour correspondre à n'importe quel mot ou phrase. Mais que se passe-t-il si nous voulons utiliser le mot ou la phrase que l'utilisateur a saisie dans notre réponse ? Par exemple, si l'utilisateur nous dit quelle est sa couleur préférée, nous voulons que la réponse du bot inclue la couleur préférée de l'utilisateur. Nous pouvons faire cela en utilisant la balise ```<star />```.

La balise ```<star />``` est une balise spéciale qui nous permet d'utiliser le mot ou la phrase saisie par l'utilisateur dans notre réponse. Voyons comment cela fonctionne.

```
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        Your favorite color is <star />.
    </template>
</category>
```

Examinons comment cette catégorie fonctionne. Le modèle "MY FAVORITE COLOR IS *" correspondra à toute entrée qui commence par "MY FAVORITE COLOR IS" suivi de n'importe quel mot ou phrase. Par conséquent, le modèle correspondra à "MY FAVORITE COLOR IS BLUE", "MY FAVORITE COLOR IS RED", "MY FAVORITE COLOR IS GREEN" et ainsi de suite. La balise ```<star />``` capturera le mot ou la phrase que l'utilisateur a saisie et l'utilisera dans la réponse. Donc, si l'utilisateur entre "MY FAVORITE COLOR IS BLUE", "blue" est le mot représenté par le caractère générique et quand le chatbot répond, ```<star />``` sera remplacé par "blue". Le bot répondra "Your favorite color is blue".

<img src="../img/sentence_response.png" alt="" width="27%" />

Voici quelques exemples supplémentaires d'entrées et de sorties pour cette catégorie :

Entrée | Sortie 
---|--------------
MY FAVORITE COLOR IS BLUE | Your favorite color is blue.
MY FAVORITE COLOR IS RED | Your favorite color is red.
MY FAVORITE COLOR IS GREEN | Your favorite color is green.