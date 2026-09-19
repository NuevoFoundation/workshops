---
title: "Comment le site est construit"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 1
---

# Comment le site est construit

Le contenu du sous-domaine des ateliers est construit en utilisant le thème [DocDock](https://docdock.netlify.com/) pour Hugo. [Hugo](https://gohugo.io) est un générateur de site statique avec plusieurs avantages :

1. **Les auteurs de contenu** peuvent se concentrer sur le contenu en utilisant le markdown, sans se préoccuper de la mise en œuvre technique du site ou du style des pages/CSS. Les ateliers sont *automatiquement* ajoutés au tableau des matières à gauche et à la page d'accueil des ateliers. Hugo fonctionne parfaitement en local (par exemple : dans un avion), et c'est le générateur de site statique le plus rapide, construisant l'ensemble du site des ateliers en moins de 2 secondes.  
2. **Les étudiants** bénéficient d'une expérience utilisateur cohérente à travers les ateliers, d'une accessibilité intégrée, de la localisation, d'un design responsive prenant en charge les appareils mobiles et les ordinateurs de bureau, de liens automatisés vers le dépôt GitHub, ainsi que de performances rapides du site à l'échelle mondiale grâce au CDN Azure.
3. **L'équipe de développement Nuevo** bénéficie de la possibilité de créer et personnaliser les pages des ateliers, y compris des modèles de pages personnalisés, [des contrôles de pages intégrés pour des alertes, notes, boutons, avertissements et plus encore](https://workshops.nuevofoundation.org/guidelines/formatting/), des contrôles personnalisés (par exemple : l'en-tête Nuevo), l'interactivité via iframe, des métadonnées personnalisées, des liens entre pages automatisés, une personnalisation des thèmes des pages, la création automatique d'une carte du site, des icônes intégrées, et une automatisation intégrée utilisant GitHub Actions et Azure DevOps pour la construction/le déploiement. 