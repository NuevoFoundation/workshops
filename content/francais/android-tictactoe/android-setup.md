---
title: "Configuration d'Android"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 2
---
Suivez les étapes ci-dessous pour installer Android Studio sur votre ordinateur. Si vous avez déjà Android Studio installé, ouvrez-le et passez à l’étape suivante !

Ces étapes présentent des exemples pour une installation sur des ordinateurs Windows. Cependant, les étapes sont similaires pour d'autres types d'ordinateurs également.

## Télécharger et Installer Android Studio
1. [Téléchargez Android Studio](https://developer.android.com/studio/) pour votre système d'exploitation.
2. [Suivez ces étapes](https://developer.android.com/studio/install) pour installer Android Studio.

## Définir la variable d’environnement JAVA_HOME
Android Studio est fourni avec une version de Java nécessaire pour que certaines parties de l'application fonctionnent. Suivez les étapes ci-dessous pour définir la variable d’environnement `JAVA_HOME` sur votre ordinateur. Cela indique à ces outils où trouver Java :
1. Dans la barre de recherche en bas à gauche de l'écran, tapez `env`.
2. Sélectionnez le programme `Modifier les variables d’environnement système` dans les résultats obtenus.
<img src="../resources/_gen/images/edit_env_variable.png" height="30%" width="30%" title="Modifier les variables d’environnement système" alt="Modifier les variables d’environnement système"/>
3. Cliquez sur `Variables d’environnement...`.
4. Cliquez sur `Nouveau...` dans la section 'Variables utilisateur'.
5. Saisissez JAVA_HOME comme nom de la variable.
6. Copiez ce qui suit dans le champ de la valeur de la variable :
```
C:\Program Files\Android\Android Studio\jre
```
7. Cliquez sur OK.
<img src="../resources/_gen/images/set_java_home.gif" height="40%" width="40%" title="Définir JAVA_HOME" alt="montre les étapes pour définir la variable d’environnement JAVA_HOME"/>

{{% notice tip %}}
Nous vous recommandons fortement de redémarrer votre ordinateur maintenant pour qu'Android Studio puisse s’ouvrir correctement.
{{% /notice %}}

## Lancer Android Studio
Une fois installé, ouvrez Android Studio pour commencer à travailler sur l'application.

{{% notice tip %}}
Il existe plusieurs façons de lancer l'application Android Studio sur votre ordinateur Windows. Voici deux méthodes :
#### Méthode 1
1. Cliquez sur l’icône Windows dans le coin inférieur gauche de votre ordinateur.
2. Faites défiler la liste jusqu’à ce que vous voyiez le dossier `Android Studio`.
3. Cliquez sur le dossier `Android Studio` pour l’ouvrir.
4. Cliquez sur l’application `Android Studio` dans le dossier pour démarrer Android Studio.

#### Méthode 2
1. Dans la barre de recherche dans le coin inférieur gauche de l’écran, tapez `Android Studio`.
2. Dans la fenêtre des résultats, si "Meilleure correspondance" sélectionne `Android Studio`, cliquez sur l’application `Android Studio` ou appuyez sur `ENTRÉE` sur votre clavier.
{{% /notice %}}

## Ouvrir les fichiers du projet
1. Cliquez sur `Ouvrir un projet existant` sur l’écran de démarrage d’Android Studio.
2. Recherchez l'emplacement où vous avez téléchargé les fichiers du projet.
3. Sélectionnez le dossier 'TicTacToe' à l'intérieur du dossier 'TicTacToe' que vous avez décompressé plus tôt.
   - Le dossier 'TicTacToe' à sélectionner doit avoir une icône Android verte à côté, indiquant qu'il s'agit d'un dossier de projet Android.
<img src="../resources/_gen/images/open_android_project.gif" height="40%" width="40%" title="Ouvrir le projet TicTacToe" alt="Montre comment ouvrir le projet TicTacToe dans Android Studio"/>

Exécutez Android Studio et ouvrez le projet. Votre vue devrait ressembler à ceci :
<img src="../resources/_gen/images/android_studio.png" height="60%" width="60%" title="IDE Android Studio" alt="Exemple d'IDE Android Studio"/>

## Accepter les licences
Avant de pouvoir exécuter le code, vous devrez accepter les licences Android en suivant les étapes ci-dessous :
1. Cliquez sur le bouton `Terminal` en bas de la fenêtre d’Android Studio.
2. Tapez la commande ci-dessous, en remplaçant '<USER_NAME>' par le nom d’utilisateur de votre ordinateur.
```
C:\Users\<USER_NAME>\AppData\Local\Android\Sdk\tools\bin\sdkmanager --licenses
```
3. Tapez `y` et appuyez sur `ENTRÉE` aux différentes invites, pour accepter les licences. Ceci sera nécessaire plusieurs fois.
<img src="../resources/_gen/images/accept_licenses.gif" height="60%" width="60%" title="Accepter les licences Android" alt="montre les étapes nécessaires pour accepter les licences Android"/>