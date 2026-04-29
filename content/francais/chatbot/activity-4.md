---
title: "Activité 4 : Caractères génériques"
draft: false
weight: 9
---

## Utiliser les caractères génériques
Utilisons le caractère générique pour permettre à notre bot de répondre à plus de questions, sans avoir à créer une nouvelle catégorie pour chaque question possible. Développons nos catégories actuelles afin que le chatbot puisse répondre à toute question qui se termine par "nourriture", "couleur" ou "nom".

{{% notice tip %}}

Utilisez le caractère générique au début du modèle.

{{% /notice %}}

1. Si l'utilisateur saisit une question qui **SE TERMINE PAR** "nourriture" (ex. : "Quelle est ta nourriture préférée ?", "Aimes-tu la nourriture ?", "Les chatbots mangent-ils de la nourriture ?"), le bot doit répondre : "Ma nourriture préférée est la pizza".

2. Si l'utilisateur saisit une question qui **SE TERMINE PAR** "couleur" (ex. : "Quelle est ta couleur préférée ?", "Quelle est votre couleur préférée ?"), le bot doit répondre : "Ma couleur préférée est le bleu".

3. Si l'utilisateur saisit une question qui **SE TERMINE PAR** "nom" (ex. : "Quel est ton nom ?", "Quel est votre nom ?", "As-tu un nom ?"), le bot doit répondre : "Mon nom est Chatbot".
<img src="../img/idea.png" alt="" width="20%"/>