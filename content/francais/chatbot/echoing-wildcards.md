---
title: "Faire Écho aux Jokers"
draft: false
weight: 9
---

## Introduction à la balise ```<star />```
Apprenons un outil de plus pour permettre à notre chatbot d'avoir des réponses plus intéressantes. Dans la leçon précédente, nous avons appris comment utiliser le joker ```*``` pour correspondre à n'importe quel mot ou phrase. Mais que se passe-t-il si nous voulons utiliser le mot ou la phrase saisie par l'utilisateur dans notre réponse ? Par exemple, si l'utilisateur nous dit quelle est sa couleur préférée, nous voulons que la réponse du bot inclue la couleur préférée de l'utilisateur. Nous pouvons faire cela en utilisant la balise ```<star />```.

La balise ```<star />``` est une balise spéciale qui nous permet d'utiliser le mot ou la phrase saisi(e) par l'utilisateur dans notre réponse. Voyons comment cela fonctionne.

```
<category>
    <pattern>MA COULEUR PRÉFÉRÉE EST *</pattern>
    <template>
        Ta couleur préférée est <star />.
    </template>
</category>
```

Décryptons comment cette catégorie fonctionne. Le modèle "MA COULEUR PRÉFÉRÉE EST *" correspondra à toute entrée qui commence par "MA COULEUR PRÉFÉRÉE EST" suivie de n'importe quel mot ou phrase. Ainsi, le modèle correspondra à "MA COULEUR PRÉFÉRÉE EST BLEU", "MA COULEUR PRÉFÉRÉE EST ROUGE", "MA COULEUR PRÉFÉRÉE EST VERT", et ainsi de suite. La balise ```<star />``` capturera le mot ou la phrase saisi(e) par l'utilisateur et l'utilisera dans la réponse. Donc, si l'utilisateur saisit "MA COULEUR PRÉFÉRÉE EST BLEU", "bleu" est le mot représenté par le joker. Ainsi, lorsque le chatbot répond, ```<star />``` est remplacé par "bleu". Le bot répondra "Ta couleur préférée est bleu".

<img src="../img/sentence_response.png" alt="" width="27%" />

Voici quelques exemples d'entrées et de sorties basés sur cette catégorie :

Entrée | Sortie 
---|-----------------
MA COULEUR PRÉFÉRÉE EST BLEU | Ta couleur préférée est bleu.
MA COULEUR PRÉFÉRÉE EST ROUGE | Ta couleur préférée est rouge.
MA COULEUR PRÉFÉRÉE EST VERT | Ta couleur préférée est vert.
