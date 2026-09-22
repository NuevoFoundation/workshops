---
title: "Salle 5 : Le Canyon des Conflits"
description: "Apprenez à résoudre les conflits de fusion et à synchroniser avec le dépôt en amont."
difficulties: ["avancé"]
weight: 5
---

# Salle 5 : Le Canyon des Conflits

Vous entrez dans une salle avec un gouffre profond. Deux ponts s'étendent de chaque côté, mais ne se rejoignent pas tout à fait au centre. Une pancarte indique : "Ce n'est qu'en résolvant les conflits que vous pourrez traverser."

## Votre Mission

1. Récupérez les dernières modifications du dépôt d'origine.  
2. Résolvez le conflit de fusion qui apparaît.  
3. Validez la résolution et poussez les modifications.  

## Instructions

1. Ajoutez le dépôt d'origine comme un dépôt distant :

```
git remote add upstream https://github.com/CodeDungeon/escape-room.git
```

2. Récupérez et fusionnez les modifications :  

```
git fetch upstream
git merge upstream/main
```

3. Vous verrez un conflit de fusion. Ouvrez le(s) fichier(s) en conflit et résolvez les conflits.  
4. Après avoir résolu les conflits, mettez en scène, validez et poussez :  

```
git add .
git commit -m "Résoudre le conflit de fusion"
git push origin main
```

{{< notice info >}}
**Astuce :** Recherchez les marqueurs de conflit (`<<<<<<<`, `=======`, `>>>>>>>`) dans les fichiers. Choisissez quelles modifications conserver ou combinez-les selon le besoin.
{{< /notice >}}

{{< expand "Exemple d'un Conflit de Fusion" >}}
```diff
<<<<<<< HEAD
Voici un contenu provenant de votre branche actuelle.
=======
Voici un contenu en conflit provenant de la branche que vous fusionnez.
>>>>>>> upstream/main
{{< /expand >}}

<label for="finput">Après avoir résolu le conflit, quelle était la ligne finale du fichier en conflit ? Entrez-la ci-dessous :</label><br>
<input type="text" id="finput" name="finput"><br>

{{< notice success >}}
Travail exceptionnel ! Vous avez conquis le Canyon des Conflits et terminé tous les défis. Vous êtes désormais un maître de GitHub !
{{< /notice >}}