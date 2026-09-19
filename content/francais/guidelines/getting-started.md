---
title: "Commencer"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 2
---

## Prérequis

| Outil | Objectif | Lien d'installation |
|-------|----------|---------------------|
| **Git** | Contrôle de version | [git-scm.com/downloads](https://git-scm.com/downloads) |
| **Hugo (Extended)** | Construire le site de l'atelier | [gohugo.io/installation](https://gohugo.io/installation/) |
| **VS Code** (recommandé) | Éditeur de texte | [code.visualstudio.com](https://code.visualstudio.com/download) |

Nouveau sur Git ? Consultez le guide de démarrage rapide de GitHub [ici](https://docs.github.com/en/get-started/quickstart).

### Installation rapide pour Hugo

**Windows (winget) :**
```
winget install Hugo.Hugo.Extended
```

**macOS (Homebrew) :**
```
brew install hugo
```

**Linux (snap) :**
```
snap install hugo
```

Vérifiez avec `hugo version`. Vous devriez voir une sortie qui inclut **extended**.

## Liens de référence

- [Dépôt GitHub](https://github.com/NuevoFoundation/workshops)
- [Site web des ateliers](https://workshops.nuevofoundation.org/)

## Vidéos explicatives

- [Cycle de développement du dépôt GitHub des ateliers](https://youtu.be/LpjucoAVviI)
- [Structure du dépôt GitHub des ateliers](https://youtu.be/cygmE6LGcOw)

## Forker et cloner le dépôt

Les contributions utilisent le [modèle de fork](https://help.github.com/articles/fork-a-repo/). Vous poussez vos changements sur votre propre fork, puis ouvrez une demande de tirage (pull request) pour les fusionner dans le dépôt principal.

### 1. Forker le dépôt

Cliquez sur **Fork** en haut à droite du <a target="_blank" href="https://github.com/nuevoFoundation/workshops">dépôt workshops</a> :

![Capture d'écran montrant le bouton Fork sur GitHub](/guidelines/media/fork.png)

### 2. Cloner votre fork

Remplacez `[your-username]` par votre nom d'utilisateur GitHub :

```bash
git clone https://github.com/[your-username]/workshops.git
cd workshops
```

### 3. Configurer le dépôt upstream (amont)

Cela vous permettra de récupérer les mises à jour du dépôt principal tout en empêchant les diffusions accidentelles :

```bash
git remote add upstream https://github.com/NuevoFoundation/workshops.git
git remote set-url --push upstream no_push
```

Vérifiez avec `git remote -v` :

```
origin    https://github.com/[your-username]/workshops.git (fetch)
origin    https://github.com/[your-username]/workshops.git (push)
upstream  https://github.com/NuevoFoundation/workshops.git (fetch)
upstream  no_push (push)
```

## Construire et tester en local

Depuis le répertoire `workshops`, exécutez :

```bash
hugo server -D
```

- `-D` inclut les contenus en brouillon afin que vous puissiez prévisualiser le travail en cours.
- Le site se construit en quelques secondes et est accessible à l'adresse **http://localhost:1313/**.
- Hugo surveille les modifications de fichiers et recharge automatiquement votre navigateur.

Pour arrêter le serveur, appuyez sur `Ctrl+C`.

## Garder votre fork à jour

Avant de commencer un nouveau travail, synchronisez avec le dépôt amont :

```bash
git fetch --all --prune
git checkout master
git merge upstream/master
git push origin master
```

## Exemple de parcours

**Scénario** : Effectuer un changement simple et soumettre une demande de tirage (pull request).

### Créer une branche de sujet

Assurez-vous que votre fork est à jour d'abord :

```bash
git checkout master
git checkout -b my-change
git push --set-upstream origin my-change
```

### Effectuer vos modifications

Ouvrez le dossier du dépôt dans VS Code. Naviguez vers le fichier que vous souhaitez modifier. Pour cet exemple, modifiez `content/english/guidelines/getting-started.md`. Pour une meilleure compréhension de la structure des fichiers, consultez [comment le site est construit](../site-architecture/).

### Valider et pousser

```bash
git add content/english/guidelines/getting-started.md
git commit -m "Description de ce qui a changé"
git push
```

**Astuce** : Utilisez `git commit -am "message"` pour préparer tous les fichiers modifiés et les valider en une seule étape.

### Ouvrir une demande de tirage

Naviguez vers votre fork sur GitHub. Vous devriez voir une invite pour créer une demande de tirage à partir de votre dernier push :

![Capture d'écran montrant le bouton Compare and Pull Request sur GitHub](/guidelines/media/compare-and-pull.png)

Si vous ne voyez pas l'invite, allez dans **Pull Requests > New pull request** :

![Capture d'écran montrant le bouton New Pull Request sur GitHub](/guidelines/media/create-new-pr.png)

Assurez-vous que votre branche de base (cible) et votre branche d'origine (source) sont correctes, ajoutez un titre et une description, puis soumettez.

## Créer un nouvel atelier ?

Utilisez toujours le script scaffold pour générer la structure de répertoire et les modèles corrects. Ne créez pas de fichiers d'atelier manuellement.

```bash
python tools/new-workshop.py --name "my-workshop" --title "My Workshop" \
  --coding-language python --topics programming-basics
```

Consultez les [Lignes directrices pour créer un nouvel atelier](../new-workshops/) pour le tutoriel complet, les options et la checklist avant la demande de tirage (pull request).