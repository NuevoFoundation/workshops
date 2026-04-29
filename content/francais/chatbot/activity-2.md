---
title: "Activité 2 : Configuration de PandoraBots"
draft: false
weight: 5
---

## AIML
Nous utiliserons AIML pour créer notre chatbot. AIML signifie **Artificial Intelligence Markup Language** (Langage de balisage pour l'intelligence artificielle). Si vous avez déjà utilisé HTML pour créer un site web, vous trouverez qu'AIML y ressemble beaucoup. Avant de pouvoir commencer à écrire en AIML, nous devons créer un compte sur PandoraBots.  
<img src="../img/chat_Alice.png" alt="" width="20%" style="" />

## PandoraBots
Rendez-vous sur [https://www.pandorabots.com/](https://www.pandorabots.com/) et cliquez sur **Sign Up** (S'inscrire). Entrez une adresse e-mail et un mot de passe pour créer un compte. Alternativement, vous pouvez vous inscrire en utilisant un compte Google, Facebook, Twitter ou Github. Si on vous le demande, choisissez l'option d'essai gratuit.

## Créer un nouveau bot
Une fois que vous êtes inscrit, vous devriez voir une page ressemblant à ceci :

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="page d'accueil d'un nouveau compte sur PandoraBots" width="40%"/></p>

Pour créer un nouveau bot, utilisez le bouton “+” à côté de **My Bots** dans le volet de navigation. Donnez-lui un nom et cliquez sur “Create Bot” (Créer un bot).

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="création d'un nouveau bot sur PandoraBots" width="40%"/></p>

## Édition du Bot
Une fois votre bot créé, le nom de ce dernier apparaîtra dans le volet de navigation. Cliquez sur **Edit** sous le nom de votre bot, puis choisissez **Code Editor** pour accéder à l'Éditeur.

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="édition d'un bot sur PandoraBots" width="40%"/></p>

L'Éditeur est l'endroit où vous écrirez les fichiers AIML et les catégories qui permettront à vous et aux autres de discuter avec votre bot.

Utilisez le menu **File** pour créer un nouveau fichier AIML appelé `greetings`.

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="ajout d'un nouveau fichier sur PandoraBots" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="ajout d'un nouveau fichier sur PandoraBots" width="40%"/></p>

## Hello World

Copiez le code de la catégorie suivante dans l'éditeur de texte entre les balises de début ```<aiml>``` et de fin ```</aiml>``` :

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

Une fois terminé, enregistrez votre fichier via le menu déroulant **File**.

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="ajout d'un nouveau fichier sur PandoraBots" width="40%"/></p>

## Tester votre bot
Le widget de chat vous permet de parler à votre bot. Cliquez sur l'icône des "bulles de discussion" dans le coin inférieur droit pour commencer à dialoguer avec votre bot. Tapez `Hello` et vous devriez recevoir la réponse que vous venez de programmer, `“Hello, world!”`

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="tester un bot sur PandoraBots" width="40%"/></p>