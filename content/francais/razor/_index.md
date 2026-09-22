```markdown
---
title: "Razor : Créer un site web"
description: "Un guide introductif sur la création d'un site web simple en utilisant C#/Razor"
date: 2023-09-11T11:45:38-07:00
prereq: "Bases du Web, Bases de C#"
draft: false
icon: "fas fa-code"
language: "csharp"
topics: ["web"]
difficulties: ["intermédiaire"]
---

## Bienvenue

L'objectif de l'activité d'aujourd'hui est d'apprendre des compétences en Web et en C#, et d'intégrer vos nouvelles connaissances pour créer un site web !

## Démarrage

L'objectif de l'activité d'aujourd'hui est d'apprendre des compétences en Web et en C#, et d'intégrer vos nouvelles connaissances pour créer un site web ! Commençons par configurer votre environnement.

Avant de commencer le développement d'applications avec C#, votre première étape consiste à choisir un environnement de programmation. Pour cet atelier, nous avons choisi Visual Studio Code, l'un des IDE les plus populaires parmi les développeurs C#. 

### Télécharger Visual Studio Code
1. Ouvrez une nouvelle fenêtre de navigateur, puis accédez à : <a href="https://code.visualstudio.com" target="_blank">https://code.visualstudio.com</a>.

2. Dans la fenêtre du navigateur, sélectionnez le bouton Télécharger.

{{% panel theme="info" header="Remarque"%}}
La page de téléchargement de Visual Studio Code détecte automatiquement votre système d'exploitation. Elle affiche la version adaptée à votre système d'exploitation, tel que Linux, macOS ou Windows.
{{% /panel %}}

3. Attendez que le fichier d'installation ait fini de se télécharger.

Le nom du fichier d'installation sera similaire au suivant (pour un PC Windows) : VSCodeUserSetup-x64-1.81.0.exe.

{{% panel theme="info" header="Remarque"%}}
Le nom du fichier dépend de la version actuelle de Visual Studio Code et du système d'exploitation de votre ordinateur.
{{% /panel %}}

4. Fermez votre fenêtre de navigateur.

### Installer Visual Studio Code
1. Sur votre PC, ouvrez une application d'exploration de fichiers, puis accédez au dossier de téléchargements de votre ordinateur.

2. Dans votre application d'exploration de fichiers, sélectionnez et exécutez le fichier d'installation de Visual Studio Code.

    Sur un PC Windows, vous pouvez double-cliquer sur le fichier d'installation pour commencer le processus d'installation. Par exemple, double-cliquez sur VSCodeUserSetup-x64-1.81.0.

{{% panel theme="info" header="Remarque"%}}
Vous pouvez installer Visual Studio Code en utilisant soit l'installateur pour l'utilisateur, soit l'installateur pour le système. L'installateur pour l'utilisateur installe Visual Studio Code uniquement pour l'utilisateur actuel, tandis que l'installateur pour le système l'installe pour tous les utilisateurs. L'installateur pour l'utilisateur est l'option recommandée pour la plupart des utilisateurs.
{{% /panel %}}

Après un moment, la fenêtre de dialogue **Setup - Microsoft Visual Studio Code** apparaîtra.

<img src="media/vscodeInstaller.png" alt="Capture d'écran montrant l'installateur de Visual Studio Code" />

3. Sélectionnez J'accepte les termes du contrat de licence, puis suivez les instructions en ligne pour terminer l'installation.

    Acceptez les options par défaut durant le reste de l'installation.

    Pour des instructions détaillées sur l'installation, consultez la page de documentation suivante : <a href="https://code.visualstudio.com/docs/setup/windows" target="_blank">https://code.visualstudio.com/docs/setup/windows</a>.

### Installer le SDK .NET

{{% panel theme="info" header="Comment vérifier si .NET est déjà installé"%}}
Vous pouvez vérifier si .NET est déjà installé en ouvrant une fenêtre de terminal et en tapant <code>dotnet --version</code>, puis en appuyant sur la touche Entrée.
{{% /panel %}}

1. Ouvrez une nouvelle fenêtre de navigateur Internet.

2. Pour ouvrir la page de téléchargement du SDK .NET, accédez à l'URL suivante :

    <a href="https://dotnet.microsoft.com/download" target="_blank">https://dotnet.microsoft.com/download</a>

3. Sur la page Télécharger .NET, sélectionnez la version recommandée du SDK .NET.

4. Attendez que le fichier d'installation ait fini de se télécharger.

5. Exécutez le fichier d'installation du SDK .NET.

    Sur un PC Windows, vous pouvez trouver votre dossier Téléchargements en utilisant l'Explorateur de fichiers. Double-cliquez sur le fichier d'installation pour commencer le processus d'installation.

6. Dans la fenêtre de l'installateur du SDK .NET, sélectionnez Installer.

7. Attendez que l'installation soit terminée.

    L'installation doit prendre environ une minute. Une fois l'installation terminée, un message s'affiche pour confirmer que l'installation a bien été réalisée.

8. Pour fermer la fenêtre de l'installateur, sélectionnez Fermer.

## Table des matières

<details close>
<summary>Table des matières</summary>
{{% children /%}}
</details>
```