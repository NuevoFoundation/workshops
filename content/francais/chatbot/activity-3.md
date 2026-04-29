---
title: "Activité 3 : Ajoutez vos propres catégories"
draft: false
weight: 7
---

## Ajoutez plus de catégories

Pour le moment, notre bot peut seulement répondre à "Bonjour". Ajoutons quelques catégories supplémentaires afin que notre bot puisse répondre à davantage de questions.

1. Si l'utilisateur dit "Quel est votre nom ?", le bot devrait répondre "Mon nom est Chatbot".
2. Si l'utilisateur dit "Quelle est votre couleur préférée ?", le bot devrait répondre "Ma couleur préférée est le bleu".
3. Si l'utilisateur dit "Quel est votre plat préféré ?", le bot devrait répondre "Mon plat préféré est la pizza".

<img src="../img/ideas.png" alt="" width="30%" style="" /

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

Rappel : Lorsque vous écrivez le modèle (pattern), utilisez uniquement des majuscules et évitez d'utiliser la ponctuation. Ainsi, si vous souhaitez correspondre à "Quel est votre nom ?", vous devrez écrire le modèle comme "QUEL EST VOTRE NOM".

{{% /notice %}}

{{% notice tip %}}

N'oubliez pas de sauvegarder le fichier chaque fois que vous modifiez les catégories et souhaitez interagir avec le chatbot.

{{% /notice %}}

Essayez d’ajouter ces catégories à votre bot et testez-les à l’aide du widget de chat. À ce stade, le bot devrait répondre à "Bonjour", "Quel est votre nom ?", "Quelle est votre couleur préférée ?" et "Quel est votre plat préféré ?".