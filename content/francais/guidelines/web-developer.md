---
title: "Consignes pour les développeurs web"
date: 2019-07-22T14:08:32-07:00
draft: false
weight: 4
---

Ce document est destiné **uniquement aux développeurs de sites web** pour modifier les modèles et le style du projet [Nuevo Foundation workshop](https://github.com/nuevoFoundation/workshops).

## Avant de commencer

Avant d’ajouter ou de mettre à jour le site web, assurez-vous d’avoir synchronisé avec l'équipe de projet et le travail existant dans le [Backlog du projet](https://github.com/NuevoFoundation/workshops/projects/1).

## Configuration

Suivez les instructions de la page [Getting Started](../getting-started/) pour installer Git et Hugo afin de tester le projet localement.

## Styles et structure de conception web

- **Images :** Les images du site web doivent être dans `themes/images`.  
- **CSS :** Ignorez les fichiers SCSS et utilisez uniquement les fichiers CSS dans `/themes/docdock/static/css/`. Assurez-vous d’ajouter une référence au fichier CSS que vous souhaitez inclure dans le fichier `head.html` situé à `/themes/docdock/layouts/partials/flex/head.html`.  

## Décomposer une page d’atelier

- **Modèle de page complète :** Pour voir tous les composants d'une page, y compris l’en-tête, le menu, le corps, et le pied de page, consultez `/themes/docdock/layouts/_default/baseof.html`.  
- **En-tête :** Fichiers Meta, CSS et JS dans `/themes/docdock/layouts/partials/flex/head.html`.  
- **Navigation supérieure / Menu :** N’utilisez pas les valeurs du docDock dans `config.toml`, mais ajoutez ou modifiez le HTML dans : `/themes/docdock/layouts/partials/flex/body-before-content.html`.  
- **Menu à gauche :** `/themes/docdock/layouts/partials/flex/menu.html`.  
- **Navigation pied de page :** `/themes/docdock/layouts/partials/flex/body-after-content.html`.  
- **Boîte de métadonnées :** `/themes/docdock/layouts/partials/flex/body-after-content.html`.  

## Au secours, les CSS ont disparu

Un défi avec Hugo est qu’un paramètre clé dans la construction est la variable `baseURL`. Si le contenu se charge mais pas les CSS, il s'agit probablement d’un problème avec le paramètre `baseURL`.  

Vous pouvez modifier le `baseURL` lors de la construction du contenu au lieu de modifier le fichier config.toml. L’exemple ci-dessous minimisera le CSS et le JS, définira le `baseURL` sur l’URL de production .org, et copiera les résultats dans le répertoire `public`.  

`hugo --minify --baseURL "https://workshops.nuevofoundation.org/"`  

## Conseils et astuces

- **Ignorer Public :** Par défaut, exécuter `hugo` sans paramètres construira le site dans le répertoire public. Assurez-vous de ne pas ajouter le répertoire public au contrôle de source (il est déjà dans gitignore).  
- **Navigation à gauche :** Vous pouvez masquer du contenu dans la navigation de gauche en définissant des métadonnées sur le fichier `hidden: true` (comme le markdown index.md de cet atelier !).  
- **Partials :** Pour des composants réutilisables sur une page, créez une nouvelle partiale dans `/themes/docdock/layouts/partials/flex/`.  