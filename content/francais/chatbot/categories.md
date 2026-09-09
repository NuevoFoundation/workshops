---
title: "Catégories"
draft: false
weight: 6
---

## Principes Fondamentaux d'AIML
L’unité de base d’AIML est la **catégorie**. Une catégorie se compose d’un motif (pattern) et d’un modèle (template). Le **motif** représente ce que l’utilisateur dit au bot. Le **modèle** est la réponse que le bot fournit à l’utilisateur.

Dans l'exemple suivant, nous constatons que le motif est "HELLO" et le modèle est "Bonjour, Monde !". Lorsque l’utilisateur dit "HELLO", le bot répondra "Bonjour, Monde !". Notez que la correspondance des motifs est insensible à la casse, donc le bot répondra de la même manière à "hello", "HELLO", "Hello" et "HeLlo".
<img src="../img/chat_persons_robot.png" alt="" width="20%"/>

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice info %}}

Lors de l’écriture d’un motif, nous recommandons d’écrire en MAJUSCULES et d’éviter d’utiliser la ponctuation. Donc, si vous souhaitez correspondre à "Quel est votre nom ?", vous devriez écrire le motif comme "QUEL EST VOTRE NOM". Pandora supprimera toute ponctuation dans l'entrée utilisateur avant de faire la correspondance avec le motif.

{{% /notice %}}