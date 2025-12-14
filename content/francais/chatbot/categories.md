---
title: "Catégories"
draft: false
weight: 6
---

## Notions fondamentales d'AIML
L'unité de base d'AIML est la **catégorie**. Une catégorie se compose d'un motif et d'un modèle. Le **motif** est ce que l'utilisateur dit au bot. Le **modèle** est la réponse que le bot donne à l'utilisateur.

En examinant l'exemple suivant, nous pouvons voir que le motif est "HELLO" et le modèle est "Hello, World!". Lorsque l'utilisateur dit "HELLO", le bot répondra avec "Hello, World!". Notez que la correspondance des motifs n'est pas sensible à la casse, donc le bot répondra de la même manière à "hello", "HELLO", "Hello", et "HeLlo".
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

Lorsque vous écrivez le motif, nous recommandons d'écrire en MAJUSCULES et d'éviter d'utiliser la ponctuation. Donc, si vous voulez correspondre à "What is your name?", vous devriez écrire le motif comme "WHAT IS YOUR NAME". Pandora supprimera toute ponctuation dans l'entrée utilisateur avant de faire correspondre le motif.

{{% /notice %}}