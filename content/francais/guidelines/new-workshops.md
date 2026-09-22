---
title: "Créer un nouvel atelier"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 2
---

Ce guide vous accompagne dans la création d'un nouvel atelier, de l'idée à la demande de pull. Avant de commencer, complétez la configuration de [Pour bien commencer](../getting-started/) (Git, Hugo, fork) et lisez l'aperçu de [l'architecture du site](../site-architecture/).

## Notre philosophie

Les ateliers de la Fondation Nuevo doivent ressembler à des **aventures guidées**, et non à des manuels scolaires. Chaque atelier raconte une histoire que les élèves suivent à leur propre rythme. Les meilleurs ateliers sont :

- **Basés sur une histoire** : les élèves suivent un personnage en mission (Benji le chien a besoin d'un site web, Alex l'abeille a besoin d'un rayon de miel, DJ Nuvi doit créer un mix à succès)
- **Personnalisables** : les élèves peuvent facilement changer le thème pour l'adapter à leurs intérêts (leur animal au lieu de Benji, leur pays au lieu du Costa Rica)
- **En autonomie** : suffisamment clairs pour que les élèves puissent travailler seuls, même lorsque l'enseignant s'absente
- **Progressifs** : les activités s'enchaînent les unes après les autres, un concept à la fois
- **Amusants** : ton encourageant, mascottes sympas, récompenses visuelles et célébration à la fin

## S'inspirer de nos meilleurs ateliers

Étudiez ces ateliers exemplaires avant de créer le vôtre :

### Les bases du web (HTML/CSS) — [content/english/web-basics/](https://github.com/NuevoFoundation/workshops/tree/master/content/english/web-basics)

- **Thème** : Aider Benji le chien (déplacé par l'ouragan Harvey) à trouver son foyer définitif en lui créant un site web
- **Pourquoi ça marche** : accroche émotionnelle, vidéo YouTube sur chaque page, intégrations CodePen pour coder directement, l'activité 5 permet aux élèves de créer leur propre site, déploiement réel avec GitHub Pages
- **Modèle clé** : narration → concept → vidéo → tableau de références → exercice pratique

### Python turtle — [content/english/python-turtle/](https://github.com/NuevoFoundation/workshops/tree/master/content/english/python-turtle)

- **Thème** : Aider Alex l'abeille à construire son domicile en nid d'abeille avec des dessins en Python
- **Pourquoi ça marche** : 11 vidéos YouTube, intégration de l'IDE Codebunga, résultats visuels (les élèves VOIENT leur code dessiner des formes), complexité progressive (ligne → carré → hexagone → nid d'abeille → fleur mandala)
- **Modèle clé** : contexte narratif → vidéo → exemple de code → intéractif avec Codebunga → défi

### EarSketch (blocs Python et JS) — [content/english/python-earsketch/](https://github.com/NuevoFoundation/workshops/tree/master/content/english/python-earsketch)

- **Thème** : Aider DJ Nuvi à produire un mix musical à succès grâce au code
- **Pourquoi ça marche** : les élèves ÉCOUTENT leur code (musique !), retour audible immédiat, outil professionnel (Georgia Tech), liberté de création dans les choix sonores
- **Modèle clé** : concept musical → concept de code → construction → écoute → itération

## Créer un atelier avec Copilot

Ce dépôt inclut la compétence `workshop-builder` pour GitHub Copilot CLI.  
La compétence lit ces lignes directrices, étudie un atelier existant pertinent, utilise le script de modèle, rédige le contenu et exécute les vérifications nécessaires pour la publication.

Lancez Copilot CLI depuis la racine du dépôt :

```bash
copilot
```

Si la compétence a été ajoutée pendant que Copilot fonctionnait déjà, rechargez les compétences du projet :

```text
/skills reload
```

Confirmez que Copilot l'a détecté :

```text
/skills info workshop-builder
```

Ensuite, incluez le nom de la compétence et un bref résumé de l'atelier dans la demande :

```text
Utilisez la compétence /workshop-builder pour créer un atelier Python débutant de 45 minutes pour les 10–13 ans. Il doit fonctionner dans un navigateur et enseigner les variables, les entrées et les instructions conditionnelles à travers une histoire de sauvetage de robot.
```

La compétence utilise un questionnaire standard pour collecter les informations suivantes : titre, tranche d'âge, durée, expérience en codage préalable, résultats d'apprentissage, langage de programmation, format (présentiel ou virtuel), nombre d'activités, histoire, et exigences spéciales. Elle demande toutes les informations manquantes en une seule fois avant de créer les fichiers. Si le nombre d'activités demandé semble dépasser le temps disponible, la compétence signale l'estimation mais respecte le nombre demandé par l'utilisateur.

Copilot peut également sélectionner automatiquement la compétence si la demande propose clairement de créer, réviser ou examiner un atelier de la Fondation Nuevo.

## Étape 1 : préparer la structure de votre atelier

Utilisez le script de modèle pour générer la structure de répertoire appropriée ainsi que des fichiers modèles. Ne créez pas manuellement les fichiers d'atelier — le modèle garantit un frontmatter Hugo correct, un nommage des fichiers correct et une structure de répertoires appropriée.

**Exigence :** Python 3.7 ou supérieur. Vérifiez avec `python --version` (ou `python3 --version` sur macOS/Linux).

Exécutez cette commande depuis la racine du dépôt des ateliers :

```bash
python tools/new-workshop.py --name "my-workshop" --title "Mon Atelier" \
  --coding-language python --topics programming-basics
```

Utilisez `--dry-run` en premier pour prévisualiser ce qui serait créé sans écriture de fichiers :

```bash
python tools/new-workshop.py --name "my-workshop" --title "Mon Atelier" \
  --coding-language python --topics programming-basics --dry-run
```

Cela génère la structure de base standard :

```
content/english/my-workshop/
├── _index.md          ← Page d'accueil (intro, prérequis, plan)
├── activity-1.md      ← Première activité
├── activity-2.md      ← Deuxième activité
├── activity-3.md      ← Troisième activité
├── answer-key.md      ← Solution (cachée de la navigation)
└── media/
    └── .gitkeep       ← Dossier pour les captures d'écran et images
```

### Options du modèle

| Option | Défaut | Description |
|--------|---------|-------------|
| `--name` | (requis) | Nom du dossier en kebab-case (ex. `python-web