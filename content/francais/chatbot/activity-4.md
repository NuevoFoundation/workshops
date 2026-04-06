---  
title: "Activité 4 : Wildcards"  
draft: false  
weight: 9  
---  

## Utiliser des wildcards  
Utilisons le wildcard pour permettre à notre bot de répondre à plus de questions, sans avoir à écrire une nouvelle catégorie pour chaque question possible. Développons nos catégories actuelles afin que le chatbot puisse répondre à toutes les questions se terminant par "nourriture", "couleur" ou "nom".  

{{% notice tip %}}  

Utilisez le wildcard au début du modèle.  

{{% /notice %}}  

1. Si l'utilisateur entre une question qui **SE TERMINE PAR** "nourriture" (par exemple : "Quelle est ta nourriture préférée ?", "Aimes-tu la nourriture ?", "Les chatbots mangent-ils de la nourriture ?"), le bot doit répondre par "Ma nourriture préférée est la pizza".  

2. Si l'utilisateur entre une question qui **SE TERMINE PAR** "couleur" (par exemple : "Quelle est ta couleur préférée ?", "Quelle est ta couleur favorite ?"), le bot doit répondre par "Ma couleur préférée est le bleu".  

3. Si l'utilisateur entre une question qui **SE TERMINE PAR** "nom" (par exemple : "Quel est ton nom ?", "C'est quoi ton nom ?", "As-tu un nom ?"), le bot doit répondre par "Mon nom est Chatbot".  
<img src="../img/idea.png" alt="" width="20%"/>