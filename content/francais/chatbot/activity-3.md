---
title: "Activité 3 : Ajoutez vos propres catégories"
draft: false
weight: 7
---

## Ajoutez plus de catégories

Pour le moment, notre bot peut seulement répondre à "Hello". Ajoutons d'autres catégories afin que notre bot puisse répondre à davantage de choses.

1. Si l'utilisateur dit "Quel est ton nom ?", le bot devrait répondre "Mon nom est Chatbot".
2. Si l'utilisateur dit "Quelle est ta couleur préférée ?", le bot devrait répondre "Ma couleur préférée est le bleu".
3. Si l'utilisateur dit "Quel est ton plat préféré ?", le bot devrait répondre "Mon plat préféré est la pizza".

<img src="../img/ideas.png" alt="" width="30%" style="" />

Pour rappel, voici la structure de base d'une catégorie :

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice tip %}}

Rappel : Lorsque vous écrivez le modèle, utilisez uniquement des majuscules et évitez la ponctuation. Donc si vous voulez matcher "Quel est ton nom ?", vous devriez écrire le modèle comme "QUEL EST TON NOM".

{{% /notice %}}

{{% notice tip %}}

Pensez à enregistrer le fichier chaque fois que vous modifiez les catégories et souhaitez interagir avec le chatbot.

{{% /notice %}}

Essayez d'ajouter ces catégories à votre bot et testez-les en utilisant le widget de chat. À ce stade, le bot devrait répondre à "Hello", "Quel est ton nom ?", "Quelle est ta couleur préférée ?" et "Quel est ton plat préféré ?".