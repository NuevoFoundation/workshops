```markdown
---
title: "Catégories"
draft: false
weight: 6
---

## Fondamentaux AIML
L'unité de base de l'AIML est la **catégorie**. Une catégorie comprend un modèle (pattern) et un gabarit (template). Le **modèle** correspond à ce que l'utilisateur dit au robot. Le **gabarit** est la réponse du robot à l'utilisateur.

En regardant l'exemple suivant, nous pouvons voir que le modèle est "HELLO" et le gabarit est "Hello, World!". Quand l'utilisateur dit "HELLO", le robot répondra "Hello, World!". Notez que la correspondance des modèles est insensible à la casse, ainsi le robot répondra de la même manière à "hello", "HELLO", "Hello" et "HeLlo".
<img src="../img/chat_persons_robot.png" alt="Illustration de personnes communiquant avec un robot chatbot" width="20%"/>

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice info %}}

Lors de l'écriture du modèle, nous recommandons d'écrire en MAJUSCULES et d'éviter d'utiliser la ponctuation. Donc, si vous voulez correspondre à "What is your name?", vous devriez écrire le modèle comme "WHAT IS YOUR NAME". Pandora supprimera toute ponctuation dans l'entrée de l'utilisateur avant de correspondre au modèle.

{{% /notice %}}
```