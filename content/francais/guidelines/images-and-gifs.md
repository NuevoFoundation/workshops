---
title: "Images et GIFs"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 7
---

Les images rendent les ateliers plus attrayants pour les jeunes apprenants. Suivez ces conseils pour garantir que les images soient accessibles, correctement dimensionnées et fonctionnent sur toutes les plateformes.

## Dimensionnement des images

Ne laissez jamais d'images sans contraintes de largeur. Sans attribut `width`, les images s'affichent à leur taille d'origine, ce qui est souvent trop grand pour la zone de contenu.

| Type d'image | Largeur cible | Exemple |
|--------------|---------------|---------|
| Captures d'écran complètes de l'interface utilisateur (Replit, IDE) | 60% | Boîte de dialogue de téléchargement Replit |
| Résultats de code / terminal | 70% | Résultats dotnetfiddle |
| Diagrammes conceptuels | 50% | Théorie des couleurs, structures de données |
| Exemples de photos | 40-50% | Images de chat python-pixel |
| Petites icônes / badges | 15-25% | Tableaux, petits diagrammes |
| Illustrations décoratives | 20-30% | Illustrations de personnages |
| Images héros | 100% | Page d'accueil `_index.md` uniquement |

**Utilisez des pourcentages, pas des pixels.** Les largeurs en pourcentage sont responsives et s'adaptent aux mobiles et tablettes. Les largeurs en pixels peuvent dépasser sur les écrans plus petits.

```markdown
<!-- Bon : responsive -->
<img src="../media/screenshot.png" alt="Éditeur de code Replit" width="60%">

<!-- À éviter : largeur fixe en pixels -->
<img src="../media/screenshot.png" alt="Éditeur de code Replit" width="900px">
```

## Ajouter des images

### Méthode 1 : Syntaxe Markdown

```markdown
![Description de l'image](../media/filename.png)
```

### Méthode 2 : Balise HTML img (lorsque le contrôle de la largeur est nécessaire)

```html
<img src="../media/filename.png" alt="Description de l'image" width="50%">
```

### Méthode 3 : Raccourci Hugo figure

```
{{</* figure src="../media/filename.png" alt="Description" width="50%" */>}}
```

Le raccourci `figure` enveloppe les images dans un élément `<figure>`. Remarque : la plupart des ateliers existants utilisent les approches Markdown ou HTML ci-dessus. Les anciens ateliers peuvent utiliser `img/` au lieu de `media/` — les deux fonctionnent de manière identique.

## Accessibilité (texte alternatif)

Chaque image **doit** avoir un texte alternatif descriptif. Cela est non négociable.

| À faire | À ne pas faire |
|---------|---------------|
| `alt="Éditeur de code Replit montrant un programme Python hello world"` | `alt="capture d'écran"` |
| `alt="Diagramme des couleurs RVB avec des cercles rouges, verts et bleus qui se chevauchent"` | `alt="image"` |
| `alt=""` (pour les images purement décoratives comme les séparateurs) | `alt="Impossible de charger l'image"` |

Pour les ateliers traduits, le texte alternatif doit être dans la langue de la page :
- Anglais : `alt="A friendly chatbot welcoming users"`
- Portugais : `alt="Um chatbot amigável dando boas-vindas aos usuários"`
- Coréen : `alt="사용자를 환영하는 친근한 챗봇"`

## Nommage des fichiers

- Utilisez des extensions de fichiers en **minuscule** : `.png`, `.jpg`, `.gif` (pas `.PNG`, `.JPG`)
- Utilisez des **noms descriptifs** : `replit-upload-dialog.png` (pas `img1.png`)
- Utilisez des **tirets** pour séparer les mots : `color-theory-diagram.png` (pas `color_theory_diagram.png`)
- Gardez les noms courts mais significatifs

## Emplacement des images

Les nouveaux ateliers doivent utiliser un répertoire `media/` (le script de scaffolding le génère automatiquement). Certains anciens ateliers utilisent `img/` à la place — les deux fonctionnent de la même manière avec Hugo.

```
content/english/my-workshop/
  _index.md
  activity-1.md
  media/             <-- images ici
    screenshot.png
    diagram.png
```

Référez-vous aux images avec des chemins relatifs depuis la page. Dans `_index.md`, utilisez `media/image.png`. Dans les pages d'activités et les corrigés, utilisez `../media/image.png` (elles s'affichent un niveau plus profond dans Hugo).

{{% notice warning %}}
Hugo résout les chemins relatifs depuis l'**URL de la page**, pas l'emplacement dans le système de fichiers. Pour les pages enfants à `/workshop/section/activity/`, le chemin `../media/file.png` se résout en `/workshop/media/file.png`. C'est le modèle correct. Ne "corrigez" pas ces chemins `../` — ils sont intentionnels.
{{% /notice %}}

## GIFs

Les GIFs sont excellents pour montrer de courtes interactions (cliquer sur des boutons, déplacer des éléments). Veillez à ce qu'ils soient :

- **Courts** : 5-15 secondes maximum
- **Petits** : Moins de 2 Mo si possible (les GIFs volumineux ralentissent le chargement de la page)
- **Clairs** : Utilisez un taux de trame raisonnable. Les enregistrements d'écran à 10-15 fps fonctionnent bien.
- **Accessibles** : Ajoutez un texte alternatif décrivant ce que montre le GIF

Envisagez d'utiliser une image statique avec une légende à la place d'un GIF si l'animation n'est pas essentielle à la compréhension.

## Captures d'écran

Lors de la réalisation de captures d'écran pour les ateliers :

1. **Recadrez de près** la zone pertinente
2. **Utilisez un environnement propre** (sans marques-pages personnels, notifications, etc.)
3. **Taille cohérente** dans un atelier (ne mélangez pas des captures 1080p et 4K)
4. **Mettez en évidence la zone pertinente** si la capture d'écran inclut beaucoup d'interface utilisateur