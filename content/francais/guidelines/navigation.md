---
title: "Navigation"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 8
---

Hugo utilise des métadonnées de frontmatter dans chaque fichier markdown pour contrôler la manière dont les pages apparaissent dans la navigation du site. Ce guide couvre les réglages clés.

## Ordre des pages avec le champ "weight"

Le champ `weight` contrôle l'ordre des pages dans la barre latérale gauche et la table des matières. Les chiffres les plus bas apparaissent en premier.

```yaml
---
title: "Activité 1 : Premiers pas"
weight: 3
---
```

**Schéma de poids recommandé :**

| Type de page             | Poids | Exemple              |
|--------------------------|-------|----------------------|
| `_index.md` (page d'accueil) | 1     | Introduction de l'atelier |
| Configuration / prérequis  | 2     | Outils nécessaires   |
| Activités                 | 3, 4, 5... | Activité 1, 2, 3    |
| Clé de réponse            | 15+   | Caché de la navigation |

Laissez des écarts entre les poids des activités si vous prévoyez d'insérer des pages plus tard (par exemple, utilisez 3, 5, 7 au lieu de 3, 4, 5).

## Contrôle de la table des matières (TOC)

### TOC réduit (recommandé)

Les ateliers doivent s'ouvrir avec une introduction visible et la liste des activités réduite :

```yaml
---
title: "Python : Les bases"
alwaysopen: false
---
```

Avec `alwaysopen: false`, les pages enfants apparaissent comme un arbre pliable dans la barre latérale. Les étudiants développent les sections au fur et à mesure de leur progression.

### TOC développé

Pour les ateliers très courts (3 activités ou moins), vous pouvez rendre toutes les sections visibles :

```yaml
---
title: "Atelier court"
alwaysopen: true
---
```

## Masquer des pages

### Pages masquées (construites mais non affichées dans la navigation)

Utilisez `hidden: true` pour les pages qui doivent exister mais ne pas apparaître dans la navigation de la barre latérale. Les étudiants peuvent toujours y accéder via un lien direct.

```yaml
---
title: "Clé de réponses"
hidden: true
---
```

Usages courants : clés de réponses, notes instructeurs, contenu bonus.

### Pages en brouillon (non construites en production)

Utilisez `draft: true` pour les travaux en cours qui ne doivent pas apparaître sur le site en direct :

```yaml
---
title: "Atelier non terminé"
draft: true
---
```

Les pages en brouillon n'apparaissent que lorsque vous exécutez `hugo server -D` (l'option `-D` inclut les brouillons).

## La balise enfants (children shortcode)

Pour afficher une liste de pages enfants sur une page d'accueil, utilisez le shortcode `children` à l'intérieur d'un élément pliable :

```html
<details>
<summary>Table des matières</summary>
{{% children /%}}
</details>
```

Cela génère une table des matières propre et pliable que les étudiants peuvent développer quand ils le souhaitent. Certains ateliers existants utilisent `<details open>` pour un affichage développé par défaut.

## Modèle de page d'accueil pour un atelier

Voici un exemple complet de frontmatter pour `_index.md` :

```yaml
---
title: "Python : Les bases"
description: "Apprenez les fondamentaux de Python"
date: 2026-09-16T00:00:00-07:00
language: "python"
topics: ["bases-programmation"]
difficulties: ["débutant"]
prereq: "Aucun"
draft: false
hidden: false
alwaysopen: false
icon: "fab fa-python"
weight: 1
---
```

## Conseils

- Testez les modifications de navigation localement avec `hugo server -D` avant de soumettre
- Vérifiez que les clés de réponse sont `hidden: true` pour que les étudiants ne les voient pas
- Gardez les numéros de poids cohérents au sein d'un atelier
- Si vous réorganisez les pages, mettez à jour tous les poids pour éviter les écarts ou les collisions