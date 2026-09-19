```markdown
---
title: "Guide du bénévole pour la traduction"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 6
---

Merci de nous aider à rendre les ateliers accessibles à plus d'enfants dans le monde entier ! Ce guide explique comment traduire un atelier existant dans une nouvelle langue.

## Avant de commencer

1. Vérifiez si l'atelier existe déjà dans votre langue cible. Parcourez le répertoire `content/` à la recherche de dossiers de langues :

| Dossier | Langue |
|---------|--------|
| `content/english/` | Anglais |
| `content/espanol/` | Espagnol |
| `content/brazilian-portuguese/` | Portugais brésilien |
| `content/korean/` | Coréen |
| `content/francais/` | Français |
| `content/german/` | Allemand |
| `content/simplified-chinese/` | Chinois simplifié |
| `content/traditional-chinese/` | Chinois traditionnel |
| `content/kyrgyz/` | Kirghiz |

2. Ouvrez une [issue de demande de traduction](https://github.com/NuevoFoundation/workshops/issues/new) sur GitHub afin que les autres sachent que vous travaillez dessus.

## Comment fonctionnent les traductions

Chaque langue dispose de son propre répertoire sous `content/`. La structure des dossiers à l'intérieur de chaque langue reflète la version anglaise :

```
content/
  english/
    python-basics/
      _index.md
      basics/
        writing-to-console.md
      img/
        screenshot.png
  espanol/
    python-basics/
      _index.md
      basics/
        writing-to-console.md
      img/
        screenshot.png
```

## Étapes à suivre

### 1. Copiez l'atelier en anglais

Copiez l'intégralité du dossier de l'atelier anglais vers le répertoire de votre langue cible :

```bash
cp -r content/english/python-basics content/espanol/python-basics
```

### 2. Traduisez le contenu

Pour chaque fichier `.md` :

- **Traduisez** tout le texte visible (titres, paragraphes, instructions, indices)
- **Conservez** tous les clés du frontmatter Hugo en anglais (`title`, `date`, `draft`, `weight`, etc.)
- **Traduisez** les valeurs du frontmatter (`title: "Python: Conceptos básicos"`)
- **Conservez** tous les exemples de code en anglais (le code est universel)
- **Traduisez** les commentaires de code s'ils existent
- **Conservez** tous les chemins de fichiers, références d'images et shortcodes Hugo inchangés
- **Traduisez** les textes alt des images dans la langue cible

### 3. Gérez les images

- **Images partagées** (captures d'écran de code, diagrammes) : Copiez le dossier `img/` ou `media/` en anglais dans votre traduction. Les fichiers d'image sont identiques entre les langues.
- **Images contenant beaucoup de texte** (images contenant du texte en anglais) : Si possible, créez des versions localisées. Sinon, conservez la version anglaise et mentionnez-le dans votre PR.
- **Texte alt** : Traduisez toujours le texte alt dans la langue cible. Les lecteurs d'écran utilisent le réglage de langue de la page.

### 4. Testez localement

```bash
hugo server -D
```

Naviguez vers votre atelier traduit et vérifiez :
- Que toutes les pages se chargent sans erreurs
- Que les images s'affichent correctement
- Que la navigation fonctionne (TOC, suivant/précédent)
- Que les exemples de code restent intacts

### 5. Soumettez votre PR

- Titre : `Traduction : [nom-ateliers] vers [langue]`
- Description : Listez tous les fichiers traduits et toutes les images qui contiennent encore du texte en anglais
- Assurez-vous de traduire **l'ensemble de l'atelier**, pas seulement la page d'accueil

## Conseils

- Parcourez l'atelier comme le ferait un étudiant. Si quelque chose ne semble pas clair dans la traduction, reformulez-le.
- Gardez les phrases courtes et simples. Ces ateliers s'adressent aux enfants de 8 à 18 ans.
- En cas de doute sur un terme technique, conservez le terme en anglais et ajoutez une brève explication dans la langue cible.
- Ne traduisez pas les noms des ateliers dans les URLs ou les noms de dossiers — ils doivent rester en anglais pour le routage Hugo.

## Notes spécifiques aux langues

### Espagnol

- Utilisez la conjugaison du verbe **tú** pour une accessibilité large en Amérique latine (pas de voseo)
- Traduisez les commentaires de code mais conservez les noms de variables et de fonctions en anglais
- Les termes techniques comme "string", "loop", "function" peuvent rester en anglais avec une brève explication en espagnol la première fois qu'ils apparaissent
```