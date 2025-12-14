---
title: "Faire écho aux caractères génériques"
draft: false
weight: 9
---

## Introduction de la balise ```<star />```
Apprenons un nouvel outil pour permettre à notre chatbot d'avoir des réponses plus intéressantes. Nous avons appris dans la leçon précédente comment utiliser le caractère générique ```*``` pour correspondre à n'importe quel mot ou phrase. Mais que faire si nous voulons utiliser le mot ou la phrase que l'utilisateur a entré dans notre réponse ? Par exemple, si l'utilisateur nous dit quelle est sa couleur préférée, nous voulons que la réponse du bot inclue la couleur préférée de l'utilisateur. Nous pouvons faire cela en utilisant la balise ```<star />```.

La balise ```<star />``` est une balise spéciale qui nous permet d'utiliser dans notre réponse le mot ou la phrase que l'utilisateur a entré. Voyons comment cela fonctionne.

```
<category>
    <pattern>MA COULEUR PRÉFÉRÉE EST *</pattern>
    <template>
        Votre couleur préférée est <star />.
    </template>
</category>
```

Analysons comment cette catégorie fonctionne. Le modèle "MA COULEUR PRÉFÉRÉE EST *" correspondra à toute entrée qui commence par "MA COULEUR PRÉFÉRÉE EST" suivie de n'importe quel mot ou phrase. Ainsi, le modèle correspondra à "MA COULEUR PRÉFÉRÉE EST BLEU", "MA COULEUR PRÉFÉRÉE EST ROUGE" et "MA COULEUR PRÉFÉRÉE EST VERT", et ainsi de suite. La balise ```<star />``` capturera le mot ou la phrase que l'utilisateur a entré et l'utilisera dans la réponse. Donc, si l'utilisateur entre "MA COULEUR PRÉFÉRÉE EST BLEU", "bleu" est le mot représenté par le caractère générique, donc lorsque le chatbot répond, ```<star />``` sera remplacé par "bleu". Le bot répondra avec "Votre couleur préférée est bleu".

<img src="../img/sentence_response.png" alt="" width="27%" />

Voici quelques exemples supplémentaires d'entrées et de sorties de cette catégorie :

Entrée | Sortie 
---|--------------
MA COULEUR PRÉFÉRÉE EST BLEU | Votre couleur préférée est bleu.
MA COULEUR PRÉFÉRÉE EST ROUGE | Votre couleur préférée est rouge.
MA COULEUR PRÉFÉRÉE EST VERT | Votre couleur préférée est vert.