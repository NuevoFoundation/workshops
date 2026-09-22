---
title: "Les bases de Razor"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 4
---

## Comprendre quand et pourquoi utiliser Razor 

### Les avantages des pages Razor
Razor est une syntaxe de balisage qui permet d'intégrer du code serveur (C#) dans des pages web.

Le code basé sur le serveur peut créer du contenu web dynamique en temps réel, tandis qu'une page web est écrite dans le navigateur. Lorsque une page web est appelée, le serveur exécute le code basé sur le serveur à l'intérieur de la page avant de la retourner au navigateur. En s'exécutant sur le serveur, le code peut accomplir des tâches complexes, comme accéder à des bases de données.

Razor repose sur ASP.NET et est conçu pour créer des applications web. Il possède la puissance du balisage ASP.NET traditionnel, mais est plus simple à utiliser et à apprendre.

Les avantages incluent :

* Configuration facile pour des applications web dynamiques utilisant HTML, CSS et C#.
* Fichiers organisés par fonctionnalité pour une maintenance facilitée.
* Combine le balisage avec le code C# côté serveur en utilisant la syntaxe Razor.

Les pages Razor utilisent Razor pour intégrer du code basé sur le serveur dans des pages web. La syntaxe Razor combine HTML et C# pour définir la logique de rendu dynamique. Cela signifie que vous pouvez utiliser des variables et des méthodes C# dans votre balisage HTML afin de générer du contenu web dynamique sur le serveur à l'exécution. Il est important de comprendre que les pages Razor ne remplacent pas HTML, CSS ou JavaScript. Elles constituent un moyen de combiner ces technologies pour créer du contenu web dynamique.

### Quand utiliser les pages Razor
Utilisez les pages Razor dans votre application ASP.NET Core lorsque vous :

* Souhaitez générer une interface utilisateur web dynamique.
* Préférez une approche centrée sur les pages.
* Désirez réduire la duplication avec des vues partielles.

Les pages Razor simplifient l'organisation des pages ASP.NET Core en regroupant les pages et leur logique associée dans leur propre espace de noms et répertoire.