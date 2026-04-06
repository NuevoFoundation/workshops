---
title: "Activité 2 : Configurer PandoraBots"
draft: false
weight: 5
---

## AIML
Nous utiliserons AIML pour créer notre chatbot. AIML signifie **Artificial Intelligence Markup Language**. Si vous avez déjà utilisé HTML pour créer un site web, vous constaterez qu'AIML est très similaire. Avant de pouvoir commencer à écrire de l'AIML, nous devons nous inscrire pour un compte sur PandoraBots.  
<img src="../img/chat_Alice.png" alt="" width="20%" style="" />

## PandoraBots
Rendez-vous sur [https://www.pandorabots.com/](https://www.pandorabots.com/) et cliquez sur **Sign Up**. Entrez une adresse email et un mot de passe pour créer un compte. Alternativement, vous pouvez vous inscrire en utilisant un compte Google, Facebook, Twitter ou Github. Si cela vous est proposé, choisissez l'option de version d'essai gratuite.

## Créer un nouveau bot
Une fois inscrit(e), vous devriez voir une page qui ressemble à ceci :

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="Page d'accueil d'un nouveau compte sur PandoraBots" width="40%"/></p>

Pour créer un nouveau bot, utilisez le bouton “+” à côté de My Bots dans le volet de navigation. Donnez-lui un nom et cliquez sur “Create Bot”.

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="Créer un nouveau bot sur PandoraBots" width="40%"/></p>

## Édition du bot
Une fois que vous avez créé un nouveau bot, son nom apparaîtra dans le volet de navigation. Cliquez sur **Edit** sous le nom de votre bot, puis choisissez **Code Editor** pour accéder à l'Éditeur.

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="Éditer un bot sur PandoraBots" width="40%"/></p>

L'Éditeur est l'endroit où vous allez rédiger les fichiers AIML et les catégories qui permettront à vous et aux autres de discuter avec votre bot.

Utilisez le menu Fichier pour créer un nouveau fichier AIML appelé greetings.

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="Ajouter un nouveau fichier dans PandoraBots" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="Ajouter un nouveau fichier dans PandoraBots" width="40%"/></p>

## Bonjour le monde

Copiez le code de la catégorie suivante dans l'éditeur de texte, entre les balises de début ```<aiml>``` et de fin ```</aiml>``` :

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

Une fois terminé, enregistrez votre fichier via le menu déroulant “File”.

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="Ajouter un nouveau fichier dans PandoraBots" width="40%"/></p>

## Tester votre bot
Le Chat Widget vous permet de parler à votre bot. Cliquez sur l'icône des "bulles de discussion" en bas à droite pour commencer à discuter avec votre bot. Tapez `Hello` et vous devriez recevoir la réponse que vous venez de coder : `“Hello, world!”`

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="Tester un bot sur PandoraBots" width="40%"/></p>