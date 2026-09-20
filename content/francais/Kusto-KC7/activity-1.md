---
title: "Activité 1 : Connexion & Configuration de l'Environnement Cyber"
draft: false
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/kMIKZhS5E4k" title="Activité 1 : Connexion &amp; Configuration de l'Environnement Cyber - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Pour Commencer

D'accord, Défenseurs Cyber ! La première chose que vous devez faire est de configurer l'environnement dans lequel vous chasserez les hackers. Pour ce faire, ouvrez les liens ci-dessous et suivez les instructions pour configurer d'abord Azure Data Explorer (ADX), puis vous connecter à la session du tableau de bord.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Resources.png?raw=true" alt= “Ressources” width="60%" height="value">

### Configuration d'Azure Data Explorer (ADX)

ADX est l'outil principal utilisé par certains défenseurs cyber pour l'exploration et l'analyse des données. Ce qui est formidable avec ADX, c'est qu'il est utilisé par des analystes cyber dans nombre des plus petites et des plus grandes organisations au monde.

Commençons par vous connecter et découvrir ADX :

1. Rendez-vous sur [Azure Data Explorer](https://dataexplorer.azure.com/) et connectez-vous avec votre compte Microsoft 
    - Si vous ne possédez pas encore de compte Microsoft, créez-en un maintenant (c'est gratuit)
2. Cliquez sur l'onglet Query (requêtes) sur le côté gauche de l'écran.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX1.png?raw=true" alt= “ADX1” width="20%">

Les données dans ADX sont organisées dans une structure hiérarchique qui se compose de **clusters, bases de données et tables**. Tous les journaux de sécurité d'Envolve Labs sont stockés dans un seul cluster. Vous devrez ajouter ce cluster à votre interface ADX pour commencer à examiner les données des journaux.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX2.png?raw=true" alt= “ADX2” width="40%" height="value">

3. Ajoutez un nouveau cluster en utilisant l'URI du cluster fourni par votre instructeur :
    - Cliquez sur « add cluster » (ajouter un cluster)
    - Entrez l'URI de connexion : mstictraining.eastus

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX3.png?raw=true" alt= “ADX3” width="40%" height="value">

4. Sélectionnez votre base de données     
    - Cliquez sur la flèche de menu déroulant à côté de votre cluster. Vous devriez alors voir une base de données appelée **SecurityLogs** à l'intérieur.     
    - Cliquez sur la flèche de menu déroulant à côté de la base de données **SecurityLogs**.     
    - Cliquez sur la base de données **SecurityLogs**. Une fois que vous avez fait cela, vous devriez voir la base de données mise en surbrillance - cela signifie que vous avez sélectionné la base de données et que vous êtes prêt à interroger les tables qui s'y trouvent.      

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX4_updated.png?raw=true" alt= “ADX4_updated” width="30%" height="value">

Le grand espace vide situé à droite de votre liste de clusters est l'espace de travail des requêtes. C'est là que vous utiliserez le code KQL pour écrire ce qu'on appelle des requêtes, utilisées pour interagir avec nos données de journal.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX5.png?raw=true" alt= “ADX5” width="60%" height="value">

### Configuration du Tableau de Bord

1. Après avoir accédé au [site web du Tableau de Bord](https://aka.ms/kc7scoreboard), créez un compte utilisateur. Assurez-vous d'utiliser un nom d'utilisateur et un mot de passe que vous pouvez retenir, car vous serez immédiatement invité à vous connecter.
2. Cliquez sur le bouton vert **"Join a new game"** (Rejoindre un nouveau jeu).
3. Une fois à l'intérieur, entrez le mot de passe de la session : **GAMEON**

Vous devriez maintenant voir le Tableau de Bord. Lorsque vous allez dans l'onglet des défis, vous devriez voir une liste comme dans l'image ci-dessous. Nous en aurons besoin plus tard dans la formation, alors n'hésitez pas à minimiser le Tableau de Bord, mais gardez-le prêt à l'emploi.
<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Scoreboard.png?raw=true" alt= “ADX3” width="value" height="value">

{{< alert theme="info" >}} Terminé ! Maintenant que vous êtes prêt, il est temps de mettre la main sur les données. {{< /alert >}}

[def]: Images/ADX1.png