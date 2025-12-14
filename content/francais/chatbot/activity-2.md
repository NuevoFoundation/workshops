---  
title: "Activité 2 : Configurer PandoraBots"  
draft: false  
weight: 5  
---

## AIML  
Nous allons utiliser AIML pour créer notre chatbot. AIML signifie **Artificial Intelligence Markup Language** (Langage de balisage pour l'intelligence artificielle). Si vous avez déjà utilisé HTML pour créer un site web, vous constaterez que AIML y ressemble beaucoup. Avant de pouvoir commencer à écrire en AIML, nous devons nous inscrire sur PandoraBots.  
<img src="../img/chat_Alice.png" alt="" width="20%" style="" />  

## PandoraBots  
Rendez-vous sur [https://www.pandorabots.com/](https://www.pandorabots.com/) et cliquez sur **Sign Up**. Saisissez un e-mail et un mot de passe pour créer un compte. Vous pouvez également vous inscrire en utilisant un compte Google, Facebook, Twitter ou Github. Si on vous le demande, choisissez l'option essai gratuit.  

## Créer un nouveau bot  
Une fois inscrit, vous devriez voir une page qui ressemble à ceci :  

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="page d'accueil d'un nouveau compte sur pandorabots" width="40%"/></p>  

Pour créer un nouveau bot, utilisez le bouton “+” à côté de Mes Bots dans le panneau de navigation. Donnez-lui un nom et cliquez sur “Create Bot”.  

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="création d'un nouveau bot sur pandorabots" width="40%"/></p>  

## Édition du bot  
Une fois que vous avez créé un nouveau bot, le nom du bot apparaîtra dans le panneau de navigation. Cliquez sur **Edit** sous le nom de votre bot, puis choisissez **Code Editor** pour accéder à l’éditeur.  

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="édition d'un bot sur pandorabots" width="40%"/></p>  

L'éditeur est l'endroit où vous écrirez les fichiers AIML et les catégories qui vous permettront, à vous et aux autres, de communiquer avec votre bot.  

Utilisez le menu Fichier pour créer un nouveau fichier AIML nommé greetings.  

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="ajout d'un nouveau fichier sur pandorabots" width="40%"/></p>  

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="ajout d'un nouveau fichier sur pandorabots" width="40%"/></p>  

## Bonjour le monde  

Copiez le code pour la catégorie suivante dans l'éditeur de texte entre les balises de début ```<aiml>``` et de fin ```</aiml>``` :  

```
<category>  
    <pattern>HELLO</pattern>  
    <template>  
        Hello, World!  
    </template>  
</category>  
```    

Une fois terminé, enregistrez votre fichier via le menu déroulant “File”.  

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="ajout d'un nouveau fichier sur pandorabots" width="40%"/></p>  

## Tester votre bot  
Le widget de discussion vous permet de parler avec votre bot. Cliquez sur l'icône des "bulles de discussion" dans le coin inférieur droit pour commencer à parler avec votre bot. Tapez `Hello` et vous devriez recevoir la réponse que vous venez de coder, `“Hello, world!”`  

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="ajout d'un nouveau fichier sur pandorabots" width="40%"/></p>  