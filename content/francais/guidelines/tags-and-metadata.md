---
title: "Etiquettes et métadonnées"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 10
---

Chaque page d'atelier utilise un frontmatter YAML pour contrôler son apparence sur le site. Ce guide explique chaque champ et quand l’utiliser.

## Frontmatter obligatoire

Chaque fichier markdown doit inclure au minimum :

```yaml
---
title: "Titre de la page"
date: 2026-09-16T00:00:00-07:00
draft: false
---
```

| Champ | Objectif | Exemple |
|-------|----------|---------|
| `title` | Titre affiché dans la navigation et l'en-tête de page | `"Python : Bases"` |
| `date` | Dernière date de mise à jour (affichée sur le site) | `2026-09-16T00:00:00-07:00` |
| `draft` | `false` pour publié, `true` pour en cours de rédaction | `false` |

## Champs pour la page d'accueil des ateliers

Le fichier `_index.md` pour un atelier prend en charge des champs supplémentaires :

```yaml
---
title: "Python : Bases"
description: "Apprenez les bases de Python, y compris les variables, les boucles et les fonctions"
date: 2026-09-16T00:00:00-07:00
language: "python"
topics: ["programming-basics"]
difficulties: ["beginner"]
prereq: "Aucun"
draft: false
hidden: false
alwaysopen: false
icon: "fab fa-python"
weight: 1
---
```

| Champ | Objectif | Valeurs |
|-------|----------|---------|
| `description` | Résumé court affiché dans les listes | Texte libre |
| `language` | Filtre de langage de programmation | Un jeton de `data/taxonomy.yaml` |
| `topics` | Filtres par sujet | Un ou plusieurs jetons de `data/taxonomy.yaml` |
| `difficulties` | Filtres de difficulté | Un ou plusieurs jetons de `data/taxonomy.yaml` |
| `prereq` | Prérequis | `"Aucun"` ou nom d'un atelier |
| `hidden` | Masquer dans la navigation | `true` / `false` |
| `alwaysopen` | Comportement d’expansion du TOC | `false` (préféré) |
| `icon` | Icône Font Awesome pour la page d'accueil | Voir les icônes ci-dessous |
| `weight` | Ordre de tri dans la navigation | Nombre (plus petit = premier) |

Les champs `language`, `topics` et `difficulties` déterminent l'affichage d'un atelier dans les filtres de l'onglet Ateliers. Utilisez uniquement les valeurs autorisées dans `data/taxonomy.yaml`. Les valeurs inconnues ne créent pas de nouvelles options de filtre.

Exemple :

```yaml
language: "javascript"
topics: ["games", "web"]
difficulties: ["beginner"]
```

## Icônes courantes

La page d'accueil affiche une icône pour chaque atelier. Utilisez les classes [Font Awesome](https://fontawesome.com/icons) dans le champ `icon` du frontmatter :

| Classe | Utilisation recommandée |
|--------|--------------------------|
| `fab fa-python` | Ateliers Python |
| `fab fa-html5` | Ateliers HTML/web |
| `fab fa-js` | Ateliers JavaScript |
| `fas fa-laptop-code` | Programmation générale |
| `fas fa-microchip` | Matériel / Arduino |
| `fas fa-shield-alt` | Ateliers de cybersécurité |
| `fas fa-database` | Ateliers SQL / données |
| `fas fa-code` | Général (par défaut) |
| `fas fa-gamepad` | Ateliers de jeux |
| `fas fa-music` | Musique / audio |

## Champs pour les pages d’activité

Les pages d'activité sont plus simples :

```yaml
---
title: "Activité 1 : Hello World"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 3
---
```

## Champs pour les corrigés

Les corrigés doivent être masqués de la navigation :

```yaml
---
title: "Python : Bases - Corrigé"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 15
hidden: true
---
```

## Le champ date

Le champ `date` est affiché dans le pied de page de chaque page du site. Mettez-le à jour chaque fois que vous apportez des modifications significatives à une page pour que les visiteurs sachent que le contenu est à jour.

Format : `YYYY-MM-DDTHH:MM:SS-07:00` (ISO 8601 avec fuseau horaire) ou `YYYY-MM-DD` (date uniquement).

## Conseils pour le YAML

- Encadrez toujours les valeurs de chaîne avec des guillemets doubles si elles contiennent des deux-points : `title: "Python : Bases"`
- Les valeurs booléennes n'ont pas besoin de guillemets : `draft: false`
- N'utilisez pas d'onglets — YAML nécessite des espaces pour l'indentation
- Le frontmatter doit être encadré par des délimiteurs `---` tout en haut du fichier