---
title: "Catégories"
draft: false
weight: 6
---

## Fondamentaux AIML
L'unité de base de AIML est la **catégorie**. Une catégorie se compose d'un modèle (pattern) et d'un template. Le **modèle** est ce que l'utilisateur dit au bot. Le **template** est la réponse que le bot donne à l'utilisateur.

Prenons l'exemple suivant : on peut voir que le modèle est "HELLO" et le template est "Hello, World!". Lorsque l'utilisateur dit "HELLO", le bot répondra avec "Hello, World!". Notez que la correspondance des modèles n'est pas sensible à la casse, ce qui signifie que le bot répondra de la même manière à "hello", "HELLO", "Hello" et "HeLlo".
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

Lors de la création d'un modèle, nous recommandons de l'écrire entièrement en MAJUSCULES et d'éviter d'utiliser la ponctuation. Par exemple, si vous souhaitez correspondre à "What is your name?", vous devriez écrire le modèle comme "WHAT IS YOUR NAME". Pandora supprimera toute ponctuation dans l'entrée de l'utilisateur avant de faire correspondre le modèle.

{{% /notice %}}