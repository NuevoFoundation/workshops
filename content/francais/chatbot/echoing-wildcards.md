```markdown
---
title: "Faire Écho aux Caractères Génériques"
draft: false
weight: 9
---

## Introduction à la balise ```<star />```
Apprenons un autre outil pour permettre à notre chatbot d'avoir des réponses plus intéressantes. Dans la dernière leçon, nous avons appris comment utiliser le caractère générique ```*``` pour correspondre à n'importe quel mot ou phrase. Mais que se passe-t-il si nous voulons utiliser le mot ou la phrase saisie par l'utilisateur dans notre réponse ? Par exemple, si l'utilisateur nous dit quelle est sa couleur préférée, nous voulons que la réponse du bot inclue cette couleur préférée. Nous pouvons le faire en utilisant la balise ```<star />```.

La balise ```<star />``` est une balise spéciale qui nous permet d'utiliser le mot ou la phrase saisie par l'utilisateur dans notre réponse. Voyons comment cela fonctionne.

```
<category>
    <pattern>MA COULEUR PRÉFÉRÉE EST *</pattern>
    <template>
        Votre couleur préférée est <star />.
    </template>
</category>
```

Analysons comment cette catégorie fonctionne. Le motif "MA COULEUR PRÉFÉRÉE EST *" correspondra à tout input qui commence par "MA COULEUR PRÉFÉRÉE EST" suivi de n'importe quel mot ou phrase. Donc, le motif correspondra à "MA COULEUR PRÉFÉRÉE EST BLEU", "MA COULEUR PRÉFÉRÉE EST ROUGE", "MA COULEUR PRÉFÉRÉE EST VERT", et ainsi de suite. La balise ```<star />``` capturera le mot ou la phrase saisie par l'utilisateur et l'utilisera dans la réponse. Donc, si l'utilisateur saisit "MA COULEUR PRÉFÉRÉE EST BLEU", "bleu" représente le mot associé au caractère générique, et lorsque le chatbot répond, ```<star />``` sera remplacé par "bleu". Le bot répondra avec "Votre couleur préférée est bleu".

<img src="../img/sentence_response.png" alt="Illustration montrant comment un chatbot correspond aux motifs de phrases et répond" width="27%" />

Voici quelques exemples supplémentaires d'entrées et de sorties venant de cette catégorie :

Input | Output 
---|--------------
MA COULEUR PRÉFÉRÉE EST BLEU | Votre couleur préférée est bleu.
MA COULEUR PRÉFÉRÉE EST ROUGE | Votre couleur préférée est rouge.
MA COULEUR PRÉFÉRÉE EST VERT | Votre couleur préférée est vert.
```